"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeUp, stagger } from "@/lib/motion";

export function ContactView() {
  return (
    <div className="viewport-lock flex items-center justify-center px-6 pb-10 pt-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-xl text-center"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--fg-dim)]"
        >
          Contact
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-5 text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white"
        >
          Let&apos;s build something that lasts.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-[36ch] text-[15px] leading-relaxed text-[var(--fg-muted)]"
        >
          Open to select collaborations, architecture reviews, and product
          platforms that demand quiet excellence.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton href={`mailto:${siteConfig.email}`} variant="primary">
            {siteConfig.email}
          </MagneticButton>
          <MagneticButton href="https://linkedin.com" variant="secondary">
            LinkedIn
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-14 flex max-w-sm items-center justify-between gap-4 border-t border-white/[0.08] pt-6 font-mono text-[11px] text-[var(--fg-dim)]"
        >
          <span>{siteConfig.timezone}</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)] availability-pulse" />
            {siteConfig.available ? "Available" : "Busy"}
          </span>
          <span>{siteConfig.location}</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
