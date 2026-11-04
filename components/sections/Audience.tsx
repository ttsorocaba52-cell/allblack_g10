/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";
import { PlatformBars } from "../interactive/PlatformBars";
import { FillBar } from "../interactive/FillBar";
import { CountUp } from "../interactive/CountUp";

export function Audience({ v }: { v: V }) {
  return (
    <>
      {/* 04 TIKTOK & FACEBOOK */}
      <section id="audiencia" data-section="audiencia" style={{padding:"clamp(72px,10cqw,150px) clamp(20px,5cqw,72px)"}}>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-end",gap:"24px",marginBottom:"clamp(32px,5cqw,64px)"}}>
          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            <div data-reveal="0" style={{display:"flex",alignItems:"center",gap:"12px",fontFamily:"var(--font-mono)",fontSize:"12px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
              <span style={{display:"inline-block",padding:"2px 8px",background:"#F5C400",color:"#090909",transform:"skewX(-12deg)",fontWeight:"500"}}>
                04
              </span>
              <span style={{width:"32px",height:"1px",background:"var(--color-accent)"}}></span>
              <span>
                TIKTOK & FACEBOOK
              </span>
            </div>
            <h2 data-reveal="100" style={{margin:"0",fontFamily:"var(--font-display)",fontWeight:"400",fontSize:"clamp(52px,8cqw,128px)",lineHeight:".86",letterSpacing:"0"}}>
              ONDE O CONTEÚDO
              <br />
              CONTINUA CIRCULANDO.
            </h2>
          </div>
          {v.showTags && (
            <>
              <div data-reveal="200" style={{display:"flex",flexDirection:"column",gap:"8px",fontSize:"12px",color:"var(--color-neutral-400)"}}>
                <span style={{display:"flex",alignItems:"center",gap:"8px"}}>
                  <span className="tag tag-accent" style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".14em"}}>
                    INSIGHTS
                  </span>
                  TikTok oficial · out/2026
                </span>
                <span style={{display:"flex",alignItems:"center",gap:"8px"}}>
                  <span className="tag tag-accent" style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".14em"}}>
                    BRIEFING
                  </span>
                  Informado pelo criador
                </span>
                <span style={{display:"flex",alignItems:"center",gap:"8px"}}>
                  <span className="tag tag-neutral" style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".14em"}}>
                    ILUSTRATIVO
                  </span>
                  Aguardando insights oficiais
                </span>
              </div>
            </>
          )}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"12px",fontSize:"13px",color:"var(--color-neutral-400)"}}>
          <i className="ph ph-hand-pointing" style={{fontSize:"18px",color:"var(--color-accent)"}}></i>
          Clique em uma rede para ver os números dela
        </div>
        <div role="tablist" aria-label="Plataformas" style={{display:"grid",gridTemplateColumns:v.tabCols,gap:"10px",marginBottom:"16px"}}>
          {v.platforms.map((p: any, _i5: number) => (
            <Fragment key={_i5}>
              <button className="hover-tab" role="tab" aria-selected={p.selected} onClick={p.open} style={{all:"unset",boxSizing:"border-box",cursor:"pointer",display:"flex",flexDirection:"column",gap:"14px",padding:"18px",minHeight:p.tileH,borderRadius:"var(--radius-md)",border:`1px solid ${p.border}`,background:p.bg,transition:"border-color .25s,background .25s,transform .25s"}}>
                <span style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
                  <span style={{display:"flex",alignItems:"center",gap:"10px",fontSize:"14px",fontWeight:"500"}}>
                    <i className={`ph ${p.icon}`} style={{fontSize:"20px",color:p.iconColor}}></i>
                    {p.name}
                  </span>
                  <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".12em",color:p.stateColor}}>
                    {p.state}
                  </span>
                </span>
                <span style={{marginTop:"auto",display:"flex",flexDirection:"column",gap:"2px"}}>
                  <span style={{fontFamily:"var(--font-display)",fontSize:p.tileSize,lineHeight:".95"}}>
                    <CountUp value={p.preview} />
                  </span>
                  <span style={{fontSize:"11px",color:"var(--color-neutral-500)"}}>
                    {p.previewLabel}
                  </span>
                </span>
              </button>
            </Fragment>
          ))}
        </div>
        <div role="tabpanel" aria-label={v.plat.name} style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,340px),1fr))",gap:"10px"}}>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"28px",padding:"clamp(20px,2.6cqw,36px)",borderRadius:"var(--radius-md)",background:"var(--color-bg)",boxShadow:"var(--shadow-sm)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"12px"}}>
              <span style={{fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".14em",color:"var(--color-neutral-400)"}}>
                {v.plat.handle}
              </span>
              {v.showTags && (
                <>
                  <span className={`tag ${v.plat.headTag}`} style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".14em"}}>
                    {v.plat.headTagText}
                  </span>
                </>
              )}
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
              <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(84px,10cqw,160px)",lineHeight:".82"}}>
                <CountUp value={v.plat.headValue} />
              </span>
              <span style={{fontSize:"15px",color:"var(--color-neutral-300)"}}>
                {v.plat.headLabel}
              </span>
              <span style={{maxWidth:"460px",marginTop:"8px",fontSize:"14px",lineHeight:"1.55",color:"var(--color-neutral-400)",textWrap:"pretty"}}>
                {v.plat.summary}
              </span>
            </div>
            <PlatformBars key={v.plat.id} id={v.plat.id} label={v.plat.chartLabel} chart={v.plat.chart} />
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:"10px"}}>
            {v.platMetrics.map((m: any, _i6: number) => (
              <Fragment key={_i6}>
                <div className="spot card hover-ring-muted-lift" style={{padding:"20px",gap:"14px",background:"var(--color-bg)",boxShadow:"var(--shadow-sm)",transition:"box-shadow .25s,transform .25s"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"}}>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
                      {m.period}
                    </span>
                    {v.showTags && (
                      <>
                        <span className={`tag ${m.tagClass}`} style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".14em",padding:"2px 7px"}}>
                          {m.tagText}
                        </span>
                      </>
                    )}
                  </div>
                  <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(40px,4cqw,56px)",lineHeight:".9"}}>
                    <CountUp value={m.v} />
                  </span>
                  <span style={{fontSize:"15px",fontWeight:"500",lineHeight:"1.3"}}>
                    {m.label}
                  </span>
                  <span style={{fontSize:"13px",color:"var(--color-neutral-400)",lineHeight:"1.45",textWrap:"pretty"}}>
                    {m.explain}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",gap:"12px",margin:"clamp(40px,5cqw,72px) 0 16px"}}>
          <h3 style={{margin:"0",fontFamily:"var(--font-display)",fontWeight:"400",fontSize:"clamp(36px,4cqw,56px)",letterSpacing:".02em"}}>
            TIKTOK · RAIO-X DO PÚBLICO
          </h3>
          <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-accent-400)"}}>
            INSIGHTS OFICIAIS · 1–28 OUT 2026 · PICO: QUARTA, 18H–19H
          </span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"10px"}}>
          {v.ttBreakdowns.map((b: any, _i5: number) => (
            <Fragment key={_i5}>
              <div className="spot card" data-reveal="0" style={{padding:"22px",gap:"14px",background:"var(--color-bg)",boxShadow:"var(--shadow-sm)"}}>
                <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
                  {b.title}
                </span>
                {b.rows.map((r: any, _i8: number) => (
                  <Fragment key={_i8}>
                    <div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
                      <div style={{display:"flex",justifyContent:"space-between",gap:"12px",fontSize:"13px"}}>
                        <span style={{color:"var(--color-neutral-300)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                          {r.k}
                        </span>
                        <span style={{fontFamily:"var(--font-mono)",fontSize:"12px"}}>
                          {r.v}
                        </span>
                      </div>
                      <div style={{height:"4px",background:"var(--color-neutral-800)"}}>
                        <FillBar w={r.w} c={r.c} />
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
