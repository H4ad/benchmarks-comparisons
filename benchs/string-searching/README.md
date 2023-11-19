# string-searching

## benchmark.mjs.log

```txt
Using includes x 1,211,443,769 ops/sec ±0.36% (99 runs sampled)
Using indexof x 1,203,633,860 ops/sec ±0.09% (97 runs sampled)
Using cached RegExp.test x 24,811,620 ops/sec ±0.24% (97 runs sampled)
----------------------------------------------------------------------------
Using includes x 1,206,404,569 ops/sec ±0.26% (96 runs sampled)
Using indexof x 1,205,449,233 ops/sec ±0.39% (98 runs sampled)
Using cached RegExp.test x 24,894,458 ops/sec ±0.39% (96 runs sampled)
----------------------------------------------------------------------------
Using includes x 1,187,947,057 ops/sec ±0.19% (98 runs sampled)
Using indexof x 1,195,263,850 ops/sec ±0.30% (98 runs sampled)
Using cached RegExp.test x 24,691,847 ops/sec ±0.35% (98 runs sampled)
----------------------------------------------------------------------------
```

## cronometro.mjs.log

```txt
╔══════════════════════════╤═════════╤════════════════════╤═══════════╤═════════════════════════╗
║ Slower tests             │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using cached RegExp.test │   10000 │  7178003.73 op/sec │  ± 8.17 % │                         ║
║ Using indexof            │   10000 │ 13231748.79 op/sec │  ± 3.39 % │ + 84.34 %               ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Fastest test             │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using includes           │   10000 │ 13461015.55 op/sec │  ± 3.15 % │ + 87.53 %               ║
╚══════════════════════════╧═════════╧════════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔══════════════════════════╤═════════╤════════════════════╤═══════════╤═════════════════════════╗
║ Slower tests             │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using cached RegExp.test │   10000 │  7745585.40 op/sec │  ± 1.22 % │                         ║
║ Using indexof            │   10000 │ 12938518.75 op/sec │  ± 3.28 % │ + 67.04 %               ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Fastest test             │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using includes           │   10000 │ 14709732.84 op/sec │  ± 1.99 % │ + 89.91 %               ║
╚══════════════════════════╧═════════╧════════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔══════════════════════════╤═════════╤════════════════════╤═══════════╤═════════════════════════╗
║ Slower tests             │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using cached RegExp.test │   10000 │  7362653.38 op/sec │  ± 2.09 % │                         ║
║ Using indexof            │   10000 │ 13968938.67 op/sec │  ± 3.47 % │ + 89.73 %               ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Fastest test             │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using includes           │   10000 │ 14501160.09 op/sec │  ± 2.03 % │ + 96.96 %               ║
╚══════════════════════════╧═════════╧════════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
```

## deno.managed.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-searching/deno.managed.mjs
benchmark                     time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------ -----------------------------
Using includes                11.59 µs/iter      86,309.2   (11.01 µs … 12.32 µs)  11.97 µs  12.32 µs  12.32 µs
Warning: start() and end() calls in "Using includes" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
Using indexof                 11.79 µs/iter      84,786.1   (11.06 µs … 13.96 µs)  11.84 µs  13.96 µs  13.96 µs
Warning: start() and end() calls in "Using indexof" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
Using cached RegExp.test      11.63 µs/iter      86,008.7    (11.05 µs … 13.7 µs)  11.99 µs   13.7 µs   13.7 µs
Warning: start() and end() calls in "Using cached RegExp.test" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-searching/deno.managed.mjs
benchmark                     time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------ -----------------------------
Using includes                11.94 µs/iter      83,769.1    (11.19 µs … 13.2 µs)  12.12 µs   13.2 µs   13.2 µs
Warning: start() and end() calls in "Using includes" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
Using indexof                 11.77 µs/iter      84,934.5   (11.19 µs … 13.02 µs)  12.03 µs  13.02 µs  13.02 µs
Warning: start() and end() calls in "Using indexof" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
Using cached RegExp.test      11.95 µs/iter      83,702.7   (11.18 µs … 14.78 µs)  12.28 µs  14.78 µs  14.78 µs
Warning: start() and end() calls in "Using cached RegExp.test" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-searching/deno.managed.mjs
benchmark                     time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------ -----------------------------
Using includes                   12 µs/iter      83,344.9   (11.35 µs … 12.98 µs)  12.29 µs  12.98 µs  12.98 µs
Warning: start() and end() calls in "Using includes" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
Using indexof                 11.89 µs/iter      84,089.9   (11.23 µs … 13.15 µs)  12.32 µs  13.15 µs  13.15 µs
Warning: start() and end() calls in "Using indexof" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
Using cached RegExp.test       11.7 µs/iter      85,456.4   (10.92 µs … 13.69 µs)  11.92 µs  13.69 µs  13.69 µs
Warning: start() and end() calls in "Using cached RegExp.test" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
----------------------------------------------------------------------------
```

## deno.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-searching/deno.mjs
benchmark                     time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------ -----------------------------
Using includes                 4.18 ns/iter 239,113,707.5    (3.89 ns … 10.76 ns)   4.14 ns   5.19 ns   6.48 ns
Using indexof                  3.43 ns/iter 291,270,807.0    (3.27 ns … 10.79 ns)   3.31 ns   4.58 ns   5.22 ns
Using cached RegExp.test      49.04 ns/iter  20,391,784.7   (48.54 ns … 50.33 ns)  49.12 ns  49.77 ns  49.88 ns
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-searching/deno.mjs
benchmark                     time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------ -----------------------------
Using includes                 4.14 ns/iter 241,514,978.4    (3.87 ns … 10.87 ns)   4.12 ns   4.73 ns   4.87 ns
Using indexof                  3.48 ns/iter 287,737,681.9    (3.17 ns … 10.59 ns)   3.31 ns   5.38 ns   5.58 ns
Using cached RegExp.test      50.24 ns/iter  19,905,261.7   (47.28 ns … 95.55 ns)  49.43 ns  81.01 ns  83.79 ns
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-searching/deno.mjs
benchmark                     time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------ -----------------------------
Using includes                 4.14 ns/iter 241,436,064.3    (3.77 ns … 10.39 ns)   4.03 ns   5.98 ns    6.3 ns
Using indexof                  3.48 ns/iter 287,369,984.6    (3.17 ns … 15.13 ns)   3.26 ns   6.84 ns   8.57 ns
Using cached RegExp.test      48.95 ns/iter  20,428,661.8    (46.33 ns … 89.6 ns)  49.29 ns  79.53 ns  81.46 ns
----------------------------------------------------------------------------
```

## isitfast.js.log

```txt
String Replace:

Using includesUsing includes           25,000,000 op/s (40 ns) ±1% x2,500
                         0 kB ±0% x25

Using indexofUsing indexof            33,333,333.333 op/s (30 ns) ±1% x2,500
                         0 kB ±0% x25

Using cached RegExp.testUsing cached RegExp.test 20,000,000 op/s (50 ns) ±1% x2,500
                         0 kB ±0% x25

=> Slowest is Using cached RegExp.test
=> Fastest is Using indexof

----------------------------------------------------------------------------
String Replace:

Using includesUsing includes           25,000,000 op/s (40 ns) ±1% x2,500
                         0 kB ±0% x25

Using indexofUsing indexof            33,333,333.333 op/s (30 ns) ±1% x2,500
                         0 kB ±0% x25

Using cached RegExp.testUsing cached RegExp.test 24,390,243.902 op/s (41 ns) ±1% x2,500
                         0 kB ±0% x25

=> Slowest is Using cached RegExp.test
=> Fastest is Using indexof

----------------------------------------------------------------------------
String Replace:

Using includesUsing includes           25,000,000 op/s (40 ns) ±1% x2,500
                         0 kB ±0% x25

Using indexofUsing indexof            24,390,243.902 op/s (41 ns) ±1% x2,500
                         0 kB ±0% x25

Using cached RegExp.testUsing cached RegExp.test 20,000,000 op/s (50 ns) ±1% x2,500
                         0 kB ±0% x25

=> Slowest is Using cached RegExp.test
=> Fastest is Using includes

----------------------------------------------------------------------------
```

## mitata.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                     time (avg)             (min … max)
----------------------------------------------------------------
Using includes            272.54 ps/iter   (266.5 ps … 11.86 ns)
Using indexof               4.14 ns/iter    (3.87 ns … 12.71 ns)
Using cached RegExp.test   41.82 ns/iter   (40.59 ns … 87.72 ns)

summary
  Using includes
   15.18x faster than Using indexof
   153.43x faster than Using cached RegExp.test
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                     time (avg)             (min … max)
----------------------------------------------------------------
Using includes            276.69 ps/iter   (265.5 ps … 11.85 ns)
Using indexof               3.48 ns/iter    (3.22 ns … 10.37 ns)
Using cached RegExp.test   41.55 ns/iter   (40.34 ns … 53.67 ns)

summary
  Using includes
   12.58x faster than Using indexof
   150.17x faster than Using cached RegExp.test
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                     time (avg)             (min … max)
----------------------------------------------------------------
Using includes            282.56 ps/iter   (269.5 ps … 11.26 ns)
Using indexof               2.99 ns/iter    (2.85 ns … 11.33 ns)
Using cached RegExp.test    43.3 ns/iter   (40.84 ns … 74.12 ns)

summary
  Using includes
   10.58x faster than Using indexof
   153.23x faster than Using cached RegExp.test
----------------------------------------------------------------------------
```

## node.managed.mjs.log

```txt
Using includes x 3,099,759,752 ops/sec +/- 0% (22 runs sampled)	min..max=(0.50ns ... 0.50ns) p75=0.50ns p99=0.50ns
Using indexof x 3,012,042,185 ops/sec +/- 0% (22 runs sampled)	min..max=(0.50ns ... 0.50ns) p75=0.50ns p99=0.50ns
Using cached RegExp.test x 19,161,972 ops/sec +/- 0.01% (10 runs sampled)	min..max=(51.64ns ... 52.78ns) p75=52.24ns p99=52.78ns
----------------------------------------------------------------------------
Using includes x 2,999,577,566 ops/sec +/- 0% (21 runs sampled)	min..max=(0.50ns ... 0.50ns) p75=0.50ns p99=0.50ns
Using indexof x 3,013,766,561 ops/sec +/- 0% (22 runs sampled)	min..max=(0.50ns ... 0.50ns) p75=0.50ns p99=0.50ns
Using cached RegExp.test x 18,885,196 ops/sec +/- 0% (10 runs sampled)	min..max=(52.48ns ... 53.15ns) p75=53.00ns p99=53.15ns
----------------------------------------------------------------------------
Using includes x 3,019,347,834 ops/sec +/- 0% (22 runs sampled)	min..max=(0.50ns ... 0.50ns) p75=0.50ns p99=0.50ns
Using indexof x 3,021,041,229 ops/sec +/- 0% (22 runs sampled)	min..max=(0.50ns ... 0.50ns) p75=0.50ns p99=0.50ns
Using cached RegExp.test x 18,174,260 ops/sec +/- 0.03% (12 runs sampled)	min..max=(54.04ns ... 58.02ns) p75=54.57ns p99=58.02ns
----------------------------------------------------------------------------
```

## node.mjs.log

```txt
Using includes x 305,087,888 ops/sec +/- 0% (11 runs sampled)	min..max=(3.25ns ... 3.29ns) p75=3.27ns p99=3.29ns
Using indexof x 298,464,886 ops/sec +/- 0.01% (10 runs sampled)	min..max=(3.25ns ... 3.32ns) p75=3.29ns p99=3.32ns
Using cached RegExp.test x 17,398,740 ops/sec +/- 0.07% (12 runs sampled)	min..max=(53.04ns ... 66.71ns) p75=57.71ns p99=66.71ns
----------------------------------------------------------------------------
Using includes x 301,834,418 ops/sec +/- 0.04% (11 runs sampled)	min..max=(3.25ns ... 3.69ns) p75=3.35ns p99=3.69ns
Using indexof x 304,418,554 ops/sec +/- 0.01% (11 runs sampled)	min..max=(3.24ns ... 3.39ns) p75=3.29ns p99=3.39ns
Using cached RegExp.test x 18,511,068 ops/sec +/- 0% (10 runs sampled)	min..max=(53.73ns ... 54.35ns) p75=54.15ns p99=54.35ns
----------------------------------------------------------------------------
Using includes x 303,345,062 ops/sec +/- 0.01% (11 runs sampled)	min..max=(3.26ns ... 3.37ns) p75=3.31ns p99=3.37ns
Using indexof x 303,670,943 ops/sec +/- 0% (10 runs sampled)	min..max=(3.27ns ... 3.30ns) p75=3.29ns p99=3.30ns
Using cached RegExp.test x 18,099,291 ops/sec +/- 0.02% (11 runs sampled)	min..max=(54.21ns ... 57.70ns) p75=56.26ns p99=57.70ns
----------------------------------------------------------------------------
```

## tinybench.mjs.log

```txt
┌─────────┬────────────────────────────┬──────────────┬───────────────────┬──────────┬─────────┐
│ (index) │         Task Name          │   ops/sec    │ Average Time (ns) │  Margin  │ Samples │
├─────────┼────────────────────────────┼──────────────┼───────────────────┼──────────┼─────────┤
│    0    │      'Using includes'      │ '21,469,483' │ 46.57773973788472 │ '±1.42%' │ 2146949 │
│    1    │      'Using indexof'       │ '22,798,347' │ 43.86282783018222 │ '±0.44%' │ 2279835 │
│    2    │ 'Using cached RegExp.test' │ '11,375,857' │  87.905458899621  │ '±0.30%' │ 1137586 │
└─────────┴────────────────────────────┴──────────────┴───────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ (index) │         Task Name          │   ops/sec    │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│    0    │      'Using includes'      │ '20,705,813' │ 48.29561589636053  │ '±1.63%' │ 2070582 │
│    1    │      'Using indexof'       │ '20,736,932' │ 48.223140106123985 │ '±0.85%' │ 2073694 │
│    2    │ 'Using cached RegExp.test' │ '10,745,149' │ 93.06524660274087  │ '±0.09%' │ 1074515 │
└─────────┴────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ (index) │         Task Name          │   ops/sec    │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│    0    │      'Using includes'      │ '22,593,089' │ 44.261322411998634 │ '±1.88%' │ 2259309 │
│    1    │      'Using indexof'       │ '22,539,432' │ 44.36669019995778  │ '±0.62%' │ 2253944 │
│    2    │ 'Using cached RegExp.test' │ '11,114,894' │ 89.96936294013373  │ '±0.27%' │ 1111490 │
└─────────┴────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
```