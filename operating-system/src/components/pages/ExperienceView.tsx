"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/data/portfolio";
import { fadeUp, stagger, easeMac } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ExperienceView() {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <div className="viewport-lock flex items-center px-6 pb-10 pt-24 sm:px-10 lg:px-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.div variants={fadeUp} className="mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--fg-dim)]">
            Experience
          </p>
          <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.03em] text-white">
            A timeline of shipped systems.
          </h1>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.ol variants={fadeUp} className="relative space-y-1">
            <div className="absolute bottom-3 left-[11px] top-3 w-px bg-white/[0.08]" />
            {experience.map((item, i) => (
              <li key={item.company}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative flex w-full items-start gap-4 rounded-2xl px-2 py-3 text-left transition-colors duration-400",
                    active === i ? "bg-white/[0.04]" : "hover:bg-white/[0.02]",
                  )}
                >
                  <span
                    className={cn(
                      "relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 transition-colors duration-400",
                      active === i
                        ? "border-[var(--accent)] bg-[var(--accent)]"
                        : "border-white/30 bg-[var(--bg-void)]",
                    )}
                  />
                  <div>
                    <p className="text-[14px] font-medium text-white">
                      {item.company}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] text-[var(--fg-dim)]">
                      {item.period}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </motion.ol>

          <motion.div variants={fadeUp} className="glass relative min-h-[280px] rounded-3xl p-7 md:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: easeMac }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
                  {job.role}
                </p>
                <h2 className="mt-3 text-2xl font-medium tracking-tight text-white">
                  {job.company}
                </h2>
                <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-[var(--fg-muted)]">
                  {job.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/[0.08] px-3 py-1 text-[12px] text-[var(--fg-muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
