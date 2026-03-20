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
    titulo: "Seminario Reformas Fiscales 2026",
    slug: "reformas-fiscales-2026", // URL: /eventos/reformas-fiscales-2026
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
    slug: "nomina-imss-2026", // URL: /eventos/nomina-imss-2026
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
    destacado: true
  }
]

// 3. Exportamos la data limpia. 
// Ya no necesitamos la función .map con slugify porque ya los escribimos arriba.
export const eventos = eventosLocales;