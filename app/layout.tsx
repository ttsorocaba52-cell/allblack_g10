import type { Metadata, Viewport } from "next";
import "@phosphor-icons/web/regular";
import "@phosphor-icons/web/fill";
import "./globals.css";
import { Preloader } from "@/components/Preloader";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://allblack-g10.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ALLBLACK — Mídia Kit · João Pedro",
  description: "Mídia kit da ALLBLACK G10: projetos de carros, modificações e entretenimento automotivo com o Civic G10. Números, campanhas e formatos para marcas.",
  // Prévia do link (WhatsApp, Instagram, iMessage…): imagem 1200×630 leve em public/og
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "ALLBLACK G10",
    title: "ALLBLACK G10 · Mídia Kit 2026",
    description: "Carros, projetos e entretenimento automotivo com o Civic G10. Números, cases e formatos para marcas.",
    images: [{ url: "/og/og-home.jpg", width: 1200, height: 630, alt: "ALLBLACK G10 · Mídia Kit 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALLBLACK G10 · Mídia Kit 2026",
    description: "Carros, projetos e entretenimento automotivo com o Civic G10.",
    images: ["/og/og-home.jpg"],
  },
  icons: { icon: "/assets/logo-allblack-g10.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="ab-loading">
      <head>
        <link rel="preload" href="/assets/logo-intro.webp" as="image" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
