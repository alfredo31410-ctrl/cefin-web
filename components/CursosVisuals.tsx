"use client"

import { motion } from "framer-motion"

export function HeroCursos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }} // Scale más sutil
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, // Más lento
        ease: [0.16, 1, 0.3, 1] // Curva de suavizado premium
      }}
      className="mb-12"
    >
      <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">
        Catálogo Completo
      </span>
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
        Cursos CEFIN
      </h1>
    </motion.div>
  )
}