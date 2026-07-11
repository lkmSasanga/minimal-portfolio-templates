export type ExperienceChapter = {
  id: string;
  start: string;
  end: string;
  company: string;
  position: string;
  responsibility: string;
  achievement: string;
  domains: string[];
};

export const experienceChapters: ExperienceChapter[] = [
  {
    id: "independent",
    start: "2023",
    end: "Present",
    company: "Independent Practice",
    position: "Software Engineer & Technical Consultant",
    responsibility:
      "Partner with product teams on architecture, delivery, and systems that need to scale with care.",
    achievement:
      "Led engagements across fintech, logistics, and platform engineering with measurable reliability and delivery outcomes.",
    domains: ["Cloud", "Product Architecture", "Consulting"],
  },
  {
    id: "northline",
    start: "2021",
    end: "2023",
    company: "Northline Systems",
    position: "Senior Software Engineer",
    responsibility:
      "Owned critical platform services and guided frontend and backend teams through complex migrations.",
    achievement:
      "Designed the secrets governance foundation later productized as Northline Vault.",
    domains: ["Platform", "Security", "Kubernetes"],
  },
  {
    id: "cascade",
    start: "2019",
    end: "2021",
    company: "Cascade Logistics",
    position: "Product Engineer",
    responsibility:
      "Built partner-facing integrations and internal tools for shipment visibility and exception handling.",
    achievement:
      "Reduced partner onboarding time by introducing contract-first event integrations.",
    domains: ["APIs", "Events", "Logistics"],
  },
  {
    id: "atelier",
    start: "2017",
    end: "2019",
    company: "Atelier Digital",
    position: "Software Engineer",
    responsibility:
      "Delivered client products across web and mobile with a focus on clarity, accessibility, and craft.",
    achievement:
      "Established shared UI foundations that became the seed of Atelier Atlas.",
    domains: ["Frontend", "Mobile", "Design Systems"],
  },
];
