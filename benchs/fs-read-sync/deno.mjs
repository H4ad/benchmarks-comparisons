import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const sampleFile = resolve(fileURLToPath(import.meta.url), '..', 'sample-file.txt');

Deno.bench('readFileSync', function () {
  const r = readFileSync(sampleFile);
});

Deno.bench('readFileSync utf-8', function () {
  const r = readFileSync(sampleFile, 'utf-8');
});
