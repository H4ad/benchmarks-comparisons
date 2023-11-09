import { bench, group, run } from 'mitata';

const pattern = /[123]/g
const replacements = { 1: 'a', 2: 'b', 3: 'c' }

const subject = '123123123123123123123123123123123123123123123123'

group(() => {
  bench('single with matcher', function () {
    const r = subject.replace(pattern, m => replacements[m])
  });

  bench('multiple replaces', function () {
    const r = subject.replace(/1/g, 'a').replace(/2/g, 'b').replace(/3/g, 'c')
  });
});

await run({
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: false, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  collect: false, // enable/disable collecting returned values into an array during the benchmark (default: false)
  percentiles: false, // enable/disable percentiles column (default: true)
});