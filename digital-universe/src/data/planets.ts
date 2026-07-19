export type PlanetDomain =
  | "cloud"
  | "backend"
  | "frontend"
  | "mobile"
  | "ai"
  | "devops"
  | "architecture"
  | "security";

export interface PlanetConfig {
  id: PlanetDomain;
  label: string;
  description: string;
  skills: string[];
  color: string;
  emissive: string;
  radius: number;
  orbitRadius: number;
  orbitSpeed: number;
  orbitTilt: number;
  phase: number;
  href?: string;
}

export const planets: PlanetConfig[] = [
  {
    id: "architecture",
    label: "Architecture",
    description: "System design, domain boundaries, and long-lived blueprints.",
    skills: ["DDD", "Event Sourcing", "CQRS", "RFCs"],
    color: "#7dd3fc",
    emissive: "#0ea5e9",
    radius: 0.28,
    orbitRadius: 3.2,
    orbitSpeed: 0.12,
    orbitTilt: 0.15,
    phase: 0,
    href: "/about",
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces that feel inevitable — fast, accessible, precise.",
    skills: ["React", "Next.js", "TypeScript", "Motion"],
    color: "#5eead4",
    emissive: "#14b8a6",
    radius: 0.32,
    orbitRadius: 4.1,
    orbitSpeed: 0.09,
    orbitTilt: -0.22,
    phase: 0.8,
    href: "/projects",
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs, data models, and services built for correctness at scale.",
    skills: ["Node.js", "NestJS", "PostgreSQL", "GraphQL"],
    color: "#a3e635",
    emissive: "#65a30d",
    radius: 0.3,
    orbitRadius: 5.0,
    orbitSpeed: 0.07,
    orbitTilt: 0.28,
    phase: 1.6,
    href: "/experience",
  },
  {
    id: "ai",
    label: "AI",
    description: "Applied intelligence — retrieval, agents, and evaluation loops.",
    skills: ["LLM Ops", "RAG", "Python", "Eval"],
    color: "#fbbf24",
    emissive: "#d97706",
    radius: 0.26,
    orbitRadius: 5.8,
    orbitSpeed: 0.06,
    orbitTilt: -0.12,
    phase: 2.4,
    href: "/articles",
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "Elastic infrastructure across regions, accounts, and edges.",
    skills: ["AWS", "Terraform", "IAM", "CDN"],
    color: "#38bdf8",
    emissive: "#0284c7",
    radius: 0.27,
    orbitRadius: 6.6,
    orbitSpeed: 0.05,
    orbitTilt: 0.35,
    phase: 3.2,
    href: "/contact",
  },
  {
    id: "devops",
    label: "DevOps",
    description: "Pipelines, observability, and delivery that never sleeps.",
    skills: ["Docker", "K8s", "CI/CD", "Prometheus"],
    color: "#fb923c",
    emissive: "#ea580c",
    radius: 0.24,
    orbitRadius: 4.55,
    orbitSpeed: 0.08,
    orbitTilt: -0.4,
    phase: 4.0,
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Native-feeling experiences on every pocket-sized screen.",
    skills: ["React Native", "Expo", "Offline Sync"],
    color: "#f472b6",
    emissive: "#db2777",
    radius: 0.22,
    orbitRadius: 3.65,
    orbitSpeed: 0.11,
    orbitTilt: 0.45,
    phase: 4.8,
  },
  {
    id: "security",
    label: "Security",
    description: "Threat models, zero-trust edges, and least-privilege defaults.",
    skills: ["OAuth", "mTLS", "Secrets", "Audits"],
    color: "#94a3b8",
    emissive: "#64748b",
    radius: 0.23,
    orbitRadius: 7.2,
    orbitSpeed: 0.04,
    orbitTilt: -0.18,
    phase: 5.5,
  },
];
