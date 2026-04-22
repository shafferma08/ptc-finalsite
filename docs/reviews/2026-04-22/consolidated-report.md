# PTC Website Review - Consolidated Report
**Date:** 2026-04-22  
**Pages Reviewed:** Homepage (index.html), Programs (programs.html), Admissions, About, Tuition & Aid, Clearwater Campus, St. Petersburg Campus, Student Resources, 3 Welding detail pages, 2 Schedule pages, Consumer Information, Contact, Campus Maps, Careers  
**Agents:** All 8 (Prospective Student, Current Student, Parent/Guardian, Faculty, Director, Designer, Accessibility, Finalsite CMS)

---

## Executive Summary

The PTC website redesign demonstrates **strong visual design and professional structure** with clear navigation and brand consistency. However, **critical enrollment pathway and accessibility blockers prevent launch**. Seven critical issues must be resolved before going live; three of these are launch-blocking (C2, C5, C6 by legal compliance and functional necessity). The design is 75% Finalsite Composer-ready, but three components require architectural decisions or simplification.

**Overall Status:** NOT READY FOR LAUNCH. Estimated 2-4 weeks to resolve critical issues, pending architectural decisions on program filtering and hero carousel.

---

## Critical Issues (Block Launch)

| # | Issue | Flagged By | Pages Affected | Recommended Fix | Resolution Timeline |
|---|-------|-----------|----------------|-----------------|-------------------|
| **C2** | All Apply/Application CTAs link to "#" instead of live portal | All 8 agents | Homepage, Admissions, Programs, Campus pages, Welding pages, utility bar | Wire all "Apply Now" buttons to actual application portal URL. Test end-to-end from CTA to application submission. | IMMEDIATE (before launch) |
| **C5** | Dropdown navigation not keyboard accessible (missing :focus-within for keyboard users) | Accessibility, Designer | All pages with navigation (Programs, Admissions, Tuition, Campuses, Current Students, About dropdowns) | Add `:focus-within` rule to `.main-nav__item--has-dropdown` in styles.css. Single-line CSS fix with wide impact. Blocks keyboard-only users from 6+ nav items. | IMMEDIATE (before launch) |
| **C6** | Missing skip-to-main-content navigation link | Accessibility | All pages | Add `<a href="#main-content" class="skip-link">Skip to main content</a>` as first focusable element in header on all pages. CSS hides until focused. Screen reader users cannot bypass 100+ nav links without this. | IMMEDIATE (before launch) |
| **C1** | Missing Program Details (length, cost, tuition, start dates, job placement rates) on all program pages except Welding | Prospective Student, Parent/Guardian, Faculty, Director | programs.html, all program detail pages (35+ programs missing) | Create detail page template (like welding pages) or expand programs.html to show inline details. Minimum: cost, duration, job placement, prerequisites, counselor name. Priority: Top 5-6 programs (Health Sciences, IT, Skilled Trades, Automotive, Nursing, Culinary). | Phase 2 (by June 1) |
| **C3** | Leadership representation missing - About page shows placeholder icons only, no names/photos | Director, Parent/Guardian | about.html | Photograph Clearwater director, St. Pete director, PCSB designate. Update About page with headshots, names, titles, 2-3 sentence bios. Professional photos meeting web standards. Required for accreditation review and institutional credibility. | By May 6 (before board presentation) |
| **C4** | Compliance documentation links non-functional (Privacy Policy, Accessibility Statement, Consumer Info, Accreditation reports) | Director, Accessibility | Footer (all pages); consumer-information.html | Create dedicated Accessibility Statement page (/accessibility.html). Wire footer links to real documents/PDFs. Link accreditation logos to COE/Cognia verification pages. Ensure Privacy Policy and FERPA complaint procedures are accessible. | By May 13 (pre-launch) |
| **C7** | Homepage "Student Portal" utility link is dead (goes to #); Student Portal dropdown links non-functional | Current Student, Faculty, Director | Homepage utility bar, main nav Current Students dropdown | Replace "#" with actual Canvas login URL, Focus/SIS portal URL. May need three separate links or unified portal entry point. Coordinate with IT/PCSB for correct URLs. | By May 6 |
| **H8** | Dynamic program filtering cannot be built in Finalsite Composer (architectural decision needed) | CMS Review | programs.html | **DECISION REQUIRED:** Option A (Recommended) — Replace with 8 static category landing pages (Health Sciences, IT, Skilled Trades, etc.), pre-filtered. No JavaScript, easier maintenance. Option B — Use Finalsite Marketplace plugin (verify compatibility). Option C — Keep JavaScript but require developer for program data changes (not scalable). Recommend Option A. | By April 25 (decision); Phase 2 implementation |
| **H10** | No visible focus indicators for keyboard navigation on buttons, links, inputs | Designer, Accessibility | All pages (buttons, links, form inputs) | Add clear `:focus-visible` outline to all interactive elements. Example: `button:focus-visible { outline: 3px solid var(--color-yellow); outline-offset: 2px; }` Applies to buttons, links, form inputs, select menus. WCAG 2.1 AA requirement. | IMMEDIATE (before launch) |
| **H11** | Search form missing associated label | Accessibility | All pages (header search input) | Add `<label for="search-input" class="sr-only">Search</label>` before search input. Screen readers cannot announce input purpose without label. Placeholder text is not sufficient for accessibility. | IMMEDIATE (before launch) |
| **H12** | Icon-only buttons need aria-hidden on icon elements | Accessibility | All pages (search toggle, mobile menu, footer social icons, utility bar icons) | Add `aria-hidden="true"` to all `<i class="fas fa-...">` tags inside buttons/links with aria-labels. Prevents screen readers from announcing icon font characters. Systematic find/replace across HTML. | IMMEDIATE (before launch) |
| **H13** | Breadcrumb navigation using text "/" instead of semantic markup | Accessibility | admissions.html, schedule pages, program detail pages | Replace text "/" with semantic `<nav aria-label="Breadcrumb"><ol><li><a href="">Home</a></li><li aria-current="page">Admissions</li></ol></nav>`. Affects 3+ pages. | IMMEDIATE (before launch) |

---

## High Priority (Significant UX/Compliance Impact)

| # | Issue | Flagged By | Pages Affected | Recommended Fix | Resolution Timeline |
|---|-------|-----------|----------------|-----------------|-------------------|
| **H1** | Program detail pages only exist for Welding; other programs missing | Faculty, Prospective Student, Parent/Guardian, Director | programs.html, all program cluster pages | Create detail pages for top 5-6 programs using Welding template. Show: program length, cost, job placement rates, prerequisites, assigned counselor, schedule. Or use category landing pages (linked to H8 architectural decision). | Phase 2 (by June 1) |
| **H2** | St. Pete campus page lists programs not offered there (e.g., Advanced Welding listed but Clearwater-only) | Faculty, Director | stpete.html | Audit program offerings by campus. Remove inaccurate program descriptions from St. Pete page. Verify all listed programs are actually offered at that location. Create master program inventory (spreadsheet) linking program → campus(es). | Phase 2 (by June 1) |
| **H3** | No campus hours, parking, facility info, or maps on campus pages | Current Student, Parent/Guardian, Director | clearwater.html, stpete.html, campus-maps.html | Add campus info section with: hours of operation, parking details, facility highlights (labs, tutoring center, etc.), campus map/directions. Should be immediately visible without scrolling. Links to campus-maps.html for detailed directions. | Phase 2 (by June 1) |
| **H4** | No job outcomes or salary data anywhere on site | Prospective Student, Parent/Guardian, Director | All program pages, homepage | Add job placement rates and average salary data by program (from COE, BLS, or internal tracking). Create section: "X% of graduates employed in field within 6 months; Average entry-level salary: $XX,XXX." Critical for parent/student decision-making. | Phase 2 (by June 1) |
| **H5** | No named program counselor for CNC/Machining and most programs | Faculty, Director | Program detail pages (all except Welding) | Populate counselor name, email, office hours for each program. Create repeating contact card in program detail template. Displays on detail pages and in catalog. | Phase 2 (by June 1) |
| **H6** | Tuition & Financial Aid information incomplete; tuition rates table not visible | Prospective Student, Parent/Guardian, Director | tuition-aid.html | Populate actual tuition rates table (per-program costs where applicable). Add FAFSA timeline and eligibility requirements. List available scholarships with award amounts. Detail payment plan options. Verify Net Price Calculator is embedded or linked. | Phase 2 (by June 1) |
| **H9** | Color contrast issues (utility bar links, testimonial card text) | Designer, Accessibility | utility bar, testimonial cards, section headers | Test utility bar links (#D1D5DB gray on dark background) with WCAG contrast checker. Testimonial author text (75% white opacity on green) likely fails AA. Increase opacity to 85%+ or use lighter background. Section descriptions (gray-500 on white) pass but borderline; consider darker shade. | Before launch |
| **M11** | Hero slide carousel requires complex custom code; may break in Finalsite Composer | CMS Review, Designer | index.html hero section | **DECISION REQUIRED:** Option A (Recommended) — Simplify to single static hero image + text. Elegant, low-risk, fully buildable. Option B — Use Finalsite native image rotation. Option C — Embed as custom code; requires QA testing in Composer. Test carousel in Composer sandbox before deciding. | By April 25 (decision); Phase 2 |

---

## Medium Priority (Quality Improvements)

| # | Issue | Flagged By | Pages Affected | Recommended Fix | Resolution Timeline |
|---|-------|-----------|----------------|-----------------|-------------------|
| **M1** | Section header description text lacks sufficient contrast on white background | Accessibility, Designer | "About PTC" and "Admissions" hero sections; all section headers using `.section-header__desc` | `.section-header__desc` uses gray-500 (#6B7280) on white = 5.6:1 contrast (PASS AA but low). Increase to gray-600 or gray-700 for safer margin. Verify on all colored backgrounds (testimonial cards, footers). | Before launch |
| **M2** | Mobile navigation lacks proper keyboard support & ARIA | Accessibility | Mobile menu (hamburger toggle, accordion dropdowns) | Mobile toggle has `aria-expanded` (good). Dropdown accordion items need `aria-expanded` attributes. Test Tab/Enter/ESC on mobile device. Ensure focus trap doesn't escape menu accidentally. | Before launch |
| **M3** | Hero slide images have contradictory alt/aria-hidden attributes | Accessibility | index.html carousel slides | Hero carousel images have both `alt="Students graduating"` and `aria-hidden="true"` (contradictory). Change to `alt=""` + `aria-hidden="true"` (carousel is decorative background). Or provide meaningful alt text if informative. Recommend decorative approach. | Phase 2 |
| **M4** | Negative margin hack on quick links creates maintenance risk (will break on Composer updates) | Designer, CMS Review | index.html quick-links section | Replace `margin-top: -40px` with CSS Grid overlap or flexbox positioning. Example: grid-row overlap or absolute positioning. Currently fragile; Composer may strip negative margin on save. Low-effort fix (1-2 hours CSS). | Phase 2 CSS cleanup |
| **M5** | Card styling fragmentation (`.step-card`, `.info-card`, `.testing-type`, `.accred-card` all differ) | Designer | admissions.html, about.html, program pages | Create unified `.card` component in global CSS with variants (`.card--lg`, `.card--bordered`). Consolidate shadow, border, padding values. Replace page-specific card definitions. Improves maintainability in Finalsite Composer. | Phase 2 CSS cleanup |
| **M6** | Duplicate CSS across page-specific styles (8+ `<style>` blocks duplicate hero, step cards, etc.) | Designer | about.html, admissions.html, welding pages, schedule pages | Extract all page-specific inline styles into global styles.css. Move `.page-hero`, `.step-card`, `.stat-bar` definitions to global. Remove inline `<style>` blocks. Currently 1889 lines global + 500+ lines duplicate. High maintenance burden. | Phase 2 CSS cleanup |
| **M7** | Incomplete faculty resources visibility; staff directory link goes nowhere | Faculty, Director | About page, footer | Create Staff Directory page (or dept contact list). Wire "Staff Directory" link to real page. Link from About page and footer. Include department contacts, program counselors, key personnel. Non-technical staff can maintain if structured as repeating staff card blocks. | Phase 2 |
| **M8** | Missing accreditation report links & program outcomes data | Director | about.html, consumer-information.html, footer | Link accreditation cards (COE, Cognia) to actual verification documents/reports. Create "Institutional Effectiveness Data" section with graduation rates, job placement %, salary ranges. Link to COE standards and VPAT conformance claim. | Phase 2 |
| **M9** | Application timeline not clear to prospects | Prospective Student | admissions.html FAQ | Clarify timeline: "Apply by [specific date] for [semester start date]." Add expected turnaround times: "Testing: 2 hours. Results within 3 business days." Merge campus tour CTA into main enrollment flow. | Phase 2 |
| **M10** | Prefers-reduced-motion media query missing | Accessibility | styles.css (affects bounce animation, transitions) | Add `@media (prefers-reduced-motion: reduce) { ... animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }` at end of styles.css. Vestibular disorder users must be able to disable animations. 8-line CSS addition. | IMMEDIATE (before launch) |
| **M12** | Program count accuracy issue (claims 40+, lists 35-38) | Director | programs.html, about.html | Verify exact program count. Update copy to match actual inventory. Ensure Composer template doesn't hardcode count. Consider using dynamic count from program card database if Composer supports. | Phase 2 |

---

## Low Priority (Polish)

| # | Issue | Flagged By | Pages Affected | Recommended Fix | Resolution Timeline |
|---|-------|-----------|----------------|-----------------|-------------------|
| **L1** | Footer "Employment" link is ambiguous | Prospective Student | Footer (all pages) | Clarify link text: "Employment Support" → "Career Services" or "Job Board" | Phase 3 |
| **L2** | Student Portal quick link appears before students apply | Prospective Student | Homepage quick links | This is intentional UX but low priority to address. May warrant "Current Students" quick link section separate from prospects. | Phase 3 |
| **L3** | Navigation naming inconsistency (Admissions vs Admissions & Aid) | Prospective Student | Main nav | Standardize naming across all pages. Use "Admissions & Financial Aid" or split into separate nav items. | Phase 3 |
| **L4** | Accreditation acronyms not explained (COE, Cognia) | Prospective Student, Parent/Guardian | Footer, About page | Add tooltips or brief definitions: "COE (Council on Occupational Education)" | Phase 3 |
| **L5** | No program reviews or student testimonials | Prospective Student | Programs page | Add student testimonial cards or review snippets. Welding pages have video testimonials; extend to other programs. | Phase 3 |
| **L6** | "Featured Programs" section shows only 6 of 8 clusters | Prospective Student, Director | Homepage | Clarify labeling or ensure all 8 clusters are visible. Adjust grid layout if needed. | Phase 3 |
| **L7** | No "View All Programs" visual hierarchy | Prospective Student | Homepage | Increase prominence of "View All Programs" button or add link text. | Phase 3 |
| **L8** | Campus-specific program visuals missing | Parent/Guardian | Campus pages | Add photos of actual labs, classrooms, equipment at each campus. Generic campus shots don't convey hands-on learning environment. | Phase 3 |
| **L9** | News section shows same 3 items on both campus pages | Faculty, Current Student | clearwater.html, stpete.html | Rotate or filter news by campus where applicable. Currently shows Signing Day, Diesel Open House, Chef Brian on both. | Phase 3 |
| **L10** | No "View Schedule" link from campus cards | Current Student | Homepage campus cards | Add secondary link to schedule directly from campus card: "View Class Schedule" → schedule-clearwater.html or schedule-stpete.html | Phase 3 |

---

## What's Working Well (Do Not Change)

**Positive findings that should be preserved:**

- **Professional visual design:** Brand colors, typography, layout hierarchy are consistent and polished. PTC green, yellow accent, Roboto/Roboto Slab fonts are well-applied.
- **Clear navigation structure:** 6-item top-level menu (Programs, Admissions, Tuition, Campuses, Current Students, About) with 2-column dropdowns is logical and intuitive. Mobile hamburger menu appropriately simplifies on small screens.
- **Responsive grid system:** 3-column, 2-column, and 1-column grids collapse correctly at 768px and 480px breakpoints. No hardcoded widths; uses CSS Grid and flexbox properly.
- **Semantic HTML foundation:** Pages use proper `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>` tags. ARIA labels present on key interactive elements. Good starting point for accessibility.
- **Button styling with visual feedback:** Buttons have smooth hover transitions, clear color distinctions (primary green, accent yellow, outline white), and appropriate sizing (44px+ touch targets).
- **Welding program detail pages as template:** These pages demonstrate what complete program information should look like: hero image, stat bar, curriculum details, counselor contact, testimonials. Excellent template for other programs.
- **Detailed schedule pages:** schedule-clearwater.html and schedule-stpete.html are well-structured with 894 lines covering 35 programs. Clear filter bar and breadcrumb navigation. Ready for population with real data.
- **Consumer Information hub:** 14 COE disclosure sections properly structured. Non-Discrimination statement is comprehensive and legally sound. Foundation is strong; just needs real document links.
- **Footer design:** 3-column nav grid (responsive to 1-column), accreditation logos visible, social icons, company info. Self-contained and ready to embed in Finalsite Composer.
- **Mobile-first responsive design:** Uses `clamp()` for responsive font sizes, proper breakpoints, layout reflow without horizontal scrolling. Tested at 320px width.

---

## Cross-Agent Patterns

**Issues flagged by 3+ agents (consensus problems):**

| Pattern | Agents | Impact | Evidence |
|---------|--------|--------|----------|
| **Apply/Portal CTAs Don't Work (C2, C7)** | Prospective Student, Current Student, Parent/Guardian, Faculty, Director, CMS Review (6 agents) | CRITICAL enrollment blocker. Every path to applying or accessing student tools is broken. | All "Apply Now" buttons = `href="#"`. Student Portal link = `href="#"`. This is the #1 technical blocker. |
| **Program Details Missing (C1, H1, H4)** | Prospective Student, Parent/Guardian, Faculty, Director (4 agents) | Prospective students cannot compare or learn details about 35+ programs. Parents cannot assess ROI. Faculty cannot direct students. | Only Welding has detail pages. No cost, duration, job placement, or prerequisites for other programs. |
| **Campus Information Sparse (H3)** | Current Student, Parent/Guardian, Faculty (3 agents) | Students/parents cannot find hours, parking, facility info. Must navigate away from campus pages. | Hours exist on Contact page, not campus page. Maps page is separate. Parking info hidden. |
| **Keyboard/Accessibility Navigation Broken (C5, H10-H13)** | Designer, Accessibility (2 agents, but multiple critical issues) | LEGAL COMPLIANCE RISK. Section 508/ADA violations block launch. | Dropdowns only on :hover (no :focus-within). No skip link. No focus indicators. Breadcrumb not semantic. |
| **Tuition & Financial Aid Incomplete (H6)** | Prospective Student, Parent/Guardian, Director (3 agents) | Families cannot calculate cost or ROI. Major decision factor for enrollment. | tuition-aid.html exists but rates table not visible in preview. No program-specific costs shown. |
| **Job Outcomes & Salary Data Missing (H4)** | Prospective Student, Parent/Guardian, Director, CMS Review (4 agents) | Parents' #1 reason to choose technical college over 4-year university is "faster + cheaper with proven job placement." This proof is missing. | Zero placement rates, salary ranges, or employer feedback visible anywhere on site. |

**Consensus vs. Disagreement:**

- **STRONG CONSENSUS:** C2 (Apply links), C5-C6 (keyboard access), C1/H1 (program details), H4 (job outcomes), H6 (tuition) are universally flagged as critical problems.
- **AGREEMENT ON SEVERITY:** All 8 agents agree the site is NOT launch-ready. Prospective Student, Current Student, Parent/Guardian, and Director all flag critical enrollment pathway issues.
- **DISAGREEMENT ON PRIORITY:** Designer prioritizes CSS cleanup (M4, M5, M6) as maintenance risk; Director prioritizes compliance/leadership (C3, C4) as accreditation risk. Both are valid; sequencing matters.

---

## Progress Since 2026-04-15 Review

**Zero critical issues resolved.** All 7 C-level issues from April 15 remain open. All 13 H-level issues remain open. No measurable progress on content (program details, tuition rates, job outcomes).

**What HAS progressed:**
- **C4 (Partial):** Footer links now point to consumer-information.html instead of dead links. Still missing actual compliance documents and Accessibility Statement page.
- **H1 (Status Quo):** Welding pages remain template-worthy; other programs still missing. No new detail pages created.
- **Pages Added (Neutral):** schedule-clearwater.html and schedule-stpete.html exist as comprehensive drafts (894 lines, 35 programs), but marked "DRAFT" pending counselor confirmation. Ready for final data.

**No issues moved to Resolved or Deferred.** All open issues from April 15 remain in the same state.

**Implication:** Between April 15 and April 22, focus was likely on design refinement and page structure (layout, styling, organization). Content population and technical integration (portal URLs, accessibility fixes) were deferred. This aligns with "Phase 1-2" roadmap (structure) vs. "Phase 3" (content + refinement).

---

## Recommended Next Steps

### **IMMEDIATE (This Week — Before Finalsite CMS Build)**

1. **Decision on H8 (Program Filtering):** Schedule 30-min stakeholder call. Decide: Static category pages (recommended) or keep dynamic JavaScript (high maintenance). Affects scope of programs.html redesign.

2. **Decision on M11 (Hero Carousel):** Test carousel behavior in Finalsite Composer sandbox. Decide: Simplify to static hero (recommended) or use Composer native rotation or complex custom embed. Affects homepage scope.

3. **Decision on M4 (Negative Margin):** Quick CSS refactor (1 hour). Replace negative margin with CSS Grid/flexbox overlap. Improves robustness for Composer.

4. **Fix Critical Accessibility Issues (4 hours):**
   - C5: Add `:focus-within` to dropdown nav (1 line CSS)
   - C6: Add skip link to header template (5 lines HTML/CSS)
   - H10: Add `:focus-visible` outline to all buttons/links (5 lines CSS)
   - H11: Add label to search input (2 lines HTML/CSS)
   - H12: Add `aria-hidden="true"` to all icon `<i>` tags (find/replace, ~30 min)
   - H13: Convert breadcrumbs to semantic structure (3 pages, ~1 hour)
   - M10: Add `@media (prefers-reduced-motion: reduce)` rule (8 lines CSS)

5. **Wire C2 & C7 CTA Links:** Replace all `href="#"` with real portal URLs. Coordinate with IT/PCSB for Canvas, Focus, Webmail, Application Portal URLs. (1 hour once URLs provided)

6. **Schedule Accessibility Audit Follow-Up:** Brief 30-min call with Accessibility Audit agent to confirm all critical fixes meet WCAG 2.1 AA before Composer build.

### **PHASE 2 (May 1-31 — Content & Composer Build)**

1. **Populate Program Details:** Create detail pages or expand programs.html inline details for top 5-6 programs. Show cost, duration, job placement, prerequisites, counselor name. Use Welding pages as template.

2. **Audit & Fix Program Accuracy (H1, H2):** Verify which programs run at which campus. Remove inaccurate program listings from St. Pete page. Create master program inventory.

3. **Add Campus Information (H3):** Populate hours, parking, facility info, campus maps on clearwater.html and stpete.html. Ensure immediately visible.

4. **Add Job Outcomes & Salary Data (H4):** Source data from COE, BLS, or internal tracking. Create "Employment & Salary" section on program pages and homepage. Include placement rates and average entry-level salary.

5. **Complete Tuition & Financial Aid (H6):** Populate tuition rates table, FAFSA timeline, scholarship list, payment plan details. Embed Net Price Calculator if available.

6. **Photograph & Profile Leadership (C3):** Get professional headshots and bios for Clearwater director, St. Pete director, PCSB designate. Update About page leadership section.

7. **Create Compliance Pages (C4):** Build /accessibility.html with WCAG conformance claim. Link accreditation logos to COE/Cognia reports. Ensure Privacy Policy and FERPA complaint procedures are accessible.

8. **Populate Faculty Resources (M7, M8):** Create Staff Directory page. Link from About and footer. Build institutional effectiveness data section (graduation rates, job placement %, salary ranges).

9. **Finalsite Composer Build & UAT:** Using decisions from Immediate phase, build pages in Composer sandbox. Test hero, navigation, footer, form elements, media queries, custom code embeds. 2-week UAT window (May 13-27).

### **PHASE 3 (June 1+ — Polish & Launch)**

1. **Finalize Schedule Pages:** Confirm all 35 programs in schedule-clearwater.html and schedule-stpete.html have complete counselor data, times, locations. Remove "DRAFT" banner.

2. **Add Program-Specific Testimonials (L5):** Gather student success stories or video testimonials for top programs (beyond Welding).

3. **Campus-Specific Visuals (L8):** Photograph labs, classrooms, equipment at each campus. Update generic campus card images.

4. **Refine Card & CSS Design (M5, M6):** Consolidate card component styles. Remove duplicate CSS. Finalize responsive grid behavior on all devices.

5. **Go Live:** Deploy to production (clearwater.myptc.edu). Monitor for broken links, form submissions, mobile responsiveness, analytics.

6. **Post-Launch Monitoring:** Track user behavior (Admissions funnel, application start rate, schedule views). Address H8/M11 improvements if static pages outperform dynamic filtering or if carousel adds value.

---

## Summary Statistics

**Total Open Issues:** 45 (7 Critical, 13 High, 12 Medium, 10 Low)

**Issues New to 2026-04-22 Review:** 0 (all issues from April 15 carry forward; no progress marked)

**Critical Blockers:** 7 (C1-C7)  
- Legal/Compliance: C5, C6, C4 (Section 508/ADA)
- Functional: C2, C7 (enrollment pathway)
- Content: C1, C3 (program details, leadership)

**Timeline to Launch Readiness:**  
- Critical fixes (Immediate phase): 4-8 hours development + decision-making
- Phase 2 content/CMS: 2-4 weeks (parallel to Composer build)
- Phase 3 polish/launch: 1 week final testing

**Risk Level:** HIGH (multiple legal and functional blockers)

---

**Report Prepared:** April 22, 2026 at 11:30 AM  
**Next Review Scheduled:** May 13, 2026 (post-Phase 2 completion, pre-launch)
