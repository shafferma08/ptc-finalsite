# Stage 2 Digest — ESOL | Lakewood Community (St. Petersburg)

- **Source URL:** https://stpete.myptc.edu/programs/esol-lakewood-community
- **Raw capture:** `docs/audit/programs/extracted/wave7/stp-esol.raw.html`
- **Captured page meta:** page-created `2025-09-15T13:30:33Z`, page-published `2025-09-22T07:06:29Z`, pageid `1341`, canonical `https://stpete.myptc.edu/programs/esol-lakewood-community`
- **Live `<title>`:** ESOL | Lakewood Community
- **`og:title`:** ESOL | Lakewood Community
- **Meta description (live):** " ESOL | Lakewood Community - Pinellas Technical College - St. Petersburg"
- **Page type:** Informational pathway page (NOT an OCP program page)
- **Campus classification:** `asymmetric` — a St. Petersburg ESOL pathway page exists in the STP Programs nav (between "ABE-GED | Lakewood Community" and "Articulation Agreements"), but it is a published-but-empty stub. Clearwater has its own ESOL page (`esol-clearwater.html`) with full content; the two are distinct campus pages and content must NOT be shared across them.
- **Extracted:** 2026-06-11

---

## VERBATIM CONTENT (main content region — `<main id="fsPageContent">`)

### Page title / H1
> ESOL | Lakewood Community

(also the `<title>`: `ESOL | Lakewood Community`; `og:title`: `ESOL | Lakewood Community`)

### Body content
**NONE.** The page layout (`fsPageLayout` > `fsDiv` > `fsContent` element id `fsEl_6778`) is present but its `fsElementContent` is empty. There is no body text, no paragraphs, no lists, no schedule, no cost block, no flyers, no contacts.

---

## Section-by-section findings

| Element | Present on live? | Notes |
|---|---|---|
| Hero banner / image | **No** | No content image, no hero banner element anywhere in `fsPageContent`. No `<img>` or `resource-manager` reference in the content region. |
| Intro / mission / overview text | **No** | Empty content element. |
| Levels (ESOL levels) | **No** | Absent. |
| Eligibility / admission requirements | **No** | Absent. |
| Schedule / class times | **No** | Absent. |
| Locations (incl. Lakewood Community) | **No** | "Lakewood Community" appears ONLY in the page title "ESOL | Lakewood Community". There is no body sentence, address, or location block naming Lakewood Community in the content region. |
| Cost / fees | **No** | Absent. |
| Intake testing / registration | **No** | Absent. |
| Contacts (phone / email / counselor) | **No** | No contact block in the content region. (Footer campus contact is site-wide chrome, not page content: 901 34th St S, St. Petersburg, FL 33711, (727) 893-2500.) |
| PDF / resource-manager links (with UUIDs) | **No** | No PDFs anywhere in the capture (`resource-manager`, `.pdf`, `fs/resource` all return zero matches). NO translated flyers exist on the St. Pete page (the translated-flyer set is a Clearwater-only asset). |
| Links / CTAs in body | **No** | None. |

---

## Lakewood Community detail (preserved verbatim)

The only place "Lakewood Community" appears is the page name/title:

> ESOL | Lakewood Community

This is the verbatim framing (the page runs at/with the Lakewood Community location). There is no further descriptive text about the Lakewood Community location on the live page.

---

## Non-English content

**None on the St. Petersburg page.** The translated welcome flyers (Arabic, Haitian Creole, Portuguese, Russian, Spanish, Thai, Vietnamese, Ukrainian) exist on the Clearwater ESOL page only. They are a different-campus asset and were NOT carried to the St. Pete redesign page.

---

## Typos / mechanical issues found

- None inside the (empty) content region.
- Note: the live `<title>`/`<h1>`/`og:title`/meta-description all carry a leading space before "ESOL" (" ESOL | Lakewood Community"). This is a stray CMS leading space, not a content typo; trimmed on the redesign (UX-layer normalization), flagged as a follow-up.

---

## Conclusion

The live St. Petersburg "ESOL | Lakewood Community" page is a **published-but-empty stub**: it carries only its title. Per the verbatim rule, the redesign cannot import levels, eligibility, schedule, cost, contacts, locations, flyers, or any body copy that does not exist on live, and must NOT borrow them from the Clearwater ESOL sibling page (a different campus). The redesign page (`esol-stpete.html`) carries the verbatim title framing "ESOL | Lakewood Community" plus a minimal "more information is coming" line, links to Explore Programs (`programs.html`) and St. Petersburg Tuition (`stpete-tuition.html`) for adjacent help, and the empty-live-page gap is routed to `follow-ups.md` for the STP page owner to populate.

## Follow-ups (live-site)
- St. Petersburg ESOL | Lakewood Community page (`/programs/esol-lakewood-community`) is published but empty (title only). Populate it with the program's levels, schedule, cost, Lakewood Community location detail, and contacts so the redesign can mirror real content. Decide whether the St. Pete page should carry its own translated welcome flyers like the Clearwater page does.
- Live page title carries a stray leading space (" ESOL | Lakewood Community"); trim on live.
