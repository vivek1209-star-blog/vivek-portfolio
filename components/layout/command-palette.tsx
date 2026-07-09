"use client";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, FileText, Github, Linkedin, Search } from "lucide-react";
import { NAV_LINKS, SITE, SOCIALS } from "@/lib/data";

type Item = { label: string; hint: string; action: () => void; icon: React.ReactNode };

export function CommandPalette({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") setOpen(false);
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const items: Item[] = useMemo(
    () => [
      ...NAV_LINKS.map((l) => ({
        label: `Go to ${l.label}`,
        hint: "Section",
        icon: <ArrowRight size={15} />,
        action: () => {
          document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
          setOpen(false);
        },
      })),
      {
        label: "Download resume",
        hint: "PDF",
        icon: <Download size={15} />,
        action: () => {
          window.open(SITE.resumePath, "_blank");
          setOpen(false);
        },
      },
      ...SOCIALS.map((s) => ({
        label: `Open ${s.label}`,
        hint: "Social",
        icon:
          s.icon === "github" ? <Github size={15} /> : s.icon === "linkedin" ? <Linkedin size={15} /> : <FileText size={15} />,
        action: () => {
          window.open(s.href, "_blank");
          setOpen(false);
        },
      })),
    ],
    [setOpen]
  );

  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/50 px-4 pt-[16vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="glass-card w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3">
              <Search size={16} className="text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, links, resume…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
              />
              <kbd className="rounded border border-line px-1.5 py-0.5 text-[10px] text-muted">ESC</kbd>
            </div>
            <ul className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-muted">
                  Nothing matches “{query}”. Try a section name.
                </li>
              )}
              {filtered.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.action}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-colors hover:bg-surface"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-muted">{item.icon}</span>
                      {item.label}
                    </span>
                    <span className="text-xs text-muted">{item.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
