#!/bin/bash

# clean previous logs
rm -f ./benchs/**/*.log

for filename in benchs/**/*.*js; do
  if [[ $filename == *"deno"* ]]; then
    echo "[1] Running $filename"
    deno bench --allow-hrtime --allow-read "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >>"$filename.log"
    echo -e "----------------------------------------------------------------------------" >>"$filename.log"

    echo "[2] Running $filename"
    deno bench --allow-hrtime --allow-read "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >>"$filename.log"
    echo -e "----------------------------------------------------------------------------" >>"$filename.log"

    echo "[3] Running $filename"
    deno bench --allow-hrtime --allow-read "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >>"$filename.log"
    echo -e "----------------------------------------------------------------------------" >>"$filename.log"
  elif [[ $filename == *"node"* ]]; then
    echo "[1] Running $filename"
    $LOCAL_NODE "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >>"$filename.log"
    echo -e "----------------------------------------------------------------------------" >>"$filename.log"

    echo "[2] Running $filename"
    $LOCAL_NODE "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >>"$filename.log"
    echo -e "----------------------------------------------------------------------------" >>"$filename.log"

    echo "[3] Running $filename"
    $LOCAL_NODE "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >>"$filename.log"
    echo -e "----------------------------------------------------------------------------" >>"$filename.log"
  else
    echo "[1] Running $filename"
    node "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >>"$filename.log"
    echo -e "----------------------------------------------------------------------------" >>"$filename.log"

    echo "[2] Running $filename"
    node "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >>"$filename.log"
    echo -e "----------------------------------------------------------------------------" >>"$filename.log"

    echo "[3] Running $filename"
    node "./$filename" | sed "s,\x1B\[[0-9;]*m,,g" >>"$filename.log"
    echo -e "----------------------------------------------------------------------------" >>"$filename.log"
  fi
done
