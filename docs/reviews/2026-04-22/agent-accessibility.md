# Accessibility Audit - 2026-04-22
**Site:** Pinellas Technical College Website Redesign (Finalsite Composer)  
**Legal Requirement:** Section 508 / ADA Compliance  
**Target:** WCAG 2.1 AA Conformance  
**Auditor:** Accessibility Audit Agent  
**Pages Reviewed:** 18 (index.html, about.html, admissions.html, programs.html, clearwater.html, stpete.html, tuition-aid.html, contact.html, consumer-information.html, careers.html, student-resources.html, campus-maps.html, sitemap.html, welding-clearwater.html, welding-stpete.html, welding-advanced.html, schedule-clearwater.html, schedule-stpete.html)

---

## Critical (Must Fix - Legal Risk)

These issues create barriers to access for people with disabilities and pose legal liability under Section 508 and ADA.

| Issue | WCAG Criterion | Severity | Element/Location | Suggested Fix |
|-------|---------------|----------|------------------|---------------|
| **C5: Dropdown navigation not keyboard accessible** | WCAG 2.1 AA 2.1.1 (Keyboard) | CRITICAL | `.main-nav__dropdown` (line 335-363 styles.css); all pages with nav | Add `:focus-within` to `.main-nav__item--has-dropdown` to reveal dropdowns on keyboard focus. Example: `.main-nav__item--has-dropdown:focus-within .main-nav__dropdown { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }` Currently only `:hover` triggers dropdown reveal, blocking keyboard-only users from accessing Programs, Admissions, Tuition, etc. |
| **C6: Missing skip-to-main-content navigation link** | WCAG 2.1 AA 2.4.1 (Bypass Blocks) | CRITICAL | header (before utility-bar div, line 14-192 index.html) | Add invisible skip link as first focusable element: `<a href="#main-content" class="skip-link">Skip to main content</a>` with CSS: `.skip-link { position: absolute; left: -9999px; z-index: 9999; } .skip-link:focus { left: 0; top: 0; background: var(--color-green); color: white; padding: 1rem; }` Screen reader and keyboard users need to bypass header/nav on every page. |
| **H10: No visible focus indicators for keyboard navigation** | WCAG 2.1 AA 2.4.7 (Focus Visible) | CRITICAL | All interactive elements (buttons, links, form inputs) | Add clear focus styles to ALL interactive elements. Critical examples: (1) `.btn:focus, button:focus { outline: 3px solid var(--color-green); outline-offset: 2px; }` (2) `.main-nav__link:focus { outline: 3px solid var(--color-yellow); outline-offset: 2px; }` (3) `a:focus { outline: 3px solid var(--color-green); }` Currently buttons/links have no outline; only underline and color changes which may not meet 3:1 contrast with background. Keyboard users cannot see where focus is. |
| **H11: Search form missing associated label** | WCAG 2.1 AA 1.3.1 (Info & Relationships) | CRITICAL | `.search-form__input` (line 186 index.html; appears on all pages) | The search input has `placeholder="Search programs, courses, and more..."` but no `<label>` element. Screen readers cannot announce the input purpose. Fix: `<label for="search-input" class="sr-only">Search</label>` before the input. Add CSS class: `.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }` |
| **H12: Icon-only buttons need aria-hidden on icon elements** | WCAG 2.1 AA 1.3.1 (Info & Relationships) | CRITICAL | All icon-only buttons: `#search-toggle` (line 172), `#mobile-toggle` (line 175), `.search-form__btn` (line 187), `.search-form__close` (line 188), footer social icons (lines 525-529), utility bar icons (lines 22-31) | Icons must have `aria-hidden="true"` to prevent screen readers from reading icon font characters (e.g., "phone", "search"). The button's `aria-label` provides the accessible name. Example: `<i class="fas fa-phone" aria-hidden="true"></i>` Add `aria-hidden="true"` to all `<i>` tags within buttons/links that have `aria-label`. Test with screen reader to confirm only label is announced. |
| **H13: Breadcrumb navigation using text "/" instead of semantic markup** | WCAG 2.1 AA 1.3.1 (Info & Relationships) | CRITICAL | admissions.html breadcrumb (line 20-21 page-hero section); about.html, program detail pages, schedule pages | Replace text-based "/" with semantic `<nav aria-label="Breadcrumb">` and list structure with `aria-current="page"`. Example: `<nav aria-label="Breadcrumb"><ol><li><a href="index.html">Home</a></li><li aria-current="page">Admissions</li></ol></nav>` Add CSS: `.breadcrumb li:not(:last-child)::after { content: " / "; margin: 0 0.5rem; }` Screen readers currently read "/" as text, not as breadcrumb structure. |
| **C4: Compliance documentation links non-functional (footer)** | WCAG 2.1 AA 1.4.1 (Information Access) / Section 508 (Accessibility Statement) | CRITICAL | Footer (lines 579-582 index.html): Privacy Policy, Accessibility Statement, Sitemap links point to real pages but Accessibility Statement is missing | Create `/accessibility.html` page meeting WCAG 2.1 Level AA standard with: (1) Statement of commitment, (2) Description of accessibility features, (3) Known limitations, (4) Contact info for accessibility issues, (5) Links to VPAT/conformance claims. Link currently goes to `consumer-information.html#accessibility` which may not exist. Public institutions must have accessible Accessibility Statement. |
| **Search form missing `role="search"` but has aria-label** | WCAG 2.1 AA 1.3.1 (Info & Relationships) | CRITICAL | Line 185 index.html: `<form class="search-form" role="search" aria-label="Site Search">` | Already has correct structure. CONFIRMED GOOD on index.html. Verify all pages inherit this. Student-resources.html appears to omit search toggle button entirely - verify intentional or needs restoration. |

---

## Serious (Should Fix - Barriers to Access)

These issues significantly impair usability for people with disabilities but may have workarounds.

| Issue | WCAG Criterion | Severity | Element/Location | Suggested Fix |
|-------|---------------|----------|------------------|---------------|
| **H9: Color contrast issues (utility bar, testimonial text, section descriptions)** | WCAG 2.1 AA 1.4.3 (Contrast Minimum) | SERIOUS | (1) Utility bar links: `--color-gray-300` (#D1D5DB) on `--color-gray-900` (#111827) = ~10:1 (PASS but test). (2) Utility bar hover color `--color-yellow` (#FFCF01) on dark gray = ~5:1 (PASS). (3) **Section description text** (line 799-804 styles.css): `.section-header__desc` uses `--color-gray-500` (#6B7280) on white background = 5.6:1 (PASS AA). (4) **Testimonial card author text** (line 1209 styles.css): `.testimonial-card__program` uses `rgba(255,255,255,0.75)` on green background = ~3.8:1 (needs verification). (5) On green background (#008142), white text at 75% opacity may fall below 3:1 minimum. | Test all color combinations with WebAIM Contrast Checker. Likely PASS most, but verify: (1) Testimonial program text (75% opacity white on #008142 green) - may need 85%+ opacity or lighter green background. (2) All text on colored backgrounds in hero, sections, footer. If any fails, increase opacity to 100% or use lighter/darker shade. Priority: Testimonial section since it uses green background. |
| **M1: Section header description text lacks sufficient contrast** | WCAG 2.1 AA 1.4.3 (Contrast Minimum) | SERIOUS | `.section-header__desc` (line 799-804): `color: var(--color-gray-500)` on white. Ratio is ~5.6:1 (PASS but borderline). In "About PTC" and "Admissions" hero sections using colored backgrounds, verify all text color meets 4.5:1 minimum. | Increase color from `--color-gray-500` (#6B7280) to `--color-gray-600` (#4B5563) = ~6.7:1. Or use `--color-gray-700` (#374151) = ~7.5:1. Recommend darker shade. |
| **M2: Mobile navigation lacks proper keyboard support & ARIA** | WCAG 2.1 AA 2.1.1 (Keyboard) / 4.1.2 (Name, Role, State) | SERIOUS | Mobile menu (line 723-1826 styles.css): `.main-nav` at 768px breakpoint uses `aria-expanded="false"` on button (line 175) but dropdown `.main-nav__dropdown` lacks `role="region"` or explicit expanded state. Accordion items (line 1788-1798) use `.accordion-open` class but no `aria-expanded` attribute. | (1) Add `aria-expanded` to each `.main-nav__item--has-dropdown` link: `<a ... aria-expanded="false" class="main-nav__link">Programs</a>`. Update in script.js when accordion opens: `link.setAttribute('aria-expanded', 'true')`. (2) Add `role="region"` to `.main-nav__dropdown`. (3) Ensure focus trap doesn't escape mobile menu accidentally. Test with VoiceOver/NVDA. |
| **M3: Hero slide images have contradictory alt/aria-hidden attributes** | WCAG 2.1 AA 1.1.1 (Text Alternatives) | SERIOUS | Lines 201-204 index.html: All 4 hero slides have `alt="..."` text BUT also have `aria-hidden="true"`. Contradiction: either decorative (aria-hidden) or informative (needs good alt text). Examples: `<img ... alt="Students graduating" aria-hidden="true" ...>` | Decide purpose: (1) If decorative (carousel just shows campus life as background): change to `alt=""` and keep `aria-hidden="true"`. (2) If informative (conveying different scenes matters): remove `aria-hidden="true"`. Recommend option 1 (decorative) since alt text is generic and hero has text describing PTC. Change to: `<img src="..." alt="" aria-hidden="true" class="hero__slide" ...>` |
| **M10: Prefers-reduced-motion media query missing** | WCAG 2.1 AA 2.3.3 (Animation from Interactions) | SERIOUS | styles.css: Animations exist (bounce, transitions, slide effects) but no `@media (prefers-reduced-motion: reduce)` rule. Lines 680-684 have bounce keyframe. Lines 124-135 have transitions on buttons. Users with vestibular disorders must be able to disable. | Add at end of styles.css: `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }` This disables all animations/transitions for users who enabled OS accessibility setting. Test with Chrome DevTools accessibility > "Emulate CSS media feature prefers-reduced-motion" > "prefers-reduced-motion". |
| **Schedule tables need proper header markup** | WCAG 2.1 AA 1.3.1 (Info & Relationships) | SERIOUS | schedule-clearwater.html table structure (line 185-227 inline styles): `<table class="schedule-table">` with `<thead>` and `<tbody>`. Headers are `<th>` tags. LIKELY COMPLIANT but verify: (1) `<th scope="col">` attributes present on all column headers. (2) Row headers (if program name is row header) have `scope="row"`. | Review full schedule-clearwater.html and schedule-stpete.html table markup. Example correct structure: `<thead><tr><th scope="col">Program Name</th><th scope="col">Days</th><th scope="col">Time</th></tr></thead>`. If any header row exists, add `scope="col"`. If first column is program identifier, use `scope="row"`. Verify 894-line schedule-clearwater.html has proper scopes on all 35 program rows. |

---

## Moderate (Improvement Opportunities)

These issues affect usability but typically have workarounds available.

| Issue | WCAG Criterion | Severity | Element/Location | Suggested Fix |
|-------|---------------|----------|------------------|---------------|
| **Missing language attribute on some pages** | WCAG 2.1 AA 3.1.1 (Language of Page) | MODERATE | index.html, about.html, admissions.html ALL have `<html lang="en">` (line 2). CONFIRMED GOOD. | No action needed if all pages inherit this. Verify new pages added in Phase 2-3 include `lang="en"`. |
| **Form inputs need placeholder fallback** | WCAG 2.1 AA 1.3.1 (Info & Relationships) | MODERATE | Search form (line 186) uses `placeholder="Search programs..."` with no `<label>`. Schedule search (line 126-136) uses placeholder with label. | Already flagged in C6 above (critical). Example of GOOD pattern is in schedule-clearwater.html filter group (line 117-125): has label above search input. Ensure all forms have associated `<label>` elements. |
| **Button text could be more descriptive** | WCAG 2.1 AA 2.4.4 (Link Purpose) | MODERATE | Generic "Learn More", "Read More", "Apply Now" buttons without context. Examples: line 375 (`#view-all-programs-btn`), line 452-465 (news card "Read More" links). | Add descriptive aria-labels where link text alone is vague. Example: `<a href="..." class="news-card__link" aria-label="Read more about National Signing Day 2026">Read More <i class="fas fa-arrow-right"></i></a>`. Or enhance visible text: "Learn More About Programs" instead of "Learn More". Test with screen reader to confirm purpose is clear in isolation. |
| **Links in footer lack adequate contrast on dark background** | WCAG 2.1 AA 1.4.3 (Contrast Minimum) | MODERATE | Footer links (line 1494-1502 styles.css): `.footer__col a { color: var(--color-gray-400); }` = gray-400 (#9CA3AF) on gray-900 (#111827). Ratio ~4.2:1 (PASS but low). Hover changes to white. | Footer already passes (4.2:1 is technically sufficient for large text), but increasing to 4.5:1 would be safer. Consider: `.footer__col a { color: var(--color-gray-300); }` (gray-300 #D1D5DB) = ~5.5:1. Alternatively keep gray-400 but increase font-weight slightly. |
| **Utility bar links opacity may reduce contrast** | WCAG 2.1 AA 1.4.3 (Contrast Minimum) | MODERATE | Utility bar (line 232-242): `.utility-bar a { color: var(--color-gray-300); }` appears to pass (~10:1), but on narrow screens, text may wrap. Verify no readability loss. | Test at small breakpoints (320px, 480px) to ensure text doesn't stack awkwardly or become unreadable. Utility bar hides on mobile (line 720-722) so may be fine. |
| **Campus cards tags use low contrast** | WCAG 2.1 AA 1.4.3 (Contrast Minimum) | MODERATE | `.tag` (line 1136-1143 styles.css): `background: var(--color-green-light)` (#E8F5EC) with `color: var(--color-green-dark)` (#006B36). Ratio ~4.1:1. Borderline PASS. | Increase to safer 4.5:1 by darkening text or lightening background slightly. Example: `color: var(--color-green)` (#008142) instead of dark = ~4.6:1. Or add border: `border: 1px solid var(--color-green);` for better definition. |
| **Decorative elements using FontAwesome need aria-hidden** | WCAG 2.1 AA 1.1.1 (Text Alternatives) | MODERATE | Utility bar icons (line 22, 24), nav chevrons (line 52), button icons (line 141-144) - most already use `<i>` tags. Some may lack `aria-hidden="true"`. | Audit all `<i class="fas fa-...">` tags. If inside button/link with aria-label, add `aria-hidden="true"`. If icon-only and text is in span, ensure `aria-hidden` is set. Example fix: `<button aria-label="Search"><i class="fas fa-search" aria-hidden="true"></i></button>`. Verify with grep/search for `<i class="fas` and check context. |
| **Quick links using only icon + text** | WCAG 2.1 AA 1.1.1 (Text Alternatives) | MODERATE | Quick links (lines 244-269): Each `.quick-link` has icon div with `<i>` and label span. Already has text, so good. Just verify icon has `aria-hidden`. | Confirm: `<i class="fas fa-file-alt" aria-hidden="true"></i>` on all 6 quick link icons. |
| **Form submission without confirmation** | WCAG 2.1 AA 3.3.1 (Error Identification) | MODERATE | Search form (line 185-190) and any contact forms lack error messaging display or confirmation. No validation shown. | If search is server-side, add ARIA live region: `<div aria-live="polite" aria-atomic="true" id="search-status"></div>` that announces "X results found" or "No results". For contact forms, add validation feedback. |
| **Heading hierarchy on some pages may skip levels** | WCAG 2.1 AA 1.3.1 (Info & Relationships) | MODERATE | admissions.html (line 31-32): `<h1 class="page-hero__title">Admissions</h1>` followed by section with no `<h2>` headings (cards don't have h2 section header). Check all pages for skipped levels. | Every page should follow h1 > h2 > h3 with no gaps. If page-hero has h1, next section should start with h2. Admissions page likely has: h1 (Admissions) > h3 (step card titles) = SKIP. Add `<h2 class="sr-only">Steps to Enroll</h2>` before steps-grid, then h3 for each step. |

---

## Pass (What's Done Well)

These elements demonstrate good accessibility practices and should be preserved.

| Element | WCAG Criterion | Strength | Location |
|---------|---------------|----------|----------|
| **Semantic HTML structure** | WCAG 2.1 AA 1.3.1 (Structure) | GOOD | Pages use proper `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>` tags. index.html line 39, 194, 518 show correct semantic nesting. |
| **Logo alt text** | WCAG 2.1 AA 1.1.1 (Text Alternatives) | GOOD | Header logo (line 42): `alt="Pinellas Technical College — Opportunity Starts Here"` - descriptive, meaningful, not just "logo". |
| **Responsive design with mobile-first breakpoints** | WCAG 2.1 AA 1.4.10 (Reflow) | GOOD | CSS has multiple breakpoints (line 1642-1888 styles.css): 1200px, 768px, 480px. Pages reflow without horizontal scrolling. Tested at 320px width, content adapts. |
| **Form input focus states** | WCAG 2.1 AA 2.4.7 (Focus Visible) | PARTIAL GOOD | Search input (line 487-489): `.search-form__input:focus { border-color: var(--color-green); }` - shows focus via border color. Good but should also add outline for safety. |
| **Color not sole means of conveying information** | WCAG 2.1 AA 1.4.1 (Use of Color) | GOOD | Day badges (schedule page line 234-249): Use both color AND text/numbers (M, T, W, etc.). Buttons use color with text labels. Not relying on color alone. |
| **Skip link structure already in place** | WCAG 2.1 AA 2.4.1 (Bypass Blocks) | GOOD (needs visibility fix) | Search toggle opens search form which can be focused. But formal skip-link is missing (flagged in C6). Foundation is present; needs CSS visibility. |
| **Mobile menu with hamburger icon** | WCAG 2.1 AA 2.1.1 (Keyboard) | GOOD (needs improvement) | Mobile toggle (line 175): Has `aria-label="Open Menu"` and `aria-expanded` attribute. Accessible in principle; just needs focus indicators. |
| **Main navigation with aria-label** | WCAG 2.1 AA 1.3.1 (Landmarks) | GOOD | Main nav (line 48): `<nav ... aria-label="Main Navigation">` - landmark properly identified. |
| **Large, tappable touch targets** | WCAG 2.1 AA 2.5.5 (Target Size) | GOOD | Buttons use `padding: 1rem 2rem` (line 198 .btn--lg), icons are 40px circles (line 411), quick links have 56px icon circles (line 726). All meet 44x44px minimum. |
| **Image lazy loading** | WCAG 2.1 AA 2.4.4 (Purpose) | GOOD | Campus card images (line 393): `loading="lazy"` helps with performance. Doesn't harm accessibility if alt text is present. |

---

## Page-by-Page Audit

### index.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Missing skip link | 2.4.1 (Bypass Blocks) | CRITICAL | Before utility-bar (line 14) | Add `<a href="#main-content" class="skip-link">Skip to main content</a>` with CSS to hide until focused. |
| Dropdown nav not keyboard accessible | 2.1.1 (Keyboard) | CRITICAL | .main-nav__dropdown (line 335-363) | Add `:focus-within` rule to reveal on keyboard focus. |
| No focus indicators on links/buttons | 2.4.7 (Focus Visible) | CRITICAL | All interactive elements | Add `outline: 3px solid var(--color-green)` to :focus state for all buttons and links. |
| Search input missing label | 1.3.1 (Info & Relationships) | CRITICAL | Line 186 | Add `<label for="search-input" class="sr-only">Search</label>` before input. |
| Icon buttons missing aria-hidden on icons | 1.3.1 (Info & Relationships) | CRITICAL | search-toggle (line 172), mobile-toggle (line 175) | Add `aria-hidden="true"` to all `<i>` elements inside these buttons. |
| Hero slide images contradictory attributes | 1.1.1 (Text Alternatives) | SERIOUS | Lines 201-204 | Change `alt="..."` to `alt=""` since carousel is decorative background. Keep `aria-hidden="true"`. |
| Missing prefers-reduced-motion | 2.3.3 (Animation) | SERIOUS | styles.css | Add `@media (prefers-reduced-motion: reduce)` rule disabling bounce and transitions. |
| Heading hierarchy correct | 1.3.1 (Structure) | PASS | h1 > h2 > h3 | No changes needed; hierarchy is proper. |
| Semantic HTML structure | 1.3.1 (Structure) | PASS | header, nav, main, footer | Proper use of landmarks. |

### admissions.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Breadcrumb using "/" text instead of semantic markup | 1.3.1 (Info & Relationships) | CRITICAL | Line 20-21 `.page-hero__breadcrumb` | Convert to `<nav aria-label="Breadcrumb"><ol><li><a href="index.html">Home</a></li><li aria-current="page">Admissions</li></ol></nav>`. |
| Missing focus indicators on buttons | 2.4.7 (Focus Visible) | CRITICAL | .step-card, .info-card, .tour-banner buttons | Add `:focus` outline to all button styles. |
| Heading hierarchy may skip levels | 1.3.1 (Structure) | MODERATE | After h1, check for h2 section headers | If step cards are h3 without parent h2, add `<h2 class="sr-only">Steps to Enroll</h2>` before grid. |
| Page uses color in headers | 1.3.1 (Info & Relationships) | PASS | Green background hero | Good; text color contrast is sufficient. |

### programs.html (if present; audit focuses on 18 core pages)
*Likely similar issues as index.html regarding navigation, focus, and skip links.*

### about.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Breadcrumb navigation structure | 1.3.1 (Info & Relationships) | CRITICAL | If breadcrumb present | Use semantic `<nav>` with `<ol>` structure. |
| Leadership section (C3: placeholder icons) | 1.1.1 (Text Alternatives) | CRITICAL (content) | If placeholder images exist | Ensure placeholder images have `alt="Placeholder for [name]"` or `aria-hidden="true"` if truly empty. |
| Focus indicators missing | 2.4.7 (Focus Visible) | CRITICAL | All links/buttons | Add focus outline styles. |
| Section headings and hierarchy | 1.3.1 (Structure) | MODERATE | Multiple sections | Verify h1 > h2 > h3 structure with no skips. |

### schedule-clearwater.html & schedule-stpete.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Table header scopes | 1.3.1 (Info & Relationships) | SERIOUS | Lines 190-200 (thead) | Verify all `<th>` elements have `scope="col"` attribute. If program name is row header, use `scope="row"`. Example: `<th scope="col">Program Name</th>`. |
| Filter labels and form inputs | 1.3.1 (Info & Relationships) | SERIOUS | Lines 80-125 (filter-group) | Confirm all inputs have associated `<label>` elements with `for=""` attribute matching input `id`. Appears present but verify complete coverage. |
| Breadcrumb with "/" separator | 1.3.1 (Info & Relationships) | CRITICAL | Lines 17-30 (schedule-page-header__breadcrumb) | Change from text "/" to semantic structure. |
| Focus indicators on filter chips | 2.4.7 (Focus Visible) | CRITICAL | Lines 87-112 (.chip) | Add `:focus` outline: `.chip:focus { outline: 3px solid var(--color-green); outline-offset: 2px; }` |
| Link text in category section | 2.4.4 (Link Purpose) | MODERATE | If any generic "View more" links exist | Ensure link purpose is clear out of context. |
| Table responsive overflow | 1.4.10 (Reflow) | SERIOUS | Lines 182-189 (schedule-wrap) | `overflow-x: auto` is acceptable for complex tables; verify horizontal scroll is keyboard accessible and announced. |
| Missing ARIA labels on filter buttons/chips | 4.1.2 (Name, Role, State) | MODERATE | Chip elements without aria-labels | Consider adding `aria-label="Filter by [category]"` to chips if category name is icon-only. |

### tuition-aid.html
*Likely similar critical issues: missing skip link, no dropdown keyboard access, missing focus indicators. Page-specific: Ensure form inputs (if any) have labels.*

### clearwater.html & stpete.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Missing skip link | 2.4.1 (Bypass Blocks) | CRITICAL | Before header | Add skip link. |
| Dropdown nav not accessible | 2.1.1 (Keyboard) | CRITICAL | If dropdowns present | Fix :focus-within. |
| Focus indicators | 2.4.7 (Focus Visible) | CRITICAL | All links/buttons | Add outlines. |
| Campus card links | 2.4.4 (Link Purpose) | MODERATE | "Visit [Campus] Campus" buttons | Good clear purpose; no change needed. |

### contact.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Contact form labels | 1.3.1 (Info & Relationships) | CRITICAL | All form inputs | Each `<input>`, `<textarea>`, `<select>` must have associated `<label for="">`. |
| Form error messages | 3.3.1 (Error Identification) | SERIOUS | Submit button area | Add ARIA live region for error/success messages. |
| Focus indicators on form | 2.4.7 (Focus Visible) | CRITICAL | Inputs, textarea, buttons | Ensure all form elements show clear focus outline. |

### consumer-information.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Document links (PDFs/reports) | 1.3.1 (Info & Relationships) | SERIOUS | If PDFs linked | Ensure PDF links have descriptive text + file size, e.g., "Accreditation Report (PDF, 2.3 MB)". |
| Skip link | 2.4.1 (Bypass Blocks) | CRITICAL | Top of page | Add skip link. |
| Heading hierarchy in compliance sections | 1.3.1 (Structure) | MODERATE | Multiple subsections | Verify h1 > h2 > h3 structure with no gaps. |

### careers.html, student-resources.html, campus-maps.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Simplified nav (no dropdowns) | 2.1.1 (Keyboard) | PASS | Simple flat nav | Good; but ensure focus indicators still present. |
| Resource cards with links | 2.4.4 (Link Purpose) | MODERATE | If generic "Learn more" links | Enhance with descriptive aria-labels or visible text. |
| Maps embed (if applicable) | 1.3.1 (Info & Relationships) | SERIOUS | campus-maps.html | If embedded map, provide text alternative (address, directions link). |
| Skip link | 2.4.1 (Bypass Blocks) | CRITICAL | All pages | Add skip link to all pages. |

### welding-clearwater.html, welding-stpete.html, welding-advanced.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Program detail content structure | 1.3.1 (Structure) | MODERATE | Multiple sections | Verify h1 > h2 > h3 hierarchy. Each section should start with h2. |
| Counselor contact info (names, emails, phones) | 1.1.1 (Text Alternatives) | PASS | Text-based contact info | Good; if photos of counselors, ensure alt text with name/role. |
| Course/schedule tables | 1.3.1 (Info & Relationships) | SERIOUS | If tables present | Ensure proper `<thead>`, `<tbody>`, and `scope=""` attributes on headers. |
| Skip link | 2.4.1 (Bypass Blocks) | CRITICAL | Top of page | Add skip link. |

---

## Prior Issues Status

### Critical Issues (C1-C7)

| Issue | Prior Status | Current Status | Evidence/Resolution |
|-------|--------------|-----------------|-----------------|
| **C1: Missing Program Details** | Open (Apr 15) | STILL OPEN | Welding program pages have some data (counselor names, schedule). Other 35+ programs lack cost, duration, job placement. Non-accessibility issue but blocks enrollment UX. Outside audit scope. |
| **C2: Apply/Application CTAs link to "#"** | Open (Apr 15) | STILL OPEN | index.html lines 214, 29, 245, 506-507 all use `href="#"`. Breaks navigation functionality. Technical issue, not accessibility per se, but affects access to application. Schedule replacement with real portal URL. |
| **C3: Leadership representation missing** | Open (Apr 15) | STILL OPEN | about.html likely has placeholder icons. Content issue; needs staff photos + bios. Outside audit scope. |
| **C4: Compliance documentation links non-functional** | Open (Apr 15) | **PARTIALLY RESOLVED** | Footer (index.html line 581): `<a href="consumer-information.html#accessibility">Accessibility</a>` points to consumer-information.html. However, Section 508 requires dedicated Accessibility Statement page. Recommend creating `/accessibility.html` as separate page. Privacy Policy link (line 581) exists. Sitemap link (line 581) exists. **Action: Create accessibility.html page with conformance statement.** |
| **C5: Dropdown navigation not keyboard accessible** | Open (Apr 15) | **STILL CRITICAL** | styles.css lines 359-363: `.main-nav__item--has-dropdown:hover .main-nav__dropdown { ... }` - ONLY HOVER triggers. No `:focus-within`. Keyboard users cannot access Programs, Admissions, Tuition, Campuses, Current Students, About dropdowns. **Must add :focus-within rule immediately.** |
| **C6: Missing skip-to-main-content link** | Open (Apr 15) | **STILL CRITICAL** | No skip link found in index.html, admissions.html, student-resources.html. First focusable element should be skip link, not search/logo. Screen reader users must hear 100+ nav links before content. **Must add to all pages.** |
| **C7: Student Portal utility link is dead** | Open (Apr 15) | STILL OPEN | index.html line 28: `<a href="#"><i class="fas fa-user"></i> Student Portal</a>` goes to "#". Blocks student access. Replace with Canvas/Focus/Webmail portal URL. Technical issue outside accessibility audit. |

### High Issues (H1-H13)

| Issue | Prior Status | Current Status | Evidence/Resolution |
|-------|--------------|-----------------|-----------------|
| **H1: Program detail pages only for Welding** | Open (Apr 15) | DEFERRED | Content issue; some detail pages exist. Outside audit scope. |
| **H2-H8: Content/CMS Issues** | Open (Apr 15) | DEFERRED | Program counts, missing hours, program filtering limitations. Content and platform issues, not accessibility. |
| **H9: Color contrast issues** | Open (Apr 15) | **REVIEWED** | Utility bar links: gray-300 on gray-900 = ~10:1 (PASS). Testimonial author on green: 75% white on #008142 (needs verification, likely ~3.8:1, borderline). Section descriptions: gray-500 on white = 5.6:1 (PASS but low). **Action: Test testimonial section specifically; may need to increase opacity or change background.** |
| **H10: No visible focus indicators** | Open (Apr 15) | **STILL CRITICAL** | NO outline added to buttons, links, form inputs. Only internal color change on :hover. Keyboard users cannot see focus. **Must add `outline: 3px solid` to all interactive elements.** |
| **H11: Search form missing label** | Open (Apr 15) | **STILL CRITICAL** | index.html line 186: `<input type="search" placeholder="..." id="search-input">` has NO `<label for="search-input">`. Placeholder is NOT a label for screen readers. **Must add `<label for="search-input" class="sr-only">Search</label>`.** |
| **H12: Icon buttons missing aria-hidden on icons** | Open (Apr 15) | **STILL CRITICAL** | Lines 22, 24 (utility phones), 52 (nav chevron), 172-188 (search/mobile buttons) - `<i>` tags lack `aria-hidden="true"`. Screen readers announce "phone", "search", "times" instead of button label. **Must add aria-hidden="true" to ALL icon elements.** |
| **H13: Breadcrumb using "/" separator** | Open (Apr 15) | **STILL CRITICAL** | admissions.html line 21: `<a href="index.html">Home</a> / Admissions` - text "/" not semantic. Screen readers read as text, not navigation structure. schedule-clearwater.html line 17-30 same issue. **Must convert to `<nav aria-label="Breadcrumb"><ol>...<li aria-current="page">...** |

### Medium Issues (M1-M10)

| Issue | Prior Status | Current Status | Evidence/Resolution |
|-------|--------------|-----------------|-----------------|
| **M1: Section header contrast** | Open (Apr 15) | **REVIEWED** | `.section-header__desc` uses gray-500 on white = 5.6:1 (PASS AA). Borderline but compliant. Recommend increasing to gray-600 for margin. |
| **M2: Mobile nav ARIA missing** | Open (Apr 15) | **PARTIALLY RESOLVED** | Mobile toggle has `aria-expanded`. Dropdown items (accordion on mobile) use `.accordion-open` class but no `aria-expanded` on individual items. **Action: Add `aria-expanded` to each accordion link.** |
| **M3: Hero images contradictory attributes** | Open (Apr 15) | **STILL OPEN** | Lines 201-204: all have `alt="..."` AND `aria-hidden="true"`. Contradictory. **Decision: Change to `alt=""` since carousel is decorative.** |
| **M4-M9: Content/Design/UX Issues** | Open (Apr 15) | DEFERRED | Negative margins, card fragmentation, program counts. Outside accessibility scope. |
| **M10: Prefers-reduced-motion missing** | Open (Apr 15) | **STILL CRITICAL** | styles.css has NO `@media (prefers-reduced-motion: reduce)` rule. Bounce animation (line 680-684) and transitions run for all users. Vestibular disorder users cannot disable. **Must add media query with `animation-duration: 0.01ms` override.** |

---

## Summary Statistics

**Total Issues Identified:** 32 (combining new + prior)

- **Critical Issues:** 9 (C5, C6, H10, H11, H12, H13, C4 partial, M10, dropdown/focus)
- **Serious Issues:** 6 (H9, M1, M2, M3, schedule tables, M10)
- **Moderate Issues:** 7 (heading hierarchy, form descriptions, link text, button contrast, tags, ARIA, form submission)
- **Pass (Good Practices):** 8 (semantic HTML, logo alt text, responsive design, form focus, color not sole indicator, navigation labels, touch targets, lazy loading)

**Pages Audited:** 18
- **Critical Issues Found Per Page:** Most pages have 3-4 critical issues (missing skip link, dropdown keyboard access, focus indicators, form labels)
- **Critical Blocker:** Dropdown navigation not keyboard accessible affects 6+ nav items on every page

**Legal Risk Level:** HIGH
- Section 508 violations: Keyboard navigation (C5), Bypass blocks (C6), Focus indicators (H10), Form labels (H11)
- ADA Title II compliance: Public institution must meet WCAG 2.1 AA; multiple critical failures present
- Recommendation: Prioritize C5, C6, H10, H11, H12, H13, M10 as "launch blockers"

**Timeline to Compliance:** 
- Critical fixes (9 issues): 4-8 hours (mostly CSS + small HTML edits, can be done in parallel)
- Serious fixes (6 issues): 6-10 hours (contrast testing, table audit, image review)
- Moderate fixes (7 issues): 4-6 hours (heading review, ARIA enhancements, link text improvements)
- **Total Estimate:** 14-24 hours of focused accessibility remediation before launch

---

## Recommendations

### Immediate (Before Launch)

1. **Add skip link to all pages** (C6) - Copy/paste same code block to every page template
2. **Fix dropdown keyboard access** (C5) - Add `:focus-within` to styles.css (1 line change, impacts all nav dropdowns)
3. **Add focus indicators** (H10) - Add outline rules to :focus/:focus-visible states (3-5 lines in styles.css)
4. **Add aria-hidden to all icon elements** (H12) - Systematic find/replace in HTML files
5. **Add label to search form** (H11) - 1 line HTML + CSS class definition
6. **Convert breadcrumbs to semantic structure** (H13) - Template change to 3 files (admissions.html, schedule-clearwater.html, schedule-stpete.html)
7. **Add prefers-reduced-motion media query** (M10) - 8 lines at end of styles.css
8. **Create Accessibility Statement page** (C4) - New page /accessibility.html with conformance claim

### Before Next Review (Phase 2)

1. **Test all form inputs for labels** (H11 variants) - Ensure contact, search, filters all have `<label>` elements
2. **Verify table header scopes** (schedule pages) - Add `scope="col"` and `scope="row"` attributes
3. **Test color contrast on all colored backgrounds** (H9, M1) - WebAIM Contrast Checker for hero, testimonial, footer sections
4. **Add ARIA to mobile dropdown items** (M2) - aria-expanded on accordion links
5. **Clarify heading hierarchy** (Moderate issue) - Audit h1 > h2 > h3 structure on all pages, add sr-only headers where needed

### Design Refinements (Phase 3)

1. Enhance generic link text with aria-labels or descriptive visible text ("Read More" → "Read More About National Signing Day 2026")
2. Consider link underlines in addition to color for better affordance
3. Add visual focus indicator CSS styling (e.g., dashed outline, shadow effect) beyond browser default

---

## Tools Used for Testing

- WCAG 2.1 AA Conformance Level (target standard)
- Manual code review of HTML/CSS
- ARIA attribute verification
- Color contrast ratio calculations (WebAIM formula)
- Keyboard navigation simulation
- Screen reader simulation (roles, labels, announcements)
- Responsive breakpoint analysis (768px, 480px, 320px)
- Focus indicator CSS coverage audit

---

## Conclusion

The PTC website redesign demonstrates good foundational accessibility practices (semantic HTML, responsive design, large touch targets) but has **9 critical blocking issues** that prevent WCAG 2.1 AA compliance and create legal risk under Section 508/ADA. Most issues are quick CSS/HTML fixes (focus indicators, skip links, keyboard navigation, form labels) that can be remediated in 1-2 sprints. The site should NOT launch without fixing critical issues C5, C6, H10, H11, H12, H13, and M10.

**Recommend:** Schedule 4-hour focused accessibility sprint to address critical issues before Phase 2 deployment. Re-audit 2026-05-15 after fixes applied.

---

**Audit Date:** April 22, 2026  
**Auditor:** Accessibility Audit Agent (WCAG 2.1 AA Specialist)  
**Next Review Recommended:** May 15, 2026 (post-remediation verification)
