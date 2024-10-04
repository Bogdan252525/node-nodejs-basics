import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline as pipe } from 'node:stream/promises';
import path from 'node:path';

const INPUT_PATH = path.join('src', 'zip', 'files', 'archive.gz');
const OUTPUT_PATH = path.join('src', 'zip', 'files', 'fileToCompress.txt');

const decompress = async () => {
  const input = createReadStream(INPUT_PATH);
  const output = createWriteStream(OUTPUT_PATH);
  const gunzip = createGunzip();

  await pipe(input, gunzip, output);

  console.log('The file is successfully decompressed in fileToCompress.txt');
};

await decompress();
