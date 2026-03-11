import { getAllBlogs } from "@/lib/blogs"
import BlogCard from "@/components/BlogCard"
import { blog as blogsLocales } from "@/data/blogs"

import Container from "@/components/Container"
import Grid from "@/components/Grid"

export default function BlogPage() {

  /*
    OBTENEMOS BLOGS DEL CMS + BLOGS LOCALES
  */
  const blogsCMS = getAllBlogs()
  const todosLosBlogs = [...blogsLocales, ...blogsCMS]

  /*
    ORDENAMOS LOS BLOGS POR FECHA
  */
  const blogsOrdenados = todosLosBlogs.sort((a, b) => {
    return new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  })


  return (

    /*
      MAIN SOLO CONTROLA EL ESPACIADO VERTICAL
      Usamos padding responsive
    */
    <main className="py-20 md:py-24">

      {/* CONTENEDOR GLOBAL DEL SITIO */}

      <Container>

        {/* TITULO DE LA PAGINA */}

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Capacitaciones Gratuitas
        </h1>


        {/* BLOQUE LIVE SEMANAL */}

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 md:p-6 mb-12">

          {/* Contenedor flexible para responsive */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>

              <h2 className="text-lg md:text-xl font-bold mb-1">
                🔴 En vivo todos los martes
              </h2>

              <p className="text-slate-600 text-sm md:text-base">
                Transmitimos capacitaciones gratuitas en YouTube a las 11 AM.
              </p>

            </div>

            {/* BOTÓN */}

            <a
              href="https://www.youtube.com/@CEFINImpuestos"
              target="_blank"
              className="bg-red-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-red-700 transition text-center"
            >
              Ver transmisión
            </a>

          </div>

        </div>


        {/* GRID DE BLOGS */}

        <Grid>

          {blogsOrdenados.map((post: any) => (

            <BlogCard key={post.slug} post={post} />

          ))}

        </Grid>

      </Container>

    </main>

  )

}