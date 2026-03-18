"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Membresia = {
  id: number;
  slug: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  precio: string;
};

type Props = {
  membresia: Membresia;
};

export default function MembresiaCard({ membresia }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        group
        bg-white
        rounded-xl
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        overflow-hidden
        flex
        flex-col
        h-full
        border
        border-slate-100
      "
    >
      {/* IMAGEN: Altura fija para que todas las cards empiecen igual */}
      <div className="relative w-full h-44 md:h-48 bg-slate-50 overflow-hidden flex items-center justify-center">
        <Image
          src={membresia.imagen}
          alt={membresia.titulo}
          fill
          className="
            object-contain
            p-6
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
        {/* BADGE: Estilo unificado con los otros componentes */}
        <div className="absolute top-3 right-3">
          <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Membresía
          </span>
        </div>
      </div>

      {/* CUERPO DEL CONTENIDO: Usamos flex-grow para ocupar el espacio sobrante */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        
        {/* TITULO: Altura mínima fija para 2 líneas para que no se muevan los textos de abajo */}
        <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 line-clamp-2 min-h-[3.5rem] md:min-h-[4rem]">
          {membresia.titulo}
        </h3>

        {/* DESCRIPCION: line-clamp para asegurar que no empuje el footer */}
        <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
          {membresia.descripcion}
        </p>

{/* FOOTER */}
<div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
  
  {/* PRECIO (Arriba) */}
  <div className="flex flex-col">
    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none mb-1">
      Inversión
    </span>
    <span className="font-black text-red-600 text-xl md:text-2xl">
      {membresia.precio}
    </span>
  </div>

  {/* BOTÓN (Abajo, ocupando el ancho total) */}
  <Link
    href={`/membresias/${membresia.slug}`}
    className="
      bg-slate-900
      text-white
      text-sm
      font-bold
      w-full
      py-3
      rounded-lg
      transition-all
      duration-300
      hover:bg-red-600
      shadow-sm
      text-center
      active:scale-[0.98]
    "
  >
    Ver beneficios
  </Link>

</div>
      </div>
    </motion.div>
  );
}