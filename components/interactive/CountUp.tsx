"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion, useInView } from "./useInView";

type Parsed = { pre: string; num: number; dec: number; group: boolean; suf: string };

/** "+43,5K" → { pre: "+", num: 43.5, dec: 1, suf: "K" }. Números no formato brasileiro (1.219 / 6,8). */
function parse(value: string): Parsed | null {
  const m = String(value).match(/^([^\d]*)(\d[\d.]*(?:,\d+)?)(.*)$/);
  if (!m) return null;
  const [, pre, raw, suf] = m;
  const dec = raw.includes(",") ? raw.split(",")[1].length : 0;
  return { pre, num: parseFloat(raw.replace(/\./g, "").replace(",", ".")), dec, group: raw.includes("."), suf };
}

const fmt = (p: Parsed, x: number) => {
  // inteiros pequenos ("1M") contam com uma casa decimal para não saltar de 0 direto para 1
  const dec = p.dec === 0 && p.num < 10 && p.suf ? 1 : p.dec;
  return p.pre + x.toLocaleString("pt-BR", { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: p.group }) + p.suf;
};

const ease = (t: number) => 1 - Math.pow(1 - t, 4);

/** Número que conta do zero até o valor quando aparece na tela (e anima entre valores quando muda). */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.4);
  const [shown, setShown] = useState(value);
  const cur = useRef<number | null>(null);

  useEffect(() => {
    const p = parse(value);
    if (!p || prefersReducedMotion()) { setShown(value); cur.current = p?.num ?? null; return; }
    if (!inView) { if (cur.current === null) { cur.current = 0; setShown(fmt(p, 0)); } return; }
    const from = cur.current ?? 0;
    if (from === p.num) { setShown(value); return; }
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const x = from + (p.num - from) * ease(t);
      cur.current = x;
      if (t < 1) { setShown(fmt(p, x)); raf = requestAnimationFrame(step); }
      else { cur.current = p.num; setShown(value); }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, inView, duration]);

  return <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>{shown}</span>;
}
