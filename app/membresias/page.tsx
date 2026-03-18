"use client"

import { motion } from "framer-motion"
import Container from "@/components/Container"
import Grid from "@/components/Grid"
import MembresiaCard from "@/components/MembresiaCard"
import { membresias } from "@/data/membresias"

export default function MembresiasPage() {
  return (
    <main className="py-20 md:py-28 bg-slate-50/50">
      <Container>
        {/* HERO CON ANIMACIÓN DE ENTRADA */}
        <motion.section 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">
            Planes de capacitación
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight">
            Membresías CEFIN
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Acceso anual a cursos especializados en fiscal, contabilidad,
            nómina y actualización profesional para contadores.
          </p>
        </motion.section>

        {/* GRID DE MEMBRESÍAS CON STAGGER (Efecto cascada) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Grid>
            {membresias.map((membresia) => (
              <MembresiaCard
                key={membresia.id}
                membresia={membresia}
              />
            ))}
          </Grid>
        </motion.div>

        {/* CTA FINAL UNIFICADO */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-8 md:p-16 bg-slate-900 rounded-3xl text-center text-white relative overflow-hidden"
        >
          {/* Decoración sutil de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
            ¿No sabes cuál elegir?
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto relative z-10">
            Nuestro equipo está listo para asesorarte y encontrar el plan que mejor se adapte a tu perfil profesional.
          </p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 hover:scale-105 transition-all shadow-lg shadow-red-900/20 relative z-10">
            Hablar con un asesor ahora
          </button>
        </motion.section>
      </Container>
    </main>
  );
}