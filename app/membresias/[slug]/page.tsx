import { membresias } from "@/data/membresias";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Star, Zap, Users, ArrowLeft, ShieldCheck } from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MembresiaDetalle({ params }: Props) {
  const { slug } = await params;

  const membresia = membresias.find((m) => m.slug === slug);

  if (!membresia) {
    notFound();
  }

  // Beneficios de ejemplo (puedes traerlos de tu data si quieres)
  const beneficios = [
    "Acceso a +10 programas formativos",
    "Sesiones del Factor CEFIN (Lunes 11am)",
    "Actualización constante en NIF y Reformas",
    "Comunidad exclusiva de contadores",
    "Material de apoyo y plantillas premium",
    "Certificación con validez curricular"
  ];

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* HEADER DE NAVEGACIÓN */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link href="/membresias" className="flex items-center gap-2 text-slate-400 hover:text-red-600 transition font-black text-xs uppercase tracking-widest">
          <ArrowLeft size={14} /> Ver todas las membresías
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-2 items-center"> {/* AÑADIDO: items-center para centrar verticalmente si una columna es más alta */}
            
            {/* COLUMNA IZQUIERDA: IMAGEN E IMPACTO (CORREGIDA) */}
            <div className="relative w-full p-8 md:p-12 lg:p-16"> {/* ELIMINADO: h-[400px] min-h-[500px]. AÑADIDO: Padding */}
              {/* Contenedor con aspect-ratio para mantener la proporción de la imagen */}
              <div className="relative aspect-video w-full shadow-2xl rounded-3xl overflow-hidden">
                <Image
                  src={membresia.imagen}
                  alt={membresia.titulo}
                  fill
                  className="object-contain" // CAMBIADO: De object-cover a object-contain
                  priority
                />
              </div>

              {/* Distintivo de Recomendado PRO (Reposicionado) */}
              <div className="absolute top-12 left-12 lg:top-20 lg:left-20 bg-yellow-400 text-slate-900 w-fit px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
                <Star size={14} fill="currentColor" /> Recomendado PRO
              </div>
            </div>

            {/* COLUMNA DERECHA: OFERTA */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-100">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="text-red-600" size={20} fill="currentColor" />
                <span className="text-red-600 font-black uppercase tracking-widest text-xs">Plan Anual Todo Incluido 2026</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
                {membresia.titulo}
              </h1>

              <div className="prose prose-lg max-w-none text-slate-600 mb-10 leading-relaxed">
                <p className="whitespace-pre-line">
                  {membresia.descripcionLarga || membresia.descripcion}
                </p>
              </div>

              {/* LISTA DE BENEFICIOS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-10 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                {beneficios.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <hr className="border-slate-100 mb-10" />

              {/* ACCIÓN DE COMPRA */}
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Inversión Anual</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">{membresia.precio}</span>
                    <span className="text-slate-400 font-bold text-sm">/año</span>
                  </div>
                </div>

                <Link 
                  href={membresia.hotmart || "#"} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 bg-red-600 hover:bg-red-700 text-white text-center py-5 rounded-2xl font-black text-lg transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-red-200 uppercase tracking-tight"
                >
                  Adquirir Membresía
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center gap-6 text-slate-400 border-t border-slate-50 pt-6">
                <div className="flex items-center gap-2 text-[10px] font-bold">
                  <Users size={14} /> +5,000 Alumnos
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold">
                  <ShieldCheck size={14} /> Pago Seguro Hotmart
                </div>
              </div>
            </div>

            {/* SECCIÓN DE RESEÑA (Reposicionada para que no estorbe a la imagen completa) */}
            <div className="lg:col-span-2 bg-slate-900 p-12 text-center">
               <p className="text-white text-2xl font-medium leading-relaxed italic max-w-4xl mx-auto">
                  "La inversión más inteligente para tu carrera contable en 2026."
               </p>
               <p className="text-yellow-400 font-bold mt-4">- Alumno CEFIN PRO</p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}