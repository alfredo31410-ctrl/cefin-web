"use client"

import { useEffect, useState } from "react"

type Props = {
  fecha: string | Date
}

export default function Countdown({ fecha }: Props) {
  // 1. Estado para evitar el error de hidratación
  const [mounted, setMounted] = useState(false)
  
  // 2. Estado inicial en ceros para que el servidor y el cliente coincidan al inicio
  const [tiempo, setTiempo] = useState({ 
    dias: 0, 
    horas: 0, 
    minutos: 0, 
    segundos: 0 
  })

  useEffect(() => {
    // Marcamos que ya estamos en el cliente
    setMounted(true)

    const calcularTiempo = () => {
      const diferencia = new Date(fecha).getTime() - new Date().getTime()

      // Si la fecha ya pasó, devolvemos todo en cero
      if (diferencia <= 0) {
        return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
      }

      return {
        dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diferencia / (1000 * 60)) % 60),
        segundos: Math.floor((diferencia / 1000) % 60)
      }
    }

    // Calculamos inmediatamente al montar
    setTiempo(calcularTiempo())

    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo())
    }, 1000)

    return () => clearInterval(intervalo)
  }, [fecha])

  // 3. Si no ha montado, mostramos un "placeholder" o nada
  // Esto evita que Next.js compare el texto del servidor con el del cliente
  if (!mounted) {
    return (
      <div className="flex gap-6 text-center opacity-0">
        <div><p className="text-3xl font-bold">0</p></div>
      </div>
    )
  }

  return (
    <div className="flex gap-6 text-center bg-slate-50 p-4 rounded-xl border border-slate-100">
      <div>
        <p className="text-3xl font-bold text-slate-800">{tiempo.dias}</p>
        <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Días</span>
      </div>

      <div>
        <p className="text-3xl font-bold text-slate-800">{tiempo.horas}</p>
        <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Horas</span>
      </div>

      <div>
        <p className="text-3xl font-bold text-slate-800">{tiempo.minutos}</p>
        <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Min</span>
      </div>

      <div>
        <p className="text-3xl font-bold text-red-600">{tiempo.segundos}</p>
        <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Seg</span>
      </div>
    </div>
  )
}