
import * as comlink from 'comlink';

import wordsMatchingPattern from './wordsMatchingPattern';
import { find } from './anag';
import { loadWordWeights, getWordsCount } from './words';

const workerAPI = {
  loadWordWeights,
  getWordsCount,
  wordsMatchingPattern,
  find,
};

comlink.expose(workerAPI);
export type WorkerAPI = typeof workerAPI;
