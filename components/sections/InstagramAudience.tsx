/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";
import { FillBar } from "../interactive/FillBar";
import { CountUp } from "../interactive/CountUp";

/** Raio-X do público do Instagram (formato, faixa etária, gênero/países e reels mais vistos). */
export function InstagramAudience({ v }: { v: V }) {
  return (
    <>
      <section id="publico" data-section="instagram" style={{padding:"clamp(56px,7cqw,110px) var(--gutter)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",gap:"12px",margin:"0 0 16px"}}>
          <h3 style={{margin:"0",fontFamily:"var(--font-display)",fontWeight:"400",fontSize:"clamp(36px,4cqw,56px)",letterSpacing:".02em"}}>
            INSTAGRAM · RAIO-X DO PÚBLICO
          </h3>
          <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-accent-400)"}}>
            INSIGHTS OFICIAIS · 31 JUL – 28 OUT 2026
          </span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"10px"}}>
          {v.igBreakdowns.map((b: any, _i5: number) => (
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
        <div data-reveal="0" style={{marginTop:"10px",padding:"clamp(18px,2.4cqw,28px)",borderRadius:"var(--radius-md)",background:"var(--color-bg)",boxShadow:"var(--shadow-sm)",display:"flex",flexDirection:"column",gap:"6px"}}>
          <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"8px",fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)",marginBottom:"6px"}}>
            <span>
              REELS MAIS VISTOS · 30 DIAS
            </span>
            <span>
              VIEWS · CURTIDAS
            </span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",gap:"0 32px"}}>
            {v.igReels.map((t: any, _i6: number) => (
              <Fragment key={_i6}>
                <div className="metric-row" style={{display:"grid",gridTemplateColumns:"28px minmax(0,1fr) auto",gap:"14px",alignItems:"center",padding:"12px 0",borderBottom:"1px solid var(--color-divider)"}}>
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
                  <span style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"2px"}}>
                    <span className="metric-val metric-val-lg" style={{fontFamily:"var(--font-display)",fontSize:"28px",lineHeight:"1"}}>
                      <CountUp value={t.v} />
                    </span>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",color:"var(--color-neutral-500)"}}>
                      {t.likes} ♥
                    </span>
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
