# Director/Admin Review - 2026-06-15

Reviewer persona: Dr. Williams, Director, Clearwater campus. Launch-readiness pass before the Jun 18 mockups, with a PCSB-board and COE-site-visit lens. Ten pages reviewed: index, clearwater, stpete, programs, admissions, tuition-aid, practical-nursing-clearwater, contact, consumer-information, about.

## Institutional Accuracy

The campus homepages (clearwater.html, stpete.html) were cleaned up as advertised: their featured-program blurbs now list only programs that actually exist in the A-Z directory. I confirmed none of the five phantom programs (Professional Nursing LPN-RN, Nursing Assistant, Pharmacy Tech, Medical Assisting, Television Production) remain on the two campus pages.

They were NOT removed from the district homepage (index.html). This is the single biggest accuracy problem in the batch and it is on the most-visited, most board-facing page on the site:

- index.html line 352, Health Sciences card: "Nursing, Medical Assisting, Pharmacy Tech, Patient Care, and more." PTC does not offer Medical Assisting, Pharmacy Tech, or a program called "Patient Care." The A-Z directory's health programs are Practical Nursing, Phlebotomy, Medical Administrative Specialist, Medical Coder/Biller, Dental Assisting, EMT, and Surgical Technology. Three of the four named programs are phantom.
- index.html line 358, Information Technology card: "...Computer-Aided Drawing, and Television Production." There is no Television Production program in the A-Z directory (the closest real program is Digital Media & Multimedia Design). "Television Production" is one of the exact phantom programs the campus pages were just scrubbed of.

A board member or COE visitor who lands on the homepage, clicks Health Sciences expecting "Medical Assisting," and finds no such program is a direct credibility hit. Suggested fix: rewrite both index.html blurbs to match real catalog programs, e.g. Health = "Practical Nursing, Phlebotomy, Medical Administrative Specialist, Dental Assisting, and more." IT = "Computer Systems & IT, Network Support Services, Computer-Aided Drawing, and Digital Media." This must clear before Jun 18.

Otherwise institutional facts hold up well: "since 1962" is consistent across the batch; the "60+ programs / 40+ career areas / 5,000+ full-time students / 250+ industry partners" stats on about.html match the verbatim live "Our Story" copy; the practical-nursing page carries the real program number (H170607), 1,350 clock hours, correct course codes, and Florida State Board of Nursing approval language. Tuition rates ($2.92/hr resident, $11.71/hr nonresident CTC; AGE term fees) and both FAFSA school codes (005605 Clearwater, 013917 St. Petersburg) are present and campus-correct.

## Accreditation & Compliance

Strong on this axis, which is what matters most for a COE site visit.

- COE and Cognia are correctly represented in the footer of every page, with logos and the correct framing ("Both campuses individually accredited by COE," "Accredited as part of Pinellas County Schools"). consumer-information.html#accreditation carries full COE address (7840 Roswell Road, Atlanta) and phone, plus Cognia's. COE/Cognia acronym expansions are in place.
- Non-discrimination statement appears verbatim in every page footer and in full on consumer-information.html#non-discrimination with the PCSB Compliance Officer block (Office of Equal Opportunity, 301 4th St SW Largo, 727-588-6285).
- ADA / Section 504 is covered: consumer-information.html#accessibility names the District 504 Coordinator (Stephanie Miller) and a WCAG 2.1 AA commitment; admissions.html#accommodations cross-links it.
- Required disclosures (Campus Safety & Security Data, Sexual Misconduct/Predators, Financial Reports, Code of Conduct, Catalog & Records, ESE, Compliance Contacts) are all present and sourced.

Compliance gaps a visitor could probe:
- Code of Conduct asymmetry (carryover H15): St. Petersburg has a current 2025-26 Code of Conduct PDF; Clearwater shows a "Pending" placeholder pointing to district policy. As the Clearwater director I do not want my campus showing "Pending" on a published compliance page during a site visit. This is live-gated (no CLW source exists), but it must be resolved before public launch, not just before the mockup showing. Suggested fix: get a Clearwater Code of Conduct PDF produced, or get written confirmation that PCSB district policy is the official substitute and state that affirmatively rather than as "Pending."
- No program-level student outcomes (completion, placement, licensure pass rates) anywhere on the site (H4). For a COE-accredited institution this is the data a visitor expects to find. The NCLEX-PN pass rate is absent even on the flagship nursing page. Suggested fix: add a COE student-achievement / outcomes link or data block to consumer-information.html, sourced from the institutional effectiveness reports; route to follow-ups.md if no live number exists yet.
- SIP-year asymmetry (M17): Clearwater links 2024-25, St. Pete links 2025-26. A board member will notice the mismatched years. Live-gated on CLW publishing the 2025-26 SIP.

## Enrollment Conversion

The apply path is in good shape since the last cycle. Apply Now / Apply Today / Start an Application / the homepage quick-link and CTA band all route to the real https://apply.myptc.edu/ portal, and Request Info routes to https://inforequest.myptc.edu/. Campus hero CTAs and the nursing page Apply buttons all go to the live application. This was a critical blocker (C2/C7) and is effectively resolved on these ten pages.

Conversion weak spots:
- "Upcoming Classes: PN Traditional TBD / Hybrid TBD" on the flagship nursing page (M42). To a prospect this reads as "no classes coming." On our highest-demand health program this actively suppresses enrollment. Suggested fix: replace with the next real start date or "Contact your counselor for the next start date."
- The Practical Nursing counselor is very likely misattributed (carryover C9). The page names Merritt Scott / scottme@pcsb.org / x2032 as the PN School Counselor, but internal records tie Merritt Scott to the Phlebotomy program. A wrong named contact on the flagship Health Science page misroutes the most valuable prospects and looks careless to a visitor. Suggested fix: confirm the correct PN counselor with the Clearwater counseling office (Valerie Santos is the Clearwater counselor on record) and correct the name, email, and extension before any external showing.
- Programs A-Z cards carry no length or credential, so a parent cannot comparison-shop without clicking into each program (L22). Lower priority, but it dampens the directory's conversion value.

## Brand & District Alignment

Consistent and on-brand. Logo green (#008142), yellow (#FFCF01), and Roboto / Roboto Slab are used throughout; the PCSB/Cognia/COE lockup is in every footer; "Part of Pinellas County Schools" framing is correct everywhere. District Home links to pcsb.org. No em dashes in user-facing copy on these pages.

Minor district-optics items (not blockers): off-token green drift (#006634 / #004d29 hero gradients that don't match the green tokens) and an off-brand sky-blue campus tag on programs.html (M40); the programs.html cluster-chip mislabels where Dental Assisting shows "Arts, Media & Education" with a theater-masks icon and the cosmetology specialties show "Arts, Media & Education" (M33). The A-Z directory is the first thing a board member scans, so the mislabeled chips are worth the quick fix even though they are cosmetic.

## Campus Equity

Generally even-handed, with a few asymmetries a board member would catch:

- St. Pete trades blurb (stpete.html line 227) lists "Advanced Welding," and the programs.html A-Z lists "Welding Technology - Advanced" as Clearwater & St. Pete (carryover H2). If Advanced Welding is not actually offered at St. Pete this is both an equity and an accuracy problem. Confirm the real campus availability of Advanced Welding before launch.
- St. Pete Programs nav lists 7 clusters; Clearwater lists 8 (St. Pete missing "Business & Office") (M21). Either a real offering difference or an equity gap. Verify and make intentional.
- practical-nursing-stpete.html is referenced from programs.html but a St. Pete equivalent of this flagship page must exist at equal quality (M43); a visitor comparing the two campuses should not find a polished Clearwater nursing page and a thin or missing St. Pete one.
- News & Events is identical on both campus homepages and on index (the Chef Brian / St. Pete item runs on the Clearwater page) (L9). Low priority but reads as not-campus-specific.

Two-campus discipline is otherwise well observed: shared content (admissions, tuition, consumer info) is www-canonical with per-campus FAFSA codes and routing; campus-specific content lives on campus pages.

## Page-by-Page Notes

### index.html
- Works: Real apply/info portal links throughout; correct stats; clean COE/Cognia/PCSB footer; strong hero and value props.
- Needs work: Health Sciences and IT featured-program blurbs still name phantom programs (Medical Assisting, Pharmacy Tech, Patient Care, Television Production).
- Fix: Rewrite both blurbs to match real catalog programs (see Institutional Accuracy).

### clearwater.html
- Works: Phantom programs removed; featured blurbs match real CLW programs; apply routing correct.
- Needs work: Utility-bar search is a dead href="#" with no overlay (M47); news not campus-specific.
- Fix: Make search a real control or remove it; campus-specific news items.

### stpete.html
- Works: Phantom programs removed; clean campus framing.
- Needs work: "Advanced Welding" listed in trades blurb; verify it is actually offered at St. Pete. Dead search affordance.
- Fix: Confirm Advanced Welding campus availability; fix/remove search.

### programs.html
- Works: Comprehensive A-Z, working cluster/campus filter, screen-reader status region, both-campus tagging.
- Needs work: Cluster-chip mislabels (Dental Assisting, Facials/Nails); off-brand campus-tag color; no length/credential per card; filter is not Composer-native (H8/M49).
- Fix: Correct visible chip text + icons to match data-cluster; recolor campus tag to green/gray; decide filter architecture before July Composer build.

### admissions.html
- Works: Verbatim 16+/not-in-HS eligibility, 7-step checklist, both FAFSA codes, TEAS-at-PTC rule, accommodations notice with ADA cross-link, dual-campus CTA. Visible source comments document what fabricated copy was stripped.
- Needs work: Application timeline turnaround still vague (M9); the "Enrollment Steps" nav anchor (#enrollment-steps) does not exist on the page.
- Fix: Repoint the Enrollment Steps nav item to #how-to-apply or add the anchor.

### tuition-aid.html
- Works: Real PCSB-set tuition table, fee list, FAFSA detail, SAP/attendance, Title IV return, federal/state funding, full scholarship list with St. Pete badges, both net-price calculators. This page would hold up well in a site visit.
- Needs work: Refund Policy nav anchor inconsistency (#faq in some navs vs #refund here). Net price calculator links point to the same generic PCSB URL for both campuses.
- Fix: Standardize the refund anchor; confirm per-campus net-price URLs.

### practical-nursing-clearwater.html
- Works: Verbatim program content, codes, hours, course sequence, TEAS callout, info-session details, articulation, distance-ed detail, real program PDFs, Florida Board approval. Strong flagship page.
- Needs work: Counselor likely misattributed (Merritt Scott = Phlebotomy per records); "Upcoming Classes TBD/TBD"; #8DC63F eyebrow text fails AA on green (M44); no NCLEX-PN pass rate.
- Fix: Verify and correct PN counselor; add real start dates; bump eyebrow to yellow/white.

### contact.html
- Works: Both campuses, correct addresses/phones/fax, directions and per-campus contact routing.
- Needs work: None blocking. (No general inquiry form here; the form lives on per-campus contact pages.)
- Fix: None for launch.

### consumer-information.html
- Works: The compliance backbone of the site. Accreditation, non-discrimination, accessibility/504, security data, sexual misconduct, financial reports, catalog/records, ESE, named compliance contacts. Sourced and verbatim.
- Needs work: Clearwater Code of Conduct shows "Pending"; no program outcomes/COE student-achievement data.
- Fix: Resolve CLW Code of Conduct before public launch; add outcomes link/data.

### about.html
- Works: Verbatim "Our Story," correct By-the-Numbers stats, named leadership (Prokop/Shedrick/Hinds), accreditation section routing to campus accreditation pages, Title IX/ADA section.
- Needs work: Accreditation section is now CTA-only (no inline doc links); Staff Directory anchor points to #leadership rather than a real directory (M7).
- Fix: Confirm campus accreditation pages render; resolve staff-directory destination.

## Top 3 Issues (ranked by institutional risk)

1. Phantom programs still on the homepage (index.html). Health Sciences names Medical Assisting / Pharmacy Tech / Patient Care; IT names Television Production. None exist in the catalog. This is the most board-facing page and the same class of error the campus pages were just fixed for. Launch-blocker. Fix: rewrite both blurbs to real catalog programs before Jun 18.

2. Practical Nursing counselor misattribution (C9). The flagship health page names Merritt Scott (tied internally to Phlebotomy) as the PN counselor with a specific email and extension. Wrong named contact on our highest-value program misroutes prospects and reads as careless to a COE visitor. Fix: verify with the Clearwater counseling office and correct name/email/extension before any external showing.

3. Clearwater Code of Conduct "Pending" on the published consumer-information page, plus the absence of any program-level student outcomes / COE achievement data sitewide. Together these are the two things a COE site visit is most likely to probe. Fix: produce or affirmatively substitute the CLW Code of Conduct, and add a student-achievement/outcomes link or data block (route to follow-ups.md if no live figures exist yet).
