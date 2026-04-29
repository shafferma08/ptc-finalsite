# Compliance Cluster — RECOMMENDATIONS

**Generated:** 2026-04-29
**Author:** orchestrator (synthesizes Stage 3 outputs)
**Status:** All 6 decisions resolved 2026-04-29. Stage 6 ready to start on Marianne's go.
**Scope:** punch list for Stage 6 (building) on `consumer-information.html` (primary), `about.html`, `clearwater-about.html`, `stpete-about.html`, plus footer
**Sources:** OVERLAP-MATRIX.md, REDESIGN-COMPARISON.md, IA-RECOMMENDATION.md, VERIFICATION.md (all in this folder)

---

## §1 Open decisions for Marianne — review before Stage 6

These are the calls the IA Recommender recommends but where reasonable alternatives exist. Mark each one ✅ accept default or override before Stage 6 starts.

| # | Decision | Status | Resolution / current state |
|---|---|---|---|
| D1 | Compliance Officer block — generic role title vs. named officers; PCSB has two distinct pages (`/compliance-statements` for institutional non-discrimination + named officers, `/jobs/employment-info/employment-information` for employment-side EEO + applicant accommodations) | ✅ RESOLVED 2026-04-29 | Marianne confirmed: two distinct PCSB pages, two distinct redesign homes. Institutional content (Dena Collins EEO/Title IX/ADA + Stephanie Miller §504 + non-discrimination + Sunshine Law warning) lives on `consumer-information.html` `#non-discrimination` and `#contact`. Employment-side EEO + Reasonable Accommodations for Applicants content goes to `careers.html` (out of Compliance cluster scope; logged in §4 follow-ups for the Careers/HR cluster). Both the redesign Compliance hub and `careers.html` link out to PCSB for current info. Dena Collins appears on both pages because Title IX/ADA covers both students and employees. |
| D2 | Accessibility section — verbatim live WCAG 2.0 vs. real-as-of-redesign claims | ✅ RESOLVED 2026-04-29 | Marianne (the live owner / webmaster) approved a minimal real statement that claims only what's verifiable: ADA + §504 framework, WCAG 2.1 AA target, webmaster contact `shafferma@pcsb.org`, Stephanie Miller §504 Coordinator block, Florida Sunshine Law notice. No invented audit practices, no fabricated campus routing. Marianne will update live to match (so verbatim rule is preserved across both endpoints, just updated together). Final copy lives in §2.2 R1 below. Expansion items (audit cadence, testing tools, captioning, alt text, etc.) parked in §4 follow-ups for a future expansion pass. |
| D3 | Footer "Privacy Policy" link — what target after `#privacy-ferpa` strip? | ✅ RESOLVED 2026-04-29 (D3a) | Anchor footer to `consumer-information.html#non-discrimination`. Keep label "Privacy Policy" (matches live URL pattern). No new `privacy-policy.html` page — Marianne explicitly said no duplicate content. Footer link targets the existing internal Compliance hub anchor; D3a wins over D3b (dedicated page) and D3c (thin wrapper) on the no-duplication rule. |
| D4 | Voter Registration section | ✅ RESOLVED 2026-04-29 | Marianne confirmed: strip the entire `#voter-reg` section. No service block, no `registertovoteflorida.gov` link, no anchor. Live PTC has no voter-reg page, so the redesign matches live (which is to say, neither has it). High-priority follow-up logged in §4: verify Title IV status with PTC business office; if PTC participates in federal Title IV aid, federal HEA Section 487 voter-reg disclosure is required and a real voter-reg page must be published on live before re-adding to redesign. |
| D5 | Financial Aid block + SAP section on CI | ✅ RESOLVED 2026-04-29 | Marianne confirmed: live PTC didn't include financial aid on its compliance page. Strip both `#financial-aid` and `#sap` sections from `consumer-information.html` entirely. **No thin pointer to `tuition-aid.html`.** If financial aid + SAP content makes sense anywhere on the redesign, it lands on `tuition-aid.html` when the Tuition cluster runs (CLUSTERS.md row 6) and only with verbatim live sources. Until then, neither lives on CI. Federal Title IV obligations (R2T4, SAP, Verification) for live publication are routed to §4 follow-ups. |
| D6 | 2 truncation gaps — re-fetch now or carry into Stage 6 prep? | ✅ RESOLVED 2026-04-29 | Marianne provided the live URLs and authorized resolving. Curl-fetched both successfully. Saved to `compliance/extracted/www/re-fetch-fdle-sexual-predators.md` and `re-fetch-stpete-written-plans.md` (per the no-disturb-about-cluster rule). **Two significant findings:** (1) Live FDLE block is meaningfully different from current redesign — adds alternate hotline `(1-888-357-7332)`, adds hours `8 a.m. to 7 p.m.`, adds "2002 Campus Sex Crimes Prevention Act" reference; redesign's "maintains a public database at fdle.state.fl.us" is unsourced. New action R6 added to §2.2. (2) The truncated 11th STP Written Plan is **"Transfer Credit Policy"** (not "Transcript Plan"). New action P3 added to §2.4. New campus asymmetry surfaced — CLW doesn't list a Transfer Credit Policy. New follow-up entry. |

**Recommended posture for D3 + D6:** ✅ accept defaults (re-aim footer to `#non-discrimination`; re-fetch as Stage 6 prep). Either alternative is also defensible.

---

## §2 Punch list — Stage 6 build actions

Organized by action type. Each row references the source verdict (Comparator R-* or Verifier V-*), the redesign file + section anchor + line, and the verbatim live source so Stage 6 has everything inline.

### §2.1 STRIP — remove fabricated content per verbatim rule

| # | Action | File · Section · Line | Why | Verdict |
|---|---|---|---|---|
| S1 | Strip entire `#privacy-ferpa` section. Update sticky TOC. | `consumer-information.html` · `#privacy-ferpa` · L595-604 | No live FERPA disclosure exists anywhere on www / clearwater / stpete / pcsb.org. `/pcsb.org/ferpa` 404s. Replace with optional one-sentence pointer to PCSB Records Management hub + the existing `/about-us/welcome-to-ptc/how-to-request-your-student-records-from-ptc` page. | R-FERPA×4, V4-V5 |
| S2 | Strip entire `#student-outcomes` section. Update sticky TOC. | `consumer-information.html` · `#student-outcomes` · L622-633 | No live source. `/student-outcomes` 404s. Annual Impact Report and accreditation pages do not publish completion / placement / licensure tables. Replace with a single sentence linking to the Annual Impact Report. | R-Outcomes×3, V6-V7 |
| S3 | Strip entire `#drug-alcohol` (DFSCA) section. Update sticky TOC. | `consumer-information.html` · `#drug-alcohol` · L696-706 | No live DFSCA disclosure. Federal-aid compliance gap. | R-DFSCA×3, V8 |
| S4 | Strip entire `#copyright` (HEOA 488) section, including the $750 / $30,000 / $150,000 statutory dollar figures. Update sticky TOC. | `consumer-information.html` · `#copyright` · L711-714 | No live HEOA 488 disclosure. Statutory $ figures match real federal law but PTC does not publish them. Verifier's new finding §6.2: dollar figures should not migrate to any replacement copy. | R-Copyright×3, V9 |
| S5 | Strip the entire `#voter-reg` section. No service block, no `registertovoteflorida.gov` link, no anchor. Update sticky TOC. | `consumer-information.html` · `#voter-reg` · L719-721 | Per D4 RESOLVED (2026-04-29): live PTC has no voter-reg page; redesign matches live. Title IV status verification routed to follow-ups. | R-VoterReg×2, V10 |
| S6 | Strip entire `#constitution-day` section. Update sticky TOC. | `consumer-information.html` · `#constitution-day` · L772-774 | No `/constitution-day` page; no calendar event under `/pinellas-technical-college-calendar`. | R-ConstitutionDay, V11 |
| S7 | Strip the WCAG "2.1 Level AA" claim and the "regularly audit pages and components for contrast, keyboard navigation, and screen reader compatibility" line. (Replacement copy in §2.2 R1.) | `consumer-information.html` · `#accessibility` · L611 | Live cites WCAG 2.0 + softer "monitor the website regularly" claim. Per D2 default. | R-Accessibility×2, V1 |
| S8 | Strip the invented "campus Student Services accommodation routing" and "campus phone routing" sub-blocks. (Replacement copy in §2.2 R1.) | `consumer-information.html` · `#accessibility` · L612, L616-617 | Live PTC has no published campus-level accommodation workflow. Routes to district 504 Coordinator instead. | R-Accessibility×2 |
| S9 | Strip the entire `#financial-aid` section from CI. No replacement, no thin pointer, no link to `tuition-aid.html`. Update sticky TOC. | `consumer-information.html` · `#financial-aid` · L637-647 | Per D5 RESOLVED (2026-04-29): live PTC didn't include financial aid on the compliance page. If/when Tuition cluster verifies live financial-aid disclosures, it will land on `tuition-aid.html`, not CI. | R-FinAid OOS×2, R-FinAid×3 |
| S10 | Strip the entire `#sap` section from CI. No replacement, no thin pointer. Update sticky TOC. | `consumer-information.html` · `#sap` · L651-660 | Per D5 RESOLVED (2026-04-29): no live PTC SAP policy exists; redesign matches live. Federal Title IV publication ask routed to follow-ups. | R-SAP |
| S11 | Strip the invented "Available as a PDF / Contact campus Student Services" framing on `#catalog-records`. (Replacement copy in §2.2 R3.) | `consumer-information.html` · `#catalog-records` · L779-786 | Catalog PDFs are publicly downloadable; "available on request" framing is invented. | R-Catalog |
| S12 | Strip the invented "5 business days" transcript SLA. (Replacement copy in §2.2 R3.) | `consumer-information.html` · `#catalog-records` · L791-793 | Live records-request pages say nothing about a 5-day SLA. | R-TranscriptSLA |
| S13 | Strip the "Student Handbook" entry from `#catalog-records`. | `consumer-information.html` · `#catalog-records` · L795-800 | No "PTC student handbook" exists on live. Campus Code of Conduct PDFs are the closest equivalent. | R-StudentHandbook |

### §2.2 REWRITE — replace drift wording with verbatim live wording

| # | Action | File · Section · Line | Replacement copy (verbatim from extract) |
|---|---|---|---|
| R1 | Rewrite `#accessibility` body. Per D2 RESOLVED (2026-04-29): real claims only, sourced from Marianne (live owner / webmaster) + verbatim PCSB compliance-statement extract. WCAG 2.1 AA target stays (it's the redesign's actual goal); webmaster email is `shafferma@pcsb.org`; Stephanie Miller §504 Coordinator block is verbatim from PCSB; Florida Sunshine Law notice verbatim. No invented audit practices; no fabricated campus routing; expansion items (audit cadence, testing tools, captioning, alt text) parked in §4 follow-ups. Marianne will update live to match so the verbatim rule is preserved across both endpoints. | `consumer-information.html` · `#accessibility` · L609-617 (replace whole block with the copy below) | **Heading:** Accessibility<br><br>**Body paragraph:** Pinellas Technical College is committed to accessibility under the Americans with Disabilities Act (ADA) and Section 504 of the Rehabilitation Act.<br><br>**Subhead 1:** Website accessibility<br>This website targets Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. If you find content that is not accessible to you, please email the PTC webmaster at shafferma@pcsb.org. Include the page URL, the materials you need, and the format you need them in.<br><br>**Subhead 2:** Section 504 / ADA Coordinator<br>Stephanie Miller, District 504 Coordinator<br>301 4th St. SW, Largo, FL 33770<br>(727) 588-6296<br><br>**Subhead 3:** Sunshine Law notice<br>Under Florida law, email content and addresses are public records. If you do not want your email released in response to a public records request, do not send electronic mail to this entity. Instead, contact us by phone. |
| R2 | Rewrite `about.html` non-discrimination opening to use verbatim CTAE prefix from `compliance-statements.md`. | `about.html` · `#non-discrimination` · L737 | "Career Technical & Adult Education School and Programs are open to all eligible students in the district and is committed to a policy of nondiscrimination in employment and educational opportunity. No persons shall be discriminated against or harassed in any educational program, services or activities on the basis of race, color, sex, religion, national origin, marital status, age, sexual orientation or disability." Note: matches `consumer-information.html#non-discrimination` L579 verbatim. |
| R3 | Rewrite `#catalog-records` Catalog block to direct PDF links + Records Request block to verbatim live wording. | `consumer-information.html` · `#catalog-records` · L779-793 | **Catalog block:** direct PDF links (already on `clearwater-about.html` L217 and `stpete-about.html` L217). Drop "request from Student Services" framing.<br>**Records Request:** verbatim from `about-cluster/extracted/www/records-request.md` — per-campus emails (`canfieldj@pcsb.org` for CLW, `kilpatrickc@pcsb.org` for STP), full mailing addresses, Central Records 727-793-2701, and the 5-year-records note. No 5-day SLA. |
| R4 | Rewrite `#contact` Compliance Officer block to lead with named officers (D1 default). | `consumer-information.html` · `#contact` · L820-823 (existing PCS District card) AND new section above it for officer names | **Block 1: EEO/Title IX/ADA Officer** — Dena Collins, Executive Director, Human Resources (Office of Equal Opportunity), 301 4th St. SW Largo, FL 33770, (727) 588-6000<br>**Block 2: Section 504** — Stephanie Miller, District 504 Coordinator, 301 4th St. SW Largo, FL 33770, (727) 588-6296<br>**Block 3: General compliance inbox** — Office of Equal Opportunity, complianceofficer@pcsb.org, (727) 588-6285<br>**Block 4: Florida public-records notice (verbatim)** — "Under Florida law, email content and addresses are public records. If you do not want your e-mail released in response to a public records request, do not send electronic mail to this entity. Instead, contact us by phone."<br>Apply identical block to `about.html#non-discrimination` Compliance Officer card (currently L740-744). |
| R5 | Re-attribute the `727.588.6000` phone on the Compliance Contacts → PCS District card. It's not the district main line; it's Dena Collins's EEO Officer phone. Either drop it from the District card or rename the card to clarify the attribution. | `consumer-information.html` · `#contact` · L822 | Remove the phone from the "Pinellas County Schools District" card (since `727.588.6000` is the EEO Officer's direct line, not a generic district main number). The phone moves up into Block 1 from R4. |
| R6 | Rewrite the Sexual Predators paragraph verbatim from live (per D6 RESOLVED). | `consumer-information.html` · `#sexual-misconduct` · L689-690 | Replace current paragraph with verbatim live text from `compliance/extracted/www/re-fetch-fdle-sexual-predators.md`: "Information regarding sexual predators or offenders attending or employed by an institution of higher learning may be obtained from the local law enforcement agency or the Department of Corrections. The Florida Department of Law Enforcement has established a hotline (1-888-FL-PREDATOR) or (1-888-357-7332) that allows the public to request information about sexual predators and sex offenders living in their communities and around the state. Requests may be made between the hours of 8 a.m. and 7 p.m. You may also visit the FDLE website for sexual predator photographs and the 2002 Campus Sex Crimes Prevention Act." Strips the unsourced "maintains a public database at fdle.state.fl.us" claim. |

### §2.3 ADD — content live has that redesign doesn't

| # | Action | File · Where to add |
|---|---|---|
| A1 | Add Section 504 Coordinator block (Stephanie Miller, 727-588-6296) to `#accessibility`. | `consumer-information.html` · `#accessibility` (within R1's rewrite) |
| A2 | Add EEO/Title IX/ADA Officer block (Dena Collins, 727-588-6000) to `#contact` per D1 default. | `consumer-information.html` · `#contact` (within R4's rewrite) AND `about.html#non-discrimination` |
| A3 | Add Florida Sunshine Law public-records email warning verbatim. Apply to every section that lists a `@pcsb.org` email. | `consumer-information.html` (`#non-discrimination`, `#accessibility`, `#contact`) AND `about.html#non-discrimination` |
| A4 | Add new `#ese` district-link card (no prose). Section heading: "Exceptional Student Education." Body: link to PCSB ESE department + the 727-588-6285 catch-all line for postsecondary accommodation requests. Note campus-level contact will come from Counselors cluster. | `consumer-information.html` · NEW `#ese` section (place after `#campus-security` or before `#contact`) |
| A5 | Add one new "Accessibility & Officers" card to each campus-about Compliance grid pointing to `consumer-information.html#accessibility` and `#contact`. Do **not** add ESE card to campus-about pages. | `clearwater-about.html` · Compliance grid (L240-area, append 8th card); `stpete-about.html` · Compliance grid (L246-area, append 9th card) |

### §2.4 REPOINT / UPDATE — link target adjustments after strips

| # | Action | File · Line |
|---|---|---|
| P1 | Re-aim sitewide footer "Privacy Policy" link from `consumer-information.html#privacy-ferpa` (which gets stripped) to whatever target D3 resolves to. Sweep all HTML files with the footer. | All HTML files with footer (~26+ files; same sweep pattern as the about-sub-pages C1 1961→1962 sweep on Apr 28). |
| P2 | Update `consumer-information.html` sticky TOC to remove anchors for stripped sections (`#privacy-ferpa`, `#student-outcomes`, `#drug-alcohol`, `#copyright`, `#voter-reg`, `#constitution-day`, `#financial-aid`, `#sap`) and add new anchor for `#ese`. | `consumer-information.html` · TOC component |
| P3 | Add "Transfer Credit Policy" as the 11th item on `stpete-about.html` Written Plans summary (per D6 RESOLVED). | `stpete-about.html` · `#written-plans` summary line · L222 |

### §2.5 VERIFY — re-fetch + spot-check before publish

| # | Action | Reason |
|---|---|---|
| ~~V1~~ | ~~Re-fetch FDLE wording~~ | ✅ DONE 2026-04-29. Re-fetched via curl. Saved to `compliance/extracted/www/re-fetch-fdle-sexual-predators.md`. Found significant divergence; converted to action R6 above. |
| ~~V2~~ | ~~Re-fetch STP Written Plans 11th item~~ | ✅ DONE 2026-04-29. Re-fetched via curl. Saved to `compliance/extracted/www/re-fetch-stpete-written-plans.md`. 11th item is "Transfer Credit Policy"; converted to action P3 above. |
| V3 | Spot-check the `#non-discrimination` protected-categories list one more time before publish. CRITICAL: must be exactly "race, color, sex, religion, national origin, marital status, age, sexual orientation or disability" — no expansion, no narrowing. Verifier confirmed this matches `compliance-statements.md` exactly today; flagging as a publish-time double-check because legal stakes. | Verifier V20 |

---

## §3 Out-of-scope items — route to other clusters

| # | Item | Route to |
|---|---|---|
| O1 | Federal School Code 013847 verification | Tuition cluster (CLUSTERS.md row 6) |
| O2 | Tuition rates `$2.91 / $11.64 per clock hour` verification | Tuition cluster |
| O3 | ESE postsecondary contact at campus level (counselor name) | Counselors cluster (CLUSTERS.md row 4) |
| O4 | Founding-year `1962` cross-check | Already verified in About-cluster (closed 2026-04-28). No action. |

---

## §4 Follow-ups to add to `docs/audit/follow-ups.md`

These are live-site issues surfaced this cluster. Route to PTC owners. The redesign keeps the verbatim live wording (or strips, where there's no live wording) until live updates.

**High priority — federal-aid compliance gaps:**
1. **FERPA disclosure missing institution-wide.** Live PTC has no FERPA statement, directory-information policy, or opt-out mechanism. Required for institutions receiving federal aid. Owners: PTC compliance / business office, possibly with PCSB Records Management.
2. **Student Outcomes / COE Right-to-Know data not published.** COE-accredited institutions are required to publish completion / placement / licensure pass rates. Annual Impact Report and accreditation pages don't carry these. Owner: PTC administration.
3. **DFSCA biennial-review disclosure missing.** Federal Drug-Free Schools and Communities Act disclosure required for federal aid. No PTC page exists. Owner: PTC compliance.
4. **HEOA 488 P2P / Copyright disclosure missing.** Federal HEOA 488 student disclosure required. No PTC page exists. Owner: PTC compliance / IT.
5. **Title IV status verification + HEA 487 voter-reg disclosure.** Per D4 RESOLVED: redesign strips the voter-reg section to match live. But Federal School Code `013847` on the redesign suggests PTC participates in Title IV federal aid; if confirmed, federal HEA Section 487 requires a "good-faith effort" voter-reg disclosure. **Action:** confirm Title IV status with PTC business office. If Title IV: publish a real PTC voter-reg page on live. Once live exists, the redesign re-adds with verbatim wording. Owner: PTC business office + student services.
6. **Constitution Day observance disclosure missing.** Federal observance, typically thin (a sentence + annual event). Owner: PTC student services.
7. **Federal Title IV financial aid disclosures missing.** Per D5 RESOLVED: redesign strips `#financial-aid` and `#sap` sections entirely. But if PTC participates in Title IV, multiple disclosures are federally required: Return of Title IV Funds (R2T4) policy, Verification policy, Refund policy, Satisfactory Academic Progress (SAP) policy, Cost of Attendance, and Federal School Code. None exist on live PTC. **Action:** confirm Title IV status; if confirmed, publish all six disclosures on live. Once live, the Tuition cluster will source verbatim and the content lands on `tuition-aid.html`. Owner: PTC business office.

**High priority — accessibility / accuracy:**
8. **Live PTC accessibility-statement page must be updated to match the new redesign accessibility section.** Per D2 RESOLVED: the redesign now claims WCAG 2.1 Level AA target, names `shafferma@pcsb.org` as the webmaster contact, and routes accommodations to Stephanie Miller (District 504 Coordinator). The live `myptc.edu/accessibility-statement` page still cites WCAG 2.0 and `PTCWebInfo-NoReply@pcsb.org`. **Action:** Marianne (as webmaster) updates live to match the new redesign copy so the verbatim rule is preserved across both endpoints. Owner: PTC webmaster (Marianne).
9. **Accessibility statement expansion list — for a future pass.** Real practices to confirm and add to the redesign + live `#accessibility` section once verified: audit cadence (quarterly? annual?), testing tools (axe / Lighthouse / WAVE / NVDA / JAWS / VoiceOver / keyboard-only), captioning policy for videos, alt-text policy for images, PDF remediation policy or honest "PDFs may not be fully accessible — request alternate format" line, plain-language commitment, written accessibility plan / policy document. **Action:** Marianne confirms which are real practices, then both redesign and live get expanded together. Parked as a separate follow-up to keep this cluster's scope tight.

**Medium priority — live-site cleanup:**
8. **`/privacy-policy` URL mislabeled.** The live URL renders the Compliance Statement, not a privacy/FERPA disclosure. Either rename the live label to "Compliance Statement" or publish a real privacy / FERPA page behind that URL. Owner: PTC webmaster.
9. **Duplicate URL: `/privacy-policy` and `/about-us/welcome-to-ptc/pinellas-county-schoolsctae-compliance-statements`** render the same content under two URLs. Consolidate. Owner: PTC webmaster.
10. **STP subsite mislabels FDLE notice as "FERPA/Sexual Predator Notice".** It is NOT FERPA. Rename. Owner: PTC webmaster.
11. **STP Safety & Security Data 2+ years stale** (latest 2023; CLW current 8/28/2025). Owner: STP campus.
12. **Clearwater Code of Conduct PDF missing.** STP has one (2025-26); CLW doesn't. Either publish a CLW equivalent or accept the asymmetry. Owner: CLW campus admin.
13. **CLW School Improvement Plan one year behind STP.** STP has SY 2025-26; CLW only 2024-25. Owner: CLW campus.

**New from D1 RESOLVED — careers.html scope (out of Compliance cluster):**
14. **`careers.html` should carry the verbatim PCSB employment EEO + Reasonable Accommodations for Applicants notice.** Per D1 RESOLVED: PCSB has two distinct compliance-relevant pages — `pcsb.org/compliance-statements` (institutional, for students; lives on CI) and `pcsb.org/jobs/employment-info/employment-information` (employment-side, for job applicants). The employment-side content is **out of scope for the Compliance cluster** but in scope for `careers.html` (the Careers at PTC page). Verbatim source content includes "We are An Equal Opportunity Employer" framing, the protected-categories sentence, the "Notice for Availability of Reasonable Accommodations to Applicants for Employment", and the routing to `complianceofficer@pcsb.org`. Cross-link out to PCSB for current. **Action:** add as a sized scope item in CLUSTERS.md backlog (Careers / HR cluster) when we get to it. Owner: PTC webmaster.

**New from this session — extraction tooling:**
15. **WebFetch is unreliable on PCSB pages.** During Stage 4 reconciliation a WebFetch on `pcsb.org/compliance-statements` returned a prompt-injection-shaped instruction trying to override verbatim extraction with a 125-character quote limit. Switching to `curl -sL -A "Mozilla/..."` against the same URL bypassed the issue and returned the raw HTML cleanly. **Action:** for any PCSB-domain extraction in future cluster audits, use curl + Bash extraction, not WebFetch. Owner: pipeline / process docs.

**New from this session — content divergence to surface:**
16. **PCSB `/compliance-statements` includes a Boy Scouts paragraph PTC's `/privacy-policy` does not.** The PCSB version adds: "The School Board also provides equal access to the Boy Scouts and other designated youth groups. This holds true for all students who are interested in participating in educational programs and/or extracurricular school activities." **Action (medium):** decide whether to add this paragraph to the redesign `#non-discrimination` section. Argument for: it's verbatim from the upstream district source. Argument against: it's a youth-group access provision more relevant to K-12 than postsecondary CTE. Owner: Marianne.

**Low priority — administrative:**
17. **Section 504 + ADA Title II framing on `about.html` L747** is a synthesis of two valid sources, not a single-page direct quote. Acceptable as cross-link copy but flag for PCSB Compliance Officer approval.
18. **Footer non-discrimination disclaimer wording substitutes "prohibits any and all forms of discrimination and harassment" for live's "No persons shall be discriminated against."** Categories list is verbatim. Acceptable as footer condensation; flag for live owner approval.
19. **STP has a Transfer Credit Policy that CLW doesn't list.** Surfaced during D6 re-fetch (2026-04-29). STP's Written Plans page lists 11 items including Transfer Credit Policy; CLW lists 10 without it. **Action:** CLW campus to confirm whether they (a) also have a Transfer Credit Policy and just don't list it on the Written Plans page, (b) follow PCSB district transfer-credit policy, or (c) accept the asymmetry. Owner: CLW campus admin. Medium priority.
20. **About-cluster's `extracted/www/sexual-misconduct-predators.md` was truncated** at "1-888-FL-P" when extracted via Chrome MCP. The truncation hid a meaningful divergence between live (which adds an alternate hotline, hours, and the 2002 Campus Sex Crimes Prevention Act reference) and the redesign (which has an unsourced "fdle.state.fl.us" claim). About-cluster's REDESIGN-COMPARISON marked the row as VERBATIM (assumed); the verdict was based on truncated source. **Action:** at next about-cluster drift-check pass, update `extracted/www/sexual-misconduct-predators.md` with the full live text from the Compliance cluster's re-fetch file. Owner: pipeline (Marianne or Claude on next drift run).

---

## §5 Migration order for Stage 6

Run in this order so the build never leaves CI in an inconsistent state:

1. **Stage 6 prep:** ~~re-fetch V1 + V2~~ → DONE 2026-04-29 (D6 RESOLVED). New extracts saved.
2. **Strip pass:** S1, S2, S3, S4, S5, S6 in CI. After each strip, verify the sticky TOC entry is also removed.
3. **Strip pass (Accessibility):** S7, S8 in CI.
4. **Rewrite Accessibility:** R1 (with A1 inside it).
5. **Strip pass (Financial Aid + Catalog):** S9, S10, S11, S12, S13 in CI.
6. **Rewrite Catalog/Records:** R3.
7. **Rewrite Compliance Officer block:** R4 + R5 in `consumer-information.html#contact` AND `about.html#non-discrimination`. R2 swap on `about.html`.
8. **Rewrite FDLE Sexual Predators paragraph:** R6 in `consumer-information.html#sexual-misconduct`.
9. **Add ESE district-link card:** A4 (new `#ese` section on CI).
10. **Add Florida Sunshine Law warning:** A3 (apply to all sections with `@pcsb.org` emails on CI + about.html).
11. **Add campus-about Accessibility & Officers cards:** A5 on `clearwater-about.html` + `stpete-about.html`.
12. **Add STP Transfer Credit Policy:** P3 on `stpete-about.html#written-plans`.
13. **Footer repoint pass:** P1 sitewide (target depends on D3 resolution). Same regex/perl pattern as the C1 1961→1962 sweep on Apr 28; ~26 files.
14. **TOC update:** P2 on CI.
15. **Update `docs/audit/follow-ups.md`** with the 20 entries from §4.
16. **Verify:** spot-check V3 (protected categories) before publish.
17. **Update CLUSTERS.md row 3** status `building` → `verifying`. Append progress-log entry.

---

## §6 Stage 7 verification plan

Re-run `audit-verifier` against the post-build CI + about.html + campus-about pages. Verifier should confirm:

- All 8 stripped sections are gone from CI body and TOC: `#privacy-ferpa`, `#student-outcomes`, `#drug-alcohol`, `#copyright`, `#voter-reg`, `#constitution-day`, `#financial-aid`, `#sap`
- `#accessibility` body matches the new D2-RESOLVED copy in §2.2 R1 verbatim (WCAG 2.1 AA, shafferma@pcsb.org, Stephanie Miller block, Sunshine Law)
- `#contact` block has named officers (Dena Collins + Stephanie Miller) + generic inbox + Florida Sunshine Law warning
- `#ese` district-link card exists with no prose
- Campus-about pages each have the new "Accessibility & Officers" card
- Footer "Privacy Policy" link points to `#non-discrimination` (per D3) and the link doesn't dead-end
- `#non-discrimination` protected-categories list still matches `compliance-statements.md` verbatim (the V20 publish-time double-check)
- No invented financial-aid / SAP / voter-reg / FERPA / DFSCA / HEOA-488 / Constitution-Day prose remains anywhere

If clean, advance CLUSTERS.md row 3 → `verified`. If not, log new items at top of this RECOMMENDATIONS.md and bounce back to building.

---

## §7 Counts at synthesis (revised after 2026-04-29 decisions)

| | Original (Stage 4 draft) | After D1/D2/D4/D5/D6 resolved |
|---|---|---|
| Open decisions | 6 | 1 (D3 only) |
| STRIP actions | 13 | 13 (S5/S9/S10 scope tightened) |
| REWRITE actions | 5 | 6 (R6 added: FDLE paragraph rewrite) |
| ADD actions | 5 | 5 |
| REPOINT/UPDATE actions | 2 | 3 (P3 added: STP Transfer Credit Policy) |
| VERIFY actions | 3 | 1 (V1, V2 resolved → R6 + P3; only V3 remains) |
| Out-of-scope items | 4 | 4 |
| Follow-up entries to add | 15 | 20 (added: careers.html PCSB EEO scope, WebFetch/curl note, Boy Scouts paragraph, CLW Transfer Credit asymmetry, about-cluster FDLE truncation) |
| Migration steps | 15 | 17 (added R6 + P3 steps) |

**Total Stage 6 work units:** 29 actions across 4 file groups (CI, about.html, campus-about, footer sweep).

---

## §8 Decisions log — 2026-04-29

| Decision | Resolution | Source / authority |
|---|---|---|
| D1 | Two PCSB compliance pages → two redesign homes. Institutional content (Dena Collins + Stephanie Miller + non-discrimination + Sunshine Law) on CI; employment-side EEO + Reasonable Accommodations notice on `careers.html` (out of cluster scope, logged as follow-up #14). Both link out to PCSB for current. | Marianne |
| D2 | Real-claims-only accessibility section. WCAG 2.1 AA target, `shafferma@pcsb.org` webmaster email, Stephanie Miller §504 Coordinator block, Sunshine Law notice. No invented audit practices. Marianne updates live to match. | Marianne (live owner) |
| D3 | OPEN. Default proposal: re-aim footer "Privacy Policy" link to `#non-discrimination`; keep label or rename to "Compliance Statement". | (awaiting Marianne) |
| D4 | Strip entire `#voter-reg` section. No service block, no link. Title IV status verification routed to follow-up #5. | Marianne |
| D5 | Strip entire `#financial-aid` and `#sap` sections from CI. No thin pointer to `tuition-aid.html`. Federal Title IV financial-aid disclosures routed to follow-up #7. | Marianne |
| D6 | RESOLVED 2026-04-29. Curl-fetched both. **V1 outcome:** live FDLE block diverges meaningfully from current redesign (alt hotline, hours, 2002 Campus Sex Crimes Prevention Act, no fdle.state.fl.us URL claim) → action R6 added. **V2 outcome:** 11th plan is "Transfer Credit Policy" → action P3 added. New asymmetry follow-up (CLW doesn't list it). | Marianne provided URLs |

Word count: ~2,650 + ~600 from this session's revisions.
