'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LandingLatam() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const paymentLinks = [
    { country: 'México', cur: 'MXN', img: '/mexico.png', border: 'border-green-600', hover: 'hover:bg-green-50', link: '#' },
    { country: 'Perú', cur: 'PEN', img: '/peru.png', border: 'border-red-600', hover: 'hover:bg-red-50', link: '#' },
    { country: 'Colombia', cur: 'COP', img: '/colombia.png', border: 'border-yellow-500', hover: 'hover:bg-yellow-50', link: '#' },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
    };

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/LATAM/gracias');
      } else {
        throw new Error('Error en el registro');
      }
    } catch (error) {
      alert('Hubo un problema con tu registro. Por favor, inténtalo de nuevo.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-orange-600 selection:text-white">
      
      {/* SECCIÓN HERO CON MÁSCARA */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-10 pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="/LATAM_Alfredo.png"
            alt="Alfredo Cobos Mentoring"
            className="absolute right-0 top-0 h-full w-full md:w-[60%] object-cover object-top opacity-60 md:opacity-90"
            style={{
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 30%, black 100%)',
              maskImage: 'linear-gradient(to top, transparent 0%, black 30%, black 100%)',
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent z-10" />
        </div>

        <div className="container mx-auto relative z-20">
          <div className="max-w-4xl">
            <p className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6">
              CLASE GRATUITA — EN VIVO — 26 DE MARZO
            </p>
            
            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter uppercase inline-block drop-shadow-2xl">
              MÁS CLIENTES <br /> 
              <span className="text-white italic tracking-tighter">
                EN 30 DÍAS
              </span>
            </h1>

            <div className="inline-block bg-orange-600 px-8 py-3 transform -rotate-2 shadow-xl mb-12">
              <span className="text-xl md:text-3xl font-black italic tracking-tighter uppercase">
                CLASE ESTRATÉGICA PARA CONTADORES
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN FORMULARIO */}
      <section className="relative z-30 px-6 -mt-24 md:-mt-32 pb-20">
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-[0_35px_60px_-15px_rgba(255,102,0,0.3)] p-10 md:p-14 text-black text-center border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-black mb-3 text-gray-900 leading-tight">
            ¡ASEGURA TU LUGAR!
          </h2>
          <p className="text-gray-500 mb-10 font-medium text-lg">
            Aprende el sistema exacto para escalar tu despacho.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 mb-6">
            <input 
              name="name"
              type="text" 
              required
              placeholder="Tu Nombre Completo" 
              className="w-full px-6 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-orange-500 text-lg font-medium" 
            />
            <input 
              name="email"
              type="email" 
              required
              placeholder="Tu Correo Profesional" 
              className="w-full px-6 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-orange-500 text-lg font-medium" 
            />
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 text-white font-black py-6 rounded-2xl text-xl uppercase tracking-tighter hover:bg-orange-700 transition-all shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'REGISTRANDO...' : '¡SÍ, QUIERO MÁS CLIENTES!'}
            </button>
          </form>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">(Registro Gratuito • Cupos Limitados)</p>
        </div>
      </section>

      {/* SECCIÓN APRENDERÁS */}
      <section className="bg-zinc-50 py-24 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-black">
          <h3 className="text-2xl font-black text-center mb-16 uppercase tracking-widest italic">
            ¿Qué aprenderás en esta clase?
          </h3>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { t: "Marketing para Contadores", d: "Métodos probados para captar prospectos de calidad de forma orgánica y pagada." },
              { t: "Digitalización de Despachos", d: "Cómo automatizar tus procesos sin perder el toque humano." },
              { t: "Cierre de Ventas Efectivo", d: "Sistemas para cerrar ventas recurrentes y cobrar lo que vale tu trabajo." },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="text-orange-600 font-black text-6xl italic opacity-10 absolute -top-8 -left-4 group-hover:opacity-20 transition-opacity">
                  0{i + 1}
                </div>
                <h4 className="text-xl font-bold mb-4 relative z-10 uppercase tracking-tighter">{item.t}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN PAGOS PAÍS */}
      <section className="bg-white py-24 px-6 relative z-20">
        <div className="max-w-5xl mx-auto text-center text-black">
          <h3 className="text-3xl font-black mb-16 uppercase italic tracking-tighter text-balance">
            ¿Quieres inscribirte desde tu país? <br />
            <span className="text-orange-600">Selecciona tu moneda local:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentLinks.map((btn, i) => (
              <a 
                key={i}
                href={btn.link}
                className={`border-2 ${btn.border} ${btn.hover} p-10 rounded-3xl flex flex-col items-center justify-between min-h-80 transition-all hover:scale-105 shadow-md hover:shadow-2xl group`}
              >
                <div className="w-full h-24 flex items-center justify-center mb-4">
                  <img src={btn.img} alt={`Bandera de ${btn.country}`} className="max-h-full max-w-30 object-contain drop-shadow-sm" />
                </div>
                <div className="text-center">
                  <span className="text-black font-black text-2xl uppercase tracking-tighter block mb-2">Pagar en {btn.country}</span>
                  <span className="text-gray-500 font-bold text-xs bg-gray-100 px-4 py-2 rounded-full uppercase tracking-widest">Checkout Hotmart ({btn.cur})</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black text-center border-t border-white/10 text-gray-500 text-[10px] font-bold tracking-[0.4em] uppercase">
        © 2026 CEFIN Internacional | Contabilidad sin Fronteras
      </footer>
    </div>
  );
}