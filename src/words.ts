
export function standardise(s: string) {
  return s.toLowerCase().replace(/[^a-z]+/g, '');
}

export async function loadWords() {
  const
    response = await fetch('words.json'),
    json = await response.json();

  return json;
}

let words: Record<string, number>;
export async function getWordWeights() {
  if (!words) words = await loadWords();
  return words;
}
