import cronometro from 'cronometro';

const text = 'text/html,application/xhtml+xml,application/xml;application/json;q=0.9,image/avif,image/webp,*/*;q=0.8'
const regex = /application\/json/

const results = cronometro({
  'Using includes': function () {
    const r = text.includes('application/json')
  },
  'Using indexof': function () {
    const r = text.indexOf('application/json') !== -1
  },
  'Using cached RegExp.test': function () {
    const r = regex.test(text)
  },
}, {
  print: { compare: true },
});