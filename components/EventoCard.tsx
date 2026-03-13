"use client"

import { Evento } from "@/data/eventos"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Countdown from "@/components/Countdown"

type Props = {
  evento: Evento & { slug: string }
}

export default function EventoCard({ evento }: Props) {

  const fechaTexto =
    (evento.fecha as any) instanceof Date
      ? (evento.fecha as any).toLocaleDateString("es-MX", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : String(evento.fecha)

  const fechaParaCountdown =
    (evento.fecha as any) instanceof Date
      ? (evento.fecha as any).toISOString()
      : String(evento.fecha)

  return (

    <motion.div
      whileHover={{ y: -8 }}
      className="
        group
        bg-white
        rounded-2xl
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-500
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
          src={evento.imagen}
          alt={evento.titulo}
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

        <h3 className="text-base md:text-lg font-semibold mb-2 line-clamp-2">
          {evento.titulo}
        </h3>


        {/* FECHA */}

        <p className="text-xs md:text-sm text-slate-500 mb-1">
          📅 {fechaTexto}
        </p>


        {/* LUGAR */}

        <p className="text-xs md:text-sm text-slate-500 mb-3">
          📍 {evento.lugar}
        </p>


        {/* DESCRIPCION */}

        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          {evento.descripcion}
        </p>


        {/* COUNTDOWN */}

        <div className="w-full mb-4">
          <Countdown fecha={fechaParaCountdown} />
        </div>


        {/* FOOTER */}

        <div className="flex items-center justify-between mt-auto">

          <span className="font-bold text-red-600 text-base md:text-lg">
            {evento.precio}
          </span>

          <Link
            href={`/eventos/${evento.slug}`}
            className="
              text-sm
              font-semibold
              text-slate-700
              transition-colors
              duration-300
              group-hover:text-red-600
            "
          >
            Ver evento →
          </Link>

        </div>

      </div>

    </motion.div>

  )

}