# Finalsite CMS Feasibility Review - 2026-06-15

Launch-readiness pass before the July Finalsite Composer build. Reviewed: index, clearwater, stpete, programs, admissions, tuition-aid, practical-nursing-clearwater, contact, consumer-information, about, plus styles.css and `_templates/program-page.html`.

Bottom line: the design system is fundamentally Composer-friendly (token-based `styles.css`, canonical `.card`, standard 1/2/3-column grids). Two things will hurt at build time and after launch: (1) the 46-card JS-filtered programs page (H8/M49) is not Composer-native and must change architecture before the build, and (2) per-page chrome duplication plus a ~924-line inline `<style>` block copied into every program page (M6/M50/M51) will fragment the moment editors touch it. The campus deep-links survive any of the recommended models if we make one clear choice.

---

## Buildable As-Is

These map cleanly to Composer layouts/elements with little or no custom code:

- **Global token system (`styles.css` `:root`).** A single uploaded brand stylesheet is the correct Composer pattern. Tokens (`--color-green`, `--font-heading`, spacing scale) live once and every block inherits them. This is the strongest part of the build and should be the source of truth, not per-page `<style>`.
- **Utility bar** - 2-region flex bar (left contact / right links). Composer announcement-bar or a simple custom HTML region. Should be ONE global region, not per-page.
- **Quick Links grid** (index 7-up, campus 7-up) - Composer multi-column layout (image/icon link cards). The `translateY(-40px)` overlap is deliberately built with transform + matching `margin-bottom` so sibling panels stay layout-independent in Composer (good call, documented in CSS).
- **Why PTC** (2-column image + feature list) - Composer 2-column row + a 2x2 feature sub-grid. Standard.
- **Featured Programs cards** (index 8-up, campus 6-up) - 3-column card grid. These are the canonical `.program-card`; editors maintain them as a simple link-card list.
- **Campus cards** (index, 2-up) - 2-column card row with image/badge/body. Standard.
- **News & Events** (3 cards) - this should NOT be hand-built cards long term; map to a Composer **Posts/News feed** element (see Maintainability). Buildable either way.
- **CTA bands / aid banners / employer hook** - single-column full-width color panels. Standard 1-column rows with background color.
- **Footer** (brand + 3 nav cols + accreditation logos + legal) - Composer global footer region. One footer for main, one per campus (address/phone differ). Buildable as a footer element or a single custom-HTML footer region.
- **Split hero** (campus pages, `.hero--split`) - 2-column row (text + image), stacks at breakpoint. Composer 2-column with a background image column. Standard.
- **Page headers** (programs/admissions green banner) - Composer banner/hero element with solid background.
- **Accordions, stat bars, start-steps, jump-nav** on program pages - all standard once the CSS is global (see Needs Custom Code for the JS pieces).

## Needs Custom Code

These require a custom HTML/CSS embed block in Composer, but are achievable:

- **Homepage hero image carousel** (`#hero-slider`, 4 slides, `.hero__slide.active` cross-fade driven by `script.js`). Composer's native banner does single image or its own slideshow widget; this custom fader will need to live in a custom-code block OR be rebuilt on Composer's banner slideshow. Recommend rebuilding on the native banner slideshow so editors can swap images without touching code (M11, still open). If kept as custom code, every image swap is a developer task.
- **Hero `backdrop-filter: blur()` stat cards.** Visual only; safe but will silently no-op in older embedded contexts. Acceptable.
- **Animated count-up stats** (`data-count="40"`) - driven by `script.js`. Needs the script to load in Composer (see Cannot Be Built note on `script.js`). Degrade gracefully: the static "40+" text is already in the markup, so if JS is stripped it still reads correctly. Good.
- **Program-page jump-nav** (`position: sticky` tab bar with scroll-snap) and **video cards** (lazy YouTube thumbnail + play overlay). The CSS is fine; the **inline `onerror` thumbnail fallback (8 instances in practical-nursing) will likely be stripped by Composer's HTML sanitizer** (L23). Use `hqdefault.jpg` (always present) instead of `onerror`, inside a custom embed. The external `img.youtube.com` hot-link is a live dependency to accept.
- **Mobile nav accordion + search overlay + hamburger toggle** - all depend on `script.js`. If the global nav is rebuilt on Composer's native navigation element (recommended), this custom JS goes away entirely. If the hand-built nav is kept, it must ship as a custom code region with its script.
- **Search box.** The header search posts nowhere in the mockup. In Composer this should wire to Finalsite's site search, not a custom form. Treat as native, not custom.

## Needs Simplification

- **`programs.html` 46-card `.prog-card` + DOMContentLoaded JS filter (H8 / M49) - the single biggest item.** A hand-maintained 46-card list with `data-cluster`/`data-campus` attributes and an inline filter script is not Composer-native and not editor-maintainable: adding/removing a program or fixing a description means hand-editing HTML data-attributes inside a code block, and the inline `<script>` filter is the kind of thing that breaks on a Composer template update. **Recommended migration path (in priority order):**
  1. **Best: tagged Posts/Collection feed.** Model each program as a Post (or a Composer "Constituent"/resource record) with taxonomy tags for cluster (health/it/trades/...) and campus (clw/stp/both). Use Composer's native feed element with built-in faceted filtering. Editors add a program by adding a tagged post, no code. This preserves the `?cluster=` / `?campus=` deep-links **only if** the feed element reads URL params as default filter state OR we land on the same URL scheme the feed uses (confirm with Finalsite/Addison Richard that the feed supports pre-filtering from a query string; Composer feeds commonly support `?tag=` style params). If the native param name differs, add lightweight redirect mapping.
  2. **Fallback: static anchored A-Z directory.** One page, programs grouped under cluster anchors (`#health`, `#it`, ...) with a sticky cluster chip nav. Deep-links become `programs.html#health` instead of `?cluster=health`. Fully editor-maintainable, no JS, but loses the campus AND cluster cross-filter (you get one axis, not both) and the deep-links change shape (campus homepages must be re-pointed).
  - **Do not port the inline JS filter as-is.** That is the explicit M49 finding and it still stands.
- **Per-page inline `<style>` blocks (M6/M50).** Every program page carries the template's ~924-line `<style>` block inline (practical-nursing has it plus 90 inline `style="..."` attributes). In Composer this CSS gets scoped to one block, so editing a shared component means editing it in N places, and the blocks are already diverging. Simplify by extracting all shared program-page chrome (`.program-hero`, `.stat-bar`, `.start-steps`, `.step-btn`, `.video-card`, `.accordion-item`, `.jump-nav`, `.breadcrumb-bar`) into the global `styles.css` (or a `program-page.css`) so program pages ship with little/no `<style>`.
- **Inline `style="..."` for hierarchy (M50).** admissions=19, about=19, consumer-information=33, practical-nursing=90 inline style attributes, many doing typographic hierarchy and section padding. Composer rich-text editors strip/clobber inline styles unpredictably, and there's no shared type scale. Move these to classed rules + a shared type scale and `--section-pad` token. The logo lockup (`style="font-family:...; font-size:1.25rem;..."`) repeated in every header is the clearest example - it should be one class.

## Cannot Be Built

Nothing here is fundamentally impossible in Finalsite. Two hard dependencies to flag:

- **`script.js` is a hard runtime dependency** for: mobile nav toggle, dropdown accordions, search overlay, hero slider, and count-up stats. Composer must load this global JS file (it can, via the template's custom JS slot or a global code injection), but if the nav is instead rebuilt natively, most of `script.js` becomes unnecessary. The tracker already lists "add script.js" as launch-blocker C8 - confirm it's wired before launch or the mobile menu does not open.
- **Inline event handlers (`onerror` on video thumbnails)** will likely be sanitized out (L23). Not a blocker; just won't fire.

## Maintainability Concerns

- **Per-page header/nav/footer copies (M51).** Every one of the 10 pages embeds its own full header + nav + footer. The campus contact page's "Campus Info" dropdown already differs from its sibling Clearwater pages - that's drift in action. In Composer these MUST become **global regions**: one main-site header/nav/footer, one Clearwater header/footer, one St. Pete header/footer. Otherwise a single nav change (new program, renamed link) is a 40+ file edit and the menus will keep diverging. This is the highest maintainability risk after H8.
- **Navigation should be Composer-native, not hand-built.** The mega-menu (Programs "By Category"/"Explore" two-column dropdown) is achievable with Composer's navigation element + flyout, and editors can reorder items in the menu manager. The hand-coded `<ul>`/dropdown markup is editor-hostile (you'd edit HTML to add a menu item). Rebuild on native nav; it also retires the custom dropdown JS.
- **News feed hand-maintained.** Three hard-coded `<article>` cards that link to the old myptc.edu news. Editors will not hand-edit HTML to post news. Use a Composer Posts/News feed so staff post through the CMS; the homepage and campus pages pull the feed. (Note: campus News currently duplicates the district "Chef Brian" St. Pete item on the Clearwater page - feed tagging fixes that too.)
- **Card fragmentation (M5).** programs.html rolls its own `.prog-card` x46; nursing/welding/contact each define one-off card classes. The 3 hubs (apprenticeships, adult-ed, workforce) correctly use canonical `.card` and are the model. Converge on `.card` so editors and the build have one card to reason about.
- **Deep-link durability (NEW today).** The two campus homepages now point ~6-7 links each into `programs.html?cluster=X&campus=Y` (clearwater: health/it/trades/transportation/culinary/cosmo + `?campus=clw`; stpete: health/it/trades/transportation/arts/cosmo + `?campus=stp`). These survive cleanly under the **Posts-feed model** if the feed pre-filters from query params (verify param names with Finalsite). Under the **static-anchor fallback** they do NOT survive as-is: `?cluster=health&campus=clw` would have to collapse to a single `#health` anchor (losing the campus filter), and all ~13 campus-homepage links would need rewriting. **This is the deciding factor between the two models** - if preserving campus+cluster deep-links matters (it should, the campus pages lean on them), choose the tagged-feed model.

## Page-by-Page CMS Mapping

### index.html
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Utility bar | Global announcement/region | No | Yes (global) | Make global, not per-page |
| Header + mega-nav | Native navigation element | Rebuild (retires JS) | Yes if native | Hand-coded dropdown is editor-hostile (M51) |
| Hero slider | Banner slideshow OR custom embed | Yes if custom | Native = yes | Rebuild on native slideshow for image swaps (M11) |
| Quick Links 7-up | Multi-column link cards | No | Yes | transform overlap is Composer-safe |
| Why PTC | 2-col row + 2x2 grid | No | Yes | |
| Featured Programs 8-up | 3-col card grid (`.program-card`) | No | Yes | Cluster links use `?cluster=` deep-links |
| Campus cards 2-up | 2-col card row | No | Yes | |
| News & Events | Posts/News feed | Recommend native | Native = yes | Hand cards not maintainable |
| CTA band | 1-col color panel | No | Yes | |
| Footer | Global footer region | No | Yes (global) | |

### clearwater.html / stpete.html
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Campus utility bar | Campus global region | No | Yes (global) | Address/phone per campus |
| Campus header (5-pillar) | Native nav (campus menu) | Rebuild | Yes if native | Per-campus global region |
| Split hero | 2-col row + bg image | No | Yes | `.hero--split` standard grid |
| Quick Links 7-up | Multi-column link cards | No | Yes | |
| Featured Programs 6-up | 3-col card grid | No | Yes | **Deep-links `?cluster=X&campus=clw/stp` - survival depends on programs model** |
| News & Events | Posts feed (campus-tagged) | Recommend native | Native = yes | CLW page currently shows STP Chef Brian item; feed tag fixes |
| CTA band | 1-col panel | No | Yes | |
| Footer (campus) | Campus global footer | No | Yes (global) | |

### programs.html
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Page header banner | Banner element | No | Yes | |
| Short-courses callout | 1-col panel w/ buttons | Inline styles to declass | Yes | |
| Cluster + campus filters | Native feed facets | **Replace JS** | Native = yes | H8/M49 - do not port inline filter |
| 46 program cards | Tagged Posts/Collection feed | **Replace static list** | Native = yes | Adding a program = add tagged post, no code |
| `?cluster=`/`?campus=` params | Feed pre-filter from URL | Verify w/ Finalsite | Conditional | Drives the model choice (see Deep-link durability) |

### admissions.html / tuition-aid.html / about.html / consumer-information.html / contact.html
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Header/utility/footer | Global regions | No | Yes (global) | M51 - stop duplicating |
| Page header banner | Banner element | No | Yes | |
| Body content sections | 1/2/3-col rows + `.card` grids | Mostly no | Yes | Migrate one-off cards to `.card` (M5) |
| Inline `style=""` hierarchy | Classed rules + type scale | **Declass** | Editor-safe after | M50: admissions 19, about 19, consumer-info 33 inline styles |
| Tables / fee rates (tuition) | Rich-text table or styled block | No | Yes | Keep simple; avoid inline styling |
| FAQ / accordion | Composer accordion element | Maybe native | Yes | |

### practical-nursing-clearwater.html (program-page template instance)
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| ~924-line inline `<style>` | Extract to global CSS | **Remove from page** | Critical | M6/M50 - duplicated into every program page |
| Program hero (2-col + stat bar) | 2-col row + classed stat bar | No (after extract) | Yes | |
| Start-steps yellow bar | 1-col panel | No | Yes | |
| Sticky jump-nav | Sticky tab bar (global CSS) | CSS only | Yes | |
| Video cards (YouTube) | Custom embed | Yes | Yes | Drop `onerror`, use `hqdefault.jpg` (L23) |
| Accordions | Composer accordion | Maybe native | Yes | |
| 90 inline `style=""` attrs | Classed rules | **Declass** | Editor-safe after | M50 worst offender |

## Top 3 Issues (ranked by implementation risk)

1. **programs.html filter architecture (H8/M49) + campus deep-link survival (NEW today).** The 46-card hand-list + inline DOMContentLoaded filter is not Composer-native and not editor-maintainable, and the campus homepages now carry ~13 `?cluster=X&campus=Y` deep-links that depend on it. This is the one decision that must be made before the July build. Recommend the **tagged Posts/Collection feed with native faceted filtering** (editors add programs as tagged posts, deep-links survive IF the feed pre-filters from URL params - verify param support with Addison Richard at Finalsite). Static anchored A-Z is the fallback but breaks campus+cluster cross-filtering and forces rewriting every campus deep-link.

2. **Per-page chrome + CSS duplication (M51/M6/M50).** Header, nav, and footer are copied into all 10 pages and already drifting (contact-page dropdown differs); each program page carries a ~924-line inline `<style>` block plus dozens of inline `style=""` attributes. In Composer this multiplies into unmaintainable, divergent regions. Collapse to global header/nav/footer regions (one main + one per campus), extract shared CSS into `styles.css`, and declass inline styles to a shared type scale before the build, not after.

3. **JS-dependent interactions and native-vs-custom nav.** Mobile menu, dropdown accordions, search overlay, hero slider, and count-up stats all depend on `script.js` (tracker launch-blocker C8). Rebuilding the navigation on Composer's native nav element retires most of this JS and makes the menu editor-maintainable; keeping the hand-coded nav means shipping and maintaining custom JS that can break on CMS template updates. Also drop the inline `onerror` video fallback (will be sanitized) and rebuild the hero on the native banner slideshow so image swaps aren't developer tasks.
