const NullObject = function NullObject () { }
NullObject.prototype = Object.create(null)

Deno.bench('Using delete property', { group: 'delete' }, function () {
    const data = { x: 1, y: 2, z: 3 }
    delete data.y

    data.x
    data.y
    data.z
  });

Deno.bench('Using delete property (proto: null)', { group: 'delete' }, function () {
    const data = { __proto__: null, x: 1, y: 2, z: 3 }
    delete data.y

    data.x
    data.y
    data.z
  });

Deno.bench('Using delete property (cached proto: null)', { group: 'delete' }, function () {
    const data = new NullObject()

    data.x = 1
    data.y = 2
    data.z = 3

    delete data.y

    data.x
    data.y
    data.z
  });

Deno.bench('Using undefined assignment', { group: 'delete' }, function () {
    const data = { x: 1, y: 2, z: 3 }
    data.y = undefined

    data.x
    data.y
    data.z
  });

Deno.bench('Using undefined assignment (proto: null)', { group: 'delete' }, function () {
    const data = { __proto__: null, x: 1, y: 2, z: 3 }
    data.y = undefined

    data.x
    data.y
    data.z
  });

Deno.bench('Using undefined property (cached proto: null)', { group: 'delete' }, function () {
    const data = new NullObject()

    data.x = 1
    data.y = 2
    data.z = 3

    data.y = undefined

    data.x
    data.y
    data.z
  });