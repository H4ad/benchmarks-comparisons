# string-searching

## benchmark.mjs.log

```txt
Using includes x 1,189,559,198 ops/sec ±0.38% (96 runs sampled)
Using indexof x 1,183,172,489 ops/sec ±0.39% (100 runs sampled)
Using cached RegExp.test x 25,204,738 ops/sec ±0.14% (96 runs sampled)
----------------------------------------------------------------------------
Using includes x 1,221,648,856 ops/sec ±0.50% (96 runs sampled)
Using indexof x 1,195,652,168 ops/sec ±0.56% (93 runs sampled)
Using cached RegExp.test x 24,220,824 ops/sec ±0.75% (88 runs sampled)
----------------------------------------------------------------------------
Using includes x 1,190,306,746 ops/sec ±0.35% (100 runs sampled)
Using indexof x 1,186,658,655 ops/sec ±0.13% (98 runs sampled)
Using cached RegExp.test x 23,930,397 ops/sec ±0.39% (98 runs sampled)
----------------------------------------------------------------------------
```

## cronometro.mjs.log

```txt
╔══════════════════════════╤═════════╤════════════════════╤═══════════╤═════════════════════════╗
║ Slower tests             │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using cached RegExp.test │   10000 │  7676317.33 op/sec │ ±  2.03 % │                         ║
║ Using includes           │   10000 │ 10458292.85 op/sec │ ± 15.95 % │ + 36.24 %               ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Fastest test             │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using indexof            │   10000 │ 13055563.17 op/sec │ ±  4.66 % │ + 70.08 %               ║
╚══════════════════════════╧═════════╧════════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔══════════════════════════╤═════════╤════════════════════╤═══════════╤═════════════════════════╗
║ Slower tests             │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using cached RegExp.test │   10000 │  6120475.44 op/sec │ ± 14.96 % │                         ║
║ Using includes           │   10000 │ 13223437.75 op/sec │ ±  3.60 % │ + 116.05 %              ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Fastest test             │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using indexof            │   10000 │ 14277637.22 op/sec │ ±  2.53 % │ + 133.28 %              ║
╚══════════════════════════╧═════════╧════════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔══════════════════════════╤═════════╤════════════════════╤═══════════╤═════════════════════════╗
║ Slower tests             │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using cached RegExp.test │   10000 │  7543901.74 op/sec │  ± 1.70 % │                         ║
║ Using indexof            │   10000 │ 13179797.48 op/sec │  ± 3.69 % │ + 74.71 %               ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Fastest test             │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟──────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using includes           │   10000 │ 13317352.51 op/sec │  ± 5.93 % │ + 76.53 %               ║
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
Using includes                11.82 µs/iter      84,635.7   (11.21 µs … 13.17 µs)  12.11 µs  13.17 µs  13.17 µs
Warning: start() and end() calls in "Using includes" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
Using indexof                 11.79 µs/iter      84,847.1   (11.12 µs … 12.86 µs)  12.13 µs  12.86 µs  12.86 µs
Warning: start() and end() calls in "Using indexof" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
Using cached RegExp.test      11.82 µs/iter      84,624.4   (11.21 µs … 14.32 µs)  12.01 µs  14.32 µs  14.32 µs
Warning: start() and end() calls in "Using cached RegExp.test" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-searching/deno.managed.mjs
benchmark                     time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------ -----------------------------
Using includes                11.86 µs/iter      84,349.9   (11.14 µs … 12.65 µs)  12.16 µs  12.65 µs  12.65 µs
Warning: start() and end() calls in "Using includes" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
Using indexof                 11.88 µs/iter      84,188.8   (11.08 µs … 13.19 µs)  12.37 µs  13.19 µs  13.19 µs
Warning: start() and end() calls in "Using indexof" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
Using cached RegExp.test      11.94 µs/iter      83,764.9   (11.32 µs … 14.31 µs)  12.33 µs  14.31 µs  14.31 µs
Warning: start() and end() calls in "Using cached RegExp.test" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-searching/deno.managed.mjs
benchmark                     time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------ -----------------------------
Using includes                11.87 µs/iter      84,246.5   (11.29 µs … 12.71 µs)  12.25 µs  12.71 µs  12.71 µs
Warning: start() and end() calls in "Using includes" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
Using indexof                 12.08 µs/iter      82,815.3   (11.27 µs … 14.38 µs)  12.18 µs  14.38 µs  14.38 µs
Warning: start() and end() calls in "Using indexof" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
Using cached RegExp.test      12.03 µs/iter      83,155.1   (11.33 µs … 13.89 µs)  12.43 µs  13.89 µs  13.89 µs
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
Using includes                 3.54 ns/iter 282,502,010.2    (3.27 ns … 14.17 ns)   3.33 ns   6.81 ns   7.11 ns
Using indexof                  4.22 ns/iter 236,948,436.8     (3.93 ns … 9.64 ns)   4.17 ns    6.7 ns   7.01 ns
Using cached RegExp.test      49.44 ns/iter  20,224,837.6   (49.06 ns … 59.59 ns)  49.71 ns  51.28 ns  52.15 ns
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-searching/deno.mjs
benchmark                     time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------ -----------------------------
Using includes                 4.08 ns/iter 245,319,767.1    (3.81 ns … 10.34 ns)   4.03 ns   5.63 ns   6.69 ns
Using indexof                  3.22 ns/iter 310,183,892.4    (3.09 ns … 10.38 ns)   3.22 ns   3.68 ns   3.99 ns
Using cached RegExp.test       47.9 ns/iter  20,877,370.5   (46.43 ns … 82.82 ns)  47.83 ns  70.85 ns  79.18 ns
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-searching/deno.mjs
benchmark                     time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------ -----------------------------
Using includes                 4.23 ns/iter 236,627,995.0     (3.95 ns … 10.7 ns)   4.21 ns   4.53 ns   4.86 ns
Using indexof                  3.57 ns/iter 280,198,574.2    (3.24 ns … 11.31 ns)   3.35 ns   6.07 ns   6.36 ns
Using cached RegExp.test      49.82 ns/iter  20,073,961.6   (48.45 ns … 97.52 ns)  49.55 ns  70.92 ns   75.5 ns
----------------------------------------------------------------------------
```

## isitfast.js.log

```txt
String Replace:

Using includesUsing includes           25,000,000 op/s (40 ns) ±1% x2,500
                         0 kB ±0% x25

Using indexofUsing indexof            25,000,000 op/s (40 ns) ±1% x2,500
                         0 kB ±0% x25

Using cached RegExp.testUsing cached RegExp.test 20,000,000 op/s (50 ns) ±1% x2,500
                         0 kB ±0% x25

=> Slowest is Using cached RegExp.test
=> Fastest is Using includes

----------------------------------------------------------------------------
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

Using includesUsing includes           ∞ op/s (0 ns) ±0% x2,500
                         0 kB ±0% x25

Using indexofUsing indexof            ∞ op/s (0 ns) ±0% x2,500
                         0 kB ±0% x25

Using cached RegExp.testUsing cached RegExp.test 100,000,000 op/s (10 ns) ±1% x2,500
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
Using includes            278.58 ps/iter   (268.5 ps … 14.62 ns)
Using indexof               3.59 ns/iter    (3.36 ns … 10.76 ns)
Using cached RegExp.test   43.85 ns/iter   (40.44 ns … 92.15 ns)

summary
  Using includes
   12.88x faster than Using indexof
   157.41x faster than Using cached RegExp.test
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                     time (avg)             (min … max)
----------------------------------------------------------------
Using includes            283.39 ps/iter    (268.5 ps … 9.97 ns)
Using indexof               3.55 ns/iter    (3.24 ns … 10.05 ns)
Using cached RegExp.test   43.47 ns/iter   (41.58 ns … 78.82 ns)

summary
  Using includes
   12.52x faster than Using indexof
   153.4x faster than Using cached RegExp.test
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                     time (avg)             (min … max)
----------------------------------------------------------------
Using includes            281.51 ps/iter   (266.5 ps … 12.11 ns)
Using indexof               3.55 ns/iter    (3.45 ns … 10.68 ns)
Using cached RegExp.test   43.03 ns/iter   (40.45 ns … 89.58 ns)

summary
  Using includes
   12.6x faster than Using indexof
   152.87x faster than Using cached RegExp.test
----------------------------------------------------------------------------
```

## node.managed.mjs.log

```txt
Using includes x 2,998,752,760 ops/sec +/- 0% (18 runs sampled)	min..max=(0.50ns ... 0.50ns) p75=0.50ns p99=0.50ns
Using indexof x 3,068,598,842 ops/sec +/- 0% (22 runs sampled)	min..max=(0.50ns ... 0.50ns) p75=0.50ns p99=0.50ns
Using cached RegExp.test x 18,949,487 ops/sec +/- 0.02% (10 runs sampled)	min..max=(51.53ns ... 54.55ns) p75=52.68ns p99=54.55ns
----------------------------------------------------------------------------
Using includes x 3,031,355,138 ops/sec +/- 0% (22 runs sampled)	min..max=(0.50ns ... 0.50ns) p75=0.50ns p99=0.50ns
Using indexof x 3,085,441,884 ops/sec +/- 0% (23 runs sampled)	min..max=(0.50ns ... 0.50ns) p75=0.50ns p99=0.50ns
Using cached RegExp.test x 18,764,174 ops/sec +/- 0.03% (12 runs sampled)	min..max=(52.33ns ... 57.87ns) p75=54.26ns p99=57.87ns
----------------------------------------------------------------------------
Using includes x 2,968,677,221 ops/sec +/- 0% (22 runs sampled)	min..max=(0.50ns ... 0.50ns) p75=0.50ns p99=0.50ns
Using indexof x 3,026,906,717 ops/sec +/- 0% (22 runs sampled)	min..max=(0.50ns ... 0.50ns) p75=0.50ns p99=0.50ns
Using cached RegExp.test x 18,877,618 ops/sec +/- 0.02% (11 runs sampled)	min..max=(51.68ns ... 55.44ns) p75=53.77ns p99=55.44ns
----------------------------------------------------------------------------
```

## node.mjs.log

```txt
Using includes x 295,683,645 ops/sec +/- 0.03% (12 runs sampled)	min..max=(3.33ns ... 3.63ns) p75=3.39ns p99=3.63ns
Using indexof x 294,684,941 ops/sec +/- 0.01% (10 runs sampled)	min..max=(3.35ns ... 3.42ns) p75=3.41ns p99=3.42ns
Using cached RegExp.test x 17,937,398 ops/sec +/- 0.01% (10 runs sampled)	min..max=(54.96ns ... 56.06ns) p75=55.74ns p99=56.06ns
----------------------------------------------------------------------------
Using includes x 268,286,226 ops/sec +/- 0.01% (11 runs sampled)	min..max=(3.65ns ... 3.78ns) p75=3.76ns p99=3.78ns
Using indexof x 296,647,205 ops/sec +/- 0.01% (11 runs sampled)	min..max=(3.29ns ... 3.39ns) p75=3.37ns p99=3.39ns
Using cached RegExp.test x 17,614,820 ops/sec +/- 0.01% (12 runs sampled)	min..max=(55.37ns ... 57.19ns) p75=56.78ns p99=57.19ns
----------------------------------------------------------------------------
Using includes x 296,257,518 ops/sec +/- 0.02% (11 runs sampled)	min..max=(3.31ns ... 3.51ns) p75=3.45ns p99=3.51ns
Using indexof x 298,521,492 ops/sec +/- 0.01% (11 runs sampled)	min..max=(3.29ns ... 3.38ns) p75=3.36ns p99=3.38ns
Using cached RegExp.test x 17,946,271 ops/sec +/- 0.03% (11 runs sampled)	min..max=(54.13ns ... 59.76ns) p75=56.95ns p99=59.76ns
----------------------------------------------------------------------------
```

## tinybench.mjs.log

```txt
┌─────────┬────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ (index) │         Task Name          │   ops/sec    │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│    0    │      'Using includes'      │ '22,996,641' │  43.4846112631535  │ '±0.97%' │ 2299665 │
│    1    │      'Using indexof'       │ '22,044,914' │ 45.361935458704984 │ '±0.68%' │ 2204492 │
│    2    │ 'Using cached RegExp.test' │ '10,915,372' │ 91.61391459206888  │ '±0.10%' │ 1091538 │
└─────────┴────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬────────────────────────────┬──────────────┬───────────────────┬──────────┬─────────┐
│ (index) │         Task Name          │   ops/sec    │ Average Time (ns) │  Margin  │ Samples │
├─────────┼────────────────────────────┼──────────────┼───────────────────┼──────────┼─────────┤
│    0    │      'Using includes'      │ '21,464,322' │ 46.58893929374345 │ '±1.75%' │ 2146433 │
│    1    │      'Using indexof'       │ '22,834,743' │ 43.79291555155822 │ '±0.44%' │ 2283475 │
│    2    │ 'Using cached RegExp.test' │ '11,348,870' │ 88.11449886168022 │ '±0.29%' │ 1134888 │
└─────────┴────────────────────────────┴──────────────┴───────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬────────────────────────────┬──────────────┬───────────────────┬──────────┬─────────┐
│ (index) │         Task Name          │   ops/sec    │ Average Time (ns) │  Margin  │ Samples │
├─────────┼────────────────────────────┼──────────────┼───────────────────┼──────────┼─────────┤
│    0    │      'Using includes'      │ '23,527,847' │ 42.50282578297807 │ '±1.34%' │ 2352785 │
│    1    │      'Using indexof'       │ '21,461,131' │ 46.59586476439571 │ '±0.77%' │ 2146114 │
│    2    │ 'Using cached RegExp.test' │ '10,494,069' │ 95.29192013900597 │ '±0.14%' │ 1049407 │
└─────────┴────────────────────────────┴──────────────┴───────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
```