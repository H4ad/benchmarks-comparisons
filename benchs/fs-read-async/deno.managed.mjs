Deno.bench('readFile', async function (b) {
  const { readFile } = await import('node:fs/promises');
  const { resolve } = await import('node:path');
  const { fileURLToPath } = await import('node:url');
  const assert = await import('node:assert');
  let r;

  const sampleFile = resolve(fileURLToPath(import.meta.url), '..', 'sample-file.txt');

  b.start();
  r = await readFile(sampleFile);
  b.end();

  assert.ok(r);
});

Deno.bench('readFile utf-8', async function (b) {
  const { readFile } = await import('node:fs/promises');
  const { resolve } = await import('node:path');
  const { fileURLToPath } = await import('node:url');
  const assert = await import('node:assert');
  let r;

  const sampleFile = resolve(fileURLToPath(import.meta.url), '..', 'sample-file.txt');

  b.start();
  r = await readFile(sampleFile, 'utf-8');
  b.end();

  assert.ok(r);
});
