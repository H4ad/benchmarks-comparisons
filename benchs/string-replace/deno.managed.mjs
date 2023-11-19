Deno.bench('single with matcher', { group: 'replace' }, async function (b) {
  const assert = await import('node:assert');

  const pattern = /[123]/g
  const replacements = { 1: 'a', 2: 'b', 3: 'c' }

  const subject = '123123123123123123123123123123123123123123123123'

  let r;

  b.start();
  r = subject.replace(pattern, m => replacements[m]);
  b.end();

  assert.ok(r);
});

Deno.bench('multiple replaces', { group: 'replace' }, async function (b) {
  const assert = await import('node:assert');

  const subject = '123123123123123123123123123123123123123123123123'

  let r;

  b.start();
  r = subject.replace(/1/g, 'a').replace(/2/g, 'b').replace(/3/g, 'c');
  b.end();

  assert.ok(r);
});
