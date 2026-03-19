"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Usamos Link para mejor rendimiento interno

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroContent() {
  return (
    <div className="relative z-10 text-center max-w-4xl px-6 pt-28 md:pt-32">
      
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-[0.2em] text-red-400 font-black mb-4"
      >
        Capacitación fiscal profesional en México
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter text-white"
      >
        Actualización fiscal inteligente
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-slate-200 font-medium leading-relaxed"
      >
        Domina reformas fiscales, CFDI 4.0 y cumplimiento SAT con capacitación práctica impartida por especialistas en materia contable.
      </motion.p>

      {/* BOTONES CON ACCESIBILIDAD Y CONTRASTE 100 */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-5"
      >
        <Link 
          href="/cursos" 
          aria-label="Explorar catálogo de cursos fiscales"
          className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-xl font-black transition-all hover:scale-105 shadow-xl shadow-emerald-900/20 text-center"
        >
          VER CURSOS
        </Link>

        <Link 
          href="/membresias" 
          aria-label="Conocer planes de membresía anual"
          className="w-full sm:w-auto border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-xl font-black transition-all hover:bg-white hover:text-slate-900 text-center backdrop-blur-sm"
        >
          MEMBRESÍAS 2026
        </Link>
      </motion.div>

      <div className="mt-12 flex items-center justify-center gap-2 opacity-70">
        <div className="flex -space-x-2">
          {[1,2,3].map(i => (
            <div key={i} className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-900" />
          ))}
        </div>
        <p className="text-xs font-bold tracking-widest uppercase text-slate-300">
          +5,000 CONTADORES CAPACITADOS
        </p>
      </div>
    </div>
  );
}