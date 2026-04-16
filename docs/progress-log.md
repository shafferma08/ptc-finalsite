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

---

## April 15, 2026 (Session 6 — About Page, Admissions Page, Homepage Taxonomy Fix)

### What was completed

**`about.html` — new About PTC landing page (created)**
- Full main-site page with the standard shell (utility bar, 6-pillar nav, footer with accreditation badges)
- Page hero with green gradient background and breadcrumb (Home / About PTC)
- Mission statement banner with PTC's mission text, styled as a full-width green panel
- "Our Story" section: two-column layout (text + graduation photo) covering PTC's history, scope, and PCSB relationship
- "By the Numbers" stats row: 40+ Career Programs, 2 Campus Locations, 60+ Years of Excellence, 50+ Industry Partners
- History timeline: 6 milestones from 1961 founding through today, vertical line design with green dot markers
- Accreditation section (anchored as `#accreditation`): 3-card grid for COE, Cognia, and PCSB with logos and descriptions
- Campus Leadership section: 3 placeholder cards (Clearwater Director, St. Pete Director, District Administration) with avatar icons — names to be filled in by Marianne
- Two Campuses overview section: reverse-grid layout with campus descriptions and CTA buttons linking to clearwater.html and stpete.html
- CTA band and standard footer
- All page-specific styles scoped in a `<style>` block; fully responsive with media queries for mobile

**`admissions.html` — new Admissions landing page (created)**
- Full main-site page with standard shell
- Page hero with green gradient, breadcrumb (Home / Admissions)
- "How to Apply" section: 3-step card layout (Choose Your Program, Submit Application, Meet with Counselor) with numbered green circles and "Start Your Application" CTA
- "Enrollment Steps" section: 3-card layout covering testing, financial aid, and registration, with icon circles instead of numbers
- "Admission Pathways" section: 4 info cards covering Transfer Students, Readmission, Dual Enrollment, and Veterans, each with icon, description, and "learn more" links
- "Testing & Assessment" section: 3-card grid for CASAS, TEAS, and ABE/GED/ESOL with descriptions
- Campus Tours banner: green gradient CTA bar with "Schedule a Tour" button
- FAQ section: 5 collapsible questions covering application fees, diploma requirements, start dates, financial aid, and scheduling — uses inline JS toggle
- CTA band and standard footer
- All styles scoped in page `<style>` block; fully responsive
- Admissions nav dropdown links updated to anchor to page sections (#how-to-apply, #enrollment-steps, #pathways, #testing, #campus-tours)

**`index.html` — homepage featured program card titles aligned to Section 5.3 taxonomy**
- "Skilled Trades" → "Skilled Trades & Construction"
- "Transportation" → "Transportation & Logistics"
- "Culinary Arts" → "Culinary & Hospitality"
- "Cosmetology" → "Cosmetology & Barbering"
- These 4 cards in the "Explore Our Programs" section now match the taxonomy names used in the nav dropdowns, programs.html filter bar, and campus nav dropdowns

**Navigation links wired up across 3 files**
- `index.html`: Admissions nav link → `admissions.html`, About PTC nav link → `about.html`, "Welcome & History" → `about.html`, "Accreditation" → `about.html#accreditation`, "Learn More About PTC" button in Why PTC section → `about.html`
- `_templates/shell-main.html`: Same nav link updates for Admissions and About PTC dropdowns
- `about.html` and `admissions.html`: Built with correct cross-links from the start (footer Quick Links point to programs.html, admissions.html, about.html)

### Decisions made

- Leadership section uses placeholder cards rather than names, since staff names and photos need to come from Marianne. The structure is ready for her to fill in.
- About page history timeline uses approximate dates for earlier decades (1970s, 1990s, 2000s) since exact founding dates of the St. Pete campus and initial program expansions were not in the available documentation. The 2018 rebranding date is based on the institution's name change from "Pinellas Technical Education Centers" to "Pinellas Technical College."
- Admissions FAQ uses a simple inline `onclick` toggle rather than a separate JS file, keeping it self-contained. This will translate cleanly to a Finalsite Composer custom HTML element.
- Both new pages use page-scoped `<style>` blocks rather than adding to `styles.css`. This keeps page-specific styles isolated and makes it easier to port individual pages to Finalsite Composer without style conflicts.
- Homepage program cards now show the full taxonomy names even though they are slightly longer. Consistency across all parts of the site is more important than saving a few characters on a card title.

### Issues or blockers

- **Leadership names needed:** The About page leadership section has placeholder cards. Marianne will need to add the actual names, titles, and optionally photos for the campus directors and district administrator.
- **History dates approximate:** The timeline milestones for the 1970s, 1990s, and 2000s are approximations. If PTC has specific dates documented, those should be substituted.
- **Programs section missing two clusters:** The homepage "Explore Our Programs" grid shows 6 of the 8 taxonomy clusters (missing Business & Office and Arts, Media & Education). This was a pre-existing condition — adding them would make the grid 8 cards, which is a layout decision for Marianne to weigh.

### Next priorities

1. **Tuition & Aid landing page** — the last main-site nav pillar without a dedicated page
2. **Contact page** — `contact.html` still missing, referenced by nav and footer
3. **Consumer Information page** — COE compliance disclosures hub, linked from footer Resources
4. **Wire up remaining pages' nav** — `clearwater.html`, `stpete.html`, `welding-clearwater.html`, `schedule-clearwater.html`, and `programs.html` should have their About PTC and Admissions nav links updated to point to the new pages (currently still `#`)
5. **welding-stpete.html** — St. Pete equivalent of the welding program page

---

## April 14, 2026 (Session 5 — Main Site Nav Taxonomy Fix)

### What was completed

**`index.html` + `_templates/shell-main.html` — Programs dropdown taxonomy names corrected**

Two cluster labels in the main site Programs nav dropdown were using shortened/informal names instead of the official Section 5.3 taxonomy:
- "Skilled Trades" → "Skilled Trades & Construction"
- "Arts & Media" → "Arts, Media & Education"

Both `index.html` and `_templates/shell-main.html` updated. All taxonomy names in the main site nav now match Section 5.3 exactly, consistent with `programs.html` filter labels and all campus nav dropdowns.

### Next priorities

1. **Contact / About pages** — `about.html` and `contact.html` still missing.
2. **Admissions landing page** — `admissions.html` still missing.
3. **Tuition & Aid landing page** — still missing.
4. **Consumer Information page** — COE compliance disclosures hub, linked from footer Resources column on all three sites.
5. **welding-stpete.html** — St. Pete equivalent of the welding program page.
6. **Delete root `campus-template.html`** — once confirmed replaced by `_templates/campus-landing.html`.

---

## April 16, 2026 — Tuition & Aid Page, Contact Page, Site-Wide Nav Wire-Up

### What was completed

**`tuition-aid.html` — new Tuition & Financial Aid landing page (created)**
- Full main-site page with the standard shell (utility bar, 6-pillar nav, footer with accreditation badges)
- Page hero with green gradient and breadcrumb (Home / Tuition & Financial Aid)
- "Pay Tuition" prominent banner at the top of the rates section: green callout bar with a direct link to the online payment portal (currently `#` — Marianne to confirm the Business Office payment URL)
- Tuition rates table: Florida Resident ($2.91/clock hour), Non-Resident ($11.64/clock hour), Dual Enrollment (no cost), with a note row about lab fees and program-specific costs
- Financial Aid cards grid (2x2): FAFSA & Federal Aid (includes PTC's Federal School Code 013847), Scholarships, State & Workforce Funding (WIOA), and Payment Plans
- Net Price Calculator callout: prominent bordered card with separate buttons for Clearwater and St. Pete calculators (links currently `#` — campus-specific NPC URLs needed)
- "How Financial Aid Works" 4-step section: Apply, File FAFSA, Receive Award Letter, Aid Applied
- Veterans Benefits band: full-width green section listing GI Bill chapters (30, 33, 35, 1606), MyCAA, VR&E (Chapter 31), Tuition Assistance, and the Clearwater Veterans Resource Coordinator
- Campus Aid Offices section: two cards (Clearwater, St. Pete) with addresses and campus links
- FAQ: 5 collapsible questions (repayment, school code, fees beyond tuition, refund policy, short-term program aid)
- CTA band linking to admissions.html and contact.html

**`contact.html` — new Contact Us page (created)**
- Full main-site page with the standard shell
- Page hero with green gradient and breadcrumb (Home / Contact Us)
- Campus contact cards: two-column grid, one card per campus. Each card includes campus name, address, phone, email (placeholder PCSB email format), hours (M-F 7:30 AM-4:30 PM), map placeholder (labeled for Finalsite iframe implementation), and buttons linking to the campus homepage and directions
- Contact form: full form with first/last name, email, phone, campus selector, topic dropdown (programs, admissions, financial aid, current student, employers, media, other), and message textarea. Includes a note that the form is not for submitting financial documents.
- Quick Contacts sidebar: 5 compact cards linking to Admissions, Financial Aid, Veterans Services, Employer Inquiries, and Accessibility contacts
- CTA band linking to programs.html and admissions.html

**Site-wide nav and footer wire-up (11 files updated)**

Files updated: `index.html`, `about.html`, `admissions.html`, `programs.html`, `_templates/shell-main.html`, `clearwater.html`, `stpete.html`, `welding-clearwater.html`, `schedule-clearwater.html`, `_templates/shell-clearwater.html`, `_templates/shell-stpete.html`

Changes applied across all relevant files:
- Tuition & Aid top-level nav link: `#` → `tuition-aid.html`
- All 8 Tuition & Aid dropdown items: `#` → `tuition-aid.html#[anchor]`
- "Contact Us" in About PTC dropdown (main-site pages): `#` → `contact.html`
- "Contact Us" in Campus Info dropdown (campus pages): `#` → `contact.html`
- Footer Quick Links: Tuition & Aid → `tuition-aid.html`
- Footer Resources: Contact Us → `contact.html`
- Admissions dropdown items (How to Apply, Enrollment Steps, Testing, Transfer, Readmission, Campus Tours): `#` → anchored links to admissions.html sections, in the 6 files that still had placeholder hrefs

### Decisions made

- PTC's Federal School Code (013847) is included directly on the Tuition page as a visible callout since it is among the most common things prospective students search for
- Veterans benefits are given their own full-width green section (rather than a card in the aid grid) to signal that PTC takes military student support seriously and to create a clean anchor target
- The contact form topic dropdown includes "Media Inquiry" since the Contact page may receive press inquiries that should route differently from student questions
- Map placeholders on the Contact page are labeled explicitly for Finalsite iframe implementation so Marianne knows exactly where to drop the Google Maps embed in Composer
- Campus email addresses use the PCSB domain format (ptc-clearwater@pcsb.org, ptc-stpete@pcsb.org) as best guesses — Marianne should verify before going live

### Issues or blockers

- **Pay Tuition URL needed:** The "Pay Tuition Online" button on `tuition-aid.html` links to `#`. Marianne needs to confirm the correct payment portal URL (likely a Focus/SIS link or third-party payment processor).
- **Net Price Calculator URLs needed:** Two NPC buttons (Clearwater, St. Pete) also link to `#`. These are campus-specific external links Marianne will need to provide.
- **Contact page emails to verify:** The campus emails (ptc-clearwater@pcsb.org, ptc-stpete@pcsb.org) are formatted as best guesses and must be confirmed before the page goes live.
- **Contact form backend:** The form has no action/method — it is a visual mockup. For Finalsite, this will be replaced by a Finalsite Form Element, which handles submissions natively.
- **Map embeds:** Both campus contact cards have placeholder boxes where Google Maps iframes will go during Finalsite Composer implementation.

### UX recommendations status (all complete)

All four UX recommendations from `docs/homepage_ux_review.md` were implemented in prior sessions. No open items remain from that review.

### Main site nav pillar coverage

| Nav Pillar | Landing Page | Status |
|---|---|---|
| Programs | programs.html | Complete |
| Admissions | admissions.html | Complete |
| Tuition & Aid | tuition-aid.html | **Complete (this session)** |
| Campuses | clearwater.html / stpete.html | Complete |
| Current Students | (links to portals) | Portals only, no landing page needed |
| About PTC | about.html | Complete |
| Contact Us | contact.html | **Complete (this session)** |

All six main content pillars now have a dedicated page. The main site nav is fully wired to real pages (no remaining `#` placeholders in top-level nav links).

### Next priorities

1. **Consumer Information page** — the only COE-required compliance hub without a mockup. Should consolidate non-discrimination, privacy, accessibility, and links to campus-specific disclosures. Linked from footer Resources column on all sites.
2. **welding-stpete.html** — St. Pete equivalent of the welding program page; programs.html currently only links to the Clearwater version.
3. **Finalsite Composer annotation pass** — add a short annotation block to `docs/implementation_plan.md` for each homepage section documenting the exact Composer panel type and settings that correspond to each mockup section. This would make handoff to Composer significantly easier.
4. **Homepage program grid expansion** — still shows only 6 of 8 taxonomy clusters (Business & Office and Arts, Media & Education are missing). Marianne to decide whether to expand to an 8-card grid.
5. **Delete root `campus-template.html`** — once Marianne confirms it is superseded by `_templates/campus-landing.html`.
