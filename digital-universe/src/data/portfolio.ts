export const siteConfig = {
  name: "Alex Rivera",
  title: "Software Engineer",
  tagline: "Engineering systems. Not just software.",
  email: "alex.rivera@email.com",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
  resumeUrl: "/resume.pdf",
  philosophy:
    "I design resilient distributed systems — where architecture, reliability, and craftsmanship converge. Every interface, pipeline, and protocol is intentional.",
};

export const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: "github" as const },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
  { name: "Twitter", href: "https://twitter.com", icon: "twitter" as const },
];

export const dockItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "experience", label: "Experience", href: "/experience" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

export const about = {
  headline: "Systems thinker. Builder of durable software.",
  paragraphs: [
    "I'm a software engineer who treats every product as a living system — with clear boundaries, observable behavior, and graceful failure modes.",
    "Over the past 7+ years I've shipped cloud platforms, real-time APIs, and polished client experiences across web and mobile. I care about the seams: how services talk, how teams ship, and how users feel the difference.",
    "Outside of production, I write about architecture, mentor engineers, and prototype the interfaces that make complex systems understandable.",
  ],
  principles: [
    { title: "Clarity over cleverness", body: "Readable systems outlive clever ones." },
    { title: "Observability first", body: "If you can't measure it, you can't trust it." },
    { title: "Ship iteratively", body: "Small, reversible changes compound into excellence." },
  ],
};

export const projects = [
  {
    id: "nebula-gateway",
    title: "Nebula Gateway",
    subtitle: "Edge API platform",
    description:
      "A multi-tenant API gateway with adaptive rate limiting, schema-first GraphQL federation, and sub-20ms p99 routing across global regions.",
    tags: ["TypeScript", "Go", "GraphQL", "Redis", "Kubernetes"],
    year: "2025",
    href: "#",
  },
  {
    id: "orbit-ci",
    title: "Orbit CI",
    subtitle: "Pipeline orchestration",
    description:
      "A declarative CI/CD engine that models pipelines as directed graphs — with preview environments, artifact provenance, and policy-as-code gates.",
    tags: ["Rust", "Terraform", "Docker", "AWS"],
    year: "2024",
    href: "#",
  },
  {
    id: "signal-mesh",
    title: "Signal Mesh",
    subtitle: "Real-time collaboration",
    description:
      "CRDT-backed collaboration layer powering concurrent editing for 10K+ concurrent sessions with offline-first sync.",
    tags: ["React", "WebSockets", "PostgreSQL", "Next.js"],
    year: "2024",
    href: "#",
  },
  {
    id: "lattice-ml",
    title: "Lattice ML Ops",
    subtitle: "Model delivery",
    description:
      "End-to-end ML ops platform: feature stores, canary inference, and automated rollback when drift exceeds thresholds.",
    tags: ["Python", "FastAPI", "Kubernetes", "DynamoDB"],
    year: "2023",
    href: "#",
  },
];

export const experience = [
  {
    role: "Staff Software Engineer",
    company: "Aether Systems",
    period: "2023 — Present",
    orbit: "Architecture",
    highlights: [
      "Led platform architecture for a multi-region SaaS serving 2M+ MAU.",
      "Cut infra spend 32% via workload right-sizing and event-driven compute.",
      "Established engineering RFCs and reliability SLOs across 6 product teams.",
    ],
  },
  {
    role: "Senior Full-Stack Engineer",
    company: "Helix Cloud",
    period: "2020 — 2023",
    orbit: "Cloud",
    highlights: [
      "Built developer-facing console for infrastructure provisioning.",
      "Designed event-sourced billing pipeline processing 50M events/day.",
      "Mentored 5 engineers; introduced typed API contracts and contract tests.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Nova Labs",
    period: "2018 — 2020",
    orbit: "Frontend",
    highlights: [
      "Shipped React Native apps to 500K+ downloads with offline sync.",
      "Rebuilt design system; reduced UI debt and sped feature delivery 25%.",
    ],
  },
];

export const articles = [
  {
    title: "Designing Failure Domains",
    excerpt: "How to draw blast-radius boundaries before your users discover them.",
    date: "2025-11-12",
    tags: ["Architecture", "Reliability"],
    href: "#",
  },
  {
    title: "The Quiet Power of Idempotency",
    excerpt: "Making distributed writes safe without sacrificing throughput.",
    date: "2025-06-03",
    tags: ["Backend", "APIs"],
    href: "#",
  },
  {
    title: "Observability as Product UX",
    excerpt: "Treating dashboards and traces as interfaces for operators.",
    date: "2024-12-18",
    tags: ["DevOps", "DX"],
    href: "#",
  },
  {
    title: "From Monolith to Mesh — Carefully",
    excerpt: "A migration playbook that prioritizes seams over slogans.",
    date: "2024-08-22",
    tags: ["Architecture", "Cloud"],
    href: "#",
  },
];

export const orbitLabels = [
  "Cloud",
  "AWS",
  "Node.js",
  "React",
  "React Native",
  "Next.js",
  "NestJS",
  "Docker",
  "Terraform",
  "PostgreSQL",
  "DynamoDB",
  "Redis",
  "Kubernetes",
  "GraphQL",
];

export const artifacts = [
  { type: "commit" as const, text: "feat: adaptive circuit breaker" },
  { type: "terminal" as const, text: "$ kubectl rollout status deploy/api" },
  { type: "api" as const, text: "POST /v1/events  201  12ms" },
  { type: "ci" as const, text: "pipeline ✓  4m 12s" },
  { type: "code" as const, text: "async fn reconcile(state: &Mesh)" },
  { type: "deploy" as const, text: "deployed → us-west-2" },
  { type: "commit" as const, text: "fix: seal race in lease renew" },
  { type: "terminal" as const, text: "$ terraform plan -out=tf.plan" },
];
