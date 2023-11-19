# deleting-properties

## benchmark.mjs.log

```txt
Using delete property x 5,685,560 ops/sec ±0.53% (90 runs sampled)
Using delete property (proto: null) x 30,865,059 ops/sec ±1.06% (93 runs sampled)
Using delete property (cached proto: null) x 5,839,300 ops/sec ±0.42% (97 runs sampled)
Using undefined assignment x 1,193,687,779 ops/sec ±0.16% (101 runs sampled)
Using undefined assignment (proto: null) x 33,960,429 ops/sec ±0.54% (96 runs sampled)
Using undefined property (cached proto: null) x 1,191,044,046 ops/sec ±0.07% (97 runs sampled)
----------------------------------------------------------------------------
Using delete property x 5,755,174 ops/sec ±0.72% (94 runs sampled)
Using delete property (proto: null) x 29,931,588 ops/sec ±0.48% (99 runs sampled)
Using delete property (cached proto: null) x 5,786,817 ops/sec ±0.76% (91 runs sampled)
Using undefined assignment x 1,213,951,053 ops/sec ±0.30% (97 runs sampled)
Using undefined assignment (proto: null) x 34,455,497 ops/sec ±0.34% (98 runs sampled)
Using undefined property (cached proto: null) x 1,219,943,549 ops/sec ±0.63% (89 runs sampled)
----------------------------------------------------------------------------
Using delete property x 5,630,334 ops/sec ±0.55% (97 runs sampled)
Using delete property (proto: null) x 30,137,214 ops/sec ±0.20% (92 runs sampled)
Using delete property (cached proto: null) x 5,714,206 ops/sec ±0.51% (98 runs sampled)
Using undefined assignment x 1,192,188,839 ops/sec ±0.27% (97 runs sampled)
Using undefined assignment (proto: null) x 33,948,509 ops/sec ±0.38% (95 runs sampled)
Using undefined property (cached proto: null) x 1,188,006,173 ops/sec ±0.13% (100 runs sampled)
----------------------------------------------------------------------------
```

## cronometro.mjs.log

```txt
╔═══════════════════════════════════════════════╤═════════╤════════════════════╤═══════════╤═════════════════════════╗
║ Slower tests                                  │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using delete property                         │    2000 │  2958221.04 op/sec │ ±  0.85 % │                         ║
║ Using delete property (cached proto: null)    │    6500 │  3615497.92 op/sec │ ±  0.96 % │ + 22.22 %               ║
║ Using delete property (proto: null)           │   10000 │  7816377.66 op/sec │ ± 11.79 % │ + 164.23 %              ║
║ Using undefined assignment (proto: null)      │   10000 │  8770768.08 op/sec │ ±  9.63 % │ + 196.49 %              ║
║ Using undefined assignment                    │   10000 │ 13575170.47 op/sec │ ±  4.43 % │ + 358.90 %              ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Fastest test                                  │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using undefined property (cached proto: null) │   10000 │ 13763961.82 op/sec │ ±  2.47 % │ + 365.28 %              ║
╚═══════════════════════════════════════════════╧═════════╧════════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔═══════════════════════════════════════════════╤═════════╤════════════════════╤═══════════╤═════════════════════════╗
║ Slower tests                                  │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using delete property                         │    3000 │  3449798.53 op/sec │ ±  0.97 % │                         ║
║ Using delete property (cached proto: null)    │   10000 │  3497267.76 op/sec │ ±  2.16 % │ + 1.38 %                ║
║ Using undefined assignment (proto: null)      │    1500 │  7189830.70 op/sec │ ±  0.76 % │ + 108.41 %              ║
║ Using delete property (proto: null)           │   10000 │  8631918.59 op/sec │ ± 11.38 % │ + 150.22 %              ║
║ Using undefined assignment                    │   10000 │ 13333368.89 op/sec │ ±  3.97 % │ + 286.50 %              ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Fastest test                                  │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using undefined property (cached proto: null) │   10000 │ 13830723.01 op/sec │ ±  1.71 % │ + 300.91 %              ║
╚═══════════════════════════════════════════════╧═════════╧════════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔═══════════════════════════════════════════════╤═════════╤════════════════════╤═══════════╤═════════════════════════╗
║ Slower tests                                  │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using delete property                         │    5000 │  2250406.31 op/sec │ ±  0.98 % │                         ║
║ Using delete property (cached proto: null)    │    2500 │  3104687.58 op/sec │ ±  0.95 % │ + 37.96 %               ║
║ Using undefined assignment (proto: null)      │   10000 │  8059732.29 op/sec │ ± 12.26 % │ + 258.15 %              ║
║ Using delete property (proto: null)           │   10000 │  8886448.08 op/sec │ ±  3.44 % │ + 294.88 %              ║
║ Using undefined property (cached proto: null) │   10000 │ 14221655.88 op/sec │ ±  1.71 % │ + 531.96 %              ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Fastest test                                  │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using undefined assignment                    │   10000 │ 14348828.63 op/sec │ ±  2.03 % │ + 537.61 %              ║
╚═══════════════════════════════════════════════╧═════════╧════════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
```

## deno.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/deleting-properties/deno.mjs
benchmark                                          time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------------------- -----------------------------


Using delete property                             173.68 ns/iter   5,757,771.7 (169.24 ns … 240.59 ns) 175.34 ns 220.92 ns 232.31 ns
Using delete property (proto: null)                36.21 ns/iter  27,617,393.4   (34.57 ns … 45.99 ns)  37.82 ns  41.88 ns  42.51 ns
Using delete property (cached proto: null)        173.47 ns/iter   5,764,574.5 (169.35 ns … 185.03 ns) 175.63 ns 180.54 ns 180.62 ns
Using undefined assignment                          3.29 ns/iter 303,501,349.1     (3.17 ns … 4.81 ns)   3.29 ns   3.39 ns   3.56 ns
Using undefined assignment (proto: null)           32.61 ns/iter  30,667,072.3   (31.28 ns … 52.75 ns)  32.68 ns  36.88 ns   37.2 ns
Using undefined property (cached proto: null)       4.14 ns/iter 241,548,955.8      (3.91 ns … 6.2 ns)   4.14 ns   4.34 ns   4.46 ns

summary
  Using undefined assignment
   1.26x faster than Using undefined property (cached proto: null)
   9.9x faster than Using undefined assignment (proto: null)
   10.99x faster than Using delete property (proto: null)
   52.65x faster than Using delete property (cached proto: null)
   52.71x faster than Using delete property
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/deleting-properties/deno.mjs
benchmark                                          time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------------------- -----------------------------


Using delete property                             175.94 ns/iter   5,683,834.5 (164.88 ns … 354.75 ns) 176.94 ns 283.05 ns 292.22 ns
Using delete property (proto: null)                36.19 ns/iter  27,631,096.0    (33.6 ns … 67.04 ns)  38.39 ns  47.84 ns  55.31 ns
Using delete property (cached proto: null)        177.85 ns/iter   5,622,594.7    (170.09 ns … 286 ns) 179.07 ns 251.06 ns 252.46 ns
Using undefined assignment                          4.21 ns/iter 237,284,568.4     (3.91 ns … 7.65 ns)   4.19 ns    5.6 ns   7.32 ns
Using undefined assignment (proto: null)           32.98 ns/iter  30,318,821.8   (31.58 ns … 39.29 ns)  33.37 ns  37.41 ns  37.64 ns
Using undefined property (cached proto: null)        4.2 ns/iter 237,992,302.2    (3.29 ns … 10.35 ns)   4.19 ns   6.81 ns   6.81 ns

summary
  Using undefined property (cached proto: null)
   1x faster than Using undefined assignment
   7.85x faster than Using undefined assignment (proto: null)
   8.61x faster than Using delete property (proto: null)
   41.87x faster than Using delete property
   42.33x faster than Using delete property (cached proto: null)
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/deleting-properties/deno.mjs
benchmark                                          time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------------------- -----------------------------


Using delete property                             174.65 ns/iter   5,725,808.6 (164.51 ns … 293.56 ns) 176.39 ns 239.45 ns 292.68 ns
Using delete property (proto: null)                35.77 ns/iter  27,955,290.7   (33.71 ns … 49.96 ns)  38.11 ns  43.61 ns   45.4 ns
Using delete property (cached proto: null)        170.37 ns/iter   5,869,647.9 (163.64 ns … 286.87 ns) 171.36 ns 240.99 ns 263.35 ns
Using undefined assignment                          4.07 ns/iter 245,603,231.1     (3.85 ns … 6.77 ns)   4.08 ns   4.34 ns   4.53 ns
Using undefined assignment (proto: null)           32.13 ns/iter  31,118,884.9    (30.8 ns … 38.79 ns)  32.05 ns  36.55 ns  36.96 ns
Using undefined property (cached proto: null)       3.24 ns/iter 308,272,756.9     (3.11 ns … 6.47 ns)   3.24 ns   3.46 ns   3.65 ns

summary
  Using undefined property (cached proto: null)
   1.26x faster than Using undefined assignment
   9.91x faster than Using undefined assignment (proto: null)
   11.03x faster than Using delete property (proto: null)
   52.52x faster than Using delete property (cached proto: null)
   53.84x faster than Using delete property
----------------------------------------------------------------------------
```

## isitfast.js.log

```txt
Deleting Properties:

Using delete propertyUsing delete property                         4,975,124.378 op/s (201 ns) ±1% x2,500
                                              64 kB ±8% x25

Using delete property (proto: null)Using delete property (proto: null)           32,258,064.516 op/s (31 ns) ±1% x2,500
                                              0 kB ±0% x25

Using delete property (cached proto: null)Using delete property (cached proto: null)    4,149,377.593 op/s (241 ns) ±1% x2,500
                                              48 kB ±1e+1% x25

Using undefined assignmentUsing undefined assignment                    100,000,000 op/s (10 ns) ±1% x2,500
                                              0 kB ±0% x25

Using undefined assignment (proto: null)Using undefined assignment (proto: null)      47,619,047.619 op/s (21 ns) ±1% x2,500
                                              0 kB ±0% x25

Using undefined property (cached proto: null)Using undefined property (cached proto: null) 25,000,000 op/s (40 ns) ±1% x2,500
                                              0 kB ±0% x25

=> Slowest is Using delete property (cached proto: null)
=> Fastest is Using undefined assignment

----------------------------------------------------------------------------
Deleting Properties:

Using delete propertyUsing delete property                         4,761,904.762 op/s (210 ns) ±1% x2,500
                                              64 kB ±8% x25

Using delete property (proto: null)Using delete property (proto: null)           32,258,064.516 op/s (31 ns) ±1% x2,500
                                              0 kB ±0% x25

Using delete property (cached proto: null)Using delete property (cached proto: null)    3,984,063.745 op/s (251 ns) ±1% x2,500
                                              48 kB ±1e+1% x25

Using undefined assignmentUsing undefined assignment                    100,000,000 op/s (10 ns) ±1% x2,500
                                              0 kB ±0% x25

Using undefined assignment (proto: null)Using undefined assignment (proto: null)      100,000,000 op/s (10 ns) ±1% x2,500
                                              0 kB ±0% x25

Using undefined property (cached proto: null)Using undefined property (cached proto: null) 33,333,333.333 op/s (30 ns) ±1% x2,500
                                              0 kB ±0% x25

=> Slowest is Using delete property (cached proto: null)
=> Fastest is Using undefined assignment

----------------------------------------------------------------------------
Deleting Properties:

Using delete propertyUsing delete property                         4,975,124.378 op/s (201 ns) ±1% x2,500
                                              64 kB ±8% x25

Using delete property (proto: null)Using delete property (proto: null)           50,000,000 op/s (20 ns) ±1% x2,500
                                              0 kB ±0% x25

Using delete property (cached proto: null)Using delete property (cached proto: null)    4,166,666.667 op/s (240 ns) ±1% x2,500
                                              48 kB ±1e+1% x25

Using undefined assignmentUsing undefined assignment                    ∞ op/s (0 ns) ±0% x2,500
                                              0 kB ±0% x25

Using undefined assignment (proto: null)Using undefined assignment (proto: null)      50,000,000 op/s (20 ns) ±1% x2,500
                                              0 kB ±0% x25

Using undefined property (cached proto: null)Using undefined property (cached proto: null) 20,000,000 op/s (50 ns) ±1% x2,500
                                              0 kB ±0% x25

=> Slowest is Using delete property (cached proto: null)
=> Fastest is Using undefined assignment

----------------------------------------------------------------------------
```

## mitata.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                                          time (avg)             (min … max)
-------------------------------------------------------------------------------------
Using delete property                          177.76 ns/iter (171.22 ns … 228.26 ns)
Using delete property (proto: null)              41.4 ns/iter   (36.54 ns … 75.51 ns)
Using delete property (cached proto: null)     178.96 ns/iter    (174 ns … 290.41 ns)
Using undefined assignment                        3.6 ns/iter     (3.5 ns … 17.84 ns)
Using undefined assignment (proto: null)        34.54 ns/iter   (30.23 ns … 72.72 ns)
Using undefined property (cached proto: null)    3.47 ns/iter      (3.2 ns … 6.45 ns)

summary
  Using undefined property (cached proto: null)
   1.04x faster than Using undefined assignment
   9.95x faster than Using undefined assignment (proto: null)
   11.92x faster than Using delete property (proto: null)
   51.21x faster than Using delete property
   51.55x faster than Using delete property (cached proto: null)
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                                          time (avg)             (min … max)
-------------------------------------------------------------------------------------
Using delete property                          183.81 ns/iter (165.74 ns … 305.68 ns)
Using delete property (proto: null)             41.29 ns/iter    (36.6 ns … 86.09 ns)
Using delete property (cached proto: null)     172.86 ns/iter (168.29 ns … 183.02 ns)
Using undefined assignment                       3.44 ns/iter     (3.14 ns … 10.1 ns)
Using undefined assignment (proto: null)        33.46 ns/iter   (29.88 ns … 53.29 ns)
Using undefined property (cached proto: null)    2.87 ns/iter     (2.77 ns … 5.25 ns)

summary
  Using undefined property (cached proto: null)
   1.2x faster than Using undefined assignment
   11.67x faster than Using undefined assignment (proto: null)
   14.4x faster than Using delete property (proto: null)
   60.28x faster than Using delete property (cached proto: null)
   64.1x faster than Using delete property
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                                          time (avg)             (min … max)
-------------------------------------------------------------------------------------
Using delete property                          176.66 ns/iter (169.53 ns … 214.48 ns)
Using delete property (proto: null)             39.93 ns/iter    (36.5 ns … 71.63 ns)
Using delete property (cached proto: null)     177.34 ns/iter (173.35 ns … 188.69 ns)
Using undefined assignment                       3.52 ns/iter    (3.25 ns … 10.53 ns)
Using undefined assignment (proto: null)        34.19 ns/iter    (30.66 ns … 39.4 ns)
Using undefined property (cached proto: null)     3.5 ns/iter     (3.26 ns … 4.99 ns)

summary
  Using undefined property (cached proto: null)
   1x faster than Using undefined assignment
   9.77x faster than Using undefined assignment (proto: null)
   11.41x faster than Using delete property (proto: null)
   50.47x faster than Using delete property
   50.66x faster than Using delete property (cached proto: null)
----------------------------------------------------------------------------
```

## node.managed.mjs.log

```txt
Using delete property x 5,032,128 ops/sec +/- 0% (10 runs sampled)	min..max=(197ns ... 198ns) p75=198ns p99=198ns
Using delete property (proto: null) x 24,829,388 ops/sec +/- 0% (11 runs sampled)	min..max=(40.03ns ... 40.56ns) p75=40.33ns p99=40.56ns
Using delete property (cached proto: null) x 4,548,295 ops/sec +/- 0.01% (9 runs sampled)	min..max=(219ns ... 222ns) p75=220ns p99=222ns
Using undefined assignment x 299,830,643 ops/sec +/- 0.01% (11 runs sampled)	min..max=(3.30ns ... 3.38ns) p75=3.35ns p99=3.38ns
Using undefined assignment (proto: null) x 26,981,963 ops/sec +/- 0% (10 runs sampled)	min..max=(36.93ns ... 37.12ns) p75=37.08ns p99=37.12ns
Using undefined property (cached proto: null) x 27,764,532 ops/sec +/- 0.03% (9 runs sampled)	min..max=(34.63ns ... 38.20ns) p75=36.79ns p99=38.20ns
----------------------------------------------------------------------------
Using delete property x 5,068,777 ops/sec +/- 0% (9 runs sampled)	min..max=(196ns ... 197ns) p75=197ns p99=197ns
Using delete property (proto: null) x 24,402,256 ops/sec +/- 0% (11 runs sampled)	min..max=(40.88ns ... 41.09ns) p75=41.03ns p99=41.09ns
Using delete property (cached proto: null) x 4,513,979 ops/sec +/- 0.01% (9 runs sampled)	min..max=(221ns ... 225ns) p75=221ns p99=225ns
Using undefined assignment x 301,162,963 ops/sec +/- 0% (11 runs sampled)	min..max=(3.30ns ... 3.34ns) p75=3.32ns p99=3.34ns
Using undefined assignment (proto: null) x 26,345,376 ops/sec +/- 0% (10 runs sampled)	min..max=(37.90ns ... 37.99ns) p75=37.97ns p99=37.99ns
Using undefined property (cached proto: null) x 26,847,777 ops/sec +/- 0.07% (8 runs sampled)	min..max=(36.83ns ... 45.59ns) p75=40.14ns p99=45.59ns
----------------------------------------------------------------------------
Using delete property x 5,089,235 ops/sec +/- 0% (10 runs sampled)	min..max=(195ns ... 197ns) p75=196ns p99=197ns
Using delete property (proto: null) x 24,442,447 ops/sec +/- 0% (11 runs sampled)	min..max=(40.69ns ... 41.09ns) p75=41.01ns p99=41.09ns
Using delete property (cached proto: null) x 4,505,461 ops/sec +/- 0% (9 runs sampled)	min..max=(222ns ... 222ns) p75=222ns p99=222ns
Using undefined assignment x 291,749,617 ops/sec +/- 0.01% (11 runs sampled)	min..max=(3.37ns ... 3.46ns) p75=3.45ns p99=3.46ns
Using undefined assignment (proto: null) x 26,725,643 ops/sec +/- 0% (10 runs sampled)	min..max=(37.26ns ... 37.53ns) p75=37.44ns p99=37.53ns
Using undefined property (cached proto: null) x 28,347,017 ops/sec +/- 0.01% (7 runs sampled)	min..max=(36.15ns ... 37.78ns) p75=37.56ns p99=37.78ns
----------------------------------------------------------------------------
```

## node.mjs.log

```txt
Using delete property x 5,185,106 ops/sec +/- 0.01% (11 runs sampled)	min..max=(191ns ... 194ns) p75=193ns p99=194ns
Using delete property (proto: null) x 24,317,085 ops/sec +/- 0% (11 runs sampled)	min..max=(41.06ns ... 41.15ns) p75=41.13ns p99=41.15ns
Using delete property (cached proto: null) x 5,274,572 ops/sec +/- 0% (10 runs sampled)	min..max=(189ns ... 190ns) p75=190ns p99=190ns
Using undefined assignment x 306,648,338 ops/sec +/- 0% (11 runs sampled)	min..max=(3.22ns ... 3.28ns) p75=3.27ns p99=3.28ns
Using undefined assignment (proto: null) x 26,657,959 ops/sec +/- 0% (10 runs sampled)	min..max=(37.45ns ... 37.55ns) p75=37.52ns p99=37.55ns
Using undefined property (cached proto: null) x 305,227,052 ops/sec +/- 0% (11 runs sampled)	min..max=(3.24ns ... 3.30ns) p75=3.28ns p99=3.30ns
----------------------------------------------------------------------------
Using delete property x 5,164,737 ops/sec +/- 0% (9 runs sampled)	min..max=(193ns ... 193ns) p75=193ns p99=193ns
Using delete property (proto: null) x 24,167,146 ops/sec +/- 0% (10 runs sampled)	min..max=(41.04ns ... 41.43ns) p75=41.17ns p99=41.43ns
Using delete property (cached proto: null) x 5,248,010 ops/sec +/- 0% (10 runs sampled)	min..max=(190ns ... 191ns) p75=190ns p99=191ns
Using undefined assignment x 301,500,670 ops/sec +/- 0.01% (11 runs sampled)	min..max=(3.28ns ... 3.41ns) p75=3.34ns p99=3.41ns
Using undefined assignment (proto: null) x 26,739,228 ops/sec +/- 0% (10 runs sampled)	min..max=(37.30ns ... 37.47ns) p75=37.39ns p99=37.47ns
Using undefined property (cached proto: null) x 302,029,468 ops/sec +/- 0% (11 runs sampled)	min..max=(3.27ns ... 3.31ns) p75=3.31ns p99=3.31ns
----------------------------------------------------------------------------
Using delete property x 5,133,267 ops/sec +/- 0% (9 runs sampled)	min..max=(194ns ... 195ns) p75=194ns p99=195ns
Using delete property (proto: null) x 24,944,417 ops/sec +/- 0% (8 runs sampled)	min..max=(40.08ns ... 40.17ns) p75=40.13ns p99=40.17ns
Using delete property (cached proto: null) x 5,216,681 ops/sec +/- 0% (10 runs sampled)	min..max=(191ns ... 192ns) p75=192ns p99=192ns
Using undefined assignment x 301,656,414 ops/sec +/- 0.01% (11 runs sampled)	min..max=(3.28ns ... 3.34ns) p75=3.34ns p99=3.34ns
Using undefined assignment (proto: null) x 26,993,267 ops/sec +/- 0% (9 runs sampled)	min..max=(37.02ns ... 37.08ns) p75=37.06ns p99=37.08ns
Using undefined property (cached proto: null) x 302,659,626 ops/sec +/- 0% (11 runs sampled)	min..max=(3.28ns ... 3.33ns) p75=3.31ns p99=3.33ns
----------------------------------------------------------------------------
```

## tinybench.mjs.log

```txt
┌─────────┬─────────────────────────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ (index) │                    Task Name                    │   ops/sec    │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼─────────────────────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│    0    │             'Using delete property'             │ '4,175,125'  │ 239.51377618931647 │ '±1.55%' │ 417513  │
│    1    │      'Using delete property (proto: null)'      │ '11,871,968' │ 84.23203078514295  │ '±0.87%' │ 1187197 │
│    2    │  'Using delete property (cached proto: null)'   │ '4,360,893'  │ 229.3108308933787  │ '±0.53%' │ 436090  │
│    3    │          'Using undefined assignment'           │ '22,343,990' │ 44.754763389579125 │ '±1.00%' │ 2234400 │
│    4    │   'Using undefined assignment (proto: null)'    │ '12,772,528' │  78.2930353259968  │ '±0.80%' │ 1277253 │
│    5    │ 'Using undefined property (cached proto: null)' │ '22,369,695' │ 44.70333497219117  │ '±0.83%' │ 2236970 │
└─────────┴─────────────────────────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬─────────────────────────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ (index) │                    Task Name                    │   ops/sec    │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼─────────────────────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│    0    │             'Using delete property'             │ '4,237,905'  │  235.965605399423  │ '±1.54%' │ 423791  │
│    1    │      'Using delete property (proto: null)'      │ '12,462,852' │ 80.23845443332877  │ '±0.79%' │ 1246286 │
│    2    │  'Using delete property (cached proto: null)'   │ '4,163,729'  │ 240.16932695053313 │ '±0.62%' │ 416373  │
│    3    │          'Using undefined assignment'           │ '21,951,523' │ 45.554923783926554 │ '±1.10%' │ 2195153 │
│    4    │   'Using undefined assignment (proto: null)'    │ '12,658,233' │ 78.99996594224606  │ '±0.88%' │ 1265824 │
│    5    │ 'Using undefined property (cached proto: null)' │ '22,326,112' │ 44.79060028754747  │ '±0.86%' │ 2232612 │
└─────────┴─────────────────────────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬─────────────────────────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ (index) │                    Task Name                    │   ops/sec    │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼─────────────────────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│    0    │             'Using delete property'             │ '3,999,953'  │ 250.00291286812788 │ '±1.55%' │ 399996  │
│    1    │      'Using delete property (proto: null)'      │ '12,050,992' │ 82.98071483079798  │ '±0.84%' │ 1205100 │
│    2    │  'Using delete property (cached proto: null)'   │ '4,436,761'  │ 225.3896464075279  │ '±0.56%' │ 443677  │
│    3    │          'Using undefined assignment'           │ '22,681,006' │ 44.089753203649806 │ '±0.53%' │ 2268101 │
│    4    │   'Using undefined assignment (proto: null)'    │ '12,782,812' │ 78.23004227080972  │ '±0.87%' │ 1278282 │
│    5    │ 'Using undefined property (cached proto: null)' │ '22,537,027' │ 44.371423124143675 │ '±0.13%' │ 2253703 │
└─────────┴─────────────────────────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
```