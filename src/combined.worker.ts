
import * as comlink from 'comlink';

import wordsMatchingPattern from './wordsMatchingPattern';
import { find, abort, finished, evaluated, anagrams } from './anag';
import { loadWordWeights, getWordsCount } from './words';

const workerAPI = {
  loadWordWeights,
  getWordsCount,
  wordsMatchingPattern,
  find,
  abort,
  finished,
  evaluated,
  anagrams,
};

comlink.expose(workerAPI);
export type WorkerAPI = typeof workerAPI;
