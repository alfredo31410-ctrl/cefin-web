"use client"

import { Instructor } from "@/data/instructores"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

type Props = {
  instructor: Instructor
}

export default function InstructorCard({ instructor }: Props) {
  // Lógica simple para detectar género por nombre
  const esInstructora = instructor.nombre.includes("Marisol");
  const etiquetaRol = esInstructora ? "Instructora Experta" : "Instructor Experto";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        group
        bg-white
        rounded-2xl
        shadow-sm
        hover:shadow-2xl
        transition-shadow
        duration-300
        overflow-hidden
        flex
        flex-col
        h-full
        border
        border-slate-100
      "
    >
      {/* IMAGEN CON GRADIENTE INFERIOR */}
      <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
        <Image
          src={instructor.imagen}
          alt={instructor.nombre}
          fill
          className="
            object-cover
            object-top
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
        {/* Overlay para dar profundidad */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* CONTENIDO */}
      <div className="p-5 md:p-6 flex flex-col grow text-center">
        
        {/* CATEGORÍA O ROL DINÁMICO */}
        <span className="text-[10px] uppercase tracking-widest font-bold text-red-600 mb-2">
          {etiquetaRol}
        </span>

        {/* NOMBRE */}
        <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
          {instructor.nombre}
        </h3>

        {/* ESPECIALIDAD */}
        <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed italic">
          "{instructor.descripcionCorta}"
        </p>

        {/* BOTÓN ESTILO LINK DINÁMICO */}
        <Link
          href={`/instructores/${instructor.slug}`}
          className="
            mt-auto
            inline-flex
            items-center
            justify-center
            gap-2
            font-bold
            text-sm
            text-slate-900
            group-hover:text-red-600
            transition-all
            duration-300
          "
        >
          Ver perfil completo
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  )
}