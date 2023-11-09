import { bench, group, run } from 'mitata';

const text = 'text/html,application/xhtml+xml,application/xml;application/json;q=0.9,image/avif,image/webp,*/*;q=0.8'
const regex = /application\/json/

group(() => {
  bench('Using includes', function () {
    const r = text.includes('application/json')
  });

  bench('Using indexof', function () {
    const r = text.indexOf('application/json') !== -1
  });

  bench('Using cached RegExp.test', function () {
    const r = regex.test(text)
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