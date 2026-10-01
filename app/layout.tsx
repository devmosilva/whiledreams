import "@fontsource/atkinson-hyperlegible/400.css";
import "@fontsource/atkinson-hyperlegible/700.css";
import "@fontsource/lexend-giga/700.css";
import type { Metadata } from "next";
import profileImage from "@/logo/while-dreams-perfil.png";
import { AnalyticsConsent } from "@/components/analytics-consent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://whiledreams.com.br",
  ),
  title: "While Dreams — Transformamos ideias em tecnologia",
  description:
    "Sites, sistemas personalizados, automações e soluções com IA para resolver problemas reais do seu negócio.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "While Dreams",
    title: "While Dreams — Transformamos ideias em tecnologia",
    description: "Sites, sistemas, automações e IA para tirar ideias do papel e resolver problemas reais.",
    images: [{ url: profileImage.src, width: profileImage.width, height: profileImage.height, alt: "Símbolo While Dreams" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: profileImage.src, apple: profileImage.src },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}<AnalyticsConsent /></body>
    </html>
  );
}
