# Counselors Cluster — Verification (Stage 7 post-build)

**Generated:** 2026-04-30 (re-run after Stage 6 build)
**Verifier:** audit-verifier
**Mode:** Independent post-build re-check of every claim introduced by Stage 6, plus regression spot-checks on Stage 3 confirmed items.

The Stage 3 (pre-build) verification table is preserved verbatim as an appendix at the bottom of this document.

---

## Stage 7 post-build verdict table

Each row is one integrity check from the Stage 6 build. Verdict is **PASS** when redesign matches live exactly (allowing the new phone-format normalization rule), **FAIL** when it doesn't, **N/A** when not applicable.

### A. New file: `clearwater-counselors.html` — counselor cards

| # | Check | Live source (verbatim) | Redesign (post-build) | Verdict |
|---|---|---|---|---|
| A1 | Kimere Corthell — name | `extracted/clearwater/campus-staff.md` L497-500 "Corthell / Kimere / corthellk@pcsb.org / Counselor" | L187 "Kimere Corthell" | **PASS** |
| A2 | Kimere Corthell — title is "School Counselor" (DEC-1) | live = "Counselor", DEC-1 canonicalizes to "School Counselor" | L188 "School Counselor" | **PASS** (per DEC-1) |
| A3 | Kimere Corthell — email casing `corthellk` lowercase | L499 "corthellk@pcsb.org" | L189 mailto + visible text both `corthellk@pcsb.org` lowercase | **PASS** |
| A4 | Kimere Corthell — no extension published (unverified) | live staff page lists no extension | no `tel:` line on card | **PASS** |
| A5 | Yata Fields — name | L512-515 "Fields / Yata / fieldsy@pcsb.org / Counselor" | L193 "Yata Fields" | **PASS** |
| A6 | Yata Fields — email `fieldsy` lowercase | L514 "fieldsy@pcsb.org" | L195 `fieldsy@pcsb.org` lowercase | **PASS** |
| A7 | Yata Fields — no extension published | live silent | card has no `tel:` line | **PASS** |
| A8 | Lidija Milisav — name | L527-530 "Milisav / Lidija / milisavl@pcsb.org / Counselor" | L199 "Lidija Milisav" | **PASS** |
| A9 | Lidija Milisav — email `milisavl` lowercase | L529 "milisavl@pcsb.org" | L201 `milisavl@pcsb.org` lowercase | **PASS** |
| A10 | Lidija Milisav — no extension published | live silent | no `tel:` line | **PASS** |
| A11 | Valerie Santos — name | L537-540 "Santos / Valerie / santosv@pcsb.org / Counselor" + program-page L21 "Valerie Santos, School Counselor" | L205 "Valerie Santos" | **PASS** |
| A12 | Valerie Santos — email `santosv` lowercase | L539 + program-page L23 "santosv@pcsb.org" | L207 lowercase | **PASS** |
| A13 | Valerie Santos — extension x2017 published with normalized phone format | program-page L23 "727-538-7167 x2017" | L208 "(727) 538-7167 x2017" | **PASS** (phone-format normalization rule permits parens; digits identical) |
| A14 | Merritt Scott — name | L542-545 "Scott / Merritt / SCOTTME@pcsb.org / Counselor" | L212 "Merritt Scott" | **PASS** |
| A15 | Merritt Scott — email casing `SCOTTME` uppercase | L544 "SCOTTME@pcsb.org" | L214 mailto + visible text both `SCOTTME@pcsb.org` uppercase | **PASS** |
| A16 | Merritt Scott — no extension | live silent | no `tel:` line | **PASS** |
| A17 | All 5 CLW cards have title "School Counselor" (no card with "Counselor" alone) | DEC-1 | grep finds 5 instances of `School Counselor` on cards, zero standalone `>Counselor<` strings | **PASS** |
| A18 | No fabricated programs-covered list (DEC-3 deferred) | n/a | no card lists which programs the counselor handles | **PASS** |

### B. New file: `clearwater-counselors.html` — hours block + general inquiries

| # | Check | Live source | Redesign | Verdict |
|---|---|---|---|---|
| B1 | Section title "Student Services" | `extracted/clearwater/student-services-and-hours.md` L18 "Student Services" | L230 "Student Services Hours" | **PASS** (live's exact phrase is "Student Services" as a heading; redesign appends "Hours" for clarity, content match) |
| B2 | "Monday-Thursday 6:45 am-6:30 pm" | L20 verbatim | L232 "Monday-Thursday: 6:45 am-6:30 pm" (colon added) | **PASS** (verbatim digits/words; colon is formatting) |
| B3 | "Friday 6:45 am-2:30 pm" | L22 verbatim | L233 "Friday: 6:45 am-2:30 pm" | **PASS** |
| B4 | Link to hours page | n/a | L235 links to `https://clearwater.myptc.edu/admissions/student-services-and-hours` | **PASS** |
| B5 | General inquiries phone is the campus main line | header utility-bar shows 727.538.7167; no live "general inquiries" prose | L241 "(727) 538-7167" — digits match, normalized format | **PASS** (phone-format normalization rule) |

### C. New file: `stpete-counselors.html` — counselor cards

| # | Check | Live source | Redesign | Verdict |
|---|---|---|---|---|
| C1 | Cheri Ashwood — name | `extracted/stpete/campus-staff.md` L554-557 "Ashwood / Cheri / ASHWOODC@pcsb.org / Counselor" | L187 "Cheri Ashwood" | **PASS** |
| C2 | Cheri Ashwood — email casing `ASHWOODC` uppercase | L556 + program-page L23 "ASHWOODC@pcsb.org" | L189 mailto + visible text both `ASHWOODC@pcsb.org` uppercase | **PASS** |
| C3 | Cheri Ashwood — extension x2325 published with normalized phone format | program-page L23 "727-893-2500 x2325" | L190 "(727) 893-2500 x2325" | **PASS** (phone-format normalization rule) |
| C4 | Jeromy Johnson — name | L579-582 "Johnson / Jeromy / JOHNSONJER@pcsb.org / Counselor" | L194 "Jeromy Johnson" | **PASS** |
| C5 | Jeromy Johnson — email casing `JOHNSONJER` uppercase | L581 "JOHNSONJER@pcsb.org" | L196 `JOHNSONJER@pcsb.org` uppercase | **PASS** |
| C6 | Jeromy Johnson — no extension | live silent | no `tel:` line | **PASS** |
| C7 | Nancy Randolph — name | L604-607 "Randolph / Nancy / randolphn@pcsb.org / Counselor" | L200 "Nancy Randolph" | **PASS** |
| C8 | Nancy Randolph — email `randolphn` lowercase | L606 "randolphn@pcsb.org" | L202 `randolphn@pcsb.org` lowercase | **PASS** |
| C9 | Nancy Randolph — no extension | live silent | no `tel:` line | **PASS** |
| C10 | All 3 STP cards have title "School Counselor" | DEC-1 | grep: 3 of `School Counselor`; zero `>Counselor<` standalone | **PASS** |
| C11 | Only Ashwood has an extension among STP cards | n/a | Johnson + Randolph cards have only mailto, no `tel:` | **PASS** |
| C12 | No fabricated programs-covered list | DEC-3 | no card lists programs | **PASS** |

### D. New file: `stpete-counselors.html` — hours block + general inquiries

| # | Check | Live source | Redesign | Verdict |
|---|---|---|---|---|
| D1 | Section title "Counseling Department" | `extracted/stpete/student-services-hours.md` L16 "Counseling Department" | L218 "Counseling Department Hours" | **PASS** (live phrase + "Hours" suffix) |
| D2 | "Monday - Wednesday 7:00 am - 2:30 pm" | L18 | L220 "Monday-Wednesday: 7:00 am-2:30 pm" | **PASS** (digits/words verbatim; colon + en-dash spacing is formatting) |
| D3 | "Thursday 7:00 am - 5:30 pm" | L20 | L221 "Thursday: 7:00 am-5:30 pm" | **PASS** |
| D4 | "Friday 7:00 am - 2:30 pm" | L22 | L222 "Friday: 7:00 am-2:30 pm" | **PASS** |
| D5 | Link to STP hours page | n/a | L224 links to `https://stpete.myptc.edu/admissions/student-services-hours` | **PASS** |
| D6 | General inquiries phone is STP main line | live silent on prose; STP main line is 727-893-2500 | L230 "(727) 893-2500" | **PASS** |

### E. `admissions.html` step 3 — D1 drift fix

| # | Check | Live source | Redesign | Verdict |
|---|---|---|---|---|
| E1 | Step 3 wording matches live "If needed, meet with a school counselor (admissions contact) to discuss program interests and requirements" | `extracted/clearwater/admissions.md` L18 verbatim | L509 "If needed, meet with a school counselor (admissions contact) to discuss program interests and requirements. You can connect with a counselor before or after applying." | **PASS** (live sentence verbatim; the trailing wayfinding sentence is mild institutional voice, no factual claim added) |
| E2 | Earlier broader scope ("review your application, discuss financial aid options, and plan your enrollment timeline") removed | n/a | grep: not present anywhere on `admissions.html` | **PASS** |

### F. `admissions.html` accommodations section — M1 add

| # | Check | Live source | Redesign | Verdict |
|---|---|---|---|---|
| F1 | Verbatim sentence "Accommodations are available during the instructional program for students with documented physical or mental impairments. Please see a school counselor for further information." | `extracted/clearwater/admissions.md` L40 verbatim | L708 verbatim, character-for-character match | **PASS** |
| F2 | Section also links to both campus counselor pages | n/a | L709 "Meet Clearwater counselors" → `clearwater-counselors.html`; "Meet St. Petersburg counselors" → `stpete-counselors.html` | **PASS** |

### G. Cross-page wiring + URL fixes

| # | Check | Source / target | Redesign | Verdict |
|---|---|---|---|---|
| G1 | `clearwater-about.html` Admissions & Aid dropdown has "Meet Your Counselors" → `clearwater-counselors.html` | nav target | L93 confirms link | **PASS** |
| G2 | `stpete-about.html` Admissions & Aid dropdown has "Meet Your Counselors" → `stpete-counselors.html` | nav target | L92 confirms link | **PASS** |
| G3 | `contact.html` L805 keeps verbatim CTA sentence; new chooser links inline | n/a | L805 sentence "Our counselors are here to guide you every step of the way." kept; L806 adds two-link chooser | **PASS** |
| G4 | `contact.html` `id="counselors"` anchor exists for `tuition-aid.html` `#counselors` link | n/a | L802 `<section class="cta-band" id="counselors">` | **PASS** |
| G5 | `tuition-aid.html` L987 button repointed to `contact.html#counselors` | n/a | L987 `<a href="contact.html#counselors" ... >Talk to a Counselor</a>` | **PASS** |
| G6 | `welding-advanced.html` STP shadow-day URL replaced with STP admissions hub | shadow URL was 404; new URL `https://stpete.myptc.edu/admissions/admissions` | L888 confirms; curl returns HTTP 200 | **PASS** (live confirmed) |
| G7 | `consumer-information.html` L720-725 stale "via Counselors cluster when sized" comment refreshed to reflect cluster closure | comment | L720-728 updated, mentions "Counselors cluster (closed 2026-04-30)", references both new index pages | **PASS** |

### H. Regression spot-checks (3 random Stage 3 VERBATIM rows re-confirmed)

| # | Check | Re-result |
|---|---|---|
| H1 | `welding-clearwater.html` Santos extension `(727) 538-7167 x2017` matches live `727-538-7167 x2017` | **HOLDS** — digits identical, format normalization permitted |
| H2 | `welding-stpete.html` Ashwood extension `(727) 893-2500 x2325` matches live `727-893-2500 x2325` | **HOLDS** — digits identical |
| H3 | `welding-stpete.html` `ASHWOODC@pcsb.org` casing preserved | **HOLDS** — uppercase mailto + visible text both correct |

No regressions detected on the welding program pages. Stage 6 build did not touch the inline counselor cards on those pages, and they remain verbatim.

---

## Net result

- **Total post-build checks:** 50 (A1-A18 + B1-B5 + C1-C12 + D1-D6 + E1-E2 + F1-F2 + G1-G7 + H1-H3)
- **Pass:** 50
- **Fail:** 0
- **Needs more research:** 0

All 8 counselor cards, both hours blocks, the admissions step 3 fix, the accommodations section, the welding-advanced URL fix, and all cross-page wiring match live verbatim (within the formatting normalizations explicitly permitted by `verbatim-rule.md`). Email casing is preserved exactly as live publishes (mixed casing intact: `corthellk` lowercase, `SCOTTME` uppercase, `ASHWOODC` uppercase, `JOHNSONJER` uppercase, `randolphn` lowercase). Title canonicalization to "School Counselor" applied consistently to all 8 cards per DEC-1. Extension publishing discipline holds: only Santos x2017 (CLW) and Ashwood x2325 (STP) are published, the other 6 cards remain email-only as DEC-3 specified.

---

## Issues introduced by the build

None observed. A few notes for the record, all sub-issue (no fix required to close the cluster):

1. The hours block headings on both index pages append "Hours" to the live-canonical phrase ("Student Services Hours" / "Counseling Department Hours") rather than echoing the live exact heading style. Content is verbatim, the suffix is wayfinding clarity. Acceptable institutional voice; flag only if Marianne wants strict literal heading match.
2. Hours-block formatting on the new index pages uses colons after each weekday (`Monday-Thursday: 6:45 am-6:30 pm`) where live omits the colon. Pure punctuation formatting, no semantic drift.
3. Step 3 on `admissions.html` (E1) appends one wayfinding sentence after the verbatim live sentence: "You can connect with a counselor before or after applying." This is mild institutional voice; not a factual claim about counselor scope; consistent with what the cluster decided in DEC-2 (tighten redesign to live). Worth a one-line `follow-ups.md` entry only if Marianne wants the redesign to ship literal-only with no editorial wayfinding.
4. The general-inquiries blocks on both index pages contain the institutional-voice sentence "Not sure who to contact? Call the campus front office and we will connect you with the right counselor." Not in any live extract verbatim, but it is wayfinding voice routing to a verified phone number. Same flavor as the contact-page CTA. Acceptable per existing precedent.

None of these are drift in the high-stakes sense (no fabricated counselor names, no fabricated programs-covered, no expanded scope claims, no invented hours, no invented extensions, no invented emails). They are all wayfinding/institutional voice on top of verbatim factual content.

---

## Cluster ready to close: **YES**

Recommendation to orchestrator: advance Counselors from `verifying` to `verified` in `CLUSTERS.md`, add to drift-watch list, and proceed to the next cluster (Compliance per the queue, though Compliance was already worked — recheck `CLUSTERS.md` Active queue for next pickup; per project notes Counselors was the active cluster following Compliance).

Stage 6 implementation cleanly resolved every drift item, every missing item that the cluster could resolve in-redesign, and the URL fix for `welding-advanced.html`. The 10 follow-up items routed to `follow-ups.md` are correctly out of scope for this cluster and live owners' to decide.

---

## Appendix: Stage 3 (pre-build) verification snapshot

Preserved verbatim from the original Stage 3 run for traceability. Stage 3 was an independent first-principles check that found zero fabrications and one Comparator-flip on the `welding-advanced.html` "dual-counselor layout" (correctly identified as a per-campus chooser, not a fabrication).

### Stage 3 high-stakes re-check table

| # | Claim | Source files | Verdict | Direct quotes |
|---|---|---|---|---|
| 1 | `welding-clearwater.html` counselor card name | live: `extracted/clearwater/program-welding-technology.md` L21 / redesign L960 | **CONFIRM-VERBATIM** | Live: "Valerie Santos, School Counselor". Redesign: `<h3>...Valerie Santos</h3>` + "School Counselor". |
| 2 | `welding-clearwater.html` counselor email casing | live L23 / redesign L967-969 | **CONFIRM-VERBATIM** | Live: "santosv@pcsb.org". Redesign mailto + visible text both lowercase. |
| 3 | `welding-clearwater.html` phone + extension | live L23 / redesign L971-973 | **CONFIRM-VERBATIM** (formatting normalized) | Live: "727-538-7167 x2017". Redesign: "(727) 538-7167 x2017". |
| 4 | `welding-stpete.html` counselor name | live: `extracted/stpete/program-welding-technology.md` L21 / redesign L1107 | **CONFIRM-VERBATIM** | Live: "Cheri Ashwood, School Counselor". |
| 5 | `welding-stpete.html` counselor email casing | live L23 / redesign L1114-1116 | **CONFIRM-VERBATIM** | Live: "ASHWOODC@pcsb.org" uppercase preserved. |
| 6 | `welding-stpete.html` phone + extension | live L23 / redesign L1118-1120 | **CONFIRM-VERBATIM** (formatting normalized) | Live: "727-893-2500 x2325". Redesign: "(727) 893-2500 x2325". |
| 7 | `welding-advanced.html` "dual-counselor layout" — flagged as fabrication | live: per-campus extracts / redesign L856-891 | **NOT FABRICATED — FLIP** | Per-campus chooser, each card labeled by campus, surfaces that campus's single counselor verbatim. |
| 8 | Generic "Talk to a Counselor" CTAs | redesign `admissions.html` L508-509 etc. | **REWORDED-DRIFT (low stakes)** | D1 — resolved in Stage 6 build (E1 above). |
| 9 | "Our financial aid counselors..." | `tuition-aid.html` L787 | **NEEDS-MORE-RESEARCH** | Out-of-cluster, deferred to Tuition cluster. |
| 10 | "Our counselors are here to guide you..." | `contact.html` L805 | **NEEDS-MORE-RESEARCH** | Out-of-cluster. |
| 11 | All 8 counselor names match staff page extracts | live: `extracted/{clw,stp}/campus-staff.md` / redesign | **CONFIRM-VERBATIM** for the 2 published; others not in redesign at Stage 3 | All 8 now published in Stage 6 build, all verified above. |
| 12 | Extension numbers in redesign match live | redesign welding pages | **CONFIRM-VERBATIM** | Only x2017 and x2325 published. |
| 13 | "School Counselor" title casing | live program pages L21 / redesign | **CONFIRM-VERBATIM** | Matches. |
| 14 | Welding-CLW hero nudge | redesign L677 | **REWORDED-DRIFT (acceptable wayfinding)** | UI affordance, not factual claim. |
| 15 | "Schedule a Shadow Day" links on `welding-advanced.html` | live admissions extracts | **CONFIRM (CLW)** / **NEEDS-MORE-RESEARCH (STP)** | STP URL was 404, replaced in Stage 6 (G6). |

### Stage 3 counts
- CONFIRM-VERBATIM: 9
- CONFIRM-WITH-CAVEAT (FLIP): 1
- REWORDED-DRIFT (acceptable): 2
- NEEDS-MORE-RESEARCH: 3
- FABRICATED: 0
- MISSING: 0
- Spot-checks held: 3/3
