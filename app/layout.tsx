import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Skull Multimarcas | Streetwear, Tênis e Moda Urbana",
  description:
    "Conheça a Skull Multimarcas. Streetwear, tênis e marcas que representam atitude, identidade e cultura urbana.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Skull Multimarcas | Seu brilho, seu estilo.",
    description: "Streetwear, sneakers e atitude em um só lugar.",
    url: "/",
    siteName: "Skull Multimarcas",
    images: [{ url: "/images/logo-skull-nova-4k.png", width: 1254, height: 1254, alt: "Skull Multimarcas" }],
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
