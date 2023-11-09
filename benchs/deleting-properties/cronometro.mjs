import cronometro from 'cronometro';

const NullObject = function NullObject() { }
NullObject.prototype = Object.create(null)

const results = cronometro({
  'Using delete property': function () {
    const data = { x: 1, y: 2, z: 3 }
    delete data.y

    data.x
    data.y
    data.z
  },
  'Using delete property (proto: null)': function () {
    const data = { __proto__: null, x: 1, y: 2, z: 3 }
    delete data.y

    data.x
    data.y
    data.z
  },
  'Using delete property (cached proto: null)': function () {
    const data = new NullObject()

    data.x = 1
    data.y = 2
    data.z = 3

    delete data.y

    data.x
    data.y
    data.z
  },
  'Using undefined assignment': function () {
    const data = { x: 1, y: 2, z: 3 }
    data.y = undefined

    data.x
    data.y
    data.z
  },
  'Using undefined assignment (proto: null)': function () {
    const data = { __proto__: null, x: 1, y: 2, z: 3 }
    data.y = undefined

    data.x
    data.y
    data.z
  },
  'Using undefined property (cached proto: null)': function () {
    const data = new NullObject()

    data.x = 1
    data.y = 2
    data.z = 3

    data.y = undefined

    data.x
    data.y
    data.z
  },
}, {
  print: { compare: true },
});
