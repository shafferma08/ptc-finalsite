# Contact Cluster — Redesign vs Live Comparison

Cluster: **contact** | Stage 2+3 combined (small 3-page cluster)
Pages audited: `contact.html`, `clearwater-contact.html`, `stpete-contact.html`
Date: 2026-06-11

There are no dedicated live "Contact" pages. Live contact facts were gathered from:

- `https://clearwater.myptc.edu/school-information/about-us/ptc-clearwater-campus-information` (live, fetched 2026-06-11)
- `https://stpete.myptc.edu/school-information/about-us/ptc-st-petersburg-campus-information` (live, fetched 2026-06-11)
- Live homepage footers: `clearwater.myptc.edu`, `stpete.myptc.edu`, `www.myptc.edu` (fetched 2026-06-11, raw HTML, `fsLocation*` regions)
- Already-extracted About-cluster stubs at `docs/audit/about-cluster/extracted/{clearwater,stpete}/ptc-*-campus-information.md` (scraped 2026-04-25)

Raw captures saved to `docs/audit/contact/extracted/` (`home-clearwater.html`, `home-stpete.html`, `home-www.html`, plus the campus-information fetches).

---

## HEADLINE DETERMINATION: FAX NUMBERS ARE NOT FABRICATED

Both fax numbers in the redesign are **VERBATIM live-sourced**. They appear on the live campus-information pages:

- Clearwater live: `(727) 538-7167 - Fax (727) 538-7203`
- St. Petersburg live: `(727) 893-2500 | Fax (727) 893-2776`

Redesign matches both **character-for-character**. No fabrication.

## SECOND DETERMINATION: "1900 Gandy Blvd N" is NOT a district/contact address

The string `1900 Gandy Blvd N` appears on the Clearwater and St. Pete live homepages, but the surrounding markup is:

> `<div class="fsLocation">First Baptist Church of St. Petersburg 1900 Gandy Blvd N.  |  St. Petersburg, FL 33702</div>`

It is a **calendar event venue** inside the news/events widget, not the PCSB district address and not an institutional contact address. The redesign correctly does **not** present it as a PTC address. No action needed. (The task brief's assumption that it is the PCSB district address is incorrect.)

---

## Comparison table

| # | Page | Topic | Redesign Claim | Live Source | Live Wording | Status | Action |
|---|------|-------|----------------|-------------|--------------|--------|--------|
| 1 | clearwater-contact | CLW fax | `Fax: (727) 538-7203` (line 256) | clearwater campus-information page | `Fax (727) 538-7203` | VERBATIM | None |
| 2 | contact | CLW fax | `(727) 538-7203` (line 625) | clearwater campus-information page | `Fax (727) 538-7203` | VERBATIM | None |
| 3 | stpete-contact | STP fax | `Fax: (727) 893-2776` (line 256) | stpete campus-information page | `Fax (727) 893-2776` | VERBATIM | None |
| 4 | contact | STP fax | `(727) 893-2776` (line 653) | stpete campus-information page | `Fax (727) 893-2776` | VERBATIM | None |
| 5 | clearwater-contact | CLW address | `6100 154th Avenue North, Clearwater, FL 33760` (line 254) | clearwater footer + campus-info | `6100 154th Ave N ... Clearwater ... FL ... 33760` | REWORDED-OK (Ave N spelled out; ZIP/street identical) | None |
| 6 | contact | CLW address | `6100 154th Ave N, Clearwater, FL 33760` (line 611) | www/clearwater footer | `6100 154th Ave N \| Clearwater \| 33760` | VERBATIM | None |
| 7 | stpete-contact | STP address | `901 34th Street South, St. Petersburg, FL 33711` (line 254) | stpete footer + campus-info | `901 34th St S ... St. Petersburg ... FL ... 33711` | REWORDED-OK (St S spelled out; ZIP/street identical) | None |
| 8 | contact | STP address | `901 34th St S, St. Petersburg, FL 33711` (line 639) | www/stpete footer | `901 34th St S \| St Pete \| 33711` | VERBATIM | None |
| 9 | all 3 | CLW phone | `(727) 538-7167` (contact 618, clw-contact 119/255, footer 309) | clearwater footer + campus-info | `(727) 538-7167` | VERBATIM | None |
| 10 | all 3 | STP phone | `(727) 893-2500` (contact 646, stp-contact 119/255, footer 309) | stpete footer + campus-info | `(727) 893-2500` | VERBATIM | None |
| 11 | stpete-contact | CVAEC class location | "One section of CSIT meets at CVAEC, a separate PTC location." (line 272) | stpete live homepage references `CVAEC` | (referenced; full schedule lives in schedule cluster) | REWORDED-OK | Confirm exact CSIT/CVAEC wording against schedule-stpete source during schedule cluster audit |
| 12 | clearwater-contact, stpete-contact | Office hours | None shown | n/a | n/a | n/a (correctly absent) | None — no invented hours |
| 13 | all 3 | Named staff / dept names | None shown (staff directory is a link only) | n/a | n/a | n/a (correctly absent) | None |
| 14 | all 3 | Campus email address | Not shown | live footers contain a JS-inserted email (`FS.util.insertEmail`) | obscured in raw HTML | MISSING (LOW) | Optional: route to owners to confirm a public contact email; live obscures it deliberately |
| 15 | clearwater-contact, stpete-contact | "Schedule a Visit" copy | CLW: tours/shadow days; STP: "Contact your campus counselor ... Some programs have specific days and dress codes." | admissions cluster (shadowing) | matches admissions shadowing language | REWORDED-OK | None (already verified in admissions cluster) |

---

## Mechanical checks

| Check | Result |
|-------|--------|
| Em dashes in body text | PASS (0 in body) |
| Em dash elsewhere | 1 in `contact.html` `<title>` (line 6): `Contact Us — Pinellas Technical College`. Tab title, low visibility, but violates the no-em-dash rule. Replace with a pipe or comma. |
| Addresses/ZIP/phone/fax digit match | PASS (all match live) |
| Campus chrome correct | PASS (clw-contact carries Clearwater header/utility bar; stpete-contact carries St. Pete; contact.html carries institutional chrome) |
| Contact FORM present? | NO. `contact.html` ships `.contact-form`/`.form-group`/`.btn-submit` CSS (lines 199-279) but there is no `<form>` element in the body. The campus pages have no form either. No dead-action form to wire. |
| Dead links | Two `href="#"` search buttons in campus utility bars (clw-contact line 131, stpete-contact line 131). Chrome, not contact claims; flag as polish. |

---

## Quantitative summary

- VERBATIM: 8
- REWORDED-OK: 4
- REWORDED-DRIFT: 0
- MISSING: 1 (campus email, LOW)
- FABRICATED: 0
- OUTDATED: 0

**Zero fabrications. Zero drift. The fax numbers and all addresses/phones are live-accurate.**

---

## Top priority fixes

1. **(LOW, mechanical)** Remove the em dash in `contact.html` `<title>` (line 6). Use `Contact Us | Pinellas Technical College`.
2. **(LOW, content gap)** Decide whether to surface a public campus email. Live footers carry one (JS-obscured); redesign omits it. Route to live-site owners rather than inventing an address.
3. **(LOW, polish)** Resolve the two `href="#"` search buttons in the campus utility bars (clw-contact / stpete-contact line 131).
4. **(VERIFY in schedule cluster)** Confirm exact wording of the CSIT-at-CVAEC claim on `stpete-contact.html` (line 272) against the St. Pete schedule source.
5. **No fabrications to strip and no dead form to wire.** The unused `.contact-form` CSS in `contact.html` can be deleted as dead code (cosmetic).

## Resolved deferred item

The previously-deferred "CLW street address NEEDS-MORE-RESEARCH" item from the Tuition cluster is **resolved**: Clearwater = 6100 154th Ave N, Clearwater, FL 33760, (727) 538-7167. Confirmed against live footer and campus-information page, matches the redesign.
