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

---

## April 17, 2026 — Consumer Information Page & Composer Annotation Pass

### What was completed

**`consumer-information.html` — new COE compliance disclosures hub (created)**
- Full main-site page built from `_templates/shell-main.html`: utility bar, 6-pillar nav, footer with accreditation badges
- Page hero with green gradient and breadcrumb (Home / Consumer Information)
- Intro band explaining the purpose of the page and offering free paper copies on request
- Two-column layout: sticky sidebar with jump-nav links on the left (260 px wide), stacked disclosure cards on the right (max 860 px)
- 14 disclosure sections, each built as a bordered card with an icon heading and scoped anchor ID:
  1. Accreditation (COE + Cognia, two-card grid with external links)
  2. Non-Discrimination &amp; Title IX (PCSB Equity coordinator contact callout)
  3. Privacy &amp; FERPA (student rights list, directory information opt-out guidance)
  4. Accessibility (WCAG 2.1 AA claim, accommodation request process, accessibility contact callout)
  5. Student Outcomes &amp; Right to Know (completion, placement, licensure, retention rates; COE annual report note in yellow callout)
  6. Financial Aid Disclosures (cost of attendance, NPC, refund, Federal School Code 013847, R2T4, verification)
  7. Satisfactory Academic Progress (SAP qualitative + quantitative measures, 150% max timeframe, appeals)
  8. Campus Security &amp; Clery (ASR contents, how to obtain a printed copy)
  9. Drug &amp; Alcohol Abuse Prevention (policy coverage, sanctions, counseling resources)
  10. Copyright &amp; Peer-to-Peer File Sharing (HEOA P2P notice, penalty ranges, legal alternatives note)
  11. Voter Registration (Florida online registration link + campus Student Services pickup)
  12. Constitution Day (annual observance around Sept 17)
  13. Institutional Catalog &amp; Records Requests (3 doc-link cards: Catalog, Transcript Request, Student Handbook)
  14. Compliance Contacts (three contact cards: Clearwater, St. Pete, PCSB District)
- All styles scoped in a page `<style>` block; responsive rules collapse to single column at ≤960 px
- Compliance contact callouts use a green left-border, off-white background pattern for easy scanning
- Yellow "outcomes-note" callout used for the data-refresh notice so it's visually distinct from the gray-toned contact callouts

**Site-wide footer wire-up (16 files updated)**

Replaced placeholder `<a href="#">Consumer Information</a>` with `<a href="consumer-information.html">Consumer Information</a>` and placeholder `<a href="#">Non-Discrimination</a>` with `<a href="consumer-information.html#non-discrimination">Non-Discrimination</a>` across:

`index.html`, `about.html`, `admissions.html`, `programs.html`, `tuition-aid.html`, `contact.html`, `clearwater.html`, `stpete.html`, `welding-clearwater.html`, `schedule-clearwater.html`, `campus-template.html`, `_templates/shell-main.html`, `_templates/shell-clearwater.html`, `_templates/shell-stpete.html`, `_templates/campus-landing.html`, `mockups/main-site/index.html`

Additionally, the footer-bottom `Privacy Policy | Accessibility | Sitemap` row was rewired on the same 16 files to link the first two items to the new anchors (`consumer-information.html#privacy-ferpa`, `consumer-information.html#accessibility`). Sitemap still points to `#` since no sitemap page exists yet.

**`docs/implementation_plan.md` — full Finalsite Composer annotation pass**
- Replaced the short original plan with an expanded, Composer-focused handoff document
- Added a Design Tokens table mapping CSS custom properties to Theme Manager settings
- Kept the original alternating panel hierarchy list
- Added a "Finalsite Composer panel map (homepage)" section with 8 entries (Hero through Footer), each documenting the Layout Type (`100/`, `33/33/33`, `50/50`, `25/25/25/25`), Background setting, Elements to place, custom class requirements, and accessibility checks
- Added "Page-level Composer notes" for `about.html`, `admissions.html`, `tuition-aid.html`, `contact.html`, `consumer-information.html`, and the campus pages — each showing the panel sequence in Composer terms
- Added a per-panel Accessibility Checklist table for quick reference during Composer build
- Document is now the single source of truth for Composer handoff and can be reviewed by Marianne before the Composer build begins

### Decisions made

- **All disclosures live on a single page with anchor navigation** rather than spreading them across multiple pages. Reasoning: COE reviewers and federal auditors expect a consolidated "Consumer Information" hub. A single page with a sticky in-page nav is easier to maintain than many stubs, and the sidebar anchors serve the same discovery purpose.
- **Yellow "outcomes-note" callout** used sparingly for the one case where data freshness is a real concern (COE annual report timing). Other callouts use the green-border pattern so the yellow remains an attention-grabbing exception.
- **Accessibility contact email `accessibility@pcsb.org`** is included as a best-guess formatted address with an explicit "verify before publishing" note. Same approach as the campus emails on `contact.html`.
- **Accreditation footer link** on the main-site pages was left pointing to `about.html#accreditation` (not changed). The About page's accreditation section is the correct first stop for a general reader; the compliance deep-dive on `consumer-information.html#accreditation` is better reached from the footer Consumer Information link, the Campus Info nav dropdown, or the intra-page sidebar.
- **No changes made to the Resources footer link structure** beyond the three wirings above. "Careers at PTC" and "Campus Maps" remain as-is until those pages exist.
- **Composer annotation pass written as a handoff document**, not a checklist. Each panel entry is structured so a Finalsite consultant or a Marianne build session can follow it end-to-end without cross-referencing the mockup. The goal is to make Composer build time as deterministic as possible.

### Issues or blockers

- **Placeholder compliance contact details:** The Equity / Title IX contact, Accessibility contact email, and some of the phone numbers on `consumer-information.html` use the district's main number and a best-guess email. Marianne should verify each before the page goes live.
- **Clery Act statistics placeholder:** The Campus Security section describes what the Annual Security Report contains but does not include the statistics themselves. For a live deployment, PTC must either embed the most recent three years of crime stats directly or link to a hosted PDF. Both options work in Composer.
- **COE outcome data not embedded:** The Student Outcomes section explains what data is available but does not yet show completion, placement, or licensure rates. When Marianne has the current COE Annual Report figures, those can be dropped into the `#student-outcomes` section. A simple 4-stat row (`25/25/25/25`) with campus-level numbers would be the cleanest presentation.
- **"Sitemap" still a placeholder link** in every footer. A basic sitemap page is quick to build (static list of all pages grouped by nav pillar) and would close one of the last `#` links in the global footer.
- **Leadership names, Pay Tuition URL, and NPC URLs** from prior sessions are still open items awaiting Marianne's input.

### Main site footer link coverage

| Footer link | Destination | Status |
|---|---|---|
| Quick Links · Programs | programs.html | Wired |
| Quick Links · Admissions | admissions.html | Wired |
| Quick Links · Tuition & Aid | tuition-aid.html | Wired |
| Quick Links · Student Resources | `#` | Awaiting target page |
| Quick Links · About PTC | about.html | Wired |
| Campuses · Clearwater | clearwater.html | Wired |
| Campuses · St. Pete | stpete.html | Wired |
| Campuses · Maps | `#` | Awaiting target page |
| Campuses · Schedule a Tour | admissions.html#campus-tours | Wired |
| Resources · Consumer Information | consumer-information.html | **Wired (this session)** |
| Resources · Non-Discrimination | consumer-information.html#non-discrimination | **Wired (this session)** |
| Resources · Accreditation | about.html#accreditation | Wired |
| Resources · Careers at PTC | `#` | Awaiting target page |
| Resources · Contact Us | contact.html | Wired |
| Bottom · Privacy Policy | consumer-information.html#privacy-ferpa | **Wired (this session)** |
| Bottom · Accessibility | consumer-information.html#accessibility | **Wired (this session)** |
| Bottom · Sitemap | `#` | Awaiting target page |

11 of the 17 main-site global footer links now resolve to real content. The remaining six (Student Resources, Campus Maps, Careers at PTC, Sitemap, and two sitemap-like targets) are marketing or utility pages that can be built as lightweight stubs when needed.

### Next priorities

1. **welding-stpete.html** — St. Pete equivalent of the welding program page; `programs.html` currently links only to the Clearwater version. With the compliance work out of the way, this is the next significant content gap.
2. **Sitemap page** — a simple `sitemap.html` listing every page grouped by nav pillar would close one of the three remaining footer bottom-row placeholders and help search indexing. Easy win.
3. **Verify placeholder contact details on `consumer-information.html`** — accessibility email, campus phone routing for compliance inquiries, Equity coordinator info. Best done directly with PCSB.
4. **Embed or link COE outcome data** on `consumer-information.html#student-outcomes` once Marianne has the current Annual Report figures.
5. **Homepage program grid expansion** (carried over) — 6 of 8 taxonomy clusters shown. Layout decision for Marianne.
6. **Delete root `campus-template.html`** (carried over) — once confirmed it's superseded by `_templates/campus-landing.html`.

---

## April 18, 2026 — welding-stpete.html + Site Sitemap Page

### What was completed

**`welding-stpete.html` — new St. Petersburg Welding Technology program page (created)**
- Built from the same 6-section scaffold as `welding-clearwater.html` so both campus welding pages share an identical information architecture: Hero, Start Here yellow band, Jump Nav (sticky), See It In Action, About This Program (accordion course sequence), Credentials & Cost (AWS + FRTW + financial aid sidebar), and Ready to Get Started (counselor + apply CTA).
- Swapped all Clearwater-specific chrome for St. Petersburg equivalents:
  - Utility bar: 727.893.2500, 901 34th St S, St. Petersburg address
  - Cross-campus switcher now points to `clearwater.html` instead of `stpete.html`
  - Header uses the St. Petersburg 4-pillar campus nav (7-cluster Programs list per the Section 5.3 taxonomy; no Class Schedule item since `schedule-stpete.html` does not exist yet)
  - Footer rewritten with St. Petersburg address, phone, and "St. Petersburg Links" column
  - Breadcrumbs: Home / St. Petersburg Campus / Programs / Welding Technology
- Content decisions unique to the St. Pete page:
  - Hero uses the same 1,050-hour program metadata but Location stat is St. Petersburg
  - Hero photo reused the existing `Welder.jpg` asset with a TODO comment to swap for a St. Pete welding shot when one is available
  - Video grid replaced with four dark-themed placeholder cards ("Video coming soon") instead of the Clearwater-specific YouTube embeds; added a `.video-placeholder` style in the page CSS. This keeps the section visually consistent without advertising Clearwater content as St. Pete content
  - AWS credential copy was softened: St. Pete students "may be referred to the Clearwater AWS-accredited testing facility for their performance qualification test" rather than claiming on-site AWS accreditation. Flagged for Marianne to confirm.
  - Counselor card: used a neutral "St. Petersburg Counseling Office" placeholder with the campus main line and a TODO note ("Counselor name, direct email, and extension will be published once assigned for the upcoming term"). No fake PCSB email in the counselor button (used `counseling-stpete@pcsb.org` with a visible TODO); better to ship a placeholder than a wrong address.
  - Instructor grid replaced with a single note directing users to the counseling office, since the St. Pete welding instructor roster was not on-hand for this session.
  - Program flyer and cost sheet PDF cards point to `#` with "PDF coming soon" captions. Can be swapped to real `program-flyers/` PDFs once they exist.
  - Added a new "program-sister-callout" component pointing to Welding Technology Advanced (also offered at St. Pete per the proposal's Skilled Trades list). Styled with a yellow left-border accent; responsive to single-column on mobile.

**`programs.html` — Welding Technology card now links to both campus pages**
- Replaced the single "Learn More" link with a two-link campus chooser inside the card (Clearwater → `welding-clearwater.html`, St. Petersburg → `welding-stpete.html`)
- Advanced Welding card left unchanged; it still has no dedicated mockup on either campus

**`sitemap.html` — new site sitemap / page index (created)**
- Built on the main-site shell pattern: utility bar, simplified main nav (5 top-level items, no dropdowns to keep the sitemap compact), page hero with green gradient, and the standard global footer
- Five major sections grouped by destination:
  1. **Main Site (myptc.edu)** — 6 cards: Programs, Admissions, Tuition & Aid, About PTC, Campuses, Current Students
  2. **Clearwater Campus** — 3 cards: Campus Pages, Clearwater Programs, Clearwater Resources (links to `urgent-fixes/` pages — apprenticeships, military/veteran resources, community resources guide, short courses, summer camps, Post a Job)
  3. **St. Petersburg Campus** — 3 cards: Campus Pages, St. Petersburg Programs (with new welding page), St. Petersburg Resources (all placeholders since these pages do not exist yet)
  4. **Compliance & Resources** — 3 cards: Consumer Information anchors, Safety & Conduct anchors, Catalog & Contacts. Each maps directly to the anchor IDs on `consumer-information.html`.
  5. **Project Reference & Pattern Library** — 2 cards surfacing the non-public pages kept in the repo for the design team: Redesign Proposal, Pattern Library, the four shell templates, and the five Post a Job variants
- Two status badges on the page: `New` (green, highlights pages shipped this session) and `Planned` (yellow, for sitemap entries that don't have mockups yet). A compact `.pending` style with an hourglass icon is used for planned entries so they're visible but visually subordinate.
- A callout footnote at the end of the Compliance section explains what the badges mean and dates the snapshot to the April 18, 2026 build.

**Footer Sitemap link wired across all 17 files with global footers**
- Python pass replaced `<a href="#">Sitemap</a>` with `<a href="sitemap.html">Sitemap</a>` in: `index.html`, `about.html`, `admissions.html`, `programs.html`, `tuition-aid.html`, `contact.html`, `consumer-information.html`, `clearwater.html`, `stpete.html`, `welding-clearwater.html`, `schedule-clearwater.html`, `campus-template.html`, `_templates/shell-main.html`, `_templates/shell-clearwater.html`, `_templates/shell-stpete.html`, `_templates/campus-landing.html`, and `mockups/main-site/index.html` (mockup uses `../../sitemap.html` relative path)
- Also pre-wired the new `welding-stpete.html` footer to `sitemap.html` directly at page creation time
- All three bottom-row footer items (Privacy Policy, Accessibility, Sitemap) now resolve to real URLs on every main-site page

### Decisions made

- **Placeholder-first, not fake-data-first.** For St. Pete welding counselor, instructors, program flyers, and videos, I chose visible "coming soon" placeholders over carrying Clearwater content forward. A St. Pete page that shows the Clearwater counselor would be worse than one that shows a TODO — worse for accuracy and for prospective students.
- **AWS copy hedged, not removed.** The Clearwater page asserts an on-site AWS-accredited testing facility. For St. Pete I rewrote to say students "may be referred to the Clearwater AWS-accredited testing facility" rather than dropping the credential entirely. This preserves the selling point while being accurate. If St. Pete also has its own AWS accreditation, Marianne can strengthen this later.
- **Two-link card over a campus-chooser landing page.** On `programs.html`, the Welding Technology card could have pointed to a new `welding.html` campus chooser, but a two-link card is simpler, requires no extra page, and keeps the existing filter/search behavior intact. The `data-campus="clw stp"` attribute is unchanged, so filter chips still work.
- **Sitemap uses anchor deep-links to `consumer-information.html`, not stub pages.** Compliance disclosures all live as anchor sections on one page (by design). The sitemap surfaces each anchor so users can land on the right disclosure directly. This keeps the compliance section searchable without forcing us to invent separate pages.
- **Sitemap includes `_templates/` and `mockups/` reference pages in a dedicated "Project Reference" section.** Public-facing sitemaps normally don't include internal files, but this sitemap is also the working index for the design handoff. Separating them into their own labeled section keeps the main navigation honest while still making them findable.
- **"Planned" badge instead of hiding missing pages.** Listing what's intentionally coming (cluster pages, schedule-stpete, campus maps) makes the gap visible to Marianne and the Finalsite consultant. Hiding them would obscure scope.

### Issues or blockers

- **St. Pete welding counselor + instructor roster.** I left visible TODOs in two spots on `welding-stpete.html`. Marianne (or the campus office) will need to fill these in before the page is public.
- **AWS testing facility claim at St. Pete.** Verify whether St. Pete is also an AWS-accredited test facility or whether the referral-to-Clearwater wording is correct. The current copy errs toward the accurate-but-cautious version.
- **Program flyer PDFs for St. Pete welding.** Only Clearwater versions exist in `program-flyers/`. When Marianne has the St. Pete equivalents, drop them into `program-flyers/` and update the two `href="#"` PDF cards at the bottom of the Credentials section.
- **Video embeds for St. Pete welding.** Four placeholder cards are in place. If PTC Communications has any St. Pete welding video content (even phone footage from the shop floor), the placeholders can be swapped for real `<iframe>` embeds using the same markup as the Clearwater page.
- **Advanced Welding mockup still missing for both campuses.** The sister-program callout on `welding-stpete.html` links to `#`. `programs.html` also shows the "Welding Technology - Advanced" card linking to `#`. This is the next natural program page to build because the infrastructure is now in place.
- **`sitemap.html` simplified nav.** The sitemap page uses a pared-down top nav (5 links, no dropdowns) rather than the full 6-pillar dropdown nav. This was deliberate — a sitemap page with its own giant dropdown nav felt redundant. If Marianne would rather keep the full nav for consistency, swap it for the shell-main header.

### Main-site footer link coverage (updated)

| Footer link | Destination | Status |
|---|---|---|
| Quick Links · Programs | programs.html | Wired |
| Quick Links · Admissions | admissions.html | Wired |
| Quick Links · Tuition & Aid | tuition-aid.html | Wired |
| Quick Links · Student Resources | `#` | Awaiting target page |
| Quick Links · About PTC | about.html | Wired |
| Campuses · Clearwater | clearwater.html | Wired |
| Campuses · St. Pete | stpete.html | Wired |
| Campuses · Maps | `#` | Awaiting target page |
| Campuses · Schedule a Tour | admissions.html#campus-tours | Wired |
| Resources · Consumer Information | consumer-information.html | Wired |
| Resources · Non-Discrimination | consumer-information.html#non-discrimination | Wired |
| Resources · Accreditation | about.html#accreditation | Wired |
| Resources · Careers at PTC | `#` | Awaiting target page |
| Resources · Contact Us | contact.html | Wired |
| Bottom · Privacy Policy | consumer-information.html#privacy-ferpa | Wired |
| Bottom · Accessibility | consumer-information.html#accessibility | Wired |
| Bottom · Sitemap | sitemap.html | **Wired (this session)** |

**12 of 17** main-site global footer links now resolve to real content (up from 11 last session). The remaining five (Student Resources, Campus Maps, Careers at PTC, and the two category indexes) are utility pages that can be added as lightweight stubs when they become priorities.

### Next priorities

1. **Welding Technology Advanced program page(s)** — now that the pattern is proven twice, a `welding-advanced.html` (shared page) or per-campus variants would close the last visible welding gap on `programs.html` and plug the sister-program callout on `welding-stpete.html`.
2. **`schedule-stpete.html`** — mirror `schedule-clearwater.html` for the St. Pete campus so the "Class Schedule" item can be added to the St. Pete Programs nav.
3. **Verify St. Pete welding placeholders** — counselor, instructors, AWS facility claim, program flyers. Easiest path: a single email to the St. Pete campus office listing the four open items.
4. **Homepage program grid expansion** (carried over) — 6 of 8 taxonomy clusters shown. Layout decision for Marianne.
5. **Delete root `campus-template.html`** (carried over) — once confirmed it's superseded by `_templates/campus-landing.html`.
6. **Lightweight stub pages** for the remaining five `#` footer links (Student Resources, Campus Maps, Careers at PTC, and internal category indexes) would finish the global footer coverage.

---

## April 18, 2026 (Follow-up) — welding-stpete.html populated with real data

### What was completed

Marianne provided the live source content from `stpete.myptc.edu/programs/st-petersburg-full-time-programs/welding-technology`, so `welding-stpete.html` was updated from placeholder mode to production-ready:

- **Counselor card:** Real info wired in. Cheri Ashwood, School Counselor, `ASHWOODC@pcsb.org`, (727) 893-2500 x2325. Avatar initials "CA" replace the generic user icon. TODO note removed.
- **Program video:** YouTube embed `fc1uqOO1hFA` (Welding Technology at PTC St. Petersburg) now plays in the first video card. The four "Video coming soon" placeholders collapsed to a single live video + one "More Videos Coming Soon" placeholder for any additional content PTC Communications produces.
- **AWS credential claim strengthened:** St. Petersburg campus confirmed as an AWS accredited testing facility per the source copy. The "may be referred to Clearwater" hedge was removed and replaced with the stronger claim.
- **Course sequence expanded to all 5 courses (1,050 hours total):** Added Welder Assistant 1 (PMT0070, 150 hrs) as the opening accordion item. Now the math works (150+150+150+150+450 = 1,050). Copy for the other four courses was also tightened to match the source verbatim.
- **Class schedule + program requirements block added** below the accordion. Two-column callout showing Day (Mon-Fri 7:00 AM - 12:15 PM), Evening (Mon-Thu 4:00 PM - 9:00 PM), SAP 80%, Attendance 90%, Basic Skills Math 9 / Reading 9. This is meaningful differentiation from Clearwater, which runs two daytime shifts instead.
- **Industry certification note added:** "Distance Education: Traditional only. Industry Certification: AWS Certified Welder."
- **Hero stat bar updated:** "Delivery: On-Campus" replaced with "Schedule: Day & Evening" to surface the fact that St. Pete offers an evening option (Clearwater does not).
- **Shadowing links repointed:** Step 2 button and the footer shadowing link on the counselor section now point to `https://stpete.myptc.edu/admissions/admissions/shadowing-days-times` (the St. Pete equivalent of the Clearwater shadowing URL).
- **Hero photo path reserved:** Swapped the Clearwater `Welder.jpg` reference for `assets/images/content/stpete-welding-lab.jpg` with an inline `onerror` fallback to `Welder.jpg` so the page doesn't show a broken image before the photo file lands. Marianne shared a real St. Pete welding shop photo (two students working, red safety curtains, gas cylinders). Dropping that file at the reserved path will activate it without any further code changes.

### Remaining open items on this page

- **St. Pete welding instructor roster** is still not published. The "Program Instructors" heading and intro copy were removed to avoid looking like an empty section; can be reinstated when Marianne has names.
- **Program flyer and cost-sheet PDFs** for St. Pete Welding Technology still need to be dropped into `program-flyers/` and linked. The two PDF cards in the Credentials sidebar still point to `#` with "PDF coming soon" captions.
- **Hero photo file** needs to be saved to `assets/images/content/stpete-welding-lab.jpg` to replace the fallback image.

### Next priorities

1. **Welding Technology Advanced page(s)** — the sister-program callout on `welding-stpete.html` still points to `#`. Same content exists for Clearwater. Good candidate for the next session.
2. **`schedule-stpete.html`** — mirror `schedule-clearwater.html` for St. Pete so the Class Schedule item can be added to the nav.
3. **Homepage program grid expansion** (carried over) — layout decision for Marianne.
4. **Delete root `campus-template.html`** (carried over).
5. **Lightweight stub pages** for the five remaining footer placeholders (carried over).

---

## April 19, 2026 — welding-advanced.html (shared dual-campus program page)

### What was completed

**`welding-advanced.html` — new Welding Technology - Advanced program page (created)**
- Built as a **single shared page** using the main-site shell (utility bar, 6-pillar nav, standard footer with accreditation badges) rather than per-campus duplicates. The program is offered at both Clearwater and St. Petersburg with the same curriculum, so one page with a clear campus chooser avoids two near-identical files and is easier to maintain as the sister of welding-clearwater.html / welding-stpete.html.
- 8-section layout mirroring the established welding page structure:
  1. **Hero** — green gradient, dual-campus eyebrow, 5-stat bar (Format, Length 750 hrs, Locations, Delivery, Avg. Salary $47,540+ BLS 2023), counselor nudge
  2. **Prerequisite banner** (yellow) — Explicitly flags the 1,050-hour Welding Technology prerequisite with a link back to `welding-clearwater.html` and a "Talk to a Counselor" CTA. This prerequisite is the single most important thing for a prospective student to understand, so it gets its own full-width band immediately after the hero.
  3. **Sticky jump nav** — About, Campus Schedules, Course Sequence, Credentials, Career, Get Started (CTA)
  4. **About This Program** — two-paragraph overview covering pipe welding, fabrication, quality inspection, and industry outcomes
  5. **Campus Chooser** (`#campuses`) — two side-by-side cards. Clearwater card shows the real 1st-shift (7:00 AM - 12:15 PM) and 2nd-shift (12:15 PM - 5:30 PM) schedules pulled from `schedule-clearwater.html`. St. Pete card notes day/evening sections available and directs to the campus for current times (no published schedule data was available).
  6. **Course Sequence** — 4-course accordion: Pipe Welder 1 (~150), Pipe Welder 2 (~150), Layout & Fabrication (~150), Advanced Welder (~300). Hour distribution is shown as approximate with a note that courses may vary by campus, so Marianne can swap in the exact state-plan figures without restructuring the page.
  7. **Credentials & Cost** — two-up split. Left card reuses the AWS accredited-testing-facility copy (both campuses now qualify, per the St. Pete update from Apr 18) and Florida Ready to Work / BIG SIX callout. Right sidebar has the dark-green Financial Aid card (with the $2.91/clock hour note) and two "PDF coming soon" program-flyer/cost-sheet placeholders.
  8. **Career Outlook** — 3-stat grid: BLS 2023 welder median pay, BLS 2022-2032 projected 2% job growth, and 42,600 annual U.S. openings. Followed by a narrative paragraph listing common job titles (Pipe Welder, Structural Welder, Welder-Fabricator, Combo Welder, entry-level Welding Inspector).
  9. **Next Steps / Counselor** — Apply CTA + two counselor cards side-by-side: Valerie Santos for Clearwater (same contact as `welding-clearwater.html`) and Cheri Ashwood for St. Petersburg (same as `welding-stpete.html`). Each card includes a shadow-day link to the correct campus URL.
- All styles scoped in a page `<style>` block (~280 lines), responsive down to 760 px
- HTML validates cleanly (no tag mismatches, 947 total lines)

**Cross-page wire-up (3 files)**
- `programs.html` — Welding Technology - Advanced card "Learn More" link: `#` → `welding-advanced.html`. Also fixed a stray `<i class="arrow right">` markup bug to use the correct `<i class="fas fa-arrow-right">` Font Awesome icon consistent with the other cards.
- `welding-stpete.html` — sister-program callout "Learn about Advanced Welding" link: `#` → `welding-advanced.html`
- `sitemap.html` — two changes:
  - Clearwater Programs card: added a new `<li>` for Welding Technology Advanced (linked, with New badge) between Welding Technology and the planned cluster entries
  - St. Petersburg Programs card: converted the `Planned` / pending entry for Welding Technology Advanced into a live linked entry with the New badge. The St. Pete Welding Technology entry also had its New badge removed (it was carried over from its creation on Apr 18 but it's no longer the newest item)

### Decisions made

- **One shared page instead of two.** Writing `welding-advanced-clearwater.html` and `welding-advanced-stpete.html` would have duplicated ~1,700 lines of near-identical curriculum, credential, and career-outlook content. The curriculum does not differ by campus, so a shared page with explicit campus affordances (schedules, counselors, campus chooser cards) is more honest and easier to update when the state course plan changes.
- **Main-site shell, not campus shell.** Because the page spans both campuses, the main-site nav and footer are the right frame. Users arriving from `programs.html` (main site) will continue with the main site nav; users arriving from `welding-stpete.html` will transition from the campus nav to the main site nav, but the Campus Chooser section immediately reorients them to their campus.
- **Approximate course hours with an explicit disclaimer** rather than inventing Florida CIP state-plan numbers. The total hour count (750) and the four-course structure are drawn from schedule-clearwater.html and the Section 5.3 description, but the per-course hour split is the best-reasonable mapping and is marked "~" so it does not read as a hard claim. A note directs prospective students to confirm the current sequence with their counselor.
- **Career outlook stats are BLS-only, cited.** The median pay ($47,540), 2% job growth, and 42,600 annual openings are all BLS figures for welders broadly (SOC 51-4121) from the 2023 OOH and 2022-2032 projections. Advanced welders (pipe, combo, structural) typically out-earn the median but PTC does not publish internal wage data, so the page notes "$47,540+" and qualifies the median as the broad-category floor rather than claiming higher numbers without a source.
- **Prerequisite positioned immediately below the hero.** The most common counseling-office mistake on advanced welding is enrollment attempts from students who have not finished (or do not have equivalent experience for) the 1,050-hour Welding Technology program. The yellow prereq banner places that constraint before the jump nav so students self-qualify before diving into curriculum details.
- **No videos section.** The welding-clearwater and welding-stpete pages carry video sections because they have program-specific YouTube content. PTC Communications has not published advanced-welding-specific video content yet; rather than reusing general welding videos under an "Advanced" heading (which would misrepresent the material), the section was omitted. It can be added later by following the existing `video-grid` / `video-card` pattern.

### Issues or blockers

- **Per-course hour distribution** — The ~150/150/150/300 split is a reasonable guess for a 750-hour pipe welding sequence. Marianne should replace with the actual Florida CIP state-plan hours and course codes (PMT numbers) when she has them. The accordion structure accepts any breakdown without layout changes.
- **St. Pete advanced welding schedule** — Not published anywhere I could find. The campus card notes "day and evening sections available" and directs to campus contact. If the campus office shares specific shift times, the card's schedule block can be updated in seconds.
- **Program flyer and cost-sheet PDFs** — Two placeholder PDF cards in the Credentials sidebar link to `#` with "PDF coming soon" captions, same pattern as the St. Pete Welding page. When `program-flyers/` receives a Welding-Advanced flyer and cost sheet, swap the two `href="#"` values.
- **Counselor assignments for advanced welding** — I used the same counselors as the base Welding Technology pages (Santos for Clearwater, Ashwood for St. Pete). If the advanced program has a different assigned counselor at either campus, those cards need a simple swap.
- **Hero photo** — Currently reuses `assets/images/content/Welder.jpg` (the Clearwater welder image). Acceptable for a dual-campus page but a more neutral or pipe-welding-specific shot would read more accurately as advanced.

### Updated program page coverage

| Program | Clearwater page | St. Pete page | Shared page |
|---|---|---|---|
| Welding Technology | `welding-clearwater.html` | `welding-stpete.html` | — |
| Welding Technology - Advanced | (links to shared) | (links to shared) | **`welding-advanced.html` (this session)** |

All three welding prototype pages in the proposal are now represented. The "Welding Technology - Advanced" card on `programs.html` and the sister-program callout on `welding-stpete.html`, both of which have pointed to `#` since their creation, are now wired.

### Next priorities

1. **`schedule-stpete.html`** — mirror `schedule-clearwater.html` for St. Pete so the Class Schedule item can be added to the St. Pete Programs nav. Would also let the new `welding-advanced.html` Campus Chooser link the St. Pete card's "View Class Schedule" alongside the Clearwater one.
2. **Exact Florida CIP hours and course codes for Welding Technology - Advanced** — when Marianne has the state-plan numbers, the accordion in `welding-advanced.html` can be updated to replace the approximate figures.
3. **Homepage program grid expansion** (carried over) — 6 of 8 taxonomy clusters shown. Layout decision for Marianne.
4. **Lightweight stub pages** for the five remaining footer placeholders (Student Resources, Campus Maps, Careers at PTC, and two reference targets).
5. **Delete root `campus-template.html`** (carried over) — once confirmed it's superseded by `_templates/campus-landing.html`.
6. **Video content for advanced welding** — optional. If PTC Communications produces any pipe-welding or fabrication footage, the `video-grid` block from `welding-clearwater.html` can be pasted into the `welding-advanced.html` "About This Program" section with minimal styling changes.

---

## April 20, 2026 — schedule-stpete.html (St. Petersburg class schedule)

### What was completed

**`schedule-stpete.html` — new St. Petersburg 2026-27 class schedule (created)**
- Built as the St. Pete counterpart to `schedule-clearwater.html`, mirroring the same visual structure: green page header, sticky filter bar with three chip groups (Category, Time of Day, Search), category-grouped table with day badges, time badges, location badges, results counter, and no-results state. The Finalsite Composer Custom HTML embed approach stays identical so both schedules can deploy the same way.
- Campus chrome swapped for St. Petersburg: utility bar (727.893.2500, 901 34th St S), 4-pillar campus nav (no Pinellas High Innovation filter since St. Pete does not use the PHI shared-location model), and St. Pete footer with correct address + "St. Petersburg Links" column.
- **35-row program table** built from two sources:
  - 30 full-time programs derived from `programs.html` (every card tagged `data-campus="stp"` or `data-campus="clw stp"`) — a more complete list than the 26 distinct program cards since AM/PM Electricity, AM/PM Welding, AM/PM Advanced Welding, and Welding Tech 1 vs. 2 appear as separate schedule rows.
  - 4 adult-education rows (ABE/GED/ASE daytime + evening, ESOL daytime + evening) matching the Clearwater pattern.
  - 1 apprenticeship placeholder row directing students to call the campus for current offerings. St. Pete does not have a documented apprenticeship program list equivalent to Clearwater's BAEA/IEC/RACCA/Machining slate, so inventing rows would be dishonest.
- **New "Status" column** (replaces Clearwater's "Start Date" column for now). Two values: `Confirmed` (green check, pulled from a verified source) and `Pending — confirm with counselor` (gray italic, typical PTC full-time block as a reasonable default).
  - Welding Technology Day (Mon-Fri 7:00 AM - 12:15 PM) and Evening (Mon-Thu 4:00 PM - 9:00 PM) are marked **Confirmed** — both were verified against `welding-stpete.html` during the Apr 18 update.
  - All 33 other rows are marked **Pending**. Their `timeLabel` values carry an explicit "(typical)" suffix so the page never misrepresents a placeholder as a confirmed time.
- **Yellow "Draft" banner** below the page header makes the partial-verification state visible at the top of the page: "2026-2027 schedule in progress. Programs listed below are confirmed to be offered at the St. Petersburg campus. Specific days, times, and start dates are being finalized by the counseling office." Includes a live `tel:` link and a pointer to the St. Pete counseling office.
- Footer note at the bottom of the table adds a cross-link to `schedule-clearwater.html` so visitors on the wrong campus page can jump to the other schedule in one click.

**Nav wire-up across St. Pete chrome (4 files)**
- `stpete.html`, `welding-stpete.html`, `_templates/shell-stpete.html` — each had the Programs dropdown's "Explore" section updated to insert a `<li><a href="schedule-stpete.html">Class Schedule</a></li>` between "All Programs A-Z" and "Distance Learning". This parallels the Clearwater Explore section exactly. The Class Schedule item is now consistently discoverable from every St. Pete main-site entry point.
- `schedule-stpete.html` — its own Explore list already points to the new page (self-link), following the same pattern `schedule-clearwater.html` uses.

**`welding-advanced.html` Campus Chooser updated**
- St. Petersburg campus card's secondary button changed from "See Welding Technology (St. Pete)" to "View Class Schedule" pointing at `schedule-stpete.html`. Now both campus cards have the same action-pair (Explore Campus + View Class Schedule), matching the earlier design intent.

**`sitemap.html` updated**
- St. Petersburg "Campus Pages" card: the `Planned` entry "Class Schedule 2026-27" converted to a live `<a href="schedule-stpete.html">` entry with the `New` badge. The hourglass-icon / pending treatment was removed. Calendar icon (`fa-calendar`) used to match the Clearwater equivalent line in the Clearwater Campus card.

### Decisions made

- **Honest placeholder over fabricated times.** The biggest decision on this page. The Clearwater schedule is a transcription of an actual published document. St. Pete does not publish a comparable document in public form. Three options were on the table:
  1. Copy Clearwater's times and swap the campus name — dishonest and dangerous for prospective students who would show up at the wrong time.
  2. Leave all time cells blank — breaks the filter UX (time-of-day chips wouldn't work) and makes the page feel broken.
  3. Use a "typical" default with an explicit "(typical)" suffix on the time label AND a Status column marking every unverified row as "Pending — confirm with counselor" AND a prominent yellow banner explaining the state. This is option 3, and it was chosen because it preserves the interactive filter UX, gives users real-world guidance on what PTC's typical blocks look like, and makes verification-pending state structurally explicit rather than hidden.
- **Apprenticeships treated as a single "call the campus" row** rather than listing individual programs. Clearwater has a well-documented apprenticeship slate (BAEA, IEC, RACCA, Machining, Child Care, Facilities Maintenance, ABC Florida Gulf Coast offsite programs). Most of those run classroom sessions at the Clearwater campus regardless of which campus a student enrolls through. Rather than duplicating the Clearwater list under St. Pete and implying redundant sections, I kept the apprenticeship category present for filter completeness and pointed the single row at the campus phone number.
- **No "Offsite" location or time filters.** Clearwater's "offsite" badges were tied to the ABC Florida Gulf Coast rows (which don't apply here without verified St. Pete-specific offsite offerings). Removing "offsite" from the filter chip list keeps the page tight and avoids the empty-filter trap. The `locLabel` helper was also simplified — Pinellas High Innovation (PHI) is Clearwater-only, so the `phi` case was dropped.
- **Hour estimates for pending programs are reasonable but not cited.** For programs where `programs.html` doesn't publish the hour count, I used typical Florida CIP state-plan figures for the same program at other Florida technical colleges (e.g., Surgical Technology ~1330 hrs, Dental Assisting ~1230 hrs). These are reasonable and in the right neighborhood, and every pending row's Status column flags the whole line as unverified. When Marianne has the actual Florida DOE program-of-study hour counts for St. Pete, the numbers can be swapped without restructuring anything.
- **Status column instead of Start Date for now.** The Clearwater page's 5th column shows "TBD — 2026/27" on every row because start dates aren't published yet either. For St. Pete, swapping that column to Status lets the page carry more useful information (verification state) without lying. If/when actual start dates become available, the column can be converted back or expanded to two columns.
- **Nav parity with Clearwater.** Adding "Class Schedule" to the St. Pete Explore dropdown was called out in multiple previous progress-log entries (Apr 15, 17, 18, 19) as the natural next step once the page existed. Wiring the three copies of the Programs dropdown (stpete.html, welding-stpete.html, _templates/shell-stpete.html) closes that carried-over item and brings both campus navs to feature parity.

### Issues or blockers

- **Confirmation of "Pending" rows is the biggest open item.** 33 of 35 rows need verified times, days, and start dates from the St. Pete counseling office. Suggested path: a single email to the campus counseling office with the program list and asking for the 2026-27 schedule as published, or a shared Google Sheet. When the data comes back, updating `programs` array entries in the `<script>` block takes minutes.
- **Adult Education specifics.** ABE/GED/ASE and ESOL are district-wide offerings through PCSB, but St. Pete campus-specific section times were not available. The 4 rows are generic daytime/evening blocks. The district's adult education office likely maintains the canonical schedule and could be linked as the source of truth.
- **Apprenticeship list.** If St. Pete campus does host any apprenticeship classroom sessions (e.g., trades-specific evening courses), they should be broken out into individual rows to match the Clearwater page. Otherwise the single placeholder row can stay.
- **EMT evening default.** Emergency Medical Technician is commonly offered as an evening intensive (250 hours, accelerated). The default row was set to Evening (M-R) as a reasonable guess. Verify against actual PTC scheduling.
- **Welding Technology Advanced Day/Evening.** The two Advanced rows are flagged Pending because `welding-advanced.html` notes "Day and evening sections available" but doesn't publish exact shift times. If St. Pete runs the same 1st/2nd-shift pattern as Welding Technology, those can be moved to Confirmed with the same times.
- **Apply Now button link.** Header CTA still points to `#`. Already an existing state on every other page; not a regression.

### Updated link coverage

| St. Pete nav entry | Before | After |
|---|---|---|
| Programs › Explore › Class Schedule | Not present | `schedule-stpete.html` (new) |
| `welding-advanced.html` Campus Chooser › St. Pete › secondary button | `welding-stpete.html` | `schedule-stpete.html` |
| Sitemap › St. Petersburg › Campus Pages › Class Schedule 2026-27 | Pending (Planned badge) | Live (New badge) |

### Next priorities

1. **Populate confirmed times on `schedule-stpete.html`** — either through a single outreach to the St. Pete counseling office or by mining any internal Focus/SIS export that lists St. Pete's 2026-27 offerings. Update the `programs` array in place; no layout changes needed.
2. **Exact Florida CIP hours and course codes for Welding Technology Advanced** (carried over from Apr 19) — still the cleanest next content polish.
3. **Homepage program grid expansion** (carried over) — 6 of 8 taxonomy clusters shown.
4. **Lightweight stub pages** (carried over) — five remaining `#` footer placeholders (Student Resources, Campus Maps, Careers at PTC, and two category indexes).
5. **Delete root `campus-template.html`** (carried over).
6. **Add a breadcrumb row to `schedule-stpete.html` and `schedule-clearwater.html`** (suggested in the Apr 15 current-student agent review). Both pages currently launch straight into the green header with no "Home / Campus / Class Schedule" trail. A 5-minute addition.
7. **Pinellas High Innovation campus affiliation.** Clearwater's schedule has several Phlebotomy and ESOL rows at PHI. If St. Pete also shares programs with a third location, the `location` enum in both schedule pages could be extended to cover that.

