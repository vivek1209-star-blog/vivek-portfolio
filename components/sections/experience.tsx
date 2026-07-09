"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/effects/reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="4+ years across fintech, payments, CRM, and healthcare products."
        />

        <div className="relative">
          <motion.div
            className="absolute left-[19px] top-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            aria-hidden
          />
          <ol className="space-y-10">
            {EXPERIENCE.map((job, i) => (
              <Reveal key={job.company + job.period} delay={i * 0.05}>
                <li className="relative pl-14">
                  <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-line bg-white">
                    {job.logo ? (
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={40}
                        height={40}
                        className="h-full w-full object-contain p-1"
                      />
                    ) : (
                      <Briefcase size={16} className="text-primary" />
                    )}
                  </span>
                  <div className="glass-card p-6 transition-all hover:-translate-y-1 hover:shadow-[0_16px_50px_-16px_rgba(6,182,212,0.4)]">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                      <span className="text-xs font-medium text-secondary">{job.period}</span>
                    </div>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 text-sm text-muted">
                      <span className="font-medium text-foreground">{job.company}</span>
                      <span className="inline-flex items-center gap-1 text-xs">
                        <MapPin size={11} /> {job.location}
                      </span>
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm text-muted">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
