import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const sampleFile = resolve(fileURLToPath(import.meta.url), '..', 'sample-file.txt');

Deno.bench('readFile', async function () {
  const r = await readFile(sampleFile);
});

Deno.bench('readFile utf-8', async function () {
  const r = await readFile(sampleFile, 'utf-8');
});
