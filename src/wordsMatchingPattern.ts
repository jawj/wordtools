import { getWordWeights } from "./words";

export default async function (pattern: string, order: 'freq' | 'length' | 'a-z', direction: 'asc' | 'desc') {
  const
    isRe = pattern.startsWith('~'),
    standardisedPattern = isRe ? pattern : pattern.toLowerCase().replace(/[^a-z.?*]/g, ''),
    re = isRe ? new RegExp(pattern.slice(1), 'i') : new RegExp('^' + standardisedPattern.replace(/[*]/g, '.*').replace(/[?]/g, '.') + '$'),
    wordWeights = await getWordWeights(),
    sortSign = direction === 'asc' ? 1 : -1,
    results: string[] = [];

  for (const word in wordWeights) if (re.test(word)) results.push(word);
  results.sort(
    order === 'freq' ? (a, b) => sortSign * (wordWeights[a] - wordWeights[b]) :
      order === 'length' ? (a, b) => sortSign * ((a.length - b.length) || wordWeights[b] - wordWeights[a]) :
        (a, b) => sortSign * a.localeCompare(b));

  return results;
}
