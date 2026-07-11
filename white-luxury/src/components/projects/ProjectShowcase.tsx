import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { CaseArchitecture } from "@/components/projects/CaseArchitecture";
import { CaseGallery } from "@/components/projects/CaseGallery";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { EditorialLabel } from "@/components/ui/SectionHeader";
import {
  getAdjacentProjects,
  getRelatedProjects,
  type Project,
} from "@/data/projects";

type ProjectShowcaseProps = {
  project: Project;
};

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const related = getRelatedProjects(project.slug, 2);
  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <article className="bg-ivory pt-28 pb-24 md:pt-32 md:pb-32">
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-warm-grey transition-colors hover:text-charcoal"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Selected work
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-6xl text-charcoal/10 md:text-8xl">
                  {project.number}
                </span>
                <EditorialLabel tone="muted">Case Study</EditorialLabel>
              </div>
              <h1 className="mt-6 font-serif text-editorial text-charcoal">
                {project.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-warm-grey">
                {project.challenge}
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border border-stone bg-cream p-6 md:p-8">
              <MetaItem label="Client" value={project.client} />
              <MetaItem label="Industry" value={project.industry} />
              <MetaItem label="Role" value={project.role} />
              <MetaItem label="Year" value={`${project.year} · ${project.duration}`} />
            </dl>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-14">
          <ProjectVisual
            variant={project.visual}
            aspect="wide"
            image={project.cover}
            alt={`${project.title} cover`}
          />
        </FadeIn>
      </div>

      {/* Overview + outcome strip */}
      <section className="mx-auto mt-20 max-w-7xl px-5 md:mt-28 md:px-8">
        <FadeIn>
          <div className="grid gap-12 border-t border-stone pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <EditorialLabel tone="muted">Overview</EditorialLabel>
              <p className="mt-5 text-base leading-relaxed text-warm-grey md:text-lg">
                {project.overview}
              </p>
            </div>
            <div>
              <EditorialLabel tone="muted">Outcome</EditorialLabel>
              <p className="mt-5 font-serif text-2xl leading-snug text-charcoal md:text-3xl">
                {project.outcome}
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-stone pt-8">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-serif text-2xl text-champagne md:text-3xl">
                      {metric.value}
                    </p>
                    <p className="mt-2 label-caps text-warm-grey">{metric.label}</p>
                    {metric.detail ? (
                      <p className="mt-1 text-xs text-warm-grey-light">{metric.detail}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Problem */}
      <section className="mx-auto mt-24 max-w-7xl px-5 md:mt-32 md:px-8">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
            <div>
              <EditorialLabel tone="muted">01 — Problem</EditorialLabel>
              <h2 className="mt-4 font-serif text-editorial-sm text-charcoal">
                The business problem
              </h2>
            </div>
            <div className="space-y-6 lg:pt-10">
              <p className="max-w-2xl text-base leading-relaxed text-charcoal-soft md:text-lg">
                {project.problem}
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-warm-grey">
                {project.problemDetail}
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.06} className="mt-14">
          <div className="grid gap-6 border border-stone bg-cream p-6 md:grid-cols-2 md:p-10 lg:grid-cols-4">
            {project.constraints.map((item, index) => (
              <div key={item} className="border-t border-stone pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-5 first:md:border-l-0 first:md:pl-0">
                <p className="font-mono text-[11px] tracking-widest text-champagne">
                  C{String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 label-caps text-warm-grey-light">Constraints</p>
        </FadeIn>
      </section>

      {/* Responsibilities */}
      <section className="mx-auto mt-24 max-w-7xl px-5 md:mt-32 md:px-8">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
            <div>
              <EditorialLabel tone="muted">02 — Role</EditorialLabel>
              <h2 className="mt-4 font-serif text-editorial-sm text-charcoal">
                Responsibilities
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:pt-10">
              {project.responsibilities.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-stone pb-4"
                >
                  <span className="font-mono text-[11px] tracking-widest text-champagne">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-charcoal-soft md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* Approach / phases */}
      <section className="mt-24 bg-cream py-24 md:mt-32 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
              <div>
                <EditorialLabel tone="muted">03 — Approach</EditorialLabel>
                <h2 className="mt-4 font-serif text-editorial-sm text-charcoal">
                  How we worked
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-warm-grey md:text-base">
                  {project.approach}
                </p>
              </div>
              <ol className="space-y-0 lg:pt-4">
                {project.phases.map((phase, index) => (
                  <li
                    key={phase.title}
                    className="grid gap-4 border-t border-stone py-8 md:grid-cols-[5rem_1fr] md:gap-10"
                  >
                    <span className="font-serif text-3xl text-charcoal/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl text-charcoal">
                        {phase.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-warm-grey md:text-base">
                        {phase.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Architecture */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <FadeIn>
          <EditorialLabel tone="muted">04 — Architecture</EditorialLabel>
          <h2 className="mt-4 max-w-xl font-serif text-editorial-sm text-charcoal">
            System shape
          </h2>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-12 border border-stone bg-cream p-6 md:p-10">
          <CaseArchitecture
            nodes={project.architecture.nodes}
            links={project.architecture.links}
            caption={project.architecture.caption}
          />
        </FadeIn>
      </section>

      {/* Product surfaces / gallery */}
      <section className="border-y border-stone bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <EditorialLabel tone="muted">05 — Product surfaces</EditorialLabel>
                <h2 className="mt-4 font-serif text-editorial-sm text-charcoal">
                  Interface fragments
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-warm-grey">
                Editorial reconstructions of key product surfaces — exception flows,
                operational views, and system states that carried the work.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <CaseGallery screens={project.screens} projectTitle={project.title} />
          </FadeIn>
        </div>
      </section>

      {/* Decisions */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <FadeIn>
          <EditorialLabel tone="muted">06 — Decisions</EditorialLabel>
          <h2 className="mt-4 max-w-xl font-serif text-editorial-sm text-charcoal">
            Key technical decisions
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {project.decisions.map((decision, index) => (
            <FadeIn key={decision.title} delay={index * 0.05}>
              <article className="h-full border border-stone bg-ivory p-7 transition-colors duration-500 hover:border-champagne/50 md:p-9">
                <p className="font-mono text-[11px] tracking-widest text-champagne">
                  D{String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-charcoal md:text-3xl">
                  {decision.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-warm-grey md:text-base">
                  {decision.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Stack + learnings */}
      <section className="bg-espresso py-24 text-ivory md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <EditorialLabel tone="champagne">Technology stack</EditorialLabel>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-ivory/20 px-4 py-2 font-mono text-[11px] tracking-wide text-ivory/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <EditorialLabel tone="champagne">What this reinforced</EditorialLabel>
            <ul className="mt-8 space-y-5">
              {project.learnings.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-t border-ivory/10 pt-5 text-sm leading-relaxed text-ivory/65 md:text-base"
                >
                  <span className="mt-2 h-px w-4 shrink-0 bg-champagne" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Adjacent + related */}
      <section className="mx-auto max-w-7xl px-5 pt-24 md:px-8 md:pt-32">
        {(previous || next) && (
          <FadeIn>
            <div className="grid gap-4 border-b border-stone pb-12 sm:grid-cols-2">
              {previous ? (
                <Link
                  href={`/projects/${previous.slug}`}
                  className="group flex flex-col gap-2 border border-stone p-6 transition-colors hover:border-champagne/50"
                >
                  <span className="inline-flex items-center gap-2 text-xs text-warm-grey">
                    <ArrowLeft size={12} strokeWidth={1.5} />
                    Previous
                  </span>
                  <span className="font-serif text-2xl text-charcoal transition-transform duration-500 group-hover:translate-x-1">
                    {previous.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/projects/${next.slug}`}
                  className="group flex flex-col items-end gap-2 border border-stone p-6 text-right transition-colors hover:border-champagne/50"
                >
                  <span className="inline-flex items-center gap-2 text-xs text-warm-grey">
                    Next
                    <ArrowRight size={12} strokeWidth={1.5} />
                  </span>
                  <span className="font-serif text-2xl text-charcoal transition-transform duration-500 group-hover:-translate-x-1">
                    {next.title}
                  </span>
                </Link>
              ) : null}
            </div>
          </FadeIn>
        )}

        <FadeIn className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <EditorialLabel tone="muted">Related projects</EditorialLabel>
              <h2 className="mt-3 font-serif text-3xl text-charcoal">
                Continue the archive
              </h2>
            </div>
            <Link
              href="/#work"
              className="hidden text-sm text-warm-grey transition-colors hover:text-charcoal sm:inline"
            >
              All selected work
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group border border-stone bg-cream p-6 transition-colors hover:border-champagne/50 md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-widest text-champagne">
                    {item.number}
                  </span>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-warm-grey transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-charcoal"
                  />
                </div>
                <div className="mt-6 overflow-hidden">
                  <ProjectVisual
                    variant={item.visual}
                    aspect="wide"
                    image={item.cover}
                    alt={`${item.title} cover`}
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-warm-grey">
                  {item.industry} · {item.year}
                </p>
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>
    </article>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="label-caps text-warm-grey">{label}</dt>
      <dd className="mt-2 text-sm text-charcoal">{value}</dd>
    </div>
  );
}
