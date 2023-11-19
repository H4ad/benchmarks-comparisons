# deleting-properties

## benchmark.mjs.log

```txt
Using delete property x 5,703,594 ops/sec ±0.77% (95 runs sampled)
Using delete property (proto: null) x 30,193,777 ops/sec ±0.45% (94 runs sampled)
Using delete property (cached proto: null) x 5,820,086 ops/sec ±0.49% (94 runs sampled)
Using undefined assignment x 1,186,758,190 ops/sec ±0.22% (100 runs sampled)
Using undefined assignment (proto: null) x 32,996,632 ops/sec ±0.47% (93 runs sampled)
Using undefined property (cached proto: null) x 1,175,482,329 ops/sec ±0.11% (97 runs sampled)
----------------------------------------------------------------------------
Using delete property x 5,689,261 ops/sec ±0.73% (94 runs sampled)
Using delete property (proto: null) x 30,062,593 ops/sec ±0.65% (95 runs sampled)
Using delete property (cached proto: null) x 5,776,108 ops/sec ±0.49% (95 runs sampled)
Using undefined assignment x 1,198,689,560 ops/sec ±0.23% (95 runs sampled)
Using undefined assignment (proto: null) x 33,013,870 ops/sec ±0.52% (95 runs sampled)
Using undefined property (cached proto: null) x 1,192,524,191 ops/sec ±0.33% (100 runs sampled)
----------------------------------------------------------------------------
Using delete property x 5,689,162 ops/sec ±0.78% (93 runs sampled)
Using delete property (proto: null) x 30,225,951 ops/sec ±0.77% (91 runs sampled)
Using delete property (cached proto: null) x 5,768,755 ops/sec ±0.81% (94 runs sampled)
Using undefined assignment x 1,194,632,721 ops/sec ±0.26% (93 runs sampled)
Using undefined assignment (proto: null) x 32,883,411 ops/sec ±0.72% (94 runs sampled)
Using undefined property (cached proto: null) x 1,213,632,003 ops/sec ±0.48% (97 runs sampled)
----------------------------------------------------------------------------
```

## cronometro.mjs.log

```txt
╔═══════════════════════════════════════════════╤═════════╤════════════════════╤═══════════╤═════════════════════════╗
║ Slower tests                                  │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using delete property                         │   10000 │  3216366.93 op/sec │ ±  7.95 % │                         ║
║ Using delete property (cached proto: null)    │   10000 │  3533424.07 op/sec │ ±  5.90 % │ + 9.86 %                ║
║ Using delete property (proto: null)           │    2500 │  6979048.90 op/sec │ ±  0.85 % │ + 116.99 %              ║
║ Using undefined assignment (proto: null)      │    2000 │  7348861.48 op/sec │ ±  0.88 % │ + 128.48 %              ║
║ Using undefined assignment                    │   10000 │ 10697635.61 op/sec │ ± 15.87 % │ + 232.60 %              ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Fastest test                                  │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using undefined property (cached proto: null) │   10000 │ 12972894.43 op/sec │ ±  2.76 % │ + 303.34 %              ║
╚═══════════════════════════════════════════════╧═════════╧════════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔═══════════════════════════════════════════════╤═════════╤════════════════════╤═══════════╤═════════════════════════╗
║ Slower tests                                  │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using delete property (cached proto: null)    │   10000 │  3291143.07 op/sec │ ±  5.81 % │                         ║
║ Using delete property                         │    4000 │  3475942.57 op/sec │ ±  0.91 % │ + 5.62 %                ║
║ Using delete property (proto: null)           │    2500 │  7289692.37 op/sec │ ±  0.93 % │ + 121.49 %              ║
║ Using undefined assignment (proto: null)      │   10000 │  8779230.45 op/sec │ ± 11.24 % │ + 166.75 %              ║
║ Using undefined assignment                    │   10000 │ 13029740.38 op/sec │ ±  2.42 % │ + 295.90 %              ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Fastest test                                  │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using undefined property (cached proto: null) │   10000 │ 13565668.01 op/sec │ ±  2.91 % │ + 312.19 %              ║
╚═══════════════════════════════════════════════╧═════════╧════════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔═══════════════════════════════════════════════╤═════════╤════════════════════╤═══════════╤═════════════════════════╗
║ Slower tests                                  │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using delete property                         │    4500 │  2870741.97 op/sec │ ±  1.00 % │                         ║
║ Using delete property (cached proto: null)    │    9500 │  3406986.40 op/sec │ ±  0.99 % │ + 18.68 %               ║
║ Using undefined assignment (proto: null)      │   10000 │  7980336.45 op/sec │ ± 14.14 % │ + 177.99 %              ║
║ Using delete property (proto: null)           │   10000 │  8381702.74 op/sec │ ±  2.31 % │ + 191.97 %              ║
║ Using undefined property (cached proto: null) │   10000 │ 11390585.45 op/sec │ ± 19.17 % │ + 296.78 %              ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Fastest test                                  │ Samples │             Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────────────────┼─────────┼────────────────────┼───────────┼─────────────────────────╢
║ Using undefined assignment                    │   10000 │ 14379551.13 op/sec │ ±  2.18 % │ + 400.90 %              ║
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


Using delete property                              175.1 ns/iter   5,710,908.4 (169.32 ns … 236.77 ns) 176.18 ns 234.21 ns 234.22 ns
Using delete property (proto: null)                36.58 ns/iter  27,335,078.5   (34.84 ns … 56.17 ns)  39.16 ns   46.4 ns  49.61 ns
Using delete property (cached proto: null)        176.07 ns/iter   5,679,431.5 (167.31 ns … 228.33 ns) 178.04 ns 213.29 ns 218.56 ns
Using undefined assignment                          3.32 ns/iter 301,194,798.4     (3.15 ns … 7.79 ns)   3.31 ns   3.85 ns   5.66 ns
Using undefined assignment (proto: null)            33.2 ns/iter  30,124,559.6   (31.38 ns … 77.46 ns)  35.61 ns  42.81 ns  48.81 ns
Using undefined property (cached proto: null)       4.17 ns/iter 240,002,210.0     (3.91 ns … 6.87 ns)   4.14 ns    4.9 ns   6.05 ns

summary
  Using undefined assignment
   1.25x faster than Using undefined property (cached proto: null)
   10x faster than Using undefined assignment (proto: null)
   11.02x faster than Using delete property (proto: null)
   52.74x faster than Using delete property
   53.03x faster than Using delete property (cached proto: null)
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/deleting-properties/deno.mjs
benchmark                                          time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------------------- -----------------------------


Using delete property                             174.95 ns/iter   5,715,819.5 (167.77 ns … 292.63 ns) 175.94 ns 280.56 ns 282.76 ns
Using delete property (proto: null)                36.63 ns/iter  27,301,260.8   (34.09 ns … 82.07 ns)  38.58 ns  54.12 ns  60.74 ns
Using delete property (cached proto: null)        173.19 ns/iter   5,773,877.3 (164.05 ns … 249.46 ns) 174.33 ns 210.14 ns    224 ns
Using undefined assignment                          4.07 ns/iter 245,579,019.6     (3.22 ns … 7.11 ns)    4.1 ns   5.06 ns   5.39 ns
Using undefined assignment (proto: null)           33.28 ns/iter  30,052,151.1   (30.92 ns … 74.73 ns)   35.3 ns  47.35 ns  61.71 ns
Using undefined property (cached proto: null)       4.14 ns/iter 241,675,200.6     (3.85 ns … 6.61 ns)    4.1 ns   5.03 ns   5.32 ns

summary
  Using undefined assignment
   1.02x faster than Using undefined property (cached proto: null)
   8.17x faster than Using undefined assignment (proto: null)
   9x faster than Using delete property (proto: null)
   42.53x faster than Using delete property (cached proto: null)
   42.96x faster than Using delete property
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/deleting-properties/deno.mjs
benchmark                                          time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------------------- -----------------------------


Using delete property                             176.81 ns/iter   5,655,774.8 (172.26 ns … 289.09 ns) 178.75 ns 222.53 ns 246.45 ns
Using delete property (proto: null)                37.29 ns/iter  26,814,438.1   (34.93 ns … 72.82 ns)  39.78 ns   51.5 ns  61.21 ns
Using delete property (cached proto: null)        176.22 ns/iter   5,674,805.3  (169.7 ns … 195.18 ns) 178.98 ns 185.28 ns 186.91 ns
Using undefined assignment                          4.29 ns/iter 232,959,927.5    (3.95 ns … 24.48 ns)   4.19 ns   7.02 ns   7.17 ns
Using undefined assignment (proto: null)           33.42 ns/iter  29,922,480.6   (31.66 ns … 55.16 ns)  36.15 ns   41.7 ns  46.01 ns
Using undefined property (cached proto: null)       4.19 ns/iter 238,448,330.4     (3.93 ns … 5.28 ns)   4.19 ns    4.4 ns    4.5 ns

summary
  Using undefined property (cached proto: null)
   1.02x faster than Using undefined assignment
   7.97x faster than Using undefined assignment (proto: null)
   8.89x faster than Using delete property (proto: null)
   42.02x faster than Using delete property (cached proto: null)
   42.16x faster than Using delete property
----------------------------------------------------------------------------
```

## isitfast.js.log

```txt
Deleting Properties:

Using delete propertyUsing delete property                         5,235,602.094 op/s (191 ns) ±1% x2,500
                                              64 kB ±8% x25

Using delete property (proto: null)Using delete property (proto: null)           33,333,333.333 op/s (30 ns) ±1% x2,500
                                              0 kB ±0% x25

Using delete property (cached proto: null)Using delete property (cached proto: null)    4,329,004.329 op/s (231 ns) ±1% x2,500
                                              48 kB ±1e+1% x25

Using undefined assignmentUsing undefined assignment                    ∞ op/s (0 ns) ±0% x2,500
                                              0 kB ±0% x25

Using undefined assignment (proto: null)Using undefined assignment (proto: null)      33,333,333.333 op/s (30 ns) ±1% x2,500
                                              0 kB ±0% x25

Using undefined property (cached proto: null)Using undefined property (cached proto: null) 11,111,111.111 op/s (90 ns) ±1% x2,500
                                              0 kB ±0% x25

=> Slowest is Using delete property (cached proto: null)
=> Fastest is Using undefined assignment

----------------------------------------------------------------------------
Deleting Properties:

Using delete propertyUsing delete property                         6,666,666.667 op/s (150 ns) ±1% x2,500
                                              64 kB ±8% x25

Using delete property (proto: null)Using delete property (proto: null)           ∞ op/s (0 ns) ±0% x2,500
                                              0 kB ±0% x25

Using delete property (cached proto: null)Using delete property (cached proto: null)    5,235,602.094 op/s (191 ns) ±1% x2,500
                                              48 kB ±1e+1% x25

Using undefined assignmentUsing undefined assignment                    ∞ op/s (0 ns) ±0% x2,500
                                              0 kB ±0% x25

Using undefined assignment (proto: null)Using undefined assignment (proto: null)      ∞ op/s (0 ns) ±0% x2,500
                                              0 kB ±0% x25

Using undefined property (cached proto: null)Using undefined property (cached proto: null) ∞ op/s (0 ns) ±0% x2,500
                                              0 kB ±0% x25

=> Slowest is Using delete property (cached proto: null)
=> Fastest is Using delete property (proto: null)

----------------------------------------------------------------------------
Deleting Properties:

Using delete propertyUsing delete property                         4,739,336.493 op/s (211 ns) ±1% x2,500
                                              64 kB ±8% x25

Using delete property (proto: null)Using delete property (proto: null)           50,000,000 op/s (20 ns) ±1% x2,500
                                              0 kB ±0% x25

Using delete property (cached proto: null)Using delete property (cached proto: null)    3,846,153.846 op/s (260 ns) ±1% x2,500
                                              48 kB ±1e+1% x25

Using undefined assignmentUsing undefined assignment                    100,000,000 op/s (10 ns) ±1% x2,500
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
Using delete property                          177.21 ns/iter  (167.87 ns … 308.3 ns)
Using delete property (proto: null)             40.78 ns/iter   (36.54 ns … 71.71 ns)
Using delete property (cached proto: null)     175.71 ns/iter (170.23 ns … 245.39 ns)
Using undefined assignment                       3.37 ns/iter    (2.79 ns … 10.52 ns)
Using undefined assignment (proto: null)        34.78 ns/iter    (31.24 ns … 47.5 ns)
Using undefined property (cached proto: null)    3.51 ns/iter     (3.22 ns … 10.2 ns)

summary
  Using undefined assignment
   1.04x faster than Using undefined property (cached proto: null)
   10.33x faster than Using undefined assignment (proto: null)
   12.12x faster than Using delete property (proto: null)
   52.21x faster than Using delete property (cached proto: null)
   52.65x faster than Using delete property
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                                          time (avg)             (min … max)
-------------------------------------------------------------------------------------
Using delete property                           176.6 ns/iter (168.79 ns … 340.39 ns)
Using delete property (proto: null)             42.03 ns/iter   (36.85 ns … 79.92 ns)
Using delete property (cached proto: null)      176.2 ns/iter  (170.6 ns … 229.63 ns)
Using undefined assignment                       3.15 ns/iter     (2.82 ns … 10.9 ns)
Using undefined assignment (proto: null)        34.42 ns/iter   (30.51 ns … 64.89 ns)
Using undefined property (cached proto: null)     3.5 ns/iter    (3.22 ns … 10.22 ns)

summary
  Using undefined assignment
   1.11x faster than Using undefined property (cached proto: null)
   10.93x faster than Using undefined assignment (proto: null)
   13.35x faster than Using delete property (proto: null)
   55.96x faster than Using delete property (cached proto: null)
   56.09x faster than Using delete property
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                                          time (avg)             (min … max)
-------------------------------------------------------------------------------------
Using delete property                          177.94 ns/iter (166.29 ns … 305.61 ns)
Using delete property (proto: null)             39.92 ns/iter   (35.08 ns … 84.62 ns)
Using delete property (cached proto: null)      179.9 ns/iter  (167.3 ns … 230.98 ns)
Using undefined assignment                       3.51 ns/iter    (3.15 ns … 11.46 ns)
Using undefined assignment (proto: null)        34.57 ns/iter   (29.42 ns … 63.55 ns)
Using undefined property (cached proto: null)    3.47 ns/iter    (3.22 ns … 11.08 ns)

summary
  Using undefined property (cached proto: null)
   1.01x faster than Using undefined assignment
   9.95x faster than Using undefined assignment (proto: null)
   11.49x faster than Using delete property (proto: null)
   51.22x faster than Using delete property
   51.79x faster than Using delete property (cached proto: null)
----------------------------------------------------------------------------
```

## node.managed.mjs.log

```txt
Using delete property x 5,097,537 ops/sec +/- 0% (9 runs sampled)	min..max=(192ns ... 193ns) p75=193ns p99=193ns
Using delete property (proto: null) x 25,083,852 ops/sec +/- 0.01% (10 runs sampled)	min..max=(39.15ns ... 40.45ns) p75=39.80ns p99=40.45ns
Using delete property (cached proto: null) x 4,548,912 ops/sec +/- 0.03% (11 runs sampled)	min..max=(212ns ... 234ns) p75=219ns p99=234ns
Using undefined assignment x 301,069,249 ops/sec +/- 0.02% (13 runs sampled)	min..max=(3.26ns ... 3.46ns) p75=3.33ns p99=3.46ns
Using undefined assignment (proto: null) x 26,987,675 ops/sec +/- 0.01% (11 runs sampled)	min..max=(36.70ns ... 38.05ns) p75=37.08ns p99=38.05ns
Using undefined property (cached proto: null) x 29,338,898 ops/sec +/- 0.02% (8 runs sampled)	min..max=(33.88ns ... 35.39ns) p75=34.57ns p99=35.39ns
----------------------------------------------------------------------------
Using delete property x 5,127,295 ops/sec +/- 0.01% (10 runs sampled)	min..max=(191ns ... 197ns) p75=194ns p99=197ns
Using delete property (proto: null) x 25,061,315 ops/sec +/- 0% (10 runs sampled)	min..max=(39.60ns ... 40.08ns) p75=39.86ns p99=40.08ns
Using delete property (cached proto: null) x 4,522,613 ops/sec +/- 0.04% (11 runs sampled)	min..max=(211ns ... 240ns) p75=220ns p99=240ns
Using undefined assignment x 288,036,992 ops/sec +/- 0.02% (10 runs sampled)	min..max=(3.34ns ... 3.53ns) p75=3.49ns p99=3.53ns
Using undefined assignment (proto: null) x 25,415,813 ops/sec +/- 0% (9 runs sampled)	min..max=(38.66ns ... 39.29ns) p75=39.08ns p99=39.29ns
Using undefined property (cached proto: null) x 26,601,308 ops/sec +/- 0.02% (7 runs sampled)	min..max=(38.21ns ... 40.42ns) p75=39.86ns p99=40.42ns
----------------------------------------------------------------------------
Using delete property x 5,073,888 ops/sec +/- 0.05% (11 runs sampled)	min..max=(190ns ... 218ns) p75=203ns p99=218ns
Using delete property (proto: null) x 23,941,074 ops/sec +/- 0.01% (11 runs sampled)	min..max=(41.45ns ... 42.44ns) p75=42.30ns p99=42.44ns
Using delete property (cached proto: null) x 4,526,533 ops/sec +/- 0.01% (10 runs sampled)	min..max=(219ns ... 225ns) p75=222ns p99=225ns
Using undefined assignment x 299,791,510 ops/sec +/- 0.01% (11 runs sampled)	min..max=(3.31ns ... 3.37ns) p75=3.35ns p99=3.37ns
Using undefined assignment (proto: null) x 25,939,122 ops/sec +/- 0.01% (10 runs sampled)	min..max=(38.12ns ... 38.77ns) p75=38.63ns p99=38.77ns
Using undefined property (cached proto: null) x 28,223,558 ops/sec +/- 0.04% (9 runs sampled)	min..max=(35.95ns ... 40.82ns) p75=38.08ns p99=40.82ns
----------------------------------------------------------------------------
```

## node.mjs.log

```txt
Using delete property x 5,103,953 ops/sec +/- 0.01% (11 runs sampled)	min..max=(193ns ... 201ns) p75=196ns p99=201ns
Using delete property (proto: null) x 24,183,691 ops/sec +/- 0.02% (11 runs sampled)	min..max=(40.47ns ... 43.21ns) p75=41.53ns p99=43.21ns
Using delete property (cached proto: null) x 5,192,961 ops/sec +/- 0% (10 runs sampled)	min..max=(192ns ... 193ns) p75=193ns p99=193ns
Using undefined assignment x 298,033,230 ops/sec +/- 0.01% (10 runs sampled)	min..max=(3.30ns ... 3.45ns) p75=3.33ns p99=3.45ns
Using undefined assignment (proto: null) x 26,772,912 ops/sec +/- 0% (10 runs sampled)	min..max=(37.03ns ... 37.43ns) p75=37.34ns p99=37.43ns
Using undefined property (cached proto: null) x 299,796,688 ops/sec +/- 0.01% (11 runs sampled)	min..max=(3.29ns ... 3.37ns) p75=3.36ns p99=3.37ns
----------------------------------------------------------------------------
Using delete property x 5,057,206 ops/sec +/- 0.01% (10 runs sampled)	min..max=(196ns ... 199ns) p75=198ns p99=199ns
Using delete property (proto: null) x 24,095,459 ops/sec +/- 0.01% (11 runs sampled)	min..max=(41.29ns ... 41.99ns) p75=41.66ns p99=41.99ns
Using delete property (cached proto: null) x 5,163,403 ops/sec +/- 0% (10 runs sampled)	min..max=(193ns ... 194ns) p75=194ns p99=194ns
Using undefined assignment x 295,702,145 ops/sec +/- 0.01% (11 runs sampled)	min..max=(3.35ns ... 3.42ns) p75=3.39ns p99=3.42ns
Using undefined assignment (proto: null) x 26,340,468 ops/sec +/- 0.01% (11 runs sampled)	min..max=(37.74ns ... 38.53ns) p75=38.00ns p99=38.53ns
Using undefined property (cached proto: null) x 295,968,911 ops/sec +/- 0.01% (12 runs sampled)	min..max=(3.34ns ... 3.40ns) p75=3.38ns p99=3.40ns
----------------------------------------------------------------------------
Using delete property x 5,008,552 ops/sec +/- 0.01% (11 runs sampled)	min..max=(197ns ... 202ns) p75=200ns p99=202ns
Using delete property (proto: null) x 24,058,114 ops/sec +/- 0% (10 runs sampled)	min..max=(41.05ns ... 41.44ns) p75=41.43ns p99=41.44ns
Using delete property (cached proto: null) x 5,048,809 ops/sec +/- 0% (8 runs sampled)	min..max=(196ns ... 198ns) p75=198ns p99=198ns
Using undefined assignment x 299,800,616 ops/sec +/- 0.01% (12 runs sampled)	min..max=(3.29ns ... 3.42ns) p75=3.35ns p99=3.42ns
Using undefined assignment (proto: null) x 25,471,438 ops/sec +/- 0.02% (11 runs sampled)	min..max=(38.35ns ... 41.45ns) p75=40.45ns p99=41.45ns
Using undefined property (cached proto: null) x 297,838,128 ops/sec +/- 0.02% (13 runs sampled)	min..max=(3.29ns ... 3.51ns) p75=3.39ns p99=3.51ns
----------------------------------------------------------------------------
```

## tinybench.mjs.log

```txt
┌─────────┬─────────────────────────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ (index) │                    Task Name                    │   ops/sec    │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼─────────────────────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│    0    │             'Using delete property'             │ '3,942,302'  │ 253.65884296880876 │ '±2.10%' │ 394231  │
│    1    │      'Using delete property (proto: null)'      │ '11,760,325' │  85.0316602517746  │ '±0.95%' │ 1176033 │
│    2    │  'Using delete property (cached proto: null)'   │ '4,202,575'  │ 237.94930867722744 │ '±0.61%' │ 420258  │
│    3    │          'Using undefined assignment'           │ '21,949,231' │ 45.559680882548044 │ '±0.70%' │ 2194924 │
│    4    │   'Using undefined assignment (proto: null)'    │ '12,818,402' │ 78.01284228296042  │ '±1.15%' │ 1281841 │
│    5    │ 'Using undefined property (cached proto: null)' │ '22,365,316' │ 44.71208720419129  │ '±0.19%' │ 2236532 │
└─────────┴─────────────────────────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬─────────────────────────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ (index) │                    Task Name                    │   ops/sec    │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼─────────────────────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│    0    │             'Using delete property'             │ '4,037,803'  │ 247.65938778427855 │ '±1.76%' │ 403781  │
│    1    │      'Using delete property (proto: null)'      │ '11,981,620' │ 83.46116558807236  │ '±1.35%' │ 1198163 │
│    2    │  'Using delete property (cached proto: null)'   │ '4,249,075'  │ 235.34529546601755 │ '±0.61%' │ 424908  │
│    3    │          'Using undefined assignment'           │ '22,075,900' │ 45.29826600729315  │ '±1.10%' │ 2207591 │
│    4    │   'Using undefined assignment (proto: null)'    │ '12,831,975' │ 77.93032523150785  │ '±0.87%' │ 1283198 │
│    5    │ 'Using undefined property (cached proto: null)' │ '21,294,033' │ 46.96151117442021  │ '±0.52%' │ 2129404 │
└─────────┴─────────────────────────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬─────────────────────────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ (index) │                    Task Name                    │   ops/sec    │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼─────────────────────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│    0    │             'Using delete property'             │ '4,064,918'  │ 246.0073984203138  │ '±1.73%' │ 406492  │
│    1    │      'Using delete property (proto: null)'      │ '12,038,916' │ 83.06395654994745  │ '±1.20%' │ 1203892 │
│    2    │  'Using delete property (cached proto: null)'   │ '4,171,635'  │ 239.71412120313428 │ '±0.68%' │ 417164  │
│    3    │          'Using undefined assignment'           │ '21,941,827' │  45.5750559850549  │ '±1.13%' │ 2194183 │
│    4    │   'Using undefined assignment (proto: null)'    │ '13,233,696' │ 75.56467896266756  │ '±0.76%' │ 1323370 │
│    5    │ 'Using undefined property (cached proto: null)' │ '22,120,393' │ 45.207152463772864 │ '±0.87%' │ 2212040 │
└─────────┴─────────────────────────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
```