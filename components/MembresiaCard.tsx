"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ===== Tipo de datos de la membresía ===== */
type Membresia = {
  id: number;
  slug: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  precio: string;
};

/* ===== Props del componente ===== */
type Props = {
  membresia: Membresia;
};

export default function MembresiaCard({ membresia }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden"
    >
      <div className="relative h-48 w-full">
        <Image
          src={membresia.imagen}
          alt={membresia.titulo}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {membresia.titulo}
        </h3>

        <p className="text-slate-600 mb-4">
          {membresia.descripcion}
        </p>

        <div className="flex justify-between items-center">
          <span className="font-bold text-red-600">
            {membresia.precio}
          </span>

          <Link
  href={`/membresias/${membresia.slug}`}
  className="text-slate-700 font-semibold hover:text-red-600 transition"
>
  Ver detalles →
</Link>
        </div>
      </div>
    </motion.div>
  );
}