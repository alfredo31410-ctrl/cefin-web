"use client"

import { motion } from "framer-motion"

// El Hero Animado
export function HeroEventos() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">
        Actualización en Vivo
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight">
        Eventos y Seminarios
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Participa en nuestros eventos especializados para contadores. 
        Sesiones interactivas, casos prácticos y networking de alto nivel.
      </p>
    </motion.section>
  )
}

// El CTA Animado
export function CTAEventos() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-32 p-8 md:p-16 bg-slate-900 rounded-3xl text-center text-white relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
        ¿Tienes dudas sobre un evento?
      </h2>
      <p className="text-slate-400 mb-8 max-w-md mx-auto relative z-10">
        Estamos aquí para ayudarte con el proceso de inscripción o detalles técnicos de nuestras transmisiones.
      </p>
      <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 hover:scale-105 transition-all shadow-lg shadow-red-900/20 relative z-10">
        Contactar soporte
      </button>
    </motion.section>
  )
}