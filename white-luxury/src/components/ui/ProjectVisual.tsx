"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useSafeReducedMotion } from "@/lib/motion";

type ProjectVisualProps = {
  variant: "ledger" | "vault" | "relay" | "atlas" | "pulse" | "hero";
  className?: string;
  interactive?: boolean;
  aspect?: "portrait" | "wide";
  image?: string;
  alt?: string;
};

export function ProjectVisual({
  variant,
  className,
  interactive = false,
  aspect = "portrait",
  image,
  alt = "Project visual",
}: ProjectVisualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useSafeReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 20 });
  const springY = useSpring(y, { stiffness: 60, damping: 20 });

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!interactive || reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(offsetX * 12);
    y.set(offsetY * 10);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "relative w-full overflow-hidden border border-stone/80 bg-cream",
        image
          ? aspect === "wide"
            ? "aspect-[16/10]"
            : "aspect-[3/2]"
          : aspect === "wide"
            ? "aspect-[16/9]"
            : "aspect-[4/5]",
        className,
      )}
    >
      <motion.div
        style={interactive && !reduceMotion ? { x: springX, y: springY } : undefined}
        className="absolute inset-0"
      >
        {image ? (
          <>
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
              quality={92}
              className="object-cover object-center"
              priority={variant === "hero"}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/15 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.16em] text-ivory/75 uppercase drop-shadow">
              {variant === "hero" ? "SYS // 01.4" : variant.toUpperCase()}
            </span>
          </>
        ) : (
          <>
            <div className="absolute inset-0 grid-lines opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(184,168,138,0.18),transparent_45%)]" />
            {variant === "hero" && <HeroBlueprint />}
            {variant === "ledger" && <LedgerVisual />}
            {variant === "vault" && <VaultVisual />}
            {variant === "relay" && <RelayVisual />}
            {variant === "atlas" && <AtlasVisual />}
            {variant === "pulse" && <PulseVisual />}
          </>
        )}
      </motion.div>
    </div>
  );
}

function Meta({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "absolute font-mono text-[10px] tracking-[0.16em] text-warm-grey uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

function Panel({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "absolute border border-stone/70 bg-ivory/70 backdrop-blur-[2px] shadow-[0_20px_40px_-28px_rgba(28,25,23,0.35)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function HeroBlueprint() {
  return (
    <>
      <Meta className="left-5 top-5">SYS // 01.4</Meta>
      <Meta className="right-5 top-5">41.15°N · 8.62°W</Meta>
      <svg className="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)]" viewBox="0 0 400 500" fill="none">
        <rect x="40" y="60" width="200" height="140" stroke="#b8a88a" strokeWidth="1" opacity="0.7" />
        <rect x="160" y="140" width="180" height="160" stroke="#1c1917" strokeWidth="1" opacity="0.25" />
        <rect x="80" y="260" width="150" height="120" stroke="#b8a88a" strokeWidth="1" opacity="0.5" />
        <line x1="40" y1="60" x2="40" y2="40" stroke="#b8a88a" strokeWidth="1" />
        <line x1="40" y1="40" x2="90" y2="40" stroke="#b8a88a" strokeWidth="1" />
        <circle cx="280" cy="180" r="4" fill="#b8a88a" />
        <circle cx="200" cy="320" r="3" fill="#1c1917" opacity="0.4" />
        <path d="M140 130 L160 140 L160 220" stroke="#b8a88a" strokeWidth="1" opacity="0.6" />
        <path d="M240 300 L280 300 L280 220" stroke="#1c1917" strokeWidth="1" opacity="0.25" />
        <text x="50" y="90" fill="#78716c" fontSize="10" fontFamily="monospace">LAYER.A</text>
        <text x="175" y="165" fill="#78716c" fontSize="10" fontFamily="monospace">SERVICE.B</text>
        <text x="95" y="290" fill="#78716c" fontSize="10" fontFamily="monospace">DATA.C</text>
      </svg>
      <Panel className="bottom-8 left-6 right-6 h-16 px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="label-caps text-warm-grey">Architecture</p>
            <p className="mt-1 font-serif text-lg text-charcoal">Quiet Precision</p>
          </div>
          <span className="font-mono text-[10px] tracking-widest text-champagne">v2.0</span>
        </div>
      </Panel>
      <div className="absolute right-8 top-1/3 h-24 w-px bg-gradient-to-b from-transparent via-champagne to-transparent" />
    </>
  );
}

function LedgerVisual() {
  return (
    <>
      <Meta className="left-4 top-4">LEDGER · FIN</Meta>
      <Meta className="right-4 top-4">2025</Meta>
      <Panel className="left-6 top-16 right-10 h-28 p-4">
        <div className="mb-3 flex justify-between">
          <span className="label-caps text-warm-grey">Settlement</span>
          <span className="font-mono text-[10px] text-champagne">OK</span>
        </div>
        <div className="space-y-2">
          <div className="h-px w-full bg-stone" />
          <div className="flex justify-between text-sm text-charcoal">
            <span>EUR → USD</span>
            <span className="font-mono text-xs">14:02</span>
          </div>
          <div className="flex justify-between text-sm text-charcoal">
            <span>Batch 0841</span>
            <span className="font-mono text-xs text-warm-grey">reconciled</span>
          </div>
        </div>
      </Panel>
      <Panel className="bottom-20 left-10 right-6 h-36 p-4">
        <p className="label-caps text-warm-grey mb-4">Projection</p>
        <svg viewBox="0 0 280 80" className="h-16 w-full" fill="none">
          <path d="M0 60 C40 55, 60 20, 100 28 C140 36, 160 10, 200 18 C240 26, 260 8, 280 12" stroke="#b8a88a" strokeWidth="1.5" />
          <path d="M0 70 C50 68, 80 50, 120 54 C170 60, 200 40, 280 42" stroke="#1c1917" strokeWidth="1" opacity="0.25" />
        </svg>
      </Panel>
      <div className="absolute bottom-6 left-6 font-serif text-3xl text-charcoal/15">01</div>
    </>
  );
}

function VaultVisual() {
  return (
    <>
      <Meta className="left-4 top-4">VAULT · SEC</Meta>
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne/50" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone" />
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne" />
      <Panel className="left-6 top-10 w-36 p-3">
        <p className="label-caps text-warm-grey">Policy</p>
        <p className="mt-2 font-mono text-[11px] text-charcoal">least-privilege</p>
      </Panel>
      <Panel className="bottom-10 right-6 w-40 p-3">
        <p className="label-caps text-warm-grey">Identity</p>
        <p className="mt-2 font-mono text-[11px] text-charcoal">oidc · short-lived</p>
      </Panel>
    </>
  );
}

function RelayVisual() {
  return (
    <>
      <Meta className="left-4 top-4">RELAY · LOG</Meta>
      <svg className="absolute inset-0 h-full w-full p-10" viewBox="0 0 300 380" fill="none">
        <circle cx="60" cy="80" r="8" stroke="#b8a88a" />
        <circle cx="150" cy="180" r="10" stroke="#1c1917" opacity="0.4" />
        <circle cx="240" cy="120" r="8" stroke="#b8a88a" />
        <circle cx="200" cy="280" r="8" stroke="#1c1917" opacity="0.35" />
        <path d="M68 86 L142 172" stroke="#b8a88a" strokeWidth="1" />
        <path d="M158 172 L232 126" stroke="#b8a88a" strokeWidth="1" opacity="0.6" />
        <path d="M156 190 L198 272" stroke="#1c1917" strokeWidth="1" opacity="0.3" />
        <path d="M240 128 L210 270" stroke="#b8a88a" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />
      </svg>
      <Panel className="bottom-8 left-6 right-6 p-4">
        <div className="flex items-center justify-between">
          <span className="label-caps text-warm-grey">Delivery</span>
          <span className="font-mono text-xs text-champagne">99.97%</span>
        </div>
      </Panel>
    </>
  );
}

function AtlasVisual() {
  return (
    <>
      <Meta className="left-4 top-4">ATLAS · DS</Meta>
      <div className="absolute inset-x-8 top-16 grid grid-cols-2 gap-3">
        {["Token", "Primitive", "Pattern", "Doc"].map((item) => (
          <Panel key={item} className="relative h-20 p-3">
            <p className="label-caps text-warm-grey">{item}</p>
            <div className="mt-4 h-px w-10 bg-champagne" />
          </Panel>
        ))}
      </div>
      <div className="absolute bottom-8 left-8 right-8">
        <p className="font-serif text-2xl text-charcoal">Shared language</p>
        <p className="mt-2 text-sm text-warm-grey">Design ↔ Engineering</p>
      </div>
    </>
  );
}

function PulseVisual() {
  return (
    <>
      <Meta className="left-4 top-4">PULSE · MOB</Meta>
      <Panel className="left-1/2 top-12 h-[70%] w-[58%] -translate-x-1/2 rounded-[1.5rem] p-4">
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-stone" />
        <div className="space-y-3">
          <div className="h-8 rounded-sm bg-cream-deep/80" />
          <div className="h-24 rounded-sm border border-dashed border-stone p-3">
            <p className="label-caps text-warm-grey">Sync</p>
            <p className="mt-3 font-mono text-[11px] text-charcoal">local-first · pending 2</p>
          </div>
          <div className="h-8 rounded-sm bg-cream-deep/60" />
          <div className="h-8 rounded-sm bg-cream-deep/40" />
        </div>
      </Panel>
    </>
  );
}
