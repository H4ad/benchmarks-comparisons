const { suite, useTerminal } = require('isitfast');

process.stdout.clearLine = () => { };
process.stdout.cursorTo = () => { };

const crypto = require('node:crypto');
const { readFileSync } = require('fs');

const rsaPrivateKey = readFileSync(__dirname + '/private-key.pem', 'utf-8');
const rsaPublicKey = readFileSync(__dirname + '/public-key.pem', 'utf-8');

const thing = 'hello world'
const algorithm = 'RSA-SHA256'
const signature = crypto.createSign(algorithm).update(thing).sign(rsaPrivateKey, 'base64')

const bench = suite('crypto.verify')
  .add(`crypto.createVerify('${algorithm}')`, function () {
    var verifier = crypto.createVerify(algorithm);
    verifier.update(thing);
    verifier.verify(rsaPublicKey, signature, 'base64');
  })
  .add(`crypto.verify('${algorithm}')`, function () {
    crypto.verify(algorithm, thing, rsaPublicKey, Buffer.from(signature, 'base64'));
  });

(async () => {
  useTerminal();

  await bench.run();
})();
