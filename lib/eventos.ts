import fs from "fs"
import path from "path"
import matter from "gray-matter"

const eventosDirectory = path.join(process.cwd(), "content/eventos")

export type Evento = {
  id: string
  slug: string
  titulo: string
  descripcion: string
  descripcionLarga: string
  imagen: string
  fecha: string
  lugar: string
  precio: string
  hotmart: string
  destacado: boolean
}

export function getAllEventos(): Evento[] {

  if (!fs.existsSync(eventosDirectory)) return []

  const fileNames = fs.readdirSync(eventosDirectory)
  console.log("Eventos CMS:", fileNames)

  return fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "")

    const fullPath = path.join(eventosDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data, content } = matter(fileContents)

    return {
      id: slug,
      slug,
      titulo: data.titulo || "Evento sin título",
      descripcion: data.descripcion || "",
      descripcionLarga: content || "",
      imagen: data.imagen || "/placeholder-evento.jpg",
      fecha: data.fecha || "",
      lugar: data.lugar || "Por definir",
      precio: data.costo || "$0 MXN",
      hotmart: data.hotmart || "#",
      destacado: Boolean(data.destacado),
    }
  })

}

export function getEventosDestacados(): Evento[] {

  const eventos = getAllEventos()

  return eventos
    .filter((evento) => evento.destacado)
    .filter((evento) => new Date(evento.fecha).getTime() > Date.now())
    .sort(
      (a, b) =>
        new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
    )
    .slice(0, 3)

}