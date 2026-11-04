/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";

export function About({ v }: { v: V }) {
  return (
    <>
      {/* 02 SOBRE */}
      <section id="sobre" data-section="sobre" style={{padding:"clamp(72px,10cqw,150px) clamp(20px,5cqw,72px)",background:"linear-gradient(to right,transparent,var(--color-divider) 48px,var(--color-divider) calc(100% - 48px),transparent) top/100% 1px no-repeat"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,340px),1fr))",gap:"clamp(32px,6cqw,96px)",alignItems:"center"}}>
          <div data-reveal="0" style={{position:"relative"}}>
            <div style={{position:"relative",aspectRatio:"4/5",background:"linear-gradient(160deg,#1a1a1a,#0d0d0d)"}}>
              <img src="/assets/joao-civic-g10-traseira.png" alt="João Pedro encostado no Civic G10 preto fosco, com o logo ALLBLACK na parede ao fundo" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"50% 50%"}} />
            </div>
            <div style={{position:"absolute",top:"-1px",left:"-1px",width:"28px",height:"28px",borderTop:"2px solid var(--color-accent)",borderLeft:"2px solid var(--color-accent)",pointerEvents:"none"}}></div>
            <div style={{position:"absolute",bottom:"-1px",right:"-1px",width:"28px",height:"28px",borderBottom:"2px solid var(--color-accent)",borderRight:"2px solid var(--color-accent)",pointerEvents:"none"}}></div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"22px"}}>
            <div data-reveal="0" style={{display:"flex",alignItems:"center",gap:"12px",fontFamily:"var(--font-mono)",fontSize:"12px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
              <span style={{display:"inline-block",padding:"2px 8px",background:"#F5C400",color:"#090909",transform:"skewX(-12deg)",fontWeight:"500"}}>
                01
              </span>
              <span style={{width:"32px",height:"1px",background:"var(--color-accent)"}}></span>
              <span>
                SOBRE O CRIADOR
              </span>
            </div>
            <h2 data-reveal="100" style={{margin:"0",fontFamily:"var(--font-display)",fontWeight:"400",fontSize:"clamp(52px,7.4cqw,118px)",lineHeight:".86",letterSpacing:"0"}}>
              JOÃO PEDRO.
              <br />
              <span style={{color:"var(--color-neutral-600)"}}>
                A GARAGEM
              </span>
              <br />
              É O ESTÚDIO.
            </h2>
            <p data-reveal="200" style={{margin:"0",maxWidth:"540px",fontSize:"16px",lineHeight:"1.7",color:"var(--color-neutral-300)",textWrap:"pretty"}}>
              Carros, projetos, boas risadas e uma boa dose de personalidade. João Pedro construiu seu espaço na internet compartilhando muito mais do que sua paixão pelo universo automotivo: ele divide experiências, encara desafios e transforma situações do cotidiano em conteúdo.
            </p>
            <p data-reveal="250" style={{margin:"0",maxWidth:"540px",fontSize:"16px",lineHeight:"1.7",color:"var(--color-neutral-300)",textWrap:"pretty"}}>
              Com um jeito espontâneo e uma comunicação próxima da audiência, mistura entretenimento, lifestyle e cultura automotiva em uma presença digital que carrega sua própria identidade.
            </p>
            <p data-reveal="280" style={{margin:"0",maxWidth:"540px",fontSize:"18px",lineHeight:"1.5",fontWeight:"500",color:"var(--color-text)",textWrap:"pretty"}}>
              Um universo próprio, com espaço para diferentes histórias, experiências e marcas.
            </p>
            <div data-reveal="300" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",marginTop:"8px",borderTop:"1px solid var(--color-divider)"}}>
              {v.aboutSpecs.map((sp: any, _i7: number) => (
                <Fragment key={_i7}>
                  <div style={{display:"flex",flexDirection:"column",gap:"4px",padding:"14px 16px 14px 0",borderBottom:"1px solid var(--color-divider)"}}>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".16em",color:"var(--color-neutral-500)"}}>
                      {sp.k}
                    </span>
                    <span style={{fontSize:"15px",fontWeight:"500"}}>
                      {sp.v}
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
