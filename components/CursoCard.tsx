"use client"

import Image from "next/image"
import Link from "next/link"
import { FaGraduationCap } from "react-icons/fa"

type Props = {
  post: any // Asumiendo que 'post' es el objeto con la data del curso
}

// Mapa de colores para las categorías
const coloresCategoria = {
  fiscal: "bg-red-100 text-red-700",
  nomina: "bg-blue-100 text-blue-700",
  contabilidad: "bg-green-100 text-green-700",
  mentalidad: "bg-purple-100 text-purple-700", 
};

export default function CursoCard({ post }: Props) {

  return (
    <article className="
      group
      bg-white
      rounded-3xl
      border
      border-slate-100
      overflow-hidden
      flex
      flex-col
      h-full
      transition-all
      duration-300
      hover:shadow-2xl
      hover:shadow-red-50
      hover:-translate-y-2
    ">
      {/* ===== CONTENEDOR DE IMAGEN CORREGIDO (Mismo fix que BlogCard) ===== */}
      <div className="relative w-full h-44 md:h-52 overflow-hidden bg-white">
        <Image
          src={post.imagen}
          alt={post.titulo}
          fill
          className="
            object-contain 
            p-1
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
        {/* Overlay sutil solo en hover */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Tag de Categoría flotante */}
        <span className={`
          absolute
          top-4
          left-4
          px-3
          py-1
          rounded-full
          text-[10px]
          font-black
          uppercase
          tracking-wider
          shadow-sm
          ${(coloresCategoria as any)[post.categoria] || "bg-slate-100 text-slate-700"}
        `}>
          {post.categoria}
        </span>
      </div>

      {/* ===== CONTENIDO (Sin Cambios) ===== */}
      <div className="p-6 flex flex-col grow">
        
        <div className="flex items-center gap-2 text-red-600 mb-2">
          <FaGraduationCap size={16} />
          <span className="text-xs font-bold uppercase tracking-widest opacity-80">Curso CEFIN</span>
        </div>

        <h3 className="font-extrabold text-slate-950 text-xl md:text-2xl mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
          {post.titulo}
        </h3>

        {/* Info adicional (Sin Cambios) */}
        {post.descripcion && (
          <p className="text-sm text-slate-600 mb-6 line-clamp-2 leading-relaxed opacity-90">
            {post.descripcion}
          </p>
        )}

        {/* BOTON ESTILIZADO (Sin Cambios) */}
        <Link
          href={`/cursos/${post.slug}`}
          className="
            w-full
            text-center
            bg-slate-900
            text-white
            px-6
            py-4
            rounded-2xl
            mt-auto
            font-black
            text-sm
            uppercase
            tracking-widest
            transition-all
            duration-300
            hover:bg-red-600
            hover:shadow-lg
            hover:shadow-red-200
            active:scale-95
          "
        >
          VER DETALLE
        </Link>
      </div>
    </article>
  )
}