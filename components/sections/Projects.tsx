/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";
import { Slot } from "../Slot";
import { CountUp } from "../interactive/CountUp";

export function Projects({ v }: { v: V }) {
  return (
    <>
      {/* 06 PROJETOS */}
      <section id="projetos" data-section="projetos" style={{padding:"clamp(72px,10cqw,150px) var(--gutter)"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"clamp(32px,5cqw,64px)"}}>
          <div data-reveal="0" style={{display:"flex",alignItems:"center",gap:"12px",fontFamily:"var(--font-mono)",fontSize:"12px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
            <span style={{display:"inline-block",padding:"2px 8px",background:"#F5C400",color:"#090909",transform:"skewX(-12deg)",fontWeight:"500"}}>
              06
            </span>
            <span style={{width:"32px",height:"1px",background:"var(--color-accent)"}}></span>
            <span>
              YOUTUBE PROJECTS
            </span>
          </div>
          <h2 data-reveal="100" style={{margin:"0",fontFamily:"var(--font-display)",fontWeight:"400",fontSize:"clamp(52px,8cqw,128px)",lineHeight:".86",letterSpacing:"0"}}>
            SÉRIES QUE
            <br />
            VIRAM TEMPORADA.
          </h2>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"clamp(14px,2cqw,24px)"}}>
          {v.projects.map((p: any, _i5: number) => (
            <Fragment key={_i5}>
              <article className="hover-ring-lift" data-reveal="0" onClick={p.open} style={{cursor:"pointer",position:"relative",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,380px),1fr))",borderRadius:"var(--radius-lg)",overflow:"hidden",background:"var(--color-surface)",boxShadow:"var(--shadow-sm)",transition:"box-shadow .3s,transform .3s"}}>
                <div style={{position:"relative",aspectRatio:"16/9",background:"linear-gradient(160deg,#1c1c1c,#0a0a0a)"}}>
                  {p.hasPhoto && (
                    <>
                      <div role="img" aria-label={p.placeholder} style={{position:"absolute",inset:"0",backgroundImage:p.photoBg,backgroundSize:"cover",backgroundPosition:p.photoPos,filter:p.photoFilter}}></div>
                    </>
                  )}
                  {p.noPhoto && (
                    <>
                      <Slot placeholder={p.placeholder} />
                    </>
                  )}
                  <div style={{position:"absolute",left:"0",top:"0",padding:"16px 20px",pointerEvents:"none",fontFamily:"var(--font-display)",fontSize:"clamp(72px,9cqw,140px)",lineHeight:".8",color:"rgba(242,240,235,.9)",mixBlendMode:"difference"}}>
                    {p.num}
                  </div>
                </div>
                <div style={{padding:"clamp(22px,3cqw,44px)",display:"flex",flexDirection:"column",gap:"16px"}}>
                  <span style={{fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".14em",color:"var(--color-accent-400)"}}>
                    PROJETO {p.num} · YOUTUBE
                  </span>
                  <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(40px,4.8cqw,72px)",lineHeight:".88"}}>
                    {p.title}
                  </span>
                  <p style={{margin:"0",fontSize:"14px",lineHeight:"1.65",color:"var(--color-neutral-400)",textWrap:"pretty"}}>
                    {p.short}
                  </p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                    {p.tags.map((t: any, _i10: number) => (
                      <Fragment key={_i10}>
                        <span className="tag tag-neutral" style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".1em"}}>
                          {t}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                  {p.hasStats && (
                    <>
                      <div style={{display:"flex",flexDirection:"column",gap:"10px",paddingTop:"14px",borderTop:"1px solid var(--color-divider)"}}>
                        <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-accent-400)"}}>
                          {p.statsLabel}
                        </span>
                        <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"12px"}}>
                          {p.stats.map((st: any, _i13: number) => (
                            <Fragment key={_i13}>
                              <div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
                                <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(34px,3.4cqw,48px)",lineHeight:".95"}}>
                                  <CountUp value={st.v} />
                                </span>
                                <span className="stat-label" style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
                                  {st.l}
                                </span>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  <span style={{marginTop:"auto",display:"flex",alignItems:"center",gap:"8px",fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".14em"}}>
                    ABRIR APRESENTAÇÃO{" "}
                    <i className="ph ph-arrows-out-simple" style={{color:"var(--color-accent)"}}></i>
                  </span>
                </div>
              </article>
            </Fragment>
          ))}
        </div>
        <div data-reveal="0" style={{marginTop:"clamp(20px,3cqw,40px)",padding:"clamp(24px,3.4cqw,48px)",borderRadius:"var(--radius-lg)",border:"1px solid var(--color-accent-700)",background:"radial-gradient(ellipse at 0% 0%,rgba(245,196,0,.10),transparent 60%),var(--color-bg)",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",gap:"28px"}}>
          <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
            <span style={{fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".14em",color:"var(--color-accent-400)"}}>
              OPORTUNIDADES DE PATROCÍNIO
            </span>
            <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(40px,4.4cqw,64px)",lineHeight:".9"}}>
              SUA MARCA DENTRO DO PROJETO.
            </span>
            <button className="btn btn-primary" onClick={v.goContact} style={{alignSelf:"flex-start",minHeight:"44px",padding:"0 18px",fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".14em"}}>
              PATROCINAR UMA SÉRIE
            </button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,200px),1fr))",gap:"0 24px"}}>
            {v.sponsorOps.map((o: any, _i6: number) => (
              <Fragment key={_i6}>
                <div style={{display:"flex",gap:"12px",padding:"14px 0",borderBottom:"1px solid var(--color-divider)"}}>
                  <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",color:"var(--color-accent)",marginTop:"3px"}}>
                    {o.n}
                  </span>
                  <div style={{display:"flex",flexDirection:"column",gap:"3px"}}>
                    <span style={{fontSize:"14px",fontWeight:"500"}}>
                      {o.t}
                    </span>
                    <span style={{fontSize:"12px",lineHeight:"1.5",color:"var(--color-neutral-400)"}}>
                      {o.d}
                    </span>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
