import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { slugify } from '@/data/slugify'
import { Curso } from '@/data/cursos'

const cursosDirectory = path.join(process.cwd(), 'content/cursos')

export function getAllCursos(): Curso[] {
  // 1. Verificamos si la carpeta existe para evitar que truene el build
  if (!fs.existsSync(cursosDirectory)) return []
  
  const fileNames = fs.readdirSync(cursosDirectory)
  
  return fileNames.map((fileName) => {
    const fullPath = path.join(cursosDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // 2. Mapeamos TODOS los campos para cumplir con el contrato de 'type Curso'
    return {
      id: Number(data.id) || Math.floor(Math.random() * 1000), // Genera ID si no hay
      titulo: data.titulo || "Curso sin título",
      slug: slugify(data.titulo || ""),
      descripcion: data.descripcion || "",
      descripcionLarga: content || "", // El cuerpo del Markdown
      precio: data.precio || "Consultar",
      imagen: data.imagen || "/placeholder-curso.jpg", // Imagen por defecto
      categoria: data.categoria || "fiscal", // Valor por defecto seguro
      duracion: data.duracion || "Por definir",
      instructor: data.instructor || "CEFIN",
      hotmart: data.hotmart || "#",
      destacado: Boolean(data.destacado),
    } as Curso
  })
}