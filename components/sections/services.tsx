"use client";
import { Building2, Component, CreditCard, Layers, Package, Zap } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/effects/tilt-card";
import { Reveal } from "@/components/effects/reveal";

const ICONS: Record<string, React.ReactNode> = {
  layers: <Layers size={20} />,
  "credit-card": <CreditCard size={20} />,
  building: <Building2 size={20} />,
  component: <Component size={20} />,
  zap: <Zap size={20} />,
  package: <Package size={20} />,
};

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="What I can do for your team"
          subtitle="Focused on the problems I've actually solved in production."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <TiltCard className="h-full">
                <div className="glass-card group h-full p-6 transition-shadow hover:shadow-[0_16px_50px_-16px_rgba(249,115,22,0.35)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition-transform group-hover:scale-110 group-hover:rotate-3">
                    {ICONS[s.icon]}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.body}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
