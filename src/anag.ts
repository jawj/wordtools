
import { getWordWeights, standardise } from './words';

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

const alphabetise = (s: string) => s.split('').sort().join('');
const wait = (delayMs: number) => new Promise(resolve => setTimeout(resolve, delayMs));


// setup

let hash: Record<string, string[]>;
async function getHash() {
  if (!hash) {
    console.log('Generating anagram data structures ...');
    hash = {};
    const words = await getWordWeights();
    for (const word in words) {
      const alphabetical = alphabetise(word);
      if (!hash[alphabetical]) hash[alphabetical] = [];
      hash[alphabetical].push(word);
    }
    console.log('Generated');
  }
  return hash;
}

// splitting

function bitCount(n: number) {
  n = (n | 0) - ((n >>> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >>> 2) & 0x33333333);
  return ((n + (n >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
}

type DupeMask = [shift: number, mask: number];

export function dupeMasksForString(s: string) {
  const
    dupeRe = /(.)\1+/g,
    dupes: DupeMask[] = [];

  let match;
  while ((match = dupeRe.exec(s))) {
    const
      firstPos = match.index,
      { length } = match[0];

    dupes.push([firstPos, (1 << length) - 1]);
  }

  return dupes;
}

export function* comboMasksWithDupeMasks(n: number, dupeMasks: DupeMask[], index = -1, current = 0): Generator<number> {
  if (index === n) return;

  let isDupe = false;
  for (const dm of dupeMasks) {
    const masked = (current >> dm[0]) & dm[1];
    if (masked === 0) continue;  // none of the repeated letters are present, so no issue

    const canonical = (1 << bitCount(masked)) - 1;
    if (masked === canonical) continue;  // repeated letters occur in canonical form, so no issue

    isDupe = true;
    break;
  }

  if (!isDupe) yield current;
  for (let i = index + 1; i < n; i++) yield* comboMasksWithDupeMasks(n, dupeMasks, i, current | (1 << i));
}

export function splitStringUsingMask(s: string, mask: number) {
  const cs: [string, string] = ['', ''];
  for (let j = 0, len = s.length; j < len; j++) cs[mask & 1 << j ? 0 : 1] += s.charAt(j);
  return cs;
}

export function* stringCombos(s: string) {  // s must be standardised and alphabetised
  for (const mask of comboMasksWithDupeMasks(s.length, dupeMasksForString(s))) {
    if (mask === 0) continue;  // don't yield the first empty string
    const ss = splitStringUsingMask(s, mask);
    if (ss[0] <= ss[1]) yield ss;
  }
}

// anagrams

export const anagramGoodness = (words: string[], wordWeights: Record<string, number>) =>
  words.reduce((memo, word) => Math.min(memo, wordWeights[word]), Infinity);

export async function findAnagrams(
  s: string,
  minWords: number,
  maxWords: number,
  reportEvery: number,
  progressListener: (currentResults: string[][]) => boolean,
) {
  const
    std = alphabetise(standardise(s)),
    hash = await getHash(),
    results = await _findAnagrams(std, minWords, maxWords, reportEvery, progressListener, hash),
    wordWeights = await getWordWeights();

  results.sort((a, b) =>
    // a.length - b.length ||  // absolutely prefer fewer words
    anagramGoodness(b, wordWeights) - anagramGoodness(a, wordWeights));

  return results;
}

async function _findAnagrams(
  s: string,
  minWords: number,
  maxWords: number,
  reportEvery: number,
  progressListener: (currentResults: string[][]) => boolean,
  hash: Awaited<ReturnType<typeof getHash>>,
  results: string[][] = [],
  priorWords: string[][] = [],
  status = { nextReport: Date.now() + reportEvery }
) {

  if (minWords <= 1) {
    const singleWords = hash[s];
    if (singleWords) {
      for (const sw of singleWords) {
        if (priorWords.length > 0) for (const pw of priorWords) results.push([...pw, sw]);
        else results.push([sw]);
      }
    }
  }

  if (maxWords > 1) {
    for (const [s1, s2] of stringCombos(s)) {
      const words1 = hash[s1];
      if (!words1) continue;

      // progress reporting + aborting
      const now = Date.now();
      if (now > status.nextReport) {
        const carryOn = progressListener(results);
        if (!carryOn) return results;  // abort

        await wait(0);
        status.nextReport = now + reportEvery;
      }

      const currentWords = [];
      for (const w1 of words1) {
        if (priorWords.length > 0) for (const pw of priorWords) currentWords.push([...pw, w1]);
        else currentWords.push([w1]);
      }

      await _findAnagrams(s2, minWords - 1, maxWords - 1, reportEvery, progressListener, hash, results, currentWords, status);
    }
  }

  return results;
}

