# Current Student Review - 2026-04-15
**Reviewer Persona:** Maria, 28-year-old Medical Assisting student, 6 months into program at Clearwater campus. Busy, tech-savvy, impatient. Wants to get to my stuff fast without navigating marketing.

---

## Portal Access

### Current State (index.html, clearwater.html, stpete.html)
**Bad news:** Portal access is fragmented and hard to find.

- **Utility bar** (top of homepage): "Student Portal" link exists but goes nowhere (`href="#"`). This is the most visible real estate for me, and it's dead.
- **Main nav > "Current Students" dropdown:** Lists Canvas, Focus/SIS, Calendar, Transcript Request, Tech Support — all separate links. This means I have to know what each tool does before clicking.
- **Utility bar split on campus pages:** At least Canvas and Focus/SIS get direct links in the top bar (good), but it's still inconsistent with the homepage.

### What Works
- Both campus pages (clearwater.html, stpete.html) put Canvas and Focus/SIS directly in the utility bar. This is student-friendly and fast.
- The "Current Students" dropdown exists on all pages.

### What Doesn't Work
- **Homepage doesn't have direct Canvas/Focus links in utility bar.** I land on the homepage, see "Student Portal" in the utility bar, click it... and nothing happens. Friction.
- **Separate links force me to pick.** I don't always remember if I'm looking for Canvas (coursework) or Focus (grades/registration). A consolidated "Student Portal" link that goes to a landing page with all three would be cleaner.
- **Schedule link is buried.** On campus pages, "Class Schedule" only appears in the Programs dropdown, nested under "Explore." I'm a current student — this should be more accessible.

### Recommendation
1. Make the homepage utility bar "Student Portal" link functional (currently goes to `#`). Point it to a landing page with Canvas, Focus, and Webmail clearly labeled with icons.
2. Keep campus page utility bar links (Canvas, Focus) — they work well.
3. Add "Class Schedule" to the Current Students dropdown on campus pages (already there on schedule-clearwater.html but not exposed in nav).

---

## Finding My Schedule

### Current State
- **Homepage:** No link to class schedule anywhere.
- **Clearwater campus page:** Schedule link is in Programs dropdown > Explore > "Class Schedule". That's 3 clicks to get to my schedule.
- **schedule-clearwater.html:** The dedicated schedule page is excellent. Sticky filter bar, searchable, category/time filters, responsive table. Layout is professional and functional.

### What Works
- The schedule page itself is really good. Filters work, search is intuitive, day badges are clear, time badges are color-coded. As a student, I'd actually use this.
- Utility bar on schedule page has Canvas/Focus links (good).
- Footer on schedule page links back to Clearwater home and to "All Programs A–Z".

### What Doesn't Work
- **No quick access from homepage or main nav.** A general "Class Schedule" or "Browse Schedules" link at the homepage level would be useful for prospects and students both.
- **Campus schedule pages aren't linked from the main campus card.** On the homepage, the campus cards say "Visit Clearwater Campus" and "Visit St. Pete Campus" — they should also hint at "View Class Schedule."
- **No breadcrumb or "back to campus" link on the schedule page itself** (only in footer). If I'm in the schedule, I don't know where I am in the site hierarchy.

### Recommendation
1. Add a "Class Schedule" link to the homepage main nav (e.g., under Campuses or as a top-level item).
2. Link the schedule from each campus card ("View Campus Programs" or "Check Class Schedule").
3. Add a breadcrumb or "Back to [Campus] Home" link at the top of schedule-clearwater.html (and its St. Pete equivalent).

---

## Student Services

### Current State
- **Utility bar & main nav:** Neither the homepage utility bar nor the main nav mentions student services, counseling, tutoring, career services, or advising.
- **Campus pages:** The "Current Students" dropdown includes "Student Services" as a link (`href="#"`), but it goes nowhere.
- **Footer:** No student services section.

### What Works
- The "Current Students" dropdown acknowledges that student services exist (even if the link is dead).

### What Doesn't Work
- **Student Services link is broken** on campus pages.
- **No visibility on the homepage.** If I'm a current student looking for tutoring or my academic advisor, I have nowhere obvious to go.
- **No campus-specific student services info.** Each campus likely has different counseling hours, locations, and contacts — this should be on each campus page.
- **Quick links bar doesn't include student services.** The homepage quick-links are all prospect-focused (Apply, Programs, Tuition, Visit, Student Portal, Contact). Missing: Tutoring, Advising, Career Services.

### Recommendation
1. Fix the "Student Services" link on campus pages (currently goes to `#`). Point it to a campus-specific page with counseling hours, tutoring, career services, advising info, and contact details.
2. Add "Student Services" or "Tutoring & Advising" to the homepage quick-links bar (or add a second row of student-focused links).
3. Ensure each campus page has a dedicated section or sidebar with local student services contact info and hours.

---

## Campus Information

### Current State
- **Utility bar (homepage):** Phone numbers for both campuses (Clearwater 727.538.7167, St. Pete 727.893.2500) are clickable. Good.
- **Utility bar (campus pages):** Campus phone and address are displayed and the address is clickable. Good.
- **Campus cards (homepage):** Show address, phone, and a brief description. Good.
- **Campus pages:** Hero section has contact info in the footer. Repeated in footer section.
- **Schedule page:** Campus address and phone in the header and footer.

### What Works
- **Phone numbers are front-and-center** on every page. I can always find a number to call.
- **Campus addresses are visible** (utility bar, cards, footers).
- **Campus pages have dedicated sections** with proper headers and navigation structure.

### What Doesn't Work
- **Hours of operation are not displayed anywhere.** When am I open? When can I visit? This is critical.
- **No "Map & Directions" link that actually works.** Both campus pages have "Map & Directions" in the Campus Info dropdown, but the links go to `#`.
- **No parking info, building access hours, or campus facility details.** If I'm planning to visit the Clearwater campus, I need to know: Where do I park? What buildings are open when? Are there restrooms, a cafeteria, a bookstore on campus?

### Recommendation
1. Add **campus hours of operation** to the utility bar or hero section of each campus page (e.g., "Hours: Monday–Friday 7:00 AM–5:00 PM").
2. Add a **"Visit Campus" section** on each campus page with:
   - Parking information (where to park, cost if any)
   - Campus map and building layout
   - Facility hours (may differ from class hours)
   - Nearby restrooms, food options, bookstore location
   - How to request a campus tour
3. Fix the "Map & Directions" links to point to Google Maps or an actual campus map page.
4. Consider adding a **"Getting Here"** section with public transit info (bus lines, etc.) since some students may not drive.

---

## Page-by-Page Notes

### index.html (Homepage)
**Overall:** Prospect-focused. Heavy on marketing, light on student services.

**Strengths:**
- Hero section is clear and compelling.
- Program cards are well-organized by category.
- Campus cards are visually appealing.
- News & Events section is nicely laid out.
- Quick links bar exists (but see issues below).

**Issues:**
- Utility bar "Student Portal" link is dead.
- Quick links are all prospect-focused (Apply, Programs, Tuition, Visit, Student Portal, Contact). No student-specific shortcuts.
- "Current Students" dropdown is there but underutilized.
- No prominent link to class schedules or student services.
- Footer has "Student Resources" link in footer nav, but homepage nav does not.

**For a Current Student:** I'd probably bookmark the Clearwater campus page and access Canvas through my browser history. The homepage doesn't serve me well.

### clearwater.html (Clearwater Campus Page)
**Overall:** Better than homepage for current students. Campus-specific nav and quick links.

**Strengths:**
- Utility bar has Canvas and Focus/SIS links. This is what I need.
- Quick links are campus-focused (Admissions, Financial Aid, Bookstore, Visit, Student Portal, Consumer Info). Decent.
- "Current Students" dropdown includes Canvas, Student Services (broken), Bookstore, Record Request, Tech Support.
- Programs section shows what's offered at this campus.
- Footer has campus-specific links (Class Schedule, Campus Map, Academic Calendar, Staff Directory).

**Issues:**
- "Student Services" link is broken.
- "Class Schedule" is in the Programs dropdown under Explore — should be more prominent.
- No campus hours displayed.
- No campus facilities info (parking, building access, etc.).
- No tuition payment link in the quick links or main nav (previous issue noted).

**For a Current Student:** This page is workable. I'd click Canvas in the utility bar to get to my courses. Good enough.

### stpete.html (St. Petersburg Campus Page)
**Overall:** Mirrors Clearwater. Same issues, same strengths.

**Issues:** Same as Clearwater. No class schedule link in main nav (only in Programs > Explore). Student Services link is broken.

### schedule-clearwater.html (Clearwater Schedule Page)
**Overall:** Excellent design and functionality. This page works.

**Strengths:**
- Sticky filter bar with clear categories (Full-Time, Adult, Apprenticeships) and time-of-day filters.
- Search functionality is intuitive.
- Table layout is clean, readable, and mobile-responsive.
- Day badges and time badges are color-coded and easy to scan.
- Location badges (Main, Pinellas High Innovation, Offsite) are clear.
- Utility bar and nav are consistent with campus pages.
- Footer links make sense.

**What I'd Want as a Current Student:**
- A "Back to Clearwater Campus" breadcrumb at the top (so I know where I am).
- A note: "Enrolled in Medical Assisting? Here's your required schedule" (personalization would be nice, but not essential).
- A "Waitlist" or "Get Notified" button for classes I'm interested in (not currently present).

**No Issues:** This page does its job well.

### homepage-improved-mockup.html (Urgent Fixes Mockup)
**Overall:** This mockup shows good direction. More current-student friendly than the baseline.

**What's Better:**
- Quick links section is reduced to 4 items: Admissions & Enrollment, Academic Calendar, Buy Your Books, Pay Your Fees. Clearer and less cluttered.
- Mission banner is condensed (good).
- News section is recruitment-focused, not operational.
- Events list is clean and date-focused.
- Utility bar still has Calendar, Campus links, and secondary nav (About, Resources, Workforce, We Hire).
- Header CTA buttons (Inquire, Apply) are visible and clear.

**Still Missing (even in the mockup):**
- No Canvas/Focus login in the utility bar or header.
- No class schedule link.
- Student Services still not prominently featured.
- Tuition payment still not in the quick links.
- No campus hours or student-specific navigation.

**Assessment:** The mockup is an improvement for prospects, but it still doesn't fully solve the current student navigation problem.

---

## Top 3 Issues (Ranked by Daily Inconvenience)

### 1. **Student Portal Link is Dead (Critical)**
**Impact:** Every day a student visits the homepage, they see "Student Portal" in the utility bar and click it expecting to get to Canvas, Focus, or Webmail. Nothing happens. This is the single worst UX issue.

**Current State:** 
- Homepage utility bar: `<a href="#">Student Portal</a>`
- Campus page utility bar: Has direct Canvas and Focus links (works well).

**Fix Required:**
- Homepage utility bar "Student Portal" link should go to a landing page or directly to Canvas (recommend a portal landing page that offers Canvas, Focus, and Webmail with icons).
- Alternatively, replace the dead link with direct Canvas and Focus links (like the campus pages).

**Estimated Frequency:** Every student visits the homepage at least once per semester; many bookmark it and re-visit.

---

### 2. **No Visible Campus Hours or Facility Information (High)**
**Impact:** I want to visit campus to meet with my advisor or print something at the bookstore. I have no idea when the campus is open or where buildings are. I have to call, or Google it.

**Current State:**
- No hours listed anywhere on the site.
- No campus map or facility info.
- "Map & Directions" links are broken (`href="#"`).

**Fix Required:**
- Add campus hours (e.g., "Monday–Friday 7:00 AM–5:00 PM, Saturday by appointment") to the utility bar or hero section of each campus page.
- Add a "Visit Campus" section with parking, map, facility hours, and tour booking.
- Fix "Map & Directions" links.

**Estimated Frequency:** Current students visit campus multiple times per week; new students need this before their first visit.

---

### 3. **Class Schedule Not Easily Accessible from Main Navigation (Medium)**
**Impact:** The schedule page is excellent, but I have to navigate Programs > Explore > "Class Schedule" to find it. As a current student, this should be a quick click from the main nav or utility bar.

**Current State:**
- Homepage: No schedule link anywhere.
- Campus pages: Programs dropdown > Explore > "Class Schedule" (3 clicks).
- Schedule page exists and is well-designed (schedule-clearwater.html).

**Fix Required:**
- Add "Class Schedule" link to the main nav (top level or under Campuses).
- Or add a "Quick Links" section at the top of campus pages: "Clearwater Schedule | St. Pete Schedule | Academic Calendar."
- Add breadcrumb to schedule page: "Clearwater Campus > Class Schedule."

**Estimated Frequency:** Current students check their schedule multiple times per semester, especially before registration or when adding/dropping courses.

---

## Additional Minor Issues

- **No tuition payment link** in the main nav or quick links (mentioned in previous issues; still unresolved on current pages). Campus pages have a dropdown "Tuition & Fees," but homepage doesn't.
- **Student Services link is broken** on campus pages. Must be fixed ASAP.
- **Schedule page (schedule-clearwater.html) is not linked from the homepage or campus cards.** It's orphaned.
- **No breadcrumb navigation** on the schedule page (only in footer). Hard to know where I am in the site.
- **No persistent student portal access from every page.** Some pages have it in the utility bar (campus pages), others don't (homepage). Inconsistent.

---

## Summary for Marianne

Maria's primary frustration is friction. She has limited time, knows what she needs (Canvas, grades, schedule), and doesn't want to hunt for it. The current site makes her hunt.

**Quick wins:**
1. Fix the dead "Student Portal" link on the homepage (now points to `#`). Link it directly to Canvas or a portal landing page.
2. Add campus hours and a "Visit" section to each campus page.
3. Add "Class Schedule" to the main nav or create a fast path from campus pages.

**Bigger improvements:**
- Consolidate student portal access (Canvas, Focus, Webmail) with clear labels and icons.
- Add a second row of student-focused quick links to the homepage (or a "Current Students" quick-links section separate from prospects).
- Ensure every student-facing page has consistent access to Canvas, Focus, and the schedule.

Maria would benefit from a **"Current Students" section or dashboard** that centralizes all student needs: Canvas login, grades (Focus), schedule, student services, tuition payment, bookstore, and calendar. This could be a single page or a series of fast-linked items in the utility bar.
