"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ===== Tipo de datos ===== */

type Membresia = {
  id: number;
  slug: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  precio: string;
};

/* ===== Props ===== */

type Props = {
  membresia: Membresia;
};

export default function MembresiaCard({ membresia }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        bg-white
        rounded-xl
        shadow-sm
        hover:shadow-xl
        transition
        overflow-hidden
        flex
        flex-col
        h-full
        border
        border-slate-100
      "
    >
      {/* ===== IMAGEN ===== */}

      <div className="relative w-full h-44 md:h-48 lg:h-52">
        <Image
          src={membresia.imagen}
          alt={membresia.titulo}
          fill
          className="object-cover"
        />
      </div>

      {/* ===== CONTENIDO ===== */}

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
            className="text-slate-700 font-semibold hover:text-red-600 transition whitespace-nowrap"
          >
            Ver detalles →
          </Link>

        </div>

      </div>

    </motion.div>
  );
}