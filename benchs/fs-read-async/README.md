# fs-read-async

## benchmark.mjs.log

```txt
readFile x 30,857 ops/sec ±2.13% (80 runs sampled)
readFile utf-8 x 32,308 ops/sec ±0.82% (87 runs sampled)
----------------------------------------------------------------------------
readFile x 31,776 ops/sec ±0.92% (86 runs sampled)
readFile utf-8 x 42,665 ops/sec ±2.28% (82 runs sampled)
----------------------------------------------------------------------------
readFile x 32,272 ops/sec ±1.15% (85 runs sampled)
readFile utf-8 x 33,458 ops/sec ±2.20% (77 runs sampled)
----------------------------------------------------------------------------
```

## cronometro.mjs.log

```txt
╔════════════════╤═════════╤═════════════════╤═══════════╤═════════════════════════╗
║ Slower tests   │ Samples │          Result │ Tolerance │ Difference with slowest ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ readFile utf-8 │    2000 │ 28107.40 op/sec │  ± 0.90 % │                         ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ Fastest test   │ Samples │          Result │ Tolerance │ Difference with slowest ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ readFile       │    4000 │ 30184.89 op/sec │  ± 0.92 % │ + 7.39 %                ║
╚════════════════╧═════════╧═════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔════════════════╤═════════╤═════════════════╤═══════════╤═════════════════════════╗
║ Slower tests   │ Samples │          Result │ Tolerance │ Difference with slowest ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ readFile utf-8 │    2000 │ 21197.45 op/sec │  ± 0.97 % │                         ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ Fastest test   │ Samples │          Result │ Tolerance │ Difference with slowest ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ readFile       │    2500 │ 32396.80 op/sec │  ± 0.87 % │ + 52.83 %               ║
╚════════════════╧═════════╧═════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔════════════════╤═════════╤═════════════════╤═══════════╤═════════════════════════╗
║ Slower tests   │ Samples │          Result │ Tolerance │ Difference with slowest ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ readFile utf-8 │    2500 │ 28750.35 op/sec │  ± 0.92 % │                         ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ Fastest test   │ Samples │          Result │ Tolerance │ Difference with slowest ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ readFile       │    5000 │ 30154.37 op/sec │  ± 0.98 % │ + 4.88 %                ║
╚════════════════╧═════════╧═════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
```

## deno.managed.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-async/deno.managed.mjs
benchmark           time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------- -----------------------------
readFile            18.03 µs/iter      55,466.2     (11.2 µs … 4.27 ms)  17.23 µs  28.03 µs  34.34 µs
readFile utf-8      21.99 µs/iter      45,481.4     (13.18 µs … 8.5 ms)  20.48 µs  34.37 µs  39.04 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-async/deno.managed.mjs
benchmark           time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------- -----------------------------
readFile            29.76 µs/iter      33,603.3     (18.91 µs … 4.7 ms)  29.05 µs  44.04 µs  51.33 µs
readFile utf-8      29.71 µs/iter      33,662.1    (20.54 µs … 6.02 ms)  28.82 µs  40.81 µs  46.32 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-async/deno.managed.mjs
benchmark           time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------- -----------------------------
readFile            18.51 µs/iter      54,030.7    (10.96 µs … 6.03 ms)  16.63 µs  35.64 µs  40.07 µs
readFile utf-8      22.65 µs/iter      44,150.1   (12.58 µs … 10.44 ms)  20.16 µs  24.78 µs  28.25 µs
----------------------------------------------------------------------------
```

## deno.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-async/deno.mjs
benchmark           time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------- -----------------------------
readFile            12.78 µs/iter      78,259.5   (8.58 µs … 392.33 µs)  14.34 µs   25.4 µs  30.79 µs
readFile utf-8      19.55 µs/iter      51,156.1  (12.06 µs … 180.29 µs)  21.95 µs  31.79 µs   37.3 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-async/deno.mjs
benchmark           time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------- -----------------------------
readFile            18.91 µs/iter      52,873.7  (10.67 µs … 576.19 µs)  20.35 µs  33.08 µs   43.3 µs
readFile utf-8      20.45 µs/iter      48,902.1   (11.6 µs … 408.36 µs)  21.87 µs   38.8 µs  62.91 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-async/deno.mjs
benchmark           time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------- -----------------------------
readFile            12.55 µs/iter      79,681.3   (8.83 µs … 470.99 µs)  14.54 µs  20.75 µs  22.87 µs
readFile utf-8      12.88 µs/iter      77,621.7  (10.51 µs … 237.87 µs)  14.37 µs  19.89 µs  22.13 µs
----------------------------------------------------------------------------
```

## isitfast.js.log

```txt
read file:

readFilereadFile       404,040.404 op/s (2,475 ns) ±1% x2,500
               1,560 kB ±0.3% x25

readFile utf-8readFile utf-8 400,962.31 op/s (2,494 ns) ±1% x2,500
               1,632 kB ±0.3% x25

=> Slowest is readFile utf-8
=> Fastest is readFile

----------------------------------------------------------------------------
read file:

readFilereadFile       486,854.917 op/s (2,054 ns) ±1% x2,500
               1,560 kB ±0.3% x25

readFile utf-8readFile utf-8 380,952.381 op/s (2,625 ns) ±1% x2,500
               1,632 kB ±0.3% x25

=> Slowest is readFile utf-8
=> Fastest is readFile

----------------------------------------------------------------------------
read file:

readFilereadFile       434,027.778 op/s (2,304 ns) ±1% x2,500
               1,560 kB ±0.3% x25

readFile utf-8readFile utf-8 365,630.713 op/s (2,735 ns) ±1% x2,500
               1,616 kB ±0.3% x25

=> Slowest is readFile utf-8
=> Fastest is readFile

----------------------------------------------------------------------------
```

## mitata.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark           time (avg)             (min … max)
------------------------------------------------------
readFile         33.96 µs/iter  (23.01 µs … 351.08 µs)
readFile utf-8   32.99 µs/iter  (23.41 µs … 414.07 µs)

summary
  readFile utf-8
   1.03x faster than readFile
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark           time (avg)             (min … max)
------------------------------------------------------
readFile         30.75 µs/iter  (23.52 µs … 398.87 µs)
readFile utf-8   33.12 µs/iter  (23.91 µs … 324.09 µs)

summary
  readFile
   1.08x faster than readFile utf-8
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark           time (avg)             (min … max)
------------------------------------------------------
readFile         30.89 µs/iter   (23.39 µs … 495.2 µs)
readFile utf-8   30.23 µs/iter   (23.55 µs … 316.4 µs)

summary
  readFile utf-8
   1.02x faster than readFile
----------------------------------------------------------------------------
```

## node.managed.mjs.log

```txt
readFile x 31,879 ops/sec +/- 0.08% (12 runs sampled)	min..max=(28.93us ... 35.50us) p75=33.02us p99=35.50us
readFile utf-8 x 31,992 ops/sec +/- 0.04% (11 runs sampled)	min..max=(29.53us ... 34.17us) p75=32.08us p99=34.17us
----------------------------------------------------------------------------
readFile x 40,057 ops/sec +/- 0.07% (12 runs sampled)	min..max=(22.97us ... 28.36us) p75=25.34us p99=28.36us
readFile utf-8 x 38,049 ops/sec +/- 0.02% (10 runs sampled)	min..max=(24.86us ... 26.62us) p75=26.26us p99=26.62us
----------------------------------------------------------------------------
readFile x 32,814 ops/sec +/- 0.07% (11 runs sampled)	min..max=(28.70us ... 34.34us) p75=33.13us p99=34.34us
readFile utf-8 x 32,839 ops/sec +/- 0.03% (12 runs sampled)	min..max=(29.07us ... 31.96us) p75=31.15us p99=31.96us
----------------------------------------------------------------------------
```

## node.mjs.log

```txt
readFile x 31,614 ops/sec +/- 0.08% (11 runs sampled)	min..max=(29.71us ... 37.10us) p75=34.48us p99=37.10us
readFile utf-8 x 31,967 ops/sec +/- 0.03% (11 runs sampled)	min..max=(29.99us ... 32.70us) p75=31.99us p99=32.70us
----------------------------------------------------------------------------
readFile x 31,595 ops/sec +/- 0.09% (13 runs sampled)	min..max=(28.90us ... 36.93us) p75=33.23us p99=36.93us
readFile utf-8 x 31,517 ops/sec +/- 0.03% (11 runs sampled)	min..max=(30.41us ... 33.15us) p75=32.59us p99=33.15us
----------------------------------------------------------------------------
readFile x 32,338 ops/sec +/- 0.08% (12 runs sampled)	min..max=(28.66us ... 36.77us) p75=32.35us p99=36.77us
readFile utf-8 x 32,945 ops/sec +/- 0.04% (11 runs sampled)	min..max=(29.23us ... 32.76us) p75=30.99us p99=32.76us
----------------------------------------------------------------------------
```

## tinybench.mjs.log

```txt
┌─────────┬──────────────────┬──────────┬───────────────────┬──────────┬─────────┐
│ (index) │    Task Name     │ ops/sec  │ Average Time (ns) │  Margin  │ Samples │
├─────────┼──────────────────┼──────────┼───────────────────┼──────────┼─────────┤
│    0    │    'readFile'    │ '26,974' │ 37071.84320214923 │ '±1.26%' │  2698   │
│    1    │ 'readFile utf-8' │ '26,644' │ 37531.5647366095  │ '±1.46%' │  2665   │
└─────────┴──────────────────┴──────────┴───────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬──────────────────┬──────────┬───────────────────┬──────────┬─────────┐
│ (index) │    Task Name     │ ops/sec  │ Average Time (ns) │  Margin  │ Samples │
├─────────┼──────────────────┼──────────┼───────────────────┼──────────┼─────────┤
│    0    │    'readFile'    │ '26,542' │ 37675.84746145764 │ '±2.24%' │  2655   │
│    1    │ 'readFile utf-8' │ '27,862' │ 35890.3419469013  │ '±1.60%' │  2787   │
└─────────┴──────────────────┴──────────┴───────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬──────────────────┬──────────┬────────────────────┬──────────┬─────────┐
│ (index) │    Task Name     │ ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼──────────────────┼──────────┼────────────────────┼──────────┼─────────┤
│    0    │    'readFile'    │ '29,443' │ 33963.90899857712  │ '±1.28%' │  2945   │
│    1    │ 'readFile utf-8' │ '31,615' │ 31630.165079121987 │ '±1.29%' │  3162   │
└─────────┴──────────────────┴──────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
```