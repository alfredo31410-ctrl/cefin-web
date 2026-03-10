import { eventos as eventosLocales } from "@/data/eventos"
import { getAllEventos } from "@/lib/eventos" // Importamos el lector del CMS
import { notFound } from "next/navigation"
import Image from "next/image"

export async function generateStaticParams() {
  // Fusionamos para que Next.js sepa que estas rutas existen
  const todos = [...eventosLocales, ...getAllEventos()]
  return todos.map((evento) => ({
    slug: evento.slug
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function EventoDetalle({ params }: Props) {
  const { slug } = await params
  
  // CORRECCIÓN: Buscamos en ambas listas
  const todos = [...eventosLocales, ...getAllEventos()]
  const evento = todos.find((e) => e.slug === slug)

  if (!evento) {
    notFound()
  }

  const fechaFormateada = (evento.fecha as any) instanceof Date 
    ? (evento.fecha as any).toLocaleDateString('es-MX', { 
        day: '2-digit', month: 'long', year: 'numeric' 
      })
    : String(evento.fecha);

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <div className="relative w-full h-80 mb-8">
        <Image
          src={evento.imagen}
          alt={evento.titulo}
          fill
          className="rounded-xl object-cover"
          priority
        />
      </div>

      <h1 className="text-4xl font-bold mb-4">{evento.titulo}</h1>

      <p className="text-slate-500 mb-6 text-lg">📅 {fechaFormateada}</p>

      <p className="text-lg mb-10 leading-relaxed whitespace-pre-line">
        {evento.descripcionLarga || evento.descripcion}
      </p>

      <a
        href={evento.hotmart}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition inline-block"
      >
        Comprar acceso
      </a>
    </div>
  )
}