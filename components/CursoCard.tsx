"use client"

import { Curso } from "@/data/cursos"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

type Props = {
  curso: Curso
}

export default function CursoCard({ curso }: Props) {
  // Configuración de colores por categoría
  const coloresCategoria = {
    fiscal: "bg-blue-100 text-blue-700",
    nomina: "bg-green-100 text-green-700",
    contabilidad: "bg-purple-100 text-purple-700",
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-slate-100"
    >
      {/* Contenedor de Imagen y Badge */}
      <div className="relative h-48 w-full">
        <Image
          src={curso.imagen}
          alt={curso.titulo}
          fill
          className="object-cover"
        />
        {/* Badge de Categoría flotante */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${coloresCategoria[curso.categoria] || "bg-slate-100 text-slate-700"}`}>
            {curso.categoria}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Instructor y Duración */}
        <div className="flex items-center gap-3 mb-3 text-[11px] font-medium text-slate-400 uppercase tracking-widest">
          <span>👤 {curso.instructor}</span>
          <span>•</span>
          <span>⏱️ {curso.duracion}</span>
        </div>

        <h3 className="text-xl font-bold mb-2 text-slate-800 line-clamp-2">
          {curso.titulo}
        </h3>

        <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
          {curso.descripcion}
        </p>

        <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase font-bold">Inversión</span>
            <span className="font-extrabold text-xl text-red-600">
              {curso.precio}
            </span>
          </div>

          <Link
            href={`/cursos/${curso.slug}`}
            className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-600 transition-colors shadow-sm"
          >
            Ver curso
          </Link>
        </div>
      </div>
    </motion.div>
  )
}