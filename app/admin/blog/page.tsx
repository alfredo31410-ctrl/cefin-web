import AdminCollectionTable from "@/components/admin/AdminCollectionTable";
import { getAdminBlogs } from "@/lib/admin-content";

export default function AdminBlogPage() {
  const blogs = getAdminBlogs();

  return (
    <AdminCollectionTable
      title="Panel de blog"
      subtitle={`${blogs.length} publicaciones entre articulos, clases gratuitas y contenido evergreen.`}
      items={blogs}
      createLabel="Nueva entrada"
      collectionName="blog"
    />
  );
}
