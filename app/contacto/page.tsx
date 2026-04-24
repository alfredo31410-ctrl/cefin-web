"use client" // Necesario para manejar el estado del formulario

import { useState } from "react"
import Container from "@/components/Container"
import { HeroContacto, WhatsAppBanner } from "@/components/ContactoVisuals"
import MapaContacto from "@/components/MapaContacto"
import { trackMetaEvent } from "@/lib/meta-pixel"

export default function ContactoPage() {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("SENDING")

    const formData = new FormData(e.currentTarget)
    
    // Cambia el ID 'TU_ID_AQUI' por el que te dé Formspree (es gratis)
    const response = await fetch("https://formspree.io/f/xdawqqjp", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      setStatus("SUCCESS")
      trackMetaEvent("Lead", {
        content_name: "Formulario de contacto",
        content_category: "Contacto",
      })
      ;(e.target as HTMLFormElement).reset()
    } else {
      setStatus("ERROR")
    }
  }

  return (
    <main className="py-20 md:py-28 bg-slate-50/50">
      <Container>
        <HeroContacto />
        <WhatsAppBanner />

        <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* FORMULARIO ESTILIZADO */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h3 className="text-2xl font-black mb-8 text-slate-900">Envíanos un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2 ml-1">Nombre</label>
                  <input
                    name="nombre"
                    required
                    type="text"
                    className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-red-500/20 transition-all text-slate-800 placeholder:text-slate-400 outline-none"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2 ml-1">Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-red-500/20 transition-all text-slate-800 placeholder:text-slate-400 outline-none"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2 ml-1">Mensaje</label>
                <textarea
                  name="mensaje"
                  required
                  rows={4}
                  className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-red-500/20 transition-all text-slate-800 placeholder:text-slate-400 resize-none outline-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button 
                disabled={status === "SENDING"}
                className={`w-full py-5 rounded-2xl font-black transition-all hover:scale-[1.02] shadow-lg shadow-slate-900/10 text-white ${
                  status === "SUCCESS" ? "bg-green-600" : "bg-slate-900 hover:bg-red-600"
                } disabled:opacity-50`}
              >
                {status === "IDLE" && "Enviar mensaje"}
                {status === "SENDING" && "Enviando..."}
                {status === "SUCCESS" && "¡Mensaje enviado!"}
                {status === "ERROR" && "Error, intenta de nuevo"}
              </button>

              {status === "SUCCESS" && (
                <p className="text-center text-xs font-bold text-green-600 animate-pulse">
                  ¡Gracias! Te responderemos muy pronto.
                </p>
              )}
            </form>
          </div>

          {/* INFO DE CONTACTO */}
          <div className="space-y-6 pt-4">
            <a href="mailto:contacto@cefincapacitacion.com" className="block group p-8 rounded-3xl border border-slate-100 bg-white hover:border-red-100 transition-colors">
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-2 block">Correo Electrónico</span>
              <p className="text-xl font-bold text-slate-800 group-hover:text-red-600 transition-colors">contacto@cefincapacitacion.com</p>
            </a>

            <div className="group p-8 rounded-3xl border border-slate-100 bg-white">
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-2 block">Horario de Atención</span>
              <p className="text-xl font-bold text-slate-800">Lunes a Viernes</p>
              <p className="text-slate-500 font-medium">08:00 AM — 03:00 PM</p>
            </div>

            <div className="p-8 rounded-3xl border border-dashed border-slate-200">
              <p className="text-slate-500 text-sm leading-relaxed italic">
                "Nuestra prioridad es que encuentres la herramienta exacta para tu crecimiento profesional."
              </p>
            </div>
          </div>

        </section>
        <MapaContacto />
      </Container>
    </main>
  )
}
