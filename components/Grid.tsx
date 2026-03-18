"use client"

import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
}

// Configuración de la cascada (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Tiempo entre la aparición de cada card
      delayChildren: 0.1
    }
  }
}

export default function Grid({ children }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Se activa cuando el usuario llega al grid
      viewport={{ once: true, margin: "-50px" }}
      className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        2xl:grid-cols-4 
        gap-6 
        md:gap-8
        items-stretch
      "
    >
      {children}
    </motion.div>
  )
}