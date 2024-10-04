import fs from 'node:fs/promises';
import path from 'node:path';

const FILE_PATH = path.join('src', 'fs', 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await fs.unlink(FILE_PATH);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
