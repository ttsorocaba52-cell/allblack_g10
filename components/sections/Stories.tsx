/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";
import { StoryChart } from "../interactive/StoryChart";
import { CountUp } from "../interactive/CountUp";

export function Stories({ v }: { v: V }) {
  return (
    <>
      {/* 02b INSTAGRAM STORIES */}
      <section id="stories" data-section="stories" style={{padding:"clamp(24px,4cqw,56px) clamp(20px,5cqw,72px) clamp(72px,10cqw,150px)"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"clamp(32px,5cqw,64px)"}}>
          <div data-reveal="0" style={{display:"flex",alignItems:"center",gap:"12px",fontFamily:"var(--font-mono)",fontSize:"12px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
            <span style={{display:"inline-block",padding:"2px 8px",background:"#F5C400",color:"#090909",transform:"skewX(-12deg)",fontWeight:"500"}}>
              02
            </span>
            <span style={{width:"32px",height:"1px",background:"var(--color-accent)"}}></span>
            <span>
              INSTAGRAM · STORIES
            </span>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-end",gap:"24px"}}>
            <h2 data-reveal="100" style={{margin:"0",fontFamily:"var(--font-display)",fontWeight:"400",fontSize:"clamp(52px,8cqw,128px)",lineHeight:".86",letterSpacing:"0"}}>
              TELEMETRIA
              <br />
              DIÁRIA
              <span style={{color:"var(--color-accent)"}}>
                .
              </span>
            </h2>
            <p data-reveal="200" style={{margin:"0",maxWidth:"400px",fontSize:"15px",lineHeight:"1.65",color:"var(--color-neutral-400)",textWrap:"pretty"}}>
              Os stories são o painel ao vivo da comunidade: presença todos os dias, resposta imediata e espaço para CTA direto da marca.
            </p>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,380px),1fr))",gap:"clamp(20px,3cqw,40px)",alignItems:"stretch"}}>
          <div data-reveal="100" style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"10px"}}>
            {v.storyFrames.map((f: any, _i6: number) => (
              <Fragment key={_i6}>
                <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                  <div className="hover-lift" style={{position:"relative",aspectRatio:"9/16",borderRadius:"14px",overflow:"hidden",background:"linear-gradient(170deg,#1c1c1c,#0c0c0c)",boxShadow:"var(--shadow-md)",transition:"transform .35s"}}>
                    <div role="img" aria-label={f.label} style={{position:"absolute",inset:"0",backgroundImage:f.bg,backgroundSize:"cover",backgroundPosition:f.pos}}></div>
                    <div style={{position:"absolute",top:"8px",left:"8px",right:"8px",display:"flex",gap:"3px",pointerEvents:"none"}}>
                      {f.segs.map((sg: any, _i11: number) => (
                        <Fragment key={_i11}>
                          <span style={{flex:"1",height:"2px",borderRadius:"2px",background:sg.c}}></span>
                        </Fragment>
                      ))}
                    </div>
                    <div style={{position:"absolute",left:"0",right:"0",bottom:"0",padding:"28px 10px 10px",pointerEvents:"none",background:"linear-gradient(to top,rgba(9,9,9,.92),transparent)",display:"flex",flexDirection:"column",gap:"2px"}}>
                      <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(24px,2.6cqw,36px)",lineHeight:".95"}}>
                        <CountUp value={f.stat} />
                      </span>
                      <span style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".1em",color:"var(--color-neutral-300)"}}>
                        {f.statL}
                      </span>
                    </div>
                  </div>
                  <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
                    {f.label}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <div data-reveal="150" style={{padding:"clamp(18px,2.4cqw,28px)",borderRadius:"var(--radius-md)",background:"var(--color-surface)",boxShadow:"var(--shadow-sm)",display:"flex",flexDirection:"column",gap:"14px"}}>
              <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"8px",fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
                <span style={{display:"flex",alignItems:"center",gap:"8px"}}>
                  <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"var(--color-accent)",animation:"ab-pulse 1.6s infinite"}}></span>
                  TOP 14 STORIES · 30 DIAS
                </span>
                <span>
                  INSIGHTS OFICIAIS · 29 SET – 28 OUT
                </span>
              </div>
              <StoryChart />
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:"10px"}}>
              {v.storyCards.map((c: any, _i7: number) => (
                <Fragment key={_i7}>
                  <div className="card hover-ring" data-reveal="200" style={{padding:"16px",gap:"8px",background:"var(--color-surface)",boxShadow:"var(--shadow-sm)",transition:"box-shadow .25s"}}>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".14em",color:c.srcColor}}>
                      {c.src}
                    </span>
                    <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(34px,3.2cqw,46px)",lineHeight:".95"}}>
                      <CountUp value={c.v} />
                    </span>
                    <span style={{fontSize:"12px",lineHeight:"1.4",color:"var(--color-neutral-400)"}}>
                      {c.l}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,240px),1fr))",gap:"clamp(20px,3cqw,40px)",marginTop:"clamp(40px,5cqw,72px)",paddingTop:"28px",background:"linear-gradient(to right,transparent,var(--color-divider) 48px,var(--color-divider) calc(100% - 48px),transparent) top/100% 1px no-repeat"}}>
          {v.storyWhy.map((w: any, _i5: number) => (
            <Fragment key={_i5}>
              <div data-reveal="0" style={{display:"flex",gap:"14px"}}>
                <i className={`ph ${w.icon}`} style={{fontSize:"22px",color:"var(--color-accent)",flex:"none",marginTop:"2px"}}></i>
                <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
                  <span style={{fontSize:"15px",fontWeight:"500"}}>
                    {w.t}
                  </span>
                  <span style={{fontSize:"13px",lineHeight:"1.55",color:"var(--color-neutral-400)",textWrap:"pretty"}}>
                    {w.d}
                  </span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
