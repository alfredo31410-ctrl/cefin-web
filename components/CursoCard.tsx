"use client"

/*
  IMPORTACIONES
*/

import { Curso } from "@/data/cursos"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

/*
  PROPS
*/

type Props = {
  curso: Curso
}

export default function CursoCard({ curso }: Props) {

  /*
    COLORES POR CATEGORÍA
  */

  const coloresCategoria = {
    fiscal: "bg-blue-100 text-blue-700",
    nomina: "bg-green-100 text-green-700",
    contabilidad: "bg-purple-100 text-purple-700",
  }

  return (

    /*
      CARD PRINCIPAL
      flex-col + h-full permite que todas las cards
      tengan la misma altura dentro del grid
    */

    <motion.div
      whileHover={{ y: -6 }}
      className="
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

      {/* IMAGEN */}

      <div className="relative w-full h-44 md:h-48 lg:h-52">

        <Image
          src={curso.imagen}
          alt={curso.titulo}
          fill
          className="object-cover"
        />

        {/* BADGE CATEGORÍA */}

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
              ${coloresCategoria[curso.categoria] || "bg-slate-100 text-slate-700"}
            `}
          >
            {curso.categoria}
          </span>

        </div>

      </div>


      {/* CONTENIDO */}

      <div className="p-4 md:p-6 flex flex-col flex-grow">

        {/* META INFO */}

        <div className="flex items-center gap-2 md:gap-3 mb-3 text-[11px] font-medium text-slate-400 uppercase tracking-widest">

          <span>👤 {curso.instructor}</span>

          <span>•</span>

          <span>⏱️ {curso.duracion}</span>

        </div>


        {/* TITULO */}

        <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 text-slate-800 line-clamp-2">

          {curso.titulo}

        </h3>


        {/* DESCRIPCION */}

        <p className="text-sm text-slate-600 mb-6 line-clamp-3 flex-grow">

          {curso.descripcion}

        </p>


        {/* FOOTER */}

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">

          {/* PRECIO */}

          <div className="flex flex-col">

            <span className="text-[10px] text-slate-400 uppercase font-bold">

              Inversión

            </span>

            <span className="font-extrabold text-lg md:text-xl text-red-600">

              {curso.precio}

            </span>

          </div>


          {/* BOTÓN */}

          <Link
            href={`/cursos/${curso.slug}`}
            className="
              bg-slate-900
              text-white
              px-4 py-2
              rounded-lg
              text-sm
              font-bold
              hover:bg-red-600
              transition-colors
              whitespace-nowrap
              shadow-sm
            "
          >

            Ver curso

          </Link>

        </div>

      </div>

    </motion.div>

  )

}