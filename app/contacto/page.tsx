export default function ContactoPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      <h1 className="text-4xl font-bold mb-6">
        Contacto
      </h1>

      <p className="text-slate-600 mb-12 max-w-2xl">
        ¿Tienes dudas sobre nuestros cursos o membresías?
        Nuestro equipo te ayudará a elegir la mejor capacitación.
      </p>

      <div className="grid md:grid-cols-2 gap-16">

        {/* FORMULARIO */}

        <form className="space-y-6">

          <div>
            <label className="block text-sm font-medium mb-1">
              Nombre
            </label>
            <input
              type="text"
              className="w-full border border-slate-300 rounded-lg px-4 py-2"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-slate-300 rounded-lg px-4 py-2"
              placeholder="correo@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Mensaje
            </label>
            <textarea
              rows={5}
              className="w-full border border-slate-300 rounded-lg px-4 py-2"
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>

          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
            Enviar mensaje
          </button>

        </form>

        {/* INFO CONTACTO */}

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold text-lg mb-1">
              WhatsApp
            </h3>

            <a
              href="https://wa.me/524491234567"
              target="_blank"
              className="text-green-600 hover:underline"
            >
              Enviar mensaje por WhatsApp
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              Email
            </h3>

            <p className="text-slate-600">
              contacto@cefin.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              Horario de atención
            </h3>

            <p className="text-slate-600">
              Lunes a Viernes
              <br />
              9:00 AM - 6:00 PM
            </p>
          </div>

        </div>

      </div>

    </main>
  )
}