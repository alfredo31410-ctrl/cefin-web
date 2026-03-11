"use client"

import { useEffect, useState } from "react"

type Props = {
  fecha: string | Date
}

export default function Countdown({ fecha }: Props) {

  const [mounted, setMounted] = useState(false)

  const [tiempo, setTiempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  })

  useEffect(() => {

    setMounted(true)

    const calcularTiempo = () => {

      const diferencia = new Date(fecha).getTime() - new Date().getTime()

      if (diferencia <= 0) {
        return {
          dias: 0,
          horas: 0,
          minutos: 0,
          segundos: 0
        }
      }

      return {
        dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diferencia / (1000 * 60)) % 60),
        segundos: Math.floor((diferencia / 1000) % 60)
      }

    }

    setTiempo(calcularTiempo())

    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo())
    }, 1000)

    return () => clearInterval(intervalo)

  }, [fecha])


  if (!mounted) {

    return (

      <div className="flex gap-3 md:gap-6 text-center opacity-0">

        <div>

          <p className="text-2xl md:text-3xl font-bold">0</p>

        </div>

      </div>

    )

  }


  return (

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-center bg-slate-50 p-4 md:p-6 rounded-xl border border-slate-100">

      {/* DIAS */}

      <div className="min-w-[70px] flex-shrink-0">

        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">
          {tiempo.dias}
        </p>

        <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
          Días
        </span>

      </div>


      {/* HORAS */}

      <div className="min-w-[70px] flex-shrink-0">

        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">
          {tiempo.horas}
        </p>

        <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
          Horas
        </span>

      </div>


      {/* MINUTOS */}

      <div className="min-w-[70px] flex-shrink-0">

        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">
          {tiempo.minutos}
        </p>

        <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
          Min
        </span>

      </div>


      {/* SEGUNDOS */}

      <div className="min-w-[70px] flex-shrink-0">

        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600">
          {tiempo.segundos}
        </p>

        <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
          Seg
        </span>

      </div>

    </div>

  )

}