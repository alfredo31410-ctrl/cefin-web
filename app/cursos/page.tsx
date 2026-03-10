import { cursos as cursosLocales } from "@/data/cursos"
import { getAllCursos } from "@/lib/cursos" 
import CursosList from "@/components/CursosList"

export default function CursosPage() {
  const cursosCMS = getAllCursos()
  const todos = [...cursosLocales, ...cursosCMS].sort((a, b) => 
    Number(b.destacado) - Number(a.destacado)
  )

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">Cursos CEFIN</h1>
      <CursosList cursosIniciales={todos} />
    </main>
  )
}