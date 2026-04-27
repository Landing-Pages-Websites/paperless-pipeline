# How It Works — For Brokers: Visual Spec

Page route: `/how-it-works/brokers`
Figma frame: 129:947

## Section 1: Hero (129:948)
Background: cream (#FDF9EE)
Layout: Two columns, text left ~55%, product screenshot right ~45%

**Left column:**
- Blue eyebrow: "FOR BROKERS" (#0063EB, 14px, uppercase, medium weight)
- Heading: "See every deal. Know every detail. Control your brokerage." (~48px, semibold, black)
- Subtitle: gray body text (~16px) about visibility and compliance
- Two CTA buttons side by side: "Start Free Trial →" (blue #0063EB, white text) + "Book A Demo →" (white bg, dark text)
- Below buttons: social proof row with overlapping avatars + "4.6+ by users on G2" (same pattern as homepage hero)

**Right column:**
- Large product screenshot in a rounded card with border/shadow
- Shows a transaction list/table UI (use `/images/figma/pages/product-screenshot-transactions.jpg`)

## Section 2: Before/After (129:1003)
Background: white
Layout: Two stacked cards (BEFORE and AFTER), each full-width with rounded corners

**BEFORE card (top):**
- Left side: Header "Before Paperless Pipeline" with red/warning accent
- Right side: 3-4 pain point items with icons (similar to homepage painpoints but horizontal)
- Background: light gray or subtle warm bg
- Pain items: things like "Texting agents for updates", "Compliance scattered", "Costs rising"

**AFTER card (bottom):**
- Left side: Header "After Paperless Pipeline" with green/blue accent
- Right side: 3-4 benefit items with check icons
- Background: light blue/green tint
- Benefit items: things like "Full visibility", "Automated compliance", "Predictable costs"

## Section 3: Stats (129:1065)
Background: white
Layout: Centered heading + 3 stat cards in a row

- Heading: something like "The numbers speak for themselves"
- 3 stat cards, each with:
  - Large number in blue (#0063EB) or accent color
  - Label text below
  - Light background, rounded, bordered

## Section 4: CTA (129:1085)
Same dark gradient CTA banner pattern as homepage. Full-width rounded card with dark-gradient-bg, centered white text, yellow button.

## Section 5: Value (129:1092)
Background: white
Layout: Two columns — text left, product screenshot right (or vice versa)

- Eyebrow + heading + description about the core value proposition
- Product screenshot showing detailed view (use product-screenshot-checklist.jpg or compliance.jpg)

## Section 6: Features (129:1121)
Background: white or light gray
Layout: Grid of feature cards (2x3 or 3x2)

Each feature card has:
- Icon in a colored circle
- Feature title (bold, ~18px)
- Feature description (gray text, ~14px)
- Light border, rounded corners

## Section 7: Benefits (129:1158)
Background: alternating or white
Layout: Alternating left/right layout — text + screenshot pairs

3-4 benefit blocks, each with:
- Section number or icon
- Heading + description on one side
- Product screenshot on the other side
- Alternating: odd blocks = text left/image right, even = image left/text right

## Section 8: FAQs (129:1253)
Same FAQ pattern as homepage — two columns, header left, accordion right.
But with broker-specific questions.

## Section 9: Footer (129:1304)
Same footer CTA + footer links as homepage (reuse Footer component).

## Images to use:
- `/images/figma/pages/product-screenshot-transactions.jpg` — Hero right column
- `/images/figma/pages/product-screenshot-checklist.jpg` — Value or Benefits section
- `/images/figma/pages/product-screenshot-compliance.jpg` — Benefits section
- `/images/figma/pages/product-screenshot-workflow.jpg` — Benefits section
- `/images/figma/dark-gradient-bg.png` — CTA banner background
