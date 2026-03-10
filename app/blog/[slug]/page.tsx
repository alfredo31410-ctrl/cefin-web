import { blog as blogsLocales } from "@/data/blogs" // Tus posts fijos
import { getAllBlogs } from "@/lib/blogs"     // Tus posts del MD
import { notFound } from "next/navigation"
import Image from "next/image"

// 1. Esto le dice a Next.js qué páginas debe generar al construir el sitio
export async function generateStaticParams() {
  const todos = [...blogsLocales, ...getAllBlogs()]
  return todos.map((post) => ({
    slug: post.slug
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogDetalle({ params }: Props) {
  const { slug } = await params
  
  // 2. Buscamos en la lista fusionada
  const todos = [...blogsLocales, ...getAllBlogs()]
  const post = todos.find((b) => b.slug === slug)

  if (!post) {
    notFound()
  }

  // Lógica de fecha para el detalle
  const fechaValida = new Date(post.fecha)
  const fechaFormateada = !isNaN(fechaValida.getTime())
    ? fechaValida.toLocaleDateString('es-MX', { day: '2-digit', month: 'long', year: 'numeric' })
    : String(post.fecha)

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      {/* Imagen Principal */}
      <div className="relative w-full h-[400px] mb-8">
        <Image
          src={post.imagen}
          alt={post.titulo}
          fill
          className="rounded-2xl object-cover"
          priority
        />
      </div>

      <h1 className="text-4xl font-bold mb-4">{post.titulo}</h1>
      <p className="text-slate-500 mb-8">📅 {fechaFormateada}</p>

      {/* Contenido del post */}
      <div className="prose prose-lg max-w-none whitespace-pre-line text-slate-700">
        {post.contenido}
      </div>
      
      {/* Si tienes videos de YouTube en tus capacitaciones */}
      {post.videoId && (
        <div className="mt-12 aspect-video">
           <iframe 
            className="w-full h-full rounded-xl shadow-lg"
            src={`https://www.youtube.com/embed/${post.videoId}`}
            title={post.titulo}
            allowFullScreen
           />
        </div>
      )}
    </div>
  )
}