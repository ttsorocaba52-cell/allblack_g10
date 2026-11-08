import type { Metadata } from "next";
import { MediaKit } from "@/components/MediaKit";

/**
 * /kit: o mesmo mídia kit da página principal (métricas, cases, projetos e contato),
 * sem valores nem pacotes de parceria. Para mandar a marcas antes de falar de preço.
 */
export const metadata: Metadata = {
  title: "ALLBLACK — Mídia Kit · João Pedro",
};

export default function Page() {
  return <MediaKit cinematicIntro showDataTags hidePricing />;
}
