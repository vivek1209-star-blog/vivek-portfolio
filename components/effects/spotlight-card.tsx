"use client";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/** Card with a soft glow that follows the mouse (pure CSS variables, no re-renders). */
export function SpotlightCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--sx", `${e.clientX - r.left}px`);
        el.style.setProperty("--sy", `${e.clientY - r.top}px`);
      }}
      className={cn("spotlight-card glass-card group relative h-full overflow-hidden", className)}
    >
      {children}
    </div>
  );
}
