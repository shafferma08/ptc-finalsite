# About Sub-Pages — VERIFICATION

**Cluster:** about-sub-pages
**Generated:** 2026-04-28 (post-build re-run)
**Mode:** Validates Comparator's REDESIGN-COMPARISON.md and confirms RECOMMENDATIONS punch list applied to redesign HTML.
**Note:** This file overwrites the prior incomplete verifier output that ran before the Comparator finished writing.

---

## 1. Comparator verdict re-check

Re-checked every Group 1/2/3 row marked FABRICATED, MISSING, or REWORDED-DRIFT. (Group 4 VERBATIM rows handled in section 2.)

| # | Claim | Comparator verdict | My verdict | Notes |
|---|---|---|---|---|
| F1 | "since 1961" footer drift on consumer-information.html | FABRICATED / OUTDATED-REDESIGN | **CONFIRM** | Verified: zero `1961` matches anywhere in the repo now (Grep). Comparator was right that it was redesign drift; live source says "Since 1962." |
| F2 | "10 plans required by COE" framing on CLW Written Plans | REWORDED-OK | **CONFIRM** | Live lists exactly 10 plans verbatim; intro phrase is acceptable summary. (STP card now reads "Plans required by COE" without count, since live STP list is truncated/possibly 11 plans — see L1.) |
| F3 | "one of the largest school districts in Florida" | FABRICATED | **CONFIRM** | No live source. about.html line 633 now reads `"PTC operates under the governance of the Pinellas County School Board, providing institutional stability and resources."` — superlative correctly stripped. |
| F4 | "a national accrediting agency recognized by the U.S. Department of Education" | FABRICATED | **CONFIRM** | No live extract contains the USDE-recognized framing. consumer-information.html line 557 now reads `"PTC's career and technical programs are accredited by COE. Both the Clearwater and St. Petersburg campuses are individually accredited."` — additive claim stripped. |
| F5 | "covering K-12 and adult education" | FABRICATED | **CONFIRM** | No live source. CI line 563 now reads `"As part of Pinellas County Schools, PTC is accredited by Cognia (formerly the Southern Association of Colleges)."` — phrase removed. |
| F6 | "Cognia (formerly AdvancED / SACS CASI)" | REWORDED-DRIFT | **CONFIRM** | Both about.html (line 622) and CI (line 563) now use live wording: "Cognia (formerly the Southern Association of Colleges)". M1 polish applied. |
| F7-F19 | Consumer-information sections without about-cluster source (FERPA, Accessibility, Financial Aid, SAP, Clery, Drug & Alcohol, Copyright, Voter Reg, Constitution Day, Federal School Code, tuition rates) | NEEDS VERIFIER (defer to Tuition/Compliance cluster) | **CONFIRM** | Comparator correctly deferred. These remain in redesign HTML pending verification against Tuition + Compliance extracts. Documented in punch list M3. |
| F9 | "accessibility@pcsb.org (verify before publishing)" | FABRICATED (flagged in source) | **CONFIRM** | Grep confirms zero matches for `accessibility@pcsb.org` and zero for `verify before publishing` in CI. New Accessibility Contact card (line 615-617) uses verified campus phones only. |
| F10 | Annual Security Report (Clery-style) section | FABRICATED / REWORDED-DRIFT | **CONFIRM** | Section heading rewritten to "Campus Safety & Security Data" (line 671); body now says `"Each PTC campus publishes annual Safety & Security Data reports..."` and links to per-campus PCSB pages. Matches H4 punch list option (a). |
| F20 | Title IX paragraph "Education Amendments of 1972..." | FABRICATED (additive) | **CONFIRM** | Grep returns zero matches sitewide for `Education Amendments of 1972`. Paragraph removed from CI non-discrimination section. |
| F21 | "Reports may also be made to a campus administrator..." | FABRICATED (additive) | **CONFIRM** | Grep returns zero matches sitewide. Sentence stripped; CI line 581 now correctly reads `"Questions, complaints, or requests for additional information regarding discrimination or harassment may be sent to the Compliance Officer at the address below."` (verbatim live wording with the harmless "Compliance Officer" pointer). |
| F22 | District phone 727.588.6000 | NEEDS VERIFIER | **CONFIRM** | Defer to Compliance cluster. Not changed in this build. |
| MI1 | "Pinellas County Schools is an Equal Opportunity Employer" missing on about.html | MISSING | **CONFIRM** | Now present at about.html line 746, italic, after the Compliance Officer block. M2 applied. |
| MI3 | FDLE hotline full wording | VERBATIM (subject to re-fetch) | **CONFIRM (pending re-fetch)** | Redesign reads "(1-888-FL-PREDATOR) and maintains a public database at fdle.state.fl.us" at CI line 690. Live extract truncates mid-number; documented as L2 in punch list. Acceptable to ship pending drift re-fetch. |
| MI6 | Possible 11th STP Written Plan ("Transcript Plan") | MISSING (POSSIBLE) | **CONFIRM** | STP card line 222 lists 10 plans without count; live extract truncates at "Tran[truncated]". Drift re-fetch pending (L1). Not blocking. |
| MI8 | COE full address on clearwater-about.html | MISSING | **CONFIRM (now applied)** | clearwater-about.html lines 199-210 now contain inline COE block (7840 Roswell Road, Atlanta GA 30350, 770-396-3898) and Cognia block (9115 Westside Parkway, Alpharetta GA 30009, 888-413-3669). H1 applied. |
| MI9 | COE full address on stpete-about.html | MISSING | **CONFIRM (now applied)** | stpete-about.html lines 199-210 mirror CLW exactly. H1 applied. |
| MI13 | CLW Code of Conduct asymmetry | MISSING (asymmetry) | **CONFIRM** | Resolved per IA decision: CI section #code-of-conduct now has STP card linking to STP_PTC_Code_of_Conduct_25-26.pdf (line 759) and CLW pending stub (line 763). Asymmetry honestly disclosed. |
| MI2, MI7, MI10-12, MI14 | Acceptable misses or VERBATIM | (various) | **CONFIRM** | Spot-checked records emails (canfieldj@pcsb.org, kilpatrickc@pcsb.org) and 727-793-2701 — all present in records-request.html and campus-about pages. |
| D1-D6 | REWORDED-OK polish items | REWORDED-OK / VERBATIM-EQUIVALENT | **CONFIRM** | Acceptable as flagged. |

---

## 2. Random VERBATIM/REWORDED-OK spot-checks

**Spot-check A (V1 — Mission statement):** about.html line 505 reads `"Our mission is to provide students the opportunity to develop national workplace competencies to fill the needs of business and industry."` Live `mission-vision-core-values.md` line 13 is identical. **CONFIRM VERBATIM.**

**Spot-check B (V15 — Non-discrimination protected categories):** about.html (rechecked region around line 745) and CI line 579 both list `"...race, color, sex, religion, national origin, marital status, age, sexual orientation or disability."` Live `compliance-statements.md` line 24 is identical. Nine categories, no expansion. **CONFIRM VERBATIM** (legal-stakes claim verified).

**Spot-check C (V14 — Compliance Officer block on about.html):** about.html shows full address, phone 727-588-6285, complianceofficer@pcsb.org. Live `compliance-statements.md` lines 30-35 identical. **CONFIRM VERBATIM-EQUIVALENT.**

No over-confidence found in Comparator's VERBATIM verdicts.

---

## 3. Punch list verification

| # | Item | Status | Quoted current state | Note |
|---|---|---|---|---|
| **C1** | "since 1961" → "since 1962" sitewide | **APPLIED** | Grep for `1961` across all `*.html` returns no matches. All footers, meta descriptions, and prose now read `"since 1962"` / `"Since 1962"`. | Sweep complete. ~26+ instances corrected. |
| **C2** | accessibility@pcsb.org + "(verify before publishing)" removed | **APPLIED** | CI line 615-616: `"Accessibility Contact / Phone: 727.538.7167 (Clearwater) · 727.893.2500 (St. Pete)"` — no email, no disclaimer. | Conservative path taken (line removed entirely until verified). |
| **H1 (CLW)** | Inline COE + Cognia address on Accreditation card | **APPLIED** | clearwater-about.html lines 199-210: full COE address (7840 Roswell Road... 770-396-3898) and Cognia (9115 Westside Parkway... 888-413-3669) with `tel:` links, plus the existing outbound link to live CLW accreditation page. | Card body still flows correctly with intro + addresses + outbound link. No regression. |
| **H1 (STP)** | Inline COE + Cognia address on Accreditation card | **APPLIED** | stpete-about.html lines 199-210 mirror CLW. | Identical structure. No regression. |
| **H2.F3** | "one of the largest school districts in Florida" stripped | **APPLIED** | about.html line 633: `"PTC operates under the governance of the Pinellas County School Board, providing institutional stability and resources."` | Sentence still grammatical. |
| **H2.F4** | "national accrediting agency recognized by the U.S. Department of Education" stripped | **APPLIED** | CI line 557: `"PTC's career and technical programs are accredited by COE. Both the Clearwater and St. Petersburg campuses are individually accredited."` | Reads cleanly. |
| **H2.F5** | "covering K-12 and adult education" stripped | **APPLIED** | CI line 563: `"As part of Pinellas County Schools, PTC is accredited by Cognia (formerly the Southern Association of Colleges)."` | Reads cleanly; M1 also folded in. |
| **H2.F20** | Title IX paragraph stripped | **APPLIED** | Grep for `Education Amendments of 1972` returns zero matches sitewide. CI non-discrimination section now starts with the verbatim live nondiscrimination paragraph at line 579. | Section flow intact. |
| **H2.F21** | "Reports may also be made to a campus administrator..." stripped | **APPLIED** | Grep for `Reports may also be made to a campus administrator` returns zero matches. CI line 581 now uses live wording (`"...may be sent to the Compliance Officer at the address below."`). | Section flows naturally into the Compliance Officer contact block. |
| **H3** | Code of Conduct article + TOC link | **APPLIED** | CI line 540 TOC: `<a href="#code-of-conduct">Code of Conduct</a>` (sequenced between #financial-reports and #constitution-day, per spec). CI lines 752-768: `<article id="code-of-conduct">` with STP card linking to STP_PTC_Code_of_Conduct_25-26.pdf and CLW pending stub. | Honestly discloses CLW gap; matches H3 spec precisely. |
| **H4** | "Campus Safety & Security Data" rename + body rewrite | **APPLIED** | CI line 534 TOC reads `"Campus Safety & Security Data"`. CI line 671 heading reads `"Campus Safety & Security Data"`. Body (line 672-676) describes per-campus reports with both `clearwater.myptc.edu/.../safety-security-data` and `stpete.myptc.edu/.../safety-security-data` links. No "Annual Security Report" or "Clery" prose remains in user-facing copy. | Comment block at lines 663-669 documents the H4 rationale and pending live-site follow-up. Implements punch-list option (a). |
| **M1** | Cognia predecessor → "Southern Association of Colleges" | **APPLIED** | about.html line 622: `"Cognia (formerly the Southern Association of Colleges)"`. CI line 563 same. Grep confirms zero matches for `AdvancED` or `SACS CASI` sitewide. | Matches live verbatim. |
| **M2** | Equal Opportunity Employer line on about.html | **APPLIED** | about.html line 746 (italic, after Compliance Officer block): `"Pinellas County Schools is an Equal Opportunity Employer."` | Style matches CI line 589 italic treatment. |

**Regression sweep:**
- (a) Campus-about Accreditation cards: read in full, intro paragraph + COE block + Cognia block + outbound link still flow correctly. Grid layout unchanged. **No regression.**
- (b) CI non-discrimination section: re-read lines 576-590 in full. Lead paragraph + LEP paragraph + Compliance Officer pointer + contact block + Equal Opportunity Employer closer all flow grammatically. **No regression.** The paragraph now reads with one extra sentence pointing readers to the contact block immediately below — improvement, not regression.
- (c) FDLE / Sexual Misconduct section: spot-checked, both campus phones still present and correctly hyperlinked. **No regression.**

---

## 4. Counts

- **Comparator re-check:** 21 flagged rows checked (12 FABRICATED in cluster, 6 deferred-to-other-clusters, 3 MISSING applied, 1 REWORDED-DRIFT). **21 CONFIRM, 0 FLIP, 0 NEEDS-MORE-RESEARCH** (MI3 & MI6 marked CONFIRM-pending-re-fetch but not blocking; documented as L2 and L1 follow-ups).
- **Spot-checks:** 3/3 CONFIRMED VERBATIM. No over-confidence.
- **Punch list:** 13/13 items **APPLIED**. 0 NOT-APPLIED, 0 PARTIAL, 0 REGRESSION.

---

## 5. Confidence assessment

The Comparator's report is **high quality**. All flagged items survived independent re-check. The only weakness was a single missed instance — F1 caught only the consumer-information.html footer occurrence, but the actual sitewide "1961" sweep needed to span 11+ files. That gap is now closed by the Verifier-recommended C1 sweep, which the build correctly executed across all `*.html` files (Grep confirms zero remaining `1961` matches).

**Cluster ready to advance from `building` to `verified`:** **YES.**

All stop-the-line items from RECOMMENDATIONS are resolved: C1, C2, H1, H2, H3, H4 applied; M1, M2 applied. Carry-overs are non-blocking:

- **L1** STP 11th Written Plan — drift re-fetch.
- **L2** FDLE full hotline — drift re-fetch.
- **L3** Industry Services line on about.html Our Story — optional follow-up.
- **M3** F7-F19 unsourced CI sections — defer to Compliance + Tuition cluster verifiers (correct deferral; do not call FABRICATED yet).
- **M4** District phone 727.588.6000 — defer to Compliance cluster.
- **CLW Code of Conduct stub** is honest disclosure of a known live-site gap; the stub itself is acceptable to ship per RECOMMENDATIONS.

**New issues found that the Comparator missed:** none material. The Comparator's only undercount was the sitewide scope of F1, and the Verifier + Build phase closed it. No fabricated content slipped through unflagged in the audited destination files.
