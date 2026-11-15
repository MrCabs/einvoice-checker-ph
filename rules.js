// Decision rules from BIR RMC No. 98-2026, sections III and IV.
(function (root) {
  var CHOICES = {
    size: ['micro', 'small', 'medium', 'large', 'unsure'],
    online: ['yes', 'no'],
    invoicing: ['paper', 'office', 'system', 'pos', 'none'],
    lts: ['yes', 'no', 'unsure']
  };

  function decide(a) {
    Object.keys(CHOICES).forEach(function (k) {
      if (CHOICES[k].indexOf(a[k]) < 0) throw new Error('missing or bad answer: ' + k);
    });
    if (a.size === 'micro') return { verdict: 'not_covered', reasons: ['micro'] };

    var reasons = [];
    if (a.online === 'yes') reasons.push('online');
    if (a.lts === 'yes') reasons.push('lts');
    if (a.size === 'large') reasons.push('large');
    if (a.invoicing === 'system') reasons.push('system');

    if (a.lts === 'yes') return { verdict: 'covered', reasons: reasons };
    if (reasons.length && a.size === 'unsure') return { verdict: 'depends', reasons: reasons };
    if (reasons.length) return { verdict: 'covered', reasons: reasons };
    if (a.invoicing === 'pos') return { verdict: 'ask_rdo', reasons: ['pos'] };
    return { verdict: 'not_listed', reasons: [] };
  }

  var api = { decide: decide, CHOICES: CHOICES };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Checker = api;
})(this);
