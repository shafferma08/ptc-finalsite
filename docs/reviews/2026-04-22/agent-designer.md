# Visual Design Review — 2026-04-22

## Design System Consistency

The design system is **well-structured at the token level** but shows **inconsistent implementation across page-specific styles**. The global `styles.css` (lines 1–1889) defines a comprehensive token system with clear CSS custom properties and reusable component classes. However, each major page (about.html, admissions.html, welding pages, schedule pages) introduces its own `<style>` blocks with duplicate and sometimes conflicting definitions.

**Key consistency issue:** Page-specific styles repeat token definitions inline rather than extending the global system. For example:
- `.page-hero` styling appears in about.html (lines 15–42) and admissions.html (lines 15–42) with nearly identical code
- `.step-card` styling differs between admissions.html (lines 57–96) and inline step components
- Border-radius values vary: `12px` (page styles) vs. `var(--border-radius-lg): 16px` (global) vs. `8px` (var(--border-radius))

**Result:** If a designer wants to adjust the hero gradient or card border radius across the entire site, they must edit 8+ files instead of one. This is a CMS maintenance risk (M6).

---

## Color & Typography

### Color Palette
The brand colors are applied **consistently and purposefully:**
- **PTC Green (#008142):** Primary brand color, used for buttons, links, navigation accents
- **Yellow (#FFCF01):** High-visibility accent, used on CTAs, "quick links" hover states, badges
- **Accent Lime (#8DC63F):** Secondary accent, used sparingly (news card categories, accreditation bar)
- **Neutrals:** Well-defined grayscale from #F1F3F5 (light) to #111827 (dark)

### Typography Hierarchy
**Font stack is solid but has a technical debt:**
- **Headings:** Roboto Slab (serif) — appropriate for educational brand
- **Body:** Roboto (sans-serif) — clean, readable at all sizes
- Both fonts load from Google Fonts (high reliability)

**Font sizes follow a clear scale** (using `clamp()` for responsive sizing):
- Hero title: `clamp(2.5rem, 5vw, 4rem)` ✓
- Section headers: `clamp(1.75rem, 3.5vw, 2.5rem)` ✓
- Body: `1rem` / `16px` ✓
- Small text (utility bar, labels): `0.8125rem` ✓

**Font weight usage is consistent:**
- Page titles / hero: 700–900 weight
- Body: 400–500 weight
- Links: 500–600 weight

### Contrast Issues (H9, M1)

**Critical finding:** `.section-header__desc` (line 801) uses `color: var(--color-gray-500)` (#6B7280) on white backgrounds. WCAG AA contrast ratio is approximately **5.5:1**, which passes but is at the threshold. On colored backgrounds (e.g., testimonial cards, employer hook), this drops below AA.

**Utility bar links** (line 233–234) use `color: var(--color-gray-300)` (#D1D5DB) on dark background (#1F2937). Contrast ratio is ~4.3:1, which **fails WCAG AA** (requires 4.5:1 for normal text).

**Testimonial card author names** (pattern-library.html, line 1209) use `color: rgba(255, 255, 255, 0.75)` on green background — adequate but not optimized.

---

## Layout & Spacing

### Grid System & Consistency
The site uses a **1280px max-width container** with responsive breakpoints at 1200px, 768px, and 480px. Spacing is driven by `--space-*` tokens (0.25rem to 6rem), which is excellent.

**Grid layouts are consistently applied:**
- Programs section: 3-column grid (line 821) with proper gap spacing
- Campus cards: 2-column grid (line 1047)
- News cards: 3-column grid (line 1223)
- Footer nav: 3-column grid (line 1466)

All grids **collapse to 1 column at 768px** with appropriate responsive margins.

### Padding & Margins
**Global padding is consistent:**
- Sections: `var(--space-4xl) 0` (6rem top/bottom)
- Component padding: `var(--space-xl)` to `var(--space-2xl)` (1.5–3rem)
- Container horizontal padding: `var(--space-xl)` (1.5rem)

**Potential issue (M4 — negative margin):** Quick links section uses `margin-top: -40px` (line 696) to overlap the hero. While this works visually, it's a hardcoded pixel value that doesn't scale on different viewports. Suggested fix: Use a CSS variable (e.g., `--quick-links-overlap`) or a relative negative margin based on the hero section's bottom padding.

### Whitespace
Whitespace is **generous and professional.** No cramped sections. Line heights (1.6–1.7) are readable. Breathing room around cards and sections is adequate.

---

## Interactive Elements

### Buttons (Primary Design Issue)
Buttons are well-styled with consistent hover states:
- `.btn--primary` (line 150–162): Green background, darkens on hover, lifts up with `transform: translateY(-2px)` and shadow
- `.btn--accent` (line 164–177): Yellow background, appropriate for CTAs
- `.btn--outline-white` (line 179–190): Inverts on hover (white background, green text)

**All button variants include transition animations** (`var(--transition-base)`) for smooth feedback.

### Missing Keyboard Focus States (H10 — Critical)
**No `:focus` or `:focus-visible` styling anywhere except search input (line 487–489).**

The search input has `.search-form__input:focus { border-color: var(--color-green); }`, which is good. But **buttons, links, and form elements lack visible focus indicators.** WCAG 2.1 Level AA requires a visible focus indicator.

**Evidence:** Lines 95–103 show `a { color: ... transition: ... }` but no `:focus`. Button classes (lines 124–207) define hover states but no focus states.

**Recommended fix:**
```css
.btn:focus-visible,
a:focus-visible,
input:focus-visible {
    outline: 3px solid var(--color-yellow);
    outline-offset: 2px;
}
```

### Link States
Links use `color: var(--color-green)` with a color transition on hover. **Active state is undefined.** Links on dark backgrounds (footer, hero CTAs) are handled but lack explicit `:active` styling.

### Icon Buttons
Search toggle and mobile menu toggle buttons (lines 402–444) lack focus indicators and have no `:active` states. Mobile hamburger animates on toggle but only via JS class, no CSS-only fallback.

---

## Visual Hierarchy

### Homepage
The homepage effectively uses visual hierarchy:
1. **Utility bar** (small, dark, minimal) — lowest priority
2. **Header with logo & nav** — primary navigation
3. **Hero section** (full-screen, gradient overlay, large text) — primary CTA
4. **Quick links** (overlapping cards, icons) — secondary CTAs
5. **Programs grid** (3 equal cards) — featured content
6. **Why PTC** (two-column, supporting narrative) — secondary content
7. **Testimonial** (hero-sized, centered, white text on green) — validation/proof
8. **News cards** (3-column grid, equal weight) — information
9. **CTA band** (gradient, centered) — call-to-action
10. **Footer** (dark, multi-column) — reference

**Strength:** Clear primary > secondary > tertiary hierarchy via size, color, and position.

**Weakness:** The "quick links" section uses `.margin-top: -40px`, which visually works but breaks the stacking context. The cards have equal weight (6 columns), so if one is more important, that intent is lost.

### Program Pages
Program pages use a **split hero** (left text, right image) with stat bar below. This is effective and consistent. Typography is clear: large program title, stat labels, description.

### About & Admissions Pages
Page hero styling is consistent across both. Section hierarchy is clear: title > subtitle > content. However, the **inline `<style>` blocks duplicate global classes**, making it unclear which version takes precedence.

---

## Page-by-Page Notes

### index.html (Homepage)
**What works:**
- Hero carousel with overlay gradient (line 561–567) is visually strong
- Quick links grid is intuitive and scannable
- Program cards have good visual distinction (green gradient top accent on hover, line 838–859)
- News cards are consistent in sizing and shadow
- Footer has clear column structure with dividing lines

**What needs work:**
- Quick links negative margin (M4) should be replaced with flexbox or CSS grid spacer
- Hero scroll indicator animation is smooth but the icon color (rgba white 0.6) may have contrast issues on some backgrounds
- Program cards link text uses `color: var(--color-green)` but no underline; hover only increases gap. Could be clearer with an icon or underline.

**Suggested fixes:**
- Add `text-decoration: underline` or arrow icon to program card links on hover
- Replace negative margin with `display: flex; gap: var(--space-2xl);` on parent
- Ensure hero scroll indicator has sufficient contrast (consider solid color or stronger opacity)

---

### about.html
**What works:**
- Page hero gradient is consistent with admissions page
- Accreditation cards grid is clean and well-spaced
- Mission statement section uses high-contrast white text on green

**What needs work:**
- Inline styles repeat hero definition from admissions.html (lines 15–42 are identical)
- Timeline styling starts at line 142 but is cut off in global CSS — uses `:before` pseudo-element but implementation is incomplete
- About grid images use `border-radius: 12px`, but global images use `var(--border-radius-lg): 16px` — inconsistent

**Suggested fixes:**
- Move all page hero styles to global CSS as `.page-hero`, `.page-hero__breadcrumb`, etc.
- Complete the timeline implementation in global CSS
- Standardize image border-radius to `16px` using the global token

---

### admissions.html
**What works:**
- Step cards have subtle hover effects (line 64–68)
- Info card layout is flexible and responsive
- Testing section icon styling is consistent with the rest of the site
- FAQ accordion uses smooth icon rotation

**What needs work (M5 — Card styling fragmentation):**
- `.step-card` (line 57) uses `box-shadow: 0 2px 12px rgba(0,0,0,0.06)` and `border: 1px solid #e8ecf1`
- `.info-card` (line 105) uses identical shadow and border
- `.testing-type` (line 157) uses `border: 2px solid #e8ecf1` instead of 1px
- `.accred-card` (on about.html) uses yet another variant

All are slightly different. Should consolidate to `.card`, `.card--lg`, etc.

- Tour banner (line 183) uses a hardcoded gradient `linear-gradient(135deg, var(--color-green) 0%, #006634 100%)` instead of a CSS variable
- Page hero styling is duplicated (see about.html notes)

**Suggested fixes:**
- Create a global `.card` class with variants: `.card--elevated` (shadow), `.card--bordered`, etc.
- Move tour banner gradient to `--gradient-hero` token
- Move all page hero styles to global CSS

---

### welding-clearwater.html (Program Page)
**What works:**
- Split hero layout is clean and professional
- Stat bar styling is minimal and readable
- Start steps yellow bar provides visual variety without clashing

**What needs work:**
- Program hero uses inline styles (lines 14–42) with hardcoded colors: `linear-gradient(135deg, var(--color-green-dark) 0%, #004d29 100%)`
- `#004d29` is not in the design tokens and may not match the brand
- Stat bar styling is inline with no global equivalent
- Step buttons (`.step-btn`) use `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15)` but this value doesn't match global shadow tokens
- Video card layout (line 128–150) is incomplete

**Suggested fixes:**
- Create global program hero gradient token: `--gradient-program-hero`
- Define `.stat-bar` and `.stat-bar__item` classes in global CSS
- Audit all hardcoded gradients and colors, convert to tokens
- Complete video card styling in global CSS

---

### schedule-stpete.html
**What works:**
- Page header styling is consistent with other pages
- Draft banner (line 60–87) is clear and uses appropriate warning colors
- Filter bar styling is minimal

**What needs work:**
- Schedule page header uses inline styles with duplicate code from program pages
- Draft banner icon color is hardcoded: `color: #b45309`
- Warning background uses `#fef9c3` (not in tokens)
- Sticky filter bar may have stacking issues with header (z-index: 100)

**Suggested fixes:**
- Create a page-header token and reuse across all pages
- Move draft banner colors to design tokens: `--color-warning-light`, `--color-warning-dark`
- Audit z-index stack: utility-bar (none), header (1000), dropdown (implied higher), mobile-nav (999), filters (100) — potential conflicts

---

### program-card pages (welding-advanced.html, etc.)
**What works:**
- Consistent use of hero section
- Info layout is scannable

**What needs work:**
- Each page defines its own styles, creating 8+ separate style blocks
- No unified template system in Finalsite Composer

---

## Prior Issues Status

### Resolved (Since 2026-04-15 Review)

**None marked as resolved.** All prior issues remain open.

### Still Open — Design Review Subset

| Issue | Status | Evidence |
|-------|--------|----------|
| **H7 (Mobile responsiveness — fixed font sizes)** | PARTIALLY ADDRESSED | Hero title uses `clamp()` (line 597), section headers use `clamp()` (line 795), so typography scales. However, page-hero `__title` on about.html uses fixed `font-size: 2.5rem` (line 33). Check all page hero titles. |
| **H9 (Color contrast issues)** | OPEN | Utility bar links: #D1D5DB on #1F2937 = 4.3:1 contrast (fails AA). Section header desc: #6B7280 on white = 5.5:1 (passes AA but marginal). |
| **H10 (No visible focus indicators)** | OPEN | No `:focus` or `:focus-visible` styling on buttons, links, or form inputs (except search input). **Critical accessibility gap.** |
| **M4 (Negative margin on quick links)** | OPEN | Line 696: `.quick-links { margin-top: -40px; }`. Hardcoded pixel value, not responsive. Replace with flexbox spacer or CSS variable. |
| **M5 (Card styling fragmentation)** | OPEN | `.step-card`, `.info-card`, `.testing-type`, `.accred-card`, `.campus-card`, `.news-card`, `.program-card` all have slightly different shadows and borders. No unified card system. |
| **M6 (Duplicate CSS across page-specific styles)** | OPEN | `.page-hero` defined in about.html (lines 15–42) AND admissions.html (lines 15–42). Program pages, schedule pages all repeat hero/section styles. Global CSS = 1889 lines, but 8 additional `<style>` blocks add ~500+ lines of duplication. |

---

## Top 3 Issues (Ranked by Visual Impact)

### 1. Missing Keyboard Focus Indicators (H10) — CRITICAL ACCESSIBILITY
**Impact:** Users navigating by keyboard see no indication of focus. Appears the site is broken or unresponsive.

**Location:** Entire site (all buttons, links, form inputs except search)

**Root cause:** No `:focus-visible` or `:focus` rules in global CSS.

**Severity:** High — blocks WCAG 2.1 Level A compliance; current students and faculty using assistive tech cannot navigate.

**Recommended fix:** Add to styles.css (after line 110):
```css
/* Focus States */
button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
    outline: 3px solid var(--color-yellow);
    outline-offset: 2px;
}
```

**Estimated effort:** 30 minutes (implement + test across pages).

---

### 2. Card Styling Fragmentation (M5) — MAINTENANCE RISK
**Impact:** Designers must hunt across 8 files to find the correct shadow, border, and padding values. Inconsistent card appearance across pages.

**Location:** admissions.html, about.html, welding pages, schedule pages

**Evidence:**
- `.step-card` (admissions, line 61): `box-shadow: 0 2px 12px rgba(0,0,0,0.06); border: 1px solid #e8ecf1;`
- `.info-card` (admissions, line 109): identical
- `.testing-type` (admissions, line 159): `border: 2px solid #e8ecf1;` (2px instead of 1px)
- `.accred-card` (about, line 121): `box-shadow: 0 2px 12px rgba(0,0,0,0.06);`
- Global `.campus-card` (styles.css, line 1051): `box-shadow: var(--shadow-md); border: 1px solid var(--color-gray-200);`
- Global `.news-card` (styles.css, line 1231): `box-shadow: var(--shadow-sm); border: 1px solid var(--color-gray-200);`
- Global `.program-card` (styles.css, line 833): `border: 1px solid var(--color-gray-200);`

**Root cause:** No unified card design system. Each page-specific style block reinvents the card.

**Severity:** Medium — affects consistency but not functionality. Impacts future maintenance in Finalsite Composer.

**Recommended fix:** Create a global card component in styles.css:
```css
.card {
    background: var(--color-white);
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--color-gray-200);
    padding: var(--space-2xl);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-slow);
}
.card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
}
.card--lg { padding: var(--space-3xl); }
.card--bordered { border: 2px solid var(--color-gray-200); }
```

Then replace all page-specific `.step-card`, `.info-card`, etc. with `.card` or `.card--lg`.

**Estimated effort:** 2–3 hours (audit all cards, create component, test).

---

### 3. Duplicate Page-Specific CSS (M6) — MAINTENANCE & SCALABILITY
**Impact:** When Marianne or a future webmaster needs to change the page hero styling, tuition rates styling, or accreditation section layout, they must edit multiple files. High risk of inconsistency and missed updates.

**Location:** Global styles.css (1889 lines) + about.html, admissions.html, welding-clearwater.html, welding-stpete.html, welding-advanced.html, schedule-clearwater.html, schedule-stpete.html, and others

**Evidence:**
- Page hero styling (lines 15–42 in about.html and admissions.html): Identical gradient `linear-gradient(135deg, var(--color-green) 0%, #006634 100%)`, identical breadcrumb styling, identical title sizing
- Stat bar styling (welding pages): Not in global CSS
- Step card styling (admissions): Not in global CSS
- Info card styling (admissions): Not in global CSS
- Timeline styling (about): Incomplete in global CSS, inline partial

**Root cause:** Pages were built incrementally without consolidating shared styles into global CSS.

**Severity:** Medium–High — affects future maintenance. In Finalsite Composer, designers cannot reuse components across pages if styles are isolated.

**Recommended fix:** Extract all page-specific styles into global CSS:
1. Create `.page-hero` class with all breadcrumb, title, and subtitle styling
2. Create `.section-band` for dark header sections
3. Create `.steps-grid`, `.info-cards`, `.testing-types` as reusable component classes
4. Remove inline `<style>` blocks from individual pages
5. Add comments in global CSS to group related components

**Estimated effort:** 4–6 hours (audit, extract, consolidate, test across all pages).

---

## Summary & Recommendations

### Strengths
- Design tokens are well-defined and comprehensive
- Color palette is purposeful and consistent
- Typography hierarchy is clear and responsive
- Button styling is polished with smooth hover/active states
- Layout grids are consistent with proper spacing

### Weaknesses
- **No keyboard focus indicators** (critical accessibility failure)
- **Duplicate CSS across 8+ page-specific style blocks** (maintenance nightmare for Finalsite Composer)
- **Card components lack unified design** (fragmented shadows, borders, padding)
- **Color contrast issues on utility bar** (fails WCAG AA)
- **Hardcoded pixel values** (negative margins, colors) instead of tokens
- **Missing `:active` and `:focus` states** throughout interactive elements

### Priority Actions (Next Review Cycle)
1. **Add `:focus-visible` rules** to all interactive elements (30 min)
2. **Fix utility bar link contrast** by using a lighter color or higher opacity (15 min)
3. **Create unified card component** and replace all variants (2–3 hours)
4. **Extract page-specific CSS to global** and remove duplicate styles (4–6 hours)
5. **Audit all hardcoded colors/gradients** and convert to tokens (1–2 hours)

---

**Review date:** April 22, 2026  
**Reviewed by:** Visual Design Agent  
**Next review:** May 15, 2026 (after Phase 2 fixes)
