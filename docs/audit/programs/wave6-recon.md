# Wave 6 Recon — Apprenticeships + Short Courses + Clearview (2026-06-11)

Recon for the final Programs sub-wave. Raw captures in `extracted/wave6/`.

## What live actually has

### Apprenticeships (campus-specific, content-rich)
Live per-campus under `/programs/{campus}-apprenticeships`. Each individual page is substantial (~11-13K visible chars: wages, hours, sponsor, contacts), comparable to a full program page.

- **CLW (7):** Automotive Electrical/Electronics/Hybrid-EV Systems; Electrician (Bay Area Electrical); Electrician (Independent Electrical Contractors); Facilities Maintenance; HVAC; Sprinkler Fitter; Tampa Bay Machining.
- **STP (6):** Child Care; Fire Fighting (+ 2 sub-pages: CPAT testing, FireTEAM testing); Industrial Machinery Maintenance; Industrial Pipefitter; Plumbing Technology; Roadway Technician.
- Total: 13 apprenticeships (+ 2 Fire Fighting testing sub-pages). All asymmetric/campus-specific (different sponsors per campus).

### Short Courses / Evening (NOT campus-specific — it's an OWI thing)
Both campus slugs `/programs/short-courses-evening-classes` **redirect to a single institutional www page** under Office of Workforce Innovation:
`https://www.myptc.edu/workforce-innovation/office-of-workforce-innovation/ptc-short-courses-evening-classes` (~49KB, one page).

Live page title: "Short Courses & Evening Classes". Section subhead: "Continuing Workforce & Life Enrichment Courses". Lists (with per-course campus-location notes): Air Conditioning Service Fundamentals; Child Care Staff or Director Credential Renewal Courses; Drone Pilot (sUAS); Forklift Operation & Safety; Water Treatment Plant Operation Study Session (Online); School Board Employee Training; Welding (Evening Class); CPR | AED | First Aid; Silversmithing 101; Upholstery.

**This confirms Marianne's point:** "short courses" = OWI courses, an institutional area, distinct from the shorter COE full-time programs (which stay under Programs).

### Clearview Adult Education Center (STP-specific)
1 program: Computer Systems & Information Technology (CSIT)-IET @ CVAEC (~73KB, substantial page).

## Open decisions for Marianne (naming + structure + build scope)
1. Apprenticeships: hub-per-campus vs full per-program pages vs hybrid.
2. Naming/label for the OWI short-courses area in the redesign nav/IA (she flagged "short courses" is confusing vs short COE programs).
3. Where this whole area lives / how it's made "easily accessible" (under Programs, own nav area, or a Workforce area mirroring OWI on www).

Binding-rule note: page CONTENT stays verbatim from live regardless; these decisions are about IA structure + nav labels, not content wording.

---

## Marianne's decisions (2026-06-11)

1. **Apprenticeships = HYBRID, mirroring live.** Some are PTC-sponsored (PTC handles enrollment/instruction/employer coordination) and get full program pages; some are community/externally-sponsored and get a listing that points to the outside sponsor. Mirror what live does. Reuse the existing admin-built page as a helpful starting point (not binding).
2. **OWI short-courses area label = "Workforce & Continuing Education."** (On-page title may still read live's "Short Courses & Evening Classes" verbatim.)
3. **Placement = its own top-level nav area AND a link from the Programs page.**

## Existing asset to reuse
`urgent-fixes/apprenticeships-clearwater.html` (admin-built, 873 lines, scoped Finalsite-embed styles). Already implements the two-tier model:
- **PTC-Sponsored ("Our Apprenticeship Programs"):** Automotive Electrical/Electronics/Hybrid-EV Systems; Facilities Maintenance.
- **Community Apprenticeship Programs (external sponsor, listing):** HVAC (community partner); Electrician (Bay Area Electrical JATC); Electrician (IEC Apprenticeship); Tampa Bay Machining; Sprinkler Fitter (ABC Florida Gulf Coast Chapter).
For the redesign this should be rebuilt on the standard redesign chrome + styles.css (not the scoped embed styles).

## Classification

### Clearwater (from the admin page, reconcile against live)
- **PTC-sponsored → full pages:** Automotive Electrical/Electronics/Hybrid-EV Systems; Facilities Maintenance.
- **Community → listing only (sponsor named):** HVAC; Electrician (Bay Area Electrical); Electrician (IEC); Tampa Bay Machining; Sprinkler Fitter.

### St. Petersburg (from live: all 6 are full PTC program-style pages, employer-sponsored, related instruction at PTC; no program codes; "must be recommended by your employer")
- Child Care; Fire Fighting (+ CPAT testing + FireTEAM testing sub-pages); Industrial Machinery Maintenance; Industrial Pipefitter; Plumbing Technology; Roadway Technician.
- These are PTC-delivered → full pages (builder agent to confirm none are pure external-sponsor pass-throughs).

## Build manifest
- `apprenticeships-clearwater.html` — redesign hub (two tiers), adapt from the admin page on redesign chrome.
- `apprenticeships-stpete.html` — redesign hub (6 STP apprenticeships).
- Full pages: CLW Automotive + Facilities (2); STP all 6 (+ Fire Fighting CPAT/FireTEAM sub-content). Community CLW 5 = listing only.
- `workforce-continuing-education.html` — institutional OWI short-courses page, verbatim from the www OWI page; labeled "Workforce & Continuing Education."
- Clearview: CSIT-IET @ CVAEC page (STP).
- Nav: new top-level "Apprenticeships & Workforce" area + a link from programs.html; wire sitemap.html.

To de-risk against repeated session limits: build in controlled batches (~5 agents max), not one big fleet.
