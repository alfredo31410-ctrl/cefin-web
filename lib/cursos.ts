import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Curso } from "@/data/cursos"

const cursosDirectory = path.join(process.cwd(), "content/cursos")

export function getAllCursos(): Curso[] {
  if (!fs.existsSync(cursosDirectory)) return []

  const fileNames = fs.readdirSync(cursosDirectory)

  return fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "")

    const fullPath = path.join(cursosDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data, content } = matter(fileContents)

    return {
      id: Number(data.id) || 0,
      titulo: data.titulo || "Curso sin título",
      slug,
      descripcion: data.descripcion || "",
      descripcionLarga: content || "",
      precio: data.precio || "Consultar",
      imagen: data.imagen || "/placeholder-curso.jpg",
      categoria: data.categoria || "fiscal",
      duracion: data.duracion || "Por definir",
      instructor: data.instructor || "CEFIN",
      hotmart: data.hotmart || "#",
      destacado: Boolean(data.destacado),
    } as Curso
  })
}