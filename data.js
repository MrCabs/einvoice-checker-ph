// All wording, dates, links and support settings. Edit here when BIR changes something;
// rules.js holds only the logic.
window.CHECKER_DATA = {
  asOf: '2026-11-15',
  deadline: '2026-12-31',
  circularUrl: 'https://bir-cdn.bir.gov.ph/BIR/pdf/RMC%20No.%2098-2026%20redacted.pdf',
  support: {
    gcashQr: 'gcash-qr.png',
    gcashName: 'KE****H PA*L C.',
    kofiUrl: ''            // empty = the Ko-fi box is hidden
  },
  footerParts: {
    covered: ['confirm', 'disclaimer'],
    not_covered: ['confirm', 'sizeNote', 'disclaimer'],
    depends: ['confirm', 'sizeNote', 'disclaimer'],
    ask_rdo: ['disclaimer'],
    not_listed: ['confirm', 'disclaimer']
  },
  text: {
    en: {
      brand: 'E-Invoice Checker PH',
      lang: 'Tagalog',
      daysLeft: '{n} days left until December 31, 2026',
      deadlinePassed: 'The December 31, 2026 deadline has passed',
      title: 'Do I need e-invoicing by December 31?',
      intro: "BIR's new rule, RMC 98-2026, moves some businesses from paper invoices to electronic invoices. Answer 4 questions to see if it covers you.",
      bulletsPhone: ['About 1 minute', 'Your answers stay on your phone', 'Based on the official BIR circular'],
      bulletsDesk: ['About 1 minute', 'Answers stay on your device', 'Official BIR circular'],
      startBtn: 'Start',
      startNote: 'Not tax advice. Confirm with your RDO.',
      fourQuestions: 'The 4 questions',
      qOf: 'Question {n} of 4',
      back: 'Back',
      stepNames: ['Yearly sales', 'Selling online', 'How you make invoices', 'Large Taxpayers Service'],
      q: {
        size: { label: 'How much are your gross sales in a year?', hint: 'Total sales before expenses. Check your last annual ITR or your sales records.',
          options: { micro: 'Under ₱3 million', small: '₱3 million to under ₱20 million', medium: '₱20 million to under ₱1 billion', large: '₱1 billion or more', unsure: 'Not sure' } },
        online: { label: 'Do you sell online?', hint: 'Shopee, Lazada, TikTok Shop, Facebook, your own website, or services sold and paid online.',
          options: { yes: 'Yes', no: 'No' } },
        invoicing: { label: 'How do you make invoices now?', hint: '',
          options: { paper: 'BIR-registered booklet or loose-leaf', office: 'Typed in Word, Excel or Google Sheets', system: 'Accounting or invoicing software (CAS, CBA)', pos: 'POS or cash register only', none: 'I do not issue invoices yet' } },
        lts: { label: 'Is your business under the BIR Large Taxpayers Service?', hint: 'Only if BIR told you so in writing. Most small businesses answer No.',
          options: { yes: 'Yes', no: 'No', unsure: 'Not sure' } }
      },
      startOver: 'Start over',
      chip: { covered: 'Required', not_covered: 'Not required yet', depends: 'Depends', ask_rdo: 'Ask your RDO', not_listed: 'Not in this round' },
      headline: {
        covered: 'You must issue e-invoices by December 31, 2026',
        not_covered: 'Most likely you do not need e-invoicing yet',
        depends: 'It depends on your yearly sales',
        ask_rdo: 'The rule does not say if your POS counts',
        not_listed: 'Most likely you do not need e-invoicing yet'
      },
      reason: {
        micro: 'Businesses with sales under ₱3 million a year (micro taxpayers) are not covered by the December 31 rule, even if they sell online.',
        online: 'You sell online, and online sellers that are small, medium or large are covered.',
        lts: 'Businesses under the Large Taxpayers Service are covered.',
        large: 'Businesses with ₱1 billion or more in yearly sales (large taxpayers) are covered.',
        system: 'You make invoices with accounting or invoicing software, and those users are covered.',
        pos: 'RMC 98-2026 covers accounting and invoicing software, but it does not name POS or cash register users.',
        not_listed: 'Your answers do not match any group the rule names for December 31. BIR can still add more groups later.'
      },
      reasonShort: { online: 'You sell online.', lts: 'You are under the Large Taxpayers Service.', large: 'Your sales are ₱1 billion or more.', system: 'You use accounting or invoicing software.' },
      dependsRule: 'Under ₱3 million a year: not covered. ₱3 million or more: covered by December 31.',
      section: {
        micro: 'RMC 98-2026, Section III no. 1 and Section IV no. 1',
        online: 'RMC 98-2026, Section III no. 1',
        lts: 'RMC 98-2026, Section III no. 2',
        large: 'RMC 98-2026, Section III no. 3',
        system: 'RMC 98-2026, Section III no. 4',
        pos: 'RMC 98-2026, Section III',
        not_listed: 'RMC 98-2026, Section III no. 5',
        depends: 'RMC 98-2026, Section III no. 1 and Section IV no. 1'
      },
      todoTitle: 'What to do',
      todo: {
        covered: [
          'Pick a BIR-registered e-invoicing system. Word, Excel and Sheets do not count.',
          'Apply for a PTI Electronic Invoice at your RDO. It can take 20 working days.',
          'Get EIS Certification within 6 months of your PTI.',
          'Head office and every branch must e-invoice.',
          'System down? Issue a BIR-authorized manual invoice, replace it later.',
          'Never edit an issued e-invoice. Use a credit memo.',
          'Sales reporting is a separate rule, not required yet.'
        ],
        not_covered: [
          'Keep using your BIR-registered booklet or loose-leaf invoices.',
          'You may switch to e-invoicing on your own, but you need a PTI Electronic Invoice from your RDO first.',
          'If your sales grow past ₱3 million a year, check again.'
        ],
        depends: [
          'Add up your gross sales for the year, or look at your last annual ITR.',
          'Under ₱3 million: keep your BIR-registered paper invoices.',
          '₱3 million or more: pick a BIR-registered e-invoicing system and apply for a PTI Electronic Invoice at your RDO soon. It can take 20 working days.'
        ],
        ask_rdo: [
          'Visit or call your RDO. Ask if your POS counts as invoicing software under RMC 98-2026.',
          'Bring your POS Permit to Use or Acknowledgement Certificate.',
          'If they say yes: apply for a PTI Electronic Invoice right away. It can take 20 working days.'
        ],
        not_listed: [
          'Keep using your current BIR-registered invoices.',
          'Watch for new BIR announcements, because more groups may be added.'
        ]
      },
      answerAgain: 'Answer again with my sales',
      footer: {
        confirm: 'Confirm with your RDO before you act.',
        sizeNote: 'BIR sets your size, not this page.',
        disclaimer: 'Not tax advice. Based on RMC 98-2026 as of Nov 15, 2026.',
        readCircular: 'Read the circular'
      },
      coffee: {
        line: 'Free to use. If it helped, you can buy me a coffee.',
        button: 'Buy me a coffee',
        title: 'Buy me a coffee',
        intro: 'This checker is free. A coffee helps me keep it up to date when BIR changes the rules.',
        gcash: 'GCash',
        scan: 'Scan with GCash on your phone',
        save: 'Save QR image',
        how: 'Then in GCash: Pay QR, Upload QR',
        cardTitle: 'Card or PayPal',
        cardNote: 'From abroad or without GCash.',
        kofi: 'Coffee via Ko-fi',
        optional: 'Completely optional. The checker works the same either way.',
        close: 'Close'
      }
    },
    tl: {
      brand: 'E-Invoice Checker PH',
      lang: 'English',
      daysLeft: '{n} araw na lang bago mag-December 31, 2026',
      deadlinePassed: 'Lumipas na ang deadline na December 31, 2026',
      title: 'Kailangan ko na ba ng e-invoice bago mag-December 31?',
      intro: 'Inililipat ng bagong rule ng BIR, ang RMC 98-2026, ang ilang negosyo mula sa papel na invoice papunta sa electronic invoice. Sagutin ang 4 na tanong para malaman kung sakop ka.',
      bulletsPhone: ['Mga 1 minuto', 'Nasa phone mo lang ang mga sagot mo', 'Batay sa opisyal na circular ng BIR'],
      bulletsDesk: ['Mga 1 minuto', 'Nasa device mo lang ang mga sagot', 'Opisyal na circular ng BIR'],
      startBtn: 'Simulan',
      startNote: 'Hindi ito tax advice. Kumpirmahin sa RDO mo.',
      fourQuestions: 'Ang 4 na tanong',
      qOf: 'Tanong {n} sa 4',
      back: 'Bumalik',
      stepNames: ['Benta kada taon', 'Pagbebenta online', 'Paano gumawa ng invoice', 'Large Taxpayers Service'],
      q: {
        size: { label: 'Magkano ang kabuuang benta mo sa isang taon?', hint: 'Lahat ng benta bago ibawas ang gastos. Tingnan ang huling annual ITR mo o ang sales records mo.',
          options: { micro: 'Mas mababa sa ₱3 milyon', small: '₱3 milyon hanggang mas mababa sa ₱20 milyon', medium: '₱20 milyon hanggang mas mababa sa ₱1 bilyon', large: '₱1 bilyon pataas', unsure: 'Hindi sigurado' } },
        online: { label: 'Nagbebenta ka ba online?', hint: 'Shopee, Lazada, TikTok Shop, Facebook, sariling website, o serbisyong binabayaran online.',
          options: { yes: 'Oo', no: 'Hindi' } },
        invoicing: { label: 'Paano ka gumagawa ng invoice ngayon?', hint: '',
          options: { paper: 'BIR-registered na booklet o loose-leaf', office: 'Tina-type sa Word, Excel o Google Sheets', system: 'Accounting o invoicing software (CAS, CBA)', pos: 'POS o cash register lang', none: 'Wala pa akong ini-issue na invoice' } },
        lts: { label: 'Nasa BIR Large Taxpayers Service ba ang negosyo mo?', hint: 'Kung sinabihan ka lang ng BIR nang nakasulat. Karamihan ng maliit na negosyo: Hindi.',
          options: { yes: 'Oo', no: 'Hindi', unsure: 'Hindi sigurado' } }
      },
      startOver: 'Ulitin',
      chip: { covered: 'Kailangan', not_covered: 'Hindi pa kailangan', depends: 'Depende', ask_rdo: 'Magtanong sa RDO', not_listed: 'Wala sa round na ito' },
      headline: {
        covered: 'Kailangan mong mag-issue ng e-invoice bago mag-December 31, 2026',
        not_covered: 'Malamang hindi mo pa kailangan ng e-invoice',
        depends: 'Depende sa benta mo kada taon',
        ask_rdo: 'Hindi sinasabi ng rule kung kasama ang POS mo',
        not_listed: 'Malamang hindi mo pa kailangan ng e-invoice'
      },
      reason: {
        micro: 'Hindi sakop ng December 31 rule ang mga negosyong may benta na mas mababa sa ₱3 milyon kada taon (micro taxpayer), kahit nagbebenta online.',
        online: 'Nagbebenta ka online, at sakop ang mga online seller na small, medium o large.',
        lts: 'Sakop ang mga negosyong nasa Large Taxpayers Service.',
        large: 'Sakop ang mga negosyong may ₱1 bilyon pataas na benta kada taon (large taxpayer).',
        system: 'Gumagamit ka ng accounting o invoicing software sa invoice, at sakop ang mga gumagamit nito.',
        pos: 'Sakop ng RMC 98-2026 ang accounting at invoicing software, pero hindi nito binanggit ang mga gumagamit ng POS o cash register.',
        not_listed: 'Hindi tugma ang mga sagot mo sa kahit anong grupong binanggit ng rule para sa December 31. Puwede pang magdagdag ang BIR ng grupo sa susunod.'
      },
      reasonShort: { online: 'Nagbebenta ka online.', lts: 'Nasa Large Taxpayers Service ka.', large: '₱1 bilyon pataas ang benta mo.', system: 'Gumagamit ka ng accounting o invoicing software.' },
      dependsRule: 'Mas mababa sa ₱3 milyon kada taon: hindi sakop. ₱3 milyon pataas: sakop bago mag-December 31.',
      section: {
        micro: 'RMC 98-2026, Section III no. 1 at Section IV no. 1',
        online: 'RMC 98-2026, Section III no. 1',
        lts: 'RMC 98-2026, Section III no. 2',
        large: 'RMC 98-2026, Section III no. 3',
        system: 'RMC 98-2026, Section III no. 4',
        pos: 'RMC 98-2026, Section III',
        not_listed: 'RMC 98-2026, Section III no. 5',
        depends: 'RMC 98-2026, Section III no. 1 at Section IV no. 1'
      },
      todoTitle: 'Ano ang gagawin',
      todo: {
        covered: [
          'Pumili ng BIR-registered na e-invoicing system. Hindi puwede ang Word, Excel o Sheets.',
          'Mag-apply ng PTI Electronic Invoice sa RDO mo. Puwedeng umabot ng 20 working days.',
          'Kumuha ng EIS Certification sa loob ng 6 na buwan mula sa PTI mo.',
          'Dapat mag-e-invoice ang head office at bawat branch.',
          'Down ang system? Mag-issue ng BIR-authorized na manual invoice, palitan ito mamaya.',
          'Huwag i-edit ang na-issue nang e-invoice. Gumamit ng credit memo.',
          'Hiwalay na rule ang sales reporting at hindi pa ito kailangan.'
        ],
        not_covered: [
          'Ituloy lang ang paggamit ng BIR-registered na booklet o loose-leaf invoice mo.',
          'Puwede kang lumipat sa e-invoicing kahit hindi required, pero kailangan mo muna ng PTI Electronic Invoice mula sa RDO mo.',
          'Kapag lumampas sa ₱3 milyon kada taon ang benta mo, mag-check ulit.'
        ],
        depends: [
          'Kuwentahin ang kabuuang benta mo sa isang taon, o tingnan ang huling annual ITR mo.',
          'Mas mababa sa ₱3 milyon: ituloy ang BIR-registered na papel na invoice mo.',
          '₱3 milyon pataas: pumili ng BIR-registered na e-invoicing system at mag-apply agad ng PTI Electronic Invoice sa RDO mo. Puwedeng umabot ng 20 working days.'
        ],
        ask_rdo: [
          'Pumunta o tumawag sa RDO mo. Itanong kung itinuturing na invoicing software ang POS mo sa ilalim ng RMC 98-2026.',
          'Dalhin ang POS Permit to Use o Acknowledgement Certificate mo.',
          'Kung oo ang sagot: mag-apply agad ng PTI Electronic Invoice. Puwedeng umabot ng 20 working days.'
        ],
        not_listed: [
          'Ituloy lang ang paggamit ng BIR-registered na invoice mo ngayon.',
          'Abangan ang bagong announcement ng BIR, dahil puwede pang madagdagan ang mga sakop.'
        ]
      },
      answerAgain: 'Sagutin ulit gamit ang benta ko',
      footer: {
        confirm: 'Kumpirmahin muna sa RDO mo bago kumilos.',
        sizeNote: 'Ang BIR ang nagtatakda ng laki ng negosyo mo, hindi ang page na ito.',
        disclaimer: 'Hindi ito tax advice. Batay sa RMC 98-2026 noong Nov 15, 2026.',
        readCircular: 'Basahin ang circular'
      },
      coffee: {
        line: 'Libre itong gamitin. Kung nakatulong, puwede mo akong ilibre ng kape.',
        button: 'Ilibre ng kape',
        title: 'Ilibre ng kape',
        intro: 'Libre ang checker na ito. Ang kape ay tumutulong para ma-update ko ito kapag nagbago ang rules ng BIR.',
        gcash: 'GCash',
        scan: 'I-scan gamit ang GCash sa phone mo',
        save: 'I-save ang QR',
        how: 'Tapos sa GCash: Pay QR, Upload QR',
        cardTitle: 'Card o PayPal',
        cardNote: 'Mula abroad o walang GCash.',
        kofi: 'Kape sa Ko-fi',
        optional: 'Ganap na opsyonal. Pareho lang gumagana ang checker kahit wala.',
        close: 'Isara'
      }
    }
  }
};
