"use client";

import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent, PointerEvent } from "react";

type Ev = ReactMouseEvent | undefined;

/** Puxa o botão levemente na direção do cursor (só em telas com mouse). */
function useMagnet(strength = 0.18) {
  const ref = useRef<HTMLButtonElement>(null);
  const onPointerMove = (e: PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength * 1.6;
    el.style.setProperty("--mx", `${x.toFixed(1)}px`);
    el.style.setProperty("--my", `${y.toFixed(1)}px`);
  };
  const onPointerLeave = () => {
    ref.current?.style.setProperty("--mx", "0px");
    ref.current?.style.setProperty("--my", "0px");
  };
  return { ref, onPointerMove, onPointerLeave };
}

/** Botões do hero: "Explorar mídia kit" (principal) e "Contato comercial". */
export function HeroButtons({ onExplore, onContact }: { onExplore: (e: Ev) => void; onContact: (e: Ev) => void }) {
  const a = useMagnet();
  const b = useMagnet();
  return (
    <>
      <button {...a} className="hb hb-primary" onClick={onExplore}>
        <span className="hb-fill" aria-hidden="true" />
        <span className="hb-shine" aria-hidden="true" />
        <span className="hb-label">EXPLORAR MÍDIA KIT</span>
        <i className="ph ph-arrow-down-right hb-arrow" />
      </button>
      <button {...b} className="hb hb-secondary" onClick={onContact}>
        <span className="hb-border" aria-hidden="true" />
        <i className="ph ph-chat-circle-dots hb-chat" />
        <span className="hb-label">CONTATO COMERCIAL</span>
      </button>
    </>
  );
}
