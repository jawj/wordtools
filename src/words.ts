import fs from 'node:fs/promises';

type Words = Record<string, number>

let words: Words;
export async function loadWordWeights() {
  if (words === undefined) {
    const response = await fetch('words.json');
    words = await response.json();
    words["i"] = words["you"];  // "i" is oddly low-weighted otherwise
  }
}

export async function getWordWeights() {
  await loadWordWeights();
  return words;
}

export async function getWordsCount() {
  await loadWordWeights();
  return Object.keys(words).length;
}

export function standardise(s: string) {
  return s.toLowerCase().replace(/[^a-z]+/g, '');
}
