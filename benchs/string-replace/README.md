# string-replace

## benchmark.mjs.log

```txt
single with matcher x 668,122 ops/sec ±0.42% (98 runs sampled)
multiple replaces x 555,467 ops/sec ±0.38% (99 runs sampled)
----------------------------------------------------------------------------
single with matcher x 659,847 ops/sec ±1.25% (92 runs sampled)
multiple replaces x 552,018 ops/sec ±0.72% (96 runs sampled)
----------------------------------------------------------------------------
single with matcher x 672,346 ops/sec ±0.65% (96 runs sampled)
multiple replaces x 551,931 ops/sec ±0.43% (99 runs sampled)
----------------------------------------------------------------------------
```

## cronometro.mjs.log

```txt
╔═════════════════════╤═════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests        │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ multiple replaces   │   10000 │ 492994.57 op/sec │  ± 1.98 % │                         ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test        │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ single with matcher │    1000 │ 609617.45 op/sec │  ± 0.72 % │ + 23.66 %               ║
╚═════════════════════╧═════════╧══════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔═════════════════════╤═════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests        │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ multiple replaces   │   10000 │ 525866.04 op/sec │  ± 1.67 % │                         ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test        │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ single with matcher │   10000 │ 602012.96 op/sec │  ± 1.38 % │ + 14.48 %               ║
╚═════════════════════╧═════════╧══════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔═════════════════════╤═════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests        │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ multiple replaces   │   10000 │ 512120.80 op/sec │  ± 1.89 % │                         ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test        │ Samples │           Result │ Tolerance │ Difference with slowest ║
╟─────────────────────┼─────────┼──────────────────┼───────────┼─────────────────────────╢
║ single with matcher │   10000 │ 628552.90 op/sec │  ± 1.55 % │ + 22.74 %               ║
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


single with matcher      13.77 µs/iter      72,616.9    (12.95 µs … 14.5 µs)  14.22 µs   14.5 µs   14.5 µs
Warning: start() and end() calls in "single with matcher" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
multiple replaces        13.67 µs/iter      73,145.4   (13.06 µs … 15.54 µs)  13.71 µs  15.54 µs  15.54 µs
Warning: start() and end() calls in "multiple replaces" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.

summary
  multiple replaces
   1.01x faster than single with matcher
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-replace/deno.managed.mjs
benchmark                time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------- -----------------------------


single with matcher      13.73 µs/iter      72,815.5    (12.89 µs … 15.4 µs)  13.96 µs   15.4 µs   15.4 µs
Warning: start() and end() calls in "single with matcher" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
multiple replaces        13.75 µs/iter      72,735.7   (13.02 µs … 14.63 µs)  14.18 µs  14.63 µs  14.63 µs
Warning: start() and end() calls in "multiple replaces" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.

summary
  single with matcher
   1x faster than multiple replaces
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-replace/deno.managed.mjs
benchmark                time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------- -----------------------------


single with matcher      13.89 µs/iter      71,986.0    (13.1 µs … 14.56 µs)  14.25 µs  14.56 µs  14.56 µs
Warning: start() and end() calls in "single with matcher" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.
multiple replaces        14.26 µs/iter      70,102.1    (13.5 µs … 15.07 µs)  14.58 µs  15.07 µs  15.07 µs
Warning: start() and end() calls in "multiple replaces" are ignored because it averages less
than 0.01s per iteration. Remove them for better results.

summary
  single with matcher
   1.03x faster than multiple replaces
----------------------------------------------------------------------------
```

## deno.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-replace/deno.mjs
benchmark                time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------- -----------------------------


single with matcher       1.53 µs/iter     651,918.0     (1.49 µs … 1.85 µs)   1.54 µs   1.85 µs   1.85 µs
multiple replaces         1.78 µs/iter     561,622.0     (1.77 µs … 1.79 µs)   1.78 µs   1.79 µs   1.79 µs

summary
  single with matcher
   1.16x faster than multiple replaces
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-replace/deno.mjs
benchmark                time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------- -----------------------------


single with matcher       1.52 µs/iter     658,036.6     (1.47 µs … 1.85 µs)   1.52 µs   1.85 µs   1.85 µs
multiple replaces         1.74 µs/iter     574,346.0     (1.71 µs … 1.76 µs)   1.75 µs   1.76 µs   1.76 µs

summary
  single with matcher
   1.15x faster than multiple replaces
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/string-replace/deno.mjs
benchmark                time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------- -----------------------------


single with matcher       1.54 µs/iter     649,954.2     (1.49 µs … 1.68 µs)   1.53 µs   1.68 µs   1.68 µs
multiple replaces         1.79 µs/iter     557,451.9     (1.77 µs … 1.81 µs)    1.8 µs   1.81 µs   1.81 µs

summary
  single with matcher
   1.17x faster than multiple replaces
----------------------------------------------------------------------------
```

## isitfast.js.log

```txt
String Replace:

single with matchersingle with matcher 315,855.97 op/s (3,166 ns) ±1% x2,500
                    808 kB ±0.6% x25

multiple replacesmultiple replaces   560,852.496 op/s (1,783 ns) ±1% x2,500
                    4,072 kB ±0.1% x25

=> Slowest is single with matcher
=> Fastest is multiple replaces

----------------------------------------------------------------------------
String Replace:

single with matchersingle with matcher 674,308.833 op/s (1,483 ns) ±1% x2,500
                    808 kB ±0.6% x25

multiple replacesmultiple replaces   580,383.053 op/s (1,723 ns) ±1% x2,500
                    4,072 kB ±0.1% x25

=> Slowest is multiple replaces
=> Fastest is single with matcher

----------------------------------------------------------------------------
String Replace:

single with matchersingle with matcher 683,994.528 op/s (1,462 ns) ±1% x2,500
                    808 kB ±0.6% x25

multiple replacesmultiple replaces   583,430.572 op/s (1,714 ns) ±1% x2,500
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
single with matcher    1.59 µs/iter     (1.48 µs … 1.84 µs)
multiple replaces      1.95 µs/iter     (1.78 µs … 2.83 µs)

summary
  single with matcher
   1.23x faster than multiple replaces
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                time (avg)             (min … max)
-----------------------------------------------------------
single with matcher    1.48 µs/iter     (1.44 µs … 1.56 µs)
multiple replaces      1.77 µs/iter     (1.75 µs … 1.86 µs)

summary
  single with matcher
   1.2x faster than multiple replaces
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                time (avg)             (min … max)
-----------------------------------------------------------
single with matcher    1.45 µs/iter     (1.44 µs … 1.53 µs)
multiple replaces      1.75 µs/iter     (1.73 µs … 1.81 µs)

summary
  single with matcher
   1.2x faster than multiple replaces
----------------------------------------------------------------------------
```

## node.managed.mjs.log

```txt
single with matcher x 609,364 ops/sec +/- 0% (10 runs sampled)	min..max=(1.63us ... 1.65us) p75=1.64us p99=1.65us
multiple replaces x 537,511 ops/sec +/- 0.02% (11 runs sampled)	min..max=(1.83us ... 1.95us) p75=1.91us p99=1.95us
----------------------------------------------------------------------------
single with matcher x 577,463 ops/sec +/- 0.01% (9 runs sampled)	min..max=(1.69us ... 1.74us) p75=1.73us p99=1.74us
multiple replaces x 526,321 ops/sec +/- 0.02% (11 runs sampled)	min..max=(1.86us ... 2.00us) p75=1.94us p99=2.00us
----------------------------------------------------------------------------
single with matcher x 552,156 ops/sec +/- 0.07% (11 runs sampled)	min..max=(1.64us ... 2.04us) p75=1.91us p99=2.04us
multiple replaces x 526,808 ops/sec +/- 0.02% (11 runs sampled)	min..max=(1.79us ... 1.92us) p75=1.91us p99=1.92us
----------------------------------------------------------------------------
```

## node.mjs.log

```txt
single with matcher x 597,916 ops/sec +/- 0.01% (10 runs sampled)	min..max=(1.64us ... 1.68us) p75=1.67us p99=1.68us
multiple replaces x 542,780 ops/sec +/- 0.02% (11 runs sampled)	min..max=(1.81us ... 1.89us) p75=1.87us p99=1.89us
----------------------------------------------------------------------------
single with matcher x 597,182 ops/sec +/- 0.02% (12 runs sampled)	min..max=(1.63us ... 1.73us) p75=1.68us p99=1.73us
multiple replaces x 526,417 ops/sec +/- 0.02% (11 runs sampled)	min..max=(1.77us ... 1.92us) p75=1.90us p99=1.92us
----------------------------------------------------------------------------
single with matcher x 575,262 ops/sec +/- 0.03% (10 runs sampled)	min..max=(1.68us ... 1.81us) p75=1.79us p99=1.81us
multiple replaces x 509,610 ops/sec +/- 0.07% (10 runs sampled)	min..max=(1.84us ... 2.24us) p75=2.04us p99=2.24us
----------------------------------------------------------------------------
```

## tinybench.mjs.log

```txt
┌─────────┬───────────────────────┬───────────┬────────────────────┬──────────┬─────────┐
│ (index) │       Task Name       │  ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼───────────────────────┼───────────┼────────────────────┼──────────┼─────────┤
│    0    │ 'single with matcher' │ '644,331' │ 1551.9956376514692 │ '±1.01%' │  64434  │
│    1    │  'multiple replaces'  │ '544,751' │ 1835.6984167811308 │ '±0.81%' │  54476  │
└─────────┴───────────────────────┴───────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬───────────────────────┬───────────┬────────────────────┬──────────┬─────────┐
│ (index) │       Task Name       │  ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼───────────────────────┼───────────┼────────────────────┼──────────┼─────────┤
│    0    │ 'single with matcher' │ '645,434' │ 1549.3435265143607 │ '±1.08%' │  64544  │
│    1    │  'multiple replaces'  │ '550,019' │ 1818.117981088525  │ '±0.81%' │  55002  │
└─────────┴───────────────────────┴───────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬───────────────────────┬───────────┬────────────────────┬──────────┬─────────┐
│ (index) │       Task Name       │  ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼───────────────────────┼───────────┼────────────────────┼──────────┼─────────┤
│    0    │ 'single with matcher' │ '630,452' │ 1586.162701416461  │ '±1.29%' │  63046  │
│    1    │  'multiple replaces'  │ '528,341' │ 1892.7142462599995 │ '±0.78%' │  52835  │
└─────────┴───────────────────────┴───────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
```