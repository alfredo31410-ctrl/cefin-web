import Container from "@/components/Container";

type TermsSection = {
  id: number;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
  contact?: boolean;
};

const termsSections: TermsSection[] = [
  {
    id: 1,
    title: "Identidad del sitio",
    paragraphs: [
      "Este sitio web es operado por CEFIN, plataforma dedicada a la capacitación fiscal, contable, financiera y de desarrollo profesional para contadores, emprendedores, profesionistas y público interesado.",
      "Para cualquier duda relacionada con estos Términos y Condiciones, puedes contactarnos a través del correo indicado al final de esta sección.",
    ],
    contact: true,
  },
  {
    id: 2,
    title: "Servicios ofrecidos",
    paragraphs: [
      "CEFIN ofrece cursos, membresías, eventos, talleres, clases en vivo, grabaciones, materiales digitales, recursos descargables, contenidos gratuitos y programas de capacitación en línea o presenciales.",
      "La disponibilidad, duración, modalidad, precio, temario, instructores, beneficios, bonos y condiciones específicas de cada producto podrán variar y serán informados en la página correspondiente de cada curso, membresía, evento o programa.",
    ],
  },
  {
    id: 3,
    title: "Uso del sitio web",
    paragraphs: [
      "El usuario se compromete a utilizar este sitio web de forma lícita, responsable y conforme a estos Términos y Condiciones.",
      "Queda prohibido:",
    ],
    bullets: [
      "Utilizar el sitio para fines ilegales, fraudulentos o no autorizados.",
      "Copiar, distribuir, revender, modificar o explotar comercialmente los contenidos de CEFIN sin autorización.",
      "Compartir accesos, enlaces privados, materiales, grabaciones o recursos de pago con terceros.",
      "Intentar vulnerar la seguridad del sitio, cuentas, formularios, pasarelas de pago o plataformas relacionadas.",
      "Usar la marca, imagen, logotipo, textos, videos, materiales o contenidos de CEFIN sin permiso previo.",
    ],
  },
  {
    id: 4,
    title: "Registro y datos del usuario",
    paragraphs: [
      "Para acceder a ciertos cursos, eventos, membresías o materiales, el usuario podrá proporcionar datos como nombre, correo electrónico, teléfono, información de pago o datos de facturación.",
      "El usuario se compromete a proporcionar información verdadera, actualizada y completa. CEFIN no será responsable por errores derivados de datos incorrectos proporcionados por el usuario.",
      "El tratamiento de los datos personales se regirá por nuestro Aviso de Privacidad.",
    ],
  },
  {
    id: 5,
    title: "Compras, precios y pagos",
    paragraphs: [
      "Los precios de cursos, membresías, eventos y productos digitales se mostrarán en pesos mexicanos, salvo que se indique lo contrario.",
      "CEFIN podrá modificar precios, promociones, descuentos, bonos, fechas, disponibilidad y condiciones comerciales en cualquier momento, sin que ello afecte compras ya confirmadas.",
      "Los pagos podrán procesarse mediante plataformas externas como Hotmart u otras pasarelas de pago. Al realizar una compra mediante dichas plataformas, el usuario también acepta sus términos, condiciones, políticas de pago, seguridad, facturación y reembolso.",
      "CEFIN no almacena directamente los datos completos de tarjetas bancarias cuando el pago se procesa a través de terceros.",
    ],
  },
  {
    id: 6,
    title: "Acceso a cursos, membresías y materiales",
    paragraphs: [
      "Una vez confirmado el pago o registro correspondiente, el usuario recibirá acceso al curso, membresía, evento o material adquirido conforme a las condiciones indicadas en la página de venta o comunicación oficial.",
      "El acceso puede proporcionarse mediante plataformas externas, enlaces privados, correo electrónico, grupos, sesiones en vivo, áreas de alumnos u otros medios digitales.",
      "El usuario entiende que algunos contenidos pueden estar sujetos a fechas específicas, sesiones en vivo, disponibilidad temporal, preventa, liberación progresiva o vigencia determinada.",
    ],
  },
  {
    id: 7,
    title: "Membresías",
    paragraphs: [
      "Las membresías de CEFIN podrán incluir acceso a cursos, sesiones en vivo, grabaciones, materiales, comunidades, bonos u otros beneficios, de acuerdo con la oferta vigente al momento de la contratación.",
      "La duración, alcance, renovación, cancelación y beneficios específicos de cada membresía serán indicados en su página correspondiente.",
      "Los beneficios de una membresía no son transferibles a terceros, salvo autorización expresa de CEFIN.",
    ],
  },
  {
    id: 8,
    title: "Eventos y capacitaciones en vivo",
    paragraphs: [
      "En el caso de eventos, talleres o sesiones en vivo, CEFIN podrá modificar fechas, horarios, ponentes, modalidad o sede por causas operativas, técnicas, logísticas o de fuerza mayor.",
      "Cuando sea posible, CEFIN notificará dichos cambios a través de los medios de contacto proporcionados por el usuario.",
      "Si un evento incluye grabación, constancia, material descargable o acceso posterior, esto se indicará en la oferta correspondiente.",
    ],
  },
  {
    id: 9,
    title: "Reembolsos y cancelaciones",
    paragraphs: [
      "Las condiciones de reembolso, cancelación o garantía podrán variar según el curso, membresía, evento o plataforma de pago utilizada.",
      "Cuando la compra se realice mediante Hotmart u otra plataforma externa, el proceso de reembolso podrá estar sujeto a las políticas, plazos y procedimientos de dicha plataforma.",
      "En caso de que una oferta específica incluya garantía de satisfacción, plazo de reembolso o condiciones especiales, estas se indicarán en la página de venta correspondiente.",
      "No aplicarán reembolsos cuando:",
    ],
    bullets: [
      "El usuario haya incumplido estos Términos y Condiciones.",
      "Se detecte uso indebido, copia, distribución o reventa del contenido.",
      "El periodo de garantía o reembolso haya vencido.",
      "El producto, evento o servicio indique expresamente que no cuenta con reembolso.",
      "La solicitud no cumpla con las condiciones establecidas por la plataforma de pago correspondiente.",
    ],
    contact: true,
  },
  {
    id: 10,
    title: "Facturación",
    paragraphs: [
      "En caso de requerir factura, el usuario deberá solicitarla proporcionando los datos fiscales correctos dentro del plazo indicado por CEFIN o por la plataforma de pago correspondiente.",
      "CEFIN no será responsable por facturas emitidas con datos incorrectos proporcionados por el usuario ni por solicitudes realizadas fuera del plazo establecido.",
    ],
  },
  {
    id: 11,
    title: "Propiedad intelectual",
    paragraphs: [
      "Todos los contenidos disponibles en este sitio y en los cursos, eventos, membresías o materiales de CEFIN, incluyendo textos, videos, clases, grabaciones, imágenes, presentaciones, plantillas, documentos, diseños, logotipos, marcas, metodologías y recursos digitales, son propiedad de CEFIN o de sus respectivos titulares.",
      "La compra o registro a un curso, evento, membresía o programa otorga al usuario una licencia limitada, personal, no exclusiva, no transferible y revocable para acceder al contenido conforme a las condiciones del producto adquirido.",
      "Queda prohibida la reproducción, distribución, venta, cesión, publicación, transmisión, grabación, descarga masiva, modificación o uso comercial no autorizado de cualquier contenido de CEFIN.",
    ],
    callout:
      "El acceso a un curso o programa es personal. No autoriza compartir materiales, accesos, grabaciones ni recursos privados con terceros.",
  },
  {
    id: 12,
    title: "Uso educativo de la información",
    paragraphs: [
      "Los contenidos de CEFIN tienen fines educativos, informativos y de capacitación profesional.",
      "La información proporcionada no constituye asesoría fiscal, contable, legal, financiera o empresarial personalizada. La aplicación de cualquier criterio, estrategia, recomendación o herramienta dependerá de la situación particular de cada usuario.",
      "CEFIN recomienda consultar con un profesional especializado antes de tomar decisiones fiscales, contables, legales o financieras específicas.",
    ],
    callout:
      "Los contenidos no sustituyen la revisión de un caso particular con un profesionista especializado.",
  },
  {
    id: 13,
    title: "Resultados y testimonios",
    paragraphs: [
      "CEFIN puede mostrar testimonios, casos de éxito, opiniones o resultados de alumnos y clientes.",
      "Dichos testimonios reflejan experiencias individuales y no garantizan que todos los usuarios obtendrán los mismos resultados. Los resultados dependen de múltiples factores, incluyendo experiencia previa, dedicación, contexto profesional, implementación y condiciones particulares de cada persona.",
    ],
  },
  {
    id: 14,
    title: "Disponibilidad del sitio y plataformas",
    paragraphs: [
      "CEFIN procurará mantener disponible el sitio web y los accesos digitales. Sin embargo, no garantiza disponibilidad continua, ininterrumpida o libre de errores.",
      "Pueden existir interrupciones por mantenimiento, fallas técnicas, actualizaciones, causas externas, plataformas de terceros, proveedores de internet, eventos de fuerza mayor o situaciones fuera del control de CEFIN.",
    ],
  },
  {
    id: 15,
    title: "Enlaces y plataformas de terceros",
    paragraphs: [
      "El sitio web puede contener enlaces a plataformas externas como Hotmart, YouTube, WhatsApp, redes sociales, formularios, sistemas de pago, comunidades, herramientas de automatización, páginas de aterrizaje u otros sitios.",
      "CEFIN no controla ni es responsable por el contenido, disponibilidad, políticas, seguridad, funcionamiento o prácticas de dichos terceros.",
      "El uso de plataformas externas estará sujeto a sus propios términos y condiciones.",
    ],
  },
  {
    id: 16,
    title: "Comunicaciones",
    paragraphs: [
      "Al registrarte, comprar, descargar materiales o solicitar información, aceptas recibir comunicaciones relacionadas con el producto o servicio solicitado.",
      "También podremos enviarte información comercial, promociones, invitaciones, contenidos educativos o novedades de CEFIN, conforme a nuestro Aviso de Privacidad.",
      "Puedes solicitar dejar de recibir comunicaciones promocionales escribiendo al correo indicado al final de esta sección.",
    ],
    contact: true,
  },
  {
    id: 17,
    title: "Suspensión o cancelación de acceso",
    paragraphs: [
      "CEFIN podrá suspender o cancelar el acceso de un usuario cuando detecte:",
    ],
    bullets: [
      "Uso indebido del contenido.",
      "Compartición de accesos.",
      "Reventa o distribución no autorizada.",
      "Conductas fraudulentas.",
      "Incumplimiento de estos Términos y Condiciones.",
      "Ataques, intentos de vulneración o uso abusivo de plataformas.",
      "Conductas que afecten a otros usuarios, instructores, comunidad o equipo de CEFIN.",
    ],
    callout:
      "En estos casos, CEFIN podrá negar reembolsos y tomar las medidas legales correspondientes.",
  },
  {
    id: 18,
    title: "Limitación de responsabilidad",
    paragraphs: [
      "CEFIN no será responsable por daños, pérdidas, gastos o perjuicios derivados del uso incorrecto del sitio, interrupciones tecnológicas, decisiones tomadas con base en contenidos educativos, fallas de terceros, errores proporcionados por el usuario o incumplimiento de estos Términos y Condiciones.",
    ],
  },
  {
    id: 19,
    title: "Modificaciones a los Términos y Condiciones",
    paragraphs: [
      "CEFIN podrá modificar estos Términos y Condiciones en cualquier momento para atender cambios operativos, comerciales, tecnológicos o legales.",
      "Las modificaciones se publicarán en esta misma página y entrarán en vigor desde su publicación.",
    ],
  },
  {
    id: 20,
    title: "Legislación aplicable",
    paragraphs: [
      "Estos Términos y Condiciones se regirán por las leyes aplicables en México.",
      "En caso de controversia, las partes procurarán resolverla de buena fe mediante comunicación directa. Si no fuera posible, se someterán a las autoridades competentes conforme a la legislación mexicana aplicable.",
    ],
  },
  {
    id: 21,
    title: "Contacto",
    paragraphs: [
      "Para cualquier duda, aclaración, solicitud o comentario relacionado con estos Términos y Condiciones, puedes escribirnos al siguiente correo:",
    ],
    contact: true,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <section className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 shadow-xl sm:px-10 sm:py-14">
            <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-red-500/15 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex rounded-full border border-red-300/30 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-200">
                CEFIN · Uso del sitio y servicios
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Términos y Condiciones
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Conoce las condiciones aplicables al navegar, registrarte, comprar
                o utilizar los cursos, eventos, membresías y recursos de CEFIN.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                <span className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-slate-200">
                  Última actualización: 26 de junio de 2026
                </span>

                <a
                  href="mailto:contacto@cefincapacitacion.com"
                  className="rounded-xl bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700"
                >
                  contacto@cefincapacitacion.com
                </a>
              </div>
            </div>
          </section>

          <div className="mt-8 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start">
            {/* Navegación lateral */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  Contenido
                </p>

                <nav className="mt-4 max-h-[65vh] space-y-1 overflow-y-auto pr-2">
                  {termsSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#terminos-${section.id}`}
                      className="block rounded-lg px-3 py-2 text-sm leading-snug text-slate-600 transition hover:bg-red-50 hover:text-red-700"
                    >
                      <span className="mr-2 font-semibold text-red-600">
                        {String(section.id).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Documento */}
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <div className="border-b border-slate-200 pb-8">
                <p className="text-base leading-relaxed text-slate-600">
                  Bienvenido a CEFIN. Al acceder, navegar, registrarte, comprar o
                  utilizar este sitio web, aceptas los presentes Términos y
                  Condiciones. Si no estás de acuerdo con ellos, te recomendamos no
                  utilizar el sitio ni contratar nuestros servicios.
                </p>

                <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm leading-relaxed text-red-900">
                  Estos Términos y Condiciones aplican al sitio web, cursos,
                  membresías, eventos, recursos digitales y demás servicios
                  ofrecidos por CEFIN.
                </div>
              </div>

              {termsSections.map((section) => (
                <section
                  key={section.id}
                  id={`terminos-${section.id}`}
                  className="scroll-mt-28 border-b border-slate-200 py-8 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-bold text-red-700">
                      {String(section.id).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl font-bold text-slate-900">
                        {section.title}
                      </h2>

                      <div className="mt-3 space-y-4">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="leading-relaxed text-slate-600"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {section.bullets && (
                        <ul className="mt-5 space-y-3">
                          {section.bullets.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 leading-relaxed text-slate-600"
                            >
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.callout && (
                        <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm leading-relaxed text-red-900">
                          {section.callout}
                        </div>
                      )}

                      {section.contact && (
                        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                          <p className="text-sm font-semibold text-slate-900">
                            Correo de contacto
                          </p>

                          <a
                            href="mailto:contacto@cefincapacitacion.com"
                            className="mt-2 inline-block font-bold text-red-600 transition hover:text-red-700 hover:underline"
                          >
                            contacto@cefincapacitacion.com
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              ))}

              <section className="mt-8 rounded-2xl bg-gradient-to-br from-red-600 to-slate-900 p-6 sm:p-8">
                <p className="text-sm font-bold text-red-100">
                  CEFIN · Términos y Condiciones
                </p>

                <p className="mt-3 max-w-3xl leading-relaxed text-white">
                  Al utilizar nuestros servicios aceptas estos Términos y
                  Condiciones y te comprometes a hacer un uso responsable de la
                  información, materiales, accesos y plataformas proporcionadas.
                </p>

                <p className="mt-5 text-sm text-red-100">
                  Última actualización: 26 de junio de 2026.
                </p>
              </section>
            </article>
          </div>
        </div>
      </Container>
    </main>
  );
}