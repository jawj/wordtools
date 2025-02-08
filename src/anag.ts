import { getWordWeights, standardise } from './words';


type WordWeights = Awaited<ReturnType<typeof getWordWeights>>;

type LetterCount = [string[], number[]];

export type Anagram = [string[], number];

export interface AnagramStatus {
  evaluated: number;
  working: boolean;
  anagrams: Anagram[];
}


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
    counts[counts.length - 1]++;
    prevLetter = letter;
  }
  return [letters, counts] as LetterCount;
}

/**
 * This generator yields every possible unique way to produce two strings from
 * the letters of the string provided. The second string returned may be empty,
 * but the first never is (if a non-zero length string is provided).
 */
function* partitionsForLettersInString(s: string) {
  const [letters, maxLetterCounts] = countLetters(s);

  const lettersInWord = letters.length;
  let partitionIndex = 0;
  let letterCounts = letters.map(() => 0);
  const product = maxLetterCounts.reduce((memo, i) => memo * (i + 1), 1);
  const stopBefore = Math.ceil(product / 2);

  do {
    let s1 = '', s2 = '';
    for (let i = 0; i < lettersInWord; i++) {
      const letter = letters[i];
      const maxLetterCount = maxLetterCounts[i];
      const letterCount = letterCounts[i];
      s1 += letter.repeat(letterCount);
      s2 += letter.repeat(maxLetterCount - letterCount);
    }

    yield [s2, s1];  // s1 may be empty

    partitionIndex++
    for (let i = 0; i < lettersInWord; i++) {
      letterCounts[i]++;
      if (letterCounts[i] <= maxLetterCounts[i]) break;
      letterCounts[i] = 0;
    }

  } while (partitionIndex < stopBefore);
}

/**
 * A wordable is an alphabetically-ordered sequence of letters which can be
 * rearranged to form one or more words. This generator yields every possible
 * unique combination of wordables from the letters of the string provided.
 */
function* wordablesFromString(s: string, kept: string[] = []): Generator<string[]> {
  for (const [keep, splitAgain] of partitionsForLettersInString(s)) {
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
function* allCombinationsOfStrings(s: string[][]) {
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

function goodnessOfWords(words: string[], wordWeights: WordWeights) {
  // start with weight of lowest-weighed word
  const adjustedWeights = words.map(word => wordWeights[word]);
  const lowestAdjustedWeight = Math.min(...adjustedWeights);

  // apply a preference for fewer words in total
  return lowestAdjustedWeight / (words.length + 1);
}

export async function find(s: string, keepN: number, reportEveryN: number, cb: (status: AnagramStatus) => Promise<boolean>) {
  s = standardise(s);
  if (!s.length) return;

  // initialise
  const anagrams: Anagram[] = [];
  let evaluated = 0;
  let reportAfterN = 0;
  let leastGoodness = -Infinity;

  // these are no-ops the second time round
  const wordWeights = await getWordWeights();
  makeWordsByWordable(wordWeights);

  const t0 = typeof performance !== 'undefined' && performance.now();

  for (const wordables of wordablesFromString(s)) {
    if (evaluated >= reportAfterN) {
      reportAfterN += reportEveryN;
      const stop = await cb({ working: true, evaluated, anagrams });
      if (stop) break;
    }

    const words = wordables.map(w => wordsByWordable[w]);
    for (const anag of allCombinationsOfStrings(words)) {
      evaluated++;
      const goodness = goodnessOfWords(anag, wordWeights);
      if (goodness > leastGoodness) anagrams.push([anag, goodness]);
    }

    if (anagrams.length > keepN) {
      anagrams.sort(([, a], [, b]) => b - a);
      anagrams.splice(keepN);
      leastGoodness = anagrams[keepN - 1][1];
    }
  }

  if (t0) console.log(performance.now() - t0 + 'ms');

  await cb({ working: false, evaluated, anagrams });
}
