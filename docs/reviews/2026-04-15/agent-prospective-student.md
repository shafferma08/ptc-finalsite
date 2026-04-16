# Prospective Student Review - 2026-04-15
**Reviewer Persona:** Jaylen, 19, first-generation student, browsing on phone, interested in skilled trades but unsure which path

---

## First Impressions (Homepage)

**What I see when I land:** The homepage immediately tells me this is a legit school. There's a graduation photo right at the top, which feels real. The tagline "Opportunity Starts Here" is clear and speaks to me—I want opportunity.

**Can I tell what the school offers in 5 seconds?** Pretty much. I see 40+ career programs mentioned, and there's a grid of categories: Health Sciences, IT, Skilled Trades, Culinary, Cosmetology, Transportation. That's helpful. My eye goes straight to "Skilled Trades & Construction" which is what I searched for.

**Accreditation check:** I see "COE Accredited" and "Pinellas County Schools" at the bottom. The accreditation logos look official. This doesn't feel like a scam. That's important to me.

**Mobile experience (so far):** On my phone, the hero section looks good. The text is readable, the buttons are big enough to tap. The hero stats (40+ programs, 50+ partners, 2 campuses) are reassuring.

---

## Finding a Program

**Programs page (programs.html):** This is solid. I can filter by both Career Cluster and Location. That's exactly what I need.

When I filter for "Skilled Trades & Construction" at "Clearwater Campus," I get a clean list of programs. I can see:
- Welding Technology (both campuses)
- Electricity (both campuses)
- HVAC/R 1 (both campuses)
- Cabinetmaking (Clearwater only)
- Building Trades (St. Pete only)
- Plumbing (St. Pete only)

**What works:**
- The filter system is intuitive and works on mobile (dropdowns collapse nicely)
- Each program card shows which campus(es) it's at with a colored tag
- Program cards are short and not overwhelming
- There's a "Learn More" link on each card (though it goes nowhere in the mockup)
- The call-out about short courses at the top is good—I didn't know PTC offered evening classes

**What needs work:**
- Some program descriptions are vague. "Learn SMAW, GMAW, FCAW, and GTAW welding processes..." sounds technical. I don't know those acronyms. What will I actually be doing? What jobs pay how much?
- No indication of how long programs take or when they start
- No price information on this page
- The "All Programs A-Z" title is confusing—I thought I was looking at a filtered view, but it says "A-Z Directory." Why show me all programs if I selected a filter?

**Welding Clearwater page detail (welding-clearwater.html):** I opened one program to explore deeper. The page has:
- A split hero with campus photo and key info
- Stats about the program (though the mockup doesn't show all of them—I see "Program Length: [unavailable]" which is a red flag)
- A yellow callout bar with "Start Steps" and buttons for "Get Admitted" and "Apply Now"

**Critical issue:** The program length, cost, start dates, and most details are marked unavailable. This is a dealbreaker for me. I need to know: How long? How much? When can I start? If I can't find that here, I'll leave and look elsewhere.

---

## Understanding Costs

**My hunt for tuition:** I go to the homepage, click "Tuition & Aid" dropdown. I see:
- Tuition & Fee Rates
- Pay Tuition
- FAFSA & Eligibility
- Federal & State Funding
- Scholarships
- Veterans Benefits
- Net Price Calculator
- Refund Policy

**Good:** This looks complete. There are clearly links for financial aid.

**Problem:** In the mockup, these links are placeholders (#). I can't actually access the tuition rates or the Net Price Calculator. This is a major friction point. If I can't find pricing quickly, I assume the school is hiding costs or isn't transparent.

**Homepage 'Why PTC' section:** I do see "Affordable Tuition" listed as one of the four key features, with text saying "Financial aid, scholarships, and payment plans available to all students." This is good messaging for me—it tells me I'm not alone in needing help paying.

**Admissions page:** There's a section on "Arrange Financial Aid" as step 2 in the enrollment process, which mentions FAFSA and "meet with the financial aid office." But no numbers. No examples. If I came from a low-income family and don't know what FAFSA means, this page doesn't help me much.

---

## Application Flow

**Clarity on how to apply:** The homepage has:
- A hero button "Apply Today"
- Quick links section with "Apply Now"
- A utility bar button "Apply Now"
- Campus pages with "Start an Application"
- Admissions page with "Start Your Application"

**Assessment:** There are tons of CTA buttons, which is good—the school clearly wants me to apply. But they all go to "#" (placeholders). So I know the intention is there, but the actual application isn't wired up yet in the mockup.

**Admissions page flow (admissions.html):** This is well-structured:
1. Choose your program
2. Submit your application
3. Meet with a counselor

Then it explains:
- Complete required testing
- Arrange financial aid
- Register for classes

**What works:** The admissions page is jargon-light and friendly. It says "there is no application fee" (huge relief). It mentions a high school diploma is needed but also that PTC offers GED prep if I don't have one.

**What's missing:** I don't see a step that says "Take a campus tour" or "Talk to an admissions counselor first." As a first-gen student, I'm nervous about the unknown. I'd feel better if I could talk to someone or visit before formally applying.

**Campus pages:** Both Clearwater and St. Petersburg pages have quick-access buttons for Admissions and Financial Aid, which is good. They both have "Apply Now" CTAs. The campus-specific info (address, phone) is front and center, which is helpful.

---

## Mobile Considerations

**Overall mobile performance:**
- Header is clean and uses a hamburger menu (good)
- Quick links collapse into a single column on small screens (good)
- Program cards stack nicely
- Text is readable (Roboto is a good choice)
- Button sizes are tappable (at least 44px high)

**Issues I notice:**
- The "View All Programs" button on the homepage is a long link. On mobile, it might need to be bigger or centered better
- The Programs page filter dropdowns are functional but feel cramped on a phone. They're readable but could benefit from more padding
- Footer navigation is split into three columns; on mobile, these should stack and not feel crowded
- The utility bar at the very top has small text and many links. On a phone, it's hard to scan. I'd miss the "Apply Now" button in there if I wasn't looking for it

**No obvious layout-breaking issues,** but the experience could feel more "mobile-native" rather than "desktop shrunk down."

---

## Page-by-Page Notes

### Homepage (index.html)

**What works:**
- Strong hero with graduation imagery and clear CTA
- Stats (40+ programs, 50+ partners, 2 campuses) provide confidence
- "Why PTC" section answers my main fears: Is this real? Are the instructors good? Will I get hired? Will I afford it?
- Accreditation logos at the bottom are reassuring
- Campus cards clearly show which programs are at each location
- News/events section is social proof ("Teacher of the Year," "National Signing Day")
- Employer engagement hook is present (good for the school to attract employers)

**What needs work:**
- Quick links are all prospect-focused (Apply, Programs, Tuition, Visit Campus, Student Portal, Contact). The Student Portal link is confusing when I'm not a student yet. This should probably be Current Students only, or the quick link should say something different for prospects
- Homepage doesn't emphasize job outcomes or salary info. I want to know: If I graduate, what jobs can I get? What will I earn?
- The "Featured Programs" section shows only 6 categories. If I'm interested in a program not represented (e.g., ABE/GED, Dual Enrollment), I have to go dig for it

### Programs (programs.html)

**What works:**
- Filters work well (Career Cluster + Location)
- Programs are listed A-Z with clear campus badges
- Callout about short courses is visible
- Card layout is clean and scannable on mobile

**What needs work:**
- Program length, cost, start dates all say "[unavailable]" on program cards. This is critical info
- No way to sort by: how quick the program is, how much it costs, job placement rate
- No program reviews or student testimonials
- No links to detailed program pages from the grid (except "Learn More")
- Some acronyms in descriptions (CASAS, TEAS) aren't explained

### Admissions (admissions.html)

**What works:**
- "No application fee" is clearly stated
- The three-step application process is clear
- Info cards for different pathways (transfer, readmission, dual enrollment, veterans) show the school accepts different student types
- Testing & assessment section explains CASAS, TEAS, and ABE/GED
- FAQ section is comprehensive
- Campus tour CTA is prominent

**What needs work:**
- No indication of how long the application takes
- No forms or links to actually start the application (all are "#")
- The readmission and transfer credit sections are brief and feel like afterthoughts
- No mention of what documents I need to bring or have ready
- No timeline: "Apply today, start in X days" or "Rolling admissions means you can start any time"

### Clearwater Campus (clearwater.html)

**What works:**
- Clear that this is the Clearwater-specific page
- Program list is filtered to Clearwater offerings
- Quick links are campus-relevant (Admissions, Financial Aid, Bookstore, Portal, Consumer Info)
- Footer includes "Class Schedule" link, which suggests there are class schedules I can browse
- Contact info (address + phone) is prominent

**What needs work:**
- The featured programs grid only shows 6 categories. Which Clearwater-specific programs aren't shown?
- No way to see the actual class schedule from this page (link goes to "#")
- No information about campus facilities (where will I be learning? What equipment do they have?)
- News section shows a Diesel Technician event at Clearwater, which is good. But it also shows a "St. Pete instructor" in the third item, which feels out of place on a campus page

### St. Petersburg Campus (stpete.html)

**What works:**
- Same structure as Clearwater, which is consistent
- Program list is appropriately different from Clearwater (e.g., Culinary, Cosmetology more prominent)
- Campus-specific contact info and footer

**What needs work:**
- Same issues as Clearwater: no schedule, no facility info, limited program visibility

### Welding Technology - Clearwater (welding-clearwater.html)

**What works:**
- Hero section clearly states what the program is
- The yellow "Start Steps" bar with CTA buttons is eye-catching and actionable
- Stat bar mentions credentials and program format (even though specific data is unavailable)

**What critically needs work:**
- Program Length: [unavailable]
- Cost: [unavailable]
- Start Dates: [unavailable]
- Prerequisites: [unavailable]
- Job Placement Rate: [unavailable]
- Salary Information: [unavailable]

This page is a skeleton. Without these details, I would leave and call the school directly or email. The page isn't complete enough to support decision-making.

### Short Courses (urgent-fixes/short-courses-simple.html)

**What works:**
- Simple, no-frills design (appropriate for a quick lookup)
- Campus callout at the top (St. Pete vs. Clearwater)
- Jump nav allows quick jumping between sections
- Courses are listed with campus location badges

**What needs work:**
- Design is much simpler than the main site (looks like a legacy page)
- No pricing for short courses
- Links to enroll (www.enrole.com) go off-site, which might be confusing
- Course descriptions are minimal

### Summer Camps (urgent-fixes/summer-camps-mockup.html)

**What works:**
- Colorful design stands out from the rest of the site (appropriate for a youth-focused page)
- Alert banner at top is visible and uses summer colors

**What needs work:**
- Design is a proof-of-concept, not a finished page
- Not clear what camps are actually available
- No pricing or age ranges listed in what I can see

---

## Top 3 Issues (Ranked by Impact on My Decision to Enroll)

### 1. **CRITICAL: Missing Program Details**
**Issue:** I can't find program length, cost, start dates, job placement rates, or salary info anywhere on the site. The welding program page says "[unavailable]" for all of these.

**Impact on me:** This is a dealbreaker. If I can't find costs and start dates on your website, I'm calling a competitor's school (or Googling "trade schools near me" again). I need to know: How long will I be in school? How much will it cost? When can I start? Without answers, I'm leaving.

**Suggested fix:**
- Populate every program page with: program length, tuition cost, financial aid eligibility, next start date, job placement rate, average salary of graduates
- Add a cost/timeline comparison table on the Programs page so I can compare options quickly
- Show a sample payment plan (e.g., "$X per month with financial aid")

---

### 2. **MAJOR: Unclear Application & Enrollment Path**
**Issue:** The site has many "Apply Now" buttons, but none of them work. I don't know where to actually start the application, how long it takes, or what documents I need.

**Impact on me:** As a first-gen student, I'm already nervous about the process. When I click "Apply Now" and hit a dead link or a form that might not be the real thing, I lose confidence. I'd rather call the admissions office than risk applying online.

**Suggested fix:**
- Have at least one "Apply Now" link that's live and functional
- Create a simple checklist page: "Before you apply, gather these documents..."
- Add a timeline: "Apply today, meet with counselor by Thursday, start classes next month"
- Show what the application looks like (sample screen or timeline)

---

### 3. **HIGH: No Job Outcomes or Salary Data**
**Issue:** I see testimonials about skilled trades being high-demand, but I don't see proof. No job placement rates, no salary ranges, no "Meet our graduates" stories.

**Impact on me:** I'm investing time and money. I want to know: Will I actually get hired? How much will I make? The homepage says "graduates don't just earn certificates—they launch careers," but that's marketing speak. Show me numbers.

**Suggested fix:**
- Add job placement rates to each program (e.g., "92% of Welding graduates employed within 6 months")
- Show salary ranges (e.g., "Starting salary: $45K–$55K; 5-year avg: $62K")
- Add student testimonials with names, photos, and their current jobs ("I graduated in 2024 and now work at XYZ as a...") 
- Link to employer partners' job postings

---

## Secondary Issues (Worth Fixing)

- **Footer "Employment" link** is ambiguous. Does it mean I can get a job? Or is this for employers? Label it more clearly (e.g., "Job Board" or "Employer Resources")
- **Student Portal quick link** on the homepage confuses me. I'm not a student yet. Maybe this should only appear after I apply, or say "Current Students Only"
- **Navigation inconsistency:** Main site dropdown says "Admissions & Aid" but the programs page header says "Admissions." Pick one naming convention
- **Accreditation acronyms** (COE, Cognia) aren't explained. What do they mean? Add hover tooltips or a brief explanation

---

## What's Working Well (Keep This!)

- **Two-campus system is clear.** I can easily see which campus has which programs. Both Clearwater and St. Pete pages let me explore their unique offerings
- **No application fee.** This is clearly stated and removes a barrier for me
- **Friendly, jargon-light language.** The site doesn't talk down to me, but it also doesn't assume I know what "OCP" or "COE" means
- **Mobile experience is decent.** I can browse and click on my phone without things breaking
- **Accreditation is visible.** The logos at the bottom give me confidence this is a real, accredited school
- **News/events section is active.** I see recent events (April 2026, March 2026), which tells me the school is current and thriving

---

## Summary

**Would I apply based on this website?** Honestly, not yet. I'd call the school first because I can't find the information I need (cost, timeline, job outcomes). If the staff is helpful and answers my questions, I might apply. But the website alone doesn't give me enough confidence.

**What I need to see before I apply:**
1. Specific costs and financial aid estimates
2. Actual start dates and program length
3. Job placement rates and salary data
4. Real student testimonials
5. A working application form

**The good news:** The site looks professional and trustworthy. I don't think it's a scam. The structure is logical. If the missing information gets added, this could be a great resource for prospective students like me.

---

**Date of Review:** April 15, 2026  
**Device:** Mobile (iPhone)  
**Time Spent on Site:** ~15 minutes  
**Likelihood of Enrolling (Current):** 30% — Would need to call and talk to a counselor to feel confident
