/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";
import { DailyBars } from "../interactive/DailyBars";
import { FillBar } from "../interactive/FillBar";
import { CountUp } from "../interactive/CountUp";

export function YouTube({ v }: { v: V }) {
  return (
    <>
      {/* 03 YOUTUBE */}
      <section id="youtube" data-section="youtube" style={{padding:"clamp(72px,10cqw,150px) var(--gutter)",background:"var(--color-surface)"}}>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-end",gap:"24px",marginBottom:"clamp(32px,5cqw,64px)"}}>
          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            <div data-reveal="0" style={{display:"flex",alignItems:"center",gap:"12px",fontFamily:"var(--font-mono)",fontSize:"12px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
              <span style={{display:"inline-block",padding:"2px 8px",background:"#F5C400",color:"#090909",transform:"skewX(-12deg)",fontWeight:"500"}}>
                03
              </span>
              <span style={{width:"32px",height:"1px",background:"var(--color-accent)"}}></span>
              <span>
                YOUTUBE
              </span>
            </div>
            <h2 data-reveal="100" style={{margin:"0",fontFamily:"var(--font-display)",fontWeight:"400",fontSize:"clamp(52px,8cqw,128px)",lineHeight:".86",letterSpacing:"0"}}>
              TEMPO DE TELA
              <br />
              É TEMPO DE MARCA
              <span style={{color:"var(--color-accent)"}}>
                .
              </span>
            </h2>
          </div>
          <div data-reveal="200" style={{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-sm)",fontSize:"13px",color:"var(--color-neutral-300)"}}>
            <span className="tag tag-accent" style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".14em"}}>
              INSIGHTS
            </span>
            YouTube Studio · 1–28 out 2026
          </div>
        </div>
        <div data-reveal="0" style={{display:"flex",flexDirection:"column",gap:"14px",marginBottom:"clamp(32px,4cqw,56px)"}}>
          <span style={{fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".16em",color:"var(--color-accent-400)"}}>
            O CANAL · VISÃO GERAL
          </span>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,240px),1fr))",gap:"10px"}}>
            {v.ytChannel.map((c: any, _i6: number) => (
              <Fragment key={_i6}>
                <div style={{display:"flex",flexDirection:"column",gap:"10px",padding:"clamp(20px,2.6cqw,32px)",borderRadius:"var(--radius-md)",background:"var(--color-bg)",boxShadow:"var(--shadow-sm)"}}>
                  <i className={`ph ${c.icon}`} style={{fontSize:"26px",color:"var(--color-accent)"}}></i>
                  <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(64px,7.4cqw,120px)",lineHeight:".85"}}>
                    <CountUp value={c.v} />
                  </span>
                  <span style={{fontSize:"15px",color:"var(--color-neutral-300)"}}>
                    {c.l}
                  </span>
                  <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".12em",color:"var(--color-neutral-500)"}}>
                    {c.d}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <span style={{display:"block",marginBottom:"14px",fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".16em",color:"var(--color-accent-400)"}}>
          ÚLTIMOS 28 DIAS · EM DETALHE
        </span>
        <div data-reveal="0" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,180px),1fr))",borderTop:"2px solid var(--color-accent)",marginBottom:"10px"}}>
          {v.ytKpis.map((k: any, _i5: number) => (
            <Fragment key={_i5}>
              <div style={{padding:"22px 20px 22px 0",display:"flex",flexDirection:"column",gap:"6px",borderBottom:"1px solid var(--color-divider)"}}>
                <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
                  {k.code}
                </span>
                <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(48px,5cqw,76px)",lineHeight:".88"}}>
                  <CountUp value={k.v} />
                </span>
                <span style={{fontSize:"13px",color:"var(--color-neutral-400)"}}>
                  {k.l}
                </span>
                <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".1em",color:"var(--color-accent-400)"}}>
                  {k.d}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,420px),1fr))",gap:"10px",marginTop:"10px"}}>
          <div data-reveal="0" style={{padding:"clamp(18px,2.4cqw,28px)",borderRadius:"var(--radius-md)",background:"var(--color-bg)",boxShadow:"var(--shadow-sm)",display:"flex",flexDirection:"column",gap:"18px"}}>
            <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"8px",fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
              <span>
                VISUALIZAÇÕES DIÁRIAS · 1–28 OUT 2026
              </span>
              <span>
                TOTAL 25,1M
              </span>
            </div>
            <DailyBars />
            <div style={{display:"flex",gap:"18px",flexWrap:"wrap",fontSize:"12px",color:"var(--color-neutral-400)"}}>
              <span style={{display:"flex",alignItems:"center",gap:"8px"}}>
                <span style={{width:"10px",height:"10px",background:"var(--color-accent)"}}></span>
                Pico do período
              </span>
              <span style={{display:"flex",alignItems:"center",gap:"8px"}}>
                <span style={{width:"10px",height:"10px",background:"var(--color-neutral-700)"}}></span>
                Dia
              </span>
            </div>
          </div>
          <div data-reveal="100" style={{padding:"clamp(18px,2.4cqw,28px)",borderRadius:"var(--radius-md)",background:"var(--color-bg)",boxShadow:"var(--shadow-sm)",display:"flex",flexDirection:"column",gap:"14px"}}>
            <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
              SHORTS MAIS VISTOS · 90 DIAS
            </span>
            {v.ytTop.map((t: any, _i6: number) => (
              <Fragment key={_i6}>
                <div className="metric-row" style={{display:"grid",gridTemplateColumns:"28px minmax(0,1fr) auto",gap:"14px",alignItems:"center",padding:"10px 0",borderBottom:"1px solid var(--color-divider)"}}>
                  <span style={{fontFamily:"var(--font-display)",fontSize:"28px",lineHeight:"1",color:t.nc}}>
                    {t.n}
                  </span>
                  <div style={{display:"flex",flexDirection:"column",gap:"6px",minWidth:"0"}}>
                    <span style={{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                      {t.t}
                    </span>
                    <div style={{height:"3px",background:"var(--color-neutral-800)"}}>
                      <FillBar w={t.w} c={"var(--color-accent)"} />
                    </div>
                  </div>
                  <span className="metric-val metric-val-lg" style={{fontFamily:"var(--font-display)",fontSize:"26px",lineHeight:"1"}}>
                    <CountUp value={t.v} />
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"10px",marginTop:"10px"}}>
          {v.ytBreakdowns.map((b: any, _i5: number) => (
            <Fragment key={_i5}>
              <div className="card" data-reveal="0" style={{padding:"22px",gap:"14px",background:"var(--color-bg)",boxShadow:"var(--shadow-sm)"}}>
                <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
                  {b.title}
                </span>
                {b.rows.map((r: any, _i8: number) => (
                  <Fragment key={_i8}>
                    <div className="metric-row" style={{display:"flex",flexDirection:"column",gap:"6px"}}>
                      <div style={{display:"flex",justifyContent:"space-between",fontSize:"13px"}}>
                        <span className="metric-key" style={{color:"var(--color-neutral-300)"}}>
                          {r.k}
                        </span>
                        <span className="metric-val" style={{fontFamily:"var(--font-mono)",fontSize:"12px"}}>
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
