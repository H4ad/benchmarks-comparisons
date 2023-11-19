import cronometro from 'cronometro';
import crypto from 'crypto';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFile = resolve(fileURLToPath(import.meta.url), '..');
const rsaPrivateKey = readFileSync(`${currentFile}/private-key.pem`, 'utf-8');
const rsaPublicKey = readFileSync(`${currentFile}/public-key.pem`, 'utf-8');

const thing = 'hello world'
const algorithm = 'RSA-SHA256'
const signature = crypto.createSign(algorithm).update(thing).sign(rsaPrivateKey, 'base64')

const results = cronometro({
  [`crypto.createVerify('${algorithm}')`]: function () {
    var verifier = crypto.createVerify(algorithm);
    verifier.update(thing);
    verifier.verify(rsaPublicKey, signature, 'base64');
  },
  [`crypto.verify('${algorithm}')`]: function () {
    crypto.verify(algorithm, thing, rsaPublicKey, Buffer.from(signature, 'base64'))
  }
}, {
  print: { compare: true },
});
