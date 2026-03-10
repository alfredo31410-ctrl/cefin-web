"use client"

import { Instructor } from "@/data/instructores"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

type Props = {
  instructor: Instructor
}

export default function InstructorCard({ instructor }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden"
    >

<div className="relative h-64 w-full">
        <Image
          src={instructor.imagen}
          alt={instructor.nombre}
          fill
          className="object-cover object-top"
        />

      </div>

      <div className="p-4">

        <h3 className="text-xl font-semibold mb-1">
          {instructor.nombre}
        </h3>

        <p className="text-slate-600 text-sm mb-4">
          {instructor.especialidad}
        </p>

        <Link
          href={`/instructores/${instructor.slug}`}
          className="text-red-600 font-semibold hover:underline"
        >
          Ver perfil →
        </Link>

      </div>

    </motion.div>
  )
}