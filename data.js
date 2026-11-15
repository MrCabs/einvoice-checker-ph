// All wording, dates and sources. Edit here when BIR changes something; rules.js holds only the logic.
window.CHECKER_DATA = {
  asOf: '2026-11-15',
  deadline: '2026-12-31',
  sources: [
    { label: 'RMC No. 98-2026 (full text, BIR)', url: 'https://bir-cdn.bir.gov.ph/BIR/pdf/RMC%20No.%2098-2026%20redacted.pdf' },
    { label: 'BIR press release, Sept 23, 2026', url: 'https://bir-cdn.bir.gov.ph/BIR/pdf/PR101SEP2326.pdf' },
    { label: 'EIS Certification portal (BIR)', url: 'https://eis-cert.bir.gov.ph' }
  ],
  text: {
    en: {
      title: 'Do I need e-invoicing by December 31?',
      intro: 'Four questions about the new BIR e-invoicing rule (RMC 98-2026). Your answers stay on your phone.',
      daysLeft: '{n} days left until December 31, 2026',
      deadlinePassed: 'The December 31, 2026 deadline has passed',
      q: {
        size: { label: 'Your gross sales in a year', hint: 'Total sales before expenses, from your last annual ITR or your sales records.',
          options: { micro: 'Under ₱3 million', small: '₱3 million to under ₱20 million', medium: '₱20 million to under ₱1 billion', large: '₱1 billion or more', unsure: 'Not sure' } },
        online: { label: 'Do you sell online?', hint: 'Shopee, Lazada, TikTok Shop, Facebook, your own website, or services sold and paid online.',
          options: { yes: 'Yes', no: 'No' } },
        invoicing: { label: 'How do you make invoices now?',
          options: { paper: 'BIR-registered booklet or loose-leaf', office: 'Typed in Word, Excel or Google Sheets', system: 'Accounting or invoicing software (CAS, CBA)', pos: 'POS or cash register only', none: 'I do not issue invoices yet' } },
        lts: { label: 'Is your business under the BIR Large Taxpayers Service?', hint: 'Only if BIR told you so in writing. Most small businesses: No.',
          options: { yes: 'Yes', no: 'No', unsure: 'Not sure' } }
      },
      check: 'Check',
      again: 'Start over',
      answerAll: 'Please answer all four questions.',
      verdict: {
        covered: 'You must issue e-invoices by December 31, 2026',
        not_covered: 'Most likely not required yet',
        depends: 'It depends on your size',
        ask_rdo: 'Ask your RDO',
        not_listed: 'Most likely not required yet'
      },
      why: 'Why',
      reason: {
        micro: 'Businesses with sales under ₱3 million a year (micro taxpayers) are not covered by the December 31 rule.',
        online: 'You sell online, and online sellers that are small, medium or large are covered.',
        lts: 'Businesses under the Large Taxpayers Service are covered.',
        large: 'Businesses with ₱1 billion or more in yearly sales (large taxpayers) are covered.',
        system: 'You make invoices with accounting or invoicing software, and those users are covered.',
        pos: 'The rule does not name POS or cash register users. Ask your RDO whether your setup counts as invoicing software.',
        not_listed: 'Your answers do not match any group the rule names for December 31. BIR can still add more groups later.',
        depends: 'If your yearly sales are under ₱3 million, you are not covered. If they are ₱3 million or more, you are covered.'
      },
      section: {
        micro: 'RMC 98-2026, Section III no. 1 and Section IV no. 1',
        online: 'RMC 98-2026, Section III no. 1',
        lts: 'RMC 98-2026, Section III no. 2',
        large: 'RMC 98-2026, Section III no. 3',
        system: 'RMC 98-2026, Section III no. 4',
        pos: 'RMC 98-2026, Section III',
        not_listed: 'RMC 98-2026, Section III no. 5',
        depends: 'RMC 98-2026, Section IV no. 1'
      },
      todoTitle: 'What to do',
      todo: {
        covered: [
          'Choose an e-invoicing system that is registered, approved or accredited by BIR. It can be your own system, one you buy, or an e-invoicing service provider. Invoices typed in Word, Excel, Google Docs or Sheets do not count.',
          'Apply for a Permit to Issue (PTI) Electronic Invoice at your RDO, or at your Large Taxpayer office. BIR can take up to 20 working days to decide, so apply early.',
          'Get the EIS Certification for your system within 6 months after your PTI is issued.',
          'Your head office and every branch must issue e-invoices.',
          'If your system is down, issue a BIR-authorized manual invoice, then replace it with an e-invoice later.',
          'Do not edit an issued e-invoice. Fix mistakes with a credit memo or a new e-invoice.',
          'Electronic sales reporting is a separate rule and is not required yet.'
        ],
        not_covered: [
          'Keep using your BIR-registered booklet or loose-leaf invoices.',
          'You may switch to e-invoicing on your own, but you will need a PTI Electronic Invoice from your RDO first.',
          'If your sales grow past ₱3 million a year, check again.'
        ],
        not_listed: [
          'Keep using your current BIR-registered invoices.',
          'Watch for new BIR announcements, because more groups may be added.'
        ],
        depends: [
          'Add up your gross sales for the year, or look at your last annual ITR.',
          'If it is ₱3 million or more, follow the steps for covered businesses: pick a BIR-registered system and apply for a PTI Electronic Invoice at your RDO soon.'
        ],
        ask_rdo: [
          'Visit or call your RDO and ask whether your POS counts as invoicing software under RMC 98-2026.'
        ]
      },
      confirm: 'Confirm with your RDO before you act. BIR sets your size classification, not this page.',
      disclaimer: 'Not tax advice. Based on RMC No. 98-2026 as of {date}.',
      sourcesTitle: 'Sources',
      lang: 'Tagalog'
    },
    tl: {
      title: 'Kailangan ko na ba ng e-invoice bago mag-December 31?',
      intro: 'Apat na tanong tungkol sa bagong BIR e-invoicing rule (RMC 98-2026). Hindi lumalabas sa phone mo ang mga sagot mo.',
      daysLeft: '{n} araw na lang bago mag-December 31, 2026',
      deadlinePassed: 'Lumipas na ang deadline na December 31, 2026',
      q: {
        size: { label: 'Kabuuang benta mo sa isang taon', hint: 'Lahat ng benta bago ibawas ang gastos. Tingnan ang huling annual ITR mo o ang sales records mo.',
          options: { micro: 'Mas mababa sa ₱3 milyon', small: '₱3 milyon hanggang mas mababa sa ₱20 milyon', medium: '₱20 milyon hanggang mas mababa sa ₱1 bilyon', large: '₱1 bilyon pataas', unsure: 'Hindi sigurado' } },
        online: { label: 'Nagbebenta ka ba online?', hint: 'Shopee, Lazada, TikTok Shop, Facebook, sariling website, o serbisyong binabayaran online.',
          options: { yes: 'Oo', no: 'Hindi' } },
        invoicing: { label: 'Paano ka gumagawa ng invoice ngayon?',
          options: { paper: 'BIR-registered na booklet o loose-leaf', office: 'Tina-type sa Word, Excel o Google Sheets', system: 'Accounting o invoicing software (CAS, CBA)', pos: 'POS o cash register lang', none: 'Wala pa akong ini-issue na invoice' } },
        lts: { label: 'Nasa BIR Large Taxpayers Service ba ang negosyo mo?', hint: 'Kung sinabihan ka lang ng BIR nang nakasulat. Karamihan ng maliit na negosyo: Hindi.',
          options: { yes: 'Oo', no: 'Hindi', unsure: 'Hindi sigurado' } }
      },
      check: 'Tingnan',
      again: 'Ulitin',
      answerAll: 'Pakisagot ang lahat ng apat na tanong.',
      verdict: {
        covered: 'Kailangan mong mag-issue ng e-invoice bago mag-December 31, 2026',
        not_covered: 'Malamang hindi pa kailangan',
        depends: 'Depende sa laki ng benta mo',
        ask_rdo: 'Magtanong sa RDO mo',
        not_listed: 'Malamang hindi pa kailangan'
      },
      why: 'Bakit',
      reason: {
        micro: 'Ang mga negosyong may benta na mas mababa sa ₱3 milyon kada taon (micro taxpayer) ay hindi sakop ng December 31 rule.',
        online: 'Nagbebenta ka online, at sakop ang mga online seller na small, medium o large.',
        lts: 'Sakop ang mga negosyong nasa Large Taxpayers Service.',
        large: 'Sakop ang mga negosyong may ₱1 bilyon pataas na benta kada taon (large taxpayer).',
        system: 'Gumagamit ka ng accounting o invoicing software sa invoice, at sakop ang mga gumagamit nito.',
        pos: 'Hindi binanggit ng rule ang mga gumagamit ng POS o cash register. Tanungin ang RDO mo kung itinuturing na invoicing software ang setup mo.',
        not_listed: 'Hindi tugma ang mga sagot mo sa kahit anong grupong binanggit ng rule para sa December 31. Puwede pang magdagdag ang BIR ng grupo sa susunod.',
        depends: 'Kung mas mababa sa ₱3 milyon ang benta mo kada taon, hindi ka sakop. Kung ₱3 milyon pataas, sakop ka.'
      },
      section: {
        micro: 'RMC 98-2026, Section III no. 1 at Section IV no. 1',
        online: 'RMC 98-2026, Section III no. 1',
        lts: 'RMC 98-2026, Section III no. 2',
        large: 'RMC 98-2026, Section III no. 3',
        system: 'RMC 98-2026, Section III no. 4',
        pos: 'RMC 98-2026, Section III',
        not_listed: 'RMC 98-2026, Section III no. 5',
        depends: 'RMC 98-2026, Section IV no. 1'
      },
      todoTitle: 'Ano ang gagawin',
      todo: {
        covered: [
          'Pumili ng e-invoicing system na registered, approved o accredited ng BIR. Puwedeng sarili mong system, binili, o e-invoicing service provider. Hindi puwede ang invoice na tina-type sa Word, Excel, Google Docs o Sheets.',
          'Mag-apply ng Permit to Issue (PTI) Electronic Invoice sa RDO mo, o sa Large Taxpayer office mo. Hanggang 20 working days bago magdesisyon ang BIR, kaya mag-apply nang maaga.',
          'Kumuha ng EIS Certification para sa system mo sa loob ng 6 na buwan mula nang ma-issue ang PTI mo.',
          'Dapat mag-issue ng e-invoice ang head office at lahat ng branch.',
          'Kapag down ang system mo, mag-issue ng BIR-authorized na manual invoice, tapos palitan ito ng e-invoice pagbalik ng system.',
          'Huwag i-edit ang na-issue nang e-invoice. Ayusin ang mali gamit ang credit memo o bagong e-invoice.',
          'Hiwalay na rule ang electronic sales reporting at hindi pa ito kailangan.'
        ],
        not_covered: [
          'Ituloy lang ang paggamit ng BIR-registered na booklet o loose-leaf invoice mo.',
          'Puwede kang lumipat sa e-invoicing kahit hindi required, pero kailangan mo muna ng PTI Electronic Invoice mula sa RDO mo.',
          'Kapag lumampas sa ₱3 milyon kada taon ang benta mo, mag-check ulit.'
        ],
        not_listed: [
          'Ituloy lang ang paggamit ng BIR-registered na invoice mo ngayon.',
          'Abangan ang bagong announcement ng BIR, dahil puwede pang madagdagan ang mga sakop.'
        ],
        depends: [
          'Kuwentahin ang kabuuang benta mo sa isang taon, o tingnan ang huling annual ITR mo.',
          'Kung ₱3 milyon pataas, sundin ang mga hakbang para sa sakop: pumili ng BIR-registered na system at mag-apply agad ng PTI Electronic Invoice sa RDO mo.'
        ],
        ask_rdo: [
          'Pumunta o tumawag sa RDO mo at itanong kung itinuturing na invoicing software ang POS mo sa ilalim ng RMC 98-2026.'
        ]
      },
      confirm: 'Kumpirmahin muna sa RDO mo bago kumilos. Ang BIR ang nagtatakda ng classification mo, hindi ang page na ito.',
      disclaimer: 'Hindi ito tax advice. Batay sa RMC No. 98-2026 noong {date}.',
      sourcesTitle: 'Mga source',
      lang: 'English'
    }
  }
};
