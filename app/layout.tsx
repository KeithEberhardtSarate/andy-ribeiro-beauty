import type { Metadata } from "next";
import { Playfair_Display, Manrope, JetBrains_Mono, Pinyon_Script } from "next/font/google";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/components.css";
import "@/styles/home.css";
import "@/styles/logo.css";
import "@/styles/design-system.css";

/* ---- Fontes da marca (carregadas via next/font, expostas como CSS vars) ---- */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andy Ribeiro — Especialista em Olhar",
  description:
    "Brow Designer, Lash Artist e Educadora. Técnica, ciência e propósito em cada olhar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${manrope.variable} ${jetbrains.variable} ${pinyon.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
