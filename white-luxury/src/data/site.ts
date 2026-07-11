export const siteConfig = {
  name: "Julian Hale",
  monogram: "JH",
  role: "Independent Software Engineer · Cloud Architect",
  title: "Julian Hale — Software Engineer & Cloud Architect",
  description:
    "I design reliable digital systems for products built to last. Senior software engineer, cloud architect, and technical consultant specializing in scalable product engineering.",
  email: "hello@julianhale.dev",
  location: "Lisbon, Portugal",
  timezone: "WET (UTC+0)",
  availability: "Available for selected projects",
  availabilityShort: "Selected projects",
  resumeUrl: "/resume.pdf",
  schedulingUrl: "https://cal.com",
  url: "https://julianhale.dev",
  ogImage: "/og.svg",
  closingPhrase: "Quiet precision. Lasting systems.",
};

export const navLinks = [
  { label: "Profile", href: "#profile", number: "01" },
  { label: "Expertise", href: "#expertise", number: "02" },
  { label: "Selected Work", href: "#work", number: "03" },
  { label: "Experience", href: "#experience", number: "04" },
  { label: "Contact", href: "#contact", number: "05" },
] as const;

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/julianhale",
    label: "LinkedIn",
  },
  {
    name: "GitHub",
    href: "https://github.com/julianhale",
    label: "GitHub",
  },
] as const;

export const signatureFacts = [
  { value: "08+", label: "Years Experience" },
  { value: "40+", label: "Projects Delivered" },
  { value: "Cloud Systems", label: "Specialty" },
  { value: "Fintech", label: "Industry" },
  { value: "Mobile Products", label: "Domain" },
  { value: "API Architecture", label: "Focus" },
] as const;

export const profile = {
  number: "01",
  heading: "Engineering with clarity, restraint, and purpose.",
  philosophy:
    "I believe the best systems feel inevitable — quiet in their complexity, deliberate in their trade-offs, and built to endure change.",
  paragraphs: [
    "I work with product teams and founders who need more than implementation — they need systems that scale with the business, remain maintainable under pressure, and communicate intent clearly to the engineers who inherit them.",
    "My practice sits at the intersection of product engineering, cloud architecture, and technical consulting. I translate ambiguous requirements into durable foundations, balancing delivery speed with long-term quality.",
  ],
  signature: "— Julian Hale",
};

export const hero = {
  label: "Independent Software Engineer · Cloud Architect",
  headline: "I design reliable digital systems for products built to last.",
  supporting:
    "From early-stage platforms to regulated financial products, I help teams ship scalable architecture with the craftsmanship of a long-term partner.",
  primaryCta: { label: "Explore selected work", href: "#work" },
  secondaryCta: { label: "Discuss a project", href: "#contact" },
  archiveIndex: "Selected archive 01—05",
};
