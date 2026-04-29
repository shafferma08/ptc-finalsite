# Compliance Cluster - Overlap Matrix

**Generated:** 2026-04-29
**Mapper:** audit-mapper subagent
**Scope:** Side-by-side comparison of compliance content across www, clearwater, and stpete subsites for every section currently rendered on `consumer-information.html`, plus the live-only adjacent pages (Code of Conduct, Written Plans, Financial Accountability) that the redesign Compliance hub may need to link to.

This cluster's punchline lives in section 4 (Zero-coverage topics): six federal-aid disclosures don't exist on any live PTC URL. Two-campus framing (`shared` / `campus-specific` / `asymmetric`) is applied per the binding rules.

---

## 1. Topic-by-topic comparison table

| # | Topic | www | clearwater | stpete | Match | Two-campus | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | **Non-Discrimination Statement** | `compliance-statements.md` (full, 2043 ch); also `compliance-statement-privacy-policy.md` (1913 ch) at `/privacy-policy` | none | none | **DIFFERENT** wording across the two www URLs | shared | Two valid live sources, same institution, different framings (generic Compliance Officer vs named Dena Collins / Stephanie Miller). IA decision needed. |
| 2 | **Title IX** | Embedded in `compliance-statement-privacy-policy.md` (Dena Collins, EEO/Title IX/ADA, 727-588-6000) | none | none | n/a single source | shared | Use `/privacy-policy` extract verbatim. No standalone Title IX page exists. |
| 3 | **Accessibility / Section 504 / ADA** | `accessibility-statement.md` (1495 ch, WCAG 2.0, PTCWebInfo-NoReply@pcsb.org) + Section 504 named in `compliance-statement-privacy-policy.md` (Stephanie Miller, 727-588-6296) | none | none | n/a | shared | **Only verbatim source for the redesign Accessibility section.** Live cites WCAG 2.0; redesign currently says 2.1 AA, which violates the verbatim rule. |
| 4 | **FERPA / Privacy** | **NONE** (the URL `/privacy-policy` is mislabeled - actually a Compliance Statement) | NONE | NONE | n/a | shared | ZERO COVERAGE. No FERPA disclosure on any live PTC URL. Strip from redesign; high-priority follow-up. |
| 5 | **Sexual Misconduct (Title IX-adjacent)** | `sexual-misconduct-predators.md` (1140 ch, campus-director phones inline: CLW 727.538.7167, STP 727.893.2500) | none | stpete subsite has FDLE notice mislabeled "FERPA/Sexual Predator Notice" in nav | **DIFFERENT** (one canonical www page, stpete duplicates+mislabels the FDLE half) | campus-specific (director phones); shared body | Use www verbatim. STP nav label is broken - log to follow-ups. |
| 6 | **Safety & Security Data (Clery-adjacent)** | none (institutional aggregate not published) | `safety-security-data.md` (301 ch, **6 reports through 8/28/2025**) | `safety-security-data.md` (125 ch, **only 2 reports, latest 2023**) | **DIFFERENT - severe asymmetry** | campus-specific | STP is 2+ years stale. High-priority follow-up to STP campus owner. |
| 7 | **Financial Reports / Accountability** | `financial-reports.md` (BLOCKED - external link to PCSB district reports) | `financial-accountability.md` (577 ch, 7 HEERF reports, latest 3/31/2023) | `financial-accountability.md` (580 ch, **identical** 7 HEERF reports) | **NEAR-IDENTICAL** between campuses | shared (consolidate) | Consolidation candidate; both campuses 3+ years stale (HEERF reporting era). Follow-up to confirm whether new financial accountability reports replaced HEERF. |
| 8 | **Code of Conduct** | none | NONE (no CLW page exists) | `code-of-conduct.md` (42 ch, PDF wrapper to STP_PTC_Code_of_Conduct_25-26.pdf) | **ASYMMETRIC** | asymmetric | High-priority IA: either build a CLW Code of Conduct page or consolidate to one institutional page. |
| 9 | **Accreditation** | covered briefly in `welcome-to-ptc.md` (COE + COGNIA + program accreditors enumerated) | `accreditation.md` (395 ch) | `accreditation.md` (414 ch, only "Visit" prefix and campus name differ) | **NEAR-IDENTICAL** between campuses | shared (with campus-specific "Visit Council/Cognia" variants) | Consolidate to one shared block on www; keep campus pages as thin redirect/anchor. |
| 10 | **Catalog (PDF wrapper)** | none | `catalog.md` (54 ch, 25-26 catalog PDF rev 1-29-26) | `catalog.md` (58 ch, 25-26 catalog PDF rev Aug 8 2025) | **DIFFERENT PDFs** (campus-specific catalogs) | campus-specific | Each campus owns its own catalog. Keep campus-specific. |
| 11 | **Records Request** | `records-request.md` (822 ch, both campuses' info; **canonical**) | `records-request.md` (674 ch, CLW filtered subset) | `records-request.md` (676 ch, STP filtered subset) | **NEAR-IDENTICAL** body, campus-specific addresses | campus-specific contacts inside shared body | Consolidate body to www; campus pages become thin anchors. |
| 12 | **Compliance Officer contact** | `compliance-statements.md` (generic "Compliance Officer, Office of Equal Opportunity, 727-588-6285, complianceofficer@pcsb.org") AND `compliance-statement-privacy-policy.md` (named Dena Collins 727-588-6000 + Stephanie Miller 727-588-6296) | none | none | **DIFFERENT** (generic vs named, both valid) | shared | IA decision: name the officers (more accountable) or stay generic (lower maintenance). |
| 13 | **Student Outcomes / COE Right-to-Know** | NONE (`/student-outcomes` 404s) | none | none | n/a | shared | ZERO COVERAGE. Annual Impact Report PDF wrapper exists but does not publish completion/placement/licensure tables. High-priority follow-up. |
| 14 | **DFSCA (Drug-Free Schools Act)** | NONE | NONE | NONE | n/a | shared | ZERO COVERAGE. Federal aid disclosure missing institution-wide. High-priority follow-up. |
| 15 | **HEOA Copyright / P2P (Section 488)** | NONE | NONE | NONE | n/a | shared | ZERO COVERAGE. Federal aid disclosure missing. High-priority follow-up. |
| 16 | **Voter Registration (HEA 487)** | NONE (only an outbound `registertovoteflorida.gov` link) | NONE | NONE | n/a | shared | ZERO COVERAGE. Keep as service block with FL outbound link only; no PTC-quoted prose. Medium follow-up. |
| 17 | **Constitution Day** | NONE | NONE | NONE | n/a | shared | ZERO COVERAGE. Low-priority follow-up to add a stub. |
| 18 | **ESE (Exceptional Student Ed)** | NONE | NONE | NONE | n/a | district-shared | District-only on pcsb.org (K-12 oriented). Use a district-link card pointing at PCSB ESE hub + compliance officer 727-588-6285 for postsecondary. Medium follow-up: name a campus-level accommodations contact (Counselors cluster owns). |
| 19 | **Written Plans (COE-required, accreditation-adjacent)** | none | `written-plans.md` (758 ch, 10 plans, "2023 Handbook of Accreditation") | `written-plans.md` (818 ch, ~11 plans incl. truncated "Tran[script Plan?]", "Handbook of Accreditation" no year) | **DIFFERENT** (different plan list orderings, different plan names, year cited differently) | campus-specific | Keep campus-specific. Re-fetch STP for full plan list. Fix the inconsistent "2023 Handbook" reference. |

---

## 2. Identical-content groups (consolidation candidates)

| Group | Sites | Char counts | Treatment |
|---|---|---|---|
| Accreditation body text | clearwater + stpete | 395 / 414 | **Consolidate to www** (already partially covered in `welcome-to-ptc.md`). Campus pages reduce to anchors with optional "Visit Council/Cognia" links. |
| Records Request body | www + clearwater + stpete | 822 / 674 / 676 | **Consolidate to www** (which already names both campus emails). Campus pages become thin anchors with their address block only. |
| Financial Accountability HEERF list | clearwater + stpete | 577 / 580 | **Consolidate to a single shared institutional page**. The reports are identical. |

---

## 3. Campus asymmetries

| Topic | Asymmetry | Action |
|---|---|---|
| **Safety & Security Data** | CLW has 6 reports through 8/28/2025; STP has only 2 reports, latest 2023 | High-priority follow-up to STP campus owner: STP is 2+ years stale on a Clery-adjacent disclosure. |
| **Code of Conduct** | STP has a PDF wrapper page; CLW has no equivalent page | High-priority IA decision: build a CLW Code of Conduct page or consolidate to a shared institutional Code with campus addenda. |
| **Written Plans** | CLW lists 10 plans citing "2023 Handbook"; STP lists ~11 plans citing "Handbook of Accreditation" with a truncated "Tran[script Plan]" | Re-fetch STP and align the year reference. Differences may indicate campus-specific governance. |
| **Sexual Misconduct (FDLE notice)** | STP nav mislabels the FDLE notice as "FERPA/Sexual Predator Notice" | Live-site cleanup follow-up. It is NOT FERPA. |

---

## 4. Zero-coverage topics (the punchline of this cluster)

| Topic | www | clearwater | stpete | District (pcsb.org) | Required by |
|---|---|---|---|---|---|
| **FERPA / Privacy** | NONE | NONE | NONE | partial (Records Management hub; no FERPA-titled disclosure) | FERPA, federal |
| **Student Outcomes / Right-to-Know** | NONE | NONE | NONE | none | COE accreditation |
| **DFSCA Drug-Free Schools** | NONE | NONE | NONE | none postsecondary-facing | DFSCA, federal aid |
| **HEOA 488 Copyright/P2P** | NONE | NONE | NONE | K-12 employee AUP only | HEOA 488, federal aid |
| **Voter Registration (HEA 487)** | NONE | NONE | NONE | none | HEA 487, federal aid |
| **Constitution Day** | NONE | NONE | NONE | none | Federal observance |

**Six of the eight federal-disclosure topics in `consumer-information.html` have NO live PTC source on any subsite.** Per the verbatim rule these sections will be stripped in Stage 6 and routed to `follow-ups.md` as live-site federal-aid compliance gaps. They are not redesign defects, they are pre-existing live-site gaps surfaced by this audit.

---

## 5. PDF-wrapper inventory

| Page | File | PDF revision | Stale? |
|---|---|---|---|
| Clearwater Catalog | `clearwater/catalog.md` | 25-26 catalog rev **1-29-26** | Current |
| St. Pete Catalog | `stpete/catalog.md` | **Aug 8 2025** (25-26) | Current |
| St. Pete Code of Conduct | `stpete/code-of-conduct.md` | `STP_PTC_Code_of_Conduct_25-26.pdf` | Current; CLW has no equivalent |
| Annual Impact Report | `www/annual-impact-report.md` | single-page PDF, no rev date in URL | Unknown freshness |
| Clearwater Written Plans (10 PDFs) | linked from `written-plans.md` | not extracted individually | Distance Learning Plan = June 2025 per inventory; rest unknown |
| St. Pete Written Plans (~11 PDFs) | linked from `written-plans.md` | not extracted individually | Unknown |
| Clearwater Safety & Security Data (6 PDFs) | listed in `safety-security-data.md` | latest 8/28/2025 | Current |
| St. Pete Safety & Security Data (2 PDFs) | listed in `safety-security-data.md` | latest 2023 | **Stale 2+ years** |
| Financial Accountability HEERF (7 PDFs each campus) | listed in `financial-accountability.md` | latest 3/31/2023 | **Stale 3+ years** (HEERF reporting may have ended; verify) |

---

## 6. IA red flags

1. **Duplicate URL hosting same content.** `/privacy-policy` and `/about-us/welcome-to-ptc/pinellas-county-schoolsctae-compliance-statements` render the same Compliance Statement document. One URL, one document.
2. **`/privacy-policy` is mislabeled.** The URL says "privacy-policy" but the page is the non-discrimination Compliance Statement. There is no actual privacy/FERPA disclosure behind that URL.
3. **STP nav mislabel.** stpete subsite labels the FDLE sexual-predator-registry link as "FERPA/Sexual Predator Notice." It is NOT FERPA.
4. **Two valid Compliance Officer contacts.** The institution has one contact at `compliance-statements.md` (generic role + 727-588-6285 + complianceofficer@pcsb.org) and a different contact at `compliance-statement-privacy-policy.md` (Dena Collins 727-588-6000 + Stephanie Miller 727-588-6296). IA Recommender must choose.
5. **Accessibility statement is at WCAG 2.0.** Live cites WCAG 2.0; redesign currently says 2.1 AA. Verbatim rule violation pending live-site update.
6. **Deeply nested compliance URLs.** `/about-us/welcome-to-ptc/pinellas-county-schoolsctae-compliance-statements` is 3 levels deep with a typo-style slug ("schoolsctae" run-together). Hub flattening recommended at IA stage.
7. **K-12 vs postsecondary content mixing.** PCSB ESE department is K-12 oriented; the only postsecondary touch is "ESE Secondary Transition Pathways." The redesign needs a postsecondary-only ESE/accommodations contact, which doesn't exist on live yet.
8. **Code of Conduct exists for STP, not CLW.** Asymmetric governance disclosure.
9. **Accreditation appears in three places** (www welcome page enumeration, CLW page, STP page) with near-identical bodies and minor "Visit" prefix differences. Consolidate.

---

## Summary

The Compliance cluster's overlap matrix is dominated by **absence**: 6 of the 8 federal-aid disclosure topics on `consumer-information.html` (FERPA, Student Outcomes/Right-to-Know, DFSCA, HEOA Copyright, Voter Registration, Constitution Day) have **zero live source on any of the three subsites**, and ESE is district-only on pcsb.org. The two topics with real content - Accessibility and the non-discrimination Compliance Statement - are split across two www URLs that render the same document under mismatched labels (`/privacy-policy` is a Compliance Statement, not a privacy page). Where compliance content does exist across campuses, it is mostly **near-identical and ripe for consolidation** (Accreditation, Records Request, Financial Accountability) rather than legitimately campus-specific. The few real campus asymmetries are governance gaps, not design choices: STP's Safety & Security Data is 2+ years stale (CLW current through 8/28/2025), STP has a Code of Conduct PDF page that CLW lacks, and Written Plans differ between campuses in plan list, ordering, and the cited COE Handbook year. These findings convert most of the redesign Compliance hub work from "rewrite" to "strip and route to live-site follow-ups" - the pre-existing federal-aid disclosure gaps belong to PTC owners, not to the redesign.
