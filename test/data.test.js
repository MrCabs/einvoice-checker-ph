const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const vm = require('node:vm');
const { CHOICES } = require('../rules.js');

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(__dirname + '/../data.js', 'utf8'), ctx);
const D = ctx.window.CHECKER_DATA;
const VERDICTS = ['covered', 'not_covered', 'depends', 'ask_rdo', 'not_listed'];
const REASONS = ['micro', 'online', 'lts', 'large', 'system', 'pos', 'not_listed'];
const SCALARS = ['brand', 'lang', 'daysLeft', 'deadlinePassed', 'title', 'intro', 'startBtn', 'startNote', 'fourQuestions',
  'qOf', 'back', 'startOver', 'todoTitle', 'answerAgain', 'dependsRule'];
const COFFEE = ['line', 'button', 'title', 'intro', 'gcash', 'scan', 'save', 'how', 'cardTitle', 'cardNote', 'kofi',
  'optional', 'close'];

for (const lang of ['en', 'tl']) {
  const T = D.text[lang];
  test(`${lang}: every screen text exists`, () => {
    for (const k of SCALARS) assert.ok(T[k], k);
    for (const k of COFFEE) assert.ok(T.coffee[k], 'coffee.' + k);
    for (const k of ['confirm', 'sizeNote', 'disclaimer', 'readCircular']) assert.ok(T.footer[k], 'footer.' + k);
    assert.equal(T.bulletsPhone.length, 3);
    assert.equal(T.bulletsDesk.length, 3);
    assert.equal(T.stepNames.length, 4);
  });
  test(`${lang}: every question and option has a label`, () => {
    for (const [q, opts] of Object.entries(CHOICES)) {
      assert.ok(T.q[q].label, q);
      for (const o of opts) assert.ok(T.q[q].options[o], `${q}.${o}`);
    }
  });
  test(`${lang}: every verdict has chip, headline, to-do list`, () => {
    for (const v of VERDICTS) {
      assert.ok(T.chip[v] && T.headline[v], v);
      assert.ok(T.todo[v].length, v);
    }
  });
  test(`${lang}: every reason has text and section; depends has short reasons`, () => {
    for (const r of REASONS) assert.ok(T.reason[r] && T.section[r], r);
    for (const r of ['online', 'lts', 'large', 'system']) assert.ok(T.reasonShort[r], r);
  });
  test(`${lang}: no em dashes`, () => {
    assert.ok(!JSON.stringify(T).includes('—'));
  });
}

test('both languages have the same number of to-do lines', () => {
  for (const v of VERDICTS) assert.equal(D.text.en.todo[v].length, D.text.tl.todo[v].length, v);
});

test('every verdict says which footer lines it shows', () => {
  for (const v of VERDICTS) assert.ok(Array.isArray(D.footerParts[v]) && D.footerParts[v].includes('disclaimer'), v);
});

test('support settings: GCash QR file exists, Ko-fi optional', () => {
  assert.ok(fs.existsSync(__dirname + '/../' + D.support.gcashQr));
  assert.ok(D.support.gcashName);
  assert.equal(typeof D.support.kofiUrl, 'string');
});
