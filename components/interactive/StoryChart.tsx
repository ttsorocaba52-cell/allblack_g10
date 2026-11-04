"use client";

import { useState } from "react";
import { DATA } from "@/lib/data";
import { useInView } from "./useInView";

const sv: number[] = DATA.storyValues;
const X = (i: number) => 20 + i * (520 / (sv.length - 1));
const Y = (val: number) => 200 - (val / 200) * 180;
const pts = sv.map((val, i) => X(i).toFixed(1) + "," + Y(val).toFixed(1));
const line = "M" + pts.join(" L");
const area = "M" + X(0) + ",200 L" + pts.join(" L") + " L" + X(sv.length - 1) + ",200 Z";
const peak = sv.indexOf(Math.max(...sv));
const step = 520 / (sv.length - 1);
const mono = "IBM Plex Mono, ui-monospace, monospace";

/** Gráfico dos 14 stories mais vistos: a linha se desenha ao aparecer e mostra o valor de cada story ao passar o mouse. */
export function StoryChart() {
  const [ref, inView] = useInView<SVGSVGElement>(0.3);
  const [hover, setHover] = useState<number | null>(null);
  const i = hover ?? peak;
  const x = X(i), y = Y(sv[i]);
  const flip = x > 440; // tooltip à esquerda perto da borda direita
  const label = `TOP ${String(i + 1).padStart(2, "0")} · ${sv[i]}K`;

  return (
    <svg
      ref={ref}
      viewBox="0 0 600 220"
      style={{ width: "100%", display: "block", touchAction: "pan-y" }}
      role="img"
      aria-label="Gráfico: média acima de 80 mil, pico próximo de 180 mil visualizações"
      onPointerLeave={() => setHover(null)}
    >
      {[50, 100, 150].map((val) => (
        <g key={val}>
          <line x1="20" x2="580" y1={Y(val)} y2={Y(val)} stroke="#2e2f31" strokeWidth="1" />
          <text x="584" y={Y(val)} fill="#6b6e73" fontFamily={mono} fontSize="9" dominantBaseline="middle">{val}K</text>
        </g>
      ))}
      <path d={area} fill="rgba(245,196,0,.10)" style={{ opacity: inView ? 1 : 0, transition: "opacity 1s ease .8s" }} />
      <line x1="20" x2="580" y1="128" y2="128" stroke="#F2F0EB" strokeWidth="1" strokeDasharray="4 4" opacity=".6" />
      <text x="24" y="120" fill="#F2F0EB" fontFamily={mono} fontSize="10">MÉDIA 80K+</text>
      <path
        d={line} pathLength={1} fill="none" stroke="#F5C400" strokeWidth="2" strokeLinejoin="round"
        strokeDasharray="1" strokeDashoffset={inView ? 0 : 1}
        style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(.6,0,.2,1)" }}
      />
      {sv.map((val, k) => (
        <circle key={k} cx={X(k)} cy={Y(val)} r={k === hover ? 0 : 2} fill="#F5C400"
          style={{ opacity: inView ? 1 : 0, transition: `opacity .3s ease ${0.6 + k * 0.07}s` }} />
      ))}
      <g style={{ opacity: inView ? 1 : 0, transition: "opacity .4s ease 1.4s", pointerEvents: "none" }}>
        {hover !== null && <line x1={x} x2={x} y1="12" y2="200" stroke="#F5C400" strokeWidth="1" opacity=".45" />}
        <circle cx={x} cy={y} r="5" fill="#090909" stroke="#F5C400" strokeWidth="2" />
        <g transform={`translate(${flip ? x - 12 : x + 12},${Math.max(y - 12, 14)})`}>
          <rect x={flip ? -96 : 0} y="-12" width="96" height="20" rx="3" fill="#090909" stroke="#2e2f31" />
          <text x={flip ? -48 : 48} y="2" textAnchor="middle" fill="#F2F0EB" fontFamily={mono} fontSize="10">{label}</text>
        </g>
      </g>
      {sv.map((_, k) => (
        <rect key={k} x={X(k) - step / 2} y="0" width={step} height="220" fill="transparent"
          onPointerEnter={() => setHover(k)} onPointerDown={() => setHover(k)} style={{ cursor: "crosshair" }} />
      ))}
    </svg>
  );
}
