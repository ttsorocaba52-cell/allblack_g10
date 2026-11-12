"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { DATA } from "@/lib/data";
import { onReady } from "@/lib/ready";

// Os dados misturam tuplas e objetos; tipamos de forma solta para manter a lógica idêntica ao protótipo.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const D: any = DATA;

type Modal = Record<string, any> | null; // eslint-disable-line @typescript-eslint/no-explicit-any
type Ev = ReactMouseEvent | undefined;

const EXPLAIN: Record<string, string> = {
  "REACH-90": "Pessoas diferentes que viram pelo menos um conteúdo.",
  "INT-90": "Curtidas, comentários, compartilhamentos e salvamentos.",
  "FOL-90": "Quanto o perfil cresceu, já descontando quem saiu.",
  "VW-90": "Todas as vezes que um conteúdo foi assistido.",
  "WATCH-28": "Tempo total que o público passou assistindo.",
  "SUBS-28": "Pessoas que passaram a seguir o canal.",
  "AUD-M": "Pessoas diferentes que assistiram no mês.",
  "TOP-90": "O vídeo curto com mais visualizações.",
  VIEWERS: "Pessoas diferentes que assistiram aos vídeos.",
  NEW: "Quem assistiu pela primeira vez.",
  LIKES: "Total de curtidas nos vídeos.",
  PROFILE: "Quem saiu do vídeo e foi conhecer o perfil.",
  RCH: "Pessoas diferentes alcançadas. Número ilustrativo.",
  "VW-M": "Visualizações no mês. Número ilustrativo.",
  ENG: "Interação em relação ao alcance. Número ilustrativo.",
  SHR: "Vezes que o conteúdo foi compartilhado. Número ilustrativo.",
};

const SUMMARY: Record<string, string> = {
  instagram: "O canal principal: 1 milhão de seguidores e 106 milhões de visualizações nos últimos 90 dias.",
  youtube: "Onde o público passa mais tempo: 286 mil horas assistidas em 28 dias, entre vídeos longos e Shorts.",
  tiktok: "Onde a ALLBLACK chega em gente nova: 536 mil pessoas assistiram pela primeira vez em 28 dias.",
  facebook: "Distribuição complementar dos vídeos. Números ilustrativos, aguardando dados oficiais.",
};

const pad2 = (n: number) => String(n).padStart(2, "0");
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

export type MediaKitOptions = {
  /** Barras pretas que se abrem no hero ao carregar. */
  cinematicIntro?: boolean;
  /** Etiquetas INSIGHTS / BRIEFING / ILUSTRATIVO nos números. */
  showDataTags?: boolean;
  /** Esconde preços e pacotes (seção Formatos, painel de pacotes e item do menu). Usado em /kit. */
  hidePricing?: boolean;
};

export function useMediaKit({ cinematicIntro = true, showDataTags = true, hidePricing = false }: MediaKitOptions = {}) {
  const [platform, setPlatform] = useState("tiktok");
  const [modal, setModal] = useState<Modal>(null);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("top");
  const [narrow, setNarrow] = useState(false);
  const [intro, setIntro] = useState(false);
  const [siteW, setSiteW] = useState<number | undefined>(undefined);
  const siteRef = useRef<HTMLDivElement>(null);

  // Escape fecha o modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModal(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Abertura cinematográfica
  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined;
    const off = onReady(() => { t = setTimeout(() => setIntro(true), 150); });
    return () => { off(); if (t) clearTimeout(t); };
  }, []);

  // Largura do site, animações de entrada e seção ativa no menu
  useEffect(() => {
    const site = siteRef.current;
    if (!site) return;
    const ro = new ResizeObserver((es) => {
      const w = es[0].contentRect.width;
      setSiteW((prev) => (Math.abs((prev || 0) - w) > 20 ? w : prev));
      setNarrow((prev) => {
        const n = w < 1180;
        if (n !== prev) setMenu(false);
        return n;
      });
    });
    ro.observe(site);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        el.style.opacity = "1";
        el.style.transform = "none";
        io.unobserve(el);
      }),
      { threshold: 0.12 },
    );
    const pending: HTMLElement[] = [];
    site.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (reduce || el.dataset.rv) return;
      el.dataset.rv = "1";
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      const d = el.dataset.reveal;
      el.style.transition =
        `opacity .9s cubic-bezier(.2,.7,.2,1) ${d}ms, transform .9s cubic-bezier(.2,.7,.2,1) ${d}ms` +
        (el.style.transition ? "," + el.style.transition : "");
      pending.push(el);
    });
    const offReady = onReady(() => pending.forEach((el) => io.observe(el)));

    const spy = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.section || "top"); }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    site.querySelectorAll("[data-section]").forEach((el) => spy.observe(el));

    return () => { ro.disconnect(); io.disconnect(); spy.disconnect(); offReady(); };
  }, []);

  const go = useCallback((id: string, e?: Ev, offset?: number) => {
    e?.preventDefault?.();
    setMenu(false);
    const el = siteRef.current?.querySelector("#" + id);
    if (!el) return;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    const off = offset ?? (id === "top" ? 0 : 64);
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - off, behavior });
  }, []);

  const openCase = (brand: string) => {
    setModal({
      kicker: "CASE · " + brand.toUpperCase() + " × ALLBLACK",
      title: "CAMPANHA " + brand.toUpperCase(),
      slotId: "modal-case-" + slug(brand),
      photo: D.casePhotos[brand], photoPos: "center 30%", photoFilter: "none",
      placeholder: "Imagem da campanha " + brand,
      body: "Descrição do conteúdo, objetivo da campanha e entregas realizadas, a preencher com informações oficiais da marca e do criador. Nenhum resultado é exibido até a confirmação dos dados reais.",
      specs: [{ k: "MARCA", v: brand }, { k: "FORMATO", v: "A confirmar" }, { k: "PLATAFORMA", v: "A confirmar" }, { k: "PERÍODO", v: "A confirmar" }],
      chipsLabel: "MÉTRICAS OFICIAIS",
      chips: D.caseStats[brand] || D.caseMetricSlots.map((m: string) => ({ a: "— —", b: m })),
      note: D.caseStats[brand] ? "FONTE: INSTAGRAM · REEL PUBLICADO" : "RESULTADOS AGUARDANDO DADOS REAIS",
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openProject = (p: any) => {
    setModal({
      kicker: "PROJETO " + p.num + " · YOUTUBE", title: p.title, slotId: "modal-" + p.slotId,
      placeholder: p.placeholder, photo: p.photo, photoPos: p.photoPos, photoFilter: p.photoFilter,
      body: p.body, specs: p.specs, chipsLabel: p.chipsLabel, chips: p.chips, note: "COTAS DE PATROCÍNIO SOB CONSULTA",
    });
  };

  const compact = narrow;
  const showTags = showDataTags;
  const W = siteW || 1400;

  const plat = D.platforms.find((p: { id: string }) => p.id === platform);
  const tag = (real: boolean | string) => ({
    tagClass: real ? "tag-accent" : "tag-neutral",
    tagText: real === "brief" ? "BRIEFING" : real ? "INSIGHTS" : "ILUSTRATIVO",
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bars = (b: any, color: (k: string, n: number, j: number) => string, max = b.max) => ({
    title: b.title,
    rows: b.rows.map(([k, val, n]: [string, string, number], j: number) => ({ k, v: val, w: ((n / max) * 100).toFixed(1) + "%", c: color(k, n, j) })),
  });

  return {
    siteRef,
    compact, wide: !compact, showTags,
    menuOpen: compact && menu, menuExpanded: menu, menuIcon: menu ? "ph-x" : "ph-list",
    toggleMenu: () => setMenu((m) => !m),
    hidePricing,
    navItems: D.nav.filter((n: { id: string }) => !(hidePricing && n.id === "formatos")).map((n: { id: string }) => ({ ...n, current: active === n.id ? ("page" as const) : undefined, go: (e: Ev) => go(n.id, e) })),
    goTop: (e: Ev) => go("top", e), goAbout: (e: Ev) => go("sobre", e), goContact: (e: Ev) => go("contato", e),
    /** Rola até qualquer seção pelo id (usado pela página /metricas). */
    goTo: go, active,
    barH: cinematicIntro && !intro ? "13%" : "0%",
    heroStats: D.heroStats, aboutSpecs: D.aboutSpecs,
    tabCols: "repeat(2,minmax(0,1fr))",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    platforms: D.platforms.filter((p: any) => p.id === "tiktok" || p.id === "facebook").map((p: any) => {
      const sel = p.id === platform;
      return {
        ...p, state: sel ? "● VENDO AGORA" : "VER DADOS →", stateColor: sel ? "var(--color-accent)" : "var(--color-neutral-500)",
        selected: sel, open: () => setPlatform(p.id),
        border: sel ? "var(--color-accent)" : "var(--color-divider)", bg: sel ? "color-mix(in srgb, #F5C400 9%, #090909)" : "#090909",
        iconColor: sel ? "var(--color-accent)" : "var(--color-neutral-400)", tileSize: !compact ? "52px" : "34px", tileH: !compact ? "150px" : "120px",
        preview: p.head.v, previewLabel: p.head.l,
      };
    }),
    plat: { ...plat, summary: SUMMARY[plat.id], headValue: plat.head.v, headLabel: plat.head.l, headTag: tag(plat.head.real).tagClass, headTagText: tag(plat.head.real).tagText },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    platMetrics: plat.metrics.map((m: any) => ({
      ...m, ...tag(m.real), label: m.l.split(" · ")[0],
      period: m.l.includes(" · ") ? m.l.split(" · ").slice(1).join(" · ").toUpperCase().replace(/^(\d+ DIAS)$/, "ÚLTIMOS $1") : "TOTAL",
      explain: EXPLAIN[m.code] || "",
    })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    storyFrames: D.storyFrames.map((f: any) => ({ ...f, segs: [1, 2, 3].map((k) => ({ c: k <= f.on ? "#F2F0EB" : "rgba(242,240,235,.3)" })) })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    storyCards: D.storyCards.map((c: any) => ({ ...c, srcColor: c.real ? "var(--color-accent-400)" : "var(--color-neutral-500)" })),
    storyWhy: D.storyWhy,
    openCase,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    projects: D.projects.map((p: any) => ({ ...p, hasStats: !!p.stats, hasPhoto: !!p.photo, noPhoto: !p.photo, photoBg: p.photo ? "url(" + p.photo + ")" : "none", open: () => openProject(p) })),
    sponsorOps: D.sponsorOps, contacts: D.contacts,
    modalOpen: !!modal,
    modal: modal ? { ...modal, hasPhoto: !!modal.photo, noPhoto: !modal.photo, photoBg: modal.photo ? "url(" + modal.photo + ")" : "none", hasChips: !!(modal.chips && modal.chips.length) } : ({} as Record<string, any>), // eslint-disable-line @typescript-eslint/no-explicit-any
    modalPos: "fixed" as const,
    closeModal: () => setModal(null),
    stop: (e: ReactMouseEvent) => e.stopPropagation(),
    modalCta: () => { setModal(null); setTimeout(() => go("contato"), 50); },
    igBreakdowns: D.ig.breakdowns.map((b: { title: string; rows: [string, string, number][]; max: number }) => {
      const gender = b.title.startsWith("GÊNERO");
      const top = Math.max(...b.rows.slice(0, gender ? 2 : 99).map((r) => r[2]));
      return bars(b, (k, n) => (n === top || (gender && k === "Brasil") ? "#F5C400" : "#6b6e73"), b.max === 100 ? 100 : b.max);
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    igReels: D.ig.reels.map((t: any, i: number) => ({ ...t, n: pad2(i + 1), nc: i === 0 ? "var(--color-accent)" : "var(--color-neutral-600)", w: ((t.n2 / 2.2) * 100).toFixed(0) + "%" })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ttBreakdowns: D.tt.breakdowns.map((b: any) => bars(b, (_k, _n, j) => (j === 0 ? "#F5C400" : "#6b6e73"))),
    igProfile: D.igProfile, igKpis: D.igKpis,
    ytChannel: [
      { icon: "ph-users-three", v: "453K", l: "Inscritos no canal", d: "453 MIL INSCRITOS" },
      { icon: "ph-play-circle", v: "369", l: "Vídeos publicados", d: "VÍDEOS LONGOS E SHORTS" },
      { icon: "ph-trend-up", v: "228,7M", l: "Visualizações totais", d: "228.730.213 VIEWS" },
    ],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    priceGroups: D.priceGroups.map((g: any) => {
      const n = g.items.length;
      const c = W < 640 ? 1 : W < 1100 ? (n === 4 || n === 2 ? 2 : n === 3 && W >= 900 ? 3 : 2) : n;
      return {
        ...g, cols: "repeat(" + c + ",minmax(0,1fr))",
        items: g.items.map(([t, p, inc, ft]: [string, string, string[], number?], i: number) => ({
          t, p, inc, featured: !!ft, kicker: g.n + " · " + pad2(i + 1), kickerColor: ft ? "var(--color-accent)" : "var(--color-neutral-500)",
          border: ft ? "#F5C400" : "#242424", bg: ft ? "linear-gradient(165deg,#1f1c10,#0d0d0b 70%)" : "linear-gradient(165deg,#191919,#0b0b0b 70%)",
          shadow: ft ? "0 0 0 1px rgba(245,196,0,.35),0 30px 70px rgba(0,0,0,.7),0 0 60px rgba(245,196,0,.08)" : "0 18px 40px rgba(0,0,0,.45)",
          lift: ft ? "translateY(-8px)" : "none", glow: ft ? ".22" : ".06",
        })),
      };
    }),
    igKpiCols: "repeat(" + (W < 640 ? 2 : 3) + ",minmax(0,1fr))",
    partnerCols: "repeat(" + (W < 640 ? 2 : 5) + ",minmax(0,1fr))",
    partners: D.partners.map(([name, handle, k]: [string, string, string]) => ({ name, handle, logoBg: "url(/assets/logos/" + k + ".png)" })),
    ytKpis: D.yt.kpis,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ytTop: D.yt.top.map((t: any, i: number) => ({ ...t, n: pad2(i + 1), nc: i === 0 ? "var(--color-accent)" : "var(--color-neutral-600)", w: ((t.n / 6.8) * 100).toFixed(0) + "%" })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ytBreakdowns: D.yt.breakdowns.map((b: any) => bars(b, (_k, _n, j) => (j === 0 ? "#F5C400" : "#6b6e73"))),
  };
}

export type V = ReturnType<typeof useMediaKit>;
