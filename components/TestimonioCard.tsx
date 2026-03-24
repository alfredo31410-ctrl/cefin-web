"use client";

import { motion } from "framer-motion";

/* ===== Tipo de datos actualizado ===== */
type Testimonio = {
  id: number;
  testimonio: string; // Cambiado de 'texto' a 'testimonio' para que coincida con tu data
  nombre: string;
};

type Props = {
  testimonio: Testimonio;
};

export default function TestimonioCard({ testimonio }: Props) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="
      bg-white
      rounded-4xl
      shadow-sm
      hover:shadow-xl
      transition-all
      flex
      flex-col
      h-full
      border
      border-slate-100
      p-8 md:p-10
      relative
      overflow-hidden
    "
    >
      {/* COMILLAS DECORATIVAS */}
      <span className="absolute top-4 right-8 text-6xl text-slate-50 font-serif select-none">
        “
      </span>

      {/* TEXTO DEL TESTIMONIO */}
      {/* Quitamos 'line-clamp-5' para que se vea el mensaje completo de la comunidad */}
      <p className="text-sm md:text-base text-slate-600 mb-8 italic relative z-10 leading-relaxed">
        "{testimonio.testimonio}"
      </p>

      {/* PERFIL (Simplificado sin imagen ni profesión) */}
      <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
        <div>
          <div className="font-black text-xs md:text-sm uppercase tracking-wider text-slate-900">
            {testimonio.nombre}
          </div>
          <div className="text-[10px] font-bold text-red-600 uppercase tracking-widest mt-1">
            Comunidad CEFIN
          </div>
        </div>
      </div>
    </motion.div>
  );
}