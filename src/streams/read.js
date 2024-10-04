import { createReadStream } from 'node:fs';
import { pipeline as pipe } from 'node:stream/promises';
import path from 'node:path';

const FILE_PATH = path.join('src', 'streams', 'files', 'fileToRead.txt');

const read = async () => {
  const stream = createReadStream(FILE_PATH, { encoding: 'utf8' });

  stream.on('end', () => {
    console.log('\n');
  });

  try {
    await pipe(stream, process.stdout);
  } catch (err) {
    console.error('An error occurred while reading the file:', err);
  }
};

await read();
