"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { CommandPalette } from "@/components/layout/command-palette";
import { Cursor } from "@/components/effects/cursor";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { ScrollToTop } from "@/components/effects/scroll-to-top";
import { Loader } from "@/components/providers/loader";

/** Client shell that hosts overlays + navbar around server-rendered content. */
export function Shell({ children }: { children: React.ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Cursor />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />
      {children}
      <ScrollToTop />
    </>
  );
}
