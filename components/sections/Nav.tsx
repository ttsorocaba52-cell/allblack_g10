/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";

export function Nav({ v }: { v: V }) {
  return (
    <>
      {/* NAV */}
      <header style={{position:"sticky",top:"0",zIndex:"40",background:"color-mix(in srgb,#090909 78%,transparent)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)"}}>
        <nav className="nav" aria-label="Seções" style={{padding:"14px var(--gutter)",gap:"clamp(14px,2.4cqw,32px)"}}>
          <a className="nav-brand" href="#top" onClick={v.goTop} style={{display:"flex",alignItems:"center",lineHeight:"0"}}>
            <img src="/assets/logo-allblack-g10.png" alt="ALLBLACK" style={{height:"34px",width:"auto",display:"block"}} />
          </a>
          {v.wide && (
            <>
              {v.navItems.map((item: any, _i7: number) => (
                <Fragment key={_i7}>
                  <a href={`#${item.id}`} onClick={item.go} aria-current={item.current} style={{display:"flex",gap:"6px",alignItems:"baseline",fontSize:"13px",letterSpacing:".02em",transition:"color .2s"}}>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",color:"var(--color-neutral-600)"}}>
                      {item.n}
                    </span>
                    {item.label}
                  </a>
                </Fragment>
              ))}
              <a className="btn btn-primary" href="#contato" onClick={v.goContact} style={{fontSize:"13px",padding:"8px 14px",fontFamily:"var(--font-mono)",letterSpacing:".08em",textTransform:"uppercase"}}>
                Contato
              </a>
            </>
          )}
          {v.compact && (
            <>
              <button className="btn btn-secondary btn-icon" aria-label="Abrir menu" aria-expanded={v.menuExpanded} onClick={v.toggleMenu} style={{width:"44px",height:"44px"}}>
                <i className={`ph ${v.menuIcon}`} style={{fontSize:"20px"}}></i>
              </button>
            </>
          )}
        </nav>
        {v.menuOpen && (
          <>
            <div style={{display:"flex",flexDirection:"column",padding:"4px var(--gutter) 20px",borderTop:"1px solid var(--color-divider)"}}>
              {v.navItems.map((item: any, _i7: number) => (
                <Fragment key={_i7}>
                  <a href={`#${item.id}`} onClick={item.go} style={{display:"flex",alignItems:"baseline",gap:"14px",padding:"12px 0",minHeight:"44px",color:"var(--color-text)",textDecoration:"none",fontFamily:"var(--font-display)",fontSize:"30px",letterSpacing:".03em",borderBottom:"1px solid var(--color-divider)"}}>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:"11px",color:"var(--color-accent)"}}>
                      {item.n}
                    </span>
                    {item.label}
                  </a>
                </Fragment>
              ))}
              <a className="btn btn-primary" href="#contato" onClick={v.goContact} style={{marginTop:"16px",minHeight:"44px",fontFamily:"var(--font-mono)",letterSpacing:".1em"}}>
                CONTATO COMERCIAL
              </a>
            </div>
          </>
        )}
      </header>
    </>
  );
}
