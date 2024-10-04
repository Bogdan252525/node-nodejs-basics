import fs from 'node:fs/promises';
import path from 'node:path';

const FILE_PATH = path.join('src', 'fs', 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const content = await fs.readFile(FILE_PATH, 'utf-8');
    console.log(content);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
