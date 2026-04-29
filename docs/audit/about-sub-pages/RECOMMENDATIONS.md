# About Sub-Pages — RECOMMENDATIONS

**Cluster:** about-sub-pages
**Synthesized:** 2026-04-28
**Stage 4 output.** Combines OVERLAP-MATRIX, REDESIGN-COMPARISON, IA-RECOMMENDATION, VERIFICATION.
**Builds on:** about-cluster pilot (2026-04-25/26), which closed the hub pages.

---

## TL;DR

Stage 3 surfaced **1 sitewide critical fabrication, 4 high-priority redesign defects, and 4 deferred IA decisions resolved**. The cluster is overwhelmingly a distribution problem, not a content problem. Two-campus classification is mostly campus-specific (COE-required disclosures stay split per campus) with a few shared canonical blocks (M/V/CV, Annual Impact, Compliance Statements).

The biggest finding is the **`since 1961` vs `since 1962` sitewide drift** across 11+ files. The Verifier caught this because the Comparator timing missed it. Live verbatim says 1962. This needs a sweep before anything else.

After that, the Stage 6 (building) work is small: ~6 redesign edits + ~5 live-site follow-ups + 1 new section on consumer-information.html. Most of the inventory's 28 sub-pages are already correctly placed or already verbatim.

---

## Priority punch list

### CRITICAL — sitewide content fabrications (must fix before any cluster ships)

| # | Finding | Source | Action | Files | Two-campus class |
|---|---|---|---|---|---|
| **C1** | `since 1961` appears in 11+ files; live verbatim source says `Since 1962`. | Verifier finding #1; Comparator F1 (which only spotted 1 of the 11). | **Sweep-replace** `since 1961` → `since 1962` (case-insensitive) across the redesign. Confirm all 11+ instances are corrected before merging. | `index.html`, `admissions.html`, `clearwater.html`, `campus-maps.html`, `contact.html`, `careers.html`, `consumer-information.html`, `programs.html`, `schedule-clearwater.html`, `program-page-preview.html`, `docs/footer-embed.html` (also re-grep for any new instances) | shared (institutional founding year) |
| **C2** | `accessibility@pcsb.org (verify before publishing)` is a guessed contact published with the disclaimer **visible to end users**. | Verifier; Comparator F9. | Either (a) confirm the email with PCSB and remove the disclaimer, or (b) remove the email line entirely until verified. **Do not ship the parenthetical to users.** | `consumer-information.html` line 616 | shared |

### HIGH — redesign defects with compliance stakes

| # | Finding | Source | Action | Files | Two-campus class |
|---|---|---|---|---|---|
| **H1** | Campus accreditation cards omit the full COE + Cognia addresses and phones inline (M6 carryover from about-cluster pilot was supposed to apply this). Currently the cards link out only. | Verifier #1, #2; Comparator MI8, MI9. | Pull the verbatim address block from `about.html` lines 615-617 (COE) and 625-627 (Cognia) and embed inside each campus Accreditation card. | `clearwater-about.html`, `stpete-about.html` | campus-specific (COE wants per-campus disclosure) |
| **H2** | 5 fabricated additive claims need to be stripped or routed to follow-ups (per binding verbatim rule). | Comparator F3, F4, F5, F20, F21. | (F3) Remove `"one of the largest school districts in Florida"` from `about.html` line 633 PCSB card. (F4) Strip `"a national accrediting agency recognized by the U.S. Department of Education"` on `consumer-information.html` line 556. (F5) Strip `"covering K-12 and adult education"` on `consumer-information.html` line 562. (F20) Remove the additive `"Title IX of the Education Amendments of 1972…"` paragraph on `consumer-information.html` line 580 OR log as follow-up for live to add. (F21) Remove `"Reports may also be made to a campus administrator at the time of the incident."` on `consumer-information.html` line 581. | `about.html`, `consumer-information.html` | shared (institutional/legal language) |
| **H3** | Code of Conduct block does not exist on `consumer-information.html`. IA recommends a `campus-specific` block with two slots: STP PDF live, CLW slot stubbed pending CLW admin confirmation. | Verifier spot-check B; IA decision #3. | Build new section at `consumer-information.html` (alongside Financial Reports anchor). STP slot links to `STP_PTC_Code_of_Conduct_25-26.pdf` (URL in inventory #3). CLW slot: `"Pending — Code of Conduct for Clearwater is being confirmed with campus administration. CLW students should refer to PCSB district policies in the meantime."` Add anchor to in-page TOC. | `consumer-information.html` | campus-specific |
| **H4** | The "Annual Security Report" / Clery section on `consumer-information.html` describes a Clery-style ASR. Live PTC does not currently publish one — only campus "Safety & Security Data" pages with PDFs. | Comparator F10. | Decision needed from Marianne: (a) rewrite the section to point to per-campus Safety & Security Data pages (matches live), or (b) leave as live-site follow-up to publish a real Clery ASR (PTC may already be required to as a Title IV institution). | `consumer-information.html` lines 665-676 | shared (compliance disclosure) |

### MEDIUM — content polish

| # | Finding | Source | Action | Files |
|---|---|---|---|---|
| **M1** | Cognia predecessor name on redesign reads `"Cognia (formerly AdvancED / SACS CASI)"`; live PTC source says `"COGNIA (formerly the Southern Association of Colleges...)"`. | Comparator F6 (REWORDED-DRIFT). | Pick one. Either match the live wording exactly, or log a live-site follow-up to update live to "AdvancED / SACS CASI." | `consumer-information.html`, `about.html` |
| **M2** | About.html non-discrimination section is missing the closing line `"Pinellas County Schools is an Equal Opportunity Employer."` — present in live source. | Comparator MI1. | Add the verbatim italicized line at the end of the about.html non-discrimination block (line 737-area). | `about.html` |
| **M3** | Unsourced Consumer Information sections (FERPA, Accessibility, Financial Aid, SAP, Clery, Drug & Alcohol, Copyright, Voter Reg, Constitution Day, Federal School Code, tuition rates) — F7 through F19 in Comparator. None are in About-cluster extracts. Likely belong to Tuition or Compliance cluster sources. | Comparator F7-F19. | Defer. Mark these sections as `NEEDS-VERIFIER` for the Compliance and Tuition cluster runs. Do NOT call them fabricated yet — most are plausibly real (FERPA boilerplate, HEOA copyright disclosure language). | `consumer-information.html` (multiple sections) |
| **M4** | District phone `727.588.6000` on consumer-information.html PCS card. Not in About-cluster extracts. | Comparator F22. | Defer to Verifier in Compliance cluster (or quick check against pcsb.org main contact page). Compliance Officer line 727-588-6285 is verified; the district main 727.588.6000 is not. | `consumer-information.html` line 794 |

### LOW — verification carry-over

| # | Finding | Source | Action |
|---|---|---|---|
| **L1** | STP Written Plans extract truncated at "Tran[truncated — likely 'Transcript Plan']". Live STP page may have an 11th plan the redesign omits. | Comparator MI6. | Re-fetch live STP Written Plans page; if 11th plan exists, add to STP card. Drift-check task can resolve. |
| **L2** | FDLE hotline full wording — extract truncated at "1-888-FL-P[truncated]". Redesign uses "1-888-FL-PREDATOR" — needs confirmation against fresh fetch. | Comparator MI3, V20. | Re-fetch live Sexual Misconduct/Predators page to confirm. |
| **L3** | About.html "Our Story" cut the live line about Industry Services / continuing education. Acceptable as marketing-page abbreviation, but worth surfacing Industry Services elsewhere if it's still operating. | Comparator V41. | Optional: log as a follow-up to confirm Industry Services is surfaced on programs.html or workforce page. |

---

## IA decisions accepted (no further work)

All 3 open IA questions from the about-cluster pilot resolved in Stage 3:

1. **Annual Impact Report → `resources.html`** (already there). Live page is a 24-character PDF wrapper; building an "Impact" section on about.html would require inventing prose. Two-campus class: shared.
2. **PCS School Financial Reports → `consumer-information.html § Financial Reports`** (already there). Thin wrapper to PCSB district reports; a dedicated `/fiscal-transparency` page would imply institutional reporting PTC doesn't actually publish. Two-campus class: shared.
3. **Code of Conduct → `consumer-information.html` block, campus-specific** (see H3 above for the build).

Plus an IA call beyond the three required:
4. **A Career in a Year stays standalone at `a-career-in-a-year.html`**, not folded into programs.html. Distinct prospective-student funnel role; the 2019 PDF is a live-site follow-up, not an IA issue. Two-campus class: shared.

The 25 other destination decisions from the about-cluster pilot validated clean.

**Sitemap delta:** None. Only addition is a new in-page anchor on consumer-information.html for Code of Conduct. No new top-level pages.

---

## Live-site follow-ups (route to PTC owners, not redesign)

These belong in `docs/audit/follow-ups.md`. They are NOT redesign defects; the redesign uses live verbatim per the binding rule.

| Topic | Live-site issue | Owner |
|---|---|---|
| CLW Code of Conduct | Either CLW publishes a campus-specific Code of Conduct PDF, or PCSB district policy is confirmed as the substitute and the redesign links to that. **Required before ship.** Currently the CLW slot on consumer-information.html will stub as "pending." | CLW campus admin |
| CLW SIP refresh | Current live: SY 2024-25. STP is on SY 2025-26. CLW one school year behind. | CLW campus admin |
| STP Safety & Security data refresh | Current live: 2 reports, latest 2023. CLW has 6 reports, latest 8/28/2025. STP is 2+ annual cycles behind. **Compliance-grade gap.** | STP campus admin |
| HEERF post-pandemic | Both campuses' Financial Accountability stops at 3/31/2023 (3+ years stale). Either HEERF reporting genuinely ended (federal program closed) or newer reports are missing. | Both campuses + business office |
| A Career in a Year PDF | Current PDF revision date 11-8-2019. 6+ years old. | Marketing |
| Cognia predecessor naming | Live says "Southern Association of Colleges"; industry-correct is "AdvancED / SACS CASI". Optional refresh. | Web/PCSB |

---

## Migration order for Stage 6 (building)

The about-cluster pilot's Phase 1 is done. About sub-pages adds these in roughly this order:

**Phase 2A — sitewide hygiene (do before anything else):**
1. **C1** sweep `since 1961` → `since 1962` across the 11+ files. (~10 min, mechanical, must verify with grep after.)
2. **C2** resolve `accessibility@pcsb.org` disclaimer (remove or confirm). (~5 min.)

**Phase 2B — about sub-pages targeted edits:**
3. **H1** add inline COE + Cognia address blocks to clearwater-about.html and stpete-about.html accreditation cards. (~15 min.)
4. **H2** strip 5 fabricated additive claims (F3, F4, F5, F20, F21). (~10 min.)
5. **H3** build Code of Conduct block on consumer-information.html with STP PDF + CLW pending stub. (~20 min including TOC update.)
6. **M1** Cognia predecessor naming reconciliation. (~5 min decision + edit.)
7. **M2** add Equal Opportunity Employer closer to about.html non-discrimination section. (~3 min.)

**Phase 2C — decision needed:**
8. **H4** Marianne decides: rewrite the Clery ASR section to match live, or log as live-site follow-up. (Decision blocking, ~5 min once decided.)

**Phase 3 — verification:**
9. Re-run audit-verifier against the now-existing Comparator output (recommended before flipping cluster status to `verified`).
10. Re-comparator-check that all C/H/M items applied cleanly.

**Phase 4 — owned externally (out of scope for this cluster):**
11. CLW admin produces or confirms Code of Conduct path → swap stub for real link.
12. Other follow-ups in the table above route to their respective owners.

**Stop-the-line items before this cluster can flip to `verified`:**
- C1, C2 must be done.
- H1, H2, H3 must be done.
- H4 must have a decision (action can be deferred if rerouted to follow-ups).

CLW Code of Conduct pending stub is acceptable to ship — the stub is honest about the gap.

---

## See also

- `OVERLAP-MATRIX.md` — sub-page topic comparison and consolidation candidates
- `REDESIGN-COMPARISON.md` — full claim-by-claim ledger
- `IA-RECOMMENDATION.md` — destination decisions and reasoning
- `VERIFICATION.md` — independent re-check (caught the sitewide 1961/1962 issue the Comparator missed)
- `inventory.md` — work queue keyed by destination
- `docs/audit/follow-ups.md` — central register of live-site issues
- `docs/audit/about-cluster/RECOMMENDATIONS.md` — pilot punch list this builds on
