# Prospective Student Review - 2026-06-11

Reviewer persona: Jaylen, 19, Largo FL, first-gen, on a phone, found PTC by Googling "trade school near me." I want a real job, I want to know what it costs, and I want to know how to sign up without feeling like I'm being scammed.

Pages reviewed: programs.html, practical-nursing-clearwater.html, welding-stpete.html, apprenticeships-clearwater.html, adult-education-pathways.html, workforce-continuing-education.html, clearwater-contact.html

---

## First Impressions (Homepage)

I wasn't given the homepage this round, so I'm judging "first impression" off the Programs A-Z page, which is realistically where a Google search for a trade drops me.

Landing on programs.html, within 5 seconds I get it: green header, "Programs A-Z Directory," and a line that says "over 40 industry-certified training programs designed to fast-track your career." That word "career" plus "industry-certified" is exactly what makes me think this is legit and not a scam. The COE / Cognia / Pinellas County Schools logos in the footer help a lot too. Good.

What confused me: the very top of the page has two different "Apprenticeships" entries that go to different places. The nav bar has an "Apprenticeships" link going to `apprenticeships-workforce.html`, but the green callout box just below the headline sends me to `apprenticeships-clearwater.html` and `apprenticeships-stpete.html`. As a confused first-timer I don't know which one is "the" apprenticeships page. Two doors to what sounds like the same room makes me trust the site slightly less.

## Finding a Program

This is the strongest part. I don't know the exact name of what I want (I just know "trades"), and the page handles that:

- The "Career Cluster" filter has a "Skilled Trades & Construction" option. I pick that and the list narrows. That's exactly how my brain works. Big win.
- The "Location" filter (Clearwater / St. Pete) is great because I'm in Largo and need to know which campus I'd actually drive to.
- Cards are scannable: title, one-line plain-English description, campus tag. "Welding Technology - Learn SMAW, GMAW, FCAW, and GTAW..." Honestly those acronyms mean nothing to me, but the program title is clear enough that I'd click.

Problems I hit:
1. The filters are AND-only and the cluster filter is single-select. If I want "all trades at Clearwater" that works, but I can't see "trades AND transportation," which to a 19-year-old shopping vibes is basically the same bucket ("working with your hands"). Minor, but the categories themselves don't always match how I think. "Diesel" and "Marine" are under Transportation, not Trades, and I'd never guess that.
2. A few cards have mismatched icons/clusters that made me trust the data less. "Dental Assisting" is tagged `data-cluster="health"` but the visible tag says "Arts, Media & Education" with a theater-masks icon (programs.html line 382-384). Same problem on "Facials Specialty" (line 447-449), tagged cosmo but labeled "Arts, Media & Education." If I filter by Cosmetology, Facials shows up but the badge says Arts. That looks broken and a broken site makes me wonder if the school is sloppy.
3. If a filter returns nothing I get a clean "No programs match" message. Good. But there's no count anywhere ("showing 12 of 41"), so I can't tell if the filter actually did something on a long scroll.

Once I click into a program, the experience is genuinely good. The Welding and Nursing pages both open with a hero that tells me Format, Length, Location, and whether there's online/hybrid, all in a row I can read in two seconds. That stat bar is the single best thing on these pages for me.

## Understanding Costs

This is where I get frustrated, and it's the thing most likely to make me bounce.

**On the Welding (St. Pete) page:** there is NO actual dollar cost anywhere. The "Financial Aid & Costs" box says "Program length and costs are approximate, and subject to change. Financial assistance is available to those who qualify" and the only button is "Explore Financial Aid." Then the two PDF cards that should hold real numbers literally say "Program Costs - PDF coming soon" and link to `href="#"` (welding-stpete.html lines 1028-1048). So as a kid trying to figure out if I can afford this, I get: a salary number ($47,540/yr, which is great and I love that it's there), but zero on what the program costs me. That asymmetry actually feels worse than saying nothing. You're telling me what I'll make but dodging what I'll pay.

**On the Practical Nursing (Clearwater) page:** better. There's a real "Program Costs" PDF card that links to an actual clearwater.myptc.edu resource, plus a General Information & FAQ PDF. So the cost info exists, it's just locked in a PDF I have to download on my phone (annoying but acceptable). The nursing page is the model; welding should match it.

So the prior issue **H6 (tuition/costs not visible)** is partially addressed: nursing now routes me to a real cost sheet, welding still has placeholder "coming soon" PDFs and dead `#` links. Not closed.

Across the board, no page tells me the cost in plain text on the page itself. Even a "Tuition is charged per clock hour; see the cost sheet for this program's total" sentence would calm me down. Right now I have to trust that the number exists somewhere.

Financial aid is at least mentioned everywhere and there's a FAFSA link, which is reassuring for a first-gen kid who's scared of the price tag.

## Application Flow

Big improvement from what the tracker describes as the old "#" CTA problem (**C2**). On these pages the Apply buttons actually go somewhere real: `https://apply.myptc.edu/`.

- Nursing page: header "Apply Now," a yellow "New to PTC? Start Here" strip with "Apply Online," a jump-nav, and a final "Apply Online Now" button. All point to apply.myptc.edu. Clear, repeated, hard to miss. This is great.
- The "Start Here" strip is genuinely helpful for someone like me who doesn't know the steps: Review Requirements -> Apply Online -> Meet Your Counselor.

But there's an inconsistency that would confuse me if I compared two programs:
- The **Welding** page's "Start Here" and "Apply Online Now" buttons go to `https://www.myptc.edu/admissions` (welding-stpete.html lines 776, 1067), NOT to the actual application at `apply.myptc.edu` like the nursing page does. So depending on which program I land on, "Apply" means two different destinations. One takes me to an info page, one takes me to the actual form. For a first-timer that's a real stumble: I think I'm applying and instead I'm reading another page.
- The hubs (apprenticeships, adult-ed, workforce) don't have a clear "apply" path at all. The apprenticeships page tells me to call a phone number or hit "Admissions Info," which is honestly fine for apprenticeships (you get hired first), but I'd still want one "how do I start" button.

Net: the path to apply is mostly obvious now and that's a major step up. The destination just needs to be the SAME everywhere (the real application).

One more: the nursing page requires a TEAS test and a high school diploma/GED. It says so clearly in Admission Requirements, and even warns the TEAS must be taken at a PTC center. As a prospective student I appreciate knowing that BEFORE I apply rather than after. Good.

## Mobile Considerations

I'm on a phone, so this matters most.

- Program pages: the hero is a 1.1fr / 0.9fr grid that collapses to a single column under 768px (good), and the jump-nav scrolls horizontally with hidden scrollbars (good, that's a normal mobile pattern). The stat bar wraps. These two pages should be fine on my phone.
- programs.html filters: `min-width: 250px` on each select inside a flex container that wraps. On a ~360px phone that's fine (they stack), but the filter card has `margin: -2rem auto 3rem` pulling it up over the green header. Worth confirming it doesn't overlap the headline text on a small screen, but likely OK.
- **adult-education-pathways.html**: the hero title is a hard-coded `font-size: 2.5rem` with no clamp and no mobile override (line 33-38). Every other new page I looked at either uses `clamp()` or has a `@media (max-width: 600px)` shrink. This one doesn't, so "Adult Education & Pathways" at 2.5rem could crowd or wrap awkwardly on a 360px screen. The workforce page right next to it DOES have `@media (max-width: 600px){ .page-hero__title { font-size: 1.85rem; } }` (line 261-263). This is the exact thing the tracker closed as H7 elsewhere; adult-ed regressed it.
- The dual-campus cards on adult-ed and the A-Z directory stack vertically fine on mobile.
- clearwater-contact.html: contact grid is `auto-fit minmax(300px, 1fr)`, collapses cleanly. Map callout has a 600px breakpoint. Fine on my phone.

No layout blockers, but the adult-ed hero font is the one real mobile nit.

## Page-by-Page Notes

### programs.html (A-Z directory + filters)
- **What works:** Cluster + campus filters are exactly right for someone who doesn't know the program name. Plain-language card descriptions. URL params (`?cluster=trades`) mean the homepage cluster cards can deep-link in pre-filtered. "Over 40 programs" + accreditation logos read as legit.
- **What needs work:** Cluster/badge mismatches on Dental Assisting (line 382), Facials Specialty (line 447), Nails Specialty (line 500) where `data-cluster` and the visible tag disagree. The duplicate "Apprenticeships" destinations (nav vs callout). No visible result count.
- **Suggested fix:** Reconcile each card's `data-cluster` with its visible tag label so filtering and the badge always agree. Pick ONE apprenticeships destination for the word "Apprenticeships" sitewide. Add a small "Showing X programs" count above the grid that updates on filter.

### practical-nursing-clearwater.html
- **What works:** Best page in the set. Stat bar (1,350 hours / ~15 months / LPN & CNA / Hybrid available) answers "how long" instantly. Trust strip ("Approved by the Florida State Board of Nursing," clinical partner hospital) is exactly the credibility I need. Real cost + FAQ PDFs. Named counselor with email and phone. Apply buttons go to the real application. Articulation to RN shows me the program goes somewhere.
- **What needs work:** Costs are only in a downloadable PDF, not on the page. "Upcoming Classes" shows "TBD / TBD" (lines 430-431), which makes me wonder if the program is even running.
- **Suggested fix:** Add one plain-text sentence near the aid banner like "Approximate program cost: see the Program Costs sheet below" so I know the number exists before I download. Replace "TBD" with "Next start date: contact your counselor" or the Zoom info session, so it doesn't look abandoned.

### welding-stpete.html
- **What works:** Stat bar including avg salary ($47,540/yr, BLS 2023) is motivating and credible. AWS accredited testing facility is a strong trust signal. Day & Evening schedule shown. Sister-program callout to Advanced Welding is a nice "what's next."
- **What needs work:** This is the weakest on cost/apply consistency. Cost PDFs say "coming soon" and link to `href="#"` (lines 1029-1048). Apply buttons go to `myptc.edu/admissions` instead of the real `apply.myptc.edu` used on the nursing page. There's an internal HTML comment flagging the schedule may actually be evening-only (lines 933-940), so the schedule I'm reading might be wrong.
- **Suggested fix:** Link real Program Flyer + Program Costs PDFs (or hide the cards until they exist rather than showing dead "coming soon" links). Point all Apply buttons to `https://apply.myptc.edu/` to match nursing. Resolve the day/evening schedule before launch.

### apprenticeships-clearwater.html
- **What works:** "Earn while you learn... zero student debt" is the single most appealing sentence on any page for a broke 19-year-old. The 3-step "How Apprenticeships Work" (get hired, train, earn credential) is clear and demystifies something I knew nothing about. PTC-sponsored vs community programs split makes sense once I read it.
- **What needs work:** The community programs (HVAC, Electrician, Sprinkler Fitter, etc.) just say "Contact the sponsoring organization to enroll" with no phone, link, or email. As a kid that's a dead end: I literally cannot contact them. Also no cost/length/pay-range info on apprenticeships, which is the thing I'd most want ("how much do I earn?").
- **Suggested fix:** Even one line per community item ("Search 'IEC Apprenticeship Tampa Bay'" or a phone number) would unblock me. Add a typical wage/length note to the PTC-sponsored cards if available.

### adult-education-pathways.html
- **What works:** Clean "Choose Your Path" card grid (Dual Enrollment, Distance Learning, ABE/GED, ESOL, Student Orgs), each with Clearwater/St. Pete links. "Tuition-free PTC credit" on dual enrollment is a great hook. For a first-gen kid who maybe needs a GED first, this is a soft, welcoming entry.
- **What needs work:** Hero title font is hard-coded 2.5rem with no mobile shrink (mobile risk noted above). "ABE / GED / ESOL" in the nav uses acronyms; the card spells ABE out as "Adult Basic Education" which is good, but the nav item doesn't.
- **Suggested fix:** Add `clamp()` or a 600px font override to `.page-hero__title` to match the other hubs. In nav, consider "Adult Basic Education / GED / ESOL."

### workforce-continuing-education.html
- **What works:** Campus badges on every course, a clear "no sessions currently scheduled" pill so I don't chase dead courses, and a plain warning that these short courses do NOT grant credit toward programs. Honest. The Enrole registration links are real. Has a proper mobile font override.
- **What needs work:** Page title is "Short Courses & Evening Classes" but the nav/breadcrumb and other pages call it "Workforce & Continuing Education" (and one nav even calls it "Evening & Part-Time," line 320). Three different names for one page is confusing when I'm trying to remember where I saw something.
- **Suggested fix:** Pick one name for this page and use it in the title, breadcrumb, and every nav link.

### clearwater-contact.html
- **What works:** Address, phone, fax, directions, "Schedule a Visit," class schedule, and staff directory all in clean cards. As someone deciding whether to drive there, this is everything I need. Schedule-a-visit before applying is reassuring.
- **What needs work:** The utility-bar search button is `href="#"` (line 131), a dead link. The "Schedule a Visit" card links to `clearwater-admissions.html#how-to-apply` but the card text says "View shadowing days & times," so the anchor target may not match what I expect to land on.
- **Suggested fix:** Wire or remove the dead search button. Point the shadowing link to the actual shadowing section/anchor.

## Top 3 Issues (ranked by impact on my decision to enroll)

1. **Costs are missing or placeholder on program pages (esp. Welding).** I can see what I'll EARN but not what I'll PAY. The welding "Program Costs" card says "coming soon" and links to nothing (`href="#"`). This is the #1 thing that makes me hesitate or bounce. Nursing does it right (real cost PDF); make every program match, and add one plain-text cost sentence on the page itself. (Prior issue H6 - still open.)

2. **"Apply" goes to two different places depending on the program.** Nursing -> real application at `apply.myptc.edu`. Welding -> an info page at `myptc.edu/admissions`. As a first-timer I won't realize one of those isn't the actual form. Make every Apply button on every program page point to the real application. (Prior issue C2 - mostly addressed but inconsistent.)

3. **Data/labeling sloppiness erodes trust.** Cluster-vs-badge mismatches on the A-Z directory (Dental Assisting, Facials, Nails labeled "Arts, Media & Education"), three different names for the workforce page, and dead community-apprenticeship contacts. Individually small, but together they make a nervous, scam-wary kid wonder if the school is as buttoned-up as it claims. Reconcile the card data, settle on one page name, and give community apprenticeships a real way to make contact.
