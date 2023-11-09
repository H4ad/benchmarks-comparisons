const { suite, useTerminal } = require('isitfast');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');

const sampleFile = resolve(__filename, '..', 'sample-file.txt');

process.stdout.clearLine = () => {};
process.stdout.cursorTo = () => {};

const bench = suite('read file')
  .add('readFileSync', function () {
    const r = readFileSync(sampleFile);
  })
  .add('readFileSync utf-8', function () {
    const r = readFileSync(sampleFile, 'utf-8');
  });

(async () => {
  useTerminal();

  await bench.run();
})();