"use client";

import { motion } from "framer-motion";
import { articles } from "@/data/portfolio";
import { fadeUp, stagger, easeMac } from "@/lib/motion";

export function ArticlesView() {
  return (
    <div className="viewport-lock flex items-center px-6 pb-10 pt-24 sm:px-10 lg:px-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-4xl"
      >
        <motion.div variants={fadeUp} className="mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--fg-dim)]">
            Articles
          </p>
          <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.03em] text-white">
            Notes from the platform layer.
          </h1>
        </motion.div>

        <motion.ul variants={fadeUp} className="divide-y divide-white/[0.07]">
          {articles.map((a, i) => (
            <motion.li
              key={a.title}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.4, ease: easeMac }}
              className="group flex cursor-default flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-[var(--fg-dim)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg font-medium tracking-tight text-white transition-colors group-hover:text-[var(--accent)] sm:text-xl">
                    {a.title}
                  </h2>
                </div>
                <p className="mt-2 max-w-[48ch] pl-8 text-[14px] text-[var(--fg-muted)]">
                  {a.excerpt}
                </p>
              </div>
              <div className="flex shrink-0 gap-4 pl-8 font-mono text-[11px] text-[var(--fg-dim)] sm:pl-0">
                <span>{a.date}</span>
                <span>{a.read}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}
