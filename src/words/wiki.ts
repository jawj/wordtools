
import * as fs from 'fs';
import * as readline from 'readline';
import * as process from 'process';
import * as accents from 'remove-accents';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const
  words: string[] = [],
  wordCounts: Record<string, number> = {};
let
  articleCount = 0,
  distinctWordCount = 0;

rl.on('line', line => {
  const
    data = JSON.parse(line),
    { opening_text: text, title } = data;

  if (!text) return;
  if (title.match(/^List of /)) return;

  const
    wordRe = /(^|\s|\()([A-Za-z]['’a-z]+)/g,
    vowelRe = /[aeiouy]/i,
    processed = accents.remove(text)
      .replace(/\bhttps?:\S+/gi, ''),
    articleWords: Record<string, true> = {};

  let match;
  while ((match = wordRe.exec(processed))) {
    if (!vowelRe.test(match[0])) continue;

    const
      word = match[2].toLowerCase().replace(/['’]/g, ''),
      maybeName = match[2].charAt(0).toUpperCase() === match[2].charAt(0);

    if (!wordCounts[word]) {
      wordCounts[word] = 0;
      words.push(word);
      distinctWordCount++;

    }
    if (!articleWords[word]) {
      wordCounts[word] += maybeName ? 0.05 : 1;
    }

    articleWords[word] = true;
  }
  // console.log(title, Object.keys(words).join(' '), '\n\n');

  articleCount++;
  if (articleCount % 5000 === 0) {
    console.log(`${distinctWordCount} words from ${articleCount} articles`);
  }
  if (articleCount % 50000 === 0) {
    const sampleWords: string[] = [];
    for (let i = 0; i < 1001; i++) {
      const sampleWord = words[Math.floor(Math.random() * words.length)];
      sampleWords.push(sampleWord);
    }
    sampleWords.sort((a, b) => wordCounts[a] - wordCounts[b]);
    for (let i = 0; i < 1001; i += 10) {
      console.log(sampleWords[i], Math.ceil(wordCounts[sampleWords[i]]));
    }
  }
});

rl.on('close', () => {
  fs.writeFileSync('wordCounts.json', JSON.stringify(wordCounts, null, 2));
});
