(function () {
  var D = window.CHECKER_DATA, C = window.Checker, ORDER = Object.keys(C.CHOICES);
  var S = { screen: 'start', step: 0, answers: {}, result: null, lang: 'en' };
  try { if (localStorage.getItem('lang') === 'tl') S.lang = 'tl'; } catch (e) {}
  var app = document.getElementById('app'), dlg = document.getElementById('coffee');
  function T() { return D.text[S.lang]; }

  // Small DOM helper: h('div.cls', {attr}, child, child...)
  function h(tag, attrs) {
    var p = tag.split('.'), e = document.createElement(p[0]);
    if (p.length > 1) e.className = p.slice(1).join(' ');
    for (var k in attrs || {}) {
      if (k === 'on') e.addEventListener('click', attrs.on);
      else if (attrs[k] != null) e.setAttribute(k, attrs[k]);
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null || c === false) continue;
      if (Array.isArray(c)) c.forEach(function (x) { if (x) e.appendChild(typeof x === 'string' ? document.createTextNode(x) : x); });
      else e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    }
    return e;
  }
  var NS = 'http://www.w3.org/2000/svg';
  function icon(paths, size, color) {
    var s = document.createElementNS(NS, 'svg');
    [['width', size || 20], ['height', size || 20], ['viewBox', '0 0 24 24'], ['fill', 'none'], ['stroke', color || 'currentColor'],
     ['stroke-width', 2], ['stroke-linecap', 'round'], ['stroke-linejoin', 'round'], ['aria-hidden', 'true']]
      .forEach(function (a) { s.setAttribute(a[0], a[1]); });
    paths.forEach(function (d) {
      var el;
      if (d[0] === 'rect') { el = document.createElementNS(NS, 'rect'); [['x', d[1]], ['y', d[2]], ['width', d[3]], ['height', d[4]], ['rx', d[5]]].forEach(function (a) { el.setAttribute(a[0], a[1]); }); }
      else if (d[0] === 'circle') { el = document.createElementNS(NS, 'circle'); el.setAttribute('cx', d[1]); el.setAttribute('cy', d[2]); el.setAttribute('r', d[3]); }
      else { el = document.createElementNS(NS, 'path'); el.setAttribute('d', d); }
      s.appendChild(el);
    });
    return s;
  }
  var I = {
    cal: [['rect', 3, 4, 18, 18, 2], 'M16 2v4M8 2v4M3 10h18'],
    clock: [['circle', 12, 12, 9], 'M12 7v5l3 2'],
    lock: [['rect', 5, 11, 14, 10, 2], 'M8 11V7a4 4 0 0 1 8 0v4'],
    doc: ['M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z', 'M14 3v6h6M8 13h8M8 17h5'],
    back: ['M15 18l-6-6 6-6'],
    redo: ['M3 12a9 9 0 1 0 3-6.7L3 8', 'M3 3v5h5'],
    cup: ['M17 8h1a3 3 0 0 1 0 6h-1', 'M3 8h14v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z', 'M7 2v3M11 2v3'],
    close: ['M6 6l12 12M18 6L6 18'],
    down: ['M12 3v12M7 10l5 5 5-5M5 21h14'],
    ext: ['M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5']
  };

  function daysText() {
    var end = new Date(D.deadline + 'T23:59:59+08:00');
    var n = Math.ceil((end - new Date()) / 86400000);
    return n > 0 ? T().daysLeft.replace('{n}', n) : T().deadlinePassed;
  }
  function langBtn() {
    return h('button.tbtn', { type: 'button', lang: S.lang === 'en' ? 'tl' : 'en', on: function () {
      S.lang = S.lang === 'en' ? 'tl' : 'en';
      try { localStorage.setItem('lang', S.lang); } catch (e) {}
      render();
    } }, T().lang);
  }
  function go(screen, step) { S.screen = screen; if (step != null) S.step = step; render(); window.scrollTo(0, 0); }
  function start() { S.answers = {}; S.result = null; go('q', 0); }

  function startScreen() {
    var t = T(), ic = [I.clock, I.lock, I.doc];
    return h('div.screen.start', null,
      h('header.bar.wrap', null, h('span.brand', null, t.brand), langBtn()),
      h('main.start-body.wrap', null,
        h('div.start-main', null,
          h('span.days', null, icon(I.cal, 16), daysText()),
          h('h1', null, t.title),
          h('p.intro', null, t.intro),
          h('ul.bullets', null, t.bulletsPhone.map(function (b, i) {
            return h('li', null, icon(ic[i], 22, '#0F6E5C'), h('span.m-only', null, b), h('span.d-only', null, t.bulletsDesk[i]));
          })),
          h('div.start-actions', null,
            h('button.primary', { type: 'button', on: start }, t.startBtn),
            h('span.note', null, t.startNote))),
        h('aside.qlist.d-only', null, h('h2', null, t.fourQuestions), ORDER.map(function (q, i) {
          return h('div.qrow', null, h('span.qnum', null, String(i + 1)), T().q[q].label);
        }))));
  }

  function back() { if (S.step === 0) go('start'); else go('q', S.step - 1); }
  function answer(q, o) {
    S.answers[q] = o;
    for (var i = 0; i < ORDER.length; i++) if (!S.answers[ORDER[i]]) return go('q', i);
    S.result = C.decide(S.answers);
    go('result');
  }
  function questionScreen() {
    var t = T(), q = ORDER[S.step], Q = t.q[q], qof = t.qOf.replace('{n}', S.step + 1);
    return h('div.screen.question', null,
      h('header.bar.wrap', null,
        h('button.tbtn.iconbtn.m-only', { type: 'button', 'aria-label': t.back, title: t.back, on: back }, icon(I.back)),
        h('span.qof.m-only', null, qof),
        h('span.brand.d-only', null, t.brand),
        langBtn()),
      h('main.q-body.wrap', null,
        h('aside.steplist.d-only', null,
          h('button.tbtn', { type: 'button', style: 'align-self:flex-start', on: back }, icon(I.back, 18), t.back),
          t.stepNames.map(function (n, i) {
            return h(i === S.step ? 'div.step.now' : 'div.step', null, h('span.num', null, String(i + 1)), n);
          })),
        h('section.q-main', null,
          h('span.qof.d-only', null, qof),
          h('h1', null, Q.label),
          Q.hint ? h('p.hint', null, Q.hint) : null,
          h('div.opts', null, C.CHOICES[q].map(function (o) {
            return h(S.answers[q] === o ? 'button.opt.on' : 'button.opt', { type: 'button', on: function () { answer(q, o); } },
              h('span.dot', { 'aria-hidden': 'true' }), Q.options[o]);
          })))));
  }

  function verdictBox() {
    var t = T(), r = S.result, v = r.verdict;
    var tone = v === 'covered' ? 'v-yes' : (v === 'not_covered' || v === 'not_listed') ? 'v-no' : 'v-mid';
    var body = [];
    if (v === 'depends') {
      body.push(h('p', null, r.reasons.map(function (k) { return t.reasonShort[k]; }).join(' ') + ' ' + t.dependsRule));
      body.push(h('span.sec', null, t.section.depends));
    } else {
      var keys = v === 'covered' ? r.reasons : v === 'not_covered' ? ['micro'] : v === 'ask_rdo' ? ['pos'] : ['not_listed'];
      keys.forEach(function (k) { body.push(h('p', null, t.reason[k])); body.push(h('span.sec', null, t.section[k])); });
    }
    return h('div.verdict.' + tone, null, h('span.chip', null, t.chip[v]), h('h1', null, t.headline[v]), body);
  }
  function resultScreen() {
    var t = T(), v = S.result.verdict;
    var foot = D.footerParts[v].map(function (k) { return t.footer[k]; }).join(' ');
    return h('div.screen.result', null,
      h('header.bar.wrap', null,
        h('span.brand.d-only', null, t.brand),
        h('div.bar-actions.split', null,
          h('button.tbtn', { type: 'button', on: function () { go('start'); } }, icon(I.redo, 18), t.startOver),
          langBtn())),
      h('main.r-body.wrap', null,
        verdictBox(),
        h('section.todo', null,
          h('h2', null, t.todoTitle),
          h('ol', null, t.todo[v].map(function (s) { return h('li', null, s); })),
          v === 'depends' ? h('button.outline', { type: 'button', on: function () { delete S.answers.size; go('q', 0); } }, t.answerAgain) : null),
        h('div.coffee-row', null, icon(I.cup, 22, '#0F6E5C'), h('span', null, t.coffee.line),
          h('button.outline', { type: 'button', on: openCoffee }, t.coffee.button)),
        h('p.foot', null, foot + ' ', h('a', { href: D.circularUrl, target: '_blank', rel: 'noopener' }, t.footer.readCircular))));
  }

  function openCoffee() {
    var t = T(), c = t.coffee, s = D.support;
    dlg.textContent = '';
    dlg.appendChild(h('div.inner', null,
      h('span.handle.m-only', { 'aria-hidden': 'true' }),
      h('div.head', null, h('h1', { id: 'coffeeTitle' }, c.title),
        h('button.tbtn.iconbtn', { type: 'button', 'aria-label': c.close, title: c.close, on: function () { dlg.close(); } }, icon(I.close, 18))),
      h('p.lead', null, c.intro),
      h('div.pay', null,
        h('div.gbox', null,
          h('span.label', null, c.gcash),
          h('img', { src: s.gcashQr, alt: 'GCash QR', width: 200, height: 200 }),
          h('span.scan.d-only', null, c.scan),
          h('span.gname', null, s.gcashName),
          h('a.savebtn.m-only', { href: s.gcashQr, download: 'gcash-qr.png' }, icon(I.down, 18), c.save),
          h('a.savelink.d-only', { href: s.gcashQr, download: 'gcash-qr.png' }, icon(I.down, 16), c.save),
          h('span.small.m-only', null, c.how)),
        s.kofiUrl ? h('div.kbox', null,
          h('span.label', null, c.cardTitle),
          h('span.small.d-only', null, c.cardNote),
          h('a.outline.kofi', { href: s.kofiUrl, target: '_blank', rel: 'noopener' }, c.kofi, icon(I.ext, 16))) : null),
      h('p.optional', null, c.optional)));
    if (!dlg.open) dlg.showModal();
  }
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  function render() {
    document.documentElement.lang = S.lang === 'tl' ? 'tl' : 'en';
    app.textContent = '';
    app.appendChild(S.screen === 'start' ? startScreen() : S.screen === 'q' ? questionScreen() : resultScreen());
    if (dlg.open) openCoffee();
  }
  render();
})();
