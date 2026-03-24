"use client"

import { motion } from "framer-motion"
import Container from "@/components/Container"
import Grid from "@/components/Grid"
import MembresiaCard from "@/components/MembresiaCard"
import MembresiaHeroCard from "@/components/MembresiaHeroCard" // <--- El nuevo que crearemos
import { membresias } from "@/data/membresias"

export default function MembresiasPage() {
  // 1. Separamos la Membresía Total de las demás
  // Buscamos la que tenga "Total" en el título o el ID específico (asumiendo que es el 5 por tu imagen)
  const membresiaTotal = membresias.find(m => m.titulo.toLowerCase().includes("total"))
  const otrasMembresias = membresias.filter(m => !m.titulo.toLowerCase().includes("total"))

  return (
    <main className="py-20 md:py-28 bg-slate-50/50">
      <Container>
        {/* HERO HEADER */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block italic">
            Potencia tu carrera profesional
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight">
            Membresías CEFIN 2026
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Elige el nivel de acceso que necesitas para dominar el mundo fiscal y contable.
          </p>
        </motion.section>

        {/* 2. LA MEMBRESÍA HERO (DESTACADA) */}
        {membresiaTotal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <MembresiaHeroCard membresia={membresiaTotal} />
          </motion.div>
        )}

        {/* 3. GRID DE LAS DEMÁS MEMBRESÍAS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center md:text-left">
            Otras opciones de capacitación
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Grid>
              {otrasMembresias.map((membresia) => (
                <MembresiaCard
                  key={membresia.id}
                  membresia={membresia}
                />
              ))}
            </Grid>
          </motion.div>
        </div>

        {/* CTA FINAL */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-8 md:p-16 bg-slate-900 rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-2xl shadow-slate-200"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">¿Buscas algo a la medida?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto relative z-10">
            Asesoría personalizada para despachos y equipos contables.
          </p>
          <button className="bg-red-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-red-700 hover:scale-105 transition-all shadow-xl shadow-red-900/40 relative z-10">
            Contactar ahora
          </button>
        </motion.section>
      </Container>
    </main>
  );
}