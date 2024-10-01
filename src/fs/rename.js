import fs from 'node:fs/promises';
import path from 'node:path';

const WRONG_FILE_PATH = path.join('src', 'fs', 'files', 'wrongFilename.txt');
const PROPER_FILE_PATH = path.join('src', 'fs', 'files', 'properFilename.md');

const rename = async () => {
  try {
    await fs.access(WRONG_FILE_PATH);
    await fs
      .access(PROPER_FILE_PATH)
      .then(() => {
        throw new Error('FS operation failed');
      })
      .catch((err) => {
        if (err.code !== 'ENOENT') throw err;
      });

    await fs.rename(WRONG_FILE_PATH, PROPER_FILE_PATH);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();
