"use client"

import { motion } from "framer-motion"

export function HeroInstructores() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">
        Experiencia y Liderazgo
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight">
        Instructores CEFIN
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Nuestros instructores son especialistas en fiscal, contabilidad
        y nómina con amplia experiencia en capacitación profesional y práctica real.
      </p>
    </motion.section>
  )
}

// NUEVO CONTENEDOR CENTRADO
export function InstructoresListAnimated({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="max-w-4xl mx-auto" // Centramos y limitamos el ancho para que no se separen
    >
      {children}
    </motion.div>
  )
}