
import * as comlink from 'comlink';

import wordsMatchingPattern from './wordsMatchingPattern';
import { findAnagrams } from './anag';
import { loadWordWeights, getWordsCount } from './words';

const workerAPI = {
  wordsMatchingPattern,
  findAnagrams,
  loadWordWeights,
  getWordsCount,
};

comlink.expose(workerAPI);
export type WorkerAPI = typeof workerAPI;

