# About Cluster Audit — Synthesis & Recommendations

**Date:** 2026-04-25
**Pages audited:** 32 live URLs across www, clearwater, stpete
**Subagents:** Content Mapper, Redesign Comparator, IA Recommender, Verifier (4 in parallel + verification handoff)
**Status:** Audit complete. 4 critical fabrications confirmed by independent verification. Action required before redesign launch.

---

## TL;DR — The 5 Things That Matter

1. **Stop the press.** The current redesign about.html contains 4 confirmed factual fabrications. The page should not go live in its current state. Most urgent: founding year (we say 1961, live says 1962) and industry partner count (we say 50+, live says 250+). Independent Verifier confirmed all four.

2. **One About page is the right architecture.** The IA subagent recommends keeping a single consolidated About page on the main site. Three live "About" hubs all point to mostly the same content; ~50% of the live content is duplicate or misplaced.

3. **About is overloaded on the live site.** Marketing assets (Programs Brochure), legal disclosures (Sexual Misconduct, Compliance Statements), and campus-specific compliance docs (Catalog, Accreditation, Code of Conduct, Written Plans, Safety, Financial) are all jammed under "About" on the live site. They belong elsewhere — Resources, Consumer Information, or the campus pages.

4. **The live site itself has stale content we should not blindly copy.** "A Career in a Year" handout is dated Nov 2019. HEERF financial reports stop in March 2023. STP Safety Data hasn't been updated since 2023 while CLW updates annually. Our redesign needs to be more current than the live site for these.

5. **The verification step earned its keep.** The Verifier found 2 issues the Comparator missed (placeholder leadership icons, internal math inconsistency) and confirmed all 11 high-stakes flags independently. Worth running the Verifier on every cluster.

---

## Architecture decision

**Single consolidated About page on the main site.** Estimated final length: ~2,010 words / 7 sticky-nav sections. This sits well under the 3,000-word / 8-section threshold where in-page nav becomes hard to follow.

Each campus also gets a thin About-style block on its existing campus page (clearwater.html, stpete.html) with campus-specific contact, hours, and a link to the campus's compliance docs hub. The big shared content (mission, vision, values, accreditation overview) lives only on the main About page; campuses link to it.

**Where everything goes** (from IA-RECOMMENDATION.md, condensed):

| Live live content | Redesign destination |
|---|---|
| Welcome to PTC, Get to Know PTC | Merge into main About → "Who we are" section |
| Mission/Vision/Core Values (×3 identical) | Single block on main About → "Mission, vision, values" section |
| A Career in a Year | Move to /programs landing page (it's program marketing, not About). Update from 2019 PDF to current copy. |
| Programs Brochure (EN + ES) | Move to /resources or /downloads. Not About. |
| Annual Impact Report | Move to /about → "Impact" section as a single linked PDF, OR /resources |
| Compliance Statements | Move to /consumer-information → "Non-discrimination" section |
| Sexual Misconduct / Predators | Move to /consumer-information → "Title IX & Safety" section |
| Records request (×3) | One page at /students/records-request with both campus contacts. Not About. |
| Campus Information (×2) | Already on campus pages — delete the duplicate "About > Campus Information" entries |
| Accreditation (×2) | Single accreditation block on main About → "Accreditation"; campus pages link to it |
| Catalog (×2) | Stay on each campus page (campus-specific PDF) |
| Code of Conduct (STP only) | Move to /consumer-information → also create CLW version (asymmetry to fix) |
| Written Plans (×2) | Stay on each campus page (campus-specific compliance disclosure) |
| School Improvement Plan (×2) | Stay on each campus page; CLW needs 2025-26 update |
| Safety & Security Data (×2) | Stay on each campus page; STP needs annual updates |
| Financial Accountability (×2) | Stay on each campus page; both pages need post-HEERF replacement |

---

## Punch list — fabrications to fix immediately

These four are confirmed by both the Comparator and the independent Verifier reading the source files separately. Each is a quote-able institutional fact and the redesign currently misstates it.

| # | Where in about.html | Current (WRONG) | Source-backed (CORRECT) | Live source |
|---|---|---|---|---|
| 1 | Meta description, hero subtitle, timeline, footer (4 places) | "since 1961" / "Since 1961" | **"Since 1962"** | extracted/www/welcome-to-ptc.md (verbatim) |
| 2 | Hero / programs section subtitle | "50+ industry partners" or similar | **"more than 250 business and industry partners"** | extracted/www/welcome-to-ptc.md |
| 3 | Mission section | Custom redesign wording | **"Our mission is to provide students the opportunity to develop national workplace competencies to fill the needs of business and industry."** (verbatim) | extracted/www/mission-vision-core-values.md |
| 4 | Timeline first entry | "1961 — College founded" | **"1962 — College founded"** (or remove the entry pending institutional-records check) | extracted/www/welcome-to-ptc.md |

---

## Punch list — missing content to add

These exist on the live institutional site and should appear in our redesign About page (verbatim or carefully paraphrased).

| # | Topic | Source | Why it matters |
|---|---|---|---|
| M1 | Vision statement | extracted/www/mission-vision-core-values.md — *"To be our communities' first choice for technical training."* | Required for the Mission/Vision/Values block; currently we have Mission only |
| M2 | All 7 Core Values | extracted/www/mission-vision-core-values.md — full list under "Core Values" heading | Same block; currently absent entirely |
| M3 | LEP / non-discrimination compliance language | extracted/www/compliance-statements.md (1,194 chars) | Federal/state required disclosure. Belongs on Consumer Information page per IA, but the *language* must come from this live source |
| M4 | Compliance officer email (complianceofficer@pcsb.org) | extracted/www/compliance-statements.md | Required Title IX / non-discrimination contact |
| M5 | Records-request emails (canfieldj@pcsb.org for CLW, kilpatrickc@pcsb.org for STP) | extracted/www/records-request.md | Need to appear on /students/records-request page |
| M6 | Accreditation: full COE + Cognia addresses and phone numbers | extracted/clearwater/accreditation.md, extracted/stpete/accreditation.md | Required disclosure for COE accreditation |

---

## Reworded-with-drift to tighten

| # | Topic | Drift | Fix |
|---|---|---|---|
| D1 | Career areas vs. programs | Live distinguishes "over 40 career areas" from "about 60 programs"; redesign conflates them as "40+ programs" | Restore both numbers verbatim |
| D2 | Opening institutional voice | Live opens "Since 1962, our institution has offered..."; redesign softens to a marketing tone | Use the live opening verbatim or near-verbatim |
| D3 | Locations | Live mentions "two campuses... and at extension and clinical locations"; redesign omits extension/clinical | Add: "and at extension and clinical locations" |
| D4 | Distance learning | Live: "We are a leader in Florida in providing career and technical education via distance learning"; redesign omits | Add a sentence drawing from this language |

---

## Unverified timeline claims (need institutional records)

The Comparator flagged 4 timeline entries that cannot be confirmed from any of the 32 live extracts and aren't refuted either. They're plausible but the source isn't online — they would need verification from PCSB / PTC institutional records before publishing:

- "1970s — St. Petersburg campus opens"
- "1990s — Major program expansion"
- "2000s — Council on Occupational Education (COE) accreditation"
- "2018 — Rebranded as Pinellas Technical College"

**Recommendation:** Either pull these out of the timeline pre-launch, or get Marianne to confirm with PTC archives / PCSB Communications. The 1962 founding correction means at minimum the timeline opening needs an edit anyway.

---

## Issues the Verifier added (Comparator missed)

V1. **Leadership section (about.html lines 618-632) has placeholder icons and generic titles.** This already shows up in the issues tracker as **C3 (Critical)** but is worth re-noting in the About audit context — the leadership block is currently launch-blocking on its own.

V2. **Internal math inconsistency.** The page says "for over 60 years" elsewhere while also claiming a 1961 founding. 2026 - 1961 = 65 (which works for "over 60"), but if we correct to 1962 the math is 64 (still "over 60"), so this becomes a non-issue once #1 is fixed. Worth noting because copy that gets math right also reads more credible.

---

## Live-site issues to flag back to PTC (not redesign work, but Marianne should know)

The audit surfaced several stale or asymmetric issues on the live site itself. These aren't ours to fix in the redesign, but they're things worth raising with the relevant PTC owner:

| Issue | Affected page | Recommendation |
|---|---|---|
| STP Safety & Security Data only goes through 2023 (CLW updates annually through Aug 2025) | clearwater + stpete safety pages | Flag to STP campus admin to publish annual updates |
| HEERF financial reports stop at 3/31/2023 (over 3 years stale) | both campus financial accountability pages | HEERF era ended; needs post-pandemic replacement reporting |
| CLW School Improvement Plan is SY 2024-25 (prior year); STP has SY 2025-26 (current) | clearwater SIP page | Flag to CLW for current-year update |
| CLW does not have a Code of Conduct page; STP does | clearwater compliance pages | Asymmetry — should both campuses have one? |
| "A Career in a Year" handout rev date is 11-8-19 (Nov 2019, 6+ years old) | www about-us | Either update or retire the handout |
| Mission/Vision/Core Values is duplicated 3 times (institutional + 2 campuses, byte-identical) | both campus M/V/CV pages | Consolidate to single live page or accept the redundancy |

---

## Next steps (in priority order)

1. **You review this report.** Sign off on or contest each fabrication fix and missing-content add. The 4 fabrications are highest stakes.
2. **I edit about.html** to fix the 4 fabrications + add Mission verbatim + add Vision + add Core Values + the 4 drift fixes. Estimated 30-45 minutes.
3. **I create /consumer-information additions** for the LEP / non-discrimination / Sexual Misconduct content from live (carefully — these are legal compliance text and should be verbatim, not paraphrased).
4. **I update the redesign sitemap** (`docs/ptc_sitemap.md`) to reflect the IA recommendation: where each live page lands in our redesign.
5. **You decide on timeline claims** — either get institutional confirmation, or I'll pull them.
6. **You decide whether to flag live-site issues back to PTC owners** (Safety, HEERF, SIP, Code of Conduct, etc.) or just ignore them since they're not in your scope.

---

## Cluster pilot retrospective — what we learned for the next 6 clusters

This was the pilot run for the audit workflow. What worked, what didn't, and what changes for the next cluster (Programs, Admissions, Tuition, Campus Info, Counselors, Compliance, Misc):

**Worked well:**
- 4 parallel subagents (mapper + comparator + IA + verifier) is the right shape. Each output is independently useful and they don't step on each other.
- Verifier independently confirmed every flagged fabrication. High signal — keep it for every cluster.
- Saving extracts to disk first then dispatching subagents = subagents only need file access, no Chrome MCP. Big simplification.
- Frontmatter on each extract (source URL, char count, notes) made the subagent reasoning easier.

**Could be tighter:**
- Extraction was the slowest stage by far (~15 min wall-clock for me alone in Chrome). For 120+ pages across remaining clusters, this needs a faster approach. Options: write a Node script that does HTTP fetches now that the egress allowlist is open, OR do extraction in larger batches and accept some MCP-output truncation.
- A couple of pages had content beyond the 1300-char extraction window. For high-stakes pages (compliance text especially), do a two-pass extraction in chunks.
- The MCP "tabs auto-removed when group empty" trap cost me 2 round trips. Always keep one tab alive.

**Skill candidate (Stage 5):**
The whole flow is repeatable. Inventory → extract → 4 parallel subagents → synthesize → punch list. Saving as a skill so the same pattern runs against Programs, Admissions, etc. with the same shape of output.

---

**See also:**
- [inventory.md](inventory.md) — the 32-URL work queue
- [OVERLAP-MATRIX.md](OVERLAP-MATRIX.md) — content mapper output
- [REDESIGN-COMPARISON.md](REDESIGN-COMPARISON.md) — comparator output (full claim-by-claim table)
- [IA-RECOMMENDATION.md](IA-RECOMMENDATION.md) — IA recommender output (full sitemap proposal)
- [VERIFICATION.md](VERIFICATION.md) — verifier output (independent re-check)
- [extracted/](extracted/) — 32 raw markdown extracts of every live About-cluster page
