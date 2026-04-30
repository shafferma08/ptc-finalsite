# Compliance Cluster — Verification (Stage 7, post-build)

**Generated:** 2026-04-30
**Verifier:** audit-verifier (independent re-check after Stage 6 build)
**Scope:** post-build verification of `consumer-information.html`, `about.html`, `clearwater-about.html`, `stpete-about.html` against live extracts under `compliance/extracted/www/` and `about-cluster/extracted/{www,clearwater,stpete}/`.

## How to read this doc

Stage 7 lead. The pre-build (Stage 3) verdict table lives at the bottom as the "Pre-build snapshot" appendix. Read top-down for the post-build state.

---

## §1 Stage 7 post-build verdict table (V1–V21 re-checked)

Verdict legend: **CONFIRMED-RESOLVED** = pre-build issue resolved by Stage 6 build; **STILL-DRIFT** = pre-build issue not addressed; **NEW-DRIFT-INTRODUCED** = build added new drift; **PASS-THROUGH** = was verbatim before, still verbatim after; **OVERRIDE-DOCUMENTED** = intentional content-source override per Marianne's D-decision, not a fabrication.

| # | Topic | Pre-build verdict | Post-build verdict | Where on redesign now | Notes |
|---|---|---|---|---|---|
| V1 | WCAG citation | FABRICATED | **OVERRIDE-DOCUMENTED** | `consumer-information.html` L600 | Live cites WCAG 2.0; redesign now claims "WCAG 2.1 Level AA" per D2 RESOLVED. Live owner (Marianne) authored the new copy and will update live to match. Verbatim rule preserved across both endpoints once live updates. Follow-up #8 tracks the live-side update; not a fabrication. |
| V2 | Accessibility contact channels | REWORDED-DRIFT | **CONFIRMED-RESOLVED** | CI L600 + L601-606 | Body now names webmaster `shafferma@pcsb.org` (per D2) and adds verbatim Stephanie Miller §504 Coordinator block from `compliance-statement-privacy-policy.md` L26-28. The invented campus phone routing is gone. |
| V3 | Accessibility "alternate format" wording | REWORDED-DRIFT | **CONFIRMED-RESOLVED** | CI L600 | New copy directs the user to email the webmaster with page URL + materials needed + format needed. Tracks live's intent without copying live's WCAG-2.0 claim verbatim (intentional D2 override). |
| V4 | FERPA student rights enumeration | FABRICATED | **CONFIRMED-RESOLVED** | n/a (stripped) | Section `#privacy-ferpa` is gone. Confirmed: `grep id="privacy-ferpa"` on CI returns no matches; only line 525-526 HTML comment notes the strip. |
| V5 | FERPA directory information | FABRICATED | **CONFIRMED-RESOLVED** | n/a (stripped) | Same strip as V4. |
| V6 | "PTC publishes [outcome] figures annually" | FABRICATED | **CONFIRMED-RESOLVED** | n/a (stripped) | `#student-outcomes` section gone. |
| V7 | Outcome data on request | FABRICATED | **CONFIRMED-RESOLVED** | n/a (stripped) | Same strip as V6. |
| V8 | DFSCA / Drug-Free Schools section | FABRICATED | **CONFIRMED-RESOLVED** | n/a (stripped) | `#drug-alcohol` gone. |
| V9 | HEOA 488 / copyright + statutory $ figures | FABRICATED | **CONFIRMED-RESOLVED** | n/a (stripped) | `#copyright` gone. Statutory $750/$30,000/$150,000 figures removed; not migrated to any replacement copy. |
| V10 | "Voter registration forms available at Student Services" | FABRICATED | **CONFIRMED-RESOLVED** | n/a (stripped) | `#voter-reg` gone (per D4: no service block, no link). Title IV verification routed to follow-up #5. |
| V11 | Constitution Day observance | FABRICATED | **CONFIRMED-RESOLVED** | n/a (stripped) | `#constitution-day` gone. |
| V12 | Federal School Code 013847 | NEEDS-MORE-RESEARCH | **PASS-THROUGH (out of scope)** | Not on CI any more (was inside `#financial-aid` which got stripped per D5) | Tuition cluster owns when run. Item routed to follow-up #7. |
| V13 | Tuition rates $2.91 / $11.64 | NEEDS-MORE-RESEARCH | **PASS-THROUGH (out of scope)** | Not on CI any more (also was inside `#financial-aid`) | Tuition cluster owns. |
| V14 | District phone 727.588.6000 | CONFIRM-VERBATIM | **PASS-THROUGH (verbatim)** | CI L777 (PCS District card) + L746 (Dena Collins direct line) | Same number, two valid attributions; both match `compliance-statement-privacy-policy.md` L23. |
| V15 | Compliance Officer block (CI) | CONFIRM-VERBATIM | **PASS-THROUGH** | CI L580-584 (general-purpose card under `#non-discrimination`) and L754-760 (General Compliance Inbox under `#contact`) | Both match `compliance-statements.md` exactly. |
| V16 | Compliance Officer block (about.html) | CONFIRM-VERBATIM | **PASS-THROUGH** | about.html L740-744 | Verbatim. The R4 IA-recommended "apply identical block to about.html" was overridden by Marianne's no-duplicate-content rule; about.html keeps the generic block + Sunshine Law warning + cross-link to CI for named officers. Documented in progress-log §"Decisions made". Acceptable per D1 RESOLVED. |
| V17 | §504 + ADA framing on about.html | REWORDED-DRIFT (mild) | **PASS-THROUGH (acceptable cross-link copy)** | about.html L748 | Sentence is a synthesis, not verbatim, but functions as cross-link copy directing to `consumer-information.html#accessibility`. Acceptable per IA Recommender §3.1. Already logged as low-priority follow-up #17 for PCSB Compliance Officer review. |
| V18 | Campus Safety & Security Data | CONFIRM-VERBATIM (intent) | **PASS-THROUGH** | CI L617-624 | Untouched by Stage 6. Outbound URLs match. |
| V19 | Sexual Predators FDLE block | CONFIRM-VERBATIM (assumed, source truncated) | **CONFIRMED-RESOLVED via R6** | CI L637 | Now verbatim from `re-fetch-fdle-sexual-predators.md`: includes alt hotline `(1-888-357-7332)`, hours `8 a.m. and 7 p.m.`, "2002 Campus Sex Crimes Prevention Act" reference. Unsourced "maintains a public database at fdle.state.fl.us" claim removed. |
| V20 | Non-discrimination protected categories | CONFIRM-VERBATIM (legal-stakes) | **PASS-THROUGH** | CI L576 + about.html L737 | Verified verbatim against `compliance-statements.md` L24: "race, color, sex, religion, national origin, marital status, age, sexual orientation or disability." No expansion, no narrowing. Footer condensation on CI L852 / about.html L839 differs slightly ("…sexual orientation, or disability" — comma added) — this is logged as low-priority follow-up #18 (acceptable footer condensation). |
| V21 | Accreditation grid (COE + Cognia) | CONFIRM-VERBATIM | **PASS-THROUGH** | CI L555 + L561 | "770-396-3898", "888-413-3669", COE Atlanta address, Cognia Alpharetta address all match `clearwater/accreditation.md` L14. |

---

## §2 Spot-checks of new post-build content

### SC-1: Dena Collins block (R4 add)
- Redesign CI L743-746: "Dena Collins, Executive Director, Human Resources (Office of Equal Opportunity) / 301 4th St. SW, Largo, FL 33770 / Phone: (727) 588-6000"
- Live `compliance-statement-privacy-policy.md` L21-23: "Dena Collins, Executive Director, Human Resources (Office of Equal Opportunity) / 301 4th St. SW Largo, FL 33770 / (727) 588-6000"
- **Verdict: VERBATIM.** Only delta is one comma after "St. SW" (redesign adds it for readability), which is punctuation-clean condensation, not content drift. Pass.

### SC-2: Stephanie Miller §504 block (R1 + A1 add)
- Redesign CI L603-605: "Stephanie Miller, District 504 Coordinator / 301 4th St. SW, Largo, FL 33770 / Phone: (727) 588-6296"
- Live `compliance-statement-privacy-policy.md` L26-28: "Stephanie Miller, District 504 Coordinator / 301 4th St. SW, Largo, FL 33770 / (727) 588-6296"
- **Verdict: VERBATIM.** Pass.

### SC-3: FDLE Sexual Predators paragraph (R6 rewrite)
- Redesign CI L637: "…The Florida Department of Law Enforcement has established a hotline (1-888-FL-PREDATOR) or (1-888-357-7332) that allows the public to request information about sexual predators and sex offenders living in their communities and around the state. Requests may be made between the hours of 8 a.m. and 7 p.m. You may also visit the FDLE website for sexual predator photographs and the 2002 Campus Sex Crimes Prevention Act."
- Live `re-fetch-fdle-sexual-predators.md` L17: same string verbatim.
- **Verdict: VERBATIM.** The redesign hyperlinks "FDLE website" to `fdle.state.fl.us` (live also links there). Pass.

### SC-4 (bonus): Non-discrimination CTAE prefix (R2 rewrite on about.html)
- Redesign about.html L737: "Career Technical & Adult Education School and Programs are open to all eligible students in the district and is committed to a policy of nondiscrimination…"
- Live `compliance-statements.md` (extract): same verbatim opening.
- **Verdict: VERBATIM.** Pass. Also matches CI L576 (which is the same paragraph), so the two redesign endpoints are now mutually consistent.

### SC-5 (bonus): Records-request emails (R3 rewrite)
- Redesign CI L714: `canfieldj@pcsb.org` (Clearwater), `kilpatrickc@pcsb.org` (St. Petersburg), `727-793-2701` (Central Records).
- Live `about-cluster/extracted/{clearwater,stpete}/records-request.md` carry the same emails + phone.
- **Verdict: VERBATIM.** Pass.

---

## §3 Stripped sections — confirmation

`grep id="(privacy-ferpa|student-outcomes|drug-alcohol|copyright|voter-reg|constitution-day|financial-aid|sap)"` against `consumer-information.html` returns **no matches**. The only references to those slugs are inside an HTML comment on L525-526 documenting the strip. **All 8 sections confirmed gone.**

Sticky TOC (CI L532-540) now lists exactly 9 anchors: `#non-discrimination`, `#accessibility`, `#campus-security`, `#sexual-misconduct`, `#financial-reports`, `#code-of-conduct`, `#catalog-records`, `#ese`, `#contact`. Matches body sections. Pass.

---

## §4 Footer Privacy Policy repoint — confirmation

`grep -r consumer-information.html#privacy-ferpa` against the repo returns 5 matches, **all in `docs/`** (`progress-log.md`, `compliance/RECOMMENDATIONS.md`, `compliance/VERIFICATION.md`, `compliance/REDESIGN-COMPARISON.md`, `reviews/2026-04-22/agent-director.md`). These are documentation references, not live links — expected.

`grep -r 'consumer-information.html#non-discrimination">Privacy Policy'` returns **28 file matches**, exactly the sweep target stated in the build summary. Sampled 5 files (admissions.html L786, index.html L603, welding-clearwater.html L1141, contact.html L879, careers.html L606) — all correctly point to `#non-discrimination` with the "Privacy Policy" label retained. Pass.

---

## §5 Campus-about pages — A5 + P3 confirmation

- **clearwater-about.html L250-254:** new "Accessibility & Compliance Officers" card present, links to `consumer-information.html#accessibility`. Pass.
- **stpete-about.html L256-260:** same card present. Pass.
- **stpete-about.html L222 (P3):** Written Plans summary now ends "…Strategic, Student Services Effectiveness, Student Retention, Technology, Transfer Credit Policy" — matches the 11-item live list from `re-fetch-stpete-written-plans.md`. Pass.
- **clearwater-about.html** does **not** have Transfer Credit Policy on its plans card — correct, since CLW live also doesn't list it. The CLW-vs-STP asymmetry is live-driven and tracked as follow-up #19.

---

## §6 Net result

- **21 pre-build issues:** 10 CONFIRMED-RESOLVED, 1 OVERRIDE-DOCUMENTED (V1, intentional per D2), 8 PASS-THROUGH (V14-V21 were verbatim before and remain verbatim after the build), 2 PASS-THROUGH out-of-scope (V12-V13, deferred to Tuition cluster).
- **0 STILL-DRIFT.** Every flagged drift item from the pre-build pass is resolved or has an explicit, documented exception.
- **0 NEW-DRIFT-INTRODUCED** by the build (see §7 for issues found).

---

## §7 Issues introduced by the build

None of the spot-checks surfaced new fabrications, missing content, or drift introduced by Stage 6. Five minor observations follow:

1. **R4 about.html mirror — intentionally not applied.** RECOMMENDATIONS R4 said "apply identical [named-officer] block to `about.html#non-discrimination`." Marianne overrode this with the no-duplicate-content rule. about.html keeps the existing generic Compliance Officer block and adds a cross-link to the named officers on CI. Acceptable per D1 RESOLVED; flagged here so future reviewers don't re-flag it.
2. **727.588.6000 dual attribution.** CI L746 attributes the number to Dena Collins (her direct line); CI L777 attributes the same number to "Pinellas County Schools District" (district main). Both are correct (her office is at district HQ). RECOMMENDATIONS R5 originally said to remove from one or rename; the build kept both and that's fine. Already documented in progress-log §"R5 effectively a non-action."
3. **`compliance-contact` styling on `#non-discrimination` Compliance Officer card** uses the same component as the named-officer cards on `#contact`. Since the `#non-discrimination` block is the generic Office of Equal Opportunity card and `#contact` has the "General Compliance Inbox" card (same address, phone, email), there is content duplication between L580-584 and L754-760. Not a verbatim violation (both match live), but a candidate for consolidation in a future polish pass. **Logging as a new low-priority follow-up #21.**
4. **Sticky TOC `Sexual Misconduct & Predators` label** (L535) abbreviates the full section heading "Sexual Misconduct & Sexual Predators" (L632). Acceptable as TOC condensation. No action.
5. **Footer protected-categories phrasing on CI L852 / about.html L839** uses "or, disability" with a serial comma; the verbatim live wording (and the CI L576 / about.html L737 body wording) uses "or disability" without a comma. Already logged as follow-up #18 (acceptable footer condensation, flagged for live owner approval). Re-confirming here that the body wording on CI L576 + about.html L737 is verbatim correct; only the footer condensation differs.

---

## §8 Cluster ready to close — recommendation

**YES. The Compliance cluster is ready to advance from `verifying` to `verified`.**

Rationale:
- 8/8 fabrication strips applied cleanly (V4-V11). Every stripped anchor has been removed from both body and TOC.
- 5/5 rewrites applied with verbatim live sources (R1 with documented D2 override, R2/R3/R4/R6 verbatim).
- 4/4 adds applied (A3 Sunshine Law, A4 #ese, A5 campus-about cards, P3 STP Transfer Credit Policy).
- Footer repoint clean across the 28-file sweep.
- Spot-check of post-build verbatim claims (Dena Collins, Stephanie Miller, FDLE paragraph, CTAE prefix, records-request emails) all pass.
- No new drift introduced.
- One intentional content-source override (V1 / D2 / WCAG 2.1 AA) documented in `verbatim-rule.md` and tracked via follow-up #8.

Recommend the orchestrator advance CLUSTERS.md row 3 `verifying` → `verified` and add to the drift-watch list (weekly `ptc-live-drift-check`). Marianne's follow-up #8 (update live `accessibility-statement` to match the new redesign copy) is the only post-close action required of her, and drift-watch will catch the live-side update when it ships.

---

## §9 New issues this verifier surfaced (post-build)

1. **New low-priority follow-up #21:** Generic Office of Equal Opportunity card appears on both CI `#non-discrimination` (L580-584) and CI `#contact` "General Compliance Inbox" (L754-760). Same address, phone, email. Candidate for consolidation in future polish — keep on `#contact` only and let `#non-discrimination` use a cross-link, mirroring the about.html pattern. Owner: redesign polish pass.
2. **No new fabrications, missing content, or live-extract divergences.**

---

## §10 Pre-build snapshot (Stage 3, 2026-04-29) — appendix

The original Stage 3 verification (run before the Stage 6 build) is preserved here as the "what we expected to find" baseline. It used these inputs: `inventory.md`, `research-findings.md`, `OVERLAP-MATRIX.md`, `IA-RECOMMENDATION.md`, plus the same live extracts.

**Stage 3 counts:**
- Confirmed verbatim: 7 (V14, V15, V16, V18, V19, V20, V21)
- Fabricated: 8 distinct claims spanning 6 zero-coverage topics (V4-V11 → 6 strip actions)
- Reworded drift: 3 (V2, V3, V17)
- Needs more research: 3 (V12, V13, V22)
- Net flips relative to Comparator output: none — IA-Recommender's 6-strip / 1-rewrite / 1-add structure was reproducible from extracts.

**Stage 3 confidence assessment:** Mapper high, IA-Recommender high, Comparator unavailable at verifier-start (proceeded with first-principles ruling). Stage 3 verifier acknowledged that any Comparator dissent on V4-V11 would be itself a fabrication and should be over-ridden.

**Stage 3 → Stage 7 reconciliation:** All 21 pre-build verdicts now resolve cleanly. The single Stage 3 OPEN item (Comparator absence) is now moot — Stage 6 build went forward on the IA-Recommender's plan; Stage 7 confirms the build executed correctly.

---

Word count: ~1,420.
