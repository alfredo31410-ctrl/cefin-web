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
    fecha: "5 Marzo 2026",
    videoId: "JgNvVhYcaHc&list",
    destacado: true
  },

  {
    id: 2,
    titulo: "Reformas Fiscales 2026",
    descripcion: `¿Quieres entender las Reformas Fiscales 2026 sin enredos y antes que la mayoría?
Este curso gratuito en vivo para contadores es la actualización que necesitas para llegar preparado(a) al próximo año fiscal.`,
    contenido: `🔎 ¿Qué aprenderás en este curso gratuito?

✔️ Cambios fiscales confirmados rumbo a 2026
✔️ Errores comunes que pondrán en riesgo a muchos contribuyentes
✔️ Qué debe saber hoy todo contador actualizado
✔️ Nuevas oportunidades profesionales para asesores fiscales
✔️ Cómo convertir las reformas en ventaja competitiva

Este no es un resumen superficial.
Es una clase diseñada para entender, aplicar y anticiparte.`,
    imagen: "/reformas_fiscales.png",
    fecha: "29 Diciembre 2025",
    videoId: "OJ-4I5JI8gM&list",
    destacado: true
  },

  {
    id: 3,
    titulo: "Resolución Miscelánea 2026",
    descripcion: `La Resolución Miscelánea 2026 trae cambios importantes que impactan directamente tu práctica contable y fiscal.
    Si eres contador(a), asesor(a) o llevas la materia fiscal de personas físicas o morales, esta clase es para ti.`,
    contenido: `📌 ¿Qué aprenderás en esta clase?

✅ Cuáles son los cambios más importantes de la Resolución Miscelánea 2026
✅ Qué reglas impactan directamente declaraciones, CFDI y cumplimiento fiscal
✅ Errores comunes que pueden generar multas o revisiones del SAT
✅ Qué debes ajustar desde hoy en tus procesos contables
✅ Cómo prepararte correctamente para el entorno fiscal 2026`,
    imagen: "/ResolucionMiscelanea.png",
    fecha: "8 Enero 2026",
    videoId: "BOWw8dRq2YE&list",
    destacado: true
  }
]

export const blog = blogBase.map((post) => ({
  ...post,
  slug: slugify(post.titulo)
})) as (Blog & { slug: string })[]