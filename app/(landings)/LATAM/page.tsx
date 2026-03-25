'use client';

import { useState, useEffect } from "react";

export default function LandingLatam() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Configura la fecha de la clase: 26 de Marzo de 2026
    const targetDate = new Date("2026-03-26T19:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const paymentLinks = [
    { 
      country: 'México', 
      cur: 'MXN', 
      img: '/mexico.png', 
      border: 'border-green-600', 
      hover: 'hover:bg-green-50', 
      link: 'https://pay.hotmart.com/V105056072W?off=aspjjv40&checkoutMode=10' 
    },
    { 
      country: 'Perú', 
      cur: 'PEN', 
      img: '/peru.png', 
      border: 'border-red-600', 
      hover: 'hover:bg-red-50', 
      link: 'https://pay.hotmart.com/V105056072W?off=lvwtt8ur&checkoutMode=10' 
    },
    { 
      country: 'Colombia', 
      cur: 'COP', 
      img: '/colombia.png', 
      border: 'border-yellow-500', 
      hover: 'hover:bg-yellow-50', 
      link: 'https://pay.hotmart.com/V105056072W?off=k9kg30zp&checkoutMode=10' 
    },
  ];

  return (
    <div className="bg-black text-white font-sans selection:bg-orange-600 selection:text-white scroll-smooth">
      
      {/* SECCIÓN HERO */}
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
              ACCESO INMEDIATO — MENTORÍA EXCLUSIVA
            </p>
            
            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter uppercase inline-block drop-shadow-2xl">
              MÁS CLIENTES <br /> 
              <span className="text-white italic tracking-tighter">EN 30 DÍAS</span>
            </h1>

            <div className="inline-block bg-orange-600 px-8 py-3 transform -rotate-2 shadow-xl mb-12">
              <span className="text-xl md:text-3xl font-black italic tracking-tighter uppercase">
                ESTRATEGIA PARA CONTADORES
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
<button 
  onClick={() => {
    const target = document.getElementById('pagos');
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200; // Duración en milisegundos (1.2 segundos para que sea muy suave)
    let start: number | null = null;

    // Función de "Cubic Easing" para suavidad total
    const easeOutCubic = (t: number) => (--t) * t * t + 1;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);

      window.scrollTo(0, startPosition + distance * easeOutCubic(percentage));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }}
  className="bg-white text-black font-black px-10 py-5 rounded-2xl text-xl uppercase tracking-tighter hover:bg-orange-600 hover:text-white transition-all shadow-2xl active:scale-95 animate-pulse cursor-pointer border-none"
>
  ¡INSCRIBIRME AHORA!
</button>
</div>
          </div>
        </div>
      </section>

      {/* SECCIÓN VALOR */}
      <section className="bg-zinc-900 py-24 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-black mb-16 uppercase tracking-widest italic text-orange-500">
            ¿QUÉ INCLUYE TU INSCRIPCIÓN?
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: "Marketing para Contadores", d: "Métodos probados para captar prospectos de calidad de forma orgánica y pagada." },
              { t: "Digitalización de Despachos", d: "Cómo automatizar tus procesos sin perder el toque humano." },
              { t: "Cierre de Ventas Efectivo", d: "Sistemas para cerrar ventas recurrentes y cobrar lo que vale tu trabajo." },
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-black border border-white/5 rounded-3xl hover:border-orange-600/50 transition-all">
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter text-white">{item.t}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN PAGOS */}
      <section id="pagos" className="bg-white py-24 px-6 relative z-20">
        <div className="max-w-5xl mx-auto text-center text-black">
          
          {/* COUNTDOWN TIMER */}
          <div className="mb-12 inline-flex gap-4 md:gap-8 justify-center bg-black text-white p-6 md:p-8 rounded-4xl shadow-2xl transform md:-translate-y-12">
            {[
              { label: 'Días', value: timeLeft.days },
              { label: 'Hrs', value: timeLeft.hours },
              { label: 'Min', value: timeLeft.minutes },
              { label: 'Seg', value: timeLeft.seconds },
            ].map((unit, i) => (
              <div key={i} className="flex flex-col min-w-15">
                <span className="text-3xl md:text-5xl font-black tracking-tighter tabular-nums leading-none">
                  {unit.value < 10 ? `0${unit.value}` : unit.value}
                </span>
                <span className="text-[10px] uppercase font-bold text-orange-500 tracking-widest mt-1">{unit.label}</span>
              </div>
            ))}
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic tracking-tighter text-balance">
            ASEGURA TU LUGAR <span className="text-orange-600 text-nowrap text-5xl md:text-7xl underline decoration-orange-600/20">HOY MISMO</span>
          </h2>
          <p className="text-xl text-gray-500 mb-16 font-medium italic">Selecciona tu moneda local para ir al checkout seguro:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {paymentLinks.map((btn, i) => (
              <a 
                key={i}
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`border-2 ${btn.border} ${btn.hover} p-10 rounded-[40px] flex flex-col items-center justify-between min-h-90 transition-all hover:scale-[1.03] shadow-lg hover:shadow-2xl group`}
              >
                <div className="w-full h-24 flex items-center justify-center mb-4">
                  <img src={btn.img} alt={btn.country} className="max-h-full max-w-30 object-contain drop-shadow-md" />
                </div>
                <div className="text-center">
                  <span className="text-black font-black text-2xl uppercase tracking-tighter block mb-2">Pagar en {btn.country}</span>
                  <span className="text-white bg-black font-bold text-[10px] px-4 py-2 rounded-full uppercase tracking-widest">Pago con Hotmart</span>
                </div>
              </a>
            ))}
          </div>

          {/* SECCIÓN DE SEGURIDAD CORREGIDA (SIN IMÁGENES EXTERNAS) */}
          <div className="p-10 border-2 border-dashed border-gray-200 rounded-[40px] bg-gray-50/50">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-10">
              <div className="flex items-center gap-4 text-left">
                <div className="bg-green-100 p-3 rounded-2xl text-green-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04m14.236 0A11.97 11.97 0 0012 21.244a11.97 11.97 0 00-8.618-7.26m14.236 0L12 16.044l-5.618-2.06" />
                  </svg>
                </div>
                <div>
                  <p className="font-black uppercase tracking-tighter text-sm">Transacción Protegida</p>
                  <p className="text-xs text-gray-500 font-medium italic leading-none">Cifrado SSL de 256 bits</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-left">
                <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-black uppercase tracking-tighter text-sm">Datos Privados</p>
                  <p className="text-xs text-gray-500 font-medium italic leading-none">No almacenamos tu tarjeta</p>
                </div>
              </div>
            </div>

            {/* REPRESENTACIÓN DE TARJETAS CON TEXTO ESTILIZADO (FALL-PROOF) */}
            <div className="flex flex-wrap justify-center gap-10 grayscale opacity-40 hover:opacity-100 transition-all duration-700">
              <span className="font-black text-xl italic tracking-tighter">VISA</span>
              <span className="font-black text-xl italic tracking-tighter">Mastercard</span>
              <span className="font-black text-xl italic tracking-tighter">AMEX</span>
              <span className="font-black text-xl italic tracking-tighter underline underline-offset-4 decoration-orange-600">HOTMART</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black text-center border-t border-white/10 text-gray-700 text-[10px] font-bold tracking-[0.4em] uppercase">
        © 2026 CEFIN Internacional | Contabilidad sin Fronteras
      </footer>
    </div>
  );
}