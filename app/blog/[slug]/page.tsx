import { blog as blogsLocales } from "@/data/blogs"
import { getAllBlogs } from "@/lib/blogs"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { FaYoutube } from "react-icons/fa"

// 1. Genera las rutas estáticas (esto está bien)
export async function generateStaticParams() {
  const todos = [...blogsLocales, ...getAllBlogs()]
  return todos.map((post) => ({
    slug: post.slug,
  }))
}

// 2. Definimos que params es una Promesa (Estándar de Next.js reciente)
type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogDetalle({ params }: Props) {
  // Esperamos a que los params lleguen
  const { slug } = await params

  const todos = [...blogsLocales, ...getAllBlogs()]
  const post = todos.find((b) => b.slug === slug)

  if (!post) {
    notFound()
  }

  const fechaValida = new Date(post.fecha)
  const fechaFormateada = !isNaN(fechaValida.getTime())
    ? fechaValida.toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : String(post.fecha)

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      {/* Botón de volver */}
      <Link href="/blog" className="text-slate-400 hover:text-red-600 mb-8 inline-block font-medium transition">
        ← Volver al blog
      </Link>

      {/* Imagen principal */}
      <div className="relative w-full h-62.5 md:h-112.5 mb-12 shadow-2xl">
        <Image
          src={post.imagen}
          alt={post.titulo}
          fill
          className="rounded-3xl object-cover"
          priority
        />
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="grow">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900">
            {post.titulo}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <span className="bg-red-50 text-red-600 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
              Actualización
            </span>
            <p className="text-slate-400 text-sm font-medium">
              📅 {fechaFormateada}
            </p>
          </div>

          <div className="prose prose-lg max-w-none whitespace-pre-line text-slate-700 leading-relaxed mb-12">
            {post.contenido}
          </div>
        </div>

        {/* Card Lateral para el CTA de YouTube */}
        <div className="w-full md:w-80 bg-slate-50 p-6 rounded-3xl border border-slate-100 sticky top-24">
          <h3 className="font-bold text-lg mb-4 text-slate-900">¿Prefieres ver el video?</h3>
          <p className="text-sm text-slate-500 mb-6">
            Esta clase está disponible completa en nuestro canal de YouTube con ejemplos prácticos.
          </p>
          
          <Link 
            href={post.videoId ? `https://www.youtube.com/watch?v=${post.videoId}` : "https://www.youtube.com/@CEFINImpuestos"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-red-600 text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-lg shadow-red-100"
          >
            <FaYoutube size={22} />
            VER EN YOUTUBE
          </Link>
        </div>
      </div>

      {/* Video Embed (opcional al final) */}
      {post.videoId && (
        <div className="mt-16 border-t border-slate-100 pt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Clase Maestra Relacionada</h2>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-3xl shadow-2xl"
              src={`https://www.youtube.com/embed/${post.videoId}`}
              title={post.titulo}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}