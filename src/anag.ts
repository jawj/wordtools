import { getWordWeights, standardise } from './words';

const last = (arr: any[]) => arr[arr.length - 1];

/**
 * A wordable is an alphabetically-ordered sequence of letters which can be
 * rearranged to form one or more words.
 */

let wordsByWordable: Record<string, string[]>;

function makeWordsByWordable(wordWeights: Awaited<ReturnType<typeof getWordWeights>>) {
  if (wordsByWordable) return;
  wordsByWordable = {};
  for (const word in wordWeights) {
    const wordable = word.split('').sort().join('');
    wordsByWordable[wordable] ??= [];
    wordsByWordable[wordable].push(word);
  }
}

const wordWeights = await getWordWeights();
makeWordsByWordable(wordWeights);


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

function goodnessFromWords(words: string[]) {
  // start with weight of lowest-weighed word, after adjusting weight to give a slight preference for longer words
  const lowestAdjustedWeight = words.reduce((memo, word) => {
    const adjustedWeight = wordWeights[word] + .01 * word.length;
    return memo < adjustedWeight ? memo : adjustedWeight;
  }, Infinity);

  // apply a preference for fewer words in total
  return lowestAdjustedWeight / words.length ** 2.5;
}



async function topNAnagrams(s: string, topN = 10000) {
  s = standardise(s);
  if (!s.length) return [];
  const anags = [];
  let anagsEvaluated = 0;
  let lastPause = 0;
  for (const wordables of wordablesFromString(s)) {
    const words = wordables.map(w => wordsByWordable[w]);
    const [, leastGoodness] = last(anags) ?? [, -Infinity];
    for (const anag of combinations(words)) {
      anagsEvaluated++;
      const goodness = goodnessFromWords(anag);
      if (goodness > leastGoodness || anags.length < topN) anags.push([anag, goodness] as const);
    }
    if (anags.length > topN) {
      console.log(anags.length);
      anags.sort(([, a], [, b]) => b - a);
      anags.splice(topN);
    }
    if (false) {
      await new Promise(resolve => setTimeout(resolve, 0));
    }

  }
  console.log({ anagsEvaluated });
  return anags;
}



for (const [anag, score] of (await topNAnagrams('georgemackerron')).slice(0, 30)) console.log(anag.join(' '), score.toFixed(2));
