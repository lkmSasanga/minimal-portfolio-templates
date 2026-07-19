# Living Operating System

A premium senior-engineer portfolio that feels like the landing surface of a futuristic OS — not a traditional resume site.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · Three.js (React Three Fiber)

## Experience

- **No-scroll homepage** — one unforgettable hero, split into typography and a living architecture engine
- **Interactive distributed system** — microservices, lambdas, databases, queues, gateways; hover tooltips, dependency highlights, click-to-reroute traffic
- **Floating developer windows** — live terminal, syntax-highlighted code, commits, CloudWatch, pods, Docker logs, PRs
- **Deployment loop** — every ~20s: code → commit → CI → Docker → deploy → traffic shift → success
- **Mouse-reactive atmosphere** — parallax glass, lighting, R3F starfield, magnetic CTAs
- **Route-per-section** — Projects, About, Experience, Articles, Contact with soft macOS-like page transitions

## Quick start

```bash
cd operating-system
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit `src/data/portfolio.ts` for identity, projects, experience, and articles.  
Edit `src/data/architecture.ts` for the hero system topology and request routes.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Development server       |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | ESLint                   |
