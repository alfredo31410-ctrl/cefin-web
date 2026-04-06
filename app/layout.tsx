import "./globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import ContentWrapper from "@/components/ContentWrapper";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
  metadataBase: new URL("https://cefincapacitacion.com"),
  openGraph: {
    title: "CEFIN | Capacitación Fiscal para Contadores",
    description: "Transforma tu ejercicio profesional con cursos y membresías diseñadas para el contador actual.",
    url: "https://cefincapacitacion.com",
    siteName: "CEFIN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "CEFIN capacitación fiscal en México" }],
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
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>



        {/* Wrapper */}
        <ContentWrapper>
          {children}
        </ContentWrapper>
        
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CEFIN",
              "url": "https://cefincapacitacion.com",
              "logo": "https://cefincapacitacion.com/logo.png" 
            })
          }}
        />
      </body>
    </html>
  );
}