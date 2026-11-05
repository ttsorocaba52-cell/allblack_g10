"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";
import { DATA } from "@/lib/data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const D: any = DATA;
const BRANDS: string[] = D.brands;
const ICONS = ["ph-heart", "ph-repeat", "ph-chat-circle"];
const pad2 = (n: number) => String(n).padStart(2, "0");

type Stat = { a: string; b: string };

/** Player em tela cheia para o reel do case (vertical, com som e controles). */
function VideoLightbox({ src, poster, title, onClose }: { src: string; poster: string; title: string; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => { if (e.key === "Escape") { e.stopPropagation(); onClose(); } };
    window.addEventListener("keydown", onKey, true);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { window.removeEventListener("keydown", onKey, true); document.body.style.overflow = overflow; };
  }, [onClose]);
  return createPortal(
    <div className="vl" role="dialog" aria-modal="true" aria-label={`Vídeo: ${title}`} onClick={onClose} onKeyDown={(e) => e.stopPropagation()}>
      <div className="vl-frame" onClick={(e) => e.stopPropagation()}>
        <video className="vl-video" src={src} poster={poster} controls autoPlay playsInline preload="auto" />
        <button ref={closeRef} className="vl-close" onClick={onClose} aria-label="Fechar vídeo"><i className="ph ph-x" /></button>
        <span className="vl-title">{title}</span>
      </div>
    </div>,
    document.body,
  );
}

/**
 * Cases comerciais em formato de "player": um case por vez, com miniaturas,
 * setas, teclado (← →) e swipe no celular. A troca acontece no mesmo lugar,
 * com uma cortina na imagem (na direção da troca) e o texto subindo em sequência.
 */
export function CaseShowcase({ onOpen }: { onOpen: (brand: string) => void }) {
  const [idx, setIdx] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [dir, setDir] = useState<1 | -1>(1);
  const [playing, setPlaying] = useState(false);
  const swipe = useRef<{ x: number; y: number } | null>(null);
  const thumbs = useRef<HTMLDivElement>(null);

  const go = useCallback((next: number, direction?: 1 | -1) => {
    const n = (next + BRANDS.length) % BRANDS.length;
    if (n === idx) return;
    setDir(direction ?? (n > idx ? 1 : -1));
    setPrev(idx);
    setIdx(n);
    // mantém a miniatura ativa visível na faixa rolável do celular
    const t = thumbs.current?.children[n] as HTMLElement | undefined;
    t?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [idx]);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(idx + 1, 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(idx - 1, -1); }
  };
  const onDown = (e: PointerEvent) => { swipe.current = { x: e.clientX, y: e.clientY }; };
  const onUp = (e: PointerEvent) => {
    const s = swipe.current; swipe.current = null;
    if (!s) return;
    const dx = e.clientX - s.x, dy = e.clientY - s.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(idx + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
  };

  const brand = BRANDS[idx];
  const video: string | undefined = D.caseVideos?.[brand];
  const stats: Stat[] = D.caseStats[brand] || [];
  const info = D.caseInfo[brand] || { desc: "", tags: [] };
  const photo = (i: number) => `url(${D.casePhotos[BRANDS[i]]})`;
  const st = (i: number) => ({ "--i": i } as CSSProperties);

  return (
    <div className="cs" data-reveal="0" tabIndex={0} onKeyDown={onKey} aria-roledescription="carrossel" aria-label="Cases comerciais">
      {/* Mídia */}
      <div className="cs-media" onPointerDown={onDown} onPointerUp={onUp} onPointerCancel={() => (swipe.current = null)}>
        {prev !== null && <div className="cs-img" style={{ backgroundImage: photo(prev) }} aria-hidden="true" />}
        <div
          key={idx}
          className={`cs-img ${prev !== null ? (dir === 1 ? "cs-wipe-next" : "cs-wipe-prev") : ""}`}
          role="img"
          aria-label={`Reel da campanha ${brand}`}
          style={{ backgroundImage: photo(idx) }}
          onAnimationEnd={() => setPrev(null)}
        />
        {video && (
          <button className="cs-play" onClick={() => setPlaying(true)} onPointerDown={(e) => e.stopPropagation()} aria-label={`Assistir ao reel da campanha ${brand}`}>
            <span className="cs-play-ring"><i className="ph-fill ph-play" /></span>
            <span className="cs-play-label">ASSISTIR REEL</span>
          </button>
        )}
        <span className="cs-badge tag tag-accent">CASE {pad2(idx + 1)} / {pad2(BRANDS.length)}</span>
        <button className="cs-open-m tag tag-accent" onClick={() => onOpen(brand)}>
          ABRIR CASE <i className="ph ph-arrow-up-right" />
        </button>
        <div className="cs-arrows">
          <button className="cs-arrow" onClick={() => go(idx - 1, -1)} aria-label="Case anterior"><i className="ph ph-caret-left" /></button>
          <button className="cs-arrow" onClick={() => go(idx + 1, 1)} aria-label="Próximo case"><i className="ph ph-caret-right" /></button>
        </div>
      </div>

      {/* Informações */}
      <div className="cs-info">
        <div key={idx} className="cs-text" aria-live="polite">
          <span className="cs-in cs-kicker" style={st(0)}>
            {brand.toUpperCase()} × ALLBLACK · {D.caseFormats[brand] || "FORMATO A CONFIRMAR"}
          </span>
          <h4 className="cs-in cs-title" style={st(1)}>CAMPANHA {brand.toUpperCase()}</h4>
          {info.desc && <p className="cs-in cs-desc" style={st(2)}>{info.desc}</p>}
          <div className="cs-in cs-tags" style={st(3)}>
            {info.tags.map((t: string) => <span key={t} className="tag tag-neutral">{t}</span>)}
          </div>
          <div className="cs-in cs-metrics" style={st(4)}>
            <div className="cs-views">
              <span className="cs-label">VISUALIZAÇÕES</span>
              <span className="cs-views-n">{stats[0]?.a || "— —"}</span>
            </div>
            <div className="cs-stats">
              {stats.slice(1).map((x, i) => (
                <div key={x.b} className="cs-stat">
                  <span className="cs-stat-n"><i className={`ph ${ICONS[i]}`} />{x.a}</span>
                  <span className="cs-label">{x.b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cs-foot">
          <div className="cs-thumbs" ref={thumbs} role="tablist" aria-label="Escolher case">
            {BRANDS.map((b, i) => (
              <button
                key={b}
                role="tab"
                aria-selected={i === idx}
                aria-label={`Ver case ${b}`}
                className="cs-thumb"
                onClick={() => go(i)}
              >
                <span className="cs-thumb-img" style={{ backgroundImage: photo(i) }} />
                <span className="cs-thumb-name">{b}</span>
              </button>
            ))}
          </div>
          <button className="cs-open btn btn-primary" onClick={() => onOpen(brand)}>
            ABRIR CASE <i className="ph ph-arrow-up-right" />
          </button>
        </div>
      </div>
      {playing && video && (
        <VideoLightbox src={video} poster={D.casePhotos[brand]} title={`Campanha ${brand}`} onClose={() => setPlaying(false)} />
      )}
    </div>
  );
}
