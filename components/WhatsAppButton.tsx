"use client"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  return (

    <motion.a
      href="https://wa.me/524491234567"
      target="_blank"
      rel="noopener noreferrer"

      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}

      transition={{ delay: 1 }}

      className="
        fixed
        bottom-5 md:bottom-6
        right-5 md:right-6
        z-50
        flex
        items-center
        gap-2 md:gap-3
        bg-green-500
        hover:bg-green-600
        text-white
        px-3 md:px-4
        py-3
        rounded-full
        shadow-xl
      "
    >

      {/* ICONO */}

      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >

        <FaWhatsapp size={22} />

      </motion.div>


      {/* TEXTO (solo desktop) */}

      <span className="hidden md:block font-semibold text-sm">
        Escríbenos
      </span>

    </motion.a>

  )
}