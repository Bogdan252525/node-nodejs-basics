import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { pipeline as pipe } from 'node:stream/promises';
import path from 'node:path';

const FILE_PATH = path.join(
  'src',
  'hash',
  'files',
  'fileToCalculateHashFor.txt'
);

const calculateHash = async () => {
  const hash = createHash('sha256');
  const stream = createReadStream(FILE_PATH);

  await pipe(stream, async function* (source) {
    for await (const chunk of source) {
      hash.update(chunk);
    }
  });

  console.log(hash.digest('hex'));
};

await calculateHash();
