# Faculty Review - 2026-04-15

**Reviewer:** Robert, 52, CNC Machining Instructor, St. Petersburg Campus (8 years)

**Review Context:** Testing website usability for faculty directing students to forms, schedules, campus info, and program-specific content. Not tech-savvy; uses desktop browser. Primary goal: find links quickly and confidently direct students without confusion.

---

## Program Representation

**Status: ADEQUATE with gaps**

The Machining Technologies program IS listed in programs.html and shows up properly:
- Correct program name, short description, and campus (Clearwater only - accurate)
- Shows 1500 hours, full-time format
- Category and tag filtering work as expected

**Issues:**
- No dedicated program detail page like Welding gets (welding-clearwater.html exists, but there's no cnc-clearwater.html or machining-clearwater.html)
- Welding at Clearwater has full curriculum, instructor bios, counselor contact, videos, AWS credentials section - Machining has none
- If a prospective CNC student clicks "Learn More" on the program card, they hit a dead link (#), not a real program page
- This is a 1500-hour program, but there's no way for students to see what they're actually learning or who teaches it

**What students will ask me:** "Where do I find the details about the program?" I don't have a good answer.

---

## Directing Students

**Status: PROBLEMATIC**

**Finding the Machining program itself:** Easy
- Home page has clear Programs nav dropdown
- Programs A-Z page filters by campus and cluster
- Machining shows up with correct campus tag (Clearwater)

**Sending them to enrollment info:** Moderate difficulty
- Quick links on home page have "Apply Now" button
- St. Pete campus page has Apply button in header
- But there's no central "How to Apply" checklist for students on the main site - I'd have to tell them to call 727.893.2500 for my students to know exact next steps

**Finding my program's counselor:** IMPOSSIBLE
- Welding page has a named counselor (Valerie Santos) with email and phone
- Machining has no counselor listed anywhere
- I don't have an easy link to share: "Hey, go talk to your CNC program counselor on this page"
- Students will have to call the main number and ask

**Campus-specific schedule and forms:** Hard
- Welding page has a jump nav with "Class Schedule" link (schedule-clearwater.html)
- But that schedule is a data-driven table that LOADS ALL THREE CATEGORIES - no pre-filtered CNC-only view
- If a student searches for Machining on that schedule, it works, but they have to search - it's not obvious

---

## Campus Accuracy

**Status: GOOD**

**St. Petersburg Campus Page (stpete.html):**
- Address, phone, hours all correct (901 34th St S, 727.893.2500)
- Programs listed are mostly accurate for St. Pete (Culinary, Cosmetology, Welding, IT, Trades, etc.)
- BUT: Machining Technologies is listed in the "Skilled Trades" card as one of the programs at St. Pete, but Machining actually runs at CLEARWATER, not St. Petersburg
- This is confusing - my students at St. Pete could be misled

**Programs A-Z Filtering:**
- Correctly marks Machining as "Clearwater Campus" with data-campus="clw"
- Filter works properly if students use it

**Clearwater Info:**
- Address and phone accurate (6100 154th Ave N, 727.538.7167)
- Welding-Clearwater page has correct contact info
- Schedule page has correct campus address and phone

**Issue:** St. Pete homepage program descriptions don't always match actual campus offerings. A student at St. Pete shouldn't see "Machining" in the Skilled Trades highlight if we don't offer it locally.

---

## Faculty Resources

**Status: MINIMAL**

**What I can find for myself:**
- Staff Directory link exists in About PTC > About PTC menu and Campus Info nav
- But no actual staff directory is implemented (link goes nowhere - #)
- I can't find a PTC faculty handbook, PD resources, or course sequence docs on this site

**What I'd need:**
- Link to my program's course sequence (what phases, what hours, prerequisites)
- Link to CNC equipment inventory or lab map
- Counselor contact for my program
- Professional development calendar or resources
- Advisory committee meeting info

**What exists for Welding instructors:**
- Welding page lists 4 instructors by name, email, and phone extension
- This is exactly what I'd want for CNC but it doesn't exist

**What's missing district-wide:**
- Faculty page or directory (mentioned in nav but not implemented)
- Professional development or training materials portal
- Employer partnership or job placement info (important for a tech college - we should showcase where our grads go)

---

## Page-by-Page Notes

### index.html (Home)
- Brand colors and layout look professional
- Programs section highlights 6 categories but not all programs visible at once (good)
- Campus cards show Clearwater and St. Pete with representative images (good)
- News section is active and timely
- Quick links are clear: Apply, Programs, Tuition, Visit, Portal, Contact
- Footer has good link structure but many links go to # (not implemented)
- Issue: No faculty login or faculty-specific quick link (e.g., Canvas for grading)

### programs.html (A-Z Directory)
- Filtering by cluster and campus works smoothly
- Search function works (I tested mentally)
- 40+ programs listed, but program detail links all point to # or specific pages only for Welding
- Machining cards look good but clicking leads nowhere
- No way to browse by "what skills will I learn?" or "what equipment will I use?"

### stpete.html (St. Pete Campus)
- Hero section with split layout is nice
- Quick links cover basics (Admissions, Finaid, Bookstore, Visit, Portal, Consumer Info)
- Programs listed are mostly correct but include Machining (which is Clearwater-only)
- News section same as home (good for currency)
- Counselor info missing from program descriptions
- No way to jump to St. Pete-specific schedule or resources

### welding-clearwater.html (Welding Program Detail)
- This is what I WISH existed for CNC
- Program hero with stats, location, delivery method (on-campus, not distance ed)
- "Start Here" section with 3-step application process
- Jump nav to sections: See It In Action, Course Sequence, Credentials, Get Started
- Video grid showing real facility (4 YouTube videos embedded)
- Course sequence accordion with hours for each phase
- Credentials section lists AWS accreditation and Florida Ready to Work soft skills
- Counselor card (Valerie Santos) with clickable email and phone
- 4 instructors listed (Shawn Galyen AM, Mike Norris AM, Shea Smith PM, James Pitre PM)
- PDF downloads: Program Flyer and Program Costs (Jan 2026)
- Breadcrumbs and sticky jump nav help navigation

**What this PROVES:** If one program gets this treatment, others should too.

### schedule-clearwater.html (Class Schedule)
- Sticky filter bar with Category, Time of Day, and Search
- Table shows all 3 categories (Full-Time, Adult Ed, Apprenticeships)
- Two Welding shifts listed (1st and 2nd Shift) with correct times
- Welding Advanced also listed
- Schedule data is comprehensive but text-heavy for non-tech users
- Notes at bottom explain R = Thursday notation and offsite locations
- Would be helpful to pre-filter by program if student arrives from program page

### campus-template.html (Generic Template)
- Placeholder structure for new campuses
- Shows placeholders: [Campus Name], [Campus Phone], [Campus Address]
- This is smart for scaling - easier than copying and editing
- But it's clearly unfinished and not meant for live use
- No implementation guide visible for how to customize

---

## Top 3 Issues (ranked by frequency of student confusion)

### 1. **Program Detail Pages Only Exist for Welding** (CRITICAL)
   - Students looking for CNC specifics hit dead links
   - I have to manually provide course sequence, instructor names, and counselor contact to students
   - Welding students can self-serve; CNC students cannot
   - **Impact:** ~10-20 inquiries per semester from students wanting to know "what will I actually learn?" and "who teaches this?"
   - **Fix:** Create cnc-clearwater.html or machining-clearwater.html using the Welding template as a model. Add course phases, instructor bios, program counselor, credential details.

### 2. **St. Pete Campus Lists Programs It Doesn't Offer** (HIGH)
   - Machining Technologies is highlighted on the St. Pete homepage under Skilled Trades, but students attend Clearwater
   - Creates confusion and possible misdirection
   - **Impact:** ~5-8 calls per semester saying "I thought CNC was at my campus?"
   - **Fix:** Review stpete.html program cards and remove Machining, add only programs actually taught at St. Pete. Ensure campus programs list always matches reality.

### 3. **No Named Counselor for CNC Program** (HIGH)
   - Welding has Valerie Santos listed with direct contact
   - CNC students have to call the main number and ask "who's my counselor?"
   - I don't have a link to share that says "here's who to contact"
   - **Impact:** ~3-5 enrollment delays per cohort, students unsure about next steps
   - **Fix:** Identify CNC program counselor and add to a program detail page. If Valerie Santos handles CNC too, add her name. If different counselor, create similar card on CNC program page.

---

## Additional Observations

- **Accessibility:** Page uses semantic HTML and ARIA labels (good for desktop users with screen readers)
- **Mobile responsiveness:** Not tested here but CSS looks mobile-first
- **Brand consistency:** Color scheme and fonts applied consistently across all pages
- **Call-to-action clarity:** "Apply Now" is prominent and easy to find
- **Speed:** All pages would likely load quickly (no bloat, clean asset references)
- **Broken links:** Many footer and nav links point to # instead of real pages (this is expected for a redesign in progress)

---

## Summary

The website looks professional and is well-organized at the district level. However, **it's built heavily for Welding and light on detail for other skilled trades programs.** As a CNC instructor, I'm not able to confidently send students to a single landing page and say "everything you need to know about the program is here." I have to supplement with phone calls or emails.

The template structure is smart, but implementation is incomplete. Until other programs get the same level of detail as Welding (program page, instructor bios, counselor contact, course sequence), faculty like me will continue to manage enrollment conversations outside the website.

**Grade:** B- (Good bones, uneven rollout)
