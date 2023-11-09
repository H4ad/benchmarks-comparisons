import { Bench } from 'tinybench';

const bench = new Bench({ time: 100 });

const pattern = /[123]/g
const replacements = { 1: 'a', 2: 'b', 3: 'c' }

const subject = '123123123123123123123123123123123123123123123123'

bench
  .add('single with matcher', function () {
    const r = subject.replace(pattern, m => replacements[m])
  })
  .add('multiple replaces', function () {
    const r = subject.replace(/1/g, 'a').replace(/2/g, 'b').replace(/3/g, 'c')
  });

bench.run().then(() => {
  console.table(bench.table());
});
