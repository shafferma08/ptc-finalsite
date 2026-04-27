# Subagent Prompts — copy-adapt for Stage 3

Dispatch all 4 subagents in ONE message with 4 separate Agent tool calls (3 first + Verifier slightly delayed since Verifier reads Comparator's output). Each prompt is self-contained — subagents start fresh and have no conversation history.

Replace `<CLUSTER>` and `<CLUSTER-SLUG>` and `<REDESIGN-FILES>` per run.

---

## 1. Content Mapper

**subagent_type:** general-purpose
**description:** "Content Mapper for <CLUSTER> audit"

**prompt:**

> You are the Content Mapper subagent for the PTC website redesign audit. Your job is to produce a side-by-side overlap matrix across three live PTC sites for the **<CLUSTER>** content cluster.
>
> Read every file in these three directories:
> - C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\docs\audit\<CLUSTER-SLUG>\extracted\www\
> - C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\docs\audit\<CLUSTER-SLUG>\extracted\clearwater\
> - C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\docs\audit\<CLUSTER-SLUG>\extracted\stpete\
>
> Each file is a markdown extract from one live PTC subpage with frontmatter (source URL, title, scrape date, char count, notes). Count: ~30 files total.
>
> Produce ONE output file: `C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\docs\audit\<CLUSTER-SLUG>\OVERLAP-MATRIX.md`
>
> Structure:
> 1. **Topic-by-topic comparison table.** For each conceptual topic, row with: which sites have it, file size, identical/near-identical/different, 1-sentence verdict.
> 2. **Identical-content groups.** Topics where 2+ pages have byte-identical or near-identical content (consolidation candidates).
> 3. **Campus asymmetries.** Where one campus has content the other doesn't, or where one campus's data is significantly more current.
> 4. **PDF-wrapper inventory.** Which pages are pure PDF wrappers vs. substantive HTML. Note PDF revision dates flagged stale.
> 5. **IA red flags.** Structural problems with the live IA (deeply nested marketing assets, duplicate hubs, etc).
>
> Keep under 1200 words. Use tables freely. Be specific with file names and char counts.
>
> Report when done with a one-paragraph summary of top 3-5 findings.

---

## 2. Redesign Comparator

**subagent_type:** general-purpose
**description:** "Redesign Comparator for <CLUSTER> audit"

**prompt:**

> You are the Redesign Comparator subagent for the PTC website redesign audit. Your job is to compare every claim in the redesign's <CLUSTER> page(s) against the live source content and flag fabrications, missing content, and accurate pulls.
>
> Read these inputs:
> - The redesign page(s): <REDESIGN-FILES> (e.g., C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\about.html)
> - All extracted live content: C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\docs\audit\<CLUSTER-SLUG>\extracted\ (~30 markdown files across www/, clearwater/, stpete/ subdirs)
>
> For each substantive factual claim in the redesign (statistics, dates, quotes, contact info, accreditation, programs, etc.), classify as:
> - **VERBATIM** — redesign uses live wording exactly
> - **REWORDED-OK** — paraphrased but meaning preserved
> - **REWORDED-DRIFT** — paraphrased but meaning distorted or lost
> - **MISSING** — live has it, redesign doesn't
> - **FABRICATED** — redesign claims it, no live source supports it
> - **OUTDATED-LIVE** — both have it, live is more current
> - **OUTDATED-REDESIGN** — both have it, redesign is more current
>
> Pay close attention to high-stakes details: founding year, student counts, program counts, partner counts, accreditation bodies, mission/vision/values language, compliance categories, contact details, addresses, phone numbers.
>
> Produce ONE output file: `C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\docs\audit\<CLUSTER-SLUG>\REDESIGN-COMPARISON.md`
>
> Structure as a long table: Topic | Redesign Claim | Live Source (file path) | Live Wording | Status | Action Needed.
>
> Group by status — fabrications first (highest stakes), then missing, then drift, then verbatim/reworded-ok.
>
> End with quantitative summary (counts per status) and a top-5 priority list of fixes.
>
> Be honest — if a claim has NO matching live source, that's fabricated even if plausible. If unclear, flag for the Verifier rather than guess.

---

## 3. IA Recommender

**subagent_type:** general-purpose
**description:** "IA Recommender for <CLUSTER> audit"

**prompt:**

> You are the IA Recommender subagent for the PTC website redesign audit. Your job is to recommend the right information architecture for <CLUSTER> content in the redesign.
>
> Read these inputs:
> - The current redesign sitemap: C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\docs\ptc_sitemap.md
> - The current redesign <CLUSTER> page(s): <REDESIGN-FILES> (just skim structure)
> - The live cluster inventory: C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\docs\audit\<CLUSTER-SLUG>\inventory.md
> - All extracted live pages: C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\docs\audit\<CLUSTER-SLUG>\extracted\ (~30 files)
>
> Answer these questions:
> 1. **One page or split?** What's the right structure for the redesign?
> 2. **What gets consolidated?** Which live pages collapse into a single redesign page?
> 3. **What gets demoted out of <CLUSTER>?** Marketing assets, sitewide legal, etc. that don't belong in this cluster.
> 4. **What gets promoted INTO <CLUSTER>?** Content currently elsewhere that should land here.
> 5. **When does one page get too long?** Apply the rule: ~3000 words / 8 sections with sticky in-page nav, ~1500 words / 4 sections without. Estimate where the consolidated page lands.
> 6. **Concrete sitemap proposal.** Tree showing exactly what cluster-related pages should exist in the redesign.
>
> Produce ONE output file: `C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\docs\audit\<CLUSTER-SLUG>\IA-RECOMMENDATION.md`
>
> Structure: TL;DR (3-5 bullets) → Reasoning → Proposed sitemap (tree) → Per-topic content placement table → Risks and trade-offs → Migration order.
>
> Keep under 1500 words. Be opinionated; the goal is a concrete recommendation Marianne can accept or reject, not a survey of options.

---

## 4. Verifier (dispatch in same message, but expects Comparator output to exist)

**subagent_type:** general-purpose
**description:** "Verifier for <CLUSTER> audit"

**prompt:**

> You are the Verifier subagent for the PTC website redesign <CLUSTER> audit. Your job is to independently re-check the high-stakes claims flagged by the Comparator subagent. You have NOT seen the Comparator's report — you'll read it now and independently verify.
>
> Read these inputs in order:
> 1. The Comparator's report: C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\docs\audit\<CLUSTER-SLUG>\REDESIGN-COMPARISON.md
> 2. The redesign page(s): <REDESIGN-FILES>
> 3. The live extracts: C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\docs\audit\<CLUSTER-SLUG>\extracted\
>
> For each row in the Comparator's report marked **FABRICATED**, **MISSING**, or **REWORDED-DRIFT**, do an independent re-check:
> 1. Re-read the relevant section of the redesign page and quote what's actually there
> 2. Re-read the relevant live extract file and quote what live actually says
> 3. Confirm or flip the Comparator's verdict
>
> Pay extra attention to claims with legal/compliance stakes: accreditation language, non-discrimination categories, founding year, statistics published elsewhere, mission/vision/values.
>
> ALSO spot-check 3 random rows the Comparator marked VERBATIM or REWORDED-OK to catch over-confidence.
>
> Produce ONE output file: `C:\Users\mshaf\Documents\PTC\Website\ptc-finalsite\docs\audit\<CLUSTER-SLUG>\VERIFICATION.md`
>
> Per re-checked claim: claim | Comparator's verdict | your verdict (CONFIRM / FLIP / NEEDS-MORE-RESEARCH) | direct quotes from both sources | one-sentence flip explanation if applicable.
>
> End with: count of confirmed vs flipped vs needs-more-research, confidence assessment of overall Comparator output, and any new issues you found that the Comparator missed.
>
> Keep under 1500 words. Be a skeptical reader. The goal is to catch false positives in flagged fabrications and false negatives in unflagged content.

---

## Dispatch tip

In the orchestrator (you), send all 4 Agent tool calls in a single message. Even though the Verifier depends on the Comparator's output, the agents start in parallel — by the time the Verifier reads its inputs, the Comparator's file should be done (the Comparator is fast since it just reads ~30 small files). If the Verifier reports "REDESIGN-COMPARISON.md not found", re-dispatch just the Verifier.

If you want sequential safety, dispatch Mapper + Comparator + IA Recommender in one message, then dispatch Verifier ~30 seconds later in a follow-up message after confirming Comparator wrote its file.
