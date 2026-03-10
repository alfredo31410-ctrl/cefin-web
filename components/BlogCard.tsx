"use client"

import Image from "next/image"
import Link from "next/link"
import { Blog } from "@/data/blog"

type Props = {
    post: Blog & { slug: string }
}

    export default function BlogCard({ post }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden">

      <div className="relative h-48 w-full">

        <Image
          src={post.imagen}
          alt={post.titulo}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-6">

        <h3 className="font-semibold mb-2">
          {post.titulo}
        </h3>

        <p className="text-sm text-slate-500 mb-3">
          📅 {post.fecha}
        </p>

        <p className="text-sm text-slate-600 mb-4">
          {post.descripcion}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="text-red-600 font-semibold"
        >
          Ver capacitación →
        </Link>

      </div>

    </div>
  )
}