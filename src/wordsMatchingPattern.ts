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

function makeRe(pattern: string) {
  return new RegExp('^' + pattern.replace(/[*]/g, '.*').replace(/[?]/g, '.') + '$')
}

async function matches(pattern: string) {
  const
    isRe = pattern.startsWith('~'),
    andBack = pattern.endsWith('<'),
    standardisedPattern = isRe ? pattern : pattern.toLowerCase().replace(/[^a-z.?*]/g, ''),
    re = isRe ? new RegExp(standardisedPattern.slice(1), 'i') : makeRe(standardisedPattern),
    wordWeights = await getWordWeights();

  let results: string[] = [];
  for (const word in wordWeights) if (re.test(word)) results.push(word);

  if (andBack) {
    const backWords: Set<string> = new Set();
    for (const word of results) backWords.add(word.split('').reverse().join(''));
    const backResults: string[] = [];
    for (const word in wordWeights) if (backWords.has(word)) backResults.push(word);
    results = backResults;
  }

  return results;
}

export default async function (
  pattern: string,
  order: Order,
  direction: Direction,
  firstIndex: number,
  maxResults: number,
) {
  let results;
  try {
    results = cache?.pattern === pattern ? cache.results : await matches(pattern);

  } catch (e: any) {
    results = [e.message];
    cache = { pattern, order, direction, results };
    return { count: -1, results };
  }

  if (cache?.pattern !== pattern || cache.order !== order) {
    const
      wordWeights = await getWordWeights(),
      sortSign = direction === 'asc' ? 1 : -1;

    results.sort(
      order === 'freq' ? (a, b) => sortSign * (wordWeights[a] - wordWeights[b]) :
        order === 'length' ? (a, b) => sortSign * ((a.length - b.length) || wordWeights[b] - wordWeights[a]) :
          (a, b) => sortSign * a.localeCompare(b));

  } else if ( /* pattern and order are the same but */ cache.direction !== direction) {
    results.reverse();
  }

  cache = { pattern, order, direction, results };

  return {
    count: results.length,
    results: results.slice(firstIndex, firstIndex + maxResults)
  };
}
