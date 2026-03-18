import { getAllBlogs } from "@/lib/blogs"
import BlogCard from "@/components/BlogCard"
import { blog as blogsLocales } from "@/data/blogs"
import Container from "@/components/Container"
import Grid from "@/components/Grid"
import { HeroBlog, BlogListAnimated } from "@/components/BlogVisuals"

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