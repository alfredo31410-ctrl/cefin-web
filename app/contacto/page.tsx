"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { HeroContacto, WhatsAppBanner } from "@/components/ContactoVisuals";
import MapaContacto from "@/components/MapaContacto";
import TrackedLink from "@/components/TrackedLink";
import { trackMetaEvent } from "@/lib/meta-pixel";

export default function ContactoPage() {
  const [status, setStatus] = useState<
    "IDLE" | "SENDING" | "SUCCESS" | "ERROR"
  >("IDLE");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("SENDING");

    const formData = new FormData(e.currentTarget);
    const response = await fetch("https://formspree.io/f/xdawqqjp", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      trackMetaEvent("Lead", {
        content_name: "Formulario de contacto",
        content_category: "Contacto",
      });
      (e.target as HTMLFormElement).reset();
      return;
    }

    setStatus("ERROR");
  }

  return (
    <main className="bg-slate-50/50 py-20 md:py-28">
      <Container>
        <HeroContacto />
        <WhatsAppBanner />

        <section className="grid items-start gap-12 md:grid-cols-2 lg:gap-20">
          <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm md:p-10">
            <h3 className="mb-8 text-2xl font-black text-slate-900">
              Envianos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 ml-1 block text-[11px] font-black uppercase tracking-wider text-slate-400">
                    Nombre
                  </label>
                  <input
                    name="nombre"
                    required
                    type="text"
                    className="w-full rounded-2xl bg-slate-50 px-5 py-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-red-500/20"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="mb-2 ml-1 block text-[11px] font-black uppercase tracking-wider text-slate-400">
                    Email
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full rounded-2xl bg-slate-50 px-5 py-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-red-500/20"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 ml-1 block text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  required
                  rows={4}
                  className="w-full resize-none rounded-2xl bg-slate-50 px-5 py-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-red-500/20"
                  placeholder="En que podemos ayudarte?"
                />
              </div>

              <button
                disabled={status === "SENDING"}
                className={`w-full rounded-2xl py-5 font-black text-white shadow-lg shadow-slate-900/10 transition-all hover:scale-[1.02] ${
                  status === "SUCCESS"
                    ? "bg-green-600"
                    : "bg-slate-900 hover:bg-red-600"
                } disabled:opacity-50`}
              >
                {status === "IDLE" && "Enviar mensaje"}
                {status === "SENDING" && "Enviando..."}
                {status === "SUCCESS" && "Mensaje enviado"}
                {status === "ERROR" && "Error, intenta de nuevo"}
              </button>

              {status === "SUCCESS" && (
                <p className="animate-pulse text-center text-xs font-bold text-green-600">
                  Gracias. Te responderemos muy pronto.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6 pt-4">
            <TrackedLink
              href="mailto:contacto@cefincapacitacion.com"
              eventName="Contact"
              eventParams={{
                content_name: "Contacto email card",
                content_category: "Contacto",
              }}
              className="block rounded-3xl border border-slate-100 bg-white p-8 transition-colors hover:border-red-100 group"
            >
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-red-600">
                Correo electronico
              </span>
              <p className="text-xl font-bold text-slate-800 transition-colors group-hover:text-red-600">
                contacto@cefincapacitacion.com
              </p>
            </TrackedLink>

            <div className="rounded-3xl border border-slate-100 bg-white p-8">
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-red-600">
                Horario de atencion
              </span>
              <p className="text-xl font-bold text-slate-800">
                Lunes a Viernes
              </p>
              <p className="font-medium text-slate-500">08:00 AM - 03:00 PM</p>
            </div>

            <div className="rounded-3xl border border-dashed border-slate-200 p-8">
              <p className="text-sm italic leading-relaxed text-slate-500">
                "Nuestra prioridad es que encuentres la herramienta exacta para
                tu crecimiento profesional."
              </p>
            </div>
          </div>
        </section>

        <MapaContacto />
      </Container>
    </main>
  );
}
