/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";
import { Slot } from "../Slot";

export function Campaigns({ v }: { v: V }) {
  return (
    <>
      {/* 05 CAMPANHAS */}
      <section id="marcas" data-section="marcas" style={{padding:"clamp(72px,10cqw,150px) clamp(20px,5cqw,72px)",background:"var(--color-surface)"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"clamp(32px,5cqw,64px)"}}>
          <div data-reveal="0" style={{display:"flex",alignItems:"center",gap:"12px",fontFamily:"var(--font-mono)",fontSize:"12px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
            <span style={{display:"inline-block",padding:"2px 8px",background:"#F5C400",color:"#090909",transform:"skewX(-12deg)",fontWeight:"500"}}>
              05
            </span>
            <span style={{width:"32px",height:"1px",background:"var(--color-accent)"}}></span>
            <span>
              CAMPANHAS
            </span>
          </div>
          <h2 data-reveal="100" style={{margin:"0",fontFamily:"var(--font-display)",fontWeight:"400",fontSize:"clamp(52px,8cqw,128px)",lineHeight:".86",letterSpacing:"0"}}>
            QUEM JÁ
            <br />
            ESTEVE NO GRID.
          </h2>
        </div>
        <div data-reveal="100" style={{display:"grid",gridTemplateColumns:v.partnerCols,borderTop:"1px solid var(--color-divider)",borderLeft:"1px solid var(--color-divider)"}}>
          {v.partners.map((b: any, _i5: number) => (
            <Fragment key={_i5}>
              <div className="hover-bg" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px",minHeight:"200px",padding:"24px 16px",borderRight:"1px solid var(--color-divider)",borderBottom:"1px solid var(--color-divider)",transition:"background .25s"}}>
                <div role="img" aria-label={b.name} style={{width:"clamp(84px,8cqw,112px)",aspectRatio:"1",borderRadius:"50%",backgroundImage:b.logoBg,backgroundSize:"cover",boxShadow:"0 10px 30px rgba(0,0,0,.5)"}}></div>
                <span style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"3px",textAlign:"center"}}>
                  <span style={{fontSize:"15px",fontWeight:"500"}}>
                    {b.name}
                  </span>
                  <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".08em",color:"var(--color-neutral-500)"}}>
                    {b.handle}
                  </span>
                </span>
              </div>
            </Fragment>
          ))}
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",gap:"12px",margin:"clamp(48px,6cqw,88px) 0 20px"}}>
          <h3 style={{margin:"0",fontFamily:"var(--font-display)",fontWeight:"400",fontSize:"clamp(36px,4cqw,56px)",letterSpacing:".02em"}}>
            CASES COMERCIAIS
          </h3>
          <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
            RESULTADOS A PREENCHER COM DADOS REAIS
          </span>
        </div>
        <div ref={v.featuredRef} className="hover-ring" data-reveal="0" onClick={v.featuredCase.open} style={{cursor:"pointer",display:"flex",flexWrap:"wrap",borderRadius:"var(--radius-lg)",overflow:"hidden",background:"var(--color-bg)",boxShadow:"var(--shadow-sm)",transition:"box-shadow .3s",scrollMarginTop:"88px"}}>
          <div style={{position:"relative",flex:"0 0 min(100%,380px)",aspectRatio:"9/16",background:"linear-gradient(160deg,#1c1c1c,#0b0b0b)",viewTransitionName:`case-${v.featuredCase.slug}`}}>
            <div role="img" aria-label={`Reel da campanha ${v.featuredCase.brand}`} style={{position:"absolute",inset:"0",backgroundImage:`url(${v.featuredCase.photo})`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
            <div style={{position:"absolute",left:"16px",top:"16px",pointerEvents:"none"}}>
              <span className="tag tag-accent" style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em"}}>
                CASE EM DESTAQUE
              </span>
            </div>
            <div style={{position:"absolute",right:"16px",bottom:"16px",width:"56px",height:"56px",borderRadius:"50%",border:"1px solid var(--color-text)",display:"grid",placeItems:"center",pointerEvents:"none",background:"rgba(9,9,9,.5)"}}>
              <i className="ph-fill ph-play" style={{fontSize:"20px"}}></i>
            </div>
          </div>
          <div style={{flex:"1 1 360px",minWidth:"0",padding:"clamp(22px,3cqw,40px)",display:"flex",flexDirection:"column",gap:"18px",viewTransitionName:"case-featured-info"}}>
            <span style={{fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".14em",color:"var(--color-accent-400)"}}>
              {v.featuredCase.kicker}
            </span>
            <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(40px,4.6cqw,68px)",lineHeight:".9"}}>
              CAMPANHA
              <br />
              {v.featuredCase.brand.toUpperCase()}
            </span>
            <p style={{margin:"0",maxWidth:"560px",fontSize:"15px",lineHeight:"1.65",color:"var(--color-neutral-300)",textWrap:"pretty"}}>
              {v.featuredCase.desc}
            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
              {v.featuredCase.tags.map((t: string) => (
                <span key={t} className="tag tag-neutral" style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".1em"}}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{marginTop:"auto",display:"flex",flexDirection:"column",gap:"14px"}}>
              <div style={{display:"flex",flexDirection:"column",gap:"4px",paddingTop:"18px",borderTop:"2px solid #F5C400"}}>
                <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
                  VISUALIZAÇÕES
                </span>
                <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(80px,9cqw,140px)",lineHeight:".85"}}>
                  {v.featuredCase.views}
                </span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",borderTop:"1px solid var(--color-divider)"}}>
                {v.featuredCase.stats.map((st: any) => (
                  <div key={st.b} style={{padding:"14px 10px 0 0",display:"flex",flexDirection:"column",gap:"4px"}}>
                    <span style={{display:"flex",alignItems:"center",gap:"8px",fontFamily:"var(--font-display)",fontSize:"clamp(34px,3.4cqw,48px)",lineHeight:"1"}}>
                      <i className={`ph ${st.icon}`} style={{fontSize:"20px",color:"var(--color-accent)"}}></i>
                      {st.a}
                    </span>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".12em",color:"var(--color-neutral-500)"}}>
                      {st.b}
                    </span>
                  </div>
                ))}
              </div>
              <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".12em",color:"var(--color-neutral-600)"}}>
                FONTE: INSTAGRAM · REEL PUBLICADO
              </span>
            </div>
            <span style={{display:"flex",alignItems:"center",gap:"8px",fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".14em",color:"var(--color-text)"}}>
              ABRIR CASE{" "}
              <i className="ph ph-arrow-right" style={{color:"var(--color-accent)"}}></i>
            </span>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,220px),1fr))",gap:"10px",marginTop:"10px"}}>
          {v.cases.map((c: any) => (
              <button key={c.brand} className="hover-ring-muted-lift-3" onClick={c.open} aria-label={`Colocar o case ${c.brand} em destaque`} style={{all:"unset",boxSizing:"border-box",cursor:"pointer",display:"flex",flexDirection:"column",borderRadius:"var(--radius-md)",overflow:"hidden",background:"var(--color-bg)",boxShadow:"var(--shadow-sm)",transition:"box-shadow .3s,transform .3s",viewTransitionName:`card-${c.slug}`}}>
                <div style={{position:"relative",aspectRatio:"9/16",background:"linear-gradient(160deg,#1a1a1a,#0b0b0b)",viewTransitionName:`case-${c.slug}`}}>
                  {c.hasPhoto && (
                    <>
                      <div role="img" aria-label={`Reel da campanha ${c.brand}`} style={{position:"absolute",inset:"0",backgroundImage:c.photoBg,backgroundSize:"cover",backgroundPosition:"center"}}></div>
                    </>
                  )}
                  {c.noPhoto && (
                    <>
                      <Slot placeholder={"Reel da campanha · 9:16"} />
                    </>
                  )}
                  <div style={{position:"absolute",right:"10px",top:"10px",pointerEvents:"none",display:"flex",alignItems:"center",gap:"6px",padding:"4px 8px",borderRadius:"4px",background:"rgba(9,9,9,.6)",fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".12em",color:"var(--color-text)"}}>
                    <i className="ph ph-film-reel" style={{fontSize:"12px",color:"var(--color-accent)"}}></i>
                    REEL
                  </div>
                </div>
                <div style={{padding:"16px",display:"flex",flexDirection:"column",gap:"6px"}}>
                  <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
                    {c.n} · {c.format}
                  </span>
                  <span style={{fontFamily:"var(--font-display)",fontSize:"30px",lineHeight:"1"}}>
                    {c.brand}
                  </span>
                  {c.hasStats && (
                    <>
                      <div style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:"10px 12px",marginTop:"6px",paddingTop:"12px",borderTop:"1px solid var(--color-divider)"}}>
                        {c.stats.map((st: any, _i12: number) => (
                          <Fragment key={_i12}>
                            <div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
                              <span style={{fontFamily:"var(--font-display)",fontSize:"28px",lineHeight:"1"}}>
                                {st.a}
                              </span>
                              <span style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".12em",color:"var(--color-neutral-500)"}}>
                                {st.b}
                              </span>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </>
                  )}
                  {c.noStats && (
                    <>
                      <span style={{fontSize:"12px",color:"var(--color-neutral-500)"}}>
                        Métricas aguardando dados oficiais
                      </span>
                    </>
                  )}
                </div>
              </button>
          ))}
        </div>
      </section>
    </>
  );
}
