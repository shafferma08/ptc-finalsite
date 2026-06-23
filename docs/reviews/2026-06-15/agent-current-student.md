# Current Student Review - 2026-06-15

Persona: Maria, 28, Medical Assisting (Medical Administrative Specialist track), Clearwater, 6 months in. Daily user. Launch-readiness pass before Jun 18 mockups.

## Portal Access

Mixed, and it depends heavily on which page I land on.

**Campus pages (clearwater.html / stpete.html): excellent.** This is the best portal access on the whole site for me. The campus utility bar has a dedicated **Canvas Login** link and a **SIS Portal / Focus** link, both at the very top, both wired to real URLs (`myptc.edu/student-links/canvas-login`, `pinellas.focusschoolsoftware.com/focus/`). Canvas also repeats in the Current Students dropdown. If I bookmark `clearwater.html`, I get to Canvas in one click, every time. That is exactly what I want.

**Homepage (index.html): weaker, and this is the page most people type in first.** The utility bar gives me a single vague **Student Portal** link to `myptc.edu/student-links` (a landing page, not Canvas itself). That is one extra hop between me and my course. Canvas and Focus are *not* directly on the homepage utility bar the way they are on campus pages. To get a direct Canvas link from the homepage I have to open the Current Students dropdown. So the homepage costs me a click or two that the campus pages don't. This is the same gap flagged as M36 in the tracker, still open.

**No Webmail / student email anywhere.** Tech Support cards mention "help with email, district logins," but there is no actual link to student webmail on any of the ten pages. As a student I check school email constantly. M36 called this out on June 11 and it is still unaddressed. The `student-resources.html` page would be the natural home for it.

**Canvas reachability is good once I know to look,** but it is inconsistent: direct link on campus pages and in dropdowns, but a generic "Student Portal" on the homepage utility bar. Pick one pattern.

## Finding My Schedule

Good and improving. Campus-specific schedule pages exist (`schedule-clearwater.html`, `schedule-stpete.html`), they're titled "2026-2027 Class Schedule | PTC Clearwater," and they have filters and a search box, which is what I'd want for scanning to my own program.

Paths that work for me:
- Homepage campus cards have a "View Class Schedule" link under each campus (good, this is L10 resolved).
- Campus page Current Students dropdown lists "Academic Calendar" + the schedule is in the Programs dropdown as "Class Schedule."
- Main-site Current Students dropdown splits cleanly into "Clearwater Schedule" / "St. Pete Schedule."

One friction point as a Clearwater student: on the homepage the Current Students dropdown gives me BOTH "Clearwater Schedule" and "St. Pete Schedule" with no memory of which campus I'm at. That's correct for a district homepage, but it means the site never remembers I'm a Clearwater MA student. Every visit I re-pick my campus. That is the core of my persona frustration: I want my stuff, not a campus chooser each time. The campus pages solve this (they default to my campus), so the fix is just to nudge me onto `clearwater.html` and let me bookmark it.

## Student Services

This is genuinely strong now and a clear improvement.

- **`clearwater-student-services.html`** has real, verbatim hours for Student Services, Financial Aid, Bookstore, and Records (e.g., Student Services Mon-Thu 6:45 a.m.-6:30 p.m., Fri 6:45 a.m.-2:30 p.m.). As someone juggling a busy schedule, knowing the office closes at 2:30 on Friday is exactly the kind of thing I need before I drive over.
- The campus Current Students dropdown links straight to **Student Services**, and the campus Admissions dropdown has **Meet Your Counselors**.
- **`student-resources.html`** (the main-site Current Students hub) is well organized: Academic Tools, Support & Services (Academic Counseling, Tuition & Financial Aid, Accessibility & Accommodations, Veterans Services, Career Services & Job Board), and Policies & Forms (Consumer Info, Non-Discrimination, Privacy & FERPA). Career Services and advising are easy to find here.

Gaps:
- **No tutoring anywhere.** I checked. There's Academic Counseling and Career Services, but nothing labeled tutoring, academic support, or a learning lab. For a Medical Assisting student facing TEAS-style content and clinical coursework, that's a real omission. If PTC offers it, it should be a card on `student-resources.html`; if it doesn't, that's a content gap to log for the live owners.
- **Career Services card links to "Employer partners" (`post-a-job-FINAL.html`)**, which is the employer-facing page. As a student I want résumé help and the student job board, not the "post a job" page for employers. The label says "Résumé support, interview prep, and current job postings" but the button sends me to the employer side. Mismatch.
- **Several daily-use cards on `student-resources.html` are still "Coming soon" placeholders**: Canvas, Focus/SIS, Academic Calendar, Tech Support, Student Organizations. This is the main-site current-student hub and five of its most important tiles are non-functional, even though the campus pages already link these same destinations live. The data exists; the hub just isn't wired to it.

## Campus Information

Very good. This is a strong section.

- **`contact.html`** gives both campuses' address, main phone, and fax in clean cards, with "Get Directions" and per-campus "Contact & Visit Info" buttons. Clearwater: 6100 154th Ave N, (727) 538-7167. That's everything I need.
- Campus utility bars repeat phone + address at the top of every campus page.
- Hours live on `clearwater-student-services.html` (real, verbatim).

Gap: hours are NOT on `contact.html` itself. If I'm checking contact info, I'd expect hours right there. Right now I have to know to go to Student Services Hours. This is the open M38 issue. A small "Office Hours" line or a cross-link on the contact card would close it.

## Page-by-Page Notes

### index.html (Homepage)
- **Works:** Student Portal, Bookstore (`bncvirtual.com/ptc`), and Contact are in quick links; Current Students dropdown has direct Canvas + Focus; campus cards link schedules.
- **Needs work:** Utility bar offers only a vague "Student Portal" link, not direct Canvas/Focus like the campus pages. No Webmail. As a daily user the homepage is the slowest path to my course.
- **Suggested fix:** Match the campus utility-bar pattern: add direct Canvas and Focus links (and a Webmail link) to the homepage utility bar alongside or instead of "Student Portal" (M36).

### clearwater.html (Clearwater Campus)
- **Works:** Best daily-use page on the site. Utility bar Canvas Login + SIS/Focus, both live. Current Students dropdown: Academic Calendar (live `clearwater.myptc.edu` calendar), Canvas Login, Student Services, Campus Bookstore, Record Request (`records-request.html` exists), Tech Support. I verified every one of these targets resolves to a real file or live URL. Footer carries address, phone, schedule, and the live Academic Calendar.
- **Needs work:** Tech Support points to `coming-soon.html` (acceptable as labeled, but it's a daily-use item I'd hit and bounce off). The campus-chrome search button is `href="#"` (noted, by-design per the sitewide search decision).
- **Suggested fix:** Prioritize a real Tech Support destination (even a phone + email + hours block) before launch, since it's in the Current Students menu. Leave search as-is pending the sitewide decision.

### stpete.html (St. Petersburg Campus)
- **Works:** Identical, well-wired Current Students dropdown (Academic Calendar -> live `stpete.myptc.edu` calendar, Canvas, Student Services, Bookstore, Record Request, Tech Support). Mirror of Clearwater, which is correct.
- **Needs work:** Same `coming-soon.html` Tech Support; same `href="#"` search button.
- **Suggested fix:** Same as Clearwater.

### programs.html
- **Works:** Current Students dropdown has direct Canvas + Focus + both campus schedules + Transcript Request (live URL).
- **Needs work:** Utility bar is the vague "Student Portal" again (main-site pattern). No Webmail.
- **Suggested fix:** Standardize utility bar (M36).

### admissions.html
- **Works:** Same Current Students dropdown as programs.html with direct Canvas/Focus/schedules/transcript.
- **Needs work:** Aimed at prospects (correct for this page), but the only current-student path is the nav dropdown.
- **Suggested fix:** None specific; nav dropdown is sufficient here.

### tuition-aid.html
- **Works:** This is my path to "pay tuition." The Tuition & Aid dropdown has a dedicated "Pay Tuition" anchor (`#pay`) plus rates, FAFSA, scholarships, veterans, refund policy. As a current student needing to pay, that's a clear path.
- **Needs work:** Did not find a current-student-specific entry point beyond the nav; fine for this page.
- **Suggested fix:** Confirm `#pay` lands on an actual business-office / payment instruction block (verify the anchor target exists on the page body).

### practical-nursing-clearwater.html (program-page template, stand-in for my MA program)
- **Works:** Carries a Current Students dropdown with Class Schedule, Canvas, Student Services Hours, and Record Request. Health Sciences program-page template is the model my Medical Administrative Specialist page would follow.
- **Needs work:** Its Current Students dropdown points Record Request to **`clearwater-records-request.html`** while the campus home pages point to **`records-request.html`**. Both files exist, so it's not a dead link, but it's nav drift: the same menu item lands on two different pages depending on where I am. Also "Upcoming Classes TBD / TBD" (M42) reads as "no classes coming," and the named counselor may be misattributed (C9, open). My actual program (Medical Administrative Specialist / Medical Assisting) page was not in this batch, so I can't confirm it carries the same Current Students wiring.
- **Suggested fix:** Pick ONE records-request destination per campus and use it everywhere (resolve the `records-request.html` vs `clearwater-records-request.html` split). Replace "TBD / TBD" with a real date or "Contact your counselor for the next start date." Confirm the MA/Medical Administrative Specialist program page has the same Current Students dropdown before launch.

### contact.html
- **Works:** Clean two-campus contact cards, real phones/addresses/fax, directions buttons. Current Students dropdown has direct Canvas + Focus.
- **Needs work:** No office hours on the page despite the topic; hours live elsewhere with no cross-link (M38).
- **Suggested fix:** Add an Office Hours line per campus card, or a "See Student Services hours" cross-link to `clearwater-student-services.html`.

### consumer-information.html
- **Works:** Reachable from footer, About dropdown, and the campus quick links (Consumer Info). Not a daily-use page for me but easy to find.
- **Needs work:** Nothing from my persona's daily-use lens.
- **Suggested fix:** None.

### about.html
- **Works:** Current Students dropdown wired with direct Canvas + Focus + both schedules + Transcript Request (live URL). Good for an institutional page.
- **Needs work:** Utility bar is the main-site pattern (no direct Canvas/Focus on the bar itself).
- **Suggested fix:** Standardize utility bar (M36).

## Prior-Issue Check (issues-tracker.md)

- **C7 / C2 (portal CTAs were `href="#"`):** Substantially resolved for me. Canvas and Focus are now real links on campus pages, in Current Students dropdowns sitewide, and the new daily-use paths (Academic Calendar, Student Services, Bookstore, Record Request) all resolve. I clicked through all of them.
- **L10 (no View Schedule from campus cards):** Confirmed resolved; the links are on both homepage campus cards.
- **M36 (vague "Student Portal" on main-site utility bar; no Webmail):** Still open. Homepage/programs/about utility bars still say "Student Portal" and there is no Webmail link anywhere.
- **M38 (contact page promises hours but has none):** Still open on `contact.html`.
- **M42 (nursing "TBD / TBD"):** Still open.
- **C9 (nursing counselor possibly misattributed):** Still open; cannot confirm from this batch.

## Top 3 Issues (ranked by daily inconvenience)

1. **The main-site current-student hub (`student-resources.html`) has its most-used tiles stubbed as "Coming soon" (Canvas, Focus, Academic Calendar, Tech Support), even though the campus pages already link these live.** This is the page that the homepage/about/programs "Current Students" nav points to, so the default current-student landing spot is half-dead while a working version exists one click away on the campus pages. **Fix:** wire those five cards to the same live URLs the campus pages already use; reuse the verified destinations, don't invent new ones.

2. **Homepage portal access is slower than campus-page access, and there's no Webmail anywhere (M36).** The homepage utility bar gives me a vague "Student Portal" link instead of direct Canvas + Focus, costing me a click on the page most people type first, and I can't reach my school email from anywhere on the site. **Fix:** put direct Canvas, Focus, and a Webmail link in the main-site utility bar to match the campus pattern.

3. **"Career Services" sends students to the employer "post a job" page, and there's no tutoring/academic support anywhere.** The card promises résumé help and a student job board but links to `post-a-job-FINAL.html` (employer-facing), and no tutoring/learning-lab resource exists for a student who needs help with coursework. **Fix:** point Career Services at a student-facing career/job-board destination, and add a Tutoring/Academic Support card to `student-resources.html` (or log it for live owners if the service isn't offered).
