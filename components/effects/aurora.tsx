"use client";

/** Aurora / mesh-gradient background used behind the hero. */
export function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="aurora-blob animate-aurora left-[-10%] top-[-15%] h-[45vw] w-[45vw] bg-primary/50" />
      <div
        className="aurora-blob animate-aurora right-[-12%] top-[5%] h-[40vw] w-[40vw] bg-secondary/40"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="aurora-blob animate-aurora bottom-[-20%] left-[25%] h-[38vw] w-[38vw] bg-accent/30"
        style={{ animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_85%)]" />
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:64px_64px]" />
    </div>
  );
}
