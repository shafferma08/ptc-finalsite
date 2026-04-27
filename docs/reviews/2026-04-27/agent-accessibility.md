# Accessibility Audit - 2026-04-27

**Auditor:** persona-accessibility (WCAG 2.1 AA)
**Pages audited:** about.html, clearwater-about.html, stpete-about.html
**Standard:** WCAG 2.1 Level AA (legal floor for PTC as a public institution under PCSB; Section 508 + ADA Title II apply)
**Scope:** Confirm/refute closure of prior a11y items (C5, C6, H9, H10, H11, H12, H13, M1, M3, M10) and audit the freshly-built campus About pages (clearwater-about.html, stpete-about.html, both 2026-04-26).

---

## Confirmation of Previously Resolved Items

| # | Item | Status on these 3 pages | Evidence |
|---|------|-------------------------|----------|
| C5 | Dropdown :focus-within | **Confirmed** | `styles.css:541` `.main-nav__item--has-dropdown:focus-within .main-nav__dropdown` and chevron rotation at line 511. Mobile-disable at line 2011 cancels both hover and focus-within. All three pages render the standard nav, so the rule applies. |
| C6 | Skip link | **Confirmed on all 3** | `about.html:300`, `clearwater-about.html:16`, `stpete-about.html:16`. `<a href="#main-content" class="skip-link">Skip to main content</a>` is the first focusable element in each `<body>`. `.skip-link` CSS at `styles.css:138-158` is the off-screen-until-focused pattern (top: -100px, becomes top: 0 on focus, with yellow outline). `<main id="main-content">` target exists on all three pages (about.html:474, clearwater-about.html:154, stpete-about.html:153). |
| H9 | Utility bar contrast | **Confirmed** | `.utility-bar a { color: var(--color-gray-200); }` (#E5E7EB) on `--color-gray-900` (#111827) bg = ~14.6:1. About hub uses `.utility-bar`; campus pages use `.utility-bar--campus` modifier with no override, so it inherits the AA-compliant base. |
| H10 | Focus indicators | **Confirmed** | `styles.css:162-172` global `:focus-visible { outline: 3px solid var(--color-yellow); outline-offset: 2px; }` covers a/button/input/select/textarea/[tabindex]/.btn. Yellow #FFCF01 against any content color in this design has sufficient contrast for a non-text indicator. |
| H11 | Search label | **Partially confirmed** | about.html has `<label for="search-input" class="sr-only">Search</label>` at line 465 and `<span class="sr-only">Submit search</span>` / `Close search` at lines 467-468. **However, the campus pages do not include the search overlay form at all**; they have a single `<a href="#"><i class="fas fa-search"></i></a>` button in the utility bar (clearwater-about.html:37, stpete-about.html:37) that has no accessible name. See Serious S1 below. |
| H12 | Icon aria-hidden | **Mostly confirmed** | All decorative `<i class="fa..."></i>` icons inside informative cards/footer/hero/leadership do carry `aria-hidden="true"`. **Gap:** the `<i class="fas fa-phone"></i>` and `<i class="fas fa-map-marker-alt"></i>` and `<i class="fas fa-desktop"></i>` etc. inside `.utility-bar` link content on all three pages are NOT aria-hidden. Same for the FA chevrons inside main-nav links. These are decorative and have visible text neighbors so screen readers won't be blocked, but they will read "phone icon" / "graduation cap icon" verbosely. See Moderate M1 below. |
| H13 | Breadcrumb semantics | **Confirmed** | All three pages use `<nav aria-label="Breadcrumb"><ol><li>...</li></ol></nav>` with `aria-current="page"` on the terminal item. about.html:481-486, clearwater-about.html:160-165, stpete-about.html:159-164. Visual `/` separator on the campus pages is rendered via an inline `<span>` in the markup rather than the CSS `::after` used on about.html (about.html:36-40) — see Moderate M2 below; functionally equivalent for screen readers because the span has no semantic role, but inconsistent. |
| M1 | Section header desc contrast | **Confirmed** | `.section-header__desc { color: var(--color-gray-600); }` at `styles.css:986-991`. Gray-600 #4B5563 on white = 7.56:1 (AAA). On off-white #F7F8FA = 7.27:1 (AAA). Used on about.html accreditation/leadership/annual-impact sections. |
| M3 | Hero img alt | **N/A on these 3** | Carousel hero with images is index.html only. About pages use solid green hero with no images, so M3 doesn't apply. The two content `<img>` elements on about.html (lines 547, 727) have proper meaningful alt text. |
| M10 | Prefers-reduced-motion | **Confirmed** | `styles.css:175-184` `@media (prefers-reduced-motion: reduce)` collapses all animations/transitions/scroll-behavior to 0.01ms. Universal selectors so all three pages benefit. |

**Bottom line on prior closures:** 9 of 10 ship correctly. H11 has a regression on the campus About pages (no search form / icon-only link with no accessible name). H12 has a residual gap in utility bar decorative icons. Both are addressable in styles.css + per-page edits.

---

## Critical (Must Fix - Legal Risk)

None of the issues found rise to launch-blocking legal risk. The skip link, focus indicators, breadcrumb semantics, language declaration, and primary heading hierarchy are all in order on all three pages. The remaining gaps are at the Serious / Moderate tier and are not categorical access barriers.

---

## Serious (Should Fix - Barriers to Access)

### S1. Campus search button has no accessible name (WCAG 4.1.2 Name, Role, Value; 2.4.4 Link Purpose)

`clearwater-about.html:37` and `stpete-about.html:37`:

```html
<a href="#" class="btn btn--primary btn--sm" style="margin-left: 1rem;"><i class="fas fa-search"></i></a>
```

This is an icon-only link with (a) no `aria-label`, (b) no visible text, (c) no `sr-only` text, and (d) the FA `<i>` is not even `aria-hidden` so screen readers will announce it as the cryptic glyph name or skip it depending on the AT. A blind user has no way to know this is "Search." The about.html hub has a different pattern (a `<button class="search-toggle" aria-label="Search">` at line 452-454) which is correct.

**Fix:** replace with `<a href="#" class="btn btn--primary btn--sm" aria-label="Search" style="..."><i class="fas fa-search" aria-hidden="true"></i></a>` on both campus About pages. Better: convert to a `<button>` matching the about.html pattern so it triggers an overlay rather than a dead link. Better still: include the same `.search-overlay` form as about.html so the H11 search-label pattern carries through.

### S2. Heading-hierarchy gap on campus About pages (WCAG 1.3.1 Info and Relationships; 2.4.6 Headings and Labels)

Both campus About pages skip from the `<h1>` ("About PTC Clearwater Campus" / "About PTC St. Petersburg Campus") directly to `<h2>` ("Accreditation, Records & Compliance") in the campus-compliance section, **but the institutional-context paragraphs at clearwater-about.html:175-180 and stpete-about.html:174-179 sit between the h1 and the h2 with no heading at all**. That's not technically a hierarchy violation (skipping levels would be h1 → h3), but the content reads as a section ("Institutional Context") with no `<h2>`. A screen reader user navigating by heading lands on h1, then h2 ("Accreditation, Records & Compliance"), and silently passes over the linking-out paragraph.

Additionally, the dropdown column `<h4>` headings (e.g., clearwater-about.html:63 `<h4>By Career Cluster</h4>`) live inside the navigation dropdowns while the page proper jumps from h1 to h2. The h4s appear before any h3 in document order, which violates WCAG 1.3.1 hierarchy expectations even though the menu is hidden until focus. The about.html hub has the same issue (h4 in dropdown at line 341 precedes any document h2/h3).

**Fix options for the institutional-context block:**
- Add an h2 like "Institutional Context" / "About Pinellas Technical College" above line 177.
- Or wrap the block in a `<aside aria-label="Institutional context">` since it's genuinely a sidebar-style note.

**Fix for nav `<h4>`:** change to a non-heading element (e.g., `<p class="dropdown__heading">` styled the same) so the heading outline isn't polluted by navigation structure. This applies sitewide, not just here.

### S3. Footer Twitter/X link aria-label uses ambiguous compound (WCAG 4.1.2 Name)

All three pages: `<a href="#" aria-label="Twitter/X">` (about.html:765, clearwater-about.html:255, stpete-about.html:260). Screen readers will read this as "Twitter slash X link" or "Twitter X link" depending on AT. Pick one. "X (formerly Twitter)" is the AP-style convention if you want disambiguation. This is borderline Moderate, but listed as Serious because a public institution should not ship sloppy compound labels in primary social affordances.

---

## Moderate (Improvement Opportunities)

### M1. Utility bar decorative icons not aria-hidden (WCAG 1.3.1, 4.1.2)

All three pages, in `.utility-bar` and main-nav links: FA `<i>` elements lack `aria-hidden="true"`. Examples:
- about.html:308 `<a href="tel:7275387167"><i class="fas fa-phone"></i> Clearwater: 727.538.7167</a>`
- clearwater-about.html:25 `<a href="tel:7275387167"><i class="fas fa-phone"></i> 727.538.7167</a>`
- about.html:337 `<a href="#" class="main-nav__link">Programs <i class="fas fa-chevron-down"></i></a>`

The visible label text is sufficient on its own; the icon repeats meaning and clutters screen-reader output. Tracker H12 was largely closed, but the utility bar and nav-link chevrons appear to have been missed in the regex pass.

**Fix:** add `aria-hidden="true"` to every decorative FA `<i>` in `.utility-bar a > i` and `.main-nav__link > i`. This is mechanically a regex pass across the production set.

### M2. Breadcrumb separator markup inconsistency (WCAG 1.3.1)

- about.html uses CSS pseudo-elements: `.page-hero__breadcrumb li:not(:last-child)::after { content: "/"; }` at lines 36-40. Best practice — separator never enters the accessibility tree.
- clearwater-about.html:162 and stpete-about.html:161 use an inline `<span style="padding-left: 0.35rem; opacity: 0.7;">/</span>` inside the `<li>`. The span has no aria-hidden, so most screen readers will read "slash" between crumbs.

**Fix:** either add `aria-hidden="true"` to those inline `<span>` separators, or migrate the campus pages to the same `::after` CSS pattern from about.html. The campus pages' breadcrumb styles are inline-only, so they don't pick up the `.page-hero__breadcrumb` rules from about.html's `<style>` block (which is page-scoped, not in styles.css). Recommendation: lift `.page-hero` and `.page-hero__breadcrumb` styles into styles.css so the pseudo-element separator applies globally, then drop the inline `<span>`.

### M3. C3 placeholder leadership icons (WCAG 1.1.1 Non-text Content)

about.html lines 689, 694, 699 — three "Campus Director" / "District Administration" leader cards with placeholder `<i class="fas fa-user"></i>` glyphs and no aria-hidden, no alternative text describing what the placeholder means. Tracker C3 is open on the content axis ("missing leadership representation"), but from an a11y standpoint the placeholder also fails 1.1.1: a screen reader hears "user icon" three times with no context that these are placeholders awaiting real photos.

**Fix until real photos land:** wrap placeholder in `<i class="fas fa-user" aria-hidden="true"></i>` and ensure the heading + title text is sufficient (it is). Alternatively, replace the icon with an `<img>` showing a generic silhouette with `alt=""` so the placeholder is fully decorative. Tracking under existing C3.

### M4. Link purpose: many "View reports" / "View plan" / "Download PDF" repeats (WCAG 2.4.4 Link Purpose in Context)

clearwater-about.html and stpete-about.html have identical link text "View reports" appearing twice each (Safety & Security Data and Financial Accountability), "Download PDF" appearing twice on St. Pete (catalog + code of conduct), and "View plan" / "View all plans" / "View accreditation details" / "Request records" each once. WCAG 2.4.4 (Level A) requires link purpose to be determinable from the link text **or its programmatic context**. Each link sits inside an `<article class="compliance-card">` with a clear `<h3>` (e.g., "Safety & Security Data"), so the programmatic context (article > h3) supplies the disambiguation, and AA is technically satisfied via the `<article>` landmark. But:
- Screen-reader users navigating by links list (a common pattern) hear bare "View reports" twice with no card context.
- The mailto link in clearwater-about.html:235 has only the email address as link text (`canfieldj@pcsb.org`). Acceptable, but adding `aria-label="Email Clearwater records office"` would help.

**Fix (optional, low cost):** add `aria-label` overrides so each link reads uniquely in a links-list, e.g. `<a href="..." aria-label="View Clearwater safety and security reports">View reports</a>`. Or use visually-hidden span text: `<a>View reports<span class="sr-only"> for safety and security data</span></a>`.

### M5. External-link new-tab not announced (WCAG 3.2.5 Change on Request – AAA, but PTC sites typically signal it for AA UX)

All compliance card links open with `target="_blank" rel="noopener"`. The visible FA glyph (`fa-external-link-alt`) signals new-tab visually but is `aria-hidden="true"` so screen-reader users get no warning. WCAG 3.2.5 is AAA, but Section 508 best practice and PCSB's accessibility statement (consumer-information.html#accessibility) imply parity. Add `<span class="sr-only"> (opens in a new tab)</span>` after each external link, or include "(opens in new tab)" in the link's aria-label.

### M6. PDF accessibility unverified (WCAG 1.1.1, 1.3.1, 2.4.x — applies to linked documents)

The campus About pages link to multiple PDFs hosted on resources.finalsite.net (catalogs, SIPs, code of conduct) and to live PTC pages on clearwater.myptc.edu / stpete.myptc.edu. Section 508 §1194.22(m) and WCAG 1.1.1 require linked non-HTML content to be accessible. Tagged PDFs with logical reading order, alternative text on images, real text (not scanned), and language metadata are all required. **I cannot audit the PDFs from HTML alone.** Action item: someone needs to run each linked PDF through Adobe Acrobat's accessibility checker (or equivalent) before launch and log any failures back to the live-site owners via `docs/audit/follow-ups.md`. Same for the live-site target pages — those are the live PTC sites' responsibility, but if the redesign drives users to inaccessible documents, the redesign inherits the complaint.

### M7. Inline-style heavy on campus About pages (WCAG 1.4.12 Text Spacing — indirect)

clearwater-about.html and stpete-about.html have heavy inline `style="..."` on hero, breadcrumb, compliance cards, h3s, paragraphs, and links. WCAG 1.4.12 requires that user style overrides (line height, paragraph spacing, letter spacing, word spacing) not break content. Inline styles override user CSS more aggressively than class-scoped rules. This is also a maintenance issue (M5/M6 in the issues tracker) but the a11y angle is that token-based class styling lets users override more cleanly. Recommendation: extract `.page-hero`, `.page-hero__title`, `.page-hero__subtitle`, `.page-hero__breadcrumb`, `.compliance-card`, `.campus-compliance-grid` into styles.css; matches about.html's pattern.

### M8. Decorative breadcrumb separator color contrast (WCAG 1.4.11 Non-text Contrast)

The `/` separator at `opacity: 0.7` on top of the green gradient hero (#008142 → #006634) renders white at 70% opacity over green ≈ #6EA98D. Contrast against the dark green is ~2:1, fine for purely decorative separators (1.4.11 explicitly excludes inactive UI components and pure decoration). Listing only because the hero breadcrumb link itself sits at `opacity: 0.85` underlined — and 0.85 white on the gradient midpoint #007539 is roughly 4.0:1, which is **borderline failing** for 14px (0.875rem) text. Either drop the opacity (use full white) or bump the breadcrumb font-size to 1rem so it qualifies as still small but the visible state is full color. The about.html `.page-hero__breadcrumb` rule at line 24 sets `opacity: 0.85` on the wrapper, dragging both link and separator down.

**Fix:** set `opacity: 1` on the breadcrumb wrapper and use `color: rgba(255,255,255,0.85)` only on the separator. Or set link to full white and separator to opacity 0.6.

---

## Pass (What's Done Well)

- `<html lang="en">` declared on all three pages (WCAG 3.1.1).
- `<title>` is unique and descriptive on each page (WCAG 2.4.2).
- `<meta name="description">` present on all three (not WCAG but discoverability + AT).
- `<main id="main-content">` landmark with the skip-link target wired correctly.
- `<nav aria-label="...">` on every navigation landmark (Main / Campus / Breadcrumb).
- `<form role="search" aria-label="Site Search">` with proper `<label for="search-input" class="sr-only">` on about.html (WCAG 1.3.1, 3.3.2).
- Mobile toggle button has `aria-label="Open Menu"` and `aria-expanded="false"` (WCAG 4.1.2). The state toggling itself is JS responsibility — assumed correct based on tracker.
- Footer social `<a>` elements all have `aria-label` plus `aria-hidden="true"` on the icon glyph (correct pattern).
- Heading hierarchy on about.html proper: h1 → multiple h2 → h3 inside accreditation cards and leader cards. No skipped levels in the main content.
- Color contrast on the seven (Clearwater) / eight (St. Pete) compliance cards: `#374151` (gray-700) body text on white (#FFFFFF) = 10.31:1 (AAA); h3 in `--color-gray-900` (#111827) on white = 17.74:1 (AAA); `--color-green` (#008142) inline-link text 0.9rem on white = 4.78:1 (just clears AA 4.5:1). Card border-left strip (#008142 4px) is decorative, no contrast requirement.
- Mission statement section: white #FFFFFF on `--color-green` #008142 = 4.78:1, AA-compliant for the 1.5rem (24px) heading-style mission text and the 0.9rem uppercase label (label is bold-ish at 0.9rem with letter-spacing 2px — acceptable).
- Reduced-motion is respected globally.
- COE acronym wrapped in `<abbr title="Council on Occupational Education">` at about.html:625 (WCAG 3.1.4 Abbreviations). Not strictly required at AA but matches the L4 closure work.
- All images on about.html have meaningful alt text (graduation, Clearwater campus, accreditation logos, PCSB logo). No `alt="image"` or empty-alt-on-informative anywhere.
- `tel:` and `mailto:` links present on all three pages — important for users with motor impairments who can't dial manually.

---

## Page-by-Page Audit

### about.html (institutional About hub)

| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|----------------|----------|--------------|---------------|
| Utility bar `<i>` icons not aria-hidden | 1.3.1, 4.1.2 | Moderate | Lines 308, 310, 313, 314, 315, 316, 317 | Add `aria-hidden="true"` to all `<i class="fas..">` inside `.utility-bar a` |
| Main-nav chevron icons not aria-hidden | 1.3.1, 4.1.2 | Moderate | Lines 337, 369, 386, 405, 418, 434 | Add `aria-hidden="true"` to chevrons |
| Dropdown `<h4>` pollutes heading outline | 1.3.1, 2.4.6 | Moderate | Lines 341, 354 | Convert to non-heading element styled identically |
| Twitter/X aria-label compound | 4.1.2 | Serious | Line 765 | Pick one label; "X (formerly Twitter)" is AP-style |
| Leadership placeholder `<i>` not aria-hidden, no alt context | 1.1.1 | Moderate (links to open C3) | Lines 689, 694, 699 | Add `aria-hidden="true"`; consider visible "Photo coming soon" microcopy |
| `<a href="#"` Apply Now / Request Info dead links | 2.4.4 (link purpose), 3.2.5 | Serious (tracked as C2) | Lines 744, 745 | Wire to live portal (existing C2) |
| Hero subtitle opacity 0.92 + breadcrumb opacity 0.85 | 1.4.3 | Moderate | Lines 23-24 (CSS), 482-486 (HTML) | Drop wrapper opacity, set per-element rgba |
| Annual Impact PDF accessibility unverified | 1.1.1 | Moderate | Line 670 | Run accessibility checker against AnnualReportSinglePage.pdf |
| Mission statement uses `<p>` for what reads like a quote | 1.3.1 | Low | Lines 498-499 | Acceptable; consider `<blockquote>` for stronger semantics |
| Mission icon `fas fa-bullseye` has no aria-hidden | 4.1.2 | Moderate | Line 497 | Add `aria-hidden="true"` |

### clearwater-about.html (Clearwater campus About)

| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|----------------|----------|--------------|---------------|
| Search-icon link has no accessible name | 4.1.2, 2.4.4 | Serious | Line 37 | Add `aria-label="Search"` and `aria-hidden="true"` on the inner `<i>` |
| Utility bar `<i>` icons not aria-hidden | 1.3.1, 4.1.2 | Moderate | Lines 25, 27, 30, 32, 34, 36 | Add `aria-hidden="true"` |
| Map link is a dead `<a href="#">` containing the address | 2.4.4 | Moderate (tracked under H3) | Line 27 | Wire to map page or strip the link wrapper |
| Main-nav chevrons not aria-hidden | 1.3.1, 4.1.2 | Moderate | Lines 59, 86, 105, 123 | Add `aria-hidden="true"` |
| Dropdown `<h4>` pollutes heading outline | 1.3.1, 2.4.6 | Moderate | Lines 63, 74 | Demote to non-heading styled element |
| Apply Now CTA dead link | 2.4.4, 3.2.5 | Serious (tracked as C2) | Line 145 | Wire to live portal |
| PTC logo `alt="PTC Logo"` is non-descriptive | 1.1.1 | Low | Line 48 | Use `alt="Pinellas Technical College — Clearwater Campus home"` to match about.html pattern |
| Heading gap: h1 → institutional-context paragraphs with no heading → h2 | 1.3.1, 2.4.6 | Serious | Lines 166 (h1) to 192 (h2) with content at 177-178 | Add an h2 "Institutional Context" or wrap as `<aside>` |
| Breadcrumb separator inline `<span>` not aria-hidden | 1.3.1 | Moderate | Line 162 | Add `aria-hidden="true"` to the span, or migrate to about.html's `::after` pattern |
| Hero breadcrumb link opacity 0.85 borderline contrast | 1.4.3 | Moderate | Line 162 | Use full white on the link, opacity only on the separator |
| External-link icons hidden from AT but new-tab not announced | 3.2.5 | Moderate | Lines 200, 206, 212, 218, 224, 230, 236 | Add `<span class="sr-only">(opens in new tab)</span>` |
| Repeated link text "View reports" / "Download PDF" | 2.4.4 | Moderate | Lines 224, 230 | Disambiguate with `aria-label` or sr-only suffix |
| Footer dead links: Tuition & Aid, Campus Map, Academic Calendar, Schedule a Tour, Staff Directory | 2.4.4 | Serious | Lines 266, 275-278 | Wire to real targets (cluster-by-cluster as redesign progresses) |
| Footer Twitter/X aria-label compound | 4.1.2 | Serious | Line 255 | Same fix as about.html line 765 |
| Compliance cards lack a visible focus state on the entire card | 2.4.7 | Low | Article elements | Cards aren't focusable; only the inline-link inside them is. Acceptable. The link's :focus-visible inherits the global yellow outline — confirmed correct. |
| Linked PDFs (catalog, SIP) accessibility unverified | 1.1.1 | Moderate | Lines 206, 218 | Run accessibility checker; log failures to follow-ups.md |
| All compliance card body text contrast | 1.4.3 | Pass | Lines 199, 205, 211, 217, 223, 229, 235 | gray-700 (#374151) on white = 10.31:1 (AAA) |
| Compliance card h3 contrast | 1.4.3 | Pass | Headings 198, 204, 210, 216, 222, 228, 234 | gray-900 (#111827) on white = 17.74:1 (AAA) |
| Compliance card inline-link green | 1.4.3 | Pass (just clears AA) | Lines 200, 206, 212, 218, 224, 230, 236 | green #008142 on white = 4.78:1, font-size 0.9rem (14.4px) — AA normal-text floor is 4.5:1 |

### stpete-about.html (St. Pete campus About)

(Mirrors clearwater-about.html structurally; same issues apply in the same locations. Eight compliance cards instead of seven — adds the Code of Conduct card at lines 220-224.)

| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|----------------|----------|--------------|---------------|
| Search-icon link has no accessible name | 4.1.2, 2.4.4 | Serious | Line 37 | Add `aria-label="Search"` and `aria-hidden="true"` |
| Utility bar `<i>` icons not aria-hidden | 1.3.1, 4.1.2 | Moderate | Lines 25, 27, 30, 32, 34, 36 | Add `aria-hidden="true"` |
| Map link is a dead `<a href="#">` containing the address | 2.4.4 | Moderate (H3) | Line 27 | Wire to map or unlink |
| Main-nav chevrons not aria-hidden | 1.3.1, 4.1.2 | Moderate | Lines 59, 85, 104, 122 | Add `aria-hidden="true"` |
| Dropdown `<h4>` pollutes heading outline | 1.3.1, 2.4.6 | Moderate | Lines 63, 73 | Demote |
| Apply Now CTA dead link | 2.4.4, 3.2.5 | Serious (C2) | Line 144 | Wire to live portal |
| PTC logo `alt="PTC Logo"` non-descriptive | 1.1.1 | Low | Line 48 | "Pinellas Technical College — St. Petersburg Campus home" |
| Heading gap: h1 → institutional-context paragraphs with no heading → h2 | 1.3.1, 2.4.6 | Serious | Lines 165 (h1) to 191 (h2), content at 176-177 | Add h2 or wrap as `<aside>` |
| Breadcrumb separator inline `<span>` not aria-hidden | 1.3.1 | Moderate | Line 161 | Add `aria-hidden="true"` |
| Repeated "View reports" / "Download PDF" link text | 2.4.4 | Moderate | Lines 205, 217, 223, 229, 235 | Disambiguate |
| External-link new-tab not announced | 3.2.5 | Moderate | Lines 199, 205, 211, 217, 223, 229, 235, 241 | Add sr-only "(opens in new tab)" |
| Footer dead links | 2.4.4 | Serious | Lines 271, 279-282 | Wire to real targets |
| Footer Twitter/X aria-label compound | 4.1.2 | Serious | Line 260 | Same fix |
| Linked PDFs (catalog, SIP, Code of Conduct) accessibility unverified | 1.1.1 | Moderate | Lines 205, 217, 223 | Run checker |
| Compliance cards body / heading / link contrast | 1.4.3 | Pass | All eight cards | Same ratios as Clearwater (AAA / AAA / just-AA-compliant) |
| Heading hierarchy within compliance section | 1.3.1 | Pass | h2 line 191 → eight h3 cards | No skipped levels |

---

## Cross-Cutting Findings

Two patterns recur across all three pages and one is fresh-page-only:

1. **Decorative FA icons inside utility-bar links and main-nav chevrons are not `aria-hidden`** (Moderate M1). H12 closure missed these. Single regex pass fixes all three pages plus the rest of the site.
2. **Footer Twitter/X aria-label is a compound** ("Twitter/X"). Same fix on all three pages.
3. **Campus About pages have an unmarked content section between h1 and h2** (Serious S2). Affects only the two new 2026-04-26 pages.

---

## Summary Statistics

- **Critical issues:** 0
- **Serious issues:** 4 (S1 campus search button, S2 campus heading gap, S3 Twitter/X label, footer dead links — last one is content-blocked, already tracked)
- **Moderate issues:** 8 (M1 utility-bar icons, M2 breadcrumb separator markup, M3 leadership placeholders, M4 link purpose repeats, M5 new-tab announce, M6 PDF accessibility unverified, M7 inline-style heavy, M8 hero opacity)
- **Pages audited:** 3
- **Prior closures confirmed:** 9 of 10 (C5, C6, H9, H10, H12 with caveat, H13, M1-tracker, M3, M10). H11 has a regression on campus About pages.
- **Legal-risk classification:** LOW maintained. The remaining gaps are usability friction for AT users, not categorical access barriers. None blocks an ADA Title II complaint on its face — but S1 (icon-only search link with no accessible name) is the kind of thing that shows up in DOJ resolution agreements and should be closed before the campus About pages go live.

---

## Recommended Closure Path Before Marianne Marks the About Cluster Done

In priority order, all mechanical and small:

1. **Add `aria-label="Search"` + `aria-hidden="true"` on the icon** to clearwater-about.html:37 and stpete-about.html:37 (closes S1).
2. **Add an h2 or `<aside>` wrapper** to the institutional-context block on both campus About pages (closes S2).
3. **Add `aria-hidden="true"` to all decorative `<i>` glyphs in utility-bar and nav chevrons** across all three pages (closes M1, completes H12).
4. **Add `aria-hidden="true"` to the inline `<span>` breadcrumb separators** on both campus About pages, or lift `.page-hero__breadcrumb` styles into styles.css and use the `::after` pattern from about.html (closes M2).
5. **Disambiguate "View reports" / "Download PDF" repeats** with sr-only suffix or aria-label (closes M4).
6. **Add `<span class="sr-only">(opens in new tab)</span>` after each external/PDF link** (closes M5).
7. **Fix the Twitter/X aria-label** sitewide (closes S3).
8. **Run linked PDFs through Acrobat's accessibility checker**; log any failures to `docs/audit/follow-ups.md` for the live-site owners (closes M6 from the redesign's side).
9. **Update PTC logo alts** on campus About pages from "PTC Logo" to descriptive form matching about.html.

Items 1-7 and 9 are HTML edits totaling well under an hour. Item 8 is the only one with external dependency.
