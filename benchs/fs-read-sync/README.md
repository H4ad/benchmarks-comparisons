# fs-read-sync

## benchmark.mjs.log

```txt
readFileSync x 307,080 ops/sec ±0.59% (96 runs sampled)
readFileSync utf-8 x 387,736 ops/sec ±0.46% (94 runs sampled)
----------------------------------------------------------------------------
readFileSync x 304,396 ops/sec ±0.71% (90 runs sampled)
readFileSync utf-8 x 381,267 ops/sec ±1.50% (92 runs sampled)
----------------------------------------------------------------------------
readFileSync x 306,421 ops/sec ±0.79% (96 runs sampled)
readFileSync utf-8 x 388,061 ops/sec ±0.61% (96 runs sampled)
----------------------------------------------------------------------------
```

## cronometro.mjs.log

```txt
╔════════════════════╤═════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests       │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ readFileSync       │    8000 │ 281722.94 op/sec │  ± 0.97 % │                         ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test       │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ readFileSync utf-8 │    2500 │ 348650.24 op/sec │  ± 0.88 % │ + 23.76 %               ║
╚════════════════════╧═════════╧══════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔════════════════════╤═════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests       │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ readFileSync       │    5500 │ 259403.19 op/sec │  ± 1.00 % │                         ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test       │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ readFileSync utf-8 │    9500 │ 333465.08 op/sec │  ± 0.99 % │ + 28.55 %               ║
╚════════════════════╧═════════╧══════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔════════════════════╤═════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests       │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ readFileSync       │    5500 │ 229540.13 op/sec │  ± 0.92 % │                         ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test       │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ readFileSync utf-8 │   10000 │ 325058.34 op/sec │  ± 1.43 % │ + 41.61 %               ║
╚════════════════════╧═════════╧══════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
```

## deno.managed.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-sync/deno.managed.mjs
benchmark               time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------ -----------------------------
readFileSync             7.55 µs/iter     132,432.8   (5.55 µs … 330.59 µs)   8.33 µs  14.11 µs   15.6 µs
readFileSync utf-8       9.84 µs/iter     101,657.0    (7.09 µs … 75.19 µs)   10.9 µs  19.77 µs  22.11 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-sync/deno.managed.mjs
benchmark               time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------ -----------------------------
readFileSync              7.8 µs/iter     128,254.5   (5.53 µs … 525.61 µs)   8.27 µs  14.29 µs  17.83 µs
readFileSync utf-8       9.04 µs/iter     110,595.0    (6.64 µs … 82.58 µs)  10.35 µs  17.21 µs  18.43 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-sync/deno.managed.mjs
benchmark               time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------ -----------------------------
readFileSync             7.96 µs/iter     125,691.3   (5.76 µs … 414.12 µs)   8.38 µs  16.98 µs  20.38 µs
readFileSync utf-8       9.79 µs/iter     102,134.6   (6.81 µs … 121.44 µs)  10.73 µs  20.77 µs  25.08 µs
----------------------------------------------------------------------------
```

## deno.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-sync/deno.mjs
benchmark               time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------ -----------------------------
readFileSync             3.58 µs/iter     279,219.6     (3.37 µs … 4.04 µs)   3.71 µs   4.04 µs   4.04 µs
readFileSync utf-8       4.52 µs/iter     221,479.2     (4.21 µs … 4.86 µs)   4.71 µs   4.86 µs   4.86 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-sync/deno.mjs
benchmark               time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------ -----------------------------
readFileSync             3.67 µs/iter     272,168.8     (3.43 µs … 4.18 µs)   3.84 µs   4.18 µs   4.18 µs
readFileSync utf-8       4.35 µs/iter     229,729.3     (4.03 µs … 4.59 µs)   4.51 µs   4.59 µs   4.59 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-sync/deno.mjs
benchmark               time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------ -----------------------------
readFileSync             3.44 µs/iter     290,304.9     (3.27 µs … 3.87 µs)   3.48 µs   3.87 µs   3.87 µs
readFileSync utf-8       4.22 µs/iter     236,698.2     (3.86 µs … 4.67 µs)   4.39 µs   4.67 µs   4.67 µs
----------------------------------------------------------------------------
```

## isitfast.js.log

```txt
read file:

readFileSyncreadFileSync       225,275.963 op/s (4,439 ns) ±1% x2,500
                   104 kB ±5% x25

readFileSync utf-8readFileSync utf-8 362,844.702 op/s (2,756 ns) ±1% x2,500
                   0 kB ±0% x25

=> Slowest is readFileSync
=> Fastest is readFileSync utf-8

----------------------------------------------------------------------------
read file:

readFileSyncreadFileSync       228,414.801 op/s (4,378 ns) ±1% x2,500
                   104 kB ±5% x25

readFileSync utf-8readFileSync utf-8 368,324.125 op/s (2,715 ns) ±1% x2,500
                   0 kB ±0% x25

=> Slowest is readFileSync
=> Fastest is readFileSync utf-8

----------------------------------------------------------------------------
read file:

readFileSyncreadFileSync       234,246.896 op/s (4,269 ns) ±1% x2,500
                   104 kB ±5% x25

readFileSync utf-8readFileSync utf-8 358,937.545 op/s (2,786 ns) ±1% x2,500
                   0 kB ±0% x25

=> Slowest is readFileSync
=> Fastest is readFileSync utf-8

----------------------------------------------------------------------------
```

## mitata.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark               time (avg)             (min … max)
----------------------------------------------------------
readFileSync          3.25 µs/iter     (3.09 µs … 3.66 µs)
readFileSync utf-8    2.57 µs/iter     (2.44 µs … 3.92 µs)

summary
  readFileSync utf-8
   1.27x faster than readFileSync
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark               time (avg)             (min … max)
----------------------------------------------------------
readFileSync          3.31 µs/iter     (3.14 µs … 4.27 µs)
readFileSync utf-8    2.66 µs/iter     (2.46 µs … 3.07 µs)

summary
  readFileSync utf-8
   1.24x faster than readFileSync
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark               time (avg)             (min … max)
----------------------------------------------------------
readFileSync          3.29 µs/iter     (3.16 µs … 3.99 µs)
readFileSync utf-8    2.54 µs/iter     (2.41 µs … 2.83 µs)

summary
  readFileSync utf-8
   1.3x faster than readFileSync
----------------------------------------------------------------------------
```

## node.managed.mjs.log

```txt
readFileSync x 285,849 ops/sec +/- 0.05% (10 runs sampled)	min..max=(3.19us ... 3.65us) p75=3.51us p99=3.65us
readFileSync utf-8 x 353,606 ops/sec +/- 0.07% (12 runs sampled)	min..max=(2.49us ... 3.10us) p75=2.89us p99=3.10us
----------------------------------------------------------------------------
readFileSync x 295,650 ops/sec +/- 0.06% (11 runs sampled)	min..max=(3.15us ... 3.87us) p75=3.42us p99=3.87us
readFileSync utf-8 x 344,051 ops/sec +/- 0.08% (10 runs sampled)	min..max=(2.51us ... 3.26us) p75=2.94us p99=3.26us
----------------------------------------------------------------------------
readFileSync x 298,886 ops/sec +/- 0.05% (11 runs sampled)	min..max=(3.08us ... 3.72us) p75=3.30us p99=3.72us
readFileSync utf-8 x 388,751 ops/sec +/- 0.02% (10 runs sampled)	min..max=(2.51us ... 2.63us) p75=2.59us p99=2.63us
----------------------------------------------------------------------------
```

## node.mjs.log

```txt
readFileSync x 295,950 ops/sec +/- 0.07% (11 runs sampled)	min..max=(3.19us ... 3.79us) p75=3.56us p99=3.79us
readFileSync utf-8 x 380,240 ops/sec +/- 0.02% (11 runs sampled)	min..max=(2.49us ... 2.65us) p75=2.65us p99=2.65us
----------------------------------------------------------------------------
readFileSync x 292,727 ops/sec +/- 0.02% (10 runs sampled)	min..max=(3.25us ... 3.41us) p75=3.38us p99=3.41us
readFileSync utf-8 x 378,896 ops/sec +/- 0.04% (13 runs sampled)	min..max=(2.42us ... 2.86us) p75=2.64us p99=2.86us
----------------------------------------------------------------------------
readFileSync x 294,847 ops/sec +/- 0.03% (12 runs sampled)	min..max=(3.23us ... 3.62us) p75=3.34us p99=3.62us
readFileSync utf-8 x 366,113 ops/sec +/- 0.02% (11 runs sampled)	min..max=(2.65us ... 2.82us) p75=2.77us p99=2.82us
----------------------------------------------------------------------------
```

## tinybench.mjs.log

```txt
┌─────────┬──────────────────────┬───────────┬────────────────────┬──────────┬─────────┐
│ (index) │      Task Name       │  ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼──────────────────────┼───────────┼────────────────────┼──────────┼─────────┤
│    0    │    'readFileSync'    │ '275,336' │ 3631.9227866991337 │ '±2.81%' │  27534  │
│    1    │ 'readFileSync utf-8' │ '350,531' │ 2852.8130867844156 │ '±2.75%' │  35054  │
└─────────┴──────────────────────┴───────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬──────────────────────┬───────────┬────────────────────┬──────────┬─────────┐
│ (index) │      Task Name       │  ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼──────────────────────┼───────────┼────────────────────┼──────────┼─────────┤
│    0    │    'readFileSync'    │ '265,194' │ 3770.813460814378  │ '±1.65%' │  26520  │
│    1    │ 'readFileSync utf-8' │ '341,093' │ 2931.7479351291345 │ '±3.22%' │  34110  │
└─────────┴──────────────────────┴───────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬──────────────────────┬───────────┬────────────────────┬──────────┬─────────┐
│ (index) │      Task Name       │  ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼──────────────────────┼───────────┼────────────────────┼──────────┼─────────┤
│    0    │    'readFileSync'    │ '270,407' │ 3698.1255111560185 │ '±1.80%' │  27041  │
│    1    │ 'readFileSync utf-8' │ '348,643' │ 2868.2566494835205 │ '±3.26%' │  34865  │
└─────────┴──────────────────────┴───────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
```