import { Mail, Phone, MapPin } from "lucide-react"
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"
import Container from "@/components/Container"
import Link from "next/link"

export default function Footer() {
  const redes = [
    { 
      nombre: "Facebook", 
      icono: <FaFacebookF size={20} />, // Un poco más grande para mejor "tap"
      url: "https://www.facebook.com/CEFINCapacitacion", 
      hover: "hover:bg-[#1877F2]",
      label: "Visítanos en Facebook" // <-- Vital para accesibilidad
    },
    { 
      nombre: "Instagram", 
      icono: <FaInstagram size={20} />, 
      url: "https://www.instagram.com/cefinimpuestosmx/", 
      hover: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]",
      label: "Síguenos en Instagram"
    },
    { 
      nombre: "YouTube", 
      icono: <FaYoutube size={20} />, 
      url: "https://www.youtube.com/@CEFINImpuestos", 
      hover: "hover:bg-[#FF0000]",
      label: "Mira nuestras clases en YouTube"
    },
    { 
      nombre: "TikTok", 
      icono: <FaTiktok size={20} />, 
      url: "https://www.tiktok.com/@cefinimpuestosmx", 
      hover: "hover:bg-black",
      label: "Síguenos en TikTok"
    },
  ]

  return (
    <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* ===== MARCA Y REDES ===== */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-white font-black text-2xl tracking-tight mb-4">
                CEFIN<span className="text-red-600">.</span>
              </h3>
              <p className="text-sm leading-relaxed max-w-xs">
                Capacitación especializada con enfoque práctico para los retos del contador moderno en México.
              </p>
            </div>
            
            {/* REDES SOCIALES CON ACCESIBILIDAD 100 */}
            <nav aria-label="Redes sociales" className="flex gap-4"> {/* Añadido gap-4 para áreas táctiles */}
              {redes.map((red, i) => (
                <a
                  key={i}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={red.label} // <--- ESTO SOLUCIONA EL ERROR DE NAMES
                  className={`w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 transition-all hover:text-white hover:-translate-y-1 ${red.hover}`}
                >
                  {red.icono}
                </a>
              ))}
            </nav>
          </div>

          {/* ===== NAVEGACIÓN ===== */}
          <div>
            <h4 className="text-white font-bold mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/cursos" className="hover:text-red-500 transition py-2 inline-block">Todos los Cursos</Link></li>
              <li><Link href="/instructores" className="hover:text-red-500 transition py-2 inline-block">Nuestros Instructores</Link></li>
              <li><Link href="/nosotros" className="hover:text-red-500 transition py-2 inline-block">¿Quiénes somos?</Link></li>
              <li><Link href="/contacto" className="hover:text-red-500 transition py-2 inline-block">Centro de Ayuda</Link></li>
            </ul>
          </div>

          {/* ===== CONTACTO DIRECTO ===== */}
          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <div className="space-y-5 text-sm">
              <a href="tel:+524494554578" className="flex items-center gap-3 hover:text-white transition group">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                +52 449 455 4578
              </a>
              <a href="mailto:contacto@cefincapacitacion.com" className="flex items-center gap-3 hover:text-white transition group">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                contacto@cefincapacitacion.com
              </a>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-red-500 shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="leading-snug">Av. Universidad 811, Aguascalientes, Ags.</span>
              </div>
            </div>
          </div>

          {/* ===== NEWSLETTER / INFO ===== */}
          <div>
            <h4 className="text-white font-bold mb-6">Actualización Fiscal</h4>
            <p className="text-sm leading-relaxed mb-4">
              Suscríbete a nuestro canal de YouTube para clases gratuitas todos los martes.
            </p>
            <Link 
              href="https://www.youtube.com/@CEFINImpuestos" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-red-500 uppercase tracking-widest hover:text-red-400 transition flex items-center gap-2"
            >
              Ir al canal de YouTube →
            </Link>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] uppercase tracking-widest font-medium opacity-50">
            © {new Date().getFullYear()} CEFIN. 
          </p>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-wider">
            <Link href="/privacidad" className="hover:text-white transition">Aviso de Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition">Términos y Condiciones</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}