# Finalsite CMS Audit (LIVE SITE) - 2026-04-15

## Current Composer Usage

### Main Site (www.myptc.edu)
**Active Composer Elements:**
- **Hero/Slideshow**: Multi-image carousel with text overlays (8 slides visible with themes like "Your Moment is Coming," "60+ Programs," "Accredited. Affordable.")
- **Navigation**: Standard hierarchical menu (Main + Header Utility), deeply nested multi-level dropdowns (About Us, Resources, Workforce Innovation)
- **Featured Content Blocks**: Grid layout with 5 quick-link cards (Welcome, Calendar, Books, Pay Fees, Summer Camps)
- **Campus Info Panels**: Two-column campus cards (Clearwater & St. Petersburg) with contact info and links
- **Events/Calendar Block**: Slideshow carousel displaying upcoming events with date info
- **News & Announcements**: Image-based card grid (3-4 items visible, scrollable) with news items
- **Our Guiding Principles**: 3-column text block (Mission, Vision, Core Values) with icon imagery
- **Footer**: Dual-column footer with logo, social links, accreditation badges (IBO, International Spanish Academy), site utilities

**Finalsite Indicators:**
- "Powered by Finalsite" link in footer
- Google Translate integration (language dropdown in header)
- Standard Finalsite naming patterns in page structure
- Content management flexibility visible in nested navigation

### Clearwater Campus (clearwater.myptc.edu)
**Active Composer Elements:**
- **Navigation**: Highly developed campus-specific menu with 8+ top-level items (Welcome, Calendar, Admissions, Programs, School Info, Employment, Staff, Food Pantry)
  - Nested programs include 30+ full-time programs, apprenticeships, dual enrollment, ESOL, ABE-GED-ASB
  - Deep nesting suggests Finalsite Composer hierarchical navigation
- **Hero Image**: Large banner image of Clearwater campus
- **Quick Links**: 4-item card layout (Calendar, Return to MyPTC.edu, Visit St. Pete, Guiding Principles section)
- **Our Guiding Principles**: Duplicated 3-column block from main site (Mission, Vision, Core Values)
- **News & Announcements**: Image carousel with 10+ news items (Clothes Bin, National Signing Day, Graduation, NTHS, Food Pantry, etc.)
- **Upcoming Events**: Calendar-style event list showing June events (Four-Day Workweek, Term 5, Drop Periods) and April-May events
- **Footer**: Matching main site footer with campus-specific phone and address, social links, additional links (Calendar, Lunch Menu, Faculty/Staff Directory)

**Custom/Legacy Elements:**
- YouTube link has broken URL format: `http:// https://www.youtube.com/...` (formatting error in Finalsite backend)

### St. Petersburg Campus (stpete.myptc.edu)
**Active Composer Elements:**
- **Navigation**: Similar to Clearwater but with St. Pete-specific content
- **News & Announcements**: 10+ item carousel (same style as Clearwater)
- **Events Block**: Calendar event list with similar structure
- **Guiding Principles**: 3-column block (same as both other sites)
- **Footer**: St. Pete-specific contact info

---

## Legacy vs. Modern Patterns

### Modern Finalsite Patterns (Currently Implemented)
1. **Responsive Navigation**: Mobile hamburger menu present, properly toggleable
2. **Carousel/Slideshow Blocks**: Image-based slideshows with pause/play controls
3. **Hierarchical Menu Structure**: Multi-level dropdowns managed within Finalsite
4. **Quick-Link Cards**: Grid-based card layouts for featured content
5. **Flexible Content Blocks**: Different sections using panel-based layouts
6. **Google Translate Integration**: Built-in language translation widget
7. **Social Media Integration**: Social icons in header/footer
8. **Accessibility Features**: Skip to main content link, ARIA labels present

### Legacy/Outdated Patterns
1. **Broken URL Format in Footer**: YouTube link has malformed URL (`http:// https://...`) indicating manual entry error or legacy data migration issue
2. **Heavy Navigation Complexity**: While functional, the 30+ program items could be better organized (not necessarily legacy, but could improve UX)
3. **Duplicated Content Blocks**: "Our Guiding Principles" section appears identically on all three sites (could use a shared/global block in modern Finalsite)

### No Evidence Of
- Custom CSS overrides (standard Finalsite styling appears consistent)
- Heavy JavaScript dependencies (appears to use native Finalsite scripts)
- Plugin-based content systems (SAM/Cengage links appear as external tools, not embedded)

---

## Custom Code Inventory

### Embedded External Tools
1. **Google Translate**: Built-in Finalsite widget (not custom code)
2. **Calendar/Events Block**: Uses Finalsite native calendar functionality
3. **External Links**:
   - Canvas Login: Points to `/student-links/canvas-login` (internal Finalsite page)
   - SIS Portal: `https://pinellas.focusschoolsoftware.com/focus/` (Focus external system)
   - Barnes & Noble Virtual Bookstore: `https://bncvirtual.com/ptc` (external vendor)
   - Enrole Short Courses Platform: `https://www.enrole.com/ptc/...` (external vendor)
   - Info Request: `https://inforequest.myptc.edu/` (external Finalsite instance or separate system)
   - Apply Portal: `https://apply.myptc.edu/` (external application system)
   - Element451 References: Mentioned in projects memory but not visibly embedded in current site

### Forms
- **Search Form**: Present on all sites (header and footer)
- **Google Translate Form**: Language selection dropdown

### No Visible Custom JavaScript
- All interactive elements (slideshows, menus, language selection) appear to use native Finalsite functionality
- Page structure is clean HTML without obvious custom <script> tags beyond Google Translate

---

## Maintenance Issues

### Critical Issues
1. **Broken YouTube URL**: Footer YouTube link has format error `http:// https://...`
   - Impact: Link likely non-functional
   - Location: All three sites (main, Clearwater, St. Pete)
   - Root cause: Manual typo in Finalsite backend or data migration artifact

### Moderate Issues
2. **Potential Image Alt-Text Gaps**: Some carousel images in news sections show generic or empty alt text
   - Impact: Accessibility concern
   - Affects: News & Announcements carousels on campus sites

### Minor Issues
3. **Inconsistent Link Targets**: Some campus site links point to main site URLs instead of campus-specific pages
   - Example: St. Pete "Lunch Menu" link might redirect to generic URL
   - Not severe but could be streamlined

---

## Features Worth Preserving

### High-Value Finalsite Features
1. **Hierarchical Navigation System**: Allows management of 30+ programs without custom coding
2. **Carousel/Slideshow Blocks**: Provides engaging visual content management without developer intervention
3. **Responsive Design**: Mobile-first approach is working well (hamburger menu visible)
4. **Calendar Integration**: Events block is functional and automatically pulled from Finalsite calendar
5. **Multi-Site Architecture**: Three distinct subdomains (main, clearwater, stpete) are properly separated but share common header/footer elements
6. **News/Announcement Blocks**: Image-based card layout is effective and easily managed
7. **Google Translate Integration**: Useful for reaching non-English-speaking audience
8. **Quick-Link Cards**: Effective entry points for common student tasks (Apply, Inquire, Books, Fees)

### Effective Content Organization
1. **Campus-Specific Navigation**: Clearwater and St. Pete have own navigation structures while still linking back to main site
2. **Guiding Principles Block**: Consistent Mission/Vision/Values presentation across all sites (good for brand consistency)
3. **Social Media Integration**: Footer social links well-integrated

---

## Migration Considerations

### What the Redesign Must Preserve
1. **URL Structure**: Current subdomains and path structures are likely indexed by Google and shared with students/faculty
   - `www.myptc.edu`
   - `clearwater.myptc.edu`
   - `stpete.myptc.edu`
   - Redesign should maintain 301 redirects for any path changes

2. **Navigation Depth**: The 30+ program listings need equivalent functionality in new design (don't flatten without reason)

3. **Carousel Functionality**: Hero slideshow and news carousels are heavily used; new design must support similar UX

4. **External System Integrations**: Element451 (CRM), Focus (SIS), Enrole (short courses), Canvas, Apply portal—all must remain linked

### What Can Be Improved/Replaced
1. **Navigation Organization**: Consider mega-menu or category-based grouping for programs instead of flat 30+ item list
2. **Guiding Principles Block**: Move to shared global block to avoid duplication across three sites
3. **News Layout**: Current card layout works but could be enhanced with better filtering/search in redesign
4. **Hero Slideshow**: Consider adding more prominent CTAs (Inquire, Apply buttons) on each slide
5. **Footer YouTube Link**: Fix the malformed URL
6. **Mobile Experience**: While responsive, the hamburger menu could be tested for deeper menu traversal (30+ programs in mobile view might be unwieldy)

### Migration Path Options
**Option A: In-Place Redesign** (Recommended for continuity)
- Keep existing Finalsite instance
- Update page templates/Composer blocks to new design
- Maintain all URLs and integrations
- Testing period needed for all carousel and navigation functionality

**Option B: Parallel Build**
- Build new design on separate Finalsite instance
- Migrate content in phases
- Higher risk of URL changes requiring 301 redirects
- Better for testing if major structural changes needed

---

## Site-by-Site Notes

### www.myptc.edu (Main/District Site)
**Strengths:**
- Clean hero with effective messaging and CTA buttons on the right side
- Well-organized footer with dual-logo approach and district/campus navigation
- Quick-link card system effective for student onboarding

**Areas for Redesign Focus:**
- Hero slideshow could benefit from overlay text positioning consistency (currently varies per slide)
- News grid could have better visual hierarchy (all cards appear equal weight)
- Campus info cards are effective but could be more prominent above fold

**Content Load:** Heavy navigation suggests this is the main hub; ensure performance is maintained during redesign

### clearwater.myptc.edu (Clearwater Campus)
**Strengths:**
- Strong campus hero image with tagline
- Detailed programs list shows campus strengths
- News carousel keeps campus-specific content visible

**Areas for Redesign Focus:**
- Fix YouTube URL in footer
- Consider whether 30 full-time programs all need top-level navigation visibility
- Campus-specific calendar/events section is valuable; preserve integration

**Unique Elements:**
- "Clearwater Food Pantry" link—campus-specific student resource, keep visible
- Staff directory link in footer—good for campus identity

### stpete.myptc.edu (St. Petersburg Campus)
**Strengths:**
- Parallel structure to Clearwater aids consistency
- Navigation allows for campus-specific content management

**Areas for Redesign Focus:**
- Same YouTube URL fix needed
- News/announcements section works well
- Events calendar appears to pull from same source as Clearwater; verify distinct event handling in redesign

**Note:** St. Pete appears to be a subsidiary site; content strategy seems to match Clearwater's structure. Consider whether full parity is desired or if differentiation would benefit students.

---

## Top 3 Issues (Ranked by Migration Impact)

### 1. **CRITICAL: YouTube URL Malformation** (Impact: HIGH)
- **Issue**: Footer YouTube link formatted as `http:// https://www.youtube.com/...` on all three sites
- **Current Status**: Link is non-functional
- **Migration Impact**: Fix must be applied in all three Finalsite instances before going live
- **Fix**: Remove duplicate protocol in Finalsite footer settings
- **Timeline**: 5 minutes to fix, 10 minutes to verify across all sites

### 2. **HIGH: Navigation Scalability** (Impact: MEDIUM-HIGH)
- **Issue**: 30+ program items in main navigation could become unwieldy as programs are added/removed
- **Current Status**: Functional but relies on hierarchy; no categorization/grouping visible
- **Migration Impact**: Redesign should include better navigation structure (mega-menu, category grouping, or search-driven approach) to avoid future UX degradation
- **Consideration**: Mobile navigation may suffer as programs accumulate
- **Timeline**: Plan during UX/information architecture phase of redesign

### 3. **MEDIUM: Content Duplication** (Impact: MEDIUM)
- **Issue**: "Our Guiding Principles" section (Mission/Vision/Core Values) appears identically on all three sites
- **Current Status**: Manual content management on each site means any updates require triple-entry
- **Migration Impact**: Implement shared/global block in new Finalsite instance to manage once, display everywhere
- **Risk**: If not addressed, future updates risk inconsistency across sites
- **Timeline**: Address during content strategy/templating phase of redesign

---

## Finalsite Composer Assessment

**Overall Assessment**: PTC is using Finalsite Composer at an intermediate level.

**What's Working Well:**
- Multi-site architecture is properly implemented
- Native Finalsite features (carousels, hierarchical nav, calendar integration) are fully utilized
- No heavy custom JavaScript dependencies observed
- Responsive design and accessibility fundamentals are solid

**What Needs Attention:**
- Navigation depth requires strategy review for scalability
- Footer elements need maintenance fix (YouTube URL)
- Content duplication should be eliminated through shared blocks

**Redesign Readiness**: The site is ready for a modern redesign using Finalsite's current capabilities. No legacy code overhaul required; focus should be on UX improvements and better information architecture.

**Estimated Redesign Scope**: Moderate (not complex legacy cleanup, but strategic improvements to navigation and content management workflows).
