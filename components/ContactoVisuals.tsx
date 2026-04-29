"use client";

import { motion } from "framer-motion";
import TrackedLink from "@/components/TrackedLink";

export function HeroContacto() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <span className="mb-4 block text-[10px] font-bold uppercase tracking-widest text-red-600 md:text-xs">
        Estamos para servirte
      </span>
      <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
        Tienes dudas? <br className="hidden md:block" /> Te ayudamos a decidir
      </h1>
      <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
        Nuestro equipo puede ayudarte a elegir la capacitacion ideal segun tu
        nivel, objetivos y experiencia profesional.
      </p>
    </motion.section>
  );
}

export function WhatsAppBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <div className="group relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-emerald-50 p-8 text-center shadow-sm md:p-12">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl transition-colors group-hover:bg-emerald-500/10" />

        <div className="relative z-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-3xl text-white shadow-lg shadow-emerald-200">
            💬
          </div>
          <h2 className="mb-4 text-2xl font-black text-slate-800 md:text-3xl">
            Atencion inmediata por WhatsApp
          </h2>
          <p className="mx-auto mb-8 max-w-md text-lg text-slate-600">
            Resolvemos tus dudas en minutos y te guiamos paso a paso en tu
            proceso de inscripcion.
          </p>
          <TrackedLink
            href="https://wa.me/524494554578"
            eventName="Contact"
            eventParams={{
              content_name: "Contacto WhatsApp banner",
              content_category: "Contacto",
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-10 py-4 font-black text-white shadow-xl shadow-emerald-600/20 transition-all hover:scale-105 hover:bg-emerald-700"
          >
            Hablar con un asesor
          </TrackedLink>
        </div>
      </div>
    </motion.section>
  );
}
