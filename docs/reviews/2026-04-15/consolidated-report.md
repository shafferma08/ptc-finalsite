# PTC Website Redesign - Consolidated Review Report
**Review Date:** April 15, 2026  
**Review Cycle:** Multi-Agent Assessment (8 perspectives)  
**Status:** Ready for action items

---

## Executive Summary

The PTC website redesign demonstrates strong foundational structure with professional visual design, consistent branding, and a thoughtful information architecture. The design system is mature, accessibility has solid groundwork, and content hierarchy is generally clear. However, critical gaps in program information, compliance documentation, and enrollment conversion pathways create significant barriers to both prospective student conversion and institutional compliance. Two major architectural decisions (program detail pages and mobile filtering) require resolution before launch.

**Overall Assessment:** 70% ready. Site will function but will lose enrollment opportunities and faces accreditation visibility risks without addressing critical issues.

---

## Critical Issues (Block Launch)

These issues prevent the site from functioning as an enrollment driver or compliance tool. All require resolution before public launch.

| # | Issue | Flagged By | Pages Affected | Recommended Fix |
|---|-------|-----------|---|---|
| C1 | **Missing Program Details (Program Length, Cost, Tuition, Start Dates, Job Placement Rates)** | Prospective Student, Parent/Guardian, Faculty, Director | All program pages (programs.html, welding-clearwater.html, all program detail pages) | Create dedicated program detail page template with required fields: program length (hours/months), tuition cost, financial aid breakdown, next 3 start dates, job placement rate %, average starting salary. Populate all 35+ program pages using this template before launch. Add cost/timeline comparison table on programs.html. If specific data unavailable, document timeline for data collection and show "Coming Soon" with specific date. |
| C2 | **Enrollment Pathway Broken - All Apply/Application CTAs Link to "#"** | Prospective Student, Parent/Guardian, Director | Homepage (hero, quick links), Campus pages, Admissions page, all CTA buttons | Ensure all "Apply Now" buttons link to live application portal (https://apply.myptc.edu/). Test all 6+ apply links on each page. Create pre-application checklist page with document requirements, timeline ("Apply today, start in 30 days"), and clear next steps. Display on all CTA landing pages. |
| C3 | **Leadership Representation Missing - About Page Shows Placeholder Icons Only** | Director | about.html | Replace all 3 placeholder director/admin icons with actual names, titles, photos, and contact information: Clearwater Campus Director, St. Petersburg Campus Director, District-level PTC administrator. Add clickable emails/phone numbers. If external site visit scheduled, prioritize this before visit. |
| C4 | **Compliance Documentation Links Non-Functional** | Director, Accessibility Audit | Footer (all pages), footer links in nav | Create and link: Privacy Policy, Accessibility Statement (WCAG 2.1 AA claim), Consumer Information page (per U.S. Dept of Education), Accreditation page with links to COE reports for both campuses, Transcript Request form, FERPA notice. Verify Non-Discrimination policy is downloadable. All links must be functional before accreditation interactions. |
| C5 | **Dropdown Navigation Not Keyboard Accessible** | Accessibility Audit | All pages with navigation (header dropdowns) | Add CSS :focus-within selector to .main-nav__item--has-dropdown. Implement JavaScript to manage focus trap within open menu (Enter/Space to open, Escape to close). Update aria-expanded attribute on dropdown triggers. Test with keyboard navigation only (Tab key, arrow keys). Required for ADA/Section 508 compliance. |
| C6 | **Missing Skip Navigation Link** | Accessibility Audit | All pages | Add skip-to-main-content link as first interactive element in body (before utility bar). Position absolutely off-screen until focused (top: -40px to top: 0 on :focus). Use green background, white text, clear link text. Critical for screen reader users navigating multiple pages. |
| C7 | **Homepage "Student Portal" Utility Link is Dead** | Current Student, Faculty | index.html (homepage utility bar) | Make homepage utility bar "Student Portal" link functional. Point to landing page or directly to Canvas (recommend landing page with Canvas, Focus/SIS, and Webmail clearly labeled with icons). Campus pages have working Canvas/Focus links; homepage should match. Tested as #1 friction point for current students. |

---

## High Priority (Significant UX/Compliance Impact)

These issues create significant friction points, access barriers, or institutional risks. Must be resolved in first refinement cycle.

| # | Issue | Flagged By | Pages Affected | Recommended Fix |
|---|-------|-----------|---|---|
| H1 | **Program Detail Pages Only Exist for Welding; Other Programs Missing** | Faculty, Director | programs.html, program detail pages | Create program detail page template matching welding-clearwater.html structure. Build detail pages for CNC/Machining (critical per faculty), all other major programs. Each must include: course sequence (phases + hours), instructor names + contact info, program-specific counselor, credential details, start dates, cost, enrollment CTA. Prioritize: CNC Machining (faculty request), all Culinary programs (St. Pete), all Health Sciences, all Transportation/Auto. Target: 80% of 40+ programs have detail pages before launch. |
| H2 | **Campus Offerings Mismatch - St. Pete Page Lists Programs Not Offered There** | Faculty, Current Student | stpete.html (St. Pete campus page) | Audit all program cards listed on stpete.html (currently shows Machining as St. Pete program, but it's Clearwater-only). Remove programs not actually taught at St. Pete. Ensure Featured Programs section matches reality. Verify with campus directors before finalizing. Prevents ~5-8 misdirected student calls per semester. |
| H3 | **No Campus Hours, Parking, Facility Information, or Maps** | Current Student, Parent/Guardian | clearwater.html, stpete.html | Add to each campus page: Hours of operation (e.g., "Mon-Fri 7:00 AM–5:00 PM, Sat by appointment"), parking information, campus map/building layout, facility hours if different from class hours, restroom/food/bookstore location. Fix "Map & Directions" links to point to Google Maps or actual campus map. Add "Getting Here" section with public transit info. Critical for first-time visitors and current students. |
| H4 | **No Job Outcomes or Salary Data Anywhere on Site** | Prospective Student, Parent/Guardian, Director | All program pages, homepage | Add job placement rates to every program page (target: "X% employed within 6 months"). Add salary ranges (starting and 5-year avg if available). If data unavailable, get from COE accreditation reports or contact employers. Add student testimonials with names, photos, and current jobs on program pages and homepage. Link to employer job postings where available. This is critical ROI proof for prospective students and parents deciding between trade school and college. |
| H5 | **No Named Program Counselor for CNC/Machining Programs** | Faculty | Program detail pages (especially machining-clearwater.html when created) | Identify counselor assigned to each major program cluster. Display on program detail pages in "Admissions Contact" card similar to Welding page (Valerie Santos model). Include name, email, phone extension, campus. Faculty should be able to share link: "Contact your program counselor here." Eliminates enrollment delays from student confusion. |
| H6 | **Tuition & Financial Aid Information Missing** | Prospective Student, Parent/Guardian, Director | Navigation (Tuition & Aid dropdown), all pages | Create dedicated Financial Aid page with: tuition rates by program length, FAFSA info and School Code (005605), types of aid available (Pell, FSAG, scholarships, payment plans), Net Price Calculator (working), scholarship requirements and amounts, estimated costs by program. Make accessible from main nav on all pages. Remove placeholder links in "Tuition & Aid" dropdown; populate with real pages. |
| H7 | **Mobile Responsiveness Issues - Fixed Font Sizes on About/Admissions Pages** | Design Review | about.html, admissions.html | Replace fixed font sizes (e.g., font-size: 2.5rem) with responsive clamp() function on all page hero titles and major headings. Example: font-size: clamp(1.5rem, 4vw, 2.5rem). Test all pages at 480px viewport. Prevents text overflow and awkward layouts on mobile devices. All typography should use clamp() or relative sizing. |
| H8 | **Dynamic Program Filtering Cannot Be Built in Finalsite Composer** | CMS Review | programs.html (filter dropdowns) | Remove live-filter JavaScript from programs.html. Replace with category navigation: add sidebar or horizontal menu with category links (Healthcare, IT, Skilled Trades, etc.). Each category link navigates to a pre-filtered page or Composer filters by category server-side. Simpler UX, no custom JS required. Impacts pages: programs.html only. Decision needed before Finalsite build starts. |
| H9 | **Color Contrast Issues in 2 Components** | Accessibility Audit | styles.css (utility bar, testimonial card) | Utility bar links: change color from #D1D5DB to #E5E7EB for better contrast on dark background (needs 4.5:1, currently 4.31:1). Testimonial card secondary text on green: increase opacity from 75% to 95% (currently 4.1:1, needs 4.5:1). Test with WebAIM contrast checker. Both fixes are one-line CSS changes. |
| H10 | **No Visible Focus Indicators for Keyboard Navigation** | Accessibility Audit, Design Review | All pages (all buttons, links, form inputs) | Add explicit focus styles to all interactive elements: a:focus-visible, button:focus-visible, input:focus-visible { outline: 2px solid var(--color-yellow); outline-offset: 2px; }. Use focus-visible (not focus) to show outline only on keyboard navigation, not mouse clicks. Critical for keyboard users and WCAG 2.1 AA compliance. |
| H11 | **Search Form Missing Associated Label** | Accessibility Audit | All pages (header search input) | Add <label> element with visually-hidden class linked to search input by ID. Replace placeholder-only pattern with: <label for="search-input" class="visually-hidden">Search programs, courses, and more</label>. Placeholder text disappears on focus; screen readers need persistent label. Also add aria-hidden="true" to search icon <i> tag. |
| H12 | **Icon-Only Buttons Need aria-hidden on Icon Elements** | Accessibility Audit | All pages (social media footer links, icon buttons) | Add aria-hidden="true" to all <i> (Font Awesome icon) tags inside buttons and links that already have aria-labels. Example: <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>. Prevents screen readers from announcing empty icon content. Affects: footer social icons, all icon-only buttons throughout site. |
| H13 | **Breadcrumb Navigation Using Text "/" Instead of Semantic Markup** | Accessibility Audit | about.html, admissions.html, program detail pages | Replace text "/" separator with semantic breadcrumb structure: <nav aria-label="Breadcrumb"><ol><li><a href="#">Home</a></li><li aria-current="page">Current Page</li></ol></nav>. Use CSS ::before to insert "/" separator. Improves screen reader experience and semantic meaning. Applies to all pages with breadcrumbs. |

---

## Medium Priority (Quality Improvements)

These issues reduce user experience or maintenance quality but are not blocking. Address in second refinement cycle.

| # | Issue | Flagged By | Pages Affected | Recommended Fix |
|---|-------|-----------|---|---|
| M1 | **Section Header Description Text Lacks Contrast on White Background** | Accessibility Audit | Admissions page, About page (section descriptions) | Verify contrast ratio of gray description text. If below 4.5:1, darken gray color or increase font weight. Example: change color from #6B7280 to #4B5563. Test with WebAIM checker. Affects readability for low-vision users. |
| M2 | **Mobile Navigation Lacks Proper Keyboard Support & ARIA** | Accessibility Audit | All pages (mobile hamburger menu) | Ensure mobile toggle has aria-expanded attribute that updates when menu opens/closes. Add JavaScript to handle Escape key to close menu. Implement focus trap so Tab key cycles only within open menu. Test keyboard navigation on mobile viewport (1024px and below). |
| M3 | **Hero Slide Images Have Contradictory alt/aria-hidden Attributes** | Accessibility Audit | index.html (hero slider images) | Decide if hero images are decorative or content. If decorative: set alt="" and keep aria-hidden="true". If content: provide meaningful alt text and remove aria-hidden. Current state contradicts intent. Example: alt="Graduates celebrating at Pinellas Technical College" with no aria-hidden, or alt="" with aria-hidden="true". |
| M4 | **Negative Margin Hack on Quick Links Creates Maintenance Risk** | Design Review | index.html (quick-links section with margin-top: -40px) | Replace CSS negative margin with integrated layout: use CSS Grid for hero + quick-links together, or adjust hero padding. If header height changes, current offset breaks. More maintainable approach: change hero structure. Low priority but prevents future bugs. |
| M5 | **Card Styling Fragmentation on Admissions Page** | Design Review | admissions.html | Create unified card component system in styles.css with variants: .card--step, .card--info, .card--testing. Currently 4 different card styles with inconsistent styling. Consolidation improves maintainability and visual consistency. Medium-term refactoring. |
| M6 | **Duplicate CSS Across Page-Specific Styles** | Design Review | about.html, admissions.html, other pages | Extract common page hero styles from inline <style> blocks into global styles.css. Use utility classes for variations. Reduces file size, improves maintainability. Estimate: 15-20 lines of duplication per page. Not blocking but creates technical debt. |
| M7 | **Incomplete Faculty Resources Visibility** | Faculty | About page, footer (staff directory link) | Create Staff Directory page (currently placeholder) with faculty names, program assignments, email, office hours. Add link to program course sequences and equipment inventory. Faculty page referenced in nav but not built. Without this, faculty must direct students outside website. |
| M8 | **Missing Accreditation Report Links & Program Outcomes Data** | Director | about.html, footer | Create Accreditation page linking to: most recent COE reports (both campuses), Cognia district accreditation overview, program-level learning outcomes, placement rate data. Currently missing from site but required for accreditation visits. Improves institutional transparency. |
| M9 | **Application Timeline Not Clear** | Prospective Student | admissions.html | Add timeline information to admissions page: "Apply today → Meet counselor within 2-3 days → Start classes in 30 days (rolling admissions)." Show processing timeline and what to expect at each step. Current page says "3-step process" but doesn't show how long each takes. |
| M10 | **Prefers-Reduced-Motion Media Query Missing** | Accessibility Audit | styles.css | Add @media (prefers-reduced-motion: reduce) to disable animations for users with motion sensitivities. Wrap all animations and transitions with this query. Compliance with WCAG 2.1 AAA and improved UX for users with vestibular disorders. |
| M11 | **Hero Image Carousel Requires Testing in Finalsite Composer** | CMS Review | index.html (hero slider) | If using carousel: test vanilla JS hero slider (script.js lines 44-53) in staging Finalsite environment. Ensure no conflicts with Composer's internal scripts. If conflicts found, simplify to single hero image. Decision and testing needed before final build. |
| M12 | **Program Count Accuracy Issue** | Director | programs.html, about.html | Audit actual program count. Site claims "40+ programs" but lists ~35-38. Clarify if 40+ includes all variations (OCP + diploma tracks) or all unique program names. Update claims to match actual count or populate with missing programs. Small but important for institutional accuracy. |

---

## Low Priority (Polish)

These issues are minor UX improvements or clarity enhancements that can be addressed post-launch without affecting core functionality.

| # | Issue | Flagged By | Pages Affected | Recommended Fix |
|---|-------|-----------|---|---|
| L1 | **Footer "Employment" Link is Ambiguous** | Prospective Student | Footer (all pages) | Clarify footer link label: change "Employment" to either "Job Board" (if showing student job postings) or "Employer Resources" (if for hiring). Current label creates confusion about whether link is for student employment. One-word change; high clarity gain. |
| L2 | **Student Portal Quick Link Appears Before Students Apply** | Prospective Student | Homepage quick links | Make "Student Portal" link only visible to logged-in current students, or relabel for prospects as "Check Application Status" with different link. Current placement confuses prospective students. Alternatively: move to "Current Students" section separate from prospect quick links. |
| L3 | **Navigation Naming Inconsistency** | Prospective Student | Main nav dropdown labels | Standardize naming across main nav and pages. Example: main nav says "Admissions & Aid" but programs page says "Admissions." Pick one convention and apply consistently. Search for "Admissions" vs "Admissions & Aid" and standardize. |
| L4 | **Accreditation Acronyms Not Explained** | Prospective Student | Footer, About page | Add hover tooltips or brief explanations for acronyms: COE = Council on Occupational Education, Cognia = [district accreditation body]. First-generation students don't know what these mean. Add title attributes or inline explanations. |
| L5 | **No Program Reviews or Student Testimonials** | Prospective Student | Programs page | Add student testimonials to program cards or detail pages showing names, photos, graduation year, current job title. Currently missing from programs grid. Low effort: gather 1-2 quotes per major program cluster. Builds confidence with prospects. |
| L6 | **"Featured Programs" Section Shows Only 6 of 8 Clusters** | Prospective Student | Homepage | Increase featured programs display from 6 to 8 or clarify why some clusters hidden. Alternatively: rotate featured clusters on each page visit. Current limit feels arbitrary; prospects searching for unshown programs have to dig. |
| L7 | **No "View All Programs" Visual Hierarchy** | Prospective Student | Homepage | Make "View All Programs" button more prominent or create "Browse All Programs" CTA in a different section. Currently just a link in the programs section; easy to miss. Could increase discoverability. |
| L8 | **Campus-Specific Program Visuals Missing** | Parent/Guardian | Clearwater, St. Pete campus pages | Add photos of Clearwater auto labs and St. Pete culinary kitchen to show equipment and facilities. Text says "state-of-the-art facilities" but doesn't show them. Photos build confidence in facility quality. |
| L9 | **News Section Shows Same 3 Items on Both Campus Pages** | Faculty | clearwater.html, stpete.html | Customize news section per campus: show only campus-relevant news on each campus page. Currently shows same 3 news items on both, including an event for the other campus. Confusing for campus visitors. |
| L10 | **No "View Schedule" or "Register" Links Accessible from Campus Card** | Current Student | Homepage campus cards | Add secondary CTA on each campus card: "View Class Schedule" or "Register for Classes" in addition to main "Visit Campus" button. Currently only main nav link to schedule; campus card should link directly. |

---

## What's Working Well (Do Not Change)

The following elements and patterns should be preserved as-is. They represent best practices and user satisfaction points across multiple reviewer personas.

### Design & Branding
- **Consistent color palette** (PTC green #008142, yellow #FFCF01, neutrals): All reviewers noted professional, trustworthy appearance. Do not change primary colors.
- **Typography hierarchy with clamp() on homepage**: Responsive headings work well on mobile. Keep this pattern for all new pages.
- **Card design system**: Program cards, news cards, campus cards all have consistent hover states and visual weight. Maintain hover lift (transform: translateY) and shadow increase pattern.
- **Section header pattern** (tag + line + title + description): Repeating element creates cohesion and predictability. Use on all future pages.
- **Hero section design** (gradient overlay, stats boxes, scroll indicator): Strong entry point that conveys institutional identity. Keep current aesthetic.

### Content Structure & Information Architecture
- **Two-campus system is clear**: Both Clearwater and St. Pete get equal visual prominence. Campus-specific pages are well-organized. Maintain balanced representation.
- **Program filtration by Career Cluster + Location**: Intuitive for prospective students. Users can easily narrow to relevant programs.
- **Accreditation logos in footer**: Visible on all pages, conveys legitimacy. Keep placement and styling.
- **"No application fee" clearly stated**: Major enrollment driver for first-generation students. Ensure this stays prominent on Admissions page.
- **Military & Veterans Resources page**: Gold standard for depth and institutional information. Model other resource pages after this example (Student Services, etc.).

### Accessibility Strengths
- **Semantic HTML structure**: Proper use of <main>, <section>, <nav>. Continue this practice.
- **ARIA attributes on interactive elements**: Icon buttons have aria-labels, navigation has aria-labels. This foundation is good.
- **Image alt text present**: Graduation photos and campus images have meaningful descriptions. Maintain this standard.
- **Responsive design with mobile-first approach**: Breakpoints at 768px and 480px are well-considered. Keep responsive strategy.

### User Experience Elements
- **Quick links bar with 6 icon shortcuts**: High-visibility, scannable, saves clicks. Effective for both prospects and students. Keep pattern but refine messaging for student vs. prospect distinctions.
- **Clear campus contact information**: Phone numbers and addresses always accessible on utility bar and in footer. Essential for enrollment. Keep prominent.
- **News & Events section with recent dates**: Shows institutional vitality and active recruitment. Keep this social proof visible.
- **"Why PTC" value proposition**: Four key selling points (accreditation, partnerships, affordability, flexibility) resonate with all reviewer personas. Keep messaging and visual treatment.

### CMS & Technical
- **CSS custom properties system**: Well-organized with semantic naming. No changes needed; easy for future maintenance.
- **Modular spacing scale** (xs through 4xl): Predictable and maintainable. Use consistently on all new pages.
- **Mobile navigation structure**: Hamburger menu with collapse behavior is appropriate for responsive design.
- **Footer structure**: Fully scoped with `.ptc-footer` classes, ready for Finalsite Composer embed. Keep exact current structure.

---

## Cross-Agent Patterns

Issues flagged by 3 or more agents carry elevated weight and represent consensus problems.

### Pattern: Missing Program Information (5 agents)
**Agents:** Prospective Student, Faculty, Parent/Guardian, Director, Accessibility (indirectly, affects discoverability)  
**Consensus:** Program pages cannot drive enrollment without cost, timeline, job outcomes, and start dates. This is the #1 barrier to conversion.  
**Recommendation:** Treat as CRITICAL C1. Requires complete data audit and population across all 40+ programs before launch.

### Pattern: Broken Enrollment Pathway (4 agents)
**Agents:** Prospective Student, Parent/Guardian, Director, Current Student  
**Consensus:** Apply buttons go nowhere; tuition info missing; no clear next steps. All enrollment CTAs need functional links and clear process communication.  
**Recommendation:** Block launch until all CTAs are wired to live portal and enrollment timeline is clear on every applicable page.

### Pattern: Accessibility Gaps (2 major agents: Accessibility Audit + Design Review)
**Agents:** Accessibility Audit (8 detailed issues), Design Review (3 issues), Current Student (implied usability barriers)  
**Consensus:** Critical (3), Serious (8), Moderate (6) issues require attention. Most are low-effort fixes but block ADA/Section 508 compliance.  
**Recommendation:** Prioritize Phase 1 (skip nav, dropdown keyboard support, focus indicators, utility bar contrast). Required for public institution compliance.

### Pattern: Campus Program Accuracy (2 agents)
**Agents:** Faculty, Director  
**Consensus:** St. Pete campus page lists programs not actually offered there. Programs detail pages missing for all but Welding.  
**Recommendation:** Audit all campus offerings and create detail pages for top 20 programs by enrollment before launch.

### Pattern: Current Student Navigation Friction (2 agents)
**Agents:** Current Student, Faculty  
**Consensus:** Student Portal link is dead; class schedule hard to find; student services not visible; campus hours missing.  
**Recommendation:** Fix H3 (campus info) and C7 (student portal link). Medium effort, high impact on student satisfaction.

---

## Recommended Next Steps

### Phase 1: Critical Path to Launch (4-6 weeks)
These must be complete before site goes public.

1. **Program Data Audit** (Week 1-2)
   - Identify all 35-40+ unique programs
   - Gather for each: tuition cost, length (hours/months), next 3 start dates, job placement rate %, avg. salary, program counselor
   - Create program detail page template
   - Populate all pages or show "Coming Soon [date]"
   - Responsibility: Distance Learning Coordinator + Counselors

2. **Leadership & Compliance Documentation** (Week 1-2)
   - Add actual names/photos/contact info to About page (Clearwater Director, St. Pete Director, District admin)
   - Create and link: Privacy Policy, Accessibility Statement, Consumer Information, Accreditation Reports, Transcript Request form, FERPA notice
   - Test all footer links
   - Responsibility: Director + Admin staff

3. **Enrollment Pathway Wiring** (Week 1)
   - Test all Apply/Application CTAs; ensure they link to https://apply.myptc.edu/
   - Create pre-application checklist page with document requirements and timeline
   - Fix homepage "Student Portal" utility link (point to Canvas or landing page)
   - Responsibility: Web Development + IT

4. **Accessibility Remediation - Phase 1** (Week 1-2)
   - Add skip navigation link to all pages
   - Add :focus-within to dropdown menus + implement keyboard support (Escape, arrow keys)
   - Add visible focus indicators (outline) to all interactive elements
   - Fix utility bar contrast color (#D1D5DB → #E5E7EB)
   - Fix testimonial card opacity (75% → 95%)
   - Responsibility: Web Development

5. **CMS & Architecture Decisions** (Week 1)
   - Decide: Keep hero carousel (vanilla JS) or simplify to single image?
   - Decide: Remove live program filters or build category nav alternative?
   - Confirm campus program offerings with campus directors
   - Responsibility: Marianne + IT

6. **Mobile Responsiveness** (Week 2)
   - Fix fixed font sizes on about.html, admissions.html (use clamp())
   - Test all pages at 480px, 768px, 1024px viewports
   - Verify no text overflow, layout breaks
   - Responsibility: Web Development

### Phase 2: High Priority Refinements (Weeks 3-5)

7. **Program Detail Page Build**
   - Create detail page template (model on welding-clearwater.html)
   - Build pages for: CNC/Machining, all Health Sciences, all Culinary, all Auto/Diesel, all IT programs
   - Target: 80%+ of programs have detail pages
   - Responsibility: Web Development + Program leads

8. **Campus Information Completion**
   - Add hours of operation, parking, campus map, facility list to both campus pages
   - Fix "Map & Directions" links (point to Google Maps)
   - Add campus-specific student services contact info
   - Responsibility: Campus Directors + Web Development

9. **Financial Aid Page Creation**
   - Build dedicated page with tuition rates, FAFSA info, School Code (005605), aid types, Net Price Calculator
   - Replace placeholder links in "Tuition & Aid" dropdown with real pages
   - Responsibility: Financial Aid Office + Web Development

10. **Accessibility Phase 2**
    - Add proper <label> to search form
    - Add aria-hidden="true" to all icon <i> tags
    - Fix breadcrumb structure (semantic <nav><ol>)
    - Implement mobile menu keyboard support
    - Test with actual screen reader (NVDA, JAWS, VoiceOver)
    - Responsibility: Web Development + Accessibility Consultant

11. **Job Outcomes Data Integration**
    - Gather job placement rates and salary data from COE reports, employers
    - Add to all program detail pages
    - Create student testimonial cards (gather from recent grads)
    - Responsibility: Distance Learning Coordinator + Program Leads

12. **Staff Directory & Faculty Resources**
    - Create staff directory page with faculty names, programs, contact info
    - Add program counselor names to all program detail pages
    - Responsibility: HR + Academic Affairs

### Phase 3: Polish & Optimization (Post-Launch)

13. **Finalsite Composer Build** (parallel track, 2-3 weeks)
    - Set up staging Finalsite environment
    - Build homepage, About, Admissions pages
    - Test CSS custom properties, hero slider (if keeping), responsive breakpoints
    - Document custom class names for editors
    - Responsibility: Finalsite Specialist

14. **Analytics & Conversion Tracking**
    - Set up event tracking on all CTA buttons
    - Monitor time-to-apply, drop-off points
    - Track which programs get most views vs. inquiries
    - Responsibility: Marianne (Webmaster)

15. **Post-Launch Accessibility Testing**
    - Conduct WAVE, Axe, Lighthouse audits
    - Keyboard-only navigation test
    - User testing with disabled participants
    - Responsibility: Web Development + Accessibility Consultant

---

## Summary Table: By Priority & Effort

| Priority | Count | Total Effort | Timeline | Owner |
|----------|-------|--------------|----------|-------|
| **Critical (C1-C7)** | 7 | 40-50 hours | 4 weeks | Multiple |
| **High (H1-H13)** | 13 | 60-80 hours | 4-5 weeks | Multiple |
| **Medium (M1-M12)** | 12 | 30-40 hours | 2-3 weeks | Multiple |
| **Low (L1-L10)** | 10 | 10-15 hours | 1-2 weeks | Multiple |
| **TOTAL** | **42 issues** | **140-185 hours** | **6-8 weeks** | |

**Recommendation:** Launch after Phase 1 completion (4 weeks). Deploy Phase 2 in parallel; Phase 3 refinements post-launch.

---

## Accreditation Readiness Assessment

**Current Status:** Not accreditation-ready without Phase 1 completion

**Critical Gaps:**
- Leadership identification missing (About page placeholders)
- Compliance documentation not linked (Privacy Policy, Consumer Information, Accreditation reports)
- Program outcomes and placement data not visible
- No staff directory or faculty information

**Timeline to Accreditation-Ready:** 4 weeks (Phase 1 completion)

**If external site visit scheduled:** Prioritize C3 (leadership), C4 (compliance), and H4 (job outcomes) immediately.

---

**Report Prepared:** April 15, 2026  
**Review Scope:** 8-agent assessment across student, faculty, parent, director, designer, accessibility, and CMS perspectives  
**Next Review:** After Phase 1 implementation (May 15, 2026)
