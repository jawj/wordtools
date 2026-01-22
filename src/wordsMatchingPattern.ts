import { getWordWeights, type Words, getMultiWordWeights, type MultiWords } from "./words";

type Order = 'freq' | 'length' | 'a-z';
type Direction = 'asc' | 'desc';

interface Cache {
  pattern: string;
  order: Order;
  direction: Direction;
  results: string[];
  multi: boolean;
}

let cache: Cache | undefined;

function makeRe(pattern: string, excludeSpace = false) {
  return new RegExp('^' + pattern.replace(/[*]/g, excludeSpace ? '[^ ]*' : '.*').replace(/[?]/g, excludeSpace ? '[^ ]' : '.') + '$');
}

async function matches(pattern: string, multi: boolean) {
  const
    isRe = pattern.startsWith('~'),
    andBack = pattern.endsWith('<'),
    lowerPattern = pattern.toLowerCase(),
    standardisedPattern = isRe ? pattern : lowerPattern.replace(/[^a-z.?*]/g, ''),
    re = isRe ? new RegExp(standardisedPattern.slice(1), 'i') : makeRe(standardisedPattern),
    wordWeights = await (multi ? getMultiWordWeights() : getWordWeights());

  let results: string[] = [];
  for (const word in wordWeights as Words) if (re.test(word)) results.push(word);

  if (andBack) {
    const singleWordWeights = await getWordWeights();
    const multiWordWeights = await getMultiWordWeights();
    const backResults: string[] = [];
    for (const word of results) {
      const backword = word.split('').reverse().join('');
      if (backword in singleWordWeights || backword in multiWordWeights) backResults.push(word);
    }
    results = backResults;
  }

  if (multi && pattern.indexOf(' ') !== -1) {
    const standardisedSpacedPattern = lowerPattern.replace(/[^a-z.?* ]/g, '');
    const spacedRe = isRe ? new RegExp(standardisedSpacedPattern.slice(1), 'i') : makeRe(standardisedSpacedPattern, true);
    const spacedResults = []
    for (const result of results) {
      const spaced = (wordWeights as MultiWords)[result][0];
      const standardisedSpaced = spaced.toLowerCase().replace(/-/g, ' ').replace(/[^a-z.?* ]/g, '');
      if (spacedRe.test(standardisedSpaced)) spacedResults.push(result);
    }
    results = spacedResults;
  }

  return results;
}

export default async function (
  pattern: string,
  order: Order,
  direction: Direction,
  firstIndex: number,
  maxResults: number,
  multi: boolean,
) {
  let results;
  try {
    results = cache?.pattern === pattern && cache?.multi === multi ? cache.results : await matches(pattern, multi);

  } catch (e: any) {
    results = [e.message];
    cache = { pattern, order, direction, multi, results };
    return { count: -1, results };
  }

  const wordWeights = await (multi ? getMultiWordWeights() : getWordWeights());

  if (cache?.pattern !== pattern || cache?.multi !== multi || cache.order !== order) {
    const sortSign = direction === 'asc' ? 1 : -1;

    if (multi) results.sort(
      order === 'freq' ? (a, b) => sortSign * ((wordWeights as MultiWords)[a][1] - (wordWeights as MultiWords)[b][1]) :
        order === 'length' ? (a, b) => sortSign * ((a.length - b.length) || (wordWeights as MultiWords)[b][1] - (wordWeights as MultiWords)[a][1]) :
          (a, b) => sortSign * a.localeCompare(b));

    else results.sort(
      order === 'freq' ? (a, b) => sortSign * ((wordWeights as Words)[a] - (wordWeights as Words)[b]) :
        order === 'length' ? (a, b) => sortSign * ((a.length - b.length) || (wordWeights as Words)[b] - (wordWeights as Words)[a]) :
          (a, b) => sortSign * a.localeCompare(b));

  } else if ( /* pattern and order are the same but */ cache.direction !== direction) {
    results.reverse();
  }

  cache = { pattern, order, direction, multi, results };

  return {
    count: results.length,
    results: multi ?
      results.slice(firstIndex, firstIndex + maxResults).map(word => (wordWeights as MultiWords)[word][0]) :
      results.slice(firstIndex, firstIndex + maxResults)
  };
}
