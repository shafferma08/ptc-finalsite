---
cluster: admissions
stage: verifying
generated: 2026-04-30
verifier: audit-verifier (independent)
comparator_present_at_verify_time: NO
mode: first-principles independent verification (per Compliance-cluster precedent)
redesign_target: admissions.html
---

# Admissions Cluster — Verification

> **Note: Comparator unread at verification time — independent verification.**
> `REDESIGN-COMPARISON.md` was not present when this run started. Per the Compliance-cluster (2026-04-30) precedent, this verifier produced independent first-principles verdicts rather than waiting and reconciling. When Comparator is written, reconciliation should compare its verdict column to this file's "Verifier's verdict" column directly.

Inputs read in full: `admissions.html` (807 lines), `inventory.md`, `OVERLAP-MATRIX.md`, all 16 admissions extracts (CLW + STP), both reused admissions hub extracts in `counselors/extracted/`, and `verbatim-rule.md`.

Verdict legend: **VERBATIM** (digits and tokens identical, only whitespace/formatting normalized), **REWORDED-OK** (different wording, same meaning, no protected category invented), **REWORDED-DRIFT** (meaning changed or precision lost), **MISSING** (live source has it, redesign omits), **FABRICATED** (no live source supports it), **NEEDS-MORE-RESEARCH**.

---

## Section 1 — `#how-to-apply` (3-step intro)

| id | redesign location | Verifier's verdict | evidence | notes |
|---|---|---|---|---|
| V-1 | L499 "40+ career programs" | **REWORDED-DRIFT** | Live `welcome-to-ptc.md` distinguishes "over 40 career areas" from "about 60 programs"; About cluster already flagged this same conflation as REWORDED-DRIFT (`about-cluster/VERIFICATION.md` L163). No admissions extract supports any program count. | Same defect as About cluster. Should be "40+ career areas" or "60+ programs," not "40+ career programs." Already on About-cluster punch list. |
| V-2 | L493 "Applying to PTC is free and takes just a few steps." | **FABRICATED** | No admissions extract states applying is free. Live admissions hubs do not contain the words "free," "no fee," or "no application fee" anywhere. Only CASAS is described as "no fee" (live `testing.md` L18, L21). | Plausible but unsourced. If true, log to `follow-ups.md` for live to publish. |
| V-3 | L499 "Browse our 40+ career programs to find the one that matches your goals." (step 1) | **FABRICATED** | No admissions extract supports any "browse 40+ programs" framing. | UX exhortation — could be classified UX-layer per verbatim-rule §2, but the substantive claim "40+" remains unsourced for admissions context. |
| V-4 | L504 "Complete the online application. You will need proof of residency, a valid ID, and your high school diploma or equivalent. There is no application fee." | **REWORDED-DRIFT + FABRICATED** | Live CLW hub L22 ("upload your photo identification, complete basic skills testing if necessary, etc.") + L24 ("upload proof of Florida residency when they apply") covers ID and residency. **High school diploma or equivalent** is NOT in any admissions hub extract. **Age requirement is what live actually states**: "Students must be at least 16 years of age and not currently enrolled in high school" (CLW L48, STP L38). **"There is no application fee"** is fabricated. | Critical: redesign requires HS diploma; live requires age 16 + not currently in HS. These are different admissions criteria. |
| V-5 | L509 "If needed, meet with a school counselor (admissions contact) to discuss program interests and requirements. You can connect with a counselor before or after applying." | **VERBATIM (first sentence) + REWORDED-OK (second)** | First sentence is byte-identical to CLW L18 / STP L18: "If needed, meet with a school counselor (admissions contact) to discuss program interests and requirements." Second sentence is editorial scaffolding consistent with live, not a new claim. | OK. |
| V-6 | L513 "Start Your Application" CTA href=`#` (placeholder) | **MISSING** | Live CLW L20 names the link "PTC Application"; live STP L20 names it "Visit APPLY!" Both link to `apply.myptc.edu` (per inventory). Redesign uses `href="#"` and label "Start Your Application." | Apply CTA URL must be wired to `apply.myptc.edu` before launch. Same defect at L298 (utility bar "Apply Now"), L513, L725 (CTA band). |

---

## Section 2 — `#enrollment-steps` (post-application)

| id | redesign location | Verifier's verdict | evidence | notes |
|---|---|---|---|---|
| V-7 | L532 "Some programs require placement testing (CASAS or TEAS). Your counselor will let you know what testing is needed for your program." | **REWORDED-OK** | Live `testing-casas.md` L14 establishes CASAS for "career and technical certificate students... within the first six weeks"; live `testing.md` lines 30+ name TEAS for Practical Nursing. The claim is consistent with live, but the framing "Your counselor will let you know" is editorial. | Acceptable scaffolding — the substantive claims (CASAS exists, TEAS exists, programs determine which) are sourced. |
| V-8 | L537 "Complete your FAFSA and meet with the financial aid office to explore grants, scholarships, veterans benefits, and payment plans." | **REWORDED-OK with FABRICATED detail** | Live CLW L30 says "To apply online, visit FAFSA. The School Code for PTC (Clearwater campus) is 005605." Live mentions FAFSA + Financial Aid office. **"Veterans benefits" and "payment plans"** are not mentioned in any admissions extract. Veterans content lives in `military-veteran-student-resources` (not in this cluster's extracts). | Veterans benefit and payment-plan mentions need to be sourced from Tuition cluster or stripped. |
| V-9 | L542 "Work with your counselor to select your start date and register for your program. **Attend new student orientation to get set up for day one.**" | **FABRICATED** | "New student orientation" appears in zero admissions extracts. CLW hub L50 says "Most of our programs start five times per school year: August, October, January, March/April, and June" — no orientation reference. STP same. | Substantive process claim with no source. Either get sourced from Marianne / counselors as live owner, or strip. |

---

## Section 3 — `#pathways` (Transfer / Readmission / Dual Enrollment / Veterans)

| id | redesign location | Verifier's verdict | evidence | notes |
|---|---|---|---|---|
| V-10 | L562 Transfer card: "Transferring from another technical school or college? You may be able to receive credit for prior coursework. Bring your official transcripts to your admissions meeting." | **REWORDED-DRIFT** | Live transfer page (CLW=STP byte-identical, char_count 1437) is far more specific: "Acceptance of credit completed at another institution will be appropriately awarded provided it occurred during the past three (3) years," plus a list of work-experience documentation criteria. The redesign drops **the 3-year currency rule** and the **work-experience-credit pathway** entirely. | Loses substantive detail with policy stakes (3-year rule). REWORDED-DRIFT, not REWORDED-OK. |
| V-11 | L570 Readmission card: "Took a break and want to come back? If you were previously enrolled at PTC, you can apply for readmission. Contact your campus admissions office to get started." | **REWORDED-DRIFT** | Live readmission page (CLW=STP byte-identical, 442 chars): "Students must meet with a guidance counselor who will assist with registration forms and literacy testing. (Test scores are valid for a two-year period…) … Note: Course credit toward program completion is valid for a period of three years from initial entry date." Redesign drops counselor meeting requirement, literacy-test 2-year scope, and the 3-year course-credit window. | Loses substantive policy detail. |
| V-12 | L578 Dual Enrollment card: "High school students can get a head start on their career by enrolling in PTC programs while still in high school. Talk to your high school counselor to see if you qualify." | **FABRICATED** | No admissions extract mentions dual enrollment. Live CLW + STP both state the OPPOSITE direction: "Students must be at least 16 years of age **and not currently enrolled in high school**" (CLW L48, STP L38). Dual enrollment may exist as a separate program, but no admissions extract supports the redesign's framing. | Live admissions hubs explicitly exclude high-school students, contradicting the redesign card. Either find a sourced dual-enrollment page (out-of-cluster) or strip. |
| V-13 | L586 Veterans card: "PTC proudly serves veterans and active-duty military. We accept VA education benefits and have dedicated veterans resources on both campuses." | **FABRICATED for cluster scope** | No admissions extract mentions VA, active-duty, or veterans resources. Veteran/military content lives in CLW-only `military-veteran-student-resources` (out of this cluster's scope per inventory). The phrase "dedicated veterans resources on both campuses" is unverified — only CLW has the mil-vet sub-page. | Strip "on both campuses" at minimum. The other claims need sourcing from Tuition cluster's veterans extracts. |

---

## Section 4 — `#testing` (CASAS / TEAS / ABE-GED-ESOL)

| id | redesign location | Verifier's verdict | evidence | notes |
|---|---|---|---|---|
| V-14 | L602 "Some programs require a placement test before enrollment. Your admissions counselor will confirm which test, if any, applies to your program." | **REWORDED-OK** | Consistent with live `testing-casas.md` L14 + live `testing.md` framing. | Editorial scaffolding, no protected claims. |
| V-15 | L608 CASAS card: "Comprehensive Adult Student Assessment System. Required for most career and technical programs. Measures reading, math, and listening skills." | **REWORDED-DRIFT** | Live CASAS page L14: "Career and technical certificate students must be tested within the first six weeks of program enrollment." L17: "measuring achievement in mathematics and communication." **Live says math + communication; redesign says reading, math, and listening.** Live further specifies "Continuing workforce education students, apprentices, and students enrolled in programs of less than 600 hours are not required" — a substantive exemption the redesign drops. **Listening skills** is not in the source. | Substance changed: "communication" became "reading and listening," and 600-hour exemption dropped. |
| V-16 | L613 TEAS card: "Test of Essential Academic Skills. Required for **health science programs including Practical Nursing, Patient Care Technician, and Surgical Technology**." | **FABRICATED (program list)** | Live `testing.md` (CLW + STP) names ONLY "Practical Nursing": "The Practical Nursing programs offered at Pinellas Technical College only accept TEAS test scores taken at a PTC campus testing center." **Patient Care Technician and Surgical Technology** appear nowhere in any admissions extract. | Strip the two unsourced programs. TEAS is a Practical Nursing requirement per live. Adding two more health programs is a protected substantive claim. |
| V-17 | L618 ABE/GED/ESOL card: "If you need to complete your GED or improve your English language skills, PTC offers Adult Basic Education and ESOL programs at both campuses." | **REWORDED-OK / partial-FABRICATED** | Live `testing-casas.md` L22: "Students interested in enrolling in ESOL (English for Speakers of Other Languages) classes must take the CASAS." ESOL is sourced. ABE/GED at PTC is not in any admissions extract — likely sourced in a separate program area. **"At both campuses"** is unverified. | "At both campuses" needs explicit verification before launch. |
| V-18 | TEAS contact (Merritt Scott `scottme@pcsb.org`, `727-538-7167 x2032`) — does redesign cite this? | **MISSING** | CLW `testing.md` L57-61 names Merritt Scott. Redesign `#testing` section names no TEAS contact at all. | The single most useful person-name in the testing live content is dropped from the redesign. Add. |
| V-19 | STP TEAS contact | **N/A — no live source** | STP testing extracts (`testing.md`, `testing-teas.md`) name no TEAS contact. STP TEAS PDF dated 08/25/2023 (~2.5 years stale per inventory). | If redesign were to invent an STP TEAS contact, that would be FABRICATED. As of L613, redesign cites no STP-specific TEAS contact, so no fabrication exists. Add `follow-ups.md` ask: STP should publish a TEAS contact for parity with CLW's Merritt Scott. |

---

## Section 5 — `#campus-tours`

| id | redesign location | Verifier's verdict | evidence | notes |
|---|---|---|---|---|
| V-20 | L631 "Visit Our Campuses … See our labs, meet instructors, and learn about programs firsthand. Campus tours and shadowing days are available at both locations." | **FABRICATED (institutional framing) + FACTUALLY WRONG (both locations)** | The phrase "campus tour" appears in zero live admissions extracts. Live uses "**shadowing**" exclusively. CLW publishes a current shadowing PDF (`ShadowSchedule04-16-26.pdf`, April 2026); **STP `/admissions/admissions/shadowing-days-times` returns 404** per inventory L161-179. Saying shadowing is available "at both locations" contradicts the inventory's headline asymmetry. | Two distinct issues: (a) "campus tour" is a redesign-invented concept not in the live admissions IA; (b) "at both locations" is factually wrong for shadowing. Either rename to "Shadowing Days" with a CLW-only card + STP follow-up, or treat campus tours as a separate flow (with a sourced contact, currently missing). |
| V-21 | L635 "Schedule a Tour" CTA `href="#"` | **MISSING (URL not wired)** | Same defect class as V-6. CLW has a tour/shadowing scheduling path implied by the PDF; STP has no live equivalent. | Decide IA + wire URL. |

---

## Section 6 — `#admissions-faq` (5 Q/A)

| id | redesign location | Verifier's verdict | evidence | notes |
|---|---|---|---|---|
| V-22 | L657 "Is there an application fee? — No. Applying to PTC is completely free. There are no application or enrollment fees." | **FABRICATED** | Same defect as V-2 / V-4. No admissions extract states applying or enrollment is free. The phrase "no application fee" / "no enrollment fee" / "free" appears in zero admissions extracts. | High-stakes financial claim presented as a definitive policy answer. Either source from Tuition cluster (which has fee schedules) or strip. |
| V-23 | L666 "Do I need a high school diploma or GED? — Most career and technical programs require a high school diploma or GED equivalent. However, PTC also offers Adult Basic Education (ABE) and GED preparation programs if you need to complete that requirement first." | **FABRICATED — directly contradicts live** | Live admissions hubs (CLW L48, STP L38) state the actual requirement: "Students must be at least 16 years of age and not currently enrolled in high school." There is **no HS-diploma-or-GED requirement** in any admissions extract. | This is the single most consequential fabrication on the page: it tells prospective students they need a credential they may not actually need. STRIP and replace with verbatim age-16 + not-in-HS rule. |
| V-24 | L675 "When can I start? — Many PTC programs have multiple start dates throughout the year… Some programs have rolling enrollment." | **REWORDED-DRIFT** | Live CLW L50 + STP L40 (identical): "Most of our programs start five times per school year: August, October, January, March/April, and June." The redesign **drops the five concrete start months** and adds an unsourced "rolling enrollment" claim. | Restore the 5-month list verbatim. Drop "rolling enrollment" unless sourced. |
| V-25 | L684 "Is financial aid available? — Yes. PTC participates in federal and state financial aid programs, including **Pell Grants, Florida Student Assistance Grants, scholarships, and veterans benefits**. Complete your FAFSA to find out what you qualify for." | **FABRICATED (specific program names)** | Live admissions hubs mention FAFSA + Financial Aid office. **"Pell Grants" and "Florida Student Assistance Grants"** appear in zero admissions extracts (verified by grep across all 16 + 2 cross-cluster extracts). These specific aid program names are protected substantive content. | Either source from Tuition cluster (likely has FAFSA / Pell content) and link, or rewrite generically. |
| V-26 | L693 "Can I attend part-time or in the evening? — Some programs offer evening and part-time scheduling options. Availability varies by program and campus. Check the program page or ask your counselor for details." | **REWORDED-OK with WEAK SOURCING** | Live `enrollment-options.md` L17-18 (CLW=STP byte-identical): "Students are expected to enroll on a full-time basis each fee period. With prior approval, a student may be eligible to enroll on a half-time basis for a fee period." This is the closest live source and it does NOT mention evening, only half-time-with-approval. **"Evening"** is unsourced. | Replace with verbatim full-time/half-time-with-approval framing. Drop "evening" unless sourced. |

---

## Section 7 — `#accommodations`

| id | redesign location | Verifier's verdict | evidence | notes |
|---|---|---|---|---|
| V-27 | L708 "Accommodations are available during the instructional program for students with documented physical or mental impairments. Please see a school counselor for further information." | **VERBATIM** | Byte-identical to CLW admissions hub L40 (`counselors/extracted/clearwater/admissions.md`). Comment on L702 explicitly cites the source. STP omits this sentence per Counselors-cluster follow-up F5 / `follow-ups.md` L156. | Properly sourced. Compliance/legal-stakes language correctly carried verbatim. |
| V-28 | L709 cross-links "Meet Clearwater counselors" / "Meet St. Petersburg counselors" | **VERBATIM (UX layer)** | Cross-links are UX per verbatim-rule §2. Counselor pages exist (`clearwater-counselors.html`, `stpete-counselors.html`). | OK. |

---

## Section 8 — `#cta-section` (CTA band, footer)

| id | redesign location | Verifier's verdict | evidence | notes |
|---|---|---|---|---|
| V-29 | L725 "Apply Now" CTA `href="#"` | **MISSING (URL)** | Same defect as V-6, V-21. Should be `https://apply.myptc.edu` per inventory L11. | Wire URL. |
| V-30 | L726 "Contact Admissions" CTA `href="#"` | **MISSING (URL)** | Should route to a real contact page or `inforequest.myptc.edu` per inventory L11. | Wire URL. |
| V-31 | Page hero L481 subtitle ("Whether you are a first-time student, transferring from another school, or returning after a break, we will guide you through every step.") | **REWORDED-OK (UX)** | Marketing copy, no protected claims. | OK. |

---

## Spot-checks (3 random VERBATIM-class rows)

| spot | Verifier's verdict | evidence |
|---|---|---|
| Header phone numbers L291/293 ("Clearwater: 727.538.7167" / "St. Pete: 727.893.2500") | **CONFIRM VERBATIM (digits)** | Phones digit-identical to CLW hub L34 (`727-538-7167`) and STP hub structure; format normalization permitted per verbatim-rule §"Phone-number formatting normalization." |
| Footer non-discrimination L799 ("Pinellas County Schools prohibits any and all forms of discrimination and harassment based on race, color, sex, religion, national origin, marital status, age, sexual orientation, or disability.") | **CONFIRM VERBATIM** | Out-of-cluster (Compliance), already drift-watched per Compliance-cluster verification. Identical to PCSB-sourced text. No protected category expansion. |
| L742 footer tagline "since 1962" | **CONFIRM VERBATIM** | About-cluster verified the 1962 founding date (typo "1961" was the live-side error, sweep applied per `verbatim-rule.md` cluster table). |

---

## Counts

- **VERBATIM (CONFIRM):** 4 (V-5 first sentence, V-27, V-28, +3 spot-checks)
- **REWORDED-OK:** 6 (V-5 second sentence, V-7, V-8 partial, V-14, V-17 partial, V-26 partial, V-31)
- **REWORDED-DRIFT:** 5 (V-1, V-10, V-11, V-15, V-24)
- **FABRICATED:** 11 (V-2, V-3, V-4 partial, V-8 partial, V-9, V-12, V-13, V-16, V-17 partial, V-20, V-22, V-23, V-25, V-26 partial)
- **MISSING (verbatim source unused):** 5 (V-6, V-18, V-21, V-29, V-30)
- **NEEDS-MORE-RESEARCH:** 0

**Total V-rows:** 31. Multiple rows have compound verdicts; the count above totals each verdict-token rather than each row.

---

## Verifier-added issues (Comparator may have missed)

- **V-4 contradicts live age requirement.** "High school diploma or equivalent" displaces the actual live rule "at least 16 years of age and not currently enrolled in high school." Compounds with V-12 (Dual Enrollment card invites HS students) and V-23 (FAQ asserts HS-diploma-or-GED requirement). Three places on one page assert a credential rule that contradicts the live two-rule system.
- **V-6 / V-21 / V-29 / V-30 — every Apply / Tour / Contact CTA is `href="#"`.** Four broken CTAs on the canonical Admissions page. Inventory specifies `apply.myptc.edu` and `inforequest.myptc.edu` as the live institutional CTAs. None are wired.
- **V-20 "campus tours" is institutional invention.** Live admissions IA has no "campus tour" concept — it has "Shadowing Days & Times." Choosing the new IA term is a Stage-3 IA decision the redesign made unilaterally; combined with the STP 404 on shadowing, the "at both locations" claim is factually wrong.
- **V-25 specific aid program names dropped into a substantive answer.** Pell Grant and Florida Student Assistance Grant are real programs but cited without a sourced live admissions claim. Belongs in Tuition cluster's Stage-3 outputs (`tuition-aid.html`).
- **No www admissions content exists** (inventory L11): the redesign's institutional framing (single page, single FAQ, single accommodations notice) is itself a Stage-3 IA-Recommender call, not a verbatim source. The IA decision is fine; the substantive prose inside it has to be sourced. Most of `#how-to-apply`, `#enrollment-steps`, and `#admissions-faq` is not sourced.

---

## Live-site issues to add to `follow-ups.md`

1. **STP shadowing-days-times 404.** Either publish a STP shadowing schedule (parity with CLW's April 2026 PDF) or document the absence on the redesign with a "STP shadowing handled at program level" note. (Inventory already flagged.)
2. **STP TEAS PDF stale (08/25/2023).** Replace with current schedule. (Inventory already flagged.)
3. **STP TEAS contact not named.** CLW names Merritt Scott (`scottme@pcsb.org`, x2032); STP names no contact. Either name a STP TEAS contact or designate Merritt Scott as the institutional contact for both campuses.
4. **STP admissions hub omits accommodations sentence.** Already on `follow-ups.md` from Counselors cluster (F5 / line 156). Confirmed still open during this verification.
5. **Apply / Inquiry CTAs unwired on redesign.** `admissions.html` lines 298, 513, 725, 726 all `href="#"`. Wire to `apply.myptc.edu` and `inforequest.myptc.edu` (or designate institutional landings) before launch. (Internal redesign defect, not a live-site ask.)
6. **www has no institutional admissions content** (inventory headline). The redesign creates an institutional admissions page that has no live counterpart. Live owners (Marianne as webmaster) can author and sync once the live-owner exception in `verbatim-rule.md` §"The live-owner exception" is invoked. Until then, much of `admissions.html` is unsourced.

---

## Confidence assessment

Comparator output not present at verification time, so this verifier ran first-principles. Confidence in the verdicts above is **high** for the substantive-claim verdicts (sourced via direct extract greps and direct line-number citations). Confidence is **medium** for the IA-shaped issues (V-20 campus-tours framing) which depend on Stage-3 IA-Recommender's pending classification.

The headline finding for the cluster is consistent with the inventory's prediction: most live admissions content was authored once and copy-edited per campus, but the redesign's institutional admissions page **invented a substantial amount of new prose** (orientation, dual enrollment, fee policy, HS diploma rule, specific aid program names, TEAS program list, "evening" scheduling, "campus tours"). Approximately **35–45% of the page's substantive sentences are FABRICATED or REWORDED-DRIFT** against the live source pool. This is the highest fabrication-density cluster verified to date, exceeding the About-sub-pages and Compliance clusters.

Recommended next steps before this cluster can advance to `verified`:
- Strip or source the 11 fabrications enumerated above.
- Wire the 4 broken CTAs.
- Reconcile the HS-diploma vs age-16 contradiction across V-4, V-12, V-23.
- Decide IA on shadowing vs campus-tours and whether STP shadowing follow-up blocks launch.

When Comparator's `REDESIGN-COMPARISON.md` is written, reconcile by mapping its claim ids to V-1…V-31 and flagging any rows where the two reports diverge.
