# Visual Specification — Homepage Sections

This document describes the EXACT visual layout of each homepage section as seen in the Figma design exports. Every section description is written by a human who visually inspected the Figma frame exports. Claude Code should follow these descriptions precisely.

## Image Assets Available

All images are in `public/images/figma/`:

| File | Description |
|------|-------------|
| hero-avatar-1.png | Female user photo, circular crop |
| hero-avatar-2.png | Male user photo, circular crop |
| hero-avatar-3.png | Female user photo, circular crop |
| logo.png | Paperless Pipeline logo mark (green document icon) |
| workflow-screenshot.png | Product UI screenshot showing transaction management dashboard |
| dark-gradient-bg.png | Dark navy/blue gradient texture used as card backgrounds |
| cta-image-1.png | Photo of a man in plaid shirt (testimonial) |
| cta-image-2.png | Photo of a woman (testimonial) |
| roles-screenshot.png | Product UI screenshot for the roles section |
| painpoints-image.png | Illustration showing scattered/messy workflow |
| ready-feature-image.png | Product UI screenshot showing onboarding/setup |
| testimonial-logo-1.png | Company logo for Avenue Transactions |
| testimonial-logo-2.png | Company logo for Legacy South Real Estate Group |
| testimonial-logo-3.png | Company logo for The Wilson Group |

---

## Section 1: Hero (node 129:402)

**Background:** Cream (#FDF9EE), full width

**Layout:** Two columns side by side. Left ~55%, Right ~45%. Max-width ~1280px centered. Generous padding (80px horizontal on desktop).

**Left Column (top to bottom):**
1. **Pill badge** — Small rounded-full pill with a tiny blue circle/dot icon on the left, then text "No credit card required · Free setup included" in small gray text. Has a subtle border.
2. **Headline** — Large (~64px), Poppins semibold, tight leading (~1.1):
   - Line 1: "Transaction management" in black
   - Line 2: "that stays" in blue (#0063EB) followed by "out of the way." in blue italic
3. **Subtitle** — "Built for teams that need clarity, control, and predictable costs as they grow." in 18px Poppins medium, gray (#4F4F4F)
4. **Two CTA buttons** side by side:
   - "Start Free Trial →" — Blue (#0063EB) bg, white text, rounded-lg (~8px), blue ring shadow
   - "Book A Demo →" — White bg, dark text, rounded-lg, subtle border/shadow
5. **G2 Rating row:**
   - Three overlapping circular avatar photos (36px diameter, -10px overlap). Use the hero-avatar images.
   - Thin vertical divider line
   - "4.6+" in Bricolage Grotesque font, with the "+" in blue
   - Row of 5 small yellow (#FFE95B) star icons
   - "by users on G2" in small gray text

**Right Column:**
4 stat/info cards in a 2×2 grid with small gaps (~12px):
- **Top-left card:** Blue (#0063EB) background, large white text "33K+" (the + is slightly smaller), subtitle "Transactions Processed" in white/light blue. Has pill-shaped right side (large border-radius on right corners).
- **Top-right card:** White background, 4-5 gold star icons at top, a short testimonial quote in dark text, attribution "— Tony Garrant" below. Standard rounded corners.
- **Bottom-left card:** White background, large blue (#0063EB) text "16+", subtitle "Years in Business". Standard rounded corners.
- **Bottom-right card:** Yellow (#FFE95B) background, large text "90K+", subtitle about users. Has pill-shaped top-right corner.

---

## Section 2: How It Works / Workflow (node 129:486)

**Background:** White

**Layout:** 
- Top: centered section header with eyebrow + heading + subtitle
- Below: Two-column layout. Left narrow column (~48px) has numbered circles with a vertical connecting line. Right column has content cards.

**Header:**
- Eyebrow: "ALL-IN-ONE WORKFLOW" in blue (#0063EB), uppercase, small text, wide letter-spacing
- Heading: "How Paperless Pipeline works" in ~48px Poppins semibold, black
- Subtitle: "Streamline your entire transaction process..." in 16px gray (#4F4F4F)

**Steps (4 total):**
Each step has a numbered blue circle (1, 2, 3, 4) on the left connected by a thin gray vertical line.

- **Step 1 (tallest card):** White card with shadow and border. Contains:
  - Heading: "Start a new transaction in seconds" 
  - Subtext: "Create and launch deals instantly..."
  - Below text: a large product screenshot image (use workflow-screenshot.png) showing the actual Paperless Pipeline UI. The screenshot fills the bottom portion of the card with rounded corners.
  
- **Steps 2-4:** Smaller cards (no screenshot), each with:
  - Heading in semibold
  - Subtitle/description in gray
  - Consistent card styling with border and subtle shadow

---

## Section 3: CTA Quote (node 129:530)

**Layout:** Full-width with small padding (20px). Inside is a large dark rounded card (border-radius 24px) that uses a dark gradient background image (use dark-gradient-bg.png).

**Content:** Centered large white quote text (~40px Poppins semibold):
"One system to manage transactions, documents, and compliance — without forcing agents to change how they work."

No buttons in this variant. Just the quote on the dark background.

On the right side of the card, there appears to be a subtle photo overlay — the cta-image-1.png (man in plaid shirt) shown at reduced opacity blending into the dark gradient.

---

## Section 4: Roles / Built for Every Role (node 129:537)

**Background:** White, generous vertical padding (~120px)

**Header (centered):**
- Eyebrow: "BUILT FOR EVERY ROLE" in blue (#0063EB), uppercase, wide tracking
- Heading: "Built for the people keeping transactions moving" in ~48px Poppins semibold, centered
- Subtitle in gray, centered

**Tab Interface:**
Three tabs in a horizontal row:
- "For brokers" / "For teams" / "For TCs and admins"
- Each tab shows label + short subtitle
- Active tab has a colored bottom border/indicator bar

**Tab Content Panel:**
A large dark card (rounded-3xl, ~24px radius) with the dark gradient background image (dark-gradient-bg.png). Inside the dark card:
- Left side: a product screenshot image (use roles-screenshot.png)
- Right side: a white card overlay (rounded-2xl, shadow, padding ~32px) containing:
  - Heading: "Get full visibility into every transaction..."
  - Body text describing the feature
  - "Try Now →" button in blue (#0063EB)

---

## Section 5: Pain Points / When Systems Fall Behind (node 129:587)

**Background:** White

**Layout:** Two main areas stacked vertically.

**Top Section:**
- Left: Section header with eyebrow "WHEN SYSTEMS FALL BEHIND" in blue uppercase, heading "Growth shouldn't make your brokerage harder to run" in ~48px, subtitle text
- Right: A large illustration image (use painpoints-image.png) showing a cluttered/messy workflow visualization

**Middle: Three problem cards** in a row:
Each card has:
- A small red/dark icon at top
- Heading in semibold (e.g., "The fit breaks down")
- Description text in gray

**Bottom: Stats bar** with heading "HOW THIS SHOWS UP IN PRACTICE :" followed by three stat items:
- "10+" / "Hours lost each week"
- "3–5" / "Separate tools"
- "$$$" / "Software spend that's hard to tie back to real productivity"

---

## Section 6: CTA with Button (node 129:629)

Similar to CTA Quote but WITH a button:
- Dark rounded card (24px radius) with gradient background (dark-gradient-bg.png)
- "CALL TO ACTION" eyebrow in white uppercase
- Heading: "Switching doesn't mean starting over" in ~40px white semibold
- Subtitle: "We'll help you get set up without disrupting active deals." in white
- White CTA button: "Start My 14-Day Free Trial →" with blue text
- Right side: subtle photo overlay (cta-image-2.png)

---

## Section 7: Ready (node 129:639)

**Background:** White, generous padding

**Layout:** Two equal columns side by side.

**Left Column:**
A dark card (dark gradient bg, rounded-3xl) containing an inner white card with a testimonial quote:
- Quote text in the white card: from Michael Greer, Managing Partner
- The dark card has the gradient background image

**Right Column:**
- Eyebrow: "READY FROM DAY ONE" in blue uppercase
- Heading: "Up and running in days, not weeks" in ~48px semibold
- Subtitle paragraph in gray
- Two feature cards stacked vertically, each with:
  - Small icon on the left
  - Title: "Configured around your process" / "Usable from day one"
  - Description text
  - Subtle border, rounded corners, padding

---

## Section 8: Transparency (node 129:670)

**Background:** White

**Layout:** Centered content, max-width ~900px

**Header (centered):**
- Eyebrow: "BUILT ON TRANSPARENCY" in blue uppercase
- Heading: "Your data should always be yours" in ~48px semibold, centered

**Body text:** A paragraph explaining data ownership philosophy in gray.

**Three feature items** in a horizontal row (3 columns):
Each has:
- Small icon at top
- Title in semibold (e.g., "No lock-in", "Full export", "You own it")
- Description in gray

---

## Section 9: Testimonials (node 129:700)

**Background:** White, generous padding

**Header (centered):**
- Eyebrow: "TRUSTED BY TEAMS LIKE YOURS" in blue uppercase
- Heading: "For those who have outgrown the 'all-in-one' promise" in ~48px semibold
- Subtitle in gray

**Three testimonial cards** in a row:
Each card has a gradient background (linear-gradient from yellow #FFE95B to blue #0D47C1, ~250 degrees), rounded-2xl (~16px), generous padding.

Inside each card:
- Top: Company logo image (use testimonial-logo-1/2/3.png) + person's name + company name
- Middle: Large quote text in white (varies in size: ~24px for the first two, ~32px for the third)
- Bottom: Role/title text in white

Cards are equal width but the third (Kesha Kennedy) might be slightly taller due to larger quote text.

---

## Section 10: Pricing (node 129:740)

**Background:** White

**Header (centered):**
- Eyebrow: "PAY FOR WHAT MATTERS" in blue uppercase
- Heading: "Flexible. Modular. Pay for what you need." in ~48px semibold
- Subtitle in gray

**Three pricing cards** in a row, equal width:
Each card has a border (2px, light gray #F2F2F2), rounded-3xl (24px), padding.

- **Card 1 (Transaction Management):**
  - Small blue (#0063EB) badge/pill at top: "CORE PRODUCT"
  - "Pricing Starts at" in small text
  - "$65" in very large text (~64px) + "/month"
  - "Transaction Management" title
  - "Includes:" label
  - 4 feature items with blue circle checkmark icons
  - Blue CTA button at bottom

- **Card 2 (Pipeline eSign):**
  - Small yellow (#FFE95B) badge: "OPTIONAL ADD-ON"
  - "$0.70" in large text + "/signature request"
  - "Pipeline eSign" title
  - 4 feature items
  - Footer note: "Cheaper than DocuSign*" in blue
  - Blue CTA button

- **Card 3 (Commission Module):**
  - Small yellow badge: "OPTIONAL ADD-ON"
  - "Pricing Starts at"
  - "$54" in large text + "/month"
  - "Commission Module" title
  - 4 feature items
  - Blue CTA button

---

## Section 11: FAQ (node 129:868)

**Background:** White

**Layout:** Two columns side by side.

**Left Column (~45%):**
- Eyebrow: "FREQUENTLY ASKED QUESTIONS" in blue uppercase
- Heading: "Questions? We've Got Answers." in ~48px semibold
- Subtitle paragraph in gray
- "View All →" link/button at the bottom of the column (blue text with arrow)

**Right Column (~55%):**
3 FAQ accordion items stacked vertically:
- Each item has a bottom border (light gray)
- Question text in semibold (~18px)
- Toggle button on the right (blue circle with plus/minus icon)
- First item is expanded by default showing the answer text in gray
- Answer text is ~16px, gray (#4F4F4F)

---

## Section 12: Footer Pre-CTA (node 129:891)

This is a large dark CTA block above the actual footer.

**Layout:** Dark card (dark-gradient-bg.png background, rounded-3xl) with generous padding (~80px).

**Content (centered):**
- Large heading in white (~40px semibold): "Start Your Free 14-Day Trial Today"
- Subtitle in white: "Try Paperless Pipeline risk free for 14 days..."
- White CTA button: "Start My 14-Day Free Trial →" with blue text

---

## Notes for Implementation

1. All images should use `next/image` component with proper width/height or fill mode
2. Large images (workflow-screenshot, painpoints-image) should be optimized - consider using quality prop
3. The dark-gradient-bg.png is used as a background image on multiple cards (CTA banners, roles content, ready section, footer CTA)
4. All sections use consistent eyebrow styling: blue (#0063EB), uppercase, wide letter-spacing (~0.09em), small font (~14px), Poppins medium
5. All section headings are Poppins semibold (600), approximately 48px, black or near-black
