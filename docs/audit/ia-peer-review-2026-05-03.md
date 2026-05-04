# Peer-Site IA Review (2026-05-03)

## Why this review
The PTC redesign's About cluster has 3 pages (institutional + 2 campus) with compliance/operational documents (Accreditation, Written Plans, Financial Accountability, Safety & Security Data, School Improvement Plan, Records Request) currently nested under About. Before sending the next batch to Kyesha, we wanted to see how peer Florida technical colleges and CCs structure About vs. compliance and how they handle multi-campus institutional layers. The goal is one IA call: keep operational docs under About, or split them out into a dedicated Consumer Information / Disclosures hub.

## Sites reviewed
- Lively Technical College (livelytech.com) — fetched 2026-05-03
- Atlantic Technical College (atlantictechnicalcollege.edu) — fetched 2026-05-03
- Manatee Technical College (manateetech.edu) — fetched 2026-05-03 (About hub 404'd; nav + footer captured from homepage)
- Lake Technical College (laketech.org) — fetched 2026-05-03
- Sheridan Technical College (sheridantechnicalcollege.edu) — fetched 2026-05-03
- St. Petersburg College (spcollege.edu) — fetched 2026-05-03 (incl. Student Right to Know)
- Valencia College (valenciacollege.edu) — fetched 2026-05-03 (incl. Consumer Information)

## At-a-glance comparison

| Site | Top-nav | About contains | Compliance home | Multi-campus |
|---|---|---|---|---|
| Lively Tech | Home, Programs, Students, Financial Aid, News, About | Director's Message, Mission/Vision, Accreditation | Footer-only `/resources/consumer-information/` + raw PDFs in footer | 2 campuses, footer addresses only |
| Atlantic Tech | Academics, Career Center, Students/Alumni, How To Apply, HS Students, About | Lean — links out | Dedicated `/atc-student-handbook/` page (Handbook + Consumer Info Guide + Conduct Code as 3 PDFs) | 4 locations, footer addresses |
| Manatee Tech | Programs, Students, Admissions, About, Tours, Appointment, Testing, Records | Mission, Vision, History, Why Choose, Accreditation, Board, Fast Facts | No central hub. Nondiscrimination + FERPA + Privacy scattered under /about and /students | 2 campuses, separate tour pages |
| Lake Tech | Home, About, Programs, Public Safety Inst., Students, Corp Training, GED, News, Career, Apply, Class Sch., Portal, Assessment, Locations, Contact | Accreditation under About | "Consumer Info" link in footer → admissions forms (weak); rest in footer "Discover" group | 5 locations via dedicated Locations menu |
| Sheridan Tech | Academics, How To Apply, Career Services, Students/Alumni, HS Students, About | Mission, History, Why Choose, Accreditation, School Advisory Council | "Consumer Information Guide" link under Students/Alumni (not About) | 3 locations, footer + per-program campus tags |
| SPC | Academics, Admissions, Athletics, Careers, Catalogs, Fin Aid, Learning Res, Student Achievement, Transcripts, Veterans | Accreditation/IR, Board, Foundation, Leadership, Locations, Strategic Plan | Dedicated **"Student Right to Know"** page (huge accordion: Academic, Admissions, Disputes, Financial, Health, Safety, Statistics, Other) linked from footer | Multiple campuses unified, surfaced via "Locations" |
| Valencia | Students, Faculty, Employees, Alumni, Foundation, About, Academics, Admissions, Tuition & Aid, Student Resources, Life at VC, Services | Mission, EO/Title IX, Consumer Info, Privacy, Public Records | Dedicated `/about/consumer-information.php` with 5 sections (General, Student Matters, Safety, Statistics, Financial Aid) | 10 locations unified, single Locations page |

## Patterns observed

1. **Dedicated Consumer Information / Student Right to Know hubs are standard at the more mature sites.** Valencia and SPC both treat compliance as a first-class IA destination with consistent section headers (General, Student Matters / Academic, Safety & Security, Statistics, Financial Aid). Atlantic does a lighter version (a single landing page with 3 PDFs). The smaller tech colleges (Lively, Manatee, Sheridan, Lake) don't have this hub and their compliance docs are scattered or footer-buried.

2. **About is identity, not operations.** Across every peer, the canonical About sub-pages are: Mission, Vision, History, Accreditation, Leadership/Board, "Why Choose Us," and Director's/President's Message. Operational documents (Annual Security Reports, HEERF, Strategic Plans, SREF/COE reports, Staff Rosters, School Improvement Plan) sit *outside* About — usually in a Consumer Information hub or directly in the footer as PDF links. Lively is the closest comparator that nests reports under footer "Compliance" rather than About.

3. **Accreditation is the only compliance-shaped item that consistently lives under About.** Every site reviewed has Accreditation under About and treats it as identity-framing (proof-of-quality), not as a buried compliance disclosure. This is a stable convention.

4. **Footer is the universal home for legal/disclosure links.** Title IX, Equal Opportunity, Privacy, Public Records, Accessibility, Nondiscrimination, FERPA, FortifyFL — these are nearly always footer links, regardless of whether the site has a Consumer Information hub. The hub aggregates them; the footer still surfaces them individually.

5. **Multi-campus sites unify the brand and split only what is genuinely campus-specific.** Atlantic (4 locations), Sheridan (3), Manatee (2), Lake (5), SPC (multiple), Valencia (10) all keep one institutional About and treat campus differentiation as Locations + per-program campus tagging. None of the peers maintain three parallel About pages (institutional + each campus). The closest variant is Manatee's per-campus Tours pages, which is a UX affordance, not a content split.

6. **None of the peer technical colleges promote Consumer Information into the top nav.** It's footer or buried under Students/Alumni. Only the two community colleges (SPC, Valencia) elevate it via a dedicated, prominently linked page — and even then it's footer-linked, not top-nav.

## Per-site notes

**Lively Tech.** Lean 6-item top-nav with About at the end. About sub-pages are pure identity (Director's Message, Mission/Vision, Accreditation). Operational PDFs (Strategic Plan, Guiding Plans, SREF, Annual Security, Campus Fire/Casualty/Sanitation, Staff Rosters) live as direct PDF links in a footer "Compliance/Disclosure Documents" group, plus a `/resources/consumer-information/` hub. Takeaway: **footer can carry the operational-doc load if you group it explicitly as "Compliance/Disclosure Documents."**

**Atlantic Tech.** About is genuinely thin and points outward. Their Consumer Information lives as a single page (`/atc-student-handbook/`) that hosts three flagship PDFs (Student Handbook, Consumer Information Guide, Conduct Code). Multi-campus is handled with footer addresses only. Takeaway: **a Consumer Information page can be small (3 PDFs) and still function** if those PDFs are comprehensive.

**Manatee Tech.** About is the richest identity hub of the tech colleges: Mission, Vision, History, Fast Facts, Board of Governors, Why Choose, plus per-campus Tours. No central compliance hub. Nondiscrimination notices live under About; FERPA under Students. Takeaway: **per-campus Tours nested under About is a clean way to surface campus differentiation without splitting About itself.**

**Lake Tech.** Notably bloated 16-item top nav. About has Accreditation; everything else is in the footer's "Discover" group (Non-Discrimination, Public Records, Accessibility, Copyright, Webmaster). "Consumer Info" footer link points to admissions forms — broken IA. Locations is a dedicated top-nav menu. Takeaway: **don't promote operational items into top-nav; do dedicate a Locations menu when you have 3+ campuses.**

**Sheridan Tech.** About has Mission, History, Why Choose, Accreditation, School Advisory Council. Consumer Information Guide lives under Students/Alumni — interesting choice, treats it as a student-facing reference rather than an institutional disclosure. Takeaway: **Consumer Information can be student-section content rather than About content** if the audience framing is "current/incoming student."

**St. Petersburg College.** "Student Right to Know" is the gold standard here — accordion-organized, sections for Academic, Admissions, Disputes, Financial, Health, Safety, Statistics, Other. Linked from footer. About contains identity items (Accreditation/IR, Board, Foundation, Leadership, Locations, Strategic Plan). Takeaway: **the accordion sections (Academic / Admissions / Disputes / Financial / Health / Safety / Statistics) are a defensible information taxonomy PTC could adopt verbatim.**

**Valencia College.** Consumer Information at `/about/consumer-information.php` is technically *under* About, but it functions as its own destination. Five clean sections: General, Student Matters, Safety, Statistics, Financial Aid. Footer surfaces compliance items individually (Accessibility, Consumer Info, Policy Manual, Privacy, Public Records, SSN Usage). Takeaway: **putting Consumer Information at `/about/consumer-information` is fine; what matters is dedicated section headers and footer cross-linking.**

## Recommendation for PTC

1. **Move operational documents OUT of About and into the existing `consumer-information.html` hub.** Written Plans, Financial Accountability/HEERF, Safety & Security Data, School Improvement Plan, and Records Request all belong in Consumer Information, not under About. Keep Accreditation under About (it's identity-framing across every peer). This matches Valencia and SPC; it also unbloats the campus About pages.

2. **Adopt SPC's section taxonomy on `consumer-information.html`.** Use these section headers verbatim: General Information, Academic Policies, Admissions, Financial, Safety & Security, Statistics & Accountability, Disputes & Grievances. Map PTC's existing items into these buckets. SPC's accordion pattern is also worth stealing for scannability.

3. **Promote Consumer Information out of the footer-only state, but not into the top nav.** Two changes: (a) link it from each campus About page as a sibling to Accreditation, and (b) link it from the Admissions and Financial Aid pages. Keep the footer link. Don't put it in the top nav — no peer technical college does, and SPC/Valencia only footer-link it.

4. **Reduce the campus About pages to identity content only.** Mission/Vision/Values, history, "Why Choose PTC-Clearwater" / "Why Choose PTC-St. Petersburg," accreditation status (each campus's COE cycle), leadership, photos, contact. Move everything else off. This brings PTC in line with Manatee, Lively, Sheridan.

5. **Keep the institutional `about.html` as the brand layer; let campus Abouts inherit identity and override only what's truly different.** Per the two-campus discipline rule, accreditation cycle and director are campus-specific; mission, values, and history are shared. Don't duplicate; cross-link to the institutional About for the shared layer.

## Open questions / things peer sites can't answer for us

- **Per-campus COE accreditation cycles.** None of the peers have two separately accredited COE campuses under one PCSB umbrella. Marianne needs to decide whether each campus's accreditation page is its own URL (`/clearwater-about/accreditation`) or whether they share one page with two cycle blocks. Recommend: shared page with two clearly labeled cycle sections, since the accrediting body (COE) is the same and the institutional identity is one.
- **PCSB layer.** No peer is governed by a K-12 school board running adult education the way PCSB runs PTC. Decide whether "PCSB governance" is its own About sub-page, a footer note, or a one-paragraph callout on the institutional About. Recommend: one paragraph on institutional About + footer attribution.
- **Asymmetric content (e.g., Military & Veteran Resources, currently Clearwater-only).** Peer pattern is unified institutional pages with campus tags. Decide whether to keep the asymmetric page or expand to a shared institutional page that flags Clearwater as the in-person delivery campus.
- **Where does the School Improvement Plan actually belong?** It's Cognia/K-12-flavored. SPC and Valencia don't have one because they're SACSCOC. Among the tech colleges, none surface it prominently. Recommend: Consumer Information under "Statistics & Accountability."
