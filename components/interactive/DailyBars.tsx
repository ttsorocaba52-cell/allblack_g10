"use client";

import { useState } from "react";
import { DATA } from "@/lib/data";
import { useInView } from "./useInView";

const daily: number[] = DATA.yt.daily;
const max = Math.max(...daily);
const fmtM = (n: number) => n.toFixed(2).replace(".", ",") + "M";

/** Rótulo centralizado que pode ser mais largo que a coluna sem empurrar o layout. */
function Label({ children, color, hidden }: { children: React.ReactNode; color: string; hidden?: boolean }) {
  return (
    <span style={{ position: "relative", width: "100%", height: "12px", flex: "none" }}>
      <span style={{ position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)", whiteSpace: "nowrap", fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: ".06em", color, visibility: hidden ? "hidden" : "visible" }}>
        {children}
      </span>
    </span>
  );
}

/** Views diárias do YouTube: barras crescem ao aparecer; passar o mouse mostra o dia e o valor. */
export function DailyBars() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div ref={ref} style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "200px", touchAction: "pan-y" }} onPointerLeave={() => setHover(null)}>
      {daily.map((val, i) => {
        const pk = val === max, on = hover === i;
        const showValue = on || (hover === null && pk);
        return (
          <div key={i} onPointerEnter={() => setHover(i)} onPointerDown={() => setHover(i)}
            style={{ flex: "1", minWidth: 0, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "6px", cursor: "crosshair" }}>
            <Label color="var(--color-text)" hidden={!showValue}>{fmtM(val)}</Label>
            <div style={{
              width: "100%", height: ((val / max) * 88).toFixed(0) + "%", borderRadius: "1px",
              background: pk ? "#F5C400" : on ? "#8C9096" : "#2e2f31",
              transformOrigin: "bottom", transform: inView ? "none" : "scaleY(0)",
              transition: `transform .9s cubic-bezier(.2,.8,.2,1) ${i * 22}ms, background .2s`,
            }} />
            <Label color={on ? "var(--color-accent)" : "var(--color-neutral-500)"} hidden={!(on || [0, 6, 13, 20, 27].includes(i))}>
              {String(i + 1).padStart(2, "0")}
            </Label>
          </div>
        );
      })}
    </div>
  );
}
