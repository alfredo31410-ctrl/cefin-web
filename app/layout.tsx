import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "CEFIN | Actualización Fiscal para Contadores",
  description:
    "CEFIN ofrece cursos especializados para contadores y profesionales fiscales en México. Mantente actualizado con reformas y cumplimiento SAT.",
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