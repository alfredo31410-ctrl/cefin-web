"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ===== Tipo de datos del testimonio ===== */
type Testimonio = {
  id: number;
  texto: string;
  nombre: string;
  profesion: string;
  imagen: string;
};

/* ===== Props del componente ===== */
type Props = {
  testimonio: Testimonio;
};

export default function TestimonioCard({ testimonio }: Props) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition"
    >
      <p className="text-slate-600 mb-6 italic">
        "{testimonio.texto}"
      </p>

      <div className="flex items-center justify-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden">
          <Image
            src={testimonio.imagen}
            alt={testimonio.nombre}
            fill
            className="object-cover"
          />
        </div>

        <div className="text-left">
          <div className="font-semibold text-slate-900">
            {testimonio.nombre}
          </div>

          <div className="text-sm text-slate-500">
            {testimonio.profesion}
          </div>
        </div>
      </div>
    </motion.div>
  );
}