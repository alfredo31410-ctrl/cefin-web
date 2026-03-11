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

/* ===== Props ===== */

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
        rounded-xl
        shadow-sm
        hover:shadow-xl
        transition
        flex
        flex-col
        h-full
        border
        border-slate-100
        p-6 md:p-8
      "
    >

      {/* TEXTO DEL TESTIMONIO */}

      <p className="text-sm md:text-base text-slate-600 mb-6 italic line-clamp-5">
        "{testimonio.texto}"
      </p>


      {/* PERFIL */}

      <div className="flex items-center gap-4 mt-auto">

        {/* FOTO */}

        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0">

          <Image
            src={testimonio.imagen}
            alt={testimonio.nombre}
            fill
            className="object-cover"
          />

        </div>


        {/* INFO */}

        <div>

          <div className="font-semibold text-sm md:text-base text-slate-900">
            {testimonio.nombre}
          </div>

          <div className="text-xs md:text-sm text-slate-500">
            {testimonio.profesion}
          </div>

        </div>

      </div>

    </motion.div>

  );
}