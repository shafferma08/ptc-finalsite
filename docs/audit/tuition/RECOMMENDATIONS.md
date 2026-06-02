# Tuition Cluster — RECOMMENDATIONS (Stage 4 punch list)

**Generated:** 2026-06-02
**Inputs:** `OVERLAP-MATRIX.md`, `REDESIGN-COMPARISON.md`, `IA-RECOMMENDATION.md`, `VERIFICATION.md`, 19 live extracts (`extracted/{clearwater,stpete}/`)
**Redesign targets:** `tuition-aid.html` (institutional, exists — heavy rewrite) + `clearwater-tuition.html` + `stpete-tuition.html` (NEW thin action pages)

---

## Headline

`tuition-aid.html` is the most fabricated page found in the audit to date. Comparator: **14 FABRICATED, 18 MISSING, 4 REWORDED-DRIFT, 1 VERBATIM, 8 REWORDED-OK.** Verifier independently **confirmed 27/27** high-stakes flags, **0 flips**, 1 NEEDS-MORE-RESEARCH (CLW street address → Contact cluster). The page was built before the verbatim discipline with no live www tuition source. Stage 5 is a near-rewrite, not a touch-up. Every replacement value below is verbatim from the cited extract.

The IA decision (3-page split) is secondary to the fabrication cleanup. Confirm the decisions below, then build.

---

## Decisions needing Marianne (confirm before/at build)

| ID | Decision | IA-Recommender's call | Your call |
|---|---|---|---|
| DEC-1 | Single page vs 3-page split | **Lopsided 3-page split**: substantive institutional `tuition-aid.html` (~90% shared content) + thin `clearwater-tuition.html` + `stpete-tuition.html` for the 3 divergent facts (FAFSA code, NPC URL, CLW vet block). Matches Admissions precedent. | ☐ |
| DEC-2 | Fabricated FAQ section | **Strip entirely** — no verbatim live FAQ source (same as Admissions; defer to live-owner authoring later). | ☐ |
| DEC-3 | Estimated-total-tuition + "900–1,800 hours" range | **Remove** — fabricated derivation from the wrong rate, no live source. | ☐ |
| DEC-4 | Dual Enrollment "$0" tuition row | **Remove** — no live source in this cluster. Revisit in Programs cluster. | ☐ |
| DEC-5 | Bill Young waiver placement | **Anchor once under `#veterans`**, cross-link from `#rates` (live duplicates it; redesign de-dupes). | ☐ |
| DEC-6 | Two scholarship pages | **Consolidate** into `#scholarships` (verbatim list + 2 STP-only entries marked) + single outbound PCSB link. | ☐ |

---

## Punch list

### F — Fabrications (fix verbatim, highest stakes)

| ID | Location | Current (WRONG) | Replace with (verbatim live) | Source |
|---|---|---|---|---|
| **F1** | FAFSA card + FAQ + "How Aid Works" step 2 (3 places) | "Federal School Code **013847**" + "use the same code for both campuses" | **Clearwater 005605 / St. Petersburg 013917** (two distinct campus codes). Per-campus codes move to the campus pages; institutional `#fafsa` explains there are two. | `{clw,stp}/federal-and-state-funding.md` |
| **F2** | `#rates` resident row | "$2.91/clock hour" | **"$2.92 per hour for residents"** | `{clw,stp}/fees-and-expenses.md` |
| **F3** | `#rates` non-resident row | "$11.64/clock hour" | **"$11.71 per hour for nonresidents/foreign students"** | `{clw,stp}/fees-and-expenses.md` |
| **F4** | `#rates` note | "Rates are set by the Florida Legislature" | **"Tuition for programs offered is established by the Pinellas County School Board."** | `{clw,stp}/fees-and-expenses.md` |
| **F5** | `#rates` estimate block | "~$2,619–$5,238" / "~$10,476–$20,952" / "900–1,800 hours" | **Remove** (DEC-3). | none |
| **F6** | `#rates` dual-enrollment row | "Dual Enrollment (HS Students) — $0" | **Remove** (DEC-4). | none |
| **F7** | `#veterans` GI Bill list | "approved for Chapter 30, 33, 35, and 1606" | Keep only what live states: **Post-9/11 GI Bill® (Ch. 33)** and **Voc Rehab & Employment (Ch. 31)** under Title 38 USC 3679(e). Remove Ch. 30 and Ch. 1606 (those appear on live only as Barrett scholarship eligibility, not PTC approvals). | `{clw,stp}/veterans-benefits.md` |
| **F8** | `#veterans` MyCAA | "MyCAA — up to $4,000" | **Remove** — no live source. | none |
| **F9** | `#veterans` Tuition Assistance | "Active-duty members can use federal Tuition Assistance" | **Remove** — no live source. | none |
| **F10** | `#veterans` Ch. 31 description | "Ch. 31 VR&E can cover tuition, fees, and supplies" | Remove the descriptive claim; Ch. 31 may be named only in the Title 38 3679(e) context as live does. | `{clw,stp}/veterans-benefits.md` |
| **F11** | `#pay` "Pay Tuition Online" CTA + "pay online through Focus" | online/Focus payment | **"ALL students must come to the bookstore to pay fees EACH TERM - payment does not happen automatically."** Accepted: cash, credit card (Visa/MasterCard), FL Prepaid ID Card, money orders, personal checks, Cashier's Checks. Due first day of class. | `{clw,stp}/fees-and-expenses.md` |
| **F12** | `#federal-state` "WIOA grants" | "Workforce Innovation and Opportunity Act (WIOA) grants" | Replace with live-named programs (see M9). WIOA is not named in any live extract; **CareerSource Pinellas** is the live framing. | `{clw,stp}/federal-and-state-funding.md` |

### M — Missing (add verbatim)

| ID | Add to | Verbatim live content | Source |
|---|---|---|---|
| **M1** | `#rates` | **Adult General Education** tuition: "$45 per term for residents (not to exceed two terms/$90 per year) and $120 per term for nonresidents/foreign students (not to exceed three terms/$360 per year); some classes have lab fees." (ESOL, Adult Disabled, GED; excludes HS Credit, homeless, state foster care). | `{clw,stp}/fees-and-expenses.md` |
| **M2** | `#rates` | Full itemized fee list: application/processing fee, ID card, parking permit, books/tools/supplies, laboratory fees, equipment and facility usage fees, graduation fees, uniforms (as required), certification/licensure exam assessments (as required). | `{clw,stp}/fees-and-expenses.md` |
| **M3** | `#rates`/`#pay` | FL Prepaid note: "Currently, only tuition fees are covered. Other fees should be paid out of pocket or through another type of financial aid." | `{clw,stp}/fees-and-expenses.md` |
| **M4** | NEW `#refund` | Active-military options (full refund/credit OR complete course later w/o penalty); withdrawal within **first 10 class sessions or first 50 enrollment hours, whichever first**; refunds of tuition + lab fees **within 45 days**; **nonrefundable: application, facility, parking, ID fees**; "Tuition paid by Title IV funding (Pell Grant) will be refunded to the grant according to the Title IV policy." | `{clw,stp}/refund-policy.md` |
| **M5** | `#veterans` | **Bill Young Veteran Tuition Waiver** (HB 7015 / Ch. 2014-1) — out-of-state fee waiver for honorably discharged FL-resident veterans. | `{clw,stp}/fees-and-expenses.md` + `veterans-benefits.md` |
| **M6** | `#veterans` | **Purple Heart / combat decoration waiver** (s. 1009.26(8), F.S.). | `{clw,stp}/fees-and-expenses.md` |
| **M7** | `#veterans` | **Title 38 USC 3679(e)** pending-payment provisions (no enrollment block, no late penalty, etc.) + **Chapter 35 online restriction** ("will not be certified for any program taught in whole or in part in an online, distance learning, independent study, hybrid, or blended format") + **attendance** (80% monthly / 20% absence terminates; Practical Nursing 94%) + appeal process. | `{clw,stp}/veterans-benefits.md` |
| **M8** | `#scholarships` | Named verbatim list (shared): American Welding Society (Mar 1); AFCEA (Feb 28, 3.0 GPA); Bailey Family Foundation ($5,000/yr, tuition only, Jan 1–Mar 15 & Jul 1–Sep 15); Marine Technology Society ($2,000, Apr 15); PTC Nursing Service (two per class, 90% attendance, 80% GPA); Passmore ($200–$500, women 21+, Apr 30); Pinellas Education Foundation (December). **STP-only (mark asymmetric):** Barrett Family Foundation VA; FCSUA/PTC-UP. | `{clw,stp}/scholarships.md` |
| **M9** | `#federal-state` | Named programs: Federal Pell; **Florida Bright Futures** (FAS/FMS/GSV); **FL Public Postsecondary Career Education Student Assistance Grant** (450+ hrs, unmet need $200+); **Vocational Rehabilitation**; **Youth Connect** (ages 16–21, up to $2,500); **CareerSource Pinellas** dislocated-worker funding. | `{clw,stp}/federal-and-state-funding.md` |
| **M10** | `#fafsa` | Verification, SAP, **90% attendance to graduate** (Pell prorated if not met), **Return of Title IV at 60.01%** threshold, FAME ID-theft processing. | `{clw,stp}/financial-aid-hub.md` |

### D — Drift (replace distorted wording)

| ID | Location | Fix |
|---|---|---|
| **D1** | `#rates` rate-setter | Covered by F4 (Florida Legislature → Pinellas County School Board). |
| **D2** | FAQ/refund | Covered by M4 — vague "full refund during the first week" replaced by verbatim 10-session/50-hour policy. |
| **D3** | FAFSA framing | Covered by F1 — "same code, one institution" replaced by two per-campus codes. |
| **D4** | Workforce funding | Covered by F12/M9 — WIOA replaced by CareerSource Pinellas + named programs. |

### B — Build / structural

| ID | Action |
|---|---|
| **B1** | Rebuild `#veterans` from `veterans-benefits.md`; anchor Bill Young + Purple Heart waivers here (DEC-5); strip all fabricated chapters/MyCAA/TA. |
| **B2** | Add NEW `#refund` section (M4) verbatim. |
| **B3** | Consolidate `#scholarships` (M8) + single outbound PCSB link; retire the standalone PCSB pass-through concept (DEC-6). |
| **B4** | Remove `#faq` section entirely (DEC-2). |
| **B5** | Build `clearwater-tuition.html` (thin): FAFSA code **005605**; CLW NPC link (`pcsb.org/.../domain/134/netprice/index.html`); CLW FA Office 727-538-7167 **Option 7**; **Military & Veteran Student Resources** block — MVRC Building 1; Lidija Milisav (Military & Veteran Resources Coordinator, milisavl@pcsb.org, x2020); Susan Welden (VA Certifying Official, weldens@pcsb.org, x2023); events + resource links. (asymmetric, CLW-only) | 
| **B6** | Build `stpete-tuition.html` (thin): FAFSA code **013917**; STP NPC link (from `stpete/net-price-calculator.md`); STP FA Office 727-893-2500; veterans → link to institutional `#veterans` (STP has no resource center — see follow-up). |
| **B7** | Wire `#net-price` chooser: CLW + STP buttons to the two real PCSB NPC URLs (currently dead `href="#"`). |

### C — Chrome / dead links (Verifier-surfaced)

| ID | Action |
|---|---|
| **C1** | NPC buttons + several CTAs resolve to dead `href="#"` (covered by B7 for NPC; sweep the rest). |
| **C2** | Redesign omits the live **"Institutional Application Form"** requirement — confirm and add if applicable. |

---

## Follow-ups to route to `follow-ups.md`

1. **(High)** STP publishes NO named VA specialists — the inventory's expected Schnell (VA) / Mitchell (Pell) do NOT exist in STP DOM or raw HTML. STP should publish VA contacts and/or a Military & Veteran Resources page for parity with CLW. (asymmetry)
2. **(Med)** Live duplicates the Bill Young / Purple Heart waiver block verbatim on both `fees-and-expenses` and `veterans-benefits` (both campuses) — consolidation candidate on live.
3. **(Med)** No institutional www tuition/financial-aid page — live www has only an empty placeholder. The redesign creates the canonical institutional page; recommend live mirror eventually.
4. **(Low)** PCSB NPC links are external (`pcsb.org/.../domain/134/...`) — add to drift-watch; if PCSB moves them both campus pages break.
5. **(Low)** Rate-refresh owner: PCSB CTAE administration (Frank Cianca relay); add annual July refresh checkpoint (rates change at fiscal-year boundaries).
6. **(Low)** Live typo on fees page: "recent Florida high school **grades**" should be "graduates." Preserved verbatim in extract.
7. **NEEDS-MORE-RESEARCH:** Clearwater street address (6100 154th Ave N) is not in tuition extracts — verify against About/Contact cluster before publishing on campus page.

---

## Two-campus classification

- **shared** (institutional `tuition-aid.html`): rates, AGE fees, fee list, payment terms, FAFSA framework, verification/SAP, federal/state programs, scholarship list, veterans statutory/GI Bill content, Bill Young/Purple Heart waivers, refund policy.
- **campus-specific** (campus pages): FAFSA school code (005605/013917), NPC URL, FA office phone.
- **asymmetric** (CLW-only): Military & Veteran Student Resources block (Milisav/Welden/MVRC/events); STP-only scholarships (Barrett VA, FCSUA) marked on the shared list.

---

## Build order (Stage 5)

1. F1–F12 fabrication fixes on `tuition-aid.html` (rates, codes, rate-setter, payment, veterans strips, WIOA).
2. M1–M3 (`#rates` AGE tier + fee list + FL Prepaid), M10 (`#fafsa` Title IV details).
3. B2 add `#refund` (M4).
4. B1 rebuild `#veterans` (M5–M7), anchor waivers.
5. B3 consolidate `#scholarships` (M8), M9 federal/state programs.
6. B4 remove `#faq`; B7 wire NPC chooser.
7. B5 build `clearwater-tuition.html`; B6 build `stpete-tuition.html`.
8. C1–C2 chrome sweep; file the 7 follow-ups.

When the punch list is empty, advance `building` → `verifying` and re-run the Verifier against the rebuilt pages.
