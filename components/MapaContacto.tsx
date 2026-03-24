"use client"

import { motion } from "framer-motion"

const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d879.6119869186978!2d-102.3117445304505!3d21.91147249874801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429eefcba18b771%3A0x71f1a72b1214a821!2sPlaza%20Santa%20Fe!5e1!3m2!1ses-419!2smx!4v1774368204472!5m2!1ses-419!2smx"

export default function MapaContacto() {
  // Nota: Cambia la dirección en el buscador de Google Maps y dale a "Compartir > Incorporar mapa" para sacar tu propio src si esta no es la exacta.
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20 overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-4 shadow-sm"
    >
      <div className="relative h-96 w-full overflow-hidden rounded-4xl">
        {/* Overlay sutil para que el mapa no brille tanto en el diseño blanco */}
        <div className="absolute inset-0 bg-red-600/5 pointer-events-none z-10" />
        
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación CEFIN"
          className="relative z-0"
        ></iframe>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6 gap-4">
        <div>
          <h4 className="font-black text-slate-900">Oficinas Centrales</h4>
          <p className="text-sm text-slate-500">Aguascalientes, México.</p>
        </div>
        <a 
          href="https://maps.google.com" 
          target="_blank" 
          className="text-xs font-bold uppercase tracking-widest text-red-600 hover:text-slate-900 transition-colors"
        >
          Abrir en Google Maps →
        </a>
      </div>
    </motion.section>
  )
}