"use client"

import Image from "next/image"
import Link from "next/link"
import { Blog } from "@/data/blogs"

type Props = {
  post: Blog & { slug: string }
}

export default function BlogCard({ post }: Props) {
  /* ===== FORMATEO DE FECHA ===== */
  // Si la fecha viene como string de una API o Markdown, intentamos convertirla
  const dateObj = typeof post.fecha === "string" ? new Date(post.fecha) : post.fecha;

  const fechaFormateada =
    dateObj instanceof Date && !isNaN(dateObj.getTime())
      ? dateObj.toLocaleDateString("es-MX", {
          day: "2-digit",
          month: "long",
          year: "numeric"
        })
      : "Fecha no disponible";

  return (
    /* ===== CARD ===== */
    <article className="
      group
      bg-white
      rounded-2xl
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      ease-out
      overflow-hidden
      flex
      flex-col
      h-full
      border
      border-slate-200
      hover:-translate-y-2
    ">
      {/* ===== IMAGEN CON OVERLAY SUTIL ===== */}
      <div className="relative w-full h-44 md:h-52 overflow-hidden">
        <Image
          src={post.imagen}
          alt={post.titulo}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
        {/* Un gradiente sutil para que la imagen no se vea "plana" */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* ===== CONTENIDO ===== */}
      <div className="p-5 flex flex-col grow">
        
        {/* TAG O CATEGORÍA (Opcional, si tienes una en tu data) */}
        <span className="text-[10px] uppercase tracking-widest font-bold text-red-600 mb-2">
          Blog Educativo
        </span>

        {/* TITULO */}
        <h3 className="font-bold text-slate-800 text-lg md:text-xl mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
          {post.titulo}
        </h3>

        {/* FECHA */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <span className="opacity-70 text-sm">📅</span>
          <span>{fechaFormateada}</span>
        </div>

        {/* DESCRIPCION */}
        <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">
          {post.descripcion}
        </p>

        {/* BOTON ESTILIZADO */}
        <Link
          href={`/blog/${post.slug}`}
          className="
            w-full
            text-center
            bg-slate-900
            text-white
            px-6
            py-3
            rounded-xl
            mt-auto
            font-bold
            text-sm
            transition-all
            duration-300
            hover:bg-red-600
            hover:shadow-lg
            hover:shadow-red-200
            active:scale-95
          "
        >
          Leer artículo
        </Link>
      </div>
    </article>
  )
}