import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PropifyConfia | Tu propiedad, en manos seguras",
  description:
    "Corredora de propiedades digital en Santiago de Chile. Compramos, vendemos y arrendamos propiedades con transparencia, tecnología y confianza. Especialistas en Maipú y comunas aledañas.",
  keywords: "corredora propiedades santiago, propiedades maipú, arriendo casa maipú, venta departamento santiago",
  openGraph: {
    title: "PropifyConfia | Tu propiedad, en manos seguras",
    description: "Corredora de propiedades digital en Santiago de Chile.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
