---
name: content-audit
description: "Multi-agent content audit that compares the live PTC sites (www.myptc.edu, clearwater.myptc.edu, stpete.myptc.edu) against the redesign for a single content cluster (About, Programs, Admissions, Tuition, Campus Info, Counselors, Compliance, etc.). Surfaces fabrications, missing content, IA problems, and consolidation opportunities, then produces a single RECOMMENDATIONS.md with a punch list. Use when Marianne wants to audit a cluster, verify our redesign content matches the live site, check for fabricated claims, decide whether content should be one page or split, or when she says 'audit the X cluster', 'compare against live', 'verify the X page', or 'find fabrications in X'."
---

# Content Audit Skill

You orchestrate a 5-stage parallel-subagent workflow that audits one content cluster of the PTC redesign against the corresponding live content. Output is a single `RECOMMENDATIONS.md` with a fabrications punch list, missing-content list, drift fixes, IA recommendation, and a link to all supporting evidence.

This skill exists because the PTC redesign needs to use copy that's actually on the live site, but the live site has many subpages, lots of duplication, and outdated content. Eyeballing isn't reliable. This workflow is the audit machine.

## When to use

Triggers:
- "audit the [About / Programs / Admissions / Tuition / Counselors / Campus / Compliance] cluster"
- "verify our [page] content matches live"
- "find fabrications in [page]"
- "check if [content] is up to date with live"
- "should this be one page or split per campus?"
- "compare what we have to what's actually live"

Don't use for:
- Single-page eyeball reviews (use the review-panel skill instead)
- Pure design/UX feedback without content claims
- New content creation (this is for verifying existing content, not generating it)

## Pre-flight checklist

1. **Cluster name and scope.** Examples: "About cluster" = `/about-us`, `/school-information`. "Programs cluster" = `/programs/*`. Ask Marianne if ambiguous.
2. **Hub URLs.** Each cluster has 1-3 hub pages (one per site). Get URLs from Marianne or infer from the live site nav.
3. **Workspace folder.** Always `C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\`.
4. **Output folder.** `docs/audit/<cluster-slug>/` — create if missing.
5. **Chrome MCP availability.** Stage 2 needs Chrome. If not connected, ask Marianne to open hub tabs and connect the Claude in Chrome extension.

## The 5 stages

### Stage 1 — Inventory (~10 min, you do it)

Navigate to each hub URL via Chrome MCP. Extract the full link list using the JS in `references/extraction-snippets.md`. Save deduplicated URLs to `docs/audit/<cluster>/inventory.md` with a table per hub plus pattern observations (likely duplicates across hubs, likely PDF wrappers, likely stale).

### Stage 2 — Extraction (~30-45 min, you do it via Chrome MCP)

For every URL in inventory: navigate, wait, extract content with the JS in `references/extraction-snippets.md`. Save each page to `docs/audit/<cluster>/extracted/{www,clearwater,stpete}/<slug>.md` with frontmatter (source URL, title, scrape date, char count, campus, type, pdf_url if applicable, notes).

**Critical notes:**
- Chrome MCP truncates output around 1000-1300 chars. For pages with `len > 1300`, do 2-pass extract.
- Many PTC pages are pure PDF wrappers (`len < 100`, single PDF link). Save the PDF metadata; don't try to extract more.
- Run navigations 3 at a time across 3 tabs (cycle one tab through www URLs, one through clearwater, one through stpete) using `browser_batch` to navigate all 3 in parallel, extract all 3, write 3 files. ~11 rounds for 30 URLs.
- **Do NOT close all MCP tabs mid-stage.** The MCP tab group auto-removes when empty and you'll lose your tabs.
- **Use bash + Python to write file batches.** Each round, write 3 markdown files in one Python script instead of 3 separate Write tool calls. Saves context.

### Stage 3 — Parallel subagent analysis (~10-15 min wall-clock)

Dispatch the 4 named audit subagents in parallel, in a SINGLE MESSAGE with one Task call per subagent so they truly run in parallel. Each subagent's full instructions, output format, and analysis approach live in its own file under `.claude/agents/` — do NOT re-inline the prompts here. Pass each one only: the cluster slug and the redesign file paths for this cluster.

The 4 subagents and the file each one produces:

1. **`audit-mapper`** → produces `OVERLAP-MATRIX.md`. Topic-by-topic comparison across www/clearwater/stpete. Identifies identical-content groups, campus asymmetries, PDF wrappers, IA red flags.

2. **`audit-comparator`** → produces `REDESIGN-COMPARISON.md`. Reads our redesign page(s) for this cluster + all extracts. Classifies every claim as VERBATIM / REWORDED-OK / REWORDED-DRIFT / MISSING / FABRICATED / OUTDATED-LIVE / OUTDATED-REDESIGN. Ranked priority list.

3. **`audit-ia-recommender`** → produces `IA-RECOMMENDATION.md`. Reads inventory + extracts + redesign sitemap. Recommends one-page vs split, what to consolidate, what to demote/promote, concrete sitemap proposal.

4. **`audit-verifier`** → produces `VERIFICATION.md`. Independently re-checks every FABRICATED / MISSING / REWORDED-DRIFT row from the Comparator by re-reading the source files. Spot-checks 3 random VERBATIM rows. Reports CONFIRM / FLIP / NEEDS-MORE-RESEARCH per row.

**Important:** Each subagent gets only file access. None should touch Chrome MCP — that's why we extracted to disk in Stage 2. (`references/subagent-prompts.md` is retained for archival reference but is no longer the source of these prompts; the agent files in `.claude/agents/` are.)

### Stage 4 — Synthesis (~15 min, you do it)

Read all 4 subagent outputs and produce `docs/audit/<cluster>/RECOMMENDATIONS.md`. Structure: TL;DR → Architecture decision → Fabrications punch list → Missing punch list → Drift fixes → Unverified claims → Verifier-added issues → Live-site issues to flag back to PTC → Next steps in priority order → Cluster pilot retrospective (first cluster only) → Links to supporting reports.

### Stage 5 — Marianne reviews + you edit (separate session)

Marianne signs off on each row. You then edit the redesign files per the punch list. This is its own pass — don't try to do it in the same session as the audit.

## Output structure

```
docs/audit/<cluster-slug>/
├── inventory.md              # Stage 1 — work queue
├── extracted/                # Stage 2 — raw live content
│   ├── www/<slug>.md
│   ├── clearwater/<slug>.md
│   └── stpete/<slug>.md
├── OVERLAP-MATRIX.md         # Stage 3a
├── REDESIGN-COMPARISON.md    # Stage 3b
├── IA-RECOMMENDATION.md      # Stage 3c
├── VERIFICATION.md           # Stage 3d
└── RECOMMENDATIONS.md        # Stage 4 — top-level deliverable
```

After completion, append a brief entry to `docs/progress-log.md` linking RECOMMENDATIONS.md, noting cluster name, count of fabrications/missing/drift items, and the architecture decision.

## Common pitfalls

- **MCP output truncation at ~1000-1300 chars.** Always probe `len` first. Do 2-pass extract for longer pages.
- **Tab group auto-removal.** Closing the last MCP tab dissolves the group, orphaning any other tabs. Always keep at least one tab alive.
- **`tabs_create_mcp` doesn't always navigate.** Sometimes it creates a blank tab and ignores the URL. Follow up with explicit `navigate` if title shows "New Tab".
- **Save extracts via Python batches, not 3 separate Write calls.** Each Write costs context; one bash + Python writing 3 files is much cheaper.
- **Don't let subagents touch Chrome MCP.** They don't have access in a fresh subagent context. Extract once, then dispatch.
- **Dispatch all 4 subagents in ONE message** with multiple Agent tool calls so they truly run in parallel. Sequential Agent calls = no parallelism.

## What to tell Marianne after a run

Give a 4-bullet summary:
1. Number of fabrications, missing items, drift items
2. The architecture decision in one sentence
3. The single highest-stakes fix (usually a fabrication that misstates an institutional fact)
4. Path to RECOMMENDATIONS.md and an offer to start Stage 5 (edits) in the next session

Don't dump the full report into chat — link it.

## Cluster runs to date

- `about-cluster/` — first pilot, 32 URLs, 4 fabrications + 6 missing + 4 drift + 2 verifier-added issues. Architecture: keep single About page on main site. (2026-04-25)

Append a summary line here for each new cluster audited.
