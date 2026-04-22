# Prospective Student Review - 2026-04-22
**Reviewer:** Jaylen, 19 years old, Largo, FL. First-generation college student, browsing on phone, interested in trade programs but uncertain which one.

---

## First Impressions (Homepage)

I landed on the homepage and immediately got what PTC is about. The big hero section with "Your Career Starts Here" and the gradient green background says this is a legit school. The stat cards showing 40+ programs, 50+ industry partners, and 2 campuses gave me confidence right away.

The quick links bar is solid. I could quickly click "Programs," "Tuition & Aid," "Apply Now," and "Visit Campus" without hunting around. But I noticed a problem: some quick links point to "#" instead of real pages. When I clicked "Apply Now" on the homepage quick link bar, nothing happened. Same with "Student Portal" in the utility bar. Those dead links are confusing.

The Why PTC section was reassuring. "Hands-On Training. Real-World Skills" and the four features (COE Accredited, Industry Partnerships, Flexible Scheduling, Affordable Tuition) felt real and made me feel like I'd actually get job skills here, not just a certificate. The images of students in labs looked professional.

**Mobile note:** Hero text is readable on my phone, but the quick links bar could be cramped on small screens. Need to verify the layout doesn't break.

---

## Finding a Program

This is where things started to shine, then got messy. The programs.html page was excellent. I could filter by career cluster (Health Sciences, Skilled Trades, IT, etc.) and by campus. That's perfect for someone like me who doesn't know the exact program name yet. The 40+ programs listed alphabetically covered everything I could think of.

But here's the issue: when I clicked "Learn More" on any program card from the Programs A-Z page, the link went to "#" (line 245, 251, etc. in programs.html). So I could see the programs exist, but I couldn't learn details about them. Only Welding has actual detail pages (welding-clearwater.html, welding-stpete.html, welding-advanced.html). For someone wanting to compare, say, Electrical vs. HVAC vs. Welding, I'm stuck. I found Welding details but nothing for the other trades.

On the homepage, the "Explore Our Programs" cards (lines 337-372 in index.html) also have dead links. If I click "Health Sciences" or "Information Technology" from the homepage, nothing happens.

**What this means for me:** I found the programs exist, but I can't easily dive deeper into most of them. That's a blocker if I'm seriously considering my options.

---

## Understanding Costs

The Tuition & Aid page exists (tuition-aid.html), which is good. It mentions FAFSA, financial aid, scholarships, and veterans benefits. But when I scrolled the first 200 lines, I didn't see actual tuition numbers yet. I'd need to see:
- How much does a welding program cost?
- How much does an associate degree cost vs. a certificate?
- What's the cost per credit hour?
- Payment plan options?

The page structure looks like it has sections for rates (line 105 has a .rates-table-wrapper), but I need to verify those tables are populated with real dollar amounts. If tuition costs are there, great. If not, that's a major gap (flagged as H6 in the issues tracker).

The fact that the Tuition & Aid nav link actually points to a real page (line 103 in index.html: "tuition-aid.html") is good, but the quick link for "Tuition & Aid" on the homepage (line 255 in index.html) goes to "#" instead.

---

## Application Flow

The admissions.html page is well laid out. I can see:
1. Choose Your Program
2. Submit Your Application  
3. Meet with a Counselor

That's clear. The page mentions applying is "free" and there's "no application fee" (line 628 in admissions.html), which removes a barrier for me.

But here's the problem: every "Apply Now" CTA on the site (lines 214, 245, 485, 506, 607, 683 in various pages) links to "#" instead of a live application portal. So the message is "Apply Today!" but I can't actually apply. That's a critical blocker (flagged as C2 in issues).

The admissions page also asks me to "Start Your Application" (line 485) with a button, but it goes nowhere. Same with "Schedule a Tour" (line 607). These CTAs look real but don't work.

---

## Mobile Considerations

I'm mostly on my phone, so I looked for mobile layout issues:

1. The utility bar at the top (lines 19-34 in index.html) stacks phone numbers and links. Looks readable on mobile.

2. The hero section with text + stats should stack vertically on mobile. The page mentions responsive design, but I didn't see max-width media queries in the hero section itself (admissions.html lines 15-41 shows responsive styles, which is good).

3. The quick links grid (line 244 in index.html) is a 6-column grid. On a phone, that could be cramped. Looks like there's no media query to reflow it to 2-3 columns at smaller widths. Need to verify this doesn't break the layout.

4. The steps grid (line 467 in admissions.html shows 3 columns, with a media query at line 250 to collapse to 1 column on mobile). That's done right.

5. The info cards grid (line 529 in admissions.html) does collapse to 1 column on mobile (line 253). Good.

6. Font sizes in the page-hero section (admissions.html lines 30-40) are fixed at 2.5rem for title and 1.15rem for subtitle. On a small phone screen, that title could overflow or look huge. Mobile font scaling would help.

---

## Page-by-Page Notes

### index.html (Homepage)
- **What works:** 
  - Clear value proposition: hero section + why PTC section + featured programs
  - Campus cards show both locations with descriptions
  - News/events section adds credibility (real news like National Signing Day, Open House, Teacher of the Year)
  - Employer hook at the bottom shows they connect to jobs
  - Brand colors (green, yellow, white) are clean and professional

- **What needs work:**
  - Dead links: "Apply Now" quick link (line 245), "Tuition & Aid" quick link (line 255), "Visit Campus" quick link (line 257), "Student Portal" quick link (line 261), "Contact Us" quick link (line 265) all go to "#"
  - Program cards on homepage (lines 337-372) have dead "Learn More" links
  - Featured Programs shows only 6 cluster cards, but the site claims 40+ programs. "View All Programs" button (line 375) should be more prominent to help discovery
  - Quick links bar could wrap awkwardly on smaller phones

- **Suggested fix:**
  - Wire all "#" links to real destinations (C2 issue)
  - Make campus card heights consistent; verify responsive behavior at 320px width
  - Add media query to reflow quick links from 6 columns to 3 columns at max-width: 768px

### programs.html (All Programs A-Z)
- **What works:**
  - 40+ programs listed alphabetically with campus and cluster tags
  - Filter dropdowns for career cluster and campus location (lines 212-234)
  - JavaScript filtering logic is client-side and clean (lines 585-631)
  - "All Programs A-Z Directory" header is clear (line 200)
  - Campus tags show which location offers each program

- **What needs work:**
  - "Learn More" links on all program cards go to "#" except Welding (lines 245, 251, etc.)
  - Only 3 programs have detail pages: welding-clearwater.html, welding-stpete.html, welding-advanced.html
  - Other 40+ programs have no detail pages, so I can see the name and short description but nothing more
  - Filters work, but if I filter for a specific campus, some programs show "Clearwater & St. Pete" label and multiple campus links (line 492-494 for Welding), while others don't. Consistency needed.

- **Suggested fix:**
  - Create detail page stubs for all programs with: program description, length/duration, cost, job roles, salary info, counselor name, prerequisites, start dates (C1 issue, high priority)
  - Until detail pages exist, wire "Learn More" links to display fuller info inline or open a modal

### admissions.html (Admissions)
- **What works:**
  - 3-step process is very clear and easy to follow (lines 468-482)
  - Enrollment steps section is detailed (lines 502-514)
  - Admission pathways (transfer, readmission, dual enrollment, veterans) give me options (lines 530-562)
  - Testing info for CASAS, TEAS, GED is transparent (lines 576-592)
  - FAQ accordion works and covers key questions (lines 623-668)
  - Campus tour call-to-action (lines 600-610) is inviting
  - Breadcrumb (line 450) shows where I am in the site

- **What needs work:**
  - "Start Your Application" button (line 485) goes to "#"
  - "Schedule a Tour" button (lines 485, 607) goes to "#"
  - "How to Apply" section says "apply to PTC is free" and "no application fee" but doesn't link to actual application
  - FAQ answer about start dates (line 647) is vague: "Many programs have multiple start dates throughout the year" but no link to a schedule or calendar
  - Transfer students, readmission, dual enrollment, veterans links (lines 535, 543, 551, 559) all go to "#"

- **Suggested fix:**
  - Wire all CTAs to real application portal and tour scheduling system (C2 issue)
  - Add link in start dates FAQ to schedule-clearwater.html and schedule-stpete.html (already exist, just need the links)
  - Create detail pages for Transfer Credit, Readmission, Dual Enrollment, and Veterans benefits; or embed that info inline

### tuition-aid.html (Tuition & Financial Aid)
- **What works:**
  - Page exists and is accessible from main nav (lines 103-114 in index.html show tuition nav links)
  - Mentions all major aid types: FAFSA, Pell Grants, Florida Assistance Grants, scholarships, veterans benefits (based on preview)
  - "Pay Tuition" banner and button structure looks professional (lines 65-102)

- **What needs work:**
  - Could not see the actual tuition rates table in my 200-line preview; need to verify dollar amounts are populated
  - No mention of cost per program (does Welding cost different from Nursing?)
  - No payment plan details visible in preview
  - Quick link on homepage for "Tuition & Aid" (line 255 in index.html) goes to "#" instead of tuition-aid.html

- **Suggested fix:**
  - Populate rates table with real tuition costs (H6 issue)
  - Add program-specific cost breakdowns
  - Wire homepage quick link to tuition-aid.html

### welding-clearwater.html (Welding - Clearwater)
- **What works:**
  - Only program with a full detail page
  - Has program hero with image, description, stats (length, cost, etc. in stat-bar)
  - "Start Steps" section with yellow highlight bar (lines 72-127) shows how to get started

- **What needs work:**
  - Could not see full page in preview, but the structure looks like it has: program intro, video testimonials (video-grid lines 128-150), and next steps
  - Need to verify all details are filled in: cost, length, prerequisites, job placement rates, counselor contact

- **Suggested fix:**
  - Use this page as the template for all other program detail pages (e.g., Electrical, HVAC, Nursing, etc.)
  - Ensure each includes: program length, tuition cost, job placement rates, salary info, counselor name and email, how to apply

### clearwater.html & stpete.html (Campus Pages)
- **What works:**
  - Utility bar shows campus-specific phone number (lines 23 in clearwater.html: 727.538.7167)
  - Address displayed (lines 25 in clearwater.html: 6100 154th Ave N, Clearwater, FL)
  - Campus name in header (lines 49 in clearwater.html: "Clearwater Campus")
  - Links to campus-specific resources: "Canvas Login," "SIS Portal," "Class Schedule"

- **What needs work:**
  - Campus pages are only headers and navigation in my preview; I didn't see the main content (programs, hours, parking, map, news, etc.)
  - Issues tracker notes H3: "No campus hours, parking, facility info, or maps on campus pages"
  - Issues tracker notes H2: "St. Pete campus page lists programs not offered there (e.g., Machining)"
  - Class schedule link exists (schedule-clearwater.html, schedule-stpete.html) which is good

- **Suggested fix:**
  - Add campus-specific content section with hours of operation, parking info, campus map, facilities tour
  - Display only programs offered at that specific campus (not all 40+)
  - Add quick link to schedule

---

## Prior Issues Status

Based on my review, here's which issues from the 2026-04-15 tracker have been addressed:

**RESOLVED:** None of the critical prospective student issues appear to be fixed yet.

**STILL OPEN:**

- **C1 (CRITICAL):** Missing Program Details. Only Welding has detail pages. Other 40+ programs are missing cost, duration, job placement, salary, counselor info.
- **C2 (CRITICAL):** All Apply/Application CTAs link to "#". Homepage apply button, admissions apply button, campus apply buttons, utility bar apply button all broken.
- **H4 (HIGH):** No job outcomes or salary data anywhere. Programs pages don't show placement rates or starting salaries.
- **H6 (HIGH):** Tuition & Financial Aid info incomplete. Couldn't verify actual dollar amounts in rates table.
- **L1 (LOW):** Footer "Employment" link. Not seen in my preview, but mentioned in tracker.
- **L2 (LOW):** Student Portal quick link appears before students apply. Utility bar has a "Student Portal" link (line 28 in index.html) that goes to "#", but new prospects can't use it anyway.
- **L4 (LOW):** Accreditation acronyms not explained. Footer shows "COE" and "Cognia" without explanation. What do those mean to a first-time college student like me?
- **L5 (LOW):** No program reviews or student testimonials visible on programs page. Welding pages have video testimonials, but programs.html doesn't.

**PARTIAL PROGRESS:**

- **H1:** Program detail pages exist for Welding (3 pages). Zero for other programs.
- **H3:** Campus hours and parking info still missing from clearwater.html and stpete.html (only saw header in my preview).
- **Breadcrumbs:** Admissions page has breadcrumb (line 450: "Home / Admissions"), so that navigation accessibility is in place.

---

## Top 3 Issues (Ranked by Impact on My Decision to Enroll)

### 1. CRITICAL: Can't Apply (C2 Issue)
**Impact:** Makes the site feel incomplete. Every path to applying is broken. I see "Apply Now" everywhere but can't actually do it. If I can't find the application, I might think PTC isn't that serious about recruiting. I'd leave and search for another school.

**Evidence:** 
- Homepage hero CTA (line 214 in index.html): `<a href="#" class="btn btn--accent btn--lg">`
- Admissions page CTA (line 485): `<a href="#" class="btn btn--accent btn--lg">`
- Utility bar (line 29): `<a href="#"><i class="fas fa-graduation-cap"></i> Apply Now</a>`
- Quick links bar (line 245): `<a href="#" class="quick-link">`

**Priority:** Fix immediately before launch.

---

### 2. HIGH: Programs Are Incomplete (C1 Issue + H4)
**Impact:** I can find what programs exist (good!), but I can't compare them or learn what they cost/how long they take/what jobs they lead to. If I'm choosing between Welding, Electrical, and HVAC (all in Skilled Trades), I need to see details for each to decide. Right now only Welding has a detail page. I'd have to call or email the school to ask about the others, which is a friction point.

**Evidence:**
- programs.html lists 40+ programs but only Welding cards have working links (lines 492-494 for welding-clearwater.html, welding-stpete.html)
- All other program "Learn More" links go to "#" (lines 245, 251, 258, etc.)
- No detail pages exist for Electrical, HVAC, Nursing, Plumbing, etc.
- No job placement rates or salary info visible on any program page

**Priority:** Create detail pages or expand programs.html to show more info inline (cost, length, job titles, prerequisite info).

---

### 3. HIGH: Can't Find Tuition Costs (H6 Issue)
**Impact:** I need to know: can I afford this? A $3,000 program is different from a $20,000 program. The Tuition & Aid page exists but I couldn't see actual dollar amounts in my preview. If costs are truly missing, I'd think twice about applying because I wouldn't know if I can even do this financially.

**Evidence:**
- tuition-aid.html has section headers but rates table content not visible in my preview (lines 105-149)
- Homepage quick link for "Tuition & Aid" (line 255) goes to "#" instead of tuition-aid.html
- Admissions FAQ (line 653-657) mentions FAFSA and aid but no actual tuition numbers

**Priority:** Populate tuition rates table with real dollar amounts and make sure the quick link works.

---

## Overall Summary

The site is on the right track. The homepage feels professional, the admissions process is clearly explained, and the program catalog is extensive. But three critical gaps would block me from applying:

1. I can't submit an application (all apply buttons are broken)
2. I can only see full details for one program (Welding), not all 40+
3. I can't see tuition costs anywhere

If these were fixed, I'd feel confident that PTC is a real, organized school and I'd be ready to apply. Right now, the broken links and missing program details make me uncertain.

---

**Mobile Note:** The site appears responsive, but I'd recommend testing the quick links grid and hero text sizes on a 320px phone screen to ensure nothing breaks or becomes unreadable.
