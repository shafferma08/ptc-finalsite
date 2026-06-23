# Finalsite CMS Feasibility Review (Part 2) - 2026-06-15

Follow-up Composer feasibility pass covering the pages the main 10-page funnel review (`agent-finalsite-cms.md`) did not touch: the four Community Resources pages, the two JS modules they share, the JS-templated Clearwater class schedule, the Enrole-driven workforce/continuing-ed page, and the adult-education routing page.

Bottom line: most of these pages are MORE custom than `programs.html` (H8/M49), not less. The Community Agency Directory is the single most ambitious thing in the whole redesign for a CMS: it is a two-axis faceted search engine with live count projection, an external 40-record data file, a runtime `?lang=es` translation layer, and per-card disclosure toggles, all hand-built in vanilla JS. The Clearwater schedule is a second hand-rolled filter engine over a 70-row JS array. Neither is editor-maintainable as written, and both rely on `<script>` blocks and external `.js` files that Composer's HTML sanitizer and block model do not host the way a static file server does. The good news: the Community pages are explicitly off-main-nav "Study Group" tools (their own footers say so), so they are the right place to accept a custom embed rather than force Composer-native, as long as Marianne agrees they live as a maintained code app, not editor content.

The recurring theme across all seven pages is the same M51 problem already on file, multiplied: every page hand-codes its own header, nav, and footer, and the Community set introduces a SECOND chrome system (`.offset-header` / `.community-nav` / `.offset-footer`) that is entirely separate from the main `.site-header` / `.site-footer` system. That is two navigation systems to maintain.

---

## Buildable As-Is

Map cleanly to Composer layouts with little or no custom code:

- **Community hub (`community-resources.html`) body.** Crisis callout row (3-up), audience choice cards (3-up `.choice` grid), and the "About these pages" scope note are all standard responsive card grids and colored panels. Drop the i18n and this is a plain 1-column-with-grids page. Buildable as native Composer rows.
- **Staff & Faculty page (`community-staff.html`) body.** Three sections of `.resource-card` grids (PD partners, Study Group placeholders, Related) plus a jump-nav. This is the most Composer-friendly Community page: no JS at all, no i18n hooks, just card grids and anchor links. Maps to 2-3 column card rows. Editors could maintain the cards if they are real CMS link cards.
- **Employers page (`community-employers.html`) body.** Same shape as Staff: a why-callout panel, a `.resource-card` grid (5 real + 1 placeholder), and a green `.contact-band`. No JS, no i18n. Native rows + cards.
- **Adult-education-pathways body (`adult-education-pathways.html`).** This one already uses the canonical `.card` / `.card-grid` components (the page comment even says so), 5 cards with dual-campus CTA link groups + a crosslink banner. This is the model the other custom pages should follow. Fully native, fully editor-maintainable. Best-behaved page in this batch.
- **Workforce course cards (`workforce-continuing-education.html`).** The course cards already use canonical `.card card--accent card--lift` / `.card-grid` plus `.card--placeholder` for no-session courses. The grid, the campus badges, the jump-nav, the Enrole CTA callout, and the CTA band are all standard panels/cards. Native. (The Enrole dependency is a content concern, not a layout one; see Needs Custom Code.)
- **Schedule page chrome and header band (`schedule-clearwater.html`).** The green page header with breadcrumb + meta badges is a standard banner. The note band at the bottom is a static panel. Native.
- **Per-page `:root` token reuse.** Every page here pulls `styles.css` and uses `var(--color-green)` etc. consistent with the global token system. Good. The page-local `<style>` blocks lean on tokens rather than hardcoding brand color (mostly; see scoping note).

## Needs Custom Code

Require a custom HTML/CSS/JS embed in Composer, but achievable:

- **Community Agency Directory (`community-directory.html`) - the single biggest custom item on the whole site.** This is ~290 lines of inline `<script>` implementing a true faceted search: OR-within-axis / AND-between-axis filtering across a population axis (4 chips) and a service axis (14 chips), plus debounced free-text search. On top of that it does three things that go well beyond the `programs.html` filter:
  1. **Live projected chip counts** (`projectedCount()` re-simulates the full filter for every one of the 18 chips on every render) and **greys out chips that would zero results** (`data-zero`).
  2. **Sticky removable active-filter pills** with per-pill remove buttons and a "Clear all".
  3. **Per-card "Show details" disclosure toggles** wired after every render, and a **"Last verified Sept 2015" stamp** formatted per card.
  This must ship as a custom code block (HTML container + the `<script>` + the two external `.js` files). It cannot be a Composer feed: Composer's native faceted feeds do single-axis tag filtering and do NOT do live count projection, zero-result greying, or the OR/AND cross-axis logic. Recommendation: keep it as a maintained custom embed (it is an off-main-nav Study Group tool, so that is acceptable), but treat the three `.js`/inline-script files as developer-owned code, not editor content. See Cannot Be Built for the file-hosting caveat and Maintainability for the data-file caveat.
- **`?lang=es` runtime translation layer (`community-i18n.js`), used by the hub AND the directory.** This is a hand-rolled i18n engine: it walks every `[data-i18n]` element, stashes the English `innerHTML` in a `data-i18n-en` attribute, and swaps in `TRANSLATIONS.es[key]` (innerHTML, including embedded `<a>`/`<strong>`), plus a `[data-i18n-attr]` path for placeholder/aria-label, plus URL `?lang=es` persistence via `history.replaceState`, plus a `langchange` event the directory listens for to re-render cards. This is the highest-risk-to-survive item after the directory itself, for three reasons:
  1. **Composer has its own translation/localization story** (and PCSB sites may use Finalsite's built-in language toggle or Google-translate widget). Running a second, custom, query-param i18n inside a code block will not integrate with the CMS language switcher, will not be indexed as separate-language pages for SEO, and may fight any site-level localization.
  2. **`innerHTML` replacement of `[data-i18n]` nodes is exactly what a CMS rich-text sanitizer interferes with.** If editors touch those nodes in Composer, the `data-i18n` keys get stripped and the toggle silently stops translating that element.
  3. It only translates UI chrome. Agency summaries stay English (the code and the `dir.summary_note` key both admit this), so the "Spanish version" is half-English regardless. A reviewer/parent could reasonably read that as broken.
  Recommendation: do NOT port this as the site's Spanish strategy. Either (a) confirm whether the live Finalsite site already has a language toggle and route Spanish through that, or (b) keep `?lang=es` ONLY inside the directory/hub custom embed as a self-contained widget feature, clearly scoped, and accept it does not extend to the rest of the site. Flag to Addison Richard: "does the PTC Finalsite tenant have a native language toggle, and does it cover custom code blocks?"
- **Clearwater class schedule (`schedule-clearwater.html`) filter engine.** A second hand-built filter app: a 70-entry `programs` JS array rendered into a `<table>` with category section-heading rows, day-badge pills, time-of-day color badges, location badges, a sticky chip filter bar (category + time-of-day), free-text search, live result count, category-heading auto-hide, and a no-results state. Like the directory, this is a custom embed, not native Composer. It is somewhat less risky than the directory (single data file, no i18n, no count projection), but it has the same maintainability problem: the 70 rows of schedule data live in a `<script>` array, so updating a start time or adding a section is a code edit. (Note: `schedule-stpete.html` was not in scope but is named throughout and almost certainly the same pattern; assume identical findings.)
- **Workforce page Enrole dependency.** Not a layout problem, but a hard external dependency to flag: 7 of the course cards deep-link into `enrole.com/ptc/jsp/course.jsp?courseId=XXXX` (and one `session.jsp?sessionId=SP2601-...`). Enrole is PTC's external registration system. These are hand-maintained per-course URLs with opaque IDs. Composer cannot generate or validate these; an editor adding a new short course must get the exact Enrole `courseId` and paste it. The session-level link (`SP2601-WTPOSS-01P`) bakes a term code into the URL and will rot when the term changes. This is editor-hostile and rot-prone. Recommendation: where possible, link to the Enrole category/landing page (`enrole.com/ptc/jsp/index.jsp`, which the page already uses for the "All Courses" callout) rather than per-session deep links, OR confirm whether Enrole offers an embeddable course feed/iframe so the card list is not hand-maintained. (Tracker L21 already flags these cards show no price; Enrole is the reason.)
- **Two PCSB resource-manager PDF links on the workforce page** (`myptc.edu/fs/resource-manager/view/<guid>`). Those GUIDs are Finalsite Resource Manager asset IDs from the LIVE site. They will only resolve if the same assets exist in the new tenant's Resource Manager. Re-upload and re-link at build; do not assume the GUIDs carry over.
- **Sticky filter bars** (`position: sticky; top: 0; z-index: 100/40`) on both the schedule and the directory. Sticky is fine in modern Composer, but inside a scoped code block the `top: 0` anchor is relative to the block, and if Composer wraps the embed in its own positioned container the stickiness can break or stick to the wrong offset. Test in a real Composer block before relying on it.

## Needs Simplification

- **Two parallel chrome systems.** The main funnel uses `.site-header` + mega-`.main-nav` + `.site-footer` (workforce, adult-ed, schedule pages all carry the full copy). The Community set uses a totally different `.offset-header` + `.community-nav` pill bar + `.offset-footer`. That is two headers, two footers, and two nav systems to build and maintain as Composer global regions. Simplify: decide whether Community pages are (a) inside the main site (then they should use the main header/footer global regions and drop `.offset-*`), or (b) a deliberately separate microsite (then `.offset-*` becomes ONE second global region set, not re-pasted into all four pages). Right now `.community-nav` is copy-pasted into all four Community pages with the active class hand-toggled, which is the M51 problem in miniature and will drift.
- **`main { font-size: 17px }` override repeated in 4 Community pages.** Each Community page bumps base font in a page-local `<style>`. Harmless but should be one shared rule (a Community-section class in `styles.css`) rather than four copies, or it will diverge.
- **Schedule data and directory data as JS arrays.** Both apps hardcode their content in `const programs = [...]` / `const AGENCIES = [...]`. For the schedule especially, this is institutional data (start times, locations, day patterns) that changes every term and that non-technical staff own. Simplify by sourcing from a Composer feed/collection or at least an external JSON the app fetches, so the data is editable without touching app logic. As-is, every schedule change is a developer ticket. (This is the schedule-page analog of the H8 programs.html finding, and arguably worse because schedule data churns more often than the program catalog.)

## Cannot Be Built

Nothing here is fundamentally impossible, but two hard constraints:

- **External `.js` files (`community-data.js`, `community-i18n.js`) are not how Composer hosts code.** Composer custom-code blocks take inline HTML/CSS/JS; they do not give you a clean `/community-data.js` path at the site root the way this static mockup assumes. Options at build: (1) inline all three scripts into one custom-code block per page (bloats the block, and the shared data file now has to be duplicated across the hub + directory, reintroducing drift), or (2) upload the `.js` files to Finalsite Resource Manager / a file asset and reference them by their CMS asset URL (works, but the URL is a GUID, not `community-data.js`, and editors will not understand it), or (3) host them as a small external app/iframe. This needs a decision with Finalsite before the build. It is the concrete reason the directory and i18n "survive only as a custom embed, not as CMS content."
- **`<script>`-injected DOM (table rows, agency cards) is invisible to Composer's editor, search, and accessibility tooling.** Because both apps render their entire content via JS at runtime, the actual programs/agencies do not exist in the page source. Composer's site search will not index them, the in-CMS WYSIWYG shows an empty container, and if `script.js`/the inline script fails to load (the same C8 risk already on file for `script.js`), the schedule table and the agency grid render completely blank with no fallback. The directory at least has an empty-state for zero filter matches, but neither app has a no-JS fallback. For a public institution, a schedule page that renders blank with JS disabled is an accessibility/availability problem. Recommend a static fallback (server-rendered rows) if these stay custom.

## Maintainability Concerns

- **The 2015 data problem is now a maintenance commitment, not just a content note.** `community-data.js` carries 40 agencies all stamped `verified: "2015-09"`, and the UI loudly surfaces "Last verified September 2015 / call before you go" on every card and in a yellow banner. That is honest and good UX, but it means someone owns re-verifying 40 agencies' phone numbers and addresses, in a JS file, by hand. There is no CMS workflow for "mark this agency re-verified." If this goes live, the staleness banner is a standing promise the Study Group has to keep. (Already tracked as a Community Resources follow-up.)
- **Directory is editor-hostile by construction.** Adding or editing an agency means hand-editing a JS object literal with a `tags: [...]` array whose tag strings must exactly match the chip `data-tag` values and the `POPULATION_TAGS` set. A typo in a tag silently drops the agency from a filter. No non-technical editor can safely maintain this. It is a developer-owned data file. That is acceptable IF everyone accepts the directory is an app, not a page.
- **i18n keys are invisible coupling.** Translation only works if every translatable element has a `data-i18n="..."` key that exactly matches a key in `community-i18n.js`. An editor who edits the English text in Composer (or whom Composer's editor strips the `data-i18n` attribute from) breaks the Spanish silently. There is no warning. This is fragile in any CMS.
- **Enrole course IDs and Resource Manager GUIDs are opaque hand-maintained strings** (see Needs Custom Code). Editors will not know how to get a new `courseId`; the term-coded session link will rot.
- **Schedule chrome drift already visible.** `schedule-clearwater.html`'s "Programs" dropdown is a stripped 3-item version (All Programs / Class Schedule / Distance Learning), while `workforce` and `adult-ed` carry the full 8-category mega-menu. Same header, three different contents across this batch. Exactly the M51 drift pattern. Global nav region is the fix.
- **`adult-education-pathways.html` links to 8 sub-pages that may not exist** (`dual-enrollment-clearwater.html`, `distance-learning-stpete.html`, `abe-ged-clearwater.html`, `esol-stpete.html`, etc.). Not a CMS feasibility issue per se, but at build these need to be real Composer pages or the routing page is a wall of dead links. (Related to tracker L21: page is "all routing, no substance.")

## Page-by-Page CMS Mapping

### community-resources.html (hub)
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Offset header + lang toggle | Second global header region OR main header | i18n = yes | No as-is | Decide: microsite vs main site (drop `.offset-*` if main) |
| Community sub-nav pills | Global region (1 copy, not 4) | No | No as-is (copy-pasted x4) | M51-in-miniature |
| Hero (gradient) | Banner element | No | Yes | i18n keys on eyebrow/h1/intro |
| Crisis callout row 3-up | 3-col panel row | No | Yes | i18n on each callout |
| Audience choice cards 3-up | 3-col card grid | No | Yes | Standard `.choice` cards |
| Scope note | 1-col panel | No | Yes | |
| `?lang=es` toggle | Custom JS embed | **Yes** | No | Does not integrate with native CMS localization |

### community-directory.html (faceted directory) - HIGHEST RISK
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Staleness banner | Static panel | No | Yes (text) | Standing re-verify promise |
| Filter card (18 chips, 2 axes) | **Custom JS embed** | **Yes** | No | OR/AND cross-axis, beyond native feed facets |
| Live chip counts + zero-greying | **Custom JS** | **Yes** | No | `projectedCount()` re-simulates per chip; no native equivalent |
| Sticky active-filter pills + clear | **Custom JS** | **Yes** | No | Per-pill remove + Clear all |
| Agency grid (JS-rendered cards) | **Custom JS** | **Yes** | No | 40 records in `community-data.js`; invisible to CMS search |
| Per-card detail disclosure | **Custom JS** | **Yes** | No | Re-wired every render |
| Empty state | (in JS) | Yes | n/a | Only fallback present; no no-JS fallback for the grid itself |
| `?lang=es` re-render on langchange | **Custom JS** | **Yes** | No | UI only; summaries stay English |

### schedule-clearwater.html (JS-templated schedule) - HIGH RISK
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Utility bar + main header + footer | Global regions | No | Yes if global | Programs dropdown is a stripped 3-item variant (drift) |
| Green page header + meta badges | Banner element | No | Yes | |
| Sticky filter bar (category + time chips + search) | **Custom JS embed** | **Yes** | No | Second hand-built filter engine |
| Schedule table (70-row JS array) | **Custom JS / or Composer feed** | **Yes** | No | Term data in `<script>`; every edit is a code change; blank if JS fails |
| Day/time/location badges | (in JS template) | Yes | No | |
| No-results state | (in JS) | Yes | n/a | No no-JS fallback for the table |
| Note band | Static panel | No | Yes | |

### workforce-continuing-education.html
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Utility bar + main header (full mega-nav) + footer | Global regions | No | Yes if global | Uses `script.js` for nav/search |
| Hero + breadcrumb | Banner element | No | Yes | |
| Jump-nav + campus alert | Static panels | No | Yes | |
| Course cards (canonical `.card`) | Card grid | No | Yes (structure) | **Enrole `courseId`/`sessionId` deep-links rot-prone** |
| No-session placeholder cards + divider | Card grid + panel | No | Yes | `.card--placeholder` |
| Enrole "All Courses" callout + CTA band | Panels | No | Yes | Enrole + 2 Resource Manager GUID PDFs to re-host |

### community-staff.html
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Offset header + community sub-nav + offset footer | Second global region set | No | No as-is (copy-pasted) | No i18n on this page (hub/dir only) |
| Hero | Banner element | No | Yes | |
| Jump-nav | Anchor links | No | Yes | |
| 3 resource-card grids | 2-3 col card grids | No | Yes | No JS at all; most Composer-friendly Community page |

### community-employers.html
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Offset header + community sub-nav + offset footer | Second global region set | No | No as-is (copy-pasted) | |
| Hero + why-callout | Banner + panel | No | Yes | |
| Resource-card grid (5 + 1 placeholder) | Card grid | No | Yes | External agency links only; no JS |
| Green contact-band | 1-col color panel | No | Yes | |

### adult-education-pathways.html - BEST BEHAVED
| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|-----------------|--------------|---------------|-------|
| Utility bar + main header + footer | Global regions | No | Yes if global | Uses `script.js`; `?cluster=` deep-links in nav (shared with funnel H8) |
| Hero + breadcrumb | Banner element | No | Yes | |
| 5 destination cards (canonical `.card`) | Card grid | No | Yes | Dual-campus CTA link groups; the model to copy |
| Crosslink banner | Panel + buttons | No | Yes | Links to 8 sub-pages that must exist at build |

## Top risks on these pages (ranked by implementation risk)

1. **The Community Agency Directory is more custom than `programs.html` (H8/M49) on every axis.** programs.html is a one-axis static-card filter; the directory is a two-axis OR/AND faceted engine with live count projection, zero-result greying, removable sticky pills, per-card disclosure, an external 40-record data file, AND a runtime translation layer, all in vanilla JS rendering content that does not exist in page source. There is no Composer-native element that does this. It must be a maintained custom embed. That is defensible only because it is an off-main-nav Study Group tool (its footer says so) - but Marianne should explicitly accept that the directory and its data file are developer-owned code, not editor-maintained content, and plan the "re-verify 40 agencies" upkeep that the visible 2015 staleness banner now commits PTC to.

2. **The `?lang=es` i18n layer will not survive as the site's Spanish strategy and may conflict with native Finalsite localization.** It is a custom innerHTML-swapping engine keyed on `data-i18n` attributes that a CMS rich-text editor will strip, it produces no separately-indexable Spanish URLs (SEO), it only translates chrome (summaries stay English), and PCSB Finalsite sites typically have their own translate widget that this would fight. Action before build: ask Addison Richard whether the PTC tenant has a native language toggle and whether it reaches custom code blocks. Keep `?lang=es` scoped strictly inside the directory/hub embed if kept at all.

3. **Two filter apps and two chrome systems multiply the M51/C8 problems already on file.** The Clearwater (and by extension St. Pete) schedule is a second hand-built filter engine over a 70-row term-data array that renders blank if JS fails and that staff must edit as code every term. On top of that, the Community set introduces an entirely separate `.offset-header`/`.community-nav`/`.offset-footer` chrome system copy-pasted across four pages, doubling the global-region maintenance surface and already drifting (the schedule page's Programs dropdown is a stripped variant of the funnel's mega-menu). Resolve by: making schedule data a Composer feed/external JSON with a static no-JS fallback, and collapsing chrome into shared global regions (either fold Community into the main header/footer, or treat it as one deliberate second microsite region set, not per-page copies). Both `script.js`-dependent main-nav pages here (workforce, adult-ed) also inherit the existing C8 "confirm script.js is wired or the mobile menu/search never opens" launch risk.
