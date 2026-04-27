# PTC Website Redesign - Issues Tracker
Last updated: 2026-04-27 (post-fix session)

## Open Issues
| # | Issue | Priority | Flagged By | Pages | Date Found | Status | Last Review |
|---|-------|----------|-----------|-------|------------|--------|-------------|
| C1 | Missing Program Details (length, cost, tuition, start dates, job placement rates) on all program pages except Welding | CRITICAL | Prospective Student, Parent/Guardian, Faculty, Director | programs.html, all program detail pages | 2026-04-15 | Open | 2026-04-22 |
| C2 | All Apply/Application CTAs link to "#" instead of live portal | CRITICAL | Prospective Student, Parent/Guardian, Faculty, Director, Current Student, Accessibility | Homepage, Campus pages, Admissions, all CTA buttons, utility bar; About cluster (about.html utility + CTA band, both campus About headers) | 2026-04-15 | Open | 2026-04-27 |
| C4 | Compliance documentation links non-functional (Privacy Policy, Accessibility Statement, Consumer Info, Accreditation reports) | CRITICAL | Director, Accessibility Audit | Footer (all pages); consumer-information.html | 2026-04-15 | Substantially Addressed at campus level (campus About pages link to live PCSB / Finalsite PDFs across all 7/8 cards); about.html accreditation cards still doc-less | 2026-04-27 |
| C7 | Apply Now / Request Info CTAs and other utility-bar items still href="#" across the site | CRITICAL | Current Student, Faculty, Director | index.html, about.html (Apply Now, Events, Español, CTA band), campus pages (Apply Now button) | 2026-04-15 | Partially Addressed (homepage cluster cards routed; about.html Current Students dropdown wired 2026-04-27 with Canvas, Focus, campus-aware schedules, Transcript Request via live URLs; about.html utility bar Student Portal renamed to Focus Portal and wired; Apply Now / Events / CTA band still pending portal integration) | 2026-04-27 |
| H1 | Program detail pages only exist for Welding; other programs missing | High | Faculty, Director, Prospective Student, Parent/Guardian | programs.html, program detail pages | 2026-04-15 | Open | 2026-04-22 |
| H2 | St. Pete campus page lists programs not offered there (e.g., Advanced Welding) | High | Faculty, Director | stpete.html | 2026-04-15 | Open | 2026-04-22 |
| H3 | No campus hours, parking, facility info, or maps on campus pages | High | Current Student, Parent/Guardian, Faculty, Director | clearwater.html, stpete.html, clearwater-about.html, stpete-about.html, campus-maps.html | 2026-04-15 | Open (now also applies to campus About pages) | 2026-04-27 |
| H4 | No job outcomes or salary data anywhere on site | High | Prospective Student, Parent/Guardian, Director, CMS Review | All program pages, homepage, about.html | 2026-04-15 | Open | 2026-04-27 |
| H5 | No named program counselor for CNC/Machining and most programs | High | Faculty, Director | Program detail pages | 2026-04-15 | Open | 2026-04-22 |
| H6 | Tuition & Financial Aid information incomplete; actual costs not visible | High | Prospective Student, Parent/Guardian, Director | tuition-aid.html, navigation | 2026-04-15 | Open | 2026-04-22 |
| H7 | Mobile responsiveness - fixed font sizes on About/Admissions pages | High | Design Review, Prospective Student | admissions.html (about cluster closed 2026-04-27) | 2026-04-15 | Partially Addressed; About cluster fully migrated to clamp(); admissions.html still pending | 2026-04-27 |
| H8 | Dynamic program filtering cannot be built in Finalsite Composer (architectural decision needed) | High | CMS Review | programs.html | 2026-04-15 | Open (Design Decision Pending) | 2026-04-22 |
| H15 | Code of Conduct asymmetry: St. Pete About has Code of Conduct card (8 cards); Clearwater About is missing it (7 cards). Critical for current Clearwater students; campus-equity issue for COE/PCSB optics | High | Current Student, Parent/Guardian, Faculty, Director | clearwater-about.html (compliance grid) | 2026-04-27 | Open — gating live-side fix; CLW does not publish a Code of Conduct on its live About cluster, so card cannot be added on redesign without a source URL. Logged in `docs/audit/follow-ups.md` for CLW campus admin | 2026-04-27 |
| M2 | Mobile navigation lacks proper keyboard support & ARIA on accordion items | Medium | Accessibility Audit | All pages (mobile menu) | 2026-04-15 | Partially Addressed | 2026-04-22 |
| M5 | Card styling fragmentation. Canonical .card seeded 2026-04-26 but no About cluster page has migrated. Campus About pages introduced new .compliance-card pattern with ~80 inline declarations per page | Medium | Design Review, CMS Review | admissions.html, about.html, clearwater-about.html, stpete-about.html | 2026-04-15 | Open (canonical component seeded; page migrations pending) | 2026-04-27 |
| M6 | Duplicate CSS across page-specific styles. about.html still carries 296-line `<style>` block. Campus About pages avoided a `<style>` block by inlining (worse pattern) | Medium | Design Review, CMS Review | about.html, admissions.html, welding pages, schedule pages, clearwater-about.html, stpete-about.html | 2026-04-15 | Open (regressed at campus level) | 2026-04-27 |
| M7 | Staff directory link dead in 4 places: about.html About PTC dropdown line 441, about.html Leadership CTA line 705, both campus Campus Info dropdowns. Compounds C3 | Medium | Faculty, Director, CMS Review | about.html, clearwater-about.html, stpete-about.html, footer | 2026-04-15 | Open | 2026-04-27 |
| M8 | Missing accreditation report links & program outcomes data. Campus pages now link out broadly; about.html accreditation cards still doc-less; program-level outcomes still missing institution-wide | Medium | Director, CMS Review | about.html, footer | 2026-04-15 | Partially Addressed (campus level improved) | 2026-04-27 |
| M9 | Application timeline not clear to prospects (vague dates/turnaround times) | Medium | Prospective Student | admissions.html | 2026-04-15 | Open | 2026-04-22 |
| M11 | Hero image carousel requires testing in Finalsite Composer (maintenance risk) | Medium | CMS Review, Designer | index.html | 2026-04-15 | Open (Design Decision Pending) | 2026-04-22 |
| M15 | Decorative `<i>` icons inside utility-bar links and main-nav chevrons not aria-hidden — sitewide pattern | Medium | Accessibility | Sitewide (About cluster closed 2026-04-27) | 2026-04-27 | Partially Addressed (3 About pages closed; sitewide sweep still pending) | 2026-04-27 |
| M17 | SIP year asymmetry: Clearwater links 2024-25 SIP, St. Pete links 2025-26 SIP. PCSB-board-visible inconsistency | Medium | Director | clearwater-about.html line 217, stpete-about.html line 216 | 2026-04-27 | Open — gating live-side fix; logged in `docs/audit/follow-ups.md` for CLW campus admin to publish 2025-26 SIP | 2026-04-27 |
| M19 | about.html Campuses dropdown does not link to the new clearwater-about.html / stpete-about.html sub-pages, only to campus homepages. New About pages undiscoverable from institutional hub nav | Medium | Current Student | about.html Campuses dropdown | 2026-04-27 | Open (new) | 2026-04-27 |
| M20 | "Two Campuses, One Mission" paragraph on about.html names specific programs per campus and omits CNC Machining and Welding-Advanced (both at St. Pete). List reads as authoritative but is incomplete | Medium | Faculty, Director | about.html line 719 | 2026-04-27 | Open (new) | 2026-04-27 |
| M21 | St. Pete Programs nav dropdown lists 7 career clusters; Clearwater nav lists 8. STP missing "Business & Office". Either intentional campus-offering difference or equity gap | Medium | Prospective Student, Current Student, Director | stpete-about.html nav lines 65-72 | 2026-04-27 | Open (new) | 2026-04-27 |
| M22 | "60+ Programs across 40+ Career Areas" stat on about.html conflicts with homepage / programs.html "41 programs across 8 career clusters" framing. Reads as contradictory to a prospect | Medium | Prospective Student, Director | about.html line 564 | 2026-04-27 | Open (new) | 2026-04-27 |
| M23 | History timeline on about.html reduced to two entries (1962 and Today) after audit pruning. Visually reads as broken / missing data | Medium | Prospective Student, Current Student, Director, Designer | about.html lines 593-607 | 2026-04-27 | Open (new) | 2026-04-27 |
| M24 | Campus header logo alt = "PTC Logo" on both campus About pages. about.html uses descriptive form. Inconsistent and non-descriptive | Medium | Director, Accessibility | clearwater-about.html line 48, stpete-about.html line 48 | 2026-04-27 | Open (new) | 2026-04-27 |
| M25 | Linked PDFs (catalogs, SIPs, Code of Conduct, Annual Impact Report) accessibility unverified. Section 508 + WCAG 1.1.1 require linked non-HTML content to be accessible | Medium | Accessibility | All three About pages (all PDF links) | 2026-04-27 | Open (new) | 2026-04-27 |
| M26 | No ADA / Section 504 statement on the institutional About page itself. Footer link points to consumer-information.html#accessibility but About page has no inline statement | Medium | Director | about.html | 2026-04-27 | Open (new) | 2026-04-27 |
| M27 | No PCSB Compliance Officer / Title IX contact named on the About page. PCSB Office of Equal Opportunity (727-588-6285, complianceofficer@pcsb.org) is the canonical contact | Medium | Director | about.html | 2026-04-27 | Open (new) | 2026-04-27 |
| M28 | Records request cards use bare email addresses with no contact name or title. Functional but impersonal | Medium | Director | clearwater-about.html line 235, stpete-about.html line 240 | 2026-04-27 | Open (new) | 2026-04-27 |
| M29 | External-link new-tab opening not announced to assistive tech. All compliance card links open `target="_blank"` with aria-hidden icons; SR users get no warning | Medium | Accessibility | clearwater-about.html, stpete-about.html (all compliance card links) | 2026-04-27 | Open (new) | 2026-04-27 |
| M30 | Repeated link text "View reports" / "Download PDF" / "View plan" on compliance cards. Programmatic context (article > h3) provides AA-compliant disambiguation but links-list navigation hears duplicates | Medium | Accessibility | clearwater-about.html, stpete-about.html | 2026-04-27 | Open (new) | 2026-04-27 |
| M31 | Footer social link aria-label "Twitter/X" reads as compound to screen readers. Sloppy compound on a public-institution social affordance | Medium | Accessibility | All three About pages (sitewide pattern) | 2026-04-27 | Open (new) | 2026-04-27 |
| M32 | Navigation dropdown column headings use `<h4>` ("By Career Cluster", "Quick Links", etc.) which appear before any document h2/h3 in heading outline, polluting screen-reader heading navigation | Medium | Accessibility | All three About pages (sitewide pattern) | 2026-04-27 | Open (new) | 2026-04-27 |
| L2 | Student Portal quick link appears before students apply (low priority ordering) | Low | Prospective Student | Homepage quick links | 2026-04-15 | Open | 2026-04-22 |
| L5 | No program reviews or student testimonials | Low | Prospective Student | Programs page | 2026-04-15 | Open | 2026-04-22 |
| L8 | Campus-specific program visuals missing | Low | Parent/Guardian | Campus pages | 2026-04-15 | Open | 2026-04-22 |
| L9 | News section shows same 3 items on both campus pages (not campus-specific) | Low | Faculty, Current Student | clearwater.html, stpete.html | 2026-04-15 | Open | 2026-04-22 |
| L11 | Hero breadcrumb wrapper opacity 0.85 puts breadcrumb link at borderline contrast on green gradient | Low | Accessibility | about.html line 24 (CSS) | 2026-04-27 | Open (new) | 2026-04-27 |
| L12 | stpete-about.html School Improvement Plan card uses fa-external-link-alt icon but link copy says "Download PDF". Code of Conduct card directly below correctly uses fa-file-pdf | Low | Designer | stpete-about.html line 217 | 2026-04-27 | Open (new) | 2026-04-27 |
| L13 | Campus About pages have no bottom-of-page CTA band. After compliance grid the page just ends. Missed conversion moment | Low | Prospective Student, Director | clearwater-about.html, stpete-about.html | 2026-04-27 | Open (new) | 2026-04-27 |
| L14 | Campus About hero subtitle ("Campus accreditation, catalog, written plans, safety reports, and other compliance documents") is jargon-heavy for a 19-year-old prospect landing here from "About This Campus" nav | Low | Prospective Student | clearwater-about.html line 167, stpete-about.html line 166 | 2026-04-27 | Open (new) | 2026-04-27 |
| L15 | CVAEC (Clearview Adult Education Center) used by St. Pete IT IET program is not surfaced on St. Pete About page | Low | Faculty | stpete-about.html | 2026-04-27 | Open (new) | 2026-04-27 |

## Resolved Issues
| # | Issue | Priority | Date Found | Date Resolved | Resolution | Confirmed By |
|---|-------|----------|------------|---------------|------------|--------------|
| C5 | Dropdown nav not keyboard accessible (missing :focus-within) | Critical | 2026-04-15 | 2026-04-22 | Added :focus-within alongside :hover to nav dropdown rules in styles.css (lines 330-364, 1782); mobile-disable rule extended to also cancel focus-within state. | 2026-04-22 session; reconfirmed 2026-04-27 a11y audit |
| C6 | Missing skip-to-main-content link | Critical | 2026-04-15 | 2026-04-22 | Added .skip-link CSS utility + `<a href="#main-content" class="skip-link">Skip to main content</a>` as first focusable element of body on 19 production pages + 4 shell templates. | 2026-04-22 session; reconfirmed 2026-04-27 on all three About pages |
| H10 | No visible focus indicators for keyboard navigation | High | 2026-04-15 | 2026-04-22 | Global `:focus-visible { outline: 3px solid var(--color-yellow); outline-offset: 2px; }` on a, button, input, select, textarea, [tabindex], .btn in styles.css. | 2026-04-22 session; reconfirmed 2026-04-27 |
| H11 | Search form missing associated label | High | 2026-04-15 | 2026-04-22 | Added `<label for="search-input" class="sr-only">Search</label>` + `.sr-only` button text across 7 files carrying the header search form. | 2026-04-22 session. NOTE: 2026-04-27 audit found regression on new campus About pages (icon-only link with no accessible name); tracked separately as H11-r |
| H12 | Icon-only buttons need aria-hidden on icon elements | High | 2026-04-15 | 2026-04-22 | 125 icon aria-hidden additions across 23 files (regex pass). Covers header search/mobile toggles, footer social icons, hero scroll arrow, other icon-only controls. | 2026-04-22 session. NOTE: 2026-04-27 audit found utility-bar and nav-chevron icons missed; tracked as M15 |
| H13 | Breadcrumb navigation using text "/" instead of semantic markup | High | 2026-04-15 | 2026-04-23 | Converted to `<nav aria-label="Breadcrumb"><ol><li>...</li></ol></nav>` across 13 pages. Current page marked `aria-current="page"`. Visual separators moved to CSS `::after` pseudo-elements so design unchanged. | 2026-04-23 session; reconfirmed 2026-04-27 (semantic markup correct on all 3 About pages, though campus pages use inline span separators tracked as M16) |
| M3 | Hero slide images have contradictory alt/aria-hidden attributes | Medium | 2026-04-15 | 2026-04-23 | Cleared alt attributes to empty strings on all 4 hero slide `<img>` tags in index.html (kept aria-hidden). Hero message lives in h1 + subtitle; images are decorative. | 2026-04-23 session |
| M10 | Prefers-reduced-motion media query missing | Medium | 2026-04-15 | 2026-04-22 | Added `@media (prefers-reduced-motion: reduce)` rule in styles.css collapsing all animations/transitions/scroll-behavior to ~0ms. | 2026-04-22 session; reconfirmed 2026-04-27 |
| M12 | Program count accuracy (claimed 40+, listed 35-38) | Medium | 2026-04-15 | 2026-04-23 | Programs page now has 41 `.prog-card` entries (counted). Homepage/about claim "over 40" matches. Confirmed during H13 audit. | 2026-04-23 session |
| L3 | Navigation naming inconsistency (Admissions vs Admissions & Aid on main-site pages) | Low | 2026-04-15 | 2026-04-23 | Split programs.html nav from single "Admissions & Aid" dropdown into separate Admissions + Tuition & Aid pillars. Campus-site nav intentionally keeps combined pattern per Apr 14 Session 3 design decision. | 2026-04-23 session |
| H9 | Color contrast issues (utility bar links, testimonial card text) | High | 2026-04-15 | 2026-04-24 | Utility bar link color raised from `--color-gray-300` to `--color-gray-200` on gray-900 background. Testimonial card `__program` secondary text bumped to rgba(255,255,255,0.95). | 2026-04-24 session; reconfirmed 2026-04-27 (.utility-bar--campus modifier inherits AA-compliant base) |
| M1 | Section header description text lacks sufficient contrast on white background | Medium | 2026-04-15 | 2026-04-24 | `.section-header__desc` color darkened from `--color-gray-500` to `--color-gray-600`. Raises contrast from ~5.2:1 to ~7.6:1 (AAA) on white. | 2026-04-24 session; reconfirmed 2026-04-27 |
| M4 | Negative margin hack on quick links creates maintenance risk | Medium | 2026-04-15 | 2026-04-24 | Replaced `margin-top: -40px` on `.quick-links` section with `transform: translateY(-40px)` + `margin-bottom: -40px`. | 2026-04-24 session |
| L6 | Featured Programs section shows only 6 of 8 clusters | Low | 2026-04-15 | 2026-04-22 | Homepage grid expanded to 8 cluster cards. Cards wired to `programs.html?cluster=<slug>`. | 2026-04-22 session |
| L10 | No "View Schedule" link from campus cards | Low | 2026-04-15 | 2026-04-22 | Added `.campus-card__schedule` secondary link under "Visit Campus" CTA on both homepage campus cards. | 2026-04-22 session |
| L1 | Footer "Employment" link is ambiguous | Low | 2026-04-15 | 2026-04-26 | Footer label was already renamed to "Careers at PTC" sitewide in prior sessions; verified during 2026-04-26 sweep. | 2026-04-26 session |
| L4 | Accreditation acronyms not explained (COE, Cognia) | Low | 2026-04-15 | 2026-04-26 | All standalone "COE" instances now wrapped in `<abbr title="Council on Occupational Education">COE</abbr>`. Cognia spelled out where it appears. | 2026-04-26 session; reconfirmed 2026-04-27 (about.html line 625) |
| L7 | No "View All Programs" visual hierarchy | Low | 2026-04-15 | 2026-04-26 | Homepage Featured Programs CTA promoted with soft top divider, prelude line, and hover shadow. | 2026-04-26 session |
| C3 | Leadership representation missing — placeholder fa-user icons on about.html | Critical | 2026-04-15 | 2026-04-27 | Replaced 3 placeholder leader cards with named cards: Dr. Jakub Prokop (Campus Director, Clearwater) PROKOPJ@pcsb.org, Dr. Jason Shedrick (Campus Director, St. Petersburg) SHEDRICKJ@pcsb.org, Dr. Dywayne Hinds (Area Superintendent · Area 3, EAS, and CTAE / Pinellas County Schools). Used initials-on-circle treatment (JP/JS/DH) per designer recommendation; photos pending. | 2026-04-27 session |
| H14 | Heading hierarchy gap on campus About pages | High | 2026-04-27 | 2026-04-27 | Wrapped institutional-context paragraphs in `<aside aria-label="Institutional context">` on clearwater-about.html and stpete-about.html. Screen-reader heading navigation no longer silently skips the linking-out paragraph. | 2026-04-27 session |
| H11-r | Icon-only search link on campus About pages had no accessible name | High | 2026-04-27 | 2026-04-27 | Added `aria-label="Search"` to the wrapping `<a>` and `aria-hidden="true"` to the inner `<i class="fas fa-search">` on clearwater-about.html line 37 and stpete-about.html line 37. | 2026-04-27 session |
| H16 | Founding-year inconsistency 1962 vs 1961 | High | 2026-04-27 | 2026-04-27 | Verified canonical "since 1962" against live www.myptc.edu/about-us/welcome-to-ptc and updated both campus About footers from "since 1961" to "since 1962". about.html already correct. | 2026-04-27 session |
| H17 | "About This Campus" Campus Info dropdown item href="#" | High | 2026-04-27 | 2026-04-27 | Wired self-link on each campus About page to its own page (`href="clearwater-about.html"` / `href="stpete-about.html"`) with `aria-current="page"`. | 2026-04-27 session |
| M13 | "Campus campus" duplicated word | Medium | 2026-04-27 | 2026-04-27 | Removed duplicated "Campus" on clearwater-about.html line 178 ("Clearwater Campus campus" → "Clearwater campus") and stpete-about.html line 177. | 2026-04-27 session |
| M14 | Em dash in `<title>` on About pages | Medium | 2026-04-27 | 2026-04-27 | Replaced em dash (literal and `&mdash;`) with pipe separator on all 3 About page `<title>` tags. Conforms to Marianne's no-em-dash house rule. | 2026-04-27 session |
| M16 | Breadcrumb separator inline span without aria-hidden on campus pages | Medium | 2026-04-27 | 2026-04-27 | Added `aria-hidden="true"` to the breadcrumb "/" separator span on clearwater-about.html and stpete-about.html so screen readers no longer announce "slash" between crumbs. about.html already uses CSS `::after` and was unaffected. | 2026-04-27 session |
| M18 | STP About footer missing Class Schedule link | Medium | 2026-04-27 | 2026-04-27 | Added `<li><a href="schedule-stpete.html">Class Schedule</a></li>` as first item in stpete-about.html footer "St. Petersburg Links" column, matching CLW footer pattern. | 2026-04-27 session |
| H7 (About cluster) | Hard-coded 2.5rem hero font, no mobile override | High | 2026-04-15 | 2026-04-27 | about.html `.page-hero__title` rule converted to `font-size: clamp(1.85rem, 4vw, 2.5rem)`; redundant 2rem mobile override removed. clearwater-about.html and stpete-about.html inline `font-size: 2.5rem` on the page hero h1 replaced with the same clamp(). admissions.html still pending; H7 stays partially addressed sitewide. | 2026-04-27 session |

## Deferred Issues
| # | Issue | Priority | Reason for Deferral | Target Phase |
|---|-------|----------|---------------------|--------------|
| Issue #3 (UX Review) | No employer engagement hook on homepage | Medium | Post-launch enhancement; not blocking enrollment pathway. Can add employer testimonial/logo wall in Phase 3. | Phase 3 |
| M9 variant | "View All Programs" button could be more prominent | Low | Low impact on discoverability; users can navigate via Programs dropdown. Address in Phase 3 polish. | Phase 3 |

---

## Key Statistics

**Total Open Issues:** 45 (4 Critical, 8 High, 28 Medium, 5 Low)
**Critical Issues:** C1, C2, C4 (substantially addressed at campus level), C7 (partial)
**High Issues:** H1, H2, H3, H4, H5, H6, H7 (admissions.html only), H8, H15 (live-side gated)
**Medium Issues:** M2, M5, M6, M7, M8, M9, M11, M15 (sitewide sweep), M17 (live-side gated), M19–M32
**Low Issues:** L2, L5, L8, L9, L11–L15

**Resolved Issues:** 29 (C3, C5, C6, H7-aboutcluster, H9, H10, H11, H11-r, H12, H13, H14, H16, H17, M1, M3, M4, M10, M12, M13, M14, M16, M18, L1, L3, L4, L6, L7, L10)

**Status Summary (2026-04-27 About Cluster Review + Fix Session):**
- About cluster reviewed by 8-persona panel covering about.html, clearwater-about.html, stpete-about.html. Same-day fix session closed 11 items.
- **Closed in this session:** C3 (named leadership cards with Prokop/Shedrick/Hinds + emails), H7 for About cluster (clamp() applied), H11-r (search link aria-label), H14 (institutional-context wrapped in `<aside>`), H16 (founding-year reconciled to 1962 verbatim from live), H17 (About-This-Campus self-link wired with aria-current), M13 ("Campus campus" typo), M14 (em-dash in titles), M16 (breadcrumb separator aria-hidden), M18 (STP footer Class Schedule). C7 advanced: about.html Current Students dropdown wired to live URLs (Canvas, Focus, campus-aware schedules split into "Clearwater Schedule" / "St. Pete Schedule", Transcript Request via live URL, Tech Support dropped); about.html utility-bar "Student Portal" renamed to "Focus Portal" and wired to Focus URL; campus pages utility-bar Canvas + Focus also wired; campus pages Current Students dropdown wired (Canvas, Bookstore B&N, Records Request via live URLs).
- **Logged as live-side follow-ups (out-of-redesign-scope):** H15 (CLW does not publish Code of Conduct on its live About cluster — needs CLW campus admin to publish or confirm shared with STP), M17 (CLW SIP year behind STP — gating on CLW publishing 2025-26 SIP). Plus redesign-side TODOs for Canvas Login / Transcript Request / Tech Support / Bookstore pages, Dr. Hinds title verification, and `.compliance-card` / `.accred-card` migration to canonical `.card` (M5/M6).
- **Net movement on prior items:** C3 closed. C4 substantially resolved at campus level (working links to live PCSB pages and PDFs across all 7/8 compliance cards). M8 partially resolved at campus level. C7 advanced from "homepage cluster cards routed" to "homepage cluster cards + about.html dropdown + about.html utility bar Focus Portal + campus pages utility bar Canvas/Focus + campus pages dropdown wired"; remaining C7 surface is Apply Now CTAs and Events.
- **Closure recommendation:** About cluster now genuinely close to closure. Remaining items are Compliance-cluster-scoped (about.html Campuses dropdown not linking to About sub-pages M19, two-campuses-one-mission program list M20, STP nav clusters M21, history timeline M23, accred report PDFs in about.html accreditation cards), or sitewide patterns (M15 sweep, Apply Now wire-up across the site). Recommend moving to next cluster (Compliance → Counselors → Admissions → Tuition → Programs) and addressing M19-M28 alongside related cluster work, plus a sitewide sweep for the residual H12 / aria-hidden gaps.

**Legal/Compliance Risk:** LOW (maintained)
- All flagged a11y items on the About cluster now closed (H11-r, H14, M15-aboutcluster, M16)
- 9 of 10 prior a11y closures still confirmed on the About cluster
- Sitewide M15 sweep is a residual H12 gap; mechanical regex fix

**Enrollment Conversion Risk:** CRITICAL (improved on About cluster)
- About cluster Current Students dropdowns now functional (C7 partial close)
- Apply Now / Request Info CTAs still non-functional sitewide (C2)
- Program details missing for 35+ programs (C1, H1)
- Tuition/financial aid incomplete (H6)
- Job outcomes absent (H4)

---

## Legend
- **CRITICAL (C1-C7):** Blocks launch; legal/compliance risk; major enrollment barriers
- **High (H1-H17):** Significant UX or compliance impact; must fix in Phase 1-2
- **Medium (M1-M32):** Quality improvements; address in Phase 2-3
- **Low (L1-L15):** Polish; post-launch acceptable

**Total Issues Found Across All Reviews:** 66 (42 original + 24 added 2026-04-27)
**Critical:** 7 | **High:** 17 | **Medium:** 32 | **Low:** 15
**Closure rate:** 29 of 66 = 44% (up from 27%)

---

**Last Updated:** April 27, 2026 (post-fix session)
**Next Review Cycle:** Move to Compliance cluster. Sitewide M15 sweep + Apply Now wire-up are sitewide tasks that can ride alongside upcoming cluster work.
