import { membresias } from "@/data/membresias";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MembresiaDetalle({ params }: Props) {

  const { slug } = await params;

  const membresia = membresias.find(
    (m) => m.slug === slug
  );

  if (!membresia) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="relative h-[350px] w-full">
          <Image
            src={membresia.imagen}
            alt={membresia.titulo}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div>

          <h1 className="text-4xl font-bold mb-4">
            {membresia.titulo}
          </h1>

          <p className="text-slate-600 mb-6">
            {membresia.descripcionLarga}
          </p>

          <p className="text-2xl font-bold text-red-600 mb-6">
            {membresia.precio}
          </p>

          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
            Comprar membresía
          </button>

        </div>

      </div>

    </main>
  );
}