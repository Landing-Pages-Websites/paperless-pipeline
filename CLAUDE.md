<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Paperless Pipeline — Website Build

## Project Overview
Multi-page marketing website for Paperless Pipeline, a real estate transaction management SaaS. Static, hardcoded content. Next.js 16+ App Router with Tailwind CSS v4.

## Design Reference
- See `DESIGN_SPEC.md` for full design tokens, sitemap, and component specs.
- Figma source of truth: https://www.figma.com/design/c05rvNxwVjgdfAElsCjsQo/Peter-Paperless-Pipelines---CF--Copy-

## Design Tokens (Quick Reference)

### Colors
```css
--color-primary: #0063EB;
--color-primary-hover: #046EFF;
--color-dark: #030712;
--color-dark-secondary: #23272E;
--color-text-body: #4F4F4F;
--color-text-muted: #6C757D;
--color-bg-cream: #FDF9EE;
--color-bg-blue-light: #EEF4FF;
--color-bg-purple-light: #F5F0FF;
--color-bg-green-light: #E8F8EF;
--color-bg-gray: #ECEEF2;
--color-yellow-accent: #FFE95B;
--color-red-accent: #D92D20;
```

### Fonts
- **Poppins** (400, 500, 600, 700) — all text
- **Bricolage Grotesque** (500) — display accents
- Both via `next/font/google` with CSS variable approach

### Breakpoints
- Mobile: < 768px
- Tablet: 768px – 1023px
- Desktop: ≥ 1024px

## Coding Conventions

1. **Components** go in `src/components/` — PascalCase filenames (e.g., `Header.tsx`, `Footer.tsx`, `HeroSection.tsx`)
2. **Pages** use App Router in `src/app/{route}/page.tsx`
3. **Data** in `src/data/` — nav items, FAQ content, pricing tiers, blog posts, etc.
4. **All images** use `next/image` — never raw `<img>` tags
5. **Responsive** — mobile-first approach, use Tailwind responsive prefixes (`md:`, `lg:`)
6. **Semantic HTML** — proper heading hierarchy, landmarks, ARIA labels
7. **"use client"** only when needed (interactivity: accordions, mobile nav, forms)
8. **No CMS/backend** — all content is hardcoded in components or data files

## Type Scale (Tailwind Classes)
- Hero: `text-5xl md:text-7xl font-semibold`
- H1: `text-4xl md:text-5xl font-semibold`
- H2: `text-3xl md:text-4xl font-semibold`
- H3: `text-2xl md:text-3xl font-medium`
- H4: `text-xl md:text-2xl font-medium`
- Body: `text-base` (16px)
- Small: `text-sm` (14px)
- Caption: `text-xs` (12px)

## Section Container Pattern
```tsx
<section className="py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* content */}
  </div>
</section>
```

## Button Pattern
```tsx
// Primary
<button className="bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium px-6 py-3 rounded-lg transition-colors">
  Get Started
</button>

// Secondary
<button className="border border-gray-300 hover:border-[#0063EB] text-gray-900 font-medium px-6 py-3 rounded-lg transition-colors">
  Learn More
</button>
```
