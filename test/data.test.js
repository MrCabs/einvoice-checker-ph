const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const vm = require('node:vm');
const { CHOICES } = require('../rules.js');

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(__dirname + '/../data.js', 'utf8'), ctx);
const D = ctx.window.CHECKER_DATA;
const VERDICTS = ['covered', 'not_covered', 'depends', 'ask_rdo', 'not_listed'];
const REASONS = ['micro', 'online', 'lts', 'large', 'system', 'pos', 'not_listed', 'depends'];

for (const lang of ['en', 'tl']) {
  test(`${lang}: every question option has a label`, () => {
    for (const [q, opts] of Object.entries(CHOICES))
      for (const o of opts) assert.ok(D.text[lang].q[q].options[o], `${lang} ${q}.${o}`);
  });
  test(`${lang}: every verdict has a heading and a to-do list`, () => {
    for (const v of VERDICTS) {
      assert.ok(D.text[lang].verdict[v], v);
      const todo = v === 'not_covered' ? 'not_covered' : v;
      assert.ok(D.text[lang].todo[todo].length, v);
    }
  });
  test(`${lang}: every reason has text and a section`, () => {
    for (const r of REASONS) assert.ok(D.text[lang].reason[r] && D.text[lang].section[r], r);
  });
  test(`${lang}: no em dashes`, () => {
    assert.ok(!JSON.stringify(D.text[lang]).includes('—'));
  });
}
test('both languages have the same number of to-do lines', () => {
  for (const v of VERDICTS) assert.equal(D.text.en.todo[v].length, D.text.tl.todo[v].length, v);
});
