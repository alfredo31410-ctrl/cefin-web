import { getAllBlogs } from "@/lib/blogs"
import BlogCard from "@/components/BlogCard"
import { blog as blogsLocales } from "@/data/blogs"

export default function BlogPage() {
  const blogsCMS = getAllBlogs()
  const todosLosBlogs = [...blogsLocales, ...blogsCMS]

  const blogsOrdenados = todosLosBlogs.sort((a, b) => {
    return new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  }
  )
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <h1 className="text-4xl font-bold mb-6">
        Capacitaciones Gratuitas
      </h1>

      {/* Live semanal */}

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">

        <h2 className="text-xl font-bold mb-2">
          🔴 En vivo todos los martes
        </h2>

        <p className="text-slate-600 mb-4">
          Transmitimos capacitaciones gratuitas en YouTube a las 11 AM.
        </p>

        <a
          href="https://www.youtube.com/@CEFINImpuestos"
          target="_blank"
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Ver transmisión
        </a>

      </div>

      {/* Biblioteca */}

      <div className="grid md:grid-cols-3 gap-8">

        {blogsOrdenados.map((post: any) => (
          <BlogCard key={post.slug} post={post} />
        ))}

      </div>

    </main>
  )
}