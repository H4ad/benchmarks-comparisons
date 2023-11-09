import benchmark from 'benchmark';

const suite = benchmark.Suite();

const pattern = /[123]/g
const replacements = { 1: 'a', 2: 'b', 3: 'c' }

const subject = '123123123123123123123123123123123123123123123123'


suite
  .add('single with matcher', function () {
    const r = subject.replace(pattern, m => replacements[m])
  })
  .add('multiple replaces', function () {
    const r = subject.replace(/1/g, 'a').replace(/2/g, 'b').replace(/3/g, 'c')
  })
  .on('cycle', event => {
    console.log(event.target.toString())
  })
  .run({ async: false })
