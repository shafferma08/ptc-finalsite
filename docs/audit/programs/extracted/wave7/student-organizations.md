# Stage 2 Digest — Career | Technical Student Organizations

**Wave:** 7 (Adult Ed & Pathways)
**Slug:** `career-technical-student-organizations` (same slug on both campus subsites)
**Page type:** Informational (NOT an OCP program page)
**Redesign file:** `student-organizations.html` (repo root)
**Date:** 2026-06-11

## Sources
- CLW: https://clearwater.myptc.edu/programs/career-technical-student-organizations (extract: `clw-student-orgs.raw.html`)
- STP: https://stpete.myptc.edu/programs/career-technical-student-organizations (extract: `stp-student-orgs.raw.html`)

## Two-campus classification: SHARED (with one CLW-only asymmetric org)

The substantive content (`fsPageContent`) is essentially identical between campuses. Both list the same four organizations with **byte-identical** descriptions:

1. **Future Business Leaders of America - Phi Beta Lambda (FBLA-PBL)**
2. **National Technical Honor Society** (NTHS)
3. **SkillsUSA**
4. **Society of Manufacturing Engineers - SME**

The only material differences:
- **Heading line.** CLW opens with "PTC - Clearwater Career | Technical Student Organizations"; STP opens with "PTC - St. Petersburg Career | Technical Student Organizations". (Campus label only; chrome-level, not a substantive content difference.)
- **PTC Clearwater - Student Council** — present on CLW only. STP has no Student Council org in its content. This is an `asymmetric` item.

Decision: build ONE shared institutional page (main/www chrome model), since the difference is small. The four shared orgs are the core. Student Council is included and tagged with a Clearwater campus badge to mark it as the CLW-only organization, rather than splitting into two files. Logged as a follow-up so the campuses can decide whether STP wants its own student council listing.

Both campus subsite secondary navs also list child pages (FBLA-PBL, NTHS, SkillsUSA, [CLW only: PTC Clearwater - Student Council], Society of Manufacturing Engineers - SME) but those are nav/chrome, not page content. The redesign page is a single hub; per-org sub-pages were not in scope for this build and the live sub-pages were not extracted.

## Sections present on live (the only sections; nothing else exists)
- A green-text campus heading line
- Five org descriptions on CLW (four on STP)

No hero image, no contacts/advisors, no meeting times/locations, no officer names, no CTAs, no forms. Nothing else was on the page to carry over.

## Hero status
**No hero image.** Neither extract has any image in the `fsPageContent` region (the only images in the raw HTML are header/footer logo chrome and the Pinellas County footer background). Built a clean text hero (green gradient, matching `tuition-aid.html`'s `.page-hero` model). Nothing curled to `assets/images/content/`.

## Contacts / advisors
None present on live. Nothing to carry verbatim.

## Typos fixed (reported per verbatim-rule.md)
- None. The org descriptions contain no spelling or word-level errors. (Live uses double spaces between sentences inside the `<span style="font-size:12pt">` blocks; collapsed to single spaces in the redesign as standard HTML whitespace normalization, not a content change.)

## Links preserved
- Live content body contained no hyperlinks. (Org names are plain text on live; no external links to FBLA, NTHS, SkillsUSA, or SME.) Redesign "Explore Programs" CTA points to `programs.html` per task spec.

## Follow-ups (logged to docs/audit/follow-ups.md)
- STP has no Student Council listing while CLW does. Decide whether STP should add a St. Petersburg student council (or whether the shared page's Clearwater-tagged council is acceptable).
- Live org descriptions are plain text with no links to the national orgs (FBLA-PBL, NTHS, SkillsUSA, SME). Consider adding official org links on live; redesign cannot add unsourced links.

## Em dash check
ZERO body em dashes. The hyphens in org names ("Phi Beta Lambda", "Society of Manufacturing Engineers - SME", "PTC Clearwater - Student Council") are spaced hyphens carried verbatim from live, not em dashes. The only em dash is in the `<title>` (the approved title pattern).
