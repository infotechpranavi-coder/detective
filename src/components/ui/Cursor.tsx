"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetXRef = useRef(0);
  const targetYRef = useRef(0);
  const ringXRef = useRef(0);
  const ringYRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let isHovering = false;

    const setScale = () => {
      dot.style.transform = `translate3d(${targetXRef.current}px, ${targetYRef.current}px, 0) translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`;
      ring.style.transform = `translate3d(${ringXRef.current}px, ${ringYRef.current}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`;
      dot.style.opacity = isHovering ? "0.5" : "1";
    };

    const onMouseMove = (event: MouseEvent) => {
      targetXRef.current = event.clientX;
      targetYRef.current = event.clientY;
      dot.style.transform = `translate3d(${targetXRef.current}px, ${targetYRef.current}px, 0) translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`;
    };

    const onMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      isHovering = !!target && (target.closest("a") !== null || target.closest("button") !== null);
      setScale();
    };

    const animate = () => {
      ringXRef.current += (targetXRef.current - ringXRef.current) * 0.2;
      ringYRef.current += (targetYRef.current - ringYRef.current) * 0.2;
      ring.style.transform = `translate3d(${ringXRef.current}px, ${ringYRef.current}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`;
      rafRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 rounded-full bg-accent mix-blend-difference transition-opacity duration-150"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border border-accent opacity-30"
      />
    </>
  );
}
