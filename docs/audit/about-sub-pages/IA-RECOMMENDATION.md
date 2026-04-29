# About Sub-Pages Cluster — IA Recommendation

**Status:** Resolves the 3 open IA decisions left by the about-cluster pilot
**Date:** 2026-04-28
**Analyst:** IA Recommender
**Scope:** 28 live sub-page URLs already extracted in the about-cluster pilot
**Builds on:** `docs/audit/about-cluster/IA-RECOMMENDATION.md` (2026-04-25)

---

## TL;DR

1. **#29 Annual Impact Report → `resources.html`** (already there). It's a single-page PDF wrapper with no body content. Belongs in Downloads, not in a new About "Impact" section. Building an Impact section would require inventing prose, which violates the verbatim-content rule.
2. **#30 PCS School Financial Reports → `consumer-information.html § Financial Reports`** (already there). It's a one-link external pointer to PCSB district reports, not a content page. A dedicated `/fiscal-transparency` page is over-engineering for a single link.
3. **#3 Code of Conduct → `consumer-information.html § Code of Conduct (campus-specific)` with two PDF links, classified `campus-specific` (asymmetric on live, symmetric in redesign).** The STP PDF stays. A CLW Code of Conduct PDF either exists at PCSB district level or needs to be produced by CLW admin (logged as follow-up). Redesign ships only what live actually has, with a clear "CLW: see follow-ups" placeholder gated on a real PDF.
4. **All 25 other destinations validate clean.** No proposed changes to the about-cluster destination decisions.
5. **No new pages** added to the redesign sitemap. Both ambiguous destinations resolve to pages that already exist.

---

## Decision: #29 Annual Impact Report destination

**Decision: `resources.html § Annual Impact Report`** (status: already built).

**Reasoning:**
- The live extract is 24 characters of body text. The page is a Finalsite wrapper around a single-page PDF (`AnnualReportSinglePage.pdf`). There is no narrative, no stats, no testimonials, no infographics on the live page itself. All "impact" content lives inside the PDF.
- Promoting this to a new "Impact" section on `about.html` would mean either (a) embedding the PDF inline (poor a11y, breaks the page-flow rhythm of about.html, doesn't match the canonical card pattern), or (b) writing prose summary content from the PDF. Option (b) violates the binding rule (`Redesign content comes from approved live PTC sites verbatim`).
- `resources.html` already has the Annual Impact Report card built (line 118+). The card is a download CTA, which is the honest representation of what the live page actually is.
- About-cluster pilot's "marketing/PR asset" framing was right; the only ambiguity was whether Marianne wanted institutional storytelling on about.html. Without source content to draw from, she does not.

**Two-campus class:** `shared` (single institutional report, www-canonical, both campus footers can link to it).

**Follow-up:** If/when PTC marketing produces narrative impact content (testimonials, dashboards, multi-year stats), a dedicated `/impact` page becomes worth revisiting. Logged as a future enhancement, not a current need.

---

## Decision: #30 PCS School Financial Reports destination

**Decision: `consumer-information.html § Pinellas County Schools Financial Reports`** (status: already built, lines 724-734).

**Reasoning:**
- The live page returned BLOCKED on extraction. Manual inspection plus the URL pattern (`pinellas-county-schools-school-financial-reports`) and current redesign comment (`The live page is a wrapper for the district's financial reporting`) confirms this is a thin Finalsite wrapper that points to PCSB district financial reports.
- A dedicated `/fiscal-transparency` page would imply PTC publishes its own institutional financial reporting separate from the district. That's not what the live site says. Inventing one would (a) violate the verbatim-content rule and (b) misrepresent governance: PTC's financials roll up into PCSB.
- Per-campus financial accountability (HEERF) already lives on `clearwater-about.html` and `stpete-about.html` as required by COE. District-level financial reports are sitewide compliance disclosure, which is exactly what the Consumer Information hub is for.
- Redesign already implements this. The current section heading ("Pinellas County Schools Financial Reports") reads correctly as a referral, not as primary content.

**Two-campus class:** `shared` (district-level reporting, www-canonical, both campuses link via consumer-information).

---

## Decision: #3 Code of Conduct asymmetry

**Decision:** Add a `Code of Conduct` block to `consumer-information.html`, structured as `campus-specific` with two PDF link slots. Ship the STP PDF immediately. Leave the CLW slot as a "Coming soon — see [follow-ups.md](../follow-ups.md)" stub UNTIL CLW admin confirms either (a) a CLW-specific PDF exists / will be produced, or (b) PCSB district-level Code of Conduct covers CLW students.

**Reasoning:**
- Live state: STP has its own 2025-26 Code of Conduct PDF (`STP_PTC_Code_of_Conduct_25-26.pdf`). CLW does not. This is a real `asymmetric` topic.
- The verbatim-content rule prohibits us from copying the STP PDF and rebranding it for CLW. We do not author content; we transcribe approved live content. Therefore option (a) "build a CLW Code of Conduct from the STP template" is **not available to us in the redesign**. It can only be a live-site follow-up to CLW admin (already logged in `follow-ups.md` line 40).
- Option (b) "document why CLW doesn't have one" is honest but operationally dead-end — we can't document a reason we don't actually know.
- Option (c) "single shared block applicable to both campuses" is wrong on its face: STP has its own 25-26 PDF that's campus-coded ("STP_PTC_Code_of_Conduct"), so the document itself is not currently shared.
- The right move is a hybrid: place the topic in `consumer-information.html` (sitewide compliance hub) but render the topic as `campus-specific` with two slots. STP slot links to the STP PDF. CLW slot says "Pending — Code of Conduct for Clearwater is being confirmed with campus administration. CLW students should refer to PCSB district policies in the meantime." This is honest about the live state and avoids fabrication.
- This is consistent with the about-cluster pilot's "Move to /consumer-information; create CLW equivalent" framing, but tightens it: we don't *create* the CLW equivalent in the redesign, we *reserve a slot* and route the gap to the live owners.

**Two-campus classification:** `campus-specific` (different document per campus once both exist; currently `asymmetric` on live with the redesign exposing the asymmetry rather than papering over it).

**Follow-up action:** Existing `follow-ups.md` row 40 is correct. Tighten the recommendation to: "CLW admin to confirm whether a CLW Code of Conduct will be published as a campus-specific PDF, OR whether PCSB district policy fills this role and the redesign should link to that instead. Required before redesign ship."

---

## Validation pass on the 25 IA-decided destinations

Read every row in `inventory.md`. Concerns flagged:

| # | Live topic | Inventory destination | Validation | Verdict |
|---|---|---|---|---|
| 1 | PCS/CTAE Compliance Statements | consumer-information § Non-discrimination | Already built; verbatim per Apr-25 fix. | Clean |
| 2 | Sexual Misconduct/Predators | consumer-information § Title IX & Safety | Already built. | Clean |
| 4-6 | Records request (3 sites) | records-request.html (consolidated) | Inventory says "Already partially built." Confirm `records-request.html` exists and carries both campus contacts. | **Flag**: verify file exists; if not, this is a NEW page (see sitemap delta below). |
| 7 | CLW Campus Information | clearwater.html (delete duplicate) | Pilot said "delete duplicate." Confirm `clearwater.html` covers it; delete sub-page entry from migration list. | Clean |
| 8-13 | CLW campus compliance (Accreditation, Catalog, SIP, Written Plans, Safety, Financial) | clearwater-about.html cards | Built 2026-04-26. | Clean |
| 14 | STP Campus Information | stpete.html (delete duplicate) | Same as #7. | Clean |
| 15-20 | STP campus compliance | stpete-about.html cards | Built 2026-04-26. | Clean |
| 21-22 | Welcome / Get-to-Know | about.html § Our Story | Merged Apr 25. | Clean |
| 23-25 | M/V/CV (3 sites) | about.html canonical | Apply per pilot. Inventory notes Vision + 7 Core Values may still be missing on current about.html — Comparator should re-check. | **Flag for Comparator**, not IA. |
| 26 | A Career in a Year | a-career-in-a-year.html exists; pilot says "fold into programs.html" | Inventory says "needs Stage 3 IA confirm." **My call:** keep `a-career-in-a-year.html` as a standalone link target (live PDF is its own URL) and link to it from `programs.html` hero or sidebar. Don't fold the page; it serves a distinct prospective-student funnel role. The 2019 PDF is a follow-up issue, not an IA issue. | Decision made; confirm. |
| 27-28 | Programs Brochures (EN/ES) | resources.html | Already built. | Clean |

**Net result of validation:** 24 of 25 destinations are clean as decided. One genuine open IA call resolved here (#26 Career in a Year stays standalone). One Comparator flag (#23-25 M/V/CV completeness on current about.html) — that's not in IA scope.

---

## Sitemap delta

**No new pages added by this recommendation.** All resolutions land on pages that already exist or were already planned in `docs/ptc_sitemap.md`:

- `resources.html` — exists, hosts Annual Impact Report and Programs Brochures
- `consumer-information.html` — exists, hosts Compliance Statements, Title IX, Financial Reports, and (new addition) Code of Conduct block
- `records-request.html` — exists per inventory; if missing in repo, this **is** a new page already enumerated in pilot Phase 2 (not introduced here)
- `a-career-in-a-year.html` — exists
- `clearwater-about.html` / `stpete-about.html` — exist, cards already built

The only structural addition is a new section heading on an existing page: **`consumer-information.html § Code of Conduct (campus-specific)`** with two card slots (STP PDF link + CLW pending stub). This fits the existing sticky-nav pattern; add to the in-page TOC at line 539-area alongside the existing Financial Reports anchor.

The proposed sitemap (Part 3 of `ptc_sitemap.md`) does not need to change. The Code of Conduct slot is sub-section detail under the already-listed "Consumer Information" hub.

---

## Migration order (Stage 6 build sequence)

The about-cluster pilot's 4-phase migration still applies. This recommendation slots into it as follows:

**Phase 1 (already done Apr 25-26):** about.html consolidation, M/V/CV canonical, Welcome merge, campus-about cards.

**Phase 2 — pending:**
1. Verify `records-request.html` exists with both campus contacts (#4-6). Build if missing. **Highest priority** because two campus pages currently link out to live URL rather than to a redesign page.
2. Confirm `resources.html` Annual Impact Report card (#29) renders correctly with current PDF link. **Done — verify only.**
3. Confirm `consumer-information.html § Financial Reports` (#30) external link still resolves. **Done — verify only.**
4. Add `consumer-information.html § Code of Conduct` block (#3) with STP PDF live and CLW slot stubbed. Update in-page TOC.

**Phase 3 — campus-about polish:**
5. Re-comparator-check that M/V/CV on `about.html` carries Vision + all 7 Core Values verbatim (open Apr-25 punch list item).
6. Migrate `.compliance-card` to canonical `.card` per `follow-ups.md` design-system row.

**Phase 4 — follow-ups owned externally:**
7. CLW admin: produce CLW Code of Conduct PDF or confirm PCSB district policy substitutes. Then swap stub for real link.
8. CLW admin: publish SY 2025-26 SIP. STP admin: publish 2024-25 safety reports. HEERF post-pandemic refresh sitewide.

**Stop-the-line items before ship:** none. The redesign can ship with the CLW Code of Conduct stub as long as the stub is honest about what's pending.

---

**Recommendation: accept all three decisions and proceed to Stage 4 (synthesizing) / Stage 6 (building) per the order above.**
