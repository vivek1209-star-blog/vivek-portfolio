"use client";
import { STATS } from "@/lib/data";
import { Counter } from "@/components/effects/counter";
import { Reveal } from "@/components/effects/reveal";

export function Stats() {
  return (
    <section id="stats" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-card grid grid-cols-2 divide-line p-8 sm:grid-cols-4 sm:divide-x">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="px-4 py-4 text-center">
              <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
