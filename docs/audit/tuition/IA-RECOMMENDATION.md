# Tuition Cluster — IA Recommendation (Stage 3)

**Generated:** 2026-06-02
**Author:** IA-Recommender subagent
**Inputs:** `inventory.md` (9 Stage-3 questions), `tuition-aid.html`, 19 live extracts (CLW 10, STP 9), Admissions `IA-RESTRUCTURE-2026-05-18.md`

---

## TL;DR

- **Three-page split, yes, but lopsided.** Keep one substantive institutional `tuition-aid.html` (it holds ~90% of the content, nearly all `shared`) plus two thin per-campus action pages. The split is justified by the campus-specific facts that genuinely diverge: FAFSA school code (005605 CLW / 013917 STP), the NPC URL, and the CLW-only military/veteran resources. Do not duplicate the shared prose across three pages.
- **The current redesign page is partly fabricated and must be corrected against live.** Rates are wrong ($2.91/$11.64 should be `$2.92/hr` resident, `$11.71/hr` nonresident, clock-hour not "credit hour"), the FAFSA code 013847 is invented (live uses two campus codes), the 5-item FAQ is fabricated (no live FAQ source) and must be stripped per the Admissions precedent, and "Florida Legislature" should be "Pinellas County School Board."
- **Refund policy gets its own section** (`#refund`), sourced verbatim. It is substantive (active-military rule, 10-session/50-hour window, 45-day issuance, Title IV return). Folding it into rates or a fabricated FAQ loses content.
- **Military/veteran asymmetry: keep asymmetric, surface CLW resources, file a follow-up asking STP to publish parity.** STP's `veterans-benefits` page has the same statutory prose but no named contacts and no resource center. Veterans Benefits (shared statutory content) is the parity source; the CLW MVRC page (Milisav + Welden, MVRC, events) is a CLW-only block.
- **Consolidate the two scholarship sub-pages onto one `#scholarships` section.** The substantive list is `shared` (with 2 STP-only entries to mark asymmetric); `pcsb-financial-aid-scholarships` is a thin pass-through that becomes a single outbound link, not its own page.

---

## Reasoning (the 9 questions, answered)

**Q1 — Single page vs 3-page split.** Split, following the Admissions precedent, but honestly: the institutional page carries the load. Nearly everything is `shared` and PCSB/CTAE-set, so a single rich `tuition-aid.html` is the canonical home for rates, fees, FAFSA framework, federal/state programs, scholarships, NPC explanation, veterans statutory content, and refund policy. The two campus pages exist only because three facts truly diverge per campus (FAFSA code, NPC link, FA office contact + CLW vet resources). They should be short action pages, not mirrors. This matches Admissions' institutional-on-www / action-on-campus model without the page-bloat-and-drift risk of triple-maintaining identical statutory text.

**Q2 — Refund policy placement.** Own section `#refund` on `tuition-aid.html`, sourced verbatim from the (identical) campus refund pages. It is too substantive and too consequential (Title IV return, active-military option) to bury in `#rates`, and the redesign FAQ that currently paraphrases it is fabricated and being removed.

**Q3 — NPC routing.** Campus chooser, two buttons, on institutional `#net-price` (the redesign already does this) AND a campus-scoped single link on each per-campus page. IPEDS requires per-campus tools. Wire the real URLs: CLW button to `pcsb.org/.../domain/134/netprice/index.html`; STP button to the St-Petersburg NPC URL (extract `stpete/net-price-calculator.md`). No single shared link.

**Q4 — Military/veteran asymmetry.** `asymmetric`. Treat `veterans-benefits` (present and near-identical on both campuses) as the shared parity source for statutory/GI Bill content on institutional `#veterans`. The CLW-only MVRC page (Milisav, Welden, MVRC in Building 1, the two 2026 events, community resource links) becomes a CLW-only block on `clearwater-tuition.html`. File a `follow-ups.md` item asking STP to publish a parallel resources page or confirm CLW serves both. Do not fabricate STP contacts (the inventory's expected Schnell/Mitchell names do NOT exist in the live DOM).

**Q5 — Rate provenance/shelf-life.** Live source: CLW/STP `fees-and-expenses`, "established by the Pinellas County School Board," `$2.92/$11.71` clock-hour. `shared`, identical both campuses. PCSB-set, changes at fiscal-year boundaries. Recommended owner: PCSB CTAE administration (Frank Cianca as the PTC-side relay). Add an annual July refresh checkpoint. The redesign's current numbers are wrong and must be replaced verbatim.

**Q6 — Bill Young Waiver placement.** Anchor it once under `#veterans` (it is veteran content) and cross-link from `#rates`. Live currently duplicates the identical HB 7015 / HB 851 block on both `fees-and-expenses` and `veterans-benefits`; the redesign should de-dupe to a single home. File a low-priority follow-up noting the live duplication.

**Q7 — Two scholarship pages.** Complementary, not duplicate. `scholarships` is the substantive list (AWS, AFCEA, Bailey, MTS, PTC Nursing, Passmore, Pinellas Ed Foundation) and is `shared`; STP adds two entries (Barrett Family Foundation VA, FCSUA/PTC-UP) = `asymmetric`. `pcsb-financial-aid-scholarships` is a 250-char pass-through to `pcsb.org/financialaid`. Consolidate: one `#scholarships` section with the verbatim list + STP-only entries marked, plus a single outbound PCSB link. Do not keep a standalone PCSB pass-through page.

**Q8 — FAQ.** Strip it. There is no verbatim live FAQ source (confirmed across all 19 extracts). The current 5 questions are fabricated, and two contain wrong facts (school code 013847, paraphrased refund terms). Follows the Admissions precedent exactly. Real Q&A content (refund, fees, aid repayment) is already covered by the verbatim sections.

**Q9 — Veterans heading.** Canonical heading: **"Veterans & Military Benefits"** for the institutional section (`#veterans`), and **"Military & Veteran Student Resources"** for the CLW campus block (matches the live CLW page title). UX-layer naming; not verbatim-bound.

---

## Proposed sitemap (tree)

```
tuition-aid.html  (institutional, canonical — ~2,000 words, sticky in-page nav)
├── #rates          Tuition & fees (PCSB-set $2.92/$11.71 clock-hour; AGE term fees; fee list; payment terms)   [shared]
├── #pay            Pay tuition banner + bookstore-each-term / due-first-day note                               [shared]
├── #fafsa          FAFSA framework + FSA eligibility + verification/SAP/90% attendance                         [shared]
├── #federal-state  Pell, Bright Futures, FL Career Ed Grant, WIOA/CareerSource, Voc Rehab, Youth Connect        [shared]
├── #scholarships   Verbatim list (+ STP-only: Barrett VA, FCSUA) + single PCSB outbound link                   [shared + asymmetric]
├── #net-price      Explanation + campus chooser (CLW / STP buttons)                                            [campus-specific]
├── #veterans       GI Bill/Title 38, attendance/SAP, appeal, Bill Young + Purple Heart waiver (anchored here)  [shared]
├── #refund         NEW. Active-military option, 10-session/50-hr window, 45-day issuance, Title IV return       [shared]
└── (NO #faq — removed; fabricated)

clearwater-tuition.html  (thin action page — ~400 words)
├── FAFSA school code 005605
├── CLW Net Price Calculator link
├── CLW Financial Aid Office: 727-538-7167 Option 7
└── Military & Veteran Student Resources block (MVRC Bldg 1; Milisav x2020; Welden x2023; 2 events; resource links)  [asymmetric, CLW-only]

stpete-tuition.html  (thin action page — ~250 words)
├── FAFSA school code 013917
├── STP Net Price Calculator link
├── STP Financial Aid Office: 727-893-2500
└── Veterans: link to institutional #veterans (no STP resource center yet — see follow-up)
```

---

## Per-topic content placement table

| Topic | Live source | Redesign home | Classification |
|---|---|---|---|
| Tuition rates $2.92/$11.71 clock-hour | CLW+STP `fees-and-expenses` (identical) | `tuition-aid.html#rates` | **shared** |
| AGE term fees ($45/$120) | both `fees-and-expenses` | `#rates` (cross-ref Programs) | **shared** |
| Fee list + payment terms | both `fees-and-expenses` | `#rates` / `#pay` | **shared** |
| FAFSA framework / FSA help | both `fafsa-...` (thin, PDF) + hubs | `#fafsa` | **shared** |
| FAFSA school code | CLW 005605 / STP 013917 | campus pages | **campus-specific** |
| Verification / SAP / 90% attendance | both `financial-aid` hubs | `#fafsa` | **shared** |
| Federal/state programs (Pell, Bright Futures, WIOA, Voc Rehab, Youth Connect) | both `federal-and-state-funding` | `#federal-state` | **shared** |
| Scholarship list (AWS, AFCEA, Bailey, MTS, Nursing, Passmore, Pinellas Ed) | both `scholarships` | `#scholarships` | **shared** |
| Barrett Family Foundation VA; FCSUA/PTC-UP | STP `scholarships` only | `#scholarships` (marked STP) | **asymmetric** |
| PCSB scholarship pass-through | both `pcsb-financial-aid-scholarships` | single link in `#scholarships` | **shared** |
| Net Price Calculator | CLW + STP distinct URLs | `#net-price` chooser + campus pages | **campus-specific** |
| Veterans statutory / GI Bill / SAP / appeal | both `veterans-benefits` (identical) | `#veterans` | **shared** |
| Bill Young + Purple Heart waiver | both `fees` AND `veterans` (duplicated live) | `#veterans` (anchor) + `#rates` cross-link | **shared** |
| Refund policy | both `refund-policy` (identical) | `#refund` | **shared** |
| MVRC, vet contacts, events | CLW `military-veteran-student-resources` only | `clearwater-tuition.html` | **asymmetric (CLW-only)** |
| FA office phone | CLW Opt 7 / STP main line | campus pages | **campus-specific** |

---

## Risks and trade-offs

- **Fabrication cleanup is the real work here, not the split.** The current `tuition-aid.html` carries wrong rates, an invented federal school code, a "Florida Legislature" misattribution, and a fabricated FAQ. Stage 4 must replace these verbatim from extracts. This is the highest-priority risk (a parent/student acting on $2.91 or code 013847 gets bad info).
- **Thin campus pages risk looking empty.** STP especially (no vet center, no unique programs) is ~250 words. Acceptable: their job is routing the 3 divergent facts, not bulk content. If too thin to justify a page, fall back to per-campus cards inside `tuition-aid.html` — but the Admissions precedent favors the split for operational ownership.
- **Length check.** Institutional page lands near ~2,000 words across 9 sections. That exceeds the 1,500/4-section no-nav threshold, so it requires the sticky in-page nav (already present in the redesign dropdown pattern). Stays under the 3,000/8-section ceiling, so one page is correct; no further splitting needed.
- **STP parity follow-up may sit unresolved.** If STP never publishes vet resources, the asymmetry persists; the institutional `#veterans` + CLW block is a safe default in the meantime.
- **NPC links are external PCSB-hosted (domain/134).** If PCSB moves them, both campus pages break. Note in follow-ups for the drift-watch.

---

## Migration order (for Stage 4)

1. **Correct fabricated facts first:** rates `$2.92`/`$11.71` clock-hour, PCSB attribution, remove code 013847, remove fabricated FAQ section entirely.
2. **Add `#refund`** verbatim from `refund-policy.md`.
3. **Rebuild `#veterans`** from `veterans-benefits.md`; anchor Bill Young/Purple Heart waiver here; cross-link from `#rates`.
4. **Consolidate `#scholarships`** verbatim list + 2 STP-only entries + single PCSB link.
5. **Wire `#net-price`** chooser to the two real PCSB NPC URLs.
6. **Build `clearwater-tuition.html`** (005605, CLW NPC, FA Opt 7, MVRC block with Milisav/Welden/events).
7. **Build `stpete-tuition.html`** (013917, STP NPC, STP FA line, link to `#veterans`).
8. **File follow-ups:** (a) STP publish vet-resources parity; (b) live Bill Young waiver duplicated on fees+veterans; (c) PCSB NPC external URL drift watch; (d) confirm rate refresh owner (PCSB CTAE / Frank Cianca).
```
