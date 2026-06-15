# Accessibility Audit - 2026-06-15

Launch-readiness pass before the June 18 mockups. WCAG 2.1 AA, public-institution (Section 508 / ADA) standard. Scope: index, clearwater, stpete, programs, admissions, tuition-aid, practical-nursing-clearwater, contact, consumer-information, about. Mockup review of local HTML + script.js + styles.css.

Headline: the three June 11 a11y fixes verify clean (mobile-nav disclosure ARIA in script.js, programs filter live region, nursing hero eyebrow contrast). No new launch-blocking (Critical) a11y issues. The remaining barriers are the already-tracked Medium items (M45, M47, M48) plus two regressions that surfaced on the two campus homepages wired today: a contradictory `alt` + `aria-hidden` on the hero image (re-opens the M3 pattern) and a non-descriptive `alt="PTC Logo"` (re-opens M24 on the campus homepages specifically).

## Verified Fixed (regression-checked, confirmed resolved)

- **H20 / M2 (mobile-nav disclosure ARIA + Space toggle).** VERIFIED in `script.js` lines 62-100. Each `.main-nav__item--has-dropdown > .main-nav__link` now gets `aria-haspopup="true"`, `aria-expanded` (JS-toggled true/false), and `aria-controls` pointed at a panel `id`. Mobile accordion toggles `aria-expanded`, Space (`' '`/`Spacebar`) toggles the disclosure, Enter still navigates, and `collapseAllDropdowns()` resets ARIA on close + on resize to desktop. Meets WCAG 4.1.2 / 2.1.1 / 1.3.1. Present on all nav-loading pages reviewed (index, programs, admissions, tuition-aid, contact, both campus homepages, nursing).
- **M46 (programs filter live-region announcement).** VERIFIED in `programs.html` line 268 (`<p id="filter-status" class="sr-only" role="status" aria-live="polite" aria-atomic="true">`) and the filter script lines 718-722, which write "X programs shown." / "No programs match..." on every change and on `?cluster=`/`?campus=` initial load. Meets WCAG 4.1.3.
- **M44 (hero-eyebrow #8DC63F-on-green contrast).** VERIFIED on `practical-nursing-clearwater.html` line 266: hero eyebrow now uses `color: var(--color-yellow)` (#FFCF01) on the dark-green hero gradient (passes AA for large text). The light-green `--color-accent` (#8DC63F) is no longer used as eyebrow text here.
- **C8 (adult-education-pathways.html missing script.js).** Out of this batch's file list; not re-verified here. Tracker shows the one-line fix was applied. No action in this review.
- **Skip link / focus-visible / breadcrumb semantics (C6, H10, H13).** Spot-confirmed still present: every page opens with `<a href="#main-content" class="skip-link">`, breadcrumbs use `<nav aria-label="Breadcrumb"><ol>` with `aria-current="page"`, and decorative `<i>` icons carry `aria-hidden="true"` throughout.

## Critical (Must Fix - Legal Risk)

None new. No launch-blocking a11y defect found on the ten pages in this batch.

## Serious (Should Fix - Barriers to Access)

- **A1 (= M47, scope confirmed). Dead search "button" on both campus homepages with no overlay.** `clearwater.html` line 37 and `stpete.html` line 37 each ship `<a href="#" class="btn btn--primary btn--sm"><i class="fas fa-search"></i></a>`. It is an anchor (not a `<button>`), has no accessible name (icon is correctly `aria-hidden`, but there is no text or `aria-label`), and there is no `#search-overlay` markup or handler in the campus templates. A keyboard or screen-reader user lands on a control announced only as "link" with no name, activates it, and nothing happens (it jumps to top via `#`). This fails WCAG 4.1.2 (Name, Role, Value) and 2.4.4. The main-site header uses a real `<button id="search-toggle" aria-label="Search">` wired to a working overlay; the campus chrome was never given the same. Fix: either port the real search-toggle button + overlay to the campus shell, or remove the affordance. Confirmed M47 now spans clearwater.html and stpete.html, not just clearwater-contact.html. WCAG 4.1.2 / 2.4.4.
- **A2 (regression of M3). Hero image carries both descriptive `alt` text and `aria-hidden="true"`.** `clearwater.html` line 157 `<img src="...PTC-CLW.jpg" alt="Campus building exterior" aria-hidden="true">` and `stpete.html` line 157 `<img ... alt="St. Petersburg Campus exterior" aria-hidden="true">`. This is the exact contradiction M3 fixed on the index hero (there the fix was to empty the `alt`). An image with `aria-hidden="true"` is removed from the accessibility tree, so the `alt` is dead weight and the attributes disagree about whether the image is meaningful. Decide one way: if the split-hero image is decorative (the `<h1>` carries the message), set `alt=""` and keep `aria-hidden`; if it is meaningful, drop `aria-hidden` and keep a real `alt`. WCAG 1.1.1.

## Moderate (Improvement Opportunities)

- **A3 (= M45). Small gray text below AA.** `practical-nursing-clearwater.html` PDF resource cards (lines 514, 518, 522, 526) set meta text in `color: var(--color-gray-500)` (#6B7280) at 0.85rem. #6B7280 on white is ~4.83:1, which passes AA for normal text only marginally and is below the 4.5:1 line once anti-aliased at this size on some displays; the bigger risk is the pattern propagating. The counselor role label (line 602) also uses gray-500 at 0.85rem. Note: styles.css defines `--color-gray-500: #6B7280` (not the #9CA3AF the tracker assumed), so the nursing meta text is borderline-pass, not a hard fail; the hard-fail color is `--color-gray-400` (#9CA3AF, ~2.6:1) which appears only on decorative/disabled elements here. Recommend bumping card meta and the counselor label to `--color-gray-600` (#4B5563, ~7:1) for comfortable AA. WCAG 1.4.3.
- **A4 (= M48). Course-sequence accordion chevron affordance is invisible.** `practical-nursing-clearwater.html` lines 63-64 hide the native `<details>` marker (`summary { list-style: none }` + `summary::-webkit-details-marker { display: none }`) with no replacement caret. The semantics are intact (real `<details>`/`<summary>`, keyboard-operable, screen-reader announces expanded/collapsed), so this is not a 4.1.2 failure, but sighted users get no visual cue the rows expand. Add a decorative `summary::after` chevron that rotates on `[open]`. WCAG 1.3.1 (advisory) / 3.2.4 consistency.
- **A5 (regression of M24, campus homepages). Non-descriptive logo `alt="PTC Logo"`.** `clearwater.html` line 48 and `stpete.html` line 48 use `alt="PTC Logo"`. The April M24 sweep replaced this with campus-qualified alt ("Pinellas Technical College, Clearwater Campus") on the campus About pages and elsewhere; the two campus homepages still carry the old generic string. The nursing page (line 160) has the correct `alt="Pinellas Technical College, Clearwater Campus"`. Align the campus homepages to that form. WCAG 1.1.1.
- **A6. Tuition rate table header cells lack `scope`.** `tuition-aid.html` lines 776-778 use `<th>` without `scope="col"`. The table is otherwise well-formed (`<thead>`/`<tbody>`, `aria-label`, a `colspan` note row). For a 3-column data table most screen readers infer column headers, so this is low-severity, but explicit `scope="col"` on the three header cells is the Section 508 expectation for a public institution. WCAG 1.3.1.
- **A7 (= L17/L18 carryover). External new-tab links on nursing lack the sr-only "(opens in new tab)" cue except on video cards.** The four video-card links (`practical-nursing-clearwater.html` lines 541-568) correctly include "(opens in new tab)" in their `aria-label`, but the Apply Online, Zoom, PracticalNursing.org, State Board, and PDF links open in new tabs (`target="_blank"`) with no announced warning. The campus About pages got this treatment in M29; the program-page template did not inherit it. WCAG 3.2.5 (advisory) / G201.

## Pass (What's Done Well)

- `lang="en"` present on every page reviewed (WCAG 3.1.1).
- Skip-to-main-content link is the first focusable element on all ten pages (WCAG 2.4.1).
- Decorative Font Awesome icons consistently carry `aria-hidden="true"`; icon-only controls (header search/mobile toggle, footer social) have real accessible names via `aria-label` (WCAG 1.1.1, 4.1.2).
- Heading hierarchy is clean and gap-free: every page has exactly one `<h1>`, sections descend h2 -> h3 -> h4 without skips. consumer-information.html (15 `ci-section__heading` h2s) and tuition-aid.html (long h2/h3/h4 chain) are well-structured for screen-reader landmark/heading navigation (WCAG 1.3.1, 2.4.6, 2.4.10).
- Nav dropdown column labels are `<p class="dropdown__column-title">`, not headings, so they don't pollute the heading outline (M32 holding).
- Search form has a programmatic `<label for="search-input">` and `role="search"` region; the contact form fields each have associated `<label>` (WCAG 1.3.1, 3.3.2, 4.1.2).
- index hero slides correctly use `alt=""` + `aria-hidden="true"` (the M3 fix), proving the right pattern exists in-repo for A2 to copy.
- Tuition table uses semantic `<thead>`/`<th>` with a descriptive `aria-label` (just add `scope`, A6).
- `prefers-reduced-motion` reduce rule confirmed in styles.css; the hero slider, counters, and scroll-reveal in script.js are the kind of motion it governs (WCAG 2.3.3 advisory).
- Footer social `aria-label="X (formerly Twitter)"` reads naturally (M31 holding).

## Page-by-Page Audit

### index.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| None new. Hero slides `alt=""`+`aria-hidden`, real search button+overlay, disclosure ARIA via script.js all correct | — | Pass | L209-212, L179-199 | Use this page as the reference pattern for campus homepages |

### clearwater.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Dead search anchor `href="#"`, no name, no overlay (M47) | 4.1.2, 2.4.4 | Serious | L37 | Port real `<button id="search-toggle">` + overlay, or remove |
| Hero `<img>` has `alt="Campus building exterior"` AND `aria-hidden="true"` (M3 regression) | 1.1.1 | Serious | L157 | Pick one: `alt=""`+aria-hidden (decorative) OR drop aria-hidden |
| Logo `alt="PTC Logo"` non-descriptive (M24 regression) | 1.1.1 | Moderate | L48 | `alt="Pinellas Technical College, Clearwater Campus"` |

### stpete.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Dead search anchor `href="#"`, no name, no overlay (M47) | 4.1.2, 2.4.4 | Serious | L37 | Port real search button + overlay, or remove |
| Hero `<img>` has `alt="St. Petersburg Campus exterior"` AND `aria-hidden="true"` (M3 regression) | 1.1.1 | Serious | L157 | Pick one: `alt=""`+aria-hidden OR drop aria-hidden |
| Logo `alt="PTC Logo"` non-descriptive (M24 regression) | 1.1.1 | Moderate | L48 | `alt="Pinellas Technical College, St. Petersburg Campus"` |

### programs.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Filter live region (M46) | 4.1.3 | Pass | L268, L718-722 | Verified working |
| `.prog-card .campus-tag` sky-blue #0284c7 on #e0f2fe ~4.6:1 (borderline; off-brand, ties to M40) | 1.4.3 | Moderate | L27 | Recolor to green/gray tokens; also fixes brand drift |
| Select filters have programmatic `<label for>` | 1.3.1, 3.3.2 | Pass | L244, L258 | — |

### admissions.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Breadcrumb separator is CSS `::after content:"/"` (decorative, not announced); hero uses full-opacity white text | 1.3.1, 1.4.3 | Pass | L35-38, L22-24 | — |
| Canonical `.card` components reused for checklist (good design-system hygiene) | 1.3.1 | Pass | L627-672 | — |

### tuition-aid.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Rate-table `<th>` cells lack `scope="col"` | 1.3.1 | Moderate | L776-778 | Add `scope="col"` to the 3 header cells |
| Hero breadcrumb wrapper `opacity: 0.85` on white text (L11 regression pattern) | 1.4.3 | Moderate | L23 | Drop the 0.85 opacity (full-opacity white passes ~5:1) |
| Well-structured headings + semantic data table | 1.3.1, 2.4.10 | Pass | L769-1092 | — |

### practical-nursing-clearwater.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Hero eyebrow contrast now #FFCF01 (M44) | 1.4.3 | Pass | L266 | Verified |
| PDF card meta + counselor label `--color-gray-500` 0.85rem (M45, borderline ~4.8:1) | 1.4.3 | Moderate | L514-526, L602 | Bump to `--color-gray-600` |
| Accordion marker hidden, no replacement chevron (M48) | 1.3.1, 3.2.4 | Moderate | L63-64 | Add `summary::after` chevron rotating on `[open]` |
| External new-tab links (Apply/Zoom/PDFs) lack sr-only "(opens in new tab)" (L18); video cards do it right | 3.2.5 | Moderate | L308, L357, L473-490, L512-527 | Append sr-only "(opens in new tab)" |
| Decorative `<i>` icons all aria-hidden; jump-nav is real `<nav aria-label>`; details/summary keyboard-operable | 1.1.1, 4.1.2 | Pass | throughout | — |

### contact.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Hero breadcrumb wrapper `opacity: 0.85` on white (L11 pattern) | 1.4.3 | Moderate | L23 | Drop opacity 0.85 |
| Two `<h2>` per campus card (header h2 "Clearwater Campus" + page h2 "Find Your Campus") — many h2s but no skipped levels | 1.3.1 | Pass (advisory) | L603, L610, L638 | Optional: demote card titles to h3 for a cleaner outline |
| No actual contact form on this page (it routes to campus pages); the search form has its label | 3.3.2 | Pass | — | — |

### consumer-information.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Accessibility statement section present with `id="accessibility"` and ADA framing; Non-Discrimination at `id="non-discrimination"` | 508 / institutional | Pass | L597-598, L574-575 | — |
| Clean h1 -> h2 -> h3/h4 outline across 15 sections; sidebar "On this page" is a real heading + list | 1.3.1, 2.4.1 | Pass | L502-779 | — |
| Linked PDFs (Code of Conduct, financial reports, catalog) accessibility unverified (M25, live-gated) | 1.1.1 | Moderate (deferred) | PDF links | Route to follow-ups.md; verify source PDFs are tagged |

### about.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Story-slideshow images all have meaningful `alt`; principle-row decorative logos correctly `alt=""`+`aria-hidden` | 1.1.1 | Pass | L743-764, L879-895 | — |
| Named leadership cards (Prokop/Shedrick/Hinds) with h3 names (C3 holding) | 1.3.1 | Pass | L841-853 | — |
| Single h1, gap-free heading outline | 1.3.1, 2.4.10 | Pass | L722-968 | — |

## Summary Statistics

- Critical issues: 0 (none new; no launch-blocking a11y defect in this batch)
- Serious issues: 2 distinct patterns across the two campus homepages = 4 instances (A1/M47 dead search x2; A2/M3-regression hero alt x2)
- Moderate issues: 5 (A3/M45 gray text; A4/M48 accordion chevron; A5/M24-regression logo alt x2; A6 table scope; A7/L18 new-tab cue) plus deferred M25
- Pages audited: 10

### Disposition vs. tracker
- VERIFY and close-eligible: H20/M2 (script.js disclosure ARIA + Space toggle), M46 (filter live region), M44 (nursing eyebrow contrast). All confirmed fixed on the pages in scope.
- Still open, confirmed: M47 (now scoped to clearwater.html + stpete.html, broader than the tracker's clearwater-contact.html), M45 (re-graded borderline, not hard-fail; gray-500 is #6B7280 per styles.css, not #9CA3AF), M48, M25 (live-gated).
- New / regressed on today's wired campus homepages: M3-pattern hero `alt`+`aria-hidden` contradiction (clearwater.html + stpete.html L157); M24-pattern `alt="PTC Logo"` (clearwater.html + stpete.html L48). Both are one-line edits and both have a correct in-repo reference (index hero for M3; nursing logo for M24).

Legal/compliance risk: LOW-MODERATE. No Critical a11y blocker. The two Serious items are on the two campus homepages and are mechanical fixes; clearing them plus the gray-text bump (A3) before the June 18 showing keeps the public-institution posture clean.
