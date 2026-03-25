import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

export default function GraciasLatam() {
  return (
    <div className="bg-black min-h-screen text-white font-sans flex flex-col items-center justify-center px-6 py-20 selection:bg-orange-600">
      
      {/* CÍRCULO DE ÉXITO CON ANIMACIÓN */}
      <div className="mb-8 animate-bounce">
        <CheckCircle2 className="w-20 h-20 text-orange-600 drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
          ¡REGISTRO <br />
          <span className="text-orange-600 italic">COMPLETADO!</span>
        </h1>

        <p className="text-xl md:text-2xl font-bold text-gray-300 mb-12 uppercase tracking-tight px-4">
          Paso final y obligatorio: Únete al grupo exclusivo de WhatsApp.
        </p>

        {/* TARJETA DE WHATSAPP */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 text-black shadow-[0_0_50px_rgba(255,102,0,0.2)] relative overflow-hidden mx-auto max-w-2xl">
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold mb-4 uppercase italic leading-tight">
              ¡No te quedes fuera de los avisos!
            </h2>
            <p className="text-gray-600 mb-8 font-medium text-lg">
              Por el grupo de WhatsApp enviaremos el **enlace de acceso**, los **materiales de apoyo** y los recordatorios para la clase del 26 de marzo.
            </p>

            {/* BOTÓN CON ANIMACIÓN DE PULSO */}
            <a 
              href="https://chat.whatsapp.com/L4FNLzr2AylBD8NeekigzT" // REEMPLAZAR CON TU LINK REAL
              className="inline-flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-black py-6 rounded-2xl text-xl md:text-2xl uppercase tracking-tighter transition-all shadow-xl hover:scale-105 active:scale-95 animate-pulse hover:animate-none"
            >
              <MessageCircle className="w-8 h-8 fill-current" />
              UNIRME AL GRUPO
            </a>
            
            <p className="mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              Seguro y libre de spam
            </p>
          </div>

          {/* Decoración de fondo para que no se vea tan plano */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-green-100 rounded-full opacity-50 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-orange-50 rounded-full opacity-50 blur-3xl" />
        </div>

        {/* FOOTER DE MARCA */}
        <p className="mt-16 text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px]">
          CEFIN Internacional • Contabilidad sin Fronteras
        </p>
      </div>
    </div>
  );
}