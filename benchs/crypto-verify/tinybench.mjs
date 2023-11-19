import crypto from 'crypto';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { Bench } from 'tinybench';
import { fileURLToPath } from 'url';

const currentFile = resolve(fileURLToPath(import.meta.url), '..');
const rsaPrivateKey = readFileSync(`${currentFile}/private-key.pem`, 'utf-8');
const rsaPublicKey = readFileSync(`${currentFile}/public-key.pem`, 'utf-8');

const thing = 'hello world'
const algorithm = 'RSA-SHA256'
const signature = crypto.createSign(algorithm).update(thing).sign(rsaPrivateKey, 'base64')

const bench = new Bench({ time: 100 });

bench
  .add(`crypto.createVerify('${algorithm}')`, function () {
    var verifier = crypto.createVerify(algorithm)
    verifier.update(thing)
    verifier.verify(rsaPublicKey, signature, 'base64')
  })
  .add(`crypto.verify('${algorithm}')`, function () {
    crypto.verify(algorithm, thing, rsaPublicKey, Buffer.from(signature, 'base64'))
  });

bench.run().then(() => {
  console.table(bench.table());
});
