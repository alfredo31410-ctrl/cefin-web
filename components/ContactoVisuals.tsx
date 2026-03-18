"use client"

import { motion } from "framer-motion"

export function HeroContacto() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <span className="text-red-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4 block">
        Estamos para servirte
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight leading-tight">
        ¿Tienes dudas? <br className="hidden md:block" /> Te ayudamos a decidir
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Nuestro equipo puede ayudarte a elegir la capacitación ideal
        según tu nivel, objetivos y experiencia profesional.
      </p>
    </motion.section>
  )
}

export function WhatsAppBanner() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <div className="bg-emerald-50 border border-emerald-100 rounded-[2rem] p-8 md:p-12 text-center shadow-sm relative overflow-hidden group">
        {/* Decoración sutil de fondo */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
        
        <div className="relative z-10">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg shadow-emerald-200 text-white">
            💬
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-slate-800">
            Atención inmediata por WhatsApp
          </h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto text-lg">
            Resolvemos tus dudas en minutos y te guiamos paso a paso en tu proceso de inscripción.
          </p>
          <a
            href="https://wa.me/524494554578"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-emerald-700 hover:scale-105 transition-all shadow-xl shadow-emerald-600/20"
          >
            Hablar con un asesor
          </a>
        </div>
      </div>
    </motion.section>
  )
}