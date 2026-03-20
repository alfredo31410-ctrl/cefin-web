import { cursos as cursosStatic } from "@/data/cursos";
import { getAllCursos } from "@/lib/cursos";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Trophy, BookOpen, Clock, ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CursoDetalle({ params }: Props) {
  const { slug } = await params;

  const cursosCMS = getAllCursos();
  const cursos = [...cursosStatic, ...cursosCMS];
  const curso = cursos.find((c) => c.slug === slug);

  if (!curso) {
    return notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      {/* SECCIÓN SUPERIOR / BREADCRUMBS */}
      <div className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/cursos"
            className="flex items-center gap-2 text-slate-400 hover:text-red-600 transition font-bold text-xs uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> Volver al catálogo
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* COLUMNA IZQUIERDA: VISUAL CORREGIDO */}
          <div className="lg:col-span-5">
            {/* 1. Quitamos padding y overflow-hidden de aquí */}
            <div className="relative aspect-square w-full shadow-2xl shadow-red-100 bg-white rounded-[3rem] border border-slate-50">
              {/* 2. Creamos un SUB-CONTENEDOR específico para la imagen con padding y overflow */}
              <div className="absolute inset-0 overflow-hidden p-6 rounded-[3rem]">
                <Image
                  src={curso.imagen}
                  alt={curso.titulo}
                  fill
                  className="object-contain" // Quitamos el p-6 de aquí
                  priority
                />
              </div>

              {/* 3. El Badge se mantiene igual, pero ahora está FUERA del overflow de la imagen */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-3 border border-slate-50 z-10">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <Trophy size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                    Certificado
                  </p>
                  <p className="text-sm font-black text-slate-900 leading-none">
                    CEFIN PRO
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: INFO Y COMPRA */}
          <div className="lg:col-span-7 py-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-red-50 text-red-600 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest">
                Curso Especializado
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              {curso.titulo}
            </h1>

            <div className="flex flex-wrap gap-6 mb-8 text-slate-500 font-bold text-sm">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-red-500" /> 10+ Módulos
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-red-500" /> Acceso de por vida
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 mb-10 leading-relaxed">
              <p className="whitespace-pre-line">
                {curso.descripcionLarga || curso.descripcion}
              </p>
            </div>

            {/* CAJA DE PRECIO Y ACCIÓN */}
            <div className="bg-slate-900 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                  Inversión única
                </p>
                <p className="text-4xl font-black text-white">{curso.precio}</p>
              </div>

              <a
                href={curso.hotmart}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-center hover:bg-red-700 transition-all hover:scale-[1.05] active:scale-95 shadow-xl shadow-red-900/20 uppercase tracking-tight text-lg"
              >
                Acceder ahora
              </a>
            </div>

            {/* Garantía */}
            <div className="mt-8 flex items-center justify-center md:justify-start gap-3 text-slate-400">
              <CheckCircle2 size={16} className="text-green-500" />
              <span className="text-xs font-medium">
                Pago seguro y garantía de satisfacción de 7 días.
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
