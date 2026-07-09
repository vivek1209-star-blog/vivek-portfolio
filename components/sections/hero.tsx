"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Newspaper, Package } from "lucide-react";
import { SITE, SOCIALS } from "@/lib/data";
import { Aurora } from "@/components/effects/aurora";
import { Magnetic } from "@/components/effects/magnetic";
import { Button } from "@/components/ui/button";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  medium: <Newspaper size={18} />,
  npm: <Package size={18} />,
};

const FLOATING_TECH = ["React", "Node.js", "TypeScript", "MySQL", "MongoDB", "Redux"];

/** Word-by-word text reveal. */
function RevealWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block">
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: delay + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Rotating professional titles. */
function RotatingTitle() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SITE.rotatingTitles.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-8 overflow-hidden sm:h-9">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-gradient font-semibold"
        >
          {SITE.rotatingTitles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <Aurora />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* Left: copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55 }}
            className="eyebrow mb-5 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            {SITE.availability}
          </motion.p>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <RevealWords text="Hi, I'm" delay={1.6} />
            <br />
            <span className="text-gradient">
              <RevealWords text={SITE.name} delay={1.8} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="mt-5 text-lg text-muted sm:text-xl"
          >
            <RotatingTitle />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.35 }}
            className="mt-4 max-w-xl text-muted"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a href={SITE.resumePath} download>
                <Button size="lg">
                  <Download size={16} /> Download resume
                </Button>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact">
                <Button size="lg" variant="secondary">
                  <Mail size={16} /> Contact me
                </Button>
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7 }}
            className="mt-8 flex gap-3"
          >
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-all hover:-translate-y-1 hover:text-foreground hover:shadow-[0_8px_24px_-8px_rgba(124,58,237,0.6)]"
              >
                {SOCIAL_ICONS[s.icon]}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: photo + floating tech icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="gradient-border overflow-hidden rounded-[2rem] p-[2px]">
            <Image
              src={SITE.photo}
              alt={`${SITE.name} — ${SITE.title}`}
              width={896}
              height={1152}
              priority
              sizes="(min-width: 1024px) 384px, 100vw"
              className="aspect-[4/5] w-full rounded-[calc(2rem-2px)] object-cover object-top"
            />
          </div>

          {FLOATING_TECH.map((tech, i) => (
            <motion.span
              key={tech}
              className="glass absolute rounded-full px-3 py-1.5 text-xs font-semibold"
              style={{
                top: `${[4, 18, 52, 78, 88, 38][i]}%`,
                left: i % 2 === 0 ? "-14%" : "auto",
                right: i % 2 === 1 ? "-14%" : "auto",
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
