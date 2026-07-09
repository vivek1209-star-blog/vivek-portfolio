"use client";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/effects/reveal";

/**
 * NOTE: All testimonials in lib/data.ts are [PLACEHOLDER]s.
 * Replace with real quotes (LinkedIn recommendations work great),
 * or delete this section from app/page.tsx until you have them.
 */
export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say"
          subtitle="Swap these placeholders with real recommendations before going live."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.1}>
              <figure className="glass-card flex h-full flex-col p-6">
                <Quote size={22} className="text-primary" />
                <blockquote className="mt-4 flex-1 text-sm text-muted">{t.quote}</blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
