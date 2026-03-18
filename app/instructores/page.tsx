import { instructores } from "@/data/instructores"
import InstructorCard from "@/components/InstructorCard"
import Container from "@/components/Container"
// Quitamos el Grid genérico
import { HeroInstructores, InstructoresListAnimated } from "@/components/InstructoresVisuals"

export default function InstructoresPage() {
  return (
    <main className="py-20 md:py-28 bg-slate-50/50">
      <Container>
        
        <HeroInstructores />

        <InstructoresListAnimated>
          {/* GRID PERSONALIZADO: 2 columnas centradas en md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-center">
            {instructores.map((instructor) => (
              <InstructorCard
                key={instructor.id}
                instructor={instructor}
              />
            ))}
          </div>
        </InstructoresListAnimated>

        {/* Cierre de página más potente */}
        <section className="mt-32 text-center border-t border-slate-100 pt-16">
          <p className="text-slate-400 text-sm uppercase font-bold tracking-[0.2em] mb-8 leading-relaxed">
            Garantía de aprendizaje CEFIN
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center opacity-60">
            <span className="font-bold text-slate-500 text-xl italic whitespace-nowrap">Actualización Constante</span>
            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
            <span className="font-bold text-slate-500 text-xl italic whitespace-nowrap">Casos Reales</span>
            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
            <span className="font-bold text-slate-500 text-xl italic whitespace-nowrap">Soporte Directo</span>
          </div>
        </section>
      </Container>
    </main>
  )
}