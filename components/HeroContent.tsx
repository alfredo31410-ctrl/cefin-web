"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroContent() {
  return (
    /* Mantenemos el mismo contenedor con z-10 y padding */
    <div className="relative z-10 text-center max-w-4xl px-6 pt-28 md:pt-32">
      
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-wider text-red-400 font-bold mb-4"
      >
        Capacitación fiscal profesional en México
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-3xl md:text-6xl font-bold mb-6 leading-tight"
      >
        Actualización fiscal inteligente
        <br />
        para contadores que quieren crecer
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-slate-200"
      >
        Domina reformas fiscales, CFDI 4.0 y cumplimiento SAT con capacitación práctica impartida por especialistas.
      </motion.p>

      {/* BOTONES */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <a href="/cursos">
          <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg font-semibold transition">
            Ver Cursos
          </button>
        </a>

        <a href="/membresias">
          <button className="w-full sm:w-auto border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition">
            Ver Membresías
          </button>
        </a>
      </motion.div>

      <p className="mt-8 text-sm text-slate-300">
        +5,000 contadores capacitados en México
      </p>
    </div>
  );
}