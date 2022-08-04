import { getWordWeights } from "./words";

type Order = 'freq' | 'length' | 'a-z';
type Direction = 'asc' | 'desc';

interface Cache {
  pattern: string;
  order: Order;
  direction: Direction;
  results: string[];
}

let cache: Cache | undefined;

async function wordsMatchingPattern(pattern: string) {
  const
    isRe = pattern.startsWith('~'),
    standardisedPattern = isRe ? pattern : pattern.toLowerCase().replace(/[^a-z.?*]/g, ''),
    re = isRe ? new RegExp(pattern.slice(1), 'i') : new RegExp('^' + standardisedPattern.replace(/[*]/g, '.*').replace(/[?]/g, '.') + '$'),
    wordWeights = await getWordWeights(),
    results: string[] = [];

  for (const word in wordWeights) if (re.test(word)) results.push(word);
  return results;
}

export default async function (
  pattern: string,
  order: Order,
  direction: Direction,
  firstIndex: number,
  maxResults: number,
) {
  const results = cache?.pattern === pattern ? cache.results :
    await wordsMatchingPattern(pattern);

  if (cache?.order !== order) {
    const
      wordWeights = await getWordWeights(),
      sortSign = direction === 'asc' ? 1 : -1;

    results.sort(
      order === 'freq' ? (a, b) => sortSign * (wordWeights[a] - wordWeights[b]) :
        order === 'length' ? (a, b) => sortSign * ((a.length - b.length) || wordWeights[b] - wordWeights[a]) :
          (a, b) => sortSign * a.localeCompare(b));

  } else /* order if the same but */ if (cache.direction !== direction) {
    results.reverse();

  } // else order and direction are the same: no sorting required

  cache = { pattern, order, direction, results };

  return {
    count: results.length,
    results: results.slice(firstIndex, firstIndex + maxResults)
  };
}
