export type ExpertiseArea = {
  number: string;
  title: string;
  description: string;
  items: string[];
  technologies: string[];
  reference: string;
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    number: "01",
    title: "Product Engineering",
    description:
      "End-to-end product architecture with attention to interface quality, performance, and long-term maintainability.",
    items: [
      "Frontend architecture",
      "Mobile application development",
      "Design system implementation",
      "Performance optimization",
    ],
    technologies: ["React", "Next.js", "TypeScript", "React Native"],
    reference: "Ref · Atelier Atlas",
  },
  {
    number: "02",
    title: "Backend Systems",
    description:
      "APIs and services designed around clear boundaries, durable data models, and predictable failure modes.",
    items: [
      "API architecture",
      "Event-driven systems",
      "Database design",
      "Authentication and authorization",
    ],
    technologies: ["Node.js", "Go", "PostgreSQL", "Kafka"],
    reference: "Ref · Cascade Relay",
  },
  {
    number: "03",
    title: "Cloud Infrastructure",
    description:
      "Pragmatic cloud architecture focused on reliability, observability, and operational clarity.",
    items: [
      "AWS architecture",
      "Serverless systems",
      "Containers and deployment pipelines",
      "Monitoring and reliability",
    ],
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
    reference: "Ref · Meridian Ledger",
  },
  {
    number: "04",
    title: "Technical Leadership",
    description:
      "Architecture guidance that balances delivery pressure with systems that teams can confidently own.",
    items: [
      "System design",
      "Code reviews",
      "Team guidance",
      "Architecture decisions",
      "Delivery planning",
    ],
    technologies: ["ADRs", "RFCs", "Mentorship", "Delivery"],
    reference: "Ref · Platform engagements",
  },
];
