"use client"

import { Curso } from "@/data/cursos"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

type Props = {
  curso: Curso
}

export default function CursoCard({ curso }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden"
    >
      <div className="relative h-48 w-full">

        <Image
          src={curso.imagen}
          alt={curso.titulo}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-6">

        <h3 className="text-lg font-semibold mb-2">
          {curso.titulo}
        </h3>

        <p className="text-slate-600 text-sm mb-4">
          {curso.descripcion}
        </p>

        <div className="flex justify-between items-center">

          <span className="font-bold text-red-600">
            {curso.precio}
          </span>

          <Link
            href={`/cursos/${curso.slug}`}
            className="text-sm font-semibold hover:text-red-600"
          >
            Ver curso →
          </Link>

        </div>

      </div>
    </motion.div>
  )
}