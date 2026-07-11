"use client";

import { ArrowUpRight } from "lucide-react";
import { expertiseAreas } from "@/data/expertise";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExpertiseLedger() {
  return (
    <section id="expertise" className="scroll-mt-24 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeader
            number="02"
            title="Capabilities Ledger"
            description="A structured view of how I contribute — from product interfaces to cloud foundations and technical leadership."
          />
        </FadeIn>

        <div className="mt-16 border-t border-stone">
          {expertiseAreas.map((area, index) => (
            <FadeIn key={area.number} delay={index * 0.05}>
              <article className="group relative grid gap-6 border-b border-stone py-10 transition-colors duration-500 hover:bg-ivory/60 md:grid-cols-[0.15fr_1fr_0.9fr_auto] md:items-start md:gap-8 md:py-12">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute right-8 top-1/2 hidden h-24 w-24 -translate-y-1/2 border border-champagne/30 md:block" />
                  <div className="absolute right-14 top-1/2 hidden h-16 w-16 -translate-y-1/2 border border-stone md:block" />
                </div>

                <span className="font-mono text-sm tracking-widest text-champagne">
                  {area.number}
                </span>

                <div>
                  <h3 className="font-serif text-3xl text-charcoal md:text-4xl">
                    {area.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-warm-grey md:text-base">
                    {area.description}
                  </p>
                  <p className="mt-4 font-mono text-[11px] tracking-wider text-warm-grey-light opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {area.reference}
                  </p>
                </div>

                <div>
                  <ul className="space-y-2">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-charcoal-soft"
                      >
                        <span className="h-px w-3 bg-champagne" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                    {area.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] tracking-wide text-warm-grey"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-start md:justify-end md:pt-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-stone text-warm-grey transition-all duration-500 group-hover:border-champagne group-hover:text-charcoal">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
