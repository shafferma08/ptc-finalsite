# Counselors Cluster — Recommendations

**Generated:** 2026-04-30
**Stage:** 4 (synthesis)
**Inputs:** `OVERLAP-MATRIX.md`, `REDESIGN-COMPARISON.md`, `IA-RECOMMENDATION.md`, `VERIFICATION.md`, plus direct read of `welding-advanced.html` to settle a Comparator-vs-Verifier disagreement.

---

## TL;DR

- **Zero confirmed fabrications.** The Comparator flagged the `welding-advanced.html` "dual-counselor layout" as a fabrication; the Verifier flipped the verdict and direct file inspection confirms the pattern is a correctly-labeled per-campus chooser ("Clearwater Counselor" + "St. Petersburg Counselor"), each surfacing that campus's single counselor verbatim. Earlier project-state framing (and Marianne's quick read) was wrong. Nothing to strip on `welding-advanced.html`.
- **Architecture decision: build per-campus counselor index pages.** Add `clearwater-counselors.html` (5 counselor cards) and `stpete-counselors.html` (3 counselor cards). Inline counselor cards on program pages stay primary. No institutional `counselors.html` on www. Generic "Talk to a Counselor" CTAs land on the campus index pages instead of `contact.html`.
- **One high-stakes drift** on `admissions.html` step 3: the redesign expands the counselor meeting scope (review application + financial aid + timeline) beyond what live publishes (program-interest discovery before applying). Either tighten redesign to live's wording or route to follow-ups so live can broaden.
- **10 missing items**, 8 of which dissolve once the campus index pages are built. The remaining 2 are an accommodations referral line on `admissions.html` (verbatim from live) and the "school counselor (admissions contact)" phrasing convention.
- **Counselor-program mapping has no live canonical anywhere.** Marianne is the de facto source of truth. The redesign reflects that ownership; we don't pretend live is the canonical store.

---

## Architecture decision

**Pattern: per-campus counselor index + inline cards on program pages.**

| Layer | What | Where | Why |
|---|---|---|---|
| Primary placement | Inline counselor card | Each program page (e.g., `welding-clearwater.html`) | Matches live verbatim. Prospective student looking at a program sees the counselor immediately. |
| Secondary placement | Per-campus counselor index | `clearwater-counselors.html` (5 cards) + `stpete-counselors.html` (3 cards) | Lands generic "Talk to a Counselor" CTAs. Replaces the burial of counselors inside the 100+-row staff directory on live. Gives a browse-by-counselor wayfinding path. |
| Cross-campus programs (Welding Advanced today) | Per-campus chooser (already in place) | `welding-advanced.html` lines 856-891 | Existing pattern is correct. Each campus's card shows that campus's single counselor. **No change needed.** |
| Generic CTAs | Route to campus index | `admissions.html`, `tuition-aid.html`, `contact.html` | Replace dead-end CTAs with campus-aware destinations. When campus context is unknown, surface a chooser. |

**Two-campus classification (locked):**
- Counselor lists, counselor-program mapping, phone extensions: **`campus-specific`**
- Counselor card schema: **`shared`** (5 fields: name, title, email, ext, programs)
- Generic "Talk to a Counselor" CTA: **`shared`** prompt → **`campus-specific`** destination
- Welding Advanced: not asymmetric, not dual — two parallel `campus-specific` programs, presented via a chooser

**Rejected alternatives:**
- Single institutional `counselors.html` (violates two-campus discipline; live has no www counselor presence)
- Counselor module on About pages (re-bloats the just-closed About cluster; counselors are wayfinding, not identity)
- Status quo (program-page-only) (leaves dead-end generic CTAs across `admissions.html` / `tuition-aid.html` / `contact.html`)

---

## Fabrications punch list

**Zero confirmed fabrications.**

The Comparator's three flagged fabrications (F1 dual-counselor layout, F2 cross-location wording, F3 hero nudge) all turn out to be correct readings of a per-campus chooser pattern. The Verifier's independent re-check + direct file inspection confirm: each card on `welding-advanced.html` is explicitly labeled by campus and surfaces that campus's correct single counselor verbatim from live. Pattern matches live, matches two-campus discipline, and is the IA target the IA-Recommender would have prescribed if it weren't already there.

| # | Comparator verdict | Synthesis verdict | Note |
|---|---|---|---|
| F1 | FABRICATED — dual-counselor layout | **NOT FABRICATED** (per Verifier flip + direct inspection) | The cards are labeled "Clearwater Counselor" (L860) and "St. Petersburg Counselor" (L877) — explicit per-campus chooser, not a paired-counselor claim. Each card shows that campus's single counselor. |
| F2 | FABRICATED-LIGHT — "counselor contacts vary by location" | **NOT FABRICATED** | The wording accurately describes the per-campus chooser model on the page below. No action. |
| F3 | FABRICATED-LIGHT — hero nudge "see schedules and counselors" | **NOT FABRICATED** | Same — the hero correctly previews the per-campus chooser. No action. |

**Stage 6 build action:** none.

---

## Missing punch list

10 MISSING items from Comparator. 8 dissolve when the campus index pages are built; 2 are standalone adds.

### Resolved by building campus index pages

| # | What's missing on redesign | Where it lives on live | Resolution |
|---|---|---|---|
| M5 | STP Counseling Department hours | `extracted/stpete/student-services-hours.md` | Add to `stpete-counselors.html` footer + link to existing `student-services-hours` page |
| M6 | CLW Student Services hours | `extracted/clearwater/student-services-and-hours.md` | Add to `clearwater-counselors.html` footer + link |
| M7 | Full counselor roster CLW (Corthell, Fields, Milisav, Santos, Scott) | `extracted/clearwater/campus-staff.md` Student Services section | All 5 surface on `clearwater-counselors.html` |
| M8 | Full counselor roster STP (Ashwood, Johnson, Randolph) | `extracted/stpete/campus-staff.md` Student Services section | All 3 surface on `stpete-counselors.html` |
| M9 | Phone-extension publication beyond welding pages | Live program pages publish `xExt` inline | Index cards include extension when known (Santos x2017, Ashwood x2325 confirmed; other 6 deferred to Programs cluster) |
| M10 | Financial aid contact convention (CLW phone option 7 / STP named specialists) | `extracted/{clw,stp}/admissions.md` | Add to `tuition-aid.html` and/or campus index "general inquiries" block. Verbatim per live: CLW = "calling 727-538-7167, option 7"; STP = "Joanne Schnell (schnellj@pcsb.org) for VA / Sabrina Mitchell (mitchellsa@pcsb.org) for Pell" |
| M2 | Counselor role in outside-funding coordination | `extracted/clearwater/admissions.md` line 42 | Add to `admissions.html` enrollment steps + index page general inquiries block |
| M3 | Counselor as program-discovery contact (pre-application) | `extracted/{clw,stp}/admissions.md` | Reframe `admissions.html` step 3 narrative to acknowledge pre-application counselor consultation (also resolves D1 drift) |

### Standalone adds

| # | What's missing | Resolution |
|---|---|---|
| **M1** | Counselor as accommodations referral path | Add verbatim to `admissions.html` (probably under the FAQ or as a separate section): "Accommodations are available during the instructional program for students with documented physical or mental impairments. Please see a school counselor for further information." (Verbatim from CLW live; STP live omits this sentence — log to follow-ups for STP parity.) |
| **M4** | "School counselor (admissions contact)" parenthetical convention | Adopt the `(admissions contact)` parenthetical anywhere the redesign currently says "admissions counselor" — clarifies that the same person handles program advising and admissions intake. Light cross-cluster impact (admissions, tuition-aid, contact). |

---

## Drift fixes

### High-priority

| # | File:line | Redesign wording | Live wording | Fix |
|---|---|---|---|---|
| **D1** | `admissions.html` line 509 | "Schedule a meeting with an admissions counselor to review your application, discuss financial aid options, and plan your enrollment timeline." | "If needed, meet with a school counselor (admissions contact) to discuss program interests and requirements." | **Tighten redesign to live scope** OR route to follow-ups so live broadens. Live frames the counselor meeting as program-interest discovery before applying; redesign expands to post-application case management. Material drift, not just rewording. **Recommend tighten** because the broader scope can be implied via subsequent steps without making a specific claim live doesn't support. |

### Light drift (acceptable institutional voice, log only)

| # | File:line | Redesign wording | Status | Action |
|---|---|---|---|---|
| D2 | `admissions.html` L532 | "Your counselor will let you know what testing is needed" | DRIFT-LIGHT | Plausible institutional voice. Confirm with PTC counseling office at next opportunity; otherwise leave. |
| D3 | `admissions.html` L542 | "Work with your counselor to select your start date and register" | DRIFT-LIGHT | Same. |
| D4 | `admissions.html` L675 (FAQ) | "Your admissions counselor can provide specific start dates" | DRIFT-LIGHT | Same. |
| D6 | `admissions.html` L602 | "Your admissions counselor will confirm which test, if any, applies" | DRIFT-LIGHT | Same. |
| D7 | Welding hero nudges "The #1 thing counselors repeat" | Editorial wayfinding voice | DRIFT-LIGHT | Acceptable as long as no specific counselor is quoted. Leave as-is. |
| D5 | `admissions.html` L578 (HS counselor) | Out-of-cluster reference (high-school counselor, not PTC) | OUT-OF-SCOPE | Acceptable as written. |

### Phone-format normalization

Live uses `727-XXX-XXXX xExt`; redesign uses `(727) XXX-XXXX xExt` (AP style, parens around area code). Verifier flagged this as a verbatim rule edge case. **Recommend adding a one-line note to `verbatim-rule.md`** permitting phone-number formatting normalization as long as digits are identical.

---

## Unverified claims (deferred to other clusters)

| # | Claim | Source page | Defer to |
|---|---|---|---|
| U1 | "Our financial aid counselors are here to help you navigate every option available" | `tuition-aid.html` L787 | Tuition cluster |
| U2 | "Our counselors are here to guide you every step of the way" | `contact.html` L805 | Contact/Admissions cluster (or accept as institutional voice) |
| U3 | STP shadow-day URL `https://stpete.myptc.edu/admissions/admissions/shadowing-days-times` | `welding-advanced.html` L888 | Quick verify during Stage 6 build (one curl) |

---

## Verifier-added issues

1. **Phone-format normalization rule needs documenting.** Add a line to `docs/audit/verbatim-rule.md` permitting `(XXX) XXX-XXXX xExt` style as long as digits match live's hyphenated format.
2. **6 of 8 counselor extensions are unverified** (Corthell, Fields, Milisav, Scott, Johnson, Randolph). Source: extract from each program page during Programs cluster, or ask each counselor directly. Index pages can ship email-only for these and add extensions later.
3. **Email casing on staff page is inconsistent within each campus** (`SCOTTME` vs `corthellk` at CLW; `ASHWOODC` vs `randolphn` at STP). Verbatim rule preserves as published. Already logged as low-priority follow-up by IA-Recommender.

---

## Live-site issues to flag in `follow-ups.md`

(Log all of these into the Counselors section of `follow-ups.md` as part of Stage 6.)

| # | Issue | Live page | Recommendation | Priority |
|---|---|---|---|---|
| FU1 | Counselor-program assignment not published anywhere unified on live | (none — exists only inline on individual program pages) | Each campus to publish a counselor-program mapping on the staff directory or a new live page. Current state forces the redesign to rely on Marianne's working knowledge. | High |
| FU2 | Email casing inconsistent within each campus staff directory | `clearwater-campus-staff`, `st-petersburg-campus-staff` | Either normalize all-lowercase or all-uppercase per campus. Low priority, governance-level. | Low |
| FU3 | STP Welding pages omit instructor contact info that CLW publishes | STP welding-technology and welding-technology-advanced program pages | Either add instructor list to STP pages for parity, or remove from CLW pages. Confirm which is the editorial standard. | Medium |
| FU4 | CLW phone-tree (option 7) vs STP named specialists for financial aid | Both campus admissions hubs | CLW could adopt STP's named-specialist pattern for a more direct route. | Medium |
| FU5 | Missing accommodations CTA on STP admissions hub | `stpete.myptc.edu/admissions/admissions` | Add the verbatim CLW sentence: "Accommodations are available during the instructional program for students with documented physical or mental impairments. Please see a school counselor for further information." | Medium |
| FU6 | Hours-page slug inconsistency | CLW: `student-services-and-hours` / STP: `student-services-hours` | Pick one canonical slug. Trivial. | Low |
| FU7 | Phone extensions not published on staff directory | Both campus staff pages | If extensions are stable enough to publish on program pages, publish on the staff directory too. | Low |
| FU8 | "School counselor (admissions contact)" disambiguation | Both campus admissions hubs | Live uses this parenthetical to clarify that program advising and admissions intake are the same person. Worth keeping consistent across the site. | Low |
| FU9 | `admissions.html` step 3 drift — counselor meeting scope (D1) | (live admissions hubs) | Either redesign tightens to live wording, OR live broadens to redesign's expanded scope ("review application + financial aid + timeline"). One or the other. | High (drift) |
| FU10 | 6 counselor phone extensions not extractable from staff page | Both campus staff directories | Either publish extensions on staff page (FU7) or accept the program-page-only pattern. | Medium |

---

## Stage 6 build order

(Lifted from IA-Recommender §"Migration order for Stage 6", with adjustments for the no-fabrication finding.)

1. **No change to `welding-advanced.html`.** The per-campus chooser pattern at L856-891 is correct. (Original IA-Recommender step 1 was based on the false premise that this section was a fabrication. Skip.)
2. **Build `clearwater-counselors.html`** using canonical `.card` / `.card-grid` pattern. 5 cards (Corthell, Fields, Milisav, Santos, Scott). Each card: name, title "Counselor" (live staff-page title) or "School Counselor" (live program-page title — pick one and document), email (preserving live casing), phone extension where known (Santos x2017 confirmed; others omit until verified), list of programs covered. Page intro: campus address + main phone (verbatim). Footer CTA: link to existing student-services-and-hours page.
3. **Build `stpete-counselors.html`** same template. 3 cards (Ashwood, Johnson, Randolph). Ashwood x2325 confirmed; others omit extensions for now.
4. **Update generic "Talk to a Counselor" CTAs** to link to the new index pages:
   - `admissions.html` (5+ CTAs): point to a campus chooser → campus index
   - `tuition-aid.html` button L987: same
   - `contact.html` L805: keep sentence verbatim, add two clear links to `clearwater-counselors.html` and `stpete-counselors.html`
5. **Fix D1 drift on `admissions.html` step 3** (line 509). Either tighten to live's "discuss program interests and requirements" scope OR route to follow-ups for live broadening. Decision is Marianne's.
6. **Add accommodations referral line (M1)** to `admissions.html` verbatim from CLW live.
7. **Adopt "school counselor (admissions contact)" phrasing (M4)** on `admissions.html`, `tuition-aid.html`, `contact.html` where the redesign currently says "admissions counselor" alone. (Cross-cluster touchpoint; light edit.)
8. **Add STP shadow-day URL verification** as a build-time curl check on the URL referenced in `welding-advanced.html` L888.
9. **Add phone-format normalization rule** to `docs/audit/verbatim-rule.md`.
10. **Update `docs/ptc_sitemap.md` Part 3** to add "Counselors" entry under each campus block.
11. **Wire campus nav** (and the existing campus-about pages' "Faculty & Staff Directory" item gets a peer "Meet Your Counselors" link).
12. **Remove `consumer-information.html` L725 placeholder comment** ("via the Counselors cluster when sized") — stale.
13. **Append Counselors section to `follow-ups.md`** with FU1-FU10 above.

---

## Decisions Marianne needs to make

| # | Decision | Default if no input | When needed |
|---|---|---|---|
| **DEC-1** | "Counselor" (staff page) vs "School Counselor" (program page) — which title does the redesign canonicalize? | Use **"School Counselor"** to match the program-page convention, since that's the user-facing one Marianne already approved on welding pages. | Stage 6 step 2-3 |
| **DEC-2** | D1 drift on `admissions.html` step 3 — tighten redesign to live, or route to follow-ups so live broadens? | **Tighten redesign** (lower-risk; doesn't depend on PCSB action) | Stage 6 step 5 |
| **DEC-3** | Confirm program-counselor mapping for all programs at both campuses (needed for index page "Programs covered" lists) | **Defer**: ship index pages with name+email+ext only, "Programs covered" goes in v2 once mapping data exists | Stage 6 step 2-3 |
| **DEC-4** | Counselor photos — add when available, or stay text-only like live? | **Stay text-only** (matches live; no photos exist to use) | Stage 6 step 2-3 |
| **DEC-5** | Drift items D2-D7 — leave as institutional voice or trim to match live silence? | **Leave as institutional voice** (drift is light, not safety-critical) | Stage 6 step 5 |

---

## Cluster status

- Stage 1 (inventory): ✅
- Stage 2 (extraction): ✅ 10 verbatim extracts
- Stage 3 (analyzing): ✅ 4 subagents complete; one Comparator-vs-Verifier flip resolved
- Stage 4 (synthesizing): ✅ this document
- Stage 5 (Marianne approval): waiting on DEC-1 through DEC-5
- Stage 6 (building): pending Marianne approval

**Recommend: get DEC-1 through DEC-5 from Marianne, then advance to `building`.**

---

## Supporting reports

- `docs/audit/counselors/inventory.md` — Stages 1-2 work queue + extraction notes
- `docs/audit/counselors/OVERLAP-MATRIX.md` — Mapper output (20 topic rows)
- `docs/audit/counselors/REDESIGN-COMPARISON.md` — Comparator output (34 claims classified)
- `docs/audit/counselors/IA-RECOMMENDATION.md` — IA-Recommender output (Option B per-campus index)
- `docs/audit/counselors/VERIFICATION.md` — Verifier output (15 high-stakes re-checks, 1 flip)
- `docs/audit/counselors/extracted/{clearwater,stpete}/*.md` — 10 verbatim live extracts
