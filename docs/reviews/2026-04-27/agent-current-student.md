# Current Student Review - 2026-04-27

**Reviewer:** Maria (persona-current-student), 28, MA program at Clearwater, 6 months in
**Pages reviewed:** about.html, clearwater-about.html, stpete-about.html
**Scope note:** These are the institutional + campus About pages, not my daily-use pages (Canvas, schedule, services). I'm evaluating whether the practical things current students actually go to About pages for, like Code of Conduct, records request, who to call, are reachable in one or two clicks.

---

## Portal Access

Honest answer: better than I expected on the campus pages, still busted on the institutional hub.

**clearwater-about.html and stpete-about.html:** The campus utility bar at the top has Canvas Login and "SIS Portal / Focus" sitting right next to the campus phone and address. That's the right call. If I land here from a Google search for "PTC Clearwater records request," I can still bounce to Canvas without backtracking to the homepage. The Current Students nav dropdown also lists Canvas Login, Academic Calendar, Record Request, and Tech Support on both campus pages.

**about.html (institutional hub):** This is the problem. The utility bar at the top has a "Student Portal" link that goes to `#`. Same dead link the issues tracker has flagged as **C7 since 2026-04-15**. Six weeks later, it's still pointing nowhere. The Current Students dropdown items (Canvas Login, Focus / SIS Portal, Academic Calendar, Transcript Request, Tech Support) are also all `href="#"`. So if I land on the institutional About page from a search result, every portal link is dead.

**Issue C7 status from my view:** Still open on the institutional About page. Tracker says "Partially Addressed" because homepage cluster cards were routed, but about.html's utility bar and Current Students dropdown have not been touched.

**Suggested fix:** Even with placeholder Canvas/Focus URLs, replace `href="#"` with the actual production URLs (`https://pcsb.instructure.com` for Canvas, the Focus URL Frank Cianca manages). These are known constants, not redesign decisions.

---

## Finding My Schedule

Mixed. The campus About pages do the right thing, the institutional About does not.

**clearwater-about.html:** Programs dropdown > Explore > "Class Schedule" links to `schedule-clearwater.html`. Footer "Clearwater Links" column also has "Class Schedule." That's two paths, both correct. Good.

**stpete-about.html:** Same pattern in the Programs dropdown (`schedule-stpete.html`). However, the **St. Pete footer is missing "Class Schedule"** under the "St. Petersburg Links" column. The Clearwater footer has it. The St. Pete footer has "Campus Map & Directions, Academic Calendar, Schedule a Tour, Staff Directory" but no Class Schedule link. Inconsistent.

**about.html:** No campus-specific schedule link anywhere on the page. Footer has no schedule link. Programs dropdown has no Class Schedule item. To get to my schedule from here I'd have to click into Campuses > Clearwater Campus > then hunt for the schedule link from there. That's three clicks minimum from About.

**Suggested fixes:**
1. Add a "Class Schedule" item under "St. Petersburg Links" in `stpete-about.html` footer (line ~278), matching the Clearwater pattern.
2. Add "Class Schedule (Clearwater)" and "Class Schedule (St. Pete)" to about.html's Programs > Explore dropdown.

---

## Student Services

This is where the campus About pages fall short for current-student needs.

**Code of Conduct:** Critical for me as a current student. I might get pulled aside about an attendance issue or need to look up the dress code for clinical rotations.
- **stpete-about.html:** Has a Code of Conduct card linking to a 2025-26 PDF. Good.
- **clearwater-about.html:** **Missing Code of Conduct.** 7 cards vs St. Pete's 8. The card is just not there. I'm a Clearwater student, so this is the page I'd land on, and the document I need most is absent. The sitemap acknowledges this gap (CLW has 7 cards, STP has 8) but the asymmetry is a real problem.

**Records Request:** Both campus pages have a "Request Your Records" card with a named contact (canfieldj@pcsb.org for Clearwater, kilpatrickc@pcsb.org for St. Pete) and an email link. This is great. Best card on the page, honestly. Phone numbers would round it out.

**Tutoring, Advising, Career Services:** None of these appear on any of the three About pages, and they shouldn't, but the Current Students dropdown only has "Student Services" (single link) on the campus pages. No advising, no tutoring, no career services breakouts. About is the wrong place for this content but the nav from About to those services is thin.

**Counselor info:** No counselor name, email, or phone for my program (MA / Health Sciences) anywhere on these three pages. The records contacts are there, but a current student wondering "who's my counselor" gets nothing. Issue H5 in the tracker (no named program counselor for most programs) is alive and well from this view.

**Suggested fixes:**
1. **Add a Code of Conduct card to clearwater-about.html.** The Clearwater PDF must exist somewhere (PCSB or COE-required). If it truly doesn't, log it in `docs/audit/follow-ups.md` and put a placeholder card that says "Coming soon, contact the campus office at 727.538.7167" rather than silently omitting.
2. Add a phone number to the Records Request cards alongside the email. Email-only is friction for a quick question.
3. Cross-link from these About pages to the Counselors cluster page once that's built (per CLAUDE.md it's the cluster after Compliance).

---

## Campus Information

Good on the campus About pages, weak on the institutional one for daily-use.

**clearwater-about.html and stpete-about.html:**
- Campus phone in the utility bar: yes (727.538.7167 / 727.893.2500)
- Address in the utility bar: yes (6100 154th Ave N / 901 34th St S)
- Footer repeats address and phone: yes
- **Campus hours: not on either page.** Issue **H3 from the tracker** ("No campus hours, parking, facility info, or maps on campus pages") is alive on these About pages too. If I'm trying to swing by the records office before my afternoon clinical, I have no idea if they're open at 7 AM or close at 4 PM.
- Map & Directions in nav: present, but goes to `#` (dead link). Same for Staff Directory.

**about.html:** Campus addresses are mentioned in the "Two Campuses, One Mission" section ("6100 154th Ave N", "901 34th St S"), but no hours, no parking info, no door-by-door for which programs are in which building.

**H3 status from my view:** Still open. The campus About pages do not address it. The Compliance section is excellent for accreditation auditors, useless for "is the records office open right now."

**Suggested fixes:**
1. Add a small "Campus Hours & Office Hours" card or sidebar to the campus About utility area. Not just academic hours, but Records Office hours, Counseling Office hours, Campus Open hours. Even one line each.
2. Fix the dead `#` links on Map & Directions and Staff Directory in the Campus Info dropdown. These are the highest daily-use links on the page after the records request.

---

## Page-by-Page Notes

### about.html (institutional hub)

**What works:**
- Mission, Vision, Core Values are clear, sourced (verbatim per the comment block), and don't bury me in marketing fluff.
- Stats source line ("Source: Pinellas Technical College, www.myptc.edu, retrieved April 2026") is genuinely good practice. Builds trust without me having to dig.
- Annual Impact Report PDF link works (Finalsite CDN URL is real).
- Accreditation cards have full mailing addresses and phone numbers, so if I ever need to file a complaint or verify accreditation independently I can.
- Breadcrumb is semantically correct (`<nav aria-label="Breadcrumb"><ol>`), and H13 is closed.

**What needs work:**
- **Utility bar Student Portal, Apply Now, Events all `href="#"`.** C7 still open here.
- **Current Students dropdown: every link is `href="#"`.** Canvas Login, Focus / SIS Portal, Academic Calendar, Transcript Request, Tech Support. Five dead links in the dropdown a current student is most likely to use. This is worse than the issues tracker reflects.
- **Leadership section is still placeholder icons** (C3 from the tracker). Three generic `fa-user` circles labeled "Campus Director / Clearwater Campus", "Campus Director / St. Petersburg Campus", "District Administration". As a current student I genuinely want to know who runs my campus. C3 marked CRITICAL since 2026-04-15.
- "View Full Staff Directory" button at the bottom of the Leadership section is `href="#"`.
- No "Two Campuses" section link to clearwater-about or stpete-about. The page links to `clearwater.html` and `stpete.html` (campus homepages) but doesn't acknowledge the new About sub-pages exist. If I came here to find the Code of Conduct, I'd dead-end.
- History timeline is just two entries (1962 and "Today"). The comment explains the four middle entries were removed pending verification, which is the right call per the binding rule, but visually it makes the history section feel anemic. A "More history coming as records are confirmed" line would soften it.

**Suggested fixes:**
1. Replace all `href="#"` in utility bar and Current Students dropdown with real Canvas/Focus URLs.
2. Add "About this Campus" link items to the Campuses dropdown pointing to clearwater-about.html and stpete-about.html (currently the dropdown only has the campus homepages).
3. Add a sentence + link in the "Two Campuses" section: "For campus-specific accreditation, catalogs, and records, visit [About Clearwater Campus] or [About St. Pete Campus]."
4. C3 leadership: even if photos aren't ready, names and titles are not protected info. Drop names with placeholder photos rather than placeholder names with placeholder photos.

### clearwater-about.html

**What works:**
- Campus utility bar with phone, address, Canvas, Focus, Main Site, and a quick-jump to St. Pete. Excellent for cross-campus students or staff.
- The 7 compliance cards are the right inventory: Accreditation, Catalog, Written Plans, School Improvement Plan, Safety & Security, Financial Accountability, Records Request. All link to live PTC pages or PDFs at real URLs.
- "Request Your Records" card has a named PCSB email contact (canfieldj@pcsb.org). For a current student about to graduate (mid-July 2026 for many of us), this is exactly what I'd come here for.
- Section header phrasing ("Accreditation, Records & Compliance") is precise without being intimidating.
- Breadcrumb correct: `<a href="clearwater.html">Clearwater Campus</a> / About This Campus`.

**What needs work:**
- **No Code of Conduct card.** This is the single biggest omission. STP has it, CLW doesn't. As a Clearwater student I'd absolutely look for this here.
- Footer says "Preparing students... since 1961" but the institutional about.html says "since 1962." The Our Story section on about.html says "Since 1962, Pinellas Technical College has offered students first-rate career and technical education." Inconsistency: 1961 vs 1962. (Also appears on stpete-about.html.) Per the binding rule about content coming from approved live sites verbatim, one of these is wrong. **My guess: 1962 is the institutional founding date and 1961 in the campus footer is a typo.** Worth verifying.
- Address in the utility bar links to `href="#"` instead of a Google Maps URL. If I'm new to campus I want to tap-to-navigate.
- Campus phone link works (`tel:`), good.
- Map & Directions, Staff Directory, About This Campus (in Campus Info dropdown), Post a Job for Students, Advisory Committees: all `href="#"`. The "About This Campus" one is especially confusing because I'm already on About This Campus, and it's a dead link to itself.
- No "Code of Conduct" reference even in body text. If it's not its own card it should at least be mentioned in the records section: "For current Clearwater students, the Code of Conduct is available at [link]."
- Institutional Context paragraph has a typo: "The records on this page are specific to the **Clearwater Campus campus**" (double "campus"). Same on STP page. Cheap fix, big legibility win.

**Suggested fixes:**
1. **Add a Code of Conduct card** matching STP's card structure. If the PDF doesn't exist for Clearwater on the live site, route this to `docs/audit/follow-ups.md` as a high-priority item for the live-site team.
2. Fix the "Clearwater Campus campus" / "St. Petersburg Campus campus" duplication in the Institutional Context paragraph.
3. Verify "since 1961" vs "since 1962" and reconcile across about.html, clearwater-about.html, stpete-about.html footers.
4. Wire Map & Directions to a real Google Maps URL using the address PTC already publishes.
5. Make the "About This Campus" link in the Campus Info dropdown self-aware (current page indicator, or remove it from the dropdown when on the page itself).

### stpete-about.html

**What works:**
- Same strong utility bar as Clearwater (phone, address, Canvas, Focus, Main Site, jump-to-Clearwater).
- 8 compliance cards including the **Code of Conduct** (which Clearwater is missing). This is the gold-standard layout the Clearwater page should match.
- Records Request card has a named PCSB contact (kilpatrickc@pcsb.org).
- Breadcrumb correct.

**What needs work:**
- **Footer is missing "Class Schedule"** under "St. Petersburg Links" column (~line 278). Clearwater has it, St. Pete doesn't. Cross-campus inconsistency.
- Same "St. Petersburg Campus campus" double-campus typo.
- Same "since 1961" vs "since 1962" inconsistency.
- Same `href="#"` dead links across the Campus Info dropdown (Map & Directions, Staff Directory, Post a Job, Advisory Committees, About This Campus).
- Programs dropdown shows 7 career clusters, but the institutional about.html and clearwater-about.html show 8. STP is missing "Business & Office." If that's because STP doesn't actually offer Business & Office programs, fine, but it should match what the campus actually offers (issue H2 territory, "St. Pete campus page lists programs not offered there" but in reverse).

**Suggested fixes:**
1. Add "Class Schedule" link to the St. Petersburg Links footer column.
2. Same typo and "since 1961/1962" fixes as Clearwater.
3. Verify the Programs dropdown cluster list against actual STP program offerings; align with institutional list or document why STP excludes Business & Office.

---

## Previously-noted issues affecting this scope

Cross-referenced against `docs/reviews/issues-tracker.md`:

| Issue | Status from this review | Notes |
|---|---|---|
| **C7** Student Portal links dead | **Still open on about.html.** Campus About pages handle it correctly via utility bar Canvas/Focus links (which also `#` but at least are present and labeled). The institutional About page utility bar Student Portal link and the entire Current Students dropdown are still `href="#"`. | Tracker says "Partially Addressed (homepage cluster cards now routed)." About page utility bar and dropdown have not been routed. |
| **C3** Leadership placeholder | **Still open on about.html.** Three generic icons, three generic titles. No name even where one would be safe (e.g., District Administration could just say "Pinellas County School Board"). | Tracker accurately reflects this. |
| **H3** No campus hours / parking / facility info | **Still open across all three.** The campus About pages add address+phone but no hours, no office hours, no parking. The accreditation/compliance focus of these pages is excellent for auditors but unhelpful for "can I drop by Records this afternoon." | Tracker accurately reflects this. The campus About pages didn't take a swing at H3 because the cluster was Compliance-focused. Would belong on the Counselors or campus homepage cluster. |
| **L9** News not campus-specific | Out of scope here, but the campus About pages don't have a news section, which avoids the problem entirely. | No regression. |
| **H5** No named program counselor | Still open. None of the About pages name counselors. Records contacts are there, counselors are not. | Tracker accurately reflects this. |
| **L4** Accreditation acronyms not explained | **Resolved** per tracker. Verified on about.html: COE wrapped in `<abbr title="Council on Occupational Education">`. Confirmed closed. |
| **H13** Breadcrumb semantics | **Resolved** per tracker. Verified semantic `<nav aria-label="Breadcrumb"><ol>` on all three pages. Confirmed closed. |

**New issues surfaced in this review (candidates for the tracker):**
- Code of Conduct card missing on clearwater-about.html (asymmetry with STP). Priority: High for current Clearwater students.
- "since 1961" vs "since 1962" inconsistency between institutional about and campus footers. Priority: Medium (content accuracy / brand consistency).
- "Clearwater Campus campus" / "St. Petersburg Campus campus" double-noun typo. Priority: Low (typo fix).
- St. Pete About footer missing Class Schedule link present on Clearwater About. Priority: Low.
- about.html Campuses dropdown doesn't link to the new clearwater-about / stpete-about sub-pages. Priority: Medium (discoverability of new pages).

---

## Top 3 Issues (ranked by daily inconvenience)

### 1. Code of Conduct missing from clearwater-about.html (asymmetry with St. Pete)
**Why this hits daily life hardest:** Code of Conduct is the document I'd actually need to consult. Attendance policy, dress code in clinical, academic integrity, phones in class. STP has it as a card, CLW doesn't. As a Clearwater MA student this is the page I'd land on, and the most-needed compliance doc isn't here.
**Fix:** Add an 8th card to clearwater-about.html mirroring STP's Code of Conduct card. If the live Clearwater PDF doesn't exist, log to `docs/audit/follow-ups.md` as high-priority and put a "Contact campus office for current Code of Conduct" placeholder card, not silence.

### 2. about.html Current Students dropdown is five dead links (C7 still open)
**Why this hits daily life hardest:** Anyone landing on about.html from a Google result who then tries to bounce to Canvas, Focus, Academic Calendar, Transcript Request, or Tech Support hits `href="#"` on every single one. That's not a partial fix, that's an entire dropdown of broken links. The campus About pages handle this better (utility bar at least labels Canvas / Focus), but the institutional hub is the most-trafficked entry point and it's the worst offender.
**Fix:** Drop the real production Canvas URL (pcsb.instructure.com), the real Focus URL, and the real Academic Calendar URL into about.html lines 314 (utility bar Student Portal), 423-427 (Current Students dropdown). These are known constants. C7 needs to escalate from "Partially Addressed" to "must close before any campus stakeholder sees this page."

### 3. No campus hours anywhere on About pages, plus dead Map & Directions links (H3 still open)
**Why this hits daily life hardest:** "Is the records office open Friday afternoon?" "Where do I park for evening clinicals?" These are the two-second questions a current student has multiple times a week. Address and phone are in the utility bar, but a phone tree at 4:55 PM is not the answer I want when I could have read "Records Office: Mon-Thu 8 AM-4 PM" in a sidebar. Map & Directions in Campus Info is a `href="#"` so I can't even one-tap navigate there.
**Fix:** Add a "Campus Hours" card or sidebar to the campus About pages with three line items: Campus Hours, Records Office Hours, Counseling Office Hours. Wire the Map & Directions dropdown link and the address in the utility bar to a Google Maps URL. Hours are public info already published in the campus catalog PDF, so this isn't a content-source rule violation, it's pulling forward what's already approved.
