import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Inter } from 'next/font/google'; // Sugerencia: Inter es más moderna

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // Usamos un template para que cada página (Nosotros, Cursos) tenga su título propio
  title: {
    default: "CEFIN | Actualización Fiscal para Contadores",
    template: "%s | CEFIN"
  },
  description: "Especialistas en capacitación fiscal en México. Domina las reformas, CFDI 4.0 y cumplimiento SAT con enfoque 100% práctico.",
  keywords: [
    "cursos fiscales", "capacitacion contadores mexico", "ISR personas morales", 
    "contabilidad mexico", "CFDI 4.0", "curso contabilidad SAT", "CEFIN"
  ],
  authors: [{ name: "CEFIN" }],
  creator: "CEFIN",
  metadataBase: new URL("https://cefincapacitacion.com"), // Tu nuevo dominio oficial
  openGraph: {
    title: "CEFIN | Capacitación Fiscal para Contadores",
    description: "Transforma tu ejercicio profesional con cursos y membresías diseñadas para el contador actual.",
    url: "https://cefincapacitacion.com", // Actualizado al oficial
    siteName: "CEFIN",
    images: [
      {
        url: "/og-image.jpg", // Asegúrate que este archivo exista en /public
        width: 1200,
        height: 630,
        alt: "CEFIN capacitación fiscal en México",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CEFIN | Capacitación Fiscal",
    images: ["/og-image.jpg"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900 antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        
        {/* El script de Schema.org DEBE ir dentro del body o Next lo rechazará */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CEFIN",
              // ... resto de tu json
            })
          }}
        />
      </body>
    </html>
  );
}