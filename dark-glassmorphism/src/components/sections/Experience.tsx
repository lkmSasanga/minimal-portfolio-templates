import { experience } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            index="04"
            label="Experience"
            title="The Journey"
            description="Roles where I've grown as an engineer and shipped products that matter."
          />
        </FadeIn>

        <div className="relative space-y-8">
          <div className="absolute left-6 top-4 hidden h-[calc(100%-32px)] w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent md:block" />

          {experience.map((item, index) => (
            <FadeIn key={item.company} delay={index * 100}>
              <div className="relative md:pl-16">
                <div className="absolute left-4 top-8 hidden h-4 w-4 rounded-full border-2 border-blue-400 bg-[#030712] shadow-[0_0_16px_rgba(59,130,246,0.6)] md:block" />

                <GlassCard gradient className="group p-8 sm:p-10">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-blue-400/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white transition-colors group-hover:text-blue-300 sm:text-3xl md:text-4xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 font-serif text-xl italic text-purple-300">
                        {item.company}
                      </p>
                    </div>
                    <span className="shrink-0 font-display text-sm font-medium uppercase tracking-widest text-zinc-600">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                    {item.description}
                  </p>
                </GlassCard>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
