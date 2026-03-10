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

  if (!instructor) {
    return notFound()
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="relative w-full aspect-square">

          <Image
            src={instructor.imagen}
            alt={instructor.nombre}
            fill
            className="object-contain"
          />

        </div>

        <div>

          <h1 className="text-4xl font-bold mb-4">
            {instructor.nombre}
          </h1>

          <p className="text-red-600 font-semibold mb-4">
            {instructor.especialidad}
          </p>

          <p className="text-slate-600 whitespace-pre-line">
            {instructor.bio}
          </p>

        </div>

      </div>

    </main>
  )
}