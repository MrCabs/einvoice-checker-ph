// Browser check of the built page against the approved canvas.
// Usage: node test/e2e.js <base-url> <path-to-playwright-core>
const assert = require('node:assert');
const base = process.argv[2] || 'http://127.0.0.1:8090/';
const { chromium } = require(process.argv[3]);

const PATHS = {
  covered: { size: '₱3 million to under ₱20 million', online: 'Yes', invoicing: 'BIR-registered booklet or loose-leaf', lts: 'No' },
  not_covered: { size: 'Under ₱3 million', online: 'Yes', invoicing: 'BIR-registered booklet or loose-leaf', lts: 'No' },
  depends: { size: 'Not sure', online: 'Yes', invoicing: 'BIR-registered booklet or loose-leaf', lts: 'No' },
  ask_rdo: { size: '₱3 million to under ₱20 million', online: 'No', invoicing: 'POS or cash register only', lts: 'No' },
  not_listed: { size: '₱3 million to under ₱20 million', online: 'No', invoicing: 'BIR-registered booklet or loose-leaf', lts: 'No' }
};
const HEAD = {
  covered: 'You must issue e-invoices by December 31, 2026',
  not_covered: 'Most likely you do not need e-invoicing yet',
  depends: 'It depends on your yearly sales',
  ask_rdo: 'The rule does not say if your POS counts',
  not_listed: 'Most likely you do not need e-invoicing yet'
};

async function noScroll(p, where) {
  const [h, vh] = await p.evaluate(() => [document.documentElement.scrollHeight, window.innerHeight]);
  assert.ok(h <= vh + 1, `${where}: page scrolls (${h} > ${vh})`);
  const w = await p.evaluate(() => document.documentElement.scrollWidth);
  assert.ok(w <= (await p.evaluate(() => window.innerWidth)), `${where}: sideways scroll`);
}
const opt = (p, text) => p.getByRole('button', { name: text, exact: true }).click();

(async () => {
  const b = await chromium.launch();
  let checks = 0;
  for (const [vw, vh, label] of [[390, 844, 'phone'], [1280, 800, 'computer']]) {
    const p = await b.newPage({ viewport: { width: vw, height: vh } });
    const errs = [], outside = [];
    p.on('pageerror', e => errs.push(e.message));
    p.on('console', m => m.type() === 'error' && errs.push(m.text()));
    p.on('request', r => { if (!r.url().startsWith(base)) outside.push(r.url()); });
    await p.goto(base);
    await p.evaluate(() => { try { localStorage.clear(); } catch (e) {} });
    await p.reload();

    for (const [verdict, a] of Object.entries(PATHS)) {
      await noScroll(p, `${label} start`);
      await p.getByRole('link', { name: 'Start' }).or(p.getByRole('button', { name: 'Start', exact: true })).first().click();
      let n = 1;
      for (const q of ['size', 'online', 'invoicing', 'lts']) {
        await p.getByText(`Question ${n} of 4`).locator('visible=true').waitFor();
        await noScroll(p, `${label} question ${n}`);
        await opt(p, a[q]);
        n++;
      }
      const h = await p.locator('#app h1').innerText();
      assert.equal(h, HEAD[verdict], `${label} ${verdict} headline`);
      await noScroll(p, `${label} result ${verdict}`);
      checks++;
      await p.getByRole('button', { name: 'Start over' }).click();
    }

    // Back button returns to the previous question and keeps going
    await p.getByRole('button', { name: 'Start', exact: true }).click();
    await opt(p, 'Under ₱3 million');
    await p.getByText('Question 2 of 4').locator('visible=true').waitFor();
    await p.getByRole('button', { name: 'Back' }).click();
    await p.getByText('Question 1 of 4').locator('visible=true').waitFor();
    await opt(p, 'Not sure'); await opt(p, 'Yes'); await opt(p, 'BIR-registered booklet or loose-leaf'); await opt(p, 'No');
    assert.equal(await p.locator('#app h1').innerText(), HEAD.depends);

    // Answer again with my sales -> question 1, then a size gives a final answer
    await p.getByRole('button', { name: 'Answer again with my sales' }).click();
    await p.getByText('Question 1 of 4').locator('visible=true').waitFor();
    await opt(p, 'Under ₱3 million');
    assert.equal(await p.locator('#app h1').innerText(), HEAD.not_covered, `${label} answer again`);

    // Coffee dialog
    await p.getByRole('button', { name: 'Buy me a coffee' }).click();
    const dlg = p.getByRole('dialog');
    await dlg.waitFor();
    assert.ok(await dlg.locator('img').evaluate(i => (i.complete && i.naturalWidth > 0) || new Promise(r => { i.onload = () => r(i.naturalWidth > 0); i.onerror = () => r(false); })), 'QR image loads');
    assert.equal(await dlg.getByText('Card or PayPal').count(), 0, 'Ko-fi hidden while no link');
    assert.ok(await dlg.getByText('KE****H PA*L C.').isVisible());
    await noScroll(p, `${label} coffee`);
    await dlg.getByRole('button', { name: 'Close' }).click();
    await dlg.waitFor({ state: 'hidden' });

    // Tagalog keeps the result
    await p.getByRole('button', { name: 'Tagalog' }).click();
    assert.equal(await p.locator('#app h1').innerText(), 'Malamang hindi mo pa kailangan ng e-invoice');
    await noScroll(p, `${label} tagalog result`);
    await p.getByRole('button', { name: 'English' }).click();

    assert.deepEqual(errs, [], `${label} errors`);
    assert.deepEqual(outside, [], `${label} outside requests`);
    await p.close();
  }
  await b.close();
  console.log(`e2e ok: ${checks} result paths, phone and computer`);
})().catch(e => { console.error('E2E FAIL:', e.message); process.exit(1); });
