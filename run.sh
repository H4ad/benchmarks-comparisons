#!/bin/bash

# $suites = [
#   './benchs/deleting-benchmarks',
#   './benchs/fs-read-sync',
#   './benchs/string-replace',
#   './benchs/string-searching',
# ]

# $benchmarks = [
#   'benchmark.mjs',
#   'cronometro.mjs',
#   'deno.mjs',
#   'isitfast.js',
#   'mitata.mjs',
#   'tinybench.mjs'
# ]

# clean previous logs
rm -f ./benchs/**/*.log

for filename in benchs/**/*.*js
do
  if [[ $filename == *"deno"* ]]; then
    echo "[1] Running $filename"
    deno bench --allow-hrtime --allow-read "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >> "$filename.log"
    echo "[2] Running $filename"
    deno bench --allow-hrtime --allow-read "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >> "$filename.log"
    echo "[3] Running $filename"
    deno bench --allow-hrtime --allow-read "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >> "$filename.log"
  else
    echo "[1] Running $filename"
    node "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >> "$filename.log"
    echo "[2] Running $filename"
    node "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >> "$filename.log"
    echo "[3] Running $filename"
    node "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >> "$filename.log"
  fi
done

# for suite in $suites; do
  # for bench in $benchmarks; do
    # node $suite/$bench >> $bench.log
  # done
# done