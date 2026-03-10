"use client"

import { useState } from "react"
import { cursos } from "@/data/cursos"
import CursoCard from "@/components/CursoCard"
import { motion } from "framer-motion"

export default function CursosPage() {

  const [categoria, setCategoria] = useState("todos")

  // categorias dinamicas
  const categorias = [
    "todos",
    ...new Set(cursos.map((c) => c.categoria))
  ]

  const cursosFiltrados =
    categoria === "todos"
      ? cursos
      : cursos.filter((c) => c.categoria === categoria)

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <h1 className="text-4xl font-bold mb-8">
        Cursos CEFIN
      </h1>

      {/* BOTONES FILTRO */}

      <div className="flex gap-4 mb-12 flex-wrap">

        {categorias.map((cat) => (

          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`px-4 py-2 rounded capitalize transition ${
              categoria === cat
                ? "bg-red-600 text-white"
                : "bg-slate-200 hover:bg-slate-300"
            }`}
          >
            {cat}
          </button>

        ))}

      </div>

      {/* GRID CURSOS */}

      <motion.div
        layout
        className="grid md:grid-cols-3 gap-8"
      >

        {cursosFiltrados.map((curso) => (
          <CursoCard key={curso.id} curso={curso} />
        ))}

      </motion.div>

    </main>
  )
}