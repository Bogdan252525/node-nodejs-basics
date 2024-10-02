import { Transform } from 'node:stream';

const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk
        .toString()
        .trim()
        .split('')
        .reverse()
        .join('');
      callback(null, reversedChunk);
    },
  });

  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();
