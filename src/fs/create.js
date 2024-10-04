import fs from 'node:fs/promises';
import path from 'node:path';

const FILE_PATH = path.join('src', 'fs', 'files', 'fresh.txt');

const create = async () => {
  try {
    await fs.writeFile(FILE_PATH, 'I am fresh and young', { flag: 'wx' });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
