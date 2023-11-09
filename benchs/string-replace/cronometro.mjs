import cronometro from 'cronometro';

const pattern = /[123]/g
const replacements = { 1: 'a', 2: 'b', 3: 'c' }

const subject = '123123123123123123123123123123123123123123123123'

const results = cronometro({
  'single with matcher': function () {
    subject.replace(pattern, m => replacements[m])
  },
  'multiple replaces': function () {
    const r = subject.replace(/1/g, 'a').replace(/2/g, 'b').replace(/3/g, 'c')
  },
}, {
  print: { compare: true },
});