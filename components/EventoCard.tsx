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
  const fechaTexto = (evento.fecha as any) instanceof Date
    ? (evento.fecha as any).toLocaleDateString("es-MX", { day: "2-digit", month: "short" })
    : String(evento.fecha)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full border border-slate-100"
    >
      {/* 1. IMAGEN MÁS BAJA */}
      <div className="relative w-full h-32 md:h-40 overflow-hidden bg-slate-50">
        <Image
          src={evento.imagen}
          alt={evento.titulo}
          fill
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
            Próximamente
          </span>
        </div>
      </div>

      {/* 2. CONTENIDO MÁS APRETADO */}
      <div className="p-4 flex flex-col flex-grow">
        
        {/* META EN UNA SOLA LÍNEA PEQUEÑA */}
        <div className="flex items-center gap-2 mb-2 text-[10px] font-medium text-slate-400 uppercase">
          <span className="truncate">📍 {evento.lugar}</span>
          <span>•</span>
          <span className="shrink-0">📅 {fechaTexto}</span>
        </div>

        {/* TITULO CON ALTURA CONTROLADA */}
        <h3 className="text-sm md:text-base font-bold mb-2 text-slate-800 line-clamp-2 leading-tight min-h-[2.5rem]">
          {evento.titulo}
        </h3>

        {/* 3. COUNTDOWN MINI (Sin fondo gris para no abultar) */}
        <div className="mb-4 py-2 border-y border-slate-50">
          <Countdown fecha={String(evento.fecha)} />
        </div>

        {/* 4. FOOTER INTEGRADO (Precio y Botón en la misma línea pero más pequeños) */}
        <div className="mt-auto pt-3 flex items-center justify-between gap-2">
          <div className="flex flex-col shrink-0">
            <span className="text-[9px] text-slate-400 uppercase font-bold">Inversión</span>
            <span className="font-extrabold text-red-600 text-base">
              {evento.precio}
            </span>
          </div>

          <Link
            href={`/eventos/${evento.slug}`}
            className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[11px] font-bold hover:bg-red-600 transition-colors whitespace-nowrap"
          >
            Ver evento
          </Link>
        </div>
      </div>
    </motion.div>
  )
}