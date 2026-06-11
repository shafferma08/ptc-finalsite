# Accessibility Audit - 2026-06-11

Scope: WCAG 2.1 AA / Section 508 review of the new Programs-wave redesign work. Pages audited: `programs.html`, `practical-nursing-clearwater.html`, `welding-stpete.html`, `apprenticeships-clearwater.html`, `adult-education-pathways.html`, `workforce-continuing-education.html`, `clearwater-contact.html`. Prior a11y items referenced from `docs/reviews/issues-tracker.md` (M2 mobile nav keyboard = Partially Addressed; M25 PDF accessibility = Open).

Most of the proven sitewide wins (skip link C6, focus-visible H10, breadcrumb semantics H13, decorative-icon aria-hidden M15, descriptive social aria-labels M31) carry through cleanly onto these new pages. The new problems concentrate in three places: a filter UI on `programs.html` that updates results silently, a results-filtering `<select>` flow with no screen-reader announcement, color contrast on the OWI-BIS light green (`#8DC63F`) used as text, and one page (`adult-education-pathways.html`) that ships without `script.js`, which breaks its own hamburger menu and search overlay entirely.

---

## Critical (Must Fix - Legal Risk)

Issues that could result in ADA complaints for a public educational institution.

### A1. `adult-education-pathways.html` has no `script.js`, so the mobile menu and search are non-operable
The page ends at `</footer>` with no `<script src="script.js">` (compare every other page in this set, which loads it). The hamburger `#mobile-toggle` and the `#search-toggle` / `#search-overlay` have no behavior wired. On a phone (the primary device for prospective students), there is **no way to open the navigation at all**: the desktop nav is hidden by the mobile breakpoint and the toggle does nothing. This is a complete keyboard-and-pointer operability failure of the primary navigation on mobile.
- WCAG 2.1.1 Keyboard (A), 2.4.5 Multiple Ways (AA, nav is the only wayfinding on mobile)
- Fix: add `<script src="script.js"></script>` before `</body>`, matching the other six pages.

### A2. Mobile nav dropdowns are not exposed as operable disclosures (M2 carryover, still open)
`script.js` toggles an `accordion-open` class on the parent `<li>` when the top-level link is clicked in mobile width, and calls `e.preventDefault()`. But:
- The top-level dropdown trigger is a plain `<a href="programs.html">` with no `aria-expanded`, no `role="button"`, and no indication to a screen reader that activating it opens a submenu rather than navigating.
- There is no `Enter`/`Space` handling distinct from navigation, and on mobile the link's destination is suppressed with no announced state change, so a screen-reader user hears a link that "does nothing."
- Only the hamburger button carries `aria-expanded`; the six dropdown triggers do not.
This affects all six pages that load the nav. It is the M2 item, which has sat "Partially Addressed" since April. For a public institution this is the highest-residual-risk keyboard item.
- WCAG 4.1.2 Name, Role, Value (A); 2.1.1 Keyboard (A)
- Fix: give each dropdown trigger `aria-expanded="false"` (toggled in JS), `aria-controls` pointing at the dropdown panel id, and ensure Enter/Space toggle the panel in mobile while still allowing the landing page to be reached (e.g., a separate visible "go to section" link, or a dedicated chevron button that owns the expand while the link navigates).

---

## Serious (Should Fix - Barriers to Access)

### S1. `programs.html` filter results change silently (no live region)
The `#filter-cluster` and `#filter-campus` `<select>`s are correctly labeled (`<label for>` present, good). But when a selection hides/shows `.prog-card`s, nothing is announced. A sighted user sees the grid reflow; a screen-reader user gets no feedback on how many programs now match, and the `#no-results-msg` ("No programs match...") appears with `display:none → block` but is not a live region, so its appearance is silent.
- WCAG 4.1.3 Status Messages (AA)
- Fix: add `role="status" aria-live="polite"` to a results-summary element (e.g., "Showing 12 of 41 programs") updated in `filterPrograms()`, and add `role="status"` to `#no-results-msg`.

### S2. `programs.html` `?cluster=` deep-link moves focus nowhere and gives no context
The prompt flagged the `?cluster=` flow. The nav links (`programs.html?cluster=health`, etc.) are real anchors, so they are keyboard-operable and screen-reader-navigable on the way in (good). The gap is on arrival: the URL param sets the `<select>` value and filters the grid on load, but focus stays at the top of the document and the now-filtered state is never announced. A screen-reader user who follows "Health Sciences" from the dropdown lands on a page that looks identical in the accessibility tree to the unfiltered page, with no signal that a filter is active.
- WCAG 4.1.3 Status Messages (AA); 2.4.3 Focus Order (A, weak)
- Fix: when a URL param applies a filter on load, set the live-region summary from S1 and consider moving focus to the filter region heading or the results summary.

### S3. OWI-BIS light green `#8DC63F` used as text fails AA contrast in several spots
`--color-accent` (`#8DC63F`) is the brand light green. Used as a fill it is fine; used as **text** it is a problem:
- `practical-nursing-clearwater.html` and `welding-stpete.html`: the hero eyebrow ("Clearwater Campus" / "St. Petersburg Campus") is `color: var(--color-accent)` on the dark green gradient hero. `#8DC63F` on `#006B36` is roughly 2.6:1, below the 4.5:1 normal-text threshold (the eyebrow is ~0.9rem, not large text).
- Same `--color-accent` eyebrow on the dark `#1a202c` "See It In Action" video sections (`practical-nursing` and `welding-stpete`): `#8DC63F` on near-black is about 6:1 and passes, so the failing instances are specifically accent-on-green.
- `apprenticeships-clearwater.html`: `.hub-hero .eyebrow` is `--color-accent` on the dark green hero. Same ~2.6:1 failure.
- WCAG 1.4.3 Contrast (Minimum) (AA)
- Fix: for accent text on green backgrounds, switch to `--color-yellow` (`#FFCF01`, which the counselor-nudge links already use and which clears AA on green) or to white. Reserve `#8DC63F` for fills/borders and for text only on dark-neutral backgrounds where it measures above 4.5:1.

### S4. Secondary/caption gray text below AA in PDF cards and counselor titles
`--color-gray-500` (`#6B7280`) on white is ~4.8:1 for the body but is used at small sizes where it gets borderline, and `--color-gray-400` (`#9CA3AF`, ~2.6:1 on white) appears as live small text, not just decoration:
- `welding-stpete.html` line ~1100: the certification-requirements note under the shadowing link is `color: var(--color-gray-400)` at 0.875rem. That is ~2.6:1, a clear fail.
- `practical-nursing-clearwater.html` PDF card sublabels ("Practical Nursing · Clearwater · PDF") use `--color-gray-500` at 0.85rem; borderline at best.
- WCAG 1.4.3 Contrast (Minimum) (AA)
- Fix: bump the gray-400 small text to at least `--color-gray-600` (`#4B5563`, ~7:1). Move PDF card meta to `--color-gray-600` to be safe at small sizes.

### S5. Course-sequence accordions: first item `open`, others rely on native `<details>` (mostly OK, one gap)
`practical-nursing-clearwater.html` and `welding-stpete.html` use native `<details>/<summary>` for the course sequence, which is keyboard-operable and announces expand/collapse state natively. That is the right pattern (good). The gap: `summary { list-style: none }` plus `::-webkit-details-marker { display:none }` removes the disclosure triangle, and there is no replacement affordance (no rotating chevron icon) indicating these are expandable. Sighted users may not realize the collapsed phases are interactive; the visual cue is gone even though the semantics remain.
- WCAG 1.3.3 Sensory Characteristics (A) / 3.2.4 affordance; 1.4.1 not by-color
- Fix: add a CSS chevron via `summary::after` (e.g., a Font Awesome glyph that rotates on `[open]`), purely decorative, so the expandable affordance is visible without relying on the native marker.

### S6. `clearwater-contact.html` utility-bar search is a dead `href="#"` link styled as a button
Line 131: `<a href="#" class="btn btn--primary btn--sm" aria-label="Search"><i class="fas fa-search"></i></a>`. It has an accessible name (good, aria-label present) and the icon is aria-hidden (good), but it routes to `#`, so activating it jumps to top of page and does nothing. This is the only one of the seven pages with a search affordance in the utility bar, and it is non-functional. A keyboard user who tabs to it and activates it gets a silent no-op.
- WCAG 2.4.4 Link Purpose (A, the name promises search it cannot deliver); 4.1.2
- Fix: either wire it to the real search overlay (and make it a `<button>`, since it triggers in-page UI, not navigation) or remove it. Note this page also does not include the `#search-overlay` markup, so the link has nothing to open.

---

## Moderate (Improvement Opportunities)

### M-a. Linked PDFs accessibility still unverified (M25 carryover, expands)
These new pages add many PDF links: `practical-nursing-clearwater.html` (Program Flyer, Program Costs, Application Information Kit, General Information & FAQ, PN start-date notify, all Finalsite/PCSB-hosted PDFs) and `workforce-continuing-education.html` (Child Care Training Program Dates PDF, School Board Employee Training PDF). Section 508 / WCAG 1.1.1 require the linked non-HTML content itself to be tagged/accessible. This remains M25, now with more surface. Cannot be verified from markup; route to live-content owners.
- WCAG 1.1.1 (A) applied to linked documents
- Fix: confirm each PDF is tagged (reading order, alt text, document title) or provide an HTML equivalent. Log in `docs/audit/follow-ups.md`.

### M-b. `welding-stpete.html` "Step 1: Apply Online" and shadow-day links missing `rel="noopener"` and have icons without aria-hidden
Lines ~776-781: the three Start Here step buttons use `target="_blank"` without `rel="noopener"` (minor security/perf, not strictly a11y), and `<i class="fas fa-file-alt">` / `<i class="fas fa-calendar-check">` on those buttons are **missing `aria-hidden="true"`** (most other icons on the page have it). Same on line ~1000 (`fa-check-circle`) and line ~1098 (`fa-calendar-check`). Decorative icons without aria-hidden can be announced as stray characters by some screen readers. The M15 sweep missed these new-page icons.
- WCAG 1.1.1 (A) / 4.1.2
- Fix: add `aria-hidden="true"` to those decorative `<i>` elements; add `rel="noopener"` to the external step links for consistency.

### M-c. New-tab links open without warning on most external links across all pages
External links (`apply.myptc.edu`, `enrole.com`, `bncvirtual.com`, PCSB, Focus, Zoom, etc.) use `target="_blank"` but do not announce the new-tab behavior to assistive tech. The April M29 fix added `(opens in new tab)` sr-only text to the campus About compliance cards, but that pattern was not carried to these Programs-wave pages. The video links DO carry "(opens in new tab)" in their aria-label (good, follow that model). Inconsistent application is the issue.
- WCAG 3.2.2 On Input / G201 advisory; 2.4.4
- Fix: append `<span class="sr-only"> (opens in new tab)</span>` to user-facing external links, or at minimum the high-traffic Apply Now / Enrole / Canvas / Focus links. Apply consistently.

### M-d. `programs.html` campus tag text "Clearwater & St. Pete" uses a raw `&` and a color-only campus cue
The `.campus-tag` chips (e.g., line 284) carry a `fa-map-marker-alt` icon (aria-hidden, good) and the campus name as text (good, not color-only). Minor: the light-blue campus tag `background:#e0f2fe;color:#0284c7` is ~4.6:1, just over AA for the small 0.75rem text. Acceptable but close. No fix required; noting for the record.
- WCAG 1.4.3 (AA) borderline-pass.

### M-e. Jump-nav on program pages is a horizontally scrollable region with hidden scrollbar
`.jump-nav__inner` uses `overflow-x:auto; scrollbar-width:none` and hides the webkit scrollbar. The links inside are real anchors and keyboard-tabbable (good), and arrow/tab still reaches off-screen items. But the hidden scrollbar removes the visual cue that content scrolls, and there is no keyboard affordance to scroll the container itself (only tabbing through links). Low impact since every link is focusable, but the hidden scrollbar is a discoverability ding.
- WCAG 1.4.10 Reflow (AA) - passes since links wrap into tab order; advisory only.

### M-f. `welding-stpete.html` advertised schedule has an open data-reconciliation comment
Not an a11y issue per se, but the source comment (lines 933-939) flags that the advertised Day/Evening schedule may be wrong (evening-only per counseling). Publishing incorrect schedule data to students has downstream equity/access implications for working students. Flagging so it is not lost. Route to Cheri Ashwood per the comment.

---

## Pass (What's Done Well)

- **Skip link (C6)** present and first-focusable on all seven pages.
- **`lang="en"`** set on `<html>` for all seven pages.
- **Breadcrumb semantics (H13)** correct: `<nav aria-label="Breadcrumb"><ol>` with `aria-current="page"` on every page. `clearwater-contact.html` and `adult-education-pathways.html` use CSS `::after` separators (not announced) - correct.
- **Native `<details>` accordions** for course sequences are keyboard- and screen-reader-operable out of the box (the right call over a custom ARIA widget).
- **`<select>` filter controls on `programs.html`** have proper `<label for>` associations.
- **Video cards** are exemplary: each `.video-card__link` has a descriptive `aria-label` including "(opens in new tab)", the play icon and caption icons are aria-hidden, and the thumbnail `<img>` has real alt text. This is the model the rest of the site's external links should follow.
- **Hero/content images have meaningful alt text**: `practical-nursing` hero ("Practical Nursing students training at..."), `welding-stpete` hero (detailed shop description), HCA partner logo, AWS badge, LPN badge all descriptive. No `alt="image"` or empty-on-meaningful found.
- **Decorative icons** are overwhelmingly `aria-hidden="true"` (M15 sweep held up well on the older chrome; only the new-page step-button icons in S/M-b slipped through).
- **Descriptive social aria-labels (M31)**: "X (formerly Twitter)" etc. correct in all footers.
- **`prefers-reduced-motion` (M10)** global rule in `styles.css` still covers the new pages' transitions and the hero slider.
- **`focus-visible` (H10)** global yellow outline applies to the new pages' links/buttons/selects.

---

## Page-by-Page Audit

### programs.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Filter result changes not announced | 4.1.3 | Serious (S1) | `#programs-container`, `filterPrograms()` script L687 | Add `role="status" aria-live="polite"` results summary |
| No-results message not a live region | 4.1.3 | Serious (S1) | `#no-results-msg` L590 | Add `role="status"` |
| `?cluster=` deep-link gives no on-arrival context | 4.1.3 / 2.4.3 | Serious (S2) | script L683 | Announce active filter / move focus to filter region |
| Mobile dropdown trigger lacks aria-expanded/controls | 4.1.2 / 2.1.1 | Critical (A2) | nav L74-105 | Add disclosure ARIA + Enter/Space handling |
| Light-blue campus tag borderline contrast | 1.4.3 | Moderate (M-d) | `.campus-tag` L27 | Acceptable; monitor |

### practical-nursing-clearwater.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Hero eyebrow accent-green on green fails contrast | 1.4.3 | Serious (S3) | hero eyebrow `color: var(--color-accent)` L266 | Use yellow or white |
| Accordion expand affordance removed (marker hidden) | 1.3.3 | Serious (S5) | `summary` L63-64 | Add decorative rotating chevron |
| PDF card meta gray-500 small text borderline | 1.4.3 | Serious (S4) | `.pdf-card` spans L514-526 | Bump to gray-600 |
| PDFs linked, accessibility unverified | 1.1.1 | Moderate (M-a) | resource-grid L512-527 | Verify tagged PDFs / follow-ups |
| External links no new-tab warning | 3.2.2 | Moderate (M-c) | apply / zoom / related links | Add sr-only "(opens in new tab)" |
| Mobile dropdown trigger ARIA | 4.1.2 | Critical (A2) | nav L169 | See A2 |

### welding-stpete.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Hero eyebrow accent-green on green fails contrast | 1.4.3 | Serious (S3) | hero eyebrow L718-719 | Use yellow or white |
| Certification note gray-400 small text fails | 1.4.3 | Serious (S4) | note L1100 `color: var(--color-gray-400)` | Use gray-600 |
| Start Here step icons missing aria-hidden | 1.1.1 | Moderate (M-b) | step btns L776-781 | Add aria-hidden to `<i>` |
| `target="_blank"` missing rel="noopener" | (advisory) | Moderate (M-b) | step links L776-778 | Add rel="noopener" |
| `fa-check-circle` / `fa-calendar-check` missing aria-hidden | 1.1.1 | Moderate (M-b) | L1000, L1098 | Add aria-hidden |
| Dead PDF cards `href="#"` (Program Flyer/Costs) | 2.4.4 | Moderate | L1029, L1039 | Wire real PDFs or mark "coming soon" non-link |
| Accordion expand affordance removed | 1.3.3 | Serious (S5) | `summary` L249 | Add decorative chevron |
| Mobile dropdown trigger ARIA | 4.1.2 | Critical (A2) | nav L619 | See A2 |

### apprenticeships-clearwater.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Hub-hero eyebrow accent-green on green fails contrast | 1.4.3 | Serious (S3) | `.hub-hero .eyebrow` L28 | Use yellow or white |
| Card grid uses canonical `.card` correctly (pass) | - | Pass | L222-240 | - |
| "How it works" step h3 white-on-green-dark OK (~contrast pass) | 1.4.3 | Pass | `.step h3` L47 | - |
| Mobile dropdown trigger ARIA | 4.1.2 | Critical (A2) | nav L113 | See A2 |
| External links (Canvas/Focus/bookstore) no new-tab warning | 3.2.2 | Moderate (M-c) | utility bar + nav | Add sr-only text |

### adult-education-pathways.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Missing `script.js` — mobile menu & search fully broken | 2.1.1 / 2.4.5 | Critical (A1) | end of `<body>` ~L453 | Add `<script src="script.js">` |
| Mobile dropdown trigger ARIA (also depends on A1) | 4.1.2 | Critical (A2) | nav L142 | See A2 |
| Card grid + dual-campus CTA links well-structured (pass) | - | Pass | L314-361 | - |
| External links no new-tab warning | 3.2.2 | Moderate (M-c) | utility bar | Add sr-only text |

### workforce-continuing-education.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Jump-nav `|` separator span aria-hidden (good) | - | Pass | L473 | - |
| `.card--placeholder` "No sessions" pill not a link (good — not a dead link) | - | Pass | L549-568 | - |
| Placeholder card cta gray-600 italic OK | 1.4.3 | Pass | styles L316 | - |
| Linked PDFs unverified | 1.1.1 | Moderate (M-a) | L505, L535 | Verify tagged PDFs |
| External links (Enrole, etc.) no new-tab warning | 3.2.2 | Moderate (M-c) | course cards | Add sr-only text |
| Mobile dropdown trigger ARIA | 4.1.2 | Critical (A2) | nav L299 | See A2 |

### clearwater-contact.html
| Issue | WCAG Criterion | Severity | Element/Line | Suggested Fix |
|-------|---------------|----------|--------------|---------------|
| Utility-bar search is dead `href="#"`, opens nothing | 2.4.4 / 4.1.2 | Serious (S6) | L131 | Make a `<button>` wired to overlay, or remove |
| No `#search-overlay` markup present for the search link | 4.1.2 | Serious (S6) | header block | Add overlay or remove search affordance |
| Contact cards well-structured, descriptive CTAs (pass) | - | Pass | L248-282 | - |
| `page-hero__breadcrumb` "/" separator via `::after` not announced (good) | - | Pass | L18 | - |
| Mobile dropdown trigger ARIA | 4.1.2 | Critical (A2) | nav L151 | See A2 |

---

## Summary Statistics
- Critical issues: 2 distinct (A1 page-specific to adult-education-pathways; A2 sitewide mobile-nav, the M2 carryover)
- Serious issues: 6 (S1, S2, S3, S4, S5, S6)
- Moderate issues: 6 (M-a/M25 carryover, M-b, M-c, M-d, M-e, M-f)
- Pages audited: 7

**Legal/Compliance risk:** MODERATE (up from LOW on the About cluster). Two factors drive it: (1) `adult-education-pathways.html` shipping without `script.js` makes its primary navigation non-operable on mobile, a clean 2.1.1 failure on a public-institution page; (2) the M2 mobile-nav disclosure-ARIA gap is now spread across six new pages while still unresolved. Both are mechanical fixes. Color-contrast on `#8DC63F` text-on-green is the most repeated AA failure and is a one-line token swap per instance.

**Carryovers from issues-tracker:** M2 (mobile nav keyboard) confirmed still open and now restated as A2. M25 (PDF accessibility) confirmed still open, expanded surface (M-a). The M15 decorative-icon sweep held up except for new-page step-button icons (M-b). M29 new-tab announcement pattern was not carried to these pages (M-c).
