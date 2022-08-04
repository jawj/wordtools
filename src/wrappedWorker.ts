import * as comlink from 'comlink';
import type { WorkerAPI } from './combined.worker';

export default comlink.wrap<WorkerAPI>(
  new Worker(new URL('./combined.worker', import.meta.url))
);
