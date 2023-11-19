const { suite, useTerminal } = require('isitfast');
const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

const sampleFile = resolve(__filename, '..', 'sample-file.txt');

process.stdout.clearLine = () => {};
process.stdout.cursorTo = () => {};

const bench = suite('read file')
  .add('readFile', async function () {
    const r = await readFile(sampleFile);
  })
  .add('readFile utf-8', async function () {
    const r = await readFile(sampleFile, 'utf-8');
  });

(async () => {
  useTerminal();

  await bench.run();
})();