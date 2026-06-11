# Stage 2 Extract — Dual Enrollment @ PTC-St. Petersburg

**Source:** https://stpete.myptc.edu/programs/dual-enrollment-ptc-st-petersburg
**Raw capture:** `docs/audit/programs/extracted/wave7/stp-dual-enrollment.raw.html`
**Page type:** Informational pathway page (NOT an OCP program page). No program code, no course-sequence table, no FL Ready to Work block on live.
**Extracted region:** `<main id="fsPageContent">` only. Nav / header / footer / chrome ignored.
**Extract is verbatim (typos intact).** Typo cleanup happens only on the redesign HTML; see follow-ups.

---

## Page title (H1)

Dual Enrollment @ PTC-St. Petersburg

## Hero

No hero photo on live. The page is a plain `fsPageTitle` H1 over body content. The only image in the content region is the "Apply Now!" graphic button (`applynow_grn-gld.png`, links to https://dualenrollment.myptc.edu/), not a hero banner. Redesign uses a clean green-gradient text hero (no photo).

---

## Body content (verbatim)

### Intro paragraph

> High school students attending Pinellas Technical College (PTC) have the opportunity to be dual enrolled in post-secondary courses tuition free! These courses give students credits toward a high school diploma and a career technical certificate. Hours completed at PTC may also transfer as credit hours to local and state colleges.

### Application window (verbatim, centered, green)

> **The Dual Enrollment application window is**
> **January 1, 2026 – March 23, 2026.**

### Apply Online

"Apply Now!" image button → https://dualenrollment.myptc.edu/ (target _blank)

### Available classes lead-in (verbatim)

> Following is a list of classes currently available on the **St. Petersburg** campus:

### Program list (verbatim names, in live order)

| # | Program name (verbatim) | Live link | Notes |
|---|---|---|---|
| 1 | Automotive Collision Technology Technician | /fs/pages/1287 | |
| 2 | Barbering | /fs/pages/1288 | |
| 3 | Computer-Aided Drawing & Modeling | /fs/pages/1292 | data-page-name "Computer-Aided Drawing and Modeling" |
| 4 | Computer Systems & Information Technology | /fs/pages/1293 | |
| 5 | Cosmetology | /fs/pages/1294 | |
| 6 | Electricity | (no href on live) | bare `<a>` with no href |
| 7 | Emergency Medical Technician | /fs/pages/1298 | + PREREQUISITES Information PDF (UUID 1e285755-df0c-43b6-8c4d-fde7da894ffc, file FT-SPETEDUALEMTENROLLMENT.pdf) |
| 8 | Facials Specialty | /fs/pages/1299 | |
| 9 | Heating Ventilation, Air Conditioning/Refrigeration | /fs/pages/1300 | data-page-name "Heating, Ventilation, Air-Conditioning/Refrigeration (HVAC/R) 1" |
| 10 | Master Automotive Service Technology | (no href on live) | bare `<a>` with no href |
| 11 | Nails Specialty | /fs/pages/1306 | |
| 12 | Plumbing Technology | /fs/pages/1307 | data-page-name "Plumbing" |
| 13 | Practical Nursing | /fs/pages/1308 | + PREREQUISITES Information PDF (UUID a2d9a334-8215-493c-8318-84160bc3529b, FT-SPETEDUALENROLLMENT-PracticalNursing_1.pdf) + MANDATORY Information Session PDF (UUID 328d8c54-4e08-4b54-9251-60d13aa49eb5, MandatoryDEMeeting.pdf) |
| 14 | Professional Culinary Arts & Hospitality | /fs/pages/1309 | |
| 15 | Television Production Technology | /fs/pages/1313 | |
| 16 | Welding Technology | /fs/pages/1314 | |

### Maturity note (verbatim)

> Dual enrollment students will be present in the same class as adult students; therefore, a higher level of maturity, independence, and initiative is important for student success.

### Transcript note (verbatim)

> Students who are registered for dual enrollment courses will have three grades per semester recorded on their high school transcript. Therefore, students need to be very dedicated to their best performance in PTC coursework because the resulting grades can greatly impact postsecondary education opportunities and scholarship opportunities.

### Eligibility (verbatim)

> In order to take Dual Enrollment classes at PTC during the fall and spring semester, students must:

- Be at least 16 years old and entering their junior or senior year in high school
- Have a minimum cumulative unweighted GPA of 2.0, or 2.5 GPA for medical-related programs
- Consult with your high school counselor to make sure that dual enrollment will fit in you high school schedule  *(typo: "in you" -> "in your", fixed on redesign)*
- Complete the online dual enrollment application between January and April
- Once the PTC counselor has received the completed online application, the student will receive information about shadowing.

### Contact (verbatim)

> For more information regarding dual enrollment, please contact Pinellas Technical college as follows:
> **St. Petersburg campus (727) 893-2500**

*(typo: "Pinellas Technical college" -> lowercase "college"; preserved as text on redesign, see follow-ups.)*

---

## PDFs / resources (verbatim UUIDs — not downloaded)

| Resource title | File name | UUID |
|---|---|---|
| Dual Enrollment Flyer | DE-Flyer-26-27_12172025.pdf | e2e94715-3aae-41fe-a903-91876aa74979 |
| Dual Enrollment Information Sessions and Sign Up | DualEnrollmentInformationSessionsandSignUp_1.pdf | 91a0980a-9b28-444d-987e-a405b75e746f |
| Dual Enrollment Grade Level Requirements by Program | DualEnrollmentGradeLevelRequirementsbyProgram.pdf | 88adb9d1-a27d-40f3-93df-5c6325d4a0d0 |
| High School Counselor Quick Guide | HighSchoolCounselorQuickGuide.pdf | 57382d77-d517-4f13-8e3d-410cc14dc171 |
| EMT — PREREQUISITES Information | FT-SPETEDUALEMTENROLLMENT.pdf | 1e285755-df0c-43b6-8c4d-fde7da894ffc |
| Practical Nursing — PREREQUISITES Information | FT-SPETEDUALENROLLMENT-PracticalNursing_1.pdf | a2d9a334-8215-493c-8318-84160bc3529b |
| Practical Nursing — MANDATORY Information Session | MandatoryDEMeeting.pdf | 328d8c54-4e08-4b54-9251-60d13aa49eb5 |

Resource view URL pattern: `https://stpete.myptc.edu/fs/resource-manager/view/{UUID}`

## Apply Online URL (verbatim)

https://dualenrollment.myptc.edu/

## Contacts (verbatim)

- St. Petersburg campus (727) 893-2500

---

## Sections present on live (summary)

1. Intro paragraph (tuition-free dual enrollment value statement)
2. Dual Enrollment Flyer (PDF link)
3. Application window (Jan 1, 2026 – Mar 23, 2026)
4. Dual Enrollment Information Sessions and Sign Up (PDF link)
5. Apply Now button → dualenrollment.myptc.edu
6. Dual Enrollment Grade Level Requirements by Program (PDF link)
7. High School Counselor Quick Guide (PDF link)
8. Available classes list (16 programs, St. Petersburg campus)
9. Maturity note
10. Transcript note
11. Eligibility requirements (5 bullets)
12. Contact line (St. Petersburg campus phone)

## Sections live LACKS (omitted from redesign)

- No program code / OCP code
- No course-sequence / hours table
- No FL Ready to Work / Industry Certifications block
- No tuition/cost figures
- No counselor name (only campus phone)
- No hero photo
