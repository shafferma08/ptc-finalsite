# Tuition Cluster — Overlap Matrix

Content Mapper output, generated 2026-06-02. Sources: 10 Clearwater (CLW) + 9 St. Petersburg (STP) verbatim DOM extracts in `docs/audit/tuition/extracted/{clearwater,stpete}/`. **There is no `www/` subdir: live www.myptc.edu has only an empty placeholder financial-aid page and no institutional tuition page at all.** All tuition content lives on the two campus subsites.

## 1. Topic-by-topic comparison

| Topic | Page (slug) | Campuses | Char (CLW / STP) | Match | Verdict |
|---|---|---|---|---|---|
| Financial aid hub | `financial-aid` | CLW + STP | 1,750 / 2,900 | Near-identical | Same Pell/SAP/Title-IV/FAME substance; STP fuller (FAME resource link, "examples in office" line), CLW condensed. Consolidate, www-canonical. |
| FAFSA help | `fafsa-fsa-eligibility-help` | CLW + STP | 120 / 150 | Identical concept | Both are a single linked PDF (FAFSA App Quick Guide 2025-26), no body prose. Pure PDF wrappers. |
| Federal/state funding | `federal-and-state-funding` | CLW + STP | 4,400 / 4,100 | Near-identical | Identical except school code (CLW 005605 / STP 013917) and the CareerSource link URL. Shared body, two campus codes. |
| Fees & tuition rates | `fees-and-expenses` | CLW + STP | 3,550 / 3,600 | Identical | Rate table, fee list, payment rules, Bill Young waiver all byte-equivalent. Shared, www-canonical. |
| Net price calculator | `net-price-calculator-*` | CLW + STP | 200 / 700 | Near-identical | Same single PCSB calculator URL on both. STP adds contact block + accreditation notice; CLW is bare launcher. Thin. |
| PCSB scholarships | `pcsb-financial-aid-scholarships` | CLW + STP | 250 / 300 | Identical | Both thin pass-throughs to `pcsb.org/financialaid`. Same copy. Consolidate. |
| Refund policy | `refund-policy` | CLW + STP | 1,850 / 1,900 | Identical | Same military/career-tech/Title-IV refund text, both "Updated August 2019." Shared, www-canonical. |
| Scholarships (curated) | `scholarships` | CLW + STP | 4,200 / 5,400 | Different (overlapping) | 7 scholarships shared verbatim; STP adds 2 (Barrett Family VA, FCSUA/PTC-UP). STP is the superset. |
| Veterans benefits | `veterans-benefits` | CLW + STP | 5,600 / 5,800 | Identical | Title 38, attendance, SAP, appeal, Bill Young waiver all equivalent. Neither lists VA staff names. Shared. |
| Military/vet resources | `military-veteran-student-resources` | **CLW only** | 4,100 / — | N/A | CLW-only hub with MVRC, events, and the only named VA contacts (Milisav, Welden). Major asymmetry. |

## 2. Identical-content groups (consolidation candidates)

These should become single shared, www-canonical pages with both campuses linking in. Two-campus class: **shared**.

| Group | Pages | Notes |
|---|---|---|
| **A. Rate table / fees** | `fees-and-expenses` (CLW + STP) | Byte-equivalent. Rates confirmed shared: CTC $2.92/hr resident, $11.71/hr nonresident; AGE $45/term resident ($90/yr cap), $120/term nonresident ($360/yr cap). |
| **B. Refund policy** | `refund-policy` (CLW + STP) | Equivalent, both stamped "Updated August 2019." |
| **C. Veterans benefits** | `veterans-benefits` (CLW + STP) | Equivalent statutory/attendance/appeal text. |
| **D. Federal/state funding** | `federal-and-state-funding` (CLW + STP) | Equivalent except **school code** (005605 vs 013917) and one differing CareerSource URL. Make shared with a per-campus code variable. |
| **E. Financial aid hub** | `financial-aid` (CLW + STP) | Same substance; adopt STP's fuller copy as canonical. |
| **F. PCSB scholarships** | `pcsb-financial-aid-scholarships` (CLW + STP) | Identical pass-through copy to district. |

Groups A–C are clean shared consolidations. D needs one campus-varying token. E/F adopt the fuller STP version.

## 3. Campus asymmetries

| Asymmetry | Detail | Class |
|---|---|---|
| **Military/Vet Resources page (CLW only)** | `/admissions/military-veteran-student-resources` exists only on Clearwater. It is the **single place** any named VA staff appear: **Lidija Milisav** (Military & Veteran Resources Coordinator, milisavl@pcsb.org, x2020) and **Susan Welden** (VA Certifying Official, weldens@pcsb.org, x2023). Also holds MVRC location (Bldg 1), two dated events (Exploration Day July 7 2026; Veterans Day Breakfast Nov 11 2026), and a community-resources PDF. STP has no equivalent. | **asymmetric** — decide whether STP needs its own version or whether this is a CLW-specific service. |
| **Scholarships list size** | CLW lists **7**; STP lists **9**. The 7 are shared verbatim (AWS, AFCEA, Bailey, Marine Tech Society, PTC Nursing Service, Passmore, Pinellas Education Foundation). STP adds **Barrett Family Foundation VA Scholarship** and **FCSUA / PTC-UP**. The PTC Nursing Service scholarship is STP-graduate-only on *both* pages (it appears on CLW even though it requires being a STP grad). | **campus-specific** — STP is superset; review whether the 2 STP-only entries should appear on CLW. |
| **VA staff names missing on `veterans-benefits`** | The STP `veterans-benefits` extract notes inventory-expected names (Joanne Schnell, Sabrina Mitchell) do **not** appear in rendered DOM or raw HTML; only generic "Certifying Official." STP has no named VA contact anywhere in this cluster. | Data gap — route to follow-ups. |
| **Financial aid hub depth** | STP hub (2,900) is meaningfully fuller than CLW (1,750): STP keeps the FAME resource link and "examples available in the Financial Aid office" line. | Content-currency edge to STP. |
| **Net price calculator extras** | STP page carries a contact block + accreditation notice; CLW is a bare link. | Minor; STP fuller. |

## 4. PDF-wrapper / thin-page inventory

| Page | Campuses | Char | Type | Note |
|---|---|---|---|---|
| `fafsa-fsa-eligibility-help` | CLW + STP | 120 / 150 | **Pure PDF wrapper** | Single linked `FAFSA_App_Quick_guide_2025-26.pdf`, no body. Each campus links a **separate Finalsite-hosted copy** of the same titled PDF (different asset IDs). PDF dated 2025-26, current. |
| `pcsb-financial-aid-scholarships` | CLW + STP | 250 / 300 | **Thin launcher** | Intro line + link to `pcsb.org/financialaid`. No campus content. |
| `net-price-calculator-*` | CLW + STP | 200 / 700 | **Thin launcher** | Single PCSB calculator URL (same on both campuses). STP padded with contact/accreditation. No tuition figures on page. |

No stale PDF revision dates flagged: the FAFSA guide is labeled 2025-26. Note the two campuses host duplicate FAFSA PDF assets rather than sharing one.

## 5. IA red flags

1. **www has no institutional tuition page.** Live www.myptc.edu offers only an empty placeholder financial-aid page; all tuition/fees/refund content is duplicated across two campus subsites with no canonical home. This is the structural root cause of every duplication below.
2. **Bill Young Veteran Tuition Waiver duplicated.** The full HB 7015 / HB 851 statutory block appears verbatim on **both** `fees-and-expenses` **and** `veterans-benefits`, on **both** campuses (4 copies of the same legal text). Single source needed.
3. **Two scholarship pages per campus.** `scholarships` (curated external list) and `pcsb-financial-aid-scholarships` (district pass-through) are separate. They are complementary, not duplicate, but the near-identical titles invite confusion. Merge or clearly differentiate.
4. **FAFSA content split across pages.** The page literally named "FAFSA & FSA Eligibility Help" holds only a PDF; the real FAFSA checklist (SSN, tax docs, school code, etc.) lives on `federal-and-state-funding`. The most-clicked label points to the least content.
5. **Deeply nested marketing/event assets.** The CLW military page hardcodes dated 2026 events and Finalsite resource-manager PDFs into an embed (not CMS-fed), so they will silently go stale after the event dates pass with no owner.
6. **Duplicate FAFSA PDF assets.** Same-titled FAFSA guide uploaded twice to Finalsite (one per campus, different asset IDs) instead of one shared asset.

---

**Summary — top findings.** (1) The tuition cluster has no www home: every page is duplicated across the two campus subsites, and four of those pairs (fees, refund, veterans, PCSB-scholarships) are effectively byte-identical and should consolidate to single shared www-canonical pages. (2) The Bill Young waiver statutory block is the worst offender, copied four times (both topic pages × both campuses). (3) The biggest true asymmetry is the CLW-only `military-veteran-student-resources` page, which is the *only* place any named VA staff (Milisav, Welden) appear anywhere in the cluster, plus MVRC location and dated events; STP has no equivalent and `veterans-benefits` lists no VA contact on either campus. (4) Scholarships differ deliberately: 7 shared verbatim, STP adds Barrett Family VA and FCSUA/PTC-UP, so STP is the superset. (5) Three thin/PDF-wrapper pages (FAFSA help, net-price-calculator, PCSB-scholarships) carry almost no campus content and the FAFSA guide is hosted as two duplicate Finalsite assets; the rate facts ($2.92/$11.71 per hour, AGE $45/$120 per term) are confirmed identical across both campuses.
