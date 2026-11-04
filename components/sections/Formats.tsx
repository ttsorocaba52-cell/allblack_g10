/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";

export function Formats({ v }: { v: V }) {
  return (
    <>
      {/* 07 FORMATOS */}
      <section id="formatos" data-section="formatos" style={{padding:"clamp(72px,10cqw,150px) var(--gutter)",background:"var(--color-surface)"}}>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-end",gap:"24px",marginBottom:"clamp(32px,5cqw,64px)"}}>
          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            <div data-reveal="0" style={{display:"flex",alignItems:"center",gap:"12px",fontFamily:"var(--font-mono)",fontSize:"12px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
              <span style={{display:"inline-block",padding:"2px 8px",background:"#F5C400",color:"#090909",transform:"skewX(-12deg)",fontWeight:"500"}}>
                07
              </span>
              <span style={{width:"32px",height:"1px",background:"var(--color-accent)"}}></span>
              <span>
                PUBLICIDADE & FORMATOS
              </span>
            </div>
            <h2 data-reveal="100" style={{margin:"0",fontFamily:"var(--font-display)",fontWeight:"400",fontSize:"clamp(52px,8cqw,128px)",lineHeight:".86",letterSpacing:"0"}}>
              ESCOLHA
              <br />
              O SETUP.
            </h2>
          </div>
          <p data-reveal="200" style={{margin:"0",maxWidth:"380px",fontSize:"15px",lineHeight:"1.6",color:"var(--color-neutral-400)",textWrap:"pretty"}}>
            Pacotes de investimento por plataforma, combos e presença em eventos.
          </p>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"clamp(40px,5cqw,72px)"}}>
          {v.priceGroups.map((g: any, _i5: number) => (
            <Fragment key={_i5}>
              <div data-reveal="0" style={{display:"flex",flexDirection:"column",gap:"18px"}}>
                <div style={{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",gap:"10px",paddingBottom:"14px",borderBottom:"1px solid var(--color-divider)"}}>
                  <span style={{display:"flex",alignItems:"center",gap:"14px",fontFamily:"var(--font-display)",fontSize:"clamp(40px,4.4cqw,64px)",lineHeight:".9"}}>
                    <i className={`ph ${g.icon}`} style={{fontSize:"30px",color:"var(--color-accent)"}}></i>
                    {g.title}
                  </span>
                  <span style={{fontSize:"14px",color:"var(--color-neutral-400)"}}>
                    {g.desc}
                  </span>
                </div>
                <div style={{display:"grid",gridTemplateColumns:g.cols,gap:"14px",alignItems:"stretch"}}>
                  {g.items.map((it: any, _i9: number) => (
                    <Fragment key={_i9}>
                      <div className="hover-price" style={{position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",gap:"18px",padding:"clamp(22px,2.4cqw,30px)",borderRadius:"18px",border:`1px solid ${it.border}`,background:it.bg,boxShadow:it.shadow,transform:it.lift,transition:"transform .3s,box-shadow .3s,border-color .3s"}}>
                        <div aria-hidden="true" style={{position:"absolute",right:"-30%",bottom:"-40%",width:"90%",aspectRatio:"1",borderRadius:"50%",background:`radial-gradient(circle,rgba(245,196,0,${it.glow}),transparent 65%)`,pointerEvents:"none"}}></div>
                        <div style={{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px",minHeight:"26px"}}>
                          <span style={{whiteSpace:"nowrap",fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".14em",color:it.kickerColor}}>
                            {it.kicker}
                          </span>
                          {it.featured && (
                            <>
                              <span style={{padding:"5px 12px",borderRadius:"999px",background:"#F5C400",color:"#090909",fontFamily:"var(--font-mono)",fontSize:"10px",fontWeight:"500",letterSpacing:".14em"}}>
                                RECOMENDADO
                              </span>
                            </>
                          )}
                        </div>
                        <span style={{position:"relative",fontSize:"18px",fontWeight:"500",lineHeight:"1.3",minHeight:"2.6em",textWrap:"pretty"}}>
                          {it.t}
                        </span>
                        <div style={{position:"relative",display:"flex",alignItems:"baseline",gap:"6px"}}>
                          <span style={{fontFamily:"var(--font-display)",fontSize:"26px",lineHeight:"1",color:"var(--color-accent)"}}>
                            R$
                          </span>
                          <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(64px,6cqw,88px)",lineHeight:".85"}}>
                            {it.p}
                          </span>
                        </div>
                        <div style={{position:"relative",display:"flex",flexDirection:"column",gap:"10px",paddingTop:"16px",borderTop:"1px solid var(--color-divider)"}}>
                          <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
                            INCLUI
                          </span>
                          {it.inc.map((x: any, _i13: number) => (
                            <Fragment key={_i13}>
                              <span style={{display:"flex",alignItems:"center",gap:"10px",fontSize:"14px",color:"var(--color-neutral-300)"}}>
                                <i className="ph-fill ph-check-circle" style={{fontSize:"18px",color:"var(--color-accent)"}}></i>
                                {x}
                              </span>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <div data-reveal="0" style={{marginTop:"10px",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"18px",padding:"clamp(20px,2.6cqw,32px)",borderRadius:"var(--radius-lg)",border:"1px solid var(--color-accent-700)"}}>
          <span style={{display:"flex",alignItems:"center",gap:"14px",maxWidth:"640px",fontSize:"15px",lineHeight:"1.55",color:"var(--color-neutral-300)"}}>
            <i className="ph ph-sliders-horizontal" style={{fontSize:"26px",color:"var(--color-accent)",flex:"none"}}></i>
            Quer outro combo de posts fora destes pacotes? Fale com o João ou com a equipe para montar um formato sob medida.
          </span>
          <button className="btn btn-primary" onClick={v.goContact} style={{minHeight:"44px",padding:"0 18px",fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".14em"}}>
            MONTAR PACOTE
          </button>
        </div>
      </section>
      <div aria-hidden="true" style={{height:"12px",background:"repeating-linear-gradient(-45deg,#F5C400 0 16px,#090909 16px 32px)"}}></div>
    </>
  );
}
