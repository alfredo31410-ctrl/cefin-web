import AdminCollectionTable from "@/components/admin/AdminCollectionTable";
import { getAdminEventos } from "@/lib/admin-content";

export default function AdminEventosPage() {
  const eventos = getAdminEventos();

  return (
    <AdminCollectionTable
      title="Panel de eventos"
      subtitle={`${eventos.length} eventos listos para seguimiento comercial y editorial.`}
      items={eventos}
      createLabel="Nuevo evento"
      collectionName="eventos"
      createHref="/admin/eventos/nuevo"
    />
  );
}
