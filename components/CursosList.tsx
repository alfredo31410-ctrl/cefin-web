"use client"

import { useState } from "react"
import { Curso } from "@/data/cursos"
import CursoCard from "@/components/CursoCard"
import { motion, AnimatePresence } from "framer-motion"
import Grid from "./Grid"

export default function CursosList({ cursosIniciales }: { cursosIniciales: Curso[] }) {
  const [categoria, setCategoria] = useState("todos")

  const categorias = ["todos", ...new Set(cursosIniciales.map((c) => c.categoria))]

  const cursosFiltrados = categoria === "todos"
    ? cursosIniciales
    : cursosIniciales.filter((c) => c.categoria === categoria)

  return (
    <>
      <div className="flex gap-4 mb-12 flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`px-6 py-2 rounded-full capitalize font-medium transition-all ${
              categoria === cat ? "bg-red-600 text-white shadow-lg" : "bg-slate-100 text-slate-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

<Grid>
  <AnimatePresence mode="popLayout">
          {cursosFiltrados.map((curso) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={curso.slug || curso.id}
            >
              <CursoCard curso={curso} />
            </motion.div>
          ))}
        </AnimatePresence>
        </Grid>        
    </>
  )
}