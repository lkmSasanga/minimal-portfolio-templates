import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  gradient = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl",
        gradient &&
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:p-px before:content-[''] before:bg-gradient-to-br before:from-blue-500/30 before:via-purple-500/20 before:to-transparent",
        hover &&
          "transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_8px_32px_rgba(59,130,246,0.12)]",
        className
      )}
    >
      {children}
    </div>
  );
}
