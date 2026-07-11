"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function ProjectArchive() {
  return (
    <section id="work" className="scroll-mt-24 bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeader
            number="03"
            title="Selected Work"
            description="A curated archive of engagements where architecture, product craft, and measurable outcomes mattered most."
          />
        </FadeIn>

        <div className="mt-20 space-y-28 md:space-y-36">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <FadeIn key={project.slug} delay={0.05}>
                <article
                  className={cn(
                    "group grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  )}
                >
                  <div className={cn(reversed && "lg:order-2")}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="relative block overflow-hidden"
                    >
                      <div className="overflow-hidden">
                          <ProjectVisual
                            variant={project.visual}
                            image={project.cover}
                            alt={`${project.title} cover`}
                          />
                      </div>
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <span className="border border-ivory/40 bg-espresso/70 px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-ivory uppercase backdrop-blur-sm">
                          View case study
                        </span>
                      </span>
                    </Link>
                  </div>

                  <div className={cn("relative", reversed && "lg:order-1")}>
                    <div className="mb-6 flex items-end gap-4">
                      <span className="font-serif text-7xl leading-none text-charcoal/10 md:text-8xl">
                        {project.number}
                      </span>
                      <div className="mb-2 h-px flex-1 origin-left scale-x-0 bg-champagne transition-transform duration-700 group-hover:scale-x-100" />
                    </div>

                    <p className="label-caps text-warm-grey">
                      {project.industry} · {project.year}
                    </p>
                    <h3 className="mt-3 font-serif text-4xl text-charcoal transition-transform duration-500 group-hover:translate-x-1 md:text-5xl">
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <p className="mt-2 text-sm text-warm-grey">{project.role}</p>

                    <p className="mt-6 max-w-md text-base leading-relaxed text-warm-grey">
                      {project.challenge}
                    </p>
                    <p className="mt-4 max-w-md border-l border-champagne pl-4 text-sm leading-relaxed text-charcoal-soft">
                      {project.outcome}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] tracking-wide text-warm-grey"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-8 inline-flex text-sm text-charcoal underline decoration-stone underline-offset-4 transition-colors hover:decoration-champagne"
                    >
                      Read case study
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
