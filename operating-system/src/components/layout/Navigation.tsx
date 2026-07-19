"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { easeMac } from "@/lib/motion";

export function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeMac, delay: 0.15 }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5"
    >
      <nav className="pointer-events-auto glass flex max-w-full items-center gap-1 rounded-full px-2 py-1.5 sm:gap-0.5 sm:px-2.5">
        <Link
          href="/"
          className={cn(
            "mr-1 hidden items-center gap-2 rounded-full px-3 py-1.5 text-[13px] font-medium tracking-tight transition-colors duration-300 sm:flex",
            isHome ? "text-white" : "text-[var(--fg-muted)] hover:text-white",
          )}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-60 blur-[2px]" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </span>
          {siteConfig.name.split(" ")[0]}
        </Link>

        <div className="flex items-center gap-0.5 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-[13px] font-medium tracking-tight transition-colors duration-300",
                  active
                    ? "text-white"
                    : "text-[var(--fg-muted)] hover:text-white",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08]"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
