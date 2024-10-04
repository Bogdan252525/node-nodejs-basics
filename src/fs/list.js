import fs from 'node:fs/promises';
import path from 'node:path';

const FOLDER_PATH = path.join('src', 'fs', 'files');

const list = async () => {
  try {
    const files = await fs.readdir(FOLDER_PATH);
    console.log(files);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();
