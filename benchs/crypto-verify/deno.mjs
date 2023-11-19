import { readFileSync } from 'node:fs';
import crypto from 'node:crypto';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Buffer } from 'node:buffer';

const currentFile = resolve(fileURLToPath(import.meta.url), '..');
const rsaPublicKey = readFileSync(`${currentFile}/public-key.pem`, 'utf-8');

const thing = 'hello world'
const algorithm = 'RSA-SHA256'
const signature = 'UNrDtit7FpZy6eOHb+PklG6Ww8a7ARqMuQGZ+lkTOJPASjkbBoT3RqIExbE9TfXcveD5yCDj/+G+hNKmMh/HavY0/FYRIhmmcrN+Wg88EZ/CXLqLxj7uHMp/vrmKoZmLx7fXabkLBUNf91TZW+AHHapUaF2B++TcYml90r3qDi8XsLwv5w2B9g76Yq+rCIcCd4mE6ovj5mHCwn1YYvCQF6pYAPC4jiubmHdvaiOzRxY+o069PgXTwOhzcckuDr/Ir1oSC0W+pFdurPpbj/6VQTrMXeHMVVMKVAO5Me+MfGSw4yxVKl7nqEW9ASSfNO0VIAB+92rd3OngCwfKuinyuA=='

Deno.bench(`crypto.createVerify('${algorithm}')`, { group: 'crypto' }, function () {
  var verifier = crypto.createVerify(algorithm)
  verifier.update(thing)
  verifier.verify(rsaPublicKey, signature, 'base64')
});

Deno.bench(`crypto.verify('${algorithm}')`, { group: 'crypto' }, function () {
  crypto.verify(algorithm, thing, rsaPublicKey, Buffer.from(signature, 'base64'))
});
