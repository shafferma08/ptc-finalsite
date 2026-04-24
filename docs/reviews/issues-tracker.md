# PTC Website Redesign - Issues Tracker
Last updated: 2026-04-23

## Open Issues
| # | Issue | Priority | Flagged By | Pages | Date Found | Status | Last Review |
|---|-------|----------|-----------|-------|------------|--------|-------------|
| C1 | Missing Program Details (length, cost, tuition, start dates, job placement rates) on all program pages except Welding | CRITICAL | Prospective Student, Parent/Guardian, Faculty, Director | programs.html, all program detail pages | 2026-04-15 | Open | 2026-04-22 |
| C2 | All Apply/Application CTAs link to "#" instead of live portal | CRITICAL | Prospective Student, Parent/Guardian, Faculty, Director, Current Student | Homepage, Campus pages, Admissions, all CTA buttons, utility bar | 2026-04-15 | Open | 2026-04-22 |
| C3 | Leadership representation missing - About page shows placeholder icons only | CRITICAL | Director, Parent/Guardian | about.html | 2026-04-15 | Open | 2026-04-22 |
| C4 | Compliance documentation links non-functional (Privacy Policy, Accessibility Statement, Consumer Info, Accreditation reports) | CRITICAL | Director, Accessibility Audit | Footer (all pages); consumer-information.html | 2026-04-15 | Partially Addressed | 2026-04-22 |
| C7 | Homepage "Student Portal" utility link is dead (goes to #); Student Portal nav dropdown also broken | CRITICAL | Current Student, Faculty, Director | index.html utility bar; main nav Current Students dropdown | 2026-04-15 | Partially Addressed (homepage cluster cards now routed) | 2026-04-23 |
| H1 | Program detail pages only exist for Welding; other programs missing | High | Faculty, Director, Prospective Student, Parent/Guardian | programs.html, program detail pages | 2026-04-15 | Open | 2026-04-22 |
| H2 | St. Pete campus page lists programs not offered there (e.g., Advanced Welding) | High | Faculty, Director | stpete.html | 2026-04-15 | Open | 2026-04-22 |
| H3 | No campus hours, parking, facility info, or maps on campus pages | High | Current Student, Parent/Guardian, Director | clearwater.html, stpete.html, campus-maps.html | 2026-04-15 | Open | 2026-04-22 |
| H4 | No job outcomes or salary data anywhere on site | High | Prospective Student, Parent/Guardian, Director, CMS Review | All program pages, homepage | 2026-04-15 | Open | 2026-04-22 |
| H5 | No named program counselor for CNC/Machining and most programs | High | Faculty, Director | Program detail pages | 2026-04-15 | Open | 2026-04-22 |
| H6 | Tuition & Financial Aid information incomplete; actual costs not visible | High | Prospective Student, Parent/Guardian, Director | tuition-aid.html, navigation | 2026-04-15 | Open | 2026-04-22 |
| H7 | Mobile responsiveness - fixed font sizes on About/Admissions pages | High | Design Review | about.html, admissions.html | 2026-04-15 | Partially Addressed | 2026-04-22 |
| H8 | Dynamic program filtering cannot be built in Finalsite Composer (architectural decision needed) | High | CMS Review | programs.html | 2026-04-15 | Open (Design Decision Pending) | 2026-04-22 |
| H9 | Color contrast issues (utility bar links, testimonial card text) | High | Accessibility Audit, Designer | styles.css, multiple pages | 2026-04-15 | Open | 2026-04-22 |
| M1 | Section header description text lacks sufficient contrast on white background | Medium | Accessibility Audit, Designer | Admissions, About pages | 2026-04-15 | Open | 2026-04-22 |
| M2 | Mobile navigation lacks proper keyboard support & ARIA on accordion items | Medium | Accessibility Audit | All pages (mobile menu) | 2026-04-15 | Partially Addressed | 2026-04-22 |
| M4 | Negative margin hack on quick links creates maintenance risk (will break on Composer updates) | Medium | Design Review, CMS Review | index.html (quick-links section) | 2026-04-15 | Open | 2026-04-22 |
| M5 | Card styling fragmentation (.step-card, .info-card, .testing-type vary) | Medium | Design Review | admissions.html, about.html | 2026-04-15 | Open | 2026-04-22 |
| M6 | Duplicate CSS across page-specific styles (8+ style blocks) | Medium | Design Review, CMS Review | about.html, admissions.html, welding pages, schedule pages | 2026-04-15 | Open | 2026-04-22 |
| M7 | Incomplete faculty resources visibility (staff directory link dead) | Medium | Faculty, Director, CMS Review | About page, footer | 2026-04-15 | Open | 2026-04-22 |
| M8 | Missing accreditation report links & program outcomes data | Medium | Director, CMS Review | about.html, footer | 2026-04-15 | Partially Addressed | 2026-04-22 |
| M9 | Application timeline not clear to prospects (vague dates/turnaround times) | Medium | Prospective Student | admissions.html | 2026-04-15 | Open | 2026-04-22 |
| M11 | Hero image carousel requires testing in Finalsite Composer (maintenance risk) | Medium | CMS Review, Designer | index.html | 2026-04-15 | Open (Design Decision Pending) | 2026-04-22 |
| L1 | Footer "Employment" link is ambiguous | Low | Prospective Student | Footer (all pages) | 2026-04-15 | Open | 2026-04-22 |
| L2 | Student Portal quick link appears before students apply (low priority ordering) | Low | Prospective Student | Homepage quick links | 2026-04-15 | Open | 2026-04-22 |
| L4 | Accreditation acronyms not explained (COE, Cognia) | Low | Prospective Student, Parent/Guardian | Footer, About page | 2026-04-15 | Open | 2026-04-22 |
| L5 | No program reviews or student testimonials | Low | Prospective Student | Programs page | 2026-04-15 | Open | 2026-04-22 |
| L7 | No "View All Programs" visual hierarchy | Low | Prospective Student | Homepage | 2026-04-15 | Open | 2026-04-22 |
| L8 | Campus-specific program visuals missing | Low | Parent/Guardian | Campus pages | 2026-04-15 | Open | 2026-04-22 |
| L9 | News section shows same 3 items on both campus pages (not campus-specific) | Low | Faculty, Current Student | clearwater.html, stpete.html | 2026-04-15 | Open | 2026-04-22 |

## Resolved Issues
| # | Issue | Priority | Date Found | Date Resolved | Resolution | Confirmed By |
|---|-------|----------|------------|---------------|------------|--------------|
| C5 | Dropdown nav not keyboard accessible (missing :focus-within) | Critical | 2026-04-15 | 2026-04-22 | Added :focus-within alongside :hover to nav dropdown rules in styles.css (lines 330-364, 1782); mobile-disable rule extended to also cancel focus-within state. | 2026-04-22 session |
| C6 | Missing skip-to-main-content link | Critical | 2026-04-15 | 2026-04-22 | Added .skip-link CSS utility + `<a href="#main-content" class="skip-link">Skip to main content</a>` as first focusable element of body on 19 production pages + 4 shell templates. | 2026-04-22 session |
| H10 | No visible focus indicators for keyboard navigation | High | 2026-04-15 | 2026-04-22 | Global `:focus-visible { outline: 3px solid var(--color-yellow); outline-offset: 2px; }` on a, button, input, select, textarea, [tabindex], .btn in styles.css. | 2026-04-22 session |
| H11 | Search form missing associated label | High | 2026-04-15 | 2026-04-22 | Added `<label for="search-input" class="sr-only">Search</label>` + `.sr-only` button text across 7 files carrying the header search form. | 2026-04-22 session |
| H12 | Icon-only buttons need aria-hidden on icon elements | High | 2026-04-15 | 2026-04-22 | 125 icon aria-hidden additions across 23 files (regex pass). Covers header search/mobile toggles, footer social icons, hero scroll arrow, other icon-only controls. | 2026-04-22 session |
| H13 | Breadcrumb navigation using text "/" instead of semantic markup | High | 2026-04-15 | 2026-04-23 | Converted to `<nav aria-label="Breadcrumb"><ol><li>...</li></ol></nav>` across 13 pages (admissions, about, campus-maps, careers, consumer-information, contact, sitemap, student-resources, tuition-aid, schedule-clearwater, schedule-stpete, welding-clearwater, welding-stpete, welding-advanced, post-a-job-mockup). Current page marked `aria-current="page"`. Visual separators moved to CSS `::after` pseudo-elements so design unchanged. | 2026-04-23 session |
| M3 | Hero slide images have contradictory alt/aria-hidden attributes | Medium | 2026-04-15 | 2026-04-23 | Cleared alt attributes to empty strings on all 4 hero slide `<img>` tags in index.html (kept aria-hidden). Hero message lives in h1 + subtitle; images are decorative. | 2026-04-23 session |
| M10 | Prefers-reduced-motion media query missing | Medium | 2026-04-15 | 2026-04-22 | Added `@media (prefers-reduced-motion: reduce)` rule in styles.css collapsing all animations/transitions/scroll-behavior to ~0ms. | 2026-04-22 session |
| M12 | Program count accuracy (claimed 40+, listed 35-38) | Medium | 2026-04-15 | 2026-04-23 | Programs page now has 41 `.prog-card` entries (counted). Homepage/about claim "over 40" matches. Confirmed during H13 audit. | 2026-04-23 session |
| L3 | Navigation naming inconsistency (Admissions vs Admissions & Aid on main-site pages) | Low | 2026-04-15 | 2026-04-23 | Split programs.html nav from single "Admissions & Aid" dropdown into separate Admissions + Tuition & Aid pillars, matching the rest of the main site (index, admissions, tuition-aid, about, contact, consumer-information, careers). Campus-site nav intentionally keeps combined pattern per Apr 14 Session 3 design decision. | 2026-04-23 session |
| L6 | Featured Programs section shows only 6 of 8 clusters | Low | 2026-04-15 | 2026-04-22 | Homepage grid expanded to 8 cluster cards (added Business & Office, Arts Media & Education). Cards wired to `programs.html?cluster=<slug>`. | 2026-04-22 session |
| L10 | No "View Schedule" link from campus cards | Low | 2026-04-15 | 2026-04-22 | Added `.campus-card__schedule` secondary link under "Visit Campus" CTA on both homepage campus cards → schedule-clearwater.html and schedule-stpete.html. | 2026-04-22 session |

## Deferred Issues
| # | Issue | Priority | Reason for Deferral | Target Phase |
|---|-------|----------|---------------------|--------------|
| Issue #3 (UX Review) | No employer engagement hook on homepage | Medium | Post-launch enhancement; not blocking enrollment pathway. Can add employer testimonial/logo wall in Phase 3. | Phase 3 |
| M9 variant | "View All Programs" button could be more prominent | Low | Low impact on discoverability; users can navigate via Programs dropdown. Address in Phase 3 polish. | Phase 3 |

---

## Key Statistics

**Total Open Issues:** 30 (5 Critical, 9 High, 9 Medium, 7 Low)  
**Critical Issues:** C1, C2, C3, C4, C7 (partial)  
**High Issues:** H1, H2, H3, H4, H5, H6, H7, H8, H9  
**Medium Issues:** M1, M2, M4, M5, M6, M7, M8, M9, M11  
**Low Issues:** L1, L2, L4, L5, L7, L8, L9  

**Resolved Issues:** 12 (C5, C6, H10, H11, H12, H13, M3, M10, M12, L3, L6, L10)  
**Partially Addressed:** C4 (footer links now point to pages), C7 (homepage cluster cards routed; utility bar still #), H7 (responsive fonts using clamp()), M2 (aria-expanded present), M8 (accreditation section visible)  
**Design Decision Pending:** H8 (filtering architecture), M11 (carousel approach)  

**Status Summary (2026-04-23 Review):**
- **Accessibility pass substantially complete**: 5 of 6 a11y-blocker items (C5, C6, H10, H11, H12, H13) closed across Apr 22-23 sessions
- **Zero progress on content** (program details, tuition rates, job outcomes, leadership photos) — same as prior review
- **12 of 42 original issues resolved** (29% closure rate) across two sessions
- **Focus this week:** Accessibility/semantics remediation, nav consistency
- **Deferred to Phase 2-3:** Content population, technical integration, compliance documents

**Legal/Compliance Risk:** MEDIUM (was HIGH)  
- Remaining a11y items: H9 (color contrast), M1 (text contrast), M2 (mobile nav ARIA partial) — incremental, not structural
- Skip link, focus indicators, breadcrumb semantics, search label, and icon aria-hidden all in place

**Enrollment Conversion Risk:** CRITICAL  
- All Apply/Portal CTAs non-functional (C2, C7)
- Program details missing for 35+ programs (C1, H1)
- Tuition/financial aid incomplete (H6)
- Job outcomes absent (H4)

---

## Legend
- **CRITICAL (C1-C7):** Blocks launch; legal/compliance risk; major enrollment barriers
- **High (H1-H13):** Significant UX or compliance impact; must fix in Phase 1-2
- **Medium (M1-M12):** Quality improvements; address in Phase 2-3
- **Low (L1-L10):** Polish; post-launch acceptable

**Total Issues Found:** 42  
**Critical:** 7 | **High:** 13 | **Medium:** 12 | **Low:** 10

---

**Last Updated:** April 23, 2026  
**Next Review Cycle:** May 13, 2026 (after Phase 2 progress)
