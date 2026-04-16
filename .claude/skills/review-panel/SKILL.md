---
name: review-panel
description: "Multi-agent website review panel for the PTC redesign project. Spawns specialized agents (students, parents, faculty, directors, designers, accessibility auditors, content editors, and a Finalsite CMS specialist) to review HTML mockups and the live site, then consolidates feedback into actionable reports. Use this skill whenever the user wants website feedback, a UX review, a design critique, an accessibility audit, or a Finalsite feasibility check on the PTC site. Also triggers for 'run the review panel', 'get feedback on the site', 'what do the agents think', or 'review panel'."
---

# PTC Website Review Panel

You orchestrate a panel of specialized review agents who evaluate the PTC website redesign from different perspectives. Each agent has a distinct persona, focus area, and set of review criteria. The goal is to surface issues that a single reviewer would miss by combining diverse stakeholder viewpoints with technical expertise.

## Review Modes

This skill supports two distinct review modes. Ask Marianne which mode to run, or infer from context.

### Mockup Review (default)
Reviews the HTML mockup files in the ptc-finalsite workspace. Agents read the static HTML files directly.
- **When to use:** During active redesign work to check progress
- **Output folder:** `docs/reviews/YYYY-MM-DD/`
- **Scheduled:** Every Wednesday at 8 AM (ptc-review-panel task)

### Live Site Review
Reviews the actual public websites (www.myptc.edu, clearwater.myptc.edu, stpete.myptc.edu) using Chrome browser tools. Agents navigate and interact with the real site like actual visitors.
- **When to use:** When Marianne wants to audit the current public site, compare live vs. redesign, or check if live-site issues have been fixed
- **Output folder:** `docs/reviews/YYYY-MM-DD-live/`
- **Run on demand** (not scheduled, since it requires Chrome)

For live site reviews, each agent prompt must instruct them to:
1. Call `mcp__Claude_in_Chrome__tabs_context_mcp` first to get a valid tab ID
2. Use `mcp__Claude_in_Chrome__navigate` to visit each URL
3. Use `mcp__Claude_in_Chrome__read_page` and `mcp__Claude_in_Chrome__get_page_text` to examine content

## How It Works

1. **Determine mode** (mockup or live site) and scan accordingly
2. **Spawn review agents** in parallel (8 agents, each evaluating from their persona)
3. **Collect feedback** from all agents into individual files
4. **Run a PM agent** that synthesizes everything into a consolidated report and updates the issues tracker
5. **Present results** to Marianne with a link to the consolidated report

## Project Context

Read this before every run so agents have accurate context:

- **Workspace:** `/sessions/serene-quirky-pasteur/mnt/ptc-finalsite/`
- **Mockups:** `index.html`, `about.html`, `admissions.html`, `programs.html`, `clearwater.html`, `stpete.html`, `campus-template.html`, `schedule-clearwater.html`, `welding-clearwater.html`
- **Urgent fixes:** `urgent-fixes/homepage-improved-mockup.html`, `urgent-fixes/short-courses-simple.html`, `urgent-fixes/community_resources_guide.html`, `urgent-fixes/military-veteran-resources.html`, `urgent-fixes/summer-camps-mockup.html`
- **Docs:** `docs/homepage_ux_review.md`, `docs/implementation_plan.md`, `docs/ptc_sitemap.md`, `docs/ptc_site_audit.md`
- **Brand:** PTC green #008142, light green #8DC63F, yellow #FFCF01. Fonts: Roboto + Roboto Slab. AP style for content.
- **Platform:** Finalsite Composer (panel-based CMS). All mockups must translate to Composer layouts.
- **Live sites:** clearwater.myptc.edu (Finalsite)
- **Institution type:** Career and technical college under Pinellas County School Board (PCSB)

## Output Structure

All review output goes in `docs/reviews/` within the project workspace.

```
docs/reviews/
├── YYYY-MM-DD/                    # Date-stamped review folder
│   ├── agent-prospective-student.md
│   ├── agent-current-student.md
│   ├── agent-parent-guardian.md
│   ├── agent-faculty.md
│   ├── agent-director.md
│   ├── agent-designer.md
│   ├── agent-accessibility.md
│   ├── agent-finalsite-cms.md
│   ├── consolidated-report.md     # PM synthesis of all agent feedback
│   └── review-metadata.json       # Pages reviewed, agents run, timestamps
└── issues-tracker.md              # Running tracker updated each review cycle
```

## Running the Review

### Step 1: Preparation

Before spawning agents, do these things:

1. Get today's date for the output folder name
2. Create the output directory: `docs/reviews/YYYY-MM-DD/`
3. Scan the workspace for all current HTML files (the list above may have changed since this skill was written)
4. Read the `docs/reviews/issues-tracker.md` if it exists, so agents can reference prior issues
5. Ask Marianne which pages to focus on, OR if she says "all" or "full review", review everything

### Step 2: Spawn Review Agents

Read `references/agent-personas.md` for the full persona definitions and review criteria for each agent.

Spawn all 8 agents in parallel using the Agent tool. Each agent should:
- Receive the full project context (brand, platform, institution type)
- Read the HTML mockup files assigned to them
- Evaluate from their persona's perspective using their specific review criteria
- Write their feedback to their designated output file
- Reference the issues tracker to note whether prior issues have been addressed

**The 8 agents are:**

| Agent | Persona | Primary Focus |
|-------|---------|---------------|
| Prospective Student | 19-year-old exploring trade programs | Can I find a program, understand costs, and apply? |
| Current Student | Enrolled student needing daily resources | Can I access my portal, schedule, and support services? |
| Parent/Guardian | Parent of a 17-year-old considering PTC | Is this school trustworthy? Can I find safety, cost, and outcome info? |
| Faculty Member | Instructor who needs to direct students to resources | Can I find what I need to help my students? |
| Director/Admin | Campus director reviewing the site for accuracy | Does this represent our institution correctly and completely? |
| Visual Designer | UI/UX designer evaluating design quality | Is the visual hierarchy clear, consistent, and professional? |
| Accessibility Auditor | WCAG 2.1 AA compliance specialist | Does this meet accessibility standards for a public institution? |
| Finalsite CMS Specialist | Finalsite Composer implementation expert | Can every element in these mockups be built in Composer? |

### Step 3: Project Manager Synthesis

After all agents complete, spawn one more agent as the **Project Manager**. This agent:

1. Reads all 8 agent feedback files
2. Reads the previous issues tracker (if it exists)
3. Creates `consolidated-report.md` with:
   - **Priority issues** (things that block launch or violate compliance)
   - **High-value improvements** (things that significantly improve UX)
   - **Nice-to-haves** (polish items)
   - **What's working well** (so we know what NOT to change)
   - Cross-references between agents (e.g., if both the student and parent flagged the same navigation issue)
4. Updates `issues-tracker.md` with new issues and marks resolved ones
5. Creates `review-metadata.json` with run details

### Step 4: Present Results

After the PM agent completes:
1. Give Marianne a brief summary of the top 3-5 findings
2. Link to the consolidated report
3. Note any critical/blocking issues that need immediate attention

## Agent Prompt Template

When spawning each agent, use this structure in the prompt:

```
You are [PERSONA NAME], reviewing the Pinellas Technical College website redesign.

CONTEXT:
- PTC is a career and technical college in Pinellas County, FL with campuses in Clearwater and St. Petersburg
- The site runs on Finalsite Composer (a panel-based CMS)
- Brand colors: green #008142, light green #8DC63F, yellow #FFCF01
- Fonts: Roboto (body) and Roboto Slab (headings)
- Content follows AP style
- This is a higher education institution under the Pinellas County School Board

YOUR PERSONA:
[Insert persona details from references/agent-personas.md]

YOUR TASK:
1. Read each HTML mockup file listed below
2. Evaluate from your persona's perspective using your review criteria
3. For each page, note: what works well, what needs improvement, and any blockers
4. Write your findings to: [output path]

PAGES TO REVIEW:
[List of HTML file paths]

PREVIOUS ISSUES (address whether these have been resolved):
[Content from issues-tracker.md or "No previous reviews"]

OUTPUT FORMAT:
Use the format defined in references/agent-personas.md for your agent type.
Write your review file directly. Be specific - reference exact sections, elements, and line numbers when possible.
Keep feedback actionable. Every issue should suggest a fix.
```

## Partial Reviews

If Marianne asks to review just one or two pages, or just run certain agents:
- Only spawn the requested agents
- Still run the PM synthesis at the end
- Still update the issues tracker
