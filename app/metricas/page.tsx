import type { Metadata } from "next";
import { MetricsPage } from "@/components/MetricsPage";

export const metadata: Metadata = {
  title: "ALLBLACK — Métricas · João Pedro",
  description:
    "Métricas da ALLBLACK G10 (@allblack_g10): Instagram, YouTube, TikTok e Facebook em um só lugar. Insights oficiais de alcance, visualizações e público.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "ALLBLACK G10",
    title: "ALLBLACK G10 · Métricas",
    description: "Instagram, YouTube, TikTok e Facebook da ALLBLACK G10 em um só lugar.",
    images: [{ url: "/og/og-metricas.jpg", width: 1200, height: 630, alt: "ALLBLACK G10 · Métricas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALLBLACK G10 · Métricas",
    description: "Instagram, YouTube, TikTok e Facebook da ALLBLACK G10 em um só lugar.",
    images: ["/og/og-metricas.jpg"],
  },
};

export default function Page() {
  return <MetricsPage />;
}
