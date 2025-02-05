import { getWordWeights } from './words';


const alphabetise = (s: string) => s.split('').sort().join('');
const last = (arr: any[]) => arr[arr.length - 1];
const setLast = (arr: any[], v: any) => arr[arr.length - 1] = v;
const incrLast = (arr: any[]) => arr[arr.length - 1]++;

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
    console.log('Done');
  }
  return hash;
}

type LetterCount = [string[], number[]];
function countLetters(s: string) {
  const rawLetters = s.split('').sort();
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

function nextAllocation(mb: Uint32Array, debug = false) {
  const len = mb.length - 2; // exclude count and index at last 2 positions
  const comboTotal = mb[len];
  const comboIndex = ++mb[len + 1];
  for (let i = 0; i < len; i++) {
    const col = mb[i];
    const max = col >>> 16;
    const v = (col & 0xffff) + 1; // increment value
    if (debug && i === len - 1) console.log('---');
    if (v <= max) {
      mb[i] = (max << 16) | v;
      if (debug) {
        if (comboIndex === comboTotal) console.log('===');
        return true;
      }
      return comboIndex < comboTotal;
    }
    mb[i] = max << 16;  // v is implicitly zero 
  }
  if (debug) return false;
  throw new Error('If we get here, we will have seen every combination twice');
}

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

function* wordablesFromString(s: string, kept: string[] = []): Generator<string[]> {
  for (const [keep, splitAgain] of splitsFromString(s)) {
    if (!hash[keep]) continue;  // keep only letters that can make words

    const sets = [...kept, keep];
    if (splitAgain === '') yield sets;
    else yield* wordablesFromString(splitAgain, sets);
  }
}


await getHash();
for (const wordables of wordablesFromString('elvis')) console.log(wordables.map(w => hash[w].join('/')));
