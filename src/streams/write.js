import { createWriteStream } from 'node:fs';
import path from 'node:path';

const FILE_PATH = path.join('src', 'streams', 'files', 'fileToWrite.txt');

const write = async () => {
  const stream = createWriteStream(FILE_PATH, 'utf8');

  process.stdin.pipe(stream);

  await new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });

  console.log('Writing to the file is complete.');
};

await write();
