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
