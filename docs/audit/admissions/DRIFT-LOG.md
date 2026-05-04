# Admissions Cluster — Drift Log

Append-only log of live-site changes detected on URLs already verified for this cluster. The pipeline never reconciles drift automatically; reconciliation requires Marianne's review.

---

## 2026-05-03 — Drift detected on 2 URLs (1 page, both campus mirrors)

**Detection method:** `ptc-live-drift-check` scheduled task. Re-fetched all 19 admissions inventory URLs via Chrome MCP, compared `innerText` body length and content snippet against saved `extracted/{www,clearwater,stpete}/*.md` snapshots from 2026-04-30.

**Verdict per URL:**

| URL | Saved cc | Live cc | Verdict |
|---|---:|---:|---|
| www `/resources/future-students/admissions-process-requirements-and-criteria` | 2252 | 1818 | likely cosmetic (markdown-bullet vs innerText) — see notes |
| clw `/admissions/admissions/acceptable-proofs-of-residency` | 1328 | 15319 | **REAL DRIFT — full FL Statute 1009.21 text inlined** |
| clw `/admissions/admissions/enrollment-options` | 2675 | 2664 | clean (whitespace) |
| clw `/admissions/admissions/readmission` | 442 | 440 | clean (whitespace) |
| clw `/admissions/admissions/shadowing-days-times` | 24 | 49 | cosmetic (PDF wrapper, innerText now picks up filename) |
| clw `/admissions/admissions/transfer` | 1437 | 1742 | likely cosmetic (markdown-bullet vs HTML list rendering) |
| clw `/admissions/testing` | 1368 | 1143 | cosmetic (markdown-link overhead in extract; Merritt Scott contact still present) |
| clw `/admissions/testing/casas` | 1056 | 1053 | clean (whitespace) |
| clw `/admissions/testing/teas` | 108 | 39 | cosmetic (PDF wrapper, markdown vs innerText) |
| stp `/admissions/admissions/acceptable-proofs-of-residency` | 1328 | 15319 | **REAL DRIFT — full FL Statute 1009.21 text inlined** |
| stp `/admissions/admissions/enrollment-options` | 2675 | 2664 | clean (whitespace) |
| stp `/admissions/admissions/readmission` | 442 | 440 | clean (whitespace) |
| stp `/admissions/admissions/transfer` | 1437 | 1742 | likely cosmetic |
| stp `/admissions/testing` | 812 | 553 | cosmetic (markdown-link overhead in extract) |
| stp `/admissions/testing/casas` | 1056 | 1053 | clean (whitespace) |
| stp `/admissions/testing/teas` | 176 | 42 | cosmetic (PDF wrapper) |
| stp `/admissions/admissions` (counselors-cluster reuse) | 1498 | 1494 | clean (whitespace) |
| clw `/admissions/admissions` (counselors-cluster reuse) | 1972 | 1971 | clean (whitespace) |

**Real-drift summary (2 URLs, same content delta):**

Both campus mirrors of `acceptable-proofs-of-residency` now embed the full text of Florida Statute 1009.21 (Determination of resident status for tuition purposes) inline. The saved snapshot has only the intro paragraph plus 5 statute reference links (1328 chars). Live now expands to ~15,319 chars — adds the entire body of subsections (1) through (10): definitions of "dependent child," "initial enrollment," "institution of higher education," qualifications, evidence of legal residence, exemptions, etc. Pages are byte-identical between CLW and STP, consistent with the existing per-campus parallel structure.

**Live page lead-in (verbatim, first ~500 chars), so the diff is human-readable:**

> Acceptable Proofs of Residency
> Determination of Dependent/Independent Student Status &
> Acceptable Forms of Documentation for Residency Classification
>
> Florida Statute 1009.21 Determination of resident status for tuition purposes.—Students shall be classified as residents or nonresidents for the purpose of assessing tuition in postsecondary educational programs offered by charter technical career centers or career centers operated by school districts, in Florida College System institutions, and in state universities.
>
> (1) As used in this section, the term:
> (a) "Dependent child" means any person, whether or not living with his or her parent, who is eligible to be claimed by his or her parent as a dependent under the federal income tax code.
> (b) "Initial enrollment" means the first day of class at an institution of higher education.
> (c) "Institution of higher education" means any charter technical career center as defined in s. 1002.34, career center [...]

(Body continues with subsections through ~15,300 chars total — full statute text inlined.)

**Cosmetic-drift notes (not real drift, kept for the record):**

Many of the size deltas above come from extraction-method differences between the 2026-04-30 curl + BeautifulSoup pull (which preserved markdown link syntax `[text](href)` and inline-bulleted list items) and the drift-check `innerText` pull (which sees only visible link text and renders HTML lists as line-broken visible text). After ignoring markdown-link overhead and bullet-rendering differences, content matches. Examples:
- `clw/admissions-transfer`: same final paragraph with bulleted documentation examples; saved extract collapsed bullets inline (`• Current license... • Current certification...`); live `innerText` renders each bullet on its own line, gaining ~300 chars without any content change.
- `clw/testing`: same testing schedule, same Merritt Scott TEAS-contact card (verified by spot-check on the live `innerText`). Saved extract carries `[CASAS](/fs/pages/1160)`, `[TEAS, Version 7](url)`, `[Visit TEAS](url)`, `[scottme@pcsb.org](mailto:scottme@pcsb.org)` markdown link overhead that `innerText` doesn't see.
- `clw/testing-teas`, `stp/testing-teas`: PDF wrapper pages. Saved extract format: `[TEAS Information Page_05212025.pdf](href)`. Live `innerText`: `TEAS\nTEAS Information Page_05212025.pdf`. Same target PDF, no real change.
- `clw/admissions-shadowing-days-times`: PDF wrapper. Same `ShadowSchedule04-16-26.pdf` target PDF; live `innerText` now picks up the filename text.
- `www/admissions-process-requirements-and-criteria`: saved extract has duplicated FAFSA bullet content from imperfect markdown nesting (FAFSA paragraph appears once nested under "Apply for financial aid" and again as separate top-level bullets, double-counting ~400 chars). Live renders the single intended paragraph. Substantively the same content. **Recommend Marianne re-fetch and re-save with the new extraction method to clean this up.**

**Reconciliation guidance for Marianne (flag-and-pause — no action taken by this run):**

1. The redesign's `admissions.html` `#residency` section was sourced from the 1328-char snapshot. Per the binding verbatim rule, the redesign should now mirror what live currently shows. The decision is whether to inline the full statute text (now what live does), keep the redesign's current condensed treatment, or split into a sub-page. Worth pulling into a recommendation review before re-extracting.
2. The cosmetic-drift items don't require action, but if Marianne wants the saved extracts to match the new `innerText` extraction method (so future drift-checks are noise-free), the affected files can be re-extracted and re-saved with the same scrape script. Recommend doing this in one batch when next touching the cluster.
3. Per `PROCESS.md`, this cluster's status moves from `verified` to `drift` until reconciliation is approved. The redesign HTML stays as-is.

**Files not modified by this run:**
- `extracted/clearwater/admissions-acceptable-proofs-of-residency.md`, `extracted/stpete/admissions-acceptable-proofs-of-residency.md` — preserved as the pre-drift baseline.
- `admissions.html` — preserved.

---

## 2026-05-03 — Drift reconciliation closed

Marianne reviewed the drift report and chose: **mirror live verbatim, split into a dedicated sub-page** (using design judgment for UX). Reconciliation executed in one session.

**Investigation, before build:**

Re-ran `_extract.py` against all 16 admissions URLs. Surprise: the script returned 1,328 chars for `acceptable-proofs-of-residency` (matching the original baseline), not the 15,319 chars the drift checker had reported. Cross-checked with WebFetch: WebFetch returned ~13.8K chars of full statute text, matching what the drift checker saw. Conclusion: **Finalsite injects the FL Statute 1009.21 body via JavaScript after page load**. The curl + bs4 extractor reads pre-render HTML and missed 12K+ chars. The same gap likely affects baselines for prior verified clusters (about, compliance, counselors). Logged as a **high-priority pipeline issue** in `follow-ups.md` § Pipeline infrastructure, separate from this cluster's closure.

Note: STP `admissions-shadowing-days-times` returned 404 during the re-extract. STP runs shadowing through counselor inquiry rather than a published schedule (per existing low-priority follow-up D1), so the 404 is consistent with that operating model. No new action needed.

**Reconciliation actions taken:**

1. **New baselines saved** for `acceptable-proofs-of-residency` on both campuses, sourced via WebFetch (rendered DOM). Files at `extracted/clearwater/admissions-acceptable-proofs-of-residency.md` and `extracted/stpete/admissions-acceptable-proofs-of-residency.md`. Byte-identical content; only `source_url` and `campus` frontmatter differ. Frontmatter notes the JS-render gap so future maintainers understand why the saved char count jumped.

2. **New sub-page built** at `acceptable-proofs-of-residency.html` (top-level redesign HTML). Holds the full statute text verbatim: subsections (1) through (13) + History citation line. Two-campus classification: `shared` (FL state law applies the same to both campuses; live serves byte-identical content from CLW + STP URLs). Page chrome: breadcrumb (Home > Admissions > Acceptable Proofs of Residency), source-attribution callout, TOC anchors (numbers only — no editorial labels), print-friendly styling, back-link to `admissions.html#residency`. Em-dashes preserved in 2 verbatim quotation contexts (statute lead and History line); no editorial em-dashes elsewhere.

3. **`admissions.html#residency` updated.** Kept the verbatim lead paragraph (with em-dash and bold formatting restored to match live — the previous build had silently dropped both, surfaced and fixed during this run's Stage 7 verifier pass). Replaced the old 5-statute-link list with a single primary CTA "Read the full text of Florida Statute 1009.21" pointing to the new sub-page. The 5 statute references (s. 1002.34, s. 1001.44, s. 1000.21, s. 222.17) are not lost — they are referenced inline within the rendered statute body on the sub-page (subsections (1)(c) and (1)(d)).

**Stage 7 verifier outcome:**

`audit-verifier` subagent re-checked the build. 6 of 7 blocks CONFIRM-RESOLVED. 1 FLIP (em-dash + bold drift on `admissions.html` line 1028 lead paragraph) fixed mid-run before close. 0 NEW-DRIFT-INTRODUCED. 3 spot-checks on unchanged admissions sub-pages (transfer, readmission, enrollment-options) all clean — no regression from this build.

**Cosmetic-drift rows status:**

The 8 cosmetic-drift rows from the original drift detection (2 transfer, 2 testing-hub, 2 testing-teas, 2 shadowing-days-times where applicable, 1 www-admissions-process) remain known noise from extraction-method differences (curl+bs4 vs Chrome MCP innerText). These do not represent real content changes. They will continue to appear in future drift checks until the extractor is migrated to a rendered-DOM method (tracked in pipeline-infrastructure follow-up).

**Cluster status after this run:**

Flipped from `drift` → `verified`. Drift-watched.

**New artifacts:**
- `acceptable-proofs-of-residency.html` (top-level, ~16K chars rendered)
- `extracted/clearwater/admissions-acceptable-proofs-of-residency.md` (re-extracted verbatim baseline)
- `extracted/stpete/admissions-acceptable-proofs-of-residency.md` (re-extracted verbatim baseline)
- `VERIFICATION.md` (new "## 2026-05-03 Stage 7 verification (post-drift reconciliation)" section appended)
- `follow-ups.md` (new "## Pipeline infrastructure (added 2026-05-03)" section with high-priority JS-render gap entry)

**Modified:**
- `admissions.html` § `#residency` (CTA pattern + verbatim lead paragraph fix)
- `CLUSTERS.md` row 5 (`drift` → `verified`, last touched updated)

**Preserved:**
- All other admissions cluster extracts and the rest of `admissions.html` (no other content changes).
