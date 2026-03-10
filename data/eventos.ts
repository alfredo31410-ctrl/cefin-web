import { slugify } from "./slugify"

export type Evento = {
  id: number
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

const eventosBase: Evento[] = [
  {
    id: 1,
    titulo: "Seminario Reformas Fiscales 2026",
    descripcion: "Actualízate con los cambios fiscales más importantes del SAT.",
    descripcionLarga: `En este seminario aprenderás:

• Cambios fiscales 2026
• Estrategias fiscales
• Nuevas obligaciones SAT
• Casos prácticos reales`,

    imagen: "/eventoReforma-Fiscal.jpg",
    fecha: "2026-05-10 11:00:00",
    lugar: "Aguascalientes / Online",
    precio: "$999 MXN",

    hotmart: "https://pay.hotmart.com/XXXX",

    destacado: true
  },

  {
    id: 2,
    titulo: "Curso Intensivo Nómina e IMSS",
    descripcion: "Domina el cálculo correcto de nómina y obligaciones IMSS.",
    descripcionLarga: `Curso intensivo donde aprenderás:

• Cálculo de ISR
• IMSS
• Subsidio al empleo
• Timbrado de nómina`,

    imagen: "/eventoNomina-IMSS.png",
    fecha: "2026-04-15 11:00:00",
    lugar: "Online en vivo",
    precio: "$799 MXN",

    hotmart: "https://pay.hotmart.com/YYYY",

    destacado: false
  }
]

export const eventos = eventosBase.map((evento) => ({
  ...evento,
  slug: slugify(evento.titulo)
})) as (Evento & { slug: string })[]