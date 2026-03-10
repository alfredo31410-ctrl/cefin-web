import { slugify } from "./slugify"

export type Curso = {
  id: number
  slug: string
  titulo: string
  descripcion: string
  descripcionLarga: string
  precio: string
  imagen: string
  categoria: "fiscal" | "nomina" | "contabilidad"
  duracion: string
  instructor: string
  destacado: boolean
  hotmart: string
}

const cursosBase: Omit<Curso, "slug">[] = [
  {
    id: 1,
    titulo: "CFDI 4.0 Paso a Paso",
    descripcion: "Aprende a emitir CFDI correctamente.",
    descripcionLarga: `Curso completo donde aprenderás:

• Emisión correcta de CFDI
• Cancelaciones
• Complementos
• Validaciones SAT
• Casos prácticos reales`,

    precio: "$1,499 MXN",
    imagen: "/cfdi-4.webp",
    categoria: "fiscal",
    duracion: "6 horas",
    instructor: "Alfredo Cobos",
    destacado: true,
    hotmart: "https://pay.hotmart.com/XXXX"
  },

  {
    id: 2,
    titulo: "Declaraciones Anuales",
    descripcion: "Domina la presentación correcta.",
    descripcionLarga: `Aprende paso a paso:

• Declaración anual personas físicas
• Personas morales
• Estrategias fiscales`,

    precio: "$1,799 MXN",
    imagen: "/reformas-fiscales.png",
    categoria: "contabilidad",
    duracion: "8 horas",
    instructor: "Marisol Galvan",
    destacado: true,
    hotmart: "https://pay.hotmart.com/YYYY"
  },

  {
    id: 3,
    titulo: "Nómina desde Cero",
    descripcion: "Aprende a calcular nómina correctamente.",
    descripcionLarga: `Aprenderás:

• Cálculo de ISR
• Subsidio al empleo
• IMSS
• Timbrado de nómina
• Casos prácticos reales`,

    precio: "$1,299 MXN",
    imagen: "/nomina-imss.jpeg",
    categoria: "nomina",
    duracion: "5 horas",
    instructor: "Alfredo Cobos",
    destacado: false,
    hotmart: "https://pay.hotmart.com/ZZZZ"
  }
]

export const cursos: Curso[] = cursosBase.map((curso) => ({
  ...curso,
  slug: slugify(curso.titulo)
}))