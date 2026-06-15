# Prospective Student Review - 2026-06-15

Reviewer persona: Jaylen, 19, Largo FL, first-gen, on a phone, googled "trade school near me." Launch-readiness pass before the Jun 18 mockup deadline.

Pages reviewed: index.html, clearwater.html, stpete.html, programs.html, admissions.html, tuition-aid.html, practical-nursing-clearwater.html, contact.html, consumer-information.html, about.html.

## First Impressions (Homepage)

Within 5 seconds I get it. The hero says "Your Career Starts Here," the tag line says "Pinellas County's Premier Technical College," and the subtitle names healthcare, technology, and skilled trades. Two big buttons: "Explore Programs" and "Apply Today." For a kid who typed "trade school near me," that lands. I know what this place is and there are 40+ programs and 2 campuses.

Legitimacy reads as real, not a scam. The footer carries three accreditation logos (COE, Cognia, Pinellas County Schools), "since 1962," phone numbers for both campuses in the top bar, and real social links. The "Why Choose PTC" block spells out COE accreditation and even wraps the acronym in a tooltip (`<abbr title="Council on Occupational Education">`). That's the kind of thing that makes me trust it's a public school and not a for-profit ad.

What confused me / what's missing:
- The quick-links bar repeats "Apply Now" (already in the hero AND the top utility bar) and shows "Student Portal" + "Bookstore" before I've even applied. As a brand-new prospect those mean nothing to me (carryover L2). Minor, but it's clutter on a small screen.
- No dollar signs or "starts at $X" anywhere on the homepage. My #2 question after "what do you teach" is "what does it cost," and the homepage doesn't hint at the answer beyond the word "Affordable."
- No graduate outcomes. There's a "250+ Industry Partners" stat but nothing like "X% of grads get hired" or a starting-salary number. That's the single biggest thing that would push me from "looks legit" to "I should actually enroll here" (carryover H4).

## Finding a Program

This is the strongest part of the site for me. I do NOT know the exact name of what I want ("something with my hands, maybe"), and the site handles that well:

- The homepage Featured Programs grid is 8 plain-language category cards (Health Sciences, Skilled Trades & Construction, Transportation & Logistics, etc.) with a one-line description of what's inside each. I can browse by vibe, not by knowing a program code.
- Each card deep-links into `programs.html?cluster=trades`, and the filter on programs.html pre-selects that cluster on load. So tapping "Skilled Trades" actually filters the A-Z list. That works.
- programs.html itself is a real A-Z directory (~40 cards) with two dropdown filters: Career Cluster and Location. The grid looks complete this cycle (Accounting through Welding-Advanced, both campuses, dual-campus programs split into Clearwater/St. Pete links). The filter announces results to screen readers now (`#filter-status` with `role="status"`), which is good.

Issues that affect me specifically:
- **The A-Z cards still show no length or credential** (carryover L22). I'm comparing Welding vs HVAC vs Diesel on my phone. To see "how long is it" I have to tap into each program one at a time and back out. A one-line "~12 months · Certificate" on each card would let me comparison-shop without 10 round-trips. On a phone, every extra tap loses people.
- **Cluster naming drifts between the homepage and the campus pages.** Homepage calls it "Cosmetology & Barbering"; clearwater.html calls the same card "Design & Cosmetology" and puts a theater-masks icon on it (Stage Production + Interior Decorating are bundled under "Design & Cosmetology"). stpete.html calls it "Cosmetology & Culinary." If I clicked around between pages I'd think these are different things. Pick one label per cluster.
- The Programs > Explore dropdown lists "Dual Enrollment," "Distance Learning," and "ABE / GED / ESOL" as three separate links that ALL go to the same `adult-education-pathways.html` with no anchors (carryover M35). As a user that reads like three broken menu items pointing to one page.

## Understanding Costs

Big improvement here, and it mostly answers my cost question, but the answer is split in a way that's confusing.

What works:
- tuition-aid.html now shows REAL numbers, not a "contact us." Career Technical Certificate is **$2.92/hour resident, $11.71/hour nonresident**, and Adult General Ed is $45/term. That's exactly what I needed to see, and it says rates are the same at both campuses. The fee list (application, ID, parking, books, lab, etc.) is honest and complete.
- FAFSA section is genuinely useful: what documents I need, the two campus Federal School Codes (005605 Clearwater / 013917 St. Pete), and a "How Financial Aid Works at PTC" 4-step explainer aimed at people new to aid. As a first-gen student who's never done this, that's reassuring.
- Scholarships, Bright Futures, Pell, Vocational Rehab, Youth Connect, and Veterans are all spelled out. Net Price Calculator links per campus.

What needs work:
- **I can't tell what MY program actually costs.** Tuition is "$2.92/hour," but nowhere on tuition-aid.html does it say how many hours my program is, so I can't multiply it out. The hours live on the individual program pages (Practical Nursing = 1,350 hours). Nobody connects the two. A 19-year-old does not naturally think "1,350 × $2.92 = ~$3,942 plus fees." Either show an estimated total on each program page or put a worked example on the tuition page ("A 1,200-hour certificate is about $3,500 in tuition before aid").
- **No tuition figure is shown inline on any program page** (carryover H6). The nursing page has a "Financial Aid & Costs" banner and a "Program Costs" PDF (good, that PDF is real and links to clearwater.myptc.edu), but I have to download a PDF on my phone to see the actual cost. PDFs on a phone are a friction point.
- The Tuition & Aid nav dropdown lists a "Refund Policy" item pointing to `tuition-aid.html#faq` on most pages, but the tuition page's own dropdown points to `#refund`. One of those anchors is wrong, so "Refund Policy" may jump to nothing depending on which page I'm on.

## Application Flow

The path to applying is obvious and consistent, which is the most important thing for conversion. Every page I checked has a working "Apply" route to the real portal (`https://apply.myptc.edu/`): the hero, the utility bar, the quick links, the CTA band, and the campus "Start an Application" buttons all go there. The C2/C7 dead-`#` apply buttons from older reviews are gone on these pages. Good.

admissions.html is clear and well-sequenced for someone who's never done this:
- A prominent green "Apply Online" banner with a "Start your application" button at the top.
- An "Application Checklist" of plain-language cards (Browse programs, Talk to a counselor, Apply for financial aid, Complete placement testing, Schedule a shadow visit, Pay fees, Notify outside funding agency). Each has a real link.
- It tells me the real eligibility ("at least 16 and not currently enrolled in high school") and that "most programs start five times per school year: August, October, January, March/April, and June." That actually answers "when can I start," which earlier reviews said was vague (M9). This reads much better now.

Issues:
- **The homepage and main-nav Apply path is great, but the admissions page bottom CTA splits into "Apply at Clearwater" / "Apply at St. Petersburg" which go to campus admissions HTML pages, not the application.** That's a defensible design (campus-specific steps), but a confused first-gen kid who scrolled to the bottom expecting one "Apply" button now has to first know which campus their program is at. Combined with the cost problem above, picking a campus is a recurring tax on me.
- **"Apply Now" appears up to four times on a single page** (utility bar, hero, quick links, CTA band on the homepage). It's never broken, but the repetition makes it slightly harder to know if there's one real front door. One strong primary CTA plus the utility-bar link would be cleaner.

## Mobile Considerations

I'm on a phone, so this matters a lot.

- Mobile nav script is present on all 10 pages (`<script src="script.js">` before `</body>`), and the hamburger has `aria-expanded`. The C8 "no script.js" launch-blocker from last review is NOT present on any page in this batch. Good.
- Hero titles use `clamp()` on admissions.html and the nursing page, so headings scale down on small screens. tuition-aid.html and contact.html hard-code `.page-hero__title` at 2.5rem but add a `@media (max-width: 600px)` override to 1.85rem, so they're covered too.
- programs.html grid is `repeat(auto-fill, minmax(300px, 1fr))`, which collapses to one column on a phone. The two filter dropdowns are full-width-ish and tappable. Workable.
- tuition rates table is wrapped in `.rates-table-wrapper { overflow-x: auto }`, so a wide table scrolls instead of breaking the layout. Nice.

Mobile concerns to flag:
- **The campus-page utility bar is dense on mobile.** clearwater.html / stpete.html top bar packs phone, address, Canvas, SIS/Focus, Main Site, the other campus, AND a search button into one row. On a 360px screen that's a lot of tiny tap targets crammed together. Acronyms like "SIS / Focus" also mean nothing to a prospect (I haven't enrolled). This is a current-student bar shown to prospects.
- **The campus search button is still `href="#"`** (noted as by-design pending the sitewide search decision). On a phone it's a green button that looks tappable and does nothing. If the decision isn't made by launch, I'd hide it rather than ship a dead button, because a no-op button reads as "broken site" to a skeptical first-gen visitor.
- The nursing page video thumbnails hot-link `img.youtube.com/.../maxresdefault.jpg` with an inline `onerror` fallback. On a slow phone connection that's an external dependency; if it fails the fallback may not survive the CMS (carryover L23). Not a blocker for me as a user, just fragile.

## Page-by-Page Notes

### index.html
- What works: Instant clarity on what PTC is; working Apply everywhere; 8 browse-by-category cards; strong accreditation/legitimacy signals; "Why PTC" explains COE in plain words.
- What needs work: No cost hint; no graduate outcomes/salary; quick-links repeat Apply and surface Student Portal/Bookstore to people who haven't applied.
- Suggested fix: Add one outcome stat to the hero or Why-PTC block (e.g., a sourced placement or salary figure once H4's sourcing rule is set). Trim quick-links to prospect-relevant items (Apply, Programs, Tuition & Aid, Visit, Contact).

### clearwater.html / stpete.html
- What works: The previously-dead `href="#"` nav, quick-link, and featured-program placeholders are now wired to real targets and they go somewhere sensible (About Campus, Admissions, Financial Aid -> clearwater-tuition.html / stpete-tuition.html, Bookstore, Visit -> campus-maps anchor, Programs filtered by campus). Verified, not re-flagging. Campus program cards correctly differ per campus.
- What needs work: (1) Utility-bar search button is still a dead `href="#"` styled as a button. (2) "Tech Support" and "Advisory Committees" in the nav dropdowns still point to `coming-soon.html`. As a prospect I don't need those, but a coming-soon page is a credibility ding on a launch site. (3) Cluster card labels/icons drift from the homepage and from each other.
- Suggested fix: Hide the search button until the search decision lands; hide or repoint the coming-soon dropdown items; reconcile cluster names/icons sitewide.

### programs.html
- What works: Real A-Z directory; cluster + location filters; `?cluster=` and `?campus=` deep-links pre-select on load; screen-reader result announcements; grid confirmed complete this cycle.
- What needs work: Cards show no length/credential, so I can't comparison-shop without tapping into each. The Explore dropdown's three labels pointing to one anchorless page (M35).
- Suggested fix: Add a small "~X months · Credential" line per card; point the three Explore labels at in-page anchors or collapse them.

### admissions.html
- What works: Prominent Apply banner; plain-language checklist; real eligibility (16+, not in HS) and real start months; counselor and FAFSA cross-links.
- What needs work: Bottom CTA forces a campus choice before applying.
- Suggested fix: Add a single "Start your application" button alongside the two campus buttons so undecided prospects aren't stuck.

### tuition-aid.html
- What works: Real per-hour tuition rates, both School Codes, full fee list, FAFSA checklist, "How Aid Works" explainer, scholarships, Net Price Calculator. This genuinely answers "what does it cost and how do I pay."
- What needs work: No way for me to compute MY program's total (hours live elsewhere); "Refund Policy" anchor mismatch (`#faq` vs `#refund`).
- Suggested fix: Add a worked tuition example tying $/hour to typical program hours; fix the refund anchor to one canonical id sitewide.

### practical-nursing-clearwater.html
- What works: This is the model program page for me. Stat bar up top (Format, Length 1,350 hours ~15 months, Credential LPN & CNA, Location, Hybrid available), trust strip (State Board approved, Top Ranked LPN, HCA clinical partner), "New to PTC? Start Here" steps, full course sequence in accordions, admission requirements, articulation to RN, a real Program Costs PDF, student videos, named counselor with email + phone, and info-session details. A prospect can see what it is, what they'll earn, how long, and how to start.
- What needs work: (1) **C9 still open:** the named counselor is "Merritt Scott / scottme@pcsb.org / x2032," whom internal records tie to Phlebotomy, not Nursing. If that's wrong, I email the wrong person on the flagship health page. (2) **M42 still open:** "Upcoming Classes" shows "PN Traditional: TBD / Hybrid: TBD" (lines ~430-431), which reads like "no classes coming." (3) No NCLEX-PN pass rate or placement rate shown, even on the one page where outcomes would most reassure me (H4).
- Suggested fix: Verify/correct the counselor before any external showing; replace TBD/TBD with a real next start date or "Contact your counselor for the next start date"; add the NCLEX-PN pass rate once the sitewide outcome-sourcing rule exists.

### contact.html
- What works: Clean two-campus split with addresses, phones, fax, "Contact & Visit Info" and "Get Directions" per campus. Helps me figure out which campus to deal with.
- What needs work: The page has CSS for a contact form and an hours table, but the rendered page only shows the two campus cards plus a CTA. There's no general "ask a question" form or admissions email for someone who doesn't know which campus yet. As an undecided prospect, I have to already know my campus to get anywhere.
- Suggested fix: Add a simple general-inquiry form or a single admissions email, or a "Not sure which campus? Start here" link to Programs.

### consumer-information.html
- What works: Exists and is linked sitewide (footer Privacy/Accessibility/Consumer Info), which is a legitimacy signal that this is a real regulated institution.
- What needs work: No gainful-employment / completion / placement / salary outcome data here either, so there is no single place on the entire site where I can see "do people who finish actually get jobs." This is where a skeptical first-gen student goes to check it's not a scam.
- Suggested fix: Surface program outcome data (or a link to the official disclosures) once H4's sourcing standard is set.

### about.html
- What works: Strong trust page. COE + Cognia accreditation explained in plain language, each campus individually COE-accredited, "since 1962," graduation photos, mission/values. This is exactly the reassurance a first-gen student needs that PTC is a real public college.
- What needs work: Accreditation section describes documents but the about.html accreditation cards are still doc-less (carryover C4/M8 at institutional level); no program outcomes.
- Suggested fix: Link the COE compliance docs from the about.html accreditation cards; add outcomes once sourced.

## Top 3 Issues (ranked by impact on my decision to enroll)

1. **I can't figure out what my program will actually cost (H6).** Tuition is shown as $2.92/hour, program length is shown on a different page, and nobody multiplies it out or shows a total. Cost is my #2 decision factor and the site makes me do math across two pages or download a PDF on my phone. Fix: show an estimated total (or a worked example) that ties $/hour to program hours, on the program page.

2. **No graduate outcomes anywhere (H4).** Not on the homepage, not on the flagship nursing page, not on consumer-information. For a first-gen kid worried this might be a scam, "X% of grads get hired" or a real starting salary is the thing that converts "looks legit" into "I'll enroll." Even one sourced number would help. Fix: set the sitewide sourcing rule and add at least a pass-rate/placement/salary figure to flagship program pages.

3. **C9 counselor misattribution on the Practical Nursing page (launch-blocker).** The named contact (Merritt Scott, scottme@pcsb.org) is tied internally to Phlebotomy, not Nursing. Sending prospects to the wrong person on the highest-traffic health page is worse than no name. Fix: verify and correct before any external showing. (Runner-up, also enrollment-affecting: M42 "Upcoming Classes: TBD / TBD" reads as "no classes," and the dead `href="#"` campus search button reads as a broken site.)

Verified-fixed since last review (not re-flagged): mobile-nav script present on all 10 pages (C8 clear here); programs.html screen-reader filter announcements present; em-dash page titles swept to "|"; programs grid complete; clearwater/stpete dead-`#` placeholders wired to sensible targets. The campus search button `href="#"` is acknowledged as by-design pending the sitewide search decision.
