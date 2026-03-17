export type Instructor = {
  id: number
  nombre: string
  slug: string
  especialidad: string
  descripcionCorta: string
  imagen: string
  frase: string
  resumen: string
  experiencia: string[]
  historia: string
}

export const instructores: Instructor[] = [

  {
   id: 1,
  slug: "alfredo-cobos",
  nombre: "Mtro. Alfredo Cobos",

  especialidad: "Estrategia Fiscal y Consultoría Empresarial",

  frase: "Transformando la práctica contable en México",

  descripcionCorta:
    "Especialista en estrategia fiscal con más de 15 años de experiencia. Ha asesorado a más de 260 empresas y capacitado a más de 15,000 contadores en México.",

  resumen:
    "Contador público y maestro en impuestos con más de 15 años de experiencia en asesoría fiscal, consultoría empresarial y capacitación profesional. Fundador de CEFIN y director de la Red CEFIN, enfocado en el crecimiento y profesionalización de contadores en México.",

  experiencia: [
    "+15 años de experiencia en asesoría fiscal",
    "+260 empresas asesoradas en México",
    "+15,000 contadores capacitados",
    "Instructor certificado por CONOCER (desde 2017)",
    "Consultor certificado por CONOCER (desde 2018)",
    "Maestro en Impuestos",
    "Fundador de CEFIN",
    "Director Nacional de la Red CEFIN"
  ],

  historia:
    "Licenciado en Contaduría por la Universidad Autónoma de Campeche, Alfredo Cobos ha dedicado más de 15 años a la asesoría fiscal y generación de información financiera para la toma de decisiones empresariales. \n\nJunto a su esposa, fundó C&G Consultores PYME, despacho contable desde el cual ha trabajado con micro, pequeñas y medianas empresas, ayudándolas a cumplir correctamente con sus obligaciones fiscales y fortalecer su operación financiera. \n\nEn 2017 fundó el Centro de Estudios Fiscales, Innovación y Negocios (CEFIN), con el objetivo de capacitar y empoderar contadores en todo México, alcanzando a más de 15,000 profesionales a través de programas en línea y presenciales. \n\nEn 2020 creó la Red CEFIN, una comunidad de contadores que colaboran, se actualizan constantemente y comparten estrategias de crecimiento profesional.",

  imagen: "/Alfredo.jpeg"
  },

  {
  id: 2,
  slug: "marisol-galvan",
  nombre: "Marisol Galván Rodríguez",

  especialidad: "Contabilidad, Impuestos y Formación Profesional",

  frase: "Empoderando contadores para crecer con seguridad y criterio",

  descripcionCorta:
    "Contadora pública con más de 10 años de experiencia en asesoría fiscal, formación contable y desarrollo profesional. Ha capacitado a miles de contadores en México a través de CEFIN.",

  resumen:
    "Licenciada en Contaduría con trayectoria en asesoría fiscal, capacitación y desarrollo de talento contable. Socia de CEFIN y participante activa en la Red CEFIN, enfocada en formar profesionales con criterio, seguridad y crecimiento constante.",

  experiencia: [
    "+10 años de experiencia en contabilidad e impuestos",
    "Socia de C&G Consultores PYME",
    "Co-fundadora de CEFIN",
    "+30,000 contadores capacitados en México",
    "Participante activa en la Red CEFIN",
    "Conductora del programa 'TODO CUENTA'",
    "Especialista en formación contable y desarrollo profesional"
  ],

  historia:
    "Licenciada en Contaduría por la Universidad Autónoma de Campeche, Marisol Galván inició su trayectoria profesional desde sus años universitarios, ejerciendo en el ámbito contable y fiscal. \n\nEn su camino profesional, hizo una pausa significativa para dedicarse a su familia, asumiendo el rol de mamá de tres hijos, experiencia que marcó profundamente su enfoque personal y profesional. \n\nEn 2021 retomó su carrera con una visión renovada, combinando su experiencia previa con una nueva perspectiva de vida, lo que fortaleció su pasión por la contaduría y la enseñanza. \n\nJunto a su esposo, fundó C&G Consultores PYME, despacho contable enfocado en asesorar a micro, pequeñas y medianas empresas en México. \n\nEn 2017 cofundó el Centro de Estudios Fiscales, Innovación y Negocios (CEFIN), desde donde ha participado en la capacitación de más de 30,000 contadores a nivel nacional. \n\nEn 2020 se integró al desarrollo de la Red CEFIN, una comunidad de profesionales que trabajan en equipo para mantenerse actualizados, compartir estrategias de crecimiento y elevar el nivel del ejercicio contable en México. \n\nActualmente, también comparte contenido a través de redes sociales y es conductora del programa 'TODO CUENTA', donde aborda temas contables, fiscales y profesionales con un enfoque cercano y práctico.",

  imagen: "/Marisol.jpeg"
}

]