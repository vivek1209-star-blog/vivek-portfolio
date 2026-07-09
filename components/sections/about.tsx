"use client";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { ABOUT, EDUCATION } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/effects/reveal";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About me"
          title="The journey so far"
          subtitle={ABOUT.summary}
        />

        {/* Animated timeline */}
        <div className="relative mx-auto max-w-3xl">
          <motion.div
            className="absolute left-[15px] top-0 w-px bg-gradient-to-b from-primary via-secondary to-accent sm:left-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            aria-hidden
          />
          <ol className="space-y-12">
            {ABOUT.journey.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.06}>
                <li
                  className={`relative flex gap-6 pl-12 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0
                      ? "sm:mr-auto sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:pl-12"
                  }`}
                >
                  <span
                    className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 bg-background text-[10px] font-bold text-primary left-0 ${
                      i % 2 === 0 ? "sm:left-auto sm:-right-4" : "sm:-left-4"
                    }`}
                  >
                    <Sparkles size={13} />
                  </span>
                  <div className="glass-card w-full p-6">
                    <p className="eyebrow">{item.year}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted">{item.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Education */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.1}>
              <div className="glass-card flex items-start gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-muted">{edu.school}</p>
                  <p className="mt-1 text-xs text-secondary">{edu.period}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
