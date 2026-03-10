import { getAllEventos } from "@/lib/eventos" 
import EventoCard from "@/components/EventoCard"
import { eventos as eventosLocales } from "@/data/eventos"

export default function EventosPage() {
  const eventosCMS = getAllEventos()

  // Fusionamos ambos
  const todosLosEventos = [...eventosLocales, ...eventosCMS]

  // Ordenamos por fecha real
  const eventosOrdenados = todosLosEventos.sort((a, b) => {
    return new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
  })

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">Eventos y Seminarios</h1>
      
      <p className="text-slate-600 mb-12 max-w-2xl">
        Participa en nuestros eventos especializados para contadores...
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* CORRECCIÓN: Usar la lista fusionada y ordenada */}
        {eventosOrdenados.map((evento: any) => (
          <EventoCard
            key={evento.slug}
            evento={evento}
          />
        ))}
      </div>
    </main>
  )
}