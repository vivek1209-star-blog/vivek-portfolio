"use client";
import { ArrowUpRight, Container, CreditCard, Package, PenLine, Rocket, Smartphone, Users } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/effects/reveal";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ReactNode> = {
  package: <Package size={20} />,
  rocket: <Rocket size={20} />,
  "credit-card": <CreditCard size={20} />,
  smartphone: <Smartphone size={20} />,
  pen: <PenLine size={20} />,
  users: <Users size={20} />,
  container: <Container size={20} />,
};

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Proof, not promises"
          subtitle="Things I've shipped, published and earned — each one verifiable."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} delay={(i % 4) * 0.07} className={cn(a.wide && "sm:col-span-2")}>
              <SpotlightCard>
                <div className="relative z-10 flex h-full flex-col p-6">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-secondary/25 text-secondary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      {ICONS[a.icon]}
                    </span>
                    <span className="font-display text-3xl font-bold text-gradient">{a.metric}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{a.body}</p>
                  {a.href && (
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      {a.cta}
                      <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
