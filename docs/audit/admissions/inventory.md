# Admissions Cluster — Inventory (Stage 1)

**Generated:** 2026-04-30
**Method:** WebFetch scout of www / clearwater / stpete admissions hubs and side-nav. myptc.edu (Finalsite) returns clean nav data on this domain. Stage 2 verbatim extraction can use curl + Python parse on the same URLs.
**Redesign target:** `admissions.html` (institutional, single page) with sections: `#how-to-apply`, `#enrollment-steps`, `#pathways` (Transfer + Readmission), `#testing`, `#campus-tours`, `#admissions-faq`, `#accommodations`.

---

## Headline finding

**Live www has zero admissions content.** `https://www.myptc.edu/admissions` returns 404. The institutional homepage links only to two external systems (`apply.myptc.edu` for the application portal and `inforequest.myptc.edu` for inquiry/CRM). The two campuses each have their own parallel admissions sub-trees under `/admissions/...`.

This shapes the cluster fundamentally: the redesign is **creating institutional admissions content that does not exist on live today**. The "verbatim from live" rule, in the strictest reading, would leave the redesign's `admissions.html` with nothing to source. The practical interpretation (per `verbatim-rule.md`): pull verbatim from the two parallel campus sub-trees where they say the same thing, treat the campus-asymmetric portions as `campus-specific`, and route IA decisions about institutional framing to Marianne via `IA-RECOMMENDATION.md`.

The two campuses also publish an **almost-identical** sub-page structure under `/admissions/...`, which is a strong signal that most of the live content was authored once and copy-edited for each campus. That makes the Mapper's overlap analysis the load-bearing artifact for this cluster.

---

## Cluster scope (what's IN, what's OUT)

The live `/admissions/...` sub-tree on each campus contains content that the redesign splits across **two** different institutional pages:

| Live sub-tree | Redesign destination | This cluster? |
|---|---|---|
| `/admissions/admissions/*` (5 sub-pages) | `admissions.html` | **IN** |
| `/admissions/testing/*` (2 sub-pages) | `admissions.html` (`#testing`) | **IN** |
| `/admissions/financial-aid/*` (8 sub-pages) | `tuition-aid.html` | OUT (cluster #6 Tuition) |
| `/admissions/military-veteran-student-resources` (CLW only) | `tuition-aid.html` (Veterans Benefits section) | OUT (cluster #6 Tuition) |
| `/admissions/student-services-and-hours` / `/admissions/student-services-hours` | Hours referenced in admissions context, but page itself belongs elsewhere | PARTIAL (already extracted in Counselors cluster — reuse those extracts) |
| `/admissions/student-portal` | Current Students area | OUT (future cluster) |

**Stage 2 work queue total: 18 URLs to extract** (9 per campus, 0 on www). Two additional URLs (`student-services-and-hours` per campus) already exist in `docs/audit/counselors/extracted/{clearwater,stpete}/` and can be cross-referenced for hours-of-operation language without re-extraction.

---

## Live URLs (Stage 2 work queue)

### www.myptc.edu

| URL | Type | Notes |
|---|---|---|
| (none) | — | `/admissions` returns 404. No institutional admissions hub. The `apply.myptc.edu` and `inforequest.myptc.edu` external links on the homepage are the only admissions touchpoints on www. |

### clearwater.myptc.edu (9 URLs)

| # | URL | Type | Likely redesign target |
|---|---|---|---|
| 1 | `https://clearwater.myptc.edu/admissions/admissions` | Hub | `#how-to-apply` / `#enrollment-steps` overview copy |
| 2 | `https://clearwater.myptc.edu/admissions/admissions/acceptable-proofs-of-residency` | Sub-page | `#enrollment-steps` (residency requirements) |
| 3 | `https://clearwater.myptc.edu/admissions/admissions/shadowing-days-times` | Sub-page | `#campus-tours` (or its own sub-section) |
| 4 | `https://clearwater.myptc.edu/admissions/admissions/transfer` | Sub-page | `#pathways` (Transfer Students) |
| 5 | `https://clearwater.myptc.edu/admissions/admissions/readmission` | Sub-page | `#pathways` (Readmission) |
| 6 | `https://clearwater.myptc.edu/admissions/admissions/enrollment-options` | Sub-page | `#enrollment-steps` or its own block |
| 7 | `https://clearwater.myptc.edu/admissions/testing` | Hub | `#testing` overview |
| 8 | `https://clearwater.myptc.edu/admissions/testing/casas` | Sub-page | `#testing` (CASAS specifics) |
| 9 | `https://clearwater.myptc.edu/admissions/testing/teas` | Sub-page | `#testing` (TEAS specifics) |

### stpete.myptc.edu (9 URLs)

| # | URL | Type | Likely redesign target |
|---|---|---|---|
| 1 | `https://stpete.myptc.edu/admissions/admissions` | Hub | `#how-to-apply` / `#enrollment-steps` overview copy |
| 2 | `https://stpete.myptc.edu/admissions/admissions/acceptable-proofs-of-residency` | Sub-page | `#enrollment-steps` (residency requirements) |
| 3 | `https://stpete.myptc.edu/admissions/admissions/shadowing-days-times` | Sub-page | `#campus-tours` (or its own sub-section) |
| 4 | `https://stpete.myptc.edu/admissions/admissions/transfer` | Sub-page | `#pathways` (Transfer Students) |
| 5 | `https://stpete.myptc.edu/admissions/admissions/readmission` | Sub-page | `#pathways` (Readmission) |
| 6 | `https://stpete.myptc.edu/admissions/admissions/enrollment-options` | Sub-page | `#enrollment-steps` or its own block |
| 7 | `https://stpete.myptc.edu/admissions/testing` | Hub | `#testing` overview |
| 8 | `https://stpete.myptc.edu/admissions/testing/casas` | Sub-page | `#testing` (CASAS specifics) |
| 9 | `https://stpete.myptc.edu/admissions/testing/teas` | Sub-page | `#testing` (TEAS specifics) |

**Total Stage 2 URLs:** 18 (9 per campus, 0 on www)

### Cross-cluster references (already extracted, no re-extract)

| Source | Cluster | Slug | Why we cite it here |
|---|---|---|---|
| `clearwater.myptc.edu/admissions/student-services-and-hours` | Counselors | `clearwater/student-services-and-hours.md` | Admissions office hours live on this page |
| `stpete.myptc.edu/admissions/student-services-hours` | Counselors | `stpete/student-services-hours.md` | Admissions office hours live on this page |

---

## Pattern observations

1. **www has no admissions hub at all.** The institutional level ships zero admissions content. Live's IA pushes both apply and inquire to standalone applications (`apply.myptc.edu`, `inforequest.myptc.edu`) and routes everything else to one of the two campuses. The redesign reverses this and creates a real institutional admissions page. **This is the cluster's core IA decision.**

2. **CLW and STP publish a parallel sub-page structure.** Both campuses have the same nine slugs (admissions hub + 5 admissions sub-pages + testing hub + CASAS + TEAS). Strong prior that most prose is shared and just copy-edited per campus.

3. **One clear asymmetry: CASAS schedule.** The CASAS page text differs between campuses (CLW has "Twice a month on Wednesday evenings, beginning at 4:30 p.m."; STP linked a 2024 PDF). Schedules are campus-specific; content frame likely shared.

4. **Slug inconsistency on student services hours.** CLW uses `/admissions/student-services-and-hours`; STP uses `/admissions/student-services-hours` (no "and"). Already noted in Counselors inventory; not repeated as a follow-up here.

5. **TEAS contact is named on CLW.** CLW testing hub names Merritt Scott (`scottme@pcsb.org` / `727-538-7167 x2032`) as the TEAS contact. STP version not yet probed for parallel content. If STP names a different contact, that's a `campus-specific` block on the redesign.

6. **Two PDFs surface on STP testing pages.** STP `/admissions/testing` links to `casastestingschedstp_04012024.pdf` and `teas%20testing%20schedule_sp_08252023.pdf`, both hosted on `pcsb.org`. The 2023 TEAS PDF is suspect-stale; flag for live-site follow-up.

7. **Financial Aid and Military/Veteran content lives in the live admissions sub-tree but belongs to Tuition cluster.** Live IA places Financial Aid + Mil/Vet under `/admissions/...`; redesign IA splits them into `tuition-aid.html`. We acknowledge this here so Stage 3 doesn't re-litigate the split — it's fixed by cluster scope.

8. **Application and Inquiry are external apps, not content pages.** `apply.myptc.edu` (application portal) and `inforequest.myptc.edu` (CRM/lead capture) are separate Finalsite or third-party apps. The redesign treats these as CTAs only. No extraction work.

---

## Where admissions is referenced in the redesign today

(For Stage 3 Comparator's reference)

- `admissions.html` — the canonical institutional admissions page, sections: `#how-to-apply`, `#enrollment-steps`, `#pathways` (Transfer + Readmission), `#testing`, `#campus-tours`, `#admissions-faq`, `#accommodations`, `#cta-section`
- `index.html` (homepage) — likely has admissions CTAs in hero / Quick Links
- `clearwater.html` and `stpete.html` (campus homepages) — likely have admissions CTAs
- `clearwater-about.html` and `stpete-about.html` — likely cross-link to admissions
- `tuition-aid.html` — separate cluster, but admissions and aid are interlinked; `#fafsa` and `#federal-state` sections will reference admissions steps

Stage 3 Comparator will enumerate exact references.

---

## Two-campus classification (preliminary — IA-Recommender locks in Stage 3)

- **Application process / Steps to enroll:** `shared` if both campus pages say the same thing (high prior), `campus-specific` only where a step diverges (e.g., proof-of-residency rules, testing center addresses)
- **Acceptable Proofs of Residency:** likely `shared` (Florida residency is institutional)
- **Transfer + Readmission:** likely `shared` (process applies to both campuses)
- **Enrollment Options:** likely `shared`
- **Shadowing Days & Times:** **`campus-specific`** (each campus has its own schedule)
- **Testing — CASAS:** `campus-specific` schedules + `shared` overview text
- **Testing — TEAS:** likely `shared` overview + `campus-specific` testing-center contact and schedule
- **Campus tours:** **`campus-specific`** by definition

**One open asymmetry to lock in Stage 3:** TEAS contact (Merritt Scott on CLW). Does STP name a contact? If yes and it differs, two `campus-specific` cards on the redesign's `#testing` section. If STP doesn't name one, that's a `follow-ups.md` ask back to STP.

---

## Key IA questions for Stage 3

(Things the IA-Recommender will need to answer)

1. **Single institutional page vs split?** Redesign default = single `admissions.html`. Live default = no institutional page. Recommend: stay with single institutional page, treat both campus sub-trees as the verbatim source pool, mark genuinely campus-specific blocks (shadowing schedule, CASAS schedule, TEAS contact, campus tour info) with explicit campus tabs/cards on the redesign page. Confirm with IA-Recommender.
2. **Where do Apply and Inquire CTAs land?** Currently `apply.myptc.edu` (external app) and `inforequest.myptc.edu` (CRM). The redesign should preserve those external CTAs verbatim. No new institutional landing.
3. **Shadowing vs campus tours.** Live treats "Shadowing Days & Times" as separate from the implicit campus-tour concept. Redesign has `#campus-tours` as the section name. Decide: are these the same thing or two distinct flows? IA-Recommender to verify after extraction.
4. **Testing routing.** Live has both campus testing pages plus inline TEAS info on each campus's testing hub. Redesign's `#testing` is one section. Decide: per-campus tabs inside `#testing`, or institutional copy + per-campus contact card?
5. **Accommodations.** Redesign has `#accommodations` section (line 704). No clear live source surfaced in Stage 1 (likely lives on a separate accessibility/disability page, possibly under Counselors or Compliance). Stage 3 Comparator should flag whether the redesign's accommodations copy is sourced or fabricated.
6. **FAQ.** Redesign has `#admissions-faq`. Live doesn't have an admissions FAQ that surfaced in Stage 1 nav. Likely fabricated or generic. Stage 3 Comparator will classify each Q/A.

---

## Notes on extraction tooling

- Following the Compliance-cluster precedent: WebFetch is fine for these public, unauthenticated, short Finalsite pages. Chrome MCP is overkill for 18 short URLs. PROCESS.md's Chrome-MCP path remains the default for normal extraction passes.
- During Stage 1 scout, one WebFetch result on the CLW testing page contained an embedded `<system-reminder>` block. Treated as suspect content (the harness, not external pages, owns reminders) and excluded from any analysis. No content was incorporated from that block.

---

## Stage 2 plan

Stage 2 will extract all 18 URLs verbatim into `docs/audit/admissions/extracted/{clearwater,stpete}/<slug>.md` with frontmatter (source URL, title, scrape date, char count, campus, type, pdf_url if applicable, notes). No www folder will be created — there is nothing to extract on www. Estimated: ~30 min via curl + Python parse, batched 3 URLs at a time.

---

## Stage 2 — completed 2026-04-30

Method: `urllib + BeautifulSoup` (`docs/audit/admissions/_extract.py`). Per `verbatim-rule.md`, WebFetch is not used for verbatim extraction. Each URL produces both a `.raw.html` and a `.md` (frontmatter + verbatim body) under `extracted/{campus}/`.

**Extracted: 16/18 fresh URLs successfully** (CLW + STP admissions hubs reused from `counselors/extracted/` — already verbatim from a 2026-04-30 pull). One real 404: `stpete.myptc.edu/admissions/admissions/shadowing-days-times` does not exist.

### Results table

| # | Campus | Slug | Source URL | Chars | Type | Notes |
|---|---|---|---|---:|---|---|
| 1 | clearwater | (admissions hub) | `/admissions/admissions` | 1994 | hub | Reused from `counselors/extracted/clearwater/admissions.md` |
| 2 | clearwater | admissions-acceptable-proofs-of-residency | `/admissions/admissions/acceptable-proofs-of-residency` | 1328 | sub | identical to STP |
| 3 | clearwater | admissions-shadowing-days-times | `/admissions/admissions/shadowing-days-times` | 24 | PDF wrapper | PDF: `ShadowSchedule04-16-26.pdf` (current, April 2026) |
| 4 | clearwater | admissions-transfer | `/admissions/admissions/transfer` | 1437 | sub | identical to STP |
| 5 | clearwater | admissions-readmission | `/admissions/admissions/readmission` | 442 | sub | identical to STP |
| 6 | clearwater | admissions-enrollment-options | `/admissions/admissions/enrollment-options` | 2675 | sub | identical to STP |
| 7 | clearwater | testing | `/admissions/testing` | 1368 | hub | **differs** from STP (CLW 1368 / STP 812) |
| 8 | clearwater | testing-casas | `/admissions/testing/casas` | 1056 | sub | identical to STP |
| 9 | clearwater | testing-teas | `/admissions/testing/teas` | 108 | PDF wrapper | PDF: `TEAS Information Page_05212025.pdf` (May 2025) |
| 10 | stpete | (admissions hub) | `/admissions/admissions` | 1520 | hub | Reused from `counselors/extracted/stpete/admissions.md`. **Differs** from CLW (1994 vs 1520). |
| 11 | stpete | admissions-acceptable-proofs-of-residency | `/admissions/admissions/acceptable-proofs-of-residency` | 1328 | sub | identical to CLW |
| 12 | stpete | admissions-shadowing-days-times | (does not exist) | — | — | **404 — page is missing on STP**. CLW has it. Asymmetry. |
| 13 | stpete | admissions-transfer | `/admissions/admissions/transfer` | 1437 | sub | identical to CLW |
| 14 | stpete | admissions-readmission | `/admissions/admissions/readmission` | 442 | sub | identical to CLW |
| 15 | stpete | admissions-enrollment-options | `/admissions/admissions/enrollment-options` | 2675 | sub | identical to CLW |
| 16 | stpete | testing | `/admissions/testing` | 812 | hub | **differs** from CLW (CLW 1368 / STP 812) |
| 17 | stpete | testing-casas | `/admissions/testing/casas` | 1056 | sub | identical to CLW |
| 18 | stpete | testing-teas | `/admissions/testing/teas` | 176 | PDF wrapper | PDF: `teas testing schedule_sp_08252023.pdf` — **August 2023, ~2.5 years stale** |

### Headline parallelism finding

**5 of 7 paired sub-pages are byte-identical between campuses.** The 5 that match (Acceptable Proofs of Residency, Transfer, Readmission, Enrollment Options, CASAS) confirm the Stage 1 prediction: most live admissions content was authored once and copy-pasted to the second campus. This dramatically simplifies Stage 3 IA work.

The 3 paired pages that **don't** match are the ones where the prior is most expected:
- **Admissions hub** (CLW 1994 vs STP 1520) — different framing copy, intentional divergence likely.
- **Testing hub** (CLW 1368 vs STP 812) — CLW expanded; STP slimmer (CLW probably names Merritt Scott as TEAS contact, STP doesn't).
- **TEAS sub-page** (PDF wrappers, different PDFs by design) — both campuses link a campus-specific schedule PDF.

### Asymmetry: STP shadowing-days-times missing

`stpete.myptc.edu/admissions/admissions/shadowing-days-times` returns 404. CLW publishes a current April 2026 PDF schedule; STP publishes nothing on this slug. Three possible interpretations for IA-Recommender:
1. STP doesn't run program shadowing as a discrete process (program-level pages may absorb it).
2. STP has a shadowing schedule but publishes it elsewhere (a program-cluster job to verify).
3. STP should publish one and currently has a content gap (live-site `follow-ups.md` ask).

### Three PDF-wrapper sub-pages

Pages with `char_count < 200` are pure PDF link wrappers. The redesign's `#campus-tours` and `#testing` sections will need to either link to these PDFs or replace them with inline copy (which would require asking the relevant campus admin to provide that copy verbatim — a `follow-ups.md` ask).

| Page | PDF URL | Date | Verdict |
|---|---|---|---|
| CLW Shadowing | `ShadowSchedule04-16-26.pdf` | April 16, 2026 | Current |
| CLW TEAS | `TEAS Information Page_05212025.pdf` | May 21, 2025 | ~1 year old, likely fine |
| STP TEAS | `teas testing schedule_sp_08252023.pdf` | August 25, 2023 | **~2.5 years stale — follow-up candidate** |

### What Stage 3 inherits

Stage 3 (analyzing) dispatches the 4 audit subagents in parallel:
- **`audit-mapper`** → `OVERLAP-MATRIX.md`. Will confirm the 5 byte-identical pairs and detail the 3 divergent ones.
- **`audit-comparator`** → `REDESIGN-COMPARISON.md`. Reads `admissions.html` against all 16 extracts. Critical sections to scrutinize: `#how-to-apply` and `#enrollment-steps` (which campus hub did the redesign source from? CLW's longer 1994-char version?), `#testing` (CLW vs STP divergence), `#campus-tours` (mentions shadowing — only CLW has live source), `#admissions-faq` and `#accommodations` (no obvious live source — likely fabricated, flag every Q/A).
- **`audit-ia-recommender`** → `IA-RECOMMENDATION.md`. Two-campus calls to lock in: (a) testing — single section with per-campus contact card or per-campus tabs; (b) shadowing — single shared section that links CLW's PDF + a STP placeholder, or per-campus cards with a STP `follow-ups.md` ask.
- **`audit-verifier`** → `VERIFICATION.md`. Cross-checks Comparator verdicts; spot-checks 3 random VERBATIM rows.

### Notes on extraction tooling

`urllib.request` + UA-spoofed `Mozilla/5.0` plus `BeautifulSoup` selecting `<main>`. `&nbsp;` (`\xa0`) normalized to regular space; verbatim-rule's "phone-number formatting normalization permitted" precedent extends to whitespace normalization where the tokens are otherwise identical. Multiple blank lines collapsed to one. `<a>` href text preserved when not already inline in a `<p>`/`<li>`. Sub-200-char body + a `.pdf` href in raw HTML triggers `pdf_url` frontmatter.

---

## Stage 2 patch — 2026-04-30 PM (Marianne pointer + search-first discovery)

**Inventory gap caught.** Stage 1 concluded "www has zero admissions content" based on `www.myptc.edu/admissions` returning 404. That conclusion was wrong. Marianne pointed out a working institutional admissions page at `www.myptc.edu/resources/future-students/admissions-process-requirements-and-criteria` (200 OK, 2252 chars of canonical institutional content). The page contains the 7-step process, both FAFSA School Codes (005605/013917), the age requirement, the 5 start dates per year, the shadowing framing ("speak with a counselor before coming in"), and an institutional accommodations sentence.

**Why Stage 1 missed it:** the URL doesn't follow the pattern of the campus subsites (`/admissions/admissions/...`). On Finalsite-hosted PTC, content URLs are not predictable from page hierarchy. Memory note now binding: `feedback_live_site_url_inference_unreliable.md` — for every Stage 1 going forward, do a per-subsite search pass (and pull `sitemap.xml` if reachable, though all 3 PTC subsite sitemaps return 404) before declaring any subsite "has no [topic] content."

**Search-pass results 2026-04-30 PM** (brute-force probe of likely www slugs, since Finalsite search is JS-only and Google's `site:www.myptc.edu` filter is fuzzy on subdomain):

| Slug | Status | Notes |
|---|---|---|
| `/resources/future-students` | 200 | Hub page, links primarily to campus subsites and other About/Resources pages — does not link to its own admissions-process child |
| `/resources/future-students/admissions-process-requirements-and-criteria` | **200** | **Institutional admissions hub.** Extracted to `extracted/www/admissions-process-requirements-and-criteria.md` |
| `/resources/future-students/financial-aid` | 200 | Out of scope for Admissions cluster — flagged for **cluster #6 Tuition** |
| `/resources/future-students/admissions` / `/enrollment` / `/shadowing` / `/testing` / `/tuition` / `/programs` | 404 | None |
| `/resources/admissions` / `/admissions` / `/admissions-process-requirements-and-criteria` / `/about-us/welcome-to-ptc/admissions` | 404 | None |

**Effect on Stage 3 verdicts.** Many Comparator FABRICATED rows have institutional verbatim sources after all. The www page resolves at minimum: FAFSA School Codes per campus, "16+, not currently enrolled in HS" age requirement, 5-start-dates list, the shadowing framing ("speak with a counselor before coming in"), the residency-proof "two forms of documentation" requirement, accommodations institutional sentence, financial-aid 3-5-day notification. These flip from FABRICATED → VERBATIM in Stage 4 synthesis. Comparator + Verifier reports remain as historical record showing the Stage 1 gap; Stage 4 RECOMMENDATIONS.md does the verdict reconciliation.

**Updated Stage 2 work queue total:** 19 URLs (was 18). One added on www: institutional admissions hub.

**Cross-cluster handoff:** `/resources/future-students/financial-aid` (200, www) is a new institutional financial-aid page Stage 1 missed. Pre-staging note for cluster #6 Tuition's Stage 1: this URL is the canonical www-level financial-aid hub; expect parallel content gaps in the Tuition redesign that flip when this is discovered.

### Updated Stage 2 results (Stage 2 patch row added)

| # | Campus | Slug | Source URL | Chars | Type | Notes |
|---|---|---|---|---:|---|---|
| 0 | www | admissions-process-requirements-and-criteria | `/resources/future-students/admissions-process-requirements-and-criteria` | 2252 | institutional-hub | **Patched 2026-04-30 PM.** Canonical institutional source. |

---

## See also

- `docs/audit/CLUSTERS.md` — row 5 (Admissions)
- `docs/audit/PROCESS.md` — stage definitions
- `docs/audit/verbatim-rule.md` — extraction tooling notes and verbatim-rule edge cases
- `docs/audit/counselors/extracted/clearwater/student-services-and-hours.md` — reusable hours data (cross-cluster reference)
- `docs/audit/counselors/extracted/stpete/student-services-hours.md` — reusable hours data (cross-cluster reference)
- `docs/audit/follow-ups.md` — central register for live-site issues
- `admissions.html` — redesign target page
