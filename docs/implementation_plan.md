# Implementation Plan: Visual Design & Finalsite Workflow

You are completely right—the current design suffers from "gray wash." Because `body` is set to `#f5f7fa` (light gray) and no sections explicitly override it, almost 60% of the page blends together without visual breaks.

As a UI/UX expert looking through the lens of **Finalsite Composer**, this actually presents a great opportunity. Finalsite Composer relies heavily on "Panels" or "Layouts" (horizontal rows) to structure pages. The best Finalsite builds use strictly alternating panel backgrounds to guide the user's eye and delineate content blocks.

## Proposed Visual Hierarchy Updates

I will implement a strict alternating panel structure that translates directly 1-to-1 into Finalsite Composer Layouts:

1.  **Quick Links Panel:**
    *   **Current:** Light Gray.
    *   **New:** `White (#ffffff)`. I will add a subtle bottom border. This creates a clean bridge from the dark, image-heavy hero into the content.
2.  **Why PTC Section:**
    *   **Current:** Light Gray.
    *   **New:** `Light Gray (#f5f7fa)`. We will keep this on the default gray to alternate from the Quick Links above.
3.  **Programs Grid:**
    *   **Current:** Light Gray.
    *   **New:** `White (#ffffff)`. This is essential so the program cards (which have borders and hover shadows) have contrast against the background.
4.  **Campuses Section:**
    *   **Current:** Light Gray.
    *   **New:** `Brand Green (#008142)`. I will invert this entire section to use a dark green background with white text. This creates a massive, visually arresting break in the exact middle of the page, acting as an anchor. The white campus cards will "pop" beautifully against the dark green. This is incredibly easy to do in Finalsite by checking the "Invert Colors" box on a Layout panel.
5.  **News & Events:**
    *   **Current:** Light Gray.
    *   **New:** `Light Gray (#f5f7fa)`. Alternating back to light gray before hitting the dark CTA band.

## Finalsite Composer Compatibility Checks

*   **Grid Systems:** The 3x2 Programs Grid and 2x1 Campus Cards translate perfectly to Finalsite's `33/33/33` and `50/50` Layout rows.
*   **Custom Classes:** All custom hover effects (like the green line animations on cards) can be ported to Composer by adding our custom CSS classes (e.g., `.program-card`) to the "Custom Class" field inside Finalsite Post or Content Elements.
*   **Image Handling:** Finalsite handles responsive images automatically. Our CSS uses `object-fit: cover` extensively, which mimics Finalsite's native "Fill" image settings.

## Verification Plan
1. I will update [styles.css](file:///c:/Users/mshaf/OneDrive/Documents/ptc-finalsite/mockups/main-site/styles.css) with these background color assignments.
2. I will adjust the text color variables in the Campuses section to ensure WCAG AAA contrast against the dark green background.
3. I will run the browser subagent to verify the new visual flow.
