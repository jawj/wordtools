import m from 'mithril';
import { Nav } from './Nav';
import wrappedWorker from './wrappedWorker';
import { credits, waitingMessage } from './common';
import { stringWithCommas } from './util';
import type { AnagramStatus, Anagram } from './anag';
import * as comlink from 'comlink';

interface AnagramAttrs {
  letters: string;
}

const emptyValue = '-';
const keepN = 10_000;
const reportEveryN = 456_789;

function groupByLength(anagrams: Anagram[], max = 10) {
  const groups: Anagram[][] = [];
  for (let i = 0; i <= max; i++) groups.push([]);
  for (const anagram of anagrams) {
    const [{ length }] = anagram;
    groups[length > max ? max : length].push(anagram);
  }
  return groups;
}

export function Anagram(vnode: m.Vnode<AnagramAttrs>) {
  let loading = true;
  let dictionarySize = 0;
  let groupByWordCount = false;

  let status: AnagramStatus = {
    evaluated: 0,
    working: false,
    anagrams: [],
  };

  function start() {
    status.working = true;
    const letters = (document.querySelector('#anag-input') as HTMLInputElement).value;
    void wrappedWorker.find(letters, keepN, reportEveryN, comlink.proxy(async newStatus => {
      const prevStatus = status;
      status = newStatus;
      m.redraw();
      return !prevStatus.working;
    }));
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
                m('input#anag-input', {
                  type: 'search',
                  autocorrect: 'off',
                  autocomplete: 'off',
                  autocapitalize: 'none',
                  spellcheck: false,
                  size: 15,
                  value: letters,
                  onchange(e: { currentTarget: HTMLInputElement; }) {
                    const { value } = e.currentTarget;
                    m.route.set(
                      '/anagram/:letters',
                      { ...vnode.attrs, letters: value === '' ? '-' : value },
                    );
                  },
                  onkeyup(e: any) {
                    if (e.key === 'Enter') {
                      if (status.working) status.working = false;
                      else start()
                    }
                    e.redraw = false;
                  }
                }),
                status.working ? [
                  // Stop button
                  m('button', {
                    onclick() {
                      status.working = false;
                    }
                  }, 'Stop'),
                  m('.progress', waitingMessage(
                    `${stringWithCommas(status.evaluated)} evaluated` +
                    (status.evaluated > keepN ? `, ${stringWithCommas(keepN)} kept` : '')
                  )),
                ] : [
                  // Find button
                  m('button', { onclick: start }, 'Find'),
                  status.evaluated !== 0 && m('.progress',
                    `${stringWithCommas(status.evaluated)} found` +
                    (status.evaluated > keepN ? `, ${stringWithCommas(keepN)} kept` : '')
                  ),
                ]
              ),
              m('#grouping', m('label', m('input[type=checkbox]', {
                checked: groupByWordCount,
                onchange(e: { currentTarget: HTMLInputElement; }) {
                  groupByWordCount = e.currentTarget.checked;
                }
              }), ' Group by word count')),
              m('.matches',
                groupByWordCount ?
                  groupByLength(status.anagrams).map((group, wordCount) => group.length > 0 && [
                    m('h3', `${wordCount} words`),
                    group.map(a => m('span.match', a[0].join(' ')))
                  ]) :
                  status.anagrams.map(a => m('span.match', a[0].join(' ')))
              ),
            ),
          credits(dictionarySize, ' Anagrams are retained and displayed based on their least common word, sorted from most to least common. In addition, anagrams with fewer words are preferred.'),
        )
      );
    },
    async oninit() {
      dictionarySize = await wrappedWorker.getWordsCount();
      loading = false;
      m.redraw();
    },
    onremove() {
      status.working = false;
    }
  }
};
