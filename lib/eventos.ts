import fs from "fs"
import path from "path"
import matter from "gray-matter"

const eventosDirectory = path.join(process.cwd(), "content/eventos")

// 1. Aseguramos que el tipo sea idéntico al de data/eventos.ts
export type Evento = {
  id: string | number
  slug: string
  titulo: string
  descripcion: string
  descripcionLarga: string
  imagen: string
  fecha: string
  lugar: string
  precio: string // Mapeado desde data.costo
  hotmart: string
  destacado: boolean
}

export function getAllEventos(): Evento[] {
  if (!fs.existsSync(eventosDirectory)) return []

  const fileNames = fs.readdirSync(eventosDirectory)
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md')) // Solo archivos Markdown
    .map((fileName) => {
      const slug = fileName.replace(".md", "")
      const fullPath = path.join(eventosDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        id: slug,
        slug: slug, // El slug es el nombre del archivo
        titulo: data.titulo || "Evento sin título",
        descripcion: data.descripcion || "",
        descripcionLarga: content || data.descripcionLarga || "",
        imagen: data.imagen || "/placeholder-evento.jpg",
        fecha: data.fecha || "",
        lugar: data.lugar || "Por definir",
        precio: data.costo || "$0 MXN", // Aquí corregimos la unión de campos
        hotmart: data.hotmart || "#",
        destacado: Boolean(data.destacado),
      }
    })
}

export function getEventosDestacados(): Evento[] {
  const eventos = getAllEventos()
  return eventos
    .filter((evento) => evento.destacado)
    .sort(
      (a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
    )
    .slice(0, 3)
}