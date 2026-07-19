"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { articles } from "@/data/portfolio";

export default function ArticlesPage() {
  return (
    <PageShell
      eyebrow="AI · Knowledge Archive"
      title="Field notes from the system."
      subtitle="Essays on architecture, reliability, and the craft of building durable software."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article, i) => (
          <motion.a
            key={article.title}
            href={article.href}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 + i * 0.08 }}
            className="group block rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-cyan-400/25 hover:bg-cyan-400/[0.04]"
          >
            <div className="flex items-center justify-between gap-3">
              <time className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                {article.date}
              </time>
              <div className="flex gap-1.5">
                {article.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[9px] text-slate-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="mt-4 font-display text-xl tracking-tight text-slate-50 transition group-hover:text-cyan-100">
              {article.title}
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate-400">{article.excerpt}</p>
            <p className="mt-5 font-mono text-[10px] tracking-[0.2em] text-cyan-300/60 uppercase transition group-hover:text-cyan-200">
              Read archive →
            </p>
          </motion.a>
        ))}
      </div>
    </PageShell>
  );
}
