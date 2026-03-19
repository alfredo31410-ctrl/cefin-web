import { slugify } from "./slugify"

export type Blog = {
  id: number
  titulo: string
  descripcion: string
  contenido: string // En Decap este suele ser el "body"
  imagen: string
  fecha: string | Date
  videoId?: string  // Lo hacemos opcional con el "?"
  destacado: boolean
  slug: string
}

const blogBase = [
  {
    id: 1,
    titulo: "CUCA, CUFIN y Pérdidas Fiscales – Las Cifras que Pueden Costarte Clientes Día 3/3",
    descripcion: `Saber no es lo mismo que dominar. 
    Muchos contadores conocen los conceptos.
Pocos dominan la ejecución completa.
Y la diferencia se nota cuando llega el momento de presentar.`,
    contenido: `En este entrenamiento descubrirás:

✅ Cómo estructurar correctamente la determinación final
✅ Qué validar antes de enviar
✅ Cómo evitar inconsistencias comunes
✅ Cómo presentar con criterio y seguridad
✅ La mentalidad del contador que trabaja sin miedo
`,
    imagen: "/TRANSMISIONES - RETO CEFIN  DECLARACIONES - IMAGENES CUADRADAS (Anuncio para Tiendas de Facebook).png",
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
  },

  {
    id: 3,
    titulo: "Prueba de blog destacado",
    descripcion: "Este es un blog de prueba para verificar que el sistema de destacados funciona correctamente.",
    contenido: `Este blog no tiene un video asociado, pero es importante para probar que el sistema de destacados funciona correctamente. Debería aparecer en la sección de blogs destacados a pesar de no tener un videoId, siempre y cuando la propiedad destacado esté en true.`,
    imagen: "/eventoReforma-Fiscal.jpg",
    fecha: "5 Marzo 2026",
    videoId: "VIDEOID2",
    destacado: true
  }
]

export const blog = blogBase.map((post) => ({
  ...post,
  slug: slugify(post.titulo)
})) as (Blog & { slug: string })[]