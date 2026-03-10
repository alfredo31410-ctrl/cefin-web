import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { slugify } from '@/data/slugify' // Asegúrate de que la ruta sea correcta

const eventosDirectory = path.join(process.cwd(), 'content/eventos')

export function getAllEventos() {
  if (!fs.existsSync(eventosDirectory)) return []
  
  const fileNames = fs.readdirSync(eventosDirectory)
  
  return fileNames.map((fileName) => {
    const fullPath = path.join(eventosDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Estandarizamos para que coincida con la Type Evento
    return {
      id: Math.random(), // Generamos un ID temporal
      slug: slugify(data.titulo),
      titulo: data.titulo,
      descripcion: data.descripcion || "",
      descripcionLarga: content || data.descripcion, // El contenido del MD es la desc. larga
      imagen: data.imagen,
      fecha: data.fecha,
      lugar: data.lugar,
      precio: data.costo || "$0 MXN", // Mapeamos 'costo' a 'precio'
      hotmart: data.hotmart || "#",
      destacado: false,
    }
  })
}