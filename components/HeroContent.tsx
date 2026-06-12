"use client";

import { motion } from "framer-motion";
import TrackedLink from "@/components/TrackedLink";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-4xl px-6 pt-28 text-center md:pt-32">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-red-400"
      >
        Capacitación fiscal profesional en México
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-6 text-4xl font-black leading-[1.1] tracking-tighter text-white md:text-7xl"
      >
        Actualizacion fiscal inteligente
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mx-auto mb-10 max-w-2xl text-lg font-medium leading-relaxed text-slate-200 md:text-xl"
      >
        Domina reformas fiscales, Contabilidad con NIF y cumplimiento SAT con
        capacitacion practica impartida por especialistas en materia contable.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex flex-col items-center justify-center gap-5 sm:flex-row"
      >
        <TrackedLink
          href="/cursos"
          eventName="ViewContent"
          eventParams={{
            content_name: "Hero cursos",
            content_category: "Navegacion",
          }}
          ariaLabel="Explorar catalogo de cursos fiscales"
          className="w-full rounded-xl bg-emerald-600 px-10 py-4 text-center font-black text-white shadow-xl shadow-emerald-900/20 transition-all hover:scale-105 hover:bg-emerald-700 sm:w-auto"
        >
          VER CURSOS
        </TrackedLink>

        <TrackedLink
          href="/membresias"
          eventName="ViewContent"
          eventParams={{
            content_name: "Hero membresias",
            content_category: "Navegacion",
          }}
          ariaLabel="Conocer planes de membresia anual"
          className="w-full rounded-xl border-2 border-white/30 px-10 py-4 text-center font-black text-white backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900 sm:w-auto"
        >
          MEMBRESIAS 2026
        </TrackedLink>
      </motion.div>

      <div className="mt-12 flex items-center justify-center gap-2 opacity-70">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-300">
          +35,000 CONTADORES CAPACITADOS
        </p>
      </div>
    </div>
  );
}
