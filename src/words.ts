export type Words = Record<string, number>
export type MultiWords = Record<string, [string, number]>;

export function standardise(s: string) {
  return s.toLowerCase().replace(/[^a-z]+/g, '');
}
// load

let words: Words;
export async function loadWordWeights() {
  if (words === undefined) {
    const response = await fetch('words.json');
    words = await response.json();
    words["i"] = words["you"];  // "i" is oddly low-weighted otherwise
  }
}

let multiwords: MultiWords;
export async function loadMultiWordWeights() {
  if (multiwords === undefined) {
    const response = await fetch('multiwords.json');
    multiwords = await response.json();
  }
}

// retrieve

export async function getWordWeights() {
  await loadWordWeights();
  return words;
}

export async function getMultiWordWeights() {
  await loadMultiWordWeights();
  return multiwords;
}

// count

export async function getWordsCount() {
  await loadWordWeights();
  return Object.keys(words).length;
}

export async function getMultiWordsCount() {
  await loadMultiWordWeights();
  return Object.keys(multiwords).length;
}

