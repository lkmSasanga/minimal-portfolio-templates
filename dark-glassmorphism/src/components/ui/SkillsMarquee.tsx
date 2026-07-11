import { skills } from "@/data/portfolio";

const allSkills = skills.flatMap((group) => group.items);

export function SkillsMarquee() {
  const items = [...allSkills, ...allSkills];

  return (
    <div className="relative overflow-hidden border-y border-white/10 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#030712] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#030712] to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-8">
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex shrink-0 items-center gap-8 font-display text-2xl font-semibold uppercase tracking-wider text-white/20 sm:text-3xl md:text-4xl"
          >
            {skill}
            <span className="text-blue-500/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
