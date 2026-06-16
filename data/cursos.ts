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
  cardUrl?: string;
  abrirEnNuevaPestana?: boolean;
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
  {
    id: 4,
    titulo: "Sistema 360° - Asesor Contable",
    slugOverride: "sistema-360-asesor-contable",
    descripcion:
      "Muchos contadores saben registrar operaciones, pero muy pocos entienden realmente qué están haciendo.",
    descripcionLarga: `Muchos contadores saben registrar operaciones, pero muy pocos entienden realmente qué están haciendo.

Incluye:
Nuestros mejores 8 cursos contables.

Además, te llevas estos regalos:
Acceso a 6 meses de Sesiones en Vivo del Factor CEFIN todos los lunes.
Guía para Conseguir a tus Primeros 5 Clientes.
Incubadora de Despachos Contables.
Reprograma tu Relación con el Dinero - Finanzas Personales para Contadores.
El Arte de Saber Cobrar para Contadores.
Resolución Miscelánea Fiscal 2026.
Inteligencia Artificial y Excel para Contadores.
Norma - IA, Agente de Inteligencia Artificial para Dudas Contables.
Taller de Contabilidad Electrónica.

Precio normal: $67,405.00 MXN.
Inversión especial: $9,987.00 MXN.`,
    precio: "$9,987 MXN",
    imagen: "/sistema-360-asesor-contable.png",
    categoria: "contabilidad",
    duracion: "Ruta 360",
    instructor: "Alfredo Cobos",
    destacado: true,
    hotmart:
      "https://pay.hotmart.com/Y105942158X?off=57a4x11n&checkoutMode=10",
  },
  {
    id: 5,
    titulo: "Método CEFIN: Contador a Empresario Contable",
    slugOverride: "metodo-cefin-contador-a-empresario",
    descripcion:
      "Transforma tu despacho contable en un negocio más ordenado, rentable y profesional con estrategias de ventas, cobro, liderazgo y posicionamiento.",
    descripcionLarga:
      "Una ruta estratégica para dejar de operar únicamente como contador y comenzar a dirigir tu despacho con mentalidad empresarial.",
    precio: "$3,687 MXN",
    imagen: "/metodo-cefin-contador-empresario.png",
    categoria: "mentalidad",
    duracion: "9 cursos",
    instructor: "Alfredo Cobos",
    destacado: true,
    hotmart:
      "https://pay.hotmart.com/A106207243T?off=ul4f4uez&checkoutMode=10&bid=1781113657950",
  },
  {
  id: 6,
  titulo: "Tus Primeros 5 Clientes Contables",
  descripcion:
    "Guía práctica para atraer, contactar y convertir prospectos en clientes para tu despacho contable.",
  descripcionLarga: `Aprende a identificar a quién puedes ayudar, cómo presentar tus servicios, qué mensajes enviar y cómo convertir conversaciones en clientes reales.

Deja de depender de recomendaciones y empieza a generar tus propios clientes con una estrategia clara.`,

  precio: "$297 MXN",
  imagen: "/clientes-contables.png",
  categoria: "mentalidad",
  duracion: "Guía práctica",
  instructor: "CEFIN",
  destacado: false,
  hotmart: "#",
  cardUrl: "https://cefin.mx/landings/low-tickets/primeros-clientes",
  abrirEnNuevaPestana: true,
},

{
  id: 7,
  titulo: "Crea tu Contrato de Servicios Contables",
  descripcion:
    "Aprende qué debe incluir un contrato contable para evitar problemas y formalizar mejor tus servicios.",
  descripcionLarga: `Define alcances, responsabilidades, honorarios y condiciones de trabajo para evitar conflictos con tus clientes.

Trabaja con mayor claridad, profesionalismo y seguridad.`,

  precio: "$197 MXN",
  imagen: "/contrato-contable.png",
  categoria: "mentalidad",
  duracion: "Entrenamiento práctico",
  instructor: "CEFIN",
  destacado: false,
  hotmart: "#",
  cardUrl: "https://cefin.mx/landings/low-tickets/servicios-contables",
  abrirEnNuevaPestana: true,
},

{
  id: 8,
  titulo: "Honorarios Contables: Aprende a Cotizar y Cobrar sin Miedo",
  descripcion:
    "Guía práctica para calcular y presentar tus honorarios contables con seguridad.",
  descripcionLarga: `Aprende a estructurar tus precios considerando tiempo, complejidad y valor.

Deja de cobrar al tanteo y empieza a vender con confianza.`,

  precio: "$297 MXN",
  imagen: "/honorarios-contables.png",
  categoria: "mentalidad",
  duracion: "Guía práctica",
  instructor: "CEFIN",
  destacado: false,
  hotmart: "#",
  cardUrl: "https://cefin.mx/landings/low-tickets/honorarios-contables",
  abrirEnNuevaPestana: true,
},

{
  id: 9,
  titulo: "Cuentas Contables desde Cero: Cargos, Abonos y Registros sin Confusión",
  descripcion:
    "Aprende la lógica básica de las cuentas contables y registros paso a paso.",
  descripcionLarga: `Comprende activos, pasivos, ingresos y gastos sin memorizar.

Aprende a registrar operaciones con lógica y seguridad desde cero.`,

  precio: "$297 MXN",
  imagen: "/cuentas-contables.png",
  categoria: "contabilidad",
  duracion: "Guía práctica",
  instructor: "CEFIN",
  destacado: false,
  hotmart: "#",
  cardUrl: "https://cefin.mx/landings/low-tickets/cuentas-contables",
  abrirEnNuevaPestana: true,
},
];

export const cursos: Curso[] = cursosBase.map((curso) => ({
  ...curso,
  slug: curso.slugOverride || slugify(curso.titulo),
}));
