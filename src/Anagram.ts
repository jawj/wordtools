import m from 'mithril';
import { Nav } from './Nav';
import wrappedWorker from './wrappedWorker';
import { waitingMessage } from './common';
import { stringWithCommas } from './util';

interface AnagramAttrs {
  letters: string;
}

const emptyValue = '-';
const showWhileActive = 100;
const showWhenInactive = 10000;

export function Anagram(vnode: m.Vnode<AnagramAttrs>) {
  let loading = true;
  let active = false;

  let evaluated: number;
  let anags: [string[], number][];
  let finished: boolean;

  async function update() {
    evaluated = await wrappedWorker.evaluated();
    finished = await wrappedWorker.finished();
    if (finished) active = false;
    anags = await wrappedWorker.anagrams(active ? showWhileActive : Infinity);
    m.redraw();
  }

  return {
    view(vnode: m.Vnode<AnagramAttrs>) {
      let letters = vnode.attrs.letters === emptyValue ? '' : vnode.attrs.letters;

      return m('.page',
        m(Nav, { page: 'anagram' }),
        m('.pattern',
          m('h2', 'Find anagrams'),
          loading ? m('.message', waitingMessage('Loading dictionary')) :
            m('.interface',
              m('.pattern-entry',
                m('input.anag-input', {
                  type: 'search',
                  autocorrect: 'off',
                  autocomplete: 'off',
                  autocapitalize: 'none',
                  spellcheck: false,
                  size: 15,
                  value: letters,
                  onchange: (e: { currentTarget: HTMLInputElement; }) => {
                    const { value } = e.currentTarget;
                    m.route.set('/anagram/:letters', { ...vnode.attrs, letters: value });
                  }
                }),
                active ? [
                  m('button', {
                    onclick: async () => {
                      await wrappedWorker.abort();
                      update();
                    }
                  }, 'Cancel'),
                  m('.progress', waitingMessage(`${stringWithCommas(evaluated)} anagrams evaluated, showing top ${showWhileActive}`)),
                ] : [
                  m('button', {
                    onclick: async () => {
                      void wrappedWorker.find(vnode.attrs.letters, showWhenInactive);
                      active = true;
                      while (active) await update();
                    }
                  }, 'Find'),
                  m('button.secondary', {
                    onclick: () => m.route.set('/anagram/-')
                  }, 'Clear'),
                  evaluated !== 0 && m('.progress', `${stringWithCommas(evaluated)} anagrams found, top ${showWhenInactive} retained`),
                ]
              ),

              m('.matches', anags.map(a => m('span.match', a[0].join(' ')))),
            )
        )
      );
    },
    async oninit() {
      await wrappedWorker.getWordsCount();  // side effect: loads words!
      loading = false;
      m.redraw();
    },
    async oncreate() {
      update();
    },
    onremove() {
      active = false;
    }
  }
};
