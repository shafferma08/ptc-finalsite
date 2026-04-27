# About Cluster — Information Architecture Recommendation

**Status:** Final recommendation for Marianne & audit review  
**Date:** 2026-04-25  
**Analyst:** IA Recommender  
**Scope:** www, clearwater, stpete About/School Information clusters

---

## TL;DR

1. **Single consolidated About page on main site** (not split). Merge the ~30 live pages into 1 cohesive 2500–3000-word institutional page with sticky nav.

2. **Consolidate 3 duplicates into 1:**
   - Mission/Vision/Core Values: identical across all 3 sites. Keep ONE canonical version.
   - Welcome + Get-to-Know: verbatim duplicates (2600+ chars each). Merge into single "Our Story" section.
   - Records Request: template 3x with campus filtering. One page with switchable campus context.

3. **Demote out of About:**
   - Programs Brochure (PDF) → Resources > Downloads
   - Compliance Statements → Consumer Information hub (sitewide legal)
   - Sexual Misconduct / Predator Info → Consumer Information hub
   - Annual Impact Report → News & Resources (marketing, not institutional policy)
   - Financial Reports → Fiscal Transparency page (institutional accountability, not About)

4. **Campus-specific pages stay on campus sites** (not consolidated to main):
   - Catalog, Accreditation, School Improvement Plan, Safety/Security Data, Financial Accountability, Code of Conduct, Written Plans.
   - These are COE-required per-campus disclosures and must live on each campus site for audit compliance.

5. **Word count estimate:** Consolidated About page lands ~2700 words / 7 sticky-nav sections. Within limits.

---

## Evidence: Overlap Analysis

| Content | Live Count | Overlap Type | Recommendation |
|---------|-----------|--------------|-----------------|
| **Mission/Vision/Core Values** | 3 (www + CLW + STP) | **Identical** (char count variance < 40 chars) | Consolidate to 1 canonical; link from campus sites |
| **Welcome to PTC / Get to Know** | 2 (both www, separate URLs) | **Verbatim duplicate** (2608 vs 2621 chars) | Merge into single "Our Story" section |
| **Records Request** | 3 (www + CLW + STP) | **Template-based** (campus filtering) | 1 page with dynamic campus selector or 3 minimal children |
| **Programs Brochure** | 1 (PDF wrapper) | **Marketing asset** | Move to Programs or Resources, not About |
| **Compliance Statements (CTAE/PCS)** | 1 (www only) | **Sitewide legal** | Move to Consumer Information footer/hub |
| **Sexual Misconduct / Predators** | 1 (www only) | **Compliance disclosure** | Move to Consumer Information footer/hub |
| **Annual Impact Report** | 1 (www only) | **Marketing/PR** | Move to News & Resources or separate Reports page |
| **Accreditation (Campus-specific)** | 2 (CLW + STP) | **Per-campus COE requirement** | Keep on each campus site |
| **Campus Catalog** | 2 (CLW + STP, PDF) | **Per-campus COE requirement** | Keep on each campus site |
| **School Improvement Plan** | 2 (CLW + STP) | **Per-campus accountability** | Keep on each campus site |
| **Safety/Security Data** | 2 (CLW + STP) | **Per-campus accountability** | Keep on each campus site |
| **Financial Accountability** | 2 (CLW + STP) | **Per-campus accountability** | Keep on each campus site |
| **Code of Conduct** | 1 (STP only) | **Campus-specific policy** | Keep on St. Pete campus site; add to Clearwater if missing |
| **Written Plans** | 2 (CLW + STP) | **Per-campus accreditation support** | Keep on each campus site |

**Key Finding:** ~50% of live "About" content is either duplicated, misplaced marketing, or campus-specific compliance data that must stay per-site for COE audits. Consolidation opportunity is real and significant.

---

## Proposed Sitemap

### Main Site: `myptc.edu`

```
/about (SINGLE consolidated page)
├── Hero + Navigation (breadcrumb, sticky nav)
├── Section 1: Our Mission, Vision & Values
├── Section 2: Our Story (merged Welcome + Get-to-Know)
├── Section 3: History & Milestones (Timeline from current about.html)
├── Section 4: By the Numbers (Stats from current about.html)
├── Section 5: Leadership & Governance
├── Section 6: Accreditation (institutional overview; links to campus-specific pages)
├── Section 7: Request Your Records (dynamic campus selector or 3 minimal children)
└── CTA Band + Related Links (Campuses, Consumer Info, Compliance)

/consumer-information (NEW hub — collect compliance + required disclosures)
├── Non-Discrimination Statement (from Compliance Statements)
├── Sexual Misconduct & Title IX (from Sexual Misconduct page)
├── Sexual Predator Notification (from Sexual Misconduct page)
├── Privacy Policy (existing)
├── Accessibility Statement (existing)
├── FERPA / Records Requests (links to /about#records OR separate page)
└── Campus-Specific Disclosures (CPL data, Gainful Employment, links to campus sites)

/resources/downloads (NEW or repurpose existing)
├── Programs Brochure (en/es)
├── Annual Impact Report
├── Financial Transparency Reports
├── Campus Catalogs (PDFs, linked from campus sites)
└── Other downloadable assets
```

### Clearwater Campus: `clearwater.myptc.edu`

```
/school-information/about-us (hub page, lite)
└── Key institution info + links to main site /about
  
/school-information/about-us/mission-vision-values (or LINK to myptc.edu/about#mission)
/school-information/about-us/accreditation (campus-specific COE status)
/school-information/about-us/catalog (PDF, required by COE)
/school-information/about-us/school-improvement-plan (required by COE)
/school-information/about-us/safety-security-data (required by COE)
/school-information/about-us/financial-accountability (required by COE)
/school-information/about-us/written-plans (required by COE)
/school-information/about-us/records-request (campus-specific form or link to myptc.edu/about#records)
/school-information/about-us/code-of-conduct (if not on main site)
```

### St. Petersburg Campus: `stpete.myptc.edu`

```
[Identical template to Clearwater, with STP-specific content]

/school-information/about-us
└── (Same structure as Clearwater, updated for STP)
```

---

## Per-Topic Content Placement

| Live Topic | Redesign Home | Treatment | Rationale |
|-----------|---------------|-----------|-----------|
| Welcome to PTC | /about § Our Story | Merge with Get-to-Know | Both pages verbatim duplicates; consolidate to 500-word narrative |
| Get to Know PTC | /about § Our Story | Merge with Welcome | (See above) |
| Mission/Vision/Core Values | /about § Mission section | Canonical 1x (link from campus sites) | Identical across 3 sites; host once, reference thrice |
| Our History | /about § History Timeline | Keep (already in redesign about.html) | Good institutional narrative, non-duplicate |
| By the Numbers | /about § Stats section | Keep (already in redesign about.html) | Supports institutional credibility |
| Campus Leadership | /about § Leadership section | Expand with full profiles | Placeholder in redesign; fill from org chart |
| Accreditation (institutional view) | /about § Accreditation | Link to campus-specific pages | Main site explains COE/Cognia; campuses hold per-site disclosures |
| Accreditation (Clearwater) | clearwater.myptc.edu/school-information/about-us/accreditation | Keep per-site | **COE-required per-campus disclosure** |
| Accreditation (St. Pete) | stpete.myptc.edu/school-information/about-us/accreditation | Keep per-site | **COE-required per-campus disclosure** |
| Campus Catalog (Clearwater) | clearwater.myptc.edu/school-information/about-us/catalog | Keep per-site | **COE-required per-campus disclosure** |
| Campus Catalog (St. Pete) | stpete.myptc.edu/school-information/about-us/catalog | Keep per-site | **COE-required per-campus disclosure** |
| Records Request (institutional) | /about#records OR /consumer-information#records | Single page + campus selector | Template once; let user filter campus |
| Records Request (Clearwater) | clearwater.myptc.edu/school-information/about-us/records-request | Link to main OR keep local form | COE sites can link to main; campus may keep form for submission |
| Records Request (St. Pete) | stpete.myptc.edu/school-information/about-us/records-request | Link to main OR keep local form | (See above) |
| Programs Brochure (en) | /resources/downloads | Move from About | Marketing asset, not institutional content |
| Programs Brochure (es) | /resources/downloads | Move from About | (See above) |
| School Improvement Plan (CLW) | clearwater.myptc.edu/school-information/about-us/school-improvement-plan | Keep per-site | **COE-required per-campus disclosure** |
| School Improvement Plan (STP) | stpete.myptc.edu/school-information/about-us/school-improvement-plan | Keep per-site | **COE-required per-campus disclosure** |
| Written Plans (CLW) | clearwater.myptc.edu/school-information/about-us/written-plans | Keep per-site | **COE-required per-campus disclosure** |
| Written Plans (STP) | stpete.myptc.edu/school-information/about-us/written-plans | Keep per-site | **COE-required per-campus disclosure** |
| Safety & Security Data (CLW) | clearwater.myptc.edu/school-information/about-us/safety-security-data | Keep per-site | **COE-required per-campus disclosure** |
| Safety & Security Data (STP) | stpete.myptc.edu/school-information/about-us/safety-security-data | Keep per-site | **COE-required per-campus disclosure** |
| Financial Accountability (CLW) | clearwater.myptc.edu/school-information/about-us/financial-accountability | Keep per-site | **COE-required per-campus disclosure** |
| Financial Accountability (STP) | stpete.myptc.edu/school-information/about-us/financial-accountability | Keep per-site | **COE-required per-campus disclosure** |
| Code of Conduct (STP) | stpete.myptc.edu/school-information/about-us/code-of-conduct | Keep per-site; audit Clearwater for missing copy | Campus-specific policy |
| Annual Impact Report | /resources/downloads or /news-resources | Move from About | Marketing/PR asset, not governance |
| Financial Reports (www version) | /resources/downloads or /fiscal-transparency | Move from About | Institutional accountability, better framed in dedicated section |
| CTAE/PCS Compliance Statements | /consumer-information | Move from About | Sitewide legal, belongs in compliance hub |
| Sexual Misconduct / Predators | /consumer-information | Move from About | Sitewide legal/safety, belongs in compliance hub |

---

## Risks & Trade-offs

**Risk 1: Campus sites lose granular About sections**
- *Mitigated:* COE requires campus-specific disclosure pages (Catalog, CPL data, Accreditation). These stay. Mission/Vision can safely link to main site; campuses are NOT losing compliance content.

**Risk 2: Single main About page reaches ~2700 words**
- *Mitigated:* Sticky nav (7 sections) keeps user oriented. Under 3000-word threshold. If growth happens, move History Timeline or Leadership to separate page later.

**Risk 3: Confusion about which records request to use**
- *Mitigated:* One main /about#records or /consumer-information/records page with prominent campus selector ("Which campus are you a student of?"). Campuses link to that page or keep local forms.

**Risk 4: COE reviewer looks for per-campus About pages**
- *Not a risk:* COE explicitly requires per-campus disclosure pages (Catalog, CPL, Accreditation, Plans, Financial, Safety). These pages EXIST on each campus site and are clearly linked from main consumer information / compliance hub. Consolidating Mission/Vision/Records does NOT undermine COE compliance.

---

## Migration Order (Build Sequence)

### Phase 1: Foundation (Week 1–2)
1. Consolidate Mission/Vision/Core Values into canonical version on main site.
2. Merge Welcome + Get-to-Know into single "Our Story" section.
3. Build single /about page with 7-section sticky nav (pull from existing about.html + new consolidated content).

### Phase 2: Compliance Hub (Week 2–3)
4. Create /consumer-information hub.
5. Move Sexual Misconduct, Compliance Statements to /consumer-information.
6. Move Programs Brochure, Annual Impact Report to /resources/downloads.

### Phase 3: Campus-specific Layers (Week 3–4)
7. Audit each campus site: confirm per-campus pages (Catalog, CPL, Accreditation, Plans, Safety, Financial, Conduct) are present and linked correctly.
8. Update campus About hubs (clearwater/school-information/about-us, stpete/school-information/about-us) to link to main /about for shared content.
9. Ensure Records Request resolves to one canonical page (or keep 3 minimal forms if local submission is required for workflow).

### Phase 4: QA & Testing (Week 4–5)
10. Test breadcrumb navigation: main About → campus pages → main About (circular links).
11. Verify sticky nav accessibility (keyboard nav, screen readers).
12. Test Records Request cross-site (main → campus redirect, or vice versa).
13. COE site audit: confirm all per-campus disclosures are findable and current.

---

## Word Count Projection

**Consolidated /about page (main site):**

| Section | Est. Words | Source |
|---------|-----------|--------|
| Hero / Intro | 50 | New |
| Our Mission (mission + vision) | 60 | Existing |
| Our Story (Welcome + Get-to-Know merged) | 500 | Existing (deduped) |
| Our History (Timeline) | 350 | Existing about.html |
| By the Numbers | 100 | Existing about.html |
| Campus Leadership (profiles) | 300 | Existing about.html + new |
| Accreditation + Compliance | 400 | New summary + links to campus pages |
| Two Campuses callout | 150 | Existing about.html |
| CTA + Related Links | 100 | New |
| **Total** | **~2010 words** | Estimate |

**Verdict:** Well under 3000-word threshold. With sticky nav, this is a comfortable read.

---

## Recommendation: Accept

This architecture:
- Eliminates ~50% of redundant content
- Maintains COE compliance (per-campus pages stay in place)
- Creates a single institutional About page that's easier to maintain and read
- Moves marketing assets (Brochure, Impact Report) out of governance/compliance
- Establishes a clear Consumer Information hub for required disclosures

**Next step:** Marianne confirms this recommendation, then Phase 1 build begins.
