import Container from "@/components/Container"
import Link from "next/link"
import { HeroNosotros, ImpactoStats } from "@/components/NosotrosVisuals"

export default function NosotrosPage() {
  return (
    <main className="py-20 md:py-28 bg-slate-50/50">
      <Container>
        
        <HeroNosotros />

        <ImpactoStats />

        {/* HISTORIA */}
        <section className="max-w-3xl mx-auto mb-32 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-slate-900">Nuestra historia</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              CEFIN nace con el propósito de elevar el nivel del ejercicio
              contable en México, brindando capacitación especializada,
              práctica y alineada a la realidad fiscal.
            </p>
            <p>
              A lo largo de los años hemos acompañado a miles de contadores
              en su crecimiento profesional, ayudándolos a trabajar con mayor
              seguridad, claridad y confianza.
            </p>
          </div>
        </section>

        {/* MISION Y VISION */}
        <section className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="bg-slate-900 p-10 rounded-[2.5rem] shadow-xl text-white">
            <div className="w-12 h-12 bg-red-600 rounded-xl mb-6 flex items-center justify-center text-2xl">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Nuestra misión</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              Capacitar, actualizar y empoderar contadores con herramientas
              prácticas que les permitan cumplir correctamente con sus
              obligaciones fiscales y crecer profesionalmente.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-slate-100 rounded-xl mb-6 flex items-center justify-center text-2xl">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Nuestra visión</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Ser la plataforma de referencia en capacitación fiscal y
              contable en México, formando profesionales con criterio,
              seguridad y alto nivel técnico.
            </p>
          </div>
        </section>

        {/* CTA FINAL (Mismo estilo que los anteriores) */}
        <section className="p-8 md:p-16 bg-red-600 rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-2xl shadow-red-200">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">
            Aprende con expertos
          </h2>
          <p className="text-red-100 mb-10 max-w-xl mx-auto text-lg relative z-10 font-medium">
            Nuestros instructores combinan experiencia real con una metodología clara y efectiva.
          </p>
          <Link
            href="/instructores"
            className="bg-white text-red-600 px-10 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all hover:scale-105 inline-block relative z-10 shadow-lg"
          >
            Conocer a los instructores
          </Link>
        </section>

      </Container>
    </main>
  )
}