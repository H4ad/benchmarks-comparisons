# crypto-verify

## benchmark.mjs.log

```txt
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
```

## cronometro.mjs.log

```txt
╔═══════════════════════════════════╤═════════╤════════════════╤═══════════╤═════════════════════════╗
║ Slower tests                      │ Samples │         Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ crypto.createVerify('RSA-SHA256') │    1000 │ 8364.81 op/sec │  ± 0.18 % │                         ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ Fastest test                      │ Samples │         Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ crypto.verify('RSA-SHA256')       │    2000 │ 8453.17 op/sec │  ± 0.78 % │ + 1.06 %                ║
╚═══════════════════════════════════╧═════════╧════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔═══════════════════════════════════╤═════════╤════════════════╤═══════════╤═════════════════════════╗
║ Slower tests                      │ Samples │         Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ crypto.createVerify('RSA-SHA256') │    1000 │ 8363.54 op/sec │  ± 0.18 % │                         ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ Fastest test                      │ Samples │         Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ crypto.verify('RSA-SHA256')       │    1000 │ 8417.10 op/sec │  ± 0.19 % │ + 0.64 %                ║
╚═══════════════════════════════════╧═════════╧════════════════╧═══════════╧═════════════════════════╝

----------------------------------------------------------------------------
╔═══════════════════════════════════╤═════════╤════════════════╤═══════════╤═════════════════════════╗
║ Slower tests                      │ Samples │         Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ crypto.verify('RSA-SHA256')       │    1000 │ 8368.82 op/sec │  ± 0.18 % │                         ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ Fastest test                      │ Samples │         Result │ Tolerance │ Difference with slowest ║
╟───────────────────────────────────┼─────────┼────────────────┼───────────┼─────────────────────────╢
║ crypto.createVerify('RSA-SHA256') │    1000 │ 8405.36 op/sec │  ± 0.26 % │ + 0.44 %                ║
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


crypto.createVerify('RSA-SHA256')     202.13 µs/iter       4,947.4 (187.62 µs … 956.64 µs) 195.01 µs 415.65 µs 421.05 µs
crypto.verify('RSA-SHA256')           195.62 µs/iter       5,112.0    (182.74 µs … 1.3 ms) 192.25 µs 399.56 µs 401.63 µs

summary
  crypto.verify('RSA-SHA256')
   1.03x faster than crypto.createVerify('RSA-SHA256')
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/crypto-verify/deno.managed.mjs
benchmark                              time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------- -----------------------------


crypto.createVerify('RSA-SHA256')     203.48 µs/iter       4,914.4   (191.91 µs … 3.35 ms) 197.82 µs 412.63 µs 420.05 µs
crypto.verify('RSA-SHA256')           194.28 µs/iter       5,147.1   (185.67 µs … 1.11 ms) 192.03 µs 313.65 µs 322.67 µs

summary
  crypto.verify('RSA-SHA256')
   1.05x faster than crypto.createVerify('RSA-SHA256')
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/crypto-verify/deno.managed.mjs
benchmark                              time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------- -----------------------------


crypto.createVerify('RSA-SHA256')      205.9 µs/iter       4,856.8   (191.14 µs … 7.34 ms) 198.09 µs 329.31 µs  417.9 µs
crypto.verify('RSA-SHA256')           196.48 µs/iter       5,089.6 (188.23 µs … 768.29 µs) 195.33 µs 239.94 µs 270.31 µs

summary
  crypto.verify('RSA-SHA256')
   1.05x faster than crypto.createVerify('RSA-SHA256')
----------------------------------------------------------------------------
```

## deno.mjs.log

```txt
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/crypto-verify/deno.mjs
benchmark                              time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------- -----------------------------


crypto.createVerify('RSA-SHA256')     184.92 µs/iter       5,407.7    (172.53 µs … 3.4 ms) 184.89 µs 298.92 µs 306.58 µs
crypto.verify('RSA-SHA256')           179.23 µs/iter       5,579.5   (170.06 µs … 1.26 ms) 180.74 µs 207.15 µs 220.97 µs

summary
  crypto.verify('RSA-SHA256')
   1.03x faster than crypto.createVerify('RSA-SHA256')
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/crypto-verify/deno.mjs
benchmark                              time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------- -----------------------------


crypto.createVerify('RSA-SHA256')     184.84 µs/iter       5,410.1    (177.7 µs … 2.36 ms) 185.34 µs 196.02 µs  204.7 µs
crypto.verify('RSA-SHA256')           180.87 µs/iter       5,528.7    (174.94 µs … 1.5 ms) 179.82 µs  198.8 µs  243.3 µs

summary
  crypto.verify('RSA-SHA256')
   1.02x faster than crypto.createVerify('RSA-SHA256')
----------------------------------------------------------------------------
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.37.1 (x86_64-unknown-linux-gnu)

file:///home/h4ad/Projects/opensource/benchmarks-comparisons/benchs/crypto-verify/deno.mjs
benchmark                              time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------------------------- -----------------------------


crypto.createVerify('RSA-SHA256')     184.18 µs/iter       5,429.5   (177.16 µs … 2.38 ms) 184.13 µs 198.69 µs 229.16 µs
crypto.verify('RSA-SHA256')           191.41 µs/iter       5,224.4    (169.5 µs … 1.77 ms) 186.89 µs 359.83 µs 421.69 µs

summary
  crypto.createVerify('RSA-SHA256')
   1.04x faster than crypto.verify('RSA-SHA256')
----------------------------------------------------------------------------
```

## isitfast.js.log

```txt
crypto.verify:

crypto.createVerify('RSA-SHA256')crypto.createVerify('RSA-SHA256') 8,510.421 op/s (117,503 ns) ±1% x2,500
                                  656 kB ±0.8% x25

crypto.verify('RSA-SHA256')crypto.verify('RSA-SHA256')       8,938.787 op/s (111,872 ns) ±1% x2,500
                                  208 kB ±2% x25

=> Slowest is crypto.createVerify('RSA-SHA256')
=> Fastest is crypto.verify('RSA-SHA256')

----------------------------------------------------------------------------
crypto.verify:

crypto.createVerify('RSA-SHA256')crypto.createVerify('RSA-SHA256') 8,958.005 op/s (111,632 ns) ±1% x2,500
                                  656 kB ±0.8% x25

crypto.verify('RSA-SHA256')crypto.verify('RSA-SHA256')       8,910.829 op/s (112,223 ns) ±1% x2,500
                                  208 kB ±2% x25

=> Slowest is crypto.verify('RSA-SHA256')
=> Fastest is crypto.createVerify('RSA-SHA256')

----------------------------------------------------------------------------
crypto.verify:

crypto.createVerify('RSA-SHA256')crypto.createVerify('RSA-SHA256') 8,784.567 op/s (113,836 ns) ±1% x2,500
                                  656 kB ±0.8% x25

crypto.verify('RSA-SHA256')crypto.verify('RSA-SHA256')       9,188.896 op/s (108,827 ns) ±1% x2,500
                                  224 kB ±2% x25

=> Slowest is crypto.createVerify('RSA-SHA256')
=> Fastest is crypto.verify('RSA-SHA256')

----------------------------------------------------------------------------
```

## mitata.mjs.log

```txt
[Function (anonymous)]
  cpu: AMD Ryzen 9 5950X 16-Core Processor
  runtime: node v21.1.0 (x64-linux)
  
  benchmark      time (avg)             (min … max)
  -------------------------------------------------
----------------------------------------------------------------------------
[Function (anonymous)]
  cpu: AMD Ryzen 9 5950X 16-Core Processor
  runtime: node v21.1.0 (x64-linux)
  
  benchmark      time (avg)             (min … max)
  -------------------------------------------------
----------------------------------------------------------------------------
[Function (anonymous)]
  cpu: AMD Ryzen 9 5950X 16-Core Processor
  runtime: node v21.1.0 (x64-linux)
  
  benchmark      time (avg)             (min … max)
  -------------------------------------------------
----------------------------------------------------------------------------
```

## node.managed.mjs.log

```txt
crypto.createVerify('RSA-SHA256') x 9,435 ops/sec +/- 0.02% (11 runs sampled)	min..max=(102.04us ... 111.26us) p75=107.96us p99=111.26us
crypto.verify('RSA-SHA256') x 9,562 ops/sec +/- 0.01% (10 runs sampled)	min..max=(102.98us ... 106.49us) p75=105.68us p99=106.49us
----------------------------------------------------------------------------
crypto.createVerify('RSA-SHA256') x 9,261 ops/sec +/- 0.03% (10 runs sampled)	min..max=(102.10us ... 110.82us) p75=109.49us p99=110.82us
crypto.verify('RSA-SHA256') x 9,571 ops/sec +/- 0.02% (10 runs sampled)	min..max=(102.25us ... 109.39us) p75=106.07us p99=109.39us
----------------------------------------------------------------------------
crypto.createVerify('RSA-SHA256') x 9,417 ops/sec +/- 0.03% (11 runs sampled)	min..max=(101.43us ... 110.38us) p75=108.15us p99=110.38us
crypto.verify('RSA-SHA256') x 9,665 ops/sec +/- 0.01% (10 runs sampled)	min..max=(102.06us ... 105.61us) p75=104.64us p99=105.61us
----------------------------------------------------------------------------
```

## node.mjs.log

```txt
UNrDtit7FpZy6eOHb+PklG6Ww8a7ARqMuQGZ+lkTOJPASjkbBoT3RqIExbE9TfXcveD5yCDj/+G+hNKmMh/HavY0/FYRIhmmcrN+Wg88EZ/CXLqLxj7uHMp/vrmKoZmLx7fXabkLBUNf91TZW+AHHapUaF2B++TcYml90r3qDi8XsLwv5w2B9g76Yq+rCIcCd4mE6ovj5mHCwn1YYvCQF6pYAPC4jiubmHdvaiOzRxY+o069PgXTwOhzcckuDr/Ir1oSC0W+pFdurPpbj/6VQTrMXeHMVVMKVAO5Me+MfGSw4yxVKl7nqEW9ASSfNO0VIAB+92rd3OngCwfKuinyuA==
crypto.createVerify('RSA-SHA256') x 9,425 ops/sec +/- 0.04% (11 runs sampled)	min..max=(99.34us ... 111.65us) p75=110.46us p99=111.65us
crypto.verify('RSA-SHA256') x 9,718 ops/sec +/- 0.02% (12 runs sampled)	min..max=(100.40us ... 105.50us) p75=104.08us p99=105.50us
----------------------------------------------------------------------------
UNrDtit7FpZy6eOHb+PklG6Ww8a7ARqMuQGZ+lkTOJPASjkbBoT3RqIExbE9TfXcveD5yCDj/+G+hNKmMh/HavY0/FYRIhmmcrN+Wg88EZ/CXLqLxj7uHMp/vrmKoZmLx7fXabkLBUNf91TZW+AHHapUaF2B++TcYml90r3qDi8XsLwv5w2B9g76Yq+rCIcCd4mE6ovj5mHCwn1YYvCQF6pYAPC4jiubmHdvaiOzRxY+o069PgXTwOhzcckuDr/Ir1oSC0W+pFdurPpbj/6VQTrMXeHMVVMKVAO5Me+MfGSw4yxVKl7nqEW9ASSfNO0VIAB+92rd3OngCwfKuinyuA==
crypto.createVerify('RSA-SHA256') x 9,445 ops/sec +/- 0.03% (11 runs sampled)	min..max=(100.57us ... 110.01us) p75=108.79us p99=110.01us
crypto.verify('RSA-SHA256') x 9,551 ops/sec +/- 0.02% (11 runs sampled)	min..max=(102.40us ... 108.19us) p75=105.10us p99=108.19us
----------------------------------------------------------------------------
UNrDtit7FpZy6eOHb+PklG6Ww8a7ARqMuQGZ+lkTOJPASjkbBoT3RqIExbE9TfXcveD5yCDj/+G+hNKmMh/HavY0/FYRIhmmcrN+Wg88EZ/CXLqLxj7uHMp/vrmKoZmLx7fXabkLBUNf91TZW+AHHapUaF2B++TcYml90r3qDi8XsLwv5w2B9g76Yq+rCIcCd4mE6ovj5mHCwn1YYvCQF6pYAPC4jiubmHdvaiOzRxY+o069PgXTwOhzcckuDr/Ir1oSC0W+pFdurPpbj/6VQTrMXeHMVVMKVAO5Me+MfGSw4yxVKl7nqEW9ASSfNO0VIAB+92rd3OngCwfKuinyuA==
crypto.createVerify('RSA-SHA256') x 8,742 ops/sec +/- 0.06% (13 runs sampled)	min..max=(102.42us ... 123.71us) p75=116.01us p99=123.71us
crypto.verify('RSA-SHA256') x 9,403 ops/sec +/- 0.03% (11 runs sampled)	min..max=(102.36us ... 110.08us) p75=108.99us p99=110.08us
----------------------------------------------------------------------------
```

## tinybench.mjs.log

```txt
┌─────────┬─────────────────────────────────────┬─────────┬────────────────────┬──────────┬─────────┐
│ (index) │              Task Name              │ ops/sec │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼─────────────────────────────────────┼─────────┼────────────────────┼──────────┼─────────┤
│    0    │ "crypto.createVerify('RSA-SHA256')" │ '8,188' │ 122126.44563476136 │ '±1.64%' │   819   │
│    1    │    "crypto.verify('RSA-SHA256')"    │ '8,508' │ 117532.01175953857 │ '±0.94%' │   851   │
└─────────┴─────────────────────────────────────┴─────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬─────────────────────────────────────┬─────────┬────────────────────┬──────────┬─────────┐
│ (index) │              Task Name              │ ops/sec │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼─────────────────────────────────────┼─────────┼────────────────────┼──────────┼─────────┤
│    0    │ "crypto.createVerify('RSA-SHA256')" │ '8,557' │ 116853.62615444149 │ '±1.72%' │   856   │
│    1    │    "crypto.verify('RSA-SHA256')"    │ '8,844' │ 113065.13896538208 │ '±0.56%' │   885   │
└─────────┴─────────────────────────────────────┴─────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
┌─────────┬─────────────────────────────────────┬─────────┬────────────────────┬──────────┬─────────┐
│ (index) │              Task Name              │ ops/sec │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼─────────────────────────────────────┼─────────┼────────────────────┼──────────┼─────────┤
│    0    │ "crypto.createVerify('RSA-SHA256')" │ '8,281' │ 120747.97831147692 │ '±1.52%' │   829   │
│    1    │    "crypto.verify('RSA-SHA256')"    │ '8,638' │ 115762.23148343463 │ '±0.58%' │   864   │
└─────────┴─────────────────────────────────────┴─────────┴────────────────────┴──────────┴─────────┘
----------------------------------------------------------------------------
```