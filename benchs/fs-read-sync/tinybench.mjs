import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Bench } from 'tinybench';

const bench = new Bench({ time: 100 });
const sampleFile = resolve(fileURLToPath(import.meta.url), '..', 'sample-file.txt');

bench
  .add('readFileSync', function () {
    const r = readFileSync(sampleFile);
  })
  .add('readFileSync utf-8', function () {
    const r = readFileSync(sampleFile, 'utf-8');
  });

bench.run().then(() => {
  console.table(bench.table());
});
