# Dual Enrollment @ PTC-Clearwater — Stage 2 Extract (verbatim)

**Source (live):** https://clearwater.myptc.edu/programs/dual-enrollment-ptc-clearwater
**Raw capture:** `docs/audit/programs/extracted/wave7/clw-dual-enrollment.raw.html`
**Page type:** Informational pathway page (NOT an OCP program page — no program code, no course-sequence table, no FL Ready to Work block on live).
**Page id (live):** 1213 · created 2025-09-15 · published 2026-02-18
**Hero image:** NONE. The only graphics in the main content are (1) an "Apply Now!" button image linking to https://dualenrollment.myptc.edu/ and (2) text/PDF links. No program/topic photo. Redesign uses a clean green-gradient text hero.

---

## H1 / Page title
- `<title>`: Dual Enrollment @ PTC-Clearwater
- H1 (fsPageTitle): Dual Enrollment @ PTC-Clearwater

## Main content region (fsPageContent) — verbatim

### Lead heading
**Dual Enrollment** (styled 18pt bold)

### Intro paragraph (12pt)
> High school students attending Pinellas Technical College (PTC) have the opportunity to be dual enrolled in post-secondary courses tuition free! These courses give students credits toward a high school diploma and a career technical certificate. Hours completed at PTC may also transfer as credit hours to local and state colleges.

### Centered PDF link (24pt bold)
- **Dual Enrollment Flyer**
  - `data-file-name="DEFlyer26-271-5-26.pdf"`
  - `data-resource-uuid="6d02eb67-cb8f-416a-9f59-ad2173c4eff1"`
  - href: `/fs/resource-manager/view/6d02eb67-cb8f-416a-9f59-ad2173c4eff1` (target _blank)

### Application window banner (18pt bold, green rgb(28,136,69))
> The Dual Enrollment application window is
> January 5, 2026 – April 1, 2026.

(Note: live uses an en dash `&ndash;` between dates. Redesign keeps a date range with an en dash inside this verbatim banner; this is not body prose — see typo/format notes.)

### Centered PDF link (18pt bold, green)
- **Dual Enrollment Grade Level Requirements by Program**
  - `data-file-name="CLWDEAppProcess26-27.pdf"`
  - `data-resource-uuid="e459c728-3865-46e1-8ef0-7120dd0d001f"`
  - href: `/fs/resource-manager/view/e459c728-3865-46e1-8ef0-7120dd0d001f` (target _blank)

### Apply Now button image
- Image alt "Apply Now!", links to `https://dualenrollment.myptc.edu/` (rel noopener, target _blank)
- Image resource: `applynow_grn-gld.png` (uuid 94202a2d-5913-4835-bf7e-ff6b79bcf63f) — decorative button graphic, not a content photo.

### Available classes lead-in (12pt)
> Following is a list of classes currently available on the Clearwater campus:

### Table of available classes (single column, 13 program links)
Live links point to `/fs/pages/NNNN` (live page IDs). Verbatim program names:
1. Accounting Operations (/fs/pages/1167)
2. Barbering (/fs/pages/1169)
3. Cabinetmaking (/fs/pages/1170)
4. Computer Systems & Information Technology (CSIT) (/fs/pages/1172)
5. Diesel Maintenance Technician (/fs/pages/1173)
6. Electricity (/fs/pages/1176)
7. Heating, Ventilation, Air-Conditioning/Refrigeration (HVAC/R) 1 - IET (/fs/pages/1179)
8. Machining Technologies (/fs/pages/1181)
9. Master Automotive Service Technology 1 (/fs/pages/1183)
10. Medical Administrative Specialist (/fs/pages/1185)
11. Network Support Services (/fs/pages/1186)
12. Practical Nursing (/fs/pages/1187)
13. Professional Culinary Arts & Hospitality (/fs/pages/1188)

### Maturity note (12pt)
> Dual enrollment students will be present in the same class as adult students; therefore, a higher level of maturity, independence, and initiative is important for student success.

### Grades note (12pt)
> Students who are registered for dual enrollment courses will have three grades per semester recorded on their high school transcript. Therefore, students need to be very dedicated to their best performance in PTC coursework because the resulting grades can greatly impact postsecondary education opportunities and scholarship opportunities.

### Eligibility / requirements (12pt + bulleted list)
Lead: "In order to take Dual Enrollment classes at PTC during the fall and spring semester, students must:"
- Be at least 16 years old and entering their junior or senior year in high school
- Have a minimum cumulative unweighted GPA of 2.0, or 2.5 GPA for medical-related programs
- Consult with your high school counselor to make sure that dual enrollment will fit in you high school schedule  *(typo: "in you" → should be "in your" — fixed on redesign)*
- Complete the online dual enrollment application between January and April
- Once the PTC counselor has received the completed online application, the student will receive information about shadowing.

### Contact (verbatim)
> For more information regarding dual enrollment, please contact Pinellas Technical College as follows:
> **Clearwater campus (727) 538-7167**

(No named contact, no email, no extension published on live. Phone only.)

---

## PDFs (links only, not downloaded)
| Label | Filename | UUID | Live href |
|---|---|---|---|
| Dual Enrollment Flyer | DEFlyer26-271-5-26.pdf | 6d02eb67-cb8f-416a-9f59-ad2173c4eff1 | /fs/resource-manager/view/6d02eb67-cb8f-416a-9f59-ad2173c4eff1 |
| Dual Enrollment Grade Level Requirements by Program | CLWDEAppProcess26-27.pdf | e459c728-3865-46e1-8ef0-7120dd0d001f | /fs/resource-manager/view/e459c728-3865-46e1-8ef0-7120dd0d001f |

Redesign uses absolute live URLs (`https://clearwater.myptc.edu/fs/resource-manager/view/<uuid>`) per the practical-nursing-clearwater PDF pattern.

## External link
- Apply Now → https://dualenrollment.myptc.edu/

## Tables
- One single-cell table listing the 13 available programs (above). No other tables.

## Typos fixed on redesign (logged for follow-up)
1. "will fit in you high school schedule" → "will fit in your high school schedule" (missing "r").

## Sections present on live (and to build)
- Intro (tuition-free dual enrollment overview)
- Dual Enrollment Flyer (PDF)
- Application window banner (Jan 5 – Apr 1, 2026)
- Grade Level Requirements by Program (PDF)
- Apply Now CTA (dualenrollment.myptc.edu)
- Available programs list (13 programs)
- Maturity note
- Grades-on-transcript note
- Eligibility requirements (5 bullets)
- Contact (Clearwater campus phone only)

## Sections NOT on live (omitted, do not invent)
- No program code / CIP
- No course-sequence table
- No FL Ready to Work / industry-certification block
- No named counselor / email
- No videos
- No tuition figures (live says "tuition free")
