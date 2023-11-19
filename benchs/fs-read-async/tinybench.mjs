import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Bench } from 'tinybench';

const bench = new Bench({ time: 100 });
const sampleFile = resolve(fileURLToPath(import.meta.url), '..', 'sample-file.txt');

bench
  .add('readFile', async function () {
    const r = await readFile(sampleFile);
  })
  .add('readFile utf-8', async function () {
    const r = await readFile(sampleFile, 'utf-8');
  });

bench.run().then(() => {
  console.table(bench.table());
});
