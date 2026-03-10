import Image from "next/image"
import Link from "next/link"

export default function NosotrosPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      {/* HERO */}

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <div>

          <h1 className="text-4xl font-bold mb-6">
            Sobre CEFIN
          </h1>

          <p className="text-slate-600 mb-4">
            En CEFIN nos dedicamos a la capacitación especializada
            para contadores, empresarios y profesionales que desean
            mantenerse actualizados en temas fiscales, contables y
            laborales.
          </p>

          <p className="text-slate-600">
            Nuestro objetivo es ofrecer formación práctica y actualizada
            que ayude a los profesionales a tomar mejores decisiones
            en su ejercicio profesional.
          </p>

        </div>

        <div className="relative h-72 w-full">

          <Image
            src="/equipo-cefin.jpg"
            alt="Equipo CEFIN"
            fill
            className="object-cover rounded-xl"
          />

        </div>

      </div>

      {/* HISTORIA */}

      <div className="max-w-3xl mb-20">

        <h2 className="text-2xl font-bold mb-4">
          Nuestra historia
        </h2>

        <p className="text-slate-600 mb-4">
          CEFIN nació con la misión de brindar capacitación
          especializada a profesionales del área contable y fiscal.
        </p>

        <p className="text-slate-600">
          A lo largo de los años hemos formado a cientos de
          profesionales a través de cursos, seminarios y
          capacitaciones en línea impartidas por expertos.
        </p>

      </div>

      {/* MISION VISION */}

      <div className="grid md:grid-cols-2 gap-10 mb-20">

        <div className="bg-slate-50 p-8 rounded-xl">

          <h3 className="text-xl font-semibold mb-3">
            Nuestra misión
          </h3>

          <p className="text-slate-600">
            Brindar capacitación práctica y actualizada en temas
            fiscales, contables y laborales para impulsar el
            crecimiento profesional de nuestros alumnos.
          </p>

        </div>

        <div className="bg-slate-50 p-8 rounded-xl">

          <h3 className="text-xl font-semibold mb-3">
            Nuestra visión
          </h3>

          <p className="text-slate-600">
            Ser un referente en capacitación fiscal y contable
            en México, ofreciendo contenido de alto valor y
            formación de calidad.
          </p>

        </div>

      </div>

      {/* CTA INSTRUCTORES */}

      <div className="text-center">

        <h2 className="text-2xl font-bold mb-4">
          Conoce a nuestros instructores
        </h2>

        <p className="text-slate-600 mb-6">
          Aprende de profesionales con amplia experiencia en el
          área fiscal y contable.
        </p>

        <Link
          href="/instructores"
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Ver instructores
        </Link>

      </div>

    </main>
  )
}