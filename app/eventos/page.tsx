import { getAllEventos } from "@/lib/eventos" 
import { eventos as eventosLocales } from "@/data/eventos"
import Container from "@/components/Container"
import { HeroEventos, CTAEventos } from "@/components/EventosVisuals"
import EventosClient from "@/components/EventosClient"

export default function EventosPage() {
  const eventosCMS = getAllEventos()
  const todosLosEventos = [...eventosLocales, ...eventosCMS]

  const ahora = new Date().getTime()

  const eventosOrdenados = todosLosEventos.sort((a, b) => {
    const fechaA = new Date(a.fecha as any).getTime()
    const fechaB = new Date(b.fecha as any).getTime()

    const estaFinalizadoA = fechaA < ahora
    const estaFinalizadoB = fechaB < ahora

    // 1. Si uno está finalizado y el otro no, el finalizado va al final
    if (estaFinalizadoA !== estaFinalizadoB) {
      return estaFinalizadoA ? 1 : -1
    }

    if (!estaFinalizadoA) {
      // Ambos eventos son futuros, ordenar por fecha (más cercano primero)
      return fechaA - fechaB
    }

    // 2. Si ambos están en el mismo estado (ambos futuros o ambos pasados),
    // ordenarlos por fecha (el más cercano primero)
    return fechaB - fechaA
  })

  return (
    <main className="py-20 md:py-28 bg-slate-50/50">
      <Container>
        {/* Componentes Cliente que importamos */}
        <HeroEventos />
        
        <EventosClient eventos={eventosOrdenados} />

        <CTAEventos />
      </Container>
    </main>
  )
}