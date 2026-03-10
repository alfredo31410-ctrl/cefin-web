import { instructores } from "@/data/instructores"
import InstructorCard from "@/components/InstructorCard"

export default function InstructoresPage() {

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <h1 className="text-4xl font-bold mb-8">
        Instructores CEFIN
      </h1>

      <p className="text-slate-600 mb-12 max-w-2xl">
        Nuestros instructores son especialistas en fiscal, contabilidad
        y nómina con amplia experiencia en capacitación profesional.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {instructores.map((instructor) => (
          <InstructorCard
            key={instructor.id}
            instructor={instructor}
          />
        ))}

      </div>

    </main>
  )
}