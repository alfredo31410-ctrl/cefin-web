import { slugify } from "./slugify";

export type Curso = {
  id: number;
  slug: string;
  slugOverride?: string; // 👈 nuevo
  titulo: string;
  descripcion: string;
  descripcionLarga: string;
  precio: string;
  imagen: string;
  categoria: "fiscal" | "nomina" | "contabilidad" | "mentalidad";
  duracion: string;
  instructor: string;
  destacado: boolean;
  hotmart: string;
};

const cursosBase: Omit<Curso, "slug">[] = [
  {
    id: 1,
    titulo: "Contabilidad e Impuestos para Médicos",
    slugOverride: "asesor-fiscal-medicos", // 🔥 aquí
    descripcion:
      "Aprende a manejar la contabilidad y optimizar los impuestos de médicos y profesionales de la salud con estrategias prácticas, claras y 100% aplicables. Entrenamiento intensivo con la C.P. Marisol Galván.",
    descripcionLarga: `Dominarás:

Elección del régimen fiscal ideal (RESICO o Actividades Profesionales).

Deducciones clave para reducir la carga tributaria.

Facturación electrónica sin errores y manejo correcto del CFDI.

IVA en el sector salud: ingresos exentos y gravados.
`,

    precio: "$1,527 MXN",
    imagen: "/medicos.png",
    categoria: "contabilidad",
    duracion: "5 Modulos",
    instructor: "Marisol Galvan",
    destacado: true,
    hotmart: "https://pay.hotmart.com/U101299066J",
  },

  {
    id: 2,
    titulo: "Plataformas Digitales",
    descripcion:
      "💻 Domina el Régimen Fiscal de Plataformas Digitales a Fondo.",
    descripcionLarga: `Aprende de la mano del Maestro Alfredo Cobos cómo cumplir 
    con tus obligaciones fiscales, maximizar beneficios y diseñar estrategias 
    efectivas para tus clientes en el mundo digital. 
    💬 Lunes de Sesión en Vivo del Factor CEFIN: Cada lunes a las 11:00 a.m. 
    (hora CDMX) te puedes conectar en vivo para preguntas y respuestas con el instructor, 
    quien dará recomendaciones y acompañamiento personalizado. Con valor de $ 2,000.00 pesos.
    Además: Podrás participar en 2 Cursos en Vivo Extras para complementar tu Formación:
    Curso en Vivo: Impuestos para Creadores de Contenido (YouTube, OnlyFans, Hotmart, Instagram, Facebook y Tik Tok), 
    10 de Septiembre de 2025, 11am, con valor de $ 1,200.00 pesos.
    Mentoría Estratégica en Vivo: Consigue más Clientes con Negocios Digitales. 10 de Septiembre de 2025, 1pm, con valor de $ 1,200.00 pesos.
    📜 Constancia de Participación: Al finalizar el curso recibirás tu constancia que avala tu esfuerzo y aprendizaje.
    En total recibes contenido con valor de $  5,787.00 y tu solo inviertes $ 1,387.00 pesos 
    (Promoción válida hasta el 06 de Octubre de 2025)
    Como en la escuela… ¡Pero mejor! Con casos reales, fundamentos legales y ejercicios diseñados para contadoras y contadores comprometidos con su actualización.
`,

    precio: "$1,527 MXN",
    imagen: "/plataformas.png",
    categoria: "fiscal",
    duracion: "8 modulos",
    instructor: "Alfredo Cobos",
    destacado: true,
    hotmart: "https://pay.hotmart.com/G101368377Q",
  },

  {
    id: 3,
    titulo: "Constructoras: Diplomados de Impuestos y Contabilidad",
    descripcion: "Domina la Contabilidad e Impuestos del Sector Construcción sin errores ni sanciones.",
    descripcionLarga: `Al finalizar el curso obtendrás los siguientes beneficios:

🧠 Aprende de un experto reconocido. Recibe la guía del Mtro. Alfredo Cobos, uno de los fiscalistas más respetados de México.
📉 Evita errores que cuestan millones. Desde estimaciones mal acumuladas hasta registros erróneos en el IMSS: aquí aprendes a hacer todo bien desde el inicio.
📈 Convierte el estímulo fiscal por terrenos en una estrategia de ahorro. Muchos contadores ni lo conocen; tú aprenderás a aplicarlo correctamente.
🧾 Cumple sin miedo con IVA, CFDI, SIROC, REPSE, NIF y más. Domina todos los frentes fiscales y contables del sector construcción.
🧱 Asesora a pequeñas y grandes constructoras con total confianza. Ya no vas a dudar ante obras, anticipo, deducciones o autoconstrucción: estarás preparado.
💼 Agrega un nuevo nicho rentable a tu cartera de clientes. El sector construcción está en auge: especialízate y sé el contador que todos buscan.

Este no es un curso más. Es el inicio de una transformación profesional.`,

    precio: "$4,387 MXN",
    imagen: "/constructoras.png",
    categoria: "fiscal",
    duracion: "16 modulos",
    instructor: "Alfredo Cobos",
    destacado: true,
    hotmart: "https://pay.hotmart.com/S100738570C",
  },
];

export const cursos: Curso[] = cursosBase.map((curso) => ({
  ...curso,
  slug: curso.slugOverride || slugify(curso.titulo),
}));
