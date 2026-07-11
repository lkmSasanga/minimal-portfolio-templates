"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { hero, siteConfig } from "@/data/site";
import { EditorialLabel } from "@/components/ui/SectionHeader";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { useSafeReducedMotion } from "@/lib/motion";

export function HeroSection() {
  const reduceMotion = useSafeReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-24 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 texture-radial" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-28 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <EditorialLabel tone="muted">{hero.label}</EditorialLabel>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="mt-8 max-w-xl font-serif text-editorial text-charcoal"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            className="mt-7 max-w-md text-base leading-relaxed text-warm-grey md:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.supporting}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-6"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-3 bg-espresso px-6 py-3.5 text-sm tracking-[0.08em] text-ivory uppercase transition-colors duration-500 hover:bg-charcoal"
            >
              {hero.primaryCta.label}
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="group relative text-sm text-charcoal"
            >
              {hero.secondaryCta.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-stone transition-colors duration-500 group-hover:bg-champagne" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative lg:pt-8"
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectVisual variant="hero" interactive className="mx-auto max-w-md lg:max-w-none" />
          <div className="pointer-events-none absolute -right-2 top-4 hidden h-full w-px bg-gradient-to-b from-champagne/60 via-stone to-transparent lg:block" />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-stone/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <div className="flex items-center gap-3 text-xs text-warm-grey">
            <span className="scroll-indicator-dot inline-flex h-5 w-3 items-start justify-center rounded-full border border-stone pt-1">
              <span className="h-1 w-1 rounded-full bg-champagne" />
            </span>
            <span className="label-caps">Scroll</span>
            <ArrowDown size={12} strokeWidth={1.5} className="text-warm-grey-light" />
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-warm-grey">
            <span>
              {siteConfig.location} · {siteConfig.timezone}
            </span>
            <span className="hidden h-3 w-px bg-stone sm:block" />
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
              {siteConfig.availability}
            </span>
            <span className="hidden h-3 w-px bg-stone sm:block" />
            <span className="font-mono tracking-wider text-warm-grey-light">
              {hero.archiveIndex}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
