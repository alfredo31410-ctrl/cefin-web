import { instructores } from "@/data/instructores"
import Image from "next/image"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function InstructorDetalle({ params }: Props) {

  const { slug } = await params

  const instructor = instructores.find(
    (i) => i.slug === slug
  )

  if (!instructor) return notFound()

  return (
    <main>

      {/* ===== HERO ===== */}

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGEN */}

          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">

            <Image
              src={instructor.imagen}
              alt={instructor.nombre}
              fill
              className="object-cover"
            />

          </div>

          {/* INFO */}

          <div>

            <p className="text-sm uppercase tracking-wider text-red-600 font-semibold mb-3">
              Instructor CEFIN
            </p>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              {instructor.nombre}
            </h1>

            <p className="text-lg md:text-xl text-red-600 font-semibold mb-4">
              {instructor.especialidad}
            </p>

            {/* FRASE 🔥 */}

            {instructor.frase && (
              <p className="text-lg italic text-slate-600 mb-6">
                “{instructor.frase}”
              </p>
            )}

            {/* DESCRIPCIÓN CORTA */}

            <p className="text-slate-600 leading-relaxed">
              {instructor.descripcionCorta}
            </p>

          </div>

        </div>
      </section>


      {/* ===== RESUMEN ===== */}

      {instructor.resumen && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
              Perfil profesional
            </h2>

            <p className="text-slate-600 leading-relaxed">
              {instructor.resumen}
            </p>

          </div>
        </section>
      )}


      {/* ===== EXPERIENCIA ===== */}

      {instructor.experiencia && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-slate-900">
              Experiencia y logros
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

              {instructor.experiencia.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center"
                >
                  <p className="font-semibold text-slate-800">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>
      )}


      {/* ===== HISTORIA ===== */}

      {instructor.historia && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 text-center">
              Trayectoria
            </h2>

            <div className="text-slate-600 leading-relaxed whitespace-pre-line space-y-4">
              {instructor.historia}
            </div>

          </div>
        </section>
      )}

    </main>
  )
}