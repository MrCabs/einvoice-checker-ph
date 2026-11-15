(function () {
  var D = window.CHECKER_DATA, C = window.Checker;
  var lang = 'en', answers = {}, last = null;
  try { if (localStorage.getItem('lang') === 'tl') lang = 'tl'; } catch (e) {}
  var $ = function (id) { return document.getElementById(id); };
  function T() { return D.text[lang]; }

  function el(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs || {}) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  function daysLeft() {
    var end = new Date(D.deadline + 'T23:59:59+08:00');
    var n = Math.ceil((end - new Date()) / 86400000);
    return n > 0 ? T().daysLeft.replace('{n}', n) : T().deadlinePassed;
  }

  function renderQuestions() {
    var box = $('questions'); box.textContent = '';
    Object.keys(C.CHOICES).forEach(function (q) {
      var t = T().q[q];
      var fs = el('fieldset', { 'class': 'q' });
      fs.appendChild(el('legend', null, t.label));
      if (t.hint) fs.appendChild(el('p', { 'class': 'hint' }, t.hint));
      C.CHOICES[q].forEach(function (o) {
        var lab = el('label', { 'class': 'opt' });
        var inp = el('input', { type: 'radio', name: q, value: o });
        if (answers[q] === o) inp.checked = true;
        inp.addEventListener('change', function () { answers[q] = o; $('error').hidden = true; });
        lab.appendChild(inp);
        lab.appendChild(el('span', null, t.options[o]));
        fs.appendChild(lab);
      });
      box.appendChild(fs);
    });
  }

  function renderResult() {
    if (!last) { $('result').hidden = true; return; }
    var t = T(), r = last;
    $('verdict').textContent = t.verdict[r.verdict];
    $('result').className = 'result ' + (r.verdict === 'covered' ? 'yes' : r.verdict === 'depends' || r.verdict === 'ask_rdo' ? 'maybe' : 'no');
    $('whyTitle').textContent = t.why;
    var keys = r.reasons.slice();
    if (r.verdict === 'depends') keys.unshift('depends');
    if (r.verdict === 'not_listed') keys = ['not_listed'];
    var ul = $('reasons'); ul.textContent = '';
    keys.forEach(function (k) {
      var li = el('li', null, t.reason[k]);
      li.appendChild(el('span', { 'class': 'section' }, t.section[k]));
      ul.appendChild(li);
    });
    $('todoTitle').textContent = t.todoTitle;
    var ol = $('todo'); ol.textContent = '';
    t.todo[r.verdict].forEach(function (s) { ol.appendChild(el('li', null, s)); });
    $('confirm').textContent = t.confirm;
    $('again').textContent = t.again;
    $('result').hidden = false;
  }

  function render() {
    var t = T();
    document.documentElement.lang = lang === 'tl' ? 'tl' : 'en';
    $('lang').textContent = t.lang;
    $('title').textContent = t.title;
    $('intro').textContent = t.intro;
    $('days').textContent = daysLeft();
    $('check').textContent = t.check;
    $('error').textContent = t.answerAll;
    $('sourcesTitle').textContent = t.sourcesTitle;
    var s = $('sources'); s.textContent = '';
    D.sources.forEach(function (x) {
      var li = el('li'); li.appendChild(el('a', { href: x.url, target: '_blank', rel: 'noopener' }, x.label)); s.appendChild(li);
    });
    $('disclaimer').textContent = t.disclaimer.replace('{date}', D.asOf);
    renderQuestions();
    renderResult();
  }

  $('lang').addEventListener('click', function () {
    lang = lang === 'en' ? 'tl' : 'en';
    try { localStorage.setItem('lang', lang); } catch (e) {}
    render();
  });
  $('form').addEventListener('submit', function (e) {
    e.preventDefault();
    try { last = C.decide(answers); } catch (err) { $('error').hidden = false; return; }
    $('form').hidden = true;
    renderResult();
    $('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  $('again').addEventListener('click', function () {
    answers = {}; last = null; $('form').hidden = false; render(); window.scrollTo(0, 0);
  });
  render();
})();
