# Digital Universe Portfolio

An immersive software engineer portfolio — an interactive digital universe built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **Three.js** (React Three Fiber).

No homepage scrolling. Everything lives inside one cinematic scene.

## Concept

Visitors enter a dark cosmic environment. An illuminated **digital core** floats at the center — representing the engineer. Domain **planets** orbit around it:

| Planet | Route |
| --- | --- |
| Architecture | `/about` |
| Frontend | `/projects` |
| Backend | `/experience` |
| AI | `/articles` |
| Cloud | `/contact` |
| DevOps / Mobile / Security | Hover details |

## Quick start

```bash
cd digital-universe
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit `src/data/portfolio.ts` and `src/data/planets.ts`:

- Name, title, philosophy, email
- Projects, experience, articles
- Planet skills and colors
- Social links and resume URL

Replace `/public/resume.pdf` with your resume file.

## Features

- Interactive Three.js universe with stars, nebula, particles, drones, and floating engineering artifacts
- Mouse-reactive camera, lighting, and constellations
- Editorial hero typography + Explore Universe mode
- macOS-inspired floating dock (auto-hides on inactivity)
- Optional ambient audio (off by default)
- Camera fly-through transitions into secondary routes
- Reduced-motion support and lazy-loaded WebGL canvas

## Scripts

```bash
npm run dev      # development
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```

## Stack

- Next.js 16 · React 19 · Tailwind CSS 4
- @react-three/fiber · drei · postprocessing
- Framer Motion · GSAP · Web Audio (optional ambient tones)
