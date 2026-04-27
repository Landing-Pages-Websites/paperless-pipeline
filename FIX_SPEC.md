# Figma Audit Fix Spec — Verified Discrepancies

These are the verified visual differences between the deployed site and the Figma designs.
Fix each one precisely — no other changes.

## Fix 1: Homepage Hero — Add Dark Dashboard Background Behind Stat Cards

**File:** `src/components/home/HeroSection.tsx`
**Issue:** The right column has a 2×2 stat card grid, which is correct. But in the Figma, these cards sit ON TOP OF a dark product dashboard screenshot background. The build shows the cards directly on the cream background.
**Fix:** Add a dark rounded container behind the stat card grid that shows the product screenshot image (`/images/figma/pages/product-screenshot-transactions.jpg`) as a background, with the stat cards overlaid on top with slight transparency/overlay so the dashboard is visible behind/around the cards.

The Figma shows:
- A dark rounded rectangle (~20px border radius) containing the product screenshot
- The 4 stat cards overlaid on top, positioned in a 2x2 grid
- The dashboard image visible in the gaps between the cards and around the edges
- The overall right column container has rounded corners

Implementation: Wrap the existing stat card grid in a container with:
- `position: relative`
- `background: #0B1120` (dark navy)
- `border-radius: 20px`
- `overflow: hidden`
- An absolutely-positioned `Image` of the product screenshot filling the container with `opacity: 0.4` or similar
- The stat cards stay on top as they are, but add some `gap` or `padding` so the dark background shows through

## Fix 2: Homepage "How Paperless Pipeline Works" — Step Cards Missing Images

**File:** `src/components/home/WorkflowSection.tsx`
**Issue:** In the Figma, the workflow section shows step 1 expanded with descriptive text AND a product screenshot image to the right. Steps 2-4 are collapsed (accordion-style) showing only the step title. The build shows all 4 steps expanded as a text list without any product screenshots.
**Fix:** 
- Make step 1 the "active/expanded" step with text + product screenshot image on the right
- Steps 2-4 should be collapsed, showing only the number + title (accordion items)
- Use `/images/figma/pages/product-screenshot-workflow.jpg` for step 1's image
- The entire section has a two-column layout: left column = numbered steps (accordion), right column = screenshot of the active step
- On mobile, stack vertically

## Fix 3: Homepage Roles Section — Tab Content Should Show Product Screenshot

**File:** `src/components/home/RolesSection.tsx`  
**Issue:** The Figma shows the roles section with three tabs (For brokers, For teams, For TCs and admins). The ACTIVE tab shows a text description on the left AND a large product screenshot on the right. The build has tabs but the content area may not show the product screenshot prominently.
**Fix:** Ensure each tab's content panel has:
- Left side: heading + description text + "Try Now →" link
- Right side: large product screenshot image
- Use `/images/figma/pages/product-screenshot-transactions.jpg` for brokers tab
- Use `/images/figma/pages/screenshot-team-dashboard.jpg` for teams tab
- Use `/images/figma/pages/screenshot-tc-tasks.jpg` for TCs tab

## Fix 4: Homepage "Ready from Day One" Section — Missing Product Image

**File:** `src/components/home/ReadySection.tsx`
**Issue:** Figma shows this section with text (two feature bullets) on the left and a product screenshot on the right. The build may be missing the screenshot.
**Fix:** Add the product screenshot on the right side. Use `/images/figma/pages/product-screenshot-checklist.jpg`. Two-column layout on desktop, stacked on mobile.

## Fix 5: Blog Listing — Featured Post Missing Hero Image

**File:** `src/app/blog/BlogContent.tsx`
**Issue:** The Figma shows the featured blog post as a large card with a hero/featured image (colored gradient or illustration). The build has a text-only featured card.
**Fix:** Add a colored gradient background or placeholder image to the featured post card. In the Figma, it appears as a blue/teal gradient card with the title text overlaid. Make the featured card visually prominent with a gradient background (use `background: linear-gradient(135deg, #0063EB, #00B4D8)` or similar from the Figma).

## Fix 6: Blog Posts — Article Cards Missing Thumbnails

**File:** `src/app/blog/BlogContent.tsx`
**Issue:** Figma shows each blog article card with a colored thumbnail/category image at the top. Build uses only text + author avatar.
**Fix:** Add a small colored header bar or gradient strip at the top of each article card that corresponds to the category color. This gives the cards visual weight matching the Figma.

## Fix 7: Case Studies Listing — Cards Need Visual Enhancement

**File:** `src/app/case-studies/page.tsx`
**Issue:** Figma shows case study cards with prominent stat callouts and visual imagery (company branding elements). Build has minimal text-only cards.
**Fix:** Make the stat callout (e.g., "40% faster closings") larger and more prominent — use a larger font size, colored accent text. Add a subtle background gradient or image treatment to differentiate each card visually.

## Fix 8: Savings Calculator — Duplicate CTA Section

**File:** `src/app/savings-calculator/page.tsx`
**Issue:** The page has two identical "Switching doesn't mean starting over" CTA sections stacked at the bottom. Figma only shows this once.
**Fix:** Remove the duplicate CTA section. Keep only one at the bottom.

## Do NOT Change:
- Pricing page (matches well)
- Legal pages (match)
- FAQ page (matches)
- Footer (matches)
- Header/navigation (matches)
- Any content/copy — it's all correct
