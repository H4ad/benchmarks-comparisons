import benchmark from 'benchmark';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const suite = benchmark.Suite();

const sampleFile = resolve(fileURLToPath(import.meta.url), '..', 'sample-file.txt');

suite
  .add({
    name: 'readFile',
    fn: function (deferred) {
      readFile(sampleFile).then(() => deferred.resolve());
    },
    defer: true,
  })
  .add({
    name: 'readFile utf-8',
    fn: function (deferred) {
      readFile(sampleFile, 'utf-8').then(() => deferred.resolve());
    },
    defer: true,
  })
  .on('cycle', event => {
    console.log(event.target.toString())
  })
  .run({ async: false })
