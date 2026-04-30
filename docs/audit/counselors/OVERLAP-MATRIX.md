# Counselors Cluster — Overlap Matrix (Stage 3)

**Generated:** 2026-04-30
**Subagent:** audit-mapper
**Inputs:** 10 extracts (5 CLW, 5 STP, 0 www)
**Scope:** counselor surfacing across staff directories, program pages, and admissions hubs

---

## 1. Topic-by-topic comparison

| # | Topic | www | Clearwater | St. Petersburg | Same / Near / Different | Verdict |
|---|---|---|---|---|---|---|
| 1 | Dedicated counselor index page | N/A | None | None | Same (absent) | Live publishes no per-counselor profile pages and no consolidated counselor directory. |
| 2 | Counselor list (per-campus) | N/A | 5 rows in Student Services collapse on `campus-staff.md` (6,950 chars) | 3 rows in Student Services collapse on `campus-staff.md` (8,520 chars) | Different (count + names) | CLW lists 5 counselors, STP lists 3. No overlap of names. |
| 3 | Staff-page row schema | N/A | Last, First, Email, **Role at PTC-CLW** | Last, First, Email, **Job Title** | Near-identical | Same 4 columns; final column header differs in label only ("Role at PTC-CLW" vs "Job Title"). |
| 4 | Staff-page section structure | N/A | 6 collapsibles: Administrators, Faculty & Staff, Student Services, Business Office, OWI&IS, **CLW @ Pinellas High Innovation** | 5 collapsibles: Administrators, Faculty & Staff, Student Services, Business Office, **Office of Workforce Innovation** | Different | CLW has a 6th collapse for the Pinellas High Innovation site; STP doesn't. STP omits "& Industry Services" suffix on OWI. |
| 5 | Counselor title text on staff page | N/A | "Counselor" (5x) | "Counselor" (3x) | Identical | Title is verbatim "Counselor" with no specialization signaled on either page. |
| 6 | Email casing — counselors | N/A | Mixed case: 2 lowercase (corthellk, fieldsy, milisavl, santosv) + 1 ALL CAPS (SCOTTME) | Mixed case: 1 ALL CAPS (ASHWOODC, JOHNSONJER) + 1 lowercase (randolphn) | Different style sitewide | No campus standard. Both pages mix cases on the same table. Verbatim rule applies. |
| 7 | Counselor phone extension on staff page | N/A | Not published | Not published | Identical (absent) | Staff directory exposes email only; no extensions. |
| 8 | Counselor card on Welding program page | N/A | "Valerie Santos, School Counselor / santosv@pcsb.org \| 727-538-7167 x2017" under heading **"Admissions Contacts"** | "Cheri Ashwood, School Counselor / ASHWOODC@pcsb.org \| 727-893-2500 x2325" under heading **"Admissions & Course Information"** | Near-identical pattern, different heading | Same name+title+email+phone pattern. Heading differs (CLW separates Admissions Contacts from Course Information; STP merges into one heading). |
| 9 | Counselor card on Welding Advanced program page | N/A | Identical to Welding (Valerie Santos x2017) | Identical to Welding (Cheri Ashwood x2325) | Same as #8 | Single counselor per campus per program. **No dual-counselor pattern exists on live.** |
| 10 | Instructor card pattern on Welding pages | N/A | 4 instructors listed inline (Galyen, Norris, Smith, Pitre) with extensions | 0 instructors listed | Different | CLW publishes the AM/PM instructor roster verbatim on the program page; STP omits instructor list entirely. |
| 11 | Phone extension format | N/A | `727-538-7167 x2017` (lowercase x, no period) | `727-893-2500 x2325` (lowercase x, no period) | Identical format | Hyphenated 7-digit, space, lowercase `x`, then ext digits. Consistent across all 4 program pages. |
| 12 | Generic "talk to a counselor" CTA on admissions hub | N/A | "If needed, meet with a school counselor (admissions contact)..." + "Please see a school counselor for further information." (accommodations) + "Please contact a school counselor (admissions contact) with any questions." | "If needed, meet with a school counselor (admissions contact)..." + "Please contact a school counselor (admissions contact) with any questions." | Near-identical | Both lead and trailing CTAs are word-for-word identical. CLW has one extra accommodations CTA STP lacks. |
| 13 | Admissions hub destination for CTA | N/A | No link target — the CTA is plain text, no URL behind "school counselor" | No link target — same | Identical | Both campuses say "see a school counselor" without linking anywhere. Dead-end CTA on both. |
| 14 | Financial aid contact named on admissions hub | N/A | Generic: "calling 727-538-7167, option 7" | Named: "Joanne Schnell (schnellj@pcsb.org) for VA / Sabrina Mitchell (mitchellsa@pcsb.org) for Pell" | Different | STP names the financial aid specialists inline; CLW points to an option-7 phone tree. |
| 15 | Student Services hours page label | N/A | "Student Services and Hours" — page title; lists Student Services / Financial Aid / Bookstore / Records | "Student Services Hours" — page title; lists **Counseling Department** / Financial Aid / Bookstore / Records | Different label, different department | STP labels the front office "Counseling Department" (the only mention of counseling-as-a-department on either site). CLW calls it "Student Services". |
| 16 | Hours of service for counselor-facing office | N/A | Mon-Thu 6:45a-6:30p, Fri 6:45a-2:30p | Mon-Wed 7:00a-2:30p, Thu 7:00a-5:30p, Fri 7:00a-2:30p | Different | CLW opens earlier and runs later 4 days/week; STP has one extended Thursday and a tighter Mon-Wed/Fri window. |
| 17 | URL slug for hours page | N/A | `/admissions/student-services-and-hours` | `/admissions/student-services-hours` | Different | "and-" missing on STP. Both link from the admissions menu; minor IA inconsistency. |
| 18 | Counselor-program assignment data | N/A | Inline on each program page only (Welding sample shows Valerie Santos = welding programs) | Inline on each program page only (Welding sample shows Cheri Ashwood = welding programs) | Same pattern | Mapping exists nowhere except inside individual program pages. No directory or table consolidates which counselor handles which program. |
| 19 | Counselor avatars / photos / bios | N/A | None on staff page or program pages | None on staff page or program pages | Identical (absent) | Live never shows counselor photos or any biographical content. |
| 20 | PDF wrappers | N/A | None in this cluster (PDFs are Flyer + Program Costs on program pages, but they're program collateral not counselor-specific) | None in this cluster | Identical | This cluster has zero PDF-wrapper pages. All 10 extracts are substantive HTML. |

---

## 2. Identical / near-identical content groups

| Group | Files | Notes |
|---|---|---|
| **Admissions hub boilerplate** | `clearwater/admissions.md` (1,972 chars) + `stpete/admissions.md` (1,498 chars) | Lead and trailing counselor CTAs are word-for-word identical. The 5-step admissions flow is the same template. Differences are confined to FAFSA school code, financial aid contact line, and CLW's extra accommodations sentence. Strong consolidation candidate as a **shared** institutional admissions template with two campus-specific override slots (school code, financial aid contact). |
| **Welding program page chrome** | All 4 welding extracts (CLW + STP, basic + advanced) | Mission line, course catalog rows (PMT0070-0076), AWS certification paragraph, SAP/attendance/basic-skills bullets, "Industry Certifications and FL Ready to Work" footer block — all word-for-word identical across campuses except CLW pages include the FL Ready to Work footer block and STP pages omit it. Strong consolidation candidate as a shared program template. |
| **Counselor card pattern (Welding)** | All 4 welding extracts | Format `Name, School Counselor / email \| 727-XXX-XXXX xExt` is consistent verbatim across all 4 pages. Two counselors only (Valerie at CLW, Cheri at STP). |

---

## 3. Campus asymmetries

| Asymmetry | CLW | STP | Implication |
|---|---|---|---|
| Counselor headcount | 5 | 3 | Observation only. Possibly tracks larger CLW headcount or different role split; Mapper does not adjudicate. |
| Pinellas High Innovation site staff | 6th collapse exists | No equivalent | Real-world: PHI is a CLW-affiliated dual-enrollment site. STP has no equivalent. Confirms `campus-specific` for staff structure. |
| Instructor list on Welding program page | 4 instructors published inline with extensions | 0 instructors listed | STP welding pages don't surface instructor contacts the way CLW does. Either an editorial choice or a stale STP page. Flag for follow-ups. |
| Heading on counselor block (program page) | "Admissions Contacts" + separate "Course Information" for instructors | "Admissions & Course Information" combined | Reflects #3 (CLW has separate instructor section, STP doesn't). |
| Financial aid contact on admissions hub | Phone tree (option 7) | Two named specialists with emails | STP gives applicants a more direct route. CLW could adopt the named-contact pattern. Flag for follow-ups. |
| Hours-page department label | "Student Services" | "Counseling Department" | The only place on either site where the word "counseling" appears as a department name is the STP hours page header. CLW never names a Counseling Department. |
| URL slug | `/student-services-and-hours` | `/student-services-hours` | Trivial inconsistency; redesign should normalize to one slug. |
| Accommodations CTA | "Please see a school counselor for further information." | Not published | CLW has a counselor-mediated accommodations sentence that STP omits. Flag for follow-ups (STP may want parity, or both may want a link to a Compliance/Section 504 page). |

---

## 4. PDF-wrapper inventory

| Page | Type | Notes |
|---|---|---|
| All 10 extracts | Substantive HTML | None of the 10 cluster pages are PDF wrappers. The 4 program pages link to "Flyer Download" and "Program Costs Download" PDFs as collateral, but the page bodies themselves are HTML. |

No stale-PDF revision dates to flag in this cluster.

---

## 5. IA red flags

1. **Counselor-program assignment is inline-only.** The mapping of counselor → programs is published only inside each individual program page's "Admissions Contacts" line. There is no consolidated table, no per-counselor "programs I handle" view, and no per-campus counselor index. A prospective student who knows the counselor's name (e.g., from a recruiter) cannot find their program list; a student who knows the program but not the counselor must drill into the program page. **The redesign must decide whether to invert this** (build a counselor index that aggregates the inline data) or accept the live model.

2. **Generic "talk to a counselor" CTAs are dead-end on live.** Both admissions hubs say "meet with a school counselor (admissions contact)" three times each without linking anywhere. The redesign already has 5+ similar CTAs on `admissions.html`, `tuition-aid.html`, `contact.html`. None of them currently has a defined destination because live has no destination either. **The redesign must invent a target page.**

3. **Counselor data lives in two unsynchronized surfaces.** Staff directory has email but no extension. Program pages have email + extension but no role context (just title "School Counselor"). A counselor who changes extensions has to be updated on every program page they handle. No single source of truth.

4. **Email casing inconsistency is sitewide.** Per the verbatim rule we preserve case as published, but this surfaces a content-governance issue worth logging in `follow-ups.md`. CLW: `corthellk` vs `SCOTTME`. STP: `ASHWOODC` vs `randolphn`. Both pages mix.

5. **STP Welding pages omit instructor contact info that CLW publishes.** Either an oversight or a deliberate editorial difference. Flag for follow-ups so live owners can decide on parity.

6. **Hours-page slug inconsistency** (`student-services-and-hours` vs `student-services-hours`). Trivial, but redesign should pick one canonical slug.

7. **No phone-extension governance on staff directory.** If extensions are stable enough to publish on program pages, they're stable enough to publish on the staff directory. Flag for follow-ups.

---

## 6. Two-campus classification (mandatory)

| Topic | Classification | Rationale |
|---|---|---|
| Counselor list per campus | **campus-specific** | Each campus has its own counselors; no overlap of names; no institutional canonical roster. |
| Counselor-program assignment | **campus-specific** | Programs are typically campus-specific; the counselor handling them is too. Welding Advanced runs at both campuses, but each campus uses its own single counselor (Valerie at CLW, Cheri at STP) — not a dual-counselor pattern. |
| Welding Advanced program (counselor assignment) | **campus-specific** (per Marianne's confirmation) | Each campus runs Welding Advanced with its own counselor. **NOT** asymmetric, **NOT** dual-counselor. The redesign's `welding-advanced.html` dual-counselor layout is a known fabrication to remove. |
| Generic "Talk to a Counselor" CTAs | **shared** | The CTA wording is institutional and word-for-word identical on both admissions hubs. Each campus's CTA should resolve to that campus's counselor list. |
| Phone extensions | **campus-specific** | Each counselor has a campus-specific phone tree (727-538-7167 ext for CLW, 727-893-2500 ext for STP). |
| Counselor profile fields (name, title, email, extension, programs) | **campus-specific** (data) with **shared** schema | Schema (the 5 fields) is the same across both campuses; the records are campus-specific. |
| Staff-page section structure | **campus-specific** | CLW has 6 collapses (incl. Pinellas High Innovation), STP has 5. |
| Admissions hub template | **shared** with campus-specific overrides | Same 5-step admissions flow on both hubs. Overrides: FAFSA school code, financial aid contact line, CLW-only accommodations sentence. |
| Hours-page department naming | **asymmetric** (today) → should normalize | Only STP names a "Counseling Department". The redesign should pick one convention. |
| Counselor avatars / bios | **shared** absence (today) | Neither campus publishes them. Any redesign decision to add them is institutional. |

---

## 7. Recommendations for the IA-Recommender

1. **Kill the dual-counselor pattern on `welding-advanced.html`.** Marianne confirmed: each campus runs Welding Advanced with its own single counselor. Welding Advanced is `campus-specific`, not asymmetric, not dual.
2. **Decide where the generic "Talk to a Counselor" CTA lands.** Live has no destination. Options for IA-Recommender to weigh: (a) campus-staff page with deep link to Student Services collapse, (b) new campus-level "Meet your counselors" page, (c) admissions hub itself.
3. **Decide whether to build a counselor-program index.** Live publishes this data inline only. The redesign can either (a) match live (inline only, no index) or (b) invert and build a campus-level index that aggregates inline data. Trade-off: build effort + maintenance burden vs prospective-student findability.
4. **Normalize the hours-page slug** (`student-services-and-hours` vs `student-services-hours`).
5. **Log to `follow-ups.md`:** email casing inconsistency, STP Welding instructor list omission, CLW phone-tree vs STP named-contact for financial aid, missing accommodations CTA on STP admissions hub, missing extensions on staff directory.
6. **Counselor card schema for redesign program pages:** match live verbatim format `Name, School Counselor / email | 727-XXX-XXXX xExt` under heading "Admissions Contacts" (CLW pattern) or "Admissions & Course Information" (STP pattern) — Comparator should pick one for the redesign template.

---

## Source files

- `docs/audit/counselors/extracted/clearwater/admissions.md` (1,972 chars)
- `docs/audit/counselors/extracted/clearwater/campus-staff.md` (6,950 chars)
- `docs/audit/counselors/extracted/clearwater/program-welding-technology.md` (5,242 chars)
- `docs/audit/counselors/extracted/clearwater/program-welding-technology-advanced.md` (4,199 chars)
- `docs/audit/counselors/extracted/clearwater/student-services-and-hours.md` (479 chars)
- `docs/audit/counselors/extracted/stpete/admissions.md` (1,498 chars)
- `docs/audit/counselors/extracted/stpete/campus-staff.md` (8,520 chars)
- `docs/audit/counselors/extracted/stpete/program-welding-technology.md` (3,932 chars)
- `docs/audit/counselors/extracted/stpete/program-welding-technology-advanced.md` (2,907 chars)
- `docs/audit/counselors/extracted/stpete/student-services-hours.md` (300 chars)
