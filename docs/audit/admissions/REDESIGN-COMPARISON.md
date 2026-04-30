# Admissions Cluster — Redesign Comparison (Stage 3)

**Generated:** 2026-04-30
**Subagent:** `audit-comparator`
**Redesign target:** `admissions.html` (institutional, single page)
**Live sources:** 16 verbatim extracts under `docs/audit/admissions/extracted/{clearwater,stpete}/` plus 4 cross-cluster reuses from `docs/audit/counselors/extracted/`
**Verbatim rule applied per:** `docs/audit/verbatim-rule.md` (phone-format normalization permitted; UX/structure/CTAs not bound by verbatim; "missing on live → strip + log follow-up, never invent.")

---

## How to read this report

- One row per substantive claim in `admissions.html`. UX-layer items (purely decorative chrome, breadcrumb labels) are aggregated where appropriate, not enumerated 1:1.
- Verdicts: **VERBATIM**, **REWORDED-OK**, **REWORDED-DRIFT**, **MISSING**, **FABRICATED**, **OUTDATED-LIVE**, **OUTDATED-REDESIGN**.
- Live sources cited by relative path under `docs/audit/`.
- Sections grouped by anchor: page hero, `#how-to-apply`, `#enrollment-steps`, `#pathways`, `#testing`, `#campus-tours`, `#admissions-faq`, `#accommodations`, `#cta-section`, footer-disclosure block.

**Cluster-level baseline finding:** www has zero admissions content. Per verbatim-rule.md, the institutional admissions page sources from the union of CLW + STP campus extracts. Where they agree (5 of 7 byte-identical paired sub-pages), one verbatim source serves both campuses. Where they diverge (admissions hub framing, testing hub, TEAS), the redesign must either pick one verbatim source and document the choice or split into per-campus content blocks.

---

## Section: Page hero (lines 472-483)

| ID | Loc | Redesign text | Live source | Live text | Verdict | Notes |
|---|---|---|---|---|---|---|
| HERO-1 | L480 | `<h1>Admissions</h1>` | both `counselors/extracted/{clw,stp}/admissions.md` line 14 | "Admissions" | **VERBATIM** | Heading match. |
| HERO-2 | L481 | "Getting started at PTC is straightforward. Whether you are a first-time student, transferring from another school, or returning after a break, we will guide you through every step." | (none — searched all 16 admissions extracts + 4 counselors reuses) | n/a | **FABRICATED** | No live source. Plausible institutional-tone hero copy, but invented. UX-layer hero subtitle that makes substantive claims about who we serve and process tone. Recommended action: replace with a live-sourced summary or strip and route to `follow-ups.md` as "institutional admissions hero needs an authored canonical line." |

---

## Section: `#how-to-apply` (lines 488-516)

| ID | Loc | Redesign text | Live source | Live text | Verdict | Notes |
|---|---|---|---|---|---|---|
| HTA-1 | L491 | Tag: "Get Started" | (UX label) | n/a | **REWORDED-OK** | UX. Not bound by verbatim. |
| HTA-2 | L492 | "How to Apply" | n/a | n/a | **REWORDED-OK** | UX heading. Live uses "General admissions process". |
| HTA-3 | L493 | "Applying to PTC is free and takes just a few steps. Most students can complete the process in a single visit." | (none) | n/a | **FABRICATED** | "Free" claim is supportable indirectly (live makes no statement of "no application fee" — it just doesn't list one). "Most students can complete the process in a single visit" is unsourced and concrete. Strip or rewrite from live's "general admissions process" framing. |
| HTA-4 | L498-499 | Step 1 — "Choose Your Program. Browse our 40+ career programs to find the one that matches your goals. Check campus availability, schedule options, and program length." | (none — no live admissions extract uses "40+ programs" or describes step-1 choice this way) | n/a | **FABRICATED** | The "40+ career programs" stat is institutional and not sourced from any of the 16 admissions extracts. Cross-cluster: CLAUDE.md history mentions "40+ programs" but live admissions content does not assert it. Strip the count or source from `programs.html` extract (separate cluster). The whole step framing is invented — live does not structure the application as 3 steps. |
| HTA-5 | L502-504 | Step 2 — "Submit Your Application. Complete the online application. You will need proof of residency, a valid ID, and your high school diploma or equivalent. There is no application fee." | partial — `counselors/extracted/clw/admissions.md` lines 20-22: "Create your account and complete the application: PTC Application. Be sure to view and complete your checklist (for example, upload your photo identification, complete basic skills testing if necessary, etc.). For in-state tuition, applicants must upload proof of Florida residency when they apply." | (see live) | **REWORDED-DRIFT** | Drift items: (1) "high school diploma or equivalent" is **fabricated** — live admissions hub never lists diploma as an application requirement. The age requirement on live is "at least 16 years of age and not currently enrolled in high school" (CLW hub line 48; STP hub line 38). (2) "proof of residency" is sourced but reworded; live specifies "Florida residency" + "for in-state tuition" — redesign drops the in-state-tuition qualifier. (3) "valid ID" maps to live's "photo identification" — OK paraphrase. (4) "There is no application fee" is **fabricated** (no live source asserts this). |
| HTA-6 | L507-509 | Step 3 — "Meet with a Counselor. If needed, meet with a school counselor (admissions contact) to discuss program interests and requirements. You can connect with a counselor before or after applying." | `counselors/extracted/clw/admissions.md` line 18; STP hub line 18 | "If needed, meet with a school counselor (admissions contact) to discuss program interests and requirements." | **VERBATIM** (first sentence) + **REWORDED-OK** (second sentence — UX clarification of when to do this step) | First sentence is byte-for-byte verbatim. The "before or after applying" addition is a UX clarification, acceptable. |
| HTA-7 | L513 | CTA: "Start Your Application" → `href="#"` | live homepage uses `apply.myptc.edu` (per inventory.md line 11) | n/a (URL) | **REWORDED-DRIFT** + **MISSING URL** | Button label is UX (OK) but `href="#"` is broken and the live system uses an external Finalsite app at `apply.myptc.edu`. Inventory explicitly calls this out: "The redesign should preserve those external CTAs verbatim." This is a high-stakes URL fix. |

---

## Section: `#enrollment-steps` (lines 521-546)

The redesign claims "After your application is accepted, here is what comes next" and presents 3 steps: Complete Required Testing, Arrange Financial Aid, Register for Classes. This framing does not exist on live. CLW admissions hub presents enrollment as a single un-numbered list of 8-9 process points (testing, financial aid, shadowing, accommodations, agency funding, fees) all under one "general admissions process" heading. STP hub is shorter (1520 chars) and trims a few items.

| ID | Loc | Redesign text | Live source | Live text | Verdict | Notes |
|---|---|---|---|---|---|---|
| ES-1 | L524 | Tag: "What to Expect" | (UX) | n/a | **REWORDED-OK** | UX. |
| ES-2 | L525 | "Enrollment Steps" | (UX) | n/a | **REWORDED-OK** | UX heading; live treats this as one section ("General admissions process"). |
| ES-3 | L526 | "After your application is accepted, here is what comes next." | (none) | n/a | **FABRICATED** | Live does not gate these steps behind "after acceptance." Live treats testing, financial aid, etc. as concurrent items in the application flow, not post-acceptance follow-up. Drift in process model. |
| ES-4 | L531-532 | Step "Complete Required Testing — Some programs require placement testing (CASAS or TEAS). Your counselor will let you know what testing is needed for your program." | partial — CLW hub line 22 ("complete basic skills testing if necessary"); CLW testing extract `extracted/clw/testing.md` mentions CASAS and TEAS as the two test types | (see live) | **REWORDED-OK** | Substantive content is sourced (CASAS + TEAS as the placement tests). Phrasing is paraphrased but meaning preserved. |
| ES-5 | L535-537 | Step "Arrange Financial Aid — Complete your FAFSA and meet with the financial aid office to explore grants, scholarships, veterans benefits, and payment plans." | partial — `counselors/extracted/clw/admissions.md` lines 26-32 | "Apply for financial aid, if needed. To apply online, visit FAFSA. The School Code for PTC (Clearwater campus) is 005605. Applicants can also obtain a paper application from the Financial Aid office. ... contact the Financial Aid office by visiting the school or calling 727-538-7167, option 7." | **REWORDED-DRIFT** | (1) Drops the FAFSA School Codes (CLW 005605, STP 013917) — concrete actionable detail. (2) Drops the 727-538-7167 option 7 contact path. (3) Drops the STP-specific contacts (Joanne Schnell schnellj@pcsb.org for VA, Sabrina Mitchell mitchellsa@pcsb.org for Pell) per `counselors/extracted/stp/admissions.md` line 34. (4) Adds "scholarships" and "payment plans" without live source. The redesign should let the Tuition cluster carry the substantive aid detail and just point there. |
| ES-6 | L540-542 | Step "Register for Classes — Work with your counselor to select your start date and register for your program. Attend new student orientation to get set up for day one." | partial start dates: `counselors/extracted/{clw,stp}/admissions.md` line 50/40 ("Most of our programs start five times per school year: August, October, January, March/April, and June") | (see live) | **REWORDED-DRIFT** | Drift items: (1) Drops the **5 start dates per year** detail (concrete and useful). (2) **"Attend new student orientation" is fabricated** — no live source mentions a new student orientation. Strip orientation reference or source it from a separate live page. |

**Section-level missing items (live has, redesign omits):**
- Acceptable Proofs of Residency entire page (1328 chars, byte-identical CLW=STP) — covers Florida Statute 1009.21 and 5 statute citations. **MISSING.** Redesign mentions "proof of residency" in passing but does not link out or summarize the documentation framework.
- Enrollment Options entire page (2675 chars, byte-identical CLW=STP) — defines adult-student status (16+, not in secondary), full-time vs half-time, OCPs, Career Technical Certificate vs Continuing Workforce Education tracks. **MISSING.** This is substantive institutional content with stakes (defines what "completion" means and who can enroll). Should not just be omitted.
- FAFSA School Codes (CLW 005605, STP 013917). **MISSING from this section** — possibly belongs in tuition-aid.html but should at least be referenced.
- Financial-aid-eligibility timeline ("typically within 3-5 business days"). **MISSING.**
- Specific funding-agency mention (CareerSource, Voc. Rehab) per CLW hub line 42. **MISSING.**
- "Once notified that you are accepted into the program, pay all applicable fees to finalize your registration" per CLW hub line 44. **MISSING.**

---

## Section: `#pathways` (lines 551-592)

| ID | Loc | Redesign text | Live source | Live text | Verdict | Notes |
|---|---|---|---|---|---|---|
| PATH-1 | L554 | Tag: "Your Path to PTC" | (UX) | n/a | **REWORDED-OK** | UX. |
| PATH-2 | L555 | "Admission Pathways" | (UX heading) | n/a | **REWORDED-OK** | UX. |
| PATH-3 | L561-563 | "Transfer Students — Transferring from another technical school or college? You may be able to receive credit for prior coursework. Bring your official transcripts to your admissions meeting." | `extracted/{clw,stp}/admissions-transfer.md` line 14-23 (byte-identical between campuses) | "An incoming student who has previously attended another accredited postsecondary institution may provide an official transcript for credit evaluation. Acceptance of credit completed at another institution will be appropriately awarded provided it occurred during the past three (3) years." | **REWORDED-DRIFT** | Drift: (1) Drops the **3-year window** for accepted credits — substantive, concrete detail. (2) Drops the "accredited postsecondary institution" qualifier (live is more specific). (3) Drops the entire **work-experience credit** framework (5 documentation examples: license, certification, work samples, training docs, validated volunteer work) — about half the live transfer page. (4) Tone shift from formal/legal to conversational is a UX call but here it loses load-bearing detail. |
| PATH-3a | L563 | CTA: "Learn about transfer credit" → `href="#"` | (URL) | n/a | **MISSING URL** | Broken link. Should target a transfer detail page or link to the live transfer page until redesign builds one. |
| PATH-4 | L569-570 | "Readmission — Took a break and want to come back? If you were previously enrolled at PTC, you can apply for readmission. Contact your campus admissions office to get started." | `extracted/{clw,stp}/admissions-readmission.md` line 14-20 (byte-identical) | "Students must meet with a guidance counselor who will assist with registration forms and literacy testing. (Test scores are valid for a two-year period, provided there have been no changes in the literacy levels mandated by state guidelines.) A meeting with the instructor may be required before re-entering a program. Note: Course credit toward program completion is valid for a period of three years from initial entry date." | **REWORDED-DRIFT** | Drift: (1) Drops the **2-year test-score validity** rule. (2) Drops the **3-year course-credit-from-initial-entry** rule. (3) Drops the "meeting with the instructor may be required" detail. (4) Substitutes generic "contact your campus admissions office" — not wrong but loses the specific guidance-counselor + literacy-testing flow. The redesign card is shorter than live; live's 442 chars carry concrete process detail that is dropped. |
| PATH-4a | L571 | CTA: "Readmission process" → `href="#"` | (URL) | n/a | **MISSING URL** | Broken link. |
| PATH-5 | L577-578 | "Dual Enrollment — High school students can get a head start on their career by enrolling in PTC programs while still in high school. Talk to your high school counselor to see if you qualify." | (none in admissions cluster — live admissions extracts do not include a Dual Enrollment page or section) | n/a | **FABRICATED** | No live admissions extract mentions Dual Enrollment. Inventory.md notes Dual Enrollment surfaces in the redesign nav under Programs (`href="#"` placeholder) but live admissions sub-tree has no DE content. May exist on a different live page (Programs cluster) — verify in next cluster pass — but as of this audit, fabricated for admissions context. |
| PATH-5a | L579 | CTA: "Dual enrollment details" → `href="#"` | n/a | n/a | **MISSING URL** | Broken link. |
| PATH-6 | L585-586 | "Veterans — PTC proudly serves veterans and active-duty military. We accept VA education benefits and have dedicated veterans resources on both campuses." | (none in admissions cluster — Veterans content lives under `/admissions/military-veteran-student-resources` on CLW only, scoped OUT of this cluster per inventory.md line 28) | n/a | **REWORDED-DRIFT (cross-cluster)** | The card itself is plausible and the live Mil/Vet page exists on CLW. But: (1) "dedicated veterans resources on both campuses" needs verification — inventory.md flags Mil/Vet as **CLW only**. STP may not have a dedicated veterans page. This is a likely **FABRICATED** sub-claim. (2) The card belongs in the Tuition cluster (per inventory.md line 28). For this audit: flag the "both campuses" claim for Verifier. |
| PATH-6a | L587 | CTA: "Veterans benefits info" → `href="#"` | (URL) | n/a | **MISSING URL** | Broken link. |

---

## Section: `#testing` (lines 597-622)

| ID | Loc | Redesign text | Live source | Live text | Verdict | Notes |
|---|---|---|---|---|---|---|
| TEST-1 | L600 | Tag: "Placement Testing" | (UX) | n/a | **REWORDED-OK** | UX. |
| TEST-2 | L601 | "Testing & Assessment" | (UX) | n/a | **REWORDED-OK** | UX. |
| TEST-3 | L602 | "Some programs require a placement test before enrollment. Your admissions counselor will confirm which test, if any, applies to your program." | partial — implied by `extracted/clw/testing-casas.md` line 14 ("Career and technical certificate students must be tested within the first six weeks of program enrollment.") | (see live) | **REWORDED-OK** | Soft summary. Drift: the redesign says "before enrollment"; live says "within the first six weeks of program enrollment" — order matters slightly but redesign frames it more conservatively. Acceptable. |
| TEST-4 | L607-608 | "CASAS — Comprehensive Adult Student Assessment System. Required for most career and technical programs. Measures reading, math, and listening skills." | `extracted/{clw,stp}/testing-casas.md` (byte-identical between campuses) | "The Comprehensive Adult Student Assessment System (CASAS) is an instrument used to process new applicants. This is a standardized academic achievement test measuring achievement in mathematics and communication." | **REWORDED-DRIFT** | Drift items: (1) "Measures reading, math, and listening skills" — live says **"mathematics and communication"** (and elsewhere "computation (mathematics) and communication (reading/language arts)"). Redesign **adds "listening skills"** which is **fabricated**. CASAS does have listening modules but the live PTC source does not list them as the testing scope. (2) "Required for most career and technical programs" — live testing-casas line 22 says continuing workforce ed students, apprentices, and <600-hour programs are NOT required. "Most" is roughly accurate but loses the precision. (3) Drops the ESOL placement use case (live testing-casas line 26). |
| TEST-5 | L612-613 | "TEAS — Test of Essential Academic Skills. Required for health science programs including Practical Nursing, Patient Care Technician, and Surgical Technology." | partial — `extracted/clw/testing.md` line 32 mentions only "The Practical Nursing programs offered at Pinellas Technical College only accept TEAS test scores taken at a PTC campus testing center." STP testing hub line 28 says the same. | (see live) | **REWORDED-DRIFT** + partial **FABRICATED** | (1) "Test of Essential Academic Skills" — live does not spell out the acronym; close to industry standard but not sourced verbatim. Acceptable. (2) **"Required for health science programs including Practical Nursing, Patient Care Technician, and Surgical Technology"** — live admissions extracts only mention **Practical Nursing** as TEAS-required. Patient Care Technician and Surgical Technology are **fabricated as TEAS-required programs** unless the Programs cluster surfaces them. Strip those two programs or verify. |
| TEST-6 | L617-618 | "ABE / GED / ESOL — If you need to complete your GED or improve your English language skills, PTC offers Adult Basic Education and ESOL programs at both campuses." | partial — testing-casas extracts mention ESOL placement via CASAS but **no admissions extract describes ABE / GED / ESOL as offered programs**. The redesign nav has a placeholder link to "ABE / GED / ESOL" under Programs. | n/a | **FABRICATED (in this cluster)** | No admissions-cluster live source supports the existence of ABE/GED/ESOL programs at PTC, much less "at both campuses." This belongs to the Programs cluster. Strip from admissions or replace with a sourced summary if Programs cluster surfaces it. |

**Section-level missing (live has, redesign omits):**
- **CASAS testing schedule details** — CLW publishes "Mon-Thu testing starts at 8:00 a.m." + "Twice a month on Wednesday evenings, beginning at 4:30 p.m." (extracted/clw/testing.md). STP publishes "Mon-Fri 8:00am-11:00am". Both are concrete, useful, and **MISSING** from the redesign.
- **TEAS Contact: Merritt Scott** (`scottme@pcsb.org` / 727-538-7167 x2032), CLW PN Counselor (extracted/clw/testing.md line 57-59). **MISSING.** Per inventory: STP testing page does NOT name a TEAS contact, so this is `campus-specific`. Redesign should expose at least the CLW contact.
- **TEAS in-person requirement** ("required to be taken IN-PERSON on the Clearwater campus, for Clearwater PN applicants" — extracted/clw/testing.md line 38). **MISSING.** Substantive policy.
- **TEAS schedule details** — CLW publishes Mon-Thu 8:00 a.m. (arrive 7:30 a.m., no entry after 8:00) + Wed PM 4:30 p.m. (arrive 4:00, no entry after 5:00). STP publishes Mon-Fri 8:00 a.m. **MISSING.**
- **Sign-in locations** — CLW: "Administration, Building #2, front desk" (CASAS + TEAS AM) and "Student Services, Building #1, front desk" (TEAS PM). **MISSING.**
- **Scheduling phone** — CLW: "Call 727-538-7167 ext 2006 to schedule" (used for both CASAS and TEAS). **MISSING.**
- **Pre-test arrival rule** — "Please be 15 minutes early to register for all scheduled testing" (CLW) / "please arrive at least 30 minutes before your scheduled testing time" (STP). **MISSING. Asymmetric** — flag to IA-Recommender.
- **STP NCCER & ESCO testing window** — "Mon-Fri: 7:30am - Noon" (extracted/stp/testing.md line 34). **MISSING.** STP-only.
- **STP CASAS PDF link** — `casastestingschedstp_04012024.pdf` on pcsb.org (extracted/stp/testing.md line 18). **MISSING.**
- **STP TEAS schedule PDF** — `teas testing schedule_sp_08252023.pdf`. **MISSING.** **Also OUTDATED-LIVE — August 2023, ~2.5 years stale** per inventory finding 6. Carry a follow-up; do not embed the stale PDF on the redesign without the live owner refreshing it.

---

## Section: `#campus-tours` (lines 627-639)

| ID | Loc | Redesign text | Live source | Live text | Verdict | Notes |
|---|---|---|---|---|---|---|
| TOUR-1 | L631 | "Visit Our Campuses" | (UX heading) | n/a | **REWORDED-OK** | UX. |
| TOUR-2 | L632 | "See our labs, meet instructors, and learn about programs firsthand. Campus tours and shadowing days are available at both locations." | partial — `extracted/clw/admissions-shadowing-days-times.md` (PDF wrapper, current April 2026 schedule). STP equivalent does NOT exist (404 per inventory). | n/a (PDF link only) | **FABRICATED + REWORDED-DRIFT** | (1) "Campus tours" as a concept — no live source describes campus tours as a separate offering. Live publishes only "Shadowing Days & Times" with PDF schedules. **Tours is fabricated.** (2) **"available at both locations"** is **fabricated and likely wrong** — STP has no shadowing schedule page (404). This is the inventory's flagged asymmetry: CLW publishes a current April 2026 PDF; STP publishes nothing. Redesign cannot claim parity. (3) "See our labs, meet instructors, and learn about programs firsthand" — invented hero copy with no live source. |
| TOUR-3 | L635 | CTA: "Schedule a Tour" → `href="#"` | (URL) | n/a | **MISSING URL + LIKELY FABRICATED CTA** | No live "schedule a tour" workflow exists. Live offers only a shadowing PDF (CLW only). Either replace with "View Shadowing Schedule" linking to CLW's PDF + a STP placeholder, or strip and route to follow-up asking each campus to publish a tour-scheduling workflow. |

**Section-level missing:**
- **CLW shadowing PDF link** (`ShadowSchedule04-16-26.pdf`, current April 2026). **MISSING from redesign.**
- The fact that **STP has no shadowing page** at all is an inventory asymmetry that the redesign should NOT silently paper over. The current "available at both locations" claim is functionally a fabrication.

---

## Section: `#admissions-faq` (lines 644-698)

**Pre-amble:** No live source for an admissions FAQ surfaced in any of the 16 admissions extracts. Inventory.md predicted: "Likely fabricated or generic." Each Q/A is classified individually below. **All 5 Q/As are fabricated as FAQ content.** The underlying claims are sometimes derivable from live sources but no FAQ structure exists on live, and where the redesign's claim drifts from live (FAQ-1, FAQ-2), it is a verbatim violation.

| ID | Loc | Redesign Q/A | Live source | Verdict | Notes |
|---|---|---|---|---|---|
| FAQ-1 | L653-657 | Q: "Is there an application fee?" / A: "No. Applying to PTC is completely free. There are no application or enrollment fees." | (none — searched all 20 extracts) | **FABRICATED** | No live source asserts "no application fee" or "no enrollment fees." Even if true, no verbatim source supports it. Strip or get the business office to publish on live. |
| FAQ-2 | L661-666 | Q: "Do I need a high school diploma or GED?" / A: "Most career and technical programs require a high school diploma or GED equivalent. However, PTC also offers Adult Basic Education (ABE) and GED preparation programs if you need to complete that requirement first." | partial: live admissions hubs line 48/38 say "Students must be at least 16 years of age and not currently enrolled in high school" — does **NOT** say diploma is required | **FABRICATED + DRIFT** | Live's stated entry requirement is **age-based, not credential-based** ("at least 16, not currently in high school"). The redesign **invents a HS diploma / GED requirement** that contradicts live. **Highest-stakes fabrication in this cluster** — could mislead applicants into thinking they cannot apply without a diploma when live says they can. ABE/GED programs are also unsourced in the admissions cluster. |
| FAQ-3 | L670-675 | Q: "When can I start?" / A: "Many PTC programs have multiple start dates throughout the year. Your admissions counselor can provide specific start dates for the program you are interested in. Some programs have rolling enrollment." | partial: `counselors/extracted/{clw,stp}/admissions.md` line 50/40 — "Most of our programs start five times per school year: August, October, January, March/April, and June" | **REWORDED-DRIFT** | The live source gives a **specific 5-times-per-year + named months** answer. The redesign genericizes to "multiple start dates" + "some have rolling enrollment" (rolling-enrollment claim is **fabricated** — no live source mentions rolling enrollment). Strip rolling-enrollment claim; replace generic copy with the verbatim "five times per school year: August, October, January, March/April, and June." |
| FAQ-4 | L679-685 | Q: "Is financial aid available?" / A: "Yes. PTC participates in federal and state financial aid programs, including Pell Grants, Florida Student Assistance Grants, scholarships, and veterans benefits. Complete your FAFSA to find out what you qualify for." | belongs to Tuition cluster — admissions extracts only mention "Apply for financial aid, if needed. To apply online, visit FAFSA." | **FABRICATED (for admissions cluster)** | "Pell Grants" and "Florida Student Assistance Grants" are program names not sourced in any admissions extract. Belongs to Tuition cluster's verbatim sources (not in scope here). Cross-cluster handoff: Tuition cluster Comparator should verify these. For admissions, this Q/A is fabricated. |
| FAQ-5 | L689-693 | Q: "Can I attend part-time or in the evening?" / A: "Some programs offer evening and part-time scheduling options. Availability varies by program and campus. Check the program page or ask your counselor for details." | partial — `extracted/{clw,stp}/admissions-enrollment-options.md` line 17-18: "Students are expected to enroll on a full-time basis each fee period. With prior approval, a student may be eligible to enroll on a half-time basis for a fee period." | **REWORDED-DRIFT** | Live says **"full-time is the expectation, half-time only with prior approval"** — that's a meaningfully different framing than "some programs offer part-time." Drift toward marketing-friendly language that loses the policy nuance. "Evening" scheduling is not addressed in the admissions cluster (would be a Programs cluster claim). Strip or rewrite from live's verbatim policy text. |

---

## Section: `#accommodations` (lines 704-712)

| ID | Loc | Redesign text | Live source | Live text | Verdict | Notes |
|---|---|---|---|---|---|---|
| ACC-1 | L707 | Heading: "Accommodations" | (UX heading) | n/a | **REWORDED-OK** | UX. |
| ACC-2 | L708 | "Accommodations are available during the instructional program for students with documented physical or mental impairments. Please see a school counselor for further information." | `counselors/extracted/clearwater/admissions.md` line 40 — exact match | "Accommodations are available during the instructional program for students with documented physical or mental impairments. Please see a school counselor for further information." | **VERBATIM** | Byte-identical. **The HTML comment at L702 explicitly cites this provenance.** This is the gold standard for how content should land in this cluster. Note: this exact line does NOT appear in `counselors/extracted/stpete/admissions.md` (STP hub omits the accommodations sentence). So this content is sourced from CLW only, but the verbatim-rule.md framework allows campus-asymmetric content to ship as institutional with the source documented. |
| ACC-3 | L709 | "Meet Clearwater counselors · Meet St. Petersburg counselors" links | (UX nav) | n/a | **REWORDED-OK** | UX cross-link. Targets resolve internally to existing counselor pages — verify those targets exist (separate cluster). |

**Cross-cluster note:** `consumer-information.html` `#accessibility` (line 596-608) carries broader ADA/§504 framework with Stephanie Miller's contact. The admissions accommodations card is a thinner pointer to "see a school counselor" — appropriate scope split. No drift between this card and the consumer-information card.

---

## Section: `#cta-section` (lines 717-730)

| ID | Loc | Redesign text | Live source | Live text | Verdict | Notes |
|---|---|---|---|---|---|---|
| CTA-1 | L721 | "Ready to Start Your Career?" | (UX) | n/a | **REWORDED-OK** | UX hero copy. |
| CTA-2 | L722 | "Take the first step. Apply today or contact us with questions." | (UX) | n/a | **REWORDED-OK** | UX. |
| CTA-3 | L725 | CTA: "Apply Now" → `href="#"` | live: `apply.myptc.edu` (per inventory.md) | n/a (URL) | **MISSING URL** | Should target `https://apply.myptc.edu/`. Inventory: "The redesign should preserve those external CTAs verbatim." |
| CTA-4 | L726 | CTA: "Contact Admissions" → `href="#"` | live: `inforequest.myptc.edu` (per inventory.md) | n/a (URL) | **MISSING URL** | Should target `https://inforequest.myptc.edu/`. Same inventory note. |

---

## Footer disclosure block (lines 797-801)

| ID | Loc | Redesign text | Live source | Live text | Verdict | Notes |
|---|---|---|---|---|---|---|
| FOOT-1 | L799 | Non-discrimination paragraph | already verified in About hubs cluster + `consumer-information.html` (line 576) | "Pinellas County Schools prohibits any and all forms of discrimination and harassment based on race, color, sex, religion, national origin, marital status, age, sexual orientation, or disability." | **VERBATIM** | Cross-cluster: this footer block was already verified during About hubs cluster. No change. |

---

## Quantitative summary

| Verdict | Count | % of substantive rows |
|---|---:|---:|
| **VERBATIM** | 4 | 9% |
| **REWORDED-OK** | 13 | 30% |
| **REWORDED-DRIFT** | 11 | 25% |
| **FABRICATED** | 9 | 20% |
| **MISSING URL** (sub-class of REWORDED-DRIFT) | 6 | 14% |
| **MISSING (section-level, content)** | 14+ | (counted as line items below) |
| **OUTDATED-LIVE** | 1 (STP TEAS PDF, August 2023) | 2% |
| **OUTDATED-REDESIGN** | 0 | 0% |

(Pure-UX rows like decorative tags and section-header tags are tallied as REWORDED-OK; not all UX chrome is enumerated.)

**Headline ratios:**
- **20% of substantive rows are fabricated** (no live source). Highest concentration is in `#admissions-faq` (4 of 5 Q/As have meaningful fabrication) and `#campus-tours` (the entire campus-tours framing is invented).
- **25% of substantive rows drift** from live (paraphrase that drops detail or alters meaning). Highest concentration is in `#enrollment-steps` and `#pathways` cards where live has 442-2675 chars of detail per page that the redesign compresses to 2-3 sentences.
- **14 distinct concrete live items are MISSING entirely from the redesign** (FAFSA School Codes, Merritt Scott TEAS contact, sign-in locations, schedules, statute citations, work-experience credit framework, OCP/CWE definitions, etc.).
- **Only 9% of rows are clean VERBATIM matches.** The accommodations card and the Step 3 "Meet with a Counselor" first sentence are the standouts.

---

## Top 5 priority fixes (ranked by stakes)

### 1. FAQ-2 contradicts live policy on diploma requirement
**File:** `admissions.html` lines 661-666.
**Issue:** Redesign says "Most career and technical programs require a high school diploma or GED equivalent." Live admissions hubs (both campuses) say only "Students must be at least 16 years of age and not currently enrolled in high school." No live source asserts a diploma requirement. **Risk:** could mislead applicants without diplomas to self-select out when live says they can apply.
**Fix:** Replace with verbatim live text: "Students must be at least 16 years of age and not currently enrolled in high school." Strip the GED/ABE follow-up unless the Programs cluster surfaces those programs verbatim.

### 2. Apply / Inquire CTAs use `href="#"` instead of live's external apps
**File:** `admissions.html` lines 513, 725, 726 (3 buttons).
**Issue:** Live homepage routes admissions to `apply.myptc.edu` (application portal) and `inforequest.myptc.edu` (CRM/lead capture). The redesign's three primary CTAs all use `href="#"`. Inventory.md flags this explicitly: "The redesign should preserve those external CTAs verbatim."
**Fix:** Wire `Start Your Application` and `Apply Now` to `https://apply.myptc.edu/`; wire `Contact Admissions` to `https://inforequest.myptc.edu/`. Confirm exact URLs before publishing (both subdomains assumed root path; verify in next live-site pass).

### 3. Campus Tours section claims parity that does not exist on live
**File:** `admissions.html` lines 627-639.
**Issue:** "Campus tours and shadowing days are available at both locations" — STP has **no shadowing page at all** (404). CLW has a current April 2026 shadowing PDF but no "campus tours" workflow exists on either live campus. The "Schedule a Tour" CTA links to nothing real.
**Fix:** Two paths. (a) Re-aim the section to "Shadowing Schedule (Clearwater)" + a STP placeholder card with a follow-up to the STP campus admin asking whether to publish or remove. (b) Strip the section entirely until both campuses publish a real shadowing/tours workflow. Either path requires a `follow-ups.md` entry tagged STP-shadowing-asymmetry. Do not silently claim parity.

### 4. CASAS test scope drifts ("listening skills" added) and TEAS programs over-claimed (PCT, ST)
**File:** `admissions.html` lines 607-608 (CASAS), 612-613 (TEAS).
**Issue (CASAS):** Redesign says CASAS "Measures reading, math, and listening skills." Live says "mathematics and communication" and elsewhere "computation (mathematics) and communication (reading/language arts)." "Listening" is added. **Issue (TEAS):** Redesign claims TEAS is required for "Practical Nursing, Patient Care Technician, and Surgical Technology." Live admissions extracts only mention **Practical Nursing** as TEAS-required. The other two are fabricated as TEAS-required programs.
**Fix:** Use verbatim live language for CASAS scope ("mathematics and communication"). Strip Patient Care Technician and Surgical Technology from the TEAS program list, or verify their TEAS requirement against the Programs cluster sources before re-asserting.

### 5. `#enrollment-steps` and `#pathways` drop substantive concrete details
**File:** `admissions.html` lines 521-546 (enrollment), 551-592 (pathways).
**Issue:** The redesign cards summarize but drop concrete details that live publishes:
- FAFSA School Codes (CLW 005605, STP 013917) — drop on enrollment Financial Aid step.
- 5 start dates per year (August, October, January, March/April, June) — dropped on Register-for-Classes step (and FAQ-3).
- 3-year transfer-credit window — dropped on Transfer card.
- 2-year test-score validity + 3-year course-credit validity — dropped on Readmission card.
- "Veterans resources on **both** campuses" — likely fabricated; live Mil/Vet page exists on CLW only.
- Work-experience-as-credit framework with 5 documentation examples — entirely missing.
- OCP / Career Technical Certificate vs Continuing Workforce Education definitions — entire `admissions-enrollment-options` page (2675 chars) is missing from the redesign.
- "Twice a month on Wednesday evenings" CASAS schedule, Merritt Scott TEAS contact, sign-in building locations, "Call 727-538-7167 ext 2006 to schedule" — all missing.

**Fix:** Either (a) keep the cards as gateways and link to detail pages that carry live content verbatim, or (b) thicken each card with the verbatim live phrases that carry concrete actionable detail. Option (a) is cleaner architecturally; it requires building per-topic detail pages (transfer.html, readmission.html, enrollment-options.html, testing-clearwater.html, testing-stpete.html) sourced verbatim from the 16 extracts. The IA-Recommender output should weigh in on which path.

---

## Items routed to Verifier (random spot-checks)

The Verifier should sample-confirm the following **VERBATIM** verdicts:
- ACC-2 (accommodations sentence) against `counselors/extracted/clearwater/admissions.md` line 40.
- HTA-6 (first sentence "If needed, meet with a school counselor (admissions contact)…") against both campus admissions hubs.
- FOOT-1 against the About hubs cluster's verified non-discrimination block.

The Verifier should also confirm the **FABRICATED** verdicts on:
- FAQ-2 diploma claim (search the entire `extracted/` tree for any "diploma" mention — confirm absence).
- HTA-3 "free and takes just a few steps" / "single visit" claim (confirm absence).
- TEST-5 Patient Care Technician and Surgical Technology TEAS-required claim (confirm absence in admissions extracts; cross-cluster reference to Programs is OK to flag as out-of-scope-for-this-Verifier).

---

## Items routed to IA-Recommender

- STP shadowing-days-times asymmetry (CLW publishes, STP 404). Decide: shared section with two cards (CLW PDF + STP placeholder), or per-campus tabs with a STP follow-up.
- Testing — CLW vs STP. CLW testing hub (1368 chars) is more detailed than STP (812 chars) and CLW names a TEAS contact (Merritt Scott) that STP does not. Decide: institutional copy + per-campus contact card, or per-campus tabs.
- Whether `admissions.html` should keep `#enrollment-steps` as 3 generic cards or split into a separate `enrollment-options.html` carrying the live `admissions-enrollment-options.md` content (2675 chars, byte-identical CLW=STP) verbatim.
- Whether the Veterans card should remain on `admissions.html` or move entirely to `tuition-aid.html` (per inventory.md line 28).

---

## Items routed to `follow-ups.md`

These are live-site issues we surface but do not silently fix on the redesign:

1. **Live admissions hubs do not state application-fee status.** Redesign currently asserts "free / no application fee" with no source. Live business office should publish the fee-status statement on both `/admissions/admissions` hubs.
2. **STP has no shadowing-days-times page.** 404. Either publish one or align IA so the asymmetry is intentional.
3. **STP TEAS schedule PDF is dated August 25, 2023** (~2.5 years stale at audit time). Live owner should refresh.
4. **STP testing hub omits TEAS contact.** CLW names Merritt Scott; STP names no one. STP campus admin should confirm whether STP has a TEAS contact and publish if so.
5. **No FAQ exists on live admissions sub-tree.** If we want an admissions FAQ on the redesign, the business office or counseling team should author one for live first, then redesign mirrors verbatim.
6. **No "campus tours" workflow exists on live.** Live offers only a shadowing PDF. Either publish a real tour-scheduling workflow or align redesign to "shadowing" terminology.
7. **`stpete.myptc.edu/admissions/student-services-hours`** uses different slug from CLW's `student-services-and-hours` (no "and"). Already in counselors cluster inventory; cross-noted here.

---

## See also

- `docs/audit/admissions/inventory.md` — Stage 1+2
- `docs/audit/admissions/extracted/{clearwater,stpete}/` — verbatim live sources
- `docs/audit/counselors/extracted/{clearwater,stpete}/admissions.md` — admissions hubs (cross-cluster reuse)
- `docs/audit/verbatim-rule.md` — interpretation framework
- `docs/audit/follow-ups.md` — live-site action register (will receive 7+ new items from this cluster)
- `admissions.html` — redesign target page
