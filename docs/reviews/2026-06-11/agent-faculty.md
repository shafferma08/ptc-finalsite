# Faculty Review - 2026-06-11

Reviewer persona: Robert, CNC Machining instructor, St. Petersburg campus. Lens: can I find program details, forms, schedules, and counselor contacts to point students to, and is my program (and my colleagues' programs) represented accurately? Pages reviewed: programs.html, practical-nursing-clearwater.html, welding-stpete.html, apprenticeships-clearwater.html, adult-education-pathways.html, workforce-continuing-education.html, clearwater-contact.html.

## Program Representation

Big picture: this is a major step up from the last cycle. The program template (nursing and welding) is exactly what I have been asking for. Program codes, hours, course sequence with per-course hour badges, requirements, credentials, and a named counselor are all present. That is C1 and H1 essentially answered on the template-built pages. When I send a student to the nursing or welding page now, they get the whole picture instead of a stub.

Two accuracy problems I have to raise, both on programs that affect what I tell students:

1. **The St. Pete welding schedule is internally flagged as wrong and still published.** welding-stpete.html (lines 933-944) carries a developer comment saying the official 2026-27 St. Pete full-time schedule PDF lists Welding as EVENING ONLY, Mon-Fri 4:00-9:00 PM, but the visible card advertises BOTH a Day section (Mon-Fri 7:00 AM-12:15 PM) AND an Evening section (Mon-Thu 4:00-9:00 PM). The comment says "Confirm with Cheri Ashwood before updating live content." This is the single most dangerous thing on the welding page for me. Welding is right next door to my shop and I refer students between trades constantly. If a working adult reads "Day section available" and rearranges their job around a 7 AM class that does not exist, that is a real problem and it lands on the counselor and the instructor. A published schedule must be either correct or absent, never a guess sitting under a "do not silently change" warning.

2. **The nursing counselor assignment looks misattributed.** practical-nursing-clearwater.html (lines 599-610) names **Merritt Scott** as the Practical Nursing School Counselor (scottme@pcsb.org, x2032). From everything I know around the building, Merritt Scott is tied to the **Phlebotomy** program, not Practical Nursing. The campus counselors index (clearwater-counselors.html) lists counselors with no program assignment, so whoever built the nursing page picked Scott as the PN counselor as an editorial choice rather than from a verbatim source. If a prospective nursing student emails the wrong counselor, they get bounced, and that is exactly the "students calling me because the site sent them wrong" problem this redesign is supposed to kill. Verify the actual PN counselor before launch.

What is missing but acceptable: no machining detail page was in this batch, so I cannot yet confirm my own program is represented. The programs.html card for "Machining Technologies" (line 476) reads correctly ("manual and CNC mills, lathes, and grinders to manufacture precision metal parts"), but its Learn More links to machining-technologies-clearwater.html, which I could not confirm exists as a built page. I want my program on the template like nursing and welding got.

## Directing Students

This is the part I care about most day to day, and it mostly works well.

- **Sharing a specific program link is easy.** programs.html is a clean A-Z grid with a cluster + campus filter. The trades cluster pulls up Welding, Machining, Electricity, HVAC, etc. cleanly. I can tell a student "go to Programs, filter Trades, click Welding" and that instruction holds.
- **The jump nav + "New to PTC? Start Here" strip on the template pages is genuinely useful.** On the nursing page I can say "scroll to Course Sequence" or "click Talk to a Counselor" and it lands. The welding page has the same pattern.
- **Forms and PDFs:** the nursing page does this right with four real PDF cards (Program Flyer, Program Costs, Application Information Kit, General Information & FAQ), all pointing at live Finalsite/PCSB resource URLs. That is what I want to be able to hand a student. The welding page does NOT: its two PDF cards (Program Flyer, Program Costs) are `href="#"` with "PDF coming soon" (welding-stpete.html lines 1029-1048). So for welding I still cannot point a student at a flyer, which is the document students ask me for most.
- **Schedules:** Current Students dropdown on campus pages reliably links to schedule-clearwater.html / schedule-stpete.html, and clearwater-contact.html surfaces the class schedule as its own card. Good.

One nav inconsistency that will trip up my verbal directions: the main-site "Programs" dropdown "Explore" column. On programs.html and adult-education-pathways.html the second item reads "Workforce & Continuing Education," but on workforce-continuing-education.html the same slot reads "Evening & Part-Time," and the page's own H1 is "Short Courses & Evening Classes." Three different names for one destination (programs.html line 95, workforce page line 320, page title). When I tell a student "click Workforce and Continuing Education," they may be staring at a link that says "Evening & Part-Time." Pick one label and use it everywhere.

## Campus Accuracy

Addresses and phones are consistent and correct across the pages I checked:
- Clearwater: 6100 154th Ave N, Clearwater, FL 33760, 727.538.7167 (contact page, footer, utility bar all agree).
- St. Pete: 901 34th St S, St. Petersburg, FL 33711, 727.893.2500.
- clearwater-contact.html adds the fax (727) 538-7203 and Student Services hours are surfaced on the counselors page (M-Th 6:45 am-6:30 pm, Fri 6:45 am-2:30 pm). That covers H3 for Clearwater contact info.

Two campus-detail gaps:
- **Parking, hours, and accessibility are promised but not present.** clearwater-contact.html's map callout says "Detailed driving directions, parking information, and accessibility details," but all of it lives behind campus-maps.html#clearwater, which I did not see built. The page meta description even promises "parking, and accessibility" on this page. If a student asks me where to park for an evening class, the site does not answer it yet.
- **clearwater-contact.html Campus Info dropdown has three dead "coming-soon" links** (Employer Partnerships, Post a Job for Students, Advisory Committees, lines 206-208). As a faculty member I sit on an advisory committee, so an "Advisory Committees" link that goes to coming-soon.html is a visible hole.

## Faculty Resources

This remains the weakest area for me, and it has not moved since prior cycles.

- **No faculty / staff-facing area at all.** There is no PD link, no faculty portal, no "for instructors" anything on any page in this set. The Current Students dropdown is well wired (Canvas, Focus, schedules, bookstore, records). There is no equivalent for staff. I have to get to Canvas through a student-labeled menu.
- **Staff directory exists but I could not confirm it is built.** Every campus page links to clearwater-staff-directory.html / stpete-staff-directory.html (Campus Info dropdown, footer, and the contact page's "Looking for someone specific?" card). That is the right plumbing and it addresses old issue M7 if the target page actually renders. I could not verify the directory page itself in this batch, so this is "wired, pending target."
- **For Employers** is linked from the program/apprenticeship Campus Info dropdowns to employers.html, but clearwater-contact.html instead routes the employer items to coming-soon.html. Inconsistent, and employer engagement is something faculty drive through advisory committees.

Net: a current student is now well served by this site. A faculty member is not. There is still nowhere on this site that exists for me.

## Page-by-Page Notes

### programs.html
- What works: Clean A-Z grid, working cluster + campus filter with URL-param support (`?cluster=trades`), good campus tags, no-results message. 41 cards. Easy to give verbal directions against.
- What needs work: "Machining Technologies" card links to a detail page I could not confirm is built. Dropdown "Explore" label "Workforce & Continuing Education" does not match the workforce page's own naming. The top callout offers "Clearwater Apprenticeships" and "St. Petersburg Apprenticeships" as separate buttons, but the main nav's "Apprenticeships" item links to apprenticeships-workforce.html, a third destination, so apprenticeships have three different entry points with different names.
- Suggested fix: Confirm/build machining-technologies-clearwater.html on the template. Standardize the short-course/workforce label and the apprenticeship entry point sitewide.

### practical-nursing-clearwater.html
- What works: Best page in the batch. Program code H170607, 1,350 hours, full course sequence with hour badges and PRN course numbers, requirements, articulation to RN, distance-ed detail, real PDF forms, named counselor with email + extension, info-session Zoom details, articulation agreements. This is the model.
- What needs work: Counselor likely misattributed (Merritt Scott reads as Phlebotomy staff, not PN). "Top Ranked LPN Program" appears in the trust strip and credentials without a visible source/year on the page; as a verbatim-from-live claim it is probably fine, but confirm it is live-sourced. "Upcoming Classes" shows TBD/TBD, which is honest but unhelpful to a student trying to plan.
- Suggested fix: Verify the real PN counselor before launch and correct the card. Confirm "Top Ranked LPN" is verbatim from live (it cites practicalnursing.org, so likely yes). Fill class dates or replace TBD with "Contact your counselor for the next start date."

### welding-stpete.html
- What works: Strong template page. Program code J400400, 1,050 hours, full PMT course sequence with hours, AWS accredited testing facility called out, BLS salary with year, counselor Cheri Ashwood with correct email/extension, sister-program callout to Advanced Welding, requirements.
- What needs work: (1) Schedule is internally flagged as contradicting the official PDF and still published as Day + Evening. (2) Both program PDFs are `href="#"` placeholders, so no flyer/cost sheet to share. (3) Footer "Academic Calendar" link points to coming-soon.html.
- Suggested fix: Resolve the schedule with Cheri Ashwood and publish only the confirmed sections (do not advertise a Day section that does not exist). Wire the St. Pete welding flyer and cost PDF, or hide the cards until they exist rather than showing dead "coming soon" cards.

### apprenticeships-clearwater.html
- What works: Clear two-tier structure (PTC-sponsored cards that link to full program pages, plus a community-sponsored list). "How Apprenticeships Work" 3-step explainer is good for students who do not know what an apprenticeship is. The Tampa Bay Machining Apprenticeship is listed, which is directly relevant to my students moving from the machining program into paid training.
- What needs work: Community apprenticeships (HVAC, two Electrician sponsors, Tampa Bay Machining, Sprinkler Fitter) give only "Contact the sponsoring organization to enroll" with no phone, email, or URL. The build comment explains live has no external sponsor URLs, which is a fair constraint, but as written I cannot actually tell a machining student HOW to reach Tampa Bay Machining. The two PTC-sponsored cards link to automotive-apprenticeship-clearwater.html and facilities-maintenance-apprenticeship-clearwater.html, which I could not confirm are built.
- Suggested fix: Add at least a sponsor phone or a "call the campus and ask for apprenticeship coordinator" line to the community items so they are actionable. Confirm the two PTC-sponsored detail pages exist.

### adult-education-pathways.html
- What works: Clean routing hub for Dual Enrollment, Distance Learning, ABE/GED, ESOL, and student orgs, each with per-campus links. Good for steering a student who is not ready for a full-time program.
- What needs work: Every card links to spoke pages (dual-enrollment-clearwater.html, distance-learning-clearwater.html, abe-ged-clearwater.html, esol-clearwater.html, etc.) that I could not confirm are built. If those are stubs, this hub becomes a wall of dead ends. The Programs dropdown lists this same page three times (Dual Enrollment, Distance Learning, ABE/GED/ESOL all point here), which is fine as a hub but means the dropdown over-promises three distinct destinations.
- Suggested fix: Confirm the eight campus spoke pages render before launch, or collapse cards to single combined pages until the spokes exist.

### workforce-continuing-education.html
- What works: Practical layout, campus badge per course, Enrole registration links, a clear "these do NOT articulate or grant credit" warning (important so a student does not think a short course counts toward a program), and an honest "no sessions currently scheduled" treatment for dormant courses. The Clearwater evening welding class is here, which I get asked about.
- What needs work: Page H1 ("Short Courses & Evening Classes") does not match how it is linked elsewhere ("Workforce & Continuing Education" / "Evening & Part-Time"). The Clearwater evening welding card links out to the live clearwater.myptc.edu page rather than an internal page, while St. Pete courses link to Enrole; mixed targets are fine functionally but inconsistent.
- Suggested fix: Reconcile the page name with its nav labels sitewide.

### clearwater-contact.html
- What works: Address, phone, fax, directions, schedule, staff-directory, and shadow-visit all present and correct. This is a solid contact page and answers most of what a student calls me about.
- What needs work: Three "coming-soon.html" dead links in the Campus Info dropdown (Employer Partnerships, Post a Job, Advisory Committees) and one in the footer (Academic Calendar). The page promises parking and accessibility info that actually lives on the unconfirmed campus-maps page. The utility bar search is `href="#"` (line 131).
- Suggested fix: Either hide the coming-soon nav items until built or point them at employers.html (which the program pages already use). Confirm campus-maps.html#clearwater carries the promised parking/accessibility detail.

## Top 3 Issues (ranked by frequency of student confusion)

1. **Conflicting / unverified program facts that will send students wrong (welding schedule + nursing counselor).** The St. Pete welding page advertises a Day section its own source notes do not support, and the nursing page names a counselor who appears to belong to a different program. These are the two things that generate "the website told me X, is that right?" calls to instructors. Highest priority because they are wrong, not just incomplete. Fix: confirm the welding schedule with Cheri Ashwood and the PN counselor before launch; publish only verified facts.

2. **Inconsistent labels and dead "coming-soon" links across the program/hub nav.** Short courses are called three things ("Workforce & Continuing Education," "Evening & Part-Time," "Short Courses & Evening Classes"); apprenticeships have three entry points; and several Campus Info / footer items (Advisory Committees, Employer Partnerships, Academic Calendar) lead to coming-soon.html. This breaks my ability to give a student reliable verbal directions. Fix: one canonical label per destination, and hide coming-soon items until their targets exist.

3. **Unconfirmed spoke and detail pages behind otherwise-good hubs (and no faculty area).** programs.html, apprenticeships-clearwater.html, and adult-education-pathways.html all route to detail/spoke pages (machining, the two apprenticeship pages, the eight adult-ed spokes) I could not confirm are built, and the missing flyer PDFs on welding compound it. Separately, there is still no faculty/PD/staff-facing area anywhere. Fix: verify every linked detail/spoke page renders before launch, wire the welding flyer/cost PDFs, and scope a basic faculty/staff landing area for a future wave.

### Prior-issue status (from issues-tracker.md)
- **C1 / H1 (missing program details / detail pages only for Welding):** substantially resolved on template-built pages. Nursing and welding now carry hours, codes, course sequence, requirements, credentials. Still need to confirm coverage extends to machining and the rest.
- **H5 (no named program counselor for most programs):** addressed in form. Nursing names Merritt Scott; welding names Cheri Ashwood. But the nursing assignment looks wrong, so "named" is not yet "correct." CNC/Machining counselor still unconfirmed since no machining page was in this batch.
- **M7 (staff directory dead links):** appears wired now (clearwater-staff-directory.html linked from dropdown, footer, and contact card), pending confirmation the directory page itself is built.
- **H3 (no campus hours/parking/facility info):** partially addressed: contact info and student-services hours are present for Clearwater; parking and accessibility still deferred to the unconfirmed campus-maps page.
