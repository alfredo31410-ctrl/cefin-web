"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react"; // Si no tienes lucide-react, puedes usar un SVG de check

type Membresia = {
  id: number;
  slug: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  precio: string;
};

type Props = {
  membresia: Membresia;
};

export default function MembresiaHeroCard({ membresia }: Props) {
  // Estos beneficios los puedes personalizar o traer de tu data
  const beneficios = [
    "Acceso ilimitado a todos los cursos",
    "Actualización Fiscal 2026 incluida",
    "Sesiones mensuales en vivo con expertos",
    "Diplomas con valor curricular",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="
        relative 
        bg-white 
        rounded-[2rem] 
        shadow-2xl 
        shadow-red-900/10 
        border-2 
        border-red-500/30 
        overflow-hidden 
        group
      "
    >
      {/* EFECTO GLOW DE FONDO */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] -mr-32 -mt-32 transition-colors group-hover:bg-red-600/10" />

      <div className="flex flex-col md:flex-row relative z-10">
        
        {/* IZQUIERDA: IMAGEN TIPO HERO */}
        <div className="md:w-[40%] bg-slate-50 p-8 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent" />
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={membresia.imagen}
              alt={membresia.titulo}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          {/* BADGE DESTACADO */}
          <div className="absolute top-6 left-6">
            <span className="bg-red-600 text-white text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-red-600/40">
              Acceso Total Premium
            </span>
          </div>
        </div>

        {/* DERECHA: CONTENIDO EXPANDIDO */}
        <div className="md:w-[60%] p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-none">
              {membresia.titulo}
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
              {membresia.descripcion}
            </p>
            
            {/* LISTA DE BENEFICIOS (Solo en el Hero) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {beneficios.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <div className="bg-red-50 p-1 rounded-full shrink-0">
                    <Check size={14} className="text-red-600" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER ACCIÓN */}
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none mb-2">
                Inversión Total Anual
              </span>
              <span className="font-black text-red-600 text-3xl md:text-4xl">
                {membresia.precio}
              </span>
            </div>

            <Link
              href={`/membresias/${membresia.slug}`}
              className="
                bg-slate-900 
                text-white 
                px-10 
                py-4 
                rounded-2xl 
                font-black 
                text-base 
                md:text-lg 
                hover:bg-red-600 
                transition-all 
                shadow-xl 
                shadow-slate-200 
                hover:shadow-red-600/20 
                text-center
                active:scale-95
              "
            >
              Obtener todos los beneficios
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}