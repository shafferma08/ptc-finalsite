# Counselors Cluster — Inventory (Stage 1)

**Generated:** 2026-04-30
**Method:** WebFetch scout of www / clearwater / stpete hubs (Chrome MCP not available this session). myptc.edu is Finalsite-hosted; WebFetch returns clean nav data on this domain. Stage 2 verbatim extraction can use curl + parse on the same URLs.

---

## Headline finding

**Counselors do not have dedicated pages on the live PTC sites.** They appear as rows in each campus's collapsible staff directory under a "Student Services" section. There is no per-counselor profile page, no programs-they-handle mapping, and no individual phone extensions published.

This shapes the IA decision before we even start: the redesign is being asked to surface counselor information that live currently buries inside a 100+-row staff table.

---

## Live URLs (Stage 2 work queue)

### www.myptc.edu

| URL | Type | Notes |
|---|---|---|
| (none) | — | No institution-level counselor page or staff directory exists on www. |

### clearwater.myptc.edu

| URL | Type | Notes |
|---|---|---|
| `https://clearwater.myptc.edu/ptc-clearwater-campus-staff` | Staff directory (collapsible tabular sections) | 6 sections; counselors are inside the **Student Services** collapse |
| `https://clearwater.myptc.edu/admissions/student-services-and-hours` | Probable hours/contact page | URL exists in main nav. Needs extraction to see if counselors are also surfaced here |
| `https://clearwater.myptc.edu/admissions/admissions` | Admissions hub | Possible counselor mentions / CTAs |

### stpete.myptc.edu

| URL | Type | Notes |
|---|---|---|
| `https://stpete.myptc.edu/st-petersburg-campus-staff` | Staff directory (collapsible tabular sections) | 5 sections; counselors are inside the **Student Services** collapse |
| `https://stpete.myptc.edu/admissions/student-services-hours` | Probable hours/contact page | URL exists in main nav (note: STP slug is `student-services-hours` without the "and") |
| `https://stpete.myptc.edu/admissions/admissions` | Admissions hub | Possible counselor mentions / CTAs |

**Total Stage 2 URLs:** 6 (3 per campus, none on www)

---

## What WebFetch already surfaced

### Counselors at PTC-Clearwater (5)

Source: `clearwater.myptc.edu/ptc-clearwater-campus-staff` → Student Services section

| Last, First | Email | Title |
|---|---|---|
| Corthell, Kimere | corthellk@pcsb.org | Counselor |
| Fields, Yata | fieldsy@pcsb.org | Counselor |
| Milisav, Lidija | milisavl@pcsb.org | Counselor |
| Santos, Valerie | santosv@pcsb.org | Counselor |
| Scott, Merritt | SCOTTME@pcsb.org | Counselor |

### Counselors at PTC-St. Petersburg (3)

Source: `stpete.myptc.edu/st-petersburg-campus-staff` → Student Services section

| Last, First | Email | Title |
|---|---|---|
| Ashwood, Cheri | ASHWOODC@pcsb.org | Counselor |
| Johnson, Jeromy | JOHNSONJER@pcsb.org | Counselor |
| Randolph, Nancy | randolphn@pcsb.org | Counselor |

### Campus contact data

- Clearwater: 6100 154th Ave N, Clearwater, FL 33760 | (727) 538-7167
- St. Petersburg: 901 34th St S, St. Petersburg, FL 33711 | (727) 893-2500

**Per-counselor phone extensions are NOT published on live.** Memory has Cheri Ashwood at x2325 (Welding St. Pete program contact), but that extension isn't on the live staff page.

---

## Pattern observations

1. **Staff directory model, not counselor index.** Live publishes counselors as rows in a 100+-row campus staff table. No photos, no bios, no programs-they-handle, no individual phone extensions. Just last name, first name, email, title.
2. **Campus-specific is correct (per CLUSTERS.md row 4).** Each campus has its own staff page. There is no institutional-level counselor list on www.
3. **5+3 = 8 total counselors.** CLW has more counselors than STP (5 vs 3) — possibly reflects CLW's larger student headcount, or a different role split between counselors and student services staff at STP.
4. **Programs-counselor mapping is not on staff pages.** The redesign currently asserts that Valerie Santos handles welding (welding-clearwater.html), and that Cheri Ashwood + Valerie Santos co-cover Welding Advanced. None of that mapping is published on live. Need to confirm where this assignment information actually comes from (Marianne's working knowledge? An internal sheet?).
5. **Title is just "Counselor" — no specialization signaled.** Live doesn't say "Welding Counselor" or "Health Sciences Counselor". The specialization the redesign asserts is implicit, not published.
6. **Email casing inconsistent on live** (`SCOTTME@pcsb.org` vs `corthellk@pcsb.org`). Verbatim rule applies — preserve case as published.

---

## Where counselors are referenced in the redesign today

(For the Stage 3 Comparator's reference — these are the redesign anchors for this cluster)

- `welding-clearwater.html` — Valerie Santos counselor card (VS avatar, name, title "School Counselor", email)
- `welding-advanced.html` — Dual-counselor layout (Cheri + Valerie per memory; needs in-file verification)
- `welding-stpete.html` — Likely has Cheri Ashwood (needs verification in Stage 3)
- `admissions.html` — 5+ generic "talk to a counselor" CTAs (steps 1, 4, 5, FAQ)
- `tuition-aid.html` — "financial aid counselors" mentions and "Talk to a Counselor" button
- `contact.html` — "Our counselors are here to guide you every step of the way"
- `consumer-information.html` — HTML comment at L725 ("via the Counselors cluster when sized")

**No dedicated counselor index page exists in the redesign.** Cluster row 4 in CLUSTERS.md confirms "(no dedicated redesign page yet)".

---

## Key IA questions for Stage 3

(Things the IA-Recommender will need to answer)

1. **Should the redesign add a counselor index page or not?** Live doesn't have one; the burden is on the redesign to decide whether to surface counselor info more prominently.
2. **Per-campus or per-program?** The dual-counselor pattern (Welding Advanced) suggests programs-with-counselors is the high-value placement, not a standalone index. But a campus-level "meet your counselors" page is also defensible.
3. **What programs does each counselor handle?** This mapping doesn't exist on live. Either Marianne has it, or we ask the campuses to publish it. Without it, the redesign can't responsibly assert "Valerie Santos for welding" outside of what Marianne knows internally.
4. **How does the dual-counselor pattern (Welding Advanced) extend?** If Welding Advanced uses Cheri + Valerie because the program runs at both campuses, are there other cross-campus programs? IA-Recommender should classify Welding Advanced as `asymmetric` or `shared` and check for similar program patterns.
5. **Phone extensions.** Memory has Cheri at x2325. If the redesign wants to publish a direct line, that data either needs to come from each counselor (Marianne can ask) or stay omitted. Email-only is the live status quo.

---

## Two-campus classification (preliminary, to be locked in by IA-Recommender)

- **Counselor lists:** `campus-specific` — each campus has its own counselors, no institutional canonical
- **Counselor-program mapping:** `campus-specific` (per program-counselor pairing, since programs are typically campus-specific) with one **`asymmetric`** sub-case (Welding Advanced spans both campuses, dual-counselor layout)
- **"Talk to a counselor" CTAs:** `shared` (the prompt is institutional, but each CTA should resolve to the right campus's counselor list)

---

## Stage 2 — completed 2026-04-30

Marianne's clarifications during the resume:
- Counselors are listed inline on each program page, not on a dedicated counselor page
- **No dual counselors** — the redesign's "Cheri + Valerie on Welding Advanced" pattern is misinformation. Each campus runs Welding Advanced with its own single counselor (Valerie at CLW, Cheri at STP).
- Phone extensions are published on each program page next to the counselor's name (live)

Stage 2 scope expanded to add the 4 welding program pages so we can extract verbatim counselor cards and confirm the no-dual-counselor reality. Extraction method: curl + Python parse (myptc.edu returns clean HTML, no Chrome MCP needed).

10 URLs extracted to `extracted/{campus}/*.md`:

| Campus | Slug | Source URL | Notes |
|---|---|---|---|
| clearwater | campus-staff | /ptc-clearwater-campus-staff | 5 counselors in Student Services section |
| clearwater | student-services-and-hours | /admissions/student-services-and-hours | Hours only, no counselor info |
| clearwater | admissions | /admissions/admissions | Generic admissions hub |
| clearwater | program-welding-technology | /programs/clearwater-full-time-programs/welding-technology | Counselor: Valerie Santos (santosv@pcsb.org, 727-538-7167 x2017) |
| clearwater | program-welding-technology-advanced | /programs/clearwater-full-time-programs/welding-technology-advanced | Counselor: Valerie Santos (same as above, single counselor) |
| stpete | campus-staff | /st-petersburg-campus-staff | 3 counselors in Student Services section |
| stpete | student-services-hours | /admissions/student-services-hours | Hours only, no counselor info |
| stpete | admissions | /admissions/admissions | Generic admissions hub |
| stpete | program-welding-technology | /programs/st-petersburg-full-time-programs/welding-technology | Counselor: Cheri Ashwood (ASHWOODC@pcsb.org, 727-893-2500 x2325) |
| stpete | program-welding-technology-advanced | /programs/st-petersburg-full-time-programs/welding-technology-advanced | Counselor: Cheri Ashwood (same, single counselor) |

**Verbatim-confirmed counselor extensions (so far):**
- Valerie Santos: 727-538-7167 x2017
- Cheri Ashwood: 727-893-2500 x2325
- Other 6 counselors' extensions: not yet extracted (would require scraping their program pages, deferred to Programs cluster)

**Update 2026-04-30 (post-Stage-3 Verifier):** Earlier framing called `welding-advanced.html` a "dual-counselor fabrication." That was a misread. Direct file inspection (lines 856-891) confirms the page uses a per-campus chooser pattern with two cards explicitly labeled "Clearwater Counselor" (Valerie Santos, x2017) and "St. Petersburg Counselor" (Cheri Ashwood, x2325). Welding Advanced runs at both campuses; each card surfaces that campus's single counselor verbatim. Pattern is correct and matches live. No fabrication to strip.

---

## See also

- `docs/audit/CLUSTERS.md` — row 4 (Counselors)
- `docs/audit/PROCESS.md` — stage definitions
- `docs/audit/verbatim-rule.md` — extraction tooling notes
- Top-level `CLAUDE.md` people table — already documents Cheri Ashwood, Valerie Santos, Lidija Milisav with role context
