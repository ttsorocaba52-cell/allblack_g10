/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";
import { CountUp } from "../interactive/CountUp";
import { Ticker } from "../interactive/Ticker";
import { HeroButtons } from "../interactive/HeroButtons";

/** exploreLabel: texto do botão principal (a página /metricas usa outro). */
export function Hero({ v, exploreLabel }: { v: V; exploreLabel?: string }) {
  return (
    <>
      {/* 01 HERO */}
      <section id="top" data-section="top" style={{position:"relative",marginTop:"-72px",minHeight:"clamp(720px,60cqw,940px)",display:"flex",flexDirection:"column",justifyContent:"flex-end",overflow:"hidden"}}>
        <div className="hero-bg" style={{position:"absolute",inset:"0",background:"radial-gradient(ellipse 70% 60% at 70% 45%,#1c1c1c,#090909 75%)"}}>
          <picture>
            {/* Celular: banner vertical próprio */}
            <source media="(max-width: 767px)" srcSet="/assets/hero-mobile.webp" type="image/webp" />
            <img className="hero-img" src="/assets/hero-banner.png" alt="João Pedro com o Civic G10 preto" fetchPriority="high" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"right center"}} />
          </picture>
        </div>
        <div className="hero-shade" style={{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(to top,#090909 2%,rgba(9,9,9,.35) 22%,rgba(9,9,9,0) 45%),linear-gradient(to right,rgba(9,9,9,.55) 0%,rgba(9,9,9,0) 45%)"}}></div>
        <div style={{position:"absolute",inset:"0",pointerEvents:"none",backgroundImage:"linear-gradient(to right,rgba(242,240,235,.04) 1px,transparent 1px)",backgroundSize:"calc(100%/12) 100%"}}></div>
        <div className="hero-est" aria-hidden="true" style={{position:"absolute",right:"clamp(14px,2.4cqw,36px)",top:"120px",zIndex:"2",pointerEvents:"none",display:"flex",flexDirection:"column",alignItems:"center",gap:"14px"}}>
          <span style={{width:"1px",height:"90px",background:"#F5C400"}}></span>
          <span style={{writingMode:"vertical-rl",fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".3em",color:"var(--color-neutral-500)"}}>
            EST. G10, BR
          </span>
        </div>
        <div style={{position:"absolute",left:"0",right:"0",top:"0",height:v.barH,background:"#050505",zIndex:"5",pointerEvents:"none",transition:"height 1.4s cubic-bezier(.7,0,.2,1)"}}></div>
        <div style={{position:"absolute",left:"0",right:"0",bottom:"0",height:v.barH,background:"#050505",zIndex:"5",pointerEvents:"none",transition:"height 1.4s cubic-bezier(.7,0,.2,1)"}}></div>
        <div className="hero-content" style={{position:"relative",zIndex:"2",pointerEvents:"none",padding:"110px var(--gutter) 0",display:"flex",flexDirection:"column",gap:"clamp(24px,3cqw,40px)"}}>
          <div data-reveal="100" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:"12px",fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".16em",color:"var(--color-neutral-400)",textTransform:"uppercase"}}>
            <span style={{display:"flex",alignItems:"center",gap:"10px"}}>
              <span style={{width:"7px",height:"7px",borderRadius:"50%",background:"var(--color-accent)",animation:"ab-pulse 1.6s infinite"}}></span>
              Media Kit, Edição 2026
            </span>
            <span>
              @allblack_g10 · Brasil
            </span>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"space-between",gap:"32px"}}>
            <div style={{flex:"1 1 520px",minWidth:"0",display:"flex",flexDirection:"column",gap:"18px"}}>
              <div data-reveal="250" style={{display:"flex",alignItems:"center",gap:"12px",fontFamily:"var(--font-mono)",fontSize:"12px",letterSpacing:".16em",color:"var(--color-neutral-300)"}}>
                <span style={{width:"36px",height:"2px",background:"var(--color-accent)"}}></span>
                JOÃO PEDRO, CRIADOR AUTOMOTIVO
              </div>
              <h1 data-reveal="400" style={{margin:"0",lineHeight:"0"}}>
                <img src="/assets/logo-allblack-g10.png" alt="ALLBLACK G10" style={{display:"block",width:"clamp(240px,30cqw,480px)",height:"auto",imageRendering:"-webkit-optimize-contrast",filter:"drop-shadow(0 8px 30px rgba(0,0,0,.55))"}} />
              </h1>
              <div data-reveal="480" style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"14px"}}>
                <span style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"5px 12px",background:"#F5C400",color:"#090909",transform:"skewX(-12deg)",fontFamily:"var(--font-mono)",fontSize:"11px",fontWeight:"500",letterSpacing:".16em"}}>
                  JDM · CIVIC G10
                </span>
              </div>
              <div data-reveal="550" style={{display:"flex",alignItems:"center",gap:"14px",fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.6cqw,54px)",letterSpacing:".06em",lineHeight:"1"}}>
                <span style={{color:"var(--color-accent)"}}>
                  —
                </span>
                BEYOND THE ROAD
              </div>
              <p data-reveal="700" style={{maxWidth:"520px",margin:"4px 0 0",fontSize:"clamp(15px,1.25cqw,17px)",lineHeight:"1.6",color:"var(--color-neutral-300)",textWrap:"pretty"}}>
                Projetos de carros, modificações e entretenimento automotivo com o Civic G10 como símbolo. Uma comunidade que acompanha cada projeto, e um canal direto para marcas que querem estar dentro da garagem.
              </p>
              <div data-reveal="850" style={{display:"flex",flexWrap:"wrap",gap:"12px",marginTop:"8px",pointerEvents:"auto"}}>
                <HeroButtons onExplore={v.goAbout} onContact={v.goContact} exploreLabel={exploreLabel} />
              </div>
            </div>
          </div>
          <div data-reveal="1000" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",borderTop:"1px solid var(--color-divider)",marginBottom:"28px"}}>
            {v.heroStats.map((s: any, _i6: number) => (
              <Fragment key={_i6}>
                <div style={{padding:"18px 18px 4px 0",display:"flex",flexDirection:"column",gap:"6px"}}>
                  <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(34px,3.4cqw,48px)",lineHeight:"1"}}>
                    <CountUp value={s.v} />
                  </span>
                  <span style={{fontSize:"12px",color:"var(--color-neutral-400)",lineHeight:"1.35"}}>
                    {s.l}
                  </span>
                  <span style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".16em",color:"var(--color-accent-400)"}}>
                    {s.src}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <div aria-hidden="true" style={{position:"relative",height:"120px",overflow:"hidden",margin:"-20px 0"}}>
        <div style={{position:"absolute",left:"-5%",right:"-5%",top:"34px",height:"46px",background:"#141414",transform:"rotate(1.6deg)",borderTop:"1px solid #2e2f31",borderBottom:"1px solid #2e2f31"}}></div>
        <Ticker />
      </div>
    </>
  );
}
