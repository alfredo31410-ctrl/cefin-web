import { eventos as eventosLocales } from "@/data/eventos"
import { getAllEventos } from "@/lib/eventos"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, CheckCircle2, ShieldCheck, ArrowLeft } from "lucide-react"

// 1. ESTO ES CLAVE: Permite que Next.js busque en la base de datos 
// eventos que no existían cuando se hizo el build inicial.
export const dynamicParams = true; 

export async function generateStaticParams() {
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
const todos = [...eventosLocales, ...getAllEventos()]
const evento = todos.find((e) => e.slug === slug)

if (!evento) {
  notFound()
}

// Lógica de tiempo
const ahora = new Date()
const fechaEvento = new Date(evento.fecha as any)
const esPasado = ahora > fechaEvento

  const fechaFormateada = (evento.fecha as any) instanceof Date 
    ? (evento.fecha as any).toLocaleDateString('es-MX', { 
        day: '2-digit', month: 'long', year: 'numeric' 
      })
    : String(evento.fecha);

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* HEADER / HERO DEL EVENTO */}
      <div className="relative w-full h-87.5 md:h-125 mb-12">
        <Image
          src={evento.imagen}
          alt={evento.titulo}
          fill
          className="object-cover brightness-[0.8]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-12">
            <Link href="/eventos" className="text-white/70 hover:text-white flex items-center gap-2 mb-6 transition text-sm font-bold uppercase tracking-widest">
              <ArrowLeft size={16} /> Volver a eventos
            </Link>
            <h1 className="text-4xl md:text-6xl font-black text-white max-w-4xl leading-tight tracking-tight">
              {evento.titulo}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUMNA IZQUIERDA: CONTENIDO */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter">
                Evento en Vivo
              </span>
              <div className="flex items-center gap-2 text-slate-500 font-bold">
                <Calendar size={18} className="text-red-600" />
                {fechaFormateada}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-black text-slate-900 mb-6">Acerca de este curso</h2>
              <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line mb-10">
                {evento.descripcionLarga || evento.descripcion}
              </p>

              <h3 className="text-2xl font-black text-slate-900 mb-6">¿Qué vas a aprender?</h3>
              <ul className="space-y-4 mb-12">
                {["Actualización normativa 2026", "Casos prácticos reales", "Material de apoyo descargable"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMNA DERECHA: CARD DE VENTA (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-slate-50 border border-slate-200 p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50">
              <div className="mb-6">
                <p className="text-slate-400 text-sm font-bold uppercase mb-1">Inversión Especial</p>
                {/* 2. PRECIO DINÁMICO: Para que no siempre salga el mismo monto */}
                <div className="text-4xl font-black text-slate-900">
                  {evento.precio} <span className="text-lg font-medium">MXN</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-600 text-sm font-semibold">
                  <Clock size={18} className="text-slate-400" />
                  Acceso por 12 meses
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-sm font-semibold">
                  <ShieldCheck size={18} className="text-slate-400" />
                  Garantía de satisfacción Hotmart
                </div>
              </div>

              <a
                href={evento.hotmart}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl font-black text-center block transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-red-200 text-lg uppercase tracking-tight"
              >
                Inscribirme ahora
              </a>

              <p className="text-center text-[10px] text-slate-400 mt-4 leading-tight">
                Al hacer clic, serás redirigido a la plataforma segura de Hotmart para completar tu inscripción.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}