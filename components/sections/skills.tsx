"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/effects/tilt-card";
import { Reveal } from "@/components/effects/reveal";

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          subtitle="Real, production-tested skills — the same stack behind the fintech and SaaS products I ship."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, gi) => (
            <Reveal key={group.category} delay={(gi % 3) * 0.08}>
              <TiltCard className="h-full">
                <div className="glass-card h-full p-6 transition-shadow hover:shadow-[0_12px_50px_-12px_rgba(124,58,237,0.45)]">
                  <h3 className="font-display text-base font-semibold">
                    <span className="text-gradient">{group.category}</span>
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {group.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span>{skill.name}</span>
                          <span className="text-xs text-muted">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-surface">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
