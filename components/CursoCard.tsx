"use client"

import { Curso } from "@/data/cursos"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

type Props = {
  curso: Curso
}

export default function CursoCard({ curso }: Props) {
  const coloresCategoria: Record<Curso["categoria"], string> = {
    fiscal: "bg-blue-100 text-blue-700",
    nomina: "bg-green-100 text-green-700",
    contabilidad: "bg-purple-100 text-purple-700",
    mentalidad: "bg-yellow-100 text-yellow-700",
  }

  const cardUrl = curso.cardUrl?.trim()
  const cursoHref = cardUrl || `/cursos/${curso.slug}`
  const abrirEnNuevaPestana = Boolean(cardUrl && curso.abrirEnNuevaPestana)

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Link
        href={cursoHref}
        target={abrirEnNuevaPestana ? "_blank" : undefined}
        rel={abrirEnNuevaPestana ? "noopener noreferrer" : undefined}
        aria-label={`Ver curso: ${curso.titulo}`}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
      >
        <div className="relative w-full h-44 md:h-48 lg:h-52 overflow-hidden bg-white">
          <Image
            src={curso.imagen}
            alt={curso.titulo}
            fill
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute top-3 left-3">
            <span
              className={`
                px-2 py-1 md:px-3 md:py-1
                rounded-full
                text-[10px] md:text-xs
                font-bold
                uppercase
                tracking-wider
                shadow-sm
                ${coloresCategoria[curso.categoria]}
              `}
            >
              {curso.categoria}
            </span>
          </div>
        </div>

        <div className="p-4 md:p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 md:gap-3 mb-3 text-[11px] font-medium text-slate-400 uppercase tracking-widest">
            <span>👤 {curso.instructor}</span>
            <span>•</span>
            <span>⏱️ {curso.duracion}</span>
          </div>

          <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 text-slate-800 line-clamp-2 min-h-[3rem]">
            {curso.titulo}
          </h3>

          <p className="text-sm text-slate-600 mb-6 line-clamp-3 flex-grow">
            {curso.descripcion}
          </p>

          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase font-bold leading-none mb-1">
                Inversión
              </span>
              <span className="font-extrabold text-lg md:text-xl text-red-600">
                {curso.precio}
              </span>
            </div>

            <span
              aria-hidden="true"
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 group-hover:bg-red-600 whitespace-nowrap shadow-sm active:scale-95"
            >
              Ver curso
            </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
