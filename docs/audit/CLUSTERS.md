# PTC Content Migration — Cluster Tracker

Master queue for live-to-redesign content reconciliation. The `ptc-content-pipeline-daily` scheduled task reads this file, picks the next cluster at the earliest stage, runs `PROCESS.md` for that stage, and updates this file. The `ptc-live-drift-check` weekly task re-fetches verified clusters and flips status to `drift` if live has changed.

**Project rule (binding):** all redesign content comes from approved live PTC sites verbatim. Anything we'd improve gets logged in `follow-ups.md` for live-site owners. We never silently expand or augment.

**Two-campus framing (binding):** we treat PTC as one institution with two distinct campuses (Clearwater and St. Petersburg). For each cluster we explicitly classify content as one of:
- `shared` — same content on www; campus pages link to it (Mission/Vision/Core Values, accreditation body info)
- `campus-specific` — different content per campus (catalog, counselor list, schedule, safety data)
- `asymmetric` — exists on one campus only, must decide whether to add to the other (e.g., STP Code of Conduct)

Every cluster's `IA-RECOMMENDATION.md` must answer this classification per topic.

---

## Stages

| Stage | Meaning | Artifact produced |
|---|---|---|
| `queued` | Not started | (none) |
| `inventory` | Listing live URLs across www / clearwater / stpete hubs | `<cluster>/inventory.md` |
| `extracting` | Pulling live page content verbatim into markdown | `<cluster>/extracted/{www,clearwater,stpete}/*.md` |
| `analyzing` | 4 parallel subagents: Mapper, Comparator, IA, Verifier | `OVERLAP-MATRIX.md`, `REDESIGN-COMPARISON.md`, `IA-RECOMMENDATION.md`, `VERIFICATION.md` |
| `synthesizing` | Single RECOMMENDATIONS.md punch list | `<cluster>/RECOMMENDATIONS.md` |
| `building` | Editing redesign HTML to match the punch list | redesign `.html` files updated |
| `verifying` | Re-run Verifier subagent against final redesign pages | updated `VERIFICATION.md` |
| `verified` | Cluster matches live verbatim, watched by drift-check | (status only) |
| `drift` | Live changed since last verified, needs review | drift report appended to `<cluster>/DRIFT-LOG.md` |
| `blocked` | Waiting on Marianne or external owner | note in row |

The pipeline never advances `verified` → `drift` automatically without re-checking. The pipeline never advances `drift` → anything without explicit Marianne approval (flag-and-pause policy).

---

## Active queue

| # | Cluster | Status | Live hubs | Redesign target(s) | Last touched | Notes |
|---|---|---|---|---|---|---|
| 1 | About hubs | `verified` | www/about-us, clearwater/welcome-to-ptc-clearwater + clearwater/school-information, stpete/welcome-to-ptc-st-petersburg + stpete/school-information | `about.html`, `clearwater-about.html`, `stpete-about.html` | 2026-04-26 | Hub pages closed. Drift-watched. See `about-cluster/RECOMMENDATIONS.md`. |
| 2 | About sub-pages | `analyzing` | (28 sub-pages across 3 hubs — Code of Conduct STP, Written Plans CLW+STP, Financial Accountability CLW+STP, School Improvement Plan CLW+STP, Safety & Security Data CLW+STP, M/V/CV ×3, A Career in a Year, Get to Know PTC, Welcome to PTC, Programs Brochure EN+ES, Records Request ×3, Annual Impact Report, PCS/CTAE Compliance Statements, PCS School Financial Reports, Sexual Misconduct/Predators, plus campus Catalog/Accreditation/Campus Information) | Per-destination map in `about-sub-pages/inventory.md`. Targets: `consumer-information.html`, `records-request.html`, `clearwater-about.html`, `stpete-about.html`, `about.html`, `resources.html`, `a-career-in-a-year.html`. | 2026-04-28 | Inventory complete. Reuses about-cluster extracts (no re-scrape). 24 rows IA-decided; 2 need IA decision (#29 Annual Impact Report destination, #30 Financial Reports destination); 1 asymmetry to resolve (#3 Code of Conduct CLW). Stage 3 next. |
| 3 | Compliance | `queued` | www PCS/CTAE Compliance Statements + Title IX language scattered through hubs + ESE info + accreditation info per campus | (no dedicated redesign page yet — IA stage decides) | — | Compliance Officer contact: 727-588-6285, complianceofficer@pcsb.org. About-cluster audit already flagged the protected-categories language as a high-priority follow-up. |
| 4 | Counselors | `queued` | counselor pages on each campus | (no dedicated redesign page yet) | — | Both campuses have counselors; some programs share dual-counselor layout (Welding Advanced uses Cheri Ashwood + Valerie Santos). Must be `campus-specific`. |
| 5 | Admissions | `queued` | www/admissions, campus-specific admissions if any | `admissions.html` | — | Page exists in redesign, needs reconciliation against live. |
| 6 | Tuition | `queued` | tuition info on www and per-campus references | `tuition-aid.html` | — | Page exists in redesign, needs reconciliation. |
| 7 | Programs | `queued` | program pages on www + each campus | per-program pages built from `_templates/program-page.html` | — | Largest cluster. Welding St. Pete + Welding Advanced already done as pilots (2026-04-18/19). Schedule page redone 2026-04-22. |

---

## Backlog (not yet sized)

These came up during About-cluster work and need to be sized into the queue when we get there.

- **Records Request** — 3 versions on live (www, CLW, STP). Redesign has `records-request.html`. Likely one-page consolidation with campus link variants.
- **Workforce Innovation / Employer Hook** — already partially in redesign. May or may not be a true cluster.
- **News & Events** — live and redesign both have news. Decide whether this is in scope or out (live blog content changes constantly, drift-check would thrash).
- **Camp / Summer Programs** — separate live-site promo work in progress; eventually needs a `/summer-camps` landing page.

---

## Closed / archived

(none yet — About hubs is verified but still drift-watched, not archived)

---

## How clusters get added

If a content area surfaces during another cluster's audit (e.g. Compliance shows that ESE deserves its own treatment), add a row to **Backlog** with a one-line description. When you have time to size it (live URLs, redesign target), promote it into the **Active queue**.

## See also

- `PROCESS.md` — the recipe every cluster runs through
- `follow-ups.md` — live-site issues surfaced during audits, routed to PTC owners
- `.claude/skills/content-audit/SKILL.md` — the orchestrator skill the pipeline invokes
- `about-cluster/` — reference implementation, pattern source
