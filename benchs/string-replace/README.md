# string-replace

## benchmark.mjs.log

```txt
single with matcher x 653,791 ops/sec ±0.81% (94 runs sampled)
multiple replaces x 551,872 ops/sec ±0.40% (98 runs sampled)
----------------------------------------------------------------------------
single with matcher x 663,020 ops/sec ±0.74% (95 runs sampled)
multiple replaces x 543,458 ops/sec ±0.87% (95 runs sampled)
----------------------------------------------------------------------------
single with matcher x 662,353 ops/sec ±0.73% (95 runs sampled)
multiple replaces x 542,899 ops/sec ±0.74% (94 runs sampled)
----------------------------------------------------------------------------
```

## cronometro.mjs.log

```txt
╔═════════════════════╤═════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests        │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ multiple replaces   │   10000 │ 511638.42 op/sec │  ± 2.10 % │                         ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test        │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ single with matcher │   10000 │ 582435.57 op/sec │  ± 1.96 % │ + 13.84 %               ║
╚═════════════════════╧═════════╧══════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔═════════════════════╤═════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests        │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ multiple replaces   │   10000 │ 534356.73 op/sec │  ± 1.58 % │                         ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test        │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ single with matcher │    1500 │ 616696.95 op/sec │  ± 0.77 % │ + 15.41 %               ║
╚═════════════════════╧═════════╧══════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔═════════════════════╤═════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests        │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ multiple replaces   │   10000 │ 537897.17 op/sec │  ± 1.89 % │                         ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test        │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ single with matcher │   10000 │ 598776.65 op/sec │  ± 1.98 % │ + 11.32 %               ║
╚═════════════════════╧═════════╧══════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
```

## deno.managed.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-replace/deno.managed.mjs
benchmark                time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------- -----------------------------


single with matcher       2.13 µs/iter     468,384.1     (1.66 µs … 1.77 ms)   2.05 µs   3.87 µs   4.71 µs
multiple replaces        14.32 µs/iter      69,819.2    (13.6 µs … 15.43 µs)  14.68 µs  15.43 µs  15.43 µs
Warning: start() and end() calls in "multiple replaces" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.

summary
  single with matcher
   6.71x faster than multiple replaces
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-replace/deno.managed.mjs
benchmark                time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------- -----------------------------


single with matcher       2.15 µs/iter     464,468.2    (1.65 µs … 34.98 µs)   2.15 µs   3.87 µs   4.79 µs
multiple replaces        14.04 µs/iter      71,235.0   (13.21 µs … 15.26 µs)   14.2 µs  15.26 µs  15.26 µs
Warning: start() and end() calls in "multiple replaces" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.

summary
  single with matcher
   6.52x faster than multiple replaces
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-replace/deno.managed.mjs
benchmark                time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------- -----------------------------


single with matcher      13.81 µs/iter      72,422.0   (13.17 µs … 14.67 µs)  13.99 µs  14.67 µs  14.67 µs
Warning: start() and end() calls in "single with matcher" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
multiple replaces        13.93 µs/iter      71,769.3   (13.25 µs … 15.26 µs)  14.36 µs  15.26 µs  15.26 µs
Warning: start() and end() calls in "multiple replaces" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.

summary
  single with matcher
   1.01x faster than multiple replaces
----------------------------------------------------------------------------
```

## deno.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-replace/deno.mjs
benchmark                time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------- -----------------------------


single with matcher       1.54 µs/iter     648,998.8     (1.48 µs … 1.93 µs)   1.55 µs   1.93 µs   1.93 µs
multiple replaces          1.8 µs/iter     554,456.9     (1.78 µs … 2.11 µs)    1.8 µs   2.11 µs   2.11 µs

summary
  single with matcher
   1.17x faster than multiple replaces
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-replace/deno.mjs
benchmark                time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------- -----------------------------


single with matcher        1.6 µs/iter     623,306.8      (1.5 µs … 2.15 µs)   1.59 µs   2.15 µs   2.15 µs
multiple replaces         1.81 µs/iter     553,866.7     (1.78 µs … 2.11 µs)    1.8 µs   2.11 µs   2.11 µs

summary
  single with matcher
   1.13x faster than multiple replaces
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-replace/deno.mjs
benchmark                time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------- -----------------------------


single with matcher       1.57 µs/iter     637,719.1     (1.47 µs … 2.81 µs)   1.56 µs   2.81 µs   2.81 µs
multiple replaces         1.79 µs/iter     559,891.8     (1.71 µs … 1.87 µs)   1.83 µs   1.87 µs   1.87 µs

summary
  single with matcher
   1.14x faster than multiple replaces
----------------------------------------------------------------------------
```

## isitfast.js.log

```txt
String Replace:

single with matchersingle with matcher 648,088.14 op/s (1,543 ns) ±1% x2,500
                    808 kB ±0.6% x25

multiple replacesmultiple replaces   557,724.484 op/s (1,793 ns) ±1% x2,500
                    4,072 kB ±0.1% x25

=> Slowest is multiple replaces
=> Fastest is single with matcher

----------------------------------------------------------------------------
String Replace:

single with matchersingle with matcher 669,792.364 op/s (1,493 ns) ±1% x2,500
                    808 kB ±0.6% x25

multiple replacesmultiple replaces   560,852.496 op/s (1,783 ns) ±1% x2,500
                    4,072 kB ±0.1% x25

=> Slowest is multiple replaces
=> Fastest is single with matcher

----------------------------------------------------------------------------
String Replace:

single with matchersingle with matcher 678,886.626 op/s (1,473 ns) ±1% x2,500
                    808 kB ±0.6% x25

multiple replacesmultiple replaces   570,125.428 op/s (1,754 ns) ±1% x2,500
                    4,072 kB ±0.1% x25

=> Slowest is multiple replaces
=> Fastest is single with matcher

----------------------------------------------------------------------------
```

## mitata.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                time (avg)             (min … max)
-----------------------------------------------------------
single with matcher    1.51 µs/iter     (1.49 µs … 1.79 µs)
multiple replaces      1.81 µs/iter     (1.78 µs … 1.93 µs)

summary
  single with matcher
   1.2x faster than multiple replaces
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                time (avg)             (min … max)
-----------------------------------------------------------
single with matcher    1.48 µs/iter     (1.44 µs … 1.61 µs)
multiple replaces      1.84 µs/iter     (1.78 µs … 2.33 µs)

summary
  single with matcher
   1.24x faster than multiple replaces
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                time (avg)             (min … max)
-----------------------------------------------------------
single with matcher    1.51 µs/iter     (1.46 µs … 1.73 µs)
multiple replaces      1.82 µs/iter     (1.76 µs … 2.27 µs)

summary
  single with matcher
   1.21x faster than multiple replaces
----------------------------------------------------------------------------
```

## node.managed.mjs.log

```txt
single with matcher x 593,761 ops/sec +/- 0.03% (10 runs sampled)	min..max=(1.64us ... 1.78us) p75=1.65us p99=1.78us
multiple replaces x 544,332 ops/sec +/- 0.03% (11 runs sampled)	min..max=(1.80us ... 1.93us) p75=1.87us p99=1.93us
----------------------------------------------------------------------------
single with matcher x 591,821 ops/sec +/- 0.01% (9 runs sampled)	min..max=(1.67us ... 1.71us) p75=1.68us p99=1.71us
multiple replaces x 537,936 ops/sec +/- 0.02% (11 runs sampled)	min..max=(1.83us ... 1.93us) p75=1.91us p99=1.93us
----------------------------------------------------------------------------
single with matcher x 573,272 ops/sec +/- 0.06% (11 runs sampled)	min..max=(1.66us ... 2.02us) p75=1.82us p99=2.02us
multiple replaces x 527,431 ops/sec +/- 0.03% (10 runs sampled)	min..max=(1.82us ... 1.99us) p75=1.87us p99=1.99us
----------------------------------------------------------------------------
```

## node.mjs.log

```txt
single with matcher x 581,120 ops/sec +/- 0.02% (11 runs sampled)	min..max=(1.70us ... 1.80us) p75=1.76us p99=1.80us
multiple replaces x 530,485 ops/sec +/- 0.03% (10 runs sampled)	min..max=(1.81us ... 2.01us) p75=1.87us p99=2.01us
----------------------------------------------------------------------------
single with matcher x 573,657 ops/sec +/- 0.01% (9 runs sampled)	min..max=(1.72us ... 1.74us) p75=1.74us p99=1.74us
multiple replaces x 532,497 ops/sec +/- 0.03% (11 runs sampled)	min..max=(1.83us ... 1.97us) p75=1.92us p99=1.97us
----------------------------------------------------------------------------
single with matcher x 580,781 ops/sec +/- 0.03% (13 runs sampled)	min..max=(1.63us ... 1.82us) p75=1.74us p99=1.82us
multiple replaces x 509,197 ops/sec +/- 0.03% (11 runs sampled)	min..max=(1.87us ... 2.01us) p75=1.95us p99=2.01us
----------------------------------------------------------------------------
```

## tinybench.mjs.log

```txt
┌─────────┬───────────────────────┬───────────┬────────────────────┬──────────┬─────────┐
│ (index) │       Task Name       │  ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼───────────────────────┼───────────┼────────────────────┼──────────┼─────────┤
│    0    │ 'single with matcher' │ '625,261' │  1599.33106178657  │ '±1.00%' │  62527  │
│    1    │  'multiple replaces'  │ '543,328' │ 1840.5076699803499 │ '±0.76%' │  54333  │
└─────────┴───────────────────────┴───────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬───────────────────────┬───────────┬────────────────────┬──────────┬─────────┐
│ (index) │       Task Name       │  ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼───────────────────────┼───────────┼────────────────────┼──────────┼─────────┤
│    0    │ 'single with matcher' │ '621,555' │ 1608.8660745763727 │ '±1.16%' │  62156  │
│    1    │  'multiple replaces'  │ '548,600' │ 1822.8195637947458 │ '±0.75%' │  54861  │
└─────────┴───────────────────────┴───────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬───────────────────────┬───────────┬────────────────────┬──────────┬─────────┐
│ (index) │       Task Name       │  ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼───────────────────────┼───────────┼────────────────────┼──────────┼─────────┤
│    0    │ 'single with matcher' │ '638,388' │ 1566.443727283815  │ '±0.95%' │  63839  │
│    1    │  'multiple replaces'  │ '516,519' │ 1936.0371363140607 │ '±1.08%' │  51652  │
└─────────┴───────────────────────┴───────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
```