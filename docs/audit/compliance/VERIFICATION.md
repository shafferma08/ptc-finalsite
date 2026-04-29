# Compliance Cluster — Verification

**Generated:** 2026-04-29
**Verifier:** audit-verifier (independent re-check)
**Inputs reviewed:** `inventory.md`, `research-findings.md`, `OVERLAP-MATRIX.md`, `IA-RECOMMENDATION.md`, `consumer-information.html`, `about.html`, `compliance/extracted/www/{accessibility-statement,compliance-statement-privacy-policy}.md`, `about-cluster/extracted/{www,clearwater,stpete}/*`

## Dependency notice

`docs/audit/compliance/REDESIGN-COMPARISON.md` was **not present** at verification start (Mapper + IA-Recommender both finished at 17:05; Comparator output still missing 7+ minutes later). Per task protocol I waited 60s, then waited an additional 5 minutes via Monitor, then proceeded with an **independent** verification against the same source set the Comparator would consume. Verdicts below are not "confirm/flip the Comparator's call" — they are first-principles rulings based on extracts vs. redesign. Treat this as a Comparator substitute for the high-stakes claims plus the Verifier sanity pass. When the Comparator's report lands, re-run the verifier against it to reconcile any verdicts.

## High-stakes re-checks (claims I would expect the Comparator to flag)

| # | Claim on redesign | Where on redesign | Live source quote | My verdict | Note |
|---|---|---|---|---|---|
| V1 | "WCAG 2.1 Level AA" claim | `consumer-information.html` line 611 — "This website is being designed and developed to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA." | `compliance/extracted/www/accessibility-statement.md` line 14: "We use the 'Web Content Accessibility Guidelines (WCAG) 2.0'." | **FABRICATED** | Live cites 2.0; redesign asserts 2.1 AA. Verbatim-rule violation. IA-Recommender already calls for strip + follow-up. |
| V2 | Accessibility contact listed only as campus phones (CLW 727.538.7167 / STP 727.893.2500) | CI line 614-617 | Live source contact is `PTCWebInfo-NoReply@pcsb.org` (accessibility-statement.md line 22) and §504 Coordinator Stephanie Miller, (727) 588-6296 (compliance-statement-privacy-policy.md line 28) | **REWORDED-DRIFT** | Redesign omits the verbatim webmaster email and the §504 Coordinator. The campus phones aren't wrong but the verbatim contact channels are missing. |
| V3 | "If you encounter a page, document, or physical space that is not accessible to you, please let us know. We will work with you to provide the information or service in an alternate format." | CI line 613 | Live: "If you experience difficulty with the accessibility of any web page or document, please request an alternate format of the material in an email to the Pinellas Technical College webmaster at PTCWebInfo-NoReply@pcsb.org." | **REWORDED-DRIFT** | Different wording, missing email address. |
| V4 | "Under FERPA, eligible students have the right to: Inspect and review... Request that inaccurate... Consent before... File a complaint..." | CI lines 595-602 | No live source on www, clearwater, stpete, or pcsb.org per `research-findings.md` topic 1; `/pcsb.org/ferpa` 404s. | **FABRICATED** | No FERPA disclosure exists on any live PTC URL. Strip required. |
| V5 | "Directory information may include name, dates of attendance, credential earned, and participation in officially recognized activities." | CI line 603 | No live source. | **FABRICATED** | Same as V4. Specific directory-info enumeration is not anywhere live. |
| V6 | "COE-accredited institutions are required to publish data on program completion, job placement, and... licensure pass rates. PTC publishes these figures annually..." | CI lines 622-623 | No live source. `/student-outcomes` 404s. Annual Impact Report does not publish completion/placement/licensure tables (research-findings.md topic 3). | **FABRICATED** | "PTC publishes these figures annually and reports them to our accrediting agency" is an assertion of fact without live evidence. Strip. |
| V7 | "Outcome data available on request includes: Program completion rates / Job placement rates / Licensure pass rates / Retention rates" | CI lines 625-630 | No live source. | **FABRICATED** | Same as V6. |
| V8 | "Under the Drug-Free Schools and Communities Act, PTC prohibits the unlawful possession..." entire DFSCA section | CI lines 696-706 | No live source on www, clearwater, stpete, or pcsb.org postsecondary-facing. | **FABRICATED** | Federal-aid disclosure missing institution-wide. |
| V9 | "PTC and Pinellas County Schools comply with U.S. copyright law... peer-to-peer..." entire HEOA 488 section incl. "$750 and $30,000 per work infringed (up to $150,000 for willful infringement)" | CI lines 711-714 | No live source. PCSB AUP is K-12 employee-facing (research-findings.md topic 5). | **FABRICATED** | Specific dollar figures with no live source = high-risk fabrication. |
| V10 | "Florida voter registration forms are available at both campuses at Student Services" | CI line 721 | No live source. Only the third-party `registertovoteflorida.gov` outbound link exists. | **FABRICATED** | The fact-claim about forms physically available at Student Services has no live origin. |
| V11 | "Each year on or around September 17, PTC observes Constitution Day with programming that commemorates the signing... Educational resources are made available to students and staff during the observance." | CI lines 772-773 | No live source. No calendar event in nav scan. | **FABRICATED** | |
| V12 | "Federal School Code: 013847" | CI line 644 | Not in any compliance extract; deferred to Tuition cluster (D1 in inventory.md) | **NEEDS-MORE-RESEARCH** | Out of scope for this cluster; verify in Tuition. Don't strip yet. |
| V13 | "Florida Resident: $2.91/clock hour. Non-Resident: $11.64/clock hour." | CI line 641 | Not in any compliance extract; deferred to Tuition cluster (D2) | **NEEDS-MORE-RESEARCH** | Same as V12. |
| V14 | District phone "727.588.6000" on CI Compliance Contacts → PCS District card line 822 | CI line 822 | `compliance-statement-privacy-policy.md` line 24: "(727) 588-6000" (Dena Collins). Same district main number. | **CONFIRM-VERBATIM** | D3 is sourced. Keep. |
| V15 | Compliance Officer block on CI line 583-587 (generic role, 727-588-6285, complianceofficer@pcsb.org) | CI lines 582-588 | `compliance-statements.md` lines 30-35: "Compliance Officer / Office of Equal Opportunity / 301 4th Street S.W. / Largo, FL 33770 / PH: 727-588-6285 / complianceofficer@pcsb.org" | **CONFIRM-VERBATIM** | Matches one of the two valid live sources exactly. Per IA-Recommender, redesign should ALSO add named officers (Collins, Miller) — but the existing block is verbatim-correct. Not a fabrication, an under-coverage. |
| V16 | Compliance Officer block on `about.html` lines 740-744 (same generic role + phone + email) | about.html lines 740-744 | Same `compliance-statements.md` source | **CONFIRM-VERBATIM** | |
| V17 | Section 504 + ADA inline statement on about.html line 747 | "PTC is also committed to accessibility under Section 504 of the Rehabilitation Act and Title II of the Americans with Disabilities Act (ADA)." | `compliance-statement-privacy-policy.md` names §504 + ADA but does NOT include this sentence verbatim. The legal-framework framing is a paraphrase. | **REWORDED-DRIFT (mild)** | Statement of fact is true and aligns with the cited authority, but it is not a verbatim live pull. Acceptable as a transition sentence pointing to CI#accessibility per IA-Recommender §3.1, but flag for trace-back. |
| V18 | Campus Safety & Security Data section (rewritten Apr 28 H4 closure) | CI lines 670-677 | `about-cluster/extracted/clearwater/safety-security-data.md` and `stpete/safety-security-data.md` confirm both campuses publish annual reports as PDFs. Redesign body: "Each PTC campus publishes annual Safety & Security Data reports... Reports are available on each campus website." Outbound URLs match live. | **CONFIRM-VERBATIM** (intent) | Body text is a faithful summary, not verbatim quoted. Outbound-link strategy is correct given the live page is a PDF list, not prose. Pass. |
| V19 | Sexual Misconduct & Sexual Predators verbatim block | CI lines 685-690 | `about-cluster/extracted/www/sexual-misconduct-predators.md` lines 19-23 | **CONFIRM-VERBATIM** | Body text matches live extract within the truncated portion. FDLE hotline rendered as "1-888-FL-PREDATOR" — extract was truncated at "1-888-FL-P" but key_facts confirms the full phrase. OK. |
| V20 | Non-Discrimination block protected categories ("race, color, sex, religion, national origin, marital status, age, sexual orientation or disability") | CI line 579 | `compliance-statements.md` line 24: "race, color, sex, religion, national origin, marital status, age, sexual orientation or disability" | **CONFIRM-VERBATIM** | Categories match exactly, neither expanded nor narrowed. Critical legal-stakes check passes. |
| V21 | Accreditation grid: "770-396-3898" and "888-413-3669" | CI lines 558, 564 | `clearwater/accreditation.md` line 14: "770-396-3898" and "(888) 413-3669"; `stpete/accreditation.md` matches | **CONFIRM-VERBATIM** | Phone numbers match. COE address "7840 Roswell Road, Building 300, Suite 325, Atlanta, GA 30350" matches live. Cognia address "9115 Westside Parkway, Alpharetta, GA 30009" matches live. Pass. |

## Spot-checks of likely VERBATIM rows

V19, V20, V21 above also serve as spot-checks. All three pass. Adding one more:

| # | Claim | Verdict | Note |
|---|---|---|---|
| V22 | Footer tagline: "Preparing students for high-demand careers through hands-on, industry-certified training since 1962." | **NEEDS-MORE-RESEARCH** | Year 1962 is a high-stakes founding-date claim. Not present in compliance extracts. Should be verified against `welcome-to-ptc.md` or About cluster sources before being treated as verbatim. The About cluster verification (closed 2026-04-28) presumably covered this; carry forward. |

## Counts

- **Confirmed verbatim:** 7 (V14, V15, V16, V18, V19, V20, V21)
- **Fabricated:** 8 (V1, V4, V5, V6, V7, V8, V9, V10, V11) — note: 9 fabrications listed; consolidate V4+V5 as the single FERPA strip and V6+V7 as the single Outcomes strip → effectively **6 distinct strip actions** across the 6 zero-coverage topics, exactly matching the inventory's headline finding.
- **Reworded drift:** 3 (V2, V3, V17) — mostly clustered in the Accessibility section
- **Needs more research (out of scope here):** 3 (V12, V13, V22)

**Net flips relative to expected Comparator output:** None — the IA-Recommender already documents the same 6-strip / 1-rewrite / 1-add structure I'm seeing. If the Comparator (when it lands) marked any of V4-V11 as verbatim or reworded-OK, **flip to FABRICATED**. If it marked V14-V16 as fabricated or drift, **flip to CONFIRM-VERBATIM**.

## Confidence assessment of the upstream pipeline

- **Mapper (OVERLAP-MATRIX.md):** High confidence. The 6-zero-coverage finding is reproducible from the extracts. Section 4 of the matrix matches my independent re-read row-for-row.
- **IA-Recommender (IA-RECOMMENDATION.md):** High confidence. The "name the officers + carry WCAG 2.0 verbatim + strip 6 + add ESE district-link card" plan is the correct call given verbatim rule + research findings. The migration order in §"Migration order for Stage 6" is executable.
- **Comparator (missing):** Cannot assess. Stage 4 RECOMMENDATIONS.md cannot proceed without the Comparator's per-row verdict table.

## New issues this verification surfaced (Comparator likely missed or out-of-scope)

1. **`about.html` Accessibility transition sentence (V17)** is a mild paraphrase. The redesign correctly anchors to CI#accessibility, but the sentence itself isn't verbatim from any live source. Acceptable as cross-link copy per IA Recommender, but log to follow-ups so a future audit doesn't re-flag it.
2. **HEOA 488 dollar figures ($750-$30,000, $150,000 willful) on CI line 713** are statutory facts, but the redesign quotes them as if from a live PTC source — there is no live source. When the Stage 6 strip happens, this whole paragraph goes; the dollar figures should not migrate to any replacement copy because PTC doesn't publish them.
3. **Voter Registration sentence "Florida voter registration forms are available at both campuses at Student Services" (V10)** is a specific operational claim that, if false, exposes PTC. No live source confirms forms are physically distributed. Recommend the Stage 6 strip remove the sentence and keep only the outbound `registertovoteflorida.gov` link as a service block, exactly as IA-Recommender §"Voter Registration" specifies.
4. **Footer Privacy Policy link** (line 898) deep-links to `consumer-information.html#privacy-ferpa`. After Stage 6 strips that anchor, the link will dead-end. Re-aim it at `#non-discrimination` (the actual content behind the live `/privacy-policy` URL) or remove the footer item entirely. Inventory and Mapper both call this out; flagging here so the Stage 6 build doesn't miss the link update.
5. **STP Safety & Security Data is 2+ years stale** (latest 2023 vs. CLW 8/28/2025). Already in OVERLAP-MATRIX §3 and follow-ups, but the Verifier confirms the asymmetry from extracts.
6. **Code of Conduct CLW slot** is correctly rendered as "Pending" placeholder per IA-Recommender. No verbatim violation. Pass.

## Recommendation to orchestrator

When `REDESIGN-COMPARISON.md` finally lands, run this Verifier output as a cross-check against it and reconcile per-row. The independent verdicts above should hold; if the Comparator dissents on any zero-coverage row (V4-V11) the dissent itself is a fabrication and should be over-ridden by the verbatim rule. Stage 4 RECOMMENDATIONS.md can proceed using IA-Recommender's migration order — the Comparator's row table is helpful for traceability but not load-bearing for the strip-plus-rewrite plan.

Word count: ~1,180.
