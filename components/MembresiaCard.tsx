"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
  isHorizontal?: boolean; // Prop para activar el diseño "Padre" (Total)
};

export default function MembresiaCard({ membresia, isHorizontal = false }: Props) {
  
  // ==========================================
  // DISEÑO HORIZONTAL (MEMBRESÍA TOTAL)
  // ==========================================
  if (isHorizontal) {
    return (
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="relative bg-white border border-red-100 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-red-100/50 flex flex-col md:flex-row items-stretch min-h-100"
      >
        {/* Lado Izquierdo: Imagen con fondo oscuro */}
        <div className="w-full md:w-[40%] relative bg-slate-900 flex items-center justify-center p-10 min-h-75 md:min-h-full">
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
              Acceso Total Premium
            </span>
          </div>
          <Image 
            src={membresia.imagen} 
            alt={membresia.titulo} 
            fill 
            className="object-contain p-12 transition-transform duration-700 hover:scale-110" 
          />
        </div>

        {/* Lado Derecho: Contenido y Beneficios */}
        <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center bg-white">
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            {membresia.titulo}
          </h3>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed max-w-xl">
            Acceso ilimitado a todos nuestros cursos fiscales, contables y de nómina durante un año completo.
          </p>
          
          {/* Checklist de beneficios (estilo captura) */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
            {[
              "Acceso ilimitado a todos los cursos", 
              "Actualización Fiscal 2026 incluida", 
              "Sesiones mensuales en vivo con expertos", 
              "Diplomas con valor curricular"
            ].map((beneficio, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                <span className="shrink-0 w-5 h-5 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-[10px]">✓</span>
                {beneficio}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-slate-100">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Inversión Total Anual</span>
              <span className="text-3xl md:text-4xl font-black text-red-600 tracking-tighter">
                {membresia.precio} <small className="text-xs text-slate-400 font-bold">MXN</small>
              </span>
            </div>
            <Link 
              href={`/membresias/${membresia.slug}`} 
              className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl shadow-slate-200 active:scale-95 w-full sm:w-auto text-center"
            >
              Obtener todos los beneficios
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // DISEÑO VERTICAL (MEMBRESÍAS HIJAS)
  // ==========================================
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-4xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full border border-slate-100"
    >
      <div className="relative w-full h-48 bg-slate-50 overflow-hidden flex items-center justify-center">
        <Image
          src={membresia.imagen}
          alt={membresia.titulo}
          fill
          className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-red-600 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
            Membresía
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col grow">
        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 min-h-14 leading-tight">
          {membresia.titulo}
        </h3>

        <p className="text-sm text-slate-500 mb-8 line-clamp-3 leading-relaxed grow font-medium">
          {membresia.descripcion}
        </p>

        <div className="pt-6 border-t border-slate-50 flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Inversión</span>
            <span className="font-black text-red-600 text-2xl">
              {membresia.precio}
            </span>
          </div>

          <Link
            href={`/membresias/${membresia.slug}`}
            className="bg-slate-900 text-white text-[11px] font-black w-full py-4 rounded-xl transition-all duration-300 hover:bg-red-600 shadow-lg shadow-slate-100 text-center uppercase tracking-widest active:scale-95"
          >
            Ver beneficios
          </Link>
        </div>
      </div>
    </motion.div>
  );
}