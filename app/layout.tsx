import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JABA – Soluciones en Aluminio, Cristal y Carpintería | Guadalajara",
  description:
    "Empresa líder en Guadalajara con más de 10 años de experiencia en diseño, fabricación e instalación de ventanas, puertas, domos, canceles de baño, fachadas y carpintería. Precios competitivos y garantía por escrito.",
  keywords:
    "aluminio, cristal, carpintería, ventanas, puertas, domos, canceles de baño, fachadas, Guadalajara, Jalisco, México, JABA",
  authors: [{ name: "JABA" }],
  openGraph: {
    title: "JABA – Soluciones en Aluminio, Cristal y Carpintería",
    description:
      "Diseño, fabricación e instalación de soluciones en aluminio, cristal y carpintería para proyectos residenciales y comerciales en Guadalajara.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
