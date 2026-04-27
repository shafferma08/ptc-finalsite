# Finalsite CMS Feasibility Review - 2026-04-27

**Persona:** Finalsite Composer power user (50+ school/college builds)
**Scope:** about.html (institutional hub), clearwater-about.html, stpete-about.html
**Reference:** Canonical `.card` component seeded in styles.css 2026-04-26
**Prior tracker:** docs/reviews/issues-tracker.md (M5, M6, M7, M8, M11 specifically called out)

---

## Buildable As-Is

These elements map cleanly to native Composer panels and elements without contortion:

- **Page hero band (about.html):** Maps to a Composer **Banner / Page Header** element with a single background color or gradient and breadcrumb element. The breadcrumb is now semantic `<nav><ol><li>...</li></ol></nav>` (H13 closed) and Composer's built-in breadcrumb element produces the same structure.
- **Mission Statement band (about.html):** Solid green full-width "**Highlight Strip**" panel with center-aligned text. One-column layout, custom background color set on the panel directly.
- **Our Story two-column block (about.html):** Standard **2-column layout** with text in column 1 and image in column 2. The reverse variant (`about-grid--reverse`) maps to the same 2-column element with column order swapped, no custom CSS required.
- **By the Numbers stats row (about.html):** Composer's **Stats / Counter** element supports 4-up number+label layouts natively. Build as a single panel with 4 stat blocks. The 2-column mobile collapse is automatic.
- **Accreditation 3-card row (about.html):** Maps to a **3-column layout** with three Content elements, one per accreditor. Each card has a logo (Image element) + heading + paragraph + contact paragraph. No custom code needed if rebuilt against the canonical `.card` component (currently uses bespoke `.accred-card` instead — see Maintainability Concerns).
- **Annual Impact Report CTA (about.html):** **Single CTA button** in a 1-column panel, linking to the live Finalsite resource PDF. Trivial.
- **Two Campuses Overview (about.html):** Same as Our Story — 2-column reverse layout with image + text + 2 CTA buttons. Built-in.
- **CTA Band (about.html):** Standard sitewide **CTA Strip** panel; identical to the one already wired across other pages.
- **Utility bar, main header, main nav, footer:** All three pages use the same shell components built from the existing partials. These are already understood as Composer **Theme-level Header/Footer/Utility** elements maintained once and inherited everywhere. Nothing campus-About-specific here.

## Needs Custom Code

Items that require a Composer **Custom Code (HTML/CSS) embed** but are still safe and bounded:

- **Vision + Core Values 2-column grid (about.html):** Uses inline `style="display: grid; grid-template-columns: 1fr 1.4fr;"`. The asymmetric 1fr/1.4fr ratio isn't a standard Composer 2-column option (which is 50/50, 33/67, or 67/33). Either: (a) rebuild as 33/67 native 2-column and accept slight visual difference, or (b) drop into a single Custom Code embed. The check-circle bullet list is fine inside either.
- **Mission Statement icon + uppercase label:** The icon (`<i class="fas fa-bullseye">`) plus the small-caps label ("Our Mission") aren't native to Composer's standard text panel. The Highlight Strip can host a single rich-text block, but to get the icon + heading + label stack you'll either use rich text with inline styles or a small custom embed. Keep tokens.
- **History Timeline (about.html):** The `.timeline` element with `::before` pseudo-elements drawing the vertical rail and dot markers is a Composer custom-code candidate. Composer has no native vertical-timeline element. Currently only 2 entries (1962 + Today after the Apr 25 audit pruned 4 unverified entries), so the maintenance load is small, but adding entries in the future will require editing HTML, not a Composer panel.
- **Page Hero (clearwater-about.html and stpete-about.html):** These two pages put **all hero CSS inline** as `style="..."` attributes (lines 158-168 CLW, 157-167 STP). That's actually Composer-friendly because it doesn't depend on a stylesheet rule, but it's noisy and an editor wouldn't know to maintain it. Pull into a `.page-hero` rule in styles.css (already exists in about.html's `<style>` block) and reuse.
- **Accreditation, Records & Compliance card grid (both campus pages):** 7 cards (CLW) / 8 cards (STP), each ~12 lines of inline-styled `<article>`. This is the largest custom-code surface on the campus pages. **Should be migrated to canonical `.card` + `.card-grid`** (see Maintainability Concerns). After migration this becomes a Composer-friendly card grid with an editor-friendly per-card structure.

## Needs Simplification

- **Inline-styled compliance cards (campus About pages):** The cards on clearwater-about.html and stpete-about.html duplicate the same inline-style block 7 and 8 times respectively. Each card has ~6 inline `style="..."` declarations (background, padding, border-radius, border-left, box-shadow, font-family, etc.). In a Composer Custom Code embed this works but it makes per-card edits brittle: a non-technical editor adding a card has to hand-copy a wall of styles. **Replace with canonical `.card.card--accent.card--lift` from styles.css** seeded 2026-04-26. Then each card becomes:
  ```html
  <article class="card card--accent card--lift">
    <div class="card__icon"><i class="fas fa-award"></i></div>
    <h3 class="card__title">Accreditation</h3>
    <p class="card__body">…</p>
    <a href="…" class="card__cta">View accreditation details</a>
  </article>
  ```
  Wrap the set in `<div class="card-grid">`. This collapses ~12 lines per card to ~6 with no inline styles and gives editors a single repeatable pattern.
- **Inline breadcrumb styles (campus About pages):** Same deal — every breadcrumb attribute is inlined. Promote to the existing `.page-hero__breadcrumb` rule already defined in about.html's `<style>` block, and lift that block into styles.css so all three About pages share one source.
- **Three-paragraph "Institutional Context" block (campus About pages):** Two paragraphs of inline-styled prose in a `max-width: 800px` container. Trivial to drop into a Composer 1-column rich-text panel; just remove the inline styles and let the page typography defaults apply.

## Cannot Be Built

Nothing on these three pages is fundamentally incompatible with Finalsite Composer. The patterns used (banner, 2-col, 3-col, card grid, CTA strip, footer) are bread-and-butter Composer panels. **No blockers.**

## Maintainability Concerns

This is where the campus-About symmetry creates the most exposure:

1. **Card markup duplicated 15 times across two campus pages with no shared template.** The compliance card markup is essentially the same on Clearwater and St. Pete (only the heading icon, title, body text, and link change). In Composer, each card lives in a separate Composer "Code" element by default. If Marianne or another editor wants to update the card design (say, change the icon size or border-left color), they have to edit 15 separate Composer instances. **Mitigation:** rebuild against `.card` + `.card-grid` and the design is centralized in styles.css. Editors then only touch text/links per card, not styles.

2. **Two-campus content drift risk for symmetric cards.** Clearwater has 7 cards; St. Pete has 8 (extra Code of Conduct card). 6 of the 7 shared categories have nearly identical body text differing only by campus name and link target. If "Written Plans" gets updated text on Clearwater but not St. Pete, the pages will silently desynchronize. This is exactly the kind of drift the binding-rules two-campus discipline warns about. **Mitigation:** treat the card *structure* as `shared` and the per-card content (link URL, contact email, campus name) as `campus-specific`. In Composer, the cleanest pattern is a **Composer "Snippet"** for each shared card with `[campus]` token replacement, but Composer Snippets don't support per-page token interpolation. Realistic answer: a documented checklist in `docs/audit/follow-ups.md` saying "when you update a Clearwater compliance card, check the matching St. Pete card."

3. **Hero CSS inlined on campus pages, classed on about.html.** The institutional About uses `<style>` block class rules; the two campus Abouts use `style="..."` attributes for the same visual treatment. Editors will look at the Clearwater page, see inline styles, and assume that's the pattern. New campus pages will inherit the bad pattern. **Fix now:** lift the `.page-hero` / `.page-hero__breadcrumb` rules out of about.html's `<style>` block into styles.css and strip the inline styles from the campus pages.

4. **Inline `style="..."` on the campus-page Institutional Context block, all 7 cards, the section header tag, and the breadcrumb.** Roughly 80+ inline style declarations per campus About page. Each one is a future maintenance trap because Composer's WYSIWYG editor will sometimes preserve them and sometimes strip them depending on the panel type.

5. **Leadership Grid placeholder cards (about.html).** The three `.leader-card` blocks use `<i class="fas fa-user">` placeholder icons in a circle (lines 687-703). When real photos arrive these need to become `<img>` elements. The `.leader-card__photo` div uses `display: flex` to center the icon — swapping in an `<img>` will fight that styling. **Fix path:** restructure as `.card.card--lift` with `.card__icon` becoming a `.leader-card__photo` (round image, no flex). Mark this in follow-ups since C3 (leadership representation) is still open.

6. **Two `<style>` blocks on about.html (296 lines of page-specific CSS).** about.html still carries a 296-line page-specific `<style>` block (lines 13-296). This is the M6 pattern flagged in the tracker. In Composer, these styles would need to live in either (a) a page-level Custom Code embed at the top of the page, or (b) be promoted to the theme stylesheet. Option (a) means each editor opening the About page sees a wall of CSS they shouldn't touch. **Recommendation:** promote `.page-hero`, `.about-section`, `.about-grid`, `.mission-statement`, `.accred-card`, `.timeline`, `.about-stats`, `.leadership-grid` to styles.css so the page itself becomes pure markup.

---

## Page-by-Page CMS Mapping

### about.html (Institutional About hub)

| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Utility bar | Theme utility bar | No | Yes | Shared across site |
| Main header / nav | Theme header | No | Yes | Shared dropdown structure already in use |
| Page hero | Banner / Page Header panel | Minimal (gradient + breadcrumb) | Yes | Class-based; promote to styles.css |
| Mission Statement | Highlight Strip panel | Small (icon + label) | Yes | Single full-width strip |
| Vision + Core Values | 2-column layout | Yes (1fr/1.4fr asymmetric ratio) | Yes if migrated | Inline grid styles; consider standard 33/67 |
| Our Story | 2-column (text + image) | No | Yes | Native pattern |
| By the Numbers | Stats / Counter panel | No | Yes | 4-up native, 2-up mobile |
| History Timeline | Custom Code embed | Yes | Medium (HTML edit per entry) | Pseudo-element rail; no native equivalent |
| Accreditation | 3-column with 3 cards | Yes (currently bespoke `.accred-card`) | Risky (M5/M8) | Migrate to `.card.card--accent` |
| Annual Impact Report CTA | 1-column with CTA button | No | Yes | Trivial |
| Leadership Grid | 3-column with cards | Yes | Risky (M7) | Placeholder icons need image swap; restructure on `.card` |
| Two Campuses Overview | 2-column (image + text + 2 CTAs) reverse | No | Yes | Native |
| CTA Band | CTA Strip panel | No | Yes | Sitewide pattern |
| Footer | Theme footer | No | Yes | Shared |

### clearwater-about.html

| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Utility bar (campus) | Theme campus utility bar | No | Yes | Already campus-shelled |
| Campus header / 5-pillar nav | Theme campus header | No | Yes | Already campus-shelled |
| Page hero | Banner / Page Header panel | Yes (currently all inline styles) | No until classes promoted | Strip inline styles, reuse `.page-hero` from about.html |
| Institutional Context (link to About) | 1-column rich-text panel | Yes (currently inline styles) | Yes if cleaned | Two paragraphs; remove inline styles |
| Accreditation, Records & Compliance grid | Card Grid panel (7 cards) | Yes (heavily inlined) | **No, until migrated** | M5 + M8 directly apply; migrate to `.card.card--accent.card--lift` + `.card-grid` |
| Footer (campus) | Theme campus footer | No | Yes | Shared |

### stpete-about.html

| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Utility bar (campus) | Theme campus utility bar | No | Yes | Already campus-shelled |
| Campus header / 5-pillar nav | Theme campus header | No | Yes | Already campus-shelled |
| Page hero | Banner / Page Header panel | Yes (currently all inline styles) | No until classes promoted | Same fix as Clearwater |
| Institutional Context (link to About) | 1-column rich-text panel | Yes (currently inline styles) | Yes if cleaned | Same fix as Clearwater |
| Accreditation, Records & Compliance grid | Card Grid panel (8 cards) | Yes (heavily inlined) | **No, until migrated** | Same fix as Clearwater; +1 Code of Conduct card |
| Footer (campus) | Theme campus footer | No | Yes | Shared |

---

## Tracker Issue Cross-Reference

The reviewer was specifically asked to flag M5, M6, M7, M8, and M11 against these three pages.

- **M5 (card styling fragmentation):** **APPLIES, strongly.** about.html still uses `.accred-card`, `.leader-card`, and `.about-stat` rather than `.card`. Both campus About pages use bespoke inline-styled `.compliance-card` rather than the canonical component seeded six days ago. **All three pages should migrate to `.card.card--accent` (with `.card--lift` for the campus compliance grids).** This is the single biggest cleanup that would make all three pages Composer-friendly in one pass.

- **M6 (duplicate CSS across page-specific styles):** **APPLIES, strongly.** about.html carries a 296-line `<style>` block at the top with `.page-hero`, `.about-section`, `.about-grid`, `.mission-statement`, `.accred-card`, `.timeline`, `.about-stats`, `.leadership-grid` all defined locally. None of those rules exist in styles.css, so the campus About pages can't reuse them — that's why they fall back to inline styles. Promote the about.html style block into styles.css and the campus pages immediately become cleaner. (Same M6 pattern flagged on admissions.html and the welding pages.)

- **M7 (faculty resources visibility / staff directory link):** **APPLIES on about.html.** The Leadership Grid uses placeholder `<i class="fas fa-user">` icons and the "View Full Staff Directory" CTA still points to `#`. C3 in the tracker is the same issue, scoped tighter. Campus About pages don't have a leadership/staff section so the issue is contained to about.html.

- **M8 (missing accreditation report links):** **PARTIALLY APPLIES.** Campus About pages now link directly to live `clearwater.myptc.edu` and `stpete.myptc.edu` accreditation pages and to the live PDF catalogs / written plans / safety reports / SIP / financial accountability — that's good. about.html's Accreditation section, however, still doesn't link out to the actual COE accreditation report PDF or to the Cognia status page; it just describes the accreditors. Closing M8 fully would mean adding "View Report" links inside each `.accred-card` on about.html.

- **M11 (hero image carousel):** **DOES NOT APPLY** to these three pages. None of them carry a slideshow/carousel; they all use static gradient hero bands. Marianne can keep this issue scoped to index.html.

---

## New One-Off Styles Introduced 2026-04-26 (Campus About Splits)

The campus About pages were built fresh on 2026-04-26 as part of slimming the campus homepages. The new patterns introduced:

1. `<section class="campus-compliance" id="compliance">` — new section class, only used on these two pages.
2. `<div class="campus-compliance-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">` — inline grid identical in shape to the existing `.card-grid` (which uses `minmax(280px, 1fr)`). **Replace with `.card-grid`.**
3. `<article class="compliance-card" style="...6 declarations...">` — bespoke card pattern repeated 15 times across the two pages. **Replace with `.card.card--accent.card--lift`.**

None of these classes (`campus-compliance`, `campus-compliance-grid`, `compliance-card`) exist in styles.css. They're all expressed entirely through inline styles. From a Composer-maintenance lens this is actively painful: a non-technical editor adding a 9th card to St. Pete needs to:

1. Open the page in Composer's HTML view
2. Find the last `<article class="compliance-card" style="...">` block
3. Copy ~12 lines of HTML+styles
4. Paste, and edit only the icon/title/body/link parts inside the wall of inline `style=""` attributes

That's a recipe for broken cards. **The fix is the canonical `.card` migration.** After migration, adding a 9th card is:

1. Open in Composer
2. Add a new card by duplicating the Composer card panel (or by pasting `<article class="card card--accent card--lift">…</article>`)
3. Edit only the text/link

---

## Top 3 Issues (ranked by implementation risk)

1. **Compliance card grids on both campus About pages need migration to `.card` + `.card-grid` before Composer migration.** Without it, the 7 (CLW) and 8 (STP) cards each carry their own inline-style wall, and editors will not be able to add/remove cards reliably in Composer. This is M5 active and concrete on the newest pages in the redesign. Two-campus drift risk amplifies it: any style change to one campus's cards must be hand-replicated on the other. **Highest risk because the pages were built 2026-04-26 and immediately codified the old fragmented pattern instead of using the component that was seeded the same day.**

2. **about.html's 296-line page-local `<style>` block has to be promoted to styles.css before this page can move into Composer.** The block defines page-hero, mission-statement, timeline, accreditation cards, leadership grid, and about-stats — none of which exist in the shared stylesheet. In Composer, that block would have to live as a Custom Code embed at page top, which means every editor opening the page sees a wall of CSS. M6 directly applies. Promoting to styles.css also unblocks the campus About pages from their inline-style fallback pattern.

3. **Campus About symmetry creates content-drift exposure that Composer cannot solve structurally.** Clearwater's 7 compliance cards and St. Pete's 8 share nearly identical body text on 6 of the 7 shared categories. Composer has no clean cross-page Snippet mechanism for "the same body text with one campus name and one URL swapped." This is a documentation problem, not a code problem: log the symmetric-cards pair in `docs/audit/follow-ups.md` with an explicit "edit-both-or-neither" note for each shared card category, and treat the structure as `shared` while the URLs/emails/campus names are `campus-specific`. Without that note, future editors will only update one side.
