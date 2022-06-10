
import m from 'mithril';

import { findAnagrams } from './anag';
import { Pattern } from './Pattern';

window.addEventListener('load', async () => {
  /*
  const t0 = Date.now();
  const anagrams = await findAnagrams('georgemackerron', 1, 4, 1000, (currentResults) => {
    const { length } = currentResults;
    console.log(length);
    return length < 1000000;
  });
  console.log('anagrams', anagrams.map(arr => arr.join(' ')));
  console.log(Date.now() - t0);
  */
});


const
  anagram = {
    view: () =>
      m('.anagram')
  };

m.route(document.body, '/pattern/common', {
  '/pattern/:order': Pattern,
  '/pattern/:order/:pattern': Pattern,
  '/anagram': anagram,
});

// mama's greengrocer joke, joggers remake romance
// hybrid language moron, deny marginal borough
// furious sixty-sevens, survey foxes in suits, your six festive suns (university of sussex)
// cravenly irksome, removes crankily, silver money rack, remarks only vice
// ankle romancer, one lemon arranged luck, arranged leek on column
// staff crash into london, santa finds front
// moth drinking cream, dream-thick morning, random crime knight, king richard moment, monk directing harm
// undo scowl, unsold cow, words unlock romance, lemur crackdown soon, women rock cauldrons, sour lemon crackdown
// join four strands (stanford juniors)
