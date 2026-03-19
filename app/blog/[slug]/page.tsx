import { blog as blogsLocales } from "@/data/blogs"
import { getAllBlogs } from "@/lib/blogs"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { FaYoutube, FaCalendarAlt } from "react-icons/fa"

export async function generateStaticParams() {
  const todos = [...blogsLocales, ...getAllBlogs()]
  return todos.map((post) => ({
    slug: post.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogDetalle({ params }: Props) {
  const { slug } = await params

  const todos = [...blogsLocales, ...getAllBlogs()]
  const post = todos.find((b) => b.slug === slug)

  if (!post) {
    notFound()
  }

  // --- LÓGICA DE LIMPIEZA INTELIGENTE DE YOUTUBE ---
  const rawId = post.videoId || "";
  
  // 1. Intentamos extraer el ID de la Playlist (lo que viene después de list=)
  const playlistMatch = rawId.match(/[&?]list=([^&]+)/);
  const playlistId = playlistMatch ? playlistMatch[1] : (rawId.startsWith('PL') ? rawId : null);

  // 2. Intentamos extraer el ID del Video (lo que viene antes del primer & o el ID solo)
  const videoId = rawId.split('&')[0].split('?')[1]?.includes('v=') 
    ? rawId.split('v=')[1].split('&')[0] 
    : rawId.split('&')[0];

  // 3. Construimos la URL final según lo que encontramos
  let embedUrl = "";
  if (playlistId) {
    embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
  } else if (videoId) {
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }
  // -------------------------------------------------

  const contenidoFinal = post.contenido || (post as any).body || ""

  const fechaValida = new Date(post.fecha)
  const fechaFormateada = !isNaN(fechaValida.getTime())
    ? fechaValida.toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : String(post.fecha)

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 lg:py-24">
      <Link href="/blog" className="group text-slate-400 hover:text-red-600 mb-10 inline-flex items-center gap-2 font-semibold transition-all">
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al listado
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-8">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">
              Actualización 2026
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-bold">
              <FaCalendarAlt className="text-red-400" />
              {fechaFormateada}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-slate-900 leading-[1.1]">
            {post.titulo}
          </h1>

          {/* REPRODUCTOR INTELIGENTE (Ya no se rompe) */}
          {embedUrl && (
            <div className="aspect-video w-full mb-10">
              <iframe
                className="w-full h-full rounded-3xl shadow-2xl"
                src={embedUrl}
                title={post.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed 
            prose-headings:text-slate-900 prose-headings:font-black prose-strong:text-red-600
            whitespace-pre-line">
            {contenidoFinal}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            
            <div className="bg-white p-8 rounded-4xl border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full -mr-10 -mt-10 opacity-50" />
              
              <h3 className="font-black text-xl mb-3 text-slate-900 relative">
                {post.videoId ? "¡Mira la clase completa!" : "¿Quieres más contenido?"}
              </h3>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                {post.videoId 
                  ? "Esta sesión incluye casos prácticos grabados para que domines el tema paso a paso."
                  : "Suscríbete a nuestro canal para no perderte ninguna actualización fiscal en vivo."}
              </p>
              
              <Link 
                href={playlistId 
                  ? `https://www.youtube.com/playlist?list=${playlistId}` 
                  : `https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-3 hover:bg-red-600 transition-all shadow-lg hover:shadow-red-200 group"
              >
                <FaYoutube size={24} className="text-red-500 group-hover:text-white transition-colors" />
                {playlistId ? "VER PLAYLIST COMPLETA" : "ABRIR EN YOUTUBE"}
              </Link>
            </div>

            <div className="bg-red-600 p-8 rounded-4xl text-white">
              <h4 className="font-black text-lg mb-2">Capacitación Premium</h4>
              <p className="text-sm opacity-90 mb-4">¿Buscas constancia con valor curricular?</p>
              <Link href="/cursos" className="text-xs font-bold underline hover:opacity-100">
                Ver catálogo de cursos →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}