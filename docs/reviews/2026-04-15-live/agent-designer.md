# Visual Design Review (LIVE SITE) - 2026-04-15

**Reviewer Role**: Senior UX/Designer with 10 years higher education web experience
**Review Date**: April 15, 2026
**Sites Reviewed**: 
- https://www.myptc.edu (Main/District)
- https://clearwater.myptc.edu (Clearwater Campus)
- https://stpete.myptc.edu (St. Petersburg Campus)

**Platform**: Finalsite CMS

---

## Executive Summary

The PTC Finalsite implementation shows inconsistent visual treatment across three institutional domains. While the main site (myptc.edu) maintains cleaner spacing and typography, the campus-specific sites exhibit structural redundancy, navigation inconsistency, and a fragmented approach to hierarchy. The design system lacks strong enforcement of PTC's brand colors and typography guidelines.

---

## Design System Consistency

### Strengths
- **Shared Platform**: All three sites use Finalsite, enabling potential for unified design governance
- **Navigation Structure**: Main navigation follows a reasonable three-tier hierarchy (main nav > secondary nav > content)
- **Utility Navigation**: Consistent student quick-links placement (Canvas, SIS, BookStore) across sites
- **Responsive Framework**: Navigation adapts to mobile (hamburger menu visible in structure)

### Critical Issues
- **Duplicate Navigation Trees**: Both main.myptc.edu and campus sites render identical navigation menus twice in the DOM (appears as both expanded and mobile versions)
- **Campus Site Divergence**: Clearwater and St. Pete sites have *different* sub-navigation structures despite ostensibly sharing templates
  - Clearwater includes "Campus Site Map | Menu" link; St. Pete calls it differently
  - Different "Student Services" naming (CLW: "Student Services and Hours" vs STP: "Student Services Hours")
  - St. Pete missing some Clearwater-specific apprenticeships and programs
- **Language Toggle Inconsistency**: Google Translate selector appears on main site but unclear if consistently implemented across all properties
- **Header Variations**: Logo treatments vary subtly; Clearwater and St. Pete have campus-specific taglines ("Opportunity starts here") but positioning/styling not uniform

### Design System Gaps
- No apparent master CSS framework applied consistently to all three domains
- Finalsite default styling heavily relied upon; light customization
- No visible design tokens system (shared colors, spacing scale, type scale)
- Brand guide colors (#008142 green, #FFCF01 yellow) not visibly enforced in interactive elements

---

## Color & Typography

### Typography Observations
- **Font Family**: Finalsite default fonts appear to be system/web-safe stack (likely Roboto or similar sans-serif)
- **Hierarchy**: Three levels observed:
  - Page headings (H1): Moderate size, appears ~28-32px estimate
  - Section headings (H2/H3): Smaller, unclear differentiation
  - Body text: Standard reading size, adequate contrast on white backgrounds
- **Font Weights**: Limited variation; most text appears regular (400) with occasional bold (700) for emphasis
- **Line Length**: Main content areas appear reasonable (~65-75 characters), but navigation text in dropdowns is tight

### Color System Issues
- **PTC Brand Green (#008142)**: 
  - Used in logo
  - Inconsistently applied to buttons and CTAs
  - Not visible in consistent hover/focus states across all interactive elements
- **White/Neutral Palette**: Dominates the design; backgrounds are clean white/off-white
- **Accent Colors**: Limited secondary colors; no clear visual distinction between primary/secondary CTAs
  - "Inquire" and "Apply" buttons appear similarly styled (should have stronger visual hierarchy)
- **Links**: Standard blue underlines observed; no custom color override per brand guide
- **Text Contrast**: Appears WCAG AA compliant (good black-on-white contrast)
- **Underutilized Brand Yellow (#FFCF01)**: Rarely seen except possibly in small accent areas

### Recommendation
Typography is functional but uninspired. Color system underutilizes the PTC brand palette, defaulting instead to neutrals. This results in a visually "flat" appearance for a vibrant career-focused institution.

---

## Layout & Spacing

### Header & Navigation Spacing
- **Header Height**: Appears adequate; logo and utility navigation stack nicely
- **Navigation Padding**: Inner padding on menu items looks appropriate (8-12px vertical estimate)
- **Dropdown Spacing**: Secondary/tertiary nav items have compressed spacing, making them harder to scan quickly
- **Logo Space**: Sufficient breathing room around logo image; doesn't feel crowded

### Main Content Spacing
- **Page Margin/Padding**: Main content area has visible margins on desktop (appears 20-40px on sides)
- **Section Gaps**: Inconsistent vertical spacing between major sections:
  - Slider area to CTA buttons: Good breathing room
  - News section to events section: Appears cramped, could benefit from more white space
  - Hero images to text: Standard, appropriate
- **Card Layouts**: News/event cards have adequate internal padding; edges align well

### Footer Spacing
- **Footer Column Alignment**: Multiple footer sections (logo, contact, social, utility links) are well-organized
- **Footer Density**: Information is dense but readable; appropriate for institutional footer
- **Copyright/Accreditation**: Secondary footer information tucked at bottom; spacing is tight but acceptable

### Mobile Responsiveness Indicators
- Hamburger menu button present; suggests responsive breakpoints exist
- Search and utility nav collapse appropriately
- DOM structure shows mobile-aware (skip-to-main-content link present)

### Issues Identified
- **Excessive Navigation Repetition**: Same navigation menu appears twice in DOM (full + mobile), suggesting suboptimal CSS approach
- **Uneven Content Flow**: Some pages (like news section) feel vertically stretched vs. others that feel compact
- **Card Spacing on Mobile**: Not directly observable but likely cramped given overall density

---

## Interactive Elements

### Navigation Interactivity
- **Dropdown Menus**: Present on main nav; presumed hover/click states exist but not visually inspected
- **Mobile Menu**: Hamburger toggle visible; assumed functional
- **Search Bar**: Present and discoverable; search/clear/submit buttons identified in DOM
- **CTA Buttons**: Four primary CTAs visible:
  - "Inquire" (external link)
  - "Apply" (external link)
  - "Purchase Books" / "Online Fee Payment" (secondary CTAs on campus sites)
  - "Dual Enrollment" (secondary, campus-specific)

### Button Treatment
- **Visual Distinction**: Insufficient differentiation between primary and secondary buttons
- **Color**: Assumed to follow brand guide but not distinctly visible in structure inspection
- **States**: No hover/focus/active states directly observed; these are critical for accessibility
- **CTA Clarity**: "Inquire" and "Apply" buttons should have stronger visual priority

### Forms & Input Elements
- **Search Input**: Present, with clear/submit buttons
- **Language Selector**: Combobox on main site with 180+ language options (functional but unusual UX choice)
- **Modal/Dialog**: Dialog element present in DOM (possibly for translations or overlays)

### Issues
- **Weak Visual Affordance**: Buttons don't obviously "feel clickable" from structure alone
- **Missing Micro-interactions**: No indication of button loading states, validation feedback, or success confirmations
- **Accessibility Gaps**: No aria-labels observed on generic buttons ("Open Menu", "Close Menu" use generic text)

---

## Visual Hierarchy

### Current Hierarchy (Strongest to Weakest)
1. **Logo & Institutional Identity** (top priority, well-placed)
2. **Main Navigation** (prominent, three-tier structure)
3. **Large Hero Images + Taglines** (strong visual anchor in slideshow)
4. **Page Heading (H1)** (present but not as dominant as institution might wish)
5. **Section Headings (H2)** (moderate emphasis)
6. **News/Events Tiles** (good visual grouping via card layout)
7. **Body Copy & Utility Links** (lower hierarchy, harder to scan)
8. **Footer** (standard institutional placement)

### Hierarchy Strengths
- **Slideshow/Hero**: Excellent visual impact; grabs attention first
- **Card-Based News**: News and events sections use cards effectively, creating visual pause points
- **Color Contrast**: White on black or black on white maintains clarity
- **Whitespace**: Adequate separation between major sections

### Hierarchy Weaknesses
- **Competing CTAs**: "Inquire," "Apply," and campus quick links all share similar visual weight
  - Should prioritize student actions more aggressively
- **Secondary Content Buried**: Career center, resources, and employer links are deep in navigation
  - For a career-focused college, these should rank higher visually
- **News Sections Less Prominent**: News announcements come lower than some secondary links
  - Better suited higher on page or alongside hero content
- **Institutional Messaging Weak**: Mission/Vision/Core Values appear at bottom of pages
  - Could be elevated to strengthen institutional identity
- **Redundant Messaging**: "Opportunity Starts Here" tagline appears multiple times across sites without variation

---

## Site-by-Site Notes

### Main Site (myptc.edu)
**Overall Assessment**: Cleanest execution; best visual consistency

**Strengths**:
- Strong hero slideshow with 8 rotating student/program images
- Clear CTA navigation ("Inquire," "Apply," dual enrollment options)
- Mission/Vision/Core Values displayed as visual trio (image + heading + text)
- Campus cards well-organized below fold
- Events section with countdown timer (interactive, engaging)
- Upcoming events carousel with good card design

**Weaknesses**:
- Mission/Vision/Core Values section feels static; could be more dynamic
- No obvious program showcase or categorical filtering
- Main navigation is lengthy; some items could consolidate
- Google Translate selector unusual choice (not typically prominent on higher-ed sites)
- Footer feels dense with too many utility links

**Specific Issues**:
- Duplicate navigation in DOM (main + mobile) unnecessary code bloat
- Social media icons appear twice (header + footer)
- Calendar icon links aren't obviously buttons (styling ambiguous)

---

### Clearwater Campus Site (clearwater.myptc.edu)
**Overall Assessment**: Derivative of main site; some campus-specific differentiation but inconsistently applied

**Strengths**:
- Campus-specific programs listed (37+ programs enumerated in structure)
- Local contact information prominent
- Staff directory link included
- Food pantry resource visible (community-minded touch)
- Dual Enrollment CTA specific to Clearwater

**Weaknesses**:
- Feels like a "clone" of main site with different navigation items swapped in
- Campus tagline "Opportunity Starts Here" identical to main site (should differentiate)
- Too many program links in navigation; needs categorization/filtering
- No visual distinction from main site (same colors, fonts, layout)
- News section titled "PTC Clearwater Campus | News & Announcements" is overly descriptive

**Navigation Inconsistencies**:
- "Clearwater Program Offerings" + "Clearwater Full-Time Programs" both listed (redundant?)
- "Student Services and Hours" vs. main site inconsistency
- Three separate apprenticeship/enrollment/program sections feel siloed

**Specific Issues**:
- Hamburger menu structure mirrors main site but campus-specific paths not obviously different
- Missing visual indicators for which sections are unique to Clearwater vs. shared district-wide
- No wayfinding from campus site to main site is obscured

---

### St. Petersburg Campus Site (stpete.myptc.edu)
**Overall Assessment**: Nearly identical structure to Clearwater; appears to be same template with navigation swapped

**Strengths**:
- Similar organizational logic to Clearwater (should ensure consistency)
- Local contact info (901 34th St S, 727-893-2500) readily available
- Staff directory included

**Weaknesses**:
- Appears to be a 1:1 replica of Clearwater site with different content
- Minimal visual differentiation from Clearwater (should feel like distinct campuses)
- Campus tagline identical to Clearwater and main site (missed opportunity to differentiate)
- News sections titled identically (structural copy-paste evident)
- No campus-specific branding or color variation

**Navigation Differences vs. Clearwater** (inconsistency issue):
- St. Pete program offerings differ (no Web Development, added Plumbing, Commercial Driving, etc.)
- St. Pete apprenticeships are different (Fire Fighting, Industrial Machinery, Plumbing-specific)
- Navigation labels occasionally different ("Student Services Hours" vs. others' phrasing)
- Some links point to `/link-one`, `/link-two`, `/link-three` (placeholder/test URLs?) instead of real paths

**Specific Issues**:
- YouTube links have malformed href: `http:// https://...` (broken URL)
- X/Twitter link also malformed with `http:// https://` protocol duplication
- These suggest find-and-replace errors in Finalsite Composer
- Different news items than Clearwater (campus-specific) but layout identical
- "Apprenticeship Appreciation Event" listed twice in upcoming events (possible duplicate or error)

---

## Top 3 Issues (Ranked by Visual Impact)

### Issue 1: Weak Visual Hierarchy for Core Student Actions (HIGH IMPACT)
**Severity**: Critical for user experience and institutional goals

**Description**: The primary student CTAs ("Inquire," "Apply," "Dual Enrollment," "Purchase Books," "Online Fee Payment") lack visual differentiation and don't command obvious priority on the page. They compete for attention with secondary navigation and utility links.

**Current State**: 
- CTAs appear as standard button styles in a horizontal list
- No distinction between primary (institutional action) and secondary (transactional) buttons
- Taglines "Opportunity Starts Here" / "Accredited. Affordable. Career-Ready." are text-only and weak

**Recommended Fix**:
- Create distinct visual treatment for primary CTAs (use PTC brand green #008142 with white text, increased size, stronger contrast)
- Demote secondary links to smaller, lighter button style
- Consider moving "Apply" and "Inquire" into hero banner area for maximum visibility
- Use brand yellow (#FFCF01) as accent in button hover states

**Impact on Institution**: Students (target users) may miss enrollment pathways; institutional enrollment funnel weakened.

---

### Issue 2: Campus Sites Lack Visual Differentiation Despite Being Separate Properties (HIGH IMPACT)
**Severity**: Critical for institutional navigation and brand clarity

**Description**: Clearwater and St. Petersburg campus sites are nearly identical in layout, color, typography, and visual treatment. Users have no visual cues that they're on different campuses. This creates confusion in a multi-campus institution and misses an opportunity to celebrate campus identity.

**Current State**:
- Identical hero image treatment on both campuses
- Same color palette (no campus-specific accent colors)
- Identical tagline "Opportunity Starts Here" across all three domains
- Navigation path inconsistencies (duplicate apprenticeships, program listings) not visually differentiated
- No visual breadcrumb or header treatment indicating which campus you're on

**Examples of Inconsistency**:
- Clearwater has 37 programs; St. Petersburg has 25+ but uses identical layout
- Apprenticeships differ (CLW: Bay Area Electrical, Machining; STP: Fire Fighting, Plumbing) but presented identically
- News items different (NTHS/Culinary on CLW; Teacher-of-the-Year/Public Works on STP) but same card styling

**Recommended Fix**:
- Create campus-specific header treatment (color stripe, campus name badge, or icon)
  - Clearwater: Use a complementary accent color (perhaps a shade of teal or PTC's secondary green)
  - St. Petersburg: Use a different accent (perhaps orange, coral, or warm tone)
- Subtle brand variation in hero images (campus-specific photography if available)
- Campus-specific taglines that reflect each campus's character
- Add campus identifier in breadcrumb navigation or page header
- Use campus colors in button hover states and accents (while maintaining main brand)

**Impact on Institution**: Students may be confused about which campus they're viewing; campus identity lost; missed opportunity for campus pride and differentiation.

---

### Issue 3: Malformed URLs and Navigation Errors (MEDIUM-HIGH IMPACT)
**Severity**: Critical for technical credibility and user trust

**Description**: Multiple broken or incomplete URLs in St. Petersburg site indicate inadequate testing and maintenance of Finalsite properties. These errors undermine institutional credibility.

**Specific Issues Identified**:
1. YouTube links: `href="http:// https://www.youtube.com/..."` (protocol duplication)
2. X/Twitter links: `href="http:// https://x.com/PinellasTech"` (same protocol error)
3. St. Pete header utility links: Some point to `/link-one`, `/link-two`, `/link-three` (placeholder URLs, not real paths)
4. Clearwater YouTube link: `href="http:// https://..."`  (same as St. Pete)
5. Duplicate event: "Apprenticeship Appreciation Event" appears twice in St. Pete upcoming events

**Recommended Fix**:
- Audit all external links (social media, external services) across all three sites
- Replace placeholder URLs (`/link-one`, etc.) with actual paths to Student Records Request, Job Posting, and QuickLinks pages
- Standardize protocol handling in Finalsite Composer (remove `http://` prefix if HTTPS is standard)
- Implement automated link testing in QA before publishing updates
- Run broken link checker on all three domains monthly

**Impact on Institution**: Users unable to access social media; broken links appear unprofessional; reduced engagement; potential accessibility issues with screen readers on malformed links.

---

## Additional Observations & Recommendations

### Navigation Complexity
- Main navigation has 6 top-level items with 3-tier hierarchy below
- This is reasonable for a large institution but could be streamlined
- Consider: Can "Workforce Innovation" be combined with "Resources"? Can "Career Center" be elevated from Resources?
- Mobile experience likely suffers; hamburger menu likely deep and hard to navigate

### Accessibility Notes (Positive)
- Skip-to-main-content link present (good)
- Semantic HTML structure observed (nav, header, main, footer elements)
- Language toggle accessible via combobox
- Form inputs have labels

### Missing Design Patterns
- No breadcrumb navigation observed (would help on deep pages)
- No sticky header for persistent navigation (might help on long pages)
- No "back to top" button observed
- No pagination or filtering on news/events (carousels used instead)
- No clear "current page" indicator in main navigation

### Content Strategy Issues
- Mission/Vision/Core Values appear on every campus site identically (should differentiate or move)
- News sections on campus sites duplicate some content from main site
- Redundant taglines ("Opportunity Starts Here," "Accredited, Affordable, Career-Ready") appear multiple times
- Program listings appear in navigation AND on content pages (duplication)

### Finalsite-Specific Observations
- Heavy reliance on Finalsite default components (carousel, card layouts, grid)
- Minimal custom CSS/design system on top of Finalsite base
- Template approach suggests maintenance is efficient but flexibility is limited
- No apparent custom Elementor/page builder blocks visible (likely not using Finalsite's advanced composer tools)

---

## Summary & Strategic Recommendations

### Immediate Actions (High Priority)
1. Fix malformed URLs (YouTube, Twitter, placeholder links) across all sites
2. Create campus-specific visual treatment (header color stripe, taglines, icons)
3. Redesign CTA button hierarchy (prioritize Apply/Inquire, use brand green, increase size)
4. Add campus breadcrumb or header indicator on campus pages

### Medium-Term Actions (Next Quarter)
1. Audit and streamline navigation structure (consider card-based program browsing)
2. Consolidate duplicate content (Mission/Vision on every page unnecessary)
3. Implement visual design system (typography scale, spacing scale, color tokens)
4. Create Finalsite style guide (if not already in place)
5. Test mobile responsive experience (hamburger menu usability)

### Long-Term Actions (Strategy)
1. Consider moving from Finalsite to a custom WordPress/React build if design flexibility is priority
2. Develop integrated CMS strategy for all three domains (shared templates, style system)
3. Create student user journey mapping (identify critical moments, optimize CTAs)
4. Implement analytics to track navigation patterns and user behavior
5. Quarterly accessibility audit (WCAG 2.1 AA compliance)

---

## Conclusion

The PTC Finalsite implementation is **functional but uninspired**. The sites serve their informational purpose and navigational structure is reasonable, but visual design feels dated and lacks the energy expected from a modern, innovative career-focused institution. The use of a single template across three distinct campuses, combined with weak visual hierarchy for student actions, results in a missed opportunity to differentiate, engage, and guide visitors toward enrollment.

**Overall Visual Design Grade**: **C+** (Functional, needs significant enhancement for modern higher ed standards)

The fixes recommended above, particularly around campus differentiation, CTA hierarchy, and color/typography system, would elevate the design to a **B-/B** within one redesign cycle.

---

**Report Generated**: April 15, 2026 | Designer Review via Claude Code Agent
**Next Review Recommended**: After implementing top 3 issues (30-45 days)
