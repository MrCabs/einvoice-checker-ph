const test = require('node:test');
const assert = require('node:assert');
const { decide } = require('../rules.js');
const base = { size: 'small', online: 'no', invoicing: 'paper', lts: 'no' };
const d = (o) => decide({ ...base, ...o });

test('micro is not covered even if selling online with software', () => {
  const r = d({ size: 'micro', online: 'yes', invoicing: 'system', lts: 'yes' });
  assert.equal(r.verdict, 'not_covered');
  assert.deepEqual(r.reasons, ['micro']);
});

test('small online seller is covered', () => {
  const r = d({ online: 'yes' });
  assert.equal(r.verdict, 'covered');
  assert.ok(r.reasons.includes('online'));
});

test('medium using invoicing software is covered', () => {
  const r = d({ size: 'medium', invoicing: 'system' });
  assert.equal(r.verdict, 'covered');
  assert.deepEqual(r.reasons, ['system']);
});

test('large is covered on size alone', () => {
  assert.deepEqual(d({ size: 'large' }).reasons, ['large']);
});

test('LTS is covered', () => {
  assert.deepEqual(d({ lts: 'yes' }).reasons, ['lts']);
});

test('several reasons are all listed', () => {
  assert.deepEqual(d({ size: 'large', online: 'yes', invoicing: 'system', lts: 'yes' }).reasons,
    ['online', 'lts', 'large', 'system']);
});

test('small offline paper seller is not in this round', () => {
  const r = d({});
  assert.equal(r.verdict, 'not_listed');
});

test('Word or Excel invoices do not count as a system', () => {
  assert.equal(d({ invoicing: 'office' }).verdict, 'not_listed');
});

test('POS only user is told to ask the RDO', () => {
  assert.equal(d({ invoicing: 'pos' }).verdict, 'ask_rdo');
});

test('POS user who also sells online is covered', () => {
  assert.equal(d({ invoicing: 'pos', online: 'yes' }).verdict, 'covered');
});

test('unknown size with a covered activity depends on size', () => {
  const r = d({ size: 'unsure', online: 'yes' });
  assert.equal(r.verdict, 'depends');
  assert.deepEqual(r.reasons, ['online']);
});

test('unknown size with nothing covered is not in this round', () => {
  assert.equal(d({ size: 'unsure' }).verdict, 'not_listed');
});

test('unknown size but under LTS is covered (LTS taxpayers are not micro)', () => {
  assert.equal(d({ size: 'unsure', lts: 'yes' }).verdict, 'covered');
});

test('missing answer throws', () => {
  assert.throws(() => decide({ size: 'small' }));
});
