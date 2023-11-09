import benchmark from 'benchmark';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const suite = benchmark.Suite();

const sampleFile = resolve(fileURLToPath(import.meta.url), '..', 'sample-file.txt');

suite
  .add('readFileSync', function () {
    const r = readFileSync(sampleFile);
  })
  .add('readFileSync utf-8', function () {
    const r = readFileSync(sampleFile, 'utf-8');
  })
  .on('cycle', event => {
    console.log(event.target.toString())
  })
  .run({ async: false })
