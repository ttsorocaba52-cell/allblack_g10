import type { Metadata } from "next";
import { MetricsPage } from "@/components/MetricsPage";

export const metadata: Metadata = {
  title: "ALLBLACK — Métricas · João Pedro",
  description:
    "Métricas da ALLBLACK G10 (@allblack_g10): Instagram, YouTube, TikTok e Facebook em um só lugar. Insights oficiais de alcance, visualizações e público.",
  openGraph: {
    title: "ALLBLACK — Métricas",
    description: "Instagram, YouTube, TikTok e Facebook da ALLBLACK G10 em um só lugar.",
    images: ["/assets/hero-banner.png"],
  },
};

export default function Page() {
  return <MetricsPage />;
}
