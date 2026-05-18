# Admissions Cluster — IA Restructure (Stage 4 addendum)

**Generated:** 2026-05-18
**Cluster:** Admissions (CLUSTERS.md row 5)
**Status:** `verified` (2026-05-03) → `building` (this restructure)
**Decision owner:** Marianne Shaffer
**Supersedes:** the institutional-only `admissions.html` shape from the 2026-04-30 build

---

## Why we're reopening

The 2026-04-30 build consolidated all admissions content onto a single institutional `admissions.html`. Per-campus operational details (testing schedules, FAFSA codes, counselor contacts, shadowing) were exposed as per-campus cards within that single page.

Two problems surfaced in the 2026-05-18 review:

1. **It doesn't match live.** Live publishes campus-specific admissions hubs at `clearwater.myptc.edu/admissions/admissions` and `stpete.myptc.edu/admissions/admissions`, each with campus action items. Consolidating to one www page is an IA invention, not a verbatim mirror.
2. **It bounces campus visitors to www.** A Clearwater student on `clearwater.myptc.edu` who wants to apply has to leave the campus subsite. The redesign has zero admissions content on either campus subsite.
3. **It ballooned the page.** admissions.html went from a focused process page to 1,300 lines once per-campus cards were crammed in. Reading experience suffered.

Marianne's call (2026-05-18): split into three pages mirroring live's IA — institutional admissions on www, action-oriented admissions on each campus subsite.

---

## The new IA

Three pages, each with a focused role:

| Page | Audience | Role |
|---|---|---|
| `admissions.html` (institutional) | Prospective students researching PTC overall; families comparing campuses | The process, the policy, the legal — institutional "what is admissions at PTC?" |
| `clearwater-admissions.html` (NEW) | Prospective students who've chosen Clearwater | "How do I apply at Clearwater?" — campus action items |
| `stpete-admissions.html` (NEW) | Prospective students who've chosen St. Petersburg | "How do I apply at St. Petersburg?" — campus action items |

Campus subsites' nav points to their own campus admissions page. The www admissions page ends with two CTAs sending users to the campus pages once they've decided.

---

## Content distribution

### www `admissions.html` (stripped down)

**Keeps (institutional / process / legal):**

- Hero (institutional framing)
- Sticky TOC
- How to Apply — 8-step institutional process (from www extract verbatim)
- Who Can Apply and When — age requirement (16+, not in HS) + 5 start dates per year (from www verbatim)
- Enrollment Options — OCP, CTC vs CWE, full/half time, adult status (byte-identical CLW=STP sub-page, verbatim)
- Residency — lead paragraph + statute title + CTA to `acceptable-proofs-of-residency.html` sub-page
- Pathways — Transfer + Readmission cards (byte-identical sub-pages, verbatim)
- Testing — institutional overview only: section intro about who must test, CASAS *what it is* (mathematics + communication + ESOL), TEAS *what it is* (PN only, PTC testing center required), TABE/Wonderlic *exist* (institutional reference from www)
- Campus Visits & Program Shadowing — institutional shadowing framing only ("Some programs have specific days and/or dress codes for shadowing, so please speak with a counselor before coming in" — verbatim from www)
- Accommodations — institutional sentence + cross-link to `consumer-information.html#accessibility`
- CTA Band — **changed**: two campus CTAs ("Apply at Clearwater" → `clearwater-admissions.html`, "Apply at St. Petersburg" → `stpete-admissions.html`) + secondary "Request Info" → `https://inforequest.myptc.edu/`

**Strips (moves to campus pages):**

- Per-campus FAFSA School Code tokens (CLW 005605 and STP 013917 grid)
  - *Note:* the codes can still be shown on www as institutional reference (www extract publishes both side-by-side) — to be decided at build time
- Per-campus CASAS testing schedule cards (Mon–Thu 8am, Wed 4:30pm, ext 2006, Building #2 for CLW; M–F 8–11am for STP)
- Per-campus TEAS testing schedule cards (including Merritt Scott TEAS contact for CLW)
- Per-campus shadowing cards (CLW April 2026 PDF; STP counselor inquiry)

### `clearwater-admissions.html` (NEW)

Built from `docs/audit/counselors/extracted/clearwater/admissions.md` (admissions hub, 1972 chars) + `docs/audit/admissions/extracted/clearwater/testing.md` (testing schedules, 1368 chars) + `docs/audit/admissions/extracted/clearwater/admissions-shadowing-days-times.md` (shadowing PDF wrapper).

**Sections:**

1. Hero — "Apply to Clearwater Campus" + campus identity
2. Apply Online (primary CTA → `https://apply.myptc.edu/`)
3. Talk to a Counselor — verbatim: "If needed, meet with a school counselor (admissions contact) to discuss program interests and requirements." + cross-link to `clearwater-counselors.html`
4. FAFSA & Financial Aid (Clearwater)
   - Code 005605 prominent
   - Verbatim: "After receiving notification of eligibility (typically within 3-5 business days), contact the Financial Aid office by visiting the school or calling 727-538-7167, option 7."
5. Testing at Clearwater
   - CASAS schedule verbatim: Mon–Thu 8:00 a.m., Wed PM 4:30 p.m., 727-538-7167 ext 2006, Building #2 sign-in
   - TEAS schedule verbatim: Mon–Thu 8:00 a.m. + Wed PM 4:30 p.m., 727-538-7167 ext 2006, in-person on CLW for CLW PN applicants
   - TEAS Contact: Merritt Scott, scottme@pcsb.org, 727-538-7167 x2032
6. Shadow a Program (Clearwater)
   - Verbatim: "By Appointment Only. Call 727-538-7167."
   - Current shadow schedule PDF link (April 2026)
7. Outside funding agencies — verbatim: "If using an outside funding agency (CareerSource, Voc. Rehab, etc.), provide all necessary paperwork to the agency."
8. Accommodations — verbatim from CLW extract: "Accommodations are available during the instructional program for students with documented physical or mental impairments. Please see a school counselor for further information."
9. Cross-link to www admissions for full process + legal + policy

### `stpete-admissions.html` (NEW)

Built from `docs/audit/counselors/extracted/stpete/admissions.md` (admissions hub, 1498 chars) + `docs/audit/admissions/extracted/stpete/testing.md` (testing schedules, 812 chars). **No shadowing extract exists** (STP shadowing URL returns 404 per Marianne's D1 — STP routes through counselor inquiry).

**Sections:**

1. Hero — "Apply to St. Petersburg Campus" + campus identity
2. Apply Online (primary CTA → `https://apply.myptc.edu/`)
3. Talk to a Counselor — verbatim from STP extract + cross-link to `stpete-counselors.html`
4. FAFSA & Financial Aid (St. Petersburg)
   - Code 013917 prominent
   - Verbatim contact: Joanne Schnell (schnellj@pcsb.org) for VA financial aid; Sabrina Mitchell (mitchellsa@pcsb.org) for Pell/other
5. Testing at St. Petersburg
   - CASAS verbatim: M–F 8–11am arrival, PDF link, 30-min-early arrival
   - TEAS verbatim: M–F 8 a.m., NCCER & ESCO arrive-by 7:30 a.m.–noon, PDF link (note: PDF dated Aug 2023, stale — refresh request already in follow-ups #1)
6. Shadow a Program (St. Petersburg) — per D1: "Contact your campus counselor to inquire about shadowing your program of interest. Some programs have specific days and dress codes." + counselor cross-link
7. Cross-link to www admissions for full process + legal + policy

**Items STP's extract doesn't carry that the institutional www admissions covers:**

- Outside funding agencies (not in STP extract)
- Accommodations sentence (not in STP extract; CLW has it)
- Full 8-step process (STP extract only has 6 of the 8 steps; missing shadowing step and final fees step)

For these, the STP page cross-links to `admissions.html` for institutional policy. We **don't** pull from www or from CLW to fill in — that would violate verbatim. The cross-link is the legitimate route. (Live polish item: STP campus could publish the missing items on their hub for parity — log to follow-ups.)

---

## Cross-link patterns

| Source page | Links to |
|---|---|
| `admissions.html` CTA band | `clearwater-admissions.html`, `stpete-admissions.html`, `https://inforequest.myptc.edu/` |
| `admissions.html` testing section overview | Campus-specific pages for actual schedules (or just the cross-link as a footnote) |
| `clearwater-admissions.html` process section | `admissions.html` for full institutional process |
| `clearwater-admissions.html` counselor link | `clearwater-counselors.html` |
| `clearwater-admissions.html` residency mention | `acceptable-proofs-of-residency.html` |
| `clearwater-admissions.html` accommodations | `consumer-information.html#accessibility` (and/or admissions.html#accommodations) |
| `stpete-admissions.html` process section | `admissions.html` for full institutional process |
| `stpete-admissions.html` counselor link | `stpete-counselors.html` |
| `stpete-admissions.html` residency mention | `acceptable-proofs-of-residency.html` |
| Campus shell nav: "Admissions" link | Campus-specific page (e.g., `clearwater-admissions.html` from `clearwater.html`) |
| www shell nav: "Admissions" link | `admissions.html` |

---

## Two-campus classification

Per the binding rule in `CLUSTERS.md`:

| Topic | Classification | Where it lives |
|---|---|---|
| 8-step process (institutional spine) | `shared` | www |
| Age requirement (16+) | `shared` | www |
| 5 start dates per year | `shared` | www |
| Enrollment Options (OCP, CTC, CWE) | `shared` | www (byte-identical sub-page) |
| Acceptable Proofs of Residency | `shared` | www (sub-page) |
| Transfer credit policy | `shared` | www |
| Readmission policy | `shared` | www |
| FAFSA School Codes existence | `shared` | www (both codes shown institutionally) |
| FAFSA School Code per campus | `campus-specific` | each campus page (prominent) |
| Financial Aid office contact + protocol | `campus-specific` | each campus page (CLW: ext 7; STP: Schnell + Mitchell) |
| CASAS testing schedule | `campus-specific` | each campus page |
| TEAS testing schedule | `campus-specific` | each campus page |
| TEAS contact (Merritt Scott) | `asymmetric` | CLW campus page only (STP has none) |
| Shadowing | `asymmetric` | CLW: published PDF schedule; STP: counselor inquiry per D1 |
| Outside funding (CareerSource, Voc Rehab) | `asymmetric` | CLW campus page (verbatim); STP has none in extract |
| Accommodations sentence | `asymmetric` | CLW campus page (verbatim); STP cross-links to www |
| ADA / 504 formal disclosure | `shared` | `consumer-information.html#accessibility` |

---

## Migration order

1. Build `clearwater-admissions.html` from extracts (verbatim). Includes the 8-step process verbatim from CLW extract (which is the CLW campus's verbatim version of the institutional process — content equivalent to www but technically a different verbatim source).
2. Build `stpete-admissions.html` from extracts (verbatim). 6-step process from STP extract + cross-links for the missing items.
3. Strip `admissions.html`: remove per-campus FAFSA grid, per-campus CASAS cards, per-campus TEAS cards, per-campus shadowing cards. Reframe Testing and Campus Visits as institutional overview only with "see campus page for schedule" pointers. Change CTA Band to dual-campus CTAs.
4. Update navigation in campus shell templates (`_templates/shell-clearwater.html`, `_templates/shell-stpete.html`, plus the inline nav blocks in `clearwater.html`, `stpete.html`, and all `clearwater-*.html` / `stpete-*.html` pages): "Admissions" link now points to campus admissions page instead of www admissions.
5. Update cross-links across the redesign: search for hrefs pointing to `admissions.html` from any campus-prefixed page; route to the campus admissions page instead.
6. Update sticky TOC on www admissions.html to reflect stripped sections.
7. Verification pass: Compare each new page against its verbatim source extracts. Confirm zero new fabrications introduced, zero verbatim drift.
8. Update `CLUSTERS.md` row 5 status → `verified`. Append entry to `docs/progress-log.md`. Update `docs/audit/follow-ups.md` if new items surface (e.g., STP campus to author shadowing page, STP to author outside-funding paragraph, STP TEAS contact).
9. Update `docs/ptc_sitemap.md` to add the two new campus admissions pages.

---

## Open questions for Marianne (need decisions before build)

These three calls will shape the build. Default behaviors noted; flag for change.

### Q1. Process duplication

Each campus extract (CLW + STP) carries the institutional 8-step process verbatim. Do we:

- (a) **Include the full process verbatim on each campus page** — matches live, no bounce to www, but the process appears three times across the redesign.
- (b) **Strip process from campus pages, link to www for full process** — cleaner IA, single source of truth, but bounces campus visitors to www for steps they could read in place.

**Default:** (a) — matches live verbatim, no bounce. Risk: process appears 3x.

### Q2. FAFSA codes on www

Live www admissions page publishes both campus FAFSA codes side-by-side. In the restructured www admissions:

- (a) **Show both codes on www** (verbatim) + show each campus's code prominently on its own campus page (also verbatim).
- (b) **Strip codes from www**, only show on campus pages.

**Default:** (a) — verbatim posture, codes appear on www AND on campus pages. The campus version is more prominent (it's the campus's own code).

### Q3. Accommodations sentence routing

Live CLW carries the accommodations sentence verbatim. Live STP doesn't. Options for STP campus page:

- (a) **Cross-link to www admissions accommodations section** (clean verbatim, no STP-extract source needed).
- (b) **Cross-link to `consumer-information.html#accessibility`** (formal ADA / 504 disclosure, more comprehensive).
- (c) **Both** — short note + two cross-links.

**Default:** (c) — short institutional note saying accommodations are available + cross-links to both targets.

---

## Acceptance criteria for closing the restructure

The cluster flips back to `verified` when:

1. `clearwater-admissions.html` exists, renders cleanly, and every block traces to a verbatim source extract (no fabricated content).
2. `stpete-admissions.html` exists, renders cleanly, every block traces to a verbatim source, and items absent from the STP extract route to cross-links not invented content.
3. `admissions.html` is stripped of per-campus operational content. Sticky TOC reflects stripped sections. CTA Band has dual-campus CTAs.
4. Navigation across all campus-prefixed pages points to campus admissions, not www admissions.
5. Verifier (manual or subagent) confirms zero fabrications, zero verbatim drift, zero broken cross-links.
6. `CLUSTERS.md` row 5 updated to `verified`. `progress-log.md` entry appended.

---

## See also

- `docs/audit/admissions/RECOMMENDATIONS.md` (the 2026-04-30 Stage 4 punch list — superseded for the IA structure decision, but per-block verbatim sources still authoritative)
- `docs/audit/admissions/VERIFICATION.md` (2026-04-30 + 2026-05-03 verifier runs — pre-restructure baseline)
- `docs/audit/counselors/extracted/{clearwater,stpete}/admissions.md` (campus admissions hubs)
- `docs/audit/admissions/extracted/{clearwater,stpete}/testing.md` (campus testing schedules)
- `docs/audit/admissions/extracted/clearwater/admissions-shadowing-days-times.md` (CLW shadowing PDF wrapper)
- `docs/audit/admissions/extracted/www/admissions-process-requirements-and-criteria.md` (institutional process spine)
- `docs/audit/verbatim-rule.md` (the interpretation framework)
