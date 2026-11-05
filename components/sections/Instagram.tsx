/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";
import { CountUp } from "../interactive/CountUp";

export function Instagram({ v }: { v: V }) {
  return (
    <>
      {/* 02 INSTAGRAM */}
      <section id="instagram" data-section="instagram" style={{position:"relative",padding:"clamp(72px,10cqw,150px) var(--gutter)",overflow:"hidden"}}>
        <div aria-hidden="true" style={{position:"absolute",right:"-2cqw",top:"clamp(40px,6cqw,90px)",fontFamily:"var(--font-display)",fontSize:"clamp(200px,34cqw,560px)",lineHeight:".8",color:"transparent",WebkitTextStroke:"1px rgba(245,196,0,.16)",pointerEvents:"none",letterSpacing:"-.02em"}}>
          989K
        </div>
        <div style={{position:"relative",display:"flex",flexDirection:"column",gap:"16px",marginBottom:"clamp(32px,5cqw,64px)"}}>
          <div data-reveal="0" style={{display:"flex",alignItems:"center",gap:"12px",fontFamily:"var(--font-mono)",fontSize:"12px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
            <span style={{display:"inline-block",padding:"2px 8px",background:"#F5C400",color:"#090909",transform:"skewX(-12deg)",fontWeight:"500"}}>
              02
            </span>
            <span style={{width:"32px",height:"1px",background:"var(--color-accent)"}}></span>
            <span>
              INSTAGRAM
            </span>
          </div>
          <h2 data-reveal="100" style={{margin:"0",fontFamily:"var(--font-display)",fontWeight:"400",fontSize:"clamp(52px,8cqw,128px)",lineHeight:".86",letterSpacing:"0"}}>
            A PISTA
            <br />
            PRINCIPAL
            <span style={{color:"var(--color-accent)"}}>
              .
            </span>
          </h2>
        </div>
        <div style={{position:"relative",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,400px),1fr))",gap:"clamp(20px,3cqw,40px)",alignItems:"stretch"}}>
          <div data-reveal="0" style={{padding:"clamp(22px,3cqw,36px)",borderRadius:"var(--radius-lg)",background:"var(--color-surface)",boxShadow:"var(--shadow-sm)",display:"flex",flexDirection:"column",gap:"22px"}}>
            <div style={{display:"flex",alignItems:"center",gap:"clamp(16px,2.4cqw,28px)",flexWrap:"wrap"}}>
              <div style={{flex:"none",width:"clamp(96px,10cqw,136px)",aspectRatio:"1",borderRadius:"50%",padding:"4px",background:"conic-gradient(from 200deg,#F5C400,#090909 35%,#F5C400 70%,#c99f00)"}}>
                <img src="/assets/ig-avatar2.png" alt="Foto de perfil de João Pedro no Instagram" style={{width:"100%",height:"100%",borderRadius:"50%",objectFit:"cover",display:"block",border:"3px solid #141414",boxSizing:"border-box"}} />
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"6px",minWidth:"0"}}>
                <span style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"clamp(20px,2cqw,26px)",fontWeight:"500"}}>
                  @allblack_g10{" "}
                  <i className="ph-fill ph-seal-check" style={{color:"var(--color-accent)",fontSize:"22px"}} aria-label="Verificado"></i>
                </span>
                <span style={{fontSize:"14px",color:"var(--color-neutral-300)"}}>
                  João Pedro · Criador de conteúdo digital
                </span>
                <span style={{fontSize:"14px",color:"var(--color-neutral-400)"}}>
                  Carros e boas risadas · Civic EG placa preta
                </span>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",borderTop:"1px solid var(--color-divider)",borderBottom:"1px solid var(--color-divider)"}}>
              {v.igProfile.map((p: any, _i7: number) => (
                <Fragment key={_i7}>
                  <div style={{padding:"16px 12px 16px 0",display:"flex",flexDirection:"column",gap:"2px"}}>
                    <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(30px,3cqw,42px)",lineHeight:"1",color:p.c}}>
                      <CountUp value={p.v} />
                    </span>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
                      {p.l}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"10px",marginTop:"auto"}}>
              <a className="btn btn-primary" href="https://www.instagram.com/allblack_g10" target="_blank" rel="noopener" style={{minHeight:"44px",padding:"0 18px",gap:"8px",fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".14em"}}>
                <i className="ph ph-instagram-logo" style={{fontSize:"16px"}}></i>
                VER PERFIL
              </a>
              <a className="btn btn-secondary" href="https://linktr.ee/allblack_g10" target="_blank" rel="noopener" style={{minHeight:"44px",padding:"0 18px",gap:"8px",fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".14em"}}>
                <i className="ph ph-link-simple" style={{fontSize:"16px"}}></i>
                LINKTR.EE
              </a>
            </div>
          </div>
          <div data-reveal="100" style={{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"24px"}}>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              <span style={{fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".16em",color:"var(--color-accent-400)"}}>
                SEGUIDORES NO INSTAGRAM
              </span>
              <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(120px,17cqw,260px)",lineHeight:".8"}}>
                <CountUp value={"989K"} />
              </span>
              <span style={{display:"flex",alignItems:"center",gap:"12px",fontSize:"15px",color:"var(--color-neutral-300)"}}>
                <span style={{display:"inline-block",padding:"3px 10px",background:"#F5C400",color:"#090909",transform:"skewX(-12deg)",fontFamily:"var(--font-mono)",fontSize:"11px",fontWeight:"500",letterSpacing:".12em"}}>
                  RUMO A 1M
                </span>
                +3 milhões de seguidores somando todas as redes
              </span>
            </div>
            <div style={{display:"grid",gridTemplateColumns:v.igKpiCols,gap:"10px"}}>
              {v.igKpis.map((k: any, _i7: number) => (
                <Fragment key={_i7}>
                  <div className="card hover-ring" style={{padding:"16px",gap:"6px",background:"var(--color-surface)",boxShadow:"var(--shadow-sm)",transition:"box-shadow .25s"}}>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".14em",color:"var(--color-accent-400)"}}>
                      {k.p}
                    </span>
                    <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(36px,3.4cqw,50px)",lineHeight:".95"}}>
                      <CountUp value={k.v} />
                    </span>
                    <span style={{fontSize:"12px",lineHeight:"1.4",color:"var(--color-neutral-400)"}}>
                      {k.l}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
