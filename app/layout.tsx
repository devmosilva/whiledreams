import "@fontsource/atkinson-hyperlegible/400.css";
import "@fontsource/atkinson-hyperlegible/700.css";
import "@fontsource/lexend-giga/700.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://whiledreams.com.br",
  ),
  title: "While Dreams — Transformamos ideias em tecnologia",
  description:
    "Sites, sistemas personalizados, automações e soluções com IA para resolver problemas reais do seu negócio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
