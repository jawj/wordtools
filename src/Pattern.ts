import m from 'mithril';
import wordsMatchingPattern from './wordsMatchingPattern';
import { loadWords } from './words';

interface PatternAttrs {
  pattern: string | undefined;
  order: 'common' | 'short' | 'a-z';
}

export function Pattern() {
  let
    dictionarySize: number = 0,
    currentPattern: PatternAttrs['pattern'] = '',
    currentOrder: PatternAttrs['order'] | undefined,
    loading = true,
    searching = false,
    matches: string[] = [];

  async function updateMatches(vnode: m.VnodeDOM<PatternAttrs>) {
    const { pattern, order } = vnode.attrs;
    if (pattern === currentPattern && order === currentOrder) return;

    currentPattern = pattern;
    currentOrder = order;

    searching = true;
    matches = [];
    m.redraw();

    setTimeout(async () => {
      if (pattern) matches = await wordsMatchingPattern(pattern, order);
      searching = false;
      m.redraw();
    }, 100);
  }

  function orderRadio(value: string, label: string) {
    return m('dd', m('label',
      m('input', {
        type: 'radio',
        name: 'order',
        value,
        checked: currentOrder === value,
        onchange: (e: { currentTarget: HTMLInputElement; }) => {
          const { value } = e.currentTarget;
          if (currentPattern) m.route.set('/pattern/:order/:pattern', { order: value, pattern: currentPattern });
          else m.route.set('/pattern/:order', { order: value });
        }
      }),
      label
    ));
  }

  return {
    view: (vnode: m.Vnode<PatternAttrs>) => m('.pattern',
      m('h2', 'Find words with unknown letters'),
      loading ? m('.message', 'Loading dictionary ...') :
        m('.interface',
          m('input.pattern-input', {
            type: 'search',
            autocorrect: 'off',
            autocomplete: 'off',
            autocapitalize: 'none',
            spellcheck: false,
            size: 15,
            value: vnode.attrs.pattern,
            onchange: (e: { currentTarget: HTMLInputElement; }) => {
              const { value } = e.currentTarget;
              m.route.set('/pattern/:order/:pattern', { order: currentOrder, pattern: value });
            }
          }),
          m('button', 'Find'),
          m('dl.instructions',
            m('dt', 'Wildcards'),
            m('dd', m.trust(`Use <span class="letter">.</span> or <span class="letter">?</span> for each unknown letter`)),
            m('dd', m.trust(`Use <span class="letter">*</span> for unknown numbers of them`)),
          ),
          m('dl.order',
            m('dt', 'Show first'),
            orderRadio('common', ' Commonest words'),
            orderRadio('short', ' Shortest words'),
            orderRadio('a-z', ' A – Z')
          ),
          m('.message',
            !currentPattern ? [
              'Please enter a search pattern above (',
              m('a', { href: '#', onclick: () => { m.route.set('/pattern/common/p.tt*'); return false; } }, m.trust('see&nbsp;example')),
              ')'
            ] :
              searching ? 'Finding and sorting ...' :
                matches.length ? `${matches.length} matching words found` :
                  'No matching words found'),
          m('.matches', matches.map(r =>
            m('a.match', { href: `https://www.google.com/search?q=${r}+definition`, target: '_blank' }, r))),
          m('.credits', m.trust(`We use a dictionary of ${String(dictionarySize).replace(/\d(?=(\d{3})+\b)/g, '$&,')} names and English words derived from 
            <a href="http://aspell.net/">aspell</a>,
            <a href="http://web.mit.edu/freebsd/head/share/dict/">web2</a>,
            <a href="https://en.wikpedia.org">Wikipedia</a> and
            <a href="http://crr.ugent.be/archives/2045">Brysbaert et al.</a>.
            Many of these aren't valid in word games.`))
        )
    ),
    oncreate: updateMatches,
    onupdate: updateMatches,
    oninit: async () => {
      const words = await loadWords();
      dictionarySize = Object.keys(words).length;
      loading = false;
      m.redraw();
    },
  };
}
