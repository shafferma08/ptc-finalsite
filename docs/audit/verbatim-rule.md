# Verbatim Rule — Practical Interpretation

**Status:** Reference doc. Linked from `docs/audit/PROCESS.md` and (eventually) `CLAUDE.md` binding rule #1 if this survives the next cluster's audit intact.
**Created:** 2026-04-29 during Compliance cluster Stage 4-5
**Owner:** Marianne Shaffer

The headline binding rule lives in `CLAUDE.md`:
> Redesign content comes from approved live PTC sites verbatim. Do not invent stats, mission language, dates, expand protected categories, or paraphrase. If the redesign should say something the live site doesn't say yet, log it in `docs/audit/follow-ups.md` for the live-site owners.

That's the rule. This doc is how to apply it without getting paralyzed when live content is wrong, missing, or owned by Marianne herself.

---

## Three categories with three different rules

### 1. Substantive institutional content → strict verbatim only

Programs, dates, statistics, named officers, addresses, phone numbers, accreditation bodies, mission / vision / values, legal disclosures (FERPA, Title IX, DFSCA, HEOA 488, ADA, etc.), tuition rates, contact info, faculty names, course content.

**Rule: never invent.** If live is missing it, the redesign strips it (or leaves a placeholder) and routes to follow-ups. We don't "fix" missing federal disclosures by writing them ourselves. That's invention with legal stakes.

### 2. UX / navigation / structure → redesign owns

Link text, button labels, page titles, section headings, cross-links, calls to action, aria-labels, ordering, layout, typography, footer link targets, breadcrumbs, card grid arrangements, "skip to main content" links.

**Rule: not bound by verbatim.** The rule is about substantive claims about PTC, not how users move through the site. The redesign decides UX. (This is why we can re-aim a footer link target or rename a section heading without violating verbatim.)

### 3. Wording cleanup of accurate content → case by case

Typos on live, weird hyphenation, inconsistent capitalization, AP-style violations, dated phrasings.

**Rule:** if meaning is identical AND we can update live to match, the redesign cleans up and live follows. If we can't or won't update live, the redesign carries live verbatim until live updates. (The accessibility section overhaul on 2026-04-29 was the test case: Marianne is the webmaster, she's updating live, the redesign leads.)

---

## Missing vs. wrong vs. standard — handling each

### Missing on live

Examples surfaced in the Compliance cluster: FERPA disclosure, COE Right-to-Know data, DFSCA, HEOA 488 P2P, HEA 487 voter registration, Constitution Day, R2T4, SAP policy.

**Action:** never write it ourselves. Strip from redesign. Log a high-priority follow-up. Get others to publish on live first; once live exists, redesign mirrors verbatim.

### Wrong on live

Examples: `/privacy-policy` URL rendering the Compliance Statement (mislabeled), STP subsite calling FDLE notice "FERPA/Sexual Predator Notice", duplicate URLs hosting the same content, dated catalog years.

**Action:** the redesign isn't bound to repeat live's mistakes. We can work around on the redesign side (e.g., footer label decoupled from URL slug) AND log a follow-up to fix live. Redesign UX > live UX errors.

### Standard / boilerplate (federally common but not a quote)

Examples: Florida Sunshine Law email warning, ADA / Section 504 framework citation, generic accessibility commitment statement.

**Action:** can add on the redesign **only if a verbatim source supports it**. The Sunshine Law warning is verbatim from a PCSB live source, so we can place it anywhere on the redesign that lists `@pcsb.org` emails. We can't write our own version of any boilerplate from scratch — even if the federal language is standard, we still need a sourced quote.

---

## The live-owner exception

When the content owner (Marianne as webmaster, or a faculty member, or a campus director, or the business office) is the actual source of truth for that content, **the verbatim rule applies across both endpoints together, not just from live → redesign.**

The owner can author content and sync both. Live and redesign stay matched. No one invents anything. The accessibility section is the exemplar:
- Real claims sourced from Marianne (the webmaster)
- Marianne updates live to match the new redesign copy
- Both endpoints stay in sync
- Verbatim rule preserved (the source-of-truth is now Marianne herself, and both live and redesign carry her authored content verbatim)

This is **not** an exception to the rule. It's the rule applied with the correct owner identified.

For content where the auditor (Claude) is NOT the owner — programs from Mrs. Clarke, counselor names from each campus, faculty bios, financial data, accreditation correspondence — the auditor sources from the right person and treats their input as verbatim once obtained. Same rule, different owner.

---

## Decision tree

When in doubt about whether something can go in the redesign:

1. **Is this a substantive claim about PTC?** (program, date, fact, name, statistic, policy)
   - YES → must have a verbatim source. If live is missing → strip + log follow-up. If live exists → carry verbatim.

2. **Is this a UX / structure / navigation element?** (link text, button, layout, cross-link, ordering)
   - YES → redesign decision. No verbatim constraint.

3. **Is the content owner not Marianne (or the auditor)?**
   - YES → source from them. Their input becomes verbatim once obtained.

4. **Is Marianne the live owner of this content?**
   - YES → she can author + sync both endpoints. Update both together; verbatim rule preserved across the pair.

5. **Is live wrong** (typo, mislabel, dated)?
   - Redesign can route around or clean up on redesign side. Log follow-up to fix live.

6. **Is the redesign about to claim something stronger than what live says?**
   - Can the live owner update live to match? If yes: do both. If no: strip the stronger claim, redesign matches live's weaker version.

---

## Phone-number formatting normalization (permitted)

Live PTC pages use a hyphenated phone format: `727-538-7167 x2017`. The redesign uses AP-style parens around area code: `(727) 538-7167 x2017`.

**Rule: phone-number formatting normalization is permitted as long as digits are identical.** This is a UX-layer house style choice, not a substantive change. The verbatim rule binds the digits, not the punctuation between them.

This applies to:
- Hyphens vs parens around area code
- Spaces around the area code
- "x" vs "ext." vs "ext" for extensions
- "1-888-..." vs "(888) ..." for toll-free

If digits differ — even by one character — that's a verbatim violation. Surfaced 2026-04-30 during the Counselors cluster verifier pass when Santos x2017 and Ashwood x2325 numbers were correctly identical between live (`727-538-7167 x2017`) and redesign (`(727) 538-7167 x2017`) but the format had been quietly normalized.

---

## Anti-patterns (don't do these)

- **Inventing federal-law boilerplate** because "everyone has a FERPA statement, surely we can write one." No.
- **Strengthening claims** ("WCAG 2.0" → "2.1 AA") without authority from the live owner.
- **Adding plausible-sounding policy language** for a missing section because the section heading existed in a previous draft.
- **Paraphrasing for AP-style** when the change alters meaning or drops a sourced detail (e.g., the FDLE block where the redesign dropped the alternate hotline number, hours, and the 2002 Campus Sex Crimes Prevention Act reference).
- **Quietly modifying a `verified` cluster's extracts** to incorporate new findings. Save new findings as supplementary extracts in the active cluster's folder; the verified cluster catches up at next drift-check.
- **Using WebFetch for verbatim extraction on PCSB-domain URLs.** A prompt-injection-shaped layer hits WebFetch's summarizer and silently truncates content. Use `curl -sL -A "Mozilla/..."` with raw HTML extraction instead.

---

## When to escalate to Marianne

- A section is missing on live AND has legal / federal-aid stakes (route to follow-ups; she decides timeline for live publication).
- Two valid live sources conflict on the same fact (officer naming, address format, phone number — IA Recommender raises in Stage 3).
- The redesign owner (Marianne) needs to authorize a paired live + redesign update.
- A campus asymmetry surfaces (e.g., STP has Code of Conduct PDF, CLW doesn't) and the IA call isn't obvious.
- A live page is mislabeled or has a duplicate URL that affects redesign URL/anchor decisions.

---

## Cluster-specific examples (for grounding)

| Cluster | Situation | How the rule was applied |
|---|---|---|
| About hubs | Live mission/vision/values are clean | Carry verbatim. Verified, drift-watched. |
| About sub-pages | Live "1961" was a typo, should be "1962" | Sitewide sweep on redesign + follow-up to fix live. (Marianne is webmaster; both updated together.) |
| About sub-pages | Code of Conduct on STP, not CLW | STP carries verbatim PDF link; CLW gets a "Pending" placeholder + follow-up to ask CLW campus admin to publish. |
| Compliance | FERPA / DFSCA / HEOA 488 missing on live | Strip from redesign. Federal-aid compliance gap follow-ups. Don't invent. |
| Compliance | WCAG 2.1 AA on redesign vs. WCAG 2.0 on live | Marianne (webmaster) updates live to 2.1 AA + adds real practices; redesign leads, live follows; both end up matched. |
| Compliance | Florida Sunshine Law email warning verbatim from PCSB | Placed on every redesign section with `@pcsb.org` emails. Verbatim source supports the placement. |
| Compliance | Footer "Privacy Policy" link → live `/privacy-policy` is mislabeled (renders Compliance Statement) | Footer label stays "Privacy Policy" (matches live URL pattern); anchor re-aims to `#non-discrimination` (the actual content). UX-layer decision, not a verbatim violation. |

---

## See also

- `CLAUDE.md` (binding rule #1)
- `docs/audit/PROCESS.md` (cluster pipeline mechanics)
- `docs/audit/follow-ups.md` (live-site issues surfaced during audits)
