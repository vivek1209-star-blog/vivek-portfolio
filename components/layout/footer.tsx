"use client";
import { Github, Linkedin, Newspaper, Package } from "lucide-react";
import { motion } from "framer-motion";
import { SITE, SOCIALS } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  github: <Github size={16} />,
  linkedin: <Linkedin size={16} />,
  medium: <Newspaper size={16} />,
  npm: <Package size={16} />,
};

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 sm:flex-row sm:justify-between">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-lg font-bold"
        >
          {SITE.firstName}
          <span className="text-gradient">.</span>
        </motion.p>
        <p className="text-center text-xs text-muted">
          © {new Date().getFullYear()} {SITE.name} · Built with Next.js, TypeScript & Framer Motion · {SITE.location}
        </p>
        <div className="flex gap-2">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-primary hover:text-foreground"
            >
              {ICONS[s.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
