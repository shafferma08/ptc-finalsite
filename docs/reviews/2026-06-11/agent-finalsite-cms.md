# Finalsite CMS Feasibility Review - 2026-06-11

Scope: Programs Waves 0-7 redesign work. Pages reviewed: `programs.html`, `practical-nursing-clearwater.html`, `welding-stpete.html`, `apprenticeships-clearwater.html`, `adult-education-pathways.html`, `workforce-continuing-education.html`, `clearwater-contact.html`.

Lens: can the program-page template and the new hubs be built and maintained by non-technical editors in Finalsite Composer? Prior issues H8 (dynamic filtering), M11 (hero carousel), H11/M11 status carried in.

Bottom line: the hubs (`adult-education-pathways`, `apprenticeships-clearwater`) are the most Composer-friendly things in this batch because they ride the canonical `.card` / `.card-grid` and have almost no page-local CSS. The program-page template is buildable but is a heavy one-off: every page ships a 110-to-260-line page-local `<style>` block plus dozens of inline `style="..."` attributes, which is the single biggest maintainability liability across the whole set. The Programs A-Z JS filter (H8) remains the only piece that is genuinely not Composer-native and needs an architecture decision before July build.

---

## Buildable As-Is

These map directly to Composer layouts/elements with little or no custom code:

- **Utility bar, header/nav, footer.** Identical chrome across all 7 pages. In Composer these are global header/footer regions configured once, not rebuilt per page. The dropdown nav maps to Composer's built-in dropdown navigation. Footer accreditation logo row + social row are a standard footer build. (One caveat: the campus-vs-main chrome difference, see Maintainability.)
- **Hub card grids** (`adult-education-pathways.html`, `apprenticeships-clearwater.html` Tier 1). These use the canonical `.card card--accent card--lift` + `.card-grid` from `styles.css`. In Composer this is a multi-column layout row with a reusable card element per column. This is exactly the pattern Composer editors can clone and refill. Best-built pages in the batch.
- **Breadcrumb bars.** Static markup, trivial.
- **Counselor card** (program pages). Single content block with avatar initials, name, email/phone buttons. Editable as a rich-text + button block.
- **Contact cards** (`clearwater-contact.html`). `repeat(auto-fit, minmax(300px,1fr))` grid of contact cards is a clean auto-flowing layout row. Buildable, and editors can add/remove cards.
- **Workforce course cards + Enrole links** (`workforce-continuing-education.html`). Static `.card` grid where each CTA is an external link to `enrole.com`. No dynamic behavior. Fully buildable; the "no sessions" pill is just a styled span an editor flips on/off.
- **Trust strip / start-steps yellow bar** (program pages). A single-column colored band with inline links. Composer colored section + button row.

## Needs Custom Code

Buildable in Composer but only via a custom HTML/CSS embed (or a developer-built reusable element), not via standard editor blocks:

- **Program hero (split text + image, stat bar).** `program-hero__inner` is a `1.1fr 0.9fr` CSS grid with a full-bleed `object-fit: cover` image on a dark gradient, plus the `stat-bar` flex row of label/value pairs. Composer's stock hero/banner element will not reproduce the asymmetric split + edge-to-edge cover image cleanly. This wants to become **one reusable custom hero element** with editable fields (eyebrow, H1, intro, up to 6 stat pairs, image). If it stays as raw HTML, editors will be hand-editing `<div class="stat-bar__item">` blocks, which they should not do.
- **Accordion course sequence.** Built on native `<details>/<summary>` with `summary::-webkit-details-marker { display: none }` and a custom hours badge. Native `<details>` works fine inside a Composer embed (no JS needed, which is good), but Composer has no native "course accordion" element, so it is a custom code block. Editors adding a course = pasting a new `<details class="accordion-item">` block. Workable but fragile (see Maintainability). Recommend a developer-built accordion element with repeatable "course name / hours / description" fields.
- **Video cards (thumbnail-link pattern).** The cards use the YouTube `img.youtube.com/vi/<id>/maxresdefault.jpg` thumbnail with an `onerror` JS fallback to `hqdefault.jpg`, wrapped in an `<a>` to the watch page. The inline `onerror` handler is JavaScript; Composer's HTML sanitizer in standard rich-text widgets will very likely **strip inline event handlers**. This must live in a custom code/embed element, or the fallback must be dropped and a guaranteed-present thumbnail size used (`hqdefault.jpg` always exists). Note `welding-stpete.html` defines `.video-card__embed iframe` styles for a true iframe embed but the live card is the thumbnail-link pattern; if any page switches to a real YouTube iframe, that is a standard Composer embed and fine.
- **Sticky jump-nav.** `position: sticky; top: 0; z-index: 200` horizontal scroller with `scrollbar-width: none` and `::-webkit-scrollbar { display:none }`. Anchor links to in-page `id`s. Buildable as a custom embed. Risk: Composer themes sometimes have their own sticky site-header with a z-index that will fight `z-index: 200`; the two sticky elements can overlap or double-stick. Needs testing against the real Composer header. The `scroll-margin-top: 100px` on `#counselor` is the right instinct but must be tuned to the actual Composer header height.
- **PDF resource cards / aid banner / FLRTW block / licensure disclosure / sister-program callout.** All are bespoke styled blocks defined only in the page-local `<style>`. Each is a custom code block today. Several of these (FLRTW block, licensure disclosure, aid banner) are **repeated verbatim across every program page**, so they are prime candidates to be promoted into `styles.css` as named components and/or saved as Composer reusable content blocks rather than re-pasted per page.

## Needs Simplification

- **Programs A-Z client-side JS filter (`programs.html`) - H8, still open.** The page renders ~41 `.prog-card` nodes and filters them with a `DOMContentLoaded` script reading `?cluster=` / `?campus=` URL params plus two `<select>` change handlers toggling a `.hidden` class. This is the recurring blocker. Concerns in Composer:
  1. **Custom JS in Composer is constrained.** It can run inside a custom code element, but a page that is *primarily* a JS-driven app is exactly the kind of one-off that breaks on CMS template updates and that no content editor can maintain. Adding/removing a program means editing raw `<div class="prog-card" data-cluster="..." data-campus="...">` markup, which non-technical staff will not do safely.
  2. **The nav and homepage already deep-link via `?cluster=health` etc.** (seen in every page's Programs dropdown). If the filter is removed, those links break.
  - **Recommended simplification (decision needed before July):** Replace the hand-maintained card list + JS with **Finalsite Posts/Content element** where each program is a structured Post tagged by cluster and campus, and the directory page uses Composer's built-in **filtered Posts feed**. That gives native, editor-maintainable filtering, kills the data-attribute hand-editing, and the `?cluster=` deep-links can map to pre-filtered feed views or category landing pages. This is the single highest-value architectural change in the Programs cluster. If a Posts feed is not acceptable, the fallback is a **static A-Z list with anchor jumps per cluster** (no JS, fully editable), accepting loss of campus filtering. Either way, the bespoke JS filter should not ship into Composer as-is.

- **Per-page `<style>` blocks (every page except the two hubs lean on them heavily).** `practical-nursing-clearwater.html` carries ~110 lines, `welding-stpete.html` ~260 lines, the hub/contact pages 40-260 lines each. This works in static HTML but in Composer it means each page's design lives in a custom code block that editors can accidentally delete or that drifts page-to-page (the welding and nursing hero CSS are near-duplicates but already diverging: welding has `.content-split`, `.instructor-grid`, `.program-sister-callout` that nursing lacks). **Simplify by lifting all shared program-page CSS into `styles.css` once**, so individual pages carry zero or near-zero page-local style. This is the prerequisite for the program page being a real reusable Composer template instead of a copy-paste artifact.

## Cannot Be Built

Nothing in this batch is fundamentally incompatible with Finalsite. Everything has a Composer path. The closest to "cannot" is the JS filter, and that is "should not ship as JS," not "impossible" — it is reframed under Needs Simplification.

## Maintainability Concerns

These work technically but will hurt non-technical editors after launch:

1. **Heavy inline `style="..."` attributes throughout the program pages.** Section padding, max-widths, colors, font sizes are all inline on `<section>`, `<h2>`, `<p>`, `<div>` (e.g. nursing `style="padding: 5rem 0; background: white;"` on nearly every section, hero stat values, counselor card internals). In Composer's rich-text editor, inline styles survive but are invisible and easy to clobber; an editor pasting new text or using the WYSIWYG "clear formatting" button can wipe them. Every visual decision should move to a class in `styles.css`. This is the biggest day-to-day maintenance risk.
2. **Per-page hand-coded nav + footer copies.** Each of the 7 pages embeds a full copy of the header nav and footer. The campus pages (nursing, welding, apprenticeships, contact) carry the campus chrome; the institutional pages (programs, adult-ed) carry main chrome. In Composer these MUST become 1 shared main header/footer + 1 shared campus header/footer (4 global regions total), or every nav change (e.g., a future M21-style cluster fix) requires editing dozens of files. Right now a single nav edit is an N-file find/replace. Also note `clearwater-contact.html`'s Campus Info dropdown has a *different* item set (Employer Partnerships / Post a Job / Advisory Committees → `coming-soon.html`) than the other campus pages' Campus Info dropdown — proof the per-page copies are already drifting.
3. **Hand-coded dual-campus link lists inside cards** (`programs.html` `prog-card-campus-links`, `adult-education-pathways.html` `aw-card-links`). Cards that serve both campuses stack two CTA links via inline-flex. An editor maintaining these has to know to add/remove a second `<a>` and keep the `data-campus="clw stp"` attribute in sync on the Programs page. Fragile. A structured Posts model (above) makes campus a field, not hand-markup.
4. **Accordion-by-hand.** Adding a course means pasting a correctly-nested `<details><summary><span class="course-name">…</span><span class="hours-badge">…</span></summary><div class="accordion-body">…</div></details>`. One missing close tag silently breaks the rest of the page. Needs to be a Composer repeatable field element.
5. **Embedded data-reconciliation TODO comments shipping in page source.** `welding-stpete.html` lines 933-940 carry a live HTML comment flagging an unresolved schedule conflict (day vs evening hours, "Confirm with Cheri Ashwood"), and the same page has two `href="#"` placeholder PDF cards ("PDF coming soon"). These are fine in a mockup but must be resolved or removed before the Composer build; placeholder `#` links and stale TODOs are exactly what slips into production. (Content accuracy, not strictly CMS, but it rides in via the custom-code block.)
6. **External thumbnail dependency.** Video cards hot-link `img.youtube.com` thumbnails. Fine, but if a video is unlisted/removed the maxres thumbnail 404s and the JS fallback (which Composer may strip) is the only safety net. Lower risk than the above.

## Page-by-Page CMS Mapping

### programs.html (Programs A-Z directory)
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Utility bar / header / footer | Global regions | No | Yes (if global) | Main-site chrome |
| Page header band | Colored section + heading | No | Yes | Inline styles to migrate |
| Short-courses callout | Button row | No | Yes | |
| Filter `<select>` controls + JS | None native | **Yes (JS)** | **No** | H8. Reframe as Posts feed or static anchored list |
| `.prog-card` list (41 cards w/ data attrs) | Posts feed (recommended) or card grid | **Yes today** | **No today** | Hand-edited data-cluster/data-campus attrs; dual-campus cards stack 2 CTAs |
| No-results message | Conditional text | Yes (JS-toggled) | No | Goes away with Posts feed |

### practical-nursing-clearwater.html (program template, fullest example)
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Breadcrumb | Static block | No | Yes | |
| Split hero + stat bar | Custom hero element | **Yes** | Only if fielded | 5 stat items hand-coded |
| Start-steps yellow bar | Colored section + buttons | Marginal | Yes | |
| Trust strip | Colored band + inline spans | Marginal | Yes | |
| Sticky jump-nav | Custom embed | **Yes** | Caution | z-index/sticky vs Composer header |
| Admission reqs / TEAS callout / Zoom session | Rich-text + styled callouts | Partial | Yes | Zoom ID/passcode are editable text |
| Course sequence accordion | Custom accordion element | **Yes** | Only if fielded | `<details>` by hand otherwise |
| Info-card grid (2-up) | 2-col layout row | Partial | Yes | |
| Path-to-RN / Distance Ed | Rich-text + callout | Partial | Yes | |
| Credentials + FLRTW + licensure | Custom styled blocks | **Yes** | Promote to shared component | Repeated across all program pages |
| Aid banner + PDF resource cards | Custom blocks | **Yes** | Yes (links are fields) | Real Finalsite resource-manager PDF URLs (good) |
| Video grid (2x2 thumbnails) | Custom embed | **Yes (onerror JS)** | Caution | Inline `onerror` likely stripped |
| Partner logo / counselor card | Image + content block | No | Yes | |

### welding-stpete.html (program template, St. Pete variant)
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Hero + stat bar (incl. salary/BLS) | Custom hero element | **Yes** | Only if fielded | 6 stat items; `.unavailable` styling |
| Start-steps (external apply/shadow links) | Button row | Marginal | Yes | Links to live myptc/stpete URLs |
| Jump-nav | Custom embed | **Yes** | Caution | |
| Single video card | Custom embed | **Yes (onerror JS)** | Caution | |
| Course sequence accordion (5 courses) | Custom accordion | **Yes** | Only if fielded | |
| Schedule + reqs 2-up (inline-styled) | 2-col row | **Yes (inline)** | No | Ships unresolved schedule-conflict TODO comment |
| Credentials `.content-split` (1.2fr/0.8fr) | 2-col row + sidebar | **Yes** | Promote shared | FLRTW duplicated from nursing |
| PDF cards | Custom blocks | **Yes** | No today | Both are `href="#"` placeholders |
| Counselor / Apply CTA | Content + buttons | No | Yes | |

### apprenticeships-clearwater.html (hub)
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Hero band | Colored section + heading | No | Yes | Minimal page-local CSS |
| Tier 1 PTC-sponsored cards | `.card-grid` (canonical) | No | **Yes** | Model pattern |
| How-it-works 3-step grid | 3-col layout row | Marginal | Yes | On dark bg |
| Yellow CTA bar | Colored section + buttons | Marginal | Yes | |
| Tier 2 community list | List of styled rows | Marginal | Yes | Plain name + sponsor text (no external URLs by design) |
| Related-programs callout | Callout block | Marginal | Yes | |

### adult-education-pathways.html (hub)
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Page hero | Colored section | No | Yes | |
| Destination card grid | `.card-grid` (canonical) | No | **Yes** | Dual-campus CTAs stack via `aw-card-links` (minor) |
| Cross-link banner | Callout + buttons | Marginal | Yes | Cleanest page in batch |

### workforce-continuing-education.html (hub)
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Page hero + jump-nav pills | Colored section + link row | Marginal | Yes | Anchor links, no JS |
| Campus-location alert | Styled callout | Marginal | Yes | |
| Course `.card` grid (Enrole CTAs) | Card grid | No | **Yes** | All external links to enrole.com; no filter JS |
| No-sessions pill / divider banner | Styled span/banner | Marginal | Yes | Editor flips status |
| Enrole "all courses" callout + CTA band | Colored sections + buttons | Marginal | Yes | |

### clearwater-contact.html
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Page hero | Colored section | No | Yes | Breadcrumb uses `content:"/"` (cosmetic, not semantic — minor a11y note) |
| Contact card grid (auto-fit) | Auto-flow layout row | No | **Yes** | |
| Map callout | 2-col callout | Marginal | Yes | No embedded map iframe (links to campus-maps.html) — good, avoids a maps embed |
| Back link | Link | No | Yes | No web form on page, so no Composer form element needed |

## Top 3 Issues (ranked by implementation risk)

1. **Programs A-Z JS filter (H8) - architecture decision blocks the Programs build.** A JS-driven, hand-maintained 41-card directory is not Composer-native and not editor-maintainable. Decide before July: convert programs to a tagged Posts feed with Composer's native filtering (recommended; makes cluster + campus into fields and preserves `?cluster=` deep-links as feed views), or fall back to a static anchored A-Z list (no JS, loses campus filter). Do not port the inline JS filter into a Composer custom-code block as the launch solution.

2. **Program-page design lives in per-page `<style>` blocks + inline styles, not in `styles.css`.** Every program/hub page ships 40-260 lines of page-local CSS plus pervasive inline `style="..."`, and the welding/nursing variants are already diverging. This makes the "template" a copy-paste artifact rather than a reusable Composer template, and inline styles are the thing editors will accidentally destroy. Lift all shared program-page CSS (hero, stat-bar, accordion, jump-nav, FLRTW block, aid banner, PDF cards, credentials) into `styles.css` as named components, and build the repeated blocks (hero, accordion, FLRTW, credentials) as Composer reusable elements with editable fields before the build, so one page is genuinely clonable.

3. **Per-page header/nav/footer copies will fragment in Composer (and already are).** All 7 pages embed full chrome; `clearwater-contact.html`'s Campus Info dropdown already differs from the other campus pages. In Composer these must collapse to shared global regions (main header/footer + campus header/footer). Secondary cleanups that ride along: the video-card inline `onerror` JS (likely sanitizer-stripped — drop the fallback or use `hqdefault.jpg` which always exists), the sticky jump-nav z-index vs Composer's own sticky header, and removing the shipped placeholder `href="#"` PDF links + the unresolved schedule-conflict TODO comment in `welding-stpete.html` before they reach production.
