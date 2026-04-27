# Prospective Student Review - 2026-04-27

Reviewer persona: Jaylen, 19, Largo FL, first-gen, mobile-first, browsing About pages after googling "trade school near me."
Pages reviewed:
- about.html (institutional About hub)
- clearwater-about.html (Clearwater campus About, split out 2026-04-26)
- stpete-about.html (St. Pete campus About, split out 2026-04-26)

## First Impressions (Homepage)

These aren't the homepage, but they're often the second click for someone like me trying to figure out if PTC is legit. So my "first impressions" here are: "Is this a real school? Should I trust it?"

**about.html:** Yes. Within 5 seconds I see "About Pinellas Technical College," "For over 60 years," and a green branded hero. The breadcrumb (line 481-486) tells me where I am. The mission quote (line 498) and "Nearly 5,000 Full-Time Students" stat (line 568) make this feel like a real place, not a pop-up trade school scam.

**clearwater-about.html and stpete-about.html:** Confusing. The hero just says "Campus accreditation, catalog, written plans, safety reports, and other compliance documents" (line 167 / line 166). I don't know what "written plans" or "compliance documents" are. This page feels like it was built for an auditor, not for me. If I'm a 19-year-old who clicked "About This Campus" expecting to learn what the campus is like (programs offered, what the building looks like, who works there, hours), I land on a page that's basically a PDF library. Nothing about *being a student* there.

## Finding a Program

None of these three About pages help me find a program directly, which is fine because that's not their job. But there are signals:

- about.html line 542: "PTC's emphasis is on postsecondary education focusing on over 40 career areas and about 60 programs." That's reassuring, lots of options.
- about.html line 564: stat says "60+ Programs across 40+ Career Areas." But the homepage and resolved tracker item M12 say PTC has "41 programs across 8 career clusters." Which is it - 41 or 60? As a prospect, this inconsistency makes me trust the site less. (Looks like the live site says 60 programs / 40 career *areas*, and the redesign decided on 41 programs / 8 *clusters* for the homepage. Both can be true but they read like contradictions to a teenager.)
- about.html line 718-719: "Two Campuses, One Mission" section actually names programs by campus ("welding, HVAC" at Clearwater, "culinary arts, cosmetology, IT networking, electrical" at St. Pete). This is the most useful prospect content on any of these three pages - it's the only place where I learn what's offered where.
- The campus About pages (clearwater-about, stpete-about) say nothing about programs at all. If I'm picking a campus based on programs, this page is useless for that.

## Understanding Costs

Zero tuition info on any of the three pages. The about.html footer (line 776) and nav (line 386) point to tuition-aid.html, and the mission section says "affordable tuition, financial aid, and direct connections to local employers" (line 544), but no number. As a 19-year-old worried about whether I can afford this, I want even a ballpark - "Programs typically run $X per hour" or "Most programs total $Y-Z." Nothing here.

The campus About pages don't even mention cost. The catalog PDFs probably contain it but I have to download a PDF to find out, which is a barrier (data, attention span, and I don't trust random PDFs on my phone).

This isn't a regression from prior reviews - tracker H6 is still open - but it's worth noting that the campus About split missed a chance to surface "see tuition" as a quick link.

## Application Flow

**about.html:**
- "Apply Now" in the utility bar at line 315 goes to `#`. Dead.
- "Apply Now" in the header isn't here on the main-site shell, but there's a CTA band at the bottom (line 736-749) with "Apply Now" and "Request Info" both linking to `#`. Both dead.
- The Admissions dropdown (line 369-384) goes to admissions.html anchors. That's fine.

This is tracker C2 and it's still open - confirmed.

**clearwater-about.html and stpete-about.html:**
- "Apply Now" button in the header (line 145 each) goes to `#`. Dead. This is more painful on the campus pages because the Apply Now button is in a much more prominent spot - it's right at the top of the header next to the menu, on every campus page. As a prospect, the most aggressive CTA on the page does nothing.
- No CTA band at the bottom of either campus About page. After I scroll through 8 compliance cards, the page just ends with the footer. No "Ready to apply?" prompt, no "Talk to a counselor," no "Visit campus." This is a missed conversion moment.

## Mobile Considerations

I do almost everything on my phone. Here's what jumped out reading the HTML:

**about.html (lines 274-295) has a `@media (max-width: 768px)` block that does the basics**: stacks the about-grid to one column, drops accred-cards to one column, drops about-stats to two columns, drops leadership-grid to one column, shrinks the hero title from 2.5rem to 2rem. That's good and resolves most of the mobile complaints from the prior tracker.

**However:**
- The page-hero subtitle at line 488 ("For over 60 years, PTC has been Pinellas County's trusted source...") doesn't have a mobile font reduction in the media query. At 1.15rem on a 360px screen, that paragraph will eat half the visible viewport before I scroll to anything else.
- The mission statement text at line 498 stays at 1.5rem (line 111). On a small phone that's still comfortable, but the quote is long enough that it'll be 6+ lines.
- Stats at line 562-578: "Nearly 5,000" is two words and 9 chars - fine. But "Programs across 40+ Career Areas" at the small label size on a stacked 2-column mobile grid could wrap awkwardly. Worth eyeball-testing on a real iPhone.

**clearwater-about.html and stpete-about.html have NO `<style>` block at all** - they rely entirely on styles.css. The campus-compliance-grid uses `repeat(auto-fit, minmax(300px, 1fr))` (line 194 / line 193) which is responsive by design. Good.

**But the inline-styled hero on the campus About pages (line 158 / line 157)** has `font-size: 2.5rem` hard-coded with no mobile reduction. On a 360px phone the title "About PTC St. Petersburg Campus" or "About PTC Clearwater Campus" will be huge - probably overflow or wrap to 3 lines. This is exactly the H7 issue (fixed font sizes on About pages) that the tracker says is "Partially Addressed (responsive fonts using clamp())." It is NOT addressed on the new campus About splits because they were built fresh on 2026-04-26 with the old hard-coded values copied over.

**Inline styles everywhere on the campus pages** (the entire hero is inline-styled, the institutional context section is inline-styled, every compliance card is inline-styled). This isn't a mobile-specific problem but it's a maintainability problem and it means the Designer/CMS reviewers will probably flag this. From my user-side perspective, it could mean these pages will visually drift from the rest of the site over time.

## Page-by-Page Notes

### about.html (institutional About hub)
**What works:**
- Breadcrumb is present and uses semantic markup (line 481-486). H13 confirmed resolved.
- Mission quote is prominent and easy to read.
- "Two Campuses, One Mission" section (line 715-731) is the single most prospect-useful section on this page - it tells me which campus has what, and gives me clear buttons to each campus (line 722-723).
- "Annual Impact Report" CTA (line 670-672) links to a real PDF. This is a credibility signal - shows the school publishes outcomes data.
- COE abbr expansion (line 625) confirms L4 is closed for this page.
- Source citation under the stats (line 580) is unusual for a college site but a nice trust signal: "Source: Pinellas Technical College, www.myptc.edu, retrieved April 2026."

**What needs work:**
- **C3 (leadership placeholder icons) still open.** Lines 689, 694, 699 - all three leader cards still show `<i class="fas fa-user"></i>` instead of a real photo, and the names are generic role labels ("Campus Director", "Campus Director", "District Administration") rather than actual names. As a prospect, this is the single most damaging element on the page. A real college shows you who runs it. Generic icons + generic titles in a "Campus Leadership" section reads like the page was never finished. This is a trust killer for me.
- **M5 (card style fragmentation) and M6 (duplicate CSS) still open.** This page has its own 280-line `<style>` block (lines 13-296) defining `.accred-card`, `.leader-card`, `.about-grid`, `.timeline`, `.about-stats` - all of which have pattern matches in the canonical `.card` system in styles.css per the project CLAUDE.md. Not a user-facing issue per se, but means future styling changes won't be consistent.
- **Stat inconsistency with homepage.** Line 564 says "60+ Programs across 40+ Career Areas," homepage and tracker M12 say 41 programs / 8 clusters. As a prospect I read both pages back-to-back and the numbers don't match. Pick one framing or footnote it ("60+ courses across 41 programs in 8 clusters" or similar).
- **History timeline is now just two dots: 1962 and "Today"** (lines 594-606). The comment at line 598-602 says four entries were removed because they couldn't be verified. As a prospect this looks weird. Better to either: (a) keep just 1962 as a single milestone callout (no timeline), or (b) get the missing dates verified before the page ships. Right now the green vertical line connects two points 60+ years apart with nothing in between, which makes the school look like it stopped doing things.
- **"View Full Staff Directory" button at line 705 goes to `#`.** Dead. This is M7 in the tracker (still open). For me as a prospect, less important than Apply Now being dead.
- **"Request Info" CTA at line 745 goes to `#`.** Dead. This is the second-most important CTA for a prospect (after Apply Now). Tracker C2 covers this.

**Suggested fix:**
- For C3: even one real photo + name + email is better than three placeholders. If real headshots aren't available yet, replace the leadership grid with a single "Connect with PTC Leadership" card linking to the Staff Directory (once that page exists), or with a "Contact Admissions" card pointing to a counselor. Don't ship placeholder humans.
- For the timeline: collapse to a single "Established 1962" milestone card or a one-line "Serving Pinellas County since 1962" callout. The two-dot timeline is worse than no timeline.
- For the program count: pick one canonical phrasing and use it sitewide. My recommendation: "41 programs across 8 career clusters" since that matches the homepage and the resolved M12 entry.

### clearwater-about.html (Clearwater campus About)
**What works:**
- Page exists and has a clear scope (campus-specific compliance).
- The 7 compliance cards (Accreditation, Catalog, Written Plans, School Improvement Plan, Safety, Financial, Records Request) are well-organized and link to real PDFs and live-site pages.
- The institutional-context block at line 175-180 explains "for the broader PTC story see About PTC" with a link to about.html. Good IA decision - tells me where to go for what.
- Records request includes a real email address (canfieldj@pcsb.org, line 235). Trust signal.
- Footer carries the campus address and phone. Good.

**What needs work:**
- **The hero subtitle ("Campus accreditation, catalog, written plans, safety reports, and other compliance documents") is jargon-heavy.** As a 19-year-old prospect, "written plans" and "compliance documents" mean nothing. This page exists for accreditation and former-student records, but the URL and breadcrumb path ("About This Campus") suggest it's where I'd land to learn about the campus.
- **No campus content for prospects.** This page has zero content about: programs offered at Clearwater, the campus address (only in footer/utility bar), hours, parking, what the building looks like, faculty, student life. A prospective student looking for "what is the Clearwater campus like" gets nothing. This is the H3 issue from the tracker, which is open and applies here too.
- **"About This Campus" navigation language is misleading.** The Campus Info dropdown's "About This Campus" link points here (and confirmed the dropdown wires to this URL per CLAUDE.md). But this page is really "Compliance Documents." Either rename the page (e.g., "Campus Records & Compliance") or actually add the campus context content.
- **Hero font-size 2.5rem hard-coded inline** (line 166), no mobile reduction. H7 regression on this new page.
- **Apply Now button (line 145) goes to `#`.** Same C2 issue. More acute here because of placement.
- **Typo / awkward phrasing at line 178:** "specific to the Clearwater Campus campus." "Campus campus" - duplicated word.
- **No CTA band at the bottom.** After the compliance grid the page just ends. Even a small "Want to learn more about Clearwater? Visit the campus page or schedule a tour" card would help.
- **Inline styles everywhere** (the section at line 175, the compliance-card articles at line 197+, the page-hero at line 158). M6 violation, harder to maintain.

**Suggested fix:**
- Rewrite the hero subtitle in plain language: "Records, plans, and safety reports for the Clearwater campus, plus accreditation details. Looking for what we teach? Visit our [Programs page] or the [Clearwater campus home]."
- Add a 1-2 paragraph "About the Clearwater Campus" section above the compliance grid that mirrors what the institutional About says about Clearwater (line 718-720 of about.html: "home to health sciences, automotive technology, welding, HVAC..."). That gives prospects a reason to be on this page.
- Fix line 178 typo: "specific to the Clearwater Campus" (drop the second "campus").
- Wrap the inline-styled hero in `.page-hero` class and let the about.html-style media query handle mobile font sizes. Better, move the styles to styles.css so both campus About pages share them.
- Add a CTA band at the bottom: "Ready to enroll at Clearwater? [Apply Now] [Schedule a Tour]" matching the institutional About style.

### stpete-about.html (St. Petersburg campus About)
**What works:**
- 8 compliance cards (everything Clearwater has, plus Code of Conduct at line 220-224). The asymmetry is acknowledged in the redesign which is good.
- Records contact email is specific (kilpatrickc@pcsb.org, line 240).
- Same clean institutional-context handoff to about.html (line 174-179).

**What needs work:**
- **Same typo as Clearwater at line 177:** "specific to the St. Petersburg Campus campus."
- **Same hero language problem.** Line 166 subtitle: "Campus accreditation, catalog, written plans, safety reports, code of conduct, and other compliance documents for the St. Petersburg campus." Even more dense than Clearwater because Code of Conduct was added to the list.
- **Same H7 hard-coded hero font** (line 165, 2.5rem).
- **Same dead Apply Now** (line 144).
- **Same lack of campus-prospect content** (no programs, no hours, no map, nothing about the campus itself).
- **Same lack of CTA band.**
- **Same inline-styles-everywhere maintainability concern.**
- Programs dropdown for St. Pete (lines 65-72) lists 7 career clusters but omits "Business & Office." This is intentional (the Clearwater page has 8 - line 71 "Business & Office") but I wouldn't know to expect this. A prospective student comparing campuses by glancing at the nav menu would notice "Business & Office is missing from St. Pete." Is that real (St. Pete really doesn't offer it) or a typo? No way to tell from the About page.

**Suggested fix:**
- All the same fixes as clearwater-about.html.
- Confirm the missing "Business & Office" cluster in the St. Pete nav is intentional. If yes, that's a campus-specific fact I'd want surfaced on the About page or the campus home: "Career clusters at St. Pete: 7 of PTC's 8 clusters" or similar.

## Status of Previously-Flagged About Issues

| # | Issue | Tracker status | My finding |
|---|-------|----------------|------------|
| C3 | Leadership placeholder icons on about.html | Open | **Still open.** Lines 689, 694, 699 still show fa-user icons and generic role labels. Not resolved. |
| M5 | Card style fragmentation (.step-card / .info-card / etc.) | Open | **Still open.** about.html has its own .accred-card, .leader-card, .about-stat - none use canonical .card. Campus About pages introduce a new .compliance-card pattern that's also non-canonical. New violation. |
| M6 | Duplicate CSS across page-specific styles | Open | **Still open and possibly worse.** about.html has 280 lines of inline `<style>` block. Both campus About pages have inline styles on every section and every card - heavy violation. Not regressed on about.html, but the new campus pages added more. |
| H7 | Mobile responsiveness - fixed font sizes on About | Partially Addressed | **Partial regression on the new campus pages.** about.html's media query is in place (lines 274-295) so the institutional hub is OK. But clearwater-about.html and stpete-about.html have hard-coded 2.5rem hero titles inline (line 166 / 165) with no mobile override. This is exactly H7 reintroduced in the new files. |
| M8 | Missing accreditation report links & program outcomes data | Partially Addressed | **Improved.** about.html now has the accreditation section with COE/Cognia/PCSB cards (lines 614-654) and links to the Annual Impact Report PDF (line 670-672). Campus About pages now have direct links to per-campus accreditation pages on the live site. Outcomes data still not shown numerically (no job placement %, no graduation rate), so the "program outcomes" half is still open. |

## Top 3 Issues (ranked by impact on my decision to enroll)

**1. Leadership placeholders on about.html still show generic icons and titles (C3)**
Three identical fa-user icons under "Campus Leadership" with labels "Campus Director" / "Campus Director" / "District Administration" (about.html lines 687-703) makes me question whether this school is real and finished. A real college names its people. As a first-gen kid trying to figure out if PTC is a scam, this is the single biggest trust deficit on the About cluster. Either ship real photos and names, or remove the leadership grid entirely until you have them - a missing section is better than a placeholder section.

**2. Campus About pages don't help prospective students at all**
Both clearwater-about.html and stpete-about.html are pure compliance hubs. The hero subtitle reads like it's written for an accreditor: "Campus accreditation, catalog, written plans, safety reports, and other compliance documents." There is zero campus-life content (programs offered here, hours, parking, what the buildings are like, who teaches, student stories). When the Campus Info nav says "About This Campus," I expect to learn about the campus - not download a PDF library. Either rename these pages (e.g., "Campus Records & Compliance") and put the prospect-facing campus context somewhere else, or add a 2-paragraph "About the Clearwater Campus" / "About the St. Pete Campus" section above the compliance grid.

**3. Application path is broken on every About page**
"Apply Now" in the about.html utility bar (line 315), the about.html CTA band (line 744), and the Apply Now buttons on both campus About headers (line 145 / 144) all go to `#`. Tracker C2 is still open. As a prospect motivated to take action by what I just read, every conversion path is dead. This is the #1 blocker on the entire site for someone like me, and the About cluster cannot honestly close while it remains broken. The cluster is content-correct but conversion-broken.

## Closure assessment

If "About cluster closure" means "content audit complete and IA settled," I'd say yes - the institutional/campus split is the right call, the content is verifiable, the compliance documents are well-organized.

If "closure" means "this cluster is ready for a prospect to land on and convert," I'd say no. C3 (leadership placeholders), the new H7 regression on the campus About pages, the dead Apply Now buttons, and the lack of any prospect-facing campus context on the new campus About pages all argue for keeping the cluster open until those are addressed. At minimum, the typo "Campus campus" on lines 178 (Clearwater) and 177 (St. Pete) should not ship.

My recommendation: ship the institutional/campus split as the IA decision (good), but mark the cluster as "content-verified, polish open" and address C3, the typo, the campus-About hero language, and the missing CTA bands before declaring it cluster-complete. Then move to Compliance.
