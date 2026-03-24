// 1. Definimos el tipo de dato para que sea idéntico al del CMS
export type Evento = {
  id: number
  titulo: string
  slug: string // <--- IMPORTANTE: Ahora lo escribimos a mano para evitar errores
  descripcion: string
  descripcionLarga: string
  imagen: string
  fecha: string | Date
  lugar: string
  precio: string
  hotmart: string
  destacado: boolean
}

// 2. Eventos que tienes guardados físicamente en el código
const eventosLocales: Evento[] = [
  {
    id: 1,
    titulo: "Contador 360° Rumbo a 2026",
    slug: "contador-360-rumbo-a-2026", // URL: /eventos/contador-360-rumbo-a-2026
    descripcion: "Prepárate para el futuro del contaduría con este seminario especializado.",
    descripcionLarga: `Programa:
• Reformas fiscales 2026
• Metas Estrategicas 2026
• Contador 360° rumbo a 2026`,
    imagen: "/evento_cdmx_2025.png",
    fecha: "2025-12-05 10:00:00",
    lugar: "CDMX / Presencial",
    precio: "$--- MXN",
    hotmart: "https://pay.hotmart.com/XXXX",
    destacado: false
  },
  {
    id: 2,
    titulo: "Contador 360° Rumbo a 2026 - Edición Guadalajara",
    slug: "contador-360-rumbo-a-2026-guadalajara", // URL: /eventos/contador-360-rumbo-a-2026-guadalajara
    descripcion: "Un espacio exclusivo para una experiencia de alto nivel",
    descripcionLarga: `Programa:
• Reformas fiscales 2026
• Metas Estrategicas 2026
• Contador 360° rumbo a 2026`,
    imagen: "/evento_guadalajara_2026.png",
    fecha: "2026-01-24 10:00:00",
    lugar: "Guadalajara / Presencial",
    precio: "$--- MXN",
    hotmart: "https://pay.hotmart.com/ZZZZ",
    destacado: false
  },
  {
    id: 3,
    titulo: "NIF sin miedo",
    slug: "nif-sin-miedo", // URL: /eventos/nif-sin-miedo
    descripcion: "Aprende a manejar el NIF sin temor y aprovecha al máximo tus beneficios fiscales.",
    descripcionLarga: `Programa:
• Que son las NIF y como se aplican
• Poatulados basicos
• Casos reales: Efectivo, Cuentas por cobrar, Activo fijo, Pasivos y Capital
• Bases de estados financieros`,
    imagen: "/nif-monterey.png",
    fecha: "2026-02-27 10:00:00",
    lugar: "Monterrey / Presencial",
    precio: "$--- MXN",
    hotmart: "https://pay.hotmart.com/YYYY",
    destacado: false
  }
]

// 3. Exportamos la data limpia. 
// Ya no necesitamos la función .map con slugify porque ya los escribimos arriba.
export const eventos = eventosLocales;