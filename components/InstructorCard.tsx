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
      transition={{ duration: 0.25 }}
      className="
        bg-white
        rounded-xl
        shadow-sm
        hover:shadow-xl
        transition
        overflow-hidden
        flex
        flex-col
        h-full
        border
        border-slate-100
      "
    >

      {/* IMAGEN */}

      <div className="relative w-full h-52 md:h-60 lg:h-64">

        <Image
          src={instructor.imagen}
          alt={instructor.nombre}
          fill
          className="object-cover object-top"
        />

      </div>


      {/* CONTENIDO */}

      <div className="p-4 md:p-6 flex flex-col flex-grow">

        {/* NOMBRE */}

        <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-1 line-clamp-2">
          {instructor.nombre}
        </h3>

        {/* ESPECIALIDAD */}

        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
          {instructor.especialidad}
        </p>

        {/* BOTÓN */}

        <Link
          href={`/instructores/${instructor.slug}`}
          className="text-red-600 font-semibold hover:underline mt-auto"
        >
          Ver perfil →
        </Link>

      </div>

    </motion.div>

  )
}