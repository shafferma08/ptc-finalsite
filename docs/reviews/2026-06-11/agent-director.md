# Director/Admin Review - 2026-06-11

Reviewer persona: Dr. Williams, Clearwater Campus Director (enrollment, COE accreditation compliance, institutional reputation). Pages reviewed: programs.html, practical-nursing-clearwater.html, welding-stpete.html, apprenticeships-clearwater.html, adult-education-pathways.html, workforce-continuing-education.html, clearwater-contact.html.

Bottom line: the new Programs work is a major step up. Program detail pages now carry real curriculum, hours, course sequences, credentials, and named counselors. That directly answers prior C1/H1/H5 ("no program details except Welding," "no named counselor"). But three things would embarrass us in front of a COE visitor or the PCSB board: a counselor name/email that conflicts with our own records, a welding salary stat with no clear source while a sister page deliberately omits one, and an advertised welding schedule our own counseling office says is wrong. Those are accuracy/credibility issues, not polish.

## Institutional Accuracy

Does this correctly represent PTC?

Mostly yes, and noticeably better than the April cluster. Program descriptions, OCP course codes (PRN0098, PMT0070, J400400, H170607), hour totals, and mission statements read like our official program sheets. The two-campus framing in the chrome is handled correctly (separate Clearwater/St. Pete utility bars, headers, footers, and cross-campus toggle links).

Three accuracy problems I want fixed before this is shown externally:

1. **Counselor identity on the Practical Nursing page may be wrong.** practical-nursing-clearwater.html names the program counselor as "Merritt Scott" / scottme@pcsb.org / x2032. Our internal records associate Merritt Scott with the Phlebotomy program (and the posted Phlebotomy schedule even carries a "Merrritt" misspelling). A named contact on a Health Sciences program page is exactly what a prospective student emails. If this is the wrong counselor, or the wrong email, it sends nursing inquiries into a dead end. This must be verified against the live PN program page and the counseling office before launch.

2. **Welding salary stat vs. sourcing discipline.** welding-stpete.html displays "Avg. Salary $47,540/yr - BLS 2023" in the hero stat bar. practical-nursing-clearwater.html's source comment explicitly says salary/BLS was "Omitted (no live source)." We cannot have one program page citing a BLS salary while a sister page drops it for lacking a source. Either both carry a properly cited, defensible figure or neither does. An inconsistent sourcing standard across program pages is the kind of thing an accreditation reviewer notices.

3. **Programs A-Z cluster tags are mislabeled on several cards.** On programs.html, Dental Assisting carries the visible chip "Arts, Media & Education" with a theater-masks icon (it is Health Sciences). Facials Specialty and Nails Specialty also show "Arts, Media & Education" chips though they are Cosmetology. A board member scanning the directory will read this as PTC not knowing which cluster its own programs belong to. The data-cluster attributes are correct (health/cosmo) so the filter works, but the visible chip text and icon are wrong.

## Accreditation & Compliance

COE, Cognia, non-discrimination, ADA?

- COE and Cognia accreditation footer block is present and correct on every page reviewed, with the PCSB district logo. COE is spelled out ("Council on Occupational Education"). Good and consistent.
- Non-discrimination statement appears in every footer verbatim with the protected-class list. Good.
- Privacy Policy / Accessibility / Sitemap links present in every footer.
- Practical Nursing page carries strong compliance-relevant content for a Health Science program: TEAS requirement, "TEAS scores only accepted at a PTC campus testing center," articulation agreements, State Board of Nursing approval, and the FL Ready to Work / BIGSIX credential block. This is the kind of substantiated program representation COE wants to see.
- Welding page correctly states the St. Petersburg campus is an AWS accredited testing facility and carries the same FL Ready to Work block.
- Gap: workforce-continuing-education.html correctly states short courses "do NOT articulate or grant credit toward PTC's program level courses." That is the right disclosure and protects us. Keep it.

No new ADA/Title IX regressions spotted in this set. The full Title IX / Compliance Officer block lives on about.html (closed as M27), and these pages link to consumer-information.html for it, which is acceptable.

## Enrollment Conversion

Does every page drive toward enrollment?

Strong on the program detail pages, weaker and inconsistent elsewhere.

- practical-nursing-clearwater.html is a model conversion page: Apply Online CTAs route to the real portal (apply.myptc.edu), a named counselor with email + phone, info-session Zoom details, financial aid path, and a "get notified of future start dates" capture. This is what every program page should look like.
- **Inconsistent application entry point.** welding-stpete.html's Apply CTAs (hero "Start Here," counselor section) point to the generic https://www.myptc.edu/admissions, while Practical Nursing and the campus headers point to https://apply.myptc.edu/. Pick one canonical apply destination. Sending welding applicants to a generic admissions page instead of the application is lost conversion.
- **Welding St. Pete "Upcoming Classes / PDF" dead ends.** The Program Flyer and Program Costs PDF cards are href="#" with "PDF coming soon." Practical Nursing has real PDFs. A prospect who wants cost info hits nothing.
- clearwater-contact.html has clear CTAs (directions, schedule a visit, class schedule, staff directory) but routes "Schedule a Visit / shadowing days" to clearwater-admissions.html#how-to-apply, and the utility-bar search button is href="#". Also three Campus Info nav items (Employer Partnerships, Post a Job for Students, Advisory Committees) and the footer Academic Calendar point to coming-soon.html. Placeholder pages in primary nav look unfinished to a visitor.
- apprenticeships-clearwater.html's strongest conversion line ("zero student debt," "earn a paycheck while attending classes") is good messaging. CTA is a phone number + admissions link, appropriate for the apprenticeship model.

## Brand & District Alignment

PCSB requirements, brand consistency?

- Logo green, yellow accent, Roboto/Roboto Slab fonts, PTC circle logo, and "Opportunity Starts Here" tagline are consistent across the main-site pages. Campus pages correctly swap the tagline for the campus name. Brand discipline is solid.
- PCSB district logo and "Part of Pinellas County Schools" line present in every footer. Good for district alignment.
- No em dashes in user-facing body copy (house rule), though several `<title>` tags still use the literal `&mdash;` ("Practical Nursing - Clearwater Campus &mdash; Pinellas Technical College", same on welding-stpete and apprenticeships-clearwater). About-page titles were fixed for this under M14; these new program/hub pages reintroduced the em dash in the title. Replace with a pipe to match.
- **Naming inconsistency on the short-courses hub.** workforce-continuing-education.html has page title "Short Courses & Evening Classes," breadcrumb "Workforce & Continuing Education," and its own nav dropdown labels it "Evening & Part-Time," while every other page's nav calls it "Workforce & Continuing Education." Three different names for one destination. This ties to the open naming decision (short courses = OWI, naming TBD). Pick one label and use it everywhere before launch so the board sees a coherent IA.

## Campus Equity

Fair representation of both campuses?

This is where I have the most concern from a "no Clearwater or St. Pete bias" standpoint.

1. **Depth asymmetry between program pages.** practical-nursing-clearwater.html is fully built (4 videos, partner hospital logo, articulation agreements, real PDFs, info sessions). welding-stpete.html is thinner (1 video, placeholder "coming soon" PDFs, generic apply links). If the board clicks one of each, Clearwater looks invested-in and St. Pete looks half-finished. We need parity in build quality, or at least no "coming soon" placeholders on a launched St. Pete page.

2. **Short-courses hub skews heavily St. Pete.** On workforce-continuing-education.html, every scheduled course (AC Service, Child Care, Drone, Forklift, Water Treatment, School Board Training) is badged St. Petersburg; the only Clearwater item is one evening Welding class. The three "no sessions" courses are also all St. Pete. If Clearwater genuinely offers more continuing-ed, it is underrepresented here. If it does not, that is fine, but I want it confirmed it is a true reflection and not a data-gathering gap.

3. **Apprenticeships routing and parity.** The global nav "Apprenticeships" link points to apprenticeships-workforce.html, but programs.html offers separate "Clearwater Apprenticeships" and "St. Petersburg Apprenticeships" buttons. I reviewed apprenticeships-clearwater.html (two PTC-sponsored programs + five community programs). I need confirmation that apprenticeships-stpete.html exists and is built to the same standard, and that the global nav resolves cleanly to both. Uneven apprenticeship representation is a campus-equity flag.

4. **Practical Nursing is offered at both campuses** per the programs.html card (links to clearwater + stpete). Confirm practical-nursing-stpete.html matches the Clearwater page's depth, since PN is a flagship Health Science enrollment driver at both sites.

## Page-by-Page Notes

### programs.html
- Works: 41 program cards, working client-side cluster + campus filter (Finalsite-friendly, no framework), correct campus tags on most cards, CSIT-IET at Clearview surfaced, sister programs (MAST 1/2, Welding/Advanced) handled. "Over 40 programs" claim matches the card count (closed M12 holds).
- Needs work: mislabeled cluster chips on Dental Assisting (shows Arts/Media/Education, is Health), Facials Specialty and Nails Specialty (show Arts/Media/Education, are Cosmetology). Apprenticeship callout buttons route to campus-specific apprenticeship pages while global nav routes to apprenticeships-workforce.html (reconcile).
- Suggested fix: correct the visible `.tag` chip text and Font Awesome icon on the three mislabeled cards to match their data-cluster. Decide one apprenticeships destination and use it in both the nav and the callout.

### practical-nursing-clearwater.html
- Works: best conversion page in the set. Real curriculum, hours, named counselor with contact, articulation agreements, info-session details, real PDFs, partner hospital, FL Ready to Work/BIGSIX block, accurate apply.myptc.edu links.
- Needs work: counselor "Merritt Scott / scottme@pcsb.org" conflicts with internal records (Merritt Scott associated with Phlebotomy). "Top Ranked LPN Program" claim should have a verifiable source (the practicalnursing.org link is there, confirm it substantiates the badge). Title still uses `&mdash;`.
- Suggested fix: verify the PN counselor name + email against the live PN page and counseling office; correct if wrong. Confirm the "Top Ranked" badge maps to the linked source. Swap title em dash for a pipe.

### welding-stpete.html
- Works: full course sequence with OCP codes and hours, AWS accredited testing facility statement, mission verbatim, FL Ready to Work block, schedule + program-requirements cards.
- Needs work: (a) the inline DATA RECONCILIATION comment flags that our 2026-27 counseling-office PDF lists Welding as EVENING ONLY M-F 4-9PM, while the page advertises Day AND Evening with different evening days. This is an unresolved advertised-schedule conflict; it must be confirmed with Cheri Ashwood before launch. (b) salary stat $47,540 BLS 2023 with unclear sourcing vs. sister-page omission. (c) Program Flyer / Program Costs PDFs are href="#" "coming soon." (d) Apply CTAs point to generic /admissions, not the application portal. (e) only one video vs. Clearwater PN's four.
- Suggested fix: resolve the schedule with the counselor and update to the confirmed hours; standardize the salary-stat sourcing rule across all program pages; supply the St. Pete welding flyer/cost PDFs or remove the placeholder cards; route Apply to apply.myptc.edu.

### apprenticeships-clearwater.html
- Works: clean two-tier structure (PTC-sponsored vs community-sponsored), strong "earn while you learn / zero student debt" messaging, verbatim community sponsor names, honest "contact the sponsoring organization" note where no live URL exists, canonical .card components, good source comment header.
- Needs work: confirm the St. Pete apprenticeships counterpart exists at equal quality and that global nav routing is consistent. The two PTC-sponsored cards link to automotive-apprenticeship-clearwater.html and facilities-maintenance-apprenticeship-clearwater.html; confirm those detail pages are built.
- Suggested fix: verify campus parity and that the two linked detail pages exist; align the nav apprenticeships destination.

### adult-education-pathways.html
- Works: clear "Choose Your Path" hub for Dual Enrollment, Distance Learning, ABE/GED, ESOL, and CTSOs, each with both-campus links. Two-campus discipline is good here (every card offers Clearwater + St. Pete). Honest, plain-language framing.
- Needs work: confirm the eight linked spoke pages (dual-enrollment-*, distance-learning-*, abe-ged-*, esol-*) all exist; these are deep links that will 404 if not built. "Tuition-free PTC credit" claim for dual enrollment should be confirmed against live wording.
- Suggested fix: verify spoke pages exist before launch; confirm dual-enrollment funding language matches live.

### workforce-continuing-education.html
- Works: correct non-articulation disclosure, campus-location alert with both campus phones, real Enrole registration links, honest "no sessions currently scheduled" pills, full-time programs CTA band linking both campus full-time hubs.
- Needs work: three-way name inconsistency (title "Short Courses & Evening Classes" vs breadcrumb "Workforce & Continuing Education" vs nav "Evening & Part-Time"). Heavy St. Pete skew in course list (campus equity). 
- Suggested fix: settle the single canonical name and apply it to title, breadcrumb, and all nav labels; confirm Clearwater continuing-ed offerings aren't underrepresented.

### clearwater-contact.html
- Works: complete contact card (address, phone, fax 727-538-7203), directions, schedule-a-visit, class schedule, staff directory, map callout. Good for a campus-visit information page.
- Needs work: three Campus Info nav items (Employer Partnerships, Post a Job for Students, Advisory Committees) and footer Academic Calendar route to coming-soon.html; utility-bar search is href="#". Placeholder destinations in primary nav read as unfinished. Note this page's Campus Info nav differs from the other Clearwater pages (which use "For Employers" -> employers.html); nav is not consistent across the campus chrome.
- Suggested fix: either build or hide the coming-soon nav items before launch; wire the search control; reconcile the Campus Info dropdown to match the other Clearwater pages.

## Top 3 Issues (ranked by institutional risk)

1. **Welding St. Pete advertised schedule conflicts with the counseling-office record (and salary stat sourcing is inconsistent).** We are publishing a Day + Evening schedule the official 2026-27 PDF contradicts (Evening only, M-F 4-9PM), plus a BLS salary figure that a sister page omits for lack of a source. Publishing a schedule a student can't actually enroll in, or an unsourced wage figure, is a direct institutional-credibility and potential COE-accuracy risk. Resolve with Cheri Ashwood and set one sourcing standard for salary stats sitewide.

2. **Counselor name/email accuracy on the Practical Nursing program page.** "Merritt Scott / scottme@pcsb.org" conflicts with our internal association of that name to Phlebotomy. A wrong named contact on a flagship Health Science page misroutes prospective students and looks careless on a high-visibility page. Verify and correct before any external showing.

3. **Mislabeled program-cluster chips on programs.html (Dental Assisting shown as "Arts, Media & Education," plus Facials/Nails).** The A-Z directory is the page board members and visitors scan first. Visibly filing Dental Assisting under Arts/Media undercuts confidence that we represent our own program inventory accurately. Quick fix, high optics.

Prior-issue note: This set materially advances C1/H1 (program detail pages now exist with real content) and H5 (named counselors present). C4/M8 accreditation footer links are solid here. New asymmetries surfaced: program-page build-depth Clearwater vs St. Pete, short-courses St. Pete skew, and the short-courses naming inconsistency, which should be logged as new tracker items.
