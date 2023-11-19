# crypto-verify

## benchmark.mjs.log

```txt
crypto.createVerify('RSA-SHA256') x 9,204 ops/sec ±0.82% (95 runs sampled)
crypto.verify('RSA-SHA256') x 9,191 ops/sec ±0.77% (98 runs sampled)
----------------------------------------------------------------------------
crypto.createVerify('RSA-SHA256') x 9,195 ops/sec ±0.69% (93 runs sampled)
crypto.verify('RSA-SHA256') x 8,841 ops/sec ±2.19% (91 runs sampled)
----------------------------------------------------------------------------
crypto.createVerify('RSA-SHA256') x 9,048 ops/sec ±0.60% (92 runs sampled)
crypto.verify('RSA-SHA256') x 9,145 ops/sec ±0.53% (97 runs sampled)
----------------------------------------------------------------------------
```

## cronometro.mjs.log

```txt
╔═══════════════════════════════════╤═════════╤════════════════╤═══════════╤═════════════════════════╗
║ Slower tests                      │ Samples │         Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ crypto.createVerify('RSA-SHA256') │    1000 │ 8023.32 op/sec │  ± 0.65 % │                         ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ Fastest test                      │ Samples │         Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ crypto.verify('RSA-SHA256')       │    1000 │ 8335.15 op/sec │  ± 0.33 % │ + 3.89 %                ║
╚═══════════════════════════════════╧═════════╧════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔═══════════════════════════════════╤═════════╤════════════════╤═══════════╤═════════════════════════╗
║ Slower tests                      │ Samples │         Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ crypto.createVerify('RSA-SHA256') │    1000 │ 8177.23 op/sec │  ± 0.28 % │                         ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ Fastest test                      │ Samples │         Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ crypto.verify('RSA-SHA256')       │    1000 │ 8291.76 op/sec │  ± 0.32 % │ + 1.40 %                ║
╚═══════════════════════════════════╧═════════╧════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔═══════════════════════════════════╤═════════╤════════════════╤═══════════╤═════════════════════════╗
║ Slower tests                      │ Samples │         Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ crypto.createVerify('RSA-SHA256') │    1000 │ 8125.78 op/sec │  ± 0.37 % │                         ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ Fastest test                      │ Samples │         Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ crypto.verify('RSA-SHA256')       │    1000 │ 8289.59 op/sec │  ± 0.30 % │ + 2.02 %                ║
╚═══════════════════════════════════╧═════════╧════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
```

## deno.managed.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/crypto-verify/deno.managed.mjs
benchmark                              time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------- -----------------------------


crypto.createVerify('RSA-SHA256')        210 µs/iter       4,761.8    (187.5 µs … 2.68 ms) 200.98 µs 365.08 µs 414.31 µs
crypto.verify('RSA-SHA256')           202.53 µs/iter       4,937.5 (183.83 µs … 996.88 µs) 194.99 µs 345.46 µs 399.54 µs

summary
  crypto.verify('RSA-SHA256')
   1.04x faster than crypto.createVerify('RSA-SHA256')
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/crypto-verify/deno.managed.mjs
benchmark                              time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------- -----------------------------


crypto.createVerify('RSA-SHA256')     207.19 µs/iter       4,826.4    (191.86 µs … 6.2 ms) 199.05 µs 349.57 µs 363.61 µs
crypto.verify('RSA-SHA256')           202.28 µs/iter       4,943.8 (189.57 µs … 632.34 µs) 196.69 µs 321.09 µs 398.61 µs

summary
  crypto.verify('RSA-SHA256')
   1.02x faster than crypto.createVerify('RSA-SHA256')
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/crypto-verify/deno.managed.mjs
benchmark                              time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------- -----------------------------


crypto.createVerify('RSA-SHA256')     206.64 µs/iter       4,839.3   (189.88 µs … 1.38 ms)  199.3 µs 331.94 µs 344.87 µs
crypto.verify('RSA-SHA256')           207.31 µs/iter       4,823.7   (186.79 µs … 2.23 ms) 198.66 µs 350.61 µs 414.32 µs

summary
  crypto.createVerify('RSA-SHA256')
   1x faster than crypto.verify('RSA-SHA256')
----------------------------------------------------------------------------
```

## deno.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/crypto-verify/deno.mjs
benchmark                              time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------- -----------------------------


crypto.createVerify('RSA-SHA256')     185.48 µs/iter       5,391.3   (175.08 µs … 3.29 ms) 183.66 µs 324.85 µs 373.15 µs
crypto.verify('RSA-SHA256')           190.46 µs/iter       5,250.4   (168.33 µs … 2.09 ms)  193.2 µs 317.54 µs 342.08 µs

summary
  crypto.createVerify('RSA-SHA256')
   1.03x faster than crypto.verify('RSA-SHA256')
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/crypto-verify/deno.mjs
benchmark                              time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------- -----------------------------


crypto.createVerify('RSA-SHA256')      188.5 µs/iter       5,305.2    (179.6 µs … 2.56 ms) 187.46 µs 233.78 µs 286.18 µs
crypto.verify('RSA-SHA256')           183.16 µs/iter       5,459.8   (176.75 µs … 1.44 ms) 181.68 µs 224.76 µs 275.02 µs

summary
  crypto.verify('RSA-SHA256')
   1.03x faster than crypto.createVerify('RSA-SHA256')
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/crypto-verify/deno.mjs
benchmark                              time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------- -----------------------------


crypto.createVerify('RSA-SHA256')     189.79 µs/iter       5,269.1    (179.2 µs … 2.49 ms) 189.68 µs  224.6 µs 252.35 µs
crypto.verify('RSA-SHA256')           195.36 µs/iter       5,118.8   (175.36 µs … 1.47 ms) 192.01 µs 338.75 µs 373.36 µs

summary
  crypto.createVerify('RSA-SHA256')
   1.03x faster than crypto.verify('RSA-SHA256')
----------------------------------------------------------------------------
```

## isitfast.js.log

```txt
crypto.verify:

crypto.createVerify('RSA-SHA256')crypto.createVerify('RSA-SHA256') 8,843.688 op/s (113,075 ns) ±1% x2,500
                                  656 kB ±0.8% x25

crypto.verify('RSA-SHA256')crypto.verify('RSA-SHA256')       9,055.592 op/s (110,429 ns) ±1% x2,500
                                  224 kB ±2% x25

=> Slowest is crypto.createVerify('RSA-SHA256')
=> Fastest is crypto.verify('RSA-SHA256')

----------------------------------------------------------------------------
crypto.verify:

crypto.createVerify('RSA-SHA256')crypto.createVerify('RSA-SHA256') 9,210.139 op/s (108,576 ns) ±1% x2,500
                                  656 kB ±0.8% x25

crypto.verify('RSA-SHA256')crypto.verify('RSA-SHA256')       9,345.532 op/s (107,003 ns) ±1% x2,500
                                  208 kB ±2% x25

=> Slowest is crypto.createVerify('RSA-SHA256')
=> Fastest is crypto.verify('RSA-SHA256')

----------------------------------------------------------------------------
crypto.verify:

crypto.createVerify('RSA-SHA256')crypto.createVerify('RSA-SHA256') 8,807.857 op/s (113,535 ns) ±1% x2,500
                                  656 kB ±0.8% x25

crypto.verify('RSA-SHA256')crypto.verify('RSA-SHA256')       9,108.381 op/s (109,789 ns) ±1% x2,500
                                  208 kB ±2% x25

=> Slowest is crypto.createVerify('RSA-SHA256')
=> Fastest is crypto.verify('RSA-SHA256')

----------------------------------------------------------------------------
```

## mitata.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                              time (avg)             (min … max)
-------------------------------------------------------------------------
crypto.createVerify('RSA-SHA256')  116.09 µs/iter (105.38 µs … 899.12 µs)
crypto.verify('RSA-SHA256')         114.4 µs/iter   (106.39 µs … 1.71 ms)

summary
  crypto.verify('RSA-SHA256')
   1.01x faster than crypto.createVerify('RSA-SHA256')
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                              time (avg)             (min … max)
-------------------------------------------------------------------------
crypto.createVerify('RSA-SHA256')  121.22 µs/iter (104.64 µs … 838.25 µs)
crypto.verify('RSA-SHA256')        113.73 µs/iter   (106.31 µs … 1.52 ms)

summary
  crypto.verify('RSA-SHA256')
   1.07x faster than crypto.createVerify('RSA-SHA256')
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v21.1.0 (x64-linux)

benchmark                              time (avg)             (min … max)
-------------------------------------------------------------------------
crypto.createVerify('RSA-SHA256')  118.19 µs/iter (109.24 µs … 738.77 µs)
crypto.verify('RSA-SHA256')         114.6 µs/iter   (109.12 µs … 2.12 ms)

summary
  crypto.verify('RSA-SHA256')
   1.03x faster than crypto.createVerify('RSA-SHA256')
----------------------------------------------------------------------------
```

## node.managed.mjs.log

```txt
crypto.createVerify('RSA-SHA256') x 9,395 ops/sec +/- 0.04% (11 runs sampled)	min..max=(99.76us ... 112.85us) p75=109.65us p99=112.85us
crypto.verify('RSA-SHA256') x 9,708 ops/sec +/- 0.02% (10 runs sampled)	min..max=(100.75us ... 105.52us) p75=104.96us p99=105.52us
----------------------------------------------------------------------------
crypto.createVerify('RSA-SHA256') x 9,052 ops/sec +/- 0.02% (9 runs sampled)	min..max=(108.73us ... 114.96us) p75=112.03us p99=114.96us
crypto.verify('RSA-SHA256') x 9,443 ops/sec +/- 0.03% (11 runs sampled)	min..max=(101.77us ... 111.43us) p75=107.34us p99=111.43us
----------------------------------------------------------------------------
crypto.createVerify('RSA-SHA256') x 9,138 ops/sec +/- 0.03% (9 runs sampled)	min..max=(104.21us ... 112.11us) p75=110.27us p99=112.11us
crypto.verify('RSA-SHA256') x 9,088 ops/sec +/- 0.03% (11 runs sampled)	min..max=(107.36us ... 117.42us) p75=112.15us p99=117.42us
----------------------------------------------------------------------------
```

## node.mjs.log

```txt
crypto.createVerify('RSA-SHA256') x 9,118 ops/sec +/- 0.04% (11 runs sampled)	min..max=(104.50us ... 115.43us) p75=113.22us p99=115.43us
crypto.verify('RSA-SHA256') x 9,283 ops/sec +/- 0.03% (11 runs sampled)	min..max=(103.87us ... 115.11us) p75=110.47us p99=115.11us
----------------------------------------------------------------------------
crypto.createVerify('RSA-SHA256') x 9,336 ops/sec +/- 0.04% (11 runs sampled)	min..max=(101.58us ... 112.94us) p75=109.83us p99=112.94us
crypto.verify('RSA-SHA256') x 9,402 ops/sec +/- 0.02% (10 runs sampled)	min..max=(102.18us ... 110.90us) p75=104.98us p99=110.90us
----------------------------------------------------------------------------
crypto.createVerify('RSA-SHA256') x 9,303 ops/sec +/- 0.04% (11 runs sampled)	min..max=(101.01us ... 113.55us) p75=108.51us p99=113.55us
crypto.verify('RSA-SHA256') x 9,373 ops/sec +/- 0.04% (11 runs sampled)	min..max=(102.77us ... 116.49us) p75=111.67us p99=116.49us
----------------------------------------------------------------------------
```

## tinybench.mjs.log

```txt
┌─────────┬─────────────────────────────────────┬─────────┬────────────────────┬──────────┬─────────┐
│ (index) │              Task Name              │ ops/sec │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼─────────────────────────────────────┼─────────┼────────────────────┼──────────┼─────────┤
│    0    │ "crypto.createVerify('RSA-SHA256')" │ '8,407' │ 118937.13181603902 │ '±1.26%' │   842   │
│    1    │    "crypto.verify('RSA-SHA256')"    │ '8,622' │ 115970.91193081053 │ '±0.65%' │   863   │
└─────────┴─────────────────────────────────────┴─────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬─────────────────────────────────────┬─────────┬────────────────────┬──────────┬─────────┐
│ (index) │              Task Name              │ ops/sec │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼─────────────────────────────────────┼─────────┼────────────────────┼──────────┼─────────┤
│    0    │ "crypto.createVerify('RSA-SHA256')" │ '8,095' │ 123517.88887409148 │ '±1.58%' │   810   │
│    1    │    "crypto.verify('RSA-SHA256')"    │ '8,261' │ 121048.58524935207 │ '±1.05%' │   827   │
└─────────┴─────────────────────────────────────┴─────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬─────────────────────────────────────┬─────────┬────────────────────┬──────────┬─────────┐
│ (index) │              Task Name              │ ops/sec │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼─────────────────────────────────────┼─────────┼────────────────────┼──────────┼─────────┤
│    0    │ "crypto.createVerify('RSA-SHA256')" │ '8,202' │ 121918.00485466052 │ '±1.41%' │   821   │
│    1    │    "crypto.verify('RSA-SHA256')"    │ '8,625' │ 115930.11476375759 │ '±0.40%' │   863   │
└─────────┴─────────────────────────────────────┴─────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
```