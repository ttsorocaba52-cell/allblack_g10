"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DATA } from "@/lib/data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const D: any = DATA;
type Tab = "pacotes" | "parcerias";

/** Painel lateral com pacotes e modelos de parceria, para consultar sem rolar até o fim da página. */
function Drawer({ onClose, onContact }: { onClose: () => void; onContact: () => void }) {
  const [tab, setTab] = useState<Tab>("pacotes");
  const closeRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { e.stopPropagation(); onClose(); } };
    window.addEventListener("keydown", onKey, true);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { window.removeEventListener("keydown", onKey, true); document.body.style.overflow = overflow; };
  }, [onClose]);

  const pick = (t: Tab) => { setTab(t); bodyRef.current?.scrollTo({ top: 0 }); };

  return createPortal(
    <div className="pd" onClick={onClose}>
      <aside className="pd-panel" role="dialog" aria-modal="true" aria-label="Pacotes e modelos de parceria" onClick={(e) => e.stopPropagation()}>
        <header className="pd-head">
          <div className="pd-head-row">
            <span className="pd-kicker">ALLBLACK · MÍDIA KIT 2026</span>
            <button ref={closeRef} className="pd-close" onClick={onClose} aria-label="Fechar"><i className="ph ph-x" /></button>
          </div>
          <h3 className="pd-title">ESCOLHA O SETUP<span style={{ color: "var(--color-accent)" }}>.</span></h3>
          <div className="pd-tabs" role="tablist">
            <button role="tab" aria-selected={tab === "pacotes"} className="pd-tab" onClick={() => pick("pacotes")}>
              <i className="ph ph-tag" /> Pacotes
            </button>
            <button role="tab" aria-selected={tab === "parcerias"} className="pd-tab" onClick={() => pick("parcerias")}>
              <i className="ph ph-handshake" /> Modelos de parceria
            </button>
          </div>
        </header>

        <div className="pd-body" ref={bodyRef}>
          {tab === "pacotes" ? (
            <div key="pacotes" className="pd-pane">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {D.priceGroups.map((g: any) => (
                <section key={g.n} className="pd-group">
                  <div className="pd-group-head">
                    <span className="pd-group-title"><i className={`ph ${g.icon}`} />{g.title}</span>
                    <span className="pd-group-desc">{g.desc}</span>
                  </div>
                  <div className="pd-cards">
                    {g.items.map(([t, p, inc, ft]: [string, string, string[], number?]) => (
                      <div key={t} className={`pd-card${ft ? " is-featured" : ""}`}>
                        <div className="pd-card-top">
                          <span className="pd-card-name">{t}</span>
                          {ft ? <span className="pd-badge">RECOMENDADO</span> : null}
                        </div>
                        <span className="pd-price"><small>R$</small>{p}</span>
                        <ul className="pd-inc">
                          {inc.map((x) => <li key={x}><i className="ph-fill ph-check-circle" />{x}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div key="parcerias" className="pd-pane">
              <section className="pd-group">
                <div className="pd-group-head">
                  <span className="pd-group-title"><i className="ph ph-squares-four" />FORMATOS</span>
                  <span className="pd-group-desc">Como a marca entra no conteúdo.</span>
                </div>
                <div className="pd-list">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {D.formats.map((f: any) => (
                    <div key={f.n} className="pd-item">
                      <i className={`ph ${f.icon} pd-item-icon`} />
                      <div className="pd-item-body">
                        <span className="pd-item-top"><span className="pd-item-name">{f.title}</span><span className="pd-item-plat">{f.platform}</span></span>
                        <span className="pd-item-desc">{f.desc}</span>
                        <span className="pd-item-inc">{f.items.join(" · ")}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="pd-group">
                <div className="pd-group-head">
                  <span className="pd-group-title"><i className="ph ph-youtube-logo" />PATROCÍNIO DE SÉRIES</span>
                  <span className="pd-group-desc">Sua marca dentro dos projetos do canal.</span>
                </div>
                <div className="pd-list">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {D.sponsorOps.map((o: any) => (
                    <div key={o.n} className="pd-item">
                      <span className="pd-item-num">{o.n}</span>
                      <div className="pd-item-body">
                        <span className="pd-item-name">{o.t}</span>
                        <span className="pd-item-desc">{o.d}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>

        <footer className="pd-foot">
          <span className="pd-foot-text">Quer um formato sob medida? Fale com a equipe.</span>
          <button className="btn btn-primary pd-cta" onClick={() => { onClose(); setTimeout(onContact, 60); }}>
            FALAR COM A EQUIPE <i className="ph ph-arrow-right" />
          </button>
        </footer>
      </aside>
    </div>,
    document.body,
  );
}

/** Faixa com o botão que abre o painel de pacotes e parcerias. */
export function PackagesCta({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="pd-cta-bar" data-reveal="0">
        <span className="pd-cta-text">
          <i className="ph ph-tag" />
          <span><strong>Quer sua marca aqui?</strong> Veja os pacotes, preços e modelos de parceria.</span>
        </span>
        <button className="btn btn-primary pd-open" onClick={() => setOpen(true)} aria-haspopup="dialog">
          VER PACOTES E PARCERIAS <i className="ph ph-arrow-up-right" />
        </button>
      </div>
      {open && <Drawer onClose={() => setOpen(false)} onContact={onContact} />}
    </>
  );
}
