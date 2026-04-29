# About Sub-Pages — Overlap Matrix

**Generated:** 2026-04-28
**Cluster:** about-sub-pages (28 sub-page URLs across www / clearwater / stpete)
**Source extracts:** `docs/audit/about-cluster/extracted/{www,clearwater,stpete}/`
**Scope:** Sub-pages only. The 3 hub pages were settled in the about-cluster pilot.

---

## 1. Sub-page topic overlap table

Char counts are taken from each extract's frontmatter. "Identical" means body text matches byte-for-byte ignoring titles. "Near-identical" means the structure and most words match but campus name, address, or one phrase differs. "Different" means substantive content divergence.

| # | Topic | www | CLW | STP | Identity | Verdict |
|---|---|---|---|---|---|---|
| 1 | PCS/CTAE Compliance Statements | 2,043 | — | — | n/a (single canonical) | Substantive non-discrimination policy; only lives on www. Already shared. |
| 2 | Sexual Misconduct \| Sexual Predators | 1,140 | — | — | n/a (single canonical) | Substantive; shared. Extract truncated mid-FDLE hotline (re-fetch flagged). |
| 3 | Code of Conduct | — | — | 42 (PDF wrapper) | STP-only | **Asymmetry.** STP has 25-26 PDF; CLW has no equivalent page. |
| 4 | Records request (institutional) | 822 | — | — | superset | www version has BOTH campus emails + addresses. |
| 5 | Records request (CLW) | — | 674 | — | filtered subset of #4 | CLW version drops STP fields; same boilerplate. |
| 6 | Records request (STP) | — | — | 676 | filtered subset of #4 | STP version drops CLW fields; same boilerplate, slightly different intro wording ("in this case, St. Petersburg"). |
| 7 | Campus Information stub | — | 181 | 194 | different (per-campus address/phone only) | Pure contact-card stub; should be merged into campus home, not its own page. |
| 8 | Accreditation | — | 395 | 414 | near-identical (campus name + "Visit" wording) | Both have COE + Cognia full addresses + phones. Functionally one paragraph swapped per campus. |
| 9 | Catalog | — | 54 | 58 | PDF wrapper, near-identical structure | Each links a different per-campus 25-26 catalog PDF. Both PDFs current. |
| 10 | School Improvement Plan | — | 57 (SY 24-25) | 36 (SY 25-26) | different SY year | **CLW SIP one school year behind STP.** |
| 11 | Written Plans | — | 758 | 818 | near-identical body, different list ordering + truncation | STP list possibly includes "Transcript Plan" cut off in extract. CLW says "2023 Handbook"; STP omits year. |
| 12 | Safety & Security Data | — | 301 (6 reports thru 8/28/2025) | 125 (2 reports, latest 2023) | different completeness | **STP catastrophically out of date.** CLW current. |
| 13 | Financial Accountability | — | 577 | 580 | near-identical (HEERF list) | Same 7 HEERF reports both campuses; latest 3/31/2023 (>3 yrs stale on both). |
| 14 | Mission/Vision/Core Values | 671 | 711 | 711 | **byte-identical body** | 3 copies of the same content. Title prefix is the only difference. |
| 15 | A Career in a Year | 18 (PDF wrapper) | — | — | n/a | PDF revision 11-8-19. **6+ years stale.** |
| 16 | Programs Brochure (EN) | 21 (PDF wrapper) | — | — | n/a | 25-26 brochure, current. Marketing asset misfiled under About. |
| 17 | Programs Brochure (ES) | 34 (PDF wrapper) | — | — | n/a | Spanish version. Same IA mis-placement. Nested 4 levels deep. |
| 18 | PTC Annual Impact Report | 24 (PDF wrapper) | — | — | n/a | Single-page PDF. Destination ambiguous (resources vs. about Impact section). |
| 19 | PCS School Financial Reports | blocked | — | — | unknown | Blocked by Chrome MCP. Likely external link to district financials. Manual verification needed. |

---

## 2. Identical-content groups (consolidation candidates)

### Group A — Mission / Vision / Core Values trio (#14)

| File | Chars | Body |
|---|---|---|
| `www/mission-vision-core-values.md` | 671 | 7 core values, same 7 sentences |
| `clearwater/mission-vision-core-values-clw.md` | 711 | byte-identical body, "CLW" suffix in title only |
| `stpete/mission-vision-core-values-stp.md` | 711 | byte-identical body, "STP" suffix in title only |

**CONFIRMED byte-identical body.** The 40-char delta is the duplicated `H1 + H2` rendering on the campus pages (title appears twice in the campus extracts because the breadcrumb-style H1 includes the campus suffix). Consolidate to one canonical block on `about.html`; campus About pages either (a) link to it, or (b) include the same component. No campus deserves its own copy.

### Group B — Records Request trio (#4/5/6)

Template-with-campus-context pattern, NOT byte-identical.

| File | Has CLW address | Has STP address | Has CLW email | Has STP email | Older-records phone |
|---|---|---|---|---|---|
| www/records-request.md | yes | yes | canfieldj@pcsb.org | kilpatrickc@pcsb.org | 727-793-2701 |
| clearwater/records-request.md | yes | no | canfieldj@pcsb.org | no | 727-793-2701 |
| stpete/records-request.md | no | yes | no | kilpatrickc@pcsb.org | 727-793-2701 |

The www page is the **superset**. Both campus pages are filtered subsets with one minor wording variation on STP ("in this case, St. Petersburg"). Consolidation to a single `records-request.html` with both campus blocks is correct and already IA-decided.

### Group C — Per-campus compliance pairs (near-identical)

These are required to be campus-specific by COE per-campus disclosure, but content is essentially mirrored:

| Topic | CLW chars | STP chars | Real divergence |
|---|---|---|---|
| Accreditation | 395 | 414 | Campus name only; same COE + Cognia addresses/phones |
| Catalog | 54 | 58 | Different per-campus 25-26 PDF |
| Written Plans | 758 | 818 | List ordering + STP "Transcript Plan" truncation |
| Financial Accountability | 577 | 580 | Identical list of 7 HEERF reports |

These cannot be consolidated to one page (COE wants per-campus accreditation listed under each campus), but they CAN share a single template/component with campus tokens injected.

---

## 3. Campus asymmetries

| # | Asymmetry | Severity | Recommendation |
|---|---|---|---|
| 3 | Code of Conduct exists STP-only (PDF) | High | Either build CLW Code of Conduct PDF or document that PCSB district policy covers CLW; do not silently mirror STP wording. Logged for live-site owners. |
| 10 | CLW SIP is SY 2024-25; STP SIP is SY 2025-26 | Medium | CLW one year behind. Live-site follow-up: ask CLW administration for current SIP. Redesign uses verbatim until updated. |
| 12 | Safety & Security: CLW lists 6 annual reports (most recent 8/28/2025); STP lists 2 reports (most recent 2023) | **High** | STP appears 2+ annual reporting cycles behind. Compliance-grade gap. Logged for live-site follow-up. |
| 11 | Written Plans: CLW cites "2023 Handbook of Accreditation"; STP omits year and adds (truncated) "Transcript Plan" | Low | Re-fetch STP page to confirm full plan list. Reconcile handbook reference. |
| 7 | Campus Information stubs are pure contact cards (181 / 194 chars) | Low (IA) | Both campuses have a duplicate "About > Campus Information" entry that is just an address card; redundant with `clearwater.html` / `stpete.html` campus home contact blocks. Delete. |

The HEERF Financial Accountability is symmetric but stale on both sides (most recent 3/31/2023). Both should ask: did HEERF reporting end, or are newer reports missing from the live site?

---

## 4. PDF-wrapper inventory

| Topic | Campus | PDF revision | Status |
|---|---|---|---|
| Catalog (CLW) | clearwater | 1-29-26 (25-26 catalog) | Current |
| Catalog (STP) | stpete | 8-8-2025 (25-26 catalog) | Current |
| SIP (CLW) | clearwater | SY 2024-25 | **Stale (one SY behind)** |
| SIP (STP) | stpete | SY 2025-26 | Current |
| Code of Conduct (STP) | stpete | 25-26 | Current |
| A Career in a Year | www | 11-8-2019 | **STALE — 6+ years old** |
| Programs Brochure (EN) | www | 25-26 | Current |
| Programs Brochure (ES) | www | OWI-24-001 (24-25?) | Possibly stale; predecessor numbering vs. EN's 25-26 |
| Annual Impact Report | www | undated single-page | Unknown freshness — needs date verification |
| Safety & Security (CLW reports) | clearwater | latest 8/28/2025 | Current |
| Safety & Security (STP reports) | stpete | latest 2023 | **Stale by 2+ years** |
| Financial Accountability HEERF (both) | both | latest 3/31/2023 | **Stale by 3+ years; may be terminal program** |

**Net:** of 12 PDF-driven entries, 5 are stale or asymmetric. All 5 belong on the live-site follow-ups register, not in the redesign content.

---

## 5. IA red flags specific to sub-pages

1. **Marketing assets misfiled under About > Welcome.** Programs Brochure EN/ES, A Career in a Year, and Annual Impact Report are all marketing PDFs nested under `/about-us/welcome-to-ptc/`. Programs Brochure ES sits 4 levels deep (`/about-us/welcome-to-ptc/ptc-programs-brochure/ptc-programs-brochure-en-espanol`). These belong in `/programs` or `/resources`, not About.
2. **Campus Information stub pages duplicate campus home contact blocks.** Both `clearwater-about/ptc-clearwater-campus-information` and the STP equivalent are pure contact cards. The campus home page already shows the same address. Delete the stubs.
3. **M/V/CV is a 3-way byte-identical fork.** Three CMS pages, three URLs, one piece of content. This is the textbook Finalsite Composer trap (no shared content blocks across subsite scopes).
4. **Records-request lives in 3 places too.** Better than M/V/CV because campus pages are filtered subsets, but still 3 maintenance points for one workflow.
5. **STP Code of Conduct has no CLW twin.** Either CLW is missing required content or the redesign should explicitly point to the PCSB district code.
6. **Compliance (#1) and Sexual Misconduct (#2) live institutionally on www, not under each campus.** Correct, but the campus subsites currently have NO link to them from `/about-us/`. The redesign's `consumer-information.html` solves this.
7. **STP Safety & Security data is a compliance freshness problem, not just an IA problem.** Bringing it forward into the redesign verbatim would surface 2-year-old data. Redesign should still pull verbatim per binding rule, with the gap logged.

---

## Summary (top findings)

The about sub-pages cluster is overwhelmingly a distribution problem rather than a content problem. Five concrete findings stand out: (1) Mission/Vision/Core Values is genuinely byte-identical across all three sites and consolidates cleanly to one canonical block; (2) the records-request trio is a superset/subset pattern where the www version is the master and the campus pages are filtered views, so a single consolidated page with both campus contact blocks is correct; (3) the per-campus compliance pairs (Accreditation, Catalog, SIP, Written Plans, Safety, Financial) are near-identical templates that COE wants per-campus, so they share a component but stay split; (4) the STP Code of Conduct has no CLW counterpart, the STP Safety & Security log is 2+ years behind CLW's, and the Career-in-a-Year PDF is 6+ years old, all of which need live-site follow-ups rather than redesign workarounds; (5) the marketing PDFs (Programs Brochure EN/ES, Annual Impact Report) are misfiled under About > Welcome and should move to /programs or /resources, with the Spanish brochure currently buried 4 levels deep.
