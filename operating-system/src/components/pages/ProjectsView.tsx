"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { fadeUp, stagger, easeMac } from "@/lib/motion";
import Link from "next/link";

export function ProjectsView() {
  return (
    <div className="viewport-lock flex flex-col px-6 pb-10 pt-24 sm:px-10 lg:px-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col"
      >
        <motion.div variants={fadeUp} className="mb-8 max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--fg-dim)]">
            Projects
          </p>
          <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.03em] text-white">
            Systems worth opening.
          </h1>
          <p className="mt-3 text-[15px] text-[var(--fg-muted)]">
            Selected platforms — presented like a keynote, one stage at a time.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2"
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.45, ease: easeMac }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 md:p-8"
              style={{
                backgroundImage: `radial-gradient(ellipse 80% 60% at 100% 0%, ${p.accent}22, transparent 55%)`,
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] text-[var(--fg-dim)]">
                    {String(i + 1).padStart(2, "0")} · {p.year}
                  </span>
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: p.accent, boxShadow: `0 0 12px ${p.accent}` }}
                  />
                </div>
                <h2 className="mt-4 text-2xl font-medium tracking-tight text-white md:text-[1.75rem]">
                  {p.title}
                </h2>
                <p className="mt-1 text-[13px] text-[var(--fg-muted)]">{p.subtitle}</p>
                <p className="mt-4 max-w-[40ch] text-[14px] leading-relaxed text-[var(--fg-muted)]">
                  {p.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/[0.08] px-2.5 py-1 font-mono text-[10px] text-[var(--fg-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="text-[13px] text-[var(--fg-muted)] transition-colors hover:text-white"
          >
            Discuss a project →
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
