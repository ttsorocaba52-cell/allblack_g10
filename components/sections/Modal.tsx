/* eslint-disable @typescript-eslint/no-explicit-any */
import type { V } from "../useMediaKit";
import { Fragment } from "react";
import { Slot } from "../Slot";

export function Modal({ v }: { v: V }) {
  return (
    <>
    {v.modalOpen && (
      <>
        <div className="dialog-backdrop" onClick={v.closeModal} style={{position:v.modalPos,zIndex:"70",background:"rgba(5,5,5,.84)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",padding:"16px"}}>
          <div role="dialog" aria-modal="true" aria-label={v.modal.title} onClick={v.stop} style={{position:"relative",width:"min(920px,100%)",maxHeight:"calc(100% - 16px)",overflow:"auto",borderRadius:"var(--radius-lg)",background:"var(--color-surface)",boxShadow:"var(--shadow-lg)",color:"var(--color-text)"}}>
            <div style={{position:"relative",aspectRatio:"21/9",background:"linear-gradient(160deg,#1c1c1c,#0a0a0a)"}}>
              {v.modal.hasPhoto && (
                <>
                  <div role="img" aria-label={v.modal.placeholder} style={{position:"absolute",inset:"0",backgroundImage:v.modal.photoBg,backgroundSize:"cover",backgroundPosition:v.modal.photoPos,filter:v.modal.photoFilter}}></div>
                </>
              )}
              {v.modal.noPhoto && (
                <>
                  <Slot placeholder={v.modal.placeholder} />
                </>
              )}
              <button className="btn btn-secondary btn-icon" aria-label="Fechar" onClick={v.closeModal} style={{position:"absolute",top:"12px",right:"12px",width:"44px",height:"44px",background:"rgba(9,9,9,.7)"}}>
                <i className="ph ph-x" style={{fontSize:"18px"}}></i>
              </button>
            </div>
            <div style={{padding:"clamp(20px,4vw,40px)",display:"flex",flexDirection:"column",gap:"20px"}}>
              <span style={{fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".14em",color:"var(--color-accent-400)"}}>
                {v.modal.kicker}
              </span>
              <span style={{fontFamily:"var(--font-display)",fontSize:"clamp(44px,6vw,80px)",lineHeight:".88"}}>
                {v.modal.title}
              </span>
              <p style={{margin:"0",maxWidth:"640px",fontSize:"15px",lineHeight:"1.7",color:"var(--color-neutral-300)",textWrap:"pretty"}}>
                {v.modal.body}
              </p>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",borderTop:"1px solid var(--color-divider)"}}>
                {v.modal.specs.map((s: any, _i8: number) => (
                  <Fragment key={_i8}>
                    <div style={{padding:"14px 14px 14px 0",borderBottom:"1px solid var(--color-divider)",display:"flex",flexDirection:"column",gap:"4px"}}>
                      <span style={{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
                        {s.k}
                      </span>
                      <span style={{fontSize:"14px",fontWeight:"500"}}>
                        {s.v}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
              {v.modal.hasChips && (
                <>
                  <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".14em",color:"var(--color-neutral-500)"}}>
                      {v.modal.chipsLabel}
                    </span>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(96px,1fr))",gap:"6px"}}>
                      {v.modal.chips.map((ch: any, _i11: number) => (
                        <Fragment key={_i11}>
                          <div style={{padding:"10px",borderRadius:"var(--radius-sm)",background:"var(--color-bg)",boxShadow:"var(--shadow-sm)",display:"flex",flexDirection:"column",gap:"2px"}}>
                            <span style={{fontFamily:"var(--font-display)",fontSize:"22px",lineHeight:"1"}}>
                              {ch.a}
                            </span>
                            <span style={{fontSize:"10px",color:"var(--color-neutral-500)"}}>
                              {ch.b}
                            </span>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </>
              )}
              <div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"space-between",alignItems:"center",paddingTop:"8px"}}>
                <span style={{fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".12em",color:"var(--color-neutral-500)"}}>
                  {v.modal.note}
                </span>
                <button className="btn btn-primary" onClick={v.modalCta} style={{minHeight:"44px",padding:"0 18px",fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".14em"}}>
                  FALAR SOBRE ESTE PROJETO
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
    </>
  );
}
