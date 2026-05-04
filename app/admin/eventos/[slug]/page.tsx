import EventoEditorForm from "@/components/admin/EventoEditorForm";
import { readEventoEditorData } from "@/lib/admin-eventos";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function AdminEditarEventoPage({ params }: Props) {
  const { slug } = await params;
  const evento = readEventoEditorData(slug);

  if (!evento) {
    notFound();
  }

  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
          Eventos
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
          Editar evento
        </h1>
        <p className="mt-3 text-lg text-slate-400">
          Ajusta el contenido, la imagen y el enlace comercial sin salir del
          panel.
        </p>
      </div>

      <EventoEditorForm
        endpoint={`/api/admin/eventos/${slug}`}
        method="PATCH"
        initialData={evento}
        submitLabel="Guardar cambios"
        successMessage="Evento actualizado correctamente."
        slug={slug}
      />
    </section>
  );
}
