import { eventos } from "@/data/eventos"
import { notFound } from "next/navigation"
import Image from "next/image"

export async function generateStaticParams() {
  return eventos.map((evento) => ({
    slug: evento.slug
  }))
}

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function EventoDetalle({ params }: Props) {

  const { slug } = await params

  const evento = eventos.find(
    (e) => e.slug === slug
  )

  if (!evento) {
    notFound()
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">

      {/* Imagen del evento */}
      <div className="relative w-full h-80 mb-8">
  <Image
    src={evento.imagen}
    alt={evento.titulo}
    fill
    className="rounded-xl object-cover"
  />
</div>

      {/* Titulo */}
      <h1 className="text-4xl font-bold mb-4">
        {evento.titulo}
      </h1>

      {/* Fecha */}
      <p className="text-slate-500 mb-6 text-lg">
        📅 {evento.fecha}
      </p>


      {/* Descripción */}
      <p className="text-lg mb-10 leading-relaxed">
        {evento.descripcionLarga}
      </p>

      {/* Botón comprar */}
      <a
        href={evento.hotmart}
        target="_blank"
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
      >
        Comprar acceso
      </a>

    </div>
  )
}