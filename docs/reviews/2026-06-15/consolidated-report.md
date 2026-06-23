# PTC Website Review - Consolidated Report
**Date:** 2026-06-15
**Pages Reviewed:** index.html, clearwater.html, stpete.html, programs.html, admissions.html, tuition-aid.html, practical-nursing-clearwater.html, contact.html, consumer-information.html, about.html
**Agents:** Prospective Student, Current Student, Parent/Guardian, Faculty, Director, Designer, Accessibility, Finalsite CMS (+ review-pm synthesis). Mockup mode.

## Launch-Blockers for Jun 18 Mockup
These must clear before the mockup is shown externally. Ordered by risk.

1. **Phantom programs still on the homepage (index.html).** NEW this cycle and the single biggest accuracy problem in the batch. The campus pages were scrubbed today, but `index.html` was not. The Health Sciences featured-program card (L352) still names "Medical Assisting, Pharmacy Tech, Patient Care," and the Information Technology card (L358) still names "Television Production." None of these exist in the A-Z catalog. This is the most board-facing and most-visited page on the site, and "Television Production" is one of the exact phantom programs the campus pages were just fixed for. **Flagged by Director (top issue), Prospective Student, Parent/Guardian.** Fix: rewrite both blurbs to real catalog programs (Health = "Practical Nursing, Phlebotomy, Medical Administrative Specialist, Dental Assisting, and more"; IT = "Computer Systems & IT, Network Support Services, Computer-Aided Drawing, and Digital Media"). Tracked as **C11 (new)**.

2. **Counselor misattributions on flagship program pages (C9 + new machining instance).** The Practical Nursing page still names "Merritt Scott / scottme@pcsb.org / x2032" as the PN counselor; internal records tie Merritt Scott to Phlebotomy (Valerie Santos is the Clearwater counselor on record). Faculty also found `machining-technologies-clearwater.html` names Lidija Milisav (the Military & Veteran Resources Coordinator) as "School Counselor," the same class of error. A wrong named contact on the two highest-value pages misroutes prospects and reads as careless to a COE visitor. **Flagged by Faculty, Director, Prospective Student, Parent/Guardian, Current Student.** Fix: verify both against the counseling office before any external showing. C9 persists; machining instance tracked as **C12 (new)**.

3. **Dead search button confirmed sitewide on both campus homepages (M47, scope expanded).** `clearwater.html` and `stpete.html` (both L37) ship `<a href="#" class="btn">` with a search icon, no accessible name, and no overlay markup. Keyboard and screen-reader users land on a control announced only as "link" that does nothing. WCAG 4.1.2 / 2.4.4. Acknowledged as by-design pending the sitewide search decision, but a no-op green button reads as a broken site to a skeptical visitor. **Flagged by Accessibility (Serious), Prospective Student, Director.** Fix: port the real `<button id="search-toggle">` + overlay, or hide the affordance before the showing.

The two campus-homepage accessibility regressions (hero `alt`+`aria-hidden` contradiction, and `alt="PTC Logo"`) are one-line mechanical fixes and should ride along with this batch (see High Priority A2/A5).

## Executive Summary
The redesign is in good launch shape and noticeably stronger than the June 11 cycle. The June 11 launch-blockers and the quick-win batch largely landed: mobile-nav disclosure ARIA, the programs filter live region, the nursing eyebrow contrast, the cluster-chip mislabels, and the em-dash titles all verified resolved by multiple personas today, and the programs grid reconciliation is confirmed complete with zero dead links or orphans. The biggest remaining risks are accuracy, not infrastructure: phantom programs were scrubbed from the campus pages today but not from the homepage, and two flagship pages still name the wrong counselor. The deepest structural risk is unchanged and getting worse: the design system is excellent but adopted only by the three hub/homepage pages, while every interior page re-implements heroes, cards, and breadcrumbs inline, which the CMS reviewer confirms will fragment in Composer. The single most-requested content item across personas remains program outcomes (placement, pass rates, salary), which is live-gated.

## Critical Issues (Block Launch)
| # | Issue | Flagged By | Pages Affected | Recommended Fix |
|---|-------|-----------|----------------|-----------------|
| C11 (new) | Phantom programs on the homepage: Health Sciences card names Medical Assisting, Pharmacy Tech, Patient Care; IT card names Television Production. None exist in catalog. Campus pages scrubbed today; homepage was not | Director, Prospective Student, Parent/Guardian | index.html (L352, L358) | Rewrite both blurbs to real catalog programs before Jun 18 |
| C9 | Practical Nursing counselor likely misattributed: page names Merritt Scott (tied internally to Phlebotomy) as PN counselor | Faculty, Director, Prospective Student, Parent/Guardian, Current Student | practical-nursing-clearwater.html (~L599-610) | Verify with Clearwater counseling office (Valerie Santos on record); correct name/email/extension |
| C12 (new) | Machining page names Lidija Milisav (Military & Veteran Resources Coordinator) as "School Counselor" — same misattribution class as C9. Scott Baldwin (instructor) is correct | Faculty | machining-technologies-clearwater.html (~L499-511) | Verify counselor against counseling office; confirm Baldwin as the secondary contact |
| C10 | Welding St. Pete advertises a Day section the official 2026-27 PDF lists as evening-only; TODO comment shipping in production | (carryover; welding-stpete.html not in today's batch) | welding-stpete.html (~L933-944) | Confirm with Cheri Ashwood; publish only verified sections; remove TODO. NOT re-reviewed today |
| C8 | adult-education-pathways.html missing `<script src="script.js">` (mobile nav non-operable) | Accessibility | adult-education-pathways.html | RESOLVED — fix applied; close-eligible (see tracker) |

Note: C8 is moved to close-eligible this cycle; it remains in this table only to record the disposition. C1/C2/C4/C7 remain substantially addressed and are not re-listed as blocking for these ten pages.

## High Priority (Significant UX/Compliance Impact)
| # | Issue | Flagged By | Pages Affected | Recommended Fix |
|---|-------|-----------|----------------|-----------------|
| H4 | No program outcomes anywhere: job placement, credential/NCLEX pass rates, salary. #1 enrollment concern for prospects and parents; missing even on flagship nursing page | Prospective Student, Parent/Guardian, Director, Faculty | All program pages, index, about, consumer-information | Set ONE sitewide sourcing rule; publish at least one credible metric per flagship program; route to follow-ups.md if no live source |
| H6 | Cannot compute per-program total cost: $2.92/hr rate on tuition page, hours on program pages, nobody connects them; only a PDF shows nursing cost | Prospective Student, Parent/Guardian, Director | tuition-aid.html, all program pages | Show estimated total per program (hours x rate) inline, or add a worked example on the tuition page |
| H8/M49 | programs.html 46-card JS filter is not Composer-native; campus deep-links (`?cluster=X&campus=Y`) depend on it. Top build-time risk | CMS | programs.html | Decide architecture before July build: tagged Posts/Collection feed with native faceting (preserves deep-links — verify param support with Addison Richard) vs static anchored A-Z fallback |
| H2 | St. Pete trades blurb advertises "Advanced Welding"; may not be offered there. Equity + accuracy risk | Faculty, Director | stpete.html (L227), programs.html | Confirm real 2026-27 St. Pete offerings; drop Advanced Welding if not taught there |
| H3 | No campus hours, parking, or facility info on campus homepages | Current Student, Parent/Guardian, Faculty, Director | clearwater.html, stpete.html | Add a Campus Hours / Parking block or link prominently to the services-hours page |
| H15 | Clearwater Code of Conduct shows "Pending" on published consumer-information page; St. Pete has current 2025-26 PDF. COE-visit and equity risk | Director, Parent/Guardian | consumer-information.html | Produce CLW Code of Conduct or affirmatively state PCSB district policy as the official substitute (drop "Pending"). Live-gated |
| A2 (M3 regression) | Campus hero `<img>` carries both descriptive `alt` AND `aria-hidden="true"` (contradiction M3 fixed on index). WCAG 1.1.1 | Accessibility | clearwater.html (L157), stpete.html (L157) | Pick one: `alt=""`+aria-hidden if decorative, or drop aria-hidden if meaningful. One-line fix, reference pattern exists on index |
| H7 (regression) | `.page-hero__title` lost clamp() / hard-coded 2.5rem with no mobile override; titles oversized on phone | Designer, Prospective Student | contact.html, tuition-aid.html, consumer-information.html | Restore `clamp(1.85rem, 4vw, 2.5rem)` on the three regressed pages |

## Medium Priority (Quality Improvements)
| # | Issue | Flagged By | Pages Affected | Recommended Fix |
|---|-------|-----------|----------------|-----------------|
| M5 (regressed) | Card fragmentation: interior pages roll `.prog-card`/`.info-card`/`.credential-card`/`.counselor-card`/`.campus-contact-card` instead of canonical `.card`. Worse with Programs wave | Designer, CMS | programs.html, practical-nursing, contact.html, about.html | Migrate one-offs to `.card`; add program modifiers to styles.css once |
| M6 (regressed) | ~110-924 lines of program-page chrome copied inline into ~80 program pages, already diverging | Designer, CMS | practical-nursing-clearwater.html + ~80 program pages | Extract shared chrome into program-page.css before July build; seed from nursing page |
| M39 | Hero/breadcrumb/button proliferation: 4 heroes, 3 breadcrumbs with 3 separators, 3 button families | Designer, CMS | All interior pages | Converge to one of each in styles.css + templates |
| M40 | Off-token color drift: 3 dark greens (#006634/#004d29/token #006B36); off-brand sky-blue campus chip; interchangeable yellow tokens | Designer, Director, Accessibility | programs.html, program pages, hubs | Promote one hero gradient + dark-green token; recolor chip to green/gray; promote semantic warn/danger/pdf tokens |
| M36 | Main-site utility bar uses vague "Student Portal" instead of direct Canvas + Focus; no Webmail anywhere | Current Student, Faculty, Designer | index, programs, about | Standardize utility bar to direct Canvas + Focus; add Webmail |
| M42 | Nursing "Upcoming Classes: TBD / TBD" reads as "no classes coming" on flagship demand program | Prospective Student, Parent/Guardian, Faculty, Director, Designer | practical-nursing-clearwater.html (~L430-431) | Replace with real next start date or "Contact your counselor for the next start date" |
| (records split) | Records-request lands on a different page depending on entry point: `records-request.html` vs `clearwater-records-request.html` vs live transcript URL | Faculty, Current Student | campus homepages, program pages, main-site dropdown | Pick one canonical records-request page per campus; repoint every nav and footer |
| (cluster naming) | One trades cluster has three names: "Skilled Trades & Construction" (index/filter) vs "Skilled Trades & Mfg" (clearwater) vs "Cosmetology & Culinary"/"Design & Cosmetology" label drift; #1 verbal-direction breakdown for faculty | Faculty, Prospective Student | index, clearwater, stpete, programs | Pick one canonical label per cluster sitewide |
| (Career Services) | student-resources Career Services card links to employer "post a job" page; no tutoring/academic-support resource anywhere | Current Student | student-resources.html | Point at student-facing job board; add Tutoring card or log to follow-ups.md |
| (student-resources stubs) | Five most-used current-student tiles (Canvas, Focus, Academic Calendar, Tech Support, Student Orgs) are "Coming soon" though campus pages link them live | Current Student | student-resources.html | Wire to the same verified destinations the campus pages use |
| M9 | Application timeline/turnaround vague ("starts five times per year" but no "apply by X to start in August") | Prospective Student, Parent/Guardian | admissions.html | Add expected processing timeline + a single "Request a tour/shadow visit" action |
| (admissions anchor) | Enrollment Steps nav anchor (#enrollment-steps) does not exist on admissions.html | Director | admissions.html | Repoint to #how-to-apply or add the anchor |
| (refund anchor) | Refund Policy nav points to `#faq` on most pages, `#refund` on the tuition page; one is wrong | Prospective Student, Director | tuition-aid.html, nav sitewide | Standardize to one canonical anchor id |
| M35 | Programs > Explore points three labels (Dual Enrollment, Distance Learning, ABE/GED/ESOL) at one anchorless page; reads as broken | Prospective Student, Current Student, Faculty | programs.html, adult-education-pathways.html | Point at in-page anchors or collapse to one item |
| M21 | St. Pete Programs nav lists 7 clusters; Clearwater lists 8 (STP missing Business & Office) | Director, Faculty | stpete pages | Verify offering difference vs equity gap; make intentional |
| M43 | Campus-parity flagship: practical-nursing-stpete.html must exist at equal quality to the Clearwater page | Director | programs.html | Verify the St. Pete equivalent renders at equal quality before launch |
| M45 | Small gray text borderline AA: nursing PDF-card meta + counselor label `--color-gray-500` at 0.85rem (re-graded borderline, not hard-fail) | Accessibility | practical-nursing-clearwater.html | Bump to `--color-gray-600` (#4B5563) |
| M48 | Course-sequence accordion hides native marker with no replacement chevron; expand affordance invisible to sighted users | Accessibility | practical-nursing-clearwater.html | Add `summary::after` chevron rotating on `[open]` |
| A5 (M24 regression) | Campus homepage logos use non-descriptive `alt="PTC Logo"` | Accessibility | clearwater.html (L48), stpete.html (L48) | Use campus-qualified alt (reference: nursing page) |
| A6 | Tuition rate-table `<th>` cells lack `scope="col"` | Accessibility | tuition-aid.html (L776-778) | Add `scope="col"` to the 3 header cells |
| M51 | Per-page header/nav/footer copies will fragment in Composer; dropdowns already drifting | CMS, Designer | All pages | Collapse to global regions (main + per campus); reconcile drifted dropdowns |
| M50 | Pervasive inline `style=""` for hierarchy/spacing; clobbered in Composer rich-text | CMS, Designer | program + interior pages | Move to classed rules + shared type scale + `--section-pad` |
| M11 | Hero carousel maintenance risk in Composer | CMS, Designer | index.html | Rebuild on native banner slideshow so image swaps aren't dev tasks |
| M38 | Contact page promises/implies hours but shows none; no general inquiry email or form | Current Student, Parent/Guardian, Faculty | contact.html | Add Office Hours line per campus + a general admissions email or inquiry form |
| M7/M8 | about.html accreditation cards still doc-less; staff-directory anchor points to #leadership not a directory | Director, Faculty | about.html | Link COE docs from accred cards; resolve staff-directory destination |
| M17 | SIP-year asymmetry (CLW 2024-25 vs STP 2025-26) | Director | consumer-information / about | Live-gated; CLW to publish 2025-26 SIP |
| M25 | Linked PDF accessibility unverified | Accessibility | consumer-information.html PDF links | Live-gated; route to follow-ups.md |

## Low Priority (Polish)
| # | Issue | Flagged By | Pages Affected | Recommended Fix |
|---|-------|-----------|----------------|-----------------|
| L11 (regressed) | In-hero breadcrumb `opacity: 0.85` reintroduced (borderline contrast) | Designer, Accessibility | contact.html, tuition-aid.html, consumer-information.html | Drop the 0.85 opacity; fold into M39 |
| L22 | Programs A-Z cards show no length/credential; can't comparison-shop without clicking in | Prospective Student, Parent/Guardian, Director, Designer | programs.html | Add small "~X months · Credential" line per card |
| L20 | programs.html hero overloaded (h1 + paragraph + 3-button callout + filter); negative-margin filter hack | Designer | programs.html | Move apprenticeship/workforce buttons to a slim secondary bar; align filter offset to M4 transform |
| A7 (L18) | External new-tab links (Apply/Zoom/PDFs) lack sr-only "(opens in new tab)" except video cards | Accessibility | practical-nursing-clearwater.html | Append sr-only cue, following the video-card model |
| L19 | Nursing video cards have `:hover` only, no `:focus-visible` parity with welding | Designer, Accessibility | practical-nursing-clearwater.html | Add `:focus-visible` to match |
| L23 | Video-card inline `onerror` thumbnail fallback likely stripped by Composer sanitizer | CMS | practical-nursing-clearwater.html | Drop onerror; use hqdefault.jpg in a custom embed |
| L2 | Quick-links repeat "Apply" and surface Student Portal/Bookstore to brand-new prospects | Prospective Student | index.html | Trim quick-links to prospect-relevant items |
| L9 | News & Events identical on both campus homepages (Chef Brian STP item on CLW page) | Faculty, Current Student, Director | clearwater.html, stpete.html | Make campus-specific (feed tagging fixes in Composer) |
| L5/L8 | No testimonials; no campus-specific program visuals | Prospective Student, Parent/Guardian | programs, campus pages | Post-launch; nursing videos show the value |
| (parent findability) | Safety/disclosures buried under "Consumer Information"; no parent-obvious "Safety"/"Families" entry point | Parent/Guardian | consumer-information.html, nav | Add a parent-obvious nav/footer entry point |
| (leadership photos) | about.html leadership cards use JP/JS/DH monograms, not photos | Parent/Guardian | about.html | Add real leadership photos when available |

## What's Working Well (Do Not Change)
- **Accreditation / legitimacy story is the site's strongest dimension.** COE + Cognia + PCSB lockup in every footer, "since 1962," accreditor contact details on consumer-information, plain-language COE explanation. Every persona that touches trust (Prospective, Parent, Director) calls this out as the thing that moves PTC from "suspicious" to "real school."
- **Apply path is solid.** Apply/Request Info CTAs route to the real apply.myptc.edu / inforequest.myptc.edu portals across the hero, utility bar, quick links, CTA bands, and campus buttons. The C2/C7 dead-`#` blockers are gone on these ten pages.
- **tuition-aid.html is honest and complete:** real per-hour rates, full fee list, FAFSA codes per campus, refund policy, scholarships, veterans, Net Price Calculator. Builds genuine trust.
- **practical-nursing-clearwater.html is the model program page:** stat bar, Start Here strip, course sequence, credentials, real Program Costs PDF, student videos, info-session details. Every persona wants the rest of the catalog to reach this bar.
- **programs.html grid reconciliation confirmed complete** (0 dead links / orphans), with working cluster + campus filters, `?cluster=`/`?campus=` deep-links, and a screen-reader filter live region.
- **Accessibility foundations hold:** skip links first, single h1 + gap-free outlines, focus-visible yellow outline sitewide, decorative icons aria-hidden, prefers-reduced-motion, labeled search/contact forms. Zero new Critical a11y defects.
- **The token-based styles.css and canonical components are genuinely good** — the homepage and both campus pages prove the system works cleanly when adopted.
- **Campus pages are the best daily-use experience** for current students: direct Canvas + Focus on the utility bar, well-wired Current Students dropdowns.

## Cross-Agent Patterns
Issues flagged by 3+ agents (consensus carries weight):

- **Program outcomes missing (H4)** — Prospective, Parent, Director, Faculty. Strongest cross-agent consensus on the site; the deciding enrollment factor for two personas. Live-gated.
- **Per-program cost not computable (H6)** — Prospective, Parent, Director. Consensus the per-hour rate is great but unusable without per-program totals.
- **Counselor misattribution (C9 + machining C12)** — Faculty, Director, Prospective, Parent, Current Student. Five personas; now confirmed as a class of error spanning at least two pages.
- **Dead campus search button (M47)** — Accessibility (Serious), Prospective, Director. Consensus it should be wired or hidden, not shipped as a no-op.
- **"TBD / TBD" upcoming classes (M42)** — Prospective, Parent, Faculty, Director, Designer. Five personas read it as "no classes coming."
- **Cluster naming / records-request inconsistency** — Faculty (top 2 issues), Prospective, Current Student. Same destination/label reached by different names depending on entry point.
- **Design-system fragmentation (M5/M6/M39/M40)** — Designer and CMS in full agreement; both rank the shared-CSS extraction as the highest-leverage pre-Composer move.
- **No campus hours/parking (H3) and contact-page hours gap (M38)** — Current Student, Parent, Faculty, Director.

Disagreement / nuance:
- **Phantom programs:** Director caught this hardest (top issue) because the campus pages were scrubbed but the homepage wasn't; Prospective and Parent noted the campus pages now read clean and did not re-flag them, which actually confirms today's campus-page fix landed. The gap is isolated to index.html.
- **M45 gray text:** Accessibility re-graded this from a presumed hard-fail down to borderline-pass after confirming the token is #6B7280 (not #9CA3AF), a downgrade from the June 11 assumption.
- **Search button:** Prospective/Current/Faculty accept it as "by-design pending the search decision"; Accessibility holds it as a Serious WCAG defect until wired or hidden. Both agree a no-op shipped to launch is the wrong outcome.

## Recommended Next Steps
Ordered for the next work session.

1. **Clear the Jun 18 launch-blockers (accuracy first).** Rewrite the two index.html featured-program blurbs to real catalog programs (C11). Verify and correct the Practical Nursing counselor (C9) and the machining "School Counselor" (C12) against the counseling office. Resolve the campus search button (M47) by wiring the real toggle or hiding it.
2. **Ride-along mechanical a11y fixes (one-liners, same files).** Fix the campus hero `alt`/`aria-hidden` contradiction (A2), the `alt="PTC Logo"` logos (A5), restore clamp() on the three regressed hero titles (H7), drop the breadcrumb opacity (L11), add `scope="col"` to the tuition table (A6). Reference patterns exist in-repo.
3. **Quick high-value content fixes.** Replace nursing "TBD / TBD" (M42). Pick one canonical cluster label and apply sitewide. Pick one canonical records-request page per campus. Repoint Career Services to a student-facing destination and wire the five "Coming soon" student-resources tiles to the live URLs the campus pages already use. Fix the refund and Enrollment Steps anchors.
4. **Verify before showing.** Confirm Advanced Welding is genuinely offered at St. Pete (H2); confirm practical-nursing-stpete.html renders at parity (M43); resolve the welding St. Pete schedule with Cheri Ashwood (C10).
5. **Structural work before the July Composer build.** Make the programs filter architecture decision with Addison Richard (H8/M49, tagged Posts feed preserving deep-links recommended). Extract shared program-page CSS (M6) seeded from the nursing page, migrate one-off cards to `.card` (M5), converge heroes/breadcrumbs/buttons (M39), kill off-token color drift (M40), and plan global header/nav/footer regions (M51).
6. **Route live-gated items to follow-ups.md.** H4 outcomes/salary sourcing rule, H6 per-program cost, H15 Clearwater Code of Conduct, M17 SIP year, M25 PDF accessibility, tutoring availability.
