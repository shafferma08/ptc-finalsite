# Stage 2 Digest — Distance Learning @ PTC - St. Petersburg

**Cluster:** Wave 7 (Adult Ed & Pathways)
**Page type:** Informational pathway page (NOT an OCP program page)
**Extracted:** 2026-06-11
**Sources:**
- Main: `stp-distance-learning.raw.html` — https://stpete.myptc.edu/programs/distance-learning-ptc-st-petersburg (pageid 1344)
- Cost sub-page: `stp-distance-learning-cost.raw.html` — https://stpete.myptc.edu/programs/distance-learning-ptc-st-petersburg/what-is-the-cost-of-distance-learning-classes (pageid 1349)

Both extracts are the verbatim `fsPageContent` region only (nav/header/footer chrome ignored).

---

## MAIN PAGE — `fsPageContent`

**H1 (fsPageTitle):** Distance Learning @ PTC - St. Petersburg

**Hero image present:** YES. Centered figure at top of content.
- alt: `Dlrn ` (trailing space)
- filename: `id-distance-learning.jpg`
- UUID: `608d65fc-77c0-452c-86ce-7a8ca375756d`
- displayed 500x236
- URL: https://resources.finalsite.net/images/f_auto,q_auto/v1757939162/myptecorg/thyqrtcmeiwvngrsjgft/id-distance-learning.jpg

**Centered display heading:** Distance Learning @ PTC (xx-large, mediumseagreen, bold)

**fsElement "Online Programs and Courses" (fsElementTitle_6750 / H2):**

> Pinellas Technical College's Distance Learning department offers classes and programs via the Internet. Online learning offers a flexible, convenient format while maintaining the same standards of instructional quality you will find in our traditional programs. In addition, all online programs have the same accreditation, transfer, articulation and financial aid eligibility as traditional programs. [Read More]

> Pinellas Technical College's Online Learning program is a suite of both web-based and software-driven online classes.

(Note: "Read More" is a non-functional `<a>` with no href — UX artifact, dropped on redesign.)

**Second centered image:**
- alt: `dilrn ` (trailing space)
- filename: `f4we8myvzu.jpg`
- UUID: `3e18b6e4-f5a3-4a4f-b423-885f7dac4bef`
- displayed 300x168
- (decorative; not carried — see follow-ups)

**H3 (medium):** Pinellas Technical College Certificate Programs

**Body (Arial 12pt):**

> These are high-quality, state-approved and COE accredited program level courses that provide a Pinellas Technical College certificate of completion which articulates with other statewide technical centers and colleges. These programs may be either fully or a hybrid online learning option. (Both online and on-campus portion)

**H3 (yellow highlight):**

> **Ready to explore?** Browse the program of interest web page to determine if a distance learning option is available.

**H1 (centered, dodgerblue link):**

> **Programs & Courses listing** — links to internal Finalsite `/fs/pages/1283` (the Programs landing page), opens new tab. Retargeted on redesign to `programs.html`.

**H2 (small):**

> If you are having difficulty with the Blackboard learning management system for PTC, please contact your instructor.

(VERBATIM "Blackboard" reference — FLAGGED. PTC is on Canvas now. Kept verbatim per binding rule, logged to follow-ups.)

**Bottom graphic link:** "next" arrow image (`nextremodel.png`, UUID `fd663d4e-1677-414f-8b86-b01dd2e00bb9`) links to the "Online Programs & Courses Information" sub-page (`/fs/pages/1345`). Navigation artifact; the redesign uses a text CTA instead.

**Contacts on main page:** none (no named person, no email/phone in the content region).

---

## COST SUB-PAGE — `fsPageContent`

**H1 (fsPageTitle):** What is the cost of distance learning classes?

**Hero image present:** YES (decorative top image).
- alt: `onlineed `
- filename: `online-class-prepared-881x495.jpg`
- UUID: `87188a84-c866-4d76-b347-2f6c6a462763`
- displayed 500x280, role="presentation"
- (decorative; not carried)

**Centered display heading (large, mediumseagreen, bold):** Online Education:  How Much Does It Cost?
(NOTE live double space after the colon.)

**Body (medium):**

> The per-clock-hour tuition and other fees for distance learning classes are the same as for all other Pinellas Technical College classes.  However, there can be cost benefits to online education, including saving money on child care, reducing the cost of traveling to campus daily, and maintaining the ability to keep a steady employment schedule while you pursue your dreams.

(NOTE live double space after "classes." — normalized to single space on redesign.)

**Body (medium):**

> Contact one of our guidance professionals today and see if online education is right for you!

**NEXT STEP line (x-small, yellowgreen, italic bold, centered):**

> **NEXT STEP:  Click the graphic to go to the PTC brochure and see which of our programs are offered partially or totally online!**

(NOTE live double space after "NEXT STEP:" — normalized to single space. The associated graphic is `step-icon-21.png`, UUID `646b4e92-6cbe-4741-b02e-ff3fa13607dd`, alt `next step `, but its `<a>` has NO href on live — broken/empty link. Carried as plain text on redesign; no live brochure URL exists to link. Logged to follow-ups.)

**Contacts on cost page:** none named.

---

## SECTIONS PRESENT ON LIVE

Main page:
1. Online Programs and Courses (intro body + suite sentence)
2. Pinellas Technical College Certificate Programs (paragraph)
3. "Ready to explore?" callout
4. Programs & Courses listing link
5. Blackboard LMS help note

Cost sub-page (folded in):
6. Cost of Distance Learning Classes ("Online Education: How Much Does It Cost?" + per-clock-hour body + guidance-professionals line + NEXT STEP brochure line)

---

## MECHANICAL FIXES APPLIED ON REDESIGN (typos / cleanup)

1. Double space after "classes." in the cost paragraph -> single space.
2. Double space after the colon in "Online Education:  How Much Does It Cost?" -> single space.
3. Double space after "NEXT STEP:" -> single space.
- These are whitespace normalizations, meaning unchanged. The extract files keep the doubles as the evidentiary record.

NOT changed (escalated / kept verbatim):
- "Blackboard" LMS reference: kept verbatim, flagged for follow-up (PTC is on Canvas).

---

## CONTENT GAPS (for follow-ups — list only, NOT filled)

1. **Blackboard vs Canvas:** main page LMS help note still says "Blackboard." PTC migrated to Canvas. Live needs updating; redesign carries verbatim until then.
2. **No contacts:** neither live page names a counselor, email, or phone for Distance Learning. The redesign routes generic CTAs (Tuition & Fees, Counselors page) but cannot name a person.
3. **Empty "Read More" link** on the main intro paragraph (no href on live).
4. **Empty NEXT STEP brochure graphic link** (no href on live; "PTC brochure" target unknown).
5. **Four child sub-pages exist** in the live left nav but were not in scope for this build: "Online Programs & Courses Information," "Is Online Learning right for me," "Do I need a special computer or software?," "How do online classes work?" Candidates for a future expand of the Distance Learning area (incoming coordinator domain).
6. Decorative images on both pages (`f4we8myvzu.jpg`, `online-class-prepared-881x495.jpg`, `nextremodel.png`, `step-icon-21.png`) not carried; only the primary hero `id-distance-learning.jpg` was pulled.
