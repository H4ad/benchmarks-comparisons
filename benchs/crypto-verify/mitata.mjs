import { bench, group, run } from 'mitata';
import crypto from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFile = resolve(fileURLToPath(import.meta.url), '..');
const rsaPrivateKey = readFileSync(`${currentFile}/private-key.pem`, 'utf-8');
const rsaPublicKey = readFileSync(`${currentFile}/public-key.pem`, 'utf-8');

const thing = 'hello world'
const algorithm = 'RSA-SHA256'
const signature = crypto.createSign(algorithm).update(thing).sign(rsaPrivateKey, 'base64')

group(() => {
  bench(`crypto.createVerify('${algorithm}')`, function () {
    var verifier = crypto.createVerify(algorithm)
    verifier.update(thing)
    verifier.verify(rsaPublicKey, signature, 'base64')
  });

  bench(`crypto.verify('${algorithm}')`, function () {
    crypto.verify(algorithm, thing, rsaPublicKey, Buffer.from(signature, 'base64'))
  });
})

await run({
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: false, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  collect: false, // enable/disable collecting returned values into an array during the benchmark (default: false)
  percentiles: false, // enable/disable percentiles column (default: true)
});
