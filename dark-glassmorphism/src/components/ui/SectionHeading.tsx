import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index?: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "mb-6 flex items-end gap-4",
          align === "center" && "justify-center"
        )}
      >
        {index && (
          <span className="font-display text-6xl font-extrabold leading-none text-white/[0.06] sm:text-7xl">
            {index}
          </span>
        )}
        <span className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
          {label}
        </span>
      </div>
      <h2 className="font-display text-display-md max-w-4xl font-bold text-white">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
