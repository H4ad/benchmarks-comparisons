Deno.bench(`crypto.createVerify('RSA-SHA256')`, { group: 'crypto' }, async function (b) {
  const { resolve } = await import('node:path');
  const { fileURLToPath } = await import('node:url');
  const crypto = await import('node:crypto');
  const { readFileSync } = await import('node:fs');
  const assert = await import('node:assert');

  const currentFile = resolve(fileURLToPath(import.meta.url), '..');
  const rsaPublicKey = readFileSync(`${currentFile}/public-key.pem`, 'utf-8');

  const thing = 'hello world'
  const signature = 'UNrDtit7FpZy6eOHb+PklG6Ww8a7ARqMuQGZ+lkTOJPASjkbBoT3RqIExbE9TfXcveD5yCDj/+G+hNKmMh/HavY0/FYRIhmmcrN+Wg88EZ/CXLqLxj7uHMp/vrmKoZmLx7fXabkLBUNf91TZW+AHHapUaF2B++TcYml90r3qDi8XsLwv5w2B9g76Yq+rCIcCd4mE6ovj5mHCwn1YYvCQF6pYAPC4jiubmHdvaiOzRxY+o069PgXTwOhzcckuDr/Ir1oSC0W+pFdurPpbj/6VQTrMXeHMVVMKVAO5Me+MfGSw4yxVKl7nqEW9ASSfNO0VIAB+92rd3OngCwfKuinyuA==';
  let verifier;

  b.start();
  verifier = crypto.createVerify('RSA-SHA256');
  verifier.update(thing);
  verifier.verify(rsaPublicKey, signature, 'base64');
  b.end();

  assert.ok(verifier);
});

Deno.bench(`crypto.verify('RSA-SHA256')`, { group: 'crypto' }, async function (b) {
  const { resolve } = await import('node:path');
  const { fileURLToPath } = await import('node:url');
  const crypto = await import('node:crypto');
  const { readFileSync } = await import('node:fs');
  const assert = await import('node:assert');
  const { Buffer } = await import('node:buffer');

  const currentFile = resolve(fileURLToPath(import.meta.url), '..');
  const rsaPublicKey = readFileSync(`${currentFile}/public-key.pem`, 'utf-8');

  const thing = 'hello world';
  const signature = 'UNrDtit7FpZy6eOHb+PklG6Ww8a7ARqMuQGZ+lkTOJPASjkbBoT3RqIExbE9TfXcveD5yCDj/+G+hNKmMh/HavY0/FYRIhmmcrN+Wg88EZ/CXLqLxj7uHMp/vrmKoZmLx7fXabkLBUNf91TZW+AHHapUaF2B++TcYml90r3qDi8XsLwv5w2B9g76Yq+rCIcCd4mE6ovj5mHCwn1YYvCQF6pYAPC4jiubmHdvaiOzRxY+o069PgXTwOhzcckuDr/Ir1oSC0W+pFdurPpbj/6VQTrMXeHMVVMKVAO5Me+MfGSw4yxVKl7nqEW9ASSfNO0VIAB+92rd3OngCwfKuinyuA==';

  let r;

  b.start();
  r = crypto.verify('RSA-SHA256', thing, rsaPublicKey, Buffer.from(signature, 'base64'));
  b.end();

  assert.ok(r);
});
