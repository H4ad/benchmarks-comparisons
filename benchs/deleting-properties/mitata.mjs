import { bench, group, run } from 'mitata';

const NullObject = function NullObject() { }
NullObject.prototype = Object.create(null)

group(() => {
  bench('Using delete property', function () {
    const data = { x: 1, y: 2, z: 3 }
    delete data.y

    data.x
    data.y
    data.z
  });

  bench('Using delete property (proto: null)', function () {
    const data = { __proto__: null, x: 1, y: 2, z: 3 }
    delete data.y

    data.x
    data.y
    data.z
  });

  bench('Using delete property (cached proto: null)', function () {
    const data = new NullObject()

    data.x = 1
    data.y = 2
    data.z = 3

    delete data.y

    data.x
    data.y
    data.z
  });

  bench('Using undefined assignment', function () {
    const data = { x: 1, y: 2, z: 3 }
    data.y = undefined

    data.x
    data.y
    data.z
  });

  bench('Using undefined assignment (proto: null)', function () {
    const data = { __proto__: null, x: 1, y: 2, z: 3 }
    data.y = undefined

    data.x
    data.y
    data.z
  });

  bench('Using undefined property (cached proto: null)', function () {
    const data = new NullObject()

    data.x = 1
    data.y = 2
    data.z = 3

    data.y = undefined

    data.x
    data.y
    data.z
  });
});

await run({
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: false, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  collect: false, // enable/disable collecting returned values into an array during the benchmark (default: false)
  percentiles: false, // enable/disable percentiles column (default: true)
});
