import cronometro from 'cronometro';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const sampleFile = resolve(fileURLToPath(import.meta.url), '..', 'sample-file.txt');

const results = cronometro({
  'readFileSync': function () {
    const r = readFileSync(sampleFile);
  },
  'readFileSync utf-8': function () {
    const r = readFileSync(sampleFile, 'utf-8');
  },
}, {
  print: { compare: true },
});