# Wave 7 — Adult Ed & Pathways (plan, 2026-06-11)

Surfaced when checking whether the `#` Explore nav items have live pages. They do. Raw captures in `extracted/wave7/`.

## Live pages (all ~65-73KB, real content)
| Topic | CLW slug | STP slug |
|---|---|---|
| Dual Enrollment | dual-enrollment-ptc-clearwater | dual-enrollment-ptc-st-petersburg |
| ABE/GED | clearwater-abe-ged-asb | abe-ged-lakewood-community |
| ESOL | esol-ptc-clearwater | esol-lakewood-community |
| Distance Learning | distance-learning-ptc-clearwater (+ cost sub-page) | distance-learning-ptc-st-petersburg (+ cost sub-page) |
| Student Orgs | career-technical-student-organizations (same slug both campuses) | (same) |

## Build treatment
- These are informational pathway pages, NOT OCP programs: include ONLY the sections live has (no forced course-sequence / FLRTW / program-code modules). Verbatim per binding rules.
- Per-campus pages: dual-enrollment, ABE/GED, ESOL, Distance Learning (campus chrome). ABE/GED + ESOL are clearly campus-distinct (CLW ASB vs STP Lakewood Community).
- Distance Learning: fold the "what is the cost of distance learning classes" sub-page in as a Cost section (like Fire Fighting's CPAT/FireTEAM folding). **Distance Learning is Marianne's incoming coordinator domain** — build verbatim, flag for her likely expansion (route expansions to follow-ups, do not invent).
- Student Organizations: shared slug on both campuses; build ONE institutional page (builder confirms CLW vs STP content match; if materially different, split).

## Redesign filenames
dual-enrollment-clearwater.html, dual-enrollment-stpete.html, abe-ged-clearwater.html, abe-ged-stpete.html, esol-clearwater.html, esol-stpete.html, distance-learning-clearwater.html, distance-learning-stpete.html, student-organizations.html (institutional).

## Nav / IA (decide after build)
The institutional Programs > Explore dropdown items (Dual Enrollment, Distance Learning, ABE/GED/ESOL, Student Orgs) are per-campus, so single dropdown links are ambiguous (same issue as apprenticeships). Options: point each to the CLW page (cross-linked to STP), or fold this whole set into the "Apprenticeships & Workforce" area / a parallel "Adult Education & Pathways" grouping. Propose to Marianne after the pages exist.

## Batching (session-limit safety)
Batch 1: 4 CLW pages + Student Organizations (5 agents). Batch 2: 4 STP pages (4 agents).
