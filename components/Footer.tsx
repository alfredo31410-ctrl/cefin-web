import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {

  /* ================= REDES SOCIALES ================= */
  const redes = [
    {
      nombre: "Facebook",
      icono: <FaFacebookF size={18} />,
      url: "https://www.facebook.com/CEFINCapacitacion",
      hoverColor: "hover:bg-[#1877F2]", // Azul oficial Facebook
    },
    {
      nombre: "Instagram",
      icono: <FaInstagram size={18} />,
      url: "https://www.instagram.com/cefinimpuestosmx/",
      hoverColor: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500",
    },
    {
      nombre: "YouTube",
      icono: <FaYoutube size={18} />,
      url: "https://www.youtube.com/@CEFINImpuestos",
      hoverColor: "hover:bg-[#FF0000]", // Rojo oficial YouTube
    },
    {
      nombre: "TikTok",
      icono: <FaTiktok size={18} />,
      url: "https://www.tiktok.com/@cefinimpuestosmx",
      hoverColor: "hover:bg-black",
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">

      {/* ================= CONTENEDOR PRINCIPAL ================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* ===== MARCA ===== */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">
            CEFIN
          </h3>
          <p className="mb-6">
            Capacitación especializada para contadores en México.
          </p>

          {/* ===== REDES SOCIALES ===== */}
          <div className="flex gap-4 mt-4">
            {redes.map((red, index) => (
              <a
                key={index}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${red.nombre}`}
                className={`bg-slate-800 p-3 rounded-full 
                transition-all duration-300 
                hover:scale-110 hover:text-white
                ${red.hoverColor}`}
              >
                {red.icono}
              </a>
            ))}
          </div>
        </div>

        {/* ===== ENLACES ===== */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Enlaces
          </h4>
          <ul className="space-y-2">
            <li className="hover:text-white transition cursor-pointer">
              Cursos
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Instructores
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contacto
            </li>
          </ul>
        </div>

        {/* ===== CONTACTO ===== */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contacto
          </h4>

          <div className="space-y-3 text-sm">

            <div className="flex items-start gap-3">
              <Phone size={18} className="flex-shrink-0 mt-1" />
              <span className="leading-relaxed">+52 449 455 4578</span>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} className="flex-shrink-0 mt-1" />
              <span className="leading-relaxed">contacto@cefincapacitacion.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="leading-relaxed">Av. Universidad 811, Bosques del Prado Sur, 20130 Aguascalientes, Ags.                </span>
            </div>

          </div>
        </div>

        {/* ===== SOBRE ===== */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Sobre CEFIN
          </h4>
          <p className="text-sm leading-relaxed">
            Formación continua con enfoque práctico y actualización constante
            en normatividad fiscal mexicana.
          </p>
        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} CEFIN. Todos los derechos reservados.
      </div>

    </footer>
  );
}