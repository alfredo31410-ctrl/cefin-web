import { blog } from "@/data/blog"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return blog.map((post) => ({
    slug: post.slug
  }))
}

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogDetalle({ params }: Props) {

  const { slug } = await params

  const post = blog.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Formateo de seguridad
  const fechaFormateada = (post.fecha as any) instanceof Date 
    ? (post.fecha as any). toLocaleDateString('es-MX', { day: '2-digit', month: 'long', year: 'numeric' })
    : String(post.fecha);

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">

      <h1 className="text-4xl font-bold mb-4">
        {post.titulo}
      </h1>

      <p className="text-slate-500 mb-8">
        📅 {fechaFormateada}
      </p>

      {/* Video */}

      <div className="aspect-video mb-8">

        <iframe
          src={`https://www.youtube.com/embed/${post.videoId}`}
          className="w-full h-full rounded-xl"
          allowFullScreen
        />

      </div>

      <p className="text-lg whitespace-pre-line">
        {post.contenido}
      </p>

    </main>
  )
}