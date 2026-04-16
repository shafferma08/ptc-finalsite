# PTC Live Site Review - Consolidated Report

**Date:** April 15, 2026  
**Sites Reviewed:** www.myptc.edu, clearwater.myptc.edu, stpete.myptc.edu  
**Review Type:** Live Site Audit (current public-facing site)  
**Review Agents:** 8 specialized reviewers (prospective student, current student, parent/guardian, faculty, director, designer, accessibility specialist, Finalsite CMS expert)

---

## Executive Summary

PTC's live website demonstrates solid foundational architecture with clear navigation, comprehensive program listings, and functional enrollment pathways. The Finalsite platform is stable and the multi-site structure (main + 2 campuses) is properly implemented. However, the site prioritizes recruitment and institutional messaging over current student experience, contains multiple critical accessibility barriers, and lacks visual differentiation between the two distinct campuses. The biggest institutional risks are **legal/compliance gaps** (missing accreditation prominence, scattered compliance statements) and **enrollment conversion friction** (missing cost clarity, weak campus differentiation, insufficient job outcomes visibility). The redesign will address many of these issues, but several require immediate fixes to the live site regardless of redesign timeline.

---

## Critical Issues (Must Fix Now)

| # | Issue | Flagged By | Sites Affected | Recommended Fix | Timeline |
|---|-------|-----------|-----------------|-----------------|----------|
| **C1** | **WCAG Compliance: Missing Image Alt Text** (6 images) | Accessibility | All 3 sites | Audit all `<img>` tags; add descriptive alt text or empty alt + role="presentation" for decorative images. Test with screen reader. Legal requirement under Section 508/ADA. | 1-2 weeks |
| **C2** | **WCAG Compliance: No H1 on Main Site** | Accessibility | www.myptc.edu | Add single H1 heading describing page purpose on homepage. Required for WCAG 1.3.1 compliance. | 1 day |
| **C3** | **Form Inputs Without Labels** (10+ inputs) | Accessibility | All 3 sites | Add `<label>` elements or aria-label attributes to all form inputs (search, menu toggles). Required for WCAG 1.3.1/3.3.1 compliance. | 1-2 weeks |
| **C4** | **Icon-Only Links Without Descriptive Text** (13 links) | Accessibility | All 3 sites | Add aria-label or visually hidden text (sr-only class) to all icon-only navigation links. Required for WCAG 2.4.4 compliance. | 1-2 weeks |
| **C5** | **Menu Toggle Buttons Without Accessible Names** | Accessibility | All 3 sites | Add aria-label="Toggle navigation" or similar to hamburger menu buttons. Required for WCAG 4.1.2 compliance. | 1 day |
| **C6** | **Malformed YouTube & Social Media URLs** | Designer, Finalsite CMS | All 3 sites | Fix footer YouTube link: remove duplicate protocol (`http:// https://...` → `https://...`). Same issue on X/Twitter link. Verify all social links functional. | 1 day |
| **C7** | **Accreditation Documentation Incomplete** (Legal Risk) | Director | All 3 sites | Make accreditation statement full and clickable from footer. Create or link dedicated accreditation page with COE verification, last visit report, standards evidence. Board/accreditor visibility critical. | 1-2 weeks |
| **C8** | **Compliance Statements Scattered & Incomplete** (Legal Risk) | Director | All 3 sites | Consolidate all legal/compliance info (Non-Discrimination, Title IX, Section 504, ADA, FERPA, Sexual Misconduct) into single "Legal & Compliance" page with clear sections. Link from main nav. Add campus-specific advisor contacts for accommodations. | 2-3 weeks |

---

## High Priority (Fix Before/During Redesign)

| # | Issue | Flagged By | Sites Affected | Recommended Fix |
|---|-------|-----------|-----------------|-----------------|
| **H1** | **Current Student Portal Not Prominent** | Current Student, Faculty | All 3 sites | Create dedicated "Current Students" or "Student Portal" section in main navigation. Move Canvas link from utility bar to prominent homepage button. Make Canvas first-click access. |
| **H2** | **No Quick Access to Class Schedule** | Current Student | All 3 sites | Add "My Class Schedule" link in student portal section (requires authentication or pre-fill if logged in). Create cohort-based schedule reference (e.g., "Medical Assisting Program Schedule"). Separate college-wide calendar from student schedule. |
| **H3** | **Campus Hours & Student Services Not Obvious** | Current Student, Parent | All 3 sites | Publish campus hours prominently. Link to Student Services page with department contact info, hours, and location. Add campus map/directions, parking, and facility information (cafeteria, bookstore, computer labs). |
| **H4** | **No Specific Tuition/Cost Examples** | Prospective Student, Parent | All 3 sites | Replace hourly rates with concrete examples: "Electrician: 1,200 hours × $2.92 = $3,504 for residents." Show total cost ranges per program type in table. Prominently feature Net Price Calculator link. Break down fees separately (application, ID, parking, labs, equipment). |
| **H5** | **Program Cost Opacity (Tools, Equipment, Supplies)** | Parent | All 3 sites | For programs with high additional costs (automotive, welding, nursing): provide written cost estimates. Clarify if tools/equipment are school-provided or student-purchased. Include example total costs (e.g., "Automotive: ~$5,500 including tuition, tools, supplies"). |
| **H6** | **Missing Job Placement Data** | Prospective Student, Parent | All 3 sites | Add job placement rates (e.g., "98% employment within 6 months") and salary ranges to program pages. Link to Council on Occupational Education accreditation verification. Feature graduate testimonials/spotlights on homepage. |
| **H7** | **Program Differences Between Campuses Not Obvious** | Prospective Student, Faculty | All 3 sites | Create campus comparison tool or unified program browser showing which programs are at which campus. Add "Campus Specializations" section: Clearwater (broad technical trades & business) vs. St. Pete (healthcare & apprenticeships). |
| **H8** | **Campus Site Lacks Visual Differentiation** | Designer | Clearwater & St. Pete | Add campus-specific header color stripe, tagline, or branding. Use campus-specific hero images. Add "Why Clearwater?" / "Why St. Petersburg?" section to each homepage. Make it visually obvious which campus user is viewing. |
| **H9** | **CNC Machining Missing from St. Pete Program List** | Faculty | stpete.myptc.edu | Audit all campus-to-program mappings. Ensure all programs offered at each campus are listed. If program is campus-specific, make it clear in main site program directory. Consider master program directory on main site. |
| **H10** | **Weak Button Hierarchy for CTAs** | Designer | All 3 sites | Create distinct visual treatment for primary CTAs (Apply, Inquire, Dual Enrollment). Use PTC brand green #008142 with white text, larger size, stronger contrast. Demote secondary links to lighter button style. Consider moving Apply/Inquire into hero banner. |
| **H11** | **Faculty Resources Buried or Missing** | Faculty | All 3 sites | Add "Faculty & Staff" section to main navigation or expand Resources. Include: PLN course requests, Canvas support, professional development, staff directory, faculty news, curriculum resources. Make it first-class navigation item. |
| **H12** | **Keyboard Navigation Focus Indicators Not Verified** | Accessibility | All 3 sites | Manual keyboard test all sites (Tab key navigation). Verify focus indicators are visible on all interactive elements. Ensure no keyboard traps. Test with browser dev tools. May need CSS fixes for hover/focus states. |

---

## Medium Priority (Address in Redesign)

| # | Issue | Flagged By | Sites Affected | Recommended Fix |
|---|-------|-----------|-----------------|-----------------|
| **M1** | **Color System Underutilizes Brand Palette** | Designer | All 3 sites | Enforce PTC brand colors in design system (#008142 green for primary, #FFCF01 yellow for accents). Update button styles, hover states, and interactive elements. Create design tokens for consistent application. |
| **M2** | **Duplicate Navigation in DOM** | Designer, CMS | All 3 sites | Eliminate duplicate navigation menus (main + mobile versions) in page structure. Use CSS media queries to show/hide instead of HTML duplication. Reduce code bloat and improve performance. |
| **M3** | **Footer Crowding & Information Hierarchy** | Director, Designer | All 3 sites | Reorganize footer: prioritize accreditation/compliance info, consolidate social links, remove low-value links (IBO, ISA logos need context or removal). Reduce density while maintaining accessibility/legal info. |
| **M4** | **Multiple H1 Headings on Some Pages** | Accessibility | Campus sites | Audit all pages for heading hierarchy. Keep only one H1 per page (main page heading). Use H2, H3 for subheadings in proper order. Verify hierarchy doesn't skip levels. |
| **M5** | **Missing Breadcrumb Navigation** | Designer | Deep pages | Add breadcrumb navigation on program pages and subpages. Helps screen reader users and improves wayfinding. Example: Home > Programs > Clearwater > Electrician. |
| **M6** | **Third-Party Widget Accessibility (Google Translate)** | Accessibility | All 3 sites | Test Google Translate widget with keyboard navigation (Tab, focus). Verify visible focus indicators. Consider language-specific landing pages as alternative. Document supported languages in footer. |
| **M7** | **Color Contrast Not Fully Verified** | Accessibility | All 3 sites | Run WebAIM Contrast Checker on all text/background combinations. Specifically test PTC brand colors (#008142, #FFCF01) when used for text. Verify 4.5:1 ratio for normal text, 3:1 for large text. |
| **M8** | **Mobile Responsiveness of Deep Navigation** | Designer, CMS | All 3 sites | Test hamburger menu with 30+ programs on mobile. Consider mega-menu, category grouping, or search-driven approach. Verify touch targets are adequate (44+ pixels). Test on various mobile devices. |
| **M9** | **Content Duplication (Mission/Vision/Core Values)** | CMS | All 3 sites | Implement shared/global block in Finalsite for guiding principles. Manage once, display on all three sites. Reduces maintenance burden and ensures consistency. |
| **M10** | **Student Links Page Too Minimal** | Faculty | All 3 sites | Expand Student Links page with: email contacts by department, FAQ, campus-specific resources (parking, dining, IT help desk), links to advisors, registrar, financial aid. Make it a true resource hub, not just portal links. |
| **M11** | **Hero Slideshow Text Positioning Inconsistent** | Designer | Main site | Standardize overlay text positioning on hero carousel slides. Ensure consistent padding, alignment, and background treatment across all 8 slides. Test readability on mobile. |
| **M12** | **News Section Visual Weight** | Designer | All 3 sites | All news cards appear equal weight. Consider visual hierarchy: feature one major story larger, others smaller. Add filtering/search for historical news. Consider date-based sorting or category tags. |
| **M13** | **Missing "Back to Top" Button** | Designer | All 3 sites | Add sticky or scrollable "back to top" button on long pages. Improves usability on mobile and deep content pages. Optional but recommended for UX. |

---

## Low Priority (Nice to Have)

| # | Issue | Flagged By | Sites Affected | Suggested Enhancement |
|---|-------|-----------|-----------------|----------------------|
| **L1** | **Navigation Can Be Streamlined** | Director | All 3 sites | Can "Workforce Innovation" consolidate with "Resources"? Can "Career Center" elevate? Audit top-level items for consolidation opportunities. Not urgent but helps with clarity. |
| **L2** | **"Visit Campus" Button Not Linked** | Director | Campus sites | Make "Visit Campus" button functional (link to shadowing/tour scheduling). Currently not actionable. |
| **L3** | **Program Shadowing Schedule Visibility** | Prospective Student | Clearwater site | "Program Shadowing Schedule" is available but not linked prominently from main page. Add CTA above fold. |
| **L4** | **Tagline Inconsistency** | Director | All 3 sites | "Opportunity Starts Here" is capitalized inconsistently across sites. Standardize (likely title case throughout). Minor branding issue. |
| **L5** | **International Partnerships Unclear** | Director | All 3 sites | IBO and ISA logos in footer have no context. Either explain (brief tooltip?) or consider removal. Currently appears as clutter. |
| **L6** | **News from Both Campuses Mixed on Main Site** | Designer | Main site | Main site news includes items from both campuses. Consider filtering or clarifying campus source in news titles. |
| **L7** | **Event Duplicate (St. Pete)** | Designer | stpete.myptc.edu | "Apprenticeship Appreciation Event" listed twice in upcoming events. Verify in Finalsite calendar and remove duplicate. |

---

## What's Working Well (Preserve in Redesign)

### Strengths to Carry Forward

- **Clear Hero/Tagline Messaging:** "Opportunity Starts Here" and carousel messaging ("60+ Programs," "Accredited. Affordable. Career-Ready.") quickly communicate institutional value. Keep messaging approach.
- **Functional Multi-Site Architecture:** Three distinct subdomains (main + 2 campuses) with proper navigation between them. Maintain URL structure and domain separation.
- **Prominent Enrollment CTAs:** Apply and Inquire buttons are consistently visible (though could be stronger visually). Keep accessibility and prominence.
- **Comprehensive Program Listings:** 34+ programs at Clearwater, 26+ at St. Pete. Well-organized by type (full-time, apprenticeships, dual enrollment, ESOL). Preserve navigational depth.
- **Finalsite Platform Stability:** No major legacy code overhaul needed. Modern Finalsite features (carousels, hierarchical nav, calendar integration) work well. Continue with Finalsite in redesign.
- **Card-Based Content Layout:** News/event cards and campus info cards are effective visual grouping. Preserve card-based layout strategy.
- **Accessibility Fundamentals:** Skip-to-main-content link, semantic HTML structure (`<nav>`, `<header>`, `<main>`, `<footer>`), and language selector show accessibility awareness. Build on these strengths.
- **Responsive Design Framework:** Mobile hamburger menu works; responsive design is functional. Continue mobile-first approach.
- **Campus Contact Info Visibility:** Phone numbers and addresses are easily found in multiple locations (header, footer, campus cards). Keep this redundancy.
- **Social Media Integration:** Consistent social links across all sites. Maintain integration.
- **Campus-Specific Content Management:** Separate navigation structures for Clearwater and St. Pete allow campus-specific news, events, and resources. Preserve this flexibility.
- **Google Translate Widget:** Useful for reaching non-English-speaking audience. Keep language accessibility feature (but improve keyboard navigation/focus indicators).
- **Parking/Bookstore/Calendar Quick Links:** Functional and helpful. Preserve in redesign.

---

## Cross-Agent Patterns

Issues flagged by 3+ agents (indicating consensus severity):

| Pattern | Agents Flagging | Key Points |
|---------|-----------------|-----------|
| **Accessibility Barriers (WCAG 2.1 AA)** | Accessibility, Designer, Director | 6 critical issues: image alt text, missing H1, form labels, icon links, button names, keyboard focus. Legal compliance risk. Must fix immediately. |
| **Cost/Financial Clarity Missing** | Prospective Student, Parent, Designer | No specific tuition totals, tool/equipment costs unclear, no job placement data visible. Students cannot answer "How much will this cost?" or "Will I get a job?". High enrollment friction. |
| **Campus Differentiation Weak** | Prospective Student, Faculty, Designer, Director | Both campuses appear identical visually, same tagline, same layout. No clear "Why Clearwater vs. St. Pete?" Students can't distinguish offerings. Enrollment conversion suffers. |
| **Current Student Experience Secondary** | Current Student, Faculty, Director | Site prioritizes recruitment over student needs (class schedule, student services hours, Canvas access require clicks). Navigation doesn't signal "Current Students" as target audience. Students default to Canvas/Focus instead of main site. |
| **Navigation & Program Scalability** | Faculty, Designer, CMS | 30+ programs work now but menu deep and complex. Missing CNC on St. Pete causes confusion. Mobile navigation likely cramped. Needs better structure/categorization before adding more programs. |
| **Compliance & Legal Risk** | Director, Accessibility | Accreditation incomplete, compliance statements scattered, missing Title IX/Section 504 clarity. Potential board/auditor/legal liability. Needs consolidation and prominence. |
| **Button/CTA Hierarchy** | Prospective Student, Designer, Director | Apply/Inquire/dual enrollment buttons lack visual distinction. Don't command obvious priority. Enrollment conversion weak. Need visual hierarchy redesign. |

---

## Redesign Validation

**Does the mockup redesign address the live site issues?**

Based on the critical/high-priority issues identified in this audit, the redesign should:

1. **✓ Likely Addresses:** Visual hierarchy (new design system), campus differentiation (new branding/colors per campus), current student portal visibility (new nav), CTA prominence (redesigned buttons), navigation scalability (new IA structure)
2. **✓ Partial:** Cost clarity (redesign can improve layout, but content writers must add actual cost data), job placement data (redesign improves section prominence, but data must be sourced from outcomes team)
3. **? Depends on Redesign Scope:** Accessibility fixes (critical WCAG issues may not be in mockup scope—verify). Compliance page consolidation (depends on what designer included in scope).
4. **✗ Will Not Address (Live Site Fixes Needed Now):** Broken YouTube links, missing alt text, form labels, missing H1, icon button accessibility. These must be fixed on live site before/during redesign.

**Gaps That Remain:**

- Accessibility remediation must be done in parallel with redesign (can't wait for go-live).
- Cost data and job placement statistics must come from institutional data sources, not just design improvements.
- Campus hours and student services info require content work independent of design.
- Title IX/compliance consolidation is a content/legal task, not design-dependent.

**Recommendation:** Treat redesign and accessibility remediation as **parallel workstreams**, not sequential. Fix C1–C8 critical issues on live site now. Continue with redesign. Upon redesign launch, ensure all accessibility fixes are baked into new site's code (don't migrate old issues forward).

---

## Recommended Next Steps

### Immediate (Next 1-2 Weeks) – Live Site Fixes
These don't require redesign go-live. Fix now regardless of redesign timeline.

1. **Fix Accessibility Critical Issues (C1–C5)**
   - Audit all images, add alt text
   - Add H1 to main site
   - Label all form inputs
   - Add aria-label to icon links and buttons
   - Deliverable: Remediation checklist + QA verification
   - Owner: Webmaster + Accessibility Specialist
   - Estimated effort: 40-60 hours

2. **Fix Technical Errors (C6)**
   - Fix YouTube and Twitter URLs in footer (remove duplicate protocol)
   - Test all social links
   - Owner: Webmaster/Finalsite admin
   - Estimated effort: 2 hours

3. **Create Compliance Consolidation Plan (C7–C8)**
   - Document existing compliance statements location
   - Plan new "Legal & Compliance" page structure
   - Map Title IX, Section 504, ADA, FERPA info
   - Estimated effort: 8 hours planning (implementation can wait for redesign)
   - Owner: Webmaster + Compliance Officer

### Short-Term (2-4 Weeks) – High-Priority Content & Org Fixes
These improve enrollment and student experience without major design changes. Can run parallel to redesign.

4. **Add Cost Data to Live Site**
   - Work with admissions team to source program-specific cost examples
   - Add tables to Fees page with total costs (e.g., "Electrician: $3,504 for residents")
   - Link Net Price Calculator prominently
   - Owner: Webmaster + Admissions + Finance
   - Estimated effort: 16 hours

5. **Add Job Placement Data**
   - Work with outcomes/career center to source placement rates and salary ranges
   - Add to program pages and homepage
   - Feature graduate testimonials/spotlights
   - Owner: Webmaster + Career Center + Communications
   - Estimated effort: 20 hours (content sourcing is time-heavy)

6. **Create Campus Comparison Tool**
   - Build simple comparison table: which programs at which campus
   - Add to main program directory
   - Owner: Webmaster + Finalsite developer
   - Estimated effort: 12 hours

7. **Restructure Current Student Navigation**
   - Create "Current Students" main nav item
   - Move Canvas, Focus, key resources there
   - Add links to student services, campus hours, registrar
   - Owner: Webmaster
   - Estimated effort: 8 hours

8. **Publish Student Services Info**
   - Post campus hours on both campus sites
   - Link to registrar, financial aid, advising, disability services
   - Add campus map, parking, facility info
   - Owner: Campus administrators + Webmaster
   - Estimated effort: 12 hours

### Medium-Term (During Redesign) – Design & Structural Changes
These align with redesign scope.

9. **Implement Campus Visual Differentiation**
   - Assign campus-specific colors (e.g., Clearwater accent teal, St. Pete accent orange)
   - Create campus-specific hero images
   - Add campus-specific taglines
   - Add campus identifier in header/breadcrumb
   - Owner: Designer + Webmaster
   - Estimated effort: 24 hours (design) + 12 hours (implementation)

10. **Redesign CTA Button Hierarchy**
    - Create distinct visual treatment for primary CTAs
    - Use PTC brand green #008142, larger size, strong contrast
    - Move Apply/Inquire into hero or above fold
    - Owner: Designer
    - Estimated effort: 8 hours

11. **Fix Program Navigation Scalability**
    - Evaluate mega-menu, category grouping, or search approach
    - Test on mobile with 30+ programs
    - Owner: UX Designer + Webmaster
    - Estimated effort: 16 hours planning + design

12. **Build Consolidated Compliance Page**
    - Structure: Non-Discrimination | Title IX | Section 504 | ADA | FERPA | Grievance Procedures
    - Add campus-specific advisor contacts
    - Add "Report a Concern" quick link
    - Owner: Webmaster + Compliance Officer + Legal
    - Estimated effort: 12 hours (content) + 8 hours (design/implementation)

### Long-Term (Post-Redesign) – Ongoing Improvements
13. **Implement Automated Accessibility Testing**
    - Integrate axe or Pa11y into CI/CD
    - Run monthly scans on all sites
    - Owner: IT/Web Team
    - Estimated effort: 8 hours setup + 2 hours/month monitoring

14. **Quarterly Accessibility Audits**
    - Manual keyboard navigation testing
    - Screen reader testing (NVDA/VoiceOver)
    - Color contrast validation
    - Owner: Webmaster + Accessibility Specialist
    - Estimated effort: 20 hours/quarter

15. **Analytics & User Behavior Tracking**
    - Set up heatmaps to track CTA clicks
    - Monitor enrollment funnel conversion
    - Identify navigation pain points
    - Owner: Webmaster + Analytics team
    - Estimated effort: 8 hours setup + ongoing

---

## Summary Table: Priority by Timeline

| Priority | Issue Category | Count | Timeline | Owner | Estimated Hours |
|----------|---------------|-------|----------|-------|-----------------|
| **Critical** | Accessibility (WCAG) + Compliance + Technical | 8 | 1-2 weeks | Webmaster + Accessibility + Compliance | 80-100 hours |
| **High** | Content + Navigation + Student Experience | 12 | 2-4 weeks | Webmaster + Admissions + Career Center | 100-140 hours |
| **Medium** | Design + Redesign Integration | 12 | 4-12 weeks (During Redesign) | Designer + Webmaster | 100-140 hours |
| **Low** | Nice-to-Have + Optimization | 7 | Post-Redesign | Webmaster + Team | 20-40 hours |

---

## Conclusion

PTC's live website is **functional but operationally risky**. The site succeeds at broadcasting institutional information and providing enrollment entry points, but it fails current students, lacks cost transparency, obscures campus differentiation, and exposes the institution to accessibility/legal liability.

The immediate priority is **fixing accessibility and compliance issues** (C1–C8) within 2 weeks, regardless of redesign timeline. These are legal requirements.

The strategic priority is **adding enrollment conversion content** (cost data, job placement, campus differentiation) in parallel with redesign. These directly impact prospective student decision-making.

The redesign will address many structural and visual issues, but must not shift critical fixes to post-launch. Plan accessibility remediation as a **parallel workstream**, not a redesign dependency.

**Overall Live Site Assessment: C** (Functional but with critical gaps)

Recommended focus for Marianne's webmaster role (Q2–Q3 2026):
1. **Week 1–2:** Fix C1–C8 critical/legal issues
2. **Week 2–4:** Add cost data, job outcomes, student services info
3. **Week 4–12:** Execute redesign with campus differentiation and navigation improvements
4. **Post-Launch:** Implement ongoing accessibility monitoring and analytics

---

**Report prepared:** April 15, 2026  
**For:** Marianne Shaffer, Webmaster / Distance Learning Coordinator, PTC  
**Review Scope:** 8 specialized agent perspectives on live site experience  
**Next Steps:** Present findings to leadership, prioritize roadmap, allocate resources
