# PTC Cluster Audit Process

This is the recipe every content cluster goes through on its way from "live PTC site" to "verified redesign content." It's a thin wrapper around the `content-audit` skill (`.claude/skills/content-audit/SKILL.md`) that adds the queue-management piece: which cluster runs next, and how the queue file (`CLUSTERS.md`) gets updated as work advances.

The skill knows HOW to audit a cluster. This file knows WHICH cluster, IN WHAT ORDER, and WHEN TO STOP.

---

## How the daily pipeline picks work

Every run of `ptc-content-pipeline-daily`:

1. Read `CLUSTERS.md`.
2. Pick the **first row in the Active queue** whose status is anything other than `verified` or `blocked`.
3. Look up the row's current stage and run the next stage's task (defined below).
4. Update the row's status, "Last touched" date, and any notes.
5. Append a one-line summary to `docs/progress-log.md`.
6. Stop. Don't try to do multiple stages in one run unless a stage finishes in <2 min and the next stage is also lightweight (e.g., a blocked row clearing).

If every Active row is `verified` or `blocked`, the pipeline promotes one row from Backlog into Active by sizing it (filling in live hubs and redesign targets), then stops without running a stage on it.

---

## Stage-by-stage actions

Each stage maps to specific work the daily can do. The `content-audit` skill describes each in detail; this is the queue-driven entry point.

### `queued` → run inventory

Invoke the `content-audit` skill, Stage 1. Output: `docs/audit/<cluster>/inventory.md`. Update `CLUSTERS.md` row to `extracting` and record live hub URLs found.

**Stage 1 binding rule (added 2026-04-30):** Do not infer live-site URLs from logical hierarchy or campus parallels. The PTC live site has chaotic Finalsite URLs. A 404 on a guessed URL is not evidence the content is absent — it's evidence the guess was wrong. Every Stage 1 must include a per-subsite discovery pass (www + clearwater + stpete) before declaring "no [topic] content on [subsite]." Discovery toolkit, in order of effectiveness:

1. **Per-subsite Google `site:` search** with cluster keywords (e.g., `site:www.myptc.edu admissions OR enrollment OR FAFSA`). Note: `site:` filter is fuzzy on subdomains, so even when scoping to www the results often surface campus-subdomain pages too. Use it as a starting list, not a complete list.
2. **`sitemap.xml`** on each subsite. All three PTC subsites return 404 on `sitemap.xml` as of 2026-04-30, so this is currently zero-yield, but check each cluster in case it changes.
3. **Brute-force slug probing** with `curl -sI -A "Mozilla/..." -o /dev/null -w "%{http_code}"` against likely topical slugs under `/resources/`, `/resources/future-students/`, `/about-us/welcome-to-ptc/`, and any URL the redesign sitemap or another cluster's extracts reference.
4. **Marianne pointer** — if Marianne knows a specific URL exists, that's the highest-confidence input. Stage 1 should explicitly ask if she has any in mind for the cluster.

The cost of this rule: ~5 minutes per cluster, vs. the cost of getting it wrong (Admissions cluster 2026-04-30 had to be patched mid-Stage-4 when Marianne pointed to a www admissions page Stage 1 had missed; many Comparator FABRICATED verdicts had to be re-reconciled against the new source).

### `extracting` → run extraction

Invoke `content-audit` skill, Stage 2 (Chrome MCP extraction). Save to `docs/audit/<cluster>/extracted/{www,clearwater,stpete}/<slug>.md`. If Chrome MCP is unavailable in the scheduled-task environment, set status to `blocked` with note `"awaiting Chrome MCP — needs an interactive session"` and stop. Otherwise, update to `analyzing`.

### `analyzing` → dispatch 4 parallel subagents

Invoke `content-audit` skill, Stage 3. **Critical:** all 4 subagents (Mapper, Comparator, IA Recommender, Verifier) must be dispatched in a single message with multiple Agent tool calls so they truly run in parallel. Read prompts from `.claude/skills/content-audit/references/subagent-prompts.md`. When all 4 outputs land, update status to `synthesizing`.

### `synthesizing` → write RECOMMENDATIONS.md

Invoke `content-audit` skill, Stage 4. Read all 4 subagent outputs, produce a single `docs/audit/<cluster>/RECOMMENDATIONS.md` punch list. Update status to `building`.

### `building` → edit redesign HTML to match the punch list

This is the only stage where redesign files actually change. For each item in the RECOMMENDATIONS punch list:

For practical interpretation of the verbatim rule when live is missing, wrong, or owned by Marianne, see `docs/audit/verbatim-rule.md`.

- **Fabrications** — replace fabricated wording with verbatim live wording. Always.
- **Missing** — add the live content if the IA decision says it belongs on the redesign page; otherwise skip and link to live.
- **Drift** — replace reworded-drift wording with verbatim live wording.
- **Live-site issues** — do NOT silently fix on the redesign. Add to `follow-ups.md`. The redesign keeps the verbatim live wording until live is updated.
- **Asymmetries** — apply the IA classification (`shared` / `campus-specific` / `asymmetric`). Each campus must be able to find its own information without confusion, even when content is shared.

When the punch list is empty, update status to `verifying`.

### `verifying` → re-run Verifier subagent against final redesign

Dispatch ONE subagent (the Verifier, again) to confirm every redesign page now matches the relevant `extracted/` content. Spot-check at least 5 random claims. If clean, update to `verified`. If not, log new items at top of RECOMMENDATIONS.md and bounce back to `building`.

### `verified` → cluster is done; goes into drift-watch

Pipeline does nothing further on `verified` rows except check the "Last touched" date. After 30+ days without a drift event, consider archiving to a "Closed" section in CLUSTERS.md.

### `drift` → flagged by drift-check, awaiting Marianne

Pipeline reads `<cluster>/DRIFT-LOG.md`, summarizes diffs in the daily report to Marianne, and stops. **Never auto-update extracted/ or redesign pages from a drift event.** Marianne reviews and either:
- approves the drift → pipeline updates `extracted/`, sets cluster back to `synthesizing` so a fresh RECOMMENDATIONS run picks up changes
- rejects the drift → pipeline notes "live owner needs to fix" in `follow-ups.md`, returns cluster to `verified`

### `blocked` → human action needed

Pipeline reports the block in the daily and skips. Common blocks: needing Chrome MCP, missing live URL, waiting on Marianne to choose between two IA options, waiting on a campus owner to confirm content ownership.

---

## Two-campus discipline (mandatory at every IA stage)

Every cluster's IA-RECOMMENDATION.md must classify each topic as `shared`, `campus-specific`, or `asymmetric`. This is non-negotiable because the redesign has to serve someone who comes in browsing only Clearwater or only St. Pete and shouldn't have to pick through institution-wide pages to find their campus's specifics.

If the classification is `shared` (e.g. M/V/CV), the redesign places the content on `about.html` and links from both `clearwater-about.html` and `stpete-about.html`.

If `campus-specific` (e.g. counselors, schedule), the redesign places it on each campus's page with no shared canonical.

If `asymmetric` (e.g. STP Code of Conduct, no CLW equivalent), the cluster's `RECOMMENDATIONS.md` must record the decision: do we ask CLW for an equivalent (live-site follow-up), or accept the asymmetry?

---

## What the pipeline DOES NOT do

- It doesn't invent content. Ever. Verbatim from live, period.
- It doesn't move work between clusters. Each cluster's audit stays in that cluster's folder.
- It doesn't auto-merge `follow-ups.md` items into the redesign — those are owner asks, not redesign tasks.
- It doesn't change `CLUSTERS.md` queue order. Marianne sets the order.
- It doesn't run more than one stage per day on the same cluster (with the small exception above for trivial transitions).

---

## What to put in the daily progress report

Each daily run should produce a short report in chat (and append to `docs/progress-log.md`):

1. Cluster name and stage advanced (e.g., "About sub-pages: `queued` → `extracting`")
2. What artifact got produced (with path)
3. Anything that needs Marianne (blockers, decisions, drift)
4. Next cluster the pipeline will pick up tomorrow (preview)

Keep it under 8 lines. The artifacts are the deliverable, not the report.
