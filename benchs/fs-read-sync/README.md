# fs-read-sync

## benchmark.mjs.log

```txt
readFileSync x 312,346 ops/sec ±0.34% (97 runs sampled)
readFileSync utf-8 x 395,907 ops/sec ±0.65% (95 runs sampled)
----------------------------------------------------------------------------
readFileSync x 313,040 ops/sec ±0.44% (96 runs sampled)
readFileSync utf-8 x 398,410 ops/sec ±0.38% (93 runs sampled)
----------------------------------------------------------------------------
readFileSync x 320,493 ops/sec ±0.36% (97 runs sampled)
readFileSync utf-8 x 397,810 ops/sec ±0.92% (98 runs sampled)
----------------------------------------------------------------------------
```

## cronometro.mjs.log

```txt
╔════════════════════╤═════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests       │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ readFileSync       │    1500 │ 280439.41 op/sec │  ± 0.81 % │                         ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test       │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ readFileSync utf-8 │    2000 │ 350409.55 op/sec │  ± 0.82 % │ + 24.95 %               ║
╚════════════════════╧═════════╧══════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔════════════════════╤═════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests       │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ readFileSync       │    1500 │ 277266.53 op/sec │  ± 0.80 % │                         ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test       │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ readFileSync utf-8 │    4000 │ 339446.51 op/sec │  ± 0.89 % │ + 22.43 %               ║
╚════════════════════╧═════════╧══════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔════════════════════╤═════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests       │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ readFileSync       │    4500 │ 283893.74 op/sec │  ± 0.94 % │                         ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test       │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ readFileSync utf-8 │    3500 │ 323826.41 op/sec │  ± 0.95 % │ + 14.07 %               ║
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
readFileSync             7.85 µs/iter     127,339.9    (5.79 µs … 710.5 µs)   8.35 µs  14.69 µs  16.44 µs
readFileSync utf-8       9.77 µs/iter     102,354.1     (7.08 µs … 1.49 ms)  10.87 µs  20.31 µs  22.52 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-sync/deno.managed.mjs
benchmark               time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------ -----------------------------
readFileSync             8.11 µs/iter     123,319.8   (5.86 µs … 403.85 µs)   8.64 µs  17.72 µs  18.57 µs
readFileSync utf-8       9.91 µs/iter     100,928.5     (7.16 µs … 2.68 ms)  10.84 µs  19.05 µs  22.65 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-sync/deno.managed.mjs
benchmark               time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------ -----------------------------
readFileSync             7.64 µs/iter     130,890.1   (5.53 µs … 734.88 µs)    8.4 µs  14.63 µs  18.09 µs
readFileSync utf-8       9.21 µs/iter     108,601.2     (6.76 µs … 95.7 µs)  10.52 µs   20.4 µs  24.16 µs
----------------------------------------------------------------------------
```

## deno.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-sync/deno.mjs
benchmark               time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------ -----------------------------
readFileSync             3.53 µs/iter     283,084.2     (3.31 µs … 3.95 µs)   3.68 µs   3.95 µs   3.95 µs
readFileSync utf-8       4.01 µs/iter     249,372.4     (3.72 µs … 4.34 µs)   4.21 µs   4.34 µs   4.34 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-sync/deno.mjs
benchmark               time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------ -----------------------------
readFileSync             3.25 µs/iter     307,403.6     (3.12 µs … 4.16 µs)   3.26 µs   4.16 µs   4.16 µs
readFileSync utf-8       3.69 µs/iter     270,963.8     (3.62 µs … 3.97 µs)   3.69 µs   3.97 µs   3.97 µs
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/fs-read-sync/deno.mjs
benchmark               time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------ -----------------------------
readFileSync             3.57 µs/iter     280,388.4     (3.34 µs … 3.95 µs)   3.76 µs   3.95 µs   3.95 µs
readFileSync utf-8       4.16 µs/iter     240,500.2   (3.66 µs … 367.95 µs)   4.08 µs   7.16 µs   8.15 µs
----------------------------------------------------------------------------
```

## isitfast.js.log

```txt
read file:

readFileSyncreadFileSync       237,079.184 op/s (4,218 ns) ±1% x2,500
                   104 kB ±5% x25

readFileSync utf-8readFileSync utf-8 372,300.819 op/s (2,686 ns) ±1% x2,500
                   0 kB ±0% x25

=> Slowest is readFileSync
=> Fastest is readFileSync utf-8

----------------------------------------------------------------------------
read file:

readFileSyncreadFileSync       141,964.793 op/s (7,044 ns) ±1% x2,500
                   104 kB ±5% x25

readFileSync utf-8readFileSync utf-8 217,438.574 op/s (4,599 ns) ±1% x2,500
                   0 kB ±0% x25

=> Slowest is readFileSync
=> Fastest is readFileSync utf-8

----------------------------------------------------------------------------
read file:

readFileSyncreadFileSync       226,808.8 op/s (4,409 ns) ±1% x2,500
                   104 kB ±5% x25

readFileSync utf-8readFileSync utf-8 364,166.06 op/s (2,746 ns) ±1% x2,500
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
readFileSync          3.16 µs/iter     (3.07 µs … 3.77 µs)
readFileSync utf-8    2.47 µs/iter     (2.42 µs … 2.62 µs)

summary
  readFileSync utf-8
   1.28x faster than readFileSync
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark               time (avg)             (min … max)
----------------------------------------------------------
readFileSync           3.2 µs/iter     (3.06 µs … 3.79 µs)
readFileSync utf-8    2.48 µs/iter     (2.44 µs … 2.58 µs)

summary
  readFileSync utf-8
   1.29x faster than readFileSync
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark               time (avg)             (min … max)
----------------------------------------------------------
readFileSync          3.22 µs/iter     (3.12 µs … 3.56 µs)
readFileSync utf-8    2.54 µs/iter     (2.45 µs … 2.62 µs)

summary
  readFileSync utf-8
   1.27x faster than readFileSync
----------------------------------------------------------------------------
```

## node.managed.mjs.log

```txt
readFileSync x 302,983 ops/sec +/- 0.07% (11 runs sampled)	min..max=(3.07us ... 3.73us) p75=3.44us p99=3.73us
readFileSync utf-8 x 407,850 ops/sec +/- 0.02% (11 runs sampled)	min..max=(2.39us ... 2.55us) p75=2.52us p99=2.55us
----------------------------------------------------------------------------
readFileSync x 314,149 ops/sec +/- 0.03% (11 runs sampled)	min..max=(3.10us ... 3.43us) p75=3.15us p99=3.43us
readFileSync utf-8 x 402,175 ops/sec +/- 0.02% (12 runs sampled)	min..max=(2.44us ... 2.57us) p75=2.52us p99=2.57us
----------------------------------------------------------------------------
readFileSync x 315,243 ops/sec +/- 0.01% (10 runs sampled)	min..max=(3.09us ... 3.16us) p75=3.16us p99=3.16us
readFileSync utf-8 x 403,769 ops/sec +/- 0.01% (12 runs sampled)	min..max=(2.44us ... 2.54us) p75=2.49us p99=2.54us
----------------------------------------------------------------------------
```

## node.mjs.log

```txt
readFileSync x 318,990 ops/sec +/- 0.02% (11 runs sampled)	min..max=(3.05us ... 3.24us) p75=3.09us p99=3.24us
readFileSync utf-8 x 404,209 ops/sec +/- 0.02% (11 runs sampled)	min..max=(2.37us ... 2.58us) p75=2.49us p99=2.58us
----------------------------------------------------------------------------
readFileSync x 307,747 ops/sec +/- 0.02% (10 runs sampled)	min..max=(3.13us ... 3.32us) p75=3.21us p99=3.32us
readFileSync utf-8 x 404,294 ops/sec +/- 0.01% (10 runs sampled)	min..max=(2.45us ... 2.49us) p75=2.48us p99=2.49us
----------------------------------------------------------------------------
readFileSync x 299,553 ops/sec +/- 0.06% (12 runs sampled)	min..max=(3.16us ... 3.75us) p75=3.27us p99=3.75us
readFileSync utf-8 x 405,292 ops/sec +/- 0.01% (12 runs sampled)	min..max=(2.44us ... 2.51us) p75=2.47us p99=2.51us
----------------------------------------------------------------------------
```

## tinybench.mjs.log

```txt
┌─────────┬──────────────────────┬───────────┬────────────────────┬──────────┬─────────┐
│ (index) │      Task Name       │  ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼──────────────────────┼───────────┼────────────────────┼──────────┼─────────┤
│    0    │    'readFileSync'    │ '284,468' │ 3515.3233000964956 │ '±1.93%' │  28447  │
│    1    │ 'readFileSync utf-8' │ '382,269' │ 2615.952651893066  │ '±1.53%' │  38227  │
└─────────┴──────────────────────┴───────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬──────────────────────┬───────────┬────────────────────┬──────────┬─────────┐
│ (index) │      Task Name       │  ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼──────────────────────┼───────────┼────────────────────┼──────────┼─────────┤
│    0    │    'readFileSync'    │ '266,638' │ 3750.3932233024675 │ '±1.19%' │  26664  │
│    1    │ 'readFileSync utf-8' │ '371,963' │  2688.43231383854  │ '±2.87%' │  37197  │
└─────────┴──────────────────────┴───────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬──────────────────────┬───────────┬───────────────────┬──────────┬─────────┐
│ (index) │      Task Name       │  ops/sec  │ Average Time (ns) │  Margin  │ Samples │
├─────────┼──────────────────────┼───────────┼───────────────────┼──────────┼─────────┤
│    0    │    'readFileSync'    │ '286,985' │ 3484.49670387914  │ '±1.63%' │  28699  │
│    1    │ 'readFileSync utf-8' │ '385,069' │ 2596.933727467085 │ '±1.48%' │  38507  │
└─────────┴──────────────────────┴───────────┴───────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
```