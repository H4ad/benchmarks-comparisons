import { bench, group, run } from 'mitata';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const sampleFile = resolve(fileURLToPath(import.meta.url), '..', 'sample-file.txt');

group(() => {
  bench('readFileSync', function () {
    const r = readFileSync(sampleFile);
  });

  bench('readFileSync utf-8', function () {
    const r = readFileSync(sampleFile, 'utf-8');
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