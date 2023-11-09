import { Bench } from 'tinybench';

const bench = new Bench({ time: 100 });

const text = 'text/html,application/xhtml+xml,application/xml;application/json;q=0.9,image/avif,image/webp,*/*;q=0.8'
const regex = /application\/json/

bench
  .add('Using includes', function () {
    const r = text.includes('application/json')
  })
  .add('Using indexof', function () {
    const r = text.indexOf('application/json') !== -1
  })
  .add('Using cached RegExp.test', function () {
    const r = regex.test(text)
  });

bench.run().then(() => {
  console.table(bench.table());
});
