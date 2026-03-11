"use client"

import Image from "next/image"
import Link from "next/link"
import { Blog } from "@/data/blogs"

type Props = {
  post: Blog & { slug: string }
}

export default function BlogCard({ post }: Props) {

  /* ===== FORMATEO DE FECHA ===== */

  const fechaFormateada =
    (post.fecha as any) instanceof Date
      ? (post.fecha as any).toLocaleDateString("es-MX", {
          day: "2-digit",
          month: "long",
          year: "numeric"
        })
      : String(post.fecha)

  return (

    /* ===== CARD ===== */

    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col h-full">

      {/* ===== IMAGEN ===== */}

      <div className="relative w-full h-44 md:h-48 lg:h-52">

        <Image
          src={post.imagen}
          alt={post.titulo}
          fill
          className="object-cover"
        />

      </div>

      {/* ===== CONTENIDO ===== */}

      <div className="p-4 md:p-6 flex flex-col flex-grow">

        {/* TITULO */}

        <h3 className="font-semibold text-base md:text-lg mb-2 line-clamp-2">
          {post.titulo}
        </h3>

        {/* FECHA */}

        <p className="text-xs md:text-sm text-slate-500 mb-3">
          📅 {fechaFormateada}
        </p>

        {/* DESCRIPCION */}

        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          {post.descripcion}
        </p>

        {/* BOTON (SIEMPRE ABAJO) */}

        <Link
          href={`/blog/${post.slug}`}
          className="text-red-600 font-semibold hover:underline mt-auto"
        >
          Ver capacitación →
        </Link>

      </div>

    </div>

  )

}