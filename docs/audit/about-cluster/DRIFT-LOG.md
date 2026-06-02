# About Cluster — Drift Log

Append-only log of live-site changes (and baseline-capture defects) detected on URLs already verified for this cluster. The pipeline never reconciles drift automatically; reconciliation requires Marianne's review.

---

## 2026-06-02 — Baseline re-verification sweep (JS-render-gap audit)

**Trigger:** Marianne requested a cross-cluster check-in before opening the next phase (Tuition). The 2026-05-03 Admissions reconciliation had discovered the original `curl + BeautifulSoup` extractor misses JavaScript-injected content (residency page: 1,328 chars captured vs 15,319 live) and warned the same gap "likely affects baselines for prior verified clusters (about, compliance, counselors)." This sweep tested that.

**Method:** Four parallel agents re-fetched all 46 baselines across About (www/clw/stp), Compliance, and Counselors via rendered-DOM WebFetch and diffed against the saved `extracted/*.md`. Findings only; no auto-reconciliation. These are **baseline-capture defects, not live changes** — the content was always on live; the old extractor truncated it.

**Result:** Compliance, Counselors, About-Clearwater all CLEAN (the only live-longer deltas were the shared site footer accreditation paragraph, which the old extractor correctly stripped). About-www had 4 truncated baselines; About-stpete had 1.

| Baseline | Defect | Redesign impact |
|---|---|---|
| www/welcome-to-ptc | Accreditation paragraph + closing paragraph truncated | None — about.html carries the 250-partners line + summary accreditation by IA design |
| www/get-to-know-ptc | Accreditation list + closing paragraph truncated | None — duplicate of welcome; not separately reproduced |
| www/financial-reports | Captured zero body (Chrome MCP BLOCKED); real content page | None — consumer-information.html#financial-reports summarizes + links out |
| www/sexual-misconduct-predators | FDLE tail truncated at "1-888-FL-P" | None — consumer-information.html#sexual-misconduct already had the full verbatim (via Compliance cluster re-fetch) |
| stpete/written-plans | 11th plan truncated, wrongly guessed "Transcript Plan" | **FIXED** — stpete-written-plans.html was missing the 11th plan |

**Reconciliation actions taken (Marianne-directed, this session):**

1. **5 baselines re-extracted** via rendered DOM and overwritten with complete verbatim content. Each now carries a `re_extracted: 2026-06-02` frontmatter note explaining the gap.
2. **stpete-written-plans.html fixed** — added the 11th plan **"Transfer Credit Policy"** (verbatim from live) and removed the incorrect note that guessed the truncated item was "Transcript Plan."
3. **No other redesign edits needed.** about.html and consumer-information.html were independently confirmed complete:
   - about.html: "more than 250 business and industry partners," "250+" stat, "5,000 full-time students" (Marianne's "drop nearly" editorial decision), summary accreditation section linking to campus accreditation pages.
   - consumer-information.html#sexual-misconduct: full FDLE text (both hotline numbers, 8 a.m.–7 p.m. hours, FDLE link, 2002 Campus Sex Crimes Prevention Act).
   - consumer-information.html#financial-reports: summary + link-out (verbatim-reproduction is an open decision logged in follow-ups.md).

**Cluster status:** stays `verified` (re-verified). This was a baseline-completeness fix directed by Marianne, not a live-content drift event, so the `drift` flag-and-pause path does not apply.

**Side findings routed to follow-ups.md:**
- Live sources "more than 250 business and industry partners" (welcome-to-ptc + get-to-know-ptc) — the real verbatim source for the homepage's unsourced/incorrect "50+ Industry Partners" hero stat.
- financial-reports verbatim-vs-link-out decision for consumer-information.html.
- get-to-know-ptc body is verbatim-identical to welcome-to-ptc (consolidation candidate, already noted).
