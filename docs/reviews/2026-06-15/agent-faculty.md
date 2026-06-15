# Faculty Review - 2026-06-15

Reviewer persona: Robert, CNC Machining instructor, St. Petersburg campus, 8 years. I send students to the site constantly for forms, schedules, and program info. I'm not very tech-savvy and I review this from a desktop. Launch-readiness pass before the Jun 18 mockups.

## Program Representation

Good news first: my program now has a real home. `machining-technologies-clearwater.html` exists, is reachable from the A-Z directory, and is accurate. It correctly lists 1,500 hours, the four OCPs (Machinist Helper PMT0020 / 300h, Machine Operator PMT0022 / 300h, Machine Setup Operator PMT0024 / 600h, Machinist PMT0025 / 300h), the NIMS accreditation, and the CNC/EDM/lathe/mill/grinding content. The course descriptions read verbatim like our official program sheet. When a student asks "what's in this program," I can finally send them one link instead of explaining it on the phone. This is a real improvement over the prior cycle where Welding was the only built program page (old H1/C1).

Two problems with how my program is represented:

1. **Campus label mismatch on the Clearwater homepage cluster card.** On `clearwater.html` the trades card is titled "Skilled Trades & Mfg" and reads "Cabinetmaking, Electricity, HVAC/R 1, Machining Technologies, and Advanced Welding Technology." But the district homepage (`index.html`), the programs dropdown, and the `programs.html` filter all call this cluster "Skilled Trades & Construction." Three different names for one cluster makes it hard to tell a student "look under Skilled Trades" and have them find the same words on every page.

2. **Counselor attribution on my program page is questionable.** The "Ready to Get Started?" block on `machining-technologies-clearwater.html` (~L499-511) names **Lidija Milisav** as "School Counselor" with `milisavl@pcsb.org` / x2020. Lidija is the Military & Veteran Resources Coordinator at Clearwater, not the general Machining program counselor as far as I know. The instructor card next to it (Scott Baldwin, BALDWINB@pcsb.org) is correct, that's our machining instructor. This is the same class of problem the tracker flagged as C9 on the Practical Nursing page (Merritt Scott). If a student emails the wrong person, they bounce around and end up calling me. Verify the named counselor against the counseling office before any external showing.

## Directing Students

This is the heart of my job, and most of the core paths now work. I checked every task in the brief:

- **Program info:** Programs > All Programs A-Z, or the cluster filter. Machining is there and links to a full page. Works.
- **Schedules:** `schedule-clearwater.html` and `schedule-stpete.html` both exist and are linked from the campus homepages (campus card "View Class Schedule"), the Current Students dropdown, and the campus footers. Works.
- **Forms / records request:** This is messy (see below) but reachable. Campus homepage Current Students dropdown -> "Record Request" -> `records-request.html` (exists). The Machining/Nursing program-page nav instead points to `clearwater-records-request.html` (also exists). Two different files for the same task.
- **Counselors:** `clearwater-counselors.html` and `stpete-counselors.html` exist and are linked from the campus Admissions & Aid dropdown ("Meet Your Counselors"). Works.
- **Enrollment / how to apply:** `admissions.html` is thorough and Apply buttons go to the real `apply.myptc.edu`. Works.

The one thing I can't cleanly do: **direct a St. Pete student to a St. Pete program page.** The A-Z grid links every St. Pete-only program to a real spoke (Dental Assisting, EMT, CDL, etc.), but the shared programs that exist at both campuses (Welding, Electricity, Computer Systems) give a Clearwater and a St. Petersburg link, which is great. Machining is Clearwater-only, which is correct. No issue there, just confirming I checked it.

### Records request is confusing to explain verbally

There are three records-request destinations in play and I can't give a student one consistent instruction:
- Campus homepages (`clearwater.html`, `stpete.html`) Current Students dropdown -> `records-request.html`
- Program pages (Machining, Nursing) Current Students dropdown -> `clearwater-records-request.html` / `stpete-records-request.html`
- Main-site Current Students dropdown (`index.html`, etc.) -> the live `myptc.edu/.../how-to-request-your-student-records` URL (labeled "Transcript Request")

All three resolve, but "go to Current Students and click Record Request" lands a student on a different page depending on which page they started from. Pick one canonical records-request page and point every nav at it.

## Campus Accuracy

Addresses and phones are correct and consistent everywhere I checked:
- Clearwater: 6100 154th Ave N, Clearwater, FL 33760 / 727.538.7167
- St. Petersburg: 901 34th St S, St. Petersburg, FL 33711 / 727.893.2500
- Contact page fax numbers present (CLW 727-538-7203, STP 727-893-2776).

What's still missing for a student standing in front of me asking a basic question: **campus hours and parking are not on the campus homepages.** `clearwater.html` and `stpete.html` have no hours, no parking, no office-hours block. The contact pages route to `campus-maps.html` for directions, which I didn't have in this batch to confirm. This is the long-standing H3. When a student asks "what time does the front office open," I still can't point them to a page.

Also worth a flag for board optics: the St. Pete homepage trades card lists **"Advanced Welding"** ("Building Trades & Construction, HVAC/R 1, Electricity, Plumbing, Advanced Welding, and Public Works"). The tracker has an open H2 noting St. Pete advertises programs (Advanced Welding) it may not actually offer. In the A-Z grid, "Welding Technology - Advanced" links to a generic `welding-advanced.html` with both-campus tags, so the campus split is ambiguous. Confirm Advanced Welding is genuinely a St. Pete offering before launch.

## Faculty Resources

As an employee I find this thinner than the student-facing side, but the basics are present:

- **Staff directory:** reachable. `clearwater-staff-directory.html` and `stpete-staff-directory.html` exist and are linked from the About page Leadership block, the campus Campus Info dropdowns, and footers. The About page also names leadership (Dr. Prokop, Dr. Shedrick, Dr. Hinds) with emails. Good enough for me to find a colleague.
- **Professional development / faculty-specific links:** I see a `community-staff.html` (PD library) exists in the repo, but nothing in the 10 pages I reviewed links to it. There is no "Faculty" or "Staff" or "Professional Development" entry anywhere in the main nav, the footer, or the campus Campus Info menus. As an instructor looking for PD resources, I have no path in from the public site. This isn't a launch-blocker for students, but it's the single biggest gap for me as an employee.
- **Employer / advisory committee links:** Campus Info dropdowns point "Advisory Committees" to `coming-soon.html`. As program faculty I sit on an advisory committee, and pointing a partner there shows a placeholder. Either hide it until it's real or wire it.

## Page-by-Page Notes

### index.html (district homepage)
- What works: Clean entry. Quick Links cover Apply, Programs, Tuition & Aid, Visit, Student Portal, Bookstore, Contact. Eight cluster cards, all wired to `programs.html?cluster=`. Campus cards carry correct address/phone and a "View Class Schedule" link. Apply CTAs go to the real portal.
- What needs work: The trades cluster is called "Skilled Trades & Construction" here but "Skilled Trades & Mfg" on the Clearwater homepage. Utility bar says "Student Portal" (vague) instead of the direct Canvas + Focus links the campus pages carry (open M36).
- Suggested fix: Pick one cluster name and use it on index, campus pages, dropdown, and the programs filter. Match the utility bar to the campus-page pattern (direct Canvas + Focus).

### clearwater.html
- What works: Machining is listed in the trades card, so a Clearwater prospect sees my program on the campus landing. Schedule, records request, counselors, bookstore all reachable from the dropdowns. Address/phone correct.
- What needs work: Cluster card titled "Skilled Trades & Mfg" (inconsistent with the rest of the site). No campus hours or parking on the page.
- Suggested fix: Rename the card to the canonical cluster label. Add a small Campus Hours / Parking block or link it to the services-hours page.

### stpete.html
- What works: My students' campus landing. Schedule (`schedule-stpete.html`), records request, counselors, student services, bookstore all reachable. Address/phone correct.
- What needs work: Trades card advertises "Advanced Welding" (open H2, may not be offered at St. Pete). No campus hours/parking. Machining is correctly absent (Clearwater-only program).
- Suggested fix: Confirm the St. Pete trades program list against the real 2026-27 offerings; drop Advanced Welding if it isn't taught there.

### programs.html
- What works: This is my go-to page. Every full-time program is a card, the cluster + campus filters work, and `?cluster=`/`?campus=` deep links pre-set the filters. Machining Technologies is present with an accurate one-line description and links to the full program page. Both-campus programs give separate Clearwater/St. Pete links. The brief's claim that the grid is complete holds up for what I can see.
- What needs work: A few cluster chips are mislabeled (open M33: Dental Assisting tagged "Arts, Media & Education", Facials/Nails tagged the same) though the filter still sorts them right. The "Skilled Trades & Mfg" / "Skilled Trades & Construction" naming split shows up here too as "Skilled Trades & Construction." Cards show no length/credential, so a student can't comparison-shop without clicking in.
- Suggested fix: Correct the visible chip text/icons to match the data-cluster. Add a small "1,500 hrs · NIMS" style line per card.

### admissions.html
- What works: Genuinely useful. Clear 7-item application checklist, FAFSA school codes inline (CLW 005605 / STP 013917), residency-proof links, testing overview (TEAS for Practical Nursing), shadowing guidance, accommodations. Apply buttons go to the real portal. I can send a prospect here and they won't need to call me.
- What needs work: The Programs > By Category dropdown items on this page all point to bare `programs.html` (no `?cluster=`), unlike the homepage which deep-links each cluster. Minor.
- Suggested fix: Add the `?cluster=` query strings to match the other pages' dropdowns.

### tuition-aid.html
- What works: Very thorough. Real tuition table (Career Technical Certificate $2.92/hr resident), the full fee list, "come to the bookstore to pay each term" payment rule, FAFSA codes, SAP/attendance (90%) rules, refund policy, scholarships, net price calculators. This answers the money questions students bring me.
- What needs work: Nothing program-blocking for my purposes. No per-program tuition shown, but the hours-based rate plus my page's 1,500 hours lets a student estimate it.
- Suggested fix: Optionally add a one-line "estimate: hours x rate" example so students can self-calculate.

### practical-nursing-clearwater.html
- What works: This is the model program page and it's excellent: codes, hours, full course sequence, admission requirements, TEAS callout, distance-ed detail, credentials, financial aid, real program PDFs, info-session details, named counselor. If every program page reaches this bar, my job gets much easier.
- What needs work: Counselor named is Merritt Scott (tracker C9 says this is likely a misattribution; Merritt Scott is tied to Phlebotomy). "Upcoming Classes" shows "TBD / TBD" (open M42), which reads as "no classes coming." The Current Students dropdown points to `clearwater-records-request.html` while the campus homepage uses `records-request.html`.
- Suggested fix: Verify the counselor. Replace TBD with a real date or "Contact your counselor for the next start date." Standardize the records-request link.

### contact.html
- What works: Both campuses as clear cards with address, main phone, fax, and links to per-campus contact + directions. Easy to hand a student.
- What needs work: No general admissions email or inquiry form on the institutional contact page; it's all routing to campus pages. The campus contact pages (per tracker M38) promise hours/parking but don't show them.
- Suggested fix: Add a general inquiry email or form, or make clear the campus pages are where contact happens.

### consumer-information.html
- Not read in depth this pass; it's heavily linked from every footer (non-discrimination, accessibility, privacy) and the links resolve. No faculty-workflow issue surfaced. Flagging only that I rely on it existing for the footer compliance links, which it does.

### about.html
- What works: Solid institutional page. Named leadership with emails, mission/vision/core values verbatim, accreditation routing to campus pages, staff directory CTAs. The "Two Campuses" cards carry correct addresses/phones.
- What needs work: Stats say "60+ Programs / 40+ Career Areas / 5,000+ Full-Time Students / 250+ Industry Partners" while the homepage hero says "40+ Career Programs." Not contradictory once you read "career areas," but a parent skims it as two different numbers. No faculty/PD entry point anywhere on this page either.
- Suggested fix: Keep the verbatim live stats but consider a tooltip or footnote so "40+" and "60+" don't look like an error.

## Top 3 Issues (ranked by frequency of student confusion)

1. **One cluster, three names ("Skilled Trades & Construction" vs "Skilled Trades & Mfg" vs the filter label).** Every time I tell a student "look under Skilled Trades," the words they see depend on which page they're on. This is the single most common verbal-direction breakdown, and it hits my own cluster. Fix: pick one canonical cluster name and use it on index.html, clearwater.html, the dropdowns, and the programs.html filter/chips.

2. **Records request lands on a different page depending on where you start (`records-request.html` vs `clearwater-records-request.html` vs the live transcript URL).** Forms are the #1 reason students get sent to the site. I can't give one reliable instruction. Fix: choose one canonical records-request page and repoint every Current Students dropdown and footer at it.

3. **Wrong/unverified program counselor names (Machining: Lidija Milisav; Nursing: Merritt Scott).** A student who emails the wrong contact gives up and calls me. My own program page lists the Military & Veteran Resources Coordinator as the school counselor. Fix: verify each program page's named counselor against the counseling office before the Jun 18 showing, and confirm Scott Baldwin (instructor) is the right secondary contact for Machining.

### Prior-issue check (faculty-workflow items from issues-tracker.md)
- **H1 / C1 (program pages missing):** Much improved. Machining now has a complete, accurate page alongside Nursing and Welding. Pending: confirm the remaining programs reach the same bar.
- **H5 (no named counselor for CNC/Machining):** Now addressed in form (Machining page names a counselor + instructor) but the counselor looks misattributed, so it rolls into the C9-style accuracy problem above.
- **H2 (St. Pete lists Advanced Welding it may not offer):** Still open; St. Pete homepage trades card still advertises Advanced Welding.
- **H3 (no campus hours/parking):** Still open on the campus homepages.
- **M36 (vague "Student Portal" in main-site utility bar):** Still open.
- **Staff directory (old M7):** Now reachable from About, campus Campus Info dropdowns, and footers; resolved for my purposes.
