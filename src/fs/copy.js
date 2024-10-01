import fs from 'node:fs/promises';
import path from 'node:path';

const SOURCE_PATH = path.join('src', 'fs', 'files');
const DEST_PATH = path.join('src', 'fs', 'files_copy');

const copy = async () => {
  try {
    await fs.access(SOURCE_PATH);
    await fs
      .access(DEST_PATH)
      .then(() => {
        throw new Error('FS operation failed');
      })
      .catch((err) => {
        if (err.code !== 'ENOENT') throw err;
      });

    await fs.cp(SOURCE_PATH, DEST_PATH, { recursive: true });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
