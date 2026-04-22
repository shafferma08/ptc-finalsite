# Current Student Review - 2026-04-22
**Persona:** Maria, 28, Medical Assisting student at Clearwater campus, 6 months in  
**Priority:** Get to my stuff fast. Don't want to re-navigate marketing content every time.

---

## Portal Access
**What Works:**
- Homepage utility bar has "Student Portal" link (top right, easy to find)
- Main nav includes "Current Students" dropdown with specific options (Canvas Login, Focus/SIS Portal listed separately)
- Clearwater campus page has prominent utility bar with Canvas Login and SIS Portal links directly accessible
- Student Resources page exists and is linked in main nav as "Current Students"

**What Needs Work:**
- **CRITICAL:** Both utility bar links and main nav dropdown links still go to `#` instead of live portals (C7 issue still open)
- Student Portal links on homepage are dead ends, which defeats their purpose for returning students
- Takes 2-3 clicks to get to Canvas/Focus from homepage (not the one-click experience promised)

**Suggested Fix:** Wire up the actual portal URLs in utility bar and nav dropdowns. Priority fix for C7 (CRITICAL).

---

## Finding My Schedule
**What Works:**
- Class schedules exist and are well-built (schedule-clearwater.html is 894 lines of detailed data with 35 programs)
- Schedule is accessible from multiple places: Clearwater campus page quick links, footer, main nav under Programs dropdown
- Clearwater page explicitly links to schedule-clearwater.html in Programs dropdown ("Class Schedule")
- Schedule page has filtering capability and breadcrumb navigation

**What Needs Work:**
- Schedule link doesn't appear in the primary quick-links bar on Clearwater campus page (it's in the footer instead)
- Must go through Programs dropdown or footer to find schedule, not as immediate as "My Schedule" quick link
- Student Resources page only links to Clearwater schedule (not St. Pete) and says "Coming soon" for Academic Calendar (see line 206)

**Suggested Fix:** Add "Class Schedule" as a quick link on the Clearwater campus page. For students like me checking in regularly, this is friction. Also link both campus schedules from Student Resources.

---

## Student Services
**What Works:**
- Student Resources page has dedicated "Support & Services" section with cards for:
  - Academic Counseling
  - Financial Aid
  - Accessibility & Accommodations
  - Veterans Services
  - Career Services & Job Board
- All cards have working links to relevant pages or contact info

**What Needs Work:**
- Student Organizations card marked "Coming soon" (placeholder)
- Some links go to generic pages (e.g., Academic Counseling goes to contact.html, not a direct counselor directory)
- No direct link to campus-specific counselor for my program (Medical Assisting)
- Tech Support marked "Coming soon" on Student Resources page, yet the page exists in other contexts

**Suggested Fix:** Fill in Tech Support link. Create program-specific counselor links or add to contact page. Make sure all "Coming soon" cards either have live links or are removed.

---

## Campus Information
**What Works:**
- Clearwater campus page has detailed information:
  - Address in utility bar (6100 154th Ave N, Clearwater, FL 33760)
  - Phone (727.538.7167) in utility bar and footer
  - Campus hours referenced in footer meta (implied via "Preparing students...")
  - Maps page exists (campus-maps.html) with campus-specific directions
- Contact page has campus contact cards with phone, address, hours
- Footer on campus pages includes campus-specific info

**What Needs Work:**
- **H3 still open:** Campus hours aren't prominently displayed on the main Clearwater page (have to go to Contact or Maps)
- Parking information doesn't appear on Clearwater campus page (noted in H3 as missing)
- Facility info (labs, parking, accessibility) not visible on campus card
- Campus maps page requires navigation; not linked prominently from campus pages

**Suggested Fix:** Add a simple info box on Clearwater campus page with:
  - Campus Hours
  - Parking Info
  - Directions/Map link
This should be immediately visible without scrolling. L9/L10 suggest campus cards need action links.

---

## Page-by-Page Notes

### index.html (Homepage)
**What Works:**
- Campus card section shows Clearwater and St. Pete with photos, addresses, and "Visit Campus" buttons
- Quick links bar positioned prominently (6 options, though see below)
- News/Events section has campus-specific events listed

**What Needs Work:**
- **L10 open:** Campus cards don't have "View Schedule" link. Only link is "Visit Clearwater Campus" to the campus page, then must dig to find schedule. As a current student returning to check the schedule, I have to navigate through the campus marketing page first.
- Quick links bar is entirely prospect-focused (Apply, Programs, Tuition, Visit Campus, Student Portal, Contact). The "Student Portal" is there, but it's dead (C7).
- **L9 still open:** News section shows same 3 items on both campus pages (no campus-specific news filtering).
- No visible "Current Students" quick link or section that's distinct from prospect content.

**Suggested Fix:** 
1. Add "View Schedule" link to campus cards (direct to schedule-clearwater.html, schedule-stpete.html).
2. Consider a "For Current Students" quick link that goes directly to Student Resources or Portal.
3. Wire up Student Portal link to actual portal.

### student-resources.html
**What Works:**
- Page is clearly labeled for current students (breadcrumb "Home / Student Resources")
- Three sections: Academic Tools, Support & Services, Policies & Forms
- Resource cards are well-structured with icons and descriptions
- Transcript Requests links to Contact registrar (working)
- Class Schedules section has link to Clearwater (working)

**What Needs Work:**
- **Multiple "Coming soon" placeholders:** Canvas, Focus/SIS Portal, Academic Calendar, Tech Support, Student Organizations all marked "Coming soon" with gray styling
- Inline note acknowledges "several links below point to external district systems" but says integrations are "being finalized" (H3, C7 pattern)
- Only links to Clearwater class schedule, not St. Pete
- As a current student, if 5+ essential tools show "Coming soon," this page feels incomplete and unreliable

**Suggested Fix:** Either wire up the actual portal links immediately, or remove "Coming soon" cards and add a single notification banner: "Canvas, Focus, and other PCSB portals are accessed through your district login. Contact Tech Support for access issues." This is honest and less fragmentary than scattered placeholders.

### clearwater.html (Campus Page)
**What Works:**
- Dedicated campus page with utility bar showing Canvas/SIS quick access
- Programs section specifically lists Clearwater programs
- Quick links bar (Admissions, Financial Aid, Campus Bookstore, Visit Campus, Student Portal, Consumer Info)
- News & Events section

**What Needs Work:**
- **H3:** No campus hours, parking info, or facility details in hero or info sections
- Campus Bookstore link goes to `#` (dead)
- Student Portal link goes to `#` (dead)
- Quick links bar repeats marketing CTAs (Admissions, Financial Aid) instead of student-focused shortcuts
- Visit Campus button seems misplaced for a student already enrolled
- News section shows the same 3 generic items (not campus-specific)

**Suggested Fix:**
1. Add campus info box with hours, parking, and key facilities.
2. Change Clearwater quick links to be student-centric: Schedule, Portal, Bookstore, Counselor, Support.
3. Wire up the dead links (Bookstore, Portal, Admissions).

### schedule-clearwater.html
**What Works:**
- Well-built schedule page with 35 programs and real course data
- Filter bar for easy navigation (sticky, clear labeling)
- Breadcrumb navigation at top
- Large page with comprehensive data (894 lines)

**What Needs Work:**
- Not linked from main navigation as a primary link (must go through Programs dropdown or Campus page)
- No direct link from homepage or Student Resources to this page (only a reference to "Clearwater" in SR page)
- Difficult to discover if you're just checking in quickly

**Suggested Fix:** Add to quick links on Clearwater campus page and as a prominent card on Student Resources.

### contact.html
**What Works:**
- Campus contact cards with phone, address, office hours
- Separate cards for each campus
- Links to transcript requests
- Clear layout with grid structure

**What Needs Work:**
- Must navigate to Contact page to see campus hours (not on campus pages themselves)
- No direct link to counselor by program (generic "Contact counseling" link)
- "Counselor" field not populated with actual names/emails (per issues tracker, H3 notes missing staff info)

**Suggested Fix:** Link counselor names and emails directly from campus pages and Student Resources. Update contact.html with program-specific counselor assignments.

### campus-maps.html
**What Works:**
- Page exists with Google Maps embeds for both campuses
- Provides directions and address information
- Includes parking and accessibility notes

**What Needs Work:**
- Not linked from campus pages (must search or navigate via footer)
- Separate page; not integrated into campus pages
- No parking info visible on Clearwater campus page (students have to go here to find it)

**Suggested Fix:** Embed or link maps directly on campus pages. Or add parking/facility info box to campus pages pointing to maps.html.

---

## Prior Issues Status

### CRITICAL Issues (C1-C7)
| Issue | Status | Notes |
|-------|--------|-------|
| **C7: Portal link is dead** | STILL OPEN | Main nav, utility bar, quick links all point to `#`. This is blocking current student workflow |
| C2: Apply CTAs point to `#` | STILL OPEN | Doesn't directly affect current students, but shows overall linking issue |
| C1, C3-C6 | STILL OPEN | Not directly in my persona scope, but contribute to site friction |

### HIGH Issues Impacting Current Students
| Issue | Status | Notes |
|-------|--------|-------|
| **H3: No campus hours/parking/facility info** | STILL OPEN | Hours exist on Contact page, but not on campus pages. Must navigate away to find them |
| **H6: Tuition & Aid missing** | WORKING | Tuition & Aid nav exists with links, though some internal links are `#` |

### MEDIUM Issues
| Issue | Status | Notes |
|-------|--------|-------|
| M5, M6: Card styling / CSS issues | N/A | Don't affect my experience as student |

### LOW Issues Directly Affecting Current Students
| Issue | Status | Notes |
|-------|--------|-------|
| **L9: News section shows same 3 items on both campuses** | STILL OPEN | Would appreciate campus-specific news |
| **L10: No "View Schedule" link from campus cards** | STILL OPEN | Forces navigation through campus page before reaching schedule |

---

## Top 3 Issues (Ranked by Daily Inconvenience)

### 1. **C7: Student Portal Link is Dead (CRITICAL)**
**Impact:** Every time I return to PTC website, I expect to click "Student Portal" to get to Canvas or Focus. Instead, it goes nowhere. This is the #1 friction point for a returning student.

**Current State:** 
- Homepage utility bar: `<a href="#"><i class="fas fa-user"></i> Student Portal</a>`
- Main nav Current Students dropdown: links to Canvas and Focus, but both go to `#`
- Quick links quick-link: goes to `#`

**Why It Matters:** A current student's first instinct is to look for a portal link. When it's dead, the site feels broken and unfinished.

**Fix:** Wire these links to actual PCSB Canvas and Focus URLs. This is your #1 quick win for student experience.

---

### 2. **H3: Campus Hours and Key Info Hidden (HIGH)**
**Impact:** I'm at campus or planning to go; I need to know hours, parking, and where to find things. Information exists (Contact page, maps page), but not on the campus page where I'd expect it.

**Current State:**
- Clearwater page has address and phone in utility bar
- Hours, parking, facilities, accessible entrances buried on Contact or Maps page
- Campus info card doesn't include these essentials

**Why It Matters:** Current students don't browse the marketing site; they're on a specific mission. If I need parking info or to know if campus is open, I shouldn't have to navigate to another page.

**Fix:** Add a simple info box on the Clearwater campus page:
```
Hours: Mon-Fri 7:00 AM - 6:00 PM | Sat (by appointment)
Parking: Free lot (south side of building)
Accessibility: Accessible entrances on north and south sides
```

---

### 3. **L10: No Schedule Link from Campus Cards (LOW/MEDIUM)**
**Impact:** Homepage shows campus cards with "Visit Clearwater Campus" button. But as a current student, I really just want to see the class schedule. Button takes me to campus page, then I have to dig through Programs dropdown or footer to find the schedule link.

**Current State:**
- Campus cards only have "Visit Campus" CTA
- Schedule accessible from: Programs dropdown -> Class Schedule, or footer, or Clearwater page
- Not obvious to a returning student

**Why It Matters:** For a current student checking in mid-term, this is an extra navigation layer that prospective students don't need.

**Fix:** Add "View Schedule" link directly on campus cards (or as a second CTA). Or add a "For Current Students" quick link on homepage that jumps to Student Resources or the schedule directly.

---

## Summary
The site is **structurally solid** for current students — resources exist, information is findable, and the Student Resources page is well-designed. But there are two friction points that add unnecessary clicks:

1. **Portal links don't work** (C7 CRITICAL) — Fix immediately.
2. **Campus essentials aren't visible on campus pages** (H3) — Add info box.
3. **Schedule discovery isn't streamlined for returning students** (L10) — Add direct link from campus cards.

Once those three are fixed, a current student like me can get to Canvas, Focus, my schedule, and campus info in 1-2 clicks from the homepage.
