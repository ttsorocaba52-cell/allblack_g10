/** Espaço reservado para uma imagem que ainda não existe. Troque por <img> quando tiver a foto. */
export function Slot({ placeholder }: { placeholder: string }) {
  return (
    <div
      aria-label={placeholder}
      role="img"
      style={{
        position: "absolute", inset: 0, display: "grid", placeItems: "center", padding: 16, textAlign: "center",
        border: "1px dashed var(--color-neutral-700)", color: "var(--color-neutral-500)",
        fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase",
      }}
    >
      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <i className="ph ph-image" style={{ fontSize: 22 }} />
        {placeholder}
      </span>
    </div>
  );
}
