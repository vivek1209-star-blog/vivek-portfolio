"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { SITE } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/effects/reveal";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Enter your name (min 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    // No backend in this static build — opens the visitor's mail client
    // pre-filled. Swap for an API route / Formspree / Resend when ready.
    const subject = encodeURIComponent(`Portfolio contact from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary";

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Have a role, a product, or a payments problem? My inbox is open."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: info */}
          <Reveal>
            <div className="glass-card flex h-full flex-col gap-6 p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
                </span>
                {SITE.availability}
              </div>

              <ul className="space-y-4 text-sm">
                <li>
                  <a href={`mailto:${SITE.email}`} className="group flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Mail size={17} />
                    </span>
                    <span className="text-muted transition-colors group-hover:text-foreground">{SITE.email}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="group flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                      <Phone size={17} />
                    </span>
                    <span className="text-muted transition-colors group-hover:text-foreground">{SITE.phone}</span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <MapPin size={17} />
                  </span>
                  <span className="text-muted">{SITE.location}</span>
                </li>
              </ul>

              {/* Map — lazy-loaded OSM embed, no API key needed */}
              <div className="mt-auto overflow-hidden rounded-2xl border border-line">
                <iframe
                  title="Mumbai, India map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.70%2C18.85%2C73.10%2C19.30&layer=mapnik"
                  className="h-44 w-full grayscale transition-all duration-500 hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="glass-card p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full min-h-72 flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 size={44} className="text-secondary" />
                  <h3 className="mt-4 font-display text-xl font-semibold">Almost there</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Your mail app should be open with the message pre-filled — hit send and I&apos;ll get back to you soon.
                  </p>
                  <Button variant="outline" size="sm" className="mt-6" onClick={() => setSent(false)}>
                    Write another message
                  </Button>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className={field}
                        placeholder="Your name"
                        value={values.name}
                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className="mt-1 text-xs text-accent">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={field}
                        placeholder="you@company.com"
                        value={values.email}
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="mt-1 text-xs text-accent">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className={field}
                      placeholder="Tell me about the role or the project…"
                      value={values.message}
                      onChange={(e) => setValues({ ...values, message: e.target.value })}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
                  </div>
                  <Button size="lg" className="w-full" onClick={handleSubmit}>
                    <Send size={16} /> Send message
                  </Button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
