# PTC St. Petersburg Campus Written Plans (re-fetch)

**Source:** https://stpete.myptc.edu/school-information/about-us/pinellas-technical-college-st-petersburg-campus-written-plans
**Extracted:** 2026-04-29 (curl, bypassing WebFetch)
**Reason for re-fetch:** about-cluster's `extracted/stpete/written-plans.md` was truncated at "Tran[truncated]" on the 11th item. Compliance cluster's Comparator + Verifier flagged this as "possible MISSING — likely Transcript Plan." Re-fetch resolves the question. Saved here per the no-disturb-about-cluster rule.

**Outcome:** the truncated 11th item is **"Transfer Credit Policy"** (not "Transcript Plan" as guessed). The redesign's `stpete-about.html` Written Plans summary lists 10 plans and is missing this 11th item. Stage 6 must add it.

---

## WRITTEN PLANS (page heading)

Pinellas Technical College regularly evaluates, and revises as needed, the following written plans to ensure appropriate and adequate services and facilities are provided to our students, employees, and guests. These plans are in compliance with the Council on Occupational Education criteria based on the Handbook of Accreditation.

## Plans listed (deduplicated, in live order)

1. Distance Learning Plan
2. Facilities Operation, Maintenance & Technical Infrastructure Plan
3. Follow-Up Plan
4. Health & Safety Plan
5. Media Services Plan
6. Placement Plan
7. Strategic Plan
8. Student Services Effectiveness Plan
9. Student Retention Plan
10. Technology Plan
11. **Transfer Credit Policy** ← the previously truncated 11th item

(Each item on live links to a separate PDF; PDFs not re-fetched here since the redesign uses a summary list, not direct PDF links.)

---

## Diff vs. current redesign (`stpete-about.html` L222)

**Redesign currently lists 10 plans:**
> Plans required by COE: Distance Learning, Facilities, Follow-Up, Health & Safety, Media Services, Placement, Strategic, Student Services Effectiveness, Student Retention, Technology.

**Live lists 11.** The redesign is missing **"Transfer Credit Policy"**.

**Stage 6 action:** add "Transfer Credit Policy" as the 11th item on `stpete-about.html` Written Plans summary. Tracked in RECOMMENDATIONS.md as P3.

## Cross-campus asymmetry surfaced

The Clearwater Written Plans page (`about-cluster/extracted/clearwater/written-plans.md`) lists 10 plans and does NOT include a Transfer Credit Policy. So STP has 11 plans and CLW has 10. This is a new campus asymmetry not previously documented. Adding to follow-ups: CLW campus to confirm whether they (a) also have a Transfer Credit Policy and just don't list it, (b) follow PCSB district transfer-credit policy, or (c) accept the asymmetry.
