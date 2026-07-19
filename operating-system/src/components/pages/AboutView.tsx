"use client";

import { motion } from "framer-motion";
import { about, siteConfig } from "@/data/portfolio";
import { fadeUp, stagger } from "@/lib/motion";

export function AboutView() {
  return (
    <div className="viewport-lock flex items-center px-6 pb-10 pt-24 sm:px-10 lg:px-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"
      >
        <div>
          <motion.p
            variants={fadeUp}
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--fg-dim)]"
          >
            About
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-[18ch] text-[clamp(2.1rem,4.5vw,3.4rem)] font-medium leading-[1.1] tracking-[-0.035em] text-white"
          >
            {about.lead}
          </motion.h1>
          {about.paragraphs.map((p) => (
            <motion.p
              key={p.slice(0, 24)}
              variants={fadeUp}
              className="mt-5 max-w-[48ch] text-[15px] leading-relaxed text-[var(--fg-muted)]"
            >
              {p}
            </motion.p>
          ))}
          <motion.p
            variants={fadeUp}
            className="mt-8 font-mono text-[12px] text-[var(--fg-dim)]"
          >
            {siteConfig.name} · {siteConfig.location} · {siteConfig.company}
          </motion.p>
        </div>

        <motion.div variants={fadeUp} className="flex flex-col justify-center gap-6">
          {about.principles.map((pr, i) => (
            <div
              key={pr.title}
              className="border-t border-white/[0.08] pt-5"
            >
              <p className="font-mono text-[10px] text-[var(--fg-dim)]">
                0{i + 1}
              </p>
              <h2 className="mt-2 text-lg font-medium tracking-tight text-white">
                {pr.title}
              </h2>
              <p className="mt-1.5 text-[14px] text-[var(--fg-muted)]">{pr.body}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
