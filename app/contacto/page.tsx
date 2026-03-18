import Container from "@/components/Container"
import Reveal from "@/components/Reveal"

export default function ContactoPage() {
  return (
    <main className="py-24">

      <Container>

        {/* ===== HERO ===== */}

        <section className="text-center mb-16">
          <Reveal>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Tienes dudas? Te ayudamos a decidir
            </h1>

            <p className="text-slate-600 max-w-2xl mx-auto">
              Nuestro equipo puede ayudarte a elegir la capacitación ideal
              según tu nivel, objetivos y experiencia profesional.
            </p>

          </Reveal>
        </section>


        {/* ===== CTA WHATSAPP (🔥 PRINCIPAL) ===== */}

        <section className="mb-16">
          <Reveal>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center shadow-sm">

              <h2 className="text-2xl font-semibold mb-3">
                Atención inmediata por WhatsApp
              </h2>

              <p className="text-slate-600 mb-6">
                Resolvemos tus dudas en minutos y te guiamos paso a paso.
              </p>

              <a
                href="https://wa.me/524494554578"
                target="_blank"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Hablar por WhatsApp
              </a>

            </div>

          </Reveal>
        </section>


        {/* ===== FORM + INFO ===== */}

        <section className="grid md:grid-cols-2 gap-16">

          {/* FORMULARIO */}

          <Reveal>
            <form className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border">

              <h3 className="text-xl font-semibold mb-4">
                Envíanos un mensaje
              </h3>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="correo@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                Enviar mensaje
              </button>

            </form>
          </Reveal>


          {/* INFO */}

          <Reveal>
            <div className="space-y-8">

              <div className="bg-slate-50 p-6 rounded-xl border">
                <h3 className="font-semibold text-lg mb-2">
                  WhatsApp
                </h3>

                <a
                  href="https://wa.me/524494554578"
                  target="_blank"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Enviar mensaje
                </a>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border">
                <h3 className="font-semibold text-lg mb-2">
                  Email
                </h3>

                <p className="text-slate-600">
                  contacto@cefincapacitacion.com
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border">
                <h3 className="font-semibold text-lg mb-2">
                  Horario de atención
                </h3>

                <p className="text-slate-600">
                  Lunes a Viernes <br />
                  8:00 AM - 3:00 PM
                </p>
              </div>

            </div>
          </Reveal>

        </section>

      </Container>

    </main>
  )
}