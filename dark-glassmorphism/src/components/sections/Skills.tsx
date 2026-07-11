import { skills } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            index="02"
            label="Skills"
            title="Stack & Tools"
            description="Technologies I use to ship polished, performant products."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group, index) => (
            <FadeIn key={group.category} delay={index * 100}>
              <GlassCard gradient className="group h-full">
                <h3 className="mb-6 font-display text-2xl font-bold text-white">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-display text-sm font-medium uppercase tracking-wide text-zinc-300 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
