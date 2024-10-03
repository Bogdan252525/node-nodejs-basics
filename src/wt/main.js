import { Worker } from 'worker_threads';
import os from 'node:os';

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const workers = [];
  const results = new Array(numCores).fill(null);

  return new Promise((resolve) => {
    const checkCompletion = () => {
      if (results.every((result) => result !== null)) {
        resolve(results);
      }
    };

    for (let i = 0; i < numCores; i++) {
      const worker = new Worker(new URL('./worker.js', import.meta.url));
      workers.push(worker);

      worker.postMessage({ n: 10 + i });

      worker.on('message', (message) => {
        results[i] = {
          status: 'resolved',
          data: message,
        };
        checkCompletion();
      });

      worker.on('error', () => {
        results[i] = {
          status: 'error',
          data: null,
        };
        checkCompletion();
      });
    }
  });
};

await performCalculations();
