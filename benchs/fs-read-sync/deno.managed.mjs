Deno.bench('readFileSync', async function (b) {
  const { readFileSync } = await import('node:fs');
  const { resolve } = await import('node:path');
  const { fileURLToPath } = await import('node:url');
  const assert = await import('node:assert');
  let r;

  const sampleFile = resolve(fileURLToPath(import.meta.url), '..', 'sample-file.txt');

  b.start();
  r = readFileSync(sampleFile);
  b.end();

  assert.ok(r);
});

Deno.bench('readFileSync utf-8', async function (b) {
  const { readFileSync } = await import('node:fs');
  const { resolve } = await import('node:path');
  const { fileURLToPath } = await import('node:url');
  const assert = await import('node:assert');
  let r;

  const sampleFile = resolve(fileURLToPath(import.meta.url), '..', 'sample-file.txt');

  b.start();
  r = readFileSync(sampleFile, 'utf-8');
  b.end();

  assert.ok(r);
});
