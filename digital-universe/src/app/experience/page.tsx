"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { experience } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Backend · Orbital Timeline"
      title="Experience in orbit."
      subtitle="Career milestones arranged as rings around a growing systems practice."
    >
      <div className="relative pl-2 md:pl-4">
        <div className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-cyan-400/40 via-teal-400/20 to-transparent md:left-[15px]" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.12 }}
              className="relative grid gap-4 pl-10 md:grid-cols-[180px_1fr] md:pl-12"
            >
              <div className="absolute top-1.5 left-0 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/40 bg-[#02040a]">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(45,212,191,0.8)]" />
              </div>

              <div>
                <p className="font-mono text-[11px] tracking-[0.18em] text-amber-200/70 uppercase">
                  {job.period}
                </p>
                <p className="mt-2 font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                  Orbit · {job.orbit}
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl text-slate-50 md:text-2xl">{job.role}</h2>
                <p className="mt-1 font-body text-slate-400">{job.company}</p>
                <ul className="mt-5 space-y-2">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="font-body text-[15px] leading-relaxed text-slate-300 before:mr-2 before:text-cyan-400/70 before:content-['▸']"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
