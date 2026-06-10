# Programs Cluster — Inventory (Stage 1)

**Generated:** 2026-06-08
**Method:** Rendered-DOM WebFetch of the three subsite `/programs` hubs + glob of existing redesign program pages + scan of `programs.html` grid. Per the Stage 1 binding rule (no URL inference) and the JS-render-gap rule (rendered DOM, not curl).

---

## Headline findings

1. **www has no programs hub.** `https://www.myptc.edu/programs` returns **404**. Same institutional/campus split as Admissions and Tuition: the redesign owns an institutional `programs.html`, but the verbatim source pool is the two campus subsites only.
2. **Programs live entirely on the campus subsites**, under clean, predictable slugs:
   - Clearwater: `/programs/clearwater-full-time-programs/<slug>`, `/programs/clearwater-apprenticeships/<slug>`, `/programs/short-courses-evening-classes/<slug>`
   - St. Pete: `/programs/st-petersburg-full-time-programs/<slug>`, `/programs/st-petersburg-apprenticeships/<slug>`, `/programs/short-courses-evening-classes/<slug>`, `/programs/ptc-st-petersburg-clearview-adult-education-center-programs/<slug>`
3. **This is the largest cluster by far.** ~41 program listings per campus (82 total listings; ~60+ unique programs after de-duping shared programs). The redesign currently has only **3 program pages built** (the welding pilots) plus the `programs.html` grid. Realistic build is **~70-82 per-program pages**. Must be run in **waves**, not as one pipeline pass.
4. **The "60+ programs / 40+ career areas" figure reconciles.** Live lists 41 (CLW) + 41 (STP) = 82 listings; unique programs ≈ 60+; the 8 redesign clusters ≈ the "40+ career areas" framing. The `programs.html` grid (41 cards) is therefore **incomplete** and/or a de-duplicated institutional view; reconcile in Stage 3.

---

## Live program inventory

### Clearwater (41 listings)

**Full-Time (28):** Accounting Operations; Baking & Pastry Arts; Barbering; Cabinetmaking; Child Care Center Operations; Computer Systems & Information Technology; Diesel Maintenance Technician; Diesel Systems Technician 1; Diesel Systems Technician 2; Electricity; Electricity 1; Electronic Systems Integration and Automation; Fundamental Foodservice Skills; HVAC/R 1 - IET; Interior Decorating Services; Machining Technologies; Marine Service Technologies; Master Automotive Service Technology 1; Master Automotive Service Technology 2; Medical Administrative Specialist; Network Support Services; Phlebotomy; Practical Nursing; Professional Culinary Arts & Hospitality; Stage Production; Web Development; Welding Technology; Welding Technology - Advanced.

**Short Courses / Evening (6):** CPR | AED | First Aid; Effective Leadership; IV Therapy for LPNs; Machining - Short Course - Evening; School Board Employee Training; Welding.

**Apprenticeships (7):** Automotive Electrical/Electronics/Hybrid-EV Systems; Facilities Maintenance; Electrician (Bay Area Electrical); Electrician (Independent Electrical Contractors); HVAC; Tampa Bay Machining; Sprinkler Fitter.

### St. Petersburg (41 listings)

**Full-Time (28):** Automotive Collision Technology Technician; Barbering; Building Trades and Construction Design Technology; Child Care Center Operations; Commercial Class B Driving; Commercial Vehicle Driving; Computer-Aided Drawing and Modeling; Computer Systems and Information Technology; Cosmetology; Dental Assisting; Digital Media and Multimedia Design; Early Childhood Education; Electricity; Emergency Medical Technician; Facials Specialty; HVAC/R 1; Master Automotive Service Technology 1; Master Automotive Service Technology 2; Medical Coder/Biller; Nails Specialty; Plumbing; Practical Nursing; Professional Culinary Arts & Hospitality; Public Works; School Age Professional Certificate; Surgical Technology; Welding Technology; Welding Technology - Advanced.

**Short Courses / Evening (6):** Air Conditioning Service Fundamentals (external); Child Care Staff Credential Renewal Courses; Intro to Construction Inspection; Drone Pilot | Small Unmanned Aircraft Systems (external); Forklift Operation and Safety (external); Silversmithing 101.

**Apprenticeships (6):** Child Care; Fire Fighting; Industrial Machinery Maintenance; Industrial Pipefitter; Plumbing Technology; Roadway Technician.

**Clearview Adult Education Center (1):** Computer Systems & Information Technology (CSIT)-IET @ CVAEC.

---

## Two-campus classification (preliminary — IA-Recommender confirms in Stage 3)

**Shared full-time (offered at BOTH campuses, ~11):** Barbering, Child Care Center Operations, Computer Systems & IT, Electricity, HVAC/R 1, Master Automotive Service Technology 1, Master Automotive Service Technology 2, Practical Nursing, Professional Culinary Arts & Hospitality, Welding Technology, Welding Technology - Advanced.

**Binding-rule note:** Per the two-campus rule, "offered at both" does NOT mean "shared content." The welding pilots were built as separate per-campus pages (`welding-clearwater.html`, `welding-stpete.html`) because hours/schedule/counselor/instructor details differ. **Default treatment is per-campus** unless Stage 3 finds byte-identical content. So even shared programs are likely two pages each.

**Clearwater-only full-time (~16):** Accounting Operations, Baking & Pastry Arts, Cabinetmaking, Diesel Maintenance Technician, Diesel Systems Technician 1, Diesel Systems Technician 2, Electronic Systems Integration and Automation, Fundamental Foodservice Skills, Interior Decorating Services, Machining Technologies, Marine Service Technologies, Medical Administrative Specialist, Network Support Services, Phlebotomy, Stage Production, Web Development.

**St. Pete-only full-time (~17):** Automotive Collision, Building Trades & Construction Design, Commercial Class B Driving, Commercial Vehicle Driving, Computer-Aided Drawing & Modeling, Cosmetology, Dental Assisting, Digital Media & Multimedia Design, Early Childhood Education, Emergency Medical Technician, Facials Specialty, Medical Coder/Biller, Nails Specialty, Plumbing, Public Works, School Age Professional Certificate, Surgical Technology.

Apprenticeships and short courses are almost entirely campus-specific (`asymmetric`).

---

## Redesign state today

- **Institutional grid:** `programs.html` — 41 `.prog-card`s across 8 clusters (`business`, `transportation`, `culinary`, `cosmo`, `trades`, `arts`, `it`, `health`), each tagged `data-campus` (`clw`, `stp`, or `clw stp`). Incomplete vs the ~60+ live programs.
- **Built program pages (3):** `welding-clearwater.html`, `welding-stpete.html`, `welding-advanced.html` (the pilots).
- **Template:** `_templates/program-page.html` — 11 required + 10 optional modules (canonical).
- **Naming convention (from pilots):** `<program-slug>-<campus>.html` per campus; a shared `<program-slug>.html` only if Stage 3 confirms identical content.

---

## Scope decisions for Stage 3

1. **Short courses / evening + external links — IN or OUT?** Several are bare external links (Air Conditioning Service Fundamentals, Drone Pilot, Forklift). Recommend: full program pages for full-time programs; short courses get a lighter listing or link-out, not full template pages. IA-Recommender to decide.
   **Marianne's direction (2026-06-10):** Short courses and apprenticeships get **their own area**, but it must be **easily accessible** (not buried). Important terminology distinction: PTC's COE-accredited programs vary in length, and the shorter COE programs are NOT "short courses." "Short courses" on the live site = **OWI courses**, a different animal. Consider renaming the category to something other than "short courses" in the redesign IA (naming TBD, propose options at Stage 3 / Wave 6).
2. **Apprenticeships — full pages or a hub?** 13 apprenticeships, mostly thin. Recommend a single Apprenticeships hub per campus (or one institutional page) rather than 13 template builds. IA-Recommender to decide. **Marianne's direction (2026-06-10):** own area + easily accessible, same as short courses above.
3. **Shared-program de-dup.** For the ~11 both-campus programs, Stage 3 Comparator must check whether CLW and STP content is identical (then one shared page) or differs (two pages, like welding).
4. **programs.html grid reconciliation.** Expand to cover all ~60+ unique programs (and fix the "41 programs" homepage preamble + the 40+/60+ figures), or define it explicitly as a de-duplicated institutional index. Cross-references the open homepage follow-up.
5. **Counselor/instructor cross-links.** Each program page carries an Admissions Contacts line (counselor) and sometimes instructor contacts. The Counselors cluster already extracted welding counselors; reuse rather than re-source.

---

## Recommended wave plan (this cluster cannot run as one pipeline pass)

Treat Programs as a set of sub-clusters, each going through extract → analyze → build → verify. Suggested waves by career cluster (highest enrollment/most-requested first), both campuses per wave:

- **Wave 0 (done):** Welding (pilots) — `welding-clearwater`, `welding-stpete`, `welding-advanced`.
- **Wave 1 — Health:** Practical Nursing, Phlebotomy, Dental Assisting, EMT, Surgical Technology, Medical Administrative Specialist, Medical Coder/Biller.
- **Wave 2 — Trades:** Electricity / Electricity 1, HVAC/R, Plumbing, Cabinetmaking, Building Trades, Public Works, Marine Service.
- **Wave 3 — Transportation:** Master Auto 1 & 2, Auto Collision, Diesel (3), Commercial Driving (2).
- **Wave 4 — IT / Business / Arts:** Computer Systems & IT, Network Support, Web Development, CAD, Digital Media, Accounting Operations, Interior Decorating, Stage Production.
- **Wave 5 — Culinary / Cosmo / Child Care:** Culinary & Hospitality, Baking & Pastry, Fundamental Foodservice, Barbering, Cosmetology, Nails, Facials, Child Care, Early Childhood, School Age.
- **Wave 6 — Apprenticeships + Short Courses:** hub treatment per the Stage 3 scope decision.

Each wave is a normal extract/analyze/build/verify pass scoped to its program list. Run interactively (the auto-builder routine was disabled 2026-06-08 precisely because unattended per-program builds were committing unreviewed content to main).

---

## Stage 2 work queue (per wave)

For each program in the active wave, extract verbatim via WebFetch (rendered DOM) from the campus subsite URL (slug pattern above) into `docs/audit/programs/extracted/{clearwater,stpete}/<slug>.md`. The slugs are clean and predictable, so Stage 2 is mechanical. Save a `.raw.html` backup alongside each (Finalsite JS-render gap).

---

## Stage 1 hand-off

- CLUSTERS.md row 7: note Stage 1 complete + the wave plan; set status to reflect that Programs runs as waves (recommend starting Wave 1 — Health — as the next Stage 2 pass).
- The institutional `programs.html` grid + the "41 vs 60+" reconciliation are their own Stage 3 IA item, separate from the per-program builds.
