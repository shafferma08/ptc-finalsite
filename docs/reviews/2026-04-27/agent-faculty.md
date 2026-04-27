# Faculty Review - 2026-04-27

Reviewer: Robert (CNC Machining instructor, St. Pete campus, 8 years)
Pages reviewed: about.html, clearwater-about.html, stpete-about.html

## Program Representation

I came in looking for myself first. Honest answer: my CNC Machining program is not represented at all on any of these three pages. I get that these are institutional and campus-level About pages and not program detail pages, but the way the institutional About talks about programs is uneven. The about.html "Two Campuses, One Mission" section (line 717-720) calls out specific programs by campus:

> "The Clearwater Campus at 6100 154th Ave N is home to health sciences, automotive technology, welding, HVAC, and more. The St. Petersburg Campus at 901 34th St S features culinary arts, cosmetology, IT networking, electrical, and commercial vehicle programs."

CNC Machining is at St. Pete and is a flagship trades program here. It is not in that sentence. Neither is Welding-Advanced (which I know is taught here). When prospective students read this paragraph they form a picture of what each campus does. Right now my program is invisible in that picture.

The "By the Numbers" stats (60+ programs, 250+ industry partners, nearly 5,000 full-time students) read fine and match what I tell prospective students at open house. The "since 1962" date in the hero subtitle and Our Story matches what I have always said. Good.

One thing that is clearly wrong: both campus About footers say "since 1961" (clearwater-about.html line 251, stpete-about.html line 256) while the institutional About page and footer tagline say "since 1962" (about.html line 541, footer tagline line 761). It cannot be both. Pick one and use it everywhere.

## Directing Students

This is what I do every week. Student walks up after class and asks "where do I find X." Can I send them to a clean URL?

What I can send them to confidently from these three pages:
- The Annual Impact Report PDF on about.html (good, direct link, opens in new tab)
- The COE accreditation card with phone number on about.html (useful when a student asks "is this place real")
- The St. Pete campus catalog PDF on stpete-about.html (this is the one I send most often, and it works)
- The St. Pete Code of Conduct PDF on stpete-about.html (this is genuinely new and helpful, I had no clean link for this before)
- The St. Pete records request page for former students on stpete-about.html, with the named contact `kilpatrickc@pcsb.org` (good, students always ask me where to get a transcript)

What I cannot send them to:
- "Apply Now" in the utility bar of about.html and the campus About header CTA both go to "#". When a kid is ready to apply I do not want to send them to a page that does nothing.
- "Student Portal" link in the about.html utility bar goes to "#"
- "Canvas Login" and "SIS Portal / Focus" in the campus utility bars both go to "#"
- "Staff Directory" in the about.html About PTC dropdown and in the Campus Info dropdowns on both campus About pages goes to "#"
- "View Full Staff Directory" button at the bottom of the Leadership section on about.html goes to "#" (line 705)
- "About This Campus" in the Campus Info dropdown on both campus About pages goes to "#" — this is broken. I am literally on the campus About page and the nav link to it is dead. If the page exists, wire the link.

Verdict: the new compliance cards are excellent for sending students to records and catalog. The utility bar and nav are still not safe to verbally walk a student through.

## Campus Accuracy

Phone numbers I checked match what is on my desk phone list:
- Clearwater 727.538.7167 (about.html line 308, clearwater-about.html line 25, footer line 250)
- St. Pete 727.893.2500 (about.html line 310, stpete-about.html line 25, footer line 255)

Addresses match what I know:
- Clearwater 6100 154th Ave N, Clearwater, FL 33760 (clearwater-about.html footer line 249)
- St. Pete 901 34th St S, St. Petersburg, FL 33711 (stpete-about.html footer line 254)

Note that about.html line 719 lists campus addresses without ZIP. That is fine for the institutional page but inconsistent with the campus footers that include ZIP.

What is missing for both campuses: hours of operation. When a student asks "what time does the front office open" or "until what time is the building open on Thursday," I have nothing on these pages to point at. This is mentioned in H3 in the tracker against clearwater.html / stpete.html, but the new About pages would also be a logical home for it under a "Campus Hours" item.

Counselor identification: there is no campus counselor name on either campus About page. I get that this might live on a counselors page, but for a student dropped on stpete-about.html with a question about who to call, there is no name on the page except the records request email `kilpatrickc@pcsb.org`. Cheri Ashwood is our St. Pete welding counselor and she is a real go-to, but she is not visible.

Records request contacts:
- Clearwater: `canfieldj@pcsb.org` on clearwater-about.html line 235
- St. Pete: `kilpatrickc@pcsb.org` on stpete-about.html line 240

Both look plausibly named, both appear unique to the right campus, and the linked records-request URLs go to the campus-specific subdomains. Good.

Asymmetry I want to flag: the St. Pete About has 8 cards (it includes a dedicated Code of Conduct card) but the Clearwater About has 7 cards (no Code of Conduct card). If both campuses have a Code of Conduct, both should link to it. If only St. Pete publishes one, that should be confirmed because it could just be a missing link on the Clearwater side.

Also, the institutional context paragraph on both campus pages (clearwater-about.html line 178, stpete-about.html line 177) reads:

> "The records on this page are specific to the Clearwater Campus campus and are maintained..."

"Clearwater Campus campus" and "St. Petersburg Campus campus" — the word "Campus" is duplicated. That looks like a template variable substitution that did not get cleaned up. I would notice this if a student showed it to me.

## Faculty Resources

This is where the page falls down hardest for me as an employee.

There is no faculty entry point anywhere on these three pages. No "For Faculty & Staff," no professional development section, no PLN link, no link to the Canvas LMS that I use every day, no internal calendar, no internal forms (sub request, mileage, etc.). Everything on these pages is student-facing or accreditation-facing.

The Staff Directory link, which is the closest thing here to a faculty resource, is dead in three places (about.html dropdown line 441, both campus Campus Info dropdowns, and the Leadership section CTA on about.html line 705).

The Leadership section on about.html (lines 687-707) shows three placeholder generic-person icons with the labels "Campus Director / Clearwater Campus," "Campus Director / St. Petersburg Campus," "District Administration / Pinellas County Schools." No names. No photos. After 8 years here I know who my campus director is and so do most of my colleagues, but a prospective student or new hire would walk away with nothing.

Tracker check requested:
- M7 (faculty resources visibility / staff directory link dead): STILL OPEN. Confirmed dead in the About PTC dropdown on about.html line 441, the Campus Info dropdown on clearwater-about.html line 130, the Campus Info dropdown on stpete-about.html line 129, and the Leadership CTA button on about.html line 705. M7 is not closed.
- M8 (accreditation report links): PARTIALLY RESOLVED on these pages, more so than the tracker says. The campus About pages now link out to the live campus accreditation page, the campus catalog PDF, the written plans page, the school improvement plan, the safety/security data page, the financial accountability (HEERF) reports, and (St. Pete) the Code of Conduct PDF. The institutional about.html still does not link to a downloadable accreditation status letter or COE report; the accreditation card on about.html only shows COE, Cognia, and PCSB contact info, no documents. So the campus pages closed most of the gap, but the institutional accreditation section on about.html is still doc-less. I would mark M8 "substantially resolved at the campus level, still partial at the institutional level."

## Page-by-Page Notes

### about.html (institutional About)
- What works: Mission statement is verbatim and prominent. Vision and core values section reads cleanly. By the Numbers stats are believable and sourced. Annual Impact Report PDF link works. Accreditation cards include addresses and phone numbers.
- What needs work:
  - "Two Campuses, One Mission" paragraph (line 719) names specific programs per campus and omits CNC Machining and Welding-Advanced. The list reads as authoritative but is incomplete.
  - Leadership section (lines 687-707) is three placeholder icons with no names. Looks unfinished.
  - "View Full Staff Directory" button (line 705) goes to "#".
  - Staff Directory dropdown link (line 441) goes to "#".
  - History timeline only has two entries (1962 and Today). I understand the comment that the others were removed pending verification, but this leaves the timeline looking thin compared to a 60-year institution.
- Suggested fix:
  - Replace the campus-program sentence with either a fuller program list per campus or with a link out to programs.html that filters by campus, so the picture is complete rather than partial. "and more" is doing too much work.
  - Even before real photos and bios are ready, put real names on the campus directors and the district lead. Names alone close most of the credibility gap.
  - Wire all four Staff Directory pointers to either the actual directory page or to contact.html as a placeholder destination, not "#".
  - For the timeline, add a couple more verifiable milestones (campus founding dates, COE accreditation year) once Communications can confirm. An obviously gappy timeline reads worse than no timeline.

### clearwater-about.html
- What works: Compliance cards are specific (catalog has "rev1-29-26" file, written plans listed by name, financial accountability scoped to 2021-2023). External links are properly target=_blank with rel=noopener. Records request email is named to a person.
- What needs work:
  - "Clearwater Campus campus" double-word in the institutional context paragraph (line 178).
  - Footer says "since 1961" (line 251), institutional About says "since 1962."
  - "About This Campus" in the Campus Info dropdown (line 128) goes to "#" but I am on that very page.
  - No Code of Conduct card (St. Pete has one, Clearwater does not). Either Clearwater does not publish one, or the link is missing.
  - No campus hours, no parking info, no map link out, no counselor name on the page.
- Suggested fix:
  - Fix the "Campus campus" duplication in the template.
  - Standardize "since 1962" across all three footers.
  - Wire the Campus Info "About This Campus" link to clearwater-about.html.
  - Confirm with Clearwater administration whether a Clearwater Code of Conduct PDF exists. If yes, add the card. If no, log on follow-ups.md so the live-site Clearwater team adds one.
  - Add a compact "Campus Quick Facts" card or a sentence-level callout listing hours, parking, and the main counselor contact. Even one line linking to the campus counselors page would help.

### stpete-about.html
- What works: 8 compliance cards including the Code of Conduct PDF. Records request email `kilpatrickc@pcsb.org` is named and campus-specific. Catalog and SIP both link to dated PDFs that read as current.
- What needs work:
  - Same "St. Petersburg Campus campus" double-word as Clearwater (line 177).
  - Same "since 1961" footer mismatch (line 256).
  - Same dead "About This Campus" Campus Info nav link (line 127).
  - CNC Machining is taught here and is not surfaced anywhere on the page even at the topic level. Same for several other St. Pete signature trades.
  - No mention of CVAEC (Clearview Adult Education Center) as a St. Pete extension location. We use it for the IT IET program. If the institutional About at line 541 is going to mention "extension and clinical locations," the campus About is the right place to actually name them.
- Suggested fix:
  - Fix the "Campus campus" duplication.
  - Standardize "since 1962" in the footer.
  - Wire "About This Campus" to stpete-about.html.
  - Add a "Programs at this campus" card or short section near the top that links to the campus filter on programs.html. Faculty looking at this page should at least see that their program is acknowledged at the campus level.
  - Add a one-line note about CVAEC as a St. Pete extension location, with a link to its hours and address if available.

## Top 3 Issues (ranked by frequency of student confusion)

1. Dead "Apply Now," "Student Portal," and "Canvas Login" links across the utility bars and nav on all three About pages. This is the question I get most often, and the buttons do not yet go anywhere. (Tracker: C2 / C7, still open.)
   - Suggested fix: route Apply Now to the live PTC application URL even before the redesign portal is built. Same for Canvas and Focus, point them at the existing live URLs. A correct destination beats a redesign-pure "#".

2. Dead Staff Directory link in four places, plus a leadership section with no names. When a student asks "who do I call," there is currently no answer on the page. (Tracker: M7, still open. Confirmed not resolved on these three pages.)
   - Suggested fix: even a placeholder directory page with a phone number and the campus director's name closes 80% of this. Wire all four Staff Directory targets to that placeholder. Fill in real names on the Leadership cards.

3. "Campus campus" double-word and the 1961/1962 founding-year mismatch read as sloppy and undermine trust in the page. Both are on both campus About pages. Students do not call me about this, but parents and fellow faculty do notice.
   - Suggested fix: fix the template variable so it does not output "Campus campus." Audit every footer tagline and standardize on "since 1962" matching the institutional About.

Honorable mention from a faculty perspective: there is still no employee-facing entry point anywhere. PD resources, PLN, internal forms, and a faculty contact list are entirely absent. This is not on the prospective-student critical path so it is not in the top 3, but as the senior CNC instructor I would like to see at least one "For Faculty & Staff" link surface on the institutional About page.
