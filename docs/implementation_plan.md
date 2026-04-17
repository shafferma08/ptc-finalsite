# Implementation Plan: Visual Design & Finalsite Composer Workflow

This document maps the homepage (and by extension, every landing page) to a clean, panel-based structure that translates 1-to-1 into Finalsite Composer Layouts. The current design originally suffered from "gray wash" because `body` is set to `#f5f7fa` and no sections explicitly override it. The remedy is a strict alternating panel structure using Composer's native Layout backgrounds.

## Design tokens

| Token | Value | Finalsite Composer equivalent |
|---|---|---|
| `--color-green` | `#008142` | Brand color (set in Theme Manager) |
| `--color-green-light` | `#8DC63F` | Accent color |
| `--color-yellow` | `#FFCF01` | Accent color |
| `--color-off-white` | `#F7F8FA` | Panel "light gray" background |
| `--font-heading` | Roboto Slab | Heading font family |
| `--font-body` | Roboto | Body font family |

These values live in `styles.css` and should be configured once in the Finalsite Theme Manager so every Composer panel inherits them.

## Proposed Visual Hierarchy (alternating panel structure)

Finalsite Composer relies heavily on Panels / Layouts (horizontal rows) to structure pages. The best Finalsite builds use strictly alternating panel backgrounds to guide the user's eye and delineate content blocks.

1. **Quick Links Panel:** `White (#ffffff)`, subtle bottom border. Clean bridge from the dark, image-heavy hero into the content.
2. **Why PTC Section:** `Off-white (#F7F8FA)` via `--color-off-white`. Alternates from the Quick Links panel above.
3. **Programs Grid:** `White (#ffffff)`. Essential so the bordered program cards (with hover shadows) have contrast against the background.
4. **Campuses Section:** `Brand Green (#008142)` with white text. A massive, visually arresting break in the middle of the page. The white campus cards "pop" against the dark green. Achieved in Composer with the "Invert Colors" checkbox on a Layout panel.
5. **News & Events:** `Off-white (#F7F8FA)`. Alternating back before hitting the dark CTA band.
6. **CTA Band:** `Brand Green (#008142)` or dark overlay image. Final call to action before the footer.

---

## Finalsite Composer panel map (homepage)

Every section below maps directly to a Composer Panel (also called a Layout Row). Specs use Composer's conventions: `Layout Type` = the panel's row structure, `Background` = the Layout panel's background setting, `Elements` = the Composer elements to place inside.

### 1. Hero panel

- **Layout Type:** Full-width, 1 column (100/).
- **Background:** Image background with dark overlay (50–60% opacity black). Composer: set the panel's Background Image and apply the overlay filter.
- **Height:** Full viewport (~600 px desktop, 450 px mobile).
- **Elements:** Content Element (headline + subhead) + Button Element (primary CTA) + Button Element (secondary CTA). Use Composer's "Hero" element if available.
- **Custom class (optional):** `.hero` — only needed if porting existing CSS animations. Most hero visual polish is native to Composer.
- **Accessibility:** Ensure the overlay darkens the image enough for WCAG AA contrast against the white text. Composer has an overlay slider for this.

### 2. Quick Links panel

- **Layout Type:** 4-column row (25/25/25/25).
- **Background:** White (`#ffffff`). Add a 1px bottom border via a custom class or the Theme Manager.
- **Elements:** Four identical Content Elements, each containing an icon (Font Awesome via Finalsite's icon picker) + link text. Or use the Composer "Icon Link Grid" element if enabled.
- **Mobile:** Composer auto-stacks to 1 or 2 columns on narrow viewports.
- **Custom class:** `.quick-links` on the panel if the hover animation is needed.

### 3. Why PTC panel

- **Layout Type:** 3-column row (33/33/33).
- **Background:** Off-white (`#F7F8FA`). Composer: set panel background to "Light Gray" or custom hex.
- **Elements:** Three Content Elements, each with a large icon circle + heading + 2 lines of body text. Optional: the "Icon Card" element if available.
- **Custom class:** `.why-ptc` on the panel. Each card uses `.why-ptc__card`.

### 4. Programs Grid panel

- **Layout Type:** 3-column row (33/33/33) × 2 rows, or a single 6-column "card grid" Composer element.
- **Background:** White (`#ffffff`).
- **Elements:** Program cards are best implemented as a Composer Post (or News) feed filtered by the `programs` category, or as an "Image Card" grid. Each card: image + cluster badge + title + short description + link. If using Posts, tag each program post with its cluster for native filtering.
- **Custom class:** `.program-card` on each card for the green hover line animation. Add via the "Custom Class" field on the Content Element.
- **Filterable version (for `programs.html`):** Use Composer's Post filter element with the 8 taxonomy values as facets.

### 5. Campuses panel (inverted)

- **Layout Type:** 2-column row (50/50).
- **Background:** Brand Green (`#008142`) with "Invert Colors" enabled — Composer automatically flips text and icon colors to white.
- **Elements:** Two Image-Card elements. Each: campus photo + campus name overlay + "Visit Campus" button. White card backgrounds against the green panel.
- **Custom class:** `.campus-card` on each card if the card shadow and hover lift are desired.
- **Accessibility:** `#008142` against `#ffffff` text passes WCAG AAA. Verify any green-on-white button text uses the dark green (not the light green `#8DC63F`) for AAA.

### 6. News & Events panel

- **Layout Type:** 3-column row (33/33/33) for the news grid, followed by a full-width (100/) sub-panel for the employer hook callout.
- **Background:** Off-white (`#F7F8FA`).
- **Elements:** Composer Post feed (News category), 3 most recent. The employer hook is a Content Element with custom class `.employer-hook` (green left border, `--color-green-light` background).
- **Note:** The employer hook sits *inside* the News panel (not as a standalone panel) so the employer content stays contextually close to community-facing content without breaking the panel cadence.

### 7. CTA Band panel

- **Layout Type:** Full-width, 1 column (100/).
- **Background:** Brand Green (`#008142`) or a dark photo with green overlay.
- **Elements:** Content Element (headline + subhead, white text) + Button Element (yellow `#FFCF01` primary CTA, green text for WCAG AAA contrast).
- **Custom class:** `.cta-band` on the panel.

### 8. Footer

- **Not built as a Composer panel.** The footer is a Finalsite Theme-level element, configured once in the Theme Manager and applied to every page.
- **Contents:** Logo + tagline + social icons (brand column) · Quick Links column · Campuses column · Resources column · Accreditation row (COE, Cognia, PCSB) · legal bottom row.
- **Mirror to templates:** When updating the footer, mirror changes into `_templates/shell-main.html`, `_templates/shell-clearwater.html`, and `_templates/shell-stpete.html` so mockups stay in sync.

---

## Finalsite Composer compatibility checks

- **Grid Systems:** The 3×2 Programs Grid and 2×1 Campus Cards translate perfectly to Finalsite's `33/33/33` and `50/50` Layout rows.
- **Custom Classes:** All custom hover effects (e.g., the green line animations on cards) port to Composer by adding our custom CSS classes (`.program-card`, `.campus-card`, `.why-ptc`) to the "Custom Class" field on the Content Element or Layout panel. The class definitions live in `styles.css` and should be loaded via the Theme Manager's "Custom CSS" setting.
- **Image Handling:** Finalsite handles responsive images automatically. Our CSS uses `object-fit: cover`, which mimics Finalsite's native "Fill" image mode.
- **Posts vs. static content:** Program cards and news items should be Composer Posts (so they can be edited independently of the page and reused elsewhere). Hero content, Quick Links, Why PTC, Campuses, and CTA Band are best as static Content Elements inside the page's Composer layout.

## Visual hierarchy verification plan

1. Confirm `styles.css` background assignments match this plan (already done in the April 14 session).
2. Verify text color variables in the Campuses section maintain WCAG AAA contrast against the dark green background.
3. Run a browser review subagent on the live mockup to verify the new visual flow translates cleanly at 1440, 1024, 768, and 375 px viewports.
4. Before Composer import, take a full-page screenshot of each mockup for reference during the Composer build so the Composer output can be visually diffed against the mockup.

## Page-level Composer notes (beyond the homepage)

- **`about.html`:** Hero → Mission Band (green panel, 100/) → Our Story (50/50 image + text) → By the Numbers (25/25/25/25) → History Timeline (custom class `.timeline`, single column) → Accreditation Cards (33/33/33) → Leadership (33/33/33) → Two Campuses (50/50 reversed) → CTA Band. Each section is one Composer panel.
- **`admissions.html`:** Hero → How to Apply (33/33/33 numbered cards) → Enrollment Steps (33/33/33) → Admission Pathways (25/25/25/25) → Testing & Assessment (33/33/33) → Campus Tours banner (100/ green CTA) → FAQ (custom accordion, 100/) → CTA Band.
- **`tuition-aid.html`:** Hero → Pay Tuition banner (100/ green) → Tuition Rates table (100/) → Financial Aid grid (50/50) → Net Price Calculator callout (100/) → How Financial Aid Works steps (25/25/25/25) → Veterans Benefits band (100/ green inverted) → Campus Aid Offices (50/50) → FAQ → CTA Band.
- **`contact.html`:** Hero → Campus Contact Cards (50/50) → Contact Form (66/33 with Quick Contacts sidebar) → CTA Band. The form should be built with Finalsite's native Form element, not the mockup's HTML form.
- **`consumer-information.html`:** Hero → Intro Band (100/ off-white) → Layout (25/75) with sticky sidebar left column and stacked disclosure cards right column. Each disclosure card is a Content Element inside the 75% column. In Composer, the sticky behavior comes from either the Theme Manager or a custom CSS class on the sidebar column.
- **`clearwater.html` / `stpete.html`:** Campus Hero → Programs at This Campus (filterable Post feed) → Campus Facts (25/25/25/25) → Community Resources → Apply/Visit CTA Band. Use the campus-specific shell (`_templates/shell-clearwater.html` / `shell-stpete.html`) so the 4-pillar campus nav renders correctly.

## Accessibility checklist per panel

| Panel | Primary check |
|---|---|
| Hero | Overlay darkens image enough for white text to pass AA contrast |
| Quick Links | Icons have `aria-hidden="true"`; link text is the accessible name |
| Why PTC | 3-column grid collapses on mobile without text truncation |
| Programs Grid | Card focus states visible via keyboard; alt text on every image |
| Campuses | `#008142` + white = AAA; button text dark green, not light green |
| News | News card dates use machine-readable `<time datetime="...">` |
| CTA Band | Yellow button with dark green text passes AAA; keyboard focus visible |
| Footer | All links have descriptive text; social icons have `aria-label` |
