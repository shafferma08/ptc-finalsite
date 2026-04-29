# Compliance Cluster — Live Site Inventory

**Generated:** 2026-04-28
**Source hubs:** www, clearwater, stpete, plus pcsb.org district pages where applicable
**Redesign target:** `consumer-information.html` (Compliance hub — already exists with 17 sections)
**Sitemap delta:** none expected; CI page is the canonical hub. IA decision deferred to Stage 3 if any topic argues for splitting.

## Scope

Per CLUSTERS.md row 3, the Compliance cluster covers PCS/CTAE Compliance Statements, Title IX language, ESE info, and accreditation info per campus. The about-sub-pages cluster also deferred 8 unsourced sections on `consumer-information.html` (F7-F19) to this cluster:

- privacy-ferpa (FERPA)
- accessibility (Section 504 / ADA)
- student-outcomes (COE Right to Know)
- drug-alcohol (DFSCA)
- copyright (HEOA P2P)
- voter-reg (HEA voter registration)
- constitution-day (federal observance)
- ESE (per CLUSTERS.md scope)

Plus carry-over follow-up items the about-cluster audit raised (Clery ASR evaluation, accessibility email verify, USDE-recognition framing, Title IX paragraph, etc.) — those live in `docs/audit/follow-ups.md` and are routed to live owners, not to the redesign.

---

## Provenance — partial extraction reuse

The about-cluster pilot (2026-04-25) already extracted several Compliance-relevant URLs. This cluster reuses those extracts at:

```
docs/audit/about-cluster/extracted/{www,clearwater,stpete}/<slug>.md
```

Sub-pages that are **already extracted and verified** in the about-cluster (no re-scrape needed for this cluster's analyzing stage):

| consumer-information.html section | Source extract | Status |
|---|---|---|
| `#accreditation` | `clearwater/accreditation.md`, `stpete/accreditation.md`, `www/welcome-to-ptc.md` | Verified 2026-04-26/28 |
| `#non-discrimination` | `www/compliance-statements.md` | Verified 2026-04-25 |
| `#sexual-misconduct` | `www/sexual-misconduct-predators.md` | Verified 2026-04-25 |
| `#campus-security` (Safety & Security Data) | `clearwater/safety-security-data.md`, `stpete/safety-security-data.md` | Verified; section rewritten 2026-04-28 to match live |
| `#financial-reports` | `www/financial-reports.md` (extract was BLOCKED by Chrome MCP; redesign uses outbound link only) | Verified 2026-04-25 |
| `#code-of-conduct` | `stpete/code-of-conduct.md` (CLW pending stub) | Built 2026-04-28 |
| `#catalog-records` | `clearwater/catalog.md`, `stpete/catalog.md`, `www/records-request.md`, `clearwater/records-request.md`, `stpete/records-request.md` | Verified |
| `#contact` (Compliance Officer block) | `www/compliance-statements.md` | Verified |

For these sections, Compliance cluster Stage 3 (analyzing) just re-runs the Comparator against the existing extracts — no new extraction.

---

## New extraction needed — research findings (2026-04-28)

Research subagent ad59d6af22805e85f reported. Full output: `research-findings.md`. Headline: **6 of 8 topics have NO live source anywhere; 1 has a verbatim live source; 1 is district-only.** Per the verbatim-content rule, the 6 unsourced sections get stripped from `consumer-information.html` and logged as compliance gaps in `follow-ups.md`. These are real federal-aid disclosure gaps on live PTC, not redesign defects.

| # | CI section | Topic | Status | Live URL | Two-campus class | Action |
|---|---|---|---|---|---|---|
| 1 | `#privacy-ferpa` | FERPA / student records privacy | **NOT FOUND** | (none — `/privacy-policy` is mislabeled, actually a Compliance Statement; `/pcsb.org/ferpa` 404s) | shared (federal law) | **STRIP** prose. Replace with short pointer to `/about-us/welcome-to-ptc/how-to-request-your-student-records-from-ptc` + PCSB Records Management hub. High-priority follow-up. |
| 2 | `#accessibility` | Section 504 / ADA / WCAG accessibility | **FOUND** (split across 2 PTC pages + PCSB) | `https://www.myptc.edu/accessibility-statement` (titled "Accessible Website Initiative", cites WCAG 2.0, contact PTCWebInfo-NoReply@pcsb.org); `https://www.myptc.edu/privacy-policy` (mislabeled — actually the Compliance Statement; names EEO/Title IX/ADA officer **Dena Collins (727) 588-6000** and **Section 504 Coordinator Stephanie Miller (727) 588-6296**) | shared | **EXTRACT** both pages in Stage 2. Use verbatim. Note: live still cites WCAG 2.0; redesign currently says 2.1 AA — must reconcile. |
| 3 | `#student-outcomes` | COE Right to Know — completion / placement / licensure | **NOT FOUND** | (`/student-outcomes` 404s; closest equivalents are accreditation pages and Annual Impact Report which don't carry the data) | shared (institutional reporting) | **STRIP** specific completion/placement claims. Replace with link to Annual Impact Report + accreditation pages. **High-priority follow-up:** COE-required outcome data not published on live. |
| 4 | `#drug-alcohol` | DFSCA Drug-Free Schools | **NOT FOUND** | (none) | shared (federal) | **STRIP**. **High-priority follow-up:** federal DFSCA biennial-review disclosure missing — required for federal aid institutions. |
| 5 | `#copyright` | HEOA Section 488 P2P | **NOT FOUND** | (none — the PCSB acceptable-use page is K-12 employee-facing, not student) | shared (federal) | **STRIP**. **High-priority follow-up:** HEOA 488 disclosure missing. |
| 6 | `#voter-reg` | HEA Section 487 voter registration | **NOT FOUND** | (only the registertovoteflorida.gov third-party link; no PTC page) | shared (federal) | **STRIP** prose. Optional: keep voter-reg as a service block with the FL link. **Medium follow-up:** publish a real voter reg page. |
| 7 | `#constitution-day` | Federal observance | **NOT FOUND** | (none — no calendar event either) | shared (federal) | **STRIP**. Low-priority follow-up. |
| 8 | `#ese` (does not yet exist on CI) | Exceptional Student Education | **DISTRICT only** | `https://www.pcsb.org/departments/student-support/exceptional-student-education-ese/` (K-12 oriented; postsecondary coverage thin) | district-shared with campus contact for postsecondary accommodations | **DISTRICT-LINK card.** No prose. Postsecondary contact = PCSB compliance officer 727-588-6285. **Medium follow-up:** name a campus-level ESE / accommodations contact (counselor cluster will handle). |

### Top-level live-site issues surfaced (route to follow-ups)

- `/privacy-policy` is mislabeled — content is the Compliance Statement, not a privacy/FERPA disclosure
- `/about-us/welcome-to-ptc/pinellas-county-schoolsctae-compliance-statements` is a duplicate of `/privacy-policy` (same content, two URLs)
- stpete subsite mislabels the FDLE sexual-predator-registry notice as "FERPA/Sexual Predator Notice" — it is NOT FERPA
- PTC accessibility page cites WCAG 2.0 (not current 2.1 AA) — redesign already says 2.1 AA which now violates verbatim rule

### Newly named officers (from /privacy-policy extraction once Stage 2 runs)

The existing redesign Compliance Officer block on `consumer-information.html` and `about.html` uses the generic `compliance-statements.md` source: "Compliance Officer · Office of Equal Opportunity · 727-588-6285 · complianceofficer@pcsb.org". The newly discovered `/privacy-policy` page (a different live URL with overlapping content) names specific officers:

- **Dena Collins** — EEO / Title IX / ADA officer, (727) 588-6000
- **Stephanie Miller** — Section 504 Coordinator, (727) 588-6296

Two valid live sources with different framings. IA Recommender in Stage 3 should decide whether to surface named officers in the redesign (more accountable, harder to miss for complainants) or stick with the generic role title (easier to maintain when staff turn over).

---

## Redesign defects to verify in Stage 3

The about-sub-pages comparator deferred these to Compliance for re-check:

| # | Item | Source flag | Stage 3 action |
|---|---|---|---|
| D1 | Federal School Code 013847 on CI line 645 | Comparator F7 | Verify against Tuition cluster sources OR strip from CI (this is Tuition, not Compliance) |
| D2 | Tuition rates `$2.91/clock hour Florida resident, $11.64/clock hour non-resident` on CI | Comparator F8 | Verify against Tuition cluster OR strip from CI |
| D3 | District phone `727.588.6000` on CI PCS card line 794 | Comparator F22 | Verify against pcsb.org main contact OR strip |

These three really belong to **Tuition** cluster scope. Recommend re-classifying D1 and D2 there. D3 can be resolved this cluster (single phone verification).

---

## IA question

**Q:** Does Compliance get its own dedicated `/compliance` redesign page, or does `consumer-information.html` serve as the Compliance hub?

**Tentative IA call (deferred to Stage 3 IA Recommender):** Keep `consumer-information.html` as the canonical Compliance hub. It already has 17 sections and a sticky in-page TOC. A separate `/compliance` page would be redundant. The TOC + section anchors are exactly the consolidation pattern Compliance content needs.

**Two-campus framing:** Most compliance topics are `shared` (federal law applies the same way). The exceptions are:
- Sexual Misconduct campus-director phones (already campus-specific, both verified)
- Records-request counselors (already campus-specific, both verified)
- ESE coordinators (likely campus-specific, TBD)
- Safety & Security Data (campus-specific, already verified)

---

## Stage 1 status — COMPLETE 2026-04-28

- **Stage 1a (sourcing existing extracts):** Done. 8 sections already covered by about-cluster extracts.
- **Stage 1b (new live URL discovery):** Done. Research subagent reported. See `research-findings.md`.
- **Stage 1c (final inventory):** Done. This file complete.

**Headline outcome:** of the 8 unsourced CI sections, only **1** has a verbatim live source (Accessibility, split across 2 PTC pages), **1** is district-only (ESE), and **6** have no live source anywhere (FERPA, Student Outcomes, DFSCA, HEOA Copyright, Voter Reg, Constitution Day). Per the verbatim rule, those 6 sections will be stripped from `consumer-information.html` in Stage 6 and routed to follow-ups as live-site federal compliance gaps.

## Next stages

- **Stage 2 (extracting):** Fetch verbatim content from `myptc.edu/accessibility-statement` and `myptc.edu/privacy-policy` (the misnamed Compliance Statement page that names Dena Collins + Stephanie Miller). Save to `docs/audit/compliance/extracted/www/`. Scope is narrow — 2 URLs total. About-cluster extracts cover the rest.
- **Stage 3 (analyzing):** Dispatch 4 subagents in parallel against the existing extracts + the 2 new ones. IA Recommender's main question: name specific officers (Dena Collins / Stephanie Miller) on the redesign, or keep the generic Compliance Officer role title?
- **Stage 4 (synthesizing):** RECOMMENDATIONS.md punch list. Will be heavy on **strip** actions for the 6 unsourced sections, plus 1 rewrite (Accessibility), 1 new section (ESE district-link card), and 1 IA decision (officers named or generic).
- **Stage 6 (building):** Strip 6 CI sections, rewrite Accessibility section, add ESE card, optionally update Compliance Officer naming.
- **Stage 7 (verifying):** Re-run audit-verifier post-build.
- **Follow-ups:** 6 high-priority federal-aid compliance gap items routed to live owners (PTC compliance / business office / PCSB).

---

## See also

- `docs/audit/about-cluster/inventory.md` — original 32-URL inventory
- `docs/audit/about-cluster/IA-RECOMMENDATION.md` — destination decisions for compliance topics
- `docs/audit/about-sub-pages/REDESIGN-COMPARISON.md` — flagged the 8 unsourced sections (F7-F19)
- `docs/audit/follow-ups.md` — central register of live-site issues raised this cluster
