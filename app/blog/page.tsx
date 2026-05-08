import { getAllBlogs } from "@/lib/blogs"
import BlogCard from "@/components/BlogCard"
import { blog as blogsLocales, featuredFreeCourse } from "@/data/blogs"
import Container from "@/components/Container"
import Grid from "@/components/Grid"
import {
  HeroBlog,
  BlogListAnimated,
  FeaturedFreeCourse,
  LiveBlogNotice,
} from "@/components/BlogVisuals"

export default function BlogPage() {
  const blogsCMS = getAllBlogs()
  const todosLosBlogs = [...blogsLocales, ...blogsCMS]

  const blogsOrdenados = todosLosBlogs.sort((a, b) => {
    return new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  })

  return (
    <main className="py-20 md:py-28 bg-slate-50/50">
      <Container>
        
        <HeroBlog />
        <FeaturedFreeCourse {...featuredFreeCourse} />

        <div className="mb-8">
          <span className="text-[11px] font-black uppercase tracking-[0.22em] text-red-600">
            Mas cursos gratuitos
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Explora otras capacitaciones gratuitas
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Aqui puedes seguir descubriendo sesiones, actualizaciones y clases
            gratuitas para mantenerte al dia y avanzar en tu practica.
          </p>
        </div>

        <LiveBlogNotice />

        <BlogListAnimated>
          <Grid>
            {blogsOrdenados.map((post: any) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </Grid>
        </BlogListAnimated>

      </Container>
    </main>
  )
}
