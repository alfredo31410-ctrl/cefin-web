import Container from "@/components/Container";

export default function PrivacidadPage() {
  return (
    <main className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Encabezado */}
          <section className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 shadow-xl sm:px-10 sm:py-14">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-red-600/15 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex rounded-full border bg-red-300/30 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-200">
                CEFIN · Protección de datos personales
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Aviso de Privacidad
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Conoce cómo recopilamos, utilizamos y protegemos la información
                que nos proporcionas al registrarte en nuestros cursos, eventos,
                membresías y servicios de capacitación.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                <span className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-slate-200">
                  Última actualización: 26 de junio de 2026
                </span>

                <a
                  href="mailto:contacto@cefincapacitacion.com"
                  className="rounded-xl bg-red-600 px-4 py-2 font-semibold text-slate-950 transition hover:bg-red-700"
                >
                  contacto@cefincapacitacion.com
                </a>
              </div>
            </div>
          </section>

          {/* Contenido */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <div className="border-b border-slate-200 pb-8">
              <p className="text-base leading-relaxed text-slate-600">
                CEFIN, con sitio web{" "}
                <a
                  href="https://cefin.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-red-600 transition hover:text-cyan-900 hover:underline"
                >
                  https://cefin.mx
                </a>
                , es responsable del tratamiento de los datos personales que nos
                proporciones a través de este sitio web, formularios, páginas de
                registro, medios de contacto, plataformas de pago o cualquier otro
                canal relacionado con nuestros cursos, membresías, eventos y
                servicios de capacitación.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Para cualquier duda relacionada con este Aviso de Privacidad o con
                el tratamiento de tus datos personales, puedes escribirnos a{" "}
                <a
                  href="mailto:contacto@cefincapacitacion.com"
                  className="font-semibold text-red-600 transition hover:text-cyan-900 hover:underline"
                >
                  contacto@cefincapacitacion.com
                </a>
                .
              </p>
            </div>

            {/* Sección 1 */}
            <section className="py-8">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-bold text-red-700">
                  01
                </span>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Datos personales que podemos recabar
                  </h2>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    Podemos recabar los siguientes datos personales:
                  </p>

                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Nombre.",
                      "Correo electrónico.",
                      "Número telefónico o WhatsApp.",
                      "Ciudad, estado o país.",
                      "Información enviada a través de formularios de contacto.",
                      "Datos necesarios para facturación, en caso de que los proporciones.",
                      "Información relacionada con cursos, eventos, membresías o capacitaciones de tu interés.",
                      "Datos de navegación, como dirección IP, dispositivo, navegador, páginas visitadas, interacción con anuncios, cookies y tecnologías similares.",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-900">
                    <strong>Importante:</strong> No solicitamos datos personales
                    sensibles de forma intencional. En caso de que el usuario los
                    proporcione voluntariamente, serán tratados únicamente para
                    atender la solicitud correspondiente.
                  </div>
                </div>
              </div>
            </section>

            {/* Sección 2 */}
            <section className="border-t border-slate-200 py-8">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-bold text-red-700">
                  02
                </span>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Finalidades del tratamiento de datos
                  </h2>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    Tus datos personales podrán ser utilizados para las siguientes
                    finalidades principales:
                  </p>

                  <ul className="mt-5 space-y-3 text-slate-600">
                    {[
                      "Atender solicitudes de información.",
                      "Dar seguimiento a registros en cursos, eventos, membresías o capacitaciones.",
                      "Proporcionar acceso a contenidos, materiales, clases, grabaciones o recursos relacionados.",
                      "Gestionar pagos, inscripciones, confirmaciones y comunicaciones operativas.",
                      "Brindar soporte, atención al cliente y seguimiento académico o comercial.",
                      "Emitir constancias, comprobantes o documentos relacionados con la capacitación, cuando aplique.",
                      "Cumplir obligaciones legales, fiscales, administrativas o contractuales.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 rounded-2xl bg-slate-900 p-5">
                    <h3 className="font-bold text-white">
                      Finalidades secundarias
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      También podremos utilizar tus datos para enviar promociones,
                      invitaciones, newsletters o información comercial; realizar
                      campañas de remarketing o publicidad personalizada; medir la
                      efectividad de campañas; analizar la navegación y crear
                      audiencias publicitarias en plataformas digitales.
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-cyan-200">
                      Si no deseas que tus datos sean utilizados para estas
                      finalidades, puedes solicitarlo escribiendo a{" "}
                      <a
                        href="mailto:contacto@cefincapacitacion.com"
                        className="font-semibold underline underline-offset-4"
                      >
                        contacto@cefincapacitacion.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sección 3 */}
            <section className="border-t border-slate-200 py-8">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-bold text-red-700">
                  03
                </span>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Uso de cookies y tecnologías de rastreo
                  </h2>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    Nuestro sitio web puede utilizar cookies, pixeles, etiquetas,
                    herramientas de analítica y tecnologías similares para mejorar
                    la experiencia de navegación, recordar preferencias, medir
                    visitas, analizar campañas y mostrar publicidad relacionada con
                    nuestros servicios.
                  </p>

                  <p className="mt-4 leading-relaxed text-slate-600">
                    Entre estas herramientas pueden encontrarse Meta Pixel,
                    plataformas de analítica, herramientas de automatización de
                    marketing, sistemas de formularios y tecnologías similares.
                  </p>

                  <p className="mt-4 leading-relaxed text-slate-600">
                    Puedes desactivar o limitar el uso de cookies desde la
                    configuración de tu navegador. Sin embargo, algunas funciones
                    del sitio podrían no operar correctamente.
                  </p>
                </div>
              </div>
            </section>

            {/* Sección 4 */}
            <section className="border-t border-slate-200 py-8">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-bold text-red-700">
                  04
                </span>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Transferencia de datos personales
                  </h2>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    Tus datos personales podrán ser compartidos con terceros
                    únicamente cuando sea necesario para operar nuestros servicios,
                    cumplir obligaciones legales o dar seguimiento a tu relación con
                    CEFIN.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Plataformas de pago, como Hotmart u otras pasarelas de cobro.",
                      "Plataformas de email marketing, CRM o automatización.",
                      "Servicios de formularios y gestión de contactos.",
                      "Proveedores de hosting, almacenamiento, analítica y soporte técnico.",
                      "Plataformas publicitarias como Meta, Google u otras similares.",
                      "Autoridades competentes, cuando exista obligación legal.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-slate-200 p-4 text-sm leading-relaxed text-slate-600"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 leading-relaxed text-slate-600">
                    Estos terceros podrán tratar tus datos conforme a sus propios
                    avisos de privacidad y términos aplicables.
                  </p>
                </div>
              </div>
            </section>

            {/* Sección 5 */}
            <section className="border-t border-slate-200 py-8">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-bold text-red-700">
                  05
                </span>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Derechos ARCO
                  </h2>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    Tienes derecho a acceder, rectificar, cancelar u oponerte al
                    tratamiento de tus datos personales, así como a revocar tu
                    consentimiento para el uso de los mismos, en los términos
                    permitidos por la legislación aplicable.
                  </p>

                  <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 p-5">
                    <p className="font-semibold text-slate-900">
                      Para ejercer tus derechos ARCO, envía una solicitud a:
                    </p>

                    <a
                      href="mailto:contacto@cefincapacitacion.com"
                      className="mt-2 inline-block font-bold text-red-600 hover:underline"
                    >
                      contacto@cefincapacitacion.com
                    </a>

                    <p className="mt-5 text-sm font-semibold text-slate-800">
                      Tu solicitud deberá incluir:
                    </p>

                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      <li>• Nombre completo.</li>
                      <li>• Medio de contacto.</li>
                      <li>• Derecho que deseas ejercer.</li>
                      <li>• Descripción clara de tu solicitud.</li>
                      <li>
                        • Documento o información que permita acreditar tu
                        identidad, cuando sea necesario.
                      </li>
                    </ul>
                  </div>

                  <p className="mt-5 leading-relaxed text-slate-600">
                    Daremos respuesta a tu solicitud conforme a los plazos
                    establecidos por la legislación aplicable.
                  </p>
                </div>
              </div>
            </section>

            {/* Secciones finales */}
            <section className="border-t border-slate-200 py-8">
              <div className="grid gap-6 lg:grid-cols-2">
                <article className="rounded-2xl border border-slate-200 p-6">
                  <span className="text-sm font-bold text-red-600">06</span>
                  <h2 className="mt-2 text-xl font-bold text-slate-900">
                    Conservación de datos
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Conservaremos tus datos personales durante el tiempo necesario
                    para cumplir las finalidades descritas en este Aviso de
                    Privacidad, atender obligaciones legales, fiscales o
                    administrativas, resolver aclaraciones y mantener registros
                    relacionados con nuestros servicios.
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Cuando los datos ya no sean necesarios, serán eliminados,
                    bloqueados o anonimizados conforme a nuestras posibilidades
                    técnicas y obligaciones legales.
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 p-6">
                  <span className="text-sm font-bold text-red-600">07</span>
                  <h2 className="mt-2 text-xl font-bold text-slate-900">
                    Seguridad de la información
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Implementamos medidas razonables de seguridad administrativas,
                    técnicas y físicas para proteger tus datos personales contra
                    pérdida, uso indebido, acceso no autorizado, alteración o
                    divulgación.
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    No obstante, ningún sistema de transmisión o almacenamiento de
                    información en internet puede garantizar seguridad absoluta.
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 p-6">
                  <span className="text-sm font-bold text-red-600">08</span>
                  <h2 className="mt-2 text-xl font-bold text-slate-900">
                    Enlaces a sitios de terceros
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Nuestro sitio puede contener enlaces a plataformas externas,
                    como Hotmart, YouTube, WhatsApp, redes sociales, formularios,
                    sitios de pago o páginas de terceros.
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    CEFIN no es responsable por las prácticas de privacidad,
                    contenido o seguridad de dichos sitios externos. Te recomendamos
                    revisar sus respectivos avisos de privacidad y términos de uso.
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 p-6">
                  <span className="text-sm font-bold text-red-600">09</span>
                  <h2 className="mt-2 text-xl font-bold text-slate-900">
                    Cambios al Aviso de Privacidad
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    CEFIN podrá modificar este Aviso de Privacidad en cualquier
                    momento para atender cambios legales, operativos, comerciales o
                    tecnológicos.
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Cualquier modificación será publicada en esta misma página,
                    indicando la fecha de última actualización.
                  </p>
                </article>
              </div>
            </section>

            {/* Consentimiento */}
            <section className="border-t border-slate-200 pt-8">
              <div className="rounded-2xl bg-gradient-to-br from-red-600to-slate-900 p-6 sm:p-8">
                <span className="text-sm font-bold text-cyan-200">10</span>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  Consentimiento
                </h2>

                <p className="mt-4 max-w-3xl leading-relaxed text-slate-200">
                  Al proporcionar tus datos personales a través de nuestro sitio
                  web, formularios, registros, plataformas de pago o canales de
                  contacto, reconoces haber leído este Aviso de Privacidad y
                  aceptas el tratamiento de tus datos conforme a lo aquí
                  establecido.
                </p>

                <p className="mt-6 text-sm font-medium text-red-100">
                  Última actualización: 26 de junio de 2026.
                </p>
              </div>
            </section>
          </section>
        </div>
      </Container>
    </main>
  );
}