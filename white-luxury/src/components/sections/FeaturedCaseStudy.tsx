"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CaseArchitecture } from "@/components/projects/CaseArchitecture";
import { CaseGallery } from "@/components/projects/CaseGallery";
import { FadeIn } from "@/components/ui/FadeIn";
import { EditorialLabel } from "@/components/ui/SectionHeader";
import { featuredProject } from "@/data/projects";
import { useSafeReducedMotion } from "@/lib/motion";

export function FeaturedCaseStudy() {
  const reduceMotion = useSafeReducedMotion();
  const project = featuredProject;

  return (
    <section
      aria-labelledby="featured-case-heading"
      className="relative overflow-hidden bg-espresso py-24 text-ivory md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] grid-lines" />
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-champagne/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-4">
            <EditorialLabel tone="champagne">Featured Case Study</EditorialLabel>
            <span className="font-mono text-[11px] tracking-widest text-ivory/35">
              {project.number} · {project.year}
            </span>
          </div>
          <h2
            id="featured-case-heading"
            className="mt-6 max-w-3xl font-serif text-editorial text-ivory"
          >
            {project.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/65">
            {project.outcome}
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {project.metrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={0.05 + index * 0.05}>
              <div className="border border-ivory/10 bg-espresso-soft/50 p-6 md:p-8">
                <p className="font-serif text-3xl text-champagne md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 label-caps text-ivory/45">{metric.label}</p>
                {metric.detail ? (
                  <p className="mt-2 text-xs text-ivory/35">{metric.detail}</p>
                ) : null}
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <FadeIn delay={0.1}>
            <div>
              <p className="label-caps text-champagne">Key decision</p>
              <p className="mt-4 font-serif text-2xl leading-snug text-ivory md:text-3xl">
                {project.decisions[0]?.title}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/60">
                {project.decisions[0]?.description}
              </p>

              <div className="mt-10 space-y-4 border-t border-ivory/10 pt-8">
                <p className="label-caps text-ivory/40">Engagement</p>
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-ivory/35">Client</dt>
                    <dd className="mt-1 text-ivory/80">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-ivory/35">Role</dt>
                    <dd className="mt-1 text-ivory/80">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="text-ivory/35">Duration</dt>
                    <dd className="mt-1 text-ivory/80">{project.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-ivory/35">Industry</dt>
                    <dd className="mt-1 text-ivory/80">{project.industry}</dd>
                  </div>
                </dl>
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="group mt-10 inline-flex items-center gap-3 border border-ivory/25 px-5 py-3 text-sm tracking-[0.08em] text-ivory uppercase transition-colors duration-500 hover:border-champagne hover:text-champagne"
              >
                Full case study
                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="border border-ivory/10 bg-espresso-soft/40 p-6 md:p-10">
              <p className="label-caps text-ivory/40">Architecture</p>
              <div className="mt-6">
                <CaseArchitecture
                  nodes={project.architecture.nodes}
                  links={project.architecture.links}
                  caption={project.architecture.caption}
                  light
                />
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <p className="label-caps text-ivory/40">Product screenshots</p>
            <motion.span
              className="hidden font-mono text-[10px] tracking-widest text-ivory/30 sm:inline"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              SURFACE 01—03
            </motion.span>
          </div>
          <div className="mt-6">
            <CaseGallery
              screens={project.screens}
              projectTitle={project.title}
              tone="dark"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
