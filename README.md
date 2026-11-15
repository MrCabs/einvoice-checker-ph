# E-Invoice Checker PH

One static page: "Do I need BIR e-invoicing by December 31, 2026?" (RMC 98-2026). English and Tagalog.
No server, no tracking; answers never leave the browser.

- `rules.js`: decision logic (from RMC 98-2026 sections III and IV)
- `data.js`: all wording, dates and sources. Change rules text here.
- `node --test test/*.test.js`: tests
- Preview: `python3 -m http.server 8090 --bind 127.0.0.1`, open http://127.0.0.1:8090
