import { getAllEventos } from "@/lib/eventos" 
import { eventos as eventosLocales } from "@/data/eventos"
import Container from "@/components/Container"
import { HeroEventos, CTAEventos } from "@/components/EventosVisuals"
import EventosClient from "@/components/EventosClient"

export default function EventosPage() {
  // Esto corre en el servidor (fs funciona aquí)
  const eventosCMS = getAllEventos()
  const todosLosEventos = [...eventosLocales, ...eventosCMS]

  const eventosOrdenados = todosLosEventos.sort((a, b) => {
    return new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
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