"use client" // Añadimos esto para evitar conflictos de renderizado

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-9xl font-black text-slate-100">404</h1>
      <div className="absolute">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4">
          Página no encontrada
        </h2>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">
          Parece que el documento fiscal que buscas no existe o fue archivado.
        </p>
        <Link 
          href="/" 
          className="bg-red-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-red-700 transition-all inline-block shadow-lg"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}