"use client";

import { useEffect, useState } from "react";
import { markReady } from "@/lib/ready";

const MIN_MS = 1700;  // tempo mínimo para a logo aparecer com calma
const MAX_MS = 3000;  // nunca segura o site mais que isso

/**
 * Tela de abertura: fundo preto, logo surgindo em fade e uma linha de carregamento.
 * Vem no HTML do servidor (aparece no primeiro instante) e some quando a página carrega.
 */
export function Preloader() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t0 = performance.now();
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, (reduce ? 400 : MIN_MS) - (performance.now() - t0));
      setTimeout(() => {
        setPhase("out");
        markReady();
        setTimeout(() => setPhase("gone"), 900);
      }, wait);
    };
    // Espera só o que aparece na primeira tela: a foto do hero e as fontes
    const hero = document.querySelector<HTMLImageElement>(".hero-img");
    const heroReady = !hero || hero.complete
      ? Promise.resolve()
      : new Promise<void>((r) => { hero.addEventListener("load", () => r(), { once: true }); hero.addEventListener("error", () => r(), { once: true }); });
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    Promise.all([heroReady, fontsReady]).then(finish);
    const cap = setTimeout(finish, MAX_MS);
    return () => clearTimeout(cap);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("ab-loading", phase === "in");
  }, [phase]);

  if (phase === "gone") return null;
  return (
    <div className={`pl${phase === "out" ? " pl-out" : ""}`} aria-hidden="true">
      <div className="pl-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="pl-logo" src="/assets/logo-intro.webp" alt="" width={624} height={365} />
        <span className="pl-bar"><span /></span>
      </div>
    </div>
  );
}
