
import * as fs from 'fs';

const
  wikiWordCounts = JSON.parse(fs.readFileSync('wordCounts.json', { encoding: 'utf8' })),
  allWikiWords = Object.keys(wikiWordCounts),
  wikiWords = allWikiWords.filter(x => wikiWordCounts[x] >= 20);

wikiWordCounts.constructor = wikiWordCounts.constructors;  // suspicious gap, otherwise filled by constructor function

const
  web2 = fs.readFileSync('web2.txt', { encoding: 'utf8' }).split(/[\r\n]+/),
  aspell = fs.readFileSync('aspell_en.txt', { encoding: 'utf8' }).split(/[\r\n]+/)
    .filter(w => w.length > 2),

  // from http://crr.ugent.be/archives/2045
  wordPrevs = Object.fromEntries(fs.readFileSync('wordprevalences.csv', { encoding: 'utf8' }).split(/[\r\n]+/)
    .map(line => {
      const [word, knownPc, nObs, prevalence, freqZipfUs] = line.split(',');
      return [word, parseFloat(knownPc)];
    })),
  prevWords = Object.keys(wordPrevs),

  allWords = [...prevWords, ...wikiWords, ...web2, ...aspell, 'briony']
    .map(s => s.toLowerCase().replace(/[^a-z]+/g, ''))
    .filter(w => w.length > 1 || w === 'a' || w === 'i' || w === 'o'),

  weight = (word: string) => {
    let weight = 1;

    const prev = wordPrevs[word];
    if (prev) {
      // console.log(1, prev);
      weight += 10 * prev * prev;  // .5 prevalence words are already pretty obscure, so we square the measure

    } else if (word.endsWith('ies')) {
      const
        iesy = word.slice(0, -3) + 'y',
        iesyPrev = wordPrevs[iesy];

      // console.log(2, iesyPrev);
      if (iesyPrev) weight += 9 * iesyPrev * iesyPrev;

    } else if (word.endsWith('s')) {
      const
        sless = word.slice(0, -1),
        slessPrev = wordPrevs[sless];

      // console.log(3, slessPrev);
      if (slessPrev) weight += 9 * slessPrev * slessPrev;
    }

    const wikiwc = wikiWordCounts[word];
    // console.log(4, wikiwc);
    if (wikiwc) weight += Math.log10(Math.max(10, wikiwc));

    weight = parseFloat(weight.toFixed(2));
    return weight;
  },

  result: Record<string, number> = Object.create(null);

allWords.sort((a, b) => weight(b) - weight(a));
for (const word of allWords) result[word] = weight(word);

fs.writeFileSync('../../dist/words.json', JSON.stringify(result, null, 2));
