import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blog");

export type Blog = {
  id: string;
  slug: string;
  titulo: string;
  descripcion: string;
  contenido: string;
  imagen: string;
  fecha: string;
  videoId: string;
  destacado: boolean;
};

export function getAllBlogs(): Blog[] {
  if (!fs.existsSync(blogsDirectory)) return [];

  const fileNames = fs
    .readdirSync(blogsDirectory)
    .filter((file) => file.endsWith(".md"));

  return fileNames.map((fileName) => {
    let slug = fileName.replace(".md", "");
    if (slug.length > 100) {
      slug = slug.substring(0, 50);
    }

    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id: data.id || slug, // Priorizamos el ID del frontmatter si existe
      slug: data.slug || slug, // Priorizamos el slug del frontmatter
      titulo: data.titulo || "Post sin título",
      descripcion: data.descripcion || "",
      contenido: content || "",
      imagen: data.imagen || "/placeholder-blog.jpg",
      fecha: data.fecha || "",
      videoId: data.videoId || "",
      destacado: Boolean(data.destacado),
    }
  });
}
