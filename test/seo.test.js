const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const html = fs.readFileSync(__dirname + '/../index.html', 'utf8');
const URL = 'https://mrcabs.github.io/einvoice-checker-ph/';
const meta = (attr, name) => {
  const m = html.match(new RegExp(`<meta ${attr}="${name}" content="([^"]+)"`));
  return m && m[1];
};

test('title and description use the words people search', () => {
  const title = html.match(/<title>([^<]+)<\/title>/)[1];
  for (const w of ['BIR', 'E-Invoicing', 'RMC 98-2026']) assert.ok(title.includes(w), w);
  const d = meta('name', 'description');
  for (const w of ['e-invoicing', 'December 31, 2026', 'e-invoice']) assert.ok(d.includes(w), w);
  assert.ok(d.length <= 170, 'description length ' + d.length);
});

test('share card tags point at the live page and an existing image', () => {
  assert.equal(meta('property', 'og:url'), URL);
  assert.ok(meta('property', 'og:title') && meta('property', 'og:description'));
  const img = meta('property', 'og:image');
  assert.ok(img.startsWith(URL));
  assert.ok(fs.existsSync(__dirname + '/../' + img.slice(URL.length)));
  assert.equal(meta('name', 'twitter:card'), 'summary_large_image');
  assert.ok(html.includes(`<link rel="canonical" href="${URL}">`));
});

test('the start screen text is in the HTML before any script runs', () => {
  const app = html.split('<div id="app">')[1].split('<dialog')[0];
  for (const s of ['Do I need e-invoicing by December 31?', 'RMC 98-2026', 'How much are your gross sales in a year?',
    'Is your business under the BIR Large Taxpayers Service?']) assert.ok(app.includes(s), s);
});

test('sitemap lists the page', () => {
  const sm = fs.readFileSync(__dirname + '/../sitemap.xml', 'utf8');
  assert.ok(sm.includes(`<loc>${URL}</loc>`));
});

test('no em dashes in the page', () => assert.ok(!html.includes('—')));
