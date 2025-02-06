import m from 'mithril';
import { Nav } from './Nav';
import wrappedWorker from './wrappedWorker';
import { credits, waitingMessage } from './common';
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
  let dictionarySize = 0;

  let status: Awaited<ReturnType<typeof wrappedWorker.status>>;

  async function update() {
    status = await wrappedWorker.status(showWhileActive);

    if (status.finished) active = false;
    m.redraw();

    if (active) setTimeout(update, 250);
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
                    m.route.set(
                      '/anagram/:letters',
                      { ...vnode.attrs, letters: value === '' ? '-' : value },
                    );
                  }
                }),
                active ? [
                  m('button', {
                    onclick: async () => {
                      await wrappedWorker.abort();
                      update();
                    }
                  }, 'Stop'),
                  m('.progress', waitingMessage(`${stringWithCommas(status.evaluated)} evaluated` + (status.evaluated > showWhileActive ? `, ${showWhileActive} shown` : ''))),
                ] : [
                  m('button', {
                    onclick: () => setTimeout(() => {  // time to update attrs.letters!
                      void wrappedWorker.find(vnode.attrs.letters, showWhenInactive);
                      active = true;
                      update();
                    }, 0)
                  }, 'Find'),
                  status.evaluated !== 0 && m('.progress',
                    `${stringWithCommas(status.evaluated)} found` + (status.evaluated > showWhenInactive ? `, ${showWhenInactive} kept` : '')
                  ),
                ]
              ),

              m('.matches', status.anagrams.map(a => m('span.match', a[0].join(' ')))),
            ),
          credits(dictionarySize)
        )
      );
    },
    async oninit() {
      dictionarySize = await wrappedWorker.getWordsCount();
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
