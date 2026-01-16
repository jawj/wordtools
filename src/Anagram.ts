import m from 'mithril';
import { Nav } from './Nav';
import wrappedWorker from './wrappedWorker';
import { credits, waitingMessage } from './common';
import { stringWithCommas } from './util';
import type { AnagramStatus, Anagram } from './anag';
import * as comlink from 'comlink';
import { standardise } from './words';

interface AnagramAttrs {
  letters: string;
}

const emptyValue = '-';
const keepN = 10_000;
const reportEveryN = 876_543;

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
  let groupByWordCount = false;

  let status: AnagramStatus = {
    evaluated: 0,
    working: false,
    anagrams: [],
  };

  function start() {
    const letters = standardise((document.querySelector('#anag-input') as HTMLInputElement).value);
    if (letters) {
      status.working = true;
      void wrappedWorker.find(letters, keepN, reportEveryN, comlink.proxy(async newStatus => {
        const prevStatus = status;
        status = newStatus;
        m.redraw();
        return !prevStatus.working;
      }));
    }
  }

  return {
    oncreate(vnode: m.Vnode<AnagramAttrs>) {
      const letters = standardise(vnode.attrs.letters);
      if (letters && letters !== emptyValue) start();
    },
    view(vnode: m.Vnode<AnagramAttrs>) {
      let letters = vnode.attrs.letters === emptyValue ? '' : vnode.attrs.letters;

      return m('.page',
        m(Nav, { page: 'anagram' }),
        m('.pattern',
          m('h2', 'Find anagrams'),
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
                disabled: status.working,
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
          credits(' Anagrams are retained and ranked by preferring those where the least common word is more common, those with fewer words, and (only very slightly) those where the mean word is more common.'),
        )
      );
    },
    onremove() {
      status.working = false;
    }
  }
};
