# Paperless Pipeline — Design Specification

Figma: https://www.figma.com/design/AQ93XkoSmmbyf16Nb9auW2/Peter-Paperless-Pipelines---CF
Source page: "UI Design Updates - 4.04.2026"

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| primary-blue | #0063EB | Primary CTA buttons, links, accents |
| primary-blue-hover | #046EFF | Button hover states |
| dark | #030712 | Primary text, headings |
| dark-secondary | #23272E | Secondary headings |
| text-body | #4F4F4F | Body text |
| text-muted | #6C757D | Captions, secondary text |
| red-accent | #D92D20 | Error states, alert accents |
| orange-accent | #FF492C | Accent highlights |
| yellow-accent | #FFE95B | Highlight badges, decorative |
| bg-cream | #FDF9EE | Hero section background, warm sections |
| bg-blue-light | #EEF4FF | Blue tinted sections |
| bg-purple-light | #F5F0FF | Purple tinted sections |
| bg-green-light | #E8F8EF | Green tinted sections, success states |
| bg-gray | #ECEEF2 | Gray section backgrounds |
| bg-gray-light | #E9ECEF | Borders, dividers |
| white | #FFFFFF | Card backgrounds, main bg |

## Typography

### Font Families
- **Poppins** — Primary font for all text (Google Fonts: variable weight 400-700)
- **Bricolage Grotesque** — Display/accent headings (Google Fonts: weight 500)

### Type Scale
| Level | Font | Weight | Size | Usage |
|-------|------|--------|------|-------|
| Display/Hero | Poppins | 600-700 | 64px | Hero headline |
| H1 | Poppins | 600 | 48px | Page titles |
| H2 | Poppins | 600 | 40px | Section headings |
| H3 | Poppins | 500-600 | 32px | Sub-section headings |
| H4 | Poppins | 500-600 | 24px | Card titles |
| H5 | Poppins | 500-600 | 20px | Small headings |
| Body Large | Poppins | 400-500 | 20px | Hero subtext |
| Body | Poppins | 400 | 16px | Default body text |
| Body Small | Poppins | 400-500 | 14px | Captions, nav items |
| Caption | Poppins | 500-600 | 12px | Badges, tags, fine print |
| Accent | Bricolage Grotesque | 500 | 40px | Decorative headings |

## Layout

- **Design width**: 1440px
- **Max content width**: ~1200px centered
- **Section padding**: ~80-120px vertical, ~40-80px horizontal
- **Card border-radius**: 12-16px
- **Button border-radius**: 8px (standard), full-round for pill buttons

## Sitemap & Routes

| Figma Frame | Route | Description |
|-------------|-------|-------------|
| Homepage | `/` | Main landing with hero, workflow, roles, testimonials, pricing preview, FAQ |
| How It Works - For Brokers | `/how-it-works/brokers` | Broker-focused value prop |
| How It Works - For Teams | `/how-it-works/teams` | Team-focused value prop |
| How It Works - For Transaction Coordinators | `/how-it-works/transaction-coordinators` | TC-focused value prop |
| Features - Pipeline eSign | `/features/pipeline-esign` | eSign feature page |
| Features - Transaction Management | `/features/transaction-management` | Transaction mgmt feature |
| Features - Commissions Management | `/features/commissions-management` | Commission mgmt feature |
| Pricing | `/pricing` | Pricing tiers |
| FAQs | `/faqs` | Accordion FAQ list |
| Savings Calculator | `/savings-calculator` | Interactive calculator |
| Real Estate Commission Calculator | `/commission-calculator` | Interactive calculator |
| Privacy Policy | `/privacy-policy` | Legal - privacy |
| Cookie Policy | `/cookie-policy` | Legal - cookies |
| Terms of Service | `/terms-of-service` | Legal - terms |
| Blogs | `/blog` | Blog listing page |
| Blog Post Page | `/blog/[slug]` | Individual blog post |
| Case Studies | `/case-studies` | Case study listing |
| Case Study Post Page | `/case-studies/[slug]` | Individual case study |

## Navigation Structure

### Top Nav
- Logo (left)
- How It Works (dropdown: For Brokers, For Teams, For Transaction Coordinators)
- Features (dropdown: Pipeline eSign, Transaction Management, Commissions Management)
- Pricing
- Resources (dropdown: Blog, Case Studies, FAQs, Savings Calculator, Commission Calculator)
- CTA Button: "Start Free Trial" or "Get Started" (right, primary-blue)

### Footer
- Logo + description
- Column links: Product, Resources, Company, Legal
- Social media icons
- Copyright

## Homepage Sections (scroll order)

1. **Hero** — bg-cream (#FDF9EE), large headline, subtext, CTA buttons, G2 rating badge "4.6+", dashboard preview image
2. **All-in-One Workflow** — White bg, section heading, workflow steps/features grid
3. **CTA Banner** — Blue or dark bg, mid-page conversion prompt
4. **Built for Every Role** — White bg, three role cards (Brokers, Teams, TCs)
5. **When Systems Fall Behind** — White bg, pain-point comparison / problem-solution layout
6. **CTA Banner** — Second conversion prompt
7. **Ready Section** — Centered heading with action prompt
8. **Built on Transparency** — White bg, trust/transparency messaging
9. **Testimonials** — "Trusted by teams like yours", testimonial cards
10. **Pricing Preview** — "Pay for what matters", link to full pricing page
11. **FAQs** — Accordion FAQ section with "View All" link
12. **Footer** — Full site footer

## Button Variants

- **Primary**: bg-primary-blue, white text, rounded-lg, hover bg-primary-blue-hover
- **Secondary/Outline**: white bg, border, dark text, hover blue tint
- **Ghost**: no bg, text link style with arrow

## Component Patterns

- **Cards**: white bg, rounded-xl, subtle shadow, padding 24-32px
- **FAQ Accordion**: Click to expand, plus/minus or chevron icon
- **Testimonial cards**: Quote text, author name, role, optional avatar
- **Feature grid**: Icon + heading + description in grid layout
- **Role cards**: Icon/illustration + heading + description + CTA link
