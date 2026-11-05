"use client";

import Link from "next/link";
import { useRef } from "react";
import { DATA } from "@/lib/data";
import { useMediaKit } from "./useMediaKit";
import { CountUp } from "./interactive/CountUp";
import { Instagram } from "./sections/Instagram";
import { InstagramAudience } from "./sections/InstagramAudience";
import { Stories } from "./sections/Stories";
import { YouTube } from "./sections/YouTube";
import { Audience } from "./sections/Audience";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const D: any = DATA;

const TABS = [
  { id: "instagram", label: "Instagram", icon: "ph-instagram-logo" },
  { id: "stories", label: "Stories", icon: "ph-circle-dashed" },
  { id: "youtube", label: "YouTube", icon: "ph-youtube-logo" },
  { id: "audiencia", label: "TikTok & FB", icon: "ph-tiktok-logo" },
];

/**
 * Página /metricas: só as métricas do mídia kit, para a bio do Instagram e para marcas.
 * Usa o mesmo hook (useMediaKit), os mesmos dados (lib/data.ts) e as mesmas seções da página principal.
 */
export function MetricsPage() {
  const v = useMediaKit({ cinematicIntro: false, showDataTags: true });
  const headRef = useRef<HTMLElement>(null);
  const whatsapp = D.contacts.find((c: { label: string }) => c.label === "WHATSAPP");
  const goSection = (id: string) => (e: React.MouseEvent) => v.goTo(id, e, (headRef.current?.offsetHeight ?? 64) + 8);

  return (
    <div ref={v.siteRef} className="site mx" style={{ containerType: "inline-size", background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)", overflowX: "clip" }}>
      <header ref={headRef} className="mx-head">
        <Link href="/" className="mx-logo" aria-label="ALLBLACK — mídia kit completo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-allblack-g10.png" alt="ALLBLACK" />
        </Link>
        <nav className="mx-tabs" aria-label="Métricas por rede">
          {TABS.map((t) => (
            <a key={t.id} href={`#${t.id}`} onClick={goSection(t.id)} aria-current={v.active === t.id ? "true" : undefined} className="mx-tab">
              <i className={`ph ${t.icon}`} />{t.label}
            </a>
          ))}
        </nav>
        <Link href="/" className="mx-kit">Mídia kit completo <i className="ph ph-arrow-up-right" /></Link>
      </header>

      <section id="top" data-section="top" className="mx-intro">
        <div className="mx-intro-text">
          <span className="mx-kicker"><span className="mx-dot" />MÉTRICAS · @ALLBLACK_G10</span>
          <h1 className="mx-title">OS NÚMEROS<br />DA ALLBLACK<span style={{ color: "var(--color-accent)" }}>.</span></h1>
          <p className="mx-lead">Instagram, YouTube, TikTok e Facebook em um só lugar. Insights oficiais das plataformas (out/2026), atualizados no mídia kit.</p>
        </div>
        <div className="mx-summary">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {v.heroStats.map((s: any) => (
            <div key={s.l} className="mx-stat">
              <span className="mx-stat-n"><CountUp value={s.v} /></span>
              <span className="mx-stat-l">{s.l}</span>
              <span className="mx-stat-src">{s.src}</span>
            </div>
          ))}
        </div>
      </section>

      <Instagram v={v} />
      <InstagramAudience v={v} />
      <Stories v={v} />
      <YouTube v={v} />
      <Audience v={v} />

      <footer className="mx-foot">
        <div className="mx-foot-text">
          <span className="mx-foot-title">SUA MARCA NESSES NÚMEROS<span style={{ color: "var(--color-accent)" }}>.</span></span>
          <span className="mx-foot-sub">Fale com a equipe ou veja cases, pacotes e formatos no mídia kit completo.</span>
        </div>
        <div className="mx-foot-actions">
          {whatsapp && (
            <a className="btn btn-primary mx-btn" href={whatsapp.href} target="_blank" rel="noopener">
              <i className="ph ph-whatsapp-logo" /> FALAR NO WHATSAPP
            </a>
          )}
          <Link className="btn btn-secondary mx-btn" href="/">VER MÍDIA KIT COMPLETO <i className="ph ph-arrow-up-right" /></Link>
        </div>
        <span className="mx-copy">© 2026 ALLBLACK · @ALLBLACK_G10</span>
      </footer>
    </div>
  );
}
