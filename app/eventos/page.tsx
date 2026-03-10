import { eventos } from "@/data/eventos"
import EventoCard from "@/components/EventoCard"

export default function EventosPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <h1 className="text-4xl font-bold mb-8">
        Eventos y Seminarios
      </h1>

      <p className="text-slate-600 mb-12 max-w-2xl">
        Participa en nuestros eventos especializados para contadores,
        donde aprenderás directamente de expertos en fiscal,
        contabilidad y nómina.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {eventos.map((evento) => (
          <EventoCard
            key={evento.id}
            evento={evento}
          />
        ))}

      </div>

    </main>
  )
}