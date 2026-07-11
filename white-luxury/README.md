# White Luxury — Quiet Precision Portfolio

A highly polished, minimal personal portfolio template for senior software engineers, cloud architects, and technical consultants.

Built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Concept

**Quiet Precision** — luxury editorial design meets modern technical credibility. Calm typography, restrained motion, champagne accents on warm ivory, and curated case-study storytelling instead of generic card grids.

## Getting started

```bash
cd white-luxury
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

All content lives in structured TypeScript files under `src/data/`:

| File | Contents |
|------|----------|
| `site.ts` | Name, role, nav, hero, profile, signature facts |
| `projects.ts` | Selected work + case study detail |
| `expertise.ts` | Capabilities ledger |
| `experience.ts` | Professional chapters |
| `content.ts` | Principles, testimonials, current focus |

Update personal details in `src/data/site.ts` first, then replace project and experience entries.

## Structure

```
src/
  app/                  # App Router pages, metadata, sitemap
  components/
    layout/             # Navbar, Footer
    sections/           # Homepage sections
    ui/                 # Shared editorial primitives
  data/                 # Portfolio content
  lib/                  # Utilities
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Design notes

- Serif: Cormorant Garamond
- Sans: Manrope
- Mono: IBM Plex Mono
- Palette: ivory, cream, charcoal, warm grey, champagne gold, espresso
- Respects `prefers-reduced-motion`
