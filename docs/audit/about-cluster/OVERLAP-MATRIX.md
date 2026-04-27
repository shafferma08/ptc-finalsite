# PTC About-Cluster Content Overlap Matrix
**Audit Date:** 2026-04-25 | **Files Analyzed:** 32 | **Sites:** www (institutional), clearwater, stpete

---

## Topic-by-Topic Comparison Table

| Topic | WWW | CLW | STP | Content Status | Char Count | Verdict |
|-------|-----|-----|-----|-----------------|-----------|---------|
| **Mission/Vision/Core Values** | ✓ (671) | ✓ (711) | ✓ (711) | IDENTICAL body text across all 3; title prefixes differ only | 671–711 | Consolidate to single institutional version |
| **Welcome to PTC** | ✓ (2608) | – | – | Institutional only; ~2600 chars of narrative | 2608 | Institutional hub entry point |
| **Get to Know PTC** | ✓ (2621) | – | – | Duplicates Welcome content (first 1200+ chars verbatim); consolidation candidate | 2621 | Merge into Welcome or retire |
| **Records Request** | ✓ (822) | ✓ (674) | ✓ (676) | **Institutional (most complete) + campus-filtered subsets**. WWW includes both campus addresses/emails; CLW/STP each show own address only. Same boilerplate text. | 674–822 | Single source template; filter per campus |
| **Catalog** | – | ✓ PDF (54 chars) | ✓ PDF (58 chars) | **Campus-specific 2025-26 catalogs** (CLW rev 1-29-26, STP rev 8-8-25). Current PDFs, not stale. | 54–58 | Maintain as PDF wrappers; link to current editions |
| **Accreditation** | – | ✓ (395) | ✓ (414) | **Near-identical**; only campus name in title differs. Both reference COE + Cognia. Minor wording variance ("Visit" link phrasing). | 395–414 | Consolidate; use single template with campus token |
| **Campus Information** | – | ✓ (181) | ✓ (194) | **Stub pages** (contact address only). Duplicated verbatim in campus About hubs. | 181–194 | Eliminate redundancy; single canonical per campus |
| **About Us Hub (campus)** | – | ✓ (154) | ✓ (163) | **Duplicate of Campus Information page**. Contact info only, plus child links. Redundant. | 154–163 | Consolidate; one hub per campus |
| **School Improvement Plan** | – | ✓ (57 PDF) | ✓ (36 PDF) | **ASYMMETRY: CLW = SY 2024-25 (outdated); STP = SY 2025-26 (current).** CLW may need update. | 36–57 | Verify CLW SIP currency; flag for update |
| **Written Plans** | – | ✓ (758) | ✓ (818) | **Similar structure; slight diffs**: CLW names "2023 Handbook" explicitly; STP mentions "Transcript Plan" (STP list longer). Both substantive, required compliance. | 758–818 | Near-identical; merge with campus token |
| **Safety & Security Data** | – | ✓ (301 PDF list) | ✓ (125 PDF list) | **MAJOR ASYMMETRY: CLW = 6 reports, latest 8/28/2025. STP = 2 reports, latest 2023.** STP severely out of date. | 125–301 | **RED FLAG**: STP safety reports 2+ years stale. Urgent update needed. |
| **Financial Accountability** | – | ✓ (577) | ✓ (580) | **Identical content & structure**. Both show 7 HEERF quarterly reports (2021–2023). Stalest report = 3/31/2023 (3+ years old). | 577–580 | Both need refresh; HEERF era ended. Verify if current financial reporting exists. |
| **Code of Conduct** | – | – | ✓ (42 PDF) | **STP-only page** (PDF wrapper, 2025-26 revision). CLW has no Code of Conduct page in About cluster. Possible governance gap. | 42 | Investigate: Does CLW lack separate Code of Conduct, or is it nested elsewhere? |
| **Compliance Statements** | ✓ (1194) | – | – | **Institutional only.** Substantive non-discrimination policy, CTAE compliance, LEP provisions. 1194 chars (truncated in extract). | 1194 | Institutional policy; verify no campus-specific overrides needed |
| **Sexual Misconduct** | ✓ (1140) | – | – | **Institutional only.** Required federal/state safety disclosure. Campus director contacts. 1140 chars (truncated in extract). | 1140 | Institutional policy; campus contact details already embedded |
| **Financial Reports (PCSB)** | ✓ (blocked) | – | – | **Institutional external link.** Content blocked by Chrome MCP security. Likely redirects to PCSB district reports. | – | Manual verification needed; likely external link |
| **Programs Brochure (EN)** | ✓ (21 PDF) | – | – | **Institutional PDF wrapper** (2025-26 brochure). Marketing asset, not About content. **IA red flag:** nested 4 levels deep (About > Welcome > Brochure). | 21 | Relocate out of About cluster; belongs in Marketing/Resources |
| **Programs Brochure (ES)** | ✓ (34 PDF) | – | – | **Institutional PDF wrapper** (Spanish). Same IA red flag as EN version. | 34 | Relocate out of About cluster |
| **A Career in a Year** | ✓ (18 PDF) | – | – | **PDF wrapper.** 2019-revision handout (Nov 8, 2019 — **6+ years stale**). | 18 | **RED FLAG**: Stale content. Refresh or remove. |
| **Annual Impact Report** | ✓ (24 PDF) | – | – | **Institutional PDF wrapper** (single-page). No revision date flagged; assume current. | 24 | Maintain; institutional only |

---

## Identical-Content Groups (Consolidation Candidates)

### Group 1: Mission/Vision/Core Values (3 identical pages)
- `www/mission-vision-core-values.md` (671 chars)
- `clearwater/mission-vision-core-values-clw.md` (711 chars)
- `stpete/mission-vision-core-values-stp.md` (711 chars)

**Status:** Body text is byte-identical; only title prefixes differ ("Mission - Vision - Core Values" vs. "Mission - Vision - Core Values CLW" vs. "Mission - Vision - Core Values STP").

**Recommendation:** Consolidate to single institutional template. Serve via URL rewrite or single source with campus-aware header.

---

### Group 2: Accreditation (2 near-identical pages)
- `clearwater/accreditation.md` (395 chars)
- `stpete/accreditation.md` (414 chars)

**Status:** Structure and content nearly identical. Only differences: (1) campus name in title, (2) minor wording variance ("Visit Council/Cognia" vs. "Council/Cognia"). Both reference same accreditors (COE, Cognia) with same contact details.

**Recommendation:** Single template with campus token replacement. Or serve from `www/accreditation.md` if institutional-level page created.

---

### Group 3: Records Request (3 filtered subsets of common source)
- `www/records-request.md` (822 chars) — **master**
- `clearwater/records-request.md` (674 chars) — CLW info only
- `stpete/records-request.md` (676 chars) — STP info only

**Status:** WWW page is most complete, listing both campus addresses and email contacts. CLW/STP versions are boilerplate-identical, filtered to show their campus address/email only.

**Recommendation:** WWW page is the source of truth. CLW/STP pages are logic-filtered views. Could be automated via conditional rendering (e.g., show CLW contact if user is on clearwater subdomain).

---

### Group 4: Financial Accountability (2 identical pages)
- `clearwater/financial-accountability.md` (577 chars)
- `stpete/financial-accountability.md` (580 chars)

**Status:** Identical structure and content. Both show 7 HEERF quarterly reports, latest dated 3/31/2023.

**Recommendation:** Consolidate to single source. **Caveat:** HEERF reporting era likely ended; verify if newer financial accountability content exists or if these pages should be archived.

---

### Group 5: Campus Information + About Hub (2 redundant pairs)
- **Clearwater:** `ptc-clearwater-campus-information.md` (181 chars) + `about-us-hub.md` (154 chars) — identical contact info
- **St. Petersburg:** `ptc-st-petersburg-campus-information.md` (194 chars) + `about-us-hub.md` (163 chars) — identical contact info

**Status:** Each campus has a dedicated "Campus Information" page and an "About Us" hub that duplicate the same contact address.

**Recommendation:** Eliminate one layer. Keep About hub, remove standalone Campus Information page, or consolidate to single canonical per campus.

---

## Campus Asymmetries (Red Flags)

| Issue | Severity | Details | Action |
|-------|----------|---------|--------|
| **STP Safety Reports Stale** | HIGH | CLW has 6 safety reports (latest 8/28/2025); STP has 2 (latest 2023). STP is 2+ years out of date. | Urgent: Update STP safety report links. Verify if current 2024–2025 reports exist on PCSB site. |
| **CLW School Improvement Plan Outdated** | MEDIUM | CLW shows SY 2024-25 (prior year); STP shows SY 2025-26 (current). CLW may need refresh. | Verify SY 2025-26 SIP for Clearwater exists; update if available. |
| **STP Code of Conduct, CLW Missing** | MEDIUM | STP has dedicated Code of Conduct page (PDF wrapper, 2025-26); CLW has no equivalent in About cluster. | Investigate: Is CLW Code of Conduct accessible elsewhere, or is it a governance gap? If exists, link from CLW About cluster. |
| **Financial Reports Both Stale** | MEDIUM | Both CLW and STP show HEERF reports through 3/31/2023 (3+ years old). HEERF era has ended. | Verify current financial accountability reporting requirements. If HEERF is no longer relevant, replace with current reporting or archive. |
| **A Career in a Year PDF Stale** | MEDIUM | Handout revised 11-8-19 (6+ years old). No updated version flagged. | Refresh content or remove from About cluster. |

---

## PDF-Wrapper Inventory

### Pure PDF Wrappers (No HTML Substantive Content)
| Page | Campus | Filename | Chars | PDF Revision | Status |
|------|--------|----------|-------|--------------|--------|
| A Career in a Year | www | `A_Career_in_a_Year_Handout_rev_11-8-19.pdf` | 18 | Nov 8, 2019 | **STALE** (6+ yrs) |
| Catalog | clearwater | `25-26PTCClearwaterCatalogrev1-29-26.pdf` | 54 | 1-29-26 | Current |
| Catalog | stpete | `PTC-SP_2025-2026_Aug_8.pdf` | 58 | Aug 8, 2025 | Current |
| Code of Conduct | stpete | `STP_PTC_Code_of_Conduct_25-26.pdf` | 42 | 2025-26 | Current |
| School Improvement Plan | clearwater | `PTCCL2425SIPFinal.pdf` | 57 | SY 2024-25 | Outdated |
| School Improvement Plan | stpete | `PTC-SP_SIP_25-26.pdf` | 36 | SY 2025-26 | Current |
| Annual Impact Report | www | `AnnualReportSinglePage.pdf` | 24 | Not flagged | Current (assumed) |
| Programs Brochure (EN) | www | `2025-26ProgramBrochure-Photos.pdf` | 21 | 2025-26 | Current |
| Programs Brochure (ES) | www | `OWI-24-001_Program_Brochure_-_SPANISH.pdf` | 34 | 2024-01 | Current |

### PDF List Pages (Index of Links)
| Page | Campus | Char Count | Reports Listed | Currency |
|------|--------|-----------|-----------------|----------|
| Safety & Security Data | clearwater | 301 | 6 annual reports (2020–2025) | Current (latest 8/28/2025) |
| Safety & Security Data | stpete | 125 | 2 reports (2020-22, 2023) | **Stale** (2+ yrs) |
| Financial Accountability | clearwater | 577 | 7 HEERF quarterlies (2021 Q3–2023 Q1) | **Stale** (3+ yrs) |
| Financial Accountability | stpete | 580 | 7 HEERF quarterlies (2021 Q3–2023 Q1) | **Stale** (3+ yrs) |

---

## IA Red Flags

| Issue | Location | Details | Severity |
|-------|----------|---------|----------|
| **Marketing Assets in About Cluster** | www/about-us/welcome-to-ptc/ptc-programs-brochure & /es/ | PTC Programs Brochure (EN & ES) nested 4 levels deep under About > Welcome > Brochure > (ES). These are marketing resources, not compliance/informational About content. Should live in Resources or Marketing. | HIGH |
| **Redundant Campus Info + Hub Structure** | clearwater & stpete | Both campuses have standalone "Campus Information" pages AND "About Us" hubs that duplicate the same contact address/phone. Creates dual pages with identical content; unclear which is canonical. | MEDIUM |
| **Welcome vs. Get to Know Duplication** | www | "Welcome to PTC!" (2608 chars) and "Get to Know PTC!" (2621 chars) share 1200+ chars verbatim, near-identical boilerplate. Two pages serving same purpose; consolidation candidate. | MEDIUM |
| **Financial Reports External Link (Blocked)** | www/financial-reports | Link to "Pinellas County Schools School Financial Reports" blocked by security; presumed external redirect. Unclear if content is served from PCSB or www.myptc.edu. Should clarify ownership & currency. | LOW |

---

## Summary: Top 5 Findings

**1. STP Safety Reporting Severely Out of Date (HIGH PRIORITY):**
St. Petersburg campus shows only 2 safety & security reports (latest 2023), while Clearwater has 6 (latest Aug 2025). This 2+ year lag creates a compliance and transparency risk. Action: Verify if current STP safety reports exist on PCSB systems and update links immediately.

**2. Stale Financial Accountability Content (MEDIUM PRIORITY):**
Both campuses display HEERF quarterly reports ending 3/31/2023 (3+ years old). HEERF was emergency pandemic relief; the era has ended. Pages need refresh or replacement with current financial accountability reporting. Action: Verify current financial reporting requirements and update or retire these pages.

**3. Three Pages with Identical Content = Consolidation Opportunity:**
Mission/Vision/Core Values (3 pages, 671-711 chars each) are byte-identical across www, CLW, and STP, differing only in title prefix. Accreditation (CLW + STP, 395-414 chars) are near-identical. Financial Accountability (CLW + STP, 577-580 chars) are identical. Action: Consolidate to single templates with campus-aware rendering, saving redundancy and maintenance burden.

**4. Marketing Brochures Nested Too Deep in About Cluster:**
Programs Brochure (EN & ES) are 4 levels deep (About > Welcome > Brochure > ES). These are marketing assets, not compliance/informational content. Action: Relocate to a Resources or Marketing section; keep About cluster focused on institutional/compliance pages.

**5. Campus Asymmetries in Compliance/Governance Pages:**
STP has a Code of Conduct page; CLW does not (within the About cluster). CLW's School Improvement Plan is SY 2024-25; STP's is SY 2025-26. Action: Audit whether CLW Code of Conduct exists elsewhere on site; if missing, investigate governance gap or add link. Ensure both campuses maintain current SIPs.
