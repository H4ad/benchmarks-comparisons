const pattern = /[123]/g
const replacements = { 1: 'a', 2: 'b', 3: 'c' }

const subject = '123123123123123123123123123123123123123123123123'

Deno.bench('single with matcher', { group: 'replace' }, function () {
  const r = subject.replace(pattern, m => replacements[m])
})
Deno.bench('multiple replaces', { group: 'replace' }, function () {
  const r = subject.replace(/1/g, 'a').replace(/2/g, 'b').replace(/3/g, 'c')
})
