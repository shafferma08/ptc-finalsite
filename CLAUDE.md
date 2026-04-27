# PTC Website Redesign — Project Context

This repo is the Pinellas Technical College website redesign. PTC is a career and technical college under the Pinellas County School Board (PCSB) with campuses in Clearwater and St. Petersburg. The live site runs on Finalsite Composer; this repo contains static HTML/CSS mockups + a content-migration pipeline that reconciles the live sites against the redesign cluster by cluster.

The user is Marianne Shaffer, transitioning fully to Distance Learning Coordinator and Webmaster in July 2026. She owns this redesign.

## Binding rules

These are non-negotiable. Read them before you write or edit anything in this repo.

1. **Redesign content comes from approved live PTC sites verbatim.** Do not invent stats, mission language, dates, expand protected categories, or paraphrase. If the redesign should say something the live site doesn't say yet, log it in `docs/audit/follow-ups.md` for the live-site owners. The redesign keeps the verbatim live wording until live is updated.
2. **Two-campus discipline.** Treat PTC as one institution with two distinct campuses. Every content topic must be classified as `shared` (same content, www-canonical, both campuses link to it), `campus-specific` (different content per campus), or `asymmetric` (exists on one campus, must decide whether to add to the other). This is mandatory at every IA stage.
3. **No em dashes in user-facing text.** Marianne doesn't like them. Use commas, periods, colons, or parentheses.
4. **Never send emails without explicit permission.** Drafting is fine. Sending requires Marianne to say "send it."
5. **Follow the PTC brand guide.** Colors and fonts are spelled out below.

## Brand

- Logo Green: `#008142`
- Logo Yellow: `#FFCF01`
- OWI-BIS Green: `#8DC63F`
- Fonts: Proxima Nova / Elizeth (Adobe) or Roboto / Roboto Slab (Google free alternatives). The redesign currently uses Roboto + Roboto Slab.
- Content style: AP style.
- The redesign uses a token-based `styles.css` with `--accent`, `--accent-light`, `--lift`, `--placeholder` modifiers and a canonical `.card` component (`__icon`, `__title`, `__body`, `__cta` inner classes plus `.card-grid` containers). Use the canonical component, not one-off card styles.

## Repo layout

- Top-level HTML files: redesign pages (e.g., `about.html`, `clearwater-about.html`, `stpete-about.html`, `welding-clearwater.html`, `consumer-information.html`, etc.)
- `_templates/program-page.html` — canonical program page template, 11 required + 10 optional modules
- `_templates/shell-{main,clearwater,stpete}.html` — campus shell templates
- `urgent-fixes/` — live-site fixes that aren't part of the redesign proper
- `docs/audit/` — content audit pipeline (see "Content audit pipeline" below)
- `docs/audit/follow-ups.md` — central register of live-site issues surfaced during audits, routed to PTC owners
- `docs/reviews/` — multi-agent review panel output, dated folders + `issues-tracker.md`
- `docs/ptc_sitemap.md` — current redesign sitemap
- `docs/progress-log.md` — append-only log of pipeline progress
- `.claude/agents/` — formal Claude Code subagents (8 review personas + 1 PM + 4 audit subagents)
- `.claude/skills/review-panel/` — orchestrates the persona panel
- `.claude/skills/content-audit/` — orchestrates the cluster audit pipeline

## Subagents available

Invokable by name via the Task tool. List them with `/agents`.

Review panel personas:
- `persona-prospective-student` — Jaylen, 19, mobile-first, first-gen
- `persona-current-student` — Maria, MA program, daily user
- `persona-parent-guardian` — Sandra, skeptical, paying
- `persona-faculty` — Robert, CNC instructor, directs students
- `persona-director` — Dr. Williams, accreditation + enrollment lens
- `persona-designer` — senior UI/UX, design system consistency
- `persona-accessibility` — WCAG 2.1 AA auditor
- `persona-finalsite-cms` — CMS feasibility check
- `review-pm` — synthesizes the 8 panel outputs into a consolidated report

Content audit subagents (Stage 3 of cluster audits):
- `audit-mapper` — produces `OVERLAP-MATRIX.md`
- `audit-comparator` — produces `REDESIGN-COMPARISON.md`
- `audit-ia-recommender` — produces `IA-RECOMMENDATION.md`
- `audit-verifier` — produces `VERIFICATION.md`

Dispatch the 4 audit subagents in a single message (multiple Task tool calls in one turn) so they truly run in parallel. Same for the 8 personas during a panel run.

## Content audit pipeline

The repo runs a queue-driven daily pipeline that reconciles live → redesign one cluster at a time.

- **Queue file:** `docs/audit/CLUSTERS.md` — Active queue, Backlog, Closed sections
- **Process contract:** `docs/audit/PROCESS.md` — stage-by-stage actions
- **Orchestrator:** `.claude/skills/content-audit/SKILL.md`
- **Daily scheduled task:** `ptc-content-pipeline-daily` (runs `PROCESS.md` for the next stage of the next cluster)
- **Drift watch:** weekly `ptc-live-drift-check` task re-fetches verified clusters

Stages: `queued` → `inventory` → `extracting` → `analyzing` → `synthesizing` → `building` → `verifying` → `verified` (drift-watched). Never advance more than one stage per run unless it's trivial.

**Current cluster status (2026-04-27):** About hubs `verified`. About sub-pages `queued`, runs next per Marianne. Then Compliance → Counselors → Admissions → Tuition → Programs.

## Review panel workflow

`.claude/skills/review-panel/SKILL.md` orchestrates two modes: mockup review (default, reads HTML files) and live site review (uses Chrome MCP). Outputs go to `docs/reviews/YYYY-MM-DD/` (or `-live`). Spawns the 8 persona subagents in parallel, then `review-pm` synthesizes. Updates `docs/reviews/issues-tracker.md`.

## Audit register

`docs/audit/follow-ups.md` is the central register. Anything we'd want to fix on the live site (rather than silently fixing it on the redesign) goes there. Categories typically: high-priority (compliance/legal), medium (content accuracy), low (polish). The pipeline never auto-merges follow-up items into the redesign.

## What lives outside this repo

- Top-level `C:\Users\mshaf\Documents\CLAUDE.md` has Marianne's full project portfolio (other roles, freelance work, finance, etc.). When Claude Code is run from anywhere under `C:\Users\mshaf\Documents`, that file is also loaded.
- The Project Manager agent at `C:\Users\mshaf\Documents\project-manager\` runs daily at 6:55 AM as a separate cross-project watchdog. It's not part of this repo.

## House rules for edits

- When editing redesign HTML, prefer the canonical components (`.card`, `.card-grid`, the program-page template) over one-off styles.
- When closing an audit follow-up, update `docs/audit/follow-ups.md` to mark it resolved with the date and a one-line resolution note.
- When running the content-audit pipeline, always update `CLUSTERS.md` row status and append a one-line entry to `docs/progress-log.md`.
- Suggested expansions of content (things you'd improve on the live site) go to `follow-ups.md`. Never silently insert.
- Two-campus classification (`shared` / `campus-specific` / `asymmetric`) is mandatory in every IA recommendation.
