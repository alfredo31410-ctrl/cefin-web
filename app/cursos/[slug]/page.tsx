import { cursos } from "@/data/cursos";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CursoDetalle({ params }: Props) {

  const { slug } = await params;

  const curso = cursos.find(
    (c) => c.slug === slug
  );

  if (!curso) {
    return notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="relative h-[350px] w-full">

          <Image
            src={curso.imagen}
            alt={curso.titulo}
            fill
            className="object-cover rounded-xl"
          />

        </div>

        <div>

          <h1 className="text-4xl font-bold mb-4">
            {curso.titulo}
          </h1>

          <p className="text-slate-600 whitespace-pre-line mb-6">
            {curso.descripcionLarga}
          </p>

          <p className="text-2xl font-bold text-red-600 mb-6">
            {curso.precio}
          </p>

          <a
            href={curso.hotmart}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Comprar curso
          </a>

        </div>

      </div>

    </main>
  );
}