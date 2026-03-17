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
        group
        bg-white
        rounded-xl
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        overflow-hidden
        flex
        flex-col
        h-full
        border
        border-slate-100
        hover:-translate-y-1
      "
    >

      {/* IMAGEN */}

      <div className="relative w-full h-52 md:h-60 lg:h-64 overflow-hidden">

        <Image
          src={instructor.imagen}
          alt={instructor.nombre}
          fill
          className="
            object-cover
            object-top
            transition-transform
            duration-500
            group-hover:scale-105
          "
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
          {instructor.descripcionCorta}
        </p>


        {/* BOTÓN */}

        <Link
          href={`/instructores/${instructor.slug}`}
          className="
            mt-auto
            font-semibold
            text-slate-700
            transition-colors
            duration-300
            group-hover:text-red-600
          "
        >
          Ver perfil →
        </Link>

      </div>

    </motion.div>

  )

}