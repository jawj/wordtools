
import m from 'mithril';
import { Pattern } from './Pattern';
import { Anagram } from './Anagram';

// import * as comlink from 'comlink';
// import type { WorkerAPI } from './combined.worker';

// const w = comlink.wrap<WorkerAPI>(new Worker(new URL('./combined.worker', import.meta.url)));

// w.findAnagrams('georgejamesmackerron', 3, 5, 1000,
//   comlink.proxy((...args) => {
//     console.log(...args);
//     return true;
//   })).then(x => console.log(x));


m.route(document.getElementById('main')!, '/pattern/-/single/freq/desc/1', {
  '/pattern/:pattern/:list/:order/:direction/:page': Pattern,
  '/anagram/:letters': Anagram,
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
// recycled punk moons a girl
