import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "CEFIN | Actualización Fiscal para Contadores",
  description:
    "CEFIN ofrece cursos especializados para contadores y profesionales fiscales en México. Mantente actualizado con reformas y cumplimiento SAT.",
     keywords: [
    "cursos fiscales",
    "capacitacion contadores mexico",
    "ISR personas morales",
    "contabilidad mexico",
    "CFDI 4.0",
    "curso contabilidad"
  ],

  authors: [{ name: "CEFIN" }],

  creator: "CEFIN",

  openGraph: {
    title: "CEFIN | Capacitación Fiscal para Contadores",
    description:
      "Cursos fiscales, eventos y membresías para contadores que quieren dominar el sistema fiscal mexicano.",
    url: "https://cefin-web.vercel.app/",
    siteName: "CEFIN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CEFIN capacitación fiscal",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />

      </body>
    </html>
  );
}