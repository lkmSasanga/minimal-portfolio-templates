"use client";

import { motion } from "framer-motion";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeUp, stagger, easeMac } from "@/lib/motion";

type IconProps = { className?: string };

function GithubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.924L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  mail: MailIcon,
};

export function HeroCopy() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative z-10 flex h-full flex-col justify-center px-6 py-24 sm:px-10 lg:px-14 xl:px-16"
    >
      <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="availability-pulse absolute inset-0 rounded-full bg-[var(--success)]" />
          <span className="relative h-2 w-2 rounded-full bg-[var(--success)]" />
        </span>
        <span className="text-[12px] tracking-tight text-[var(--fg-muted)]">
          {siteConfig.availability}
        </span>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--fg-dim)]"
      >
        {siteConfig.name} · {siteConfig.role}
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="max-w-[16ch] text-[clamp(2rem,4.2vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.035em] text-white"
      >
        {siteConfig.headline}
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-[var(--fg-muted)]"
      >
        {siteConfig.intro}
      </motion.p>

      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
        <MagneticButton href="/projects" variant="primary">
          View Projects
        </MagneticButton>
        <MagneticButton href="/about" variant="secondary">
          About Me
        </MagneticButton>
      </motion.div>

      <motion.dl
        variants={fadeUp}
        className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4 sm:gap-x-6"
      >
        {[
          { label: "Timezone", value: siteConfig.timezone },
          { label: "Experience", value: siteConfig.yearsExperience },
          { label: "Role", value: siteConfig.role.split(" ").slice(0, 2).join(" ") },
          { label: "Based", value: siteConfig.location },
        ].map((item) => (
          <div key={item.label}>
            <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--fg-dim)]">
              {item.label}
            </dt>
            <dd className="mt-1 text-[13px] tracking-tight text-white/90">
              {item.value}
            </dd>
          </div>
        ))}
      </motion.dl>

      <motion.div variants={fadeUp} className="mt-10 flex items-center gap-1">
        {socialLinks.map((s) => {
          const Icon = icons[s.icon];
          return (
            <motion.a
              key={s.name}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={s.name}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.35, ease: easeMac }}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--fg-muted)] transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
