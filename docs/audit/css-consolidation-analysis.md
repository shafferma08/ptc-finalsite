# Program-page CSS consolidation (M5/M6) — analysis + why a scripted sweep was reverted

**Date:** 2026-06-11. **Status:** analysis complete; automated consolidation ATTEMPTED then REVERTED (no harm; reverted to committed HEAD). Recommend a verified approach (below).

## The problem (real, worth fixing)
The 73 program pages each carry a ~11-13 KB page-local `<style>` block duplicating the program-page chrome (hero, stat-bar, jump-nav, video-card, accordion, FLRTW, credential-card, aid-banner, etc.). Measured duplication: **~600 KB across the repo**, ~4,700 duplicated rule-instances, ~93 rules shared by >=8 pages. This is the designer's M5/M6 and the CMS persona's "the template isn't really a template" finding.

## Why a naive scripted lift-and-strip is NOT safe
1. **Heavy drift:** the 73 blocks normalize to **50 distinct signatures**. Same selector, different values across pages (e.g., `.program-hero__text { padding: 4rem ... }` vs `3.5rem`). You cannot satisfy all pages with one global rule, and globalizing one variant silently changes pages that had another.
2. **Cross-contamination:** generic class names (`.info-card`, `.label`, `.breadcrumb-bar`, `.pdf-card`, `.resource-grid`, `.counselor-card`, `.action-buttons`) are also used on non-program pages — some without local overrides (e.g., `.label` on index.html). Globalizing the program-page version can restyle other page types.
3. **Verification gap:** removing a rule from a page and "adding it to styles.css" only renders identically if the global version is byte-equivalent AND wins the cascade. With drift + duplicate selectors, that needs **browser-rendered visual regression testing**, which this environment can't cheaply do. A scripted attempt on 2026-06-11 removed ~3,500 rule-instances but left at least the base `.program-hero` (gradient/white-text) rule undefined on ~71 pages; static checks gave contradictory results, so it was reverted via `git checkout HEAD`.

## Recommended approach (when this is done properly)
Pick ONE:
- **A. Normalize first, then consolidate.** Converge all 73 program pages to ONE byte-identical canonical block (kills drift), THEN lift that single block to styles.css and strip pages. Each step visually verified on a sample per campus.
- **B. Do it during the Finalsite Composer build (CMS persona's rec).** In Composer the program page becomes a reusable layout/element with editable fields; the shared CSS lives once in the theme. The per-page `<style>` duplication disappears naturally on migration, with the CMS preview as the verification surface. This is likely the right time to do it (July build) rather than in static mockups.

Either way: scope to program-DISTINCTIVE selectors only (exclude the generic shared classes listed above), and verify rendering, don't trust static rule-diffing alone.

## Data captured (for the next attempt)
- 73 program pages, 50 style-block signatures, 329 distinct rules, 93 shared by >=8 pages.
- Cross-contamination denylist (classes used on other page types): breadcrumb-bar*, info-card, pdf-card, pdf-icon, resource-grid, counselor-card, counselor-avatar, action-buttons, label.
- Program-distinctive (safe-ish) component selectors: program-hero*, stat-bar*, jump-nav*, video-card*, accordion-item*, flrtw-block*, start-steps*, step-btn*, credential-card*, credential-stack, aid-banner*, session-callout*, teas-callout, cohort-card*, hero-counselor-nudge*, licensure-disclosure*, program-related-callout*.
