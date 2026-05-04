# Tuition Cluster — Inventory (Stage 1)

**Generated:** 2026-05-04
**Method:** WebFetch scout of www / clearwater / stpete subsites + targeted brute-force slug probes per the Stage 1 binding rule (`PROCESS.md` 2026-04-30 update). myptc.edu (Finalsite) returns clean nav data on this domain. Stage 2 verbatim extraction will use WebFetch (rendered DOM) for Finalsite pages, given the JS-render gap caught during the 2026-05-03 admissions drift reconciliation.
**Redesign target:** `tuition-aid.html` (institutional, single page) with sections: `#rates`, `#pay`, `#fafsa`, `#federal-state`, `#scholarships`, `#net-price`, `#veterans`, `#faq`.

---

## Headline finding

**Live www has a placeholder financial-aid page with zero body content.** `https://www.myptc.edu/resources/future-students/financial-aid` returns 200 but the `fsPageContent` body is empty (page title only). All other plausible www tuition slugs (`/tuition`, `/financial-aid`, `/admissions/financial-aid`, `/resources/future-students/{tuition|scholarships|veterans|veterans-benefits}`) return 404. The institutional level publishes no real tuition content.

The two campuses each publish a parallel 8-sub-page financial-aid sub-tree under `/admissions/financial-aid/...` with byte-identical slug structure except for the Net Price Calculator (campus-specific by IPEDS design). Plus one **asymmetry**: `/admissions/military-veteran-student-resources` exists on Clearwater only.

This is the same institutional/campus split as the Admissions cluster: the redesign builds a real institutional `tuition-aid.html`; the verbatim source pool is the union of CLW + STP sub-pages.

---

## Cluster scope (what's IN, what's OUT)

| Live sub-tree | Redesign destination | This cluster? |
|---|---|---|
| `/admissions/financial-aid/*` (8 sub-pages per campus + 2 hubs) | `tuition-aid.html` | **IN** |
| `/admissions/military-veteran-student-resources` (CLW only) | `tuition-aid.html#veterans` | **IN** (asymmetric) |
| `/resources/future-students/financial-aid` (www, body empty) | `tuition-aid.html` | **IN as nav reference** (page exists but has no extractable content; the URL itself is the only artifact) |
| Tuition rate references on www `/about-us` or campus `/welcome-to-ptc` pages | About cluster | OUT (already verified) |
| FAFSA School Codes (005605/013917) on www admissions page | `admissions.html#how-to-apply` (already lives there post-Admissions Stage 6) | PARTIAL — Tuition cluster cross-references; the canonical source is in admissions extracts |
| Outside funding agencies / WIOA references | `tuition-aid.html` if surfaced; otherwise OUT until Programs cluster | PARTIAL |

**Stage 2 work queue total: 18 URLs to extract** (9 per campus on CLW: 1 hub + 8 sub-pages; 9 on STP: 1 hub + 8 sub-pages). One additional CLW-only URL (`/admissions/military-veteran-student-resources`) brings the total to **19**. The empty www financial-aid placeholder page does not need extraction; it is documented but skipped.

---

## Live URLs (Stage 2 work queue)

### www.myptc.edu

| URL | Type | Notes |
|---|---|---|
| `https://www.myptc.edu/resources/future-students/financial-aid` | Hub (placeholder) | 200 OK but `fsPageContent` body is empty. Page title "Financial Aid" only. No extractable content. Documented for awareness; skipped in Stage 2. |
| (none others) | — | All probed www tuition/financial-aid slugs return 404. No institutional tuition hub exists on live. |

### clearwater.myptc.edu (10 URLs)

| # | URL | Type | Likely redesign target |
|---|---|---|---|
| 1 | `https://clearwater.myptc.edu/admissions/financial-aid` | Hub | `tuition-aid.html` overview / `#fafsa` lead-in |
| 2 | `https://clearwater.myptc.edu/admissions/financial-aid/fafsa-fsa-eligibility-help` | Sub-page | `#fafsa` (FAFSA + FSA eligibility) |
| 3 | `https://clearwater.myptc.edu/admissions/financial-aid/federal-and-state-funding` | Sub-page | `#federal-state` (Federal/State aid programs) |
| 4 | `https://clearwater.myptc.edu/admissions/financial-aid/fees-and-expenses` | Sub-page | `#rates` (CTC $2.92/hr resident, $11.71/hr nonresident; AGE term fees; fee list; payment terms) |
| 5 | `https://clearwater.myptc.edu/admissions/financial-aid/net-price-calculator-clearwater` | Sub-page (campus-specific slug) | `#net-price` (CLW NPC link) |
| 6 | `https://clearwater.myptc.edu/admissions/financial-aid/pcsb-financial-aid-scholarships` | Sub-page | `#scholarships` (PCSB scholarship programs) |
| 7 | `https://clearwater.myptc.edu/admissions/financial-aid/refund-policy` | Sub-page | `#rates` or its own block; possibly `#faq` |
| 8 | `https://clearwater.myptc.edu/admissions/financial-aid/scholarships` | Sub-page | `#scholarships` (general scholarships) |
| 9 | `https://clearwater.myptc.edu/admissions/financial-aid/veterans-benefits` | Sub-page | `#veterans` (VA/GI Bill/Bill Young Tuition Waiver) |
| 10 | `https://clearwater.myptc.edu/admissions/military-veteran-student-resources` | Asymmetric (CLW only) | `#veterans` (campus-specific resources, contacts) |

### stpete.myptc.edu (9 URLs)

| # | URL | Type | Likely redesign target |
|---|---|---|---|
| 1 | `https://stpete.myptc.edu/admissions/financial-aid` | Hub | `tuition-aid.html` overview / `#fafsa` lead-in |
| 2 | `https://stpete.myptc.edu/admissions/financial-aid/fafsa-fsa-eligibility-help` | Sub-page | `#fafsa` |
| 3 | `https://stpete.myptc.edu/admissions/financial-aid/federal-and-state-funding` | Sub-page | `#federal-state` |
| 4 | `https://stpete.myptc.edu/admissions/financial-aid/fees-and-expenses` | Sub-page | `#rates` |
| 5 | `https://stpete.myptc.edu/admissions/financial-aid/net-price-calculator-st-petersburg` | Sub-page (campus-specific slug) | `#net-price` (STP NPC link) |
| 6 | `https://stpete.myptc.edu/admissions/financial-aid/pcsb-financial-aid-scholarships` | Sub-page | `#scholarships` |
| 7 | `https://stpete.myptc.edu/admissions/financial-aid/refund-policy` | Sub-page | `#rates` or `#faq` |
| 8 | `https://stpete.myptc.edu/admissions/financial-aid/scholarships` | Sub-page | `#scholarships` |
| 9 | `https://stpete.myptc.edu/admissions/financial-aid/veterans-benefits` | Sub-page | `#veterans` |

**Total Stage 2 URLs:** 19 (10 on CLW with the military-vet asymmetric, 9 on STP, 0 on www extractable)

### Cross-cluster references (already extracted, no re-extract)

| Source | Cluster | Slug | Why we cite it here |
|---|---|---|---|
| `www.myptc.edu/resources/future-students/admissions-process-requirements-and-criteria` | Admissions | `extracted/www/admissions-process-requirements-and-criteria.md` | FAFSA School Codes 005605 (CLW) / 013917 (STP) verbatim |
| `clearwater.myptc.edu/admissions/admissions` | Admissions | `extracted/clearwater/admissions.md` | Some financial-aid eligibility/age framing surfaces here |
| `stpete.myptc.edu/admissions/admissions` | Admissions | `extracted/stpete/admissions.md` | Same as CLW |

---

## Pattern observations

1. **www has no real tuition content.** Only a placeholder financial-aid page with empty body. Live's IA pushes everything to the campus subsites under `/admissions/financial-aid/...`. The redesign reverses this and creates a real institutional `tuition-aid.html`. **This is the cluster's core IA decision** (parallel to the Admissions cluster's same call).
2. **CLW and STP publish nearly-identical sub-tree structure.** Both campuses have the same 9 financial-aid slugs. Strong prior that most prose is shared and copy-edited per campus. Net Price Calculator is the only intentional campus-specific slug.
3. **Tuition rates are CTAE/PCSB-set, not campus-set.** Fees-and-expenses page text observed: "Tuition for programs offered is established by the Pinellas County School Board" with rates `$2.92/hr resident` / `$11.71/hr nonresident` for Career Technical Certificate, plus AGE term fees. This is institutional content despite living on campus pages, and should land on the redesign's institutional `#rates` section.
4. **One real asymmetry: military-veteran resources.** CLW has `/admissions/military-veteran-student-resources` (200); STP returns 404. Same shape as the asymmetry pattern from prior clusters (Code of Conduct STP only, accommodations CLW only). The IA-Recommender will need to call: keep asymmetric (CLW link only on `#veterans`) or ask STP to publish equivalent (live-site follow-up).
5. **Net Price Calculator slug is campus-specific by design.** IPEDS requires per-campus NPC tools. CLW slug `net-price-calculator-clearwater`, STP slug `net-price-calculator-st-petersburg`. Redesign `#net-price` should expose both as a campus chooser, not a single shared link.
6. **Bill Young Veteran Tuition Waiver** appears in the Fees page, suggesting cross-pollination between fees and veterans. Stage 3 needs to lock down whether the waiver content lives on `#rates` (where it surfaced today) or `#veterans` (where it logically belongs).
7. **Refund policy** is a standalone sub-page on each campus. Redesign currently has no `#refund` section. Stage 3 IA-Recommender should decide: new section, fold into `#rates`, or move to FAQ.
8. **Scholarships split into two sub-pages.** `/scholarships` and `/pcsb-financial-aid-scholarships`. Stage 2 extraction will reveal whether these are duplicate, complementary (district-wide vs. PTC-specific), or one is deprecated.
9. **JS-render gap caveat.** The 2026-05-03 admissions drift reconciliation revealed that the curl-based extractor missed JS-injected content on `acceptable-proofs-of-residency`. Stage 2 for Tuition must use WebFetch (rendered DOM) and check char counts against the campus-page HTML body inspection, not just the curl output. The `/fees-and-expenses` page rendered today via WebFetch with content present, so that one is confirmed safe; the other 7 sub-pages have not yet been verified against the rendered-DOM gap.

---

## Where tuition is referenced in the redesign today

(For Stage 3 Comparator's reference)

- `tuition-aid.html` — the canonical institutional tuition page, sections `#rates`, `#pay`, `#fafsa`, `#federal-state`, `#scholarships`, `#net-price`, `#veterans`, `#faq`
- `index.html` (homepage) — Quick Links has Tuition & Aid card
- `admissions.html` — `#how-to-apply` step references FAFSA School Codes; `#cta-section` may reference aid; transfer/readmission Pathways may cross-reference aid
- `clearwater.html` and `stpete.html` (campus homepages) — likely have aid CTAs
- `programs.html` and program pages — most program cards reference tuition costs in some form (will be reconciled in Programs cluster #7)
- `welding-clearwater.html`, `welding-stpete.html`, `welding-advanced.html` — pilot program pages may reference tuition
- `consumer-information.html` — Student Outcomes section likely interacts with NPC / aid disclosures
- `tuition-aid.html` may reference cross-links to ADA/504 (which is on `consumer-information.html#accessibility`)

Stage 3 Comparator will enumerate exact references.

---

## Two-campus classification (preliminary — IA-Recommender locks in Stage 3)

- **Tuition rates:** `shared` — CTAE/PCSB sets rates for both campuses; same numeric values
- **Fees list:** `shared` — institutional fee schedule applies both campuses
- **Refund policy:** `shared` (likely; verify in Stage 2)
- **FAFSA / FSA eligibility help:** `shared`
- **Federal & State funding programs:** `shared` (federal aid is institutional)
- **PCSB Financial Aid Scholarships:** `shared` (district-wide)
- **General Scholarships:** `shared` (verify in Stage 2 whether sub-pages diverge)
- **Veterans Benefits — general:** `shared`
- **Veterans Benefits — campus contacts:** `campus-specific` if each campus publishes its own VA contact (likely)
- **Net Price Calculator:** **`campus-specific`** by IPEDS design — separate URL per campus
- **Military/Veteran Student Resources page:** **`asymmetric`** (CLW only) — Stage 3 IA-Recommender must decide policy

---

## Key IA questions for Stage 3

(Things the IA-Recommender will need to answer)

1. **Single institutional page vs split?** Redesign default = single `tuition-aid.html`. Live default = no institutional page. Recommend: stay with single institutional page, treat both campus sub-trees as the verbatim source pool (same precedent as Admissions). Confirm with IA-Recommender.
2. **Refund policy section.** Redesign has no `#refund`. Stage 3: dedicated section, fold into `#rates`, or `#faq`?
3. **Net Price Calculator routing.** `#net-price` should expose both campus NPC tools. Format: side-by-side campus chooser cards (precedent: welding-advanced campus chooser pattern), or institutional link with campus picker? IA-Recommender to specify.
4. **Military/Veteran asymmetry.** STP has no `/admissions/military-veteran-student-resources` page. Decide: (a) publish CLW-only resources block on `#veterans` with note that STP students should contact campus; (b) ask STP to publish parallel page (live-site follow-up); (c) extract both campuses' `/veterans-benefits` pages and treat that as the parity source.
5. **Tuition rate provenance and shelf-life.** PCSB-set rates change at fiscal-year boundaries. Stage 3 Comparator should flag whether the redesign's `#rates` is currently sourced or fabricated and recommend a content owner for refresh cadence (likely Frank Cianca or PCSB CTAE admin).
6. **Bill Young Veteran Tuition Waiver placement.** Currently surfaces on `/fees-and-expenses` (CLW); also relevant to `#veterans`. Decide: anchor in `#veterans` and cross-link from `#rates`, or duplicate.
7. **Two scholarship sub-pages.** `/scholarships` vs. `/pcsb-financial-aid-scholarships`. Are these complementary (one district-wide, one PTC-specific) or duplicative? If duplicative, recommend live-side consolidation as a follow-up.
8. **FAQ.** Redesign has `#faq` on tuition-aid.html. Following the Admissions cluster precedent (FAQ stripped, deferred to live-owner authoring), Stage 3 should default to the same outcome unless live has a verbatim FAQ source we missed.
9. **Veterans benefits naming.** Live uses "Veterans Benefits" + "Military/Veteran Student Resources" (CLW). Redesign uses `#veterans`. UX-layer naming, not bound by verbatim, but Stage 3 should pick a canonical heading.

---

## Notes on extraction tooling

- Following the Admissions Stage 2 reconciliation pattern: WebFetch (rendered DOM) is the default for Stage 2 to avoid the JS-render gap that the curl+bs4 extractor exposed on 2026-05-03. The pipeline-infrastructure follow-up is open in `follow-ups.md` for the broader extractor migration; Tuition Stage 2 uses WebFetch directly rather than waiting on that fix.
- All 19 Stage 2 URLs are short Finalsite pages and respond quickly. Estimate: 30-45 min wall-clock for Stage 2 extraction at one URL per ~30 sec.
- Three sub-pages exceed WebFetch's inline output limit (~56 KB observed on `/fees-and-expenses`). Extraction script must save raw HTML to disk and parse from there, not rely on inline output.
- Empty www financial-aid page documented; not extracted. Stage 2 should not waste a slot on it.

---

## Cross-cluster handoffs flagged

1. **Programs cluster (#7):** ABE/GED/ESOL term fees ($45 resident, $120 nonresident) appear on `/fees-and-expenses` and are framed as institutional. Programs cluster owns ABE/GED/ESOL framing and should cross-reference (not re-source) tuition rates.
2. **Admissions cluster (verified):** FAFSA School Codes 005605 (CLW) / 013917 (STP) live in `extracted/www/admissions-process-requirements-and-criteria.md`. Tuition cluster cross-references; canonical source remains in Admissions. The www admissions page's FAFSA-Code dedup follow-up (#filed during Admissions Stage 4) is still open and may surface during Tuition.
3. **Compliance cluster (verified):** Net Price Calculator is also a Title IV / IPEDS compliance disclosure. Stage 3 Comparator should check whether `consumer-information.html` already references NPC and reconcile.
4. **About cluster (verified):** No known overlap.
5. **Counselors cluster (verified):** Veterans contact (Lidija Milisav, Military & Veteran Resources Coordinator at CLW) was sourced for Counselors cluster; Tuition Stage 3 IA-Recommender should reuse rather than re-extract.

---

## Stage 2 hand-off

Update `CLUSTERS.md` row 6:
- Status: `queued` → `extracting`
- Live hubs: filled in with the 18-URL queue + 1 asymmetric + 1 placeholder www noted
- Last touched: 2026-05-04
- Notes: "Stage 1 inventory complete (19 URLs to extract; www has placeholder only). Stage 2 uses WebFetch rendered DOM per pipeline-infrastructure issue."

Stage 2 (`extracting`) work queue ready. Estimated: 30-45 min wall-clock. Save outputs to `docs/audit/tuition/extracted/{clearwater,stpete}/<slug>.md` with frontmatter (URL, char count, extraction method, date).
