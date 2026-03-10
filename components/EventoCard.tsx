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
  //formatear la fecha para el texto del card
  const fechaTexto = (evento.fecha as any) instanceof Date 
    ? (evento.fecha as any).toLocaleDateString('es-MX', { day: '2-digit', month: 'long', year: 'numeric' })
    : String(evento.fecha);

    //aseguramos el countdow reciba un formato valido
  const fechaParaCountdown = (evento.fecha as any) instanceof Date 
    ? (evento.fecha as any).toISOString()
    : String(evento.fecha);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden"
    >

      <div className="relative h-48 w-full">

        <Image
          src={evento.imagen}
          alt={evento.titulo}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-6">

        <h3 className="text-lg font-semibold mb-2">
          {evento.titulo}
        </h3>

        <p className="text-sm text-slate-500 mb-2">
          📅 {fechaTexto}
        </p>

        <p className="text-sm text-slate-500 mb-4">
          📍 {evento.lugar}
        </p>

        <p className="text-slate-600 text-sm mb-4">
          {evento.descripcion}
        </p>

        <Countdown fecha={fechaParaCountdown} />

        <div className="flex justify-between items-center">

          <span className="font-bold text-red-600">
            {evento.precio}
          </span>

          <Link
            href={`/eventos/${evento.slug}`}
            className="text-sm font-semibold hover:text-red-600"
          >
            Ver evento →
          </Link>

        </div>

      </div>

    </motion.div>
  )
}