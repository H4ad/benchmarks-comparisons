const text = 'text/html,application/xhtml+xml,application/xml;application/json;q=0.9,image/avif,image/webp,*/*;q=0.8'
const regex = /application\/json/

Deno.bench('Using includes', function () {
  const r = text.includes('application/json')
});

Deno.bench('Using indexof', function () {
  const r = text.indexOf('application/json') !== -1
});

Deno.bench('Using cached RegExp.test', function () {
  const r = regex.test(text)
});
