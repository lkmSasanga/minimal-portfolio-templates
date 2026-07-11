import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.outcome,
    openGraph: {
      title: `${project.title} · ${siteConfig.name}`,
      description: project.outcome,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectShowcase project={project} />;
}
