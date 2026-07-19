"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Frontend · Project Gallery"
      title="Selected missions."
      subtitle="Systems shipped across cloud platforms, real-time collaboration, and delivery infrastructure."
    >
      <div className="space-y-4">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.href}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            className="group block border-b border-white/8 py-8 transition hover:border-cyan-400/30"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] text-cyan-300/60 uppercase">
                  {project.subtitle}
                </p>
                <h2 className="mt-2 font-display text-2xl tracking-tight text-slate-50 transition group-hover:text-cyan-100 md:text-3xl">
                  {project.title}
                </h2>
              </div>
              <span className="font-mono text-xs text-slate-500">{project.year}</span>
            </div>
            <p className="mt-4 max-w-3xl font-body text-[15px] leading-relaxed text-slate-400">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] tracking-wider text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </PageShell>
  );
}
