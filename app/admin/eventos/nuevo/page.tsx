import EventoEditorForm from "@/components/admin/EventoEditorForm";
import { initialEventoForm } from "@/lib/admin-eventos";

export default function AdminNuevoEventoPage() {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
          Eventos
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
          Nuevo evento
        </h1>
        <p className="mt-3 text-lg text-slate-400">
          Crea un nuevo evento desde el panel interno de CEFIN.
        </p>
      </div>

      <EventoEditorForm
        endpoint="/api/admin/eventos"
        method="POST"
        initialData={initialEventoForm}
        submitLabel="Guardar evento"
        successMessage="Evento guardado correctamente."
      />
    </section>
  );
}
