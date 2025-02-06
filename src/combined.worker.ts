
import * as comlink from 'comlink';

import wordsMatchingPattern from './wordsMatchingPattern';
import { find, abort, status } from './anag';
import { loadWordWeights, getWordsCount } from './words';

const workerAPI = {
  loadWordWeights,
  getWordsCount,
  wordsMatchingPattern,
  find,
  abort,
  status,
};

comlink.expose(workerAPI);
export type WorkerAPI = typeof workerAPI;
