import Container from "@/components/Container"
import Image from "next/image"
import Link from "next/link"
import Reveal from "@/components/Reveal"

export default function NosotrosPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <Container>

        {/* ===== HERO ===== */}

        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">

          <Reveal>
            <div>

              <p className="text-sm uppercase tracking-wider text-red-600 font-semibold mb-3">
                Sobre CEFIN
              </p>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Formación fiscal que transforma tu ejercicio profesional
              </h1>

              <p className="text-slate-600 mb-4 leading-relaxed">
                En CEFIN capacitamos contadores, empresarios y profesionales
                que buscan dominar la materia fiscal y tomar decisiones con
                seguridad, claridad y criterio.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Nuestro enfoque es práctico, actualizado y alineado a la
                realidad del ejercicio profesional en México.
              </p>

            </div>
          </Reveal>

          <Reveal>
            <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg">

              <Image
                src="/equipo-cefin.jpg"
                alt="Equipo CEFIN"
                fill
                className="object-cover"
              />

            </div>
          </Reveal>

        </section>


        {/* ===== IMPACTO (🔥 NUEVO) ===== */}

        <section className="mb-24">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <p className="text-2xl md:text-3xl font-bold text-red-600">+30,000</p>
                <p className="text-sm text-slate-500">Contadores capacitados</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <p className="text-2xl md:text-3xl font-bold text-red-600">+260</p>
                <p className="text-sm text-slate-500">Empresas asesoradas</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <p className="text-2xl md:text-3xl font-bold text-red-600">+15 años</p>
                <p className="text-sm text-slate-500">Experiencia profesional</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <p className="text-2xl md:text-3xl font-bold text-red-600">100%</p>
                <p className="text-sm text-slate-500">Enfoque práctico</p>
              </div>

            </div>
          </Reveal>
        </section>


        {/* ===== HISTORIA ===== */}

        <section className="max-w-3xl mx-auto mb-24 text-center">
          <Reveal>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Nuestra historia
            </h2>

            <p className="text-slate-600 mb-4 leading-relaxed">
              CEFIN nace con el propósito de elevar el nivel del ejercicio
              contable en México, brindando capacitación especializada,
              práctica y alineada a la realidad fiscal.
            </p>

            <p className="text-slate-600 leading-relaxed">
              A lo largo de los años hemos acompañado a miles de contadores
              en su crecimiento profesional, ayudándolos a trabajar con mayor
              seguridad, claridad y confianza.
            </p>

          </Reveal>
        </section>


        {/* ===== MISION Y VISION ===== */}

        <section className="grid md:grid-cols-2 gap-10 mb-24">
          <Reveal>
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border">

              <h3 className="text-xl font-semibold mb-3">
                Nuestra misión
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Capacitar, actualizar y empoderar contadores con herramientas
                prácticas que les permitan cumplir correctamente con sus
                obligaciones fiscales y crecer profesionalmente.
              </p>

            </div>
          </Reveal>

          <Reveal>
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border">

              <h3 className="text-xl font-semibold mb-3">
                Nuestra visión
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Ser la plataforma de referencia en capacitación fiscal y
                contable en México, formando profesionales con criterio,
                seguridad y alto nivel técnico.
              </p>

            </div>
          </Reveal>
        </section>


        {/* ===== CTA ===== */}

        <section className="text-center">
          <Reveal>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Aprende con quienes ya recorrieron el camino
            </h2>

            <p className="text-slate-600 mb-6">
              Nuestros instructores combinan experiencia real con una forma
              clara de enseñar.
            </p>

            <Link
              href="/instructores"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Ver instructores
            </Link>

          </Reveal>
        </section>

      </Container>

    </main>
  )
}