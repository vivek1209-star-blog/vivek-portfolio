"use client";
import { Award } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/effects/reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Certifications" title="Verified learning" />
        <div className="grid gap-6 sm:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.1}>
              <div className="gradient-border group h-full p-[1px]">
                <div className="glass-card flex h-full flex-col items-center rounded-2.5xl p-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent transition-transform group-hover:scale-110">
                    <Award size={22} />
                  </span>
                  <h3 className="mt-4 font-semibold">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
