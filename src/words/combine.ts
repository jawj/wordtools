
import * as fs from 'fs';

const
  wikiWordCounts = JSON.parse(fs.readFileSync('wordCounts.json', { encoding: 'utf8' })),
  allWikiWords = Object.keys(wikiWordCounts),
  wikiWords = allWikiWords.filter(x => wikiWordCounts[x] >= 20),

  web2 = fs.readFileSync('web2.txt', { encoding: 'utf8' }).split(/[\r\n]+/),
  aspell = fs.readFileSync('aspell_en.txt', { encoding: 'utf8' }).split(/[\r\n]+/)
    .filter(w => w.length > 3),
  // from http://crr.ugent.be/archives/2045
  wordPrevs = Object.fromEntries(fs.readFileSync('wordprevalences.csv', { encoding: 'utf8' }).split(/[\r\n]+/)
    .map(line => {
      const [word, knownPc, nObs, prevalence, freqZipfUs] = line.split(',');
      return [word, parseFloat(knownPc)];
    })),
  prevWords = Object.keys(wordPrevs),

  allWords = [...prevWords, ...wikiWords, ...web2, ...aspell].map(s => s.toLowerCase().replace(/[^a-z]+/g, '')),
  result: Record<string, number> = {},

  weight = (word: string) => parseFloat((
    1 +
    (wordPrevs[word] ? 15 * Math.pow(wordPrevs[word], 2) : 0) +  // .5 words are already pretty obscure, so we square this measure
    (!wordPrevs[word] && word.endsWith('s') && wordPrevs[word.slice(0, -1)] ? 15 * Math.pow(wordPrevs[word.slice(0, -1)], 2) : 0) +
    (wikiWordCounts[word] ? Math.log10(Math.max(10, wikiWordCounts[word])) : 0)
  ).toFixed(2));

allWords.sort((a, b) => weight(b) - weight(a));

for (const word of allWords) result[word] = weight(word);

fs.writeFileSync('../../dist/words.json', JSON.stringify(result, null, 2));
