# Counselors Cluster — IA Recommendation (Stage 3)

**Generated:** 2026-04-30
**Subagent:** audit-ia-recommender
**Inputs:** `inventory.md`, 10 verbatim extracts (5 CLW, 5 STP), redesign sitemap, `welding-advanced.html`, `_templates/program-page.html`, `contact.html`

---

## TL;DR

- **Recommend Option B (variant): per-campus counselor index pages.** Add `clearwater-counselors.html` and `stpete-counselors.html`. Inline counselor card stays primary on every program page. No institutional `counselors.html` on www.
- **Kill the dual-counselor pattern on `welding-advanced.html`.** It is a fabrication. Live publishes one counselor per campus per program (Valerie Santos at CLW, Cheri Ashwood at STP). Replace with a campus-split layout that mirrors `welding-stpete.html` + `welding-clearwater.html`, each with one counselor.
- **Generic "Talk to a Counselor" CTAs route to the campus index page when campus context exists, otherwise to a campus chooser.** Stop landing them on `contact.html`. Contact page keeps a slim counselor mention with deep link to both campus indexes.
- **Counselor-program mapping is `campus-specific` and authored, not derived.** Live does not publish it anywhere unified. Marianne owns the source of truth (a small spreadsheet or CMS list per campus). The redesign reflects that ownership; we do not pretend the live site is the canonical store.
- **Index page volume is low and stable: 5 counselors at CLW, 3 at STP. Maintenance is one row per counselor when assignments shift, plus phone-extension verification once per refresh.** Worth the lift.

---

## Reasoning

**Why not Option A (status quo, no index).** Live buries counselors at row ~10 of a 100+-row staff table under a collapsed "Student Services" section. A prospective student who is not yet attached to a specific program cannot find a counselor without already knowing the program. The redesign is being asked to do better. An index page removes one click and one scroll-of-shame from every "I want to talk to someone" path. Cost is low because counselor headcount is small.

**Why not Option C (single institutional `counselors.html`).** Violates two-campus discipline. Each campus runs its own counseling team, and the institutional www has zero counselor presence on live. Inserting a single combined index would invent a www-canonical that does not exist and would force a maintainer to keep three places in sync (CLW page, STP page, www combined). It also blurs which counselor a student actually goes to, which matters because counselors are tied to physical campus locations and program assignments.

**Why not Option D (counselor module on About pages).** The About cluster just closed clean with a slim, identity-focused structure. Stuffing 5 counselor cards into `clearwater-about.html` re-bloats it. About is for accreditation, history, leadership. Counselors are a wayfinding tool, not an identity statement. Keep them in their own page.

**Why dedicated index pages instead of just the inline cards.** The inline card on each program page is the right primary placement (matches live, gives ground-truth contact at the moment of program interest). But it only works if the user already picked a program. The 4-5 generic "Talk to a Counselor" CTAs on `admissions.html`, `tuition-aid.html`, `welding-advanced.html`, and `contact.html` need a destination that is not "guess your program first." That destination is the campus index.

**Phone extensions stay on program pages, get added to the index.** Live publishes extensions inline on program pages (Santos x2017, Ashwood x2325). The other 6 counselors' extensions are not yet extracted. The campus index can list every counselor with their currently-known extension; for the 6 unknowns, we either ask Marianne to confirm or ship with email-only and add extensions in a follow-up pass. Do not invent.

**Page-length test.** A campus index with 5 counselor cards (CLW) at ~80 words each is ~400 words plus header + intro + CTA band. Well under the 1,500-word / 4-section threshold. No sticky nav needed. Single-screen-ish on desktop, scroll on mobile. STP at 3 cards is even shorter.

---

## Proposed sitemap (counselor-related slice)

```
myptc.edu/ (institutional)
└── (no counselors page)
    contact.html
        └── slim "Connect with a Counselor" block
            ├─→ clearwater-counselors.html
            └─→ stpete-counselors.html

clearwater.myptc.edu/
├── clearwater-counselors.html  ← NEW
│   ├── 5 counselor cards (Corthell, Fields, Milisav, Santos, Scott)
│   │   └── per card: name, title, email, ext (when known), programs covered
│   ├── "Not sure who to contact?" general inquiry block
│   └── CTA: visit student-services-and-hours
└── (each program page) → inline counselor card (primary placement)

stpete.myptc.edu/
├── stpete-counselors.html  ← NEW
│   ├── 3 counselor cards (Ashwood, Johnson, Randolph)
│   │   └── per card: name, title, email, ext (when known), programs covered
│   ├── "Not sure who to contact?" general inquiry block
│   └── CTA: visit student-services-hours
└── (each program page) → inline counselor card (primary placement)

welding-advanced.html  ← FIX
├── Section: "Choose your campus"
│   ├── Clearwater card → links to welding-clearwater.html with single counselor (Santos)
│   └── St. Pete card → links to welding-stpete.html with single counselor (Ashwood)
└── Remove existing dual-counselor-on-one-page block entirely
```

---

## Per-topic content placement

| Topic | Two-campus class | Lives on | Source of truth | Notes |
|---|---|---|---|---|
| Counselor list (who works at each campus) | `campus-specific` | `clearwater-counselors.html` and `stpete-counselors.html` | Live staff directory Student Services section | Mirror live exactly: name, email casing, title "Counselor" |
| Counselor-program mapping | `campus-specific` | Same campus index pages, plus inline on each program page | **Marianne (no live canonical)** | Audit follow-up: ask each campus to publish this on the live staff directory or in an internal sheet PTC owns |
| Phone extensions | `campus-specific` | Inline on program pages (live pattern); echoed on campus index when known | Live program pages | Santos x2017 and Ashwood x2325 verbatim-confirmed; other 6 extensions are open follow-ups |
| Generic "Talk to a Counselor" CTA | `shared` (the prompt) routing to `campus-specific` (the destination) | CTA exists on admissions, tuition-aid, contact, program hubs; lands on campus index | n/a | When campus context is unknown, CTA shows campus chooser before linking |
| Counselor card module on program pages | `campus-specific` (one card per program, single counselor) | Each program page (single-campus); `welding-clearwater.html` + `welding-stpete.html` separately for cross-campus programs | Live program pages | Use the canonical `.counselor-card` from `_templates/program-page.html`. Drop the `.counselor-card--dual` class entirely from this cluster's scope |
| Welding Advanced presentation | `asymmetric` in name only; effectively two parallel `campus-specific` programs | `welding-advanced.html` becomes a campus chooser; counselor data lives on the per-campus welding-advanced pages | Live: two separate program pages, one counselor each | This is the IA tension point. Resolution: chooser, not dual-display |
| Institutional counselor page on www | n/a | Does not exist | n/a | Do not create |
| Staff directory (full) | `campus-specific` | Existing campus staff pages (out of scope for this cluster) | Live | Counselor index page is a *focused subset*, not a replacement |

---

## Risks and trade-offs

1. **Maintenance overhead.** Two new pages, 8 counselor cards, plus the program-counselor mapping. Realistic update cadence: when a counselor leaves or a program reassigns. CLW has had 5 counselors for at least the current snapshot; this is not a high-churn list. Mitigation: keep card markup minimal, no photos in v1 (live has no counselor photos either), add a single "last reviewed" footer date per page.
2. **Counselor-program mapping accuracy.** Live publishes only the per-program mapping (program page → counselor name), never the reverse. If we list "Programs covered" on each counselor card and a program reassigns without us knowing, the index goes stale and the program page does not. Mitigation: treat the program page card as ground truth; index page rebuilds from program pages, not from a separate list. Consider a simple data file (`data/counselors.json`) that program pages and the index both read from, so there is one source.
3. **Wayfinding ambiguity for prospective students who do not know their campus.** Solved by the chooser pattern on shared CTAs. The cost is one extra click for users without campus context, but it is the honest cost of being a two-campus institution and beats sending them to a misleading combined list.
4. **Welding Advanced fix is visible.** Removing the dual-counselor section from `welding-advanced.html` is a noticeable UI change. Anyone who reviewed prior mockups will ask. Document the rationale in `follow-ups.md` resolution note: the live site does not run Welding Advanced as a single dual-counselor program; it is two separate campus programs that share a CIP code and curriculum.
5. **`clearwater-about.html` and `stpete-about.html` already have a "Faculty & Staff Directory" link.** The counselor index is a separate destination, not a child of the staff directory. The campus About page can carry both: "Faculty & Staff Directory" (full staff) and "Meet Your Counselors" (focused subset). Two doors into the staff data, not a duplication problem.
6. **Phone-extension data quality.** Only 2 of 8 verified verbatim today. Index pages can ship with email-only for the unknown 6 and add extensions as Marianne confirms. Better to be incomplete and accurate than to invent.

---

## Migration order for Stage 6 (build)

Execute top-to-bottom. Each step is one commit.

1. **Strip dual-counselor block from `welding-advanced.html`.** Remove the section at L844-L893 (both `.counselor-card` blocks under `id="counselor"`). Replace with a "Choose your campus" two-card chooser that links to `welding-clearwater.html` and `welding-stpete.html`. Update the hero counselor nudge (L611) and the bullet at L665 to reflect the chooser model. Do not invent a single-counselor card here; this page is institutional/cross-campus and counselor cards belong on the per-campus pages.
2. **Audit and confirm program-counselor mapping for all programs at both campuses.** Author follow-up: Marianne (or designee) confirms which counselor handles which program, per campus. Result lives in `data/counselors.json` (or equivalent) + `follow-ups.md`. This unblocks step 4. Do not proceed without it for any program beyond welding.
3. **Build `clearwater-counselors.html` and `stpete-counselors.html`** using the canonical `.card` / `.card-grid` pattern. Each card: name, "School Counselor" title, email (preserving live casing), phone extension when known, list of programs covered. Page intro pulls campus address + phone (verbatim from live). Footer CTA links to the existing student-services-hours page on each campus. Add breadcrumbs.
4. **Update inline counselor cards on existing redesign program pages** (`welding-clearwater.html`, `welding-stpete.html`) to use the canonical single-counselor `.counselor-card` from `_templates/program-page.html`. Drop any `.counselor-card--dual` styling references from program pages in this cluster's scope.
5. **Re-route generic "Talk to a Counselor" CTAs.**
   - `admissions.html` (5+ CTAs): point to a campus chooser modal or anchor section that splits to the two campus indexes.
   - `tuition-aid.html` "financial aid counselors" mentions: leave the generic CTA pointing to financial aid contact; counselor CTA goes to campus chooser.
   - `contact.html` L805: keep the sentence verbatim ("Our counselors are here to guide you every step of the way") but add two clear links to `clearwater-counselors.html` and `stpete-counselors.html`.
6. **Remove the consumer-information.html L725 placeholder comment** ("via the Counselors cluster when sized") once steps 1-5 are merged. Counselors do not appear on consumer-information; the comment is stale.
7. **Update `docs/ptc_sitemap.md` Part 3** to add the two new campus pages under each campus block ("ABOUT THIS CAMPUS" or "STUDENT SERVICES" sub-area; recommend a new top-level "COUNSELORS" entry under each campus to mirror the new nav surface).
8. **Wire campus nav.** Add "Meet Your Counselors" item to the Clearwater and St. Pete site navs (under Admissions or as a peer to Student Services & Hours, matching where each campus's existing IA puts counselor-adjacent content).
9. **Drift-check entries.** Add the two new campus index URLs and the live staff-directory URLs to the Counselors row in `CLUSTERS.md` so the weekly drift check picks them up after the cluster goes `verified`.

---

## Open follow-ups for `docs/audit/follow-ups.md`

- Live counselor-program mapping is not published anywhere unified. Ask each campus to surface the mapping (either on the staff directory or a new live page) so the redesign index has a public source of truth instead of relying on Marianne's working knowledge.
- 6 of 8 counselor phone extensions are not verbatim-confirmed. Source: extract from each program page in the Programs cluster, or ask each counselor directly.
- Live staff-directory email casing is inconsistent (`SCOTTME@pcsb.org` vs `corthellk@pcsb.org`). Verbatim rule says preserve as published. Note in `follow-ups.md` as a low-priority live-site cleanup item, not a redesign change.
