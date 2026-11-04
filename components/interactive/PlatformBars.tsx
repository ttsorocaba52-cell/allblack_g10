"use client";

import { useState } from "react";
import { useInView } from "./useInView";

/** Mini-gráfico da plataforma selecionada (TikTok/Facebook) com leitura do dia ao passar o mouse. */
export function PlatformBars({ id, label, chart }: { id: string; label: string; chart: number[] }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  const [hover, setHover] = useState<number | null>(null);
  const maxI = chart.indexOf(Math.max(...chart));
  const unit = id === "facebook" ? "SEMANA" : "DIA";
  const readout = hover === null
    ? null
    : `${unit} ${String(hover + 1).padStart(2, "0")} · ${hover === maxI ? "MELHOR " + unit : chart[hover] + "% DO PICO"}`;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: ".12em", color: "var(--color-neutral-500)" }}>
        <span>{label}</span>
        {readout ? (
          <span style={{ color: "var(--color-text)" }}>{readout}</span>
        ) : (
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "8px", height: "8px", background: "#F5C400" }} />
            MELHOR {unit}
          </span>
        )}
      </div>
      <div ref={ref} style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "88px", touchAction: "pan-y" }} onPointerLeave={() => setHover(null)}>
        {chart.map((h, i) => (
          <div key={i} onPointerEnter={() => setHover(i)} onPointerDown={() => setHover(i)}
            style={{ flex: "1", minWidth: 0, height: "100%", display: "flex", alignItems: "flex-end", cursor: "crosshair" }}>
            <div style={{
              width: "100%", height: h + "%", borderRadius: "1px",
              background: i === maxI ? "#F5C400" : hover === i ? "#8C9096" : "#2e2f31",
              transformOrigin: "bottom", transform: inView ? "none" : "scaleY(0)",
              transition: `height .6s cubic-bezier(.2,.8,.2,1), transform .9s cubic-bezier(.2,.8,.2,1) ${i * 20}ms, background .2s`,
            }} />
          </div>
        ))}
      </div>
    </div>
  );
}
