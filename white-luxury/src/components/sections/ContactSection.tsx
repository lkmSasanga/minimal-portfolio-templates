"use client";

import { ArrowUpRight } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { EditorialLabel } from "@/components/ui/SectionHeader";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <EditorialLabel tone="muted">Contact</EditorialLabel>
          <h2 className="mt-8 max-w-4xl font-serif text-editorial-lg text-charcoal">
            Have a complex product or system in mind? Let’s make it clear.
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <FadeIn delay={0.08}>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group relative inline-block font-serif text-3xl text-charcoal md:text-5xl"
            >
              {siteConfig.email}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-100 bg-stone transition-all duration-700 group-hover:scale-x-100 group-hover:bg-champagne" />
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-champagne transition-all duration-700 group-hover:w-full" />
            </a>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-warm-grey transition-colors hover:text-charcoal"
                >
                  {link.label}
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </a>
              ))}
              <a
                href={siteConfig.schedulingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-warm-grey transition-colors hover:text-charcoal"
              >
                Schedule a call
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-warm-grey">
              <span>
                {siteConfig.location} · {siteConfig.timezone}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                {siteConfig.availability}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="lg:justify-self-end">
            <a
              href={`mailto:${siteConfig.email}?subject=Project%20inquiry`}
              className="group inline-flex items-center justify-center gap-3 bg-espresso px-8 py-5 text-sm tracking-[0.14em] text-ivory uppercase transition-all duration-500 hover:bg-[#2a241e] hover:shadow-[inset_0_0_0_1px_rgba(184,168,138,0.55)]"
            >
              Start a conversation
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
