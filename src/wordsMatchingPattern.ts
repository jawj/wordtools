import { getWordWeights } from "./words";

export default async function (pattern: string, order: 'common' | 'short' | 'a-z') {
  const
    standardisedPattern = pattern.toLowerCase().replace(/[^a-z.?*]/g, ''),
    re = new RegExp('^' + standardisedPattern.replace(/[*]/g, '.*').replace(/[.?]/g, '.') + '$'),
    wordWeights = await getWordWeights(),
    results: string[] = [];

  for (const word in wordWeights) if (re.test(word)) results.push(word);
  results.sort(
    order === 'common' ? (a, b) => wordWeights[b] - wordWeights[a] :
      order === 'short' ? (a, b) => (a.length - b.length) || wordWeights[b] - wordWeights[a] :
        undefined);

  return results;
}
