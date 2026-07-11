import { cn } from "@/lib/utils";

type EditorialLabelProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "muted" | "champagne" | "light";
};

export function EditorialLabel({
  children,
  className,
  tone = "default",
}: EditorialLabelProps) {
  return (
    <span
      className={cn(
        "label-caps font-sans",
        tone === "default" && "text-charcoal",
        tone === "muted" && "text-warm-grey",
        tone === "champagne" && "text-champagne",
        tone === "light" && "text-ivory/70",
        className,
      )}
    >
      {children}
    </span>
  );
}

type SectionHeaderProps = {
  number: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
};

export function SectionHeader({
  number,
  title,
  description,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="mb-6 flex items-baseline gap-4">
        <span
          className={cn(
            "font-mono text-sm tracking-widest",
            light ? "text-champagne" : "text-champagne",
          )}
        >
          {number}
        </span>
        <span
          className={cn(
            "h-px flex-1 max-w-16",
            light ? "bg-ivory/20" : "bg-stone",
          )}
        />
      </div>
      <h2
        className={cn(
          "font-serif text-editorial-sm",
          light ? "text-ivory" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-base leading-relaxed md:text-lg",
            light ? "text-ivory/65" : "text-warm-grey",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
