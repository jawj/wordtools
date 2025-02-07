import { getWordWeights, standardise } from './words';

const last = (arr: any[]) => arr[arr.length - 1];

/**
 * A wordable is an alphabetically-ordered sequence of letters which can be
 * rearranged to form one or more words.
 */
let wordsByWordable: Record<string, string[]>;  // populated on first call to find
function makeWordsByWordable(wordWeights: WordWeights) {
  if (wordsByWordable) return;
  wordsByWordable = {};
  for (const word in wordWeights) {
    const wordable = word.split('').sort().join('');
    wordsByWordable[wordable] ??= [];
    wordsByWordable[wordable].push(word);
  }
}

type WordWeights = Awaited<ReturnType<typeof getWordWeights>>;

type LetterCount = [string[], number[]];

function countLetters(word: string) {
  const rawLetters = word.split('').sort();
  const letters: string[] = [];
  const counts: number[] = [];
  let prevLetter: string | undefined;
  for (const letter of rawLetters) {
    if (prevLetter !== letter) {
      letters.push(letter);
      counts.push(0);
    }
    counts[counts.length - 1]++
    prevLetter = letter;
  }
  return [letters, counts] as LetterCount;
}

/**
 * The Allocation data structure tracks every unique combination of letters.
 * It's a Uint32Array. Each unique letter is represented by one array item.
 * For each item, the high 16 bits record how many of that letter is available.
 * The low 16 bits record how many of that letter is currently allocated to a
 * specific side. The last item records how many combinations have been 
 * produced, and the next-to-last records how many unique combinations exist.
 */
function createAllocation(maxValues: number[]) {
  const len = maxValues.length;
  const mb = new Uint32Array(len + 2);
  let product = 1, i = 0;
  for (; i < len; i++) {
    const max = maxValues[i];
    mb[i] = max << 16;
    product *= (max + 1);
  }
  mb[i] = Math.ceil(product / 2);
  return mb;
}

function nextAllocation(alloc: Uint32Array) {
  const len = alloc.length - 2;  // exclude count and index at last 2 positions
  const halfway = alloc[len];
  const allocIndex = ++alloc[len + 1];
  for (let i = 0; i < len; i++) {
    const col = alloc[i];
    const max = col >>> 16;
    const v = (col & 0xffff) + 1;  // increment value
    if (v <= max) {
      alloc[i] = (max << 16) | v;
      return allocIndex < halfway;
    }
    alloc[i] = max << 16;  // v is implicitly zero 
  }
  throw new Error('This should be impossible');
}

/**
 * This generator yields every possible unique way to produce two strings from
 * the letters of the string provided. The second string returned may be empty,
 * but the first never is (if a non-zero length string is provided).
 */
function* splitsFromString(s: string) {
  var [letters, counts] = countLetters(s);
  var mb = createAllocation(counts);
  const len = letters.length;
  do {
    let s1 = '', s2 = '';
    for (let i = 0; i < len; i++) {
      const letter = letters[i];
      const col = mb[i];
      const max = col >>> 16;
      let v = col & 0xffff;
      s1 += letter.repeat(v);
      s2 += letter.repeat(max - v);
    }
    yield [s2, s1];  // s1 may be empty
  } while (nextAllocation(mb));
}

/**
 * This generator yields every possible unique combination of wordables from
 * the letters of the string provided.
 */
function* wordablesFromString(s: string, kept: string[] = []): Generator<string[]> {
  for (const [keep, splitAgain] of splitsFromString(s)) {
    if (!wordsByWordable[keep]) continue;  // keep only letters that can make words
    const wordables = [...kept, keep];
    if (splitAgain === '') yield wordables;
    else yield* wordablesFromString(splitAgain, wordables);
  }
}

/**
 * This generator yields every possible combination of the strings in the
 * arrays it's given, much like a FULL JOIN in SQL.
 */
function* combinations(s: string[][]) {
  const lengths = s.map(s => s.length);
  const indices = s.map(() => 0);
  while (true) {
    yield s.map((s, i) => s[indices[i]]);
    for (let i = 0; i < indices.length; i++) {
      indices[i]++;
      if (indices[i] < lengths[i]) break;
      if (i === indices.length - 1) return;
      indices[i] = 0;
    }
  }
}

function goodnessFromWords(words: string[], wordWeights: WordWeights) {
  // start with weight of lowest-weighed word, after adjusting weight to give a slight preference for longer words
  const adjustedWeights = words.map(word => wordWeights[word] + .01 * word.length);
  const lowestAdjustedWeight = Math.min(...adjustedWeights);

  // apply a preference for fewer words in total
  return lowestAdjustedWeight / words.length ** 2;
}

export type Anagram = [string[], number];

export interface AnagramStatus {
  evaluated: number;
  working: boolean;
  anagrams: Anagram[];
}

export async function find(s: string, keepN: number, reportEveryN: number, reportN: number, cb: (status: AnagramStatus) => Promise<boolean>) {
  s = standardise(s);
  if (!s.length) return;

  // initialise
  const anagrams: Anagram[] = [];
  let evaluated = 0;
  let reportAfterN = 0;

  // these are no-ops the second time round
  const wordWeights = await getWordWeights();
  makeWordsByWordable(wordWeights);

  for (const wordables of wordablesFromString(s)) {
    const words = wordables.map(w => wordsByWordable[w]);
    const [, leastGoodness] = last(anagrams) ?? [, -Infinity];
    for (const anag of combinations(words)) {
      evaluated++;
      const goodness = goodnessFromWords(anag, wordWeights);
      if (goodness > leastGoodness || anagrams.length < keepN) anagrams.push([anag, goodness]);
    }
    if (anagrams.length > keepN) {
      anagrams.sort(([, a], [, b]) => b - a);
      anagrams.splice(keepN);
    }
    if (evaluated >= reportAfterN) {
      const stop = await cb({
        working: true,
        evaluated,
        anagrams: anagrams.slice(0, reportN),
      });
      if (stop) break;
      reportAfterN += reportEveryN;
    }
  }

  await cb({
    working: false,
    evaluated,
    anagrams,
  });
}
