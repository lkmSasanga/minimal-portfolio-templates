"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { HeroCopy } from "@/components/hero/HeroCopy";
import { ArchitectureEngine } from "@/components/hero/ArchitectureEngine";
import { LiveTerminal } from "@/components/hero/LiveTerminal";
import { CodeWindow } from "@/components/hero/CodeWindow";
import { DevWindows } from "@/components/hero/DevWindows";
import { DeploymentLoop } from "@/components/hero/DeploymentLoop";
import { easeMac } from "@/lib/motion";

const AmbientScene = dynamic(
  () =>
    import("@/components/hero/AmbientScene").then((m) => m.AmbientScene),
  { ssr: false },
);

export function Hero() {
  return (
    <section className="viewport-lock relative">
      <AmbientScene />

      <div className="relative z-10 grid h-full grid-cols-1 lg:grid-cols-[minmax(320px,0.92fr)_minmax(0,1.08fr)]">
        <HeroCopy />

        <div className="relative hidden h-full min-h-0 lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: easeMac, delay: 0.25 }}
            className="absolute inset-0 px-4 pb-10 pt-20 xl:px-8"
          >
            <div className="relative h-full w-full">
              <ArchitectureEngine />
              <DevWindows />

              <div className="absolute bottom-[22%] left-[6%] z-20">
                <LiveTerminal />
              </div>
              <div className="absolute right-[4%] top-[38%] z-20">
                <CodeWindow />
              </div>

              <DeploymentLoop />
            </div>
          </motion.div>
        </div>

        <div className="relative mx-4 mb-8 h-[42vh] overflow-hidden rounded-3xl border border-white/[0.06] lg:hidden">
          <ArchitectureEngine />
        </div>
      </div>
    </section>
  );
}
