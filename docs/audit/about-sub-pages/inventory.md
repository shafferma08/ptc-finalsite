# About Sub-Pages Cluster — Live Site Inventory

**Generated:** 2026-04-28
**Source hubs:** 3 (www, clearwater, stpete) — same hubs as About cluster
**Total sub-page URLs:** 28 (excluding the 3 hub pages already verified in About cluster)

## Provenance — extraction is already done

The About cluster pilot (2026-04-25) extracted all 32 URLs in a single pass, hubs and sub-pages together. Rather than re-scrape, this cluster reuses those existing markdown extracts at:

```
docs/audit/about-cluster/extracted/{www,clearwater,stpete}/<slug>.md
```

This inventory is the **work queue keyed by destination**: it pairs each live sub-page with the redesign target file it needs to land in, marks the IA decision the about-cluster recommender already made, and flags rows that still need Stage 3 (analyzing) attention vs. rows ready for Stage 6 (building).

If a row says **"IA-decided"** it means the about-cluster IA recommendation already named the destination — Stage 3 just needs to confirm the destination file exists and produce a comparison against the live extract. If a row says **"needs IA decision"** it means the about-cluster recommendation was vague or the destination doesn't exist yet.

---

## Sub-page work queue

Sorted by redesign destination so building work groups naturally.

### Destination: `consumer-information.html` (Compliance / Title IX / Safety hub)

| # | Live topic | Live URL | Extract | Campus class | IA decision | Status |
|---|---|---|---|---|---|---|
| 1 | PCS/CTAE Compliance Statements | https://www.myptc.edu/about-us/welcome-to-ptc/pinellas-county-schoolsctae-compliance-statements | about-cluster/extracted/www/compliance-statements.md | shared | Move to /consumer-information § Non-discrimination | IA-decided |
| 2 | Sexual Misconduct \| Sexual Predators | https://www.myptc.edu/about-us/welcome-to-ptc/sexual-misconduct-sexual-predators | about-cluster/extracted/www/sexual-misconduct-predators.md | shared | Move to /consumer-information § Title IX & Safety | IA-decided |
| 3 | STP Code of Conduct | https://stpete.myptc.edu/school-information/about-us/ptc-st-petersburg-campus-code-of-conduct | about-cluster/extracted/stpete/code-of-conduct.md | asymmetric (STP-only on live, IA recommends adding CLW) | Move to /consumer-information; create CLW equivalent | IA-decided + asymmetry to resolve |

### Destination: `records-request.html` (consolidated)

| # | Live topic | Live URL | Extract | Campus class | IA decision | Status |
|---|---|---|---|---|---|---|
| 4 | Records request (www) | https://www.myptc.edu/about-us/welcome-to-ptc/how-to-request-your-student-records-from-ptc | about-cluster/extracted/www/records-request.md | campus-specific (different counselors per campus) | Single page with both campus contacts | IA-decided. Already partially built per about-cluster RECOMMENDATIONS M5 (canfieldj@pcsb.org for CLW, kilpatrickc@pcsb.org for STP). |
| 5 | Records request (CLW) | https://clearwater.myptc.edu/school-information/about-us/how-to-request-your-student-records-from-ptc-clearwater | about-cluster/extracted/clearwater/records-request.md | campus-specific | Same: consolidated to records-request.html with CLW context | IA-decided |
| 6 | Records request (STP) | https://stpete.myptc.edu/school-information/about-us/how-to-request-your-student-records-from-ptc-st-petersburg | about-cluster/extracted/stpete/records-request.md | campus-specific | Same: consolidated to records-request.html with STP context | IA-decided |

### Destination: `clearwater-about.html` (campus compliance section)

| # | Live topic | Live URL | Extract | Campus class | IA decision | Status |
|---|---|---|---|---|---|---|
| 7 | CLW Campus Information | https://clearwater.myptc.edu/school-information/about-us/ptc-clearwater-campus-information | about-cluster/extracted/clearwater/ptc-clearwater-campus-information.md | campus-specific | Already on `clearwater.html` campus page; delete duplicate "About > Campus Info" entry | IA-decided. Verify campus page covers same content. |
| 8 | CLW Accreditation | https://clearwater.myptc.edu/school-information/about-us/pinellas-technical-college-clearwater-campus-accreditation | about-cluster/extracted/clearwater/accreditation.md | campus-specific (per-campus COE disclosure) | Stay on campus site → land in `clearwater-about.html` Accreditation card | IA-decided. About-cluster RECOMMENDATIONS M6 said full COE + Cognia addresses + phones must appear. |
| 9 | CLW Catalog | https://clearwater.myptc.edu/school-information/about-us/pinellas-technical-college-clearwater-campus-catalog | about-cluster/extracted/clearwater/catalog.md | campus-specific (per-campus COE PDF) | Stay on campus site → `clearwater-about.html` Catalog card | IA-decided |
| 10 | CLW School Improvement Plan SY 2024-25 | https://clearwater.myptc.edu/school-information/about-us/school-improvement-plan-sy-2024-25 | about-cluster/extracted/clearwater/school-improvement-plan-2024-25.md | campus-specific (COE-required) | Stay on campus site → `clearwater-about.html` SIP card. **Live is stale (SY 2024-25 vs. STP's 2025-26).** | IA-decided + live-site follow-up open. Per Apr-25 binding rule, redesign uses live verbatim. |
| 11 | CLW Written Plans | https://clearwater.myptc.edu/school-information/about-us/pinellas-technical-college-clearwater-campus-written-plans | about-cluster/extracted/clearwater/written-plans.md | campus-specific (COE-required) | Stay on campus site → `clearwater-about.html` Written Plans card | IA-decided |
| 12 | CLW Safety & Security Data | https://clearwater.myptc.edu/school-information/about-us/clearwater-campus-safety-security-data | about-cluster/extracted/clearwater/safety-security-data.md | campus-specific (COE-required) | Stay on campus site → `clearwater-about.html` Safety card | IA-decided |
| 13 | CLW Financial Accountability | https://clearwater.myptc.edu/school-information/about-us/ptc-clearwater-financial-accountability | about-cluster/extracted/clearwater/financial-accountability.md | campus-specific | Stay on campus site → `clearwater-about.html` Financial card. **HEERF data ends 3/31/2023, ~3 years stale.** | IA-decided + live-site follow-up open. |

### Destination: `stpete-about.html` (campus compliance section)

| # | Live topic | Live URL | Extract | Campus class | IA decision | Status |
|---|---|---|---|---|---|---|
| 14 | STP Campus Information | https://stpete.myptc.edu/school-information/about-us/ptc-st-petersburg-campus-information | about-cluster/extracted/stpete/ptc-st-petersburg-campus-information.md | campus-specific | Already on `stpete.html` campus page; delete duplicate | IA-decided. Verify campus page covers same content. |
| 15 | STP Accreditation | https://stpete.myptc.edu/school-information/about-us/pinellas-technical-college-st-petersburg-campus-accreditation | about-cluster/extracted/stpete/accreditation.md | campus-specific | Stay on campus site → `stpete-about.html` Accreditation card | IA-decided |
| 16 | STP Catalog | https://stpete.myptc.edu/school-information/about-us/pinellas-technical-college-st-petersburg-campus-catalog | about-cluster/extracted/stpete/catalog.md | campus-specific | Stay on campus site → `stpete-about.html` Catalog card | IA-decided |
| 17 | STP School Improvement Plan SY 2025-26 | https://stpete.myptc.edu/school-information/about-us/school-improvement-plan-sy-2025-26 | about-cluster/extracted/stpete/school-improvement-plan-2025-26.md | campus-specific (COE-required) | Stay on campus site → `stpete-about.html` SIP card. **Most current of the two.** | IA-decided |
| 18 | STP Written Plans | https://stpete.myptc.edu/school-information/about-us/pinellas-technical-college-st-petersburg-campus-written-plans | about-cluster/extracted/stpete/written-plans.md | campus-specific (COE-required) | Stay on campus site → `stpete-about.html` Written Plans card | IA-decided |
| 19 | STP Safety & Security Data | https://stpete.myptc.edu/school-information/about-us/st-petersburg-campus-safety-security-data | about-cluster/extracted/stpete/safety-security-data.md | campus-specific (COE-required) | Stay on campus site → `stpete-about.html` Safety card. **Last update 2023 — needs annual updates.** | IA-decided + live-site follow-up open. |
| 20 | STP Financial Accountability | https://stpete.myptc.edu/school-information/about-us/ptc-stpetersburg-financial-accountability | about-cluster/extracted/stpete/financial-accountability.md | campus-specific | Stay on campus site → `stpete-about.html` Financial card. **HEERF data ends 3/31/2023.** | IA-decided + live-site follow-up open. |

### Destination: `about.html` (main about — verified in hubs cluster, but content additions remain)

| # | Live topic | Live URL | Extract | Campus class | IA decision | Status |
|---|---|---|---|---|---|---|
| 21 | Welcome to PTC | https://www.myptc.edu/about-us/welcome-to-ptc | about-cluster/extracted/www/welcome-to-ptc.md | shared | Already merged into about.html "Our Story" section | IA-decided. About-cluster fabrications punch list (1962 founding, 250+ partners, etc.) was applied Apr 25. |
| 22 | Get to Know PTC | https://www.myptc.edu/about-us/welcome-to-ptc/get-to-know-ptc | about-cluster/extracted/www/get-to-know-ptc.md | shared | Merged into about.html "Our Story" (verbatim duplicate of #21) | IA-decided |
| 23 | Mission/Vision/Core Values (www) | https://www.myptc.edu/about-us/welcome-to-ptc/mission-vision-core-values | about-cluster/extracted/www/mission-vision-core-values.md | shared (3 byte-identical copies) | Single canonical block on about.html | IA-decided. About-cluster RECOMMENDATIONS M1+M2 said Vision and 7 Core Values still missing — needs verification on current about.html. |
| 24 | Mission/Vision/Core Values (CLW) | https://clearwater.myptc.edu/school-information/about-us/mission-vision-core-values-clw | about-cluster/extracted/clearwater/mission-vision-core-values-clw.md | shared (duplicate of #23) | Campus pages link to about.html canonical block | IA-decided |
| 25 | Mission/Vision/Core Values (STP) | https://stpete.myptc.edu/school-information/about-us/mission-vision-core-values-stp | about-cluster/extracted/stpete/mission-vision-core-values-stp.md | shared (duplicate of #23) | Campus pages link to about.html canonical block | IA-decided |

### Destination: `programs.html` or new `a-career-in-a-year.html` (existing)

| # | Live topic | Live URL | Extract | Campus class | IA decision | Status |
|---|---|---|---|---|---|---|
| 26 | A Career in a Year | https://www.myptc.edu/about-us/welcome-to-ptc/a-career-in-a-year | about-cluster/extracted/www/a-career-in-a-year.md | shared | Move to /programs landing page (it's program marketing). **Live PDF rev date is 11-8-19, 6+ years old.** | IA-decided + live-site follow-up open. Redesign already has a `a-career-in-a-year.html` page — need to confirm it matches live and decide whether to keep standalone or fold into programs.html. **Needs Stage 3 IA confirm.** |

### Destination: `resources.html` (existing) — Downloads / brochures / reports

| # | Live topic | Live URL | Extract | Campus class | IA decision | Status |
|---|---|---|---|---|---|---|
| 27 | Programs Brochure (English) | https://www.myptc.edu/about-us/welcome-to-ptc/ptc-programs-brochure | about-cluster/extracted/www/programs-brochure.md | shared (PDF wrapper) | Move from About to /resources or /downloads | IA-decided. **Resources.html exists** — confirm it has a Downloads section. |
| 28 | Programs Brochure (Spanish) | https://www.myptc.edu/about-us/welcome-to-ptc/ptc-programs-brochure/ptc-programs-brochure-en-espanol | about-cluster/extracted/www/programs-brochure-es.md | shared (PDF wrapper) | Move to /resources alongside English version | IA-decided |
| 29 | PTC Annual Impact Report | https://www.myptc.edu/about-us/welcome-to-ptc/ptc-annual-impact-report | about-cluster/extracted/www/annual-impact-report.md | shared (PDF wrapper) | Move to /resources OR new "Impact" section on about.html. **IA recommendation was ambiguous — needs Stage 3 decision.** | Needs IA decision (about vs. resources) |
| 30 | PCS School Financial Reports | https://www.myptc.edu/about-us/welcome-to-ptc/pinellas-county-schools-school-financial-reports | about-cluster/extracted/www/financial-reports.md | shared | Move to /resources/downloads or new /fiscal-transparency page. **IA recommendation was ambiguous.** | Needs IA decision (resources vs. dedicated transparency page) |

---

## Summary by status

- **IA-decided, ready for Stage 6 (building):** 24 sub-pages (#1-25 minus the 3 with live-site staleness flags + #27, #28)
- **IA-decided + live-site follow-up open** (build verbatim, log staleness): 5 sub-pages (#10, #12, #13, #19, #20, #26)
- **Needs Stage 3 IA decision:** 2 sub-pages (#29 Annual Impact Report destination, #30 Financial Reports destination)
- **Asymmetry to resolve:** 1 sub-page (#3 Code of Conduct — STP has, CLW doesn't)

---

## Pattern observations (post-extraction)

This cluster is mostly a **distribution problem, not a content problem.** The sub-pages already extracted cleanly during the about-cluster pilot. The work that remains is:

1. **Confirm destination files exist for every IA-decided sub-page.** Most do (`consumer-information.html`, `records-request.html`, `clearwater-about.html`, `stpete-about.html`, `resources.html`, `a-career-in-a-year.html`, `about.html` already in repo). One ambiguity: where does PCS Financial Reports go (resources vs. dedicated fiscal transparency page)?
2. **Verify each destination already contains the live verbatim content.** Some campus-about cards may exist as labels only without the COE-required addresses/phones. Stage 3 (Comparator) should re-check `clearwater-about.html` and `stpete-about.html` against the campus extracts.
3. **Decide on the 2 ambiguous destinations** (#29, #30).
4. **Resolve the Code of Conduct asymmetry** (#3) — either build a CLW Code of Conduct or document why CLW doesn't have one (possibly handled by parent PCSB district policy).
5. **Log all live-site follow-ups** in `docs/audit/follow-ups.md` (HEERF stale, STP Safety stale, CLW SIP outdated, A Career in a Year PDF dated 2019).

---

## Stage 2 (extracting) status

**SKIP** — extraction was completed during the About cluster pilot (2026-04-25). All 28 sub-page extracts live at `docs/audit/about-cluster/extracted/`. No re-scrape needed unless drift-check flags a change.

If Stage 3 subagents need anything more current, they pull from those files.

---

## Stage 3 plan

Dispatch 4 subagents in parallel against the existing extracts, scoped to the sub-page destinations:

- **Mapper** — re-confirm overlap matrix is correct; specifically validate the M/V/CV byte-identity claim and the records-request template-with-campus-context pattern.
- **Comparator** — re-check `consumer-information.html`, `records-request.html`, `clearwater-about.html`, `stpete-about.html`, `resources.html`, `a-career-in-a-year.html`, and the M/V/CV block on `about.html` against the relevant extracts. Flag missing live content per destination.
- **IA Recommender** — answer the 2 open IA questions (#29 Annual Impact Report, #30 Financial Reports) and propose a resolution for the Code of Conduct asymmetry (#3).
- **Verifier** — re-check Comparator's flagged misses + spot-check 3 random VERBATIM rows.

Stage 3 will produce the same 4 artifacts (`OVERLAP-MATRIX.md`, `REDESIGN-COMPARISON.md`, `IA-RECOMMENDATION.md`, `VERIFICATION.md`) inside `docs/audit/about-sub-pages/`.

---

**See also:**
- `docs/audit/about-cluster/inventory.md` — original 32-URL inventory
- `docs/audit/about-cluster/IA-RECOMMENDATION.md` — source of the destination decisions
- `docs/audit/about-cluster/RECOMMENDATIONS.md` — pilot punch list (4 fabrications + 6 missing items, mostly applied to about.html on Apr 25)
- `docs/audit/follow-ups.md` — live-site issues raised during this work
