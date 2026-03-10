import { eventos } from "@/data/eventos"
import { notFound } from "next/navigation"
import Image from "next/image" // Importante: que no se te olvide

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
  const evento = eventos.find((e) => e.slug === slug)

  if (!evento) {
    notFound()
  }

  // Formateo de seguridad corregido (usando 'evento' consistentemente)
  const fechaFormateada = (evento.fecha as any) instanceof Date 
    ? (evento.fecha as any).toLocaleDateString('es-MX', { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
      })
    : String(evento.fecha);

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">

      {/* Imagen del evento */}
      <div className="relative w-full h-80 mb-8">
        <Image
          src={evento.imagen}
          alt={evento.titulo}
          fill
          className="rounded-xl object-cover"
          priority // Agregamos priority porque es la imagen principal
        />
      </div>

      {/* Titulo */}
      <h1 className="text-4xl font-bold mb-4">
        {evento.titulo}
      </h1>

      {/* Fecha corregida */}
      <p className="text-slate-500 mb-6 text-lg">
        📅 {fechaFormateada}
      </p>

      {/* Descripción */}
      <p className="text-lg mb-10 leading-relaxed whitespace-pre-line">
        {evento.descripcionLarga || evento.descripcion}
      </p>

      {/* Botón comprar */}
      <a
        href={evento.hotmart}
        target="_blank"
        rel="noopener noreferrer" // Seguridad extra para enlaces externos
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition inline-block"
      >
        Comprar acceso
      </a>

    </div>
  )
}