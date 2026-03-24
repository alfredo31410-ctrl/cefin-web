"use client"

import { motion } from "framer-motion"
import { testimonios } from "@/data/testimonios"
import TestimonioCard from "./TestimonioCard"
import { useState } from "react"

export default function TestimoniosCarrusel() {
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicamos la lista para el efecto de scroll infinito sin saltos
  const duplicatedTestimonios = [...testimonios, ...testimonios];

  return (
    <div className="relative w-full overflow-hidden py-16 bg-slate-50/50">
      
      {/* Título de sección opcional si no lo tienes en el page.tsx */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
          Casos de <span className="text-red-600">Éxito</span>
        </h2>
        <p className="text-slate-500 font-medium">Lo que nuestra comunidad dice de la experiencia CEFIN</p>
      </div>

      {/* Sombras laterales para el efecto de desvanecimiento (Fade) */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-6 w-max px-4"
        initial={{ x: 0 }}
        animate={{
          // Si está pausado, mantenemos la posición actual; si no, animamos
          x: isPaused ? undefined : ["0%", "-50%"],
        }}
        transition={{
          duration: 45, // Aumenté a 45 para que los textos largos se alcancen a leer bien
          ease: "linear",
          repeat: Infinity,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedTestimonios.map((testimonio, index) => (
          <div 
            key={`${testimonio.id}-${index}`} 
            className="w-75 md:w-112.5 shrink-0"
          >
            <TestimonioCard testimonio={testimonio} />
          </div>
        ))}
      </motion.div>

      {/* Indicador de interacción */}
      <div className="mt-10 text-center">
        <div className={`
          inline-block px-4 py-1 rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300
          ${isPaused ? "border-red-200 scale-105" : "opacity-70"}
        `}>
          <p className="text-[9px] md:text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
            {isPaused ? "📖 Lectura pausada" : "🖱️ Pasa el mouse para detener"}
          </p>
        </div>
      </div>
    </div>
  )
}