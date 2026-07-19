"use client";

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SoundContextValue = {
  enabled: boolean;
  toggle: () => void;
  playClick: () => void;
  playHover: () => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

function createTone(freq: number, duration: number, volume = 0.04) {
  if (typeof window === "undefined") return;
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return;
  const ctx = new Ctx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.value = freq;
  gain.gain.value = volume;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.stop(ctx.currentTime + duration);
  osc.onended = () => void ctx.close();
}

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const ambientRef = useRef<OscillatorNode | null>(null);
  const ambientCtx = useRef<AudioContext | null>(null);

  const stopAmbient = useCallback(() => {
    try {
      ambientRef.current?.stop();
    } catch {
      /* already stopped */
    }
    ambientRef.current = null;
    void ambientCtx.current?.close();
    ambientCtx.current = null;
  }, []);

  const startAmbient = useCallback(() => {
    stopAmbient();
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = "sine";
    osc.frequency.value = 55;
    filter.type = "lowpass";
    filter.frequency.value = 180;
    gain.gain.value = 0.015;
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    ambientRef.current = osc;
    ambientCtx.current = ctx;
  }, [stopAmbient]);

  useEffect(() => {
    if (enabled) startAmbient();
    else stopAmbient();
    return stopAmbient;
  }, [enabled, startAmbient, stopAmbient]);

  const toggle = useCallback(() => setEnabled((v) => !v), []);

  const playClick = useCallback(() => {
    if (!enabled) return;
    createTone(620, 0.08, 0.05);
  }, [enabled]);

  const playHover = useCallback(() => {
    if (!enabled) return;
    createTone(420, 0.05, 0.025);
  }, [enabled]);

  const value = useMemo(
    () => ({ enabled, toggle, playClick, playHover }),
    [enabled, toggle, playClick, playHover],
  );

  return createElement(SoundContext.Provider, { value }, children);
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    return {
      enabled: false,
      toggle: () => undefined,
      playClick: () => undefined,
      playHover: () => undefined,
    };
  }
  return ctx;
}
