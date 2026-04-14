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

### Issues or blockers

- The main nav now has 6 items (Programs, Admissions, Tuition & Aid, Campuses, Current Students, About PTC). On narrow desktops this may get tight. Worth checking the nav layout at ~1024px viewport width. No immediate fix needed — just flag for Marianne to look at when reviewing the mockup.
- The employer hook links to `#` as a placeholder. Marianne will need to confirm the actual destination (likely the "Employer Partnerships" or "Post a Job" page under Community nav).

### Next priorities

1. **Contact / About pages** — neither `contact.html` nor `about.html` exists yet. The footer and nav both reference these. A basic About page mockup (mission, accreditation, leadership) would be a meaningful next addition.
2. **Admissions page mockup** — `admissions.html` does not exist. Now that Admissions is its own nav item, a landing page for it would complete that flow.
3. **Tuition & Aid page mockup** — same reasoning. The split nav now points to a page that doesn't have a mockup.
4. **Campus page nav audit** — `clearwater.html` and `stpete.html` should have their navigation updated to match the split Admissions / Tuition & Aid structure in `index.html`.
5. **Finalsite Composer notes** — consider adding a short annotation block to `docs/implementation_plan.md` for each homepage section, documenting the exact Composer panel type and settings that correspond to each mockup section.
