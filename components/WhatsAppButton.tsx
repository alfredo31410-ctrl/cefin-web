"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { trackMetaEvent } from "@/lib/meta-pixel";

export default function WhatsAppButton() {
  // Configuración del mensaje
  const telefono = "524494554578"; // Tu número de CEFIN
  const mensajeBase =
    "Hola CEFIN, me gustaría recibir más información sobre sus cursos y membresías.";
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeBase)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackMetaEvent("Contact", {
          content_name: "WhatsApp flotante",
          content_category: "Contacto",
        })
      }
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5 }} // Efecto de elevación al pasar el mouse
      whileTap={{ scale: 0.95 }}
      transition={{
        delay: 1.5, // Un poco más de delay para que el usuario ya haya visto el Hero
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="
        fixed
        bottom-6 md:bottom-8
        right-6 md:right-8
        z-100
        flex
        items-center
        gap-2 md:gap-3
        bg-[#25D366]
        hover:bg-[#22c35e]
        text-white
        px-4 md:px-6
        py-3 md:py-4
        rounded-2xl
        shadow-[0_10px_30px_-5px_rgba(37,211,102,0.4)]
      "
    >
      {/* ICONO CON PULSO */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="relative"
      >
        <FaWhatsapp size={24} className="drop-shadow-sm" />
      </motion.div>

      {/* TEXTO (Solo desktop) */}
      <span className="hidden md:block font-bold text-sm tracking-tight">
        ¿Dudas? Escríbenos
      </span>

      {/* EFECTO DE LUZ SUTIL (Opcional, muy pro) */}
      <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent rounded-2xl pointer-events-none" />
    </motion.a>
  );
}
