# Parent/Guardian Review - 2026-04-27

Reviewer persona: Sandra, 45, Pinellas County. Mom of a 17-year-old interested in automotive technology. I'm the one paying. I'm comparing PTC against St. Pete College and a couple of for-profit trade schools, and I'm trying to figure out if PTC is a real, accredited school or a glorified vocational shop. I'm reading these three About pages tonight on my laptop after dinner.

---

## Trust & Credibility

This is the area where PTC made the biggest jump for me compared to what I'd expect from a "career school." A few specific things landed.

**What reassured me:**
- The institutional About page (`about.html`) opens with **"For over 60 years, PTC has been Pinellas County's trusted source for career and technical education"** and then immediately backs that up with a 1962 timeline entry. Sixty-plus years of history is the single biggest signal that this isn't a fly-by-night diploma mill. I almost relaxed at that line.
- The mission statement is presented prominently in a green band: **"Our mission is to provide students the opportunity to develop national workplace competencies to fill the needs of business and industry."** The phrase "national workplace competencies" reads like a serious accreditation document, not marketing fluff.
- The accreditation section has THREE named bodies with mailing addresses and phone numbers, which I can verify independently:
  - Council on Occupational Education (Atlanta GA, 770-396-3898)
  - Cognia (Alpharetta GA, 888-413-3669)
  - Pinellas County Schools (Largo FL)
- The phrase **"As part of Pinellas County Schools, PTC combines the resources of a public school system with the focused, career-driven mission of a technical college"** is the single sentence that made me stop comparing PTC to for-profit trade schools. It's a public school. That's huge for me.
- Footer accreditation badges appear on all three pages, repeating the COE / Cognia / PCSB lockup. Repetition reinforces trust.
- The campus About pages now link directly to the LIVE accreditation pages on `clearwater.myptc.edu` and `stpete.myptc.edu`. Those are real .edu subdomains, not marketing redirects. That mattered to me.

**What gave me pause:**
- The Campus Leadership section on `about.html` shows **three identical generic person icons** with the labels "Campus Director / Clearwater Campus", "Campus Director / St. Petersburg Campus", "District Administration / Pinellas County Schools" - no names, no faces, no bios. This is exactly what a fake school looks like. If I can't see who runs the place, I assume there's a reason. This is critical.
- "View Full Staff Directory" button below leadership goes to `href="#"` - dead link. That compounded the leadership opacity problem. I clicked it expecting names and got nothing.
- Annual Impact Report link works (PDF on resources.finalsite.net) but I can't see year on the page. Is this 2024? 2025? "Each year, PTC publishes an Annual Impact Report" - okay, but which year is this one?

**Issues tracker check:**
- **C3 (Leadership representation - placeholder icons): STILL OPEN.** Same exact three generic user icons on `about.html` lines 689, 694, 699. No progress since 2026-04-15.
- **C4 (Compliance documentation links): PARTIALLY RESOLVED on the campus About pages.** The new "Accreditation, Records & Compliance" sections on `clearwater-about.html` and `stpete-about.html` deliver real, working links to live PTC subdomain pages and PDFs. This is a meaningful improvement. The institutional `about.html` still doesn't have an equivalent compliance grid, and the footer "Privacy Policy" / "Accessibility" links go to anchor jumps that I can't verify from here.
- **M8 (Accreditation report links): PARTIALLY RESOLVED.** Campus accreditation pages are now linked. School Improvement Plans for both campuses are linked (Clearwater SY 2024-25, St. Pete SY 2025-26). HEERF financial reports linked. **But:** there's no link to a COE Letter of Accreditation or accreditation status report on `about.html` itself, which is what I'd expect on the main institutional page.

## Cost & Value

This is where I'm still mostly in the dark, and these three pages are not where you'd naturally expect cost detail. Fair. But:

**What the About pages do well:**
- The phrase **"affordable tuition, financial aid, and direct connections to local employers"** in Our Story sets the right framing. Affordability is named.
- Header utility bar promises "Tuition & Aid" navigation with FAFSA, scholarships, veterans benefits, and a Net Price Calculator. The Net Price Calculator listing in particular is a real-college signal.

**What's missing:**
- Zero dollar figures anywhere on these three pages. I know this is the About cluster, not Tuition, but a single sentence like "Tuition is approximately $X per program hour, far below the cost of a four-year college" would close my biggest open question and route me to the right page.
- No explicit comparison to community college or 4-year cost. The whole reason I'm here is that I'm comparing PTC to St. Pete College. PTC could win that comparison on price and time-to-job, but the pages don't make the case.
- No mention of program length on any About page. Are these one-year programs? Two-year? Six-month certificates? "60+ programs" tells me how many, not how long. For a parent paying out of pocket, length-to-completion is half the math.

**Suggested fix:** Add a "Why PTC vs. a Four-Year College?" comparison block to `about.html` between "Our Story" and "By the Numbers." Three-column layout: PTC / Community College / 4-Year College, comparing typical cost range, time-to-completion, hands-on hours, and job-placement rate. Use only verified numbers (per the verbatim-content rule, log gaps to follow-ups.md). This is the single highest-leverage trust addition for the parent persona.

## Safety & Campus Life

**Big improvement here from the campus About pages.** Before this redesign step, I would have had no idea where to find safety reports. Now:

- `clearwater-about.html` has a **"Safety & Security Data"** card linking to `clearwater.myptc.edu/.../clearwater-campus-safety-security-data` with copy that reads "Annual safety and security reports for the Clearwater campus, 2020-2025." Five years of data, on a real campus subdomain. That's exactly what I want.
- `stpete-about.html` has the equivalent card. Both campuses have a **"Health & Safety"** plan listed inside the "Written Plans" card alongside nine other COE-required plans.
- The St. Pete page additionally links a 2025-26 student **Code of Conduct** PDF. Why is this on St. Pete only and not Clearwater? My son would be at Clearwater. I'd want the same document available there, or a clear "St. Pete Code of Conduct applies institution-wide" statement.

**What's missing:**
- No campus hours anywhere on these three pages. When does the building open? When does it close? Is my 17-year-old going to be on campus until 9 PM?
- No mention of who to call if there's an emergency on campus. Is there a campus security number? Pinellas County Sheriff? A school resource officer? The utility bar has the main campus phone, but in a safety context that's not enough.
- No information about parking, drop-off zones, or what to do if my son's car breaks down on his way to an automotive class (this is an automotive program; cars will fail).
- No mention of medical/first-aid resources or what happens if a student is injured in a lab. For a hands-on program with welders, lifts, and power tools, this matters.

**Suggested fix:** Add a "Campus Hours & Emergency Contacts" card to the Compliance grid on both campus About pages. Pull hours from the live myptc.edu campus pages. Include: building hours, main office hours, after-hours emergency number, school resource officer contact if applicable. Also, sync the Code of Conduct between campuses or add a clarifying note.

## Outcomes

This is the second-biggest gap. The About pages tell me the institution exists; they don't tell me my kid will get a job out of the other end.

**What's there:**
- "By the Numbers": **"60+ programs," "Nearly 5,000 full-time students," "250+ industry partners," "2 campuses."** The 250+ industry partners number is the strongest outcome signal on the page - it suggests PTC has employer relationships, not just classrooms.
- **"Annual Impact Report"** button on `about.html` linking to a PDF. I clicked through. That's the right place for this content. But I shouldn't have to download a PDF to find out the basic question: "What percent of PTC graduates get jobs in their field?"
- The mission's **"national workplace competencies"** language and **"prepare students for the needs of the workforce"** phrasing imply outcomes, but don't quantify them.

**What's missing:**
- No job placement rate. Not a single number on the page. "Industry partners" is good but it's not "X% of welding graduates were placed within 6 months earning median $Y."
- No employer logos. Showing me logos of companies that hire PTC grads (whether that's local Tampa Bay employers, dealerships for automotive, hospitals for health sciences) would do more for trust than three paragraphs of mission language.
- No graduate testimonial or "where they are now" feature. The Our Story section has a great graduation photo but no story attached to it.
- No salary data. For automotive specifically, I want to know what an entry-level certified tech makes in Tampa Bay.

**Suggested fix:** Add an "Outcomes at a Glance" stat row to `about.html`, parallel to "By the Numbers" but focused on what graduates do. If verified outcome data isn't available yet, log it to `docs/audit/follow-ups.md` and add a placeholder block that says "Annual Impact Report - 2024-25 outcomes available [DATE]" with a link. Add a 12-logo employer wall ("Where PTC Graduates Work") below the campuses overview, populated from the 250+ industry partners list.

---

## Page-by-Page Notes

### about.html (institutional About hub)
**What works:**
- Hero subtitle "For over 60 years, PTC has been Pinellas County's trusted source for career and technical education" - immediate trust signal.
- Mission, Vision, and Core Values are present and well-organized. The seven core values bullets read like a real institution's strategic plan, not marketing.
- "Our Story" paragraph 4 explicitly links PTC to Pinellas County Schools. Critical for parent trust.
- 1962 timeline entry establishes longevity; the comment in the source acknowledging removed unverified entries (1970s, 1990s, 2000s, 2018) shows editorial discipline. I appreciate that as a parent who's done due diligence on bad schools before.
- Three accreditation cards with addresses and phone numbers. Verifiable.
- Annual Impact Report PDF link works.
- Two campuses overview gives concrete addresses (6100 154th Ave N and 901 34th St S) and a sense of which programs are at which campus.

**What needs work:**
- **Campus Leadership section is the weakest section on any of these three pages.** Three identical generic person icons. No names. The "View Full Staff Directory" button below it is a dead `href="#"` link. This single section undermines the trust the rest of the page builds.
- Timeline has only TWO entries: 1962 and "Today." That's a thin timeline. Either fill in more verified milestones or restructure as a "From 1962 to Today" narrative.
- No outcomes / placement / salary data. None.
- No comparison to community college or 4-year college that would make the case for choosing PTC.
- No campus photos beyond the one Clearwater exterior. I can't visualize the place.
- No leadership message / "Letter from the Director."
- The "View Full Staff Directory" button (line 705) goes to `href="#"`. Same issue with utility bar Apply Now, Student Portal, Events.
- No parent-specific FAQ or "I'm paying for my child's education - what should I know?" entry point.

**Suggested fix:**
1. Replace the three placeholder leader cards with real names, photos, and titles. If photos aren't available yet, name + title + 2-sentence bio is enough. Use the canonical `.card` component, not the bespoke `.leader-card` pattern.
2. Add an "Outcomes" section after "By the Numbers" with whatever verified data exists; log gaps to `follow-ups.md`.
3. Add a "PTC vs. Other Paths" comparison block.
4. Wire the Staff Directory link to a real page or remove the button until the page exists.
5. Add a parent-focused FAQ link to the CTA band ("Parent Information" alongside "Apply Now" / "Request Info").

### clearwater-about.html (Clearwater campus About)
**What works:**
- Hero subtitle clearly defines the page's scope: "Campus accreditation, catalog, written plans, safety reports, and other compliance documents for the Clearwater campus." I know exactly what I'm getting.
- Institutional context paragraph correctly redirects me to the main About for mission/history rather than duplicating. This is good two-campus discipline.
- The Compliance grid is excellent. Seven cards, all linking to live `clearwater.myptc.edu` pages or `resources.finalsite.net` PDFs. Every card has a clear icon, title, one-line explanation, and a working link. This is the strongest single section across all three pages.
- "Written Plans" card explicitly names ten COE-required plans (Follow-Up, Strategic, Media Services, Facilities, Health & Safety, Technology, Distance Learning, Student Retention, Placement, Student Services Effectiveness). Naming the plans demonstrates accreditation seriousness.
- Records request card includes a real email (canfieldj@pcsb.org). Real human contact.
- Footer carries the campus address (6100 154th Ave N, Clearwater, FL 33760) and phone (727.538.7167). Good.

**What needs work:**
- **No Code of Conduct card on Clearwater** even though St. Pete has one. Asymmetry that makes me wonder if Clearwater has one or not. Since my son would be at Clearwater for automotive, this is the campus I care about.
- Redundant phrase in the institutional context paragraph: "specific to the Clearwater Campus campus" (line 178). Reads as a copy-paste error. Reads sloppy. On a compliance page, sloppy is a problem.
- "Since 1961" in the footer (line 251) but `about.html` says since 1962. Which is it? Inconsistency on the founding year is exactly the kind of thing that makes me distrust a school.
- Header utility bar address link is `href="#"` - I can't click for a map.
- "About This Campus" link in the Campus Info nav dropdown is `href="#"` - the page exists but the nav doesn't point at it.
- Navigation header still has many `href="#"` links: Canvas Login, SIS Portal, Search, Map & Directions, Staff Directory, Employer Partnerships, Post a Job, Advisory Committees, Tuition & Fees, Financial Aid, Scholarships, Veterans Benefits, Academic Calendar, Student Services, Bookstore, Record Request, Tech Support. Too many dead links on a compliance-focused page erodes the trust the cards build.
- No campus hours, no map embed, no parking info, no list of what programs are actually at Clearwater.

**Suggested fix:**
1. Fix the "Clearwater Campus campus" typo on line 178.
2. Reconcile founding year. About says 1962, Clearwater footer says 1961. Pick one and verify against PTC archives; flag to `follow-ups.md` if uncertain.
3. Add a Code of Conduct card matching the St. Pete page, OR add a clarifying note that the institutional Code of Conduct applies to both campuses with a link to it.
4. Add a "Campus Hours, Map & Parking" card to the Compliance grid (or a dedicated quick-info row above it).
5. Wire "About This Campus" in the Campus Info nav dropdown to `clearwater-about.html`.

### stpete-about.html (St. Pete campus About)
**What works:**
- Same clean structure as the Clearwater page. Consistency is good.
- Eight compliance cards (one more than Clearwater) including the Code of Conduct PDF, dated 2025-26. Very professional.
- Records request points to a different real person (kilpatrickc@pcsb.org). Campus-specific contact, not a generic info@ address. That's a real-school detail.
- Written Plans card lists the ten COE plans alphabetically, slightly different ordering from Clearwater but same content.
- St. Pete School Improvement Plan is for the current school year (2025-26), where Clearwater's is one year older (2024-25). Either St. Pete is more current or Clearwater hasn't posted yet - flag for follow-up.

**What needs work:**
- Same "St. Petersburg Campus campus" typo on line 177. Same copy-paste artifact.
- Same "since 1961" footer (line 256) vs about.html's "since 1962" inconsistency.
- Same dead `href="#"` problem across header nav and utility bar.
- "About This Campus" in the Campus Info dropdown still goes to `href="#"`, not to this page.
- Footer "St. Petersburg Links" column omits "Campus Bookstore" and "Code of Conduct" that would be useful here.
- Programs nav dropdown is missing "Skilled Trades & Construction" and "Business & Office" but Clearwater dropdown has them. Possibly correct (campuses offer different programs) but should be intentional, not accidental.

**Suggested fix:**
1. Fix the "St. Petersburg Campus campus" typo.
2. Reconcile founding year sitewide.
3. Wire "About This Campus" in the Campus Info nav.
4. Audit the Programs dropdown differences between Clearwater and St. Pete and document them as intentional in `docs/audit/follow-ups.md`.
5. Surface the Code of Conduct in the footer Resources column.

---

## Top 3 Issues (ranked by impact on trust and enrollment decision)

### 1. Campus Leadership section on about.html shows three placeholder icons with no names (C3 - still open)
**Impact on trust:** Severe. This is the single section on these three pages that looks fake. After the rest of the page convinced me PTC is a real institution, the Leadership section reintroduced doubt. A skeptical parent reading this evening would screenshot it and send it to their spouse with the caption "look at this." It also defeats the value of the "View Full Staff Directory" button right below it, which is itself a dead link.

**Suggested fix:** Replace the three `.leader-card` blocks with real names, titles, and either headshots or initial-circle placeholders. Two specific people from my project notes are named in the live PTC ecosystem: counselors (Cheri Ashwood, Valerie Santos) and administrators. If campus director names aren't approved for redesign use yet, log to `follow-ups.md` and put up a "Leadership profiles coming Summer 2026" honest placeholder with the COE-accredited message - that's still better than three identical generic icons. Wire "View Full Staff Directory" to a real Staff Directory page or remove the button.

### 2. Founding-year inconsistency: about.html says "since 1962", campus footers say "since 1961"
**Impact on trust:** Higher than it sounds. For a parent doing due diligence, factual contradictions on the most basic claim ("how long has this school existed?") are a red flag. The 1962 date on `about.html` is in the hero AND the timeline AND the footer tagline; the campus pages contradict it in their own footers. A parent comparing PTC to other schools side-by-side will catch this and discount everything else on the page.

**Suggested fix:** Pick the verified date (the live `about.html` timeline says 1962 and that aligns with the audit notes on lines 598-602 of about.html), then sweep the campus page footers to match. The campus footer tagline should read "Preparing students for high-demand careers through hands-on, industry-certified training since 1962." Single source of truth in `styles.css` or a footer partial would prevent recurrence.

### 3. Outcomes data is absent across all three pages
**Impact on trust:** High, and rising the more I think about it. The pages convinced me PTC is a real, accredited public institution with 60 years of history and 250+ industry partners. They did NOT convince me my son will actually get a job. As the person paying, I need at minimum: a placement rate, a median starting salary by program area, and 6-12 employer logos. The Annual Impact Report PDF link is a partial answer but it shifts work onto me to download, parse, and find the relevant program. By contrast, St. Pete College publishes outcomes by program on their site directly.

**Suggested fix:** Add an "Outcomes at a Glance" section to `about.html` between "By the Numbers" and "Our History". Two-row layout: top row is three big stat numbers (overall job placement rate, median wage of recent grads, percent earning industry-recognized credentials); bottom row is an employer logo wall titled "Where Our Graduates Work" with 12 Tampa Bay employers. If verified data isn't available yet (per the verbatim-content rule, do NOT invent it), log to `docs/audit/follow-ups.md` and put up an "Outcomes data publishing Summer 2026" honest placeholder card linking to the Annual Impact Report PDF in the meantime. This single addition would close the largest remaining trust gap for the parent persona.

---

## Final verdict from Sandra

After reading all three pages, I'd put PTC on the "worth a campus visit" pile, not the "no thanks" pile. The accreditation is real, the institution is real, the public-school connection to PCSB is reassuring, and the campus About pages now expose a serious set of compliance documents I can actually click through. The campus About pages in particular do something most career schools don't: they show the regulatory machinery underneath the brochure. That builds adult trust.

But I'm not yet sold. Three things would move me from "campus visit" to "let's enroll": (1) put real human faces on Campus Leadership, (2) show me job placement rates and starting salaries, and (3) make the cost-vs-community-college case explicitly. Without those, my son is going to St. Pete College for an A.S. in automotive, because they answer those three questions and PTC currently doesn't.
