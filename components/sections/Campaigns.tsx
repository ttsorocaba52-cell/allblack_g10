/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";
import { CaseShowcase } from "../interactive/CaseShowcase";
import { PackagesCta } from "../interactive/PackagesDrawer";

export function Campaigns({ v }: { v: V }) {
  return (
    <>
      {/* 03 CAMPANHAS */}
      <section id="marcas" data-section="marcas" style={{padding:"clamp(72px,10cqw,150px) var(--gutter)",background:"var(--color-surface)"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"clamp(32px,5cqw,64px)"}}>
          <div data-reveal="0" style={{display:"flex",alignItems:"center",gap:"12px",fontFamily:"var(--font-mono)",fontSize:"12px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
            <span style={{display:"inline-block",padding:"2px 8px",background:"#F5C400",color:"#090909",transform:"skewX(-12deg)",fontWeight:"500"}}>
              03
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
        <CaseShowcase onOpen={v.openCase} />
        {!v.hidePricing && <PackagesCta onContact={() => v.goContact(undefined)} />}
      </section>
    </>
  );
}
