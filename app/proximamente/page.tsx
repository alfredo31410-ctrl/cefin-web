import Container from "@/components/Container";
import TrackedLink from "@/components/TrackedLink";
import Link from "next/link";

export default function ProximamentePage() {
  const whatsappNumber = "524494554578";
  const message = encodeURIComponent(
    "Hola CEFIN! Me interesa recibir informacion y el descuento exclusivo para el curso que esta en produccion.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <main className="flex min-h-screen items-center bg-slate-50 py-20">
      <Container>
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 text-center shadow-2xl shadow-slate-200 md:p-16">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-50 opacity-50 blur-3xl" />

          <span className="mb-8 inline-block rounded-full bg-red-50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-red-600">
            En produccion
          </span>

          <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Algo grande esta <span className="text-red-600">en camino</span>
          </h1>

          <p className="mb-12 text-lg leading-relaxed text-slate-500 md:text-xl">
            Nuestros expertos estan terminando de pulir los ultimos detalles de
            este programa. Contactanos ahora y asegura tu lugar con descuento
            exclusivo de preventa.
          </p>

          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row">
            <Link
              href="/cursos"
              className="flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-lg transition-all active:scale-95 hover:bg-slate-800"
            >
              Explorar otros cursos
            </Link>

            <TrackedLink
              href={whatsappUrl}
              eventName="Contact"
              eventParams={{
                content_name: "Proximamente WhatsApp",
                content_category: "Contacto",
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border-2 border-red-600 px-8 py-4 font-black text-red-600 shadow-lg shadow-red-100 transition-all duration-300 active:scale-95 hover:bg-red-600 hover:text-white"
            >
              <span>Notificarme por WhatsApp</span>
              <span className="text-xl">🚀</span>
            </TrackedLink>
          </div>

          <p className="mt-12 text-sm font-medium text-slate-400">
            Tienes dudas? Escribenos, estamos para apoyarte.
          </p>
        </div>
      </Container>
    </main>
  );
}
