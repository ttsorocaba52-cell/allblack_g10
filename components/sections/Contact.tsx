/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";

export function Contact({ v }: { v: V }) {
  return (
    <>
      {/* 08 CONTATO */}
      <section id="contato" data-section="contato" style={{position:"relative",minHeight:"clamp(640px,52cqw,820px)",display:"flex",alignItems:"flex-end",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:"0",background:"radial-gradient(ellipse 60% 70% at 70% 40%,#1d1d1d,#090909 75%)"}}>
          <div role="img" aria-label="João Pedro no Civic G10 preto fosco, em garagem com luzes hexagonais" style={{position:"absolute",inset:"0",backgroundImage:"url(/assets/contato-joao-web.jpg)",backgroundSize:"cover",backgroundPosition:"right 42%"}}></div>
        </div>
        <div style={{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(to top,#090909 10%,rgba(9,9,9,.6) 55%,rgba(9,9,9,.25))"}}></div>
        <div style={{position:"relative",zIndex:"2",pointerEvents:"none",width:"100%",padding:"120px clamp(20px,5cqw,72px) 40px",display:"flex",flexDirection:"column",gap:"28px"}}>
          <div data-reveal="0" style={{display:"flex",alignItems:"center",gap:"12px",fontFamily:"var(--font-mono)",fontSize:"12px",letterSpacing:".14em",color:"var(--color-neutral-400)"}}>
            <span style={{display:"inline-block",padding:"2px 8px",background:"#F5C400",color:"#090909",transform:"skewX(-12deg)",fontWeight:"500"}}>
              08
            </span>
            <span style={{width:"32px",height:"1px",background:"var(--color-accent)"}}></span>
            <span>
              CONTATO COMERCIAL
            </span>
          </div>
          <h2 data-reveal="100" style={{margin:"0",fontFamily:"var(--font-display)",fontWeight:"400",fontSize:"clamp(64px,11cqw,180px)",lineHeight:".84",letterSpacing:"0"}}>
            SUA MARCA.
            <br />
            <span style={{color:"var(--color-accent)"}}>
              NOSSO PRÓXIMO
            </span>
            {" "}PROJETO.
          </h2>
          <div data-reveal="200" style={{display:"flex",flexWrap:"wrap",gap:"10px",pointerEvents:"auto"}}>
            {v.contacts.map((c: any, _i6: number) => (
              <Fragment key={_i6}>
                <a className={`btn ${c.cls}`} href={c.href} target="_blank" rel="noopener" style={{minHeight:"52px",padding:"0 20px",gap:"10px",fontFamily:"var(--font-mono)",fontSize:"12px",letterSpacing:".12em",background:"rgba(9,9,9,.55)"}}>
                  <i className={`ph ${c.icon}`} style={{fontSize:"18px"}}></i>
                  {c.label}
                  <span style={{fontSize:"9px",color:"var(--color-neutral-500)",letterSpacing:".1em"}}>
                    {c.tmp}
                  </span>
                </a>
              </Fragment>
            ))}
          </div>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:"12px",paddingTop:"24px",marginTop:"24px",borderTop:"1px solid var(--color-divider)",fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".12em",color:"var(--color-neutral-500)"}}>
            <span>
              © 2026 ALLBLACK · @ALLBLACK_G10
            </span>
            <span>
              PROPOSTA CONCEITUAL · FOTOS E MÉTRICAS DEMONSTRATIVAS
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
