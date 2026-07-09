"use client";
import { useEffect, useRef } from "react";

/** Custom cursor dot + trailing ring + page spotlight (pointer: fine only). */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let x = innerWidth / 2, y = innerHeight / 2;
    let rx = x, ry = y;
    let raf: number;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      document.documentElement.style.setProperty("--spot-x", `${x}px`);
      document.documentElement.style.setProperty("--spot-y", `${y}px`);
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role=button], input, textarea");
      ring.current?.classList.toggle("is-hovering", !!interactive);
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };

    addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="spotlight" aria-hidden />
      <div ref={dot} className="cursor-dot hidden md:block" aria-hidden />
      <div ref={ring} className="cursor-ring hidden md:block" aria-hidden />
    </>
  );
}
