# Finalsite CMS Feasibility Review — 2026-04-22

**Reviewer:** Finalsite Composer Specialist  
**Scope:** Full PTC Website Redesign (index.html, programs.html, schedule pages, all campus/program detail pages, footer structure)  
**Compliance Target:** Finalsite Composer panels, maintainable by non-technical staff

---

## Executive Summary

The redesign is **75% Composer-ready** with targeted simplifications needed for three high-impact areas. Most layout patterns map cleanly to Composer's panel system. The main blockers are:

1. **Dynamic program filtering** (H8) — JavaScript-driven filtering cannot be replicated natively in Composer; must redesign as static category landing pages or Composer plugins
2. **Hero image carousel** (M11) — Requires custom JavaScript and CSS animations; complex to maintain in Composer; consider simplifying to single hero or static slides
3. **Negative margin quick-links hack** (M4) — Will break on Composer updates; needs CSS restructuring

All other sections are buildable with Composer's standard elements and custom code embeds.

---

## Buildable As-Is

These components map directly to Finalsite Composer without modification:

### Header & Navigation
- **Utility bar** — Static text + links. Build as Composer text/embed.
- **Main navigation (6-item top-level menu with dropdowns)** — Compose using Finalsite's native mega-menu element. Dropdowns (Programs, Admissions, Tuition, Campuses, Current Students, About) render cleanly with 2-column layouts.
- **Search overlay** — Custom code embed in header. JavaScript in `<script>` tag is Composer-safe. Already scoped to search-specific IDs.
- **Mobile menu hamburger** — Native toggle + aria attributes included. Works in Composer.

### Pages: Hero Sections (Non-Carousel)
- **Admissions hero** (linear gradient, centered text, no animation) — 1-column Composer hero element
- **Programs hero** (same) — 1-column hero element
- **Schedule page headers** (gradient + breadcrumb + metadata badges) — 1-column hero with text embeds
- **Welding program pages** (2-column hero: text left, image right) — 2-column Composer layout with image element
- **Campus pages** (hero + gradient overlay) — 1-column hero element

**CSS Status:** Gradients, padding, typography all use CSS custom properties. Safe for Composer.

### Body Content (All Pages)
- **Section headers** (centered, description text) — Text/heading Composer elements
- **Step cards** (numbered circles, 3-column grid) — 3-column Composer grid with styling
- **Info cards** (2-column layouts with icons) — 2-column Composer layouts
- **Program cards** (3-column grid with metadata) — 3-column grid with card styling
- **Campus cards** — Card grid with images
- **Testimonial cards** — Card layout with blockquote styling
- **News cards** — Card grid with image + excerpt

**CSS Status:** All use `display: grid` with standard template columns. No complex CSS subgrid, CSS grid auto-flow, or masonry. Composer grid element handles this.

### Tables
- **Schedule tables** (class-schedule-stpete.html, schedule-clearwater.html) — HTML `<table>` with responsive wrapper divs
- **CSS:** Responsive font sizes (`clamp()`), standard borders, zebra striping with `:nth-child()`

**Status:** Composer supports tables natively. Ensure table container `max-width` and overflow handling are checked.

### Footer
- **Footer provided as standalone embed** (docs/footer-embed.html) — Self-contained HTML/CSS block designed for custom code embed
- **3-column nav grid** (responsive to 1-column on mobile) — Scoped CSS, no conflicts with Composer
- **Social icons** (5 links with hover states) — Standard `<a>` tags with Font Awesome
- **Accreditation bar** (image carousel of 3 logos) — No JavaScript, static layout

**Status:** Ready to paste into Composer custom code element. All CSS scoped with `.ptc-footer` namespace.

### Buttons
- **All button styles** (.btn, .btn--primary, .btn--accent, .btn--outline-white, .btn--sm, .btn--lg) — Defined with custom properties, no problematic CSS
- **Icon animations** (transform on hover) — Safe, low-overhead

### Accessibility Base
- **Semantic HTML** (headings, nav, main, footer, section)
- **ARIA labels** (search, mobile menu toggle, navigation)
- **Skip link placeholder** (needs to be added; currently missing)

---

## Needs Custom Code

These sections require custom HTML/CSS embeds in Composer but are straightforward:

### 1. Hero Image Carousel (M11) — COMPLEXITY: MEDIUM
**Location:** index.html hero  
**Current Implementation:**
```javascript
const heroSlides = document.querySelectorAll('.hero__slide');
if (heroSlides.length > 1) {
    let currentSlide = 0;
    setInterval(() => {
        heroSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % heroSlides.length;
        heroSlides[currentSlide].classList.add('active');
    }, 6000);
}
```

**CSS:**
```css
.hero__slide { opacity: 0; transition: opacity 1.5s ease-in-out; }
.hero__slide.active { opacity: 1; }
```

**CMS Challenge:**
- Finalsite Composer **does not natively support JavaScript execution** in hero panels
- Custom code embeds in Composer are typically **isolated from the full page's `<head>` and `<body>` lifecycle**
- The `DOMContentLoaded` event and `setInterval` may not fire or may conflict with Composer's panel rendering

**Recommendation:**
- **Option A (Simplest):** Replace carousel with **single rotating hero** — Use Composer's native image rotation feature if available, or simplify to static hero with one background image + text overlay
- **Option B (Moderate):** Build carousel as **separate full-width custom code embed** (not a Composer hero element) at top of page. Composer embeds support `<script>` tags if wrapped properly. Test thoroughly.
- **Option C (Complex):** Use Finalsite's **Composer plugin system** (if available in your license tier) to create a custom panel type for carousel

**Status:** M11 FLAGGED for simplification. Carousel logic is not "broken," but **maintenance risk is high**. Non-technical editors cannot troubleshoot if animation stops.

---

### 2. Scroll-Reveal Animations (Fade + Slide on Scroll) — COMPLEXITY: LOW
**Current Implementation:** IntersectionObserver + staggered delays in `script.js`
```javascript
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
});
```

**CMS Status:**
- This JavaScript runs at **page load and on scroll**
- If placed in a **full-page custom code embed** (bottom of page, not in individual panels), it will work
- If individual cards need this, embed once per card or use CSS-only animation (no JS)

**Recommendation:**
- Keep as full-page custom embed at bottom of index.html in Composer
- Ensure animation is **NOT required** for content to be readable (graceful degradation)
- Test in Composer preview before publishing

**Status:** BUILDABLE with testing. Low risk if tested.

---

### 3. Search Overlay (Expandable Search Bar) — COMPLEXITY: LOW
**Current Implementation:** Toggle search overlay on icon click, ESC key to close
```javascript
searchToggle.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    searchInput?.focus();
});
```

**CMS Status:**
- Search form is in header (usually embedded in Composer header element)
- JavaScript is straightforward: add/remove class + focus
- No conflict with Composer's layout system

**Recommendation:**
- Place search HTML + script in **Composer header custom code block**
- Keep styles scoped to `.search-overlay`, `.search-form` class names
- Test keyboard interaction (ESC key, Tab focus)

**Status:** BUILDABLE, low complexity.

---

### 4. Mobile Menu Accordion (Dropdown Menus in Mobile View) — COMPLEXITY: LOW
**Current Implementation:** Click dropdown link → toggle accordion on mobile, prevent default on desktop
```javascript
mobileDropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (isMobile) {
            e.preventDefault();
            parentItem.classList.toggle('accordion-open');
        }
    });
});
```

**CMS Status:**
- Mobile menu HTML is nav-based, semantic
- JavaScript checks computed style of hamburger toggle to detect mobile breakpoint
- Should work in Composer as long as media queries are intact

**Recommendation:**
- Embed in Composer navigation element or header custom code
- Ensure CSS media queries are not stripped by Composer (test on tablet/phone)
- Verify aria-expanded updates are working for screen readers

**Status:** BUILDABLE, low complexity.

---

### 5. Sticky Header with Scroll Shadow — COMPLEXITY: VERY LOW
**Current Implementation:**
```javascript
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
});
```

**CSS:**
```css
.site-header.scrolled { box-shadow: var(--shadow-md); }
```

**CMS Status:** Trivial. Will work anywhere.

---

### 6. Animated Number Counters ("40+" → "1,050+") — COMPLEXITY: LOW
**Location:** Homepage hero stats section, program pages (hours, graduates, etc.)  
**Current Implementation:** IntersectionObserver + increment loop
```javascript
counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    let current = 0;
    const timer = setInterval(() => {
        current += target / 40;
        counter.textContent = Math.floor(current) + suffix;
    }, 30);
});
```

**CMS Status:**
- Runs once per element when it enters viewport
- Can be placed in full-page custom code embed
- Falls back gracefully if JS disabled (still shows final number)

**Recommendation:**
- Keep as custom embed at bottom of page (after all content loads)
- Test on various devices to ensure smooth animation (30ms interval may be too fast on mobile)

**Status:** BUILDABLE, but test animation performance on low-end devices.

---

## Needs Simplification

These designs are technically buildable but present **high maintenance burden or UX risk** in Composer. Redesign recommended.

### 1. Dynamic Program Filtering (H8) — PRIORITY: CRITICAL
**Location:** programs.html  
**Current Implementation:**
```html
<select id="filter-cluster" class="filter-select">
    <option value="all">All Categories</option>
    <option value="health">Health Sciences</option>
    ...
</select>

<select id="filter-campus" class="filter-campus">
    <option value="all">All Campuses</option>
    <option value="clw">Clearwater</option>
    <option value="stp">St. Petersburg</option>
</select>

<div class="prog-card" data-cluster="health" data-campus="clw">...</div>
```

**JavaScript:** Filters cards in real-time based on select change, shows/hides with `.hidden` class

**CMS Challenge:**
- Composer **does not natively support form-driven filtering**
- To make this work in Composer, you'd need to:
  - Paste all filtering JavaScript into a custom code embed
  - Ensure all program cards are in the same page/embed
  - Manage data attributes (`data-cluster`, `data-campus`) on every card
  - Edit filtering logic if categories change (non-technical editors cannot do this)

- **The real problem:** If a counselor adds a new program or changes a cluster name, the `data-cluster` attribute and JavaScript logic must both be updated. This is not something non-technical staff can safely do in Composer.

**Recommendation:**
- **Option A (Recommended):** Replace with **static category landing pages** — Create separate pages for each cluster (e.g., `/health-sciences.html`, `/skilled-trades.html`) with programs pre-filtered in HTML. No JavaScript. Easy for non-technical editors to update.
  - Pros: Easier to maintain, better SEO, cleaner UX
  - Cons: More pages to manage
  
- **Option B:** Use **Finalsite Marketplace plugins** (if available) for filterable program directories. Verify compatibility before committing.

- **Option C (Not Recommended):** Keep filtering JavaScript, but require a **developer to update logic** whenever program data changes. Document the flow carefully.

**Current Status:** H8 **FLAGGED as BLOCKER**. Must resolve before Composer implementation.

---

### 2. Negative Margin Quick-Links Hack (M4) — PRIORITY: HIGH
**Location:** index.html, quick-links section  
**Current CSS:**
```css
.quick-links {
    margin-top: -40px;  /* Overlaps hero */
    z-index: 5;
}

.quick-links__grid {
    box-shadow: var(--shadow-lg);
    border-radius: var(--border-radius-lg);
}
```

**CMS Challenge:**
- Finalsite Composer **may override or strip negative margins** during re-saves or panel updates
- Relying on negative margins to overlap sections creates fragility
- If a Composer update changes panel padding or margin defaults, this will break

**Recommendation:**
- **Option A (Simplest):** Remove negative margin. Keep quick-links as a separate full-width section with normal spacing. Slightly less visually striking, but robust.
  
- **Option B:** Use CSS Grid parent-child overlap or flexbox with absolute positioning instead of negative margin. Example:
  ```css
  .hero-and-quick-links {
      display: grid;
      grid-template-rows: auto auto;
  }
  .quick-links {
      grid-row: 1 / 3;  /* Overlap with hero */
      align-self: end;
  }
  ```
  
- **Option C:** Accept the fragility, document the hack, and train editors to avoid re-arranging sections without developer review.

**Current Status:** M4 **FLAGGED for redesign**. Simplify before Composer launch.

---

## Cannot Be Built

Nothing in the current design is **fundamentally incompatible** with Finalsite Composer. However, the following external dependencies require coordination:

### 1. Google Fonts (Roboto, Roboto Slab)
- **Current:** Loaded via `<link>` tag in `<head>`
- **Composer Issue:** Finalsite usually manages all `<head>` content. Custom font links may be stripped if added to individual panels.
- **Solution:** Request Finalsite to add Google Fonts to global site settings or inject via Composer's typography controls. Do not rely on page-level font imports.

### 2. Font Awesome Icons (v6.5.1)
- **Current:** CDN link + `<i class="fas fa-...">` tags throughout
- **Composer Issue:** Same as above. Finalsite typically manages icon libraries globally.
- **Solution:** Verify that Finalsite's instance includes Font Awesome 6.5.1. If using an older version, may need to update Finalsite configuration or replace icons with Unicode symbols.

### 3. Finalsite-Hosted Images (Program Photos, Accreditation Logos)
- **Current:** Hardcoded to Finalsite resource manager URLs (e.g., `https://myptecorg.finalsite.com/fs/resource-manager/view/...`)
- **Composer Issue:** This is correct. Finalsite Resource Manager is the right place to host images. No change needed.

### 4. Canvas/Focus/Webmail Login Links
- **Current:** Utility bar includes links to Canvas, Focus, Webmail (all `href="#"` placeholders)
- **Composer Issue:** These must point to real URLs. Confirm links with IT before launch.

---

## Maintainability Concerns

### High Maintenance Risk
1. **H8 — Program Filtering** — Requires developer involvement for every program data change
2. **M4 — Negative Margin Hack** — Fragile; likely to break on Composer updates
3. **M11 — Hero Carousel** — Non-technical editors cannot troubleshoot JS

**Mitigation:** Simplify these three areas before launch.

### Medium Maintenance Risk
1. **Custom code embeds** (scroll animations, counters, search overlay) — Require code review if modified. Acceptable if embedded once at page level (not repeated on every page).
2. **Responsive media queries** — Ensure Composer respects `@media` queries in custom CSS. Test on mobile before publish.
3. **CSS custom properties (design tokens)** — Good practice, but ensure Finalsite doesn't strip or override them.

### Low Maintenance Risk
1. **Semantic HTML + ARIA** — Standards-based, widely supported
2. **Button styles, card layouts, grid systems** — Standard CSS, no framework dependencies
3. **Footer** — Static, provided as embed. No dynamic content.

---

## Page-by-Page CMS Mapping

| Page | Hero Type | Main Sections | Filtering/JS | Custom Code? | Composer-Ready | Notes |
|------|-----------|---------------|--------------|--------------|--|---|
| **index.html** | Carousel (6s auto-rotate) | Featured Programs (3-col grid), Quick Links (6-col grid), Why PTC (2-col), Campus Cards, Testimonials, Call-to-Action | Hero carousel, scroll reveals, number counters | Hero section (full-page embed), footer | 85% | Carousel (M11) needs simplification. Quick-links negative margin (M4) needs fix. Otherwise solid. |
| **programs.html** | Static (green gradient) | Cluster/Campus filters, Program card grid | **Dynamic filtering with JavaScript** | Footer only | 50% | **BLOCKER: H8 filtering logic cannot be maintained in Composer.** Recommend static category pages instead. |
| **admissions.html** | Static (gradient) | 3-step cards, 2-column info cards, timeline/FAQs | None | Footer only | 95% | All standard layouts. Fully buildable. |
| **about.html** | Static (gradient) | Mission/Vision, Leadership (placeholder icons), Stats, Accreditation, Faculty Resources | None | Footer only | 90% | Leadership photos need real headshots. Otherwise clean. |
| **tuition-aid.html** | Static (gradient) | Tuition rates table, FAFSA, Scholarships, Veterans, Net Price Calculator | None | Footer, possibly net price calculator embed | 85% | Net Price Calculator may require external tool embed. Verify with Finalsite support. |
| **campuses/clearwater.html** | Static (image + overlay) | Campus info, hours/parking, programs offered, news, Quick Start buttons | None | Footer only | 95% | Clean layout. Fully buildable. |
| **campuses/stpete.html** | Same | Same | None | Footer only | 95% | Same as Clearwater. |
| **programs/welding-clearwater.html** | 2-column (text + hero image) | Program specs (hours, salary, job placement), Curriculum tabs, Video testimonials, Admissions checklist | None | Footer only | 90% | Tabs require toggle JS or simplified to accordions. Otherwise standard. |
| **programs/welding-stpete.html** | Same | Same | None | Footer only | 90% | Same as Clearwater. |
| **programs/welding-advanced.html** | Same | Same | None | Footer only | 90% | Same pattern. |
| **schedule/schedule-clearwater.html** | Static (gradient + breadcrumb) | Draft banner, filter bar, class schedule table (35+ programs) | Filter bar (shows/hides rows?) | Footer only | 80% | If filter is for **display control** (show/hide rows), same issue as programs.html. If just informational, OK. Clarify filter intent. |
| **schedule/schedule-stpete.html** | Same | Same | Same | Footer only | 80% | Same. |
| **consumer-information.html** | Static (gradient) | 14 COE disclosure sections, collapsible accordions | Accordion toggles (show/hide content) | Footer only | 88% | Accordions are doable in Composer. CSS-only or simple JavaScript. Low risk. |
| **student-resources.html** | Static (gradient) | Resource cards, links to Canvas/Focus/Webmail | None | Footer only | 95% | Simple card layout. Fully buildable. |
| **campus-maps.html** | Static (gradient) | Embedded maps (Google Maps or Finalsite geo feature) | Map interaction | Embedded maps | 85% | Verify that Finalsite embeds Google Maps properly. Test zoom/pan. |
| **careers.html** | Static (gradient) | Employer partnerships, job outcomes, recruitment info | None | Footer only | 90% | Standard layout. Fully buildable. |
| **contact.html** | Static (gradient) | Contact form, office hours, map | Form submission | Contact form embed | 80% | Composer has native form elements. Integrate with district email routing. |

---

## Prior Issues Status

### From 2026-04-15 Review (issues-tracker.md)

#### Critical Issues (C1–C7)
| Issue | Status | CMS Review Finding |
|-------|--------|---|
| **C1** — Missing program details (cost, length, etc.) | Open | **CMS-agnostic.** Content issue, not CMS issue. Ensure Composer template includes fields for tuition, hours, job placement. Use repeating content blocks. |
| **C2** — Apply/Application CTAs link to "#" | Open | **CMS-agnostic.** Update href in Composer when portal URL is ready. All buttons are standard HTML elements. |
| **C3** — Leadership photos missing | Open | **CMS-agnostic.** Finalsite Resource Manager ready for photos. Create About page staff card layout in Composer. |
| **C4** — Compliance docs links non-functional | Open | **CMS-agnostic.** Wire footer links to real docs. Use Finalsite's native resource linking if available. |
| **C5** — Dropdown nav not keyboard accessible | Open | **ACCESSIBILITY/CMS ISSUE.** Navigation dropdowns have `:focus-within` and focus traps in current CSS. Verify Composer doesn't strip focus styling. Add visible focus indicators. Recommend accessibility audit post-launch. |
| **C6** — Skip-to-main link missing | Open | **CMS ISSUE.** Skip link not in current HTML. Add `<a href="#main-content" class="skip-link">Skip to main content</a>` to header embed in Composer. Standard practice. |
| **C7** — Student Portal link is dead | Open | **CMS-agnostic.** Update href when portal URL confirmed. |

#### High Issues (H1–H13)
| Issue | Status | CMS Review Finding |
|-------|--------|---|
| **H1** — Only Welding program detail pages exist | Open | **CMS SCALING ISSUE.** Current structure requires duplicate program detail pages for each of 35+ programs. Recommend **one template page** with dynamic content blocks in Composer. Use Composer's "Clone & Customize" feature to speed up creation. Or use category landing pages (see H8 recommendation). |
| **H2** — St. Pete lists programs not offered there | Open | **CMS-agnostic.** Data issue. Ensure Composer card includes campus filter/indicator. |
| **H3** — No campus hours/parking/maps | Open | **CMS BUILDABLE.** Create custom "Campus Info" card block in Composer. Maps can use Google Maps embed or Finalsite geo features. Test before launch. |
| **H4** — No job outcomes/salary data | Open | **CMS-agnostic.** Content gap. Decide on data source (COE, BLS, internal tracking). Create repeatable data block in Composer. |
| **H5** — No counselor for CNC/Machining | Open | **CMS-agnostic.** Create staff card block for program counselor in Composer template. |
| **H6** — Tuition & Financial Aid missing | Open | **CMS BUILDABLE.** tuition-aid.html exists but may need more detail. Ensure Composer has sections for FAFSA, Net Price Calculator, Scholarships, Veterans. |
| **H7** — Mobile responsiveness — fixed font sizes | Open | **CSS ISSUE (not CMS).** Current design uses `clamp()` for responsive font sizing on most pages (good). Check about.html and admissions.html for any fixed `px` sizes. Media queries are included. Should test mobile rendering in Composer. |
| **H8** — Dynamic filtering in Composer | Open | **CRITICAL CMS ISSUE.** See [Needs Simplification](#needs-simplification) section. **FLAGGED.** Recommend static category pages instead. |
| **H9** — Color contrast issues | Open | **CSS AUDIT NEEDED (not CMS).** Use WCAG contrast checker on utility bar, testimonial cards, section headers. Current color palette should pass, but test utility bar links (#9CA3AF on white?). Fix before launch. |
| **H10** — No visible focus indicators | Open | **CSS ISSUE.** Add `:focus` and `:focus-visible` styles to all interactive elements. Example: `a:focus-visible { outline: 2px solid var(--color-green); outline-offset: 2px; }`. Finalsite may strip custom outlines; test. |
| **H11** — Search form missing label | Open | **A11Y ISSUE.** Add `<label for="search-input">` or `aria-label="Search"` to search input. Current header embed has `role="search"` (good). Verify label is present and properly associated. |
| **H12** — Icon-only buttons need aria-hidden | Open | **A11Y ISSUE.** Social icons in footer have `aria-label` (good). Check mobile menu hamburger icon. Ensure `<i>` tags inside buttons have `aria-hidden="true"`. |
| **H13** — Breadcrumb using "/" instead of semantic markup | Open | **A11Y ISSUE.** Schedule pages use plain text "/" separator. Recommend `<nav aria-label="Breadcrumb">` with `<ol>` and proper `aria-current="page"`. Finalsite supports semantic breadcrumbs. Update in Composer. |

#### Medium Issues (M1–M12)
| Issue | Status | CMS Review Finding |
|-------|--------|---|
| **M1** — Section header description text contrast | Open | **CSS AUDIT.** Check `.section-header__desc` color (appears to be var(--color-gray-500), which is #6B7280). Test WCAG AA on white backgrounds. Likely needs darker color. |
| **M2** — Mobile nav lacks keyboard support | Open | **A11Y ISSUE.** Current hamburger menu has `aria-expanded` and accordion logic. Test Tab/Enter/ESC on mobile. Likely fine, but verify. |
| **M3** — Hero slide images alt/aria-hidden conflict | Open | **A11Y ISSUE.** Current carousel images likely missing alt text. Recommend: carousel images `alt=""` with `aria-hidden="true"`, or alt text with live region update on slide change. Current code doesn't update alt text per slide. Minor issue if carousel is simplified (see M11). |
| **M4** — Negative margin quick links | Open | **CMS MAINTENANCE ISSUE.** See [Needs Simplification](#needs-simplification). **FLAGGED for redesign.** |
| **M5** — Card styling fragmentation | Open | **CSS CLEANUP (not CMS).** Multiple card types (.step-card, .prog-card, .campus-card, .news-card, .info-card) have inconsistent spacing/shadow. Not a Composer blocker, but refactor into consistent `.card` component. Low priority. |
| **M6** — Duplicate CSS across pages | Open | **CSS CLEANUP.** Some inline `<style>` tags in individual pages (admissions.html, programs.html, etc.). Consolidate into global styles.css. Finalsite may allow page-specific styles, but best practice is centralized. |
| **M7** — Incomplete faculty resources visibility | Open | **CMS CONTENT.** Create Staff Directory page in Composer with repeatable faculty card blocks. |
| **M8** — Missing accreditation reports | Open | **CMS CONTENT.** Finalsite Resource Manager ready for PDF links. Create footer section in Composer for Accreditation page. |
| **M9** — Application timeline not clear | Open | **CMS CONTENT.** Create visual timeline or step-by-step guide in admissions.html. Fully buildable in Composer. |
| **M10** — prefers-reduced-motion media query missing | Open | **CSS ISSUE.** Add to styles.css: `@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }`. Simple fix. |
| **M11** — Hero carousel requires Composer testing | Open | **CMS ISSUE.** See [Needs Custom Code](#needs-custom-code). **FLAGGED for complexity & testing.** Test in Composer before publishing. Or simplify to static hero (recommended). |
| **M12** — Program count accuracy (claims 40+, lists 35) | Open | **CMS CONTENT.** Not a CMS issue. Verify actual program count and update copy. Ensure Composer template doesn't hardcode program count (use dynamic count from program cards if possible). |

#### Low Issues (L1–L10)
All Low issues are **content-related**, not CMS-related. No CMS blockers in this category.

#### Prior UX Review Issues (1–5)
1 & 5 merged into higher-priority issues. 3 & 4 deferred to Phase 3 (post-launch).

---

## Top 3 Issues (Ranked by Implementation Risk)

### 1. H8 — Dynamic Program Filtering Cannot Be Built in Finalsite Composer
**Risk Level:** CRITICAL  
**Impact:** Must resolve before launch or redesign programs.html  
**Effort to Fix:** HIGH (1–2 weeks to redesign + test)

**Problem:**
- Current design relies on client-side JavaScript filtering with `data-*` attributes
- Finalsite Composer does not natively support dynamic form-driven filtering
- Editing programs requires updating both HTML markup (data attributes) and JavaScript logic
- Non-technical staff cannot maintain this safely

**Recommendation:**
- **Best:** Replace with 8 static category landing pages (Health Sciences, IT, Skilled Trades, etc.) Pre-filter programs in HTML. No JavaScript.
- **Alternative:** Use Finalsite Marketplace filterable directory plugin (if available; verify license tier first)
- **Last Resort:** Keep JavaScript but document strict workflow: any program additions must go through developer (unscalable)

**Timeline:** Decide this week. Implementation in Phase 2.

---

### 2. M11 — Hero Image Carousel Requires Complex Custom Code
**Risk Level:** HIGH  
**Impact:** Homepage may lose animation; or carousel breaks on Composer updates  
**Effort to Fix:** MEDIUM (test required; may need simplification)

**Problem:**
- JavaScript carousel uses `setInterval` and `DOMContentLoaded` event
- Finalsite Composer may not execute these as expected in custom code embeds
- Non-technical editors cannot troubleshoot if animation stops
- Maintenance burden if slide count changes

**Recommendation:**
- **Best:** Simplify to single static hero image + text. Elegant, low-risk, fully buildable.
- **Good:** Use Composer's native image rotation (if available). Check Finalsite feature set.
- **Complex:** Embed carousel as full-page custom code. **Requires QA testing in Composer before launch.**

**Timeline:** Test carousel in Composer this week. Decide between simplification or complex embed by end of week.

---

### 3. M4 — Negative Margin Quick-Links Hack Will Break on Updates
**Risk Level:** MEDIUM-HIGH  
**Impact:** Quick-links section may collapse or misalign after Composer updates  
**Effort to Fix:** LOW (CSS restructuring, 1–2 hours)

**Problem:**
- CSS relies on `margin-top: -40px` to overlap hero and quick-links
- Finalsite Composer may strip or override negative margins during re-saves
- When it breaks, non-technical editors cannot fix (will require developer)

**Recommendation:**
- **Best:** Remove negative margin. Keep quick-links as separate section with normal spacing. Slightly less visual pop, but robust.
- **Good:** Refactor using CSS Grid parent/child overlap or flexbox absolute positioning.
- **Not Recommended:** Keep hack, document it, and plan for developer support post-launch.

**Timeline:** Low-effort fix. Schedule for Phase 2 CSS cleanup.

---

## Composer Configuration Checklist

Before building pages in Finalsite Composer:

- [ ] **Typography:** Confirm Google Fonts (Roboto, Roboto Slab) are added to global site settings or typography controls. Do not rely on page-level font imports.
- [ ] **Icons:** Confirm Font Awesome 6.5.1 is enabled. If using older version, coordinate with Finalsite support to update.
- [ ] **CSS Custom Properties:** Test that CSS variables (--color-green, --color-yellow, etc.) are preserved in Composer. Some legacy instances strip custom properties. Workaround: fallback to hardcoded hex values if needed.
- [ ] **Media Queries:** Verify that mobile media queries (@media max-width: 768px, 480px, 600px, 1200px) are not stripped by Composer on save.
- [ ] **Custom Code Embeds:** Test that `<script>` tags in custom code embeds are executed (DOMContentLoaded, addEventListener, etc.). Some older Composer versions isolate embeds.
- [ ] **Responsive Grid:** Test 2-column and 3-column grid layouts on tablet/mobile. Verify auto-flow or explicit media queries.
- [ ] **Forms:** Test Composer form elements (text input, select, textarea, submit button). Confirm form submission routing to email/database.
- [ ] **Footer:** Paste footer-embed.html into Composer footer custom code element. Test footer rendering on all pages.
- [ ] **Accessibility:** Enable Composer's accessibility checker. Test keyboard navigation (Tab, Enter, ESC), screen reader, and color contrast.
- [ ] **Resource Manager:** Confirm all hardcoded image URLs (https://myptecorg.finalsite.com/fs/resource-manager/view/...) are linked to actual files in Finalsite Resource Manager.
- [ ] **Navigation:** Build top nav with Finalsite's mega-menu element. Ensure dropdown layout is correct (2-column Programs dropdown).
- [ ] **Mobile Menu:** Test hamburger menu on Composer mobile view. Verify accordion toggles and focus management.

---

## Sign-Off

**Reviewed by:** Finalsite CMS Specialist  
**Date:** April 22, 2026  
**Recommendation:** Proceed to Phase 2 with **priority fixes for H8, M11, M4**. All other sections are Composer-ready. Conduct Composer UAT in sandbox environment before publishing to production (clearwater.myptc.edu).

**Next Steps:**
1. Stakeholder decision on H8 (filtering vs. category pages) — by April 25
2. Carousel testing/decision on M11 — by April 25
3. CSS refactor for M4 (negative margin) — Phase 2 sprint
4. Begin Composer implementation with header/footer/hero sections — April 29
5. Full UAT in Finalsite staging environment — May 13–20
6. Production deployment — May 27

---

## Appendix: CSS Techniques Assessment

| Technique | Usage Count | Composer Risk | Notes |
|-----------|------------|---------------|-------|
| **CSS Custom Properties (variables)** | ~40 | LOW | Essential for brand colors. May be stripped in older Finalsite versions. Have hex fallbacks ready. |
| **CSS Grid** | ~36 | LOW | Standard 1fr, repeat(), grid-template-columns. Fully supported in modern Finalsite. No subgrid or complex auto-flow. Safe. |
| **Flexbox** | ~50+ | VERY LOW | Basic flex with gap, align-items, justify-content. Ubiquitous. No risk. |
| **CSS Transforms** | ~15 | LOW | translateX, translateY, scale, rotate on hover/active. Safe. May need testing for performance on low-end devices. |
| **Transitions & Animations** | ~10 | LOW | opacity, transform transitions using cubic-bezier. @keyframes bounce. All standard. @keyframes may be stripped; test. |
| **Gradients** | ~8 | LOW | linear-gradient, radial-gradient. Fully supported. |
| **Backdrop Filter** | ~2 | MEDIUM | `backdrop-filter: blur(12px)` on hero stats. Older browsers may not support. Graceful degradation (semi-transparent background fallback). Test in Composer. |
| **Object-fit** | ~3 | LOW | cover, contain on images. Standard. |
| **Aspect Ratio** | ~2 | MEDIUM | aspect-ratio property. IE 11 not supported, but fine for Finalsite modern stack. |
| **Clamp()** | ~8 | LOW | font-size: clamp(1.75rem, 4vw, 2.75rem). Fully supported. Responsive typography, no JS needed. |
| **Media Queries** | ~4 breakpoints | LOW | max-width: 1200px, 768px, 600px, 480px. Standard mobile-first approach. Finalsite should preserve. Test. |
| **Negative Margins** | 1 | **HIGH** | Quick-links. **FLAGGED for refactor.** |

---

## Appendix: JavaScript Functions Summary

All JavaScript is in `script.js` and inline embeds. Total ~350 lines. All functions are compatible with Composer custom code embeds if isolated properly.

| Function | Complexity | Composer Risk | Notes |
|----------|-----------|---------------|-------|
| **Sticky Header Shadow** | TRIVIAL | VERY LOW | Scroll listener + class toggle. Works anywhere. |
| **Search Toggle** | LOW | LOW | Click listener + class toggle + focus. Test ESC key. |
| **Mobile Menu Toggle** | LOW | LOW | Aria-expanded management, scroll prevention. Standard. |
| **Mobile Menu Accordion** | LOW | LOW | Computed style check, class toggle, event delegation. Test on real mobile. |
| **Hero Carousel** | MEDIUM | **HIGH** | setInterval + class toggle. **Requires Composer testing or simplification.** |
| **Animated Number Counters** | MEDIUM | LOW | IntersectionObserver + requestAnimationFrame. Test performance. |
| **Scroll-Reveal Animations** | MEDIUM | LOW | IntersectionObserver + staggered delays. Standard pattern. Works in embeds. |
| **Program Filtering** | MEDIUM | **CRITICAL** | Data attribute queries + DOM manipulation. **Cannot be built in Composer.** Redesign required. |

---

## Contact & Escalation

**CMS Review specialist:** Available for questions on Composer feasibility, custom code, or accessibility issues.

**Escalation path:** If component fails Composer testing, escalate to Finalsite support with specific error logs and expected behavior. Document any limitations for client communication.

