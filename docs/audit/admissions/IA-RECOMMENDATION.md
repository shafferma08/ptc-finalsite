# Admissions Cluster — IA Recommendation (Stage 3)

**Generated:** 2026-04-30
**Subagent:** audit-ia-recommender
**Inputs:** `inventory.md` (Stage 1+2), 16 extracted live pages (CLW + STP) + 2 reused admissions-hub extracts from Counselors cluster, `admissions.html`, `docs/ptc_sitemap.md`, `docs/audit/verbatim-rule.md`, Counselors and Compliance precedent IA recommendations
**Decision owner:** Marianne Shaffer

---

## TL;DR

- **One institutional `admissions.html`, no split.** 5 of 7 paired sub-pages are byte-identical between CLW and STP. The shape of the live content argues loudly for a single shared page with a small number of explicit `campus-specific` cards where divergence is real (school codes, testing-center hours, TEAS contact, shadowing, tours).
- **Treat the union of CLW + STP extracts as the verbatim source pool.** Strict-verbatim from www would leave the page blank because www has zero admissions content. `verbatim-rule.md`'s practical-interpretation tier applies: a passage published verbatim on at least one campus subsite, where the other campus says the same or nothing, is sourced.
- **The current `admissions.html` is mostly fabricated.** "40+ career programs," "no application fee," steps copy, all 5 FAQ rows, and the Pathways "Veterans" + "Dual Enrollment" cards have no live source in this cluster. They get stripped or rewritten verbatim in Stage 6.
- **5 cross-cluster handoffs.** Federal School Codes, FAFSA detail, financial-aid contacts, Veterans, Net Price Calculator → Tuition cluster. Counselor names and CTAs → Counselors cluster (already shipped). Accommodations and ADA framing → Compliance cluster `#accessibility` link. Records request → Compliance cluster `#catalog-records`. ABE/GED/ESOL → Programs cluster.
- **One real asymmetry: STP has no shadowing page.** Default recommendation: shadowing is a CLW-only published process. The redesign's `#campus-tours` carries a CLW shadowing card (linking the current April 2026 PDF) and an STP "Schedule a campus visit" card with the campus phone, no shadowing claim. STP gap goes to `follow-ups.md`.

---

## Reasoning

**Why one page, not split.** The Counselors cluster split because counselor lists are inherently campus-specific (different humans at each campus, no overlap). The Compliance cluster stayed one page because every disclosure is institution-wide. Admissions sits closer to Compliance: the *process* (apply, residency, transfer, readmission, enrollment options, CASAS framing, TEAS framing) is institution-wide and live proves it by publishing the same words on both campus sites. The campus-specific layer (school codes, testing hours, TEAS contact, shadowing, tours, financial-aid contact) is a small set of cards that ride on top of the shared frame. Splitting would force two near-identical pages (Compliance's anti-pattern) just to host four-to-six campus-specific contact blocks.

**Why not put a per-campus block on every section.** The welding-advanced campus-chooser pattern works when *both* campuses do the thing differently. For 4 of the 7 admissions sub-topics they don't. Forcing a "Clearwater says X / St. Pete says X" UI where X = X creates noise without information.

**The fabrication problem on the current redesign page.** Reading `admissions.html` against the extracts:
- `#how-to-apply` step copy ("40+ career programs," "There is no application fee") is not in any extract. Live's hub *does* describe a process; we can rewrite verbatim from the CLW/STP admissions hub bullets. "No application fee" is plausible but unsourced — strip until confirmed.
- `#enrollment-steps` "Complete Required Testing / Arrange Financial Aid / Register for Classes" framing has no live source. The live admissions hub does cover financial aid steps, FAFSA, and shadowing in a single ordered sequence. Recompose from that.
- `#pathways` Transfer + Readmission cards are sourceable verbatim from the dedicated sub-pages. The Dual Enrollment card has no source in this cluster (Programs cluster owns DE) and the Veterans card has no source (Tuition cluster owns Veterans). Both get stripped or rewritten as "see also" pointers.
- `#testing` CASAS / TEAS / ABE framing is paraphrased and lossy. CASAS extract is one block of authoritative live copy; use it verbatim. ABE/GED/ESOL doesn't belong here at all (Programs cluster).
- `#campus-tours` is unsourced beyond a generic banner. Shadowing is the live equivalent; only CLW publishes it.
- `#admissions-faq` — all 5 Q/A rows are fabricated. None match live. Per `verbatim-rule.md`: strip the section, *or* Marianne authors verbatim and syncs to the campus admissions hubs (live-owner exception).
- `#accommodations` — already verbatim from the CLW admissions hub (added 2026-04-30 from Counselors M1). Keep as-is.

**Page-length test after Stage 6 strip.** Sections in the rebuilt page: hero, How to Apply (rewritten from live hub steps), Enrollment Options (verbatim from sub-page), Acceptable Proofs of Residency (verbatim summary + statute links), Pathways (Transfer + Readmission only), Testing (CASAS verbatim + TEAS verbatim with per-campus cards), Campus Tours / Shadowing (per-campus cards), Accommodations, CTA band. ~9 sections, ~1,800-2,200 words. Under the 3,000-word / 8-section sticky-nav threshold. Add a sticky in-page TOC since 9 sections is at the boundary.

---

## Proposed sitemap (admissions slice)

```
myptc.edu/ (institutional)
└── admissions.html  ← single canonical institutional page
    ├── #how-to-apply           (verbatim ordered steps from live admissions hubs; campus-specific
    │                            inline tokens for FAFSA School Code: CLW 005605 / STP 013917)
    ├── #enrollment-options     (verbatim from admissions-enrollment-options.md, 2675 chars,
    │                            byte-identical CLW/STP)
    ├── #residency              (verbatim from admissions-acceptable-proofs-of-residency.md,
    │                            byte-identical CLW/STP, includes 5 statute links)
    ├── #pathways
    │   ├── Transfer card       (verbatim from admissions-transfer.md, byte-identical)
    │   └── Readmission card    (verbatim from admissions-readmission.md, byte-identical)
    ├── #testing
    │   ├── CASAS               (verbatim from testing-casas.md, byte-identical)
    │   │   └── Per-campus testing-center cards (CLW: M-Th 8am + Wed eve 4:30pm,
    │   │                                         727-538-7167 x2006, Bldg #2 front desk;
    │   │                                         STP: M-F 8-11am, link to STP CASAS PDF)
    │   ├── TEAS                (verbatim institutional intro: "TEAS Version 7. PN programs
    │   │                         only accept TEAS scores taken at a PTC campus testing
    │   │                         center.")
    │   │   ├── CLW TEAS card   (verbatim from CLW testing hub: schedule lines, contact
    │   │                         Merritt Scott, scottme@pcsb.org, 727-538-7167 x2032,
    │   │                         link to TEAS Information Page PDF May 2025)
    │   │   └── STP TEAS card   (M-F 8am, link to STP TEAS PDF; no named contact —
    │   │                         flag in follow-ups.md)
    │   └── (no ABE/GED/ESOL — moved to Programs cluster)
    ├── #campus-tours
    │   ├── CLW Shadowing card  (verbatim "Shadowing Days & Times" link to current April
    │   │                         2026 PDF; "By Appointment Only — call 727-538-7167")
    │   └── STP Visit card      (no shadowing claim; "Schedule a campus visit — call
    │                            727-893-2500" pending STP shadowing publication; tracked
    │                            in follow-ups.md)
    ├── #accommodations         (verbatim from CLW admissions hub; already shipped 2026-04-30)
    ├── #admissions-faq         (decision pending — see D2; default = strip)
    └── #cta-section            (Apply Now → apply.myptc.edu external; Contact → contact.html)

clearwater.myptc.edu/ (campus subsite)
└── admissions/                  (campus-side IA stays as-is on live; redesign mirrors there
                                   only if/when campus-subsite redesign happens. Out of scope.)

stpete.myptc.edu/
└── admissions/                  (same — campus subsite IA out of scope)
```

---

## Per-topic content placement table

| Topic | Two-campus class | Source | Lives on | Notes |
|---|---|---|---|---|
| Application process / steps | `shared` (frame) + `campus-specific` (FAFSA School Code: CLW 005605 / STP 013917) | CLW + STP admissions-hub extracts | `admissions.html#how-to-apply` | Embed the school-code line as a tabbed/dropdown campus token in the FAFSA step |
| Acceptable Proofs of Residency | `shared` (byte-identical) | `admissions-acceptable-proofs-of-residency.md` | `admissions.html#residency` | New anchor; carry the 5 Florida-statute links verbatim |
| Transfer | `shared` (byte-identical) | `admissions-transfer.md` | `admissions.html#pathways` | Replace fabricated current copy |
| Readmission | `shared` (byte-identical) | `admissions-readmission.md` | `admissions.html#pathways` | Replace fabricated current copy |
| Enrollment Options | `shared` (byte-identical) | `admissions-enrollment-options.md` | `admissions.html#enrollment-options` | New section; this is 2,675 chars of solid live copy currently absent from the redesign |
| CASAS overview | `shared` (byte-identical) | `testing-casas.md` | `admissions.html#testing` (CASAS sub-block) | Verbatim |
| CASAS schedule + testing-center logistics | `campus-specific` | CLW + STP `testing.md` extracts | Per-campus cards inside `#testing` | CLW: M-Th 8am, Wed eve 4:30pm twice/month, x2006, Bldg #2. STP: M-F 8-11am morning arrivals + STP PDF link |
| TEAS overview ("PN programs only accept...") | `shared` | CLW testing hub (also implied on STP) | `admissions.html#testing` (TEAS sub-block intro) | Verbatim from CLW testing hub |
| TEAS contact (Merritt Scott) | `campus-specific` (CLW only) | CLW `testing.md` | CLW TEAS card inside `#testing` | scottme@pcsb.org, x2032 |
| TEAS schedule PDFs | `campus-specific` (different files) | CLW `testing-teas.md` (May 2025) + STP `testing-teas.md` (Aug 2023) | Per-campus cards inside `#testing` | STP PDF is 2.5 years stale → `follow-ups.md` |
| Shadowing | `asymmetric` (CLW only) | CLW `admissions-shadowing-days-times.md` (PDF wrapper, April 2026) | `admissions.html#campus-tours` CLW card | STP card carries no shadowing claim; gap goes to `follow-ups.md` |
| Campus tours | `campus-specific` | No live source (tour CTA is implicit) | Per-campus cards inside `#campus-tours` | Carry only campus name + phone; tour scheduling routes to campus contact |
| FAQ | n/a (fabricated) | None | DECISION (D2): default strip | If kept, Marianne authors + syncs to live campus admissions hubs (live-owner exception) |
| Accommodations | `shared` | CLW admissions hub | `admissions.html#accommodations` | Already shipped 2026-04-30 |
| ABE/GED/ESOL | n/a — not admissions | Programs cluster | NOT on `admissions.html` | Strip from `#testing`; route to Programs |
| Veterans | n/a — not admissions | Tuition cluster | NOT on `admissions.html` | Strip Veterans card from `#pathways` |
| Dual Enrollment | n/a — not admissions process | Programs cluster | NOT on `admissions.html` | Strip DE card from `#pathways` |
| Federal School Codes (005605 / 013917) | `campus-specific` | CLW + STP admissions hubs | Token within `#how-to-apply` FAFSA step; full treatment lives in Tuition cluster | Verify in Tuition cluster Stage 4 |
| FAFSA detail | n/a — Tuition cluster | Tuition | NOT on `admissions.html` (one pointer line only) | |
| Financial-aid contacts (Schnell, Mitchell on STP; CLW option 7) | n/a — Tuition cluster | Tuition | NOT on `admissions.html` | Stripped from current redesign |

---

## Cross-cluster handoffs

- **Tuition cluster (#6):** Federal School Codes (005605 / 013917) verification, Veterans, Net Price Calculator, FAFSA deep content, financial-aid office contacts, Schnell + Mitchell named contacts on STP. The current redesign's `#how-to-apply` step 2 mentions "high school diploma" — that's an admissions detail, but the Tuition cluster owns the satisfactory-academic-progress framing.
- **Counselors cluster (closed 2026-04-30):** Counselor mentions inside the rewritten admissions hub steps already route correctly via the campus chooser pattern. The accommodations notice already deep-links to `clearwater-counselors.html` and `stpete-counselors.html`. No new work.
- **Compliance cluster (verified):** Accommodations content stays on `admissions.html#accommodations` (it's an admissions touchpoint), but the underlying ADA / 504 framing (including District 504 Coordinator Stephanie Miller) lives on `consumer-information.html#accessibility`. Add a one-line cross-link from `#accommodations` to `consumer-information.html#accessibility` for the formal disclosure.
- **Records / transcripts:** Out of cluster. The Compliance cluster `#catalog-records` is the canonical destination for record-request flows.
- **Programs cluster:** ABE/GED/ESOL gets stripped out of the testing section. Dual Enrollment card stripped out of pathways. Both route to the Programs cluster's structures.

---

## CTAs

- **Apply Now** → `https://apply.myptc.edu` (external Finalsite app). Preserve verbatim. Lives in: utility bar, `#how-to-apply` button, `#cta-section` primary CTA, and any program-page application CTA.
- **Request Info** → `https://inforequest.myptc.edu` (external CRM/lead capture). Preserve verbatim. Lives in: `#cta-section` secondary CTA, optional homepage hero. Currently the redesign's `#cta-section` "Contact Admissions" button has `href="#"` — re-aim either to `inforequest.myptc.edu` (info request) or to `contact.html` (general). Recommend: `inforequest.myptc.edu` because the language "Apply or contact us with questions" maps to the inquiry CRM.
- **Schedule a Tour** in `#campus-tours` banner currently has `href="#"` — re-aim to a campus chooser anchor that splits to per-campus phone numbers. No central tour-booking system exists on live.
- **Start Your Application** in `#how-to-apply` currently has `href="#"` — re-aim to `apply.myptc.edu`.

---

## Open decisions for Marianne

**D1 — STP shadowing 404.** STP has no `/admissions/admissions/shadowing-days-times` page. CLW publishes a current April 2026 PDF.
- **(a) STP doesn't formally run shadowing as a discrete process.** Programs absorb it. Redesign carries a CLW shadowing card and an STP "Schedule a campus visit" card with no shadowing claim. (RECOMMENDED — most defensible read of the asymmetry; matches what live actually publishes.)
- (b) STP publishes shadowing somewhere else. Programs-cluster job to find it before the build.
- (c) STP should publish shadowing and currently has a content gap. `follow-ups.md` ask to STP campus admin; redesign ships option (a) in the meantime.

**Default: (a) + log (c) as a low-priority `follow-ups.md` note.** Either reading produces the same redesign output today.

**D2 — How to source the FAQ.** All 5 current Q/A rows are fabricated.
- (a) Strip the entire `#admissions-faq` section. (RECOMMENDED — cleanest verbatim compliance.)
- (b) Marianne authors a 4-6 row FAQ + syncs to both campus admissions hubs on live (live-owner exception). Higher value, higher cost. Defer to a later live-site polish pass.
- (c) Replace with a "Common questions" link block routing to the verbatim live answers (e.g., "Who can apply?" → links to Enrollment Options section; "How do I prove residency?" → links to Residency section). Lightweight middle ground.

**Default: (a) for Stage 6 build; revisit (b) or (c) after live-site polish window in May.**

**D3 — How to source `#accommodations`.** Already resolved as of 2026-04-30: verbatim from the CLW admissions hub. Confirmed sourced. *No open decision; listed for completeness.*

**D4 — TEAS structure.** Per-campus testing has different schedules and (on CLW) a named contact.
- (a) Single `#testing` TEAS sub-section with verbatim shared intro, then per-campus contact + schedule cards side-by-side. (RECOMMENDED — matches the byte-identical-frame + asymmetric-edge pattern that the rest of the page uses.)
- (b) Per-campus tabs across the entire `#testing` section. Hides the shared frame, requires the user to pick a campus before reading any TEAS content. Worse for institutional discovery.

**Default: (a).**

**D5 — Testing-hub divergence.** CLW testing hub (1,368 chars, named TEAS contact) vs STP (812 chars, slimmer). Two readings:
- (a) Treat the CLW expanded version as the institutional source for the `#testing` section frame, then layer per-campus cards for schedule + contact. (RECOMMENDED — produces a richer institutional page; STP's slimmer copy is a subset of CLW's, not a contradiction.)
- (b) Carry only the byte-overlap as institutional, push the CLW-only material into a CLW-specific card. Produces a thinner `#testing` section with more campus-specific noise.

**Default: (a). The CLW expansion is sourceable institutional content; STP just hasn't published it yet. Logging a `follow-ups.md` note for STP to mirror the CLW testing-hub copy is cleaner than artificially shrinking the redesign.**

---

## Risks and trade-offs

1. **The current `admissions.html` is mostly fabricated and Stage 6 will be a heavy rewrite.** ~70% of user-facing prose changes. Mitigation: the Comparator artifact will list every line-level VERBATIM / FABRICATED / MISSING verdict so the build pass is mechanical, not creative.
2. **Per-campus cards inside a single page increase visual density.** The welding-advanced campus-chooser pattern is the established precedent. Use it.
3. **STP TEAS PDF is 2.5 years stale (Aug 2023).** Linking it preserves verbatim; flagging it in `follow-ups.md` lets STP refresh. Don't drop the link — staleness is the live owners' decision to make.
4. **Federal School Codes appear on this page AND on `tuition-aid.html`.** Two sources of truth risk drift. Mitigation: a single data file (`data/campus-codes.json`) read by both pages, or one canonical anchor (`tuition-aid.html#federal-state`) with the admissions page just pointing to it. Recommend the data-file approach to keep `#how-to-apply` self-contained.
5. **"Schedule a Tour" CTA in `#campus-tours` has no live booking system to land on.** Splitting to two campus phone numbers is honest but lower-energy than the banner's visual weight implies. Acceptable.
6. **The CLW admissions hub (1,994 chars) and STP hub (1,520 chars) are not byte-identical.** The diff is mostly the CLW shadowing reference and STP-specific financial-aid contacts (Schnell + Mitchell). The recommended union approach handles this cleanly: shadowing reference becomes a CLW-specific token in the FAFSA step's "Complete shadowing" sub-step; financial-aid contacts move to Tuition cluster.

---

## Migration order for Stage 6 (build)

1. **Strip fabricated content** from `admissions.html`: all 3 step-card bodies in `#how-to-apply`; all 3 step-card bodies in `#enrollment-steps`; the Dual Enrollment + Veterans cards in `#pathways`; the testing-type bodies in `#testing`; the entire 5-row FAQ in `#admissions-faq`; the `#campus-tours` banner copy.
2. **Rewrite `#how-to-apply`** verbatim from CLW + STP admissions-hub extracts: ordered list of process steps with the FAFSA School Code as a per-campus token (CLW 005605 / STP 013917).
3. **Add new `#enrollment-options` section** verbatim from `admissions-enrollment-options.md` (Course Intent, CTC Program, Continuing Workforce Education sub-sections).
4. **Add new `#residency` section** verbatim from `admissions-acceptable-proofs-of-residency.md` with the 5 Florida-statute links preserved.
5. **Rewrite `#pathways`** with two cards only (Transfer + Readmission), each verbatim from its respective sub-page extract.
6. **Rewrite `#testing`** with shared CASAS overview verbatim + per-campus CASAS schedule cards; shared TEAS overview verbatim + per-campus TEAS cards (CLW: Merritt Scott contact; STP: PDF link only).
7. **Rewrite `#campus-tours`** with two campus cards: CLW shadowing card linking the April 2026 PDF; STP "Schedule a campus visit" card with phone only.
8. **Re-aim 4 placeholder CTAs** (`#`): Start Your Application → `apply.myptc.edu`; Apply Now (CTA band) → `apply.myptc.edu`; Contact Admissions (CTA band) → `inforequest.myptc.edu`; Schedule a Tour → `#campus-tours` campus chooser.
9. **Strip or punt FAQ per D2.** Default: remove the `#admissions-faq` section entirely; update sticky TOC.
10. **Add cross-link** from `#accommodations` to `consumer-information.html#accessibility` for the formal ADA / 504 disclosure.
11. **Add sticky in-page TOC** since rebuilt page is at the 8-section threshold.
12. **Update `docs/audit/follow-ups.md`** with: STP shadowing gap (D1c, low-priority); STP TEAS PDF staleness (high-priority — federal-aid-adjacent doc dated Aug 2023); STP testing-hub copy expansion ask (low-priority); FAQ authoring decision (D2, deferred).
13. **Update `docs/ptc_sitemap.md`** to reflect the rebuilt admissions page anchors and the per-campus card structure inside `#testing` and `#campus-tours`.
14. **Update `CLUSTERS.md`** row 5 status and append entry to `docs/progress-log.md`.

Word count: ~1,480.
