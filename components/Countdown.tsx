"use client"

import { useEffect, useState } from "react"

type Props = {
  fecha: string
}

export default function Countdown({ fecha }: Props) {

  const calcularTiempo = () => {
    const diferencia = new Date(fecha).getTime() - new Date().getTime()

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24)
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60)
    const segundos = Math.floor((diferencia / 1000) % 60)

    return { dias, horas, minutos, segundos }
  }

  const [tiempo, setTiempo] = useState(calcularTiempo())

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo())
    }, 1000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className="flex gap-6 text-center">

      <div>
        <p className="text-3xl font-bold">{tiempo.dias}</p>
        <span className="text-sm text-slate-500">Días</span>
      </div>

      <div>
        <p className="text-3xl font-bold">{tiempo.horas}</p>
        <span className="text-sm text-slate-500">Horas</span>
      </div>

      <div>
        <p className="text-3xl font-bold">{tiempo.minutos}</p>
        <span className="text-sm text-slate-500">Min</span>
      </div>

      <div>
        <p className="text-3xl font-bold">{tiempo.segundos}</p>
        <span className="text-sm text-slate-500">Seg</span>
      </div>

    </div>
  )
}