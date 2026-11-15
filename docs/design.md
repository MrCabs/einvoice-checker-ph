# E-Invoice Checker PH: design (small project)

Date: 2026-11-15. Status: approved by owner ("ok build it" after the requirements list).

## Why
BIR RMC 98-2026 (2026-09-22) makes e-invoicing mandatory by 2026-12-31 for some taxpayers.
Sellers read articles that disagree. No simple checker exists. One page answers
"Am I covered, and what do I do?" in about a minute.

## Rules (from the RMC text itself, sections III and IV)
- Covered groups: (1) e-commerce / internet sellers classified Small, Medium or Large;
  (2) taxpayers under the Large Taxpayers Service; (3) Large under EOPT (RA 11976, RR 8-2024);
  (4) users of CAS or CBA with accounting records (with e-invoicing) and other invoicing software;
  (5) others the Commissioner requires.
- Micro taxpayers are excepted from all groups (IV.1). They may opt in with a PTI (IV.9).
- Size (RR 8-2024): micro under P3M, small P3M to under P20M, medium P20M to under P1B, large P1B up.
- Covered must: use a registered/approved/accredited system (Word/Excel/Docs/Sheets do not count, IV.4);
  get a PTI Electronic Invoice from their RDO or LT Office before issuing, BIR decides within
  20 working days (IV.12); EIS Certification within 6 months of the PTI (IV.15); head office and all
  branches (IV.10); downtime = BIR-authorized manual invoice, replaced later (IV.11); corrections by
  credit memo or new invoice (IV.8). E-sales reporting is separate and not required yet (IV.2).
- POS is not named in section III: answer "ask your RDO" for POS-only users.

## Approaches
| Approach | Trade-off | Decision |
|---|---|---|
| One static page, rules + wording in one data file | Free hosting, nothing sent anywhere, rule change = data edit | **Chosen** |
| Small server app | Could log usage; costs money, holds user data | Rejected |

## Shape
- Four questions: yearly gross sales range (or "not sure"), sells online, how invoices are issued now,
  under LTS. Result: Covered / Most likely not covered / Ask your RDO, with the reason, the RMC
  section, and a short to-do list. English and Tagalog toggle.
- Every result: "Confirm with your RDO", sources linked, "as of" date, not tax advice.
- No accounts, no tracking, no data leaves the phone.
