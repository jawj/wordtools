import m from 'mithril';
import { Nav } from './Nav';
import { stringWithCommas } from './util';
import { credits, waitingMessage } from './common';
import wrappedWorker from './wrappedWorker';

const
  emptyValue = '-',
  itemsPerPage = 2000;

interface PatternAttrs {
  pattern: string | undefined;
  order: 'freq' | 'length' | 'a-z';
  direction: 'asc' | 'desc',
  list: 'multi' | 'single',
  page: `${number}`;
}

export function Pattern() {
  let
    currentPattern: PatternAttrs['pattern'] = '',
    currentOrder: PatternAttrs['order'] | undefined,
    currentDirection: PatternAttrs['direction'],
    currentList: PatternAttrs['list'],
    currentPage: PatternAttrs['page'],
    dictionarySize: number = 0,
    loading = true,
    working = false,
    results: string[] = [],
    count = 0;

  async function updateMatches(vnode: m.VnodeDOM<PatternAttrs>) {
    const { pattern, order, direction, list, page } = vnode.attrs;
    if (pattern === currentPattern && order === currentOrder && direction === currentDirection && list === currentList && page === currentPage) return;

    currentPattern = pattern;
    currentOrder = order;
    currentDirection = direction;
    currentList = list;
    currentPage = page;

    working = true;
    m.redraw();

    const
      firstIndex = (parseInt(page, 10) - 1) * itemsPerPage,
      matches = await wrappedWorker.wordsMatchingPattern(pattern!, order, direction, firstIndex, itemsPerPage, list === 'multi');

    results = matches.results;
    count = matches.count;

    working = false;
    m.redraw();
  }

  function orderRadio(order: string, direction: string, label: string, params: Record<string, any>) {
    return m('label',
      m('input', {
        type: 'radio',
        name: 'order',
        checked: currentOrder === order && currentDirection === direction,
        onchange: () => m.route.set('/pattern/:pattern/:list/:order/:direction/:page', { ...params, order, direction, page: 1 })
      }),
      label
    );
  }

  function multiRadio(list: 'multi' | 'single', label: string, params: Record<string, any>) {
    return m('label',
      m('input', {
        type: 'radio',
        name: 'multi',
        checked: currentList === list,
        onchange: () => m.route.set('/pattern/:pattern/:list/:order/:direction/:page', { ...params, list, page: 1 })
      }),
      label
    );
  }

  function paginationControls(page: number, lastPage: number, linkFn: (page: number) => m.Vnode<any, any>) {
    return lastPage > 1 && m('.pagination',
      [1, page - 1, page, page + 1, lastPage]
        .filter(p => p >= 1 && p <= lastPage)  // don't show pages outside valid range
        .filter((p, i, arr) => p !== arr[i - 1])  // don't show the same page twice
        .reduce((memo: m.Vnode[], p, i, arr) => {
          if (i > 0 && arr[i - 1] !== p - 1) memo.push(m('span.ellipsis', m.trust('&hellip;')));
          memo.push(linkFn(p));
          return memo;
        }, [])
    );
  }

  return {
    async oninit() {
      dictionarySize = await wrappedWorker.getWordsCount();  // side effect: loads words!
      loading = false;
      m.redraw();
    },
    oncreate: updateMatches,
    onupdate: updateMatches,
    view(vnode: m.Vnode<PatternAttrs>) {
      const
        pattern = vnode.attrs.pattern === emptyValue ? '' : vnode.attrs.pattern,
        page = parseInt(vnode.attrs.page, 10),
        lastPage = Math.ceil(count / itemsPerPage),
        firstOnPage = (page - 1) * itemsPerPage,
        lastOnPage = Math.min(firstOnPage + itemsPerPage - 1, count),
        pagination = () => paginationControls(page, lastPage,
          p => m(m.route.Link, {
            href: '/pattern/:pattern/:list/:order/:direction/:page',
            selector: p === page ? 'a.current' : 'a',
            params: { ...vnode.attrs, page: p },
          }, String(p))
        ),
        example = (pattern: string, orderDir = 'freq/desc') =>
          m(m.route.Link, { href: `/pattern/${encodeURIComponent(pattern)}/single/${orderDir}/1`, selector: 'a.example' }, pattern),
        rURL = 'http://economicspsychologypolicy.blogspot.com/2013/10/lecture-summary-judgement-heuristics.html',
        nbspdash = m.trust(' —&nbsp;'),
        examples = [
          m('h4', 'Examples'),
          m('ul',
            m('li', example('...s.w.r.'), ', ', example('*tz'), ', ', example('*yx'), ' or ', example('*sh.p*sh.p*')),
            m('li', example('*a*e*i*o*u*', 'length/asc'), nbspdash, 'all vowels in order'),
            m('li', example('r..*'), ' and ', example('..r*'), nbspdash, m('a', { href: rURL, target: '_blank' }, 'r first vs. r third')),
            m('li', example('*', 'length/desc'), nbspdash, 'longest'),
          ),
          m('h4', 'Advanced examples'),
          m('ul',
            m('li', example('~(^|[^c])ei'), nbspdash, 'i before e except after c, except …'),
            m('li', example('~q([^u]|$)'), nbspdash, 'q, no u'),
            m('li', example('~[aeiou]{4}$'), nbspdash, '4 vowels at end'),
            m('li', example('~(.{4,})\\1'), nbspdash, '4+ letters repeating'),
            m('li', example('~^(.)(.?)(.?)(.?).?\\4\\3\\2\\1$', 'length/desc'), nbspdash, 'palindromes'),
          )
        ];

      return m('.page',
        m(Nav, { page: 'pattern' }),
        m('.pattern',
          m('h2', 'Find words with unknown letters'),
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
                  value: pattern,
                  onchange: (e: { currentTarget: HTMLInputElement; }) => {
                    const { value } = e.currentTarget;
                    m.route.set('/pattern/:pattern/:list/:order/:direction/1', { ...vnode.attrs, pattern: value });
                  }
                }),
                m('button', 'Find'),
                m('.instructions',
                  m('h4', 'Wildcards'),
                  m('div', m.trust(`Use <span class="letter">.</span> or <span class="letter">?</span> for each unknown letter`)),
                  m('div', m.trust(`Use <span class="letter">*</span> for any number of unknowns`)),
                  m('div', m.trust(`<i>Advanced:</i> prefix <span class="letter">~</span> to use a <a href="https://cs.lmu.edu/~ray/notes/regex/" target="_blank">regex</a>`)),
                ),
                m('.list',
                  m('h4', 'Search'),
                  m('div', multiRadio('single', ' Single words', vnode.attrs), multiRadio('multi', ' Multiple words', vnode.attrs)),
                ),
                m('.order',
                  m('h4', 'Show first'),
                  m('div', orderRadio('freq', 'desc', ' Common words', vnode.attrs), orderRadio('freq', 'asc', ' Obscure words', vnode.attrs)),
                  m('div', orderRadio('length', 'asc', ' Short words', vnode.attrs), orderRadio('length', 'desc', ' Long words', vnode.attrs)),
                  m('div', orderRadio('a-z', 'asc', ' A – Z', vnode.attrs), orderRadio('a-z', 'desc', ' Z – A', vnode.attrs)),
                ),
                m('.message',
                  !pattern ? 'Please enter a search pattern above' :
                    working ? waitingMessage('Searching') :
                      count < 0 ? results[0] :
                        count > 0 ? `${stringWithCommas(count)} words found` +
                          (count > itemsPerPage ? ` (showing ${stringWithCommas(firstOnPage)} – ${stringWithCommas(lastOnPage)})` : '') :
                          'No matching words found'),
                !pattern && examples,
                count > 0 && working === false && [
                  pagination(),
                  m('.matches', results.map(r =>
                    m('a.match', { href: `https://www.google.com/search?q="${r}"+definition`, target: '_blank' }, r)
                  )),
                  pagination(),
                ],
              ),
              credits(dictionarySize)
            )
        ));
    },
  };
}
