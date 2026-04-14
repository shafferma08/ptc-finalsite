# PTC Website Redesign — Progress Log

This file tracks daily work sessions on the PTC website redesign. Each entry records what was completed, decisions made, blockers, and next priorities. Read this before starting a new session to avoid repeating work.

---

## April 14, 2026

### What was completed

**`styles.css` — Panel background alternation (Implementation Plan)**
- Added `background: var(--color-off-white)` to `.why-ptc` (previously inheriting body background, creating visual monotony)
- Added `background: var(--color-off-white)` to `.news-section` (same fix)
- Result: The homepage now has a proper alternating panel rhythm: Hero (dark image) → Quick Links (white) → Why PTC (off-white) → Programs (white) → Campuses (green) → News (off-white) → CTA Band (dark). This maps 1-to-1 to Finalsite Composer panel backgrounds as described in `docs/implementation_plan.md`.

**`index.html` — Navigation update (UX Recommendation #4 from `docs/homepage_ux_review.md`)**
- Split the single "Admissions & Aid" nav item into two separate dropdowns: **Admissions** and **Tuition & Aid**
- Admissions dropdown now contains: How to Apply, Enrollment Steps, Transfer Students, Readmission, Testing & Assessment, Campus Tours
- Tuition & Aid dropdown now contains: Tuition & Fee Rates, **Pay Tuition** (new), FAFSA & Eligibility, Federal & State Funding, Scholarships, Veterans Benefits, Net Price Calculator, Refund Policy
- This separation aligns with the proposed sitemap (Part 3 of `ptc_sitemap.md`) and directly addresses UX Recommendation #4

**`index.html` + `styles.css` — Employer engagement hook (UX Recommendation #3 from `docs/homepage_ux_review.md`)**
- Added a callout bar inside the News & Events section, below the news grid
- Content: "Are you an employer? PTC graduates are job-ready, industry-certified, and eager to work. [Post a Job or Partner with Us →]"
- Styled with a green left-border accent, `--color-green-light` background, and responsive layout (stacks on mobile)
- This addresses UX Recommendation #3 ("Hire Our Grads" hook) without cluttering the main content flow

### Decisions made

- Used `--color-off-white` (#F7F8FA) for Why PTC and News backgrounds rather than a pure gray. It's close enough to the `#f5f7fa` called out in the implementation plan, and uses the existing design token rather than adding a one-off value.
- Placed the employer hook inside the news section container rather than as a standalone section, to keep it contextually close to community-facing content without breaking the panel cadence.
- The Tuition & Aid dropdown now fully matches the structure proposed in the sitemap (Part 3, Main Site nav). The footer "Tuition & Aid" link was already using the correct label.

### UX recommendations status (from `docs/homepage_ux_review.md`)

| # | Recommendation | Status |
|---|---------------|--------|
| 1 | Add "Student Portal" to Quick Links | Done (was already present in a prior session) |
| 2 | Rename footer "Employment" to "Careers at PTC" | Done (was already present in a prior session) |
| 3 | Add employer engagement hook near News | **Done today** |
| 4 | Add "Pay Tuition" to Tuition & Aid dropdown | **Done today** |

All four UX recommendations from `docs/homepage_ux_review.md` are now implemented.

**`welding-clearwater.html` — UX improvements (response to reviewer feedback)**
- Added a salary stat to the hero stat bar: "Avg. Salary $47,540/yr • BLS 2023"
- Added a counselor nudge line below the hero CTA: "Have questions? Talk to your counselor before you apply." — links down to the counselor section
- Added a sticky jump-nav bar (appears below the breadcrumbs) with anchor links to: See It In Action, Course Sequence, Credentials & Cost, Get Started, Talk to a Counselor
- Added matching section IDs: `id="program-videos"`, `id="program-courses"`, `id="program-credentials"` (counselor section already had `id="counselor"`)
- Added CSS for `.stat-bls`, `.hero-counselor-nudge`, and the full `.jump-nav` system (sticky, z-index 200, horizontal scroll on mobile) to `styles.css`
- Decision: reviewer suggested clickable boxes in the hero green space; instead used a sticky jump-nav, which better solves the scroll problem without cluttering the hero layout.

**`schedule-clearwater.html` — new interactive class schedule page (created)**
- Built as a standalone Clearwater campus schedule page for academic year 2026-2027
- 64 program entries stored as a JavaScript array (fields: name, hours, days, timeLabel, timeOfDay, location, startDate, category)
- Filter chips for Category (All / Full-Time / Adult Education / Apprenticeships) and Time of Day (All / Morning / Afternoon / Evening / Online / Offsite)
- Search input filtering on program name
- Renders a dynamic table with day badges (M/T/W/R/F/S circles, green when active), color-coded time badges, and location badges (Main Campus, Pinellas High Innovation, Offsite)
- Results counter, Clear Filters button, no-results state
- Finalsite delivery: embed via Custom HTML element on a Clearwater campus schedule page
- PHI = Pinellas High Innovation campus (separate PTC location, not a generic abbreviation)

**`docs/progress-log.md` — created**
- This file. Established as a running project log so future sessions can pick up without repeating work.

### Issues or blockers

- The main nav now has 6 items (Programs, Admissions, Tuition & Aid, Campuses, Current Students, About PTC). On narrow desktops this may get tight. Worth checking the nav layout at ~1024px viewport width. No immediate fix needed — just flag for Marianne to look at when reviewing the mockup.
- The employer hook links to `#` as a placeholder. Marianne will need to confirm the actual destination (likely the "Employer Partnerships" or "Post a Job" page under Community nav).

### Next priorities

1. **Contact / About pages** — neither `contact.html` nor `about.html` exists yet. The footer and nav both reference these. A basic About page mockup (mission, accreditation, leadership) would be a meaningful next addition.
2. **Admissions page mockup** — `admissions.html` does not exist. Now that Admissions is its own nav item, a landing page for it would complete that flow.
3. **Tuition & Aid page mockup** — same reasoning. The split nav now points to a page that doesn't have a mockup.
4. **Campus page nav audit** — `clearwater.html` and `stpete.html` should have their navigation updated to match the split Admissions / Tuition & Aid structure in `index.html`.
5. **Finalsite Composer notes** — consider adding a short annotation block to `docs/implementation_plan.md` for each homepage section, documenting the exact Composer panel type and settings that correspond to each mockup section.

---

## April 14, 2026 (Session 2 — Reorganization & Consistency Pass)

### What was completed

**File reorganization**
- Created `urgent-fixes/` folder and moved 5 urgent-fix files into it: `military-veteran-resources.html`, `community_resources_guide.html`, `short-courses-simple.html`, `summer-camps-mockup.html`, `homepage-improved-mockup.html`. The homepage mockup needed asset path updates (`assets/` → `../assets/`) before moving.
- Deleted `short-courses.html` (old abandoned version, superseded by `short-courses-simple.html` in urgent-fixes/).
- Created `_templates/` folder with three shell templates (see below).
- Moved `campus-template.html` → `_templates/campus-landing.html` (the campus landing page prototype template).

**Shell templates created in `_templates/`**
- `shell-main.html` — main myptc.edu site: two-phone utility bar, 6-pillar nav (Programs two-column, Admissions, Tuition & Aid, Campuses, Current Students, About PTC), search overlay, full main-site footer with accreditation badges.
- `shell-clearwater.html` — Clearwater campus: campus utility bar (727.538.7167, address, Canvas, SIS, Main Site, St. Pete Campus), 5-pillar nav (Programs, Admissions & Aid, Current Students, Community, Campus Info), Apply Now CTA, Clearwater-specific footer with campus address and Clearwater Links column.
- `shell-stpete.html` — St. Pete campus: same structure but 727.893.2500, 901 34th St S address, links back to Clearwater Campus, St. Pete-specific footer.
- Use these as the starting point for any new page. Copy, update the `<title>` and `<meta name="description">`, and build content inside `<main>`.

**`schedule-clearwater.html` — header/footer upgrade**
- Replaced the simplified 3-link utility bar and logo-only header with the full Clearwater 5-pillar nav (matching `welding-clearwater.html`).
- Replaced the one-liner stub footer with the full Clearwater footer (address, Clearwater Links column, accreditation badges, non-discrimination notice).
- Footer Clearwater Links updated to: Clearwater Campus Home → `clearwater.html`, All Programs A–Z → `programs.html`, plus Campus Map & Directions, Academic Calendar, Staff Directory.

**Cross-page nav wiring**
- `programs.html` Welding Technology card "Learn More" → `welding-clearwater.html` (was `#`).
- `clearwater.html` Programs nav dropdown → added "All Programs A–Z" → `programs.html` and "Class Schedule" → `schedule-clearwater.html`.
- `clearwater.html` footer Clearwater Links → added "Class Schedule" → `schedule-clearwater.html`.
- `welding-clearwater.html` footer Clearwater Links → added "Class Schedule" → `schedule-clearwater.html`.

### Decisions made

- Shell templates live in `_templates/` and use root-relative asset paths (`assets/...`, `styles.css`, `script.js`). They are reference files, not live pages, so GitHub Pages won't serve them as prototype URLs.
- `campus-template.html` was renamed to `campus-landing.html` in `_templates/` to clarify it's the landing page pattern, not a generic shell.
- The three-site architecture (main, clearwater, stpete) is now represented by distinct shell templates so any new page starts with the correct nav without copy-paste from a random existing page.

### Issues or blockers

- `stpete.html` nav and footer still use the old "Admissions & Aid" single-item pattern. Now that `index.html` split them into Admissions + Tuition & Aid, St. Pete's campus nav should eventually align. Not urgent since the St. Pete campus nav is deliberately a 5-pillar campus nav (not the main-site nav), but worth noting.
- Welding Technology card in `programs.html` now links to `welding-clearwater.html` specifically. There is no `welding-stpete.html` yet. If/when a St. Pete version exists, the card should be split or a campus chooser added.
- `campus-template.html` still exists at the root (kept as-is for now, copy moved to `_templates/campus-landing.html`). Can be deleted once Marianne confirms it's no longer needed at the root.

### Next priorities

1. **Contact / About pages** — `about.html` and `contact.html` still don't exist. Footer and nav reference both.
2. **Admissions landing page** — `admissions.html` still missing. Now a full nav item on the main site.
3. **Tuition & Aid landing page** — same gap.
4. **welding-stpete.html** — the programs.html card links only to the Clearwater welding page. A St. Pete version or a campus-chooser pattern would complete this.
5. **Delete root `campus-template.html`** — once confirmed it's replaced by `_templates/campus-landing.html`.

---

## April 14, 2026 (Session 3 — Nav Audit & Taxonomy Alignment)

### What was completed

**Navigation audit against proposal (Section 5)**
- Compared all live prototype pages against the 5-pillar campus nav structure defined in `ptc_redesign_proposal.html#proposed-navigation`
- Found that campus pages had a "Community" pillar not in the proposal, were missing "About This Campus" in Campus Info, and used simplified/inconsistent category names instead of the official taxonomy from Section 5.3
- Found that welding-clearwater.html was using the main site nav instead of the Clearwater campus nav (now fixed in Session 2)
- Determined COE Outcomes content should live on a dedicated Consumer Information page linked from the footer, not a nav pillar — nav is already at capacity and compliance content is not a primary user journey

**Campus nav fully rebuilt across 6 files** (Python regex replacement, single pass)

Files updated:
- `clearwater.html`
- `welding-clearwater.html`
- `schedule-clearwater.html`
- `_templates/shell-clearwater.html`
- `stpete.html`
- `_templates/shell-stpete.html`

New 4-pillar + Apply Now structure for all campus pages:

| Pillar | Items |
|---|---|
| **Programs** | By Career Cluster (campus-specific) + Explore (All Programs A–Z, Class Schedule*, Distance Learning) |
| **Admissions & Aid** | How to Apply, Enrollment Steps, Tuition & Fees, Financial Aid & FAFSA, Scholarships, Testing & Assessment, Veterans Benefits |
| **Current Students** | Academic Calendar, Canvas Login, Student Services, Campus Bookstore, Record Request, Tech Support |
| **Campus Info** | About This Campus, Map & Directions, Staff Directory, Employer Partnerships, Post a Job for Students, Advisory Committees, Consumer Information, Contact Us |
| **Apply Now** | CTA button — no dropdown |

*Class Schedule link present on Clearwater only (schedule-clearwater.html exists; no St. Pete equivalent yet)

**Taxonomy aligned to Section 5.3 official clusters**

Clearwater Programs dropdown — 8 clusters:
Health Sciences, Information Technology, Skilled Trades & Construction, Transportation & Logistics, Culinary & Hospitality, Cosmetology & Barbering, Business & Office, Arts Media & Education

St. Pete Programs dropdown — 7 clusters (no Business & Office — St. Pete has no programs in that cluster):
Health Sciences, Information Technology, Skilled Trades & Construction, Transportation & Logistics, Culinary & Hospitality, Cosmetology & Barbering, Arts Media & Education

**Community pillar removed from campus nav**
- Post a Job for Students, Employer Partnerships, and Advisory Committees moved into Campus Info dropdown
- Keeps nav at 4 content pillars, matches proposal structure, employer content remains discoverable

### Decisions made

- "Community" as a standalone pillar was not in the proposal. Folding those 3 items into Campus Info keeps the nav clean without losing the content.
- Distance Learning added to Explore section (not a career cluster per the taxonomy, but a program format users look for).
- COE compliance content (Consumer Information) remains in Campus Info and footer — not a dedicated nav pillar. A future `consumer-information.html` page should consolidate all required disclosures and be linked from footer Resources column.
- Admissions & Aid stays combined on campus sites (simpler for campus context). The main site's split into separate Admissions + Tuition & Aid pillars is an intentional UX improvement over the proposal, documented as approved deviation.

### Issues or blockers

- All 8 cluster names and 7 Explore links on campus nav currently point to `#`. These will need real URLs as campus program category pages are built.
- St. Pete has no class schedule page yet. When `schedule-stpete.html` is created, add "Class Schedule" to St. Pete's Explore section.
- `programs.html` filter bar still uses old simplified cluster labels. Should be updated to match the Section 5.3 taxonomy names (e.g., "Skilled Trades" → "Skilled Trades & Construction", "Arts & Media" → "Arts, Media & Education").

### Next priorities

1. **Update programs.html filter bar** — align cluster labels to Section 5.3 taxonomy names.
2. **Contact / About pages** — `about.html` and `contact.html` still missing.
3. **Admissions landing page** — `admissions.html` still missing.
4. **Tuition & Aid landing page** — same gap.
5. **Consumer Information page** — dedicated page for COE compliance disclosures, linked from footer Resources column on all sites.
6. **welding-stpete.html** — St. Pete equivalent of the welding program page.
7. **Delete root `campus-template.html`** — once confirmed it's replaced by `_templates/campus-landing.html`.

---

## April 14, 2026 (Session 4 — programs.html Taxonomy Fix)

### What was completed

**`programs.html` filter bar and card taxonomy aligned to Section 5.3**

Filter dropdown updated:
- "Skilled Trades & Manufacturing" → "Skilled Trades & Construction"
- "Transportation" → "Transportation & Logistics"
- "Culinary Arts" → "Culinary & Hospitality"
- "Cosmetology & Design" → "Cosmetology & Barbering"
- Added: Business & Office (`value="business"`)
- Added: Arts, Media & Education (`value="arts"`)

Six miscategorized program cards corrected:
| Program | Was | Now |
|---|---|---|
| Accounting Operations | Information Technology | Business & Office |
| Child Care Center Operations | Health Sciences | Arts, Media & Education |
| Early Childhood Education | Health Sciences | Arts, Media & Education |
| Interior Decorating Services | Cosmetology & Barbering | Arts, Media & Education |
| School Age Professional Certificate | Health Sciences | Arts, Media & Education |
| Stage Production | Cosmetology & Barbering | Arts, Media & Education |

Inline tag labels updated on all moved cards to show correct cluster name and icon.

Final card distribution: Health Sciences (7), IT (4), Skilled Trades & Construction (10), Transportation & Logistics (7), Culinary & Hospitality (3), Cosmetology & Barbering (4), Business & Office (1), Arts, Media & Education (5) = 41 programs total.

### Next priorities

1. **Contact / About pages** — still missing.
2. **Admissions landing page** — still missing.
3. **Tuition & Aid landing page** — still missing.
4. **Consumer Information page** — COE compliance disclosures hub, linked from footer.
5. **welding-stpete.html** — St. Pete equivalent of the welding program page.
6. **Delete root `campus-template.html`** — once confirmed replaced by `_templates/campus-landing.html`.
