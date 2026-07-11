export const siteConfig = {
  name: "Alex Morgan",
  title: "Full-Stack Developer",
  tagline: "Crafting elegant digital experiences with code.",
  email: "alex.morgan@email.com",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
  cvUrl: "#",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "twitter",
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com",
    icon: "dribbble",
  },
];

export const about = {
  headline: "Building products that blend form and function.",
  paragraphs: [
    "I'm a full-stack developer with 5+ years of experience turning complex ideas into polished, performant web applications. I care deeply about clean architecture, thoughtful UX, and shipping code that lasts.",
    "When I'm not coding, you'll find me exploring new design trends, contributing to open source, or mentoring junior developers.",
  ],
  highlights: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Shipped", value: "40+" },
    { label: "Happy Clients", value: "25+" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Redis"],
  },
  {
    category: "Tools & Cloud",
    items: ["AWS", "Docker", "Git", "Figma", "Vercel"],
  },
];

export const projects = [
  {
    title: "Nebula Dashboard",
    description:
      "A real-time analytics platform with glassmorphic UI, live data streaming, and customizable widget layouts.",
    tags: ["Next.js", "WebSockets", "D3.js"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "Aura Commerce",
    description:
      "Headless e-commerce storefront with sub-second page loads, Stripe integration, and AI-powered recommendations.",
    tags: ["React", "Stripe", "Node.js"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "Pulse API",
    description:
      "Developer-first REST & GraphQL API gateway with rate limiting, observability, and auto-generated documentation.",
    tags: ["GraphQL", "Redis", "Docker"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
];

export const experience = [
  {
    role: "Senior Full-Stack Developer",
    company: "TechVision Inc.",
    period: "2022 — Present",
    description:
      "Lead development of customer-facing SaaS platform serving 50K+ users. Reduced page load times by 40% and mentored a team of 4 engineers.",
  },
  {
    role: "Frontend Developer",
    company: "Digital Craft Studio",
    period: "2020 — 2022",
    description:
      "Built responsive web applications for Fortune 500 clients. Introduced component library that cut development time by 30%.",
  },
  {
    role: "Junior Web Developer",
    company: "StartUp Labs",
    period: "2019 — 2020",
    description:
      "Developed MVPs and landing pages for early-stage startups. Collaborated closely with designers to implement pixel-perfect UIs.",
  },
];
