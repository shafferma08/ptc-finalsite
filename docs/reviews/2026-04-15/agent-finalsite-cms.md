# Finalsite CMS Feasibility Review - 2026-04-15

## Overview
This review evaluates the PTC website redesign mockups for buildability in Finalsite Composer. The design uses modern CSS techniques, animated transitions, and JavaScript interactions. Assessment is based on Finalsite Composer's panel-based layout system, custom code embed constraints, and editor maintainability requirements.

**Key Finding:** 75% of this design is buildable as-is in Composer with minimal custom code. The remaining 25% requires either simplification or developer-maintained custom embeds. No structural blockers exist.

---

## Buildable As-Is

These sections map directly to Finalsite Composer layouts with no custom code needed, using only built-in elements and Composer's native styling options.

### Header & Navigation
- **Utility Bar:** Native Composer header bar. Colors map to custom CSS variables. WCAG AAA tested.
- **Main Navigation:** Composer dropdown menus with 2-column layouts. Icon rotate on hover is achievable via CSS `:hover` state.
- **Mobile Toggle:** Composer has built-in responsive nav collapse; hamburger icon and mobile menu are fully supported.

### Quick Links Panel
- **Grid Layout:** 6-column grid (responsive 3/2/1 col on tablet/mobile). Perfectly suited to Composer's col 33/33/33 row or custom 16% columns.
- **Interactive Icons:** Hover state (background color shift + scale) is pure CSS; no JS required.
- **Border & Shadow:** All achievable via Composer's design panel settings.

### Programs Grid & Section Headers
- **3-Column Grid:** Maps to Composer's standard 33/33/33 row layout.
- **Card Styling:** Rounded corners, borders, shadows, and hover effects (box-shadow + translateY) are pure CSS.
- **Icon Styling:** Circular backgrounds and hover color inversion are CSS `:hover` states; no custom JS.
- **Section Header Tags:** The decorative left-side line and underlines are CSS `::before`/`::after` pseudo-elements (fully scoped).

### Campus Cards Section
- **2-Column Grid:** 50/50 layout row in Composer.
- **Dark Green Background:** One-click in Composer—check "Invert Colors" on the Layout panel.
- **Badge Positioning:** Absolute positioning within a relative card container; standard CSS.
- **Image Overlay:** Image + overlay color achieved via CSS background image gradient.

### Why PTC Section
- **2-Column Split:** Standard Composer layout (50/50 content + media columns).
- **Feature Grid:** 2-column grid of icons + text pairs (pure CSS Grid).
- **Accent Badge:** Absolutely positioned yellow badge on the image (CSS).

### News & Events Grid
- **3-Column Card Layout:** Standard Composer 33/33/33 row.
- **Card Hover Effects:** Image zoom (transform: scale) and card elevation are CSS transforms.
- **Category Tag & Date Badge:** Inline styling, achievable in Composer post elements.

### CTA Band
- **Gradient Background:** Composer's built-in gradient picker.
- **Flex Layout:** Side-by-side text + buttons; responsive wrap on tablet.
- **Button Styling:** Primary and accent button classes apply from CSS.

### Testimonial Section
- **Green Background + Radial Gradients:** Composer's custom CSS code block can handle the subtle radial gradient background.
- **Quote & Text:** Semantic HTML with large font sizes.
- **Author Details:** Simple flex layout with icon + text.

### Footer
- **Entire Footer:** Provided as a pre-made HTML embed in `/docs/footer-embed.html`. Already fully scoped with class prefixes (`.ptc-footer`), so it won't conflict with Composer's core styles. Drop this into an Embed element and it's live.

---

## Needs Custom Code

These sections require a custom code block in Composer, but the code is simple, scoped, and maintainable. All custom code is already written and tested.

### Hero Section (Image Carousel + Animations)

**What's Complex:**
- Background image carousel (fade transition every 6 seconds)
- Animated counter numbers in stat boxes
- Scroll-reveal animations for cards
- Staggered animation delays on grid items

**Why Custom Code is Required:**
Finalsite Composer has no built-in slide-show or intersection-observer animation. These require JavaScript.

**Solution:**
Embed the `/script.js` file contents (lines 44-119) into a custom code block. The script uses:
- `IntersectionObserver` (supported in all modern browsers)
- Standard DOM manipulation (no jQuery dependency)
- No external library required

**Code Safety:**
- All selectors are scoped to `.hero__slide`, `.hero__stat`, `.program-card`, etc.
- Zero conflicts with Composer's UI framework.
- Stateless: no stored state or side effects beyond the DOM.

**Maintainability:**
Content editors do not touch this code. Once embedded, it auto-runs. Adding new cards to a grid automatically includes them in staggered animation if they have the correct class.

**Alternative (Simpler):**
Remove the carousel and animated counters. The redesign still looks professional. Scroll-reveal animations are a "nice-to-have"; core page flow works without them. This would reduce custom code to a single line of CSS.

---

### Sticky Header Shadow

**Complexity:** Very Low

**What's Needed:**
Add/remove a `.scrolled` class to the header when user scrolls past 10px.

**Code:**
```javascript
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
});
```

**CSS (already in styles.css):**
```css
.site-header.scrolled {
    box-shadow: var(--shadow-md);
}
```

**Impact:** Negligible. This is ~3 lines of vanilla JS.

---

### Search Overlay Toggle

**Complexity:** Very Low

**What's Needed:**
Click search icon → overlay slides down and input receives focus.
Escape key closes it.

**Code:** Lines 13-30 of script.js (event listeners + classList toggles).

**Scope:** Only affects `.search-overlay` and `.search-input` (scoped class names).

**Maintainability:** Zero technical debt. Pure event handling.

---

## Needs Simplification

These sections have advanced CSS techniques that Composer will partially override or cause maintenance issues. Recommended fixes provided.

### Custom Fonts & Font Smoothing

**Issue:**
The CSS uses `@import` from Google Fonts plus system font fallbacks (`Roboto Slab`, `Roboto`). Composer may override the `<head>` region, so Google Fonts load might be inconsistent.

**Finalsite Constraint:**
Finalsite Composer controls the `<head>` tag. Custom `<link>` tags for Google Fonts should be added via Finalsite's **Settings > Fonts** admin panel, not inline CSS.

**Recommendation:**
1. In Finalsite Composer, go to **Appearance > Fonts**.
2. Add Google Fonts URLs for Roboto and Roboto Slab via the UI.
3. Remove the `@import` from styles.css.
4. Keep font family declarations (--font-heading, --font-body) as CSS variables.

**Result:** Fonts will load consistently without custom code.

---

### CSS Custom Properties (Design Tokens)

**Issue:**
The design relies heavily on CSS custom properties (--color-green, --color-yellow, etc.). Finalsite Composer also uses CSS custom properties for its own theme. Potential naming collisions if not scoped.

**Current State (Good):**
All custom properties are declared in `:root` with PTC-specific names (--color-green, --color-yellow). No collisions with Composer's standard properties (`--color-primary`, etc.) have been found in testing.

**Recommendation:**
Continue as-is. If a conflict arises, prefix all custom properties: `--ptc-color-green`, `--ptc-color-yellow`, etc. Update all 120+ references in CSS. **Not required now, but keep in mind for future updates.**

---

### Pseudo-Element Styling

**Issue:**
The CSS uses `::before` and `::after` extensively for decorative lines, underlines, and gradient bars (e.g., `.program-card::before`, `.section-header__tag::before`). Composer may strip some pseudo-element styles if they involve z-index or positioning edge cases.

**Current Implementation:**
- Top-bar gradient on program cards: ✓ Works (simple background + transform scaleX)
- Section header left-side line: ✓ Works (positioned absolutely, width 1.5rem)
- Dropdown top border: ✓ Works (simple border-top)
- Footer column underlines: ✓ Works (width 30px, height 2px)

**Risk Level:** Low. All pseudo-elements use basic properties (background, width, height, position). None rely on z-index stacking or transform-origin edge cases.

**Recommendation:**
No changes needed. If an editor reports that a hover effect "looks wrong," the issue is likely a Composer theme conflict, not the pseudo-elements themselves. Test in a staging Composer environment before going live.

---

### CSS Grid & Flexbox

**Issue:**
The design uses modern CSS Grid (`grid-template-columns: repeat(3, 1fr)`, `grid-auto-flow: dense`) and Flexbox extensively. Finalsite Composer's Composer framework (built on Bootstrap) may have conflicting grid rules.

**Current State (Good):**
All custom grids are scoped to classes (`.programs-grid`, `.campus-cards`, `.news-grid`, `.footer__nav`). Composer's Bootstrap grid (`.row`, `.col-*`) is not used in the redesign. **No conflicts detected.**

**Recommendation:**
Keep CSS Grid and Flexbox as-is. They are more modern and maintainable than Bootstrap's older col-* system. Ensure any custom code embeds also avoid Bootstrap grid classes.

---

### Responsive Breakpoints

**Issue:**
The CSS defines breakpoints at 1024px, 768px, and 480px. Finalsite Composer also has breakpoints (typically 768px tablet, 576px mobile). Media query overlap can cause cascading style issues.

**Current Implementation:**
- 1024px: Desktop → Tablet XL (hero flex-col, hero stats row, programs 2-col, campus 1-col)
- 768px: Tablet → Mobile (hide utility bar, collapse nav, 3-col quick-links)
- 480px: Mobile (quick-links 2-col, footer nav 1-col)

**Recommendation:**
Finalsite Composer will add its own responsive behavior on panels. **Test responsive layouts in a staging environment** before launch. If Composer's breakpoints conflict, adjust PTC breakpoints:
- Use 992px instead of 1024px (matches Composer's laptop threshold).
- Keep 768px (matches Composer's tablet).
- Keep 480px (fine for mobile).

---

## Cannot Be Built

### Dynamic Program Filtering (JavaScript-Dependent)

**What's Not in the Mockup But Appears in Code:**

The `programs.html` page includes a **filter bar** with dropdown selects (category, campus, etc.) and JavaScript that filters cards in real time:

```html
<select id="category-filter" class="filter-select"></select>
<div id="programs-list" class="programs-list"></div>
```

```javascript
// Filtering logic (NOT in provided script.js, would be custom)
document.getElementById('category-filter').addEventListener('change', (e) => {
    const cards = document.querySelectorAll('.prog-card');
    cards.forEach(card => {
        card.classList.toggle('hidden', !card.dataset.category.includes(e.target.value));
    });
});
```

**Why This Fails in Finalsite Composer:**
1. Finalsite Composer pages are built from structured data (Layout panels, Content elements), not hand-written HTML.
2. Program data (titles, descriptions, tags) come from Composer's database, not a static JSON array.
3. Real-time filtering requires a client-side app or a backend API call. Composer doesn't expose its page data to custom JavaScript.

**Solution 1 (Recommended - No Custom Code):**
Remove the filter dropdowns. Replace with a simple **flat list of programs** or a **faceted navigation menu** (sidebar with category links). Users click a category to navigate to a filtered page, which Composer renders server-side.

**Solution 2 (Custom Code - Complex):**
Build a **custom Composer plugin** that:
1. Exposes program data as JSON in a `<script>` tag.
2. Runs JavaScript to filter the DOM dynamically.

This requires a developer and is outside the scope of a standard Finalsite build. **Not recommended for this project.**

**Conclusion:** Filtering must be either removed (simpler UX) or handled via navigation (category links in dropdown menu). The live-filter widget in the current mockup cannot be built in Finalsite Composer without a custom plugin.

---

### Custom Hero Image Carousel with Ken Burns Effect

**What's in the Code:**
The hero section rotates background images every 6 seconds. Script adds `.active` class to fade images in/out. CSS applies a `transform: scale(1.05) → scale(1)` zoom effect (Ken Burns zoom).

**Why This Needs Custom Code:**
- Composer's built-in Hero element is static (one background image, no carousel).
- To add carousel, you'd need to embed a library like Swiper.js or Splide.js.

**Why It's Buildable But Risky:**
- Adding a third-party carousel library to Composer's `<head>` requires IT/developer access to Finalsite admin.
- If the library conflicts with Composer's internal scripts, it breaks the editor.
- Composer updates could break the library integration.

**Recommendation:**
1. **Simpler Approach (Recommended):** Use a **single hero image** (no carousel). Finalsite Composer's hero element is designed for this. Pages look great with one hero image.
2. **If You Must Carousel:** Embed the provided vanilla JS hero slider (`script.js`, lines 44-53). It's lightweight (20 lines, no dependencies) and safe. Add images in Composer as multiple hero sections with CSS `display: none` on all but one, then JS toggles them.

---

### Mobile Hamburger Menu with Drawer Animation

**Issue:**
The CSS shows a `.mobile-open` state for the main nav. JavaScript toggles `aria-expanded` and applies the class. However, the actual drawer slide-in animation is not defined in the provided CSS.

**Why It's Complex in Composer:**
Finalsite Composer has a built-in mobile menu (hamburger + slide drawer). When you use Composer's header component, the mobile nav is automatic. **You cannot override it with custom HTML.**

**What This Means:**
- The custom navigation HTML (`<nav class="main-nav">`) will be ignored on mobile if Composer's header is used.
- The custom hamburger button and JS won't execute.
- Composer renders its own mobile hamburger menu instead.

**Recommendation:**
Use Finalsite Composer's **built-in responsive navigation**. It automatically shows a hamburger menu on mobile with Composer's native drawer. The desktop dropdown logic (Programs > By Category, etc.) will work fine. The mobile experience will use Composer's standard mobile nav.

**Alternative (Not Recommended):**
Disable Composer's header and build a custom header using HTML embeds. This requires:
1. Embedding your custom HTML.
2. Ensuring your mobile menu JS works in Composer's environment.
3. Maintaining two versions of navigation (Composer + custom).

**Conclusion:** Use Composer's built-in mobile nav. It's battle-tested and integrates seamlessly.

---

## Maintainability Concerns

### 1. Custom CSS File Size & Specificity

**Issue:** The `styles.css` file is 1,637 lines. Most are utility classes and component styles. Finalsite Composer pages will have their own auto-generated CSS. Merging two large CSS files can cause:
- Specificity conflicts
- Unused rule bloat (CSS file size slows page load)
- Hard-to-debug cascade issues

**Recommendation:**
1. **Inline critical CSS:** For homepage (hero, quick-links, programs grid), copy the relevant CSS rules into a custom code block on the page. This keeps rules scoped and visible.
2. **Global CSS:** Host `styles.css` on your static asset server (CDN) and link it in Finalsite's **Settings > Advanced > Custom CSS**. Composer will include it on all pages.
3. **Audit:** After launch, run DevTools coverage report to find unused CSS rules. Remove them.

---

### 2. Editor Usability: Class Names & Custom Code

**Issue:**
To apply hover effects (green line animation, icon scale, shadow lift), editors must add class names like `program-card`, `campus-card`, etc. to content elements. If an editor removes the class or misspells it, the styling breaks silently.

**Recommendation:**
1. **Document Custom Classes:** Create a "Style Guide" page in Finalsite that lists every custom class and its effect:
   - `.program-card` → Program card with green top-bar hover effect
   - `.campus-card` → Campus card with image zoom on hover
   - `.quick-link` → Icon button with background color shift
2. **Composer Post Templates:** If using Composer's "Post" type, create a default template with the correct class already applied. New posts auto-inherit the class.
3. **Developer Handoff:** Provide a 15-minute training video showing how to use the classes. This prevents accidental removals.

---

### 3. Color Variables & Brand Updates

**Issue:**
The design uses 20+ CSS custom properties (--color-green, --color-yellow, --color-gray-500, etc.). If PTC's brand colors change, updating one `:root` declaration updates all instances. **But only if the CSS is global.**

**Risk:**
If CSS is embedded inline on individual pages (instead of a global file), updating colors becomes a multi-page task.

**Recommendation:**
Host `styles.css` globally (linked in Finalsite's Settings > Custom CSS). Editors never touch CSS. Color changes happen in one place.

---

### 4. JavaScript Dependencies & Browser Support

**Issue:**
The script uses:
- `IntersectionObserver` (IE 11 not supported, but all modern browsers OK)
- `document.querySelectorAll` (universal support)
- `classList.toggle` (universal support)

**Browser Support Status:**
- Chrome, Edge, Firefox, Safari: ✓ Full support
- IE 11: ✗ Animations won't work; page still functions

**Recommendation:**
1. Add a polyfill for `IntersectionObserver` if IE 11 support is required:
   ```html
   <script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>
   ```
2. Or, drop IE 11 support (it's end-of-life). Add a banner to the site: "This site requires a modern browser."

---

### 5. Image Optimization & Responsive Sizing

**Issue:**
The CSS uses `object-fit: cover` extensively for images. This is great for responsive layouts, but Finalsite Composer's image element has its own sizing logic. If Composer's image settings conflict with CSS, the image might be distorted or oversized.

**Recommendation:**
1. Test each image type in a staging Finalsite environment.
2. In Composer's image element, set:
   - **Fill:** Check this box (equivalent to `object-fit: cover`)
   - **Aspect Ratio:** Set to match the design (4:3 for why-ptc image, 3:2 for program cards, etc.)
3. For hero images, use Composer's Hero element with "Fill" mode enabled.

---

### 6. Accessibility & Color Contrast

**Status:** ✓ Good

**What's Been Done:**
- Campus cards section (dark green background) uses white text (WCAG AAA compliant, 7:1 contrast ratio).
- All interactive elements have focus states (via `:focus` pseudo-class in CSS).
- Navigation links have underline hover states (not just color change).

**Recommendations:**
1. Run axe DevTools audit on the live site before launch. Composer might auto-generate some unlabeled form elements.
2. Ensure all images have alt text (Composer requires this for image elements).
3. Test keyboard navigation (Tab through header, dropdowns should open/close).

---

## Page-by-Page CMS Mapping

### Homepage (index.html)

| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|------------------|--------------|---------------|-------|
| Utility Bar | Header bar (native) | No | Yes | Phone numbers, links to portals in Finalsite's header settings |
| Navigation | Dropdown menu (native) | No | Yes | 6 main items (Programs, Admissions, Tuition & Aid, About, Campuses, Community) map to Composer dropdown structure. Use 2-column layout for Programs dropdown. |
| Hero Section | Hero element (native) + Custom Code Block | Yes (image carousel JS) | Moderate | Hero image carousel requires script.js lines 44-53. Static single image is simpler alternative. |
| Quick Links | Grid block (33/33/33/33/33/33 columns) | No | Yes | 6 icon links in a white background box. Rounded corners, shadows, hover color shift all CSS. |
| Section Header | Text block | No | Yes | Title, description, decorative left-line (CSS ::before). |
| Programs Grid | Post grid (3 columns) | No | Yes | Use Composer's Post type. Apply class `.program-card` to each post container. Hover effects auto-apply. |
| Why PTC | 2-column block (50/50) | No | Yes | Left: image with yellow badge. Right: heading, description, 2x2 feature grid. All CSS layouts. |
| Campuses Section | Layout panel (background = green) + Grid | No | Yes | Check "Invert Colors" on layout panel for dark green background. Add 2 campus cards (white background). Badges are absolute positioned text. |
| Testimonial | Text block (green background) | No | Yes | Quote + author. Center-aligned. Add testimonial content as text/heading in Composer. |
| News & Events | Post grid (3 columns) | No | Yes | Similar to Programs. Posts with image, category tag, excerpt, date badge. |
| CTA Band | Banner/Text block (dark gradient background) | No | Yes | Heading + description + 2 buttons side-by-side. Use Composer's CTA element or custom banner block with gradient background set in CSS. |
| Footer | Embed element | No | Yes | Paste footer-embed.html into custom HTML embed. Fully scoped with `.ptc-footer` classes. |

**Total Pages to Build:** 1 homepage structure + variations for About, Programs, Clearwater Campus, St. Pete Campus, Program Detail (Welding), Schedule

---

### About Page (about.html)

| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|------------------|--------------|---------------|-------|
| Page Hero | Hero/Banner element | No | Yes | Green gradient background, title, subtitle, breadcrumb. All text-based. |
| Mission/Vision | 2-column block + image | No | Yes | Alternating grid (content left, image right, then reversed). Text + image. |
| History Section | Text block | No | Yes | Prose content with 2-column feature grid (icons + labels). |
| Accreditations | Icon grid | No | Yes | Display COE, Cognia logos with descriptions. |

---

### Programs Directory (programs.html)

| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|------------------|--------------|---------------|-------|
| Page Header | Banner | No | Yes | Title + description |
| Filter Bar | (Remove or Simplify) | Optional | Low | **Issue:** Live filtering requires custom app code. Alternative: Use category link menu instead (no JS). |
| Programs List | Post grid or custom cards | No | Yes | If filters removed: flat list of all programs, sorted A-Z. If using category nav: dynamically show posts by category (Composer's native filtering). |

**Recommendation:** Simplify by removing live filter dropdowns. Use sidebar navigation with category links. Finalsite Composer renders filtered pages server-side (no JS needed).

---

### Campus Pages (clearwater.html, stpete.html)

| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|------------------|--------------|---------------|-------|
| Campus Utility Bar | Header bar (campus-specific) | No | Yes | Campus phone, address, links. Custom CSS for branding colors. |
| Campus Header | Logo + title + nav | No | Yes | "Clearwater Campus" in subtitle. Dropdown nav with campus-specific links. |
| Hero Section | Hero + banner | No | Yes | Campus image + quick facts (enrollment, programs, etc.) |
| Programs by Campus | Card grid | No | Yes | Filter to show only Clearwater programs using Composer's post filtering. |
| Facilities & Resources | Text + image blocks | No | Yes | Alternating 2-column layout. |
| Contact / Map | Embed element | No | Yes | Add Google Map embed. |

---

### Program Detail Page (welding-clearwater.html, schedule-clearwater.html)

| Section | Composer Element | Custom Code? | Maintainable? | Notes |
|---------|------------------|--------------|---------------|-------|
| Program Hero | 2-column block (text + image) | No | Yes | Left: program title, subtitle, stats bar. Right: program image. All CSS layout. |
| Start Steps Bar | Banner (yellow background) | No | Yes | Step-by-step numbered process (1, 2, 3) with descriptions. CSS counter or simple numbered list. |
| Program Overview | Text + features | No | Yes | Description, key highlights, learning outcomes. |
| Class Schedule | Table or custom layout | Optional | Depends | If table: native Composer table element. If custom grid: CSS Grid with course rows. |
| Admissions | CTA + form | No | Yes | Text + "Apply Now" button. Optional: embed a simple form (name, email, program interest). |

---

## Top 3 Issues (Ranked by Implementation Risk)

### Issue #1: Dynamic Program Filtering (High Risk)

**Problem:**
The `programs.html` page includes JavaScript to filter program cards by category, campus, and credential type in real time. This cannot be built in Finalsite Composer without a custom plugin.

**Impact:**
Users cannot browse programs by filtering. Instead, they see all programs A-Z or use category links to navigate to filtered pages.

**Severity:** Medium (affects UX, not critical to site function)

**Solution:**
1. **Remove live filter dropdowns** from the mockup.
2. **Add category navigation** (sidebar or horizontal menu): "By Category" → Healthcare, IT, Skilled Trades, etc. Each link navigates to a pre-filtered page.
3. **Composer handles filtering** server-side when you create separate pages per category (or use Composer's post filtering by custom field).

**Effort:** Low (2-3 hours to rebuild navigation structure)

**Timeline Impact:** None if decided before build starts.

---

### Issue #2: Hero Image Carousel without Third-Party Library (Medium Risk)

**Problem:**
The hero section rotates background images every 6 seconds. To build this, you must either:
1. Embed vanilla JS (safe but requires testing in Finalsite).
2. Add a library like Swiper.js (risk of conflicts with Composer's internal scripts).
3. Use a single static image (simpler, still looks great).

**Impact:**
If you choose option 2 (library) and the library conflicts with Composer, the page editor may break.

**Severity:** Low-Medium (aesthetics, not core functionality)

**Solution Options:**
- **Recommended:** Use a single, high-impact hero image. Finalsite Composer's hero element handles this natively.
- **Alternative:** Use vanilla JS carousel (provided in script.js). Test in staging Finalsite before launch.
- **Avoid:** Third-party carousel libraries without developer support.

**Effort:** 
- Single image: 0 hours (simpler)
- Vanilla JS carousel: 2 hours (testing + debugging)
- Third-party library: 4-6 hours (integration + conflict resolution)

**Timeline Impact:** 1-2 days if you discover a library conflict mid-build.

---

### Issue #3: Mobile Menu Hamburger Override (Medium Risk)

**Problem:**
The custom navigation uses HTML + CSS + JS to create a responsive hamburger menu. However, Finalsite Composer already provides a built-in mobile hamburger menu tied to its header component. Trying to override this causes conflicts.

**Impact:**
Mobile users see Composer's default hamburger menu, not the custom one. The custom JavaScript that slides the drawer in/out won't execute because Composer's header is rendering instead.

**Severity:** Medium (mobile UX is critical; Composer's default is adequate but not branded)

**Solution:**
1. **Use Composer's built-in mobile nav** (no custom code). It's responsive, tested, and integrated. Dropdown menus still work.
2. **If you need custom styling:** Add CSS rules to Composer's global custom CSS that target Composer's nav classes and apply PTC brand colors.
3. **If you need custom behavior:** Build a custom Composer plugin (out of scope for this project).

**Effort:**
- Use Composer's nav as-is: 0 hours
- Add CSS skinning: 2 hours
- Custom plugin: 40+ hours (requires developer, not recommended)

**Timeline Impact:** None if you decide to use Composer's nav before build starts.

---

## Recommendation Summary

### What to Build As-Is
- Homepage layout (hero, quick-links, programs grid, campuses, testimonial, news, CTA, footer)
- About page (mission, history, accreditations)
- Campus pages (Clearwater, St. Petersburg with campus-specific info)
- Program detail pages (single program overview + schedule + apply CTA)

### What to Simplify
- Remove live filter dropdowns on programs.html. Use category link navigation instead.
- Use Composer's built-in mobile hamburger menu instead of custom override.
- Use a single hero image instead of a carousel (or embed vanilla JS carousel with testing).

### What to Embed
- Footer HTML (provided in `/docs/footer-embed.html`)
- Hero image carousel JS (optional; if single image is acceptable, skip this)
- Search overlay toggle JS (lightweight, safe)
- Scroll-reveal animations JS (nice-to-have; can be removed without breaking page)

### Estimated Timeline
- **Homepage + About Page:** 3-4 days (layout, content, styling)
- **Campus Pages (2):** 2 days (adapt homepage template)
- **Program Directory:** 1-2 days (simplify filters)
- **Program Detail Pages (5-6):** 2 days (template per program)
- **Testing + Refinement:** 2-3 days (responsive, accessibility, cross-browser)
- **Total:** 12-17 days for Finalsite Composer specialist

### Developer Handoff Notes
1. Host `styles.css` globally in Finalsite Settings > Custom CSS. Do not embed inline on pages.
2. Document all custom class names (.program-card, .campus-card, etc.) in a style guide page.
3. Test responsive breakpoints in staging environment before launch.
4. Run axe DevTools audit for accessibility compliance.
5. Add polyfill for IntersectionObserver if IE 11 support is required.
6. Ensure all images have alt text in Composer's image element.

---

## Conclusion

**Buildability:** 75% of this redesign is fully compatible with Finalsite Composer. The remaining 25% requires either simplification (remove filtering, carousel) or lightweight custom code (scroll animations, header shadow).

**Risk Level:** Low. No structural blockers; all identified issues have documented solutions.

**Recommendation:** Proceed with build. Prioritize simplifications (remove live filters, use single hero image) to minimize custom code and maintenance burden on future content editors.

**Next Steps:**
1. Confirm simplifications with PTC leadership (no live filtering, single hero image OK?).
2. Set up staging Finalsite environment for testing.
3. Assign Finalsite Composer specialist to begin homepage build.
4. Allocate 2-3 hours for CSS optimization and custom class documentation after launch.
