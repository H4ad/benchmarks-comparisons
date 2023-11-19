Deno.bench('Using includes', async function (b) {
  const assert = await import('node:assert');
  const text = 'text/html,application/xhtml+xml,application/xml;application/json;q=0.9,image/avif,image/webp,*/*;q=0.8'

  let r;

  b.start();
  r = text.includes('application/json');
  b.end();

  assert.ok(r);
});

Deno.bench('Using indexof', async function (b) {
  const assert = await import('node:assert');
  const text = 'text/html,application/xhtml+xml,application/xml;application/json;q=0.9,image/avif,image/webp,*/*;q=0.8'

  let r;

  b.start();
  r = text.indexOf('application/json') !== -1;
  b.end();

  assert.ok(r);
});

Deno.bench('Using cached RegExp.test', async function (b) {
  const assert = await import('node:assert');
  const regex = /application\/json/
  const text = 'text/html,application/xhtml+xml,application/xml;application/json;q=0.9,image/avif,image/webp,*/*;q=0.8'

  let r;

  b.start();
  r = regex.test(text);
  b.end();

  assert.ok(r);
});
