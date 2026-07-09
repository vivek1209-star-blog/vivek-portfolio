"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Lightbulb, Puzzle, UserRound } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/effects/reveal";

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={(index % 2) * 0.08}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="glass-card group flex h-full flex-col overflow-hidden"
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-surface">
          {/* [PLACEHOLDER] add screenshots to /public/projects — gradient fallback below */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-secondary/15 to-accent/20" />
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent p-4">
            <span className="text-xs font-semibold text-white/90">{project.subtitle}</span>
            <span className="text-xs text-white/70">{project.period}</span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold group-hover:text-gradient">
            {project.title}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-secondary">
            <UserRound size={12} /> {project.role}
          </p>
          <p className="mt-3 text-sm text-muted">{project.description}</p>

          <ul className="mt-4 space-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-muted">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-secondary" />
                {f}
              </li>
            ))}
          </ul>

          {/* Case study: challenge → solution */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-4 self-start text-xs font-semibold text-primary underline-offset-4 hover:underline"
            aria-expanded={open}
          >
            {open ? "Hide case study" : "Read case study"}
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-3 space-y-3 rounded-xl border border-line p-4 text-sm">
                  <p className="flex gap-2 text-muted">
                    <Puzzle size={15} className="mt-0.5 shrink-0 text-accent" />
                    <span>
                      <strong className="text-foreground">Challenge — </strong>
                      {project.challenges}
                    </span>
                  </p>
                  <p className="flex gap-2 text-muted">
                    <Lightbulb size={15} className="mt-0.5 shrink-0 text-secondary" />
                    <span>
                      <strong className="text-foreground">Solution — </strong>
                      {project.solutions}
                    </span>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="mt-5 flex gap-3 border-t border-line pt-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Github size={15} /> GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                <ExternalLink size={15} /> Live
              </a>
            )}
            {!project.links.github && !project.links.live && (
              <span className="text-xs text-muted">Proprietary — walkthrough available on request</span>
            )}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Production SaaS, fintech platforms, and open-source — only real work, no filler."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
