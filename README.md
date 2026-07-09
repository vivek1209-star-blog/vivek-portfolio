# Vivek Mishra — Portfolio

Premium, animated personal portfolio built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lenis**.

All content lives in one file — **`lib/data.ts`** — sourced from the real resume/Naukri profile. Nothing is invented; anything missing is clearly marked `[PLACEHOLDER]`.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Before you go live — checklist

1. ~~profile.jpg~~ ✅ added
2. ~~Project screenshots~~ ✅ added (only BBPS pending — drop `public/projects/bbps.png` when you have a safe screenshot)
3. ~~Company logos~~ ✅ added and wired into the Experience timeline
4. **`public/og.png`** — 1200×630 image shown when your portfolio link is shared on LinkedIn/WhatsApp/X. Make one free on Canva ("Open Graph" template): your name + title + dark gradient. Drop it in `public/` as `og.png` — nothing else to change.
5. **`lib/data.ts` → `SITE.url`** — after your first Vercel deploy, paste the URL Vercel gives you (e.g. `https://vivek-portfolio-xyz.vercel.app`). Must be a website URL, never an email.
6. **Testimonials** — section is currently commented out in `app/page.tsx`. When you get real LinkedIn recommendations, paste them in `TESTIMONIALS` in `lib/data.ts` and un-comment the two lines.
7. **Contact form** — opens the visitor's mail client (`mailto:`). For direct-to-inbox delivery, wire Formspree or a Next API route with Resend later.
8. **Skill levels** — self-assessed percentages in `SKILLS`; tune them.

## Architecture

```
app/                    # App Router: layout (SEO, fonts, JSON-LD), page, 404, sitemap, robots
components/
  sections/             # Hero, About, Skills, Experience, Projects, Services,
                        # Certifications, Testimonials, TechStack, Stats, Contact
  layout/               # Shell (overlays), Navbar, CommandPalette (⌘K), Footer
  effects/              # Cursor+spotlight, Aurora, Tilt, Magnetic, Counter,
                        # Marquee, Reveal, ScrollProgress, ScrollToTop
  providers/            # ThemeProvider (dark/light), SmoothScroll (Lenis), Loader
  ui/                   # Button, Badge, SectionHeading (shadcn-style, CVA)
lib/data.ts             # ← ALL content. Edit here, everything updates.
lib/utils.ts            # cn() helper
hooks/                  # useMediaQuery, usePrefersReducedMotion
```

## Design decisions

- **Palette & theme** exactly per brief: `#7C3AED` primary, `#06B6D4` secondary, `#F97316` accent, `#09090B` background, glass cards. Dark is default; light theme included.
- **Fonts**: Inter (body) + Space Grotesk (display) via `next/font` — zero layout shift. Satoshi/Geist aren't on Google Fonts; drop them in with `next/font/local` if you want them.
- **No GSAP / React Three Fiber**: everything the brief asks for (text reveal, magnetic buttons, tilt, counters, marquee, aurora) is done with Framer Motion + CSS — smaller bundle, better Lighthouse. The hero aurora is pure CSS, GPU-friendly.
- **Accessibility**: `prefers-reduced-motion` kills all animation, custom cursor only on `pointer: fine`, visible focus rings, semantic landmarks, labeled controls.
- **Performance**: server components by default, `next/image` with lazy loading, single font pipeline, no heavy 3D. Should comfortably score 95+ on Lighthouse once real images are optimized.

## Keyboard shortcuts

- `⌘K` / `Ctrl+K` — command palette (jump to sections, open socials, download resume)
- `Esc` — close palette / menu

## Deploy

Push to GitHub → import on [Vercel](https://vercel.com) → done. Set the production domain, then update `SITE.url`.
