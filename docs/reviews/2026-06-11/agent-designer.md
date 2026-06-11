# Visual Design Review - 2026-06-11

Reviewer: Senior UI/UX Designer persona
Scope: Programs Waves 0-7 + new hubs/nav. Pages reviewed: `programs.html`, `practical-nursing-clearwater.html`, `welding-stpete.html`, `apprenticeships-clearwater.html`, `adult-education-pathways.html`, `workforce-continuing-education.html`, `clearwater-contact.html`. Reference: `styles.css` token system + canonical `.card` component. Prior issues in scope: M5 (card fragmentation), M6 (duplicate CSS).

## Headline

The brand language (green/yellow palette, Roboto + Roboto Slab, green-gradient heroes, yellow accent strips) is recognizable across all seven pages, so a visitor never feels like they left the site. But these pages were clearly built by different agents in different sessions, and it shows under the hood: there are at least **three distinct hero patterns**, **three distinct breadcrumb implementations**, **two card systems running in parallel** (the canonical `.card` and a pile of page-local one-offs), and a heavy reliance on inline `style="..."` for typographic hierarchy. M5 and M6 are not closed; on the new Programs pages they have actually **regressed**. The good news is that the two newest hub pages (`apprenticeships-clearwater.html`, `adult-education-pathways.html`, `workforce-continuing-education.html`) prove the team can build correctly on the canonical system, so the fix is convergence, not invention.

---

## Design System Consistency

**Two clear tiers of compliance among the reviewed pages:**

- **Canonical-aligned (good):** `apprenticeships-clearwater.html`, `adult-education-pathways.html`, `workforce-continuing-education.html` all use `<article class="card card--accent card--lift">` with `.card__icon / .card__title / .card__body / .card__cta` inside `.card-grid`. This is exactly the pattern the styles.css comment block (lines 227-238) prescribes. These three are the model for the rest of the site.
- **One-off / pre-canonical (drift):** `programs.html` rolls its own `.prog-card` (41 instances), `practical-nursing-clearwater.html` and `welding-stpete.html` each carry 300-500 line page-local `<style>` blocks with bespoke `.credential-card`, `.info-card`, `.pdf-card`, `.counselor-card`, `.video-card`, `.accordion-item`, and `clearwater-contact.html` introduces yet another `.contact-card` that visually duplicates the canonical `.card` almost exactly.

**Hero pattern fragmentation (4 variants across 7 pages):**
1. `.page-header` (centered, solid `--color-green`) on `programs.html`
2. `.program-hero` (split text/image grid, `--color-green-dark` gradient) on the two program detail pages
3. `.hub-hero` (left-aligned, gradient, eyebrow) on `apprenticeships-clearwater.html`
4. `.page-hero` (left-aligned, gradient, breadcrumb-in-hero) on `adult-education-pathways.html`, `workforce-continuing-education.html`, `clearwater-contact.html`

Variants 3 and 4 are nearly identical in intent (gradient hero, eyebrow/breadcrumb, clamp title) but use different class names and slightly different gradients (`--color-green` to `#006634` vs `--color-green-dark` to `#004d29`). These should be one component. None of these four hero patterns live in `styles.css`; every page redefines its hero from scratch.

**Breadcrumb fragmentation (3 implementations):**
- `.breadcrumb-bar` (separate gray bar below header, FontAwesome chevron `\f054` separator) on the program + apprenticeship pages
- `.page-hero__breadcrumb` with `\203A` (›) separator on `adult-education-pathways.html` and `workforce-continuing-education.html`
- `.page-hero__breadcrumb` with literal `"/"` separator on `clearwater-contact.html` (line 18) — a third separator glyph

So three pages that share the `.page-hero__breadcrumb` class name don't even agree on the separator character. Pick one breadcrumb component and one separator glyph sitewide.

---

## Color & Typography

**Palette is mostly on-brand and consistent.** Green `#008142`, green-dark `#006B36`, yellow `#FFCF01` tokens are used correctly for primary actions, accent strips, and hero gradients. Concerns:

- **Raw hex outside the token system.** Multiple pages hardcode greens that aren't tokens: `#006634` (hero gradient end on three pages), `#004d29` (hero gradient end on program/apprenticeship pages), `#1a2b22` (`.wf-campus-badge--clearwater` in workforce). These are all "a dark green" but none match `--color-green-dark` (`#006B36`), so the dark-green endpoint of the brand drifts page to page. Promote one hero gradient and one dark-green to tokens.
- **Non-brand accent colors creeping in.** `programs.html` `.campus-tag` uses `background:#e0f2fe; color:#0284c7` (a sky blue) for the campus pill — off-palette for PTC. The PDF-card icon uses red `#dc2626` on `#fee2e2`, the credential-type pills use amber `#fef3c7/#92400e`. Some of these (PDF red) are arguably conventional, but the blue campus tag is a brand inconsistency that should move to green/gray.
- **`--color-accent` vs `--color-yellow` ambiguity.** Pages reference both `var(--color-accent)` and `var(--color-yellow)` for what appears to be the same yellow (e.g., welding hero eyebrow uses `--color-accent`; nursing hero counselor link uses `--color-yellow`; welding video play hover has `var(--color-accent, #FFCF01)` with a hardcoded fallback). Whether these resolve to the same value or not, the inconsistent variable name means an editor changing the brand yellow could miss half the usages. Standardize on one token name.

**Typography hierarchy is correct but delivered the wrong way.** Roboto Slab headings / Roboto body is consistent. The problem is **how** hierarchy is applied: the program pages set heading sizes, colors, line-heights, and margins through inline `style="font-family: var(--font-heading); font-size: clamp(...); ..."` on nearly every `<h1>/<h2>/<h3>/<p>`. This is the single biggest CMS-maintainability risk in the set (see Pattern Library + Top Issues). Heading sizes also vary ad hoc: section `<h2>` is `2.25rem` in one video block, `1.85rem` in `.wf-section__heading`, `1.5rem` and `1.75rem` elsewhere, with no shared type scale.

**Contrast:** Generally fine. The green gradients carry white text well. One watch item: `clearwater-contact.html` and the two `.page-hero` pages still use `opacity: 0.85` on the in-hero breadcrumb (lines 15-21 / 20-24), which was specifically removed from `about.html` under resolved issue L11 for borderline contrast. The breadcrumb-in-hero pattern reintroduced the exact thing L11 fixed.

---

## Layout & Spacing

- **Section padding is inconsistent across the program pages:** sections use `padding: 5rem 0` (program detail pages) but the hub pages use `padding: 4rem 0`. Within a single program page the vertical rhythm is fine, but a user moving from a hub page to a program page will feel the density change. A shared section spacing token (`--section-pad`) would lock this.
- **Container max-widths vary per section via inline styles:** `max-width: 900px`, `1000px`, `750px`, `760px`, `860px` all appear as inline overrides inside the program pages. This is reasonable editorial control but it's invisible to a CMS editor and impossible to keep consistent across new pages.
- **Grid usage is solid where the canonical grid is used.** `.card-grid` (auto-fit, minmax 280px) gives clean responsive reflow on the three hub pages. The one-off grids (`.programs-list` minmax 300px, `.contact-grid` minmax 300px, `.info-card-grid-2` fixed `1fr 1fr`, `.video-grid` `repeat(2,1fr)`) all reinvent the same responsive-grid behavior with slightly different breakpoints. `.programs-list` and `.contact-grid` are functionally `.card-grid` and could just use it.
- **`programs.html` filter bar negative margin:** `.filters { margin: -2rem auto 3rem }` pulls the filter card up over the green header. It works visually but is the same fragile negative-margin pattern that resolved issue M4 replaced with a transform elsewhere. Worth aligning to the M4 approach.

---

## Interactive Elements

- **Button systems are forking.** The canonical `.btn / .btn--primary / .btn--accent / .btn--outline` exists in styles.css and is used correctly on most pages. But `workforce-continuing-education.html` defines its own `.btn-green`, `.btn-yellow`, `.btn-outline-white` (lines 194-256) that duplicate `.btn--primary`, `.btn--accent`, and `.btn--outline-white` with different padding (`0.9rem 2.25rem` vs the canonical button padding). `practical-nursing` / `welding` add `.step-btn`, `.step-btn--dark`, `.step-btn--outline`. So there are now at least three parallel button vocabularies. New editors won't know which to use.
- **Hover/lift values don't match the canonical.** `.card--lift:hover` (canonical) is `translateY(-2px)` + `0 8px 24px rgba(0,0,0,0.08)`. The one-off `.prog-card:hover` is `translateY(-3px)` + `0 4px 15px rgba(0,0,0,0.05)`; `.pdf-card:hover` is `translateY(-2px)` + `0 8px 20px`; `.contact-card` has no hover at all though it looks identical to a card. Three different lift distances and shadow recipes for the same visual gesture.
- **Focus states:** The good news is the global `:focus-visible` rule (resolved H10) covers `a, button, .btn`, so keyboard focus is handled at the base layer for all these one-offs. Custom interactive elements (`.video-card__link`, `.accordion-item summary`) inherit it. `welding-stpete.html` thoughtfully added `:focus-visible` parity to its video hover (lines 173-198); `practical-nursing` did **not** add the same `:focus-visible` parity to its video cards (only `:hover`), so the same component behaves differently between two sibling pages.
- **Broken/placeholder CTAs (design-visible):** `welding-stpete.html` has two `.pdf-card` links pointing to `href="#"` (lines 1029, 1039) styled as live download cards — they look clickable but go nowhere. `clearwater-contact.html` utility bar has a search button as `href="#"` (line 131), and its Campus Info dropdown points three items at `coming-soon.html` (Employer Partnerships / Post a Job / Advisory Committees). These are content/wiring issues but they present as finished interactive elements.

---

## Visual Hierarchy

Per-page hierarchy is generally **strong** — this is the team's clear strength. The program detail pages especially have a deliberate, well-sequenced flow (hero → start-steps → trust strip → jump nav → content sections → counselor CTA), and the eyebrow/title/subtitle pattern reads cleanly. The yellow `.start-steps` bar and sticky `.jump-nav` are effective wayfinding.

Watch items:
- **`programs.html` header callout overload.** The green header packs an h1, a paragraph, then a `.short-courses-callout` with three outline buttons plus a lead-in sentence — five competing elements in the hero before the user even reaches the filters. The three apprenticeship/workforce buttons compete with the page's actual primary task (filtering programs).
- **Trust strip vs hero stat-bar redundancy** on `practical-nursing`: "Approved by the Florida State Board of Nursing" appears in the hero subtitle, again in the stat-bar context, and again in the green trust strip immediately below. Strong signal, but it reads as three near-identical badges stacked.

---

## Pattern Library Compliance

This is the weakest dimension and the heart of M5/M6.

| Page | Cards | Verdict |
|------|-------|---------|
| `apprenticeships-clearwater.html` | Canonical `.card card--accent card--lift` + `.card-grid` | COMPLIANT (model page) |
| `adult-education-pathways.html` | Canonical `.card` + `.card-grid`; tasteful `.aw-card-links` add-on for dual-campus CTAs | COMPLIANT |
| `workforce-continuing-education.html` | Canonical `.card` + `.card--placeholder` for no-session courses + `.card-grid` | MOSTLY COMPLIANT (good use of `--placeholder`; adds page-local badges/pills, acceptable) |
| `programs.html` | One-off `.prog-card` x41 | NON-COMPLIANT (pre-canonical) |
| `practical-nursing-clearwater.html` | One-off `.info-card`, `.credential-card`, `.pdf-card`, `.counselor-card`, `.video-card`, `.accordion-item` | NON-COMPLIANT (large page-local style block) |
| `welding-stpete.html` | Same one-off set as nursing, defined again (M6 duplication) | NON-COMPLIANT |
| `clearwater-contact.html` | One-off `.contact-card` that visually equals canonical `.card` | NON-COMPLIANT (avoidable) |

Two specific notes:

1. **M6 duplication is concrete and measurable here.** `practical-nursing-clearwater.html` (lines 19-129) and `welding-stpete.html` (lines 14-577) contain near-identical definitions of `.program-hero`, `.stat-bar`, `.start-steps`, `.step-btn`, `.video-card`, `.accordion-item`, `.pdf-card`, `.counselor-card`, `.breadcrumb-bar`, and `.jump-nav`. This is the canonical program-page chrome copy-pasted into each page's `<style>`. The repo has `_templates/program-page.html`; these styles belong in `styles.css` (or a `program-page.css`), not duplicated per program. Every new program page currently means another ~400 lines of duplicated CSS.

2. **`.contact-card` is the easiest win.** Compare `clearwater-contact.html` `.contact-card` (lines 32-62) to the canonical `.card` + `.card__icon` + `.card__title` + `.card__body` + `.card__cta`: it's the same component with a slightly different icon background (`rgba(0,129,66,0.1)` tinted vs solid green) and a 12px vs 8px icon radius. It should be `<article class="card card--lift">` with the canonical inner classes and, at most, a one-line modifier for the tinted icon.

---

## Page-by-Page Notes

### programs.html
- **Works:** Clean A-Z directory, sensible cluster/campus filtering, dual-campus cards correctly show two CTAs (Clearwater / St. Petersburg) which matches two-campus discipline. Card count (41) matches the resolved M12 stat.
- **Needs work:** One-off `.prog-card` instead of canonical `.card`; off-brand blue `.campus-tag`; five-element hero callout overload; fragile negative-margin filter bar; H8 (dynamic filtering in Finalsite) remains an open architectural question that this JS-driven page doesn't resolve.
- **Suggested fix:** Migrate `.prog-card` to `<article class="card card--lift">` with `.card__title`/`.card__body`/`.card__cta`; recolor `.campus-tag` to a green/gray token; move the apprenticeship/workforce buttons out of the hero into a slim secondary bar below the filters; align the filter-bar offset to the M4 transform pattern.

### practical-nursing-clearwater.html
- **Works:** Best-in-set editorial hierarchy and content depth. Course-sequence accordion, credential cards, resource PDF cards, and the counselor card all read clearly. Real PDF links wired. Title uses `clamp()` (good, post-H7).
- **Needs work:** ~110-line page-local `<style>` block duplicating program chrome (M6); all hierarchy applied via inline styles; `<title>` still contains `&mdash;` em dash (line 14), violating the no-em-dash house rule (resolved M14 fixed this on About pages but it's back here); video cards lack the `:focus-visible` parity their welding sibling has.
- **Suggested fix:** Extract the shared program-page CSS to `styles.css`/`program-page.css`; replace the `&mdash;` in `<title>` with a pipe `|`; add `:focus-visible` to the video-card hover rules; move inline heading styles to classed rules.

### welding-stpete.html
- **Works:** Same strong program-page structure; `.card--placeholder`-style "PDF coming soon" intent is honest; sister-program callout for Advanced Welding is a nice touch; video hover has correct `:focus-visible` parity.
- **Needs work:** The single largest duplicated `<style>` block in the set (lines 14-577, M6); two `href="#"` PDF cards that look live but go nowhere; `<title>` em dash (line 7); a `<!-- DATA RECONCILIATION NEEDED -->` schedule comment is still live in source (content risk, flag to Cheri Ashwood per the note); some hero `<i>` Step icons (e.g., line 776-777) are missing `aria-hidden` while siblings have it.
- **Suggested fix:** De-duplicate to shared CSS; either wire the PDF cards or render them as `.card--placeholder` with a visible "coming soon" state instead of dead links; replace `&mdash;` with `|`; resolve the schedule data before launch.

### apprenticeships-clearwater.html
- **Works:** This is the reference page. Correct canonical `.card card--accent card--lift` + `.card-grid`, clean two-tier structure (PTC-sponsored cards vs community list), good `.steps-grid` "how it works," tasteful yellow CTA bar. Page-local CSS is genuinely page-specific (steps, community list, CTA bar) rather than re-deriving cards.
- **Needs work:** Minor — the `.hub-hero` and `.breadcrumb-bar` definitions are page-local and duplicate what the program pages also define separately (the cross-page duplication, not an in-page fault).
- **Suggested fix:** Once a shared hero + breadcrumb component exists in styles.css, drop the local copies.

### adult-education-pathways.html
- **Works:** Canonical cards, clean five-card "Choose Your Path" grid, smart `.aw-card-links` extension for stacking dual-campus CTAs inside a canonical card (this is how to extend the system correctly). Cross-link banner is on-brand.
- **Needs work:** Uses the `.page-hero` variant (different from the `.hub-hero` on its sibling apprenticeship hub) — two hubs, two hero patterns; in-hero breadcrumb reintroduces `opacity: 0.85` (L11 regression).
- **Suggested fix:** Converge on one hub-hero component; remove the breadcrumb opacity per L11.

### workforce-continuing-education.html
- **Works:** Excellent use of `.card--placeholder` for no-session courses (exactly the intended modifier), clear campus badges, honest "no sessions scheduled" pills, good divider banner. Canonical `.card-grid`.
- **Needs work:** Defines a whole parallel button family (`.btn-green/.btn-yellow/.btn-outline-white`) instead of using `.btn--*`; the `.cta-band` and `.wf-enrole-callout` are page-local one-offs; nav "Explore" dropdown labels this page "Evening & Part-Time" while the page title says "Short Courses & Evening Classes" and other pages link it as "Workforce & Continuing Education" / "Short Courses & Evening Classes" — three different labels for one destination (ties to the project note that short courses = OWI, naming TBD).
- **Suggested fix:** Replace the `.btn-green/.btn-yellow/.btn-outline-white` with canonical `.btn--primary/.btn--accent/.btn--outline-white`; settle one nav label for this page and use it everywhere.

### clearwater-contact.html
- **Works:** Clean, scannable contact grid; clear icon + title + body + CTA rhythm; good map callout; sensible breadcrumb into the About cluster.
- **Needs work:** `.contact-card` is a needless re-skin of the canonical `.card`; breadcrumb separator is a literal `"/"` (line 18) where its two sibling `.page-hero` pages use `\203A` (›) — a third separator glyph in the set; utility-bar search is `href="#"`; three Campus Info dropdown items go to `coming-soon.html`; the Campus Info dropdown here lists 8 items (Employer Partnerships, Post a Job, Advisory Committees) where the other Clearwater pages' Campus Info dropdown lists 6 (For Employers, etc.) — nav drift between sibling campus pages.
- **Suggested fix:** Rebuild `.contact-card` as `<article class="card card--lift">` with canonical inner classes; standardize the breadcrumb separator; reconcile the Campus Info dropdown contents across all Clearwater pages (also a navigation-consistency issue worth flagging to the PM).

---

## Top 3 Issues (ranked by visual impact)

### 1. Card-system fragmentation persists and regressed on the new Programs pages (M5)
Three of seven pages bypass the canonical `.card` for one-off card styles (`.prog-card`, `.info-card`/`.credential-card`/`.counselor-card`/`.pdf-card`, `.contact-card`). The lift distances, shadows, radii, and icon treatments diverge, so the "same" card looks subtly different page to page. The three hub pages prove the canonical component is sufficient.
**Fix:** Migrate `programs.html` `.prog-card` and `clearwater-contact.html` `.contact-card` to canonical `.card` first (lowest-effort, highest-visibility wins). For the richer program-page components, add the small set of genuinely-needed modifiers (`.card--credential`, an accordion, a media card) to `styles.css` once, then have program pages consume them.

### 2. Per-page `<style>` blocks duplicate ~400 lines of identical program-page chrome (M6)
`practical-nursing-clearwater.html` and `welding-stpete.html` carry near-identical large `<style>` blocks (`.program-hero`, `.stat-bar`, `.start-steps`, `.step-btn`, `.video-card`, `.accordion-item`, `.pdf-card`, `.counselor-card`, `.jump-nav`, `.breadcrumb-bar`). Every new program page adds another copy. This is the top maintainability risk for a Finalsite CMS where editors can't be expected to keep N copies in sync, and it guarantees future drift.
**Fix:** Extract the shared program-page styles into `styles.css` (or a linked `program-page.css` matching `_templates/program-page.html`). Program pages should ship with little or no `<style>` block.

### 3. Hero, breadcrumb, and button patterns each have 3-4 parallel implementations
Four hero patterns (`.page-header`, `.program-hero`, `.hub-hero`, `.page-hero`), three breadcrumb implementations with three different separator glyphs (`\f054`, `\203A`, `"/"`), and three button vocabularies (`.btn--*`, `.btn-green/.btn-yellow`, `.step-btn`). None of the heroes or breadcrumbs live in `styles.css`. This makes "build a new page that looks right" nearly impossible without copying an existing file, which is how the drift propagates.
**Fix:** Promote one hero component (with a `--hub` / `--program` / `--split` modifier), one breadcrumb component with one separator, and retire the duplicate button families in favor of `.btn--*`. Add them to `styles.css` and update the templates so new pages inherit the right patterns by default. Also fold in the small L11 regression (drop `opacity: 0.85` on in-hero breadcrumbs) while standardizing the breadcrumb.
