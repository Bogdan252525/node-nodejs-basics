import { parentPort } from 'worker_threads';

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.once('message', (message) => {
    const { n } = message;
    const result = nthFibonacci(n);
    parentPort.postMessage(result);
  });
};

sendResult();
