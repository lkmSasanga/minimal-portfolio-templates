"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { useSound } from "@/hooks/useSound";

export default function ContactPage() {
  const { playClick } = useSound();

  return (
    <PageShell
      eyebrow="Cloud · Communication Station"
      title="Open a channel."
      subtitle="For collaborations, architecture reviews, or roles that demand systems thinking."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-slate-500 uppercase">
              Direct line
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              onClick={() => playClick()}
              className="mt-3 inline-block font-display text-2xl text-cyan-100 transition hover:text-white md:text-3xl"
            >
              {siteConfig.email}
            </a>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-slate-500 uppercase">
              Location
            </p>
            <p className="mt-3 font-body text-lg text-slate-300">{siteConfig.location}</p>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-slate-500 uppercase">
              Status
            </p>
            <p className="mt-3 flex items-center gap-2 font-body text-lg text-slate-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-400" />
              </span>
              {siteConfig.availability}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => playClick()}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 font-display text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-white/10 bg-[#070d18]/70 p-6 backdrop-blur-sm md:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            playClick();
          }}
        >
          <label className="block">
            <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
              Name
            </span>
            <input
              required
              name="name"
              className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-slate-100 outline-none transition focus:border-cyan-400/40"
              placeholder="Your name"
            />
          </label>
          <label className="mt-5 block">
            <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
              Email
            </span>
            <input
              required
              type="email"
              name="email"
              className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-slate-100 outline-none transition focus:border-cyan-400/40"
              placeholder="you@company.com"
            />
          </label>
          <label className="mt-5 block">
            <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
              Transmission
            </span>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-slate-100 outline-none transition focus:border-cyan-400/40"
              placeholder="What should we build?"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-full border border-cyan-300/25 bg-cyan-400/10 px-6 py-3 font-display text-sm tracking-wide text-cyan-50 transition hover:bg-cyan-400/20"
          >
            Send transmission
          </button>
        </motion.form>
      </div>
    </PageShell>
  );
}
