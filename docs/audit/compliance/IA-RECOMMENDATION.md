# Compliance Cluster — IA Recommendation

**Generated:** 2026-04-29
**Author:** audit-ia-recommender
**Scope:** Information architecture for the Compliance cluster after Stage 1 research
**Decision owner:** Marianne Shaffer

---

## TL;DR

1. **Keep one page.** `consumer-information.html` stays the single canonical Compliance hub. After Stage 6 strips 6 unsourced sections, the page lands at ~11 sections — well within the 8-section + sticky-TOC budget. No `/compliance` split, no `/accessibility` split.
2. **Name the officers.** Use the verbatim Dena Collins (EEO/Title IX/ADA, 727-588-6000) and Stephanie Miller (504, 727-588-6296) block from `/privacy-policy`. Keep the generic `complianceofficer@pcsb.org` line as the single shared inbox below the named officers. Both are live-verbatim; using both is more accountable for complainants and the maintenance cost is one annual sweep against the live page.
3. **Carry WCAG 2.0 verbatim.** Strip the redesign's "WCAG 2.1 AA" claim. Match live exactly. Route the upgrade ask to follow-ups. The verbatim rule is binding and an unsourced 2.1 AA assertion is a real compliance liability if challenged.
4. **ESE = district-link card on consumer-information.html only.** Not on campus-about pages. Postsecondary ESE/accommodations contact comes through the Counselors cluster, not invented here.
5. **Cross-links: keep the existing 7-card / 8-card "Accreditation, Records & Compliance" grids on each campus-about page as-is.** They already do the right job: campus-specific docs live on the campus pages, the shared CI hub is linked from the nav and footer. Add one new "Accessibility & Compliance Officers" card to each grid pointing to `consumer-information.html#accessibility` and `#contact`.

---

## Reasoning

### One page or split

The Stage 1 tentative call to keep one page is correct. The sticky TOC + section-anchor pattern on `consumer-information.html` is exactly what regulatory hubs need: a single discoverable URL that auditors, COE reviewers, and footer links can all point at. Splitting Accessibility into `/accessibility` would (a) duplicate the Officer block (because Section 504 lives in the same Compliance Statement), (b) break the existing footer pattern (`Privacy Policy | Accessibility | Sitemap` already deep-links to CI anchors), and (c) gain nothing — the live PTC accessibility statement is 5 sentences. After Stage 6 strips, the page goes from 17 sections to 11. That is the consolidation budget working as intended.

### Officer naming — recommendation: name them

Two valid live sources, two framings. The `/privacy-policy` page (mislabeled but real and live-served) names Dena Collins and Stephanie Miller with direct phones. The `/about-us/.../compliance-statements` page uses the generic role title plus `complianceofficer@pcsb.org`. Both are verbatim-quotable.

Recommendation: **lead with named officers, end with the shared inbox.** Reasoning:

- A complainant scanning for "where do I report a 504 violation" finds Stephanie Miller's name and direct line, not a generic mailbox.
- Title IX, EEO, ADA, and §504 route to different officers in the live document. Stripping that to "Compliance Officer" loses the federal-law specificity those distinctions exist for.
- The shared inbox `complianceofficer@pcsb.org` and 727-588-6285 still belong on the page as the catch-all. Don't drop them.
- Maintenance cost: one named-officer sweep when the live page changes. That's already on the drift-watch.

### Accessibility — verbatim WCAG 2.0

The live PTC accessibility-statement page cites WCAG 2.0 and `PTCWebInfo-NoReply@pcsb.org`. The current redesign asserts WCAG 2.1 AA. Per the binding verbatim rule, the redesign cannot lead the live site on a legal disclosure. Strip the 2.1 claim, carry the 2.0 language, route the upgrade ask to `follow-ups.md` as a high-priority item for live-site owners. If/when live updates to 2.1 AA, the redesign updates with it. Do not insert a "redesign target" caveat in the user-facing copy — that's exactly the silent-insertion the rule blocks.

### consumer-information.html after Stage 6 strip

11 remaining sections (down from 17): accreditation, non-discrimination, accessibility, financial-aid, sap, campus-security, sexual-misconduct, financial-reports, code-of-conduct, catalog-records, contact. New: ese (district-link card). That's 12 sections under the 8-section sticky-nav rule, but the TOC-with-anchors pattern absorbs 12 fine — the rule is for prose-heavy pages, and CI is mostly card grids and short verbatim disclosures. **Recommendation (a): keep the TOC, ship the leaner page, do not consolidate further.** Each remaining section is a distinct legal disclosure with its own anchor that is already linked from elsewhere (footer, about pages, campus-about pages). Merging them would break those links and obscure individual disclosures.

---

## Per-topic placement table

| Topic | Two-campus class | Lives on | Notes |
|---|---|---|---|
| Accreditation (institutional) | shared | `consumer-information.html#accreditation` | Per-campus accreditation pages link IN to this section |
| Accreditation (campus) | campus-specific | `clearwater-about.html#compliance`, `stpete-about.html#compliance` | Already shipped; COE-required to live per-campus |
| Non-Discrimination Statement | shared | `consumer-information.html#non-discrimination` | Verbatim from `/privacy-policy` |
| Compliance Officers (named) | shared | `consumer-information.html#contact` | NEW: name Collins + Miller verbatim |
| FERPA / privacy | shared | STRIP from CI; pointer to PCSB Records Mgmt + PTC records-request page | High-priority follow-up |
| Accessibility / 504 / ADA | shared | `consumer-information.html#accessibility` | Verbatim WCAG 2.0; do not assert 2.1 |
| Student Outcomes / Right-to-Know | shared | STRIP; pointer to Annual Impact Report + accreditation pages | High-priority follow-up |
| Financial Aid disclosures | shared | `consumer-information.html#financial-aid` + `#sap` | Tuition cluster will own deeper content |
| Federal School Code 013847 | shared | DEFER to Tuition cluster | Do not verify this cluster (D1) |
| Tuition rates ($2.91 / $11.64) | shared | DEFER to Tuition cluster | Do not verify this cluster (D2) |
| Campus Safety & Security Data | campus-specific | `consumer-information.html#campus-security` (linking out to per-campus reports) + cards on each campus-about | Already verified |
| Sexual Misconduct / FDLE notice | shared (statement) + campus-specific (campus director phones) | `consumer-information.html#sexual-misconduct` | Already verified |
| DFSCA / Drug-Free Schools | shared | STRIP | High-priority follow-up; required for federal aid |
| HEOA Copyright / P2P | shared | STRIP | High-priority follow-up; required for federal aid |
| Voter Registration | shared | STRIP prose; keep the registertovoteflorida.gov link as a service block, no PTC-quoted copy | Medium follow-up |
| Constitution Day | shared | STRIP | Low follow-up |
| Financial Reports (PCS) | shared | `consumer-information.html#financial-reports` | Already verified, outbound link only |
| Code of Conduct | asymmetric (STP only) → shared | `consumer-information.html#code-of-conduct` (STP doc); CLW gap → follow-ups | Already in follow-ups |
| Catalog & Records Request | campus-specific | `consumer-information.html#catalog-records` + per-campus cards on campus-about | Already verified |
| ESE / postsecondary accommodations | shared (district) + campus-specific contact (TBD) | `consumer-information.html#ese` (NEW district-link card); contact named via Counselors cluster | Do not put on campus-about |
| District phone 727.588.6000 (D3) | shared | Verify against Compliance Statement extract | Sourced — keep |

---

## Concrete sitemap (Compliance-related pages after this cluster ships)

```
myptc.edu/ (redesign)
├── consumer-information.html   ← canonical Compliance hub, sticky TOC
│   ├── #accreditation
│   ├── #non-discrimination
│   ├── #accessibility           ← verbatim WCAG 2.0 + PTCWebInfo email
│   ├── #financial-aid
│   ├── #sap
│   ├── #campus-security
│   ├── #sexual-misconduct
│   ├── #financial-reports
│   ├── #code-of-conduct         ← STP source; CLW gap in follow-ups
│   ├── #catalog-records
│   ├── #ese                     ← NEW district-link card
│   └── #contact                 ← NEW: named officers (Collins, Miller) + shared inbox
│
├── about.html                  ← unchanged; "Accreditation" card links to CI#accreditation
├── clearwater-about.html       ← keep 7-card grid; ADD 1 card "Accessibility & Officers" → CI#accessibility
└── stpete-about.html           ← keep 8-card grid; ADD 1 card "Accessibility & Officers" → CI#accessibility

Footer (sitewide)
└── Consumer Information | Non-Discrimination | Privacy Policy* | Accessibility | Sitemap
    *footer label "Privacy Policy" deep-links to CI#non-discrimination since live /privacy-policy
     IS the Compliance Statement, not a privacy disclosure (until live owners fix)
```

---

## Officer-naming decision (explicit)

**Decision: Name them.** The Compliance Officer block on `consumer-information.html#contact` (and any cross-link like `about.html`) carries this exact structure, in this order, all verbatim from `/privacy-policy`:

1. **EEO Officer, Title IX, ADA:** Dena Collins, Executive Director, Human Resources (Office of Equal Opportunity), 301 4th St. SW Largo, FL 33770, (727) 588-6000
2. **Section 504:** Stephanie Miller, District 504 Coordinator, 301 4th St. SW Largo, FL 33770, (727) 588-6296
3. **General compliance inbox:** complianceofficer@pcsb.org · (727) 588-6285 (from `compliance-statements.md`)
4. **Florida public-records notice:** verbatim ("Under Florida law, email content and addresses are public records...")

Why not the generic-only alternative: the live PTC site already names them. The redesign matching the lower-fidelity source would actually be a regression, not a maintenance win.

---

## Risks and trade-offs

- **Officer turnover.** Names go stale. Mitigation: drift-watch already covers `/privacy-policy`; named-officer change triggers a redesign update on the same week the live changes.
- **Stripping 6 sections looks like the redesign is hiding compliance content.** It isn't — the content was synthesized boilerplate that the live site doesn't actually publish. `follow-ups.md` carries 6 high-priority entries asking PTC owners to publish the missing federal disclosures on live, after which the redesign can re-add verbatim.
- **WCAG 2.0 looks dated next to a 2026 redesign.** Marianne can decide to push the live owners to update before launch. Until then the redesign matches live, and the follow-up is logged.
- **Footer label "Privacy Policy" deep-linking to a non-discrimination anchor is awkward.** It's correct given the live mislabel. The cleanest fix is on the live side (rename the link or publish a real privacy/FERPA page). Logged.
- **D1/D2 (Federal School Code, tuition rates) on CI.** These belong to Tuition cluster scope; do not verify them this cluster. Document the punt in the Stage 4 RECOMMENDATIONS.

---

## Migration order for Stage 6

1. Strip 6 unsourced sections from `consumer-information.html`: `#privacy-ferpa`, `#student-outcomes`, `#drug-alcohol`, `#copyright`, `#voter-reg` (replace with optional service block), `#constitution-day`. Update sticky TOC.
2. Rewrite `#accessibility` verbatim from `accessibility-statement.md` extract. Drop the WCAG 2.1 AA claim. Use `PTCWebInfo-NoReply@pcsb.org`.
3. Rewrite `#contact` block: named officers from `compliance-statement-privacy-policy.md` extract, then shared inbox, then Florida public-records notice. Apply identical block to `about.html`'s compliance contact card.
4. Add new `#ese` district-link card (no prose; PCSB ESE hub link + 727-588-6285 catch-all line).
5. Add one "Accessibility & Officers" card to each campus-about compliance grid pointing to `consumer-information.html#accessibility` and `#contact`. Don't add ESE to campus-about.
6. Verify D3 (district phone 727.588.6000) against the Compliance Statement extract — should already match.
7. Update `docs/audit/follow-ups.md` with 6 high-priority federal-disclosure gaps + WCAG 2.1 upgrade ask + privacy-policy mislabel + duplicate-URL consolidation.
8. Update `docs/progress-log.md` and `CLUSTERS.md` row 3.

Word count: ~1,420.
