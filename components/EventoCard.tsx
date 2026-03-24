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
  // 1. Lógica para saber si el evento ya pasó
  const ahora = new Date();
  const fechaEvento = new Date(evento.fecha as any);
  const esPasado = ahora > fechaEvento;

  const fechaTexto = (evento.fecha as any) instanceof Date
    ? (evento.fecha as any).toLocaleDateString("es-MX", { day: "2-digit", month: "short" })
    : String(evento.fecha)

  return (
    <motion.div
      whileHover={!esPasado ? { y: -5 } : {}} // No animar si ya pasó
      className={`group rounded-xl shadow-sm transition-all duration-300 overflow-hidden flex flex-col h-full border ${
        esPasado ? "bg-slate-50 border-slate-200 grayscale-[0.5]" : "bg-white border-slate-100 hover:shadow-md"
      }`}
    >
      {/* 1. IMAGEN */}
      <div className="relative w-full h-32 md:h-40 overflow-hidden bg-slate-50">
        <Image
          src={evento.imagen}
          alt={evento.titulo}
          fill
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          {/* BADGE DINÁMICO */}
          <span className={`${
            esPasado ? "bg-slate-500" : "bg-red-600"
          } text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm`}>
            {esPasado ? "Finalizado" : "Próximamente"}
          </span>
        </div>
      </div>

      {/* 2. CONTENIDO */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2 text-[10px] font-medium text-slate-400 uppercase">
          <span className="truncate">📍 {evento.lugar}</span>
          <span>•</span>
          <span className="shrink-0">📅 {fechaTexto}</span>
        </div>

        <h3 className={`text-sm md:text-base font-bold mb-2 line-clamp-2 leading-tight min-h-[2.5rem] ${
          esPasado ? "text-slate-500" : "text-slate-800"
        }`}>
          {evento.titulo}
        </h3>

        {/* 3. COUNTDOWN (Ocultar o mostrar mensaje si ya pasó) */}
        <div className="mb-4 py-2 border-y border-slate-50">
          {!esPasado ? (
            <Countdown fecha={String(evento.fecha)} />
          ) : (
            <div className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-widest">
              Evento concluido
            </div>
          )}
        </div>

        {/* 4. FOOTER */}
        <div className="mt-auto pt-3 flex items-center justify-between gap-2">
          <div className="flex flex-col shrink-0">
            <span className="text-[9px] text-slate-400 uppercase font-bold">Inversión</span>
            <span className={`font-extrabold text-base ${esPasado ? "text-slate-400" : "text-red-600"}`}>
              {evento.precio}
            </span>
          </div>

          <Link
            href={`/eventos/${evento.slug}`}
            className={`${
              esPasado 
                ? "bg-slate-300 cursor-not-allowed" 
                : "bg-slate-900 hover:bg-red-600"
            } text-white px-3 py-1.5 rounded-lg text-[11px] font-bold transition-colors whitespace-nowrap`}
          >
            {esPasado ? "Ver detalles" : "Ver evento"}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}