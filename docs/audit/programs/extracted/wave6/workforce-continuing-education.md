# Stage 2 Digest — Workforce & Continuing Education

**Redesign page:** `workforce-continuing-education.html` (institutional)
**Redesign NAV label:** Workforce & Continuing Education
**Source of truth (live):** https://www.myptc.edu/workforce-innovation/office-of-workforce-innovation/ptc-short-courses-evening-classes
**Raw capture:** `docs/audit/programs/extracted/wave6/clw-sc-followed.html`
**Captured:** page-published 2026-06-02; page-created 2025-07-28
**Note:** Both campus "short courses" slugs redirect to this single institutional page under the Office of Workforce Innovation. Per Marianne's redesign decision this is institutional (not per-campus). Extract below is verbatim from the live `fsPageContent` main region.

---

## Page title / metadata (verbatim)

- `<title>` tag: `PTC Short Courses | Evening Classes`
- og:title / meta description: `PTC Short Courses | Evening Classes - Pinellas Technical College`
- **On-page H1 (verbatim):** `Short Courses & Evening Classes`

## Jump nav (verbatim)

- "Jump to:" → **Continuing Workforce Courses** (anchor `#workforce-courses`)
- **All Courses on Enrole** → https://www.enrole.com/ptc/jsp/index.jsp (external, new tab)

## Alert box — campus location instruction (verbatim)

**Heading:** Please Note the Campus Location for Each Course

- "Check the campus location listed for each course before calling or registering."
- **St. Petersburg Campus:** 727-893-2500 | **Clearwater Campus:** 727-538-7167

## Section heading (verbatim)

**Continuing Workforce & Life Enrichment Courses** (anchor `#workforce-courses`)

Intro paragraph (verbatim):
> High-quality courses developed by PTC instructors as short Continuing Workforce Development courses. Due to their abbreviated nature, these courses do **NOT** articulate or grant credit toward PTC's program level courses.

---

## Courses (verbatim: title, campus, description, action link)

### 1. Air Conditioning Service Fundamentals
- **Campus:** St. Petersburg Campus
- **Description:** Gain the skills needed to install and service air conditioning systems.
- **Action:** "Course Details & Register" → https://www.enrole.com/ptc/jsp/course.jsp?categoryId=ROOT&courseId=ACSF (external, new tab)

### 2. Child Care Staff or Director Credential Renewal Courses
- **Campus:** St. Petersburg Campus
- **Description:** DCF-approved course for staff and directors seeking to renew their state administrator credential.
- **Supplemental link:** "Download 2025–2026 Child Care Training Program Dates (PDF)" → https://www.myptc.edu/fs/resource-manager/view/7172ea77-f6e6-4809-87ee-d4ebe32f8e1a (new tab)
- **Action:** "Course Details & Register" → https://www.enrole.com/ptc/jsp/course.jsp?categoryId=ROOT&courseId=SDCR (external, new tab)

### 3. Drone Pilot: Small Unmanned Aircraft Systems
- **Campus:** St. Petersburg Campus
- **Description:** Prep for your FAA Remote Pilot Certification through this hands-on sUAS training course.
- **Action:** "Course Details & Register" → https://www.enrole.com/ptc/jsp/course.jsp?categoryId=ROOT&courseId=SUAS (external, new tab)

### 4. Forklift Operation & Safety
- **Campus:** St. Petersburg Campus
- **Description:** Earn hands-on forklift operator training in a structured one-day session.
- **Action:** "Course Details & Register" → https://www.enrole.com/ptc/jsp/course.jsp?categoryId=ROOT&courseId=FOAS (external, new tab)

### 5. Water Treatment Plant Operation Study Session (Online)
- **Campus:** St. Petersburg Campus
- **Description:** Online tutorial support for students preparing for water treatment plant operator licensure.
- **Action:** "Course Details & Register" → https://www.enrole.com/ptc/jsp/session.jsp?sessionId=SP2601-WTPOSS-01P&courseId=WTPOSS&categoryId=ROOT (external, new tab)

### 6. School Board Employee Training
- **Campus:** St. Petersburg Campus
- **Description:** Training available exclusively to Pinellas County School Board employees.
- **Action:** "View Details" → https://www.myptc.edu/fs/resource-manager/view/5553f0ec-6f1e-42d9-b801-19b65407b545 (external, new tab)

### 7. Welding (Evening Class)
- **Campus:** Clearwater Campus
- **Description:** Evening welding class for adults offered at the PTC Clearwater Campus.
- **Action:** "View Program Details" → https://clearwater.myptc.edu/programs/short-courses-evening-classes/welding (external, new tab)

---

**No-sessions divider (verbatim):**
> ⚠ The following courses have no upcoming sessions scheduled. Check back or contact the campus for availability.

### 8. CPR | AED | First Aid
- **Campus:** St. Petersburg Campus
- **Description:** Earn CPR, AED, and First Aid certification through this hands-on course.
- **Status:** No sessions currently scheduled
- Note: live page title uses a vertical bar in "CPR | AED | First Aid" — this is a pipe, NOT an em dash; keep it.

### 9. Silversmithing 101
- **Campus:** St. Petersburg Campus
- **Description:** Learn to create custom jewelry using professional silversmithing tools and techniques.
- **Status:** No sessions currently scheduled

### 10. Upholstery
- **Campus:** St. Petersburg Campus
- **Description:** Learn to repair and reupholster furniture pieces in this hands-on workshop.
- **Status:** No sessions currently scheduled

---

## Bottom box — cross-link (verbatim)

**Heading:** Looking for Full-Time Programs?
> Pinellas Technical College offers 40+ full-time career training programs across both campuses.

- "St. Pete Campus Full-Time Programs" → https://stpete.myptc.edu/programs/st-petersburg-full-time-programs (external, new tab)
- "Clearwater Campus Full-Time Programs" → https://clearwater.myptc.edu/programs/clearwater-full-time-programs (external, new tab)

Redesign decision: the bottom-box "Looking for Full-Time Programs?" cross-link is re-aimed to the internal redesign `programs.html` (UX-layer decision per verbatim-rule category 2 / step 2). The two live external full-time-program links are preserved on the redesign as the per-campus options.

---

## Campus classification

**Institutional** (`shared`, www-canonical). Both campus short-courses slugs redirect to this one page on live. Course-level campus location is preserved per course (most St. Petersburg; Welding Evening Class is Clearwater).

## Typos fixed

None. The live main-region copy contains no obvious mechanical typos. The en dash in "2025–2026" is correct typography (date range), not an em dash, and is rendered as an en dash, so it is preserved verbatim in the PDF link label.

## Notes / oddities for follow-ups (list only)

- Live `<title>` ("PTC Short Courses | Evening Classes") differs from the on-page H1 ("Short Courses & Evening Classes"). Not an error; recorded for awareness.
- Course #6 "School Board Employee Training" action link label is "View Details" (not "Course Details & Register") and points to a Finalsite resource-manager PDF, not Enrole.
- Course #7 "Welding (Evening Class)" action link label is "View Program Details" and points to the Clearwater subsite program page.
- "School Board Employee Training" is exclusive to PCSB employees; kept verbatim.
