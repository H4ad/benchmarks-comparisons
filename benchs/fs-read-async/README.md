# fs-read-async

## benchmark.mjs.log

```txt
readFile x 30,112 ops/sec ±1.55% (71 runs sampled)
readFile utf-8 x 27,643 ops/sec ±0.92% (84 runs sampled)
----------------------------------------------------------------------------
readFile x 31,578 ops/sec ±2.29% (73 runs sampled)
readFile utf-8 x 29,396 ops/sec ±1.62% (79 runs sampled)
----------------------------------------------------------------------------
readFile x 29,747 ops/sec ±1.42% (72 runs sampled)
readFile utf-8 x 28,820 ops/sec ±1.13% (81 runs sampled)
----------------------------------------------------------------------------
```

## cronometro.mjs.log

```txt
╔════════════════╤═════════╤═════════════════╤═══════════╤═════════════════════════╗
║ Slower tests   │ Samples │          Result │ Tolerance │ Difference with slowest ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ readFile utf-8 │    3500 │ 24123.57 op/sec │  ± 0.90 % │                         ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ Fastest test   │ Samples │          Result │ Tolerance │ Difference with slowest ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ readFile       │    3000 │ 37763.55 op/sec │  ± 0.97 % │ + 56.54 %               ║
╚════════════════╧═════════╧═════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔════════════════╤═════════╤═════════════════╤═══════════╤═════════════════════════╗
║ Slower tests   │ Samples │          Result │ Tolerance │ Difference with slowest ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ readFile       │    2500 │ 26393.12 op/sec │  ± 0.93 % │                         ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ Fastest test   │ Samples │          Result │ Tolerance │ Difference with slowest ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ readFile utf-8 │    5000 │ 33990.70 op/sec │  ± 0.95 % │ + 28.79 %               ║
╚════════════════╧═════════╧═════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔════════════════╤═════════╤═════════════════╤═══════════╤═════════════════════════╗
║ Slower tests   │ Samples │          Result │ Tolerance │ Difference with slowest ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ readFile       │    4000 │ 26134.36 op/sec │  ± 0.91 % │                         ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ Fastest test   │ Samples │          Result │ Tolerance │ Difference with slowest ║
╟────────────────┼─────────┼─────────────────┼───────────┼─────────────────────────╢
║ readFile utf-8 │    3500 │ 26801.56 op/sec │  ± 0.99 % │ + 2.55 %                ║
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
readFile            18.96 µs/iter      52,728.7    (11.91 µs … 5.79 ms)  17.61 µs  39.21 µs  44.72 µs
readFile utf-8      31.01 µs/iter      32,251.8    (16.71 µs … 5.15 ms)  31.02 µs  54.94 µs  76.37 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-async/deno.managed.mjs
benchmark           time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------- -----------------------------
readFile             23.8 µs/iter      42,015.0    (13.57 µs … 4.16 ms)  25.18 µs  46.46 µs  55.13 µs
readFile utf-8      26.12 µs/iter      38,277.5    (13.23 µs … 6.04 ms)  29.58 µs   48.9 µs  59.59 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-async/deno.managed.mjs
benchmark           time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------- -----------------------------
readFile            24.35 µs/iter      41,062.7    (11.01 µs … 3.58 ms)  27.81 µs  60.41 µs  84.92 µs
readFile utf-8      23.24 µs/iter      43,029.3    (13.46 µs … 8.38 ms)  20.95 µs  41.78 µs   46.5 µs
----------------------------------------------------------------------------
```

## deno.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-async/deno.mjs
benchmark           time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------- -----------------------------
readFile            20.01 µs/iter      49,982.5  (11.64 µs … 741.81 µs)  21.26 µs  37.83 µs   47.9 µs
readFile utf-8      19.25 µs/iter      51,953.4   (9.11 µs … 389.93 µs)  22.71 µs  38.79 µs  48.89 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-async/deno.mjs
benchmark           time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------- -----------------------------
readFile            16.18 µs/iter      61,816.2   (8.82 µs … 652.44 µs)  19.23 µs  31.81 µs  37.04 µs
readFile utf-8       14.3 µs/iter      69,925.2   (8.01 µs … 285.95 µs)  16.31 µs  28.43 µs  33.72 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-async/deno.mjs
benchmark           time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------- -----------------------------
readFile             20.5 µs/iter      48,773.4   (11.78 µs … 628.1 µs)  22.16 µs  42.69 µs  54.65 µs
readFile utf-8      18.19 µs/iter      54,963.2    (10.08 µs … 1.06 ms)  22.01 µs  39.02 µs  50.95 µs
----------------------------------------------------------------------------
```

## isitfast.js.log

```txt
read file:

readFilereadFile       360,360.36 op/s (2,775 ns) ±1% x2,500
               1,560 kB ±0.3% x25

readFile utf-8readFile utf-8 447,427.293 op/s (2,235 ns) ±1% x2,500
               1,632 kB ±0.3% x25

=> Slowest is readFile
=> Fastest is readFile utf-8

----------------------------------------------------------------------------
read file:

readFilereadFile       396,039.604 op/s (2,525 ns) ±1% x2,500
               1,560 kB ±0.3% x25

readFile utf-8readFile utf-8 352,733.686 op/s (2,835 ns) ±1% x2,500
               1,616 kB ±0.3% x25

=> Slowest is readFile utf-8
=> Fastest is readFile

----------------------------------------------------------------------------
read file:

readFilereadFile       364,166.06 op/s (2,746 ns) ±1% x2,500
               1,560 kB ±0.3% x25

readFile utf-8readFile utf-8 421,052.632 op/s (2,375 ns) ±1% x2,500
               1,632 kB ±0.3% x25

=> Slowest is readFile
=> Fastest is readFile utf-8

----------------------------------------------------------------------------
```

## mitata.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark           time (avg)             (min … max)
------------------------------------------------------
readFile         32.43 µs/iter  (22.03 µs … 568.53 µs)
readFile utf-8    32.3 µs/iter  (22.37 µs … 398.64 µs)

summary
  readFile utf-8
   1x faster than readFile
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark           time (avg)             (min … max)
------------------------------------------------------
readFile         31.76 µs/iter   (22.08 µs … 330.2 µs)
readFile utf-8   32.63 µs/iter  (22.47 µs … 529.86 µs)

summary
  readFile
   1.03x faster than readFile utf-8
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark           time (avg)             (min … max)
------------------------------------------------------
readFile         31.82 µs/iter   (22.29 µs … 541.5 µs)
readFile utf-8   33.15 µs/iter      (22.5 µs … 606 µs)

summary
  readFile
   1.04x faster than readFile utf-8
----------------------------------------------------------------------------
```

## node.managed.mjs.log

```txt
readFile x 30,177 ops/sec +/- 0.09% (11 runs sampled)	min..max=(30.34us ... 39.34us) p75=33.35us p99=39.34us
readFile utf-8 x 29,705 ops/sec +/- 0.05% (12 runs sampled)	min..max=(31.01us ... 36.13us) p75=35.16us p99=36.13us
----------------------------------------------------------------------------
readFile x 30,504 ops/sec +/- 0.06% (12 runs sampled)	min..max=(30.51us ... 35.70us) p75=34.32us p99=35.70us
readFile utf-8 x 29,662 ops/sec +/- 0.06% (12 runs sampled)	min..max=(31.81us ... 37.53us) p75=35.59us p99=37.53us
----------------------------------------------------------------------------
readFile x 31,051 ops/sec +/- 0.06% (12 runs sampled)	min..max=(29.97us ... 36.72us) p75=32.21us p99=36.72us
readFile utf-8 x 31,314 ops/sec +/- 0.06% (12 runs sampled)	min..max=(29.96us ... 37.09us) p75=33.25us p99=37.09us
----------------------------------------------------------------------------
```

## node.mjs.log

```txt
readFile x 30,170 ops/sec +/- 0.09% (11 runs sampled)	min..max=(30.22us ... 38.85us) p75=36.49us p99=38.85us
readFile utf-8 x 27,050 ops/sec +/- 0.04% (10 runs sampled)	min..max=(34.96us ... 39.46us) p75=36.81us p99=39.46us
----------------------------------------------------------------------------
readFile x 29,537 ops/sec +/- 0.04% (11 runs sampled)	min..max=(31.13us ... 36.61us) p75=34.83us p99=36.61us
readFile utf-8 x 28,718 ops/sec +/- 0.08% (12 runs sampled)	min..max=(29.05us ... 39.29us) p75=34.91us p99=39.29us
----------------------------------------------------------------------------
readFile x 29,418 ops/sec +/- 0.09% (12 runs sampled)	min..max=(27.69us ... 38.27us) p75=34.39us p99=38.27us
readFile utf-8 x 30,512 ops/sec +/- 0.03% (10 runs sampled)	min..max=(31.07us ... 33.99us) p75=33.17us p99=33.99us
----------------------------------------------------------------------------
```

## tinybench.mjs.log

```txt
┌─────────┬──────────────────┬──────────┬───────────────────┬──────────┬─────────┐
│ (index) │    Task Name     │ ops/sec  │ Average Time (ns) │  Margin  │ Samples │
├─────────┼──────────────────┼──────────┼───────────────────┼──────────┼─────────┤
│    0    │    'readFile'    │ '27,774' │ 36003.65732098501 │ '±1.82%' │  2778   │
│    1    │ 'readFile utf-8' │ '30,146' │ 33171.58339331992 │ '±1.45%' │  3015   │
└─────────┴──────────────────┴──────────┴───────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬──────────────────┬──────────┬────────────────────┬──────────┬─────────┐
│ (index) │    Task Name     │ ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼──────────────────┼──────────┼────────────────────┼──────────┼─────────┤
│    0    │    'readFile'    │ '26,747' │ 37386.46990784974  │ '±2.12%' │  2675   │
│    1    │ 'readFile utf-8' │ '31,043' │ 32212.983260768047 │ '±1.84%' │  3105   │
└─────────┴──────────────────┴──────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬──────────────────┬──────────┬────────────────────┬──────────┬─────────┐
│ (index) │    Task Name     │ ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼──────────────────┼──────────┼────────────────────┼──────────┼─────────┤
│    0    │    'readFile'    │ '27,045' │ 36974.06576942935  │ '±1.80%' │  2705   │
│    1    │ 'readFile utf-8' │ '27,319' │ 36604.086397349354 │ '±1.70%' │  2732   │
└─────────┴──────────────────┴──────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
```