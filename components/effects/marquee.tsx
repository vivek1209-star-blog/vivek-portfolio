"use client";
import { cn } from "@/lib/utils";

/** Infinite horizontal marquee — duplicates children for a seamless loop. */
export function Marquee({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
        {children}
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
