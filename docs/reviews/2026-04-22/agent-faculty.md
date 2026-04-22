# Faculty Review — 2026-04-22
**Reviewer:** Robert, CNC Machining Instructor (St. Petersburg campus, 8 years)

---

## Program Representation

The programs page is well-organized and easy to scan. I can see Machining Technologies is listed under Clearwater, which is correct for my program. The card shows a clear description and a "Learn More" link. I can filter by campus, which is helpful when students ask what's offered at their location.

However, there are problems:
- **No Machining counselor listed anywhere.** Students ask me who to contact about registration, and I'd like to send them to a specific person, but the site doesn't show that.
- **The "Learn More" links on program cards don't go anywhere** (they're all "#" links). If a student clicks on Machining, nothing happens. The Welding programs have working links to detailed pages, but my program doesn't.
- **No program details are visible** - no duration, cost, start dates, or job outcomes. I'd want students to know how long the program is or what it costs before contacting admissions.

## Directing Students

This is frustrating. I send students to programs.html frequently, and the navigation gets them there okay. But I can't give them a specific link to my program page because there isn't one. I have to tell them to go to the site, search for Machining, and then tell them to contact admissions.

The campus filter works fine - I can tell a Clearwater student "go to the Programs page and filter for Clearwater campus" and that works. But then they hit a dead end on the program card.

The schedule pages exist, which is good. I haven't tested them fully on desktop, but they link from the Programs section.

## Campus Accuracy

**Clearwater campus details look correct:**
- Address: 6100 154th Ave N, Clearwater - correct
- Phone: 727.538.7167 - correct
- The utility bar at the top shows this info clearly

**St. Petersburg campus:**
- Address: 901 34th St S, St. Petersburg - I believe this is correct
- Phone: 727.893.2500 - correct

Both campus pages have the right contact info in the utility bar. Good.

## Faculty Resources

This is weak. I went looking for:
- **Staff directory** - mentioned in navigation dropdowns but doesn't link anywhere (all "#" links)
- **Professional development resources** - not visible anywhere on the site
- **Faculty/staff page** - doesn't exist
- **Counselor contact info** - no directory of counselors by program

I know from the current site that Cheri Ashwood counsels our Welding program. I'd expect to see her name linked from the Welding pages. But there's nothing like that.

The About page is supposed to have leadership and accreditation info. I checked it and it's mostly placeholder content (breadcrumbs and hero sections visible, but page details cut off in my read). 

**Bottom line:** If I need to find a colleague's email or a PD opportunity, the website won't help me. I'd have to call or ask around.

## Page-by-Page Notes

### programs.html
- **What works:**
  - Grid layout is clean and scannable
  - Filter by cluster and campus works
  - Campus tags on cards are clear
  - 35+ programs visible with descriptions
  - Welding has working "Learn More" buttons to detail pages

- **What needs work:**
  - All non-Welding "Learn More" links are dead (#)
  - No program details (duration, cost, start dates, counselor)
  - M7 issue still open: Staff directory link goes nowhere
  - H5 issue still open: No named counselor for Machining
  - H1 issue still open: Only Welding has a detail page; all other programs are cards only

- **Suggested fix:**
  - Create stub detail pages for all programs (at minimum: Machining, plus a few others per cluster)
  - Add counselor name and contact info to detail pages
  - Add duration, cost, and next start date to program cards or detail pages
  - Wire the "Learn More" buttons to real pages

### stpete.html
- **What works:**
  - Campus name and address clearly visible
  - Program cards by cluster thumbnail the offerings
  - "View All Programs" button filters to St. Pete campus
  - Quick links to Admissions, Financial Aid, etc.
  - News section shows recent events

- **What needs work:**
  - L9 issue still open: News section shows same 3 items on both campuses (Signing Day, Diesel Open House, Chef Brian). These aren't St. Pete-specific, and they don't rotate.
  - The "Apply Now" and "Start an Application" buttons go to "#" 
  - Quick links are mostly dead (Admissions, Financial Aid, etc. all link to "#")
  - H3 issue: No campus hours, parking info, facility map, or building layout

- **Suggested fix:**
  - Wire the Apply/Application buttons to the admissions portal
  - Create campus-specific news items (or at least rotate content by date)
  - Add a "Campus Info" section with hours, parking, map, and key phone extensions
  - Get working links for quick-link navigation

### schedule-stpete.html
- **What works:**
  - Page exists and is clearly structured
  - Breadcrumb navigation visible
  - Draft banner explains the schedule is in draft
  - Filter bar set up for program/delivery type filtering

- **What needs work:**
  - File was cut off in my read, but the page title says "2026-2027" which is correct for next year
  - Need to verify the actual schedule data is populated (not just the structure)

- **Suggested fix:**
  - Confirm all 35+ programs have rows in the schedule with accurate times and locations
  - Test filters work correctly in Finalsite Composer

### about.html
- **What works:**
  - Hero section with breadcrumb is clear
  - Styling is consistent with the brand

- **What needs work:**
  - C3 issue still open: Leadership section shows placeholder icons only, no actual names/titles
  - M7 issue: Staff directory link is dead (#)
  - M8 issue: Missing accreditation report links and program outcomes data
  - Page content was cut off in my read, but navigation links aren't functional

- **Suggested fix:**
  - Add real leadership photos, names, and bios
  - Wire staff directory link to a working page (even if it's just a list of departments with phone extensions for now)
  - Add links to COE and Cognia accreditation reports in the footer

### contact.html
- **What works:**
  - Campus contact cards show address and phone for both locations
  - Layout is clear and easy to scan

- **What needs work:**
  - Contact form is not visible in the partial read
  - No department-level contact info (e.g., which person to contact for Machining questions)
  - No links to campus directories or staff

- **Suggested fix:**
  - Add a department/program contact section (or link to a staff directory)
  - Make sure contact form submission works

### student-resources.html
- **What works:**
  - Page structure is set up with placeholder cards
  - Icons and layout are consistent

- **What needs work:**
  - Many cards appear to be placeholders ("resource-card--placeholder")
  - No actual links to Canvas, Focus, academic calendar, or counseling services
  - Content is mostly stub text

- **Suggested fix:**
  - Fill in all placeholder cards with real links and descriptions
  - Wire Canvas Login, Focus/SIS, and tech support links to actual systems

### welding-clearwater.html & welding-stpete.html
- **What works:**
  - These pages exist and have real content (curriculum, counselor info, videos)
  - Program details are visible (hours, credentials, requirements)
  - Stat bars show key info (duration, cost, etc.)
  - Step buttons ("Apply Now", "View Schedule") have structure

- **What needs work:**
  - C2 issue: Apply buttons likely go to "#" instead of real portal
  - Step buttons need to be wired to real pages/portals

- **Suggested fix:**
  - Verify apply buttons link to the admissions portal
  - Test schedule links point to filtered schedule pages

---

## Prior Issues Status

### Critical Issues (C1-C7)
- **C1 (Missing Program Details):** STILL OPEN. Only Welding has detail pages with duration, cost, start dates. Other programs (including Machining) are cards only.
- **C2 (Apply/Application CTAs dead):** STILL OPEN. All non-Welding CTAs and utility bar links appear to go to "#".
- **C3 (Leadership missing):** STILL OPEN. About page has placeholder structure but no real photos/names.
- **C4 (Compliance docs non-functional):** LIKELY STILL OPEN. Footer links to Privacy, Accessibility, etc. appear to be "#".
- **C5 (Dropdown navigation not keyboard-accessible):** NOT REVIEWED (accessibility requires keyboard testing).
- **C6 (Missing skip-to-main-content):** NOT REVIEWED (accessibility).
- **C7 (Student Portal utility link dead):** STILL OPEN. All utility bar student links go to "#".

### High-Priority Issues (H1-H13)
- **H1 (Only Welding has detail pages):** STILL OPEN. Confirmed: Welding pages exist, all other programs are cards only.
- **H2 (St. Pete lists programs not offered):** NEEDS SPOT-CHECK. St. Pete page shows 6 clusters and says "Programs at St. Petersburg," but I didn't verify if all programs listed are actually offered at St. Pete. (Machining should be Clearwater-only.)
- **H3 (No campus hours/parking/maps):** STILL OPEN. Neither campus page shows hours, parking, or maps.
- **H4 (No job outcomes/salary data):** STILL OPEN. No outcomes visible on programs page or campus pages.
- **H5 (No named program counselor for Machining):** STILL OPEN. No counselor name shown anywhere for Machining.
- **H6 (Tuition & Financial Aid missing):** NOT FULLY REVIEWED. Link exists in navigation but actual content page not checked.
- **H7-H13:** NOT REVIEWED (design and accessibility).

### Medium-Priority Issues (M1-M12)
- **M7 (Staff directory not visible):** STILL OPEN. Staff Directory link is dead ("#") in About > dropdown.
- **L9 (Same news on both campuses):** STILL OPEN. Both Clearwater and St. Pete show the same 3 news items (Signing Day 4/15, Diesel Open House 3/25, Chef Brian 2/20).

---

## Top 3 Issues (Ranked by Frequency of Student Confusion)

### 1. **Program Detail Pages Only Exist for Welding (H1)**
**Impact:** Students can't get specific info about Machining, IT, Health Sciences, etc. before calling or applying. They click "Learn More" and hit a dead link. I have to explain verbally what the program involves, how long it takes, and what it costs. This slows down my ability to direct them.

**Frequency:** Every student who asks about my program in the first weeks of recruitment season.

**Fix:** Create detail pages for all programs (or at minimum, the 8 major clusters). Show: duration, cost, next start date, prerequisites, counselor contact, and day/time schedule.

---

### 2. **All CTAs and Links Outside the Homepage Navigation Are Dead (C2, C7)**
**Impact:** When I tell a student "click Apply Now" or "Student Portal," the button goes nowhere. The utility bar links (Apply Now, Student Portal, Events) all go to "#". This makes the site look unfinished.

**Frequency:** Multiple times per day for students and prospects I'm working with.

**Fix:** Wire all Apply buttons to the admissions portal. Wire all utility bar CTAs to their real destinations. This is blocking launch.

---

### 3. **No Faculty Resources or Staff Directory (M7)**
**Impact:** I can't find a colleague's contact info, a counselor assigned to my program, or professional development resources on the site. I have to call the main office or ask around. The staff directory link is broken.

**Frequency:** Once or twice a month when I need to refer a student to a counselor or find a PD contact.

**Fix:** Create or wire a Staff Directory page. Link to it from About > Staff Directory. Include contact info by department/program, not just leadership.

---

## Additional Observations

The site is visually clean and on-brand. Navigation structure is logical (Programs, Admissions, Campuses, etc.), and the filter system works. But it's not ready for public launch because the core enrollment pathway (Explore Program > Get Details > Apply) is incomplete. Most program cards dead-end.

Campus pages are good templates but feel empty without working quick links and campus-specific details. The news section is good to have but needs campus-specific content.

I notice that the scheduled review notes schedule-stpete.html is "draft" (894 lines, 35 programs). That's the right number of programs. I'd want to see one or two rows of actual data before signing off on it.

Overall: Clean design, logical structure, but too many dead links and incomplete sections for faculty or students to find what they need. The Welding pages show what the full site could look like. Once the other programs get that treatment, this will work well.
