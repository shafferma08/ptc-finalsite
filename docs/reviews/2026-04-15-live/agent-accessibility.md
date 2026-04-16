# Accessibility Audit (LIVE SITE) - 2026-04-15

**Audit Scope:** PTC websites on Finalsite platform  
**Compliance Framework:** WCAG 2.1 AA (Section 508 / ADA requirements)  
**Sites Tested:**
- https://clearwater.myptc.edu (Clearwater Campus)
- https://stpete.myptc.edu (St. Petersburg Campus)  
- https://www.myptc.edu (Main Portal)

**Audit Date:** April 15, 2026  
**Audit Method:** Automated accessibility scanning + manual inspection via JavaScript DOM analysis

---

## Critical (Must Fix - Legal Risk)

These issues create barriers to access and pose legal compliance risks under Section 508 and ADA.

### Images Without Alt Text (WCAG 1.1.1)

**Status:** All three sites have critical image alt text issues

| Site | Issue | Count | WCAG | Severity | Notes |
|------|-------|-------|------|----------|-------|
| clearwater.myptc.edu | Images missing or empty alt text | 2 of 7 images | 1.1.1 | CRITICAL | Includes decorative spacer GIFs and 24px.svg |
| stpete.myptc.edu | Images missing or empty alt text | 2 of 18 images | 1.1.1 | CRITICAL | Affects content comprehension for screen reader users |
| www.myptc.edu | Images missing or empty alt text | 2 of 7 images | 1.1.1 | CRITICAL | Consistent pattern across all sites |

**Suggested Fix:**
- Audit every `<img>` tag
- For meaningful images: provide descriptive alt text that conveys content and function
- For decorative images (spacers, dividers, icons with text): use empty alt attribute (`alt=""`) with `role="presentation"`
- Test with screen reader (NVDA, JAWS)

---

### Missing H1 Heading (www.myptc.edu only - WCAG 1.3.1)

| Site | Issue | Impact | Fix |
|------|-------|--------|-----|
| www.myptc.edu | No H1 heading on home page | Screen reader users cannot identify page main topic | Add single H1 describing page purpose |

**Suggested Fix:** Every page should have exactly one H1 that describes the page's main heading.

---

## Serious (Should Fix - Barriers to Access)

These issues create functional barriers for users with disabilities.

### Form Inputs Without Labels (WCAG 1.3.1, 3.3.1)

**Status:** Found on all three sites

| Site | Issue | Count | Elements | WCAG | Severity |
|------|-------|-------|----------|------|----------|
| clearwater.myptc.edu | Form inputs without `<label>` associations | 5 | Search form inputs + menu toggles | 1.3.1 | SERIOUS |
| www.myptc.edu | Form inputs without `<label>` associations | 5 | Search form inputs + menu toggles | 1.3.1 | SERIOUS |
| stpete.myptc.edu | Form inputs without `<label>` associations | 0-2 (fewer instances) | Primarily search inputs | 1.3.1 | SERIOUS |

**Example Problem:**
```html
<!-- BAD: Input has no associated label -->
<input type="text" placeholder="Search">

<!-- GOOD: Input properly labeled -->
<label for="search-input">Search</label>
<input type="text" id="search-input" placeholder="Search">
```

**Suggested Fix:**
1. Every form input must have an associated `<label>` with matching `for` attribute
2. Alternatively, use `aria-label` attribute on input
3. Placeholders alone do NOT satisfy labeling requirements
4. Test with screen reader: input must be announced with its label

---

### Links Without Descriptive Text (WCAG 2.4.4)

**Status:** Found on all three sites

| Site | Count | WCAG | Issue |
|------|-------|------|-------|
| clearwater.myptc.edu | 5 links | 2.4.4 | Links with empty text (icons only, no aria-label) |
| stpete.myptc.edu | 4 links | 2.4.4 | Links with empty text (icons only, no aria-label) |
| www.myptc.edu | 4 links | 2.4.4 | Links with empty text (icons only, no aria-label) |

**Example Problem:**
```html
<!-- BAD: No descriptive text for screen reader users -->
<a href="/next"><span class="icon-arrow"></span></a>

<!-- GOOD: Add aria-label for screen readers -->
<a href="/next" aria-label="Next page"><span class="icon-arrow"></span></a>

<!-- OR use visible + hidden text -->
<a href="/next"><span class="icon-arrow"></span> <span class="sr-only">Next page</span></a>
```

**Suggested Fix:**
- Every link must have either:
  - Visible descriptive text, OR
  - `aria-label` attribute with descriptive text, OR
  - `aria-labelledby` referencing another element
- Icon-only links need `aria-label` or visually hidden text (`.sr-only` class)

---

### Buttons Without Accessible Names (WCAG 4.1.2)

**Status:** Found on all sites (primarily menu toggle and navigation buttons)

| Site | Count | Issue | Severity |
|------|-------|-------|----------|
| clearwater.myptc.edu | 1-2 buttons | Hamburger menu / menu close buttons without aria-label | SERIOUS |
| stpete.myptc.edu | 1-2 buttons | Hamburger menu / menu close buttons without aria-label | SERIOUS |
| www.myptc.edu | 1-2 buttons | Hamburger menu / menu close buttons without aria-label | SERIOUS |

**Example Problem:**
```html
<!-- BAD: Button icon with no accessible name -->
<button class="menu-toggle"><svg class="hamburger-icon"></svg></button>

<!-- GOOD: Add aria-label -->
<button class="menu-toggle" aria-label="Toggle navigation menu">
  <svg class="hamburger-icon"></svg>
</button>
```

**Suggested Fix:**
- Add `aria-label` to all icon-only buttons
- Use descriptive labels: "Open menu", "Close menu", "Search", etc.
- Test: Button text must be announced by screen reader

---

## Moderate (Improvement Opportunities)

These issues reduce usability but don't create complete barriers.

### Multiple H1 Headings (WCAG 1.3.1)

**Status:** Some pages may have multiple H1s

**Impact:** Screen reader users expect one H1 per page to quickly identify page purpose. Multiple H1s create confusion.

**Suggested Fix:**
- Audit all pages
- Keep only one H1 per page (the main page heading)
- Use H2, H3, etc. for subheadings
- Verify heading hierarchy (H1 → H2 → H3, not H1 → H3)

---

### Third-Party Widgets (Google Translate)

**Status:** Google Translate widget present on all sites

**Issue:**
- Some users rely on Google Translate for language access
- Finalsite's implementation may have focus/keyboard navigation issues
- Translation quality varies

**Suggested Fix:**
1. Test Google Translate widget with keyboard (Tab navigation)
2. Ensure visible focus indicators when focused
3. Consider adding language-specific landing pages as alternative to real-time translation
4. Document supported languages in footer

---

### Keyboard Navigation & Focus Indicators (WCAG 2.4.7)

**Status:** Requires manual testing

**Issue:** Cannot fully verify focus indicators without browser testing (clicking tabs, testing focus visibility)

**Suggested Fix:**
1. Manually test all three sites using keyboard Tab key
2. Verify:
   - All interactive elements (links, buttons, form inputs) receive focus in logical order
   - Focus indicators are visible (highlighted border, background change, etc.)
   - No keyboard traps (getting stuck in a component without escape)
3. Test with browser's built-in developer tools or axe DevTools extension

---

### Color Contrast (WCAG 1.4.3)

**Status:** Requires detailed manual testing

**Sampled Data:** Main text appears to be white on dark backgrounds (good contrast)

**Suggested Fix:**
1. Use WebAIM Contrast Checker or axe DevTools
2. Test critical UI elements:
   - Text on background colors (should meet 4.5:1 for normal text, 3:1 for large text)
   - Buttons and link text
   - Form input borders and focus states
   - Icons conveying information
3. Pay special attention to:
   - PTC brand colors (green #008142, yellow #FFCF01) - verify adequate contrast when used for text

---

## Pass (What's Done Well)

### Strengths

| Check | WCAG | Status | Notes |
|-------|------|--------|-------|
| HTML lang attribute | 3.1.1 | PASS | All sites set to "en-US" correctly |
| Skip to main content | 2.4.1 | PASS | All sites have `<a href="#fsPageContent">Skip to main content</a>` |
| Single H1 per page | 1.3.1 | PASS* | Clearwater and St. Pete have proper H1s (*www.myptc.edu needs H1) |
| Semantic landmarks | 1.3.1 | PASS | Proper use of `<main>`, `<nav>`, `<header>`, `<footer>` tags (~20-26 landmarks) |
| Page structure | 1.3.1 | PASS | Good nesting of headings and logical content organization |
| External links marked | 2.4.4 | PASS | New window indicators present (opens in new window/tab) |

---

## Site-by-Site Audit

### Site 1: https://clearwater.myptc.edu (Clearwater Campus)

| Issue | WCAG Criterion | Severity | Element Type | Suggested Fix |
|-------|---|---|---|---|
| 2 images missing/empty alt text | 1.1.1 | CRITICAL | `<img>` tags (spacer.gif, 24px.svg) | Add descriptive alt text or empty alt + role="presentation" |
| 5 form inputs without labels | 1.3.1 | SERIOUS | Search input, menu toggles | Add `<label for="">` elements or aria-label attributes |
| 5 links with no descriptive text | 2.4.4 | SERIOUS | Icon-only navigation links | Add aria-label or visually hidden text |
| 1-2 menu toggle buttons without aria-label | 4.1.2 | SERIOUS | Hamburger menu buttons | Add aria-label="Toggle navigation" |
| Potential focus indicator issues | 2.4.7 | MODERATE | All interactive elements | Manual keyboard testing required |
| H1 present | 1.3.1 | PASS | 1 H1 found | Page structure is correct |
| Skip navigation present | 2.4.1 | PASS | Skip link | Users can bypass main navigation |
| Landmarks semantic | 1.3.1 | PASS | 22 landmarks | Good page structure for AT users |

**Sample Stats:**
- Total images: 7
- Total headings: 7
- Total form inputs: 7
- Total buttons: 33
- Total links: 200+

---

### Site 2: https://stpete.myptc.edu (St. Petersburg Campus)

| Issue | WCAG Criterion | Severity | Element Type | Suggested Fix |
|-------|---|---|---|---|
| 2 of 18 images missing alt text | 1.1.1 | CRITICAL | Images (one empty alt, one missing) | Add alt text to all 18 images |
| 0-2 form inputs without labels | 1.3.1 | SERIOUS | Primarily search inputs | Add labels or aria-label attributes |
| 4 links with no descriptive text | 2.4.4 | SERIOUS | Icon-only links | Add aria-label or hidden text labels |
| Menu toggle buttons | 4.1.2 | SERIOUS | Hamburger menu | Add aria-label |
| Focus indicators | 2.4.7 | MODERATE | All interactive elements | Manual keyboard testing |
| H1 present | 1.3.1 | PASS | 1 H1 found | Good page structure |
| Skip navigation | 2.4.1 | PASS | Skip link works | Assistive tech can skip nav |
| Landmarks | 1.3.1 | PASS | 26 landmarks | Strong semantic structure |

**Sample Stats:**
- Total images: 18 (most comprehensive image set)
- Total headings: 12
- Total form inputs: 2
- Total buttons: 12
- Total links: 211

---

### Site 3: https://www.myptc.edu (Main Portal)

| Issue | WCAG Criterion | Severity | Element Type | Suggested Fix |
|-------|---|---|---|---|
| 2 images missing/empty alt text | 1.1.1 | CRITICAL | Spacer GIFs, SVG icons | Add descriptive alt or empty alt + role |
| **No H1 heading** | 1.3.1 | **CRITICAL** | Page structure | Add `<h1>` with main page heading |
| 5 form inputs without labels | 1.3.1 | SERIOUS | Search input, menu toggles | Associate labels or use aria-label |
| 4 links with no descriptive text | 2.4.4 | SERIOUS | Icon-only links | Add aria-label or screen reader text |
| Button accessible names | 4.1.2 | SERIOUS | Icon buttons (menu, search) | Add aria-label attributes |
| Focus indicators | 2.4.7 | MODERATE | Keyboard navigation | Manual testing with Tab key |
| Skip navigation | 2.4.1 | PASS | Skip link present | Works as expected |
| HTML lang | 3.1.1 | PASS | Document language | Set to en-US |

**Sample Stats:**
- Total images: 7
- Total headings: 7
- Total form inputs: 7
- Total buttons: 27
- Total links: 114

---

## Summary Statistics

### Issues by Severity

| Severity | Count | Details |
|----------|-------|---------|
| **CRITICAL** | 7 | 6 image alt text issues + 1 missing H1 on main site |
| **SERIOUS** | 18 | Form labels (5+5+0), links (5+4+4), buttons (1+1+1) × 3 sites |
| **MODERATE** | 3+ | Focus indicators (all sites), heading hierarchy (some pages), third-party widgets |
| **PASS** | 5+ | HTML lang, skip nav, landmarks, external link indicators |

### Issues by WCAG Criterion

| WCAG | Issue | Count | Sites |
|------|-------|-------|-------|
| 1.1.1 | Image alt text | 6 images | All 3 sites |
| 1.3.1 | Structural semantics (forms, headings, H1) | 11+ | All 3 sites |
| 2.4.1 | Skip navigation | PASS | All 3 sites |
| 2.4.4 | Link text | 13 links | All 3 sites |
| 2.4.7 | Focus indicators | Manual testing needed | All 3 sites |
| 3.1.1 | HTML lang attribute | PASS | All 3 sites |
| 3.3.1 | Form labels | 5-10 inputs | All 3 sites |
| 4.1.2 | Button names | 3-5 buttons | All 3 sites |

### Overall Compliance Status

- **WCAG 2.1 AA Compliance:** NOT MET (CRITICAL issues present)
- **Section 508 / ADA Risk Level:** HIGH (alt text, form labels, link text issues)
- **Priority for Remediation:** IMMEDIATE
  1. Fix all image alt text (legal requirement)
  2. Add H1 to www.myptc.edu
  3. Label all form inputs
  4. Add descriptive text to icon-only links
  5. Add aria-label to buttons

---

## Remediation Roadmap

### Phase 1: Critical Fixes (Do First - Legal Compliance)
**Timeline:** 1-2 weeks  
**Priority:** Images, H1, form labels

- [ ] Audit all `<img>` tags on all three sites
- [ ] Add missing alt text
- [ ] Add H1 to www.myptc.edu home page
- [ ] Add `<label>` elements or aria-label to all form inputs
- [ ] Test with screen reader

### Phase 2: Serious Issues (High Impact)
**Timeline:** 2-3 weeks  
**Priority:** Links, buttons, keyboard navigation

- [ ] Add aria-label to all icon-only links
- [ ] Add aria-label to all icon-only buttons (menu, search, etc.)
- [ ] Test all sites with keyboard navigation (Tab, Enter, Escape)
- [ ] Verify focus indicators are visible
- [ ] Test with axe DevTools extension

### Phase 3: Moderate Issues (Improvements)
**Timeline:** Ongoing  
**Priority:** Color contrast, third-party widgets, heading hierarchy

- [ ] Run color contrast analysis on all pages
- [ ] Fix any contrast ratio violations
- [ ] Audit Google Translate widget accessibility
- [ ] Review heading hierarchy on deep pages
- [ ] Ensure consistent site-wide patterns

### Phase 4: Testing & Documentation
**Timeline:** Continuous  
**Priority:** Maintenance, user feedback

- [ ] Implement automated accessibility testing (axe, Pa11y)
- [ ] Schedule quarterly audits
- [ ] Create accessibility statement on /accessibility-statement
- [ ] Train content editors on accessible content creation
- [ ] Document WCAG compliance status

---

## Tools & Resources for Remediation

### Browser Extensions (Free)
- **axe DevTools** (Chrome, Firefox) - Comprehensive WCAG scanning
- **WAVE** (Firefox) - Visual feedback on accessibility issues
- **Lighthouse** (Chrome DevTools) - Performance + accessibility audit

### Online Tools
- **WebAIM Contrast Checker** - Color contrast validation
- **WAVE Web Accessibility Evaluation Tool** - Web-based scanner

### Finalsite-Specific
- Check Finalsite Composer documentation for accessibility best practices
- Use Finalsite's built-in accessibility features (if available)
- Contact Finalsite support for alt text management tools

### Screen Reader Testing
- **NVDA** (Windows, free) - Most common free option
- **JAWS** (Windows, paid) - Industry standard
- **Mac VoiceOver** (macOS, built-in)

---

## Legal Context

PTC operates under **Section 508 of the Rehabilitation Act** and **Title II of the ADA**, requiring:

1. **Public websites must be accessible** to people with disabilities
2. **Visual content (images) requires alt text** - no exceptions
3. **Forms must be labeled** so screen readers announce field purpose
4. **Keyboard navigation must work** - not just mouse
5. **Focus must be visible** - users must know where they are

**Liability Risk:** Failure to remediate CRITICAL and SERIOUS issues exposes PTC to:
- ADA complaints and litigation
- Section 508 compliance violations
- Negative media coverage
- Loss of accessibility certifications

---

## Recommendations for Ongoing Compliance

1. **Establish a Finalsite accessibility workflow**
   - Content editors must add alt text when uploading images
   - Form labels must be added before publishing forms
   - Heading structure must be verified before publication

2. **Implement automated testing**
   - Integrate axe or Pa11y into your CI/CD pipeline
   - Run monthly scans on all three sites
   - Generate reports for tracking progress

3. **Train staff**
   - Create quick reference guide for accessible content creation
   - Hold quarterly training for web teams and editors
   - Assign accessibility champion/coordinator

4. **Update accessibility statement**
   - Review and update /accessibility-statement page
   - List known issues and remediation timeline
   - Provide feedback mechanism for users to report barriers

5. **Schedule regular audits**
   - Quarterly automated scans
   - Semi-annual manual accessibility testing
   - Annual third-party audit (recommended)

---

## Questions for Clarification

Before full remediation, consider:

1. **Image Alt Text:** Who will provide alt text for existing images? (Content editors, webmaster, external contractor?)
2. **Finalsite Support:** Does Finalsite have built-in alt text management or bulk editing tools?
3. **Outsourcing:** Should accessibility remediation be done in-house or contracted to accessibility specialist?
4. **Timeline:** What is the compliance deadline? (Recommend 6-8 weeks for full remediation)
5. **Testing:** Will you implement automated testing? Should it be part of ongoing QA?

---

**Report Prepared:** April 15, 2026  
**Auditor:** Accessibility Specialist (WCAG 2.1 AA Compliance)  
**Next Steps:** Present findings to web team and PTC leadership for remediation planning
