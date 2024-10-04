import { spawn } from 'child_process';
import { stdin, stdout } from 'process';
import path from 'path';

const PATH_TO_SCRIPT = path.join('src', 'cp', 'files', 'script.js');

const spawnChildProcess = async (args) => {
  console.log('To finish please press ctrl + D');

  if (!Array.isArray(args)) {
    args = [];
  }

  const child = spawn('node', [PATH_TO_SCRIPT, ...args], {
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  stdin.pipe(child.stdin);

  child.stdout.pipe(stdout);

  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

const args = process.argv.slice(2);

spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
