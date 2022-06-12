import m from 'mithril';
import { stringWithCommas } from './util';
import { getWordWeights } from './words';
import wordsMatchingPattern from './wordsMatchingPattern';

const
  emptyValue = '-',
  itemsPerPage = 1000;

interface PatternAttrs {
  pattern: string | undefined;
  order: 'common' | 'short' | 'a-z';
  page: `${number}`;
}

export function Pattern() {
  let
    currentPattern: PatternAttrs['pattern'] = '',
    currentOrder: PatternAttrs['order'] | undefined,
    dictionarySize: number = 0,
    loading = true,
    working = false,
    matches: string[] = [];

  function updateMatches(vnode: m.VnodeDOM<PatternAttrs>) {
    let { pattern, order } = vnode.attrs;
    if (pattern === currentPattern && order === currentOrder) return;

    currentPattern = pattern;
    currentOrder = order;

    working = true;
    matches = [];
    m.redraw();

    setTimeout(async () => {
      if (pattern) matches = await wordsMatchingPattern(pattern, order);
      working = false;
      m.redraw();
    }, 0);
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
          m.route.set('/pattern/:pattern/:order/0', { pattern: currentPattern || emptyValue, order: value });
        }
      }),
      label
    ));
  }

  function showExample() {
    m.route.set('/pattern/p.tt*/common/0');
    return false;
  };

  return {
    view: (vnode: m.Vnode<PatternAttrs>) => {
      const
        pattern = vnode.attrs.pattern === emptyValue ? '' : vnode.attrs.pattern,
        page = parseInt(vnode.attrs.page, 10),
        firstOnPage = page * itemsPerPage,
        lastOnPage = firstOnPage + itemsPerPage;

      return m('.pattern',
        m('h2', 'Find words with unknown letters'),
        loading ? m('.message', 'Loading dictionary ...') :
          m('.interface',
            m('.pattern-entry',
              m('input.pattern-input', {
                type: 'search',
                autocorrect: 'off',
                autocomplete: 'off',
                autocapitalize: 'none',
                spellcheck: false,
                size: 15,
                value: pattern,
                onchange: (e: { currentTarget: HTMLInputElement; }) => {
                  const { value } = e.currentTarget;
                  m.route.set('/pattern/:pattern/:order/0', { pattern: value, order: currentOrder });
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
                !pattern ? ['Please enter a search pattern above (',
                  m('a', { href: '#', onclick: showExample }, m.trust('see&nbsp;example')), ')'] :
                  working ? 'Searching ...' :
                    matches.length ? `${stringWithCommas(matches.length)} matching words found` +
                      (matches.length > itemsPerPage ? ` (showing ${stringWithCommas(firstOnPage)} – ${stringWithCommas(lastOnPage - 1)})` : '') :
                      'No matching words found'),
              m('.matches', matches.slice(firstOnPage, lastOnPage).map(r =>
                m('a.match', { href: `https://www.google.com/search?q=${r}+definition`, target: '_blank' }, r)
              )),
              m('.navigation',
                page > 0 && m('a.prev', {
                  href: '#',
                  onclick: () => {
                    m.route.set('/pattern/:pattern/:order/:page', { ...vnode.attrs, page: page - 1 });
                    window.scrollTo(0, 0);
                    return false;
                  }
                }, m.trust('&laquo; Previous')),
                m.trust(' &nbsp; '),
                lastOnPage < matches.length && m('a.next', {
                  href: '#',
                  onclick: () => {
                    m.route.set('/pattern/:pattern/:order/:page', { ...vnode.attrs, page: page + 1 });
                    window.scrollTo(0, 0);
                    return false;
                  }
                }, m.trust('Next &raquo;'))
              )
            ),
            m('.credits', m.trust(`We use a dictionary of ${stringWithCommas(dictionarySize)} names and English word
s derived from 
            <a href="http://aspell.net/">aspell</a>,
            <a href="http://web.mit.edu/freebsd/head/share/dict/">web2</a>,
            <a href="https://en.wikpedia.org">Wikipedia</a> and
            <a href="http://crr.ugent.be/archives/2045">Brysbaert et al.</a>.
            Many of these aren't valid in word games.`))
          )
      );
    },
    oncreate: updateMatches,
    onupdate: updateMatches,
    oninit: async () => {
      const words = await getWordWeights();
      dictionarySize = Object.keys(words).length;
      loading = false;
      m.redraw();
    },
  };
}
