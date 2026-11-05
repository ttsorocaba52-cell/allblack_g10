/**
 * Sinal de "site pronto": disparado quando a tela de abertura (Preloader) termina.
 * Animações de entrada esperam por ele para não acontecerem escondidas atrás da abertura.
 */
export const READY_EVENT = "ab:ready";

export function isReady() {
  return typeof document !== "undefined" && document.documentElement.dataset.abReady === "1";
}

export function onReady(cb: () => void): () => void {
  if (isReady()) { cb(); return () => {}; }
  const h = () => cb();
  window.addEventListener(READY_EVENT, h, { once: true });
  return () => window.removeEventListener(READY_EVENT, h);
}

export function markReady() {
  document.documentElement.dataset.abReady = "1";
  window.dispatchEvent(new Event(READY_EVENT));
}
