# Director/Admin Review — 2026-04-22

**Reviewed by:** Dr. Williams, Director of Clearwater Campus  
**Review Date:** April 22, 2026  
**Status:** Multi-agency compliance readiness assessment

---

## Institutional Accuracy

**Overall Assessment: PARTIAL — Major gaps remain, but core structure is sound.**

The site correctly positions PTC as a dual-campus institution under PCSB governance with two distinct but coordinated campuses. The brand messaging ("Opportunity Starts Here") is consistent and professional across all pages. The historical timeline and mission statements are accurate.

**What works:**
- Tagline and brand positioning accurate and well-placed
- Dual-campus identity properly established throughout
- 1961 founding date and mission language correct
- Footer messaging accurately reflects PCSB oversight

**Critical gaps:**
- Leadership section shows placeholder icons only; no real names, photos, or bios for campus directors or district administrators. This is unacceptable for a board visit or accreditation review.
- Program descriptions vary in specificity and accuracy between campuses. St. Pete's "Skilled Trades" description mentions "Advanced Welding" but Advanced Welding is exclusively at Clearwater. This creates confusion.
- Program count claims "40+" across pages (about.html, programs.html) but only ~35-38 are actually listed across both campuses when counted. Need verification of accurate inventory before launch.

---

## Accreditation & Compliance

**Overall Assessment: GOOD progress on visibility, but critical functional gaps remain.**

Accreditation information is now prominently displayed and well-organized:

**What works:**
- COE and Cognia logos and descriptions present in footer on all pages
- Dedicated Accreditation section on About page with clear explanation of dual accreditation
- About page includes historical COE achievement milestone
- Consumer Information page has been built with 14 COE disclosure sections
- Non-discrimination statement in footer on all pages (required by PCSB)
- Privacy/FERPA, Accessibility, and Non-Discrimination sections properly structured in consumer-information.html

**Critical gaps:**
- **Compliance links non-functional (C4):** All compliance documentation links in footer go to "#" or internal anchors that may not exist. Need real link destinations for:
  - Privacy Policy (tentatively to consumer-information.html#privacy-ferpa, good)
  - Accessibility Statement (tentatively to consumer-information.html#accessibility, good)
  - Non-Discrimination (tentatively to consumer-information.html#non-discrimination, good)
  - **Accreditation reports**: No actual COE or Cognia accreditation documents are linked; need PDF/document repository established before launch
  - **Job Outcomes & Gainful Employment data**: Consumer Information page mentions disclosure requirements but no actual outcome data is present
  - **Grievance procedures**: Not mentioned anywhere

- **Accessibility details incomplete:** WCAG 2.1 Level AA is stated as a goal, but several accessibility issues remain open (focus indicators, color contrast, keyboard navigation) that will block compliance claims.

---

## Enrollment Conversion

**Overall Assessment: CRITICAL — CTAs are non-functional; enrollment pathway is broken.**

Every single "Apply Now" button on the site currently links to "#". This is a complete enrollment conversion blocker.

**What works:**
- Clear CTA placement on homepage, campus pages, and key sections
- Strong messaging language: "Apply Today," "Ready to Start Your Career?"
- Admission steps are clearly laid out with expected timeline
- Quick-link buttons on homepage correctly prioritize "Apply Now" and "Request Info"
- "Apply Now" appears in utility bar for high visibility

**Critical gaps:**
- **(C2) All Apply/Application CTAs link to "#"**: Homepage, campus pages, admissions page, programs page—every application button is a dead link. This is a **launch-blocking issue**. Prospects cannot enroll.
- Student Portal link also dead (C7). Returning students cannot access Canvas, Focus, or email from utility bar.
- No integration with actual application portal specified or tested in Finalsite Composer.
- Admissions page shows "Enrollment Steps" but doesn't clearly specify that actual applications happen outside the website (presumably via PCSB portal or third-party system).
- Timeline on Admissions page doesn't specify "apply by [date] for [semester]"—too vague for enrollment conversion.

**Institutional risk:** With every CTA broken, prospects cannot move to application stage. Even if all other issues were solved, this renders the entire site non-functional for enrollment.

---

## Brand & District Alignment

**Overall Assessment: GOOD — PTC brand is strong and PCSB requirements are met.**

PTC's visual identity is consistently applied across all pages with appropriate color usage and typography.

**What works:**
- PTC green (#008142) and accent colors applied correctly per brand guide
- Roboto/Roboto Slab fonts used throughout (matches brand guide specs)
- Logo placement consistent and professional
- Tagline "Opportunity Starts Here" reinforces brand across all pages
- District affiliation (PCSB) clearly noted in footer and About page
- Accreditation logos prominently displayed (required for district compliance)
- Non-discrimination statement matches PCSB district language
- No conflicting imagery or messaging

**Minor concerns:**
- Accreditation logo hierarchy and spacing should be tested in Finalsite Composer to ensure rendering consistency
- "Pinellas County Schools" references in footer should verify exact district branding language with communications office

---

## Campus Equity

**Overall Assessment: CONCERNING — St. Pete receives lower visibility and potentially inaccurate program listings.**

This is a significant issue that will be caught by PCSB leadership and accreditors.

**What works:**
- Both campuses have dedicated pages (clearwater.html, stpete.html)
- Both campus contact info and addresses are present
- Both get equal visual treatment on homepage
- Campus selector in navigation is accessible from all pages

**Critical gaps:**
- **(H2) St. Pete campus page lists programs not offered there:** St. Petersburg page shows "Skilled Trades & Construction" with description including "Advanced Welding" and "Public Works." Welding Advanced Technology is exclusively at Clearwater. Public Works may also be Clearwater-only. This is misleading to prospective students.

- **Program inventory mismatch:** Clearwater lists Machining Technologies; St. Pete does not. But do all these programs actually run at each campus? Schedule pages show draft status and incomplete counselor data, so accuracy is unclear.

- **Schedule pages inconsistent:** schedule-clearwater.html and schedule-stpete.html are both drafted with pending counselor confirmation. This means prospective students checking "which programs run at my preferred campus" will find confusing or incomplete information.

- **Counselor assignment incomplete:** Program detail pages (welding pages) have partial counselor info; other program detail pages don't exist at all. Parents/students won't know who advises their program or when it starts.

- **No campus-specific imagery or distinctiveness:** Both campuses appear identical in program cards and general layout. No campus-specific context (facilities, location highlights, unique offerings) that would help students feel they're learning about two different environments.

**Accreditation impact:** COE reviewers will check whether program descriptions match what's actually taught and staffed at each location. Inaccurate program listings create compliance risk and student complaints.

---

## Page-by-Page Notes

### index.html (Homepage)
**What works:**
- Professional hero banner with clear value proposition
- Utility bar has critical links (phone, Apply, Student Portal, District Home)
- Navigation structure is logical and comprehensive
- Quick links section prioritizes key enrollment actions
- Featured programs section showcases breadth
- Campus cards introduce both locations
- News section with recent achievements builds credibility
- Accreditation logos visible in footer
- Mobile-responsive design (tested on desktop)

**What needs work:**
- **(C2) "Apply Now" and "Student Portal" links are dead** (href="#")—critical blocker
- (C7) "Student Portal" link doesn't differentiate Canvas vs. Focus vs. webmail; may need 3 separate links or dropdown
- (L6) "Featured Programs" shows only 6 program clusters; about 8+ clusters exist. Label "Featured" is misleading if 6 is all that fit grid
- Quick links section is entirely prospect-focused. No "Current Student" link to Canvas/Focus/academic resources
- Homepage doesn't explain the difference between Clearwater and St. Pete programs—should encourage campus selection early

**Suggested fix:**
1. Wire "Apply Now" button to live application portal URL (from PCSB/Admissions)
2. Replace "Student Portal" with dropdown or single button to official Canvas login (external link)
3. Clarify "Featured Programs" label or ensure all 8 clusters are visible
4. Add "For Current Students" quick link section above or parallel to prospects section

### about.html (About PTC)
**What works:**
- Clear mission and value proposition
- Historical timeline adds credibility
- Accreditation section is comprehensive and well-explained
- Campus overview clearly differentiates locations and their offerings
- CTAs (Apply, Request Info) present in closing section
- Brand colors and typography consistent

**What needs work:**
- **(C3) Leadership section shows placeholder icons only.** No real names, titles, photos, or bios. This looks incomplete and unprofessional. If Dr. Williams is featured, her name, title, photo, and brief bio should appear. Same for St. Pete director and PCSB representative.
- (M8) Accreditation section mentions COE and Cognia but no links to actual accreditation reports or COE standards documents. Where can a board member verify compliance documentation?
- (M7) "Staff Directory" link in navigation goes to "#"—no functional directory exists
- Accreditation section doesn't explain why dual accreditation matters to students or employers
- "Two Campuses" section mentions general programs but doesn't link to detailed program pages

**Suggested fix:**
1. **Replace placeholder icons with actual leadership headshots and names.** Include:
   - Clearwater Campus Director (name, title, brief bio: "X years at PTC, background in...")
   - St. Petersburg Campus Director (same)
   - PCSB Superintendent or designate (establishing district oversight)
2. Create real Staff Directory page (even if basic) with org chart, department contacts, and key personnel
3. Link accreditation logos to actual COE/Cognia verification pages or compliance documents
4. Add "Learn more about accreditation standards" link to COE or Cognia websites

### consumer-information.html (Compliance Hub)
**What works:**
- Well-structured sidebar navigation
- 14 COE disclosure sections present
- Non-Discrimination statement is comprehensive and legally sound
- Privacy/FERPA section accurately explains student rights
- Accessibility statement acknowledges WCAG 2.1 Level AA goals
- Professional layout with clear visual hierarchy
- Compliance officer contact information provided

**What needs work:**
- **(C4) Documentation links incomplete.** The page describes compliance requirements but doesn't link to actual:
  - Full Privacy Policy document (should link to detailed policy PDF or external page)
  - Accessibility statement (content is present but could be more detailed about how to request accommodations)
  - COE accreditation reports and standards (link to COE website for verification)
  - Gainful Employment / Job Outcomes data (placeholder section, no actual data)
  - FERPA complaint procedures (mentioned but no contact info or form)
  - Title IX grievance procedures and contact info (Non-Discrimination section lacks detail)

- Gainful Employment Disclosure is mentioned as required but the section is empty. This is a federal requirement for institutions participating in Title IV aid.
- No mention of institutional effectiveness data, program completion rates, or job placement data—all commonly requested by accreditors

**Suggested fix:**
1. Build or link full Privacy Policy and Accessibility Policy documents
2. Create section for "Institutional Effectiveness Data" with graduation rates, job placement %, and salary ranges by program
3. Link to COE accreditation verification page (COE website)
4. Add FERPA complaint process and Title IX grievance procedures with actual contact names and procedures
5. Develop Gainful Employment disclosure tables (required by federal law) with program costs, completion rates, and loan default rates

### programs.html (All Programs A-Z)
**What works:**
- Clear grid layout showing 35+ programs
- Program filter interface (appears to be static for Finalsite compatibility)
- Program cards are scannable with clear titles and descriptions
- "View All Programs" CTA directs to this page (good landing page structure)
- Campus tags differentiate where programs run

**What needs work:**
- **(C1) Missing program details on all cards:** None of the program cards show:
  - Program length (in hours, weeks, semesters)
  - Cost / tuition per program
  - Start dates or term schedules
  - Job placement rates or career outcomes
  - Prerequisite or testing requirements
  
  These are essential for prospective student decision-making. Parents ask first: "How long?" "How much?" "When can my student start?"

- **(H1) Only Welding has a dedicated detail page.** Other programs have only generic cards. Detail pages should exist for high-volume programs (Health Sciences, IT, Skilled Trades, Automotive, Culinary).

- (H8) "Dynamic program filtering cannot be built in Finalsite Composer." The current filter interface is static/styled CSS—it doesn't actually filter programs. Finalsite Composer may not support JavaScript-driven filtering. This limits UX but is acceptable if filtering is removed from front-end and students navigate via category dropdowns instead.

- (M12) **Program count accuracy issue (C4):** Claims "over 40 industry-certified programs" but visible cards list approximately 35-38. Clarify: Is it 35-40? Are some programs counted multiple times (by campus or credential type)?

**Suggested fix:**
1. Add program detail cards or collapse sections with:
   - Length of program (e.g., "12-month")
   - Approximate cost and financial aid eligibility
   - Next start date and term schedule
   - Post-graduation outcomes (% job placement, average salary, top employers)
2. Create detail pages for top 5-6 programs (Welding already done; add Health Careers, IT, Automotive, Culinary, Advanced Welding)
3. Verify and publish exact program count (don't say "40+" if it's really 35—be precise)
4. If dynamic filtering won't work in Finalsite, remove the filter UI and rely on category navigation in header/footer

### admissions.html (How to Apply)
**What works:**
- Clear enrollment steps (1, 2, 3)
- Professional step-card design with numbered progression
- Info cards for special populations (Transfer, Readmission, Testing)
- Campus tour scheduling information present
- CTAs for applying and requesting info
- FAFSA and financial aid guidance linked

**What needs work:**
- **(H6) Tuition & Financial Aid information missing from this page.** Navigation says "Admissions & Aid" but Admissions page doesn't include tuition rates or FAFSA/aid overview. Should include:
  - Average cost per program or per term
  - FAFSA deadline and how to apply
  - Scholarships available
  - Payment plan options
  
  Current students and parents need this info to proceed with applications.

- (M9) Application timeline not clear. "Step 1: Create Account" doesn't say when or by what date. For prospective students: "Apply by August 15 for Fall term" would be helpful.
- (M9 variant) Enrollment steps mention testing but don't specify: "Testing is required and takes 2 hours; sign up here"
- Step cards don't explain what happens after each step or provide expected timelines
- Testing & Assessment section link goes to "#"—no real testing info page
- Campus Tour section is separate from main enrollment flow; could be more integrated

**Suggested fix:**
1. Create tuition-aid.html page (already exists per file list) and ensure Admissions nav links to it
2. Clarify timeline: "Apply by [date] for [semester start date]"
3. Add expected turnaround times: "Testing: 2 hours. Results available within 3 business days."
4. Create dedicated Testing & Assessment page or section with logistics
5. Merge campus tour CTA into main enrollment flow (e.g., "Step 0: Take a Tour")

### tuition-aid.html (Financial Information)
**What works:**
- Professional layout and clear section structure
- "Pay Tuition" banner for current students
- FAFSA/financial aid information is present
- Scholarships section is outlined

**What needs work:**
- **(H6) Tuition rates not visible in current draft.** Should include a rate table:
  - Base tuition per credit hour (in-district vs. out-of-district if applicable)
  - Fees (technology, activity, lab, etc.)
  - Estimated total cost per program (by program cluster or sample programs)
  - Examples: "Welding: $XX; Cosmetology: $XX; Nursing: $XX"
  
- FAFSA process is mentioned but should be more detailed: "Complete FAFSA by [date] to be considered for state/federal aid"
- Financial aid eligibility requirements not specified (enrollment status, satisfactory academic progress, etc.)
- No mention of payment plans, scholarships with amounts, or veteran/military benefits specifics
- External links (FAFSA website, state aid programs) should be present but may be missing

**Suggested fix:**
1. Build comprehensive tuition table with per-program cost breakdowns
2. Detail FAFSA timeline and requirements for eligibility
3. Add scholarship opportunities with award amounts and deadline dates
4. Include veteran/military benefits section (specific to PTC benefits if available)
5. Link out to official FAFSA, state aid, and veteran benefit websites

### welding-clearwater.html, welding-advanced.html, welding-stpete.html (Program Detail Pages)
**What works:**
- Professional program detail page design with hero image and program name
- Stat bar shows key metrics (length, cost, start date, counselor)
- Start steps section with yellow accent (visual prominence)
- Program overview and detailed curriculum outline
- Career outcomes and job placement context
- Relevant program links and campus contact information
- Both campuses have welding pages with appropriate campus identification

**What needs work:**
- **(C1) Program costs and placement rates appear to be present.** This is good; other program pages should follow this template.
- (H5) Counselor field shows "[Counselor Name]" placeholder format on some pages; needs real names
- Program start dates should specify "Fall 2026" or "Summer 2026" with actual semester calendar dates
- Prerequisites and testing requirements should be explicit: "TABE assessment required before enrollment"

**Suggested fix:**
1. Verify all counselor names are populated correctly across both Clearwater and Advanced pages
2. Create this same detail page template for top 5 additional programs (CNA, Cosmetology, IT, Automotive, HVAC)
3. Ensure job outcomes section includes salary data if available (e.g., "Average graduate salary: $XX,XXX")

### schedule-clearwater.html, schedule-stpete.html (2026-2027 Class Schedule)
**What works:**
- Draft banner clearly indicates pages are not final ("This schedule is a draft")
- Breadcrumb navigation for context
- Professional table formatting for class information
- Campus identification is clear (St. Pete in title/header)
- Attempt to organize by program cluster

**What needs work:**
- **(H3) Both pages are marked as draft with pending counselor confirmation.** This is appropriate for April 2026, but they cannot launch in this state. Counselor data must be complete before enrollment season (typically late May/June).
- Missing information in tables: Days/times are incomplete for many classes; room/building locations not specified
- No footnotes or legend explaining symbols or abbreviations (if any)
- No contact info for registering or asking questions about specific classes
- "34 programs pending counselor confirmation" notation on schedule-stpete suggests this is a working document, not a public-facing page. Should not be exposed to students until complete.

**Suggested fix:**
1. Do not launch schedule pages until counselor data is 100% complete (expected June 1, 2026 per project notes)
2. Once complete, add class times, days, location details, and instructor names
3. Create legend explaining any abbreviations
4. Add registration instructions and contact info for each campus
5. Test rendering in Finalsite Composer to ensure table is mobile-friendly

### campus-maps.html, student-resources.html, careers.html (Stub Pages)
**What works:**
- Pages exist and have basic structure

**What needs work:**
- **(H3) No campus hours, parking, facility info, or maps on campus pages.** These pages (campus-maps.html, student-resources.html) are stubs. They need:
  - **Campus Maps**: Interactive or embedded map of campus layout, parking, accessibility parking, building addresses
  - **Hours of Operation**: Both campuses' office hours, lab hours, tutoring availability
  - **Facilities Info**: Library, tutoring center, labs, food services, childcare, disability services
  - **Contact Info**: Campus main phone, department extensions, admissions contact
  - **Directions**: Parking instructions, public transit directions, accessible parking details

- **student-resources.html** should include:
  - Academic advising and counseling contact info
  - Disability services and accessibility info
  - Library and learning resources
  - Tutoring and academic support
  - Student life and clubs
  - Financial aid office info

- **careers.html** should clarify if this is "Careers at PTC" (job board) or "Career Outcomes" (graduate success). Currently unclear.

**Suggested fix:**
1. Populate campus-maps.html with Google Maps embed and facility legend
2. Add office hours and contact info sections to both campus pages (clearwater.html, stpete.html)
3. Build student-resources.html with comprehensive support resources, links, and contact info
4. Clarify careers.html as either employer recruiting hub or graduate outcomes (choose one, then build accordingly)

### sitemap.html
**What works:**
- Exists and provides page structure

**What needs work:**
- Should be verified to include all public pages and key internal links
- Should be human-readable and organized by section (Programs, Admissions, About, Resources, etc.)

---

## Prior Issues Status

Reviewing against the 2026-04-15 issues tracker:

### Critical Issues (C1-C7): **7 Open, 0 Resolved**
- **C1 (Missing Program Details)**: STILL OPEN. Program cards lack length, cost, tuition, start dates, job placement. Only Welding detail page has some data.
- **C2 (Dead Apply/Application CTAs)**: STILL OPEN. Every "Apply Now" and "Apply Today" button links to "#". This is a **launch blocker**.
- **C3 (Leadership Representation Missing)**: STILL OPEN. About page shows placeholder icons only; no names, photos, or bios.
- **C4 (Compliance Links Non-Functional)**: PARTIALLY ADDRESSED. Footer links now point to consumer-information.html anchors, but actual documentation (reports, policies) not linked. Accreditation reports not available.
- **C5 (Dropdown Navigation Not Keyboard Accessible)**: STILL OPEN. No :focus-within or focus trap mentioned.
- **C6 (Missing Skip-to-Main-Content Link)**: STILL OPEN. No skip link found in HTML structure.
- **C7 (Student Portal Utility Link Dead)**: STILL OPEN. Links to "#"; no integration with Canvas/Focus login.

### High Priority Issues (H1-H13): **13 Open, 0 Resolved**
- **H1 (Program Detail Pages Missing)**: STILL OPEN. Only Welding programs have detail pages.
- **H2 (St. Pete Lists Programs Not Offered)**: STILL OPEN. "Advanced Welding" listed on St. Pete page but offered only at Clearwater.
- **H3 (No Campus Hours/Maps/Facility Info)**: STILL OPEN. Campus pages lack this critical information.
- **H4 (No Job Outcomes/Salary Data)**: MOSTLY MISSING. Welding pages have some outcomes; other programs have none.
- **H5 (No Named Counselor for Some Programs)**: STILL OPEN. Only Welding programs have assigned counselors.
- **H6 (Tuition & Financial Aid Missing)**: PARTIALLY ADDRESSED. tuition-aid.html exists but needs rate tables and financial aid details.
- **H7 (Mobile Responsiveness - Fixed Font Sizes)**: Status unclear; not tested on mobile device for this review.
- **H8 (Dynamic Program Filtering)**: ACKNOWLEDGED. Filter UI present but non-functional; Finalsite Composer limitation accepted.
- **H9 (Color Contrast Issues)**: Status unclear; not tested with contrast analyzer.
- **H10 (No Visible Focus Indicators)**: Status unclear; keyboard navigation not tested.
- **H11 (Search Form Missing Label)**: Status unclear; needs accessibility audit.
- **H12 (Icon-Only Buttons Need ARIA)**: Status unclear; needs accessibility review.
- **H13 (Breadcrumb Using Text "/" Instead of Semantic Markup)**: Status unclear; needs HTML validation.

### Medium Priority Issues (M1-M12): **12 Open, 0 Resolved**
- **M8 (Missing Accreditation Report Links)**: PARTIALLY ADDRESSED. Accreditation section present on About page, but no links to actual reports.
- **M12 (Program Count Accuracy)**: STILL OPEN. Claims "40+" but lists ~35-38. Needs verification.
- Other M-level issues (contrast, focus indicators, breadcrumbs, etc.): Status unclear; require accessibility testing.

### Summary
- **Critical Issues**: 0 of 7 resolved (0%)
- **High Issues**: 0-2 of 13 partially addressed (0-15%)
- **Medium Issues**: 0-1 of 12 partially addressed (0-8%)
- **Overall Resolution Rate**: ~1% (only C4 partially addressed)

**Conclusion:** The site has not progressed significantly on compliance and functional issues since April 15. The design is good, but core functionality (enrollment, accessibility, leadership info, compliance docs) remains incomplete.

---

## Top 3 Issues (Ranked by Institutional Risk)

### ISSUE 1: All Apply/Application CTAs are Dead Links (C2)
**Risk Level: CRITICAL**  
**Impact:** Enrollment conversion is completely blocked. Prospective students cannot apply. The entire marketing and recruitment strategy fails at the conversion point.  
**Who notices:** Prospective students, parents, admissions staff, board members during site demo, accreditors  
**Fix timeline:** Immediate (before launch)  
**Action:** Wire all "Apply Now" buttons to live application portal URL. Verify portal integration with PCSB SIS or third-party application system. Test end-to-end from CTA to application submission.

---

### ISSUE 2: Leadership Section Shows Only Placeholder Icons; No Leadership Names or Bios (C3)
**Risk Level: CRITICAL**  
**Impact:** Institutional credibility is undermined. If Dr. Williams, the Clearwater director, or PCSB superintendent are not named and visible on the website, it looks incomplete and unprofessional. Accreditation reviewers expect to see organizational leadership clearly identified. Board members visiting the site will immediately notice the placeholder icons.  
**Who notices:** PCSB board during site walkthrough, accreditation team, prospective families wanting to know who leads the institution, media/press  
**Fix timeline:** Before board presentation (estimated late April/early May 2026)  
**Action:** Photograph and profile Clearwater director, St. Pete director, and PCSB designate. Update About page with headshots, names, titles, and 2-3 sentence bios. Include professional photos meeting web image standards (height/width ratio, file size, accessibility alt text).

---

### ISSUE 3: Program Accuracy and Detail Missing Across All Programs Except Welding (C1, H1, H2)
**Risk Level: HIGH (institutional and compliance)**  
**Impact:** Prospective students cannot make informed decisions. Parents don't know costs, length, or job outcomes. St. Pete program listings are inaccurate (listing Clearwater-only programs), creating false student expectations and enrollment confusion. Accreditors will flag inaccurate program descriptions as a compliance issue (COE Standard 2.1 requires accurate program descriptions).  
**Who notices:** Prospective students and parents (high volume), admissions staff (high volume of questions), COE accreditation team, students who enroll expecting Welding at St. Pete but it's not offered  
**Fix timeline:** Before summer recruitment push (June 1, 2026)  
**Action:**  
1. Audit program offerings by campus. Confirm which programs run at Clearwater vs. St. Pete vs. both.  
2. Remove inaccurate program descriptions from campus pages (e.g., remove "Advanced Welding" from St. Pete page if not offered there).  
3. Create detail page template (like Welding pages) with:
   - Program length (hours/weeks/semesters)
   - Estimated cost (tuition + fees)
   - Next start date and term calendar
   - Job placement rate and avg. salary
   - Prerequisites and testing requirements
   - Assigned counselor name and contact
4. Populate detail pages for at least 5 high-enrollment programs: Health Careers, IT, Skilled Trades, Automotive, Culinary.  
5. Establish master program inventory document linking program name → campus location → details. Update website from single source of truth.

---

**End of Review**

---

## Reviewer Recommendations for Launch Readiness

**Green Light Status: NOT RECOMMENDED FOR LAUNCH without addressing top 3 critical issues.**

The site has excellent design, clear navigation, and strong brand consistency. However, three institutional blockers prevent launch:

1. **No Application Portal Integration:** Students cannot enroll. Site is non-functional for its primary purpose.
2. **No Leadership Visibility:** Institution appears leaderless. Credibility and governance are unclear.
3. **Incomplete and Inaccurate Program Data:** Prospective students cannot make decisions. Accreditation compliance is at risk.

**Recommended timeline:**
- **Week of April 28:** Resolve C2 (Apply buttons), C3 (leadership photos/bios), and program accuracy audit
- **By June 1:** All program detail pages complete, schedule pages finalized with counselor data
- **By June 15:** Site ready for summer recruitment launch

**Success criteria for next review cycle (May 15, 2026):**
- All CTAs functional and tested
- Leadership section fully populated with real names, photos, bios
- Program pages accurate and campus-specific
- Tuition rates and financial aid info complete
- All compliance links functional
- Accessibility testing completed (WCAG 2.1 Level AA validation)

---

**Report Submitted:** April 22, 2026  
**Next Review Scheduled:** May 13, 2026 (before final pre-launch review)
