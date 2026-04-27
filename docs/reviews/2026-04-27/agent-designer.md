# Visual Design Review - 2026-04-27

Reviewer: Senior UI/UX Designer (persona)
Pages reviewed:
- `about.html` (institutional About hub)
- `clearwater-about.html` (Clearwater campus About)
- `stpete-about.html` (St. Pete campus About)
Reference: `styles.css` (canonical `.card` component seeded 2026-04-26, lines 187-299)
Tracker reference: `docs/reviews/issues-tracker.md` (M5, M6, H7)

---

## Design System Consistency

The redesign now has a clean, well-documented canonical `.card` component in `styles.css` lines 207-299 (with `card--accent`, `card--accent-light`, `card--lift`, `card--placeholder` modifiers and `card__icon`, `card__title`, `card__body`, `card__cta` inner structure, plus `.card-grid` and `.card-grid--tight` containers). The system is good. The problem is that none of the three About pages actually use it.

Each of the three pages instead defines its own card pattern:

| Page | Card class used | Grid class | Style location |
|---|---|---|---|
| `about.html` | `.accred-card`, `.leader-card` | `.accred-cards`, `.leadership-grid` | inline `<style>` block (lines 13-296) |
| `clearwater-about.html` | `.compliance-card` | `.campus-compliance-grid` | inline `style=""` attributes on every element |
| `stpete-about.html` | `.compliance-card` | `.campus-compliance-grid` | inline `style=""` attributes on every element |

Visually the result is consistent enough that a casual viewer wouldn't notice, because all three patterns happen to land on the same green left-border + white card + 1.5rem padding aesthetic. But systemically this is the exact fragmentation M5 was flagged for, plus an even worse variant: `clearwater-about` and `stpete-about` use **inline styles on every element** rather than even a page-level `<style>` block. That cannot be maintained in Composer and cannot be themed if the brand evolves.

### M5 status: still open, and now worse

M5 ("Card styling fragmentation - .step-card/.info-card/.testing-type vary") is **NOT resolved on these pages**. The new `.compliance-card` is yet another one-off variant that duplicates what `.card.card--accent` already does. The campus About pages were built 2026-04-25 (per the HTML comment) but the canonical `.card` component was seeded 2026-04-26. So they pre-date the canonical pattern by roughly a day, but they should be migrated now that the system exists.

### M6 status: still open

M6 ("Duplicate CSS across page-specific style blocks") is **partially worse**: `about.html` still has its 280-line page-specific `<style>` block (lines 13-296) duplicating what tokens and components already exist. The two new campus pages avoided a `<style>` block but only by inlining the same declarations on every article element, which is even harder to consolidate.

### H7 status: only partially addressed on about.html

H7 ("Mobile responsiveness - fixed font sizes on About/Admissions pages") is **partially addressed**. The styles.css globals use `clamp()` for hero and section titles (lines 779, 982). But the inline styles on `clearwater-about.html` and `stpete-about.html` hero `<h1>` (`font-size: 2.5rem`) and the page-hero `<p>` (`font-size: 1.15rem`) are fixed pixels, bypassing the `clamp()` rules from styles.css. On `about.html`, the page-specific `.page-hero__title` is also fixed at 2.5rem (line 48) with a single 2rem mobile override at 768px. There's no fluid scaling between 320px and 768px on any of the three.

---

## Color & Typography

### Palette use: solid

PTC brand colors are used purposefully on all three pages.
- Primary green `#008142` is the dominant accent for hero gradients (`linear-gradient(135deg, var(--color-green) 0%, #006634 100%)`), card left borders, link colors, button fills, icon strokes, and timeline elements.
- The hero gradient ending at `#006634` (a darker shade) is consistent across all three page-hero blocks. Good.
- Yellow `#FFCF01` appears as the focus-visible outline (via the global `:focus-visible` rule) and the `.btn--accent` "Apply Now" CTA fill in the cta-band on `about.html`. It's used sparingly and intentionally as the action-prompt color, which is correct.
- Accent green `#8DC63F` doesn't appear on these pages. That's fine for an institutional About; the secondary green is more appropriate for program/lifestyle areas.

### Typography hierarchy: clear but inconsistent in size

`var(--font-heading)` (Roboto Slab) is correctly used for all H1/H2/H3 across all three pages. Body uses Roboto via the inherited cascade. So far so good.

But heading sizes drift between pages:
- `about.html` page hero h1: 2.5rem (line 48); section h2 inside `.about-grid__content`: 1.85rem (line 80); accreditation card h3: 1.1rem (line 146).
- `clearwater-about.html` / `stpete-about.html` page hero h1: 2.5rem inline (matches); section h2 inside `.section-header__title`: comes from styles.css line 982 (clamp 1.75-2.5rem); compliance card h3: 1.1rem inline (matches).

So H1 and H3 align across pages, but H2 differs because `about.html` rolls its own and the campus pages use `.section-header__title`. Pick one. The `.section-header` component is the canonical pattern for section intros, so `about.html` should use it everywhere it currently uses ad-hoc `<h2>` tags inside `.about-grid__content` and "Two Campuses, One Mission".

### Contrast: passing

The 2026-04-24 `--color-gray-600` bump (from #6B7280 to #4B5563) carries across to the inline styles that reference `var(--color-gray-700)` (#374151) for body text on white. All body copy in the compliance cards (`color: var(--color-gray-700)` on `var(--color-white)`) is well over WCAG AA. Hero subtitle at `opacity: 0.92` on the green gradient passes large-text AAA. No issues.

### One typography niggle

On `clearwater-about.html` line 178 and `stpete-about.html` line 177, the institutional context paragraph reads "the Clearwater Campus campus" / "the St. Petersburg Campus campus" - duplicate "Campus." That's a content bug not a design bug, but it's visible in body type so worth flagging.

---

## Layout & Spacing

### `about.html`: solid bones, too many magic numbers

The page-hero (4rem 0 3rem), about-section (4rem 0), mission-statement (4rem 0), and cta-band cadence creates a comfortable rhythm. The 3rem grid gap on `.about-grid` and 2rem on `.accred-cards` and `.leadership-grid` are reasonable.

But the spacing values are scattered as raw rems rather than tokens. styles.css doesn't expose spacing tokens like `--space-section` or `--space-grid-gap`, so each page reinvents them. That's a styles.css gap rather than a page bug, but it shows up here as drift risk.

### Campus About pages: clean compliance grid

The `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` on `.campus-compliance-grid` is the right responsive choice for a card grid of indeterminate length. At narrow widths it wraps to one column without media queries. Good. Gap of 1.5rem and 2.5rem top margin from the section header read well.

The two campus pages are intentionally near-symmetric (7 cards CLW / 8 cards STP, with STP's extra "Code of Conduct" card). With `auto-fit` the asymmetry is invisible: both wrap cleanly. Smart layout choice.

### Spacing inconsistency: page-hero padding

- `about.html` page-hero: `padding: 4rem 0 3rem` (line 18).
- `clearwater-about.html` and `stpete-about.html` page-hero: `padding: 4rem 0 3rem` inline (lines 158/157).

These match, which is good. But because they're defined three times in three different places, if anyone edits one they'll forget the others.

### Body container constraints

`about.html` lets `.about-section .container` use the global container width. The campus About pages have an institutional-context section with `max-width: 800px` inline (lines 176/175). That narrower measure for that one paragraph block is a nice typographic choice (~75 char line), but no other body section on the campus About has the same narrowing, so there's a visual jump from 800px reading column to 1200+ px card grid below. Either commit to the narrower reading column for all paragraph-only sections or remove the 800px override and let the section breathe at full width.

---

## Interactive Elements

### Buttons: consistent

`.btn`, `.btn--primary`, `.btn--accent`, `.btn--outline`, `.btn--outline-white`, `.btn--lg`, `.btn--sm` all come from styles.css and are used correctly. The primary CTA button on `about.html` "View Annual Impact Report (PDF)" and "View Full Staff Directory" both use `.btn.btn--primary` (line 670, 705). The cta-band uses `.btn--accent` for the yellow Apply Now and `.btn--outline-white` for Request Info. Hierarchy reads correctly.

### Card CTAs: inconsistent with canonical pattern

The compliance cards on the campus pages each end with an `.inline-link` styled inline as `font-weight: 600; color: var(--color-green); font-size: 0.9rem;`. This is functionally what `.card__cta` does in the canonical component (line 269-278: `color: var(--color-green); font-weight: 700; font-size: 0.9rem;`). The weight is 600 instead of 700, and the anchor doesn't `margin-top: auto` so cards with shorter copy don't visually align their CTAs to the bottom edge. If you eyeball the live grid, the "View accreditation details" link sits higher than "View all plans" because the Written Plans card has a longer description. Migrating to `.card__cta` would fix that.

### Hover states: thin

The accred-cards on `about.html` have no hover state at all (line 131-138: just border + shadow at rest). The leader-cards have no hover. The compliance-cards on the campus pages have no hover. The canonical `.card--lift` modifier exists specifically to add a translateY(-2px) + shadow lift on hover (lines 224-231), and these card grids would feel more interactive with it. Right now they read as static info blocks rather than as clickable cards even though the entire body of each card is conceptually a path to documentation.

### Focus states: covered globally

The global `:focus-visible` rule (3px yellow outline) from styles.css applies to all anchors and buttons on these pages because they aren't overridden. Good carryover from the H10 fix.

### Active states: not defined anywhere

No `:active` press states on cards, buttons, or links. This is a polish gap, not a bug.

---

## Visual Hierarchy

### `about.html`: well-prioritized

The page reads top-to-bottom as:
1. Page hero (institutional intro)
2. Mission (solid green slab with center-aligned quote, very high visual weight)
3. Vision + core values (alternating white-on-off-white)
4. Our story (text+image two-column)
5. Stats row (green numerals on off-white, big visual punch)
6. History timeline (vertical timeline with green markers)
7. Accreditation (card grid)
8. Annual impact report (single CTA)
9. Leadership (3 placeholder cards - C3 critical, still open)
10. Two campuses, one mission (text+image, reverse layout)
11. CTA band

The pacing alternates white / off-white / green / white / off-white correctly. Mission is the loudest moment. Stats and CTA band are the second-tier visual punctuation. Body sections sit quietly between. This is good information architecture.

The leadership section (lines 680-708) currently shows placeholder icons in gray circles. From a designer's standpoint these read as "broken" rather than as "team coming soon." Either replace with real photos (C3) or use `.card--placeholder` from the canonical pattern, which is explicitly designed for the "coming soon" state with a gray border and italicized CTA. Right now they look like missing-image errors.

### Campus About pages: hierarchy is correct but flat

Hero -> institutional context paragraph -> "Accreditation, Records & Compliance" section -> footer.

That's a thin page. Only 3 visual moments (hero, paragraph block, card grid). The page title promises "About PTC Clearwater Campus" / "About PTC St. Petersburg Campus," but what gets delivered is essentially a compliance document index. This is exactly what the cluster decision said it would be (per the issues tracker comment in the project context: "campus About pages slimmed to compliance + records"), but visually the disconnect between the warm institutional hero and the dry compliance grid is jarring.

Suggested fix: add a thin header above the compliance grid ("Required institutional documents for the [Campus] campus") so the section reads as authoritative-by-design rather than as a documents dump. Or add a campus-photo strip at the top of the compliance section to break up the long card list and reinforce campus identity.

### Authority on the Accreditation/Records/Compliance section

The section header pattern (`.section-header__tag` "Campus Documents" + `.section-header__title` "Accreditation, Records & Compliance") is good and reads as institutional. The card grid below is clear, scannable, and uses iconography (`fa-award`, `fa-book`, `fa-clipboard-list`, `fa-chart-line`, `fa-shield-alt`, `fa-dollar-sign`, `fa-folder-open`, `fa-balance-scale` for STP code of conduct) to differentiate document types at a glance. The icons are doing real work, not decoration. This reads authoritative.

The two-line description + green CTA inside each card is the right amount of information density for compliance docs. A parent or auditor scanning for "where's the safety report?" can find it in two seconds.

What undermines authority: the inline-styled implementation. Any senior reviewer (and your accrediting bodies do hire those) glancing at the rendered HTML will see the inline-style soup and question maintenance discipline. Migrating to canonical `.card.card--accent.card--lift` with `card__title`, `card__body`, `card__cta` would render the same visually but signal the institutional-grade engineering that backs up the institutional-grade content claims.

---

## Pattern Library Compliance

This is the area where the most work is needed. None of the three pages is using `.card` or `.card-grid`. Both canonical replacements exist, are documented in styles.css (with usage examples in the comment block at lines 187-205), and would be drop-in.

### Migration map

#### `about.html`

**Accreditation cards** (lines 621-651) - currently `.accred-card` inside `.accred-cards` grid
- Replace with `.card.card--accent` inside `.card-grid--tight`
- Move logo into `.card__icon` slot (40-60px is fine, the canonical 44x44 will need an override or accept that the logo gets boxed)
- `.accred-card__name` -> `.card__title`
- `.accred-card__desc` + `.accred-card__contact` -> `.card__body`
- The `.accred-card__contact` is a sub-block with a top border; that's not a canonical card primitive. Either accept it as the only `.card__body` and use a `<hr>` or `<div class="card__meta">` that gets added to the canonical primitive list. Recommend the latter.

**Leadership cards** (lines 687-703) - currently `.leader-card` with placeholder photo
- Replace with `.card.card--placeholder` (the placeholder modifier exists for exactly this state)
- Eliminates the page-specific `.leader-card__photo` 120x120 circle CSS
- `.card__icon` (gray-400 in placeholder mode) is the right slot for the user icon
- `.card__title` for name, `.card__body` for title
- When real photos arrive, swap to `.card.card--lift` and replace `.card__icon` with an `<img>` styled identically

#### `clearwater-about.html` / `stpete-about.html`

**Compliance cards** (CLW lines 197-237 / STP lines 196-242) - currently `.compliance-card` inline-styled
- Replace each with `.card.card--accent.card--lift` (you already have the green left border via `card--accent`; `card--lift` adds the missing hover state)
- Each card's `<i class="fas fa-award" ...></i>Heading` pattern should split: the icon goes into `.card__icon` (canonical 44x44 green badge), the heading text into `.card__title`. Right now icon + heading text are jammed into a single `<h3>` which is fine semantically but loses the canonical visual rhythm.
- Body paragraph -> `.card__body`
- "View accreditation details" `<a>` -> `.card__cta` (gets the `margin-top: auto` for vertical alignment across cards of different copy lengths)

**Grid container** (CLW line 194 / STP line 193) - currently `.campus-compliance-grid` with inline grid template
- Replace with `.card-grid` (default 280px minmax) or keep `.campus-compliance-grid` as a thin wrapper if you need the 300px minimum, but at minimum extract the inline styles into a single rule

After migration, the entire compliance section on the campus pages would shrink from ~50 lines per card with inline styles to ~10 lines per card using semantic classes. That's the M6 win.

### Section header pattern: correctly used on campus pages, mixed on about.html

`.section-header.section-header--center` with `.section-header__tag` and `.section-header__title` is the canonical section-intro pattern. The campus About pages use it correctly (CLW line 190, STP line 189). `about.html` uses it for the stats, history, accreditation, impact report, and leadership sections - good. But `about.html` also has section h2s inside `.about-grid__content` ("Our Story" line 540, "Two Campuses, One Mission" line 717) that don't use the section-header pattern, so those sections lack the eyebrow tag and the centered visual hierarchy that the others have. Inconsistent.

---

## Page-by-Page Notes

### about.html

**What works**
- Hero gradient + breadcrumb + title + subtitle reads cleanly and matches campus pages.
- Mission slab is high-impact and brand-correct.
- Vision + core values grid (1fr 1.4fr) is a creative way to handle asymmetric content (1 sentence vision vs 7 bullet values) without padding either side.
- Timeline component is restrained and on-brand. The decision to delete unverified entries (per the comment at lines 598-602) and leave only "1962" and "Today" is content-honest, but visually the timeline looks sparse with just two dots. Consider whether a single-line "Established 1962. Today serving 5,000 students..." statement might land better than a 2-dot timeline that reads as "we're missing data."
- Stats row is a strong second visual moment, with green numerals doing the work.
- Source citation under stats (line 580) is a nice editorial touch for institutional credibility.

**What needs work**
- 280-line `<style>` block duplicates patterns that already exist in styles.css.
- Accred-cards and leader-cards should migrate to `.card`.
- Two-camera (text+image) sections use ad-hoc `.about-grid` instead of an existing component (none exists yet, so this is acceptable, but it should be promoted to styles.css).
- Leadership section's placeholder icons read as broken images, not as "coming soon."
- "Two Campuses, One Mission" h2 lacks the section-header eyebrow tag that other sections have.
- Annual Impact Report section is a single button on a wide page; it feels under-designed compared to the timeline above and accreditation below. Consider giving it a bordered card or supporting visual.

**Suggested fix**
Migrate `.accred-card` and `.leader-card` to `.card.card--accent` and `.card.card--placeholder` respectively. Delete the corresponding rules from the page `<style>` block. For the "Our Story" and "Two Campuses" sections, add `.section-header` blocks above the content so they match the rhythm of the rest of the page.

### clearwater-about.html

**What works**
- Hero + breadcrumb + institutional-context paragraph + compliance grid is a clean 3-beat structure.
- 7 compliance cards cover the COE-required document set well.
- Auto-fit grid handles 7 cards gracefully across viewport widths (3-2-1 at desktop/tablet/mobile).
- Icons differentiate document types at a glance.
- The institutional context paragraph at the top is a smart deflection: it tells visitors "you want institutional info, click About PTC; you want this campus's docs, scroll down."

**What needs work**
- Every element in the compliance section is inline-styled. This is unmaintainable in Composer and a pattern-library violation.
- "the Clearwater Campus campus" duplicate word in the institutional context paragraph (line 178).
- No campus photography or campus-specific visual moment between the hero and the compliance grid. The page reads as a documents repository, which is correct content-wise but cold visually for an "About this campus" entry point.
- Footer tagline reads "since 1961" while the institutional About page says "since 1962" (line 762 of `about.html`). Pick one. (Also flagged as a content-accuracy item but it's visible in body type.)

**Suggested fix**
1. Migrate `.compliance-card` to `.card.card--accent.card--lift` with `card__icon`, `card__title`, `card__body`, `card__cta` inner classes; migrate `.campus-compliance-grid` to `.card-grid`. Move the `border-left: 4px solid` and `box-shadow` declarations out of inline styles entirely; they already live in `.card--accent`.
2. Fix the duplicate "Campus campus" copy bug on line 178.
3. Reconcile the 1961 vs 1962 footer tagline date (this should follow from the verified content audit).
4. Optional: add a single campus photo strip above the compliance grid to differentiate from St. Pete.

### stpete-about.html

**What works**
- Same clean 3-beat structure as Clearwater. Symmetry is intentional and reads correctly.
- 8 compliance cards (vs Clearwater's 7) handle the extra Code of Conduct without disrupting the grid.
- Adding `fa-balance-scale` for the Code of Conduct is the right icon choice.
- Hero subtitle on STP explicitly mentions "code of conduct" (line 166), making the asymmetry visible at the page level rather than letting it surprise users in the grid below. Good narrative move.

**What needs work**
- Same inline-style problem as Clearwater.
- Same "St. Petersburg Campus campus" duplicate-word bug on line 177.
- Same 1961 in footer tagline (line 256) which conflicts with the institutional 1962 claim.
- One link mismatch: card 4 (School Improvement Plan) ends with "Download PDF" copy but uses the `fa-external-link-alt` icon instead of `fa-file-pdf` (line 217). Card 5 below it is "Code of Conduct" with the correct `fa-file-pdf`. Worth aligning.

**Suggested fix**
1. Same migration to canonical `.card` pattern as Clearwater.
2. Fix duplicate "Campus campus" on line 177.
3. Reconcile 1961/1962 in footer tagline.
4. Swap line 217 icon to `fa-file-pdf` to match the "Download PDF" affordance of cards 2 and 5.

---

## Top 3 Issues (ranked by visual impact)

### 1. Three pages, three card patterns, none using the canonical `.card` (M5/M6 still open)

The canonical `.card` component was seeded specifically to consolidate card fragmentation. The two new campus About pages were built one day before the canonical seeding and the institutional About page predates both. None of the three has been migrated. The visual result happens to look reasonably consistent because all three pages independently chose green left-borders and white card backgrounds, but systemically this is fragile: edits to any one will drift, and the `clearwater-about.html` / `stpete-about.html` use inline styles on every element which is the worst variant.

**Fix:** Migrate `.accred-card`, `.leader-card`, and `.compliance-card` to `.card.card--accent` (or `.card--placeholder` for leadership) inside `.card-grid` containers. Move `.compliance-card` away from inline styles entirely. Estimated 90 minutes across all three pages. After migration, the about.html page-specific `<style>` block can shrink by ~80 lines, and the campus pages lose ~40 lines of inline styling each.

### 2. Inline styles on the campus About pages (M6 manifestation, also a Composer-feasibility concern)

Every `<article class="compliance-card">` carries a string of inline declarations. This is a worse outcome than `about.html`'s `<style>` block because inline styles can't be themed, can't be overridden by stylesheets without `!important`, and won't transfer cleanly into Finalsite Composer page templates (Composer's element styler operates on classes, not inline attributes). The Finalsite reviewer in prior panels has flagged this exact pattern as a migration risk.

**Fix:** Pull all repeated inline styles into a `.compliance-card` rule in styles.css OR (better) migrate the markup to canonical `.card.card--accent.card--lift`. Either way the inline-style soup must come out before this template ships to Composer.

### 3. Leadership placeholder cards on `about.html` read as broken, not as "coming soon"

Three identical user-icon-in-gray-circle placeholders with "Campus Director / Clearwater Campus" labels read to a casual viewer as "the photos failed to load" rather than as "we're working on it." This affects perceived institutional polish on the most-visited About page. C3 in the tracker is the content fix (real photos), but the design fix is independent: use `.card--placeholder` so the gray-with-italicized-CTA treatment communicates state explicitly.

**Fix:** Replace `.leader-card` markup with `.card.card--placeholder` for now. When real headshots arrive (resolving C3), swap to `.card.card--lift` and replace `.card__icon` with the headshot `<img>`.

---

## Issue Tracker Mapping

For the `issues-tracker.md` 2026-04-27 update:

- **M5 (Card styling fragmentation):** Status remains **Open**. The canonical `.card` was seeded but none of the three About pages has migrated. Recommend updating the tracker note from "Open" to "Open, canonical component seeded 2026-04-26, page migrations pending" to capture that the mechanism for resolution exists.
- **M6 (Duplicate CSS / page-specific style blocks):** Status remains **Open**. The campus About pages avoided a `<style>` block by inlining; that's not progress. Same recommended note as M5.
- **H7 (Mobile responsiveness, fixed font sizes):** Status remains **Partially Addressed**. styles.css globals use clamp() but the inline page-hero sizes on all three About pages are fixed pixels and bypass the global rules.

No new issues need to be opened beyond what's covered above; everything traces back to existing M5/M6/H7 entries plus the leadership-placeholder content/design coupling under C3.

---

End of review.
