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
      transition={{ duration: 0.25 }}
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
        hover:-translate-y-1
      "
    >
      {/* IMAGEN */}

      <div className="relative w-full h-44 md:h-48 lg:h-52 overflow-hidden">

        <Image
          src={membresia.imagen}
          alt={membresia.titulo}
          fill
          className="
            object-contain
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

      </div>

      {/* CONTENIDO */}

      <div className="p-4 md:p-6 flex flex-col flex-grow">

        {/* TITULO */}

        <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 line-clamp-2">
          {membresia.titulo}
        </h3>

        {/* DESCRIPCION */}

        <p className="text-sm text-slate-600 mb-6 line-clamp-3 flex-grow">
          {membresia.descripcion}
        </p>

        {/* FOOTER */}

        <div className="flex items-center justify-between mt-auto">

          <span className="font-bold text-red-600 text-base md:text-lg">
            {membresia.precio}
          </span>

          <Link
            href={`/membresias/${membresia.slug}`}
            className="
              text-slate-700
              font-semibold
              transition-colors
              duration-300
              group-hover:text-red-600
              whitespace-nowrap
            "
          >
            Ver detalles →
          </Link>

        </div>

      </div>

    </motion.div>
  );
}