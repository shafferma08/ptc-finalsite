# Admissions Cluster — Recommendations (Stage 4)

**Generated:** 2026-04-30
**Cluster:** Admissions (CLUSTERS.md row 5)
**Redesign target:** `admissions.html`
**Decision owner:** Marianne Shaffer
**Prerequisite artifacts:** `inventory.md` (Stage 1+2 + 2026-04-30 PM www patch), `OVERLAP-MATRIX.md`, `REDESIGN-COMPARISON.md`, `IA-RECOMMENDATION.md`, `VERIFICATION.md`

This is the unified Stage 4 punch list. It folds Marianne's D1–D5 sign-off (received 2026-04-30) and the Stage 2 patch (the www admissions page Stage 1 missed) into a single execution-ready plan for Stage 6 build.

---

## TL;DR

- **Architecture call:** one institutional `admissions.html`, no split. 5 of 7 paired sub-pages are byte-identical between campuses; the small set that genuinely diverges (testing schedules, TEAS contact, shadowing) goes into per-campus cards rather than a separate page.
- **Verbatim source pool:** union of (a) the new www institutional admissions page, (b) byte-identical CLW/STP sub-pages where they agree, (c) campus-specific blocks where they diverge.
- **Stage 6 will be a heavy rewrite.** Roughly 70% of user-facing prose on the current `admissions.html` has no live source. The line-level Comparator + Verifier verdicts make it mechanical rather than creative.
- **Critical applicant-misleading claim must come out:** the redesign currently asserts students need a "high school diploma or GED equivalent" (FAQ-2, step 2 copy, Dual Enrollment card). Live (both campuses + the new www page) requires only "at least 16 years of age and not currently enrolled in high school." Highest-stakes fix in this cluster.
- **All 4 primary CTAs are dead** (`href="#"`). Re-aim during the build pass.

---

## §1 — Open decisions (resolved 2026-04-30)

| # | Decision | Marianne's answer | What it means for the build |
|---|---|---|---|
| **D1** | STP shadowing 404 | STP students contact their counselor to inquire about shadowing. CLW carries the published schedule. | `#campus-tours` shows two campus cards: CLW links the April 2026 shadowing PDF; STP says "Contact your campus counselor to schedule a program shadow" with the campus phone. The www admissions page already supplies the institutional framing ("Some programs have specific days and/or dress codes for shadowing, so please speak with a counselor before coming in") so this routes naturally. |
| **D2** | FAQ | Strip now, rebuild later from sourced content. | Remove the entire `#admissions-faq` section in this build pass. Defer to a later live-site polish window where Marianne authors the FAQ on the live campus admissions hubs and the redesign mirrors verbatim (live-owner exception per `verbatim-rule.md`). |
| **D3** | Accommodations | Already done — confirmation only, no new input. | Keep current `#accommodations` block as-is. Optionally upgrade the source citation: the www admissions page also publishes a one-line accommodations institutional sentence that complements the CLW counselor-referral sentence already in place. |
| **D4** | TEAS structure | Per-campus routing. | `#testing` keeps a shared TEAS overview line; below it, per-campus cards (CLW: schedule, sign-in, Merritt Scott contact; STP: schedule, PDF link, no contact named). |
| **D5** | Testing-hub divergence | Per-campus routing. | Same pattern as D4. CASAS shared overview + per-campus schedule cards. STP-only NCCER/ESCO arrival window stays in the STP card. |

**Net IA effect:** all 5 decisions land on the same shape — institutional shared content where it's genuinely shared (5 of 7 sub-pages, the new www page, CASAS/TEAS framing), per-campus cards where the underlying operations actually differ. No campus split needed. The welding-advanced campus-chooser pattern is the precedent for the per-campus cards.

---

## §2 — Punch list (Stage 6 actions)

Each action is tagged `S` (strip), `R` (rewrite), `A` (add), `P` (repoint), or `V` (verify). Comparator IDs (Comp-*) and Verifier IDs (V-*) are cited where applicable.

### Hero (lines 472-483)

- **R1** — Replace the fabricated hero subtitle (Comp HERO-2) with a verbatim or sourced one-line summary. Default: pull from www page's "General admissions process / General information" framing. Or strip and let `#how-to-apply` carry the framing. (Marianne: pick at build time.)

### `#how-to-apply` (lines 488-516)

- **R2** — Rewrite step 1 (Comp HTA-3, HTA-4 / V-2). Strip "40+ career programs" stat, "free," "single visit." Replace with verbatim live: "If needed, meet with a school counselor (admissions contact) to discuss program interests and requirements." (CLW admissions hub L18; www page bullet 1.)
- **R3** — Rewrite step 2 (Comp HTA-5 / V-3, V-4) — **HIGH STAKES**. Strip "high school diploma or GED equivalent" entirely (it contradicts live). Replace with verbatim: "Create your account and complete the application: PTC Application. Be sure to view and complete your checklist (for example, upload your photo identification, complete basic skills testing if necessary, etc.). For in-state tuition, applicants must upload proof of Florida residency when they apply." (CLW admissions hub L20-22.) Strip "There is no application fee" (no live source). Add the www page's "two forms of documentation for proof of Florida residency when they register (driver license, state issued ID, voter registration card, vehicle registration, etc.)" detail.
- **R4** — Step 3 (Comp HTA-6 / V-5) is mostly verbatim; first sentence stays. The "before or after applying" UX clarification can stay (UX layer).
- **P1** — Repoint "Start Your Application" CTA (Comp HTA-7 / V-6) `href="#"` → `https://apply.myptc.edu`.
- **A1** — Add FAFSA School Code per-campus token in the FAFSA step: CLW 005605, STP 013917. Source: www admissions page (which publishes both codes side-by-side) + each campus admissions hub (each publishes its own). Use the campus-chooser card pattern.

### `#enrollment-steps` (lines 521-546)

- **R5** — Rewrite the section framing (Comp ES-3) — strip "After your application is accepted, here is what comes next." Live treats these items as concurrent in the application flow, not post-acceptance. The www page's "General admissions process" 7-step ordered list is the institutional source.
- **R6** — Rewrite step 1 / Testing (Comp ES-4 / V-9). Already paraphrased OK; tighten to "complete basic skills testing if necessary" (live wording) and reference `#testing` anchor below.
- **R7** — Rewrite step 2 / Financial Aid (Comp ES-5 / V-10). Strip the fabricated "scholarships and payment plans" expansion. Verbatim from www admissions page: "Apply for financial aid, if necessary. To apply online, visit www.fafsa.gov. The School Codes for PTC are: 005605 (Clearwater campus) and 013917 (St. Petersburg campus). Students can also obtain an application from the Financial Aid office. Financial Aid may not cover all expenses; students may have to pay out of pocket for some fees. Once notification of eligibility is received (typically 3-5 business days), speak with a financial aid specialist." (Tuition cluster will carry the deeper detail; this section just summarizes + cross-links to `tuition-aid.html`.)
- **R8** — Rewrite step 3 / Register (Comp ES-6 / V-11). Strip "Attend new student orientation" (no live source). Add 5 start dates per year verbatim: "Most of our programs start five times per school year: August, October, January, March/April, and June." (www page; both campus hubs.)
- **A2** — Add a step or sub-bullet for the **www page's TABE/Wonderlic mention** ("Take TABE or Wonderlic if necessary"). Currently absent from the redesign entirely. The www page is the institutional source. Decide at build time whether this lives as its own step or gets folded into "Complete Required Testing" alongside CASAS/TEAS.
- **A3** — Add a step for **outside funding agencies** verbatim: "If using an outside funding agency (Career Source, Voc. Rehab, etc.) provide all paperwork to the agency." (www page; CLW hub L42.)

### Add new `#enrollment-options` section

- **A4** — New section, anchor `#enrollment-options`, sourced verbatim from `extracted/{clw,stp}/admissions-enrollment-options.md` (2,675 chars, byte-identical between campuses). Defines OCPs, Career Technical Certificate vs Continuing Workforce Education tracks, full-time vs half-time, adult-student status. This is substantive institutional content the current redesign omits entirely and that the IA Recommender flagged as the largest single gap.

### Add new `#residency` section

- **A5** — New section, anchor `#residency`, sourced verbatim from `extracted/{clw,stp}/admissions-acceptable-proofs-of-residency.md` (1,328 chars, byte-identical between campuses). Carry the 5 Florida-statute links preserved. Cross-linked from step 2 in `#how-to-apply` and step 3 in `#enrollment-steps`.

### `#pathways` (lines 551-592)

- **R9** — Rewrite Transfer card (Comp PATH-3) verbatim from `extracted/{clw,stp}/admissions-transfer.md`. Restore the **3-year accepted-credit window** and the **work-experience credit framework** with its 5 documentation examples.
- **P2** — Repoint "Learn about transfer credit" CTA (Comp PATH-3a) — anchor link to the rewritten card or to a future detail page; remove the dead `href="#"`.
- **R10** — Rewrite Readmission card (Comp PATH-4) verbatim from `extracted/{clw,stp}/admissions-readmission.md`. Restore the **2-year test-score validity** and **3-year course-credit-from-initial-entry** rules.
- **P3** — Repoint "Readmission process" CTA (Comp PATH-4a) — same approach as P2.
- **S1** — Strip the entire **Dual Enrollment card** (Comp PATH-5, PATH-5a). DE has no admissions-cluster live source. The Programs cluster owns it. Replace with a one-line cross-link to the future Programs cluster anchor or to the campus subsite DE page.
- **S2** — Strip the **Veterans card** (Comp PATH-6, PATH-6a) from this section. Veterans content is owned by the Tuition cluster; the "both campuses" claim is also unverified (CLW has the Mil/Vet page; STP doesn't). Replace with a one-line cross-link to `tuition-aid.html#veterans`.

### `#testing` (lines 597-622)

- **R11** — Rewrite the section intro (Comp TEST-3) — keep the soft framing but tighten the "before enrollment" wording; live says "within the first six weeks of program enrollment" so the redesign's framing is fine but should not over-promise.
- **R12** — Rewrite CASAS card (Comp TEST-4 / V-15). Strip "listening skills" (fabricated — live testing-casas extracts say "mathematics and communication"). Verbatim sentence from `testing-casas.md`: "The Comprehensive Adult Student Assessment System (CASAS) is an instrument used to process new applicants. This is a standardized academic achievement test measuring achievement in mathematics and communication."
- **A6** — Add per-campus CASAS schedule cards inside `#testing` (D5 routing):
  - CLW card: "Mon–Thu testing starts at 8:00 a.m. / Twice a month on Wednesday evenings, beginning at 4:30 p.m. / Please be 15 minutes early to register. / Sign in at Administration, Building #2, front desk. / Schedule: 727-538-7167 ext 2006." (verbatim from `clw/testing.md`)
  - STP card: "Morning arrival times: Monday – Friday | 8:00am – 11:00am / Please arrive at least 30 minutes before your scheduled testing time." Plus the STP CASAS PDF link. (verbatim from `stp/testing.md`)
- **R13** — Rewrite TEAS card (Comp TEST-5 / V-16). **Strip "Patient Care Technician" and "Surgical Technology"** (fabricated; live names only Practical Nursing). Verbatim: "The Practical Nursing programs offered at Pinellas Technical College only accept TEAS test scores taken at a PTC campus testing center."
- **A7** — Add per-campus TEAS cards (D4 routing):
  - CLW card: "By Appointment Only — call 727-538-7167 ext 2006 to schedule. / TEAS test required IN-PERSON on Clearwater campus for Clearwater PN applicants. / Mon–Thu 8:00 a.m. — arrive 7:30 a.m., no late testers after 8:00. / Sign in at Administration, Building #2, front desk. / Wednesday PM 4:30 p.m. — arrive 4:00, no testers admitted after 5:00. / Sign in at Student Services, Building #1, front desk. / TEAS Contact: Merritt Scott, PTC-Clearwater PN Counselor — `scottme@pcsb.org` / `(727) 538-7167 x2032`." (Phone format normalized per `verbatim-rule.md`.)
  - STP card: "Mon–Friday 8:00 a.m. / [TEAS Testing Schedule PDF link]." Note in card metadata: STP TEAS PDF dated August 2023, refresh request open in `follow-ups.md`. No TEAS contact named (per live).
- **S3** — Strip ABE/GED/ESOL card (Comp TEST-6). No admissions-cluster live source. Programs cluster owns. Replace with a one-line cross-link.
- **A8** — Add the www page's **TABE/Wonderlic** institutional reference here as well (some PTC programs still use these instead of CASAS). Source: www admissions page bullet 3.

### `#campus-tours` (lines 627-639)

- **R14** — Rewrite section copy (Comp TOUR-2). **Strip "Campus tours and shadowing days are available at both locations"** — the parity claim is functionally a fabrication (STP has no shadowing page). Replace with the institutional shadowing framing verbatim from the www page: "Some programs have specific days and/or dress codes for shadowing, so please speak with a counselor before coming in."
- **A9** — Add per-campus shadowing/visit cards (D1 routing):
  - CLW card: "Shadowing Days & Times — [link to current April 2026 PDF] / By Appointment Only — call (727) 538-7167."
  - STP card: "Schedule a Program Shadow — Contact your campus counselor to inquire about shadowing your program of interest. / (727) 893-2500 / [link to STP counselors page]."
- **P4** — Repoint "Schedule a Tour" CTA (Comp TOUR-3) — replace dead `href="#"` with the campus-card chooser anchor (or strip the banner-level CTA since the per-campus cards already provide actionable contact paths).

### `#admissions-faq` (lines 644-700)

- **S4** — **Strip the entire FAQ section** (D2 default). All 5 Q/A rows are fabricated, including FAQ-2 (HS diploma requirement) which directly contradicts live policy and could mislead applicants. Update sticky TOC to remove the FAQ anchor. Logged in `follow-ups.md` for later live-site authoring + redesign re-mirror under live-owner exception.

### `#accommodations` (lines 704-712)

- **V1** — Already verbatim from `counselors/extracted/clearwater/admissions.md` L40. No change needed. **Optional upgrade:** the www admissions page also publishes an institutional accommodations sentence ("Accommodations are available during the instructional program for students with documented learning or physical challenges. Please see a counselor for further information."). Consider replacing the CLW-sourced sentence with the www-sourced one since www is institutional-canonical. Either is verbatim; pick at build time.
- **A10** — Add a one-line cross-link from `#accommodations` to `consumer-information.html#accessibility` for the formal ADA / 504 disclosure (Stephanie Miller as District 504 Coordinator, etc.). Compliance cluster handoff.

### `#cta-section` (line 717+)

- **P5** — Repoint "Apply Now" CTA (Comp / V-29) `href="#"` → `https://apply.myptc.edu`.
- **P6** — Repoint "Contact Admissions" CTA (Comp / V-30) `href="#"` → `https://inforequest.myptc.edu` (the live institutional inquiry CRM). The IA Recommender's reasoning: the redesign-CTA language "Apply or contact us with questions" maps to the inquiry-CRM flow, not to the generic contact page.

### Page-level structure

- **A11** — Add a sticky in-page TOC. Rebuilt page has ~9 sections, at the 8-section threshold the precedent established in Compliance cluster.
- **V2** — Verify the new `admissions.html` against the union of (www + CLW + STP) extracts before closing the cluster. Re-run Verifier in Stage 7.

---

## §3 — Out of scope (cross-cluster routes)

| Item | Owning cluster | Route action |
|---|---|---|
| FAFSA School Codes deep treatment | #6 Tuition | Stage 6 build adds the codes inline in `#how-to-apply`'s FAFSA step (per A1); Tuition cluster's `tuition-aid.html#federal-state` becomes the canonical hub. Consider a shared `data/campus-codes.json` to avoid drift. |
| FAFSA application flow detail, refund policy, R2T4, SAP | #6 Tuition | Strip from admissions; `#enrollment-steps` step 2 ends with a one-line cross-link to `tuition-aid.html#fafsa`. |
| Veterans benefits content | #6 Tuition | S2 strips the Veterans card; `#how-to-apply` step copy includes a one-line "Veterans, see `tuition-aid.html#veterans`." |
| Net Price Calculator | #6 Tuition | Live publishes per-campus calculators (`/admissions/financial-aid/net-price-calculator-{clearwater,st-petersburg}`); Tuition cluster handles. |
| Financial-aid contacts (Schnell, Mitchell on STP; CLW option 7) | #6 Tuition | Already extracted; routes to Tuition Stage 1. |
| ABE/GED/ESOL programs | #7 Programs | S3 strips. Programs cluster owns the offerings detail. |
| Dual Enrollment | #7 Programs | S1 strips. Programs cluster owns. |
| Counselor names + assignments + cards | Counselors (closed 2026-04-30) | Already wired. The campus-chooser pattern lives on welding-advanced; admissions reuses it for `#campus-tours` and the FAFSA-step campus token. |
| ADA / 504 / Stephanie Miller (District 504 Coordinator) | Compliance (verified) | A10 adds a cross-link from `#accommodations` to `consumer-information.html#accessibility`. |
| Records request / transcripts | Compliance (verified) | Out of admissions scope. `consumer-information.html#catalog-records` is the canonical destination. |
| `/resources/future-students/financial-aid` (www, 200) | #6 Tuition (Stage 1) | **Pre-stage note:** Stage 2 patch on this cluster surfaced a www financial-aid hub that Tuition Stage 1 should pick up. Don't let Tuition Stage 1 declare "www has no financial-aid content" without checking this URL. |

---

## §4 — Follow-ups for `docs/audit/follow-ups.md`

| # | Pri | Owner | Issue | Source verdict |
|---|---|---|---|---|
| 1 | high | STP campus admin | STP TEAS testing schedule PDF (`teas testing schedule_sp_08252023.pdf`) is dated August 2023, ~2.5 years stale. Federal-aid-adjacent doc. Refresh request. | Inventory finding 6, Comparator section-level missing #11, Verifier follow-up #2 |
| 2 | medium | STP campus admin | STP testing-hub copy is 60% shorter than CLW (812 vs 1368 chars). Missing scheduling phone, sign-in locations, named TEAS contact, evening session, and arrival rule. Ask STP to mirror CLW's testing-hub structure. | Mapper, Comparator section-level missing |
| 3 | low | STP campus admin | STP has no `/admissions/admissions/shadowing-days-times` page. Per Marianne's D1, STP runs shadowing through counselor inquiry rather than a published schedule. Track for parity in case STP later publishes one. | Inventory headline asymmetry |
| 4 | medium | Marianne (live-site polish) | Author a verbatim admissions FAQ on both campus hubs (4-6 Q/A) covering: age requirement, residency proofs, transfer-credit window, readmission process, financial-aid timeline. Then redesign mirrors verbatim per live-owner exception. Defer to May polish window. | D2 |
| 5 | high | Marianne (live-site polish) | The www admissions page (`/resources/future-students/admissions-process-requirements-and-criteria`) repeats the FAFSA School Code detail twice (bullet 2 and a sub-bullet under bullet 2). Cosmetic but worth cleaning. | www patch extract review |
| 6 | medium | Marianne (live-site polish) | The www admissions page is at `/resources/future-students/...` rather than a top-level `/admissions`. Top-level `www.myptc.edu/admissions` returns 404. Consider adding a `/admissions` redirect or canonical institutional URL. | inventory.md Stage 2 patch |
| 7 | low | STP campus admin | STP TEAS testing page does not name a TEAS contact (CLW names Merritt Scott). If a STP TEAS contact exists, ask to publish; otherwise note STP routes via general counselor contact. | Comparator section-level missing |
| 8 | low | Marianne (Tuition Stage 1 hand-off) | New find: `www.myptc.edu/resources/future-students/financial-aid` (200) is an institutional financial-aid hub Stage 1 missed. Ensure Tuition cluster Stage 1 picks it up. | Inventory.md Stage 2 patch §"Cross-cluster handoff" |
| 9 | low | both campus admins | Sitemap.xml returns 404 on all three subsites. Finalsite supports sitemap generation; ask the platform owner whether enabling it is a config toggle. Would unblock cleaner cluster-audit Stage 1 discovery. | PROCESS.md Stage 1 binding rule update 2026-04-30 |

---

## §5 — Migration order for Stage 6

15 sequential steps so the page is never left in an inconsistent state.

1. **Sticky TOC stub** — Add a sticky in-page TOC scaffold first (will be populated as sections solidify). (A11)
2. **Strip pass** — Remove fabricated content sections in this order: hero subtitle (R1 strip portion), all 3 step cards in `#how-to-apply` (R2-R4 strip portions), all 3 step cards in `#enrollment-steps` (R5-R8 strip portions), Dual Enrollment + Veterans cards (S1, S2), CASAS "listening skills" + TEAS PCT/SST programs (R12, R13), `#campus-tours` "both locations" claim (R14 strip portion), entire `#admissions-faq` section (S4). Page is now stripped to a skeleton.
3. **Rewrite `#how-to-apply`** verbatim (R2-R4) using the www admissions page's 7-step ordered list as the institutional spine, with CLW + STP admissions-hub bullets where they add detail. Add A1 (FAFSA School Code campus-chooser token).
4. **Rewrite `#enrollment-steps`** (R5-R8). Add A2 (TABE/Wonderlic) and A3 (outside funding agencies) as the build pass exposes natural homes for them.
5. **Add new `#enrollment-options` section** (A4) verbatim from byte-identical sub-page. Decide anchor placement (between `#enrollment-steps` and `#pathways`, or after `#pathways`).
6. **Add new `#residency` section** (A5) verbatim. Add cross-link from step 2 in `#how-to-apply` and step 3 in `#enrollment-steps`.
7. **Rewrite `#pathways`** with two cards only (Transfer + Readmission, R9 + R10) plus a one-line cross-link replacing the stripped DE + Veterans cards.
8. **Rewrite `#testing`** — section intro (R11), CASAS card (R12), TEAS card (R13), per-campus CASAS cards (A6), per-campus TEAS cards (A7), TABE/Wonderlic reference if it lands here (A8). Strip ABE/GED/ESOL (S3). Most content-dense single section.
9. **Rewrite `#campus-tours`** with the www-sourced shadowing framing (R14) and per-campus cards (A9) per D1.
10. **Confirm `#accommodations`** (V1). Optional swap to www-sourced sentence + add cross-link to compliance (A10).
11. **Re-aim CTAs** (P1, P2, P3, P4, P5, P6) — all six dead `href="#"` link targets repointed.
12. **Populate sticky TOC** with final anchor list (excluding the stripped FAQ).
13. **Update `docs/audit/follow-ups.md`** with the 9 entries in §4 above.
14. **Update `docs/ptc_sitemap.md`** to reflect the rebuilt admissions page anchors and the per-campus card structure inside `#testing` and `#campus-tours`.
15. **Update `CLUSTERS.md` row 5 status** to `verifying` and append entry to `docs/progress-log.md`. Then dispatch Verifier subagent for Stage 7.

---

## §6 — Verbatim source map (for Stage 6 build reference)

| Redesign location | Verbatim source file (relative to repo root) |
|---|---|
| `#how-to-apply` (rewritten) | `docs/audit/admissions/extracted/www/admissions-process-requirements-and-criteria.md` (institutional spine) + `docs/audit/counselors/extracted/clearwater/admissions.md` + `docs/audit/counselors/extracted/stpete/admissions.md` (campus details) |
| FAFSA School Codes (CLW 005605, STP 013917) | www extract bullet 2; both campus hubs |
| `#enrollment-steps` (rewritten) | www extract (7-step list) + both campus admissions hubs |
| TABE/Wonderlic mention | www extract bullet 3 |
| Outside funding agencies | www extract bullet 6; CLW admissions hub L42 |
| 5 start dates per year | www extract bullet 12; both campus hubs |
| 16+ age requirement | www extract bullet 11; both campus hubs |
| `#enrollment-options` (new) | `docs/audit/admissions/extracted/clearwater/admissions-enrollment-options.md` (= STP byte-identical) |
| `#residency` (new) | `docs/audit/admissions/extracted/clearwater/admissions-acceptable-proofs-of-residency.md` (= STP byte-identical) |
| `#pathways` Transfer card | `docs/audit/admissions/extracted/clearwater/admissions-transfer.md` (= STP byte-identical) |
| `#pathways` Readmission card | `docs/audit/admissions/extracted/clearwater/admissions-readmission.md` (= STP byte-identical) |
| `#testing` CASAS overview | `docs/audit/admissions/extracted/clearwater/testing-casas.md` (= STP byte-identical) |
| `#testing` TEAS overview | `docs/audit/admissions/extracted/clearwater/testing.md` (TEAS sentence) |
| `#testing` CLW CASAS card | `docs/audit/admissions/extracted/clearwater/testing.md` |
| `#testing` STP CASAS card | `docs/audit/admissions/extracted/stpete/testing.md` |
| `#testing` CLW TEAS card | `docs/audit/admissions/extracted/clearwater/testing.md` |
| `#testing` STP TEAS card | `docs/audit/admissions/extracted/stpete/testing.md` + `docs/audit/admissions/extracted/stpete/testing-teas.md` (PDF link) |
| `#campus-tours` shadowing framing | `docs/audit/admissions/extracted/www/admissions-process-requirements-and-criteria.md` (bullet 5) |
| `#campus-tours` CLW shadowing card | `docs/audit/admissions/extracted/clearwater/admissions-shadowing-days-times.md` (PDF wrapper) |
| `#accommodations` | current source: `docs/audit/counselors/extracted/clearwater/admissions.md` L40 (already in place); optional upgrade source: www extract |
| Apply CTA URL | inventory.md (homepage scout) — `https://apply.myptc.edu` |
| Contact / Inquire CTA URL | inventory.md (homepage scout) — `https://inforequest.myptc.edu` |

---

## §7 — Stage 2 patch reconciliation (which Stage 3 verdicts changed)

The Stage 2 patch (www admissions page added 2026-04-30 PM) flips a chunk of Stage 3 verdicts. Documented for Verifier's Stage 7 pass:

| Original verdict | Original source | New source via www patch | Net effect |
|---|---|---|---|
| FABRICATED — "16+, not currently in HS" wasn't sourced where it appears as an institutional claim | both campus hubs (cluster sources) | Now also sourced on www explicitly | Strengthens VERBATIM. Counter-argument to redesign's contradicting "HS diploma" claim is even sturdier. |
| FABRICATED — 5 start dates per year | both campus hubs | Now also on www | Strengthens VERBATIM. Add to `#enrollment-steps`. |
| FABRICATED — FAFSA School Codes published together | each campus hub publishes its own | www publishes both side-by-side | Provides the cleanest verbatim source for the redesign's per-campus token in `#how-to-apply`. |
| FABRICATED — institutional shadowing framing | only CLW's PDF wrapper | www provides "speak with a counselor before coming in" institutional framing | Resolves D1's ambiguity. STP routing via counselor is now sourced. |
| FABRICATED — institutional accommodations sentence | only the CLW counselor-referral sentence | www adds a parallel institutional sentence | Optional upgrade for `#accommodations`. |
| MISSING — institutional 7-step process | partly inferred from CLW + STP hubs | www provides the canonical 7-step ordered list | The institutional spine for `#how-to-apply` and `#enrollment-steps` is now explicit. |
| MISSING — TABE/Wonderlic | absent | www explicitly mentions it | Add to `#testing` or `#enrollment-steps` (A2). |
| MISSING — "two forms of FL residency documentation" | not in admissions hubs as listed examples | www lists examples (driver license, state ID, voter reg, vehicle reg) | Add to `#residency` or step 2 in `#how-to-apply`. |
| FABRICATED — "speak with a counselor for further information" institutional close | absent | www closes with this exact sentence | UX-layer cross-reference for the bottom of `#how-to-apply` or `#campus-tours`. |

What didn't change:
- All Comparator FABRICATED verdicts on the 5 paired byte-identical sub-pages (Acceptable Proofs, Transfer, Readmission, Enrollment Options, CASAS) remain FABRICATED — the www page does not duplicate them.
- The 3 hard contradictions (HS diploma claim, "listening skills," PCT/SST as TEAS-required programs) all remain FABRICATED. The www page reinforces the contradiction in case 1 (HS diploma) but says nothing on cases 2 and 3.
- All 6 dead CTAs remain MISSING URL.
- The STP shadowing 404 + STP TEAS PDF staleness asymmetries are unchanged.

---

## See also

- `inventory.md` (Stage 1+2 + Stage 2 patch)
- `OVERLAP-MATRIX.md` (Stage 3 Mapper)
- `REDESIGN-COMPARISON.md` (Stage 3 Comparator)
- `IA-RECOMMENDATION.md` (Stage 3 IA, 14-step migration plan superseded by §5 above)
- `VERIFICATION.md` (Stage 3 Verifier)
- `docs/audit/verbatim-rule.md` (the practical interpretation tier this cluster relies on)
- `docs/audit/PROCESS.md` (updated 2026-04-30 with Stage 1 search-first binding rule)
- `C:\Users\mshaf\.claude\projects\C--Users-mshaf-Documents-PTC-Website-ptc-finalsite\memory\feedback_live_site_url_inference_unreliable.md` (the lesson)
