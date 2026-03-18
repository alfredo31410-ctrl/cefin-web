"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroNosotros() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-12 items-center mb-32"
    >
      <div>
        <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">
          Sobre CEFIN
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-slate-900 tracking-tight">
          Formación fiscal que transforma tu ejercicio profesional
        </h1>
        <div className="space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            En CEFIN capacitamos contadores, empresarios y profesionales
            que buscan dominar la materia fiscal y tomar decisiones con
            seguridad, claridad y criterio.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-red-600 pl-6 italic">
            Nuestro enfoque es práctico, actualizado y alineado a la
            realidad del ejercicio profesional en México.
          </p>
        </div>
      </div>

      <div className="relative h-80 md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/equipo-cefin.jpg"
          alt="Equipo CEFIN"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>
    </motion.section>
  )
}

export function ImpactoStats() {
  const stats = [
    { label: "Contadores capacitados", value: "+30,000" },
    { label: "Empresas asesoradas", value: "+260" },
    { label: "Experiencia profesional", value: "+15 años" },
    { label: "Enfoque práctico", value: "100%" },
  ]

  return (
    <section className="mb-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow"
          >
            <p className="text-3xl md:text-4xl font-black text-red-600 mb-2">{stat.value}</p>
            <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}