import Container from "@/components/Container"
import { HeroContacto, WhatsAppBanner } from "@/components/ContactoVisuals"

export default function ContactoPage() {
  return (
    <main className="py-20 md:py-28 bg-slate-50/50">
      <Container>
        
        <HeroContacto />

        <WhatsAppBanner />

        <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* FORMULARIO ESTILIZADO */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h3 className="text-2xl font-black mb-8 text-slate-900">Envíanos un mensaje</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2 ml-1">Nombre</label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-red-500/20 transition-all text-slate-800 placeholder:text-slate-400"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2 ml-1">Email</label>
                  <input
                    type="email"
                    className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-red-500/20 transition-all text-slate-800 placeholder:text-slate-400"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2 ml-1">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-red-500/20 transition-all text-slate-800 placeholder:text-slate-400 resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black hover:bg-red-600 transition-all hover:scale-[1.02] shadow-lg shadow-slate-900/10">
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* INFO DE CONTACTO */}
          <div className="space-y-6 pt-4">
            <div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-red-100 transition-colors">
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-2 block">Correo Electrónico</span>
              <p className="text-xl font-bold text-slate-800 group-hover:text-red-600 transition-colors">contacto@cefincapacitacion.com</p>
            </div>

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

      </Container>
    </main>
  )
}