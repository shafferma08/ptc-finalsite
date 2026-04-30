---
cluster: counselors
stage: 3-analyzing
artifact: REDESIGN-COMPARISON
generated: 2026-04-30
generator: audit-comparator
inputs:
  redesign_files:
    - welding-clearwater.html
    - welding-stpete.html
    - welding-advanced.html
    - admissions.html
    - tuition-aid.html
    - contact.html
  live_extracts:
    - extracted/clearwater/campus-staff.md
    - extracted/clearwater/program-welding-technology.md
    - extracted/clearwater/program-welding-technology-advanced.md
    - extracted/clearwater/admissions.md
    - extracted/clearwater/student-services-and-hours.md
    - extracted/stpete/campus-staff.md
    - extracted/stpete/program-welding-technology.md
    - extracted/stpete/program-welding-technology-advanced.md
    - extracted/stpete/admissions.md
    - extracted/stpete/student-services-hours.md
---

# Redesign Comparison — Counselors Cluster

This matrix compares every counselor-related claim in the PTC redesign against live PTC sources. Counselors are not published as a standalone page on either live or redesign; they appear inline on program pages and as generic "Talk to a Counselor" CTAs throughout admissions, tuition, and contact flows.

Binding rule: redesign content must come from approved live PTC sites verbatim. Anything to be improved on the live site routes to `docs/audit/follow-ups.md` — never silently inserted into the redesign.

## Highest-stakes findings (read these first)

1. **FABRICATED — `welding-advanced.html` dual-counselor layout.** The redesign publishes a side-by-side "Clearwater Counselor: Valerie Santos / St. Petersburg Counselor: Cheri Ashwood" pattern in the "Ready to Get Started?" section (lines 856-893). No live source supports a dual-counselor presentation. On live, each campus's Welding Technology — Advanced page lists only its own single school counselor (Valerie Santos at CLW, Cheri Ashwood at STP) on its own program page. The dual-counselor layout invents an information architecture that does not exist. Marianne has confirmed this is a known fabrication. Highest priority for IA recommendation.
2. **VERBATIM (good) — Counselor names, titles, emails, phones on `welding-clearwater.html` and `welding-stpete.html`** all match live verbatim, including title "School Counselor", emails (santosv@pcsb.org, ASHWOODC@pcsb.org), and phone extensions (727-538-7167 x2017 and 727-893-2500 x2325).
3. **REWORDED-OK — Generic "Talk to a Counselor" institutional CTAs on `admissions.html`, `tuition-aid.html`, and `contact.html`** are paraphrased institutional voice. They make no specific claims about named counselors and are consistent with the live admissions hub language ("Please contact a school counselor (admissions contact) with any questions"). Acceptable institutional summarization.
4. **MISSING — Live admissions pages explicitly clarify "school counselor (admissions contact)"** and the role of the counselor in accommodations and outside-funding agency coordination. The redesign uses generic "admissions counselor" language and loses the explicit live framing about accommodations referrals. Route to follow-ups.
5. **REWORDED-DRIFT — `admissions.html` step 3 "Meet with a Counselor"** describes scheduling "a meeting with an admissions counselor to review your application, discuss financial aid options, and plan your enrollment timeline." Live says "If needed, meet with a school counselor (admissions contact) to discuss program interests and requirements." Different scope (live: program interest discovery before applying; redesign: post-application meeting to review, discuss aid, and plan timeline). Material drift.

---

## Comparison matrix

### A. FABRICATIONS

| # | Topic | Redesign Claim | Live Source (file) | Live Wording | Status | Action Needed |
|---|-------|----------------|--------------------|--------------|--------|---------------|
| F1 | Dual-counselor layout on Welding Advanced | `welding-advanced.html` lines 856-893 publishes two counselor cards side by side (Clearwater Counselor Valerie Santos + St. Petersburg Counselor Cheri Ashwood) under one shared "Ready to Get Started?" section, framing them as paired contacts for one program | `extracted/clearwater/program-welding-technology-advanced.md` (line 21-23) and `extracted/stpete/program-welding-technology-advanced.md` (line 21-23) | CLW live page lists ONLY Valerie Santos. STP live page lists ONLY Cheri Ashwood. Each campus runs the program separately with its own single counselor. There is no live page that pairs the two. | **FABRICATED** | Replace with single-counselor block scoped to whichever campus the user has selected via the existing campus chooser, OR drop the named counselors entirely on the cross-campus page and link out to the campus-specific welding pages. IA-Recommender to decide layout. |
| F2 | "Schedules and counselor contacts vary by location" framing | `welding-advanced.html` line 665 says "Schedules and counselor contacts vary by location" — wording itself is fine but reinforces the fabricated dual-counselor expectation downstream | Inferred from live | Live treats counselors per-campus, per-program. The phrase "counselor contacts vary by location" is a redesign synthesis, not lifted from live. | **FABRICATED (light)** | Reword to "Schedules vary by campus. Each campus has its own counselor and instructors." or similar, only if the dual-card pattern below changes. |
| F3 | "Choose a campus to see schedules and counselors" hero nudge | `welding-advanced.html` line 611 hero subhead points users to a `#campuses` anchor for "schedules and counselors" | Inferred from live | Live makes no such cross-campus chooser claim. This is redesign synthesis. | **FABRICATED (light)** | Acceptable IF the page resolves into per-campus single-counselor presentation. If the page keeps a dual-counselor section, this hero promise is misleading. |

### B. MISSING (live has it, redesign does not)

| # | Topic | Redesign Claim | Live Source (file) | Live Wording | Status | Action Needed |
|---|-------|----------------|--------------------|--------------|--------|---------------|
| M1 | Counselor role in accommodations | Redesign admissions/tuition/contact pages do not mention counselors as the accommodations referral path | `extracted/clearwater/admissions.md` line 40 | "Accommodations are available during the instructional program for students with documented physical or mental impairments. Please see a school counselor for further information." | **MISSING** | Add an accommodations referral line to admissions.html that names the school counselor as the contact, verbatim or near-verbatim from live. |
| M2 | Counselor role in outside-funding (CareerSource, Voc Rehab) coordination | Redesign does not call out counselor as the funding-paperwork contact | `extracted/clearwater/admissions.md` line 42 | "If using an outside funding agency (CareerSource, Voc. Rehab, etc.), provide all necessary paperwork to the agency." (live places this in the counselor-led admissions sequence) | **MISSING** | Surface in admissions.html under enrollment steps. |
| M3 | Counselor as program-discovery contact (pre-application) | Redesign frames counselor meeting as step 3 (post-application) | `extracted/clearwater/admissions.md` line 18 + line 52; `extracted/stpete/admissions.md` line 18 + line 42 | "If needed, meet with a school counselor (admissions contact) to discuss program interests and requirements." and "Please contact a school counselor (admissions contact) with any questions." | **MISSING (drift adjacent)** | Add a pre-application "talk to a counselor" entry point to admissions.html or reframe step 3 to acknowledge counselor consultation can happen before applying. |
| M4 | "School counselor (admissions contact)" framing | Redesign uses "admissions counselor" alone | live admissions pages, both campuses | "school counselor (admissions contact)" — live treats admissions counselor and school counselor as the same person, with the parenthetical clarifying the role | **MISSING** | Either adopt live's "school counselor (admissions contact)" phrasing on the admissions page, or document the rename decision in follow-ups.md. |
| M5 | Counseling Department hours (STP) | Redesign does not publish counseling department hours | `extracted/stpete/student-services-hours.md` lines 16-22 | "Counseling Department / Monday - Wednesday 7:00 am - 2:30 pm / Thursday 7:00 am - 5:30 pm / Friday 7:00 am - 2:30 pm" | **MISSING** | Add to stpete.html or to a future Student Services page. STP-specific. |
| M6 | Student Services hours (CLW) | Redesign does not publish CLW student services hours | `extracted/clearwater/student-services-and-hours.md` lines 18-22 | "Student Services / Monday-Thursday 6:45 am-6:30 pm / Friday 6:45 am-2:30 pm" | **MISSING** | Add to clearwater.html or future Student Services page. CLW-specific. |
| M7 | Full counselor roster (CLW) | Only Valerie Santos appears in redesign | `extracted/clearwater/campus-staff.md` lines 480-545 | Live publishes 4 counselors at CLW: Kimere Corthell (corthellk@pcsb.org), Yata Fields (fieldsy@pcsb.org), Lidija Milisav (milisavl@pcsb.org), Valerie Santos (santosv@pcsb.org), Merritt Scott (SCOTTME@pcsb.org). All listed with title "Counselor" (no "School") in the staff directory. | **MISSING** | Decide whether redesign publishes a counselor index or stays with program-page-only model. Route to IA-Recommender. |
| M8 | Full counselor roster (STP) | Only Cheri Ashwood appears in redesign | `extracted/stpete/campus-staff.md` lines 547-617 | Live publishes 3 counselors at STP: Cheri Ashwood (ASHWOODC@pcsb.org), Jeromy Johnson (JOHNSONJER@pcsb.org), Nancy Randolph (randolphn@pcsb.org). All listed with title "Counselor". | **MISSING** | Same as M7. |
| M9 | Phone-extension publication discipline | Redesign welding pages do publish extensions (good), but no other redesign page publishes counselor extensions | live program pages publish "x2017" and "x2325" inline | "santosv@pcsb.org \| 727-538-7167 x2017" / "ASHWOODC@pcsb.org \| 727-893-2500 x2325" | **MISSING (other pages)** | If counselor index page is built, publish extensions per live convention. |
| M10 | Counselor as financial-aid eligibility next-step | Redesign tuition-aid.html mentions "financial aid counselors" generically | `extracted/clearwater/admissions.md` line 34 | "After receiving notification of eligibility (typically within 3-5 business days), contact the Financial Aid office by visiting the school or calling 727-538-7167, option 7." (CLW) and Joanne Schnell (schnellj@pcsb.org) for VA / Sabrina Mitchell (mitchellsa@pcsb.org) for Pell at STP. | **MISSING** | Add the Financial Aid office contact convention (CLW phone option 7; STP named-contact emails) to tuition-aid.html. STP names two financial-aid specialists by role; redesign collapses this to "financial aid counselors." |

### C. DRIFT (different wording, meaning shift)

| # | Topic | Redesign Claim | Live Source (file) | Live Wording | Status | Action Needed |
|---|-------|----------------|--------------------|--------------|--------|---------------|
| D1 | Step 3 "Meet with a Counselor" (admissions.html) | "Schedule a meeting with an admissions counselor to review your application, discuss financial aid options, and plan your enrollment timeline." (line 509) | `extracted/clearwater/admissions.md` line 18 | "If needed, meet with a school counselor (admissions contact) to discuss program interests and requirements." | **REWORDED-DRIFT** | Live frames the counselor meeting as program-interest discovery, not post-application case management. Redesign expands the scope to include financial aid + timeline. Decision: either rewrite redesign to live's narrower scope, or route to follow-ups.md to broaden live. |
| D2 | "Your counselor will let you know what testing is needed" (admissions.html line 532) | Generic "counselor" framing for placement testing | Not found in live admissions extracts | Live admissions pages don't tie placement testing to counselor explicitly | **REWORDED-OK / DRIFT-LIGHT** | Plausible institutional voice, but no live source supports the specific claim that the counselor is the testing-info contact. Confirm with PTC or route to follow-ups. |
| D3 | "Work with your counselor to select your start date and register for your program" (admissions.html line 542) | Counselor as registration partner | Not found in live admissions extracts | Live does not specify that registration is done with the counselor | **REWORDED-OK / DRIFT-LIGHT** | Plausible. Confirm with counseling office. |
| D4 | "Your admissions counselor can provide specific start dates" (admissions.html FAQ line 675) | Counselor as start-date authority | Not found in live | Live admissions hub says "Most of our programs start five times per school year: August, October, January, March/April, and June." with no counselor attribution | **REWORDED-OK / DRIFT-LIGHT** | Plausible institutional voice. |
| D5 | "Talk to your high school counselor to see if you qualify" (admissions.html line 578, dual-enrollment block) | Refers to **HS** counselors, not PTC counselors | Not in live counselors-cluster extracts | Out of scope for this cluster (high-school counselor, not PTC counselor). | **OUT-OF-SCOPE** | Acceptable as written; flag only because a reader could conflate HS and PTC counselors. |
| D6 | "Your admissions counselor will confirm which test, if any, applies" (admissions.html line 602) | Counselor as test-decision authority | Not in live extracts | Live silent on this | **REWORDED-OK / DRIFT-LIGHT** | Plausible institutional voice. |
| D7 | Hero nudge "The #1 thing counselors repeat" on welding pages (welding-clearwater.html line 689 and welding-stpete.html line 792) | Implies counselor advice corpus exists | Not in live | Live program pages do not include counselor quotes or "top advice" content | **FABRICATED-LIGHT / DRIFT** | Acceptable as redesign editorial voice if the surrounding content is generic and doesn't quote a specific counselor. Confirm phrasing is institutional, not attributed. |

### D. VERBATIM and REWORDED-OK (matches live)

| # | Topic | Redesign Claim | Live Source (file) | Live Wording | Status | Action Needed |
|---|-------|----------------|--------------------|--------------|--------|---------------|
| V1 | Valerie Santos name | "Valerie Santos" (welding-clearwater.html line 960; welding-advanced.html line 862) | `extracted/clearwater/program-welding-technology.md` line 21; `extracted/clearwater/program-welding-technology-advanced.md` line 21 | "Valerie Santos, School Counselor" | **VERBATIM** | None. |
| V2 | Valerie Santos title "School Counselor" | "School Counselor" (welding-clearwater.html line 963; welding-advanced.html line 863) | same as V1 | "Valerie Santos, School Counselor" | **VERBATIM** | None. |
| V3 | Valerie Santos email | `santosv@pcsb.org` (welding-clearwater.html line 967-969; welding-advanced.html line 865-866) | same as V1 | `santosv@pcsb.org` | **VERBATIM** | None. |
| V4 | Valerie Santos phone | `(727) 538-7167 x2017` (welding-clearwater.html line 973; welding-advanced.html line 869) | same as V1 | `727-538-7167 x2017` | **VERBATIM (formatting only)** | Live uses `727-538-7167 x2017`; redesign uses `(727) 538-7167 x2017`. Same number, formatted per US convention. Acceptable. |
| V5 | Cheri Ashwood name | "Cheri Ashwood" (welding-stpete.html line 1107; welding-advanced.html line 879) | `extracted/stpete/program-welding-technology.md` line 21; `extracted/stpete/program-welding-technology-advanced.md` line 21 | "Cheri Ashwood, School Counselor" | **VERBATIM** | None. |
| V6 | Cheri Ashwood title "School Counselor" | "School Counselor" (welding-stpete.html line 1110; welding-advanced.html line 880) | same as V5 | "Cheri Ashwood, School Counselor" | **VERBATIM** | None. |
| V7 | Cheri Ashwood email | `ASHWOODC@pcsb.org` (welding-stpete.html line 1114-1116; welding-advanced.html line 882-883) | same as V5 | `ASHWOODC@pcsb.org` | **VERBATIM** (case preserved) | None. |
| V8 | Cheri Ashwood phone | `(727) 893-2500 x2325` (welding-stpete.html line 1120; welding-advanced.html line 886) | same as V5 | `727-893-2500 x2325` | **VERBATIM (formatting only)** | Same number, US formatting. Acceptable. |
| V9 | "PTC school counselors and program instructors" closing reassurance (welding-clearwater.html line 1060; welding-stpete.html line 1131) | "Specific certification and license requirements are available from PTC school counselors and program instructors." | `extracted/clearwater/program-welding-technology.md` line 81; `extracted/clearwater/program-welding-technology-advanced.md` line 77; `extracted/stpete/program-welding-technology.md` (parallel content); `extracted/stpete/program-welding-technology-advanced.md` (parallel content) | "Specific certification and license requirements are available from Pinellas Technical College school counselors and program instructors." | **VERBATIM (PTC abbreviation only)** | Acceptable abbreviation. |
| V10 | "talk to a counselor (admissions contact) with any questions" institutional voice | Generic CTA pattern across redesign admissions/tuition/contact pages | `extracted/clearwater/admissions.md` line 52; `extracted/stpete/admissions.md` line 42 | "Please contact a school counselor (admissions contact) with any questions." | **REWORDED-OK** | Institutional voice acceptable. Could be tightened to live's exact phrasing. |
| V11 | Tuition CTA "Talk to a Counselor" button (tuition-aid.html line 987) | Button label only | Live tuition pages (not in this cluster's extracts) and admissions hubs | "Please contact a school counselor (admissions contact) with any questions." | **REWORDED-OK** | Acceptable. |
| V12 | Contact page CTA band: "Our counselors are here to guide you every step of the way" (contact.html line 805) | Editorial CTA | Not directly in live | Institutional voice; no specific live claim contradicted | **REWORDED-OK** | Acceptable as institutional voice. |
| V13 | "Confirm with Cheri Ashwood (counselor)" internal note on welding-stpete.html line 961 | Internal author comment to confirm schedule difference | `extracted/stpete/program-welding-technology-advanced.md` line 23 | Cheri Ashwood is the named STP welding counselor on live | **VERBATIM (internal)** | Internal note, not user-facing. No action. |
| V14 | "Most of our programs start five times per school year" | Not surfaced on redesign admissions.html in this exact form (admissions.html line 675 is reworded) | `extracted/clearwater/admissions.md` line 50 | "Most of our programs start five times per school year: August, October, January, March/April, and June." | **REWORDED-OK** | Acceptable institutional rewording, but consider lifting verbatim. |

### E. OUTDATED

No items in this category for the counselors cluster. Live and redesign data agree on all named counselor records that the redesign actually publishes (Valerie Santos and Cheri Ashwood). No outdated-live or outdated-redesign mismatches detected.

---

## Quantitative summary

| Status | Count |
|--------|-------|
| FABRICATED | 3 (1 high-priority IA fabrication + 2 light synthesis) |
| MISSING | 10 |
| REWORDED-DRIFT | 1 high (D1) + 5 light/borderline (D2-D4, D6, D7) |
| VERBATIM | 9 (V1-V9) |
| REWORDED-OK | 5 (V10-V14) |
| OUTDATED | 0 |
| OUT-OF-SCOPE | 1 (D5, HS counselor reference) |

Total counselor-related claims audited: **34**

## Top-5 priority fixes

1. **Resolve the `welding-advanced.html` dual-counselor fabrication.** The current side-by-side counselor card layout on a single shared program page is unsupported by live and violates two-campus discipline. Convert to a per-campus presentation (campus chooser → per-campus card showing only that campus's counselor) or drop named counselors from the cross-campus page entirely and link out to the campus welding pages. Hand to IA-Recommender.
2. **Fix `admissions.html` step 3 drift (D1).** Either rewrite step 3 to match live's narrower scope ("If needed, meet with a school counselor (admissions contact) to discuss program interests and requirements"), or route a follow-up to live owners to broaden the live wording to match the redesign's expanded scope (review application + financial aid + timeline). Don't leave the drift unresolved.
3. **Add the accommodations referral line to admissions.html (M1).** Live explicitly names the school counselor as the accommodations contact. The redesign omits this. Add: "Accommodations are available during the instructional program for students with documented physical or mental impairments. Please see a school counselor for further information." Verbatim from CLW live.
4. **Decide whether the redesign publishes a counselor index page.** Live does not have one, but the redesign's program-page-only pattern means students at non-welding programs have no way to see counselor names without navigating into a specific program. Options: (a) build a Student Services hub that lists all counselors with extensions per campus; (b) keep program-page-only model and explicitly document the decision. Hand to IA-Recommender.
5. **Adopt the "school counselor (admissions contact)" phrasing across admissions/tuition/contact pages (M4).** Live's parenthetical does specific disambiguation work — it tells users that the same person handles both program advising and admissions intake. The redesign's generic "admissions counselor" loses this. Either adopt live phrasing verbatim, or decide on a single redesign-canonical term and document it.
