import { slugify } from "./slugify"

export type Blog = {
  id: number
  titulo: string
  descripcion: string
  contenido: string
  imagen: string
  fecha: string
  videoId: string
  destacado: boolean
}

const blogBase: Blog[] = [
  {
    id: 1,
    titulo: "Reformas fiscales 2026 explicadas",
    descripcion: "Analizamos los cambios fiscales más importantes.",
    contenido: `En esta capacitación vimos:

• Reformas fiscales 2026
• Cambios en CFDI
• Nuevas obligaciones SAT`,
    imagen: "/reformas-fiscales.png",
    fecha: "12 Marzo 2026",
    videoId: "VIDEOID",
    destacado: true
  },

  {
    id: 2,
    titulo: "Actualización CFDI 4.0",
    descripcion: "Todo sobre la nueva versión del CFDI.",
    contenido: `En este live analizamos:

• Cambios CFDI
• Errores comunes
• Cómo evitarlos`,
    imagen: "/cfdi-4.webp",
    fecha: "5 Marzo 2026",
    videoId: "VIDEOID2",
    destacado: false
  }
]

export const blog = blogBase.map((post) => ({
  ...post,
  slug: slugify(post.titulo)
})) as (Blog & { slug: string })[]