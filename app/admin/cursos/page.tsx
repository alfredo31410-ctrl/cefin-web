import AdminCollectionTable from "@/components/admin/AdminCollectionTable";
import { getAdminCursos } from "@/lib/admin-content";

export default function AdminCursosPage() {
  const cursos = getAdminCursos();

  return (
    <AdminCollectionTable
      title="Panel de cursos"
      subtitle={`${cursos.length} cursos detectados entre contenido local y CMS del proyecto.`}
      items={cursos}
      createLabel="Nuevo curso"
      collectionName="cursos"
    />
  );
}
