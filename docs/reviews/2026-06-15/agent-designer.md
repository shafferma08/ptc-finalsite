# Visual Design Review - 2026-06-15

**Reviewer:** Senior UI/UX Designer (design-system + polish lens)
**Scope:** Launch-readiness pass before Jun 18 mockups. 10 pages: index, clearwater, stpete, programs, admissions, tuition-aid, practical-nursing-clearwater, contact, consumer-information, about.
**Method:** Mockup review (local HTML + styles.css read directly). Verified the four open design-system items (M5 card fragmentation, M6 duplicate program CSS, M39 hero/breadcrumb/button proliferation, M40 off-token color drift).

**Headline:** The token system and canonical components in `styles.css` are genuinely good: a real color scale, spacing scale, radius scale, a documented `.card`/`.card-grid`, one `.btn--*` family, one set of focus states. The homepage and both campus landing pages use that system cleanly and look polished. The problem is that almost none of the interior content pages use it. Every page ships its own `<style>` block that re-implements heroes, breadcrumbs, buttons, and cards with divergent radii, shadows, separators, and raw hex. **M5, M6, M39, and M40 all still hold and have gotten worse with the Programs wave.** This is the single biggest threat to a professional, consistent launch and to maintainability in Composer.

---

## Design System Consistency

The canonical system exists and is well-built. The failure is adoption.

- **Two worlds.** `index.html`, `clearwater.html`, `stpete.html` carry **no inline `<style>` block** and consume `.hero`, `.hero--split`, `.card`, `.btn--*`, `.quick-links`, `.campus-card`, `.footer__*` straight from `styles.css`. They are the model. Every other reviewed page opens with a 40-to-300-line `<style>` block that redefines chrome locally.
- **The canonical `.card` is barely used outside the hubs.** `styles.css` lines 219-333 define `.card` with `__icon/__title/__body/__cta` and `.card-grid`. The review pages instead roll: `.prog-card` (programs.html L21), `.info-card` / `.credential-card` / `.pdf-card` / `.counselor-card` / `.video-card` / `.accordion-item` (practical-nursing-clearwater.html L52-107), `.campus-contact-card` (contact.html L73). None of these reference the canonical component.
- **Scale of the problem.** A grep for the one-off hero/card/breadcrumb class names returns **2,854 occurrences across 121 files**, and `.program-hero { background: linear-gradient(... #004d29 ...) }` is copy-pasted verbatim into roughly 80 program pages. This is no longer "a few pages drift"; the one-off pattern is now the de facto standard, and the canonical component is the exception.

**Verdict on the four tracked items:** M5 CONFIRMED (regressed), M6 CONFIRMED (regressed), M39 CONFIRMED, M40 CONFIRMED. Details under the relevant headings below.

---

## Color & Typography

**Palette:** brand greens/yellow/accent are tokenized correctly in `:root` and the brand hexes (#008142, #FFCF01, #8DC63F) match the guide. But off-token color has leaked everywhere (M40):

- **Hero gradient dark stops never match a token.** Pages use `#006634` (main-site `.page-hero`, e.g. contact.html L16, admissions.html L16, tuition-aid.html L16, consumer-information.html L16) and `#004d29` (`.program-hero`, all program pages). The token is `--color-green-dark: #006B36`. So the dark green on a hero is one of three different greens depending on which page you land on. Side-by-side these read as a brand inconsistency.
- **Off-brand sky-blue.** `programs.html` L27: `.prog-card .campus-tag { background: #e0f2fe; color: #0284c7; }` — a blue that appears nowhere in the brand. On the A-Z directory, which is the first page a board member or parent scans, the campus chips are the wrong color entirely. Fix: recolor to `--color-green-light` / `--color-green-dark` or a neutral gray chip.
- **Ad hoc semantic colors on the nursing page.** `#86efac` (available status), `#fee2e2`/`#dc2626` (PDF icon), `#fef3c7`/`#92400e` (licensure type), `#fde68a`/`#f59e0b` (disclosure). Some of these (amber warning, red PDF) are reasonable, but none are tokens, so they will drift across program pages as they get hand-copied. Promote a small semantic set (`--warn`, `--danger`, `--pdf`) to `:root`.
- **`--color-accent` (#8DC63F) used as link/CTA text.** programs.html `.prog-card-link` (L28) and nursing `.info-card--accent` use the light green as a foreground. As text on white it is borderline; on the green hero (nursing eyebrow) it fails AA (~2.6:1, = tracked M44). Reserve #8DC63F for fills/borders; use `--color-yellow` or white for text on green.
- **Yellow token ambiguity.** `--color-accent` (the green) and `--color-yellow` are used interchangeably in places for "the highlight," which makes intent unclear when editing. Standardize one name for the brand yellow.

**Typography:** Roboto + Roboto Slab are loaded consistently and the global `h1-h6` rules are correct. Hierarchy is generally clear. Two issues:

- **Hero title sizing is inconsistent within the same class.** admissions.html L47 uses `clamp(1.85rem, 4vw, 2.5rem)` (the responsive fix H7 shipped), but contact.html L35, tuition-aid.html L36, and consumer-information.html L47 hard-code `font-size: 2.5rem` with no clamp or mobile override. So `.page-hero__title` means two different things page to page, and three of these pages regress the H7 mobile fix. On a phone the 2.5rem titles will be oversized.
- **Pervasive inline `style=` for type and spacing** (e.g., index.html logo lockup L65-69, the campus-contact-card header background contact.html L637). This is invisible to a Composer editor and not on any shared scale (= tracked M50).

---

## Layout & Spacing

- **Spacing is mostly on-scale** where pages use `var(--space-*)`, but the inline-styled pages mix raw rem values (`padding: 4rem 0 3rem`, `2.5rem`, `1.25rem`) that happen to line up with the scale by eye, not by token. Section vertical rhythm is close but not guaranteed identical between, say, `.contact-section { padding: 4rem 0 }` and `.programs-section { padding: var(--space-4xl) 0 }` (= 6rem). So Programs breathes more than Contact for no reason.
- **Radius is all over the map (M40-adjacent).** The token scale is 8 / 16 / 24px. Pages introduce `border-radius: 14px` (contact campus card L75), `12px` (nursing video/credential/aid cards, admissions apply banner), `10px` (nursing pdf-card), `30px`/`20px` pills. Cards on different pages have visibly different corner softness.
- **Shadow values are hand-tuned per page** instead of using `--shadow-sm/md/lg/xl`: `0 4px 15px rgba(0,0,0,0.08)` (programs filter), `0 2px 16px rgba(0,0,0,0.07)` (contact card), `0 4px 15px rgba(0,0,0,0.1)` (nursing video), `0 1px 6px rgba(0,0,0,0.04)` (pdf-card). The elevation language is not consistent, so the cards don't feel like one family.
- **Negative-margin hack returns.** programs.html L15 filter bar uses `margin: -2rem auto 3rem` — the exact fragile pattern M4 replaced with a transform on `.quick-links`. (= tracked L20.)
- **Grid systems are sound individually** (programs `auto-fill minmax(300px,1fr)`, campus cards `1fr 1fr`, footer grid), and responsive breakpoints in styles.css are thorough. The inconsistency is in the wrappers around them, not the grids themselves.

---

## Interactive Elements

- **Three button vocabularies (M39 CONFIRMED).** Canonical `.btn--primary/accent/outline-white` (styles.css), plus `.step-btn--dark/--outline` (nursing L39-42), plus `.btn-green` (tuition-aid L978, workforce). They have different padding, radius, and hover behavior. "The green button" is not one thing on this site.
- **Three breadcrumb implementations with three separator glyphs (M39 CONFIRMED).** Within just the reviewed pages:
  - `.page-hero__breadcrumb` with `\203A` (›) and `opacity: 0.85` — contact L27, tuition-aid L27, consumer-information uses `/` at L36.
  - `.page-hero__breadcrumb` with `/` and `color: rgba(255,255,255,0.85)` (no opacity) — admissions L36-38.
  - `.breadcrumb-bar` with Font Awesome chevron `\f054` on a light bar — nursing L114.
  So the same wayfinding element looks different on three of ten pages, and uses three separators. Pick one breadcrumb + one separator and promote it to styles.css.
- **`opacity: 0.85` on white breadcrumb text regressed (L11).** Present on contact L23, tuition-aid L24, consumer-information L23. L11 removed exactly this on about.html for borderline contrast. Drop the opacity; use full-opacity white.
- **Hover/focus states:** the canonical components have good, consistent hover lifts and the global `:focus-visible` yellow outline is excellent and applies sitewide. But the one-off cards each define their own hover (`translateY(-2px)` vs `-3px` vs `-6px`, different shadows), so motion feels uneven page to page. And keyboard `:focus-visible` parity is missing on some one-off interactive cards (nursing video cards have `:hover` only, = tracked L19) — the global rule covers `<a>` so they are not unreachable, but the styled affordance differs.

---

## Visual Hierarchy

Per-page hierarchy is actually a strength. Almost every page reads top-to-bottom correctly: hero (eyebrow + h1 + subtitle + CTA), then sectioned content with `.section-header` or a local heading, then a closing CTA band. The nursing page in particular has a strong hierarchy (hero stat-bar, yellow Start Here action strip, sticky jump-nav, sectioned body, counselor card, CTA).

Where hierarchy slips:
- **programs.html hero is overloaded (L20).** h1 + paragraph + a 3-button short-courses callout + the filter bar = up to five competing elements before the user reaches the actual program list. The primary task (scan/filter programs) competes with secondary routing. Move the apprenticeship/workforce buttons to a slim secondary bar below the filters.
- **A-Z cards give no comparison hooks (L22).** programs.html cards show title + description + tags but no length or credential, so a parent can't comparison-shop without clicking into each one.
- **"TBD / TBD" upcoming classes** on the nursing page reads as "no classes / unfinished" (= tracked M42). Replace with a real date or "Contact your counselor for the next start date."
- **Cluster-chip mislabels** on programs.html (Dental Assisting tagged "Arts, Media & Education", Facials/Nails tagged the same) put the wrong category label + icon on the highest-traffic directory (= tracked M33). High optics, quick fix.

---

## Pattern Library Compliance

This is where launch readiness is weakest.

| Page | Uses canonical `.card`/`.card-grid`? | One-off card classes present |
|------|--------------------------------------|------------------------------|
| index.html | Uses `.program-card`, `.campus-card`, `.news-card` (purpose-built feature components in styles.css, acceptable) | none inline |
| clearwater.html / stpete.html | Same as index, system components | none inline |
| programs.html | **No** | `.prog-card` x41 + `.prog-card-link` |
| admissions.html | **No** | `.apply-primary`, step cards inline |
| tuition-aid.html | **No** | `.pay-tuition-banner`, `.btn-green`, ta-cards |
| practical-nursing-clearwater.html | **No** | `.info-card`, `.credential-card`, `.pdf-card`, `.counselor-card`, `.video-card`, `.accordion-item` (~25 one-off rules) |
| contact.html | **No** | `.campus-contact-card` |
| consumer-information.html | **No** | local section cards |
| about.html | Partial (compliance/accred cards not migrated to `.card`) | `.accred-card`-style locals |

- **M5 CONFIRMED (regressed).** The canonical `.card` exists and is documented but is used almost exclusively by the three hub pages (apprenticeships, adult-ed, workforce) noted in the tracker. None of the 10 reviewed pages migrate their cards to it. The nursing page is the worst offender with ~25 bespoke card/component rules.
- **M6 CONFIRMED (regressed).** practical-nursing-clearwater.html ships ~110 lines of program-page chrome in its `<style>` block (`.program-hero`, `.stat-bar`, `.start-steps`, `.step-btn`, `.jump-nav`, `.video-card`, `.accordion-item`, `.pdf-card`, `.counselor-card`, `.breadcrumb-bar`). This same block is copy-pasted into ~80 program pages (the `.program-hero` grep alone hits 80+ files at the identical line). Every new program page = another copy, and they are already diverging (some `.program-hero` have `padding: 4rem 0`, most have `padding: 0`). This must be extracted to a shared `program-page.css` before the July Composer build or it becomes unmaintainable.
- **Header / footer / nav consistency** is good visually because the markup is duplicated faithfully, but it is duplicated, not shared (= tracked M51), and the dropdowns have already drifted (programs.html "Explore" points three different labels to the same `adult-education-pathways.html`, = M35; main-site utility bar says vague "Student Portal" L52 while campus utility bar uses direct "Canvas Login / Focus" L30-32, = M36). Reconcile before turning these into Composer global regions.

---

## Page-by-Page Notes

### index.html
- **Works:** Clean use of the canonical system, no inline style block, strong hero with tokenized gradient overlay, good quick-links + featured-programs + campus-cards rhythm. This is the visual benchmark for the site.
- **Needs work:** Utility-bar "Student Portal" (L52) is vaguer than the campus pages' direct Canvas/Focus links (M36). Logo lockup is built with inline `style=` (L65-69) that won't survive Composer rich-text cleanly.
- **Fix:** Standardize the utility bar to direct Canvas + Focus sitewide; move the logo lockup styling into a `.site-header__logo` rule class.

### clearwater.html / stpete.html
- **Works:** `.hero--split` is a nice, distinct campus treatment and is fully tokenized in styles.css; consistent with index.
- **Needs work:** News section is identical on both campuses (= L9); no campus-specific program imagery (= L8). Both are low-priority polish.
- **Fix:** Defer to post-launch; not a design-system blocker.

### programs.html
- **Works:** Filter UX is clear; grid is responsive.
- **Needs work:** Fourth hero variant (`.page-header`, L11); `.prog-card` one-off (L21); off-brand sky-blue campus chip (L27); `.prog-card-link` in light-green text (L28, contrast); negative-margin filter hack (L15); hero overload (L20); cluster-chip mislabels (M33).
- **Fix:** Migrate `.prog-card` to `.card`/`.card-grid` with a small length+credential line; recolor campus chip to brand green/gray; switch link text to `--color-green`; align filter offset to the M4 transform pattern; correct the three mislabeled chips.

### admissions.html
- **Works:** Apply-online banner gives a strong primary CTA; breadcrumb title uses the correct `clamp()`.
- **Needs work:** `.page-hero` dark stop is `#006634` (off-token); breadcrumb separator `/` differs from the `\203A` siblings; `.apply-primary` radius 12px off-scale.
- **Fix:** Promote one hero gradient to a token; one breadcrumb separator; snap radius to 8/16px.

### tuition-aid.html
- **Works:** Pay-tuition banner reads as a clear action; good sectioning.
- **Needs work:** `.btn-green` with inline `background: #006634` (L978) is a third button family + off-token color; hard-coded 2.5rem hero title (no clamp); `opacity: 0.85` breadcrumb.
- **Fix:** Replace `.btn-green` with `.btn--primary`; add clamp() to the hero title; drop breadcrumb opacity.

### practical-nursing-clearwater.html
- **Works:** Best content hierarchy on the site (stat-bar, yellow action strip, sticky jump-nav, accordions, counselor card). Genuinely polished as a one-off.
- **Needs work:** It is a one-off. ~25 bespoke component classes (M5), ~110 lines of duplicated program chrome (M6), a third breadcrumb glyph (`\f054`, M39), off-token radii (10/12/20/30px) and ad hoc semantic hexes (M40), accent-green eyebrow on green hero (M44), "TBD / TBD" (M42), video-card focus-state gap (L19).
- **Fix:** This page should become the seed for the extracted `program-page.css`. Lift its `<style>` block into a shared stylesheet, tokenize the radii/shadows/colors, and have every program page reference it with little to no inline style. Highest-leverage single fix on the site.

### contact.html
- **Works:** Two-campus card layout is clear and symmetric.
- **Needs work:** `.campus-contact-card` one-off (radius 14px, off-token shadow); `.page-hero` `#006634`; `\203A` breadcrumb with `opacity: 0.85`; inline `style="background:#006634"` on card header (L637).
- **Fix:** Migrate the campus card to `.card`; tokenize the header color; drop breadcrumb opacity.

### consumer-information.html
- **Works:** Dense compliance content is organized and readable; intro band sets context well.
- **Needs work:** `.page-hero` `#006634`; `opacity: 0.85` breadcrumb (L23, L11 regression); local heading color `#006634` (L182) and section cards not on `.card`.
- **Fix:** Same hero/breadcrumb token cleanup as the other main-site pages.

### about.html
- **Works:** Named leadership cards, non-discrimination section, and CTA band are all in place and on-brand; this cluster was already cleaned up (M14/L11 closed here previously).
- **Needs work:** Accreditation/compliance cards still not migrated to canonical `.card` (M5 residual); hero dark stop `#006634` at L16 and L501.
- **Fix:** Migrate accred cards to `.card--accent`; tokenize the hero gradient.

---

## Top 3 Issues (ranked by visual impact)

### 1. Extract and adopt one shared program-page stylesheet + canonical `.card` (M5 + M6, regressed)
**Highest impact.** ~80 program pages (and the 10 reviewed interior pages) each carry a duplicated, already-diverging `<style>` block re-implementing cards, heroes, and breadcrumbs. This is both a consistency risk (cards on different pages have different radii, shadows, hover distances, separators) and the top maintainability risk for the July Composer build, where editors cannot safely touch per-page `<style>`. **Fix:** lift the nursing/program chrome into `program-page.css`, add the missing modifiers to the canonical `.card` (`.card--credential`, media, accordion), and migrate `.prog-card` / `.info-card` / `.campus-contact-card` / `.counselor-card` to `.card`. Do this before adding any more pages.

### 2. Converge heroes, breadcrumbs, and buttons to one each, in styles.css (M39)
Four hero classes (`.hero`/`.page-header`/`.page-hero`/`.program-hero`), three breadcrumbs with three separators (`/`, `\203A`, `\f054`), and three button families (`.btn--*`, `.step-btn`, `.btn-green`) mean wayfinding and primary actions look different page to page. A board member clicking through the site will feel the seams. **Fix:** promote one `.page-hero` (with modifiers for the split/program variants), one breadcrumb + one separator glyph, and retire `.step-btn`/`.btn-green` to `.btn--*`. Add all three to styles.css and the templates. Drop the regressed `opacity: 0.85` on breadcrumbs (L11) and add `clamp()` to the hero titles that lost it (contact, tuition-aid, consumer-information — H7 regression).

### 3. Kill off-token color drift, starting with the hero gradient and the sky-blue chip (M40)
Three different "dark greens" (`#006634`, `#004d29`, token `#006B36`) appear on heroes depending on the page, and programs.html stamps an off-brand sky-blue (`#e0f2fe`/`#0284c7`) campus chip on the most-scanned directory page. On a career college site, inconsistent brand green and a stray blue read as unpolished. **Fix:** promote one hero gradient + one dark-green to tokens and replace every raw hex; recolor the campus chip to brand green/gray; standardize the light-green (#8DC63F) to fills/borders only (never green-on-green text, M44); promote the ad hoc semantic colors (warn/danger/pdf) to `:root`.

---

**Bottom line for Jun 18:** The system is good and the homepage/campus pages prove it works. The interior pages are well-designed individually but are a fragmented patchwork at the system level. None of the four tracked design-system items has been resolved; all four regressed with the Programs wave. The single move that buys the most before the July Composer build is #1 (extract shared CSS + adopt `.card`). #2 and #3 are mostly find-and-replace once the shared stylesheet exists. The quick-win optics fixes that can ship immediately and independently: cluster-chip mislabels (M33), the sky-blue chip recolor, breadcrumb opacity removal, and adding clamp() to the three regressed hero titles.
