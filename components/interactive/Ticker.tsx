const WORDS = ["ALLBLACK", "CIVIC G10", "BEYOND THE ROAD", "@ALLBLACK_G10", "JDM CULTURE", "COMPRA · REFORMA · REVENDA"];

/** Faixa amarela inclinada com as palavras passando em loop infinito. */
export function Ticker() {
  const set = (k: number) =>
    WORDS.map((w) => (
      <span key={k + w} aria-hidden={k > 0} style={{ display: "flex", alignItems: "center", gap: "28px", fontFamily: "var(--font-display)", fontSize: "30px", letterSpacing: ".06em", flex: "none" }}>
        {w}
        <span style={{ width: "8px", height: "8px", background: "currentColor", transform: "rotate(45deg)" }} />
      </span>
    ));
  return (
    <div style={{ position: "absolute", left: "-5%", right: "-5%", top: "36px", height: "50px", background: "#F5C400", color: "#090909", transform: "rotate(-1.4deg)", display: "flex", alignItems: "center", whiteSpace: "nowrap", overflow: "hidden" }}>
      {/* 3 cópias: a faixa anda exatamente 1/3 da largura e reinicia sem emenda */}
      <div className="ticker-track" style={{ display: "flex", alignItems: "center", gap: "28px", paddingLeft: "28px", flex: "none" }}>
        {set(0)}{set(1)}{set(2)}
      </div>
    </div>
  );
}
