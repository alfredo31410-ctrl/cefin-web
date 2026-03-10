import MembresiaCard from "@/components/MembresiaCard";
import { membresias } from "@/data/membresias";

export default function MembresiasPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      {/* HERO */}
      <section className="mb-16 text-center">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Membresías CEFIN
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Acceso anual a cursos especializados en fiscal, contabilidad,
          nómina y actualización profesional para contadores.
        </p>

      </section>

      {/* GRID DE MEMBRESÍAS */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {membresias.map((membresia) => (
          <MembresiaCard
            key={membresia.id}
            membresia={membresia}
          />
        ))}

      </section>

      {/* CTA FINAL */}
      <section className="mt-24 text-center">

        <h2 className="text-3xl font-semibold mb-4">
          ¿No sabes cuál elegir?
        </h2>

        <p className="text-slate-600 mb-6">
          Contáctanos y te ayudamos a elegir la membresía ideal.
        </p>

        <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
          Hablar con asesor
        </button>

      </section>

    </main>
  );
}