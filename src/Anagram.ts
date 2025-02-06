import m from 'mithril';
import { Nav } from './Nav';
import wrappedWorker from './wrappedWorker';
import { waitingMessage } from './common';

interface AnagramAttrs {
  letters: string;
}

const emptyValue = '-';

export function Anagram(vnode: m.Vnode<AnagramAttrs>) {
  let loading = true;


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
                m('input.pattern-input', {
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
                m('button', 'Find'),
                m('button.secondary', { onclick: () => m.route.set('/anagram/-') }, 'Clear'),
              )
            )
        )
      );
    },
    async oninit() {
      await wrappedWorker.getWordsCount();  // side effect: loads words!
      loading = false;
      m.redraw();
    },
  }
};
