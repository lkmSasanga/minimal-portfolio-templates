export const siteConfig = {
  name: "Adrian Vale",
  role: "Senior Software Engineer",
  company: "Northstar Systems",
  headline: "Building software that quietly powers extraordinary products.",
  intro:
    "I design distributed systems and craft interfaces where reliability feels invisible — platforms that scale without spectacle.",
  email: "adrian@vale.dev",
  location: "Berlin",
  timezone: "CET (UTC+1)",
  yearsExperience: "9+",
  availability: "Open to select collaborations",
  available: true,
};

export const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
] as const;

export const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: "github" as const },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
  { name: "X", href: "https://x.com", icon: "x" as const },
  { name: "Email", href: "mailto:adrian@vale.dev", icon: "mail" as const },
];

export const projects = [
  {
    id: "atlas",
    title: "Atlas Mesh",
    subtitle: "Event-driven commerce fabric",
    description:
      "A multi-region order orchestration layer processing 40k events/sec with zero-downtime traffic shifts.",
    tags: ["TypeScript", "Kafka", "ECS", "Postgres"],
    year: "2025",
    accent: "#5eead4",
  },
  {
    id: "lumen",
    title: "Lumen Observe",
    subtitle: "Realtime observability OS",
    description:
      "Unified traces, metrics, and deploy timelines in a glass console built for on-call clarity.",
    tags: ["Next.js", "ClickHouse", "WebSockets"],
    year: "2024",
    accent: "#93c5fd",
  },
  {
    id: "harbor",
    title: "Harbor CI",
    subtitle: "Self-hosted pipeline runtime",
    description:
      "Ephemeral builders with deterministic caching — cut median deploy time from 14m to 3m.",
    tags: ["Go", "Kubernetes", "OCI"],
    year: "2024",
    accent: "#fcd34d",
  },
  {
    id: "prism",
    title: "Prism Gateway",
    subtitle: "Edge API control plane",
    description:
      "Policy-aware routing with adaptive rate limits and signed request envelopes.",
    tags: ["Rust", "Envoy", "Redis"],
    year: "2023",
    accent: "#a5b4fc",
  },
];

export const about = {
  lead: "I treat infrastructure like product design — every latency budget, queue depth, and failure mode is a UX decision.",
  paragraphs: [
    "Over nine years I've shipped platforms for fintech, commerce, and developer tools — from the first commit to multi-region failover.",
    "My work sits at the intersection of systems architecture and interface craft: the same care that shapes a glass panel shapes a circuit breaker.",
  ],
  principles: [
    { title: "Quiet reliability", body: "Users should never notice the machinery." },
    { title: "Observable by default", body: "If you can't see it, you can't trust it." },
    { title: "Deliberate interfaces", body: "Motion and hierarchy earn every pixel." },
  ],
};

export const experience = [
  {
    company: "Northstar Systems",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    summary:
      "Lead architect for the commerce mesh. Owned event schemas, deploy strategy, and the internal developer platform.",
    stack: ["TypeScript", "AWS", "Kafka", "React"],
  },
  {
    company: "Cascade Labs",
    role: "Platform Engineer",
    period: "2019 — 2022",
    summary:
      "Built the shared services layer: auth, billing webhooks, and a GraphQL federation gateway serving 12 product teams.",
    stack: ["Go", "GraphQL", "Kubernetes"],
  },
  {
    company: "Field & Form",
    role: "Full-Stack Engineer",
    period: "2017 — 2019",
    summary:
      "Shipped the customer portal and realtime collaboration canvas used by 80k monthly active designers.",
    stack: ["React", "Node.js", "Postgres"],
  },
];

export const articles = [
  {
    title: "Designing failover that feels instantaneous",
    date: "Mar 2026",
    read: "8 min",
    excerpt: "Traffic shifts, warm pools, and the psychology of a two-second outage.",
  },
  {
    title: "Event schemas as product contracts",
    date: "Nov 2025",
    read: "6 min",
    excerpt: "Why your Kafka topics are the most important API you own.",
  },
  {
    title: "Glass UI without the gimmick",
    date: "Jul 2025",
    read: "5 min",
    excerpt: "Blur, depth, and restraint — building interfaces that feel native.",
  },
];

export const terminalCommands = [
  { cmd: "git status -sb", output: "## main...origin/main\n M src/services/orders.ts\n?? infra/ecs-task.json" },
  { cmd: "npm run test -- --filter=orders", output: " ✓ orders.spec.ts (14)\n ✓ inventory.spec.ts (9)\n\nTests passed in 1.84s" },
  { cmd: "docker compose up -d redis postgres", output: "✔ Container atlas-redis   Started\n✔ Container atlas-postgres Started" },
  { cmd: "terraform apply -auto-approve", output: "Apply complete! Resources: 3 added, 1 changed, 0 destroyed." },
  { cmd: "aws ecs update-service --cluster prod --service api-gateway --force-new-deployment", output: "Service api-gateway — deployment started (revision 184)" },
  { cmd: "kubectl get pods -n commerce -w", output: "gateway-7f2a   1/1  Running\norders-9c1b    1/1  Running\npayment-lambda Ready" },
  { cmd: "git push origin main", output: "Enumerating objects: 28\nTo github.com:vale/atlas.git\n   a91c..f3e2  main -> main" },
];

export const codeSnippet = `export async function routeOrder(event: OrderEvent) {
  const region = await resolveRegion(event.userId);
  const span = tracer.startSpan("orders.route");

  try {
    await bus.publish("orders.created", {
      ...event,
      region,
      idempotencyKey: event.id,
    });

    await cache.set(\`order:\${event.id}\`, "queued", { ttl: 300 });
    metrics.increment("orders.routed", { region });

    return { ok: true, region };
  } finally {
    span.end();
  }
}`;
