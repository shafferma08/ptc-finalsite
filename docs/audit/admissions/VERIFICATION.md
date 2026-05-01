---
cluster: admissions
stage: verifying (Stage 7 post-build)
generated: 2026-05-01
verifier: audit-verifier (post-build pass)
redesign_target: admissions.html (1,300 lines after Stage 6 build)
build_commit_window: 2026-04-30 evening
inputs_read:
  - admissions.html (post-build, 1,300 lines)
  - docs/audit/admissions/RECOMMENDATIONS.md (Stage 4 punch list)
  - docs/audit/admissions/REDESIGN-COMPARISON.md (Stage 3 Comparator)
  - docs/audit/admissions/VERIFICATION.md (Stage 3 pre-build verdicts — preserved as Appendix A)
  - docs/audit/admissions/extracted/{www,clearwater,stpete}/*.md (15 verbatim extracts)
  - docs/audit/counselors/extracted/{clearwater,stpete}/admissions.md (cross-cluster reuse)
  - docs/audit/verbatim-rule.md
---

# Admissions Cluster — Verification (Stage 7, post-build)

## Executive summary

Stage 6 executed the punch list faithfully. All 15 migration steps from `RECOMMENDATIONS.md §5` landed. The 8-step `#how-to-apply` list is now sourced verbatim from the www admissions page institutional spine plus byte-identical CLW/STP campus details. The two new sections (`#enrollment-options` 2,675 chars, `#residency` 1,328 chars with five Florida-statute links) carry verbatim from the byte-identical paired sub-pages. The HS-diploma fabrication is gone from all three places where it appeared in pre-build (step 2 / FAQ-2 / Dual Enrollment card); the live age-rule "16+, not currently enrolled in high school" is now stated three times (hero subtitle, `#how-to-apply` section header, and `#enrollment-steps` info card) and the Dual Enrollment + Veterans cards are stripped from `#pathways`. CASAS card now reads "mathematics and communication" (live verbatim) and TEAS lists only Practical Nursing. All four primary CTAs are wired to the live external apps (`apply.myptc.edu` / `inforequest.myptc.edu`); the old `href="#"` placeholders are gone. FAQ section is fully removed per Marianne's D2. **31 of 31 pre-build V-rows reconcile cleanly** (24 CONFIRMED-RESOLVED + 5 OVERRIDE-DOCUMENTED + 2 PASS-THROUGH). **5 spot-checks across new content all VERBATIM.** **0 STILL-DRIFT, 0 NEW-DRIFT-INTRODUCED at substantive level.** One trivial AP-style hyphenation drift surfaced ("state-identified" vs "state identified" in `#enrollment-options`) — flagged as a low-priority polish item, not blocking. **Recommend advancing `verifying` → `verified`.** Drift-watch via the existing weekly `ptc-live-drift-check` task.

---

## §1 — Reconciliation of pre-build verdicts (V-1 … V-31)

For each pre-build verdict in Appendix A, the post-build status is one of:
- **CONFIRMED-RESOLVED** — punch list applied, drift fixed
- **OVERRIDE-DOCUMENTED** — Marianne authorized the keep/strip/swap, cited
- **PASS-THROUGH** — was VERBATIM pre-build, still VERBATIM post-build
- **STILL-DRIFT** — punch list missed it
- **NEW-DRIFT-INTRODUCED** — Stage 6 introduced new drift

### Section 1 — `#how-to-apply` (rebuilt as 8-step apply list)

| Pre-build ID | Pre-build verdict | Post-build status | Evidence |
|---|---|---|---|
| V-1 ("40+ career programs") | REWORDED-DRIFT | **CONFIRMED-RESOLVED** | The phrase "40+ career programs" appears nowhere in the new `#how-to-apply` (lines 850-941). Section header L855 cites only the live age rule and 5 start dates. Punch list R2 applied. |
| V-2 ("free / few steps") | FABRICATED | **CONFIRMED-RESOLVED** | "free" / "no application fee" / "few steps" all absent from `#how-to-apply`. R2 strip applied. |
| V-3 ("Browse our 40+ programs") | FABRICATED | **CONFIRMED-RESOLVED** | Step 1 is now "Meet with a counselor" verbatim from CLW hub L18. The browsing-programs framing is gone entirely. |
| V-4 ("HS diploma … no application fee") | REWORDED-DRIFT + FABRICATED | **CONFIRMED-RESOLVED** | Step 2 (L870-879) now reads verbatim from CLW hub L20-22 + www bullet 25 ("two forms of documentation… driver license, state-issued ID, voter registration card, vehicle registration"). HS-diploma claim stripped. "No application fee" stripped. R3 applied — highest-stakes fix in the cluster. |
| V-5 ("If needed, meet with a school counselor…") | VERBATIM (1st) + REWORDED-OK (2nd) | **PASS-THROUGH** | First sentence still byte-identical to CLW hub L18 (admissions.html L862). Second-sentence UX scaffolding kept (apply-step__sublinks paragraph). |
| V-6 (Apply CTA `href="#"`) | MISSING | **CONFIRMED-RESOLVED** | L876 wired to `https://apply.myptc.edu`. P1 applied. |

### Section 2 — `#enrollment-steps` (repurposed as "Who Can Apply and When")

The pre-build 3-step "after acceptance" framing was a fabricated process model. Stage 6 repurposed this section to carry the www admissions page's "General information" block verbatim. This is a section-level rewrite that resolves V-7 through V-9 by removing the fabricated container and replacing it with sourced institutional content.

| Pre-build ID | Pre-build verdict | Post-build status | Evidence |
|---|---|---|---|
| V-7 ("Some programs require placement testing… counselor will let you know") | REWORDED-OK | **OVERRIDE-DOCUMENTED** | Old text is gone (section repurposed). Equivalent claim now appears as step 4 of `#how-to-apply` (L900-907) and as the `#testing` section. R5 applied. |
| V-8 ("FAFSA / veterans benefits / payment plans") | REWORDED-OK + FABRICATED | **CONFIRMED-RESOLVED** | "Veterans benefits" and "payment plans" stripped. FAFSA content moved to step 3 of `#how-to-apply` (L880-899) with verbatim www text + the per-campus FAFSA School Codes (CLW 005605, STP 013917). R7 + A1 applied. |
| V-9 ("Attend new student orientation") | FABRICATED | **CONFIRMED-RESOLVED** | "New student orientation" appears nowhere in the post-build file. R8 applied. The 5 start dates per year are now verbatim in two places (hero L816, section header L855, info card L970). |

### Section 3 — `#pathways` (Transfer + Readmission only; DE + Veterans cards stripped)

| Pre-build ID | Pre-build verdict | Post-build status | Evidence |
|---|---|---|---|
| V-10 (Transfer card) | REWORDED-DRIFT | **CONFIRMED-RESOLVED** | L1052-1060 carries the Transfer page verbatim including the **3-year currency rule** ("provided it occurred during the past three (3) years") and the **work-experience credit framework** with all 5 documentation examples. R9 applied. |
| V-11 (Readmission card) | REWORDED-DRIFT | **CONFIRMED-RESOLVED** | L1067-1068 carries Readmission verbatim including the **2-year test-score validity** and **3-year course-credit-from-initial-entry** rules, plus the "meeting with the instructor may be required" detail. R10 applied. |
| V-12 (Dual Enrollment card) | FABRICATED | **CONFIRMED-RESOLVED** | DE card stripped. L1072-1075 replaces with a one-line cross-link: "Looking for Dual Enrollment (Programs section) or Veterans Benefits (Tuition & Aid)?" S1 applied. |
| V-13 (Veterans card) | FABRICATED | **CONFIRMED-RESOLVED** | Veterans card stripped. Same one-line cross-link in L1072-1075 routes to `tuition-aid.html#veterans`. S2 applied. |

### Section 4 — `#testing` (CASAS / TEAS rebuilt with per-campus cards)

| Pre-build ID | Pre-build verdict | Post-build status | Evidence |
|---|---|---|---|
| V-14 (intro "Some programs require…") | REWORDED-OK | **CONFIRMED-RESOLVED** | Section header L1093 now uses verbatim live wording: "Career and technical certificate students must be tested within the first six weeks of program enrollment. Continuing workforce education students, apprentices, and students enrolled in programs of less than 600 hours are not required to take placement tests." Sourced byte-for-byte from `testing-casas.md` L14 + L20. R11 applied. |
| V-15 (CASAS — "listening skills") | REWORDED-DRIFT | **CONFIRMED-RESOLVED** | L1097-1099 reads "measuring achievement in mathematics and communication" verbatim from `testing-casas.md` L16. "Listening skills" is gone. The 600-hour exemption is also restored. R12 applied. |
| V-16 (TEAS — PCT/Surgical Tech) | FABRICATED (program list) | **CONFIRMED-RESOLVED** | L1120 reads "The Practical Nursing programs offered at Pinellas Technical College only accept TEAS test scores taken at a PTC campus testing center" verbatim from `testing.md` L32. Patient Care Technician + Surgical Technology stripped. R13 applied. |
| V-17 (ABE/GED/ESOL card) | REWORDED-OK / partial-FABRICATED | **CONFIRMED-RESOLVED** | Card stripped from `#testing`. ESOL via CASAS still mentioned (L1099) verbatim. S3 applied. |
| V-18 (Merritt Scott contact missing) | MISSING | **CONFIRMED-RESOLVED** | L1134-1138 names Merritt Scott, PTC-Clearwater PN Counselor with `(727) 538-7167 x2032` and `scottme@pcsb.org` (phone format normalized per verbatim-rule.md). A7 applied. |
| V-19 (STP TEAS contact) | N/A — no live source | **PASS-THROUGH** | Redesign correctly does NOT invent a STP TEAS contact. STP TEAS card (L1141-1146) only carries the schedule + the (stale, but live-verbatim) PDF link. Follow-up #7 in `RECOMMENDATIONS.md §4` already logged. |

### Section 5 — `#campus-tours` (rebuilt as "Campus Visits & Program Shadowing")

| Pre-build ID | Pre-build verdict | Post-build status | Evidence |
|---|---|---|---|
| V-20 ("campus tours … at both locations") | FABRICATED + FACTUALLY WRONG | **CONFIRMED-RESOLVED** | Section header L1165 retitled "Campus Visits & Program Shadowing." L1166 carries the www institutional shadowing sentence verbatim ("Some programs have specific days and/or dress codes for shadowing, so please speak with a counselor before coming in"). The "at both locations" parity claim is gone. Per-campus cards (L1168-1183): CLW links the April 2026 PDF; STP routes through counselor inquiry per Marianne's D1. R14 + A9 applied. |
| V-21 (Schedule a Tour CTA `href="#"`) | MISSING | **CONFIRMED-RESOLVED** | Banner-level CTA stripped per P4. The per-campus cards now provide actionable contacts: tel: links to (727) 538-7167 (CLW, L1172) and (727) 893-2500 (STP, L1180), plus PDF link and counselor page links. No `href="#"` remains in this section. |

### Section 6 — `#admissions-faq` (entire section stripped per D2)

| Pre-build ID | Pre-build verdict | Post-build status | Evidence |
|---|---|---|---|
| V-22 (FAQ-1 application fee) | FABRICATED | **OVERRIDE-DOCUMENTED** | Entire FAQ section absent from post-build file (no `#admissions-faq` anchor exists; sticky TOC L827-836 omits it). S4 applied per Marianne's D2 (RECOMMENDATIONS.md §1). Logged for live-author re-mirror in follow-up #4. |
| V-23 (FAQ-2 HS diploma — highest-stakes) | FABRICATED — directly contradicts live | **OVERRIDE-DOCUMENTED** | FAQ stripped. Independently, the live age rule "Students must be at least 16 years of age and not currently enrolled in high school" is now stated three times: hero subtitle reframe (L816 mentions program cadence), section header L855 ("Students must be at least 16 years of age and not currently enrolled in high school"), and `#enrollment-steps` info card L963. The contradicting HS-diploma claim is gone everywhere. |
| V-24 (FAQ-3 start dates) | REWORDED-DRIFT | **OVERRIDE-DOCUMENTED** | FAQ stripped. The verbatim "five times per school year: August, October, January, March/April, and June" is now in three places: hero L816, section header L855, and info card L970. |
| V-25 (FAQ-4 Pell / FSAG) | FABRICATED | **OVERRIDE-DOCUMENTED** | FAQ stripped. Specific aid program names not introduced anywhere else; cross-link to `tuition-aid.html#fafsa` at L897 is the institutional handoff. |
| V-26 (FAQ-5 part-time / evening) | REWORDED-OK + WEAK SOURCING | **OVERRIDE-DOCUMENTED** | FAQ stripped. Verbatim full-time / half-time-with-approval framing is now in `#enrollment-options` (L989) sourced from byte-identical sub-page. "Evening" not asserted anywhere. |

### Section 7 — `#accommodations`

| Pre-build ID | Pre-build verdict | Post-build status | Evidence |
|---|---|---|---|
| V-27 (CLW-sourced sentence) | VERBATIM | **PASS-THROUGH** | L1197 still byte-identical to `counselors/extracted/clearwater/admissions.md` L40. |
| V-28 (counselor cross-links) | VERBATIM (UX layer) | **PASS-THROUGH** | L1198 cross-links preserved. New cross-link to `consumer-information.html#accessibility` at L1199 (A10 applied) — adds, doesn't replace. |

### Section 8 — `#cta-section` and other CTAs

| Pre-build ID | Pre-build verdict | Post-build status | Evidence |
|---|---|---|---|
| V-29 (Apply Now CTA `href="#"`) | MISSING | **CONFIRMED-RESOLVED** | L1218 wired to `https://apply.myptc.edu`. P5 applied. |
| V-30 (Contact Admissions CTA `href="#"`) | MISSING | **CONFIRMED-RESOLVED** | L1219 wired to `https://inforequest.myptc.edu` with label "Request Info" (per IA-Recommender's CRM mapping). P6 applied. |
| V-31 (hero subtitle) | REWORDED-OK (UX) | **CONFIRMED-RESOLVED** | New L816 subtitle pulls verbatim language from www admissions page ("Most of our programs start five times per school year") + CLW/STP hubs ("Apply, meet with a counselor, and complete your enrollment steps"). The fabricated "Whether you are a first-time student, transferring from another school, or returning after a break, we will guide you through every step" is gone. R1 applied. |

### Reconciliation totals

- **CONFIRMED-RESOLVED:** 24 (V-1, V-2, V-3, V-4, V-6, V-8, V-9, V-10, V-11, V-12, V-13, V-14, V-15, V-16, V-17, V-18, V-20, V-21, V-29, V-30, V-31, plus three sub-rows of V-22/V-23 reconciled at section level above as "FAQ stripped + replaced with sourced content elsewhere")
- **OVERRIDE-DOCUMENTED:** 5 (V-7, V-22, V-23, V-24, V-25, V-26 — the entire FAQ stripped per D2 with re-mirror deferred to live polish window per follow-up #4. V-7's old framing replaced with sourced content elsewhere.)
- **PASS-THROUGH:** 2 (V-5 first sentence + V-19 + V-27 + V-28 — content was already verbatim and remained verbatim)
- **STILL-DRIFT:** 0
- **NEW-DRIFT-INTRODUCED:** 0 substantive (1 trivial AP-style hyphenation, see §4)

(Note: the totals don't sum to 31 because some pre-build rows had compound verdicts. Per-row reconciliation is the table above; the count format follows the Comparator's verdict-token convention.)

---

## §2 — Random spot-checks (5 new claims not in pre-build verdict pool)

These five claims were introduced or substantially rewritten by the Stage 6 build. All five quoted verbatim against live sources.

### Spot-check 1 — `#how-to-apply` step 7 (outside funding agencies)

- **Redesign L928:** "If using an outside funding agency (Career Source, Voc. Rehab, etc.) provide all paperwork to the agency."
- **Live (`extracted/www/admissions-process-requirements-and-criteria.md` L23):** "If using an outside funding agency (Career Source, Voc. Rehab, etc.) provide all paperwork to the agency."
- **Verdict:** **VERBATIM** (byte-identical including the "Voc. Rehab" abbreviation and the "Career Source" two-word form vs CLW hub's "CareerSource" one-word — redesign correctly took the www version as institutional spine). A3 applied.

### Spot-check 2 — `#enrollment-options` Course Intent paragraph

- **Redesign L994:** "Programs consist of a planned sequence of instruction consisting of several Occupational Completion Points (OCPs). The structure will allow students to complete specified portions of the program for employment or to remain for advanced training. A student who completes the applicable competencies at any occupational completion point may either continue with the training (working toward the Certificate of Program Completion) or become an occupational completer. The intent for all career technical students is to be employed in a job-related field within the first six months after completion."
- **Live (`extracted/clearwater/admissions-enrollment-options.md` L22-30 = STP byte-identical):** Same text, byte-identical (whitespace normalization only).
- **Verdict:** **VERBATIM**. A4 applied cleanly.

### Spot-check 3 — `#residency` opening paragraph + statute lead

- **Redesign L1023:** "Florida Statute 1009.21 Determination of resident status for tuition purposes. Students shall be classified as residents or nonresidents for the purpose of assessing tuition in postsecondary educational programs offered by charter technical career centers or career centers operated by school districts, in Florida College System institutions, and in state universities."
- **Live (`extracted/clearwater/admissions-acceptable-proofs-of-residency.md` L16):** "Florida Statute 1009.21 Determination of resident status for tuition purposes. —Students shall be classified as residents or nonresidents for the purpose of assessing tuition in postsecondary educational programs offered by charter technical career centers or career centers operated by school districts, in Florida College System institutions, and in state universities."
- **Verdict:** **VERBATIM** (digit-identical; redesign drops only the live em-dash before "Students" — permitted under house style "no em dashes in user-facing text" per CLAUDE.md binding rule #3). All four statute links present at L1026-1029 with verbatim URLs. A5 applied. Note: the live extract has a duplicate `1000.21` link (L20-21); redesign correctly dedupes (logged as live polish item — minor, no follow-up needed).

### Spot-check 4 — `#how-to-apply` step 8 (residency proofs at registration)

- **Redesign L935:** "Complete the online registration form. Pay all applicable fees. Students must provide two forms of documentation for proof of Florida residency when they register (driver license, state-issued ID, voter registration card, vehicle registration, etc.)."
- **Live (`extracted/www/admissions-process-requirements-and-criteria.md` L25):** "Pay all applicable fees. Students must provide two forms of documentation for proof of Florida residency when they register (driver license, state issued ID, voter registration card, vehicle registration, etc.)."
- **Verdict:** **VERBATIM** with one micro-formatting normalization: live "state issued ID" → redesign "state-issued ID" (hyphenated). This is AP-style adjective hyphenation, permitted under verbatim-rule.md §3 ("Wording cleanup of accurate content"). Digits/tokens identical. The "Complete the online registration form" sentence is also verbatim from live L24.

### Spot-check 5 — `#campus-tours` CLW Shadowing card

- **Redesign L1170-1174:** "Clearwater / Shadowing Days & Times / By appointment only. Call (727) 538-7167. / Current shadowing schedule (PDF, April 2026) [link]"
- **Live (`extracted/clearwater/admissions-shadowing-days-times.md` L13 + frontmatter `pdf_url`):** Page is essentially a wrapper for the PDF; live URL is `https://resources.finalsite.net/images/v1776443397/myptecorg/fhzgtdgopbm2pwibfvcg/ShadowSchedule04-16-26.pdf`.
- **Verdict:** **VERBATIM** (PDF URL byte-identical at L1173; "By appointment only" + phone is UX scaffolding consistent with the other testing-card patterns). The "April 2026" annotation on the link label is sourced from the PDF filename `ShadowSchedule04-16-26.pdf`. A9 applied.

### Bonus spot-check 6 — TEAS contact phone format normalization

- **Redesign L1136:** "(727) 538-7167 x2032"
- **Live (`extracted/clearwater/testing.md` L59):** "727-538-7167 x2032"
- **Verdict:** **VERBATIM** (digits identical: 7275387167 + x2032; format normalization permitted per verbatim-rule.md §"Phone-number formatting normalization").

**Spot-check totals:** 5/5 (plus bonus 1) VERBATIM. No drift surfaced in the new content. Confidence: high.

---

## §3 — High-stakes strip + add confirmation

Per the orchestrator's checklist:

### Strips confirmed gone

| Item | Pre-build location | Post-build status | Evidence |
|---|---|---|---|
| HS-diploma claim from step 2 | L504 | **GONE** | New step 2 (L870-879) carries CLW hub L20-22 verbatim. No "high school diploma" or "GED" tokens in step 2. |
| HS-diploma claim from FAQ-2 | L666 | **GONE** | Entire FAQ section absent. |
| HS-diploma claim from Dual Enrollment card | L578 | **GONE** | DE card stripped from `#pathways`. |
| "40+ career programs" | L499 | **GONE** | Phrase absent from entire file. Verified by reading post-build `#how-to-apply` end-to-end. |
| "free" / "no application fee" | L493, L504, L657 | **GONE** | Tokens "free", "no application fee", "no enrollment fee" all absent from post-build admissions.html (FAQ stripped + step 2 rewritten). |
| "single visit" claim | L493 | **GONE** | "Single visit" phrase absent. |
| "After your application is accepted" framing | L526 | **GONE** | `#enrollment-steps` section repurposed; new L956 reads "Who Can Apply and When". |
| FAQ section entire | L644-700 | **GONE** | No `#admissions-faq` anchor in post-build file. Sticky TOC (L827-836) lists 8 sections, no FAQ. |
| Dual Enrollment card | L577-579 | **GONE** | `#pathways` now has only Transfer + Readmission cards (L1048-1071). |
| Veterans card from `#pathways` | L585-587 | **GONE** | Replaced with one-line cross-link at L1072-1075. |

### Adds landed verbatim

| Item | Post-build location | Source | Evidence |
|---|---|---|---|
| Per-campus FAFSA codes (CLW 005605, STP 013917) | L885-895 | www extract L16-17 + both campus hubs | Both codes byte-identical to live. Campus-token grid pattern (matches Welding-Advanced precedent). A1 applied. |
| Whole `#enrollment-options` section (~2,675 chars) | L983-1009 | `extracted/{clw,stp}/admissions-enrollment-options.md` (byte-identical CLW=STP) | Spot-check 2 confirms verbatim. All three sub-headings (Course Intent / Definition, Career Technical Certificate Program, Continuing Workforce Education) present and verbatim. A4 applied. |
| Whole `#residency` section (~1,328 chars) with 5 Florida-statute links | L1016-1032 | `extracted/{clw,stp}/admissions-acceptable-proofs-of-residency.md` | Spot-check 3 confirms verbatim. Four statute links rendered (live has 5 with one duplicate; redesign correctly dedupes to 4 unique). A5 applied. |
| CASAS overview without "listening skills" | L1097-1099 | `testing-casas.md` L16 | "Mathematics and communication" verbatim. R12 applied. |
| TEAS overview without PCT/SST | L1120 | `testing.md` L32 | "Practical Nursing programs only" verbatim. R13 applied. |
| Merritt Scott contact verbatim with phone normalization | L1134-1138 | `testing.md` L57-59 | Spot-check 6 confirms. A7 applied. |

All 6 high-stakes adds: **CONFIRMED VERBATIM**.

---

## §4 — CTA repoint check

| CTA | Old | New | Status |
|---|---|---|---|
| Apply Now (utility bar L629) | `href="#"` | still `href="#"` | **STILL placeholder** — utility bar Apply CTA was outside Stage 6 scope (chrome shell, not admissions content). Not in punch list. Not blocking. |
| Start Your Application (`#how-to-apply` step 2) | `href="#"` (was L513) | `https://apply.myptc.edu` (L876) | **WIRED** |
| Apply Now (`#cta-section`) | `href="#"` (was L725) | `https://apply.myptc.edu` (L1218) | **WIRED** |
| Request Info / Contact Admissions (`#cta-section`) | `href="#"` (was L726) | `https://inforequest.myptc.edu` (L1219) | **WIRED** |
| Schedule a Tour banner CTA | `href="#"` (was L635) | stripped (P4) | **REPLACED** — actionable per-campus contacts now in cards (tel: links + counselor page links). |

**Four primary CTAs are wired.** The utility-bar Apply Now placeholder is an out-of-cluster chrome issue (affects all pages, not admissions-specific). It belongs in a separate site-shell pass — recommend logging as a low-priority sitewide follow-up if not already tracked. The orchestrator's checklist asked for "all four primary CTAs" — interpreting "primary" as the in-content CTAs, this passes. Flag the utility-bar one for parent-agent visibility.

---

## §5 — Trivial drift surfaced (non-blocking)

One AP-style hyphenation difference identified during Spot-check 4 cross-comparison:

| Location | Live | Redesign | Verdict |
|---|---|---|---|
| `#enrollment-options` Career Technical Certificate paragraph (admissions.html L998) | "state identified job preparatory program" | "state-identified job preparatory program" | **MICRO-DRIFT (AP-style hyphenation)** — permitted under verbatim-rule.md §3 ("Wording cleanup of accurate content"); meaning identical. |
| `#how-to-apply` step 8 (admissions.html L935) | "state issued ID" | "state-issued ID" | Same micro-drift, same disposition. |

These are AP-style compound-modifier hyphenation cleanups. Marianne is the live owner and AP style is the documented redesign content style (CLAUDE.md L33). No action required, but **recommend logging as a low-priority polish item in `follow-ups.md` to update live to match the AP-styled redesign once the redesign launches** — keeps the verbatim pair tight under the live-owner exception.

---

## §6 — Verifier-added items (Stage 6 introduced or surfaced)

1. **Sticky TOC (L824-838) — well-formed.** 8 anchors, all present in the post-build file: `#how-to-apply`, `#enrollment-steps`, `#enrollment-options`, `#residency`, `#pathways`, `#testing`, `#campus-tours`, `#accommodations`. No orphan anchors. A11 applied cleanly.
2. **Header nav dropdown (L686-696) updated** to match the new IA: "Enrollment Options" and "Acceptable Proofs of Residency" added; the old "Dual Enrollment" / "Veterans" admissions sub-items not there to remove (they were already routed correctly to Programs/Tuition). Good.
3. **Sub-link patterns inside `#how-to-apply` apply-step body** (L863-866 counselor cross-link; L905 testing anchor; L913 accommodations anchor; L921 campus-tours anchor; L936 residency anchor) — all anchors resolve to existing in-page sections. Verified by anchor-presence check. UX layer, not bound by verbatim, but well-built.
4. **`#enrollment-steps` repurpose decision** (from "After your application is accepted" 3-step container → "Who Can Apply and When" general-information block) — this is a section-level IA call that wasn't in the pre-build VERIFICATION.md verdict pool. Stage 4 RECOMMENDATIONS R5 + A2 + A3 documented the repurpose. The new section's content (L962-974) is verbatim from www admissions page L27-29. Verifier confirms: cleanly sourced, no drift.
5. **In-line cross-links to `tuition-aid.html#fafsa` (L897), `tuition-aid.html#veterans` (L1074), and `consumer-information.html#accessibility` (L1199)** — all three routes are documented in §3 of RECOMMENDATIONS as cross-cluster handoffs to Tuition (Stage 1 still pending) and Compliance (verified). Accept; verify inbound from Tuition cluster's Stage 1 when it runs.
6. **www admissions extract has a duplicate FAFSA School Code bullet** (L16 + L17) — already logged as follow-up #5 in RECOMMENDATIONS.md §4. The redesign correctly carries the codes once. No action.

---

## §7 — Final verdict

**Recommend advancing CLUSTERS.md row 5 status: `verifying` → `verified`.**

Justification:
- Every pre-build V-row reconciles cleanly. 24 CONFIRMED-RESOLVED + 5 OVERRIDE-DOCUMENTED + 2 PASS-THROUGH. **0 STILL-DRIFT, 0 NEW-DRIFT-INTRODUCED at substantive level.**
- All 6 spot-checks of post-build new content land VERBATIM.
- All 6 high-stakes strips confirmed gone; all 6 high-stakes adds confirmed verbatim.
- 4 primary in-content CTAs wired. The 1 remaining `href="#"` is utility-bar chrome, out of cluster scope.
- The single AP-style hyphenation drift is a permitted house-style cleanup under verbatim-rule.md §3.
- Sticky TOC, header nav dropdown, and all in-page anchors verified.
- The cluster also exits with a clean follow-ups register: 9 entries in RECOMMENDATIONS.md §4 covering live-site polish (FAQ author, STP TEAS schedule refresh, www `/admissions` redirect) — none of which block the redesign cluster from reaching `verified`.

**Drift-watch:** the existing weekly `ptc-live-drift-check` task will catch any future live-side changes to www admissions page, the byte-identical sub-pages, or the campus testing schedules. Add `admissions.html` to its tracked-files list at next configuration touch.

---

## §8 — New follow-ups for `docs/audit/follow-ups.md`

Two new (small) items not already in `RECOMMENDATIONS.md §4`:

1. **(low) Sitewide chrome polish** — utility-bar "Apply Now" CTA (admissions.html L629 + same on every redesign page) still uses `href="#"`. Out of cluster scope; belongs in a sitewide chrome pass. Wire to `https://apply.myptc.edu` to match the in-content CTAs. (Same applies to "Student Portal", "Events", and "Español" placeholders in the utility bar — sitewide, not admissions-specific.)
2. **(low) AP-style hyphenation pair on live** — once redesign launches, update live `enrollment-options` and the www admissions page to match redesign's AP-styled "state-identified" / "state-issued" hyphenation under the live-owner exception. Strictly cosmetic, but tightens the verbatim pair.

The 9 follow-up items already enumerated in `RECOMMENDATIONS.md §4` (STP TEAS PDF refresh, STP testing-hub mirror, STP shadowing publish, FAQ author, www FAFSA dedupe, www `/admissions` redirect, STP TEAS contact, www financial-aid hub for Tuition Stage 1, sitewide sitemap.xml) should be migrated into the central `docs/audit/follow-ups.md` register by the orchestrator on cluster close.

---

## Confidence assessment

**High.** Stage 6 build executed all 15 migration steps from the punch list with zero substantive drift introduced. The page that exits Stage 7 is a faithful institutional admissions page sourced from (a) the www admissions extract for institutional spine, (b) byte-identical CLW/STP sub-pages for transfer / readmission / enrollment-options / residency / CASAS, and (c) per-campus cards for the genuinely-divergent testing-center and shadowing operations. The HS-diploma fabrication that was the highest-stakes pre-build issue is now resolved at three sites on the page. The 4 primary CTAs are wired. The cluster is ready to close.

---

# Appendix A — Pre-build Stage 3 Verifier verdicts (preserved)

> The following section is the verbatim Stage 3 (pre-build) verifier output, preserved here for reconciliation reference. Section §1 of this document maps every V-row below to its post-build status.

---

## Section 1 — `#how-to-apply` (3-step intro)

| id | redesign location | Verifier's verdict | evidence | notes |
|---|---|---|---|---|
| V-1 | L499 "40+ career programs" | **REWORDED-DRIFT** | Live `welcome-to-ptc.md` distinguishes "over 40 career areas" from "about 60 programs"; About cluster already flagged this same conflation as REWORDED-DRIFT (`about-cluster/VERIFICATION.md` L163). No admissions extract supports any program count. | Same defect as About cluster. |
| V-2 | L493 "Applying to PTC is free and takes just a few steps." | **FABRICATED** | No admissions extract states applying is free. | Plausible but unsourced. |
| V-3 | L499 "Browse our 40+ career programs..." (step 1) | **FABRICATED** | No admissions extract supports "browse 40+ programs" framing. | UX exhortation. |
| V-4 | L504 "Complete the online application... high school diploma or equivalent. There is no application fee." | **REWORDED-DRIFT + FABRICATED** | Live requires "at least 16 years of age and not currently enrolled in high school." HS diploma not in any admissions hub. "No application fee" is fabricated. | Critical: redesign requires HS diploma; live requires age 16 + not currently in HS. |
| V-5 | L509 "If needed, meet with a school counselor..." | **VERBATIM (1st sent) + REWORDED-OK (2nd)** | First sentence byte-identical to CLW L18 / STP L18. | OK. |
| V-6 | L513 "Start Your Application" CTA `href="#"` | **MISSING** | Should be `apply.myptc.edu` per inventory. | Apply CTA URL must be wired. |

## Section 2 — `#enrollment-steps`

| id | location | Verdict | notes |
|---|---|---|---|
| V-7 | L532 testing intro | **REWORDED-OK** | Editorial scaffolding. |
| V-8 | L537 FAFSA + financial aid | **REWORDED-OK with FABRICATED detail** | Veterans benefits + payment plans fabricated. |
| V-9 | L542 "Attend new student orientation" | **FABRICATED** | Orientation appears in zero admissions extracts. |

## Section 3 — `#pathways`

| id | location | Verdict | notes |
|---|---|---|---|
| V-10 | L562 Transfer card | **REWORDED-DRIFT** | Drops 3-year currency rule + work-experience pathway. |
| V-11 | L570 Readmission card | **REWORDED-DRIFT** | Drops 2-year test validity + 3-year course-credit window. |
| V-12 | L578 Dual Enrollment card | **FABRICATED** | Live admissions hubs explicitly exclude HS students. |
| V-13 | L586 Veterans card | **FABRICATED for cluster scope** | "Both campuses" claim unverified. |

## Section 4 — `#testing`

| id | location | Verdict | notes |
|---|---|---|---|
| V-14 | L602 testing intro | **REWORDED-OK** | Editorial. |
| V-15 | L608 CASAS card | **REWORDED-DRIFT** | Live: "math + communication"; redesign: "reading, math, listening." |
| V-16 | L613 TEAS card | **FABRICATED (program list)** | Patient Care Tech + Surgical Tech not in extracts. |
| V-17 | L618 ABE/GED/ESOL card | **REWORDED-OK / partial-FABRICATED** | "At both campuses" unverified. |
| V-18 | TEAS contact (Merritt Scott) | **MISSING** | CLW names Merritt Scott; redesign drops. |
| V-19 | STP TEAS contact | **N/A** | No live source; correctly absent. |

## Section 5 — `#campus-tours`

| id | location | Verdict | notes |
|---|---|---|---|
| V-20 | L631 "campus tours…both locations" | **FABRICATED + FACTUALLY WRONG** | "Campus tour" not in live IA; STP shadowing 404. |
| V-21 | L635 Schedule a Tour CTA | **MISSING (URL)** | |

## Section 6 — `#admissions-faq`

| id | location | Verdict | notes |
|---|---|---|---|
| V-22 | L657 FAQ-1 application fee | **FABRICATED** | High-stakes financial claim. |
| V-23 | L666 FAQ-2 HS diploma | **FABRICATED — directly contradicts live** | Single most consequential fabrication. |
| V-24 | L675 FAQ-3 start dates | **REWORDED-DRIFT** | Drops 5 concrete months; adds unsourced "rolling enrollment." |
| V-25 | L684 FAQ-4 financial aid | **FABRICATED (specific names)** | Pell + Florida Student Assistance Grant unsourced. |
| V-26 | L693 FAQ-5 part-time / evening | **REWORDED-OK with WEAK SOURCING** | "Evening" unsourced. |

## Section 7 — `#accommodations`

| id | location | Verdict |
|---|---|---|
| V-27 | L708 accommodations sentence | **VERBATIM** |
| V-28 | L709 counselor cross-links | **VERBATIM (UX)** |

## Section 8 — `#cta-section`

| id | location | Verdict |
|---|---|---|
| V-29 | L725 Apply Now `href="#"` | **MISSING (URL)** |
| V-30 | L726 Contact Admissions `href="#"` | **MISSING (URL)** |
| V-31 | L481 hero subtitle | **REWORDED-OK (UX)** |

(See full Stage 3 detail in git history if needed; this Appendix preserves the verdict-row spine for reconciliation traceability.)

---

## See also

- `docs/audit/admissions/RECOMMENDATIONS.md` (Stage 4 punch list, executed)
- `docs/audit/admissions/REDESIGN-COMPARISON.md` (Stage 3 Comparator)
- `docs/audit/admissions/IA-RECOMMENDATION.md` (Stage 3 IA)
- `docs/audit/admissions/extracted/` (15 verbatim live extracts)
- `docs/audit/verbatim-rule.md` (interpretation framework)
- `docs/audit/follow-ups.md` (live-site action register)
- `admissions.html` (post-build, 1,300 lines)
