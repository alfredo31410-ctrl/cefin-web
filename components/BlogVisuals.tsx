"use client"

import { motion } from "framer-motion"

export function HeroBlog() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">
        Contenido Gratuito
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight">
        Capacitaciones Gratuitas
      </h1>
      
      {/* BLOQUE LIVE TIPO "GLASSMORPHISM" */}
      <div className="bg-white border border-red-100 rounded-2xl p-6 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-full bg-red-500/5 -skew-x-12 translate-x-16 group-hover:translate-x-12 transition-transform duration-700"></div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10 text-left">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-xl shrink-0">
              <span className="text-2xl">🔴</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">En vivo todos los martes</h2>
              <p className="text-slate-600 text-sm">
                Transmitimos capacitaciones gratuitas en YouTube a las <span className="font-bold text-slate-900">11:00 AM</span>.
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@CEFINImpuestos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 hover:scale-105 transition-all shadow-lg shadow-red-600/20 text-center whitespace-nowrap"
          >
            Ver transmisión
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export function BlogListAnimated({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}