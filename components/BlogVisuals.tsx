"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type FeaturedFreeCourseProps = {
  eyebrow: string
  titulo: string
  descripcion: string
  bullets: string[]
  imagen: string
  ctaHref: string
  ctaLabel: string
}

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

export function FeaturedFreeCourse({
  eyebrow,
  titulo,
  descripcion,
  bullets,
  imagen,
  ctaHref,
  ctaLabel,
}: FeaturedFreeCourseProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.55 }}
      className="mb-14"
    >
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div className="border-b border-slate-200 bg-slate-950/95 px-6 py-4 md:px-8">
          <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-sm">
            {eyebrow}
          </span>
        </div>

        <div className="relative aspect-[1200/628] bg-[#220a3a]">
          <Image
            src={imagen}
            alt={titulo}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:p-12">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-red-600">
              Recomendado para empezar
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
              {titulo}
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              {descripcion}
            </p>
          </div>

          <div className="space-y-3">
            {bullets.map((bullet) => (
              <p
                key={bullet}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 md:text-base"
              >
                {bullet}
              </p>
            ))}

            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-base font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg hover:shadow-red-200 md:text-lg"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
