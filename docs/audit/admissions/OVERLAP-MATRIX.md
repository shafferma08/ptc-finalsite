# Admissions Cluster — Overlap Matrix (Stage 3, Mapper)

**Generated:** 2026-04-30
**Source:** `docs/audit/admissions/extracted/{clearwater,stpete}/*.md` (16 fresh extracts) + 4 cross-cluster reuses from `docs/audit/counselors/extracted/`. www has zero admissions content.
**Method:** Frontmatter `char_count` parity check, full body text comparison, and `diff -q` confirmation that paired files differ only in the frontmatter `source_url` / `campus` lines.

---

## Headline finding

**www has no admissions hub** (`https://www.myptc.edu/admissions` → 404). The institutional level publishes nothing. CLW and STP each ship a parallel `/admissions/...` sub-tree. **5 of 7 paired sub-pages are byte-identical** between the two campuses (same char count, same body text). The 3 that diverge are the two top-of-tree hubs and the TEAS PDF wrapper. There is one real asymmetry (STP shadowing 404) and one stale PDF (STP TEAS, August 2023).

---

## Topic-by-topic comparison

| # | Topic | www | CLW (chars) | STP (chars) | Verdict | One-sentence summary |
|---|---|---|---|---|---|---|
| 1 | Admissions hub (general process) | absent (404) | 1972 | 1498 | **different** | Same 8-step structure, but CLW names the FAFSA School Code 005605 and references Apply via "PTC Application" link, while STP names School Code 013917, names Joanne Schnell + Sabrina Mitchell as financial-aid contacts, and uses "Visit APPLY!" wording. |
| 2 | Acceptable Proofs of Residency | absent | 1328 | 1328 | **byte-identical** | Florida Statute 1009.21 boilerplate plus 5 statute links; institutional content with no campus-specific language. |
| 3 | Transfer | absent | 1437 | 1437 | **byte-identical** | Transfer-credit policy (3-year window, official transcript, work-experience documentation bullets); identical across campuses. |
| 4 | Readmission | absent | 442 | 442 | **byte-identical** | 2-paragraph readmission process (counselor meeting, literacy testing, 3-year credit validity); identical. |
| 5 | Enrollment Options | absent | 2675 | 2675 | **byte-identical** | OCP / Career Technical Certificate / Continuing Workforce Education definitions (3 sub-headings); identical. |
| 6 | Shadowing Days & Times | absent | 24 (PDF wrapper) | **404** | **asymmetric** | CLW links a current April 2026 PDF schedule; STP page does not exist. |
| 7 | Testing hub | absent | 1368 | 812 | **different** | CLW expanded with TEAS contact (Merritt Scott) and split AM/PM TEAS schedule; STP slimmer, links 2023/2024 PDFs and adds NCCER & ESCO arrival window not present on CLW. |
| 8 | CASAS | absent | 1056 | 1056 | **byte-identical** | CASAS purpose, who must test, ESOL placement; identical 5-paragraph block. |
| 9 | TEAS | absent | 108 (PDF wrapper) | 176 (PDF wrapper) | **different (both wrappers)** | Each campus links its own campus-specific TEAS PDF; CLW PDF dated May 2025, STP PDF dated August 2023. |

**Cross-cluster reuse (admissions office hours):**

| Topic | CLW source | STP source | Verdict |
|---|---|---|---|
| Student Services & Hours (admissions office hours) | `counselors/extracted/clearwater/student-services-and-hours.md` | `counselors/extracted/stpete/student-services-hours.md` | Already extracted; slug differs (CLW `-and-hours`, STP `-hours`). Reused, not re-scraped. |

---

## Identical-content groups

The 5 byte-identical pairs are unambiguous **`shared`** consolidation candidates. Single source of truth on www, both campus shells link to it.

| Topic | Pair (paths under `extracted/`) | Char count | IA implication |
|---|---|---:|---|
| Acceptable Proofs of Residency | `clearwater/admissions-acceptable-proofs-of-residency.md` ↔ `stpete/admissions-acceptable-proofs-of-residency.md` | 1328 | `shared` — institutional Florida-statute content. Lift to www once, link from both campus shells. |
| Transfer | `clearwater/admissions-transfer.md` ↔ `stpete/admissions-transfer.md` | 1437 | `shared` — transfer-credit policy is institutional. |
| Readmission | `clearwater/admissions-readmission.md` ↔ `stpete/admissions-readmission.md` | 442 | `shared` — readmission process is institutional. |
| Enrollment Options | `clearwater/admissions-enrollment-options.md` ↔ `stpete/admissions-enrollment-options.md` | 2675 | `shared` — OCP / CTC / CWE definitions are institutional. |
| CASAS (overview) | `clearwater/testing-casas.md` ↔ `stpete/testing-casas.md` | 1056 | `shared` overview text. Schedules live separately on each campus's testing hub (campus-specific). |

`diff -q` reports each pair as differing only because of the `source_url` and `campus` lines in frontmatter; body text is verbatim identical.

---

## Campus asymmetries

### Hard asymmetry: STP shadowing 404

`stpete.myptc.edu/admissions/admissions/shadowing-days-times` does not exist. CLW publishes a current `ShadowSchedule04-16-26.pdf` (April 16, 2026). Three IA possibilities for the IA-Recommender to pick from (per inventory.md):

1. STP doesn't run shadowing as a discrete admissions step (program-level pages absorb it). → Redesign treats shadowing as CLW-only on `#campus-tours`.
2. STP has a schedule but publishes it on a different slug (program pages, counselor pages). → Need program-cluster verification.
3. STP has a real content gap. → `follow-ups.md` ask back to STP admissions to publish a parallel schedule.

### Soft asymmetries on the divergent hubs

**Admissions hub diff (CLW 1972 / STP 1498):**

| Element | CLW | STP |
|---|---|---|
| FAFSA School Code | `005605` | `013917` |
| Apply CTA wording | "PTC Application" | "Visit APPLY!" |
| Proof-of-residency link wording | "Information on proof of residency" | "For information on proof of residency, click here." |
| Financial-aid post-eligibility contact | "contact the Financial Aid office by visiting the school or calling 727-538-7167, option 7" | "contact the Financial Aid office by visiting the school or emailing Joanne Schnell (schnellj@pcsb.org) for VA financial aid or Sabrina Mitchell (mitchellsa@pcsb.org) for Pell/other financial aid" |
| Shadowing block | Present (6 lines + "SHADOWING SCHEDULE" header) | **Absent** (consistent with the STP shadowing 404) |
| Accommodations block | Present (1 paragraph) | **Absent** |
| Outside-funding-agency line | Present | **Absent** |
| "Once notified that you are accepted, pay all applicable fees" | Present | **Absent** |

CLW is the longer, more complete authoring; STP is a slimmer version with different financial-aid contact details and missing the shadowing/accommodations/outside-funding/payment lines. Most of the divergence is **structural** (STP omits 4 blocks CLW has) plus campus-specific values for the FAFSA code and post-eligibility contact.

**Testing hub diff (CLW 1368 / STP 812):**

| Element | CLW | STP |
|---|---|---|
| Title heading | "Clearwater Campus Testing Schedule" (no `#` prefix in extract) | "Testing" → "TESTING SCHEDULE" |
| Scheduling note | "By Appointment Only / Call 727-538-7167 ext 2006 to schedule" | "Please arrive at least 30 minutes before your scheduled testing time" |
| CASAS hours | "Monday – Thursday \| Testing schedule starts at 8:00 a.m." + "Twice a month on Wednesday evenings, beginning at 4:30 p.m." | "Monday – Friday \| 8:00am – 11:00am" |
| TEAS in-person policy line | Present | Present (same sentence verbatim) |
| TEAS schedule detail | Full AM (Mon–Thu 8:00 a.m.) and PM (Wed 4:30 p.m.) blocks with arrival rules and sign-in locations | Single line: "Monday – Friday at 8:00 a.m." |
| TEAS contact | **Merritt Scott, PTC-Clearwater PN Counselor, 727-538-7167 x2032, scottme@pcsb.org** | **Not named** |
| NCCER & ESCO arrival window | Absent | Present: "Monday – Friday: 7:30am – Noon" |
| External PDF links | None on hub (links go to internal Finalsite resource manager) | 2 external pcsb.org PDFs (CASAS 04/2024, TEAS 08/2023) |

CLW is the more authoritative testing hub (named contact, granular schedule). STP carries one piece of content CLW doesn't (NCCER & ESCO arrival window) and links to two pcsb.org-hosted PDFs that may be stale.

### Other campus-specific markers

- **CASAS schedules** are campus-specific even though the *overview* text is byte-identical. CLW schedule lives on the testing hub (Mon–Thu mornings + twice-monthly Wed evenings). STP schedule lives on the testing hub (Mon–Fri 8 a.m. – 11 a.m.) and on a 04/2024 PDF.
- **TEAS contact** named on CLW (Merritt Scott), not named on STP. If STP has a TEAS contact, follow-ups.md ask. Otherwise, mark as CLW-only.

---

## PDF-wrapper inventory

Three pages in this cluster are pure PDF link wrappers (body chars < 200, single PDF anchor in the body):

| # | Page | Campus | Body chars | PDF target | PDF date | Verdict |
|---|---|---|---:|---|---|---|
| 1 | Shadowing Days & Times | CLW | 24 | `ShadowSchedule04-16-26.pdf` (Finalsite-hosted) | **April 16, 2026** | Current. |
| 2 | TEAS | CLW | 108 | `TEAS Information Page_05212025.pdf` (Finalsite-hosted) | **May 21, 2025** | ~1 year old. Acceptable. |
| 3 | TEAS | STP | 176 | `teas testing schedule_sp_08252023.pdf` (pcsb.org-hosted) | **August 25, 2023** | **~2.5 years stale — `follow-ups.md` candidate.** |

Substantive HTML pages (everything else): admissions hub × 2, residency, transfer, readmission, enrollment options, CASAS × 2, testing hub × 2.

---

## Stale content

**STP TEAS PDF dated August 25, 2023.** Hosted on `pcsb.org`, not Finalsite. ~2.5 years old. CLW's parallel page links a May 2025 PDF on Finalsite. STP testing hub *also* links the same 2023 file. This is the cluster's clearest live-site staleness flag and should be in `follow-ups.md` regardless of how IA decides to consolidate.

The CASAS PDF on STP testing hub (`casastestingschedstp_04012024.pdf`, April 2024) is 2 years old; less urgent but worth noting.

---

## Cross-cluster references (already extracted)

These four files in `docs/audit/counselors/extracted/` are reused by the admissions cluster and not re-scraped:

| File | Cluster of record | Why used here |
|---|---|---|
| `counselors/extracted/clearwater/admissions.md` (1972 chars) | Counselors (Stage 2) | This is the CLW admissions hub. Reused to populate row 1 of the matrix above. |
| `counselors/extracted/stpete/admissions.md` (1498 chars) | Counselors (Stage 2) | STP admissions hub. Reused for row 1. |
| `counselors/extracted/clearwater/student-services-and-hours.md` | Counselors | Source of truth for CLW admissions-office hours, referenced by `admissions.html`. Slug uses `-and-hours`. |
| `counselors/extracted/stpete/student-services-hours.md` | Counselors | Source of truth for STP admissions-office hours. Slug uses `-hours` (no "and"). |

The slug inconsistency (CLW `student-services-and-hours` vs STP `student-services-hours`) is documented in the Counselors inventory; not a new finding here.

---

## IA red flags

1. **www admissions hub doesn't exist.** Redesign creates institutional admissions content from scratch, sourced verbatim from the union of the two campus sub-trees. This is the cluster's defining IA decision: the redesign moves PTC from "two parallel campus admissions trees with no institutional layer" to "one institutional admissions page with campus-specific blocks." IA-Recommender owns the tabs-vs-cards-vs-shared-page call.
2. **Two divergent hubs but mostly-shared sub-pages.** 5 of 7 paired sub-pages are byte-identical, but both top-level hubs diverge. This says: live ships shared body content authored once, then the two campus admins diverged on the *framing pages* over time. Consolidation should be straightforward for the 5 shared sub-pages, contested for the two hubs.
3. **STP shadowing 404 vs CLW current April 2026 PDF.** Real asymmetry. Three IA paths (see Campus asymmetries above) — IA-Recommender to pick.
4. **STP TEAS PDF is 2.5 years stale.** Independent of IA decisions, this needs a `follow-ups.md` line for STP admissions to refresh or retire.
5. **TEAS contact named on CLW only.** Merritt Scott (`scottme@pcsb.org`, x2032) is named as the TEAS contact on CLW's testing hub. STP testing hub names no TEAS contact. Either STP has a counterpart that should be surfaced, or the redesign treats Merritt Scott as the institutional TEAS contact for both campuses. IA-Recommender to confirm; potential `follow-ups.md` ask to STP.
6. **Redesign sections with no live source.** `admissions.html` has `#admissions-faq` and `#accommodations` sections. There is no live admissions FAQ in the extracted material. Accommodations appears as a single sentence on the CLW hub only ("Accommodations are available... Please see a school counselor for further information") — not enough to populate a redesign section. **The Comparator owns the verdict on whether these are fabricated**, but flagging here so IA-Recommender knows two redesign sections may need to be either cut, sourced from outside this cluster (likely Counselors / Compliance), or routed to `follow-ups.md` as content gaps.
7. **Slug-level inconsistency carries through.** STP missing the `shadowing-days-times` slug, and the `student-services-and-hours` vs `student-services-hours` divergence, are both symptoms of the two campus subsites being maintained independently with no canonical IA. The redesign's institutional admissions page resolves this by definition; the matrix surfaces it so IA-Recommender doesn't have to rediscover it.

---

## What this means for IA

The Admissions cluster is **mostly consolidable, with 3 surgical decisions**. The 5 byte-identical pairs (residency, transfer, readmission, enrollment options, CASAS overview) lift cleanly to `shared` institutional content with no editing required. The 3 surgical decisions are: (1) reconcile the two divergent admissions hubs into one institutional process narrative, where the FAFSA School Code, financial-aid contacts, and possibly the shadowing/accommodations blocks become per-campus elements within a shared framework; (2) decide how to handle the STP shadowing 404 (CLW-only feature, hidden gap, or `follow-ups.md` ask); (3) decide how to surface the TEAS contact (Merritt Scott named on CLW; not on STP) on the redesign's `#testing` section. CASAS and TEAS schedules are campus-specific within an otherwise shared overview. Two redesign sections (`#admissions-faq`, `#accommodations`) have no live source in this cluster's extracts and need Comparator and IA-Recommender attention before content is finalized.
