import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline as pipe } from 'node:stream/promises';
import path from 'node:path';

const INPUT_PATH = path.join('src', 'zip', 'files', 'fileToCompress.txt');
const OUTPUT_PATH = path.join('src', 'zip', 'files', 'archive.gz');

const compress = async () => {
  const input = createReadStream(INPUT_PATH);
  const output = createWriteStream(OUTPUT_PATH);
  const gzip = createGzip();

  await pipe(input, gzip, output);

  console.log('The file is successfully compressed to archive.gz');
};

await compress();
