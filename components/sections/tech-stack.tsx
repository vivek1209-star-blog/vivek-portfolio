"use client";
import { TECH_MARQUEE } from "@/lib/data";
import { Marquee } from "@/components/effects/marquee";
import { SectionHeading } from "@/components/ui/section-heading";

export function TechStack() {
  return (
    <section id="tech" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Tech stack" title="Tools of the trade" />
      </div>
      <Marquee>
        {TECH_MARQUEE.map((tech) => (
          <span
            key={tech}
            className="glass inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-1 hover:text-gradient"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
            {tech}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
