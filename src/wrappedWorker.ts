import * as comlink from 'comlink';
import type { WorkerAPI } from './combined.worker.js';

export default comlink.wrap<WorkerAPI>(
  new Worker(new URL('./combined.worker.js', import.meta.url))
);
