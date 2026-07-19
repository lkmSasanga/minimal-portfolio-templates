"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { about, siteConfig } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Architecture · Biography"
      title={about.headline}
      subtitle={`Based in ${siteConfig.location}. ${siteConfig.availability}.`}
    >
      <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="font-body text-lg leading-relaxed text-slate-300"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="space-y-6">
          {about.principles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.1 }}
              className="border-l border-cyan-400/30 pl-5"
            >
              <h3 className="font-display text-base text-slate-100">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-400">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
