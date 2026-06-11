# Stage 2 Digest — Distance Learning @ PTC - Clearwater

**Cluster:** Wave 7 (Adult Ed & Pathways)
**Page type:** Informational pathway page (NOT an OCP program page)
**Campus classification:** campus-specific (Clearwater Distance Learning landing page; St. Pete has its own DL section, not audited here)

## Sources

1. **Main page** — https://clearwater.myptc.edu/programs/distance-learning-ptc-clearwater
   Raw: `docs/audit/programs/extracted/wave7/clw-distance-learning.raw.html`
   Page title: `Distance Learning @ PTC - Clearwater`
   H1: `Distance Learning @ PTC - Clearwater`
   Page id 1218; created/published 2025-09-15.

2. **Cost sub-page** — https://clearwater.myptc.edu/programs/distance-learning-ptc-clearwater/what-is-the-cost-of-distance-learning-classes
   Raw: `docs/audit/programs/extracted/wave7/clw-distance-learning-cost.raw.html`
   Page title / H1: `What is the cost of distance learning classes?`

The main DL page also has four other sub-pages in live nav (NOT folded into this build per scope, listed here for IA awareness):
- Online Programs & Courses Information (`/online-programs-courses-information`, page id 1219 — the "Read More" target)
- Is Online Learning right for me
- Do I need a special computer or software?
- How do online classes work?

---

## MAIN PAGE — content region (fsPageContent), verbatim

**Hero image present:** YES. `id-distance-learning.jpg`, UUID `608d65fc-77c0-452c-86ce-7a8ca375756d`, alt `"Dlrn "`, 500x236, centered. (Second inline image `f4we8myvzu.jpg`, UUID `3e18b6e4-f5a3-4a4f-b423-885f7dac4bef`, alt `"dilrn "`, 300x168, decorative/presentation. Third image is a "next" graphic `nextremodel.png`, UUID `fd663d4e-1677-414f-8b86-b01dd2e00bb9`, linked to the Online Programs & Courses Information page.)

**Section header (fsElementTitle):** "Online Programs and Courses"

**Centered subheading (large, mediumseagreen, bold):** "Distance Learning @ PTC"

**Body paragraph 1 (with inline "Read More" link → /fs/pages/1219):**
> Pinellas Technical College's Distance Learning department offers classes and programs via the Internet. Online learning offers a flexible, convenient format while maintaining the same standards of instructional quality you will find in our traditional programs. In addition, all online programs have the same accreditation, transfer, articulation and financial aid eligibility as traditional programs. [Read More]

**Body paragraph 2:**
> Pinellas Technical College's Online Learning program is a suite of both web-based and software-driven online classes.

**H3 heading:** "Pinellas Technical College Certificate Programs"

**Paragraph under H3:**
> These are high-quality, state-approved and COE accredited program level courses that provide a Pinellas Technical College certificate of completion which articulates with other statewide technical centers and colleges. These programs may be either fully or a hybrid online learning option. (Both online and on-campus portion)

**Yellow-highlighted call-to-explore (live marked up as h1, split across spans; reassembled):**
> Ready to explore? Browse the program of interest web page to determine if a distance learning option is available.

**Centered link (live h1, dodgerblue, bold), text:** "Programs & Courses listing" → /fs/pages/1162 (the Programs hub; opens new tab on live)

**Blackboard note (live h2, small):**
> If you are having difficulty with the Blackboard learning management system for PTC, please contact your instructor.

**"next" graphic** linking to Online Programs & Courses Information page (UX element).

**Back to Top** link (chrome).

---

## COST SUB-PAGE — content region (fsPageContent), verbatim

**Hero/inline image present:** YES (decorative). `online-class-prepared-881x495.jpg`, UUID `87188a84-c866-4d76-b347-2f6c6a462763`, alt `"onlineed "`, 500x280, centered, role=presentation.

**Centered heading (large, mediumseagreen, bold):** "Online Education:  How Much Does It Cost?"

**Body paragraph 1:**
> The per-clock-hour tuition and other fees for distance learning classes are the same as for all other Pinellas Technical College classes.  However, there can be cost benefits to online education, including saving money on child care, reducing the cost of traveling to campus daily, and maintaining the ability to keep a steady employment schedule while you pursue your dreams.

**Body paragraph 2:**
> Contact one of our guidance professionals today and see if online education is right for you!

**NEXT STEP line (small, yellowgreen, italic bold):**
> NEXT STEP:  Click the graphic to go to the PTC brochure and see which of our programs are offered partially or totally online!

**Step-icon graphic** (`step-icon-21.png`, UUID `646b4e92-6cbe-4741-b02e-ff3fa13607dd`, alt `"next step "`): on live the anchor has NO href (empty `<a rel="noopener noreferrer" target="_blank">`), so the "PTC brochure" link is broken / missing on live. See follow-ups.

---

## How it works (summary)

Live offers Distance Learning as web-based and software-driven online classes. Online programs carry the same accreditation, transfer, articulation, and financial aid eligibility as traditional programs. Certificate programs may be fully online or hybrid (online + on-campus portion). Students browse the individual program page to see whether a distance learning option exists. LMS support: contact your instructor (live still references "Blackboard").

## Cost (summary)

Per-clock-hour tuition and other fees for distance learning classes are the same as for all other PTC classes. Live cites cost benefits of online study (child care savings, less daily travel, ability to keep working).

## Contacts

No named contact, counselor, email, or direct phone in either page's main content region. The only contact data on the pages is campus footer chrome: 6100 154th Ave N, Clearwater, FL 33760; (727) 538-7167; a footer NoReply email. Live cost page says "Contact one of our guidance professionals" but provides no contact target.

## Links / PDFs

- "Read More" → live page id 1219 (Online Programs & Courses Information). Internal; not a PDF.
- "Programs & Courses listing" → live page id 1162 (Programs hub).
- Cost page "PTC brochure" graphic → broken (empty href on live).
- No PDF resources (no resource-manager UUIDs) on either page.

## Hero status

Hero image exists on live (`id-distance-learning.jpg`). Downloaded to `assets/images/content/distance-learning-clearwater.jpg` (500x236 JPEG).

## Typos / mechanical fixes applied on redesign

- Double spaces inside cost-page sentences ("same as for all other...classes.  However", "How Much Does It Cost?", "NEXT STEP:  Click") normalized to single spaces. Meaning unchanged. (Extract record stays verbatim with the doubles.)
- No misspelled words found. No fact/name/number changes.
- "Blackboard" carried VERBATIM in the LMS note (substantive outdated fact, not a mechanical typo). Flagged as follow-up #1, not silently changed.

## Content gaps (follow-ups — Marianne's incoming DL domain, do NOT fill)

1. Live references "Blackboard" as the LMS. PTC moved to Canvas; this is outdated on live. (Marianne owns; flag only.)
2. Cost page "PTC brochure" NEXT-STEP graphic links nowhere (empty href on live).
3. No named DL contact / coordinator / advising path on either page despite "contact one of our guidance professionals" copy.
4. Four sibling sub-pages (Online Programs & Courses Information, Is Online Learning right for me, Do I need a special computer or software?, How do online classes work?) are separate live pages; future IA decision whether to fold these into this single page like the cost page was.
