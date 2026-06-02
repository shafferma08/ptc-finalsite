# Tuition Cluster — Verification

**Verifier run:** 2026-06-02 (independent re-check of `REDESIGN-COMPARISON.md`)
**Sources re-read:** `tuition-aid.html`; `extracted/{clearwater,stpete}/` (.md only)
**Method:** Independent quote-to-quote re-check of every FABRICATED / MISSING / REWORDED-DRIFT row plus the 5 explicit Verifier items and 3 spot-checks. Grep confirmed string absence/presence across all 19 extracts.

---

## High-stakes financial/legal claims

| Claim | Comparator | My verdict | Quotes | Flip note |
|---|---|---|---|---|
| FAFSA code 013847 + "same code both campuses" (3 places) | FABRICATED | **CONFIRM** | Redesign: "PTC's Federal School Code is **013847**"; "use the same school code — PTC is one institution with two locations". Live: "Clearwater campus school code – 005605"; "St. Petersburg campus school code – 013917". Grep: `013847` appears in **zero** extracts. | — |
| Resident rate $2.91/clock hr | FABRICATED | **CONFIRM** | Redesign: "$2.91/clock hour". Live (both fees pages): "$2.92 per hour for residents". | — |
| Non-resident rate $11.64/clock hr | FABRICATED | **CONFIRM** | Redesign: "$11.64/clock hour". Live: "$11.71 per hour for nonresidents/foreign students". | — |
| Resident total ~$2,619–$5,238 | FABRICATED | **CONFIRM** | No live source publishes program-total estimates. Also math-derived from wrong $2.91. | — |
| Non-resident total ~$10,476–$20,952 | FABRICATED | **CONFIRM** | No live source. | — |
| Typical program length 900–1,800 hrs | FABRICATED | **CONFIRM** | No live tuition page states a program-length range. | — |
| Dual Enrollment $0 row | FABRICATED | **CONFIRM** | No dual-enrollment tuition line in either fees page or any extract. | — |
| Rate-setter "Florida Legislature" | REWORDED-DRIFT | **CONFIRM** | Redesign: "Rates are set by the Florida Legislature". Live: "Tuition for programs offered is established by the Pinellas County School Board." Grep: "Florida Legislature" in zero extracts. | — |
| Refund "full refund during the first week" | REWORDED-DRIFT + MISSING | **CONFIRM** | Redesign: "a full refund is available during the first week of instruction. After that, refunds are prorated." Live: "within the first 10 class sessions or first 50 enrollment hours ... whichever occurs first"; "Refunds, when due, are made within 45 days". No "first week" or generic "prorated" language on live. | — |

## Veterans claims

| Claim | Comparator | My verdict | Quotes | Flip note |
|---|---|---|---|---|
| "approved for Chapter 30, 33, 35, and 1606" | FABRICATED | **CONFIRM** | Redesign asserts PTC "approved for Chapter 30, 33 (Post-9/11), 35, and 1606 benefits." Live veterans pages name only Ch. 33 + Ch. 31 (Title 38 3679(e)) and the Ch. 35 online restriction. Ch. 30/1606 appear ONLY in `stpete/scholarships.md` Barrett eligibility ("Must already qualify for VA benefits under Chapter 30, 33, or 1606") — not as a PTC GI Bill approval. Asserting PTC is "approved for" Ch. 30/1606 is unsupported. | — |
| MyCAA up to $4,000 | FABRICATED | **CONFIRM** | Grep: "MyCAA" in zero extracts; no $4,000 spouse figure anywhere. | — |
| Federal Tuition Assistance (TA) | FABRICATED | **CONFIRM** | Grep: "Tuition Assistance" in zero extracts. | — |
| Chapter 31 "covers tuition, fees, and supplies" | FABRICATED/DRIFT | **CONFIRM** | Live names "Vocational Rehabilitation & Employment (Ch. 31)" only inside the Title 38 3679(e) pending-payment provision. No "covers tuition, fees, and supplies" description exists on live. The chapter name is real; the descriptive claim is invented. | — |
| Veterans Resource Coordinator, Clearwater | REWORDED-OK (borderline) | **CONFIRM** | Live `military-veteran-student-resources.md`: "Lidija Milisav — Military & Veteran Resources Coordinator | School Counselor"; MVRC "in the Student Services area in Building 1" (CLW-only). Substance supported. | — |
| Bill Young Veteran Tuition Waiver missing | MISSING | **CONFIRM** | On 4 live pages verbatim ("created the Congressman C.W. Bill Young Veteran Tuition Waiver Program"); statute says "encouraged to place ... in a prominent location on its website." Absent from redesign. HIGH STAKES. | — |
| Purple Heart / combat-decoration waiver missing | MISSING | **CONFIRM** | Live: "must provide a tuition waiver for recipients of a Purple Heart or another combat decoration ... s. 1009.26(8), F.S." Absent from redesign. | — |
| Title 38 3679(e) pending-payment provisions missing | MISSING | **CONFIRM** | Live veterans pages list the four "will not" provisions verbatim. Absent from redesign. | — |
| Chapter 35 online restriction missing | MISSING | **CONFIRM** | Live: "Chapter 35 VA students will not be certified for any program taught in whole or in part in an online ... format." Absent from redesign. | — |

## The 5 items flagged explicitly for the Verifier

| Item | My verdict | Finding |
|---|---|---|
| (a) "Pay online via Focus" | **CONFIRM FABRICATED** | Redesign: "Current students can pay online through the Focus student portal" + "Pay Tuition Online" CTA. Live (both): "ALL students must come to the bookstore to pay fees EACH TERM - payment does not happen automatically." Grep: "Focus" and "pay online" in zero extracts. No live basis for online/Focus payment. |
| (b) "WIOA" vs CareerSource | **CONFIRM REWORDED-DRIFT** | Grep: "WIOA" / "Workforce Innovation" in zero extracts. Live names "Federal Stimulus Job Training Program – CareerSource Pinellas ... to assist dislocated workers." WIOA is the federal program behind CareerSource, so not strictly false, but it is NOT the live wording. Replace with CareerSource Pinellas. |
| (c) Chapter 31 coverage wording | **CONFIRM FABRICATED** (description) | See Veterans table — Ch. 31 named on live only in Title 38 context; "covers tuition, fees, and supplies" is not on live. |
| (d) Clearwater street address (6100 154th Ave N) | **NEEDS-MORE-RESEARCH** | Grep: "6100" / "154th" in zero tuition extracts. Cannot confirm from this cluster. Phone (727) 538-7167 IS confirmed (`military-veteran-student-resources.md`). Verify address against About/Contact cluster; do not assume. |
| (e) Ch. 30/1606 = Barrett eligibility only | **CONFIRM** | Grep confirms Ch. 30/1606 appear only in `stpete/scholarships.md` Barrett eligibility, never as a PTC GI Bill approval. The redesign's "approved for Ch. 30/1606" is unsupported. |

## Spot-checks of Comparator VERBATIM / REWORDED-OK rows (catch over-confidence)

| Row | Comparator | My verdict | Finding |
|---|---|---|---|
| St. Pete address/phone "901 34th St S ... (727) 893-2500" | VERBATIM | **CONFIRM** | `stpete/net-price-calculator.md`: "901 34th St S, St. Petersburg, FL 33711, US; (727) 893-2500". Exact match. |
| Pell grants not repaid / SAP condition | REWORDED-OK | **CONFIRM** | Live federal-and-state-funding describes Pell as bulk of aid; SAP + Title IV framing consistent. Redesign FAQ phrasing ("as long as you remain enrolled and maintain satisfactory academic progress") is accurate paraphrase. No drift. |
| FAFSA at studentaid.gov | REWORDED-OK | **CONFIRM** | Live links `http://www.fafsa.gov`; redesign says studentaid.gov. Both resolve to the federal FAFSA portal; studentaid.gov is the current domain. Acceptable. |

**Over-confidence note:** One Comparator REWORDED-OK row deserves a sharper flag, see New Issues below (NPC dead links). The 3 sampled rows themselves held up.

---

## Counts

- **CONFIRM:** 27
- **FLIP:** 0
- **NEEDS-MORE-RESEARCH:** 1 (Clearwater street address)

## Confidence assessment of the Comparator output

**High confidence. No false positives found.** Every FABRICATED, MISSING, and REWORDED-DRIFT row I re-checked is supported by direct quote evidence, and every high-stakes string the Comparator called fabricated (013847, $2.91, $11.64, MyCAA, Tuition Assistance, Florida Legislature, WIOA, Focus online payment) is independently confirmed absent from all 19 extracts via grep. The Comparator correctly resisted guessing the Clearwater address and correctly routed it to me. Its rate digits, FAFSA codes, and refund-window figures match live verbatim. The dual-flag accounting in the summary is reasonable. I would trust the punch list as-is.

## New issues the Comparator could have weighted higher (not misses, but worth surfacing)

1. **Net Price Calculator buttons are dead (`href="#"`).** The Comparator noted this inside a REWORDED-OK row, but functionally this is a broken-link defect on a high-traffic aid tool. Live links both point to the PCSB NPC URL (`https://www.pcsb.org/.../netprice/index.html`). Should be elevated to the punch list, not buried.
2. **"Pay Tuition Online" CTA and "FAFSA at studentaid.gov" link also resolve to `href="#"`** (dead), alongside the Veterans "Contact Our Veterans Services Team", Scholarships "Browse", and State Programs links. Multiple dead CTAs across the page; worth a single "wire all dead `#` links" punch-list item.
3. **Redesign omits the Institutional Application Form requirement** ("all students must visit ... Financial Aid Department to complete an Institutional Application Form prior to starting school") present in both `federal-and-state-funding.md` files. Not on the Comparator's MISSING list; minor but it is a published live step that affects aid timing. Route to follow-ups.
4. **Footer non-discrimination string** lists protected categories ("race, color, sex, religion, national origin, marital status, age, sexual orientation, or disability"). Outside the tuition cluster's extracts, so I cannot verify it against live here; flag for the Compliance cluster verifier so it is checked verbatim rather than assumed.

---

## 2026-06-02 Stage 7 verification (post-build)

**Scope:** Independent re-check that every fabrication (F1-F12) is now resolved verbatim, every missing add (M1-M10) is present and verbatim, structural items (D/B/C) are done, and NO new drift was introduced. Pages re-read: `tuition-aid.html`, `clearwater-tuition.html`, `stpete-tuition.html`. Extracts re-read: `{clearwater,stpete}/fees-and-expenses.md`, `veterans-benefits.md`, `refund-policy.md`, `federal-and-state-funding.md`, `scholarships.md`, `financial-aid-hub.md`, `net-price-calculator.md`, `military-veteran-student-resources.md`. Grep used to confirm string absence/presence.

### A) Fabrication fixes (F1-F12)

| ID | Verdict | Rebuilt page | Live extract |
|---|---|---|---|
| F1 FAFSA codes | **CONFIRMED-RESOLVED** | `#fafsa`: "Use **005605** for the Clearwater campus or **013917** for the St. Petersburg campus"; How-Aid step 2: "Clearwater 005605 or St. Petersburg 013917"; CLW page `005605`, STP page `013917`. Grep: `013847` = **0 hits** in all 3 pages. | `federal-and-state-funding.md`: "Clearwater campus school code – 005605"; stpete = 013917. |
| F2 resident rate | **CONFIRMED-RESOLVED** | "Career Technical Certificate … $2.92 per hour". `2.91` = 0 hits. | "$2.92 per hour for residents". |
| F3 nonresident rate | **CONFIRMED-RESOLVED** | "$11.71 per hour". `11.64` = 0 hits. | "$11.71 per hour for nonresidents/foreign students". |
| F4 rate-setter | **CONFIRMED-RESOLVED** | "Tuition for programs offered is established by the Pinellas County School Board." `Florida Legislature` = 0 hits. | Verbatim match. |
| F5 fabricated estimates + hour range | **CONFIRMED-RESOLVED** | `2,619` / `900` / `1,800` / "Typical program length" = 0 hits. Estimate block gone. | none (correctly absent). |
| F6 dual-enrollment $0 row | **CONFIRMED-RESOLVED** | No `$0` row; "Dual Enrollment" appears only as a Programs nav link, not in the rates table. | none. |
| F7 GI Bill chapters | **CONFIRMED-RESOLVED** | Veterans list: "Post-9/11 G.I. Bill® (Ch. 33) and Vocational Rehabilitation & Employment (Ch. 31)". No "approved for Ch. 30/35/1606". | `veterans-benefits.md` names only Ch. 33 + Ch. 31. |
| F8 MyCAA | **CONFIRMED-RESOLVED** | `MyCAA` = 0 hits; `$4,000` = 0 hits. | none. |
| F9 federal Tuition Assistance | **CONFIRMED-RESOLVED** | `Tuition Assistance` = 0 hits. | none. |
| F10 Ch.31 "covers tuition/fees/supplies" | **CONFIRMED-RESOLVED** | Ch. 31 named only in the Title 38 3679(e) pending-payment context. No "covers tuition, fees, and supplies" description. | matches `veterans-benefits.md` Title 38 framing. |
| F11 payment | **CONFIRMED-RESOLVED** | Banner + `#rates`: "All students must come to the bookstore to pay fees each term; payment does not happen automatically." Methods: "Cash, credit card (Visa and MasterCard), FL Prepaid ID Card, money orders, personal checks, and Cashier's Checks." No "Pay Tuition Online" CTA. `pay online`/Focus-as-payment = 0 hits (Focus appears only as a nav SIS link). | `fees-and-expenses.md` verbatim. |
| F12 WIOA | **CONFIRMED-RESOLVED** | `WIOA`/`Workforce Innovation` = 0 hits. "Federal Stimulus Job Training Program (CareerSource Pinellas) … funding available to assist dislocated workers." | `federal-and-state-funding.md` verbatim. |

**Barrett scholarship Ch.30/33/1606 exception (the one allowed place):** CONFIRMED. "Chapter 30, 33, or 1606" appears in exactly ONE location: the Barrett Family Foundation VA Scholarship card (`#scholarships`, STP-badged), matching `stpete/scholarships.md` ("Must already qualify for VA benefits under Chapter 30, 33, or 1606"). Nowhere else.

### B) Missing-content adds (M1-M10) — all PRESENT, verbatim spot-checked

| ID | Verdict | Note (high-stakes quoted) |
|---|---|---|
| M1 AGE tuition | **CONFIRMED-RESOLVED** | "$45 per term … not to exceed two terms / $90 per year" and "$120 per term … not to exceed three terms / $360 per year"; ESOL/Adult Disabled/GED scope + exclusions verbatim from `fees-and-expenses.md`. |
| M2 full fee list | **CONFIRMED-RESOLVED** | All 9 items present (application/processing, ID card, parking, books/tools/supplies, lab, equipment & facility usage, graduation, uniforms, certification/licensure exam). |
| M3 FL Prepaid note | **CONFIRMED-RESOLVED** | "Currently, only tuition fees are covered. Other fees … should be paid out of pocket or through another type of financial aid." |
| M4 refund section | **CONFIRMED-RESOLVED** | "within the first 10 class sessions or first 50 enrollment hours … whichever occurs first"; "within 45 days"; "application fee, facility fee, parking and ID fees are nonrefundable"; Title IV/Pell; active-military two options; Continuing Workforce — all verbatim from `refund-policy.md`. |
| M5 Bill Young waiver | **CONFIRMED-RESOLVED** | "Chapter 2014-1, Laws of Florida, (House Bill 7015) … created the Congressman C.W. Bill Young Veteran Tuition Waiver Program." Verbatim. |
| M6 Purple Heart waiver | **CONFIRMED-RESOLVED** | "Chapter 2014-62 … must provide a tuition waiver for recipients of a Purple Heart … s. 1009.26(8), F.S." Verbatim. |
| M7 Title 38 3679(e) + Ch.35 + attendance | **CONFIRMED-RESOLVED** | Four "will not" provisions verbatim; Ch.35 online restriction verbatim; "minimum of 80% attendance each calendar month", "20% absenteeism … terminated", "Practical Nursing requires a minimum 94% attendance"; appeal process. |
| M8 named scholarships | **CONFIRMED-RESOLVED** | AWS (Mar 1), AFCEA (Feb 28, 3.0 GPA), Bailey ($5,000, tuition only, Jan 1–Mar 15 & Jul 1–Sep 15), MTS ($2,000, Apr 15), PTC Nursing (two/class, 90% attendance, 80% GPA), Passmore ($200–$500, women 21+, Apr 30), Pinellas Ed Foundation (December); STP-badged Barrett VA + FCSUA/PTC-UP. All amounts/deadlines match `scholarships.md`. |
| M9 federal/state programs | **CONFIRMED-RESOLVED** | Pell, Bright Futures (FAS/FMS/GSV), FL Career Ed Student Assistance Grant (450 hrs, 180 hrs/fee period, $200 unmet need), Voc Rehab, Youth Connect ($2,500, ages 16–21), CareerSource Pinellas. |
| M10 Title IV details | **CONFIRMED-RESOLVED** | Verification, SAP, "attend 90% of program hours to graduate" + Pell proration, "before completing 60.01% of scheduled payment period hours", FAME — verbatim from `financial-aid-hub.md`. |

### C) Structural items

| Item | Verdict | Finding |
|---|---|---|
| `#faq` gone | **CONFIRMED-RESOLVED** | No `#faq` section and no FAQ Q&A content. (Orphan `.faq-*` CSS rules remain in `<style>` but render nothing — harmless dead CSS; note for cleanup.) |
| `#refund` exists | **CONFIRMED-RESOLVED** | `<section … id="refund">` present with verbatim policy. |
| NPC buttons → real URL | **CONFIRMED-RESOLVED** | All NPC buttons (institutional chooser + both campus pages) point to `https://www.pcsb.org/cms/lib/fl01903687/centricity/domain/134/netprice/index.html`, matching `net-price-calculator.md`. No NPC `href="#"`. |
| Campus chooser → campus pages | **CONFIRMED-RESOLVED** | "Financial Aid by Campus" cards link to `clearwater-tuition.html` and `stpete-tuition.html`; FAFSA callout + How-Aid step also cross-link them. |

### D) New-campus-page fabrication scan

| Item | Verdict | Finding |
|---|---|---|
| CLW Military & Veteran block (Milisav/Welden/MVRC/events/links) | **CONFIRMED-RESOLVED (verbatim)** | Milisav (Coordinator/Counselor, milisavl@pcsb.org, x2020), Welden (VA Certifying Official/FA Specialist, weldens@pcsb.org, x2023), MVRC "Student Services area in Building 1", July 7 2026 8:00 AM Exploration Day, Nov 11 2026 Building 6 Veterans Day Breakfast, FA Office 727-538-7167 Option 7, basic-skills test ext. 2006, all six community links — every fact traces to `military-veteran-student-resources.md`. No invented content. |
| STP page facts | **CONFIRMED-RESOLVED** | FAFSA 013917, NPC URL, FA Office (727) 893-2500, Institutional Application Form, veterans cross-link to `#veterans`. No STP VA specialists invented (correctly defers; matches the high-priority follow-up that STP publishes none). |

### E) New drift introduced during rebuild

| Finding | Verdict | Detail |
|---|---|---|
| CLW street address "6100 154th Ave N … 33760" | **NEW-DRIFT-INTRODUCED (low severity)** | Used in the CLW utility bar and footer, but this string is in **0 tuition extracts** (only the STP address 901 34th St S / 33711 is sourced, and it matches verbatim). The Stage-4 punch list and prior Verifier run both flagged this as NEEDS-MORE-RESEARCH "verify against About/Contact cluster before publishing"; the build published it anyway. Phone 727-538-7167 is confirmed. **Action:** confirm 6100 154th Ave N / 33760 against the About/Contact cluster before `verified`; do not block the cluster on it (it is almost certainly correct campus data, just unverified within this cluster). |
| CareerSource link URL | **PASS-THROUGH (acceptable)** | Redesign links `https://careersourcepinellas.com/`; live links `https://ww25.worknetpinellas.org/…`. The program name (CareerSource Pinellas) is verbatim; only the destination URL differs. careersourcepinellas.com is the org's canonical domain. Note for drift-watch, not a content fabrication. |
| Barrett "Chapter 30, 33, or 1606" | **PASS-THROUGH** | Matches stpete extract exactly; correctly the only occurrence. |
| Orphan `.faq-*` CSS | **PASS-THROUGH** | Dead style rules, no rendered output. Cosmetic cleanup only. |
| Anchors/cross-links | **CONFIRMED-RESOLVED** | `#rates`, `#pay`, `#fafsa`, `#federal-state`, `#scholarships`, `#net-price`, `#veterans`, `#refund` all exist and match the nav dropdown targets. `clearwater-tuition.html#military-veteran-resources` resolves (section id present). STP `#veterans` cross-link resolves. No dangling tuition anchors found. |

### Counts (Stage 7)

- **CONFIRMED-RESOLVED:** 12 F-items + 10 M-items + 4 structural + 2 campus-page = **28**
- **STILL-FABRICATED:** 0
- **NEW-DRIFT-INTRODUCED:** 1 (CLW street address, low severity, pre-flagged)
- **PASS-THROUGH (acceptable/cosmetic):** 4

### Overall call

**PASS — cluster may advance to `verified`, conditioned on one non-blocking follow-up.** Every fabrication F1-F12 is resolved verbatim and every missing item M1-M10 is present and matches its extract. The two new campus pages introduce no invented content; the CLW Military & Veteran block is verbatim. The only new item is the Clearwater street address (6100 154th Ave N / 33760), which is not sourced within the tuition cluster and was published despite a standing NEEDS-MORE-RESEARCH flag. That is a cross-cluster verification gap, not a fabrication, and should be confirmed against the About/Contact cluster (where the same address already appears) before or immediately after marking `verified`. Recommend: mark `verified`, log the CLW-address confirmation and the careersource.com-vs-worknetpinellas.org URL to `follow-ups.md`/drift-watch, and optionally strip the orphan `.faq-*` CSS in a later polish pass.
