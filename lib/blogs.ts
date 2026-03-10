import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { slugify } from '@/data/slugify'

const blogsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogs() {
  if (!fs.existsSync(blogsDirectory)) return []
  
  const fileNames = fs.readdirSync(blogsDirectory)
  
  return fileNames.map((fileName) => {
    const fullPath = path.join(blogsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      id: Math.random(), // ID temporal
      slug: slugify(data.titulo),
      titulo: data.titulo,
      descripcion: data.descripcion || "",
      contenido: content || data.descripcion, // El cuerpo del MD se mapea a 'contenido'
      imagen: data.imagen,
      fecha: data.fecha,
      videoId: data.videoId || "", // Por si en el CMS no pusiste video
      destacado: false,
    }
  })
}