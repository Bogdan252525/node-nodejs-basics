import { Transform } from 'node:stream';

const transform = async () => {
  console.log('To finish please press ctrl + D');

  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk =
        chunk.toString().trim().split('').reverse().join('') + '\n';
      callback(null, reversedChunk);
    },
  });

  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();
