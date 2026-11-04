"use client";

import { useInView } from "./useInView";

/** Barra horizontal que se preenche da esquerda para a direita quando aparece. */
export function FillBar({ w, c, delay = 0 }: { w: string; c: string; delay?: number }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      className="fill-bar"
      style={{
        height: "100%", width: w, background: c, transformOrigin: "left center",
        transform: inView ? "none" : "scaleX(0)",
        transition: `transform 1.1s cubic-bezier(.2,.8,.2,1) ${delay}ms, background .25s, box-shadow .25s`,
      }}
    />
  );
}
