export type Instructor = {
  id: number
  nombre: string
  slug: string
  especialidad: string
  bio: string
  imagen: string
}

export const instructores: Instructor[] = [

  {
    id: 1,
    nombre: "Juan Pérez",
    slug: "juan-perez",
    especialidad: "Especialista en Fiscal y CFDI",
    bio: `Contador público con más de 15 años de experiencia en asesoría fiscal
    y capacitación para profesionales contables en México.`,

    imagen: "/instructor1.jpg"
  },

  {
    id: 2,
    nombre: "María López",
    slug: "maria-lopez",
    especialidad: "Especialista en Nómina e IMSS",
    bio: `Especialista en cálculo de nómina, seguridad social y cumplimiento
    ante el IMSS con amplia experiencia en capacitación.`,

    imagen: "/instructor2.jpg"
  }

]