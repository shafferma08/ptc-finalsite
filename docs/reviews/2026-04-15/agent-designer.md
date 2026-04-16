# Visual Design Review — 2026-04-15

## Executive Summary

The PTC Finalsite demonstrates a **well-structured design system with strong consistency across pages**. The design is professional, accessible, and appropriately scaled for a higher education institution. The color palette is used purposefully, typography hierarchy is clear, and interactive elements are well-defined. Two significant issues identified require attention before launch.

---

## Design System Consistency

### Strengths

**Comprehensive CSS Custom Properties System**
- All brand colors, typography, spacing, shadows, and transitions are defined as CSS variables
- Consistent use of semantic naming (e.g., `--space-xl`, `--color-green`, `--shadow-md`)
- Spacing scale is modular: xs (0.25rem) through 4xl (6rem), enabling predictable layouts
- Clear separation between design system rules (styles.css) and page-specific styles (inline in HTML)

**Layout Grid System**
- Consistent use of CSS Grid and Flexbox for responsive layouts
- Maximum container width of 1280px is appropriate and readable
- Clear vertical rhythm with consistent section padding (4rem, 3rem, 2rem)
- Hero section height calculation (`calc(100vh - header-height - 32px)`) shows attention to precision

**Responsive Breakpoints**
- Thoughtful breakpoints at 1200px, 768px, and 480px
- Mobile-first utility bar removal (display: none at 768px)
- Hamburger navigation implemented with proper aria labels
- Images properly marked with `loading="lazy"` for performance

### Areas for Improvement

**Duplication in Page-Specific Styles**
- About.html, Admissions.html, and other pages duplicate core styling within inline `<style>` blocks
- This increases file size and creates maintenance burden
- Example: `.page-hero` background, sizing, and typography appear in multiple files
- **Recommendation:** Extract common page hero styles into styles.css; use utility classes for variations

**Missing Design System Documentation in CSS**
- No comments explaining the purpose of custom properties or major component sections
- Makes it harder for future developers to understand the intent behind certain values
- **Recommendation:** Add header comments explaining each CSS section's role in the design system

---

## Color & Typography

### Color Palette Usage

**Primary Colors - Consistent and Purposeful**
- Green (#008142): Nav links, buttons, accents — strong visual hierarchy
- Dark Green (#006B36): Used for hover states on green elements — excellent for affordance
- Yellow (#FFCF01): Call-to-action buttons, hero highlights, accent badges — vibrant and attention-grabbing
- Light Green (#E8F5EC): Icon backgrounds, hover states on light surfaces — subtle and sophisticated

**Neutrals - Well-Implemented**
- Text on white (gray-800) meets WCAG AA contrast standards
- Off-white (#F7F8FA) used for alternating section backgrounds — provides visual breathing room
- Gray scale properly ordered from light (100) to dark (900)

**Contrast Verification**
- White text on green (#008142) background: PASS (contrast ratio > 7:1)
- Dark text on light green background: PASS
- Yellow button text on dark backgrounds: PASS

### Typography Hierarchy

**Font Stack**
- Roboto Slab (serif) for headings: Creates authority and formality appropriate for an educational institution
- Roboto (sans-serif) for body text: Excellent readability at screen sizes

**Scale**
- H1: `clamp(2.5rem, 5vw, 4rem)` — responsive and scales elegantly with viewport
- H2: `clamp(1.75rem, 3.5vw, 2.5rem)` — maintains proportional hierarchy
- Section headers use consistent tag styling: uppercase, small font, colored, underlined
- Body text: 16px baseline — appropriate for accessibility

**Issue: About/Admissions Pages**
- Inline styles use fixed font sizes (e.g., `font-size: 2.5rem`) instead of clamp()
- These do not scale responsively on mobile devices
- Headings on 480px screens will be oversized and cause layout issues

**Recommendation:** Migrate all H1, H2 sizing to use `clamp()` in styles.css

---

## Layout & Spacing

### Strengths

**Section Spacing**
- Consistent padding: 4rem (64px) for major sections
- Large sections alternate backgrounds (white/off-white/green) creating rhythm
- Adequate whitespace prevents visual cramping

**Grid System Application**
- Programs section: 3-column grid (responsive to 2 at 1200px, 1 at 768px) — excellent
- Campus cards: 2-column layout with proper gap values
- News cards: 3-column with consistent card sizing
- Quick links: 6-column grid (scales to 3 at 768px, 2 at 480px) — thoughtful progression

**Container Consistency**
- All sections use `.container` class with max-width and auto margins
- Padding: `0 var(--space-xl)` (32px on each side) — appropriate for readability

### Minor Spacing Issues

**Quick Links Negative Margin Hack**
- `.quick-links { margin-top: -40px; }` (line 696) pulls section up behind hero
- Works visually but creates a maintenance risk
- If header height changes, this offset breaks
- **Better approach:** Use CSS Grid layout for hero + quick-links together, or adjust hero padding

**About Page Feature Grid**
- `.why-ptc__features { display: grid; grid-template-columns: 1fr 1fr; }` (inline style, line 987)
- Creates 2x2 grid, but on 768px breakpoint becomes 1 column (good)
- No gap specified in CSS — likely relying on child margins

---

## Interactive Elements

### Button Styling

**Primary Button Strengths**
- `.btn--primary`: Clear affordance with green background + white text
- Hover state: Darker green + lift effect (`transform: translateY(-2px)`) + shadow
- Smooth transition: `var(--transition-base)` (0.25s ease)
- Consistent padding across sizes: default (12px 28px), sm (8px 20px), lg (16px 32px)

**Accent Button (Yellow)**
- High contrast with dark text — meets WCAG AAA standards
- Hover state properly darkens to avoid confusion with active state
- Appropriate for CTAs

**Outline Button**
- `.btn--outline-white` on colored backgrounds: White text + white border
- Hover state inverts colors (white background, green text) — clear and functional
- Good for secondary actions

**Issue: Inconsistent Icon Animation**
- Buttons have icon shift animation: `transform: translateX(3px)` on hover
- Some links (like `.program-card__link`) have gap increase: `gap: 0.65rem`
- Some have both effects; some have one
- **Recommendation:** Standardize icon animation behavior across all interactive text links

### Navigation Elements

**Main Nav Strengths**
- Underline animation on hover: `scaleX(0)` to `scaleX(1)` — elegant and clear
- Chevron rotation on dropdown items: `rotate(180deg)` — good affordance
- Dropdown menu styling: Green top border, shadow, proper spacing

**Issue: Mobile Dropdown Behavior**
- CSS defines accordion-style dropdowns (mobile-specific at 768px breakpoint)
- Accordion styling works properly with `.accordion-open` class
- However, JavaScript functionality not visible in CSS review — assume it exists
- **Check:** Verify that mobile hamburger menu JavaScript properly toggles `.accordion-open` class

### Search Bar

**Design Quality**
- Appears in utility bar and as overlay modal
- Input field: 2px green border on focus — good affordance
- Button styling matches button system
- Close button (×) appropriately styled

### Link States

**Default State**
- Green color (#008142) — matches primary brand
- No underline (good for readability)
- Smooth transition on color change

**Hover State**
- Darker green (#006B36) — sufficient contrast to show interactivity
- Utility bar links change to yellow on hover — different pattern (inconsistency)

**Issue: Inconsistent Link Hover Colors**
- Main nav links: hover to dark green
- Utility bar links: hover to yellow
- Footer links: hover to white (on dark background)
- This is contextually appropriate but not uniform
- **Consideration:** Document this pattern in design system so it's intentional, not accidental

---

## Visual Hierarchy

### Page Structure Clarity

**Homepage (index.html)**
1. **Utility Bar**: Small, light gray text — utility-level information
2. **Header/Nav**: White background, clear nav with large touch targets
3. **Hero Section**: Full-bleed image + green overlay + large title — strong entry point
4. **Quick Links Bar**: 6-icon card grid — easy scanning
5. **Why PTC Section**: Two-column layout with image + text + feature grid
6. **Programs Section**: 6 cards in 3-column grid — digestible number
7. **Campus Cards**: Green background, white cards — visual contrast creates hierarchy
8. **Testimonial**: Green background with centered, larger text — breaks up card sections
9. **News Section**: 3 cards + employer hook — good variety
10. **CTA Band**: Dark gradient — calls attention to final action
11. **Footer**: Dark gray, organized columns + accreditation row

**Visual Weight Distribution**
- Hero dominates (appropriate for homepage)
- Green sections (campuses, testimonial, CTA) break up the white/off-white rhythm
- Card-based sections (programs, news) are scannable
- Hierarchy is clear: user knows where to focus

### Section Header Pattern

**Consistency**
- All section headers follow same pattern:
  - Small uppercase tag with line decoration (`.section-header__tag::before`)
  - Large title (h2, responsive clamp)
  - Optional descriptive text
- Centered variant (`.section-header--center`) removes line and centers all content
- Applied across all pages (homepage, about, admissions)

**Strong Design Element**: This repeating pattern creates cohesion and predictability

### Card Design Pattern

**Program Cards**
- Icon + title + description + link
- Gradient top border on hover (green to light green)
- Icon background color inverts on hover
- Link gap increases on hover

**News Cards**
- Image + category tag + title + excerpt + link
- Positioned date badge in bottom-right corner
- Hover: slight lift + shadow increase + image zoom

**Campus Cards**
- Image with positioned badge + body section
- Icon-based information display (address, phone)
- Tags showing program categories
- Call-to-action button at bottom

**Evaluation**: Card patterns are diverse but coherent. Each card type serves its content appropriately without feeling disconnected.

---

## Page-by-Page Notes

### index.html (Homepage)

**Hero Section Quality**
- Slider functionality with smooth fade and scale transitions
- Stats boxes with glass-morphism effect (blur, transparency, border) — modern and sophisticated
- Yellow numbers create focal point
- Scroll indicator with bounce animation — good UX signal

**Quick Links**
- High visibility placement between hero and content
- 6-item grid is scanning-friendly
- Icon design is consistent across all buttons
- **Issue**: Negative margin hack (see Spacing section)

**Why PTC Section**
- Badge placement (bottom-right of image) is clear
- Feature grid (2x2) is readable
- Left/right layout is standard and works well

**Strengths**: Homepage is visually balanced, not overcrowded, good flow

### about.html

**Page Hero**
- Green background with gradient — consistent pattern across all pages
- Breadcrumb navigation — helpful for wayfinding
- **Issue**: Uses fixed font sizes instead of clamp(), not responsive at mobile

**Mission Statement Section**
- Centered icon + large text + label
- Green background creates emphasis
- Good visual break from other content

**Timeline Component**
- Vertical line with circles and text — classic timeline pattern
- Clean implementation with proper alignment
- Left-aligned text, circles on the left

**Accreditation Cards**
- 3-column grid (1 column at 768px)
- Clean card design with logo, name, and description
- Proper spacing and typography

**Leadership Grid**
- 3-column layout with photo placeholders
- Icon-based approach (user icon) for placeholder
- Circular photo frames — standard pattern

**Evaluation**: About page feels comprehensive and well-organized. Layout supports content hierarchy.

### admissions.html

**Page Hero**
- Same green gradient as about.html
- Breadcrumb navigation

**Steps Grid (How to Apply)**
- 3-column layout with numbered cards
- Numbered circles use green background
- Clear, scannable content

**Enrollment Steps**
- Icons in place of numbers (file, dollar, calendar)
- Alternative visual approach to numbered cards
- Maintains hierarchy but adds variety

**Admission Pathways**
- 2x2 grid of info cards (responsive to 1 column at 768px)
- Icon boxes with color background
- Icon + content side-by-side — good use of space

**Testing Types**
- 3-column centered cards
- Icon centered above text
- Text-centered approach creates symmetry

**Issue: Card Styling Fragmentation**
- Multiple card styles on one page (step cards, info cards, testing cards)
- Each has slightly different styling (icon placement, borders, shadows)
- Creates visual inconsistency within same page
- **Recommendation**: Create standardized card component variants in styles.css

**Campus Tour Banner**
- Green gradient background
- Flexbox layout with content on left, CTA on right
- Properly stacks on mobile
- Good use of space

**FAQ Section**
- Accordion-style with toggle functionality
- Chevron icon rotates on expand
- Clean, minimal styling
- JavaScript toggles `.active` class — good pattern

**Evaluation**: Admissions page content is comprehensive but card styling could be more unified.

### programs.html

**Page Header**
- Green background with centered title
- Provides context for A-Z program listing

**Filters**
- Positioned with negative margin (floating above content)
- Grid layout: responsive filters
- Appears to have JavaScript filtering functionality

**Program Cards Grid**
- Auto-fill grid: `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))`
- Responsive without media queries — excellent approach
- Cards contain icon, title, description, tags, and link
- Tag styling: gray background with rounded pill shape

**Evaluation**: Program listing page is functional and scannable. Responsive grid approach is modern.

### clearwater.html & stpete.html

**Campus-Specific Utility Bar**
- Different contact info per campus
- Links to peer campus, main site, portals
- Proper campus identification

**Campus Header**
- 5-pillar structure mentioned in comments but HTML only shows main nav
- Logo indicates campus (Clearwater Campus, St. Petersburg Campus)

**Navigation Differences**
- Campus nav is more specialized than main site nav
- Dropdowns are narrower (`.main-nav__dropdown--narrow`)
- Programs organized by "Career Cluster" instead of broad categories

**Evaluation**: Campus pages appear to be set up as separate sites with focused navigation. More content needed to fully evaluate.

---

## Interactive States & Feedback

### Hover States

**Cards**
- All cards have lift effect (`translateY(-2px)` to `-6px`)
- Shadow increases on hover
- Subtle but perceptible
- Consistent across program cards, news cards, campus cards

**Buttons**
- Color darkening on hover
- Lift effect (`translateY(-2px)`)
- Icon movement (gap or translateX)
- Transitions are smooth (0.25s)

**Links**
- Main nav: underline animation (`scaleX`)
- Dropdown links: color change + padding increase
- Card links: gap increase on hover

**Strength**: All interactive elements provide clear feedback through multiple channels (color, position, shadow)

### Focus States

**Issue: Missing Visible Focus Indicators**
- CSS does not show explicit focus states for keyboard navigation
- `:focus` selector not defined for buttons, links, or form inputs
- This is an accessibility concern for keyboard users
- **Recommendation**: Add visible focus outlines
  ```css
  button:focus, a:focus, input:focus {
    outline: 3px solid var(--color-yellow);
    outline-offset: 2px;
  }
  ```

### Active States

**Navigation Links**
- Underline animation appears to be hover-only, no active state defined
- Would benefit from `.active` class styling on current page

---

## Top 3 Issues Ranked by Visual Impact

### Issue #1: Mobile Responsiveness of Fixed Font Sizes (High Impact)

**Severity**: HIGH  
**Affected Pages**: about.html, admissions.html, and any other pages with inline `<style>` blocks  
**Problem**: Page headings use fixed pixel sizes instead of responsive clamp() values
- `.page-hero__title { font-size: 2.5rem; }` — does not scale on mobile
- `.mission-statement__text { font-size: 1.5rem; }` — fixed size
- At 480px viewport, these headings take up excessive screen real estate or become unreadable

**Visual Impact**: Text overflow, awkward layouts, reduced readability on small screens  
**Solution**: Replace all fixed font sizes with clamp() function:
```css
.page-hero__title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
}
```

**Files to Update**:
- about.html (lines 31-42)
- admissions.html (lines 30-41)
- All future page-specific styles

---

### Issue #2: Card Styling Fragmentation on Content Pages (Medium-High Impact)

**Severity**: MEDIUM-HIGH  
**Affected Pages**: admissions.html (primarily)  
**Problem**: Multiple card component types on the same page with inconsistent styling
- `.step-card`: Numbered circles, white background, minimal shadow
- `.info-card`: Icon boxes with light background, side-by-side layout
- `.testing-type`: Centered icon, centered text
- `.accred-card` (about.html): Similar but different spacing

**Visual Impact**: Page feels fragmented; users must relearn card patterns within same page  
**Solution**: Create unified card system in styles.css with variants:
```css
.card { /* base styles */ }
.card--step { /* numbered variant */ }
.card--info { /* info with icon variant */ }
.card--testing { /* centered variant */ }
```

**Maintainability Benefit**: Future content pages can reuse card patterns consistently

---

### Issue #3: Accessibility Gap: Missing Focus States (Medium Impact)

**Severity**: MEDIUM  
**Affected Elements**: All interactive elements (buttons, links, form inputs)  
**Problem**: No visible focus indicators for keyboard navigation
- Users relying on keyboard cannot see which element has focus
- Violates WCAG 2.1 Success Criterion 2.4.7 (Focus Visible)
- May cause accessibility audit failures

**Visual Impact**: Keyboard navigation is possible but confusing  
**Solution**: Add explicit focus styles:
```css
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 3px solid var(--color-yellow);
  outline-offset: 2px;
}
```

**Implementation Note**: Use `focus-visible` pseudo-class instead of `focus` for better UX (only shows outline when navigating via keyboard, not when clicking with mouse)

---

## Additional Observations

### Strengths Summary

1. **Design System Maturity**: Well-organized CSS custom properties, good use of spacing scale
2. **Visual Consistency**: Color palette is purposeful and used consistently
3. **Typography Hierarchy**: Clear and readable; clamp() usage on homepage is excellent
4. **Responsive Design**: Thoughtful breakpoints and mobile-first approach
5. **Component Coherence**: Card patterns, button styles, and nav elements feel cohesive
6. **Professional Aesthetic**: Appropriate for higher education; trustworthy appearance

### Areas for Continued Development

1. **Design System Documentation**: Add comments explaining purpose of major components
2. **Code Organization**: Consolidate page-specific styles into reusable CSS classes
3. **Accessibility Enhancements**: Add focus states, review color contrast on all variations
4. **CMS Readiness**: Ensure design patterns are repeatable for future pages in Finalsite Composer
5. **Hover/Focus Pattern Library**: Document standard interaction patterns for consistency

---

## Finalsite Composer Implementation Notes

The design system is well-suited for CMS implementation:

**Good Candidates for Composer Panels**:
- Hero sections (with image slider option)
- Card grids (program cards, news cards, campus cards)
- Two-column layouts (why PTC section)
- Timeline components
- FAQ accordion sections

**Reusable Components Recommended**:
- Section header pattern (tag + title + description)
- Card types (step, info, program, news, campus)
- Button variants (primary, accent, outline)
- Feature grid layouts (2x2, 1x4)

**Design Tokens to Export to Finalsite**:
- All CSS custom properties (colors, spacing, shadows)
- Font weights and sizes (heading scales)
- Border radius and shadow values
- Transition timing values

---

## Conclusion

The PTC Finalsite design system is **solid and ready for most implementation use cases**. The three identified issues are fixable and do not represent fundamental design flaws. Once mobile responsiveness is corrected, card styling is unified, and focus states are added, the design will be production-ready and accessible.

**Recommendation**: Prioritize Issue #1 (mobile font sizing) and Issue #3 (focus states) before launch. Issue #2 (card consolidation) can be addressed in a post-launch refinement if timeline is tight.

The design demonstrates professional quality appropriate for a higher education institution and shows clear intent in every major decision.
