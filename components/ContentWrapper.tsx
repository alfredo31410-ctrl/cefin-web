"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Detectamos si la ruta actual es la landing de LATAM
  const isLanding = pathname?.includes("/LATAM");

  return (
    <>
      {/* Si NO es landing, mostramos la Navbar */}
      {!isLanding && <Navbar />}
      
      <main className={`grow ${isLanding ? 'bg-black' : 'bg-white text-slate-900'}`}>
        {children}
      </main>

      {/* Si NO es landing, mostramos Footer y WhatsApp */}
      {!isLanding && (
        <>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}