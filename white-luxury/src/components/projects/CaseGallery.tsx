import Image from "next/image";
import type { CaseScreen } from "@/data/projects";
import { cn } from "@/lib/utils";

type CaseGalleryProps = {
  screens: CaseScreen[];
  projectTitle: string;
  className?: string;
  tone?: "light" | "dark";
};

export function CaseGallery({
  screens,
  projectTitle,
  className,
  tone = "light",
}: CaseGalleryProps) {
  const dark = tone === "dark";

  return (
    <div className={cn("grid gap-6 md:grid-cols-3", className)}>
      {screens.map((screen, index) => (
        <figure key={screen.id} className="group flex flex-col">
          <div
            className={cn(
              "relative overflow-hidden border",
              dark ? "border-ivory/15 bg-espresso-soft/80" : "border-stone bg-cream",
            )}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={screen.image}
                alt={`${screen.title} — ${projectTitle}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                quality={92}
                className="object-contain object-center p-3 sm:p-4"
              />
              <span
                className={cn(
                  "absolute left-3 top-3 font-mono text-[10px] tracking-[0.16em]",
                  dark ? "text-ivory/55" : "text-charcoal/50",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
          <figcaption className="mt-4">
            <p className={cn("font-serif text-xl", dark ? "text-ivory" : "text-charcoal")}>
              {screen.title}
            </p>
            <p
              className={cn(
                "mt-2 text-sm leading-relaxed",
                dark ? "text-ivory/45" : "text-warm-grey",
              )}
            >
              {screen.caption}
            </p>
            <p
              className={cn(
                "mt-2 font-mono text-[10px] tracking-wider",
                dark ? "text-ivory/30" : "text-warm-grey-light",
              )}
            >
              {projectTitle}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
