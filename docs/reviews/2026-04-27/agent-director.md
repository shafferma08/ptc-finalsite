# Director/Admin Review - 2026-04-27

**Reviewer:** Dr. Williams, Director, Clearwater Campus
**Pages reviewed:**
- `about.html` (institutional About hub)
- `clearwater-about.html` (Clearwater campus About)
- `stpete-about.html` (St. Petersburg campus About)
**Lens:** Enrollment conversion, COE accreditation readiness, PCSB brand alignment, two-campus equity. Could I walk a COE site visitor or a PCSB board member through these pages without having to apologize?

---

## Prior Issues Tracker - Status Across These Three Pages

I was asked to flag whether C3, C4, M7, and M8 are now resolved, partially addressed, or still open against these three pages. My read:

| # | Issue | Status on these pages | Evidence |
|---|-------|----------------------|----------|
| **C3** | Leadership representation - placeholder icons | **Still open.** No movement. | `about.html` lines 687-707: three identical `<i class="fas fa-user">` placeholder icons inside `.leader-card__photo`, with generic titles "Campus Director / Clearwater Campus", "Campus Director / St. Petersburg Campus", "District Administration / Pinellas County Schools." No names. No photos. No bios. The placeholder is more visible than it was last cycle because the rest of the page has matured around it. |
| **C4** | Compliance documentation links non-functional | **Substantially resolved on the campus About pages; still partial on `about.html`.** Both `clearwater-about.html` and `stpete-about.html` now link directly to live `clearwater.myptc.edu` / `stpete.myptc.edu` pages and `resources.finalsite.net` PDFs for accreditation, catalogs, written plans, SIP, safety/security, financial accountability, and records requests. That is a real change and it would survive a COE site visit. **However**, `about.html` still has no link to these documents from the institutional hub, only the Annual Impact Report PDF. A site visitor reading the institutional page would have no way to reach the COE-required campus plans or safety reports without first navigating to a campus page. |
| **M7** | Staff directory link dead | **Still open.** `about.html` line 705 "View Full Staff Directory" button still points to `href="#"`. Both campus About pages have "Staff Directory" only in the nav dropdown (`href="#"`) and in the campus footer (`href="#"`). This is the same dead link in three places. |
| **M8** | Accreditation reports & program outcomes data | **Partially addressed (improved since last cycle).** Annual Impact Report PDF now links from `about.html#annual-impact-report` (good). Written Plans, SIP, safety reports, and financial accountability now link from both campus About pages (very good). **What's still missing:** program-level outcomes data (completion rates, placement rates, licensure pass rates by program). The Annual Impact Report is institution-level. COE expects program-by-program data, and we still don't surface any. The campus pages link to "Follow-Up" and "Placement" plans but not to the actual outcome numbers. |

**Net movement since 2026-04-22:** real progress on C4 and M8 at the campus level. C3 and M7 unchanged. Closing the About cluster cleanly requires at least closing M7 (it's a one-line fix in three places) and naming a plan for C3 (even an interim "Leadership directory in development" placard would be better than three identical generic icons).

---

## Institutional Accuracy

**`about.html`** is the one I would actually hand to a board member, and it mostly holds up. The mission statement at lines 498 is verbatim from the live site. The vision and core values section (lines 508-531) is also verbatim, which I appreciate. The "Our Story" copy uses the right framing: "since 1962," "two campuses," "over 40 career areas and about 60 programs," "nearly 5,000 full-time students," "more than 250 business and industry partners." These align with what we say publicly.

**Concern - founding-year inconsistency.** `about.html` says "Since 1962" (line 488 hero, line 541 Our Story, footer "since 1962" line 761). Both campus About pages' footers say **"since 1961"** (line 251 Clearwater, line 256 St. Pete). This is a contradiction within the redesign. A COE visitor or accreditation reviewer flipping between pages will catch it instantly. **Suggested fix:** confirm the official founding year with PCSB Communications, then make all three pages and footers say the same thing. If 1962 is the authoritative date (matching the live institutional page), the campus footers need updating.

**Concern - "60+ programs" vs. "41 programs."** The hub claims "60+ Programs across 40+ Career Areas" (line 564) and "60+ programs" in the Our Story prose (line 542) and the Today timeline (line 605). Meanwhile `programs.html` was just confirmed at 41 program cards (M12 closed 2026-04-23). The live wording uses "about 60 programs" because PTC offers Occupational Completion Points, certificates, and full programs, and historically counts them differently. We're fine to keep the verbatim live language but somebody is going to ask us why our hub says 60 and our programs page lists 41. **Suggested fix:** add a single explanatory line under the stat block, "Programs include OCP-level certifications and full diploma programs across 8 career clusters," sourced from the PCSB / PTC catalog. Log to follow-ups if the live site doesn't already have that disambiguation.

**Concern - timeline is gutted.** Lines 593-607 show only "1962" and "Today" because we removed four unverified entries during the 2026-04-25 audit. That was the right call (don't ship fabricated dates), but a two-entry timeline visually reads as "we don't know our own history." **Suggested fix:** either (a) drop the timeline section entirely and keep the founding date in the Our Story prose, or (b) put a "More milestones coming as we verify them with PCSB Communications" line in there so it doesn't look broken. I would do (a).

**Concern - "Two Campuses, One Mission" copy mixes program lists.** Line 719 lists Clearwater programs as "health sciences, automotive technology, welding, HVAC, and more" and St. Pete as "culinary arts, cosmetology, IT networking, electrical, and commercial vehicle programs." If H2 (St. Pete page lists programs not offered there) is still open, this paragraph is at risk for the same problem. **Suggested fix:** verify program list against the official 2025-26 campus catalogs (already linked from the campus About pages), then keep the prose tight to programs that are unambiguously campus-specific.

**Campus About pages - institutional accuracy.** Both campus About pages correctly defer institutional content to `about.html` and constrain themselves to campus-specific compliance documents. That's exactly the IA discipline COE wants, and it's the correct two-campus pattern. Good.

**Minor copy bug (both campus About pages).** Line 178 (CLW) and line 177 (STP) both contain a duplicate word: "specific to the Clearwater Campus campus" and "specific to the St. Petersburg Campus campus." Reads as a typo. **Suggested fix:** change to "specific to the Clearwater Campus" and "specific to the St. Petersburg Campus."

---

## Accreditation & Compliance

This is the section that keeps me up at night, so I'll be specific.

**What's good:**
- COE is named, logoed, and addressed correctly on `about.html` (lines 622-631). 7840 Roswell Rd, Atlanta, phone matches the COE site. The `<abbr title="Council on Occupational Education">COE</abbr>` wrapping (L4 closure) is a small but real win for screen-reader accessibility.
- Cognia is named and addressed correctly (lines 632-641). The "(formerly AdvancED / SACS)" parenthetical is exactly right for older alumni and employers.
- PCSB is acknowledged as governance (lines 642-651) - good district alignment.
- The campus About pages each explicitly state "individually accredited by COE and Cognia" and link to the live campus accreditation page. That distinction matters; campuses are accredited individually, not collectively, and a COE site visitor will check that the website acknowledges that.
- All 10 COE-required Written Plans are listed by name on both campus About pages. That's a meaningful compliance signal.
- HEERF I/II/III financial accountability reports are linked. Federal funds reporting is a genuine compliance trigger.
- Records request paths are surfaced on both campus pages with named contacts (`canfieldj@pcsb.org` for CLW, `kilpatrickc@pcsb.org` for STP). Records access is a Title IV / FERPA-adjacent obligation.
- Non-discrimination statement is in every footer (correct district language).
- Skip-link, focus indicators, abbr wrapping, and breadcrumb semantics are all in place from prior closure cycles.

**What still concerns me:**

1. **No Code of Conduct on the Clearwater About page.** St. Pete has a Code of Conduct card (line 221, links to STP_PTC_Code_of_Conduct_25-26.pdf). Clearwater does not. Either (a) Clearwater publishes its own Code of Conduct PDF on the live site and we missed it, or (b) Clearwater uses the same district Code of Conduct and we should link to that with a clear label. **Suggested fix:** confirm with Clearwater administration which document governs CLW student conduct, then add the matching card. Equity between campuses on a compliance document is non-negotiable for COE.
2. **No program outcomes data anywhere on the institutional hub.** COE specifically expects published completion, placement, and licensure pass rates. The Annual Impact Report PDF is good, but it's an aggregated narrative. **Suggested fix:** add a card under the Accreditation section of `about.html` titled "Program Outcomes & Performance Data" that links to the campus Follow-Up and Placement plans on each campus, plus any institution-level outcomes report. Until program-level outcomes exist on the redesign, this is the bridge.
3. **No ADA / Section 504 statement on the institutional About page.** The footer has "Accessibility" link to `consumer-information.html#accessibility`, which is correct, but the institutional About page itself contains no statement of ADA compliance or accessibility commitment. A COE visitor reads the About page first. **Suggested fix:** add one short paragraph to the Accreditation section of `about.html`, "Pinellas Technical College complies with Section 504 of the Rehabilitation Act and the Americans with Disabilities Act. For accessibility services and accommodations, see our Consumer Information page," with a link.
4. **No equity / Title IX / Title VI compliance officer named on the About page.** The PCSB Compliance Officer (Office of Equal Opportunity, 727-588-6285, complianceofficer@pcsb.org) is the canonical contact for non-discrimination concerns. The footer non-discrimination statement is generic. **Suggested fix:** in the Accreditation section, add a small "Compliance Concerns" block naming the PCSB Office of Equal Opportunity contact. This is the link a Title IX investigator or OCR auditor expects to find.
5. **C3 placeholder icons are an active accreditation risk.** When a COE visitor lands on the institutional About page and sees three identical generic-person silhouettes labeled "Campus Director" with no names, the polite read is "site under construction." The less polite read is "they don't know who runs their own institution." **Suggested fix:** even before real photos arrive, replace the three icon cards with named cards: "Dr. [Name], Director, Clearwater Campus" / "[Name], Director, St. Petersburg Campus" / "[Name], Superintendent, Pinellas County Schools." A name + title + a generic placeholder photo with initials is far better than three identical fontawesome icons.
6. **M7 staff directory dead link is a compliance smell.** The "View Full Staff Directory" button at the bottom of the Leadership section (line 705) goes to `href="#"`. A campus that can't surface its own staff directory looks understaffed or disorganized to an outside reviewer. Same dead link in the campus nav dropdowns (line 130 CLW, line 129 STP) and campus footers ("Staff Directory" `href="#"`). **Suggested fix:** even if a real directory page is months out, route this link to a stub `staff-directory.html` page that says "Directory in development. To reach a specific department, use the contact links on the relevant program page or call the campus front desk at [number]." That's better than three dead links.

---

## Enrollment Conversion

**`about.html`:**
- CTA Band at the bottom (lines 736-749) has "Apply Now" and "Request Info" buttons - good intent, but both are `href="#"`. C2 still open. This is the institutional About page; a prospective student or parent who reads it to its end and clicks Apply Now should not land on a `#`. **Suggested fix:** route both to the live application portal (or a stub `apply.html` that says "Application portal opens [date]" with the campus phone numbers as fallback).
- "Two Campuses, One Mission" section has working CTAs to `clearwater.html` and `stpete.html`, which is the right next click for a prospective student. Good.
- Utility bar Apply Now (line 315) is also `href="#"`. Same fix.
- The "View Full Staff Directory" button at line 705 is the wrong CTA for this section. Campus Leadership should drive toward "Schedule a Tour" or "Connect with Admissions," not toward an internal directory. **Suggested fix:** replace with `<a href="admissions.html#campus-tours" class="btn btn--primary">Schedule a Campus Visit</a>` and demote the staff directory to a small text link.

**`clearwater-about.html` and `stpete-about.html`:**
- These pages are correctly designed as compliance/records pages, not enrollment-conversion pages, so I don't expect a giant CTA band. However, neither page has **any** path toward enrollment from the body. A parent reading the campus accreditation page might decide "okay, this place is real, I want to apply," and they have nowhere to click except the header "Apply Now" button (which is `href="#"`).
- **Suggested fix:** add a slim CTA card at the bottom of the compliance section: "Ready to enroll? Visit Admissions for application steps and contact campus admissions at [phone]." Keep it understated, but give the button somewhere to go. And fix the header Apply Now to point to the live portal.

**Conversion-blocking items inherited from the tracker (C1, C2, C7, H1, H4, H6) are not solvable on these three pages alone, but they degrade the value of every read of these pages.** A polished About hub that ends in a dead Apply Now is worse than an unpolished one, because it raises and then dashes expectations.

---

## Brand & District Alignment

**Strong on PCSB visibility:**
- All three footers carry the PCSB district logo and the "Part of Pinellas County Schools" tag.
- The `about.html` Accreditation section explicitly names PCSB governance with the district address (Largo, FL) and pcsb.org link.
- District Home link in the institutional utility bar (line 313) points to pcsb.org with `target="_blank" rel="noopener"`.
- The non-discrimination statement uses the canonical PCSB language across all three footers.
- Logo Green (#008142) is used as the primary accent across hero gradients, accred-card borders, compliance-card left borders, timeline dots, mission section background. Roboto + Roboto Slab are loaded from Google Fonts. Brand discipline is good.

**Brand inconsistencies to flag:**
1. **Logo alt text inconsistent.** `about.html` line 328 has `alt="Pinellas Technical College — Opportunity Starts Here"`. Both campus About headers (line 48) have `alt="PTC Logo"`. The institutional version is correct (full name + tagline); the campus pages should match. **Suggested fix:** change campus header logo alt to `alt="Pinellas Technical College Clearwater Campus"` and `alt="Pinellas Technical College St. Petersburg Campus"` respectively.
2. **Em dash in page titles violates Marianne's house rule.** `clearwater-about.html` line 6 uses `&mdash;` in `<title>About Clearwater Campus &mdash; Pinellas Technical College</title>`. Same on `stpete-about.html` line 6. CLAUDE.md binding rule #3: no em dashes in user-facing text. Browser tabs and search results show the title. **Suggested fix:** replace `&mdash;` with " | " or " - " (regular hyphen with spaces) on both pages.
3. **Color values hard-coded in the hero gradient.** Both campus About pages use `linear-gradient(135deg, var(--color-green) 0%, #006634 100%)` inline. The institutional page does the same. This is acceptable for a one-off but would be cleaner pulled into the canonical system.
4. **The campus pages are using inline styles heavily** (compliance cards, hero, breadcrumb). M5 (card styling fragmentation) and M6 (duplicate CSS) are still open against these pages. The canonical `.card` component seeded into `styles.css` on 2026-04-26 is not yet in use here. **Suggested fix:** migrate the compliance-card pattern to the canonical `.card.card--accent-green` with `__icon`, `__title`, `__body`, `__cta` inner classes once the campus pages are ready for that pass. This is polish, not a launch blocker, but it's the next natural step.

**District Home and Apply Now in utility bar both `href="#"`** on `about.html`. District Home is a known external link (pcsb.org) and is correct on line 313. Apply Now (line 315) is the dead one.

---

## Campus Equity

This is the lens I care most about as the Clearwater director, because I do not want a website that subtly favors one campus.

**What's equitable:**
- Both campus About pages exist (parity).
- Both have hero, breadcrumb, institutional context bridge to `about.html`, and a compliance grid.
- Both link to their own catalog, accreditation page, written plans, SIP, safety/security data, financial accountability, and records request.
- Header structures are identical (5-pillar nav).
- Footer structure is identical.
- The institutional hub names both campuses in "Two Campuses, One Mission" with equal-weight CTAs.
- Phone numbers and addresses for both campuses are in the institutional utility bar.

**What's not equitable:**
1. **Card count asymmetry: CLW 7, STP 8.** STP has a Code of Conduct card; CLW does not. This is the single biggest equity issue across the two pages. (See Accreditation section above.)
2. **SIP date asymmetry.** CLW links to "School Improvement Plan, SY 2024-25" (line 217). STP links to "School Improvement Plan, SY 2025-26" (line 216). If the live Clearwater SIP for 2025-26 exists, we're showing the older one. If it doesn't exist yet, we should say so. **Suggested fix:** verify with both campus administrations which SIP year is currently published. If CLW's 2025-26 is in development, change the card label to "School Improvement Plan (most recent: SY 2024-25)." Don't ship a public-facing date asymmetry without explaining it.
3. **Hero subtitle asymmetry.** CLW says "Campus accreditation, catalog, written plans, safety reports, and other compliance documents for the Clearwater campus" (line 167). STP says "Campus accreditation, catalog, written plans, safety reports, **code of conduct**, and other compliance documents for the St. Petersburg campus" (line 166). The "code of conduct" insertion in the STP subtitle is correct given STP has the card and CLW doesn't, but it advertises the gap. **Suggested fix:** once the CLW Code of Conduct is added, normalize both subtitles to include "code of conduct."
4. **Footer "Clearwater Links" includes "Class Schedule" but "St. Petersburg Links" does not.** CLW footer line 274 has `<li><a href="schedule-clearwater.html">Class Schedule</a></li>`. STP footer (lines 277-283) has no Class Schedule link. **Suggested fix:** add `<li><a href="schedule-stpete.html">Class Schedule</a></li>` as the first item in the "St. Petersburg Links" footer column. This is a one-line fix and an obvious equity miss.
5. **St. Pete header is missing some Clearwater programs and vice versa in the nav dropdowns.** STP nav lists 7 career clusters (line 65-72), CLW nav lists 8 (lines 65-73). STP is missing "Business & Office." If Business & Office is genuinely not offered at STP, this is correct. If it is offered at STP, this is a campus equity error. **Suggested fix:** verify against the 2025-26 campus catalog. The two campus nav dropdowns should reflect the actual program mix at each campus, not be cut-and-paste copies of each other.
6. **Records request contacts.** CLW contact is `canfieldj@pcsb.org`. STP contact is `kilpatrickc@pcsb.org`. Both are bare emails with no name, no title, no phone. **Suggested fix:** add the contact's name and title to each card, e.g., "Email Joanne Canfield, Records Specialist, Clearwater Campus, at canfieldj@pcsb.org." Names build trust; bare emails feel like they go into a void.

**Net campus equity read:** structurally equitable, but the Code of Conduct gap, the SIP year mismatch, and the footer Class Schedule asymmetry would each get raised by an alert PCSB board member. All three are cheap to fix.

---

## Page-by-Page Notes

### about.html (institutional hub)

**What works:**
- Mission, vision, and core values are verbatim from the live site (binding rule #1 honored).
- Stats block has a source citation (line 580), which is the right discipline.
- Annual Impact Report card with PDF link is the cleanest single artifact on the page from a COE-readiness standpoint.
- Three accreditation cards (COE, Cognia, PCSB) are well-organized with addresses and contact info.
- "Two Campuses, One Mission" section gives equal weight to both campuses.
- Skip link, breadcrumb semantics, and abbr expansion all in place.

**What needs work:**
- C3 leadership cards are still placeholder icons (lines 687-707). Single biggest visual flaw on the page.
- C2 Apply Now and Request Info CTAs at the bottom (line 744-745) and in the utility bar (line 315) are `href="#"`.
- M7 "View Full Staff Directory" button (line 705) is `href="#"`.
- Timeline reduced to two entries (1962 and Today) reads as broken.
- Stat "60+" vs. programs.html's 41 needs a reconciling sentence.
- No ADA / Section 504 statement on the page itself.
- No PCSB Compliance Officer contact on the page itself.
- No program outcomes data on the institutional hub.
- Hero says "Since 1962," footer says "since 1962," but campus footers say "since 1961."

**Suggested fixes:**
1. Replace placeholder leader cards with named cards (even with initials-as-photo placeholders) immediately. List director names, district superintendent name. (Closes C3 to "in-progress with names visible.")
2. Route Apply Now CTAs to `apply.html` stub or live portal once URL confirmed. (Closes C2 partially.)
3. Route Staff Directory link to stub page or to relevant department contact lists. (Closes M7.)
4. Drop the 2-entry timeline section, or pad it with verified milestones once PCSB Communications confirms.
5. Add a short paragraph under Accreditation: "PTC complies with Section 504 of the Rehabilitation Act and the Americans with Disabilities Act," with link to consumer-information.html#accessibility.
6. Add a small "Compliance Concerns" block naming the PCSB Office of Equal Opportunity, 727-588-6285, complianceofficer@pcsb.org.
7. Add a "Program Outcomes & Performance Data" card pointing to campus Follow-Up and Placement plans.
8. Reconcile the 1961 vs. 1962 founding date with PCSB Communications and apply consistently.

### clearwater-about.html

**What works:**
- Correct IA discipline: defers institutional content to `about.html`, focuses on campus-specific compliance.
- 7 compliance cards cover the COE-relevant document set.
- Direct links to live `clearwater.myptc.edu` pages and `resources.finalsite.net` PDFs (no broken redesign-internal links for these documents).
- COE accreditation explicitly named in the first card.
- Records request path with named contact email.
- Hero, breadcrumb, footer all consistent with site pattern.
- Campus phone, address, and switch-to-other-campus link all present in utility bar.

**What needs work:**
- **Code of Conduct card missing** (STP has it, CLW does not). Equity gap.
- "specific to the Clearwater Campus campus" duplicate-word typo (line 178).
- Title em dash violates house rule (line 6).
- Header logo alt = "PTC Logo" instead of full name + campus.
- Apply Now header CTA is `href="#"`.
- Staff Directory in nav dropdown (line 130) and footer (line 278) are `href="#"`.
- Footer "Class Schedule" link present (good); STP footer is missing the equivalent.
- Records request contact card has bare email with no name or title.
- No bottom-of-page CTA toward enrollment (this is intentional but at minimum a slim "Visit Admissions" link belongs at the bottom).
- "About This Campus" item in the Campus Info nav dropdown (line 128) is `href="#"` even though we are on that page. Should point to `clearwater-about.html`.

**Suggested fixes:**
1. Add a Code of Conduct card matching the STP pattern. Confirm the source PDF with Clearwater administration.
2. Fix typo: "Clearwater Campus campus" → "Clearwater Campus."
3. Replace `&mdash;` in `<title>` with ` | ` or ` - `.
4. Update header logo alt to "Pinellas Technical College Clearwater Campus."
5. Wire `href="clearwater-about.html"` on the "About This Campus" nav item. Currently dead.
6. Wire Apply Now CTA to live portal or stub.
7. Route Staff Directory links to stub page.
8. Add contact name and title to records request card.
9. Add a slim "Ready to enroll? Visit Admissions" link card after the compliance grid.
10. Verify SIP year (currently 2024-25) against live site; update or annotate.

### stpete-about.html

**What works:**
- Same strong IA discipline as the Clearwater page.
- 8 compliance cards including Code of Conduct (slight superset over CLW because STP has its own Code of Conduct PDF).
- Direct links to live `stpete.myptc.edu` pages and `resources.finalsite.net` PDFs.
- COE accreditation explicitly named.
- Records request path with named contact email.
- SIP shows the current 2025-26 year.

**What needs work:**
- "specific to the St. Petersburg Campus campus" duplicate-word typo (line 177).
- Title em dash (line 6).
- Header logo alt = "PTC Logo".
- Apply Now header CTA is `href="#"`.
- Staff Directory in nav dropdown (line 129) and footer (line 282) are `href="#"`.
- **Footer "St. Petersburg Links" column is missing Class Schedule link** (CLW footer has it).
- Records request contact card has bare email with no name or title.
- No bottom-of-page CTA toward enrollment.
- "About This Campus" item in the Campus Info nav dropdown (line 127) is `href="#"`.
- Programs nav dropdown lists 7 career clusters vs. CLW's 8 (missing Business & Office). Verify this reflects actual STP offerings.

**Suggested fixes:**
1. Fix typo: "St. Petersburg Campus campus" → "St. Petersburg Campus."
2. Replace `&mdash;` in `<title>`.
3. Update header logo alt to "Pinellas Technical College St. Petersburg Campus."
4. Wire `href="stpete-about.html"` on the "About This Campus" nav item.
5. Add `<li><a href="schedule-stpete.html">Class Schedule</a></li>` to the "St. Petersburg Links" footer column.
6. Verify the 7-cluster nav dropdown against the STP catalog. If Business & Office is offered at STP, add it; if not, document why.
7. Wire Apply Now CTA.
8. Route Staff Directory links.
9. Add records request contact name and title.
10. Add slim "Ready to enroll? Visit Admissions" link card after compliance grid.

---

## Top 3 Issues (ranked by institutional risk)

### 1. C3 - Leadership representation still uses placeholder icons on `about.html` (CRITICAL, accreditation visibility)

Three identical generic-person fontawesome icons labeled "Campus Director / Clearwater Campus", "Campus Director / St. Petersburg Campus", and "District Administration / Pinellas County Schools" sit at the center of our institutional About page. To a COE site visitor, a PCSB board member, or a parent doing due diligence, this reads as "we don't know who runs our own institution." It has been open since 2026-04-15. **Fix:** even before real photos arrive, replace each card with the actual director name and title. Use initials-on-green-circle as a placeholder photo (we can build that in CSS in 10 minutes). Three real names with placeholder avatars beats three generic icons every day of the week.

### 2. Campus equity gaps - Code of Conduct missing on Clearwater, SIP year mismatch, Class Schedule footer asymmetry, STP Programs nav dropdown missing Business & Office (HIGH, accreditation + PCSB optics)

`stpete-about.html` has a Code of Conduct card and `clearwater-about.html` does not. STP's SIP is 2025-26 while CLW's is 2024-25. The STP footer is missing the Class Schedule link that CLW's footer has. The STP Programs nav lists 7 clusters and the CLW nav lists 8. Each gap is small. Together they read as "the redesign cares more about one campus than the other," which is exactly the perception we cannot afford. **Fix:** confirm the CLW Code of Conduct source with administration and add the card; verify both SIP years against the live sites; add Class Schedule to the STP footer; verify program-cluster lists against each campus's official catalog. All four are sub-30-minute fixes.

### 3. M7 + C2 - Apply Now, Request Info, and Staff Directory dead links on the institutional About page (HIGH, conversion + reputation)

The institutional About page ends in a CTA band whose two buttons go to `#`, has a Staff Directory CTA that goes to `#`, and the utility bar Apply Now goes to `#`. A visitor who reads the entire About page and is sold on PTC has no way to act on that intent. Worse, C3's placeholder leader cards point to a "View Full Staff Directory" button that also goes to `#`, doubling down on the hollowness. **Fix:** route Apply Now to a real or stub `apply.html` URL with campus phone fallback; route Request Info to a stub form page or `admissions.html#how-to-apply`; route Staff Directory to a stub page that at minimum directs callers to campus front desks. None of these need to be the final destinations - they need to not be `#`.

---

## Closing the About Cluster

Marianne wants to confirm the About cluster is cleanly closed before moving to Compliance. My read: **about cluster is 80% closed, not 100%.** The campus About pages are in genuinely good shape and represent real progress on C4 and M8 since the last review. The institutional hub is the weak link and pulls down the cluster's overall readiness.

To close cleanly before moving to Compliance, I would do at minimum:
1. Replace the three C3 placeholder leader cards with named cards (even with initials-circle placeholders).
2. Add the Clearwater Code of Conduct card (campus equity).
3. Fix the "Campus campus" duplicate-word typo on both campus About pages.
4. Add Class Schedule to the STP footer.
5. Replace `&mdash;` in both campus About `<title>` tags.
6. Reconcile the 1961 vs. 1962 founding-year contradiction.
7. Wire the "About This Campus" nav items to their actual pages.

Items 1, 4, 5, 6, and 7 are 30-minute total fixes. Item 2 needs a quick check with Clearwater admin. Item 3 is two find-and-replaces. After that, the cluster genuinely closes and Compliance gets a clean handoff.
