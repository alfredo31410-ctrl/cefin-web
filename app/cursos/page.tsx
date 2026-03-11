import { cursos as cursosLocales } from "@/data/cursos"
import { getAllCursos } from "@/lib/cursos" 
import CursosList from "@/components/CursosList"
import Container from "@/components/Container"

export default function CursosPage() {
  const cursosCMS = getAllCursos()
  const todos = [...cursosLocales, ...cursosCMS].sort((a, b) => 
    Number(b.destacado) - Number(a.destacado)
  )

  return (
    <main className="py-20 md:py-24">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Cursos CEFIN</h1>
        <CursosList cursosIniciales={todos} />
      </Container>
    </main>
  )
}