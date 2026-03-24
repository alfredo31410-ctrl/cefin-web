import Container from "@/components/Container"
import Link from "next/link"

export default function ProximamentePage() {
  // CONFIGURA AQUÍ TU NÚMERO (52 + 1 + 10 dígitos para México)
  const WHATSAPP_NUMBER = "524494554578"; 
  const MESSAGE = encodeURIComponent("¡Hola CEFIN! Me interesa recibir información y el descuento exclusivo para el curso que está en producción. 👋");
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

  return (
    <main className="min-h-screen flex items-center bg-slate-50 py-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center bg-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden">
          
          {/* Decoración de fondo sutil */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-50 rounded-full blur-3xl opacity-50"></div>

          <span className="bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 inline-block">
            🚧 En producción
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Algo grande está <span className="text-red-600">en camino</span>
          </h1>
          
          <p className="text-slate-500 text-lg md:text-xl mb-12 leading-relaxed">
            Nuestros expertos están terminando de pulir los últimos detalles de este programa. 
            Contáctanos ahora y asegura tu **lugar con descuento exclusivo** de preventa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
            <Link 
              href="/cursos" 
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95 flex items-center justify-center"
            >
              Explorar otros cursos
            </Link>

            {/* EL BOTÓN DE WHATSAPP REAL */}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                border-2 border-red-600 
                text-red-600 
                px-8 py-4 
                rounded-2xl 
                font-black 
                hover:bg-red-600 
                hover:text-white 
                transition-all 
                duration-300
                shadow-lg shadow-red-100
                active:scale-95
                flex items-center justify-center gap-2
              "
            >
              <span>Notificarme por WhatsApp</span>
              <span className="text-xl">🚀</span>
            </a>
          </div>

          <p className="mt-12 text-slate-400 text-sm font-medium">
            ¿Tienes dudas? Escríbenos, estamos para apoyarte.
          </p>
        </div>
      </Container>
    </main>
  )
}