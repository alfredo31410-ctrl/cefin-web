import { FileText, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { membresias } from "@/data/membresias";
import MembresiaCard from "@/components/MembresiaCard";
import EventoCard from "@/components/EventoCard";
import { blog } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import Grid from "@/components/Grid";
import Reveal from "@/components/Reveal";
import HeroContent from "@/components/HeroContent";
import TestimoniosCarrusel from "@/components/TestimoniosCarrusel";
import { getEventosDestacados } from "@/lib/eventos";
import { eventos as eventosLocales } from "@/data/eventos";

export default function Home() {
  const eventosCMS = getEventosDestacados();
  const ahora = Date.now();

  const eventosUnificados = [...eventosCMS, ...eventosLocales]
    .map(ev => ({
      ...ev,
      slug: ev.slug ?? "",
      id: typeof ev.id === "string" ? Number(ev.id) : ev.id,
    }))
    .filter(ev => ev.destacado && new Date(ev.fecha).getTime() > ahora && !!ev.slug && typeof ev.id === "number");

  const todosLosEventos = eventosUnificados
    .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime())
    .slice(0, 3);

  return (
    <main className="overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] md:h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src="/Banner.jpeg"
            alt="CEFIN capacitación fiscal"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <Image
            src="/Banner_movil.png"
            alt="CEFIN capacitación fiscal"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
            quality={80}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90 z-10" />
        <div className="relative z-20 w-full h-full flex items-center justify-center">
          <HeroContent />
        </div>
      </section>

      {/* ================= LIVE SEMANAL ================= */}
      <section className="bg-slate-900 text-white py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="animate-pulse text-xl">🔴</span>
              <p className="font-semibold">Capacitación gratuita en vivo todos los martes a las 11:00 AM</p>
            </div>
            <a
              href="https://www.youtube.com/@CEFINImpuestos"
              target="_blank"
              className="bg-white text-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Ver transmisión
            </a>
          </div>
        </Container>
      </section>

      {/* ================= MEMBRESIAS ================= */}
<section className="pb-24 pt-16 bg-slate-50" id="membresias">
  <Container>
    <div className="mb-12 text-center">
      <p className="text-sm text-red-600 font-bold uppercase tracking-widest mb-3">Membresías CEFIN 2026</p>
      <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
        Elige el nivel de acceso que necesitas
      </h2>
    </div>

    <Reveal>
      {/* LA REINA: Solo la Membresía Total */}
      <div className="mb-16">
        {membresias
          .filter(m => m.titulo.toLowerCase().includes("total")) // Filtro por nombre
          .slice(0, 1) // Nos aseguramos que SOLO salga una por si acaso
          .map((m) => (
            <MembresiaCard key={m.id} membresia={m} isHorizontal={true} />
          ))
        }
      </div>

      {/* LAS HIJAS: Todas las demás, EXCLUYENDO la Total */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-slate-800 mb-8">Otras opciones de capacitación</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {membresias
            .filter(m => !m.titulo.toLowerCase().includes("total")) // Excluimos la que diga "Total"
            .map((m) => (
              <MembresiaCard key={m.id} membresia={m} isHorizontal={false} />
            ))
          }
        </div>
      </div>
    </Reveal>
  </Container>
</section>

      {/* ================= CAPACITACIONES GRATUITAS ================= */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mb-8">
            <p className="text-sm text-red-600 font-semibold uppercase">Capacitaciones gratuitas</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Aprende con nuestros lives</h2>
          </div>
          <Reveal>
            <Grid>
              {blog.slice(0, 3).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </Grid>
          </Reveal>
        </Container>
      </section>


      {/* ================= EVENTOS ================= */}
      <section className="py-16 bg-white overflow-visible">
        <Container>
          <div className="mb-8">
            <p className="text-sm text-red-600 font-semibold uppercase tracking-wider">Eventos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Próximos seminarios</h2>
          </div>

          <div className="pb-12">
            <Reveal>
              {todosLosEventos.length > 0 ? (
                <Grid>
                  {todosLosEventos.map((evento, index) => (
                    <EventoCard key={evento.slug || evento.id || `evento-${index}`} evento={evento} />
                  ))}
                </Grid>
              ) : (
                <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10 md:p-16 text-center">
                  <div className="max-w-md mx-auto">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-6 text-3xl">📅</div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">Nuevas fechas en camino</h3>
                    <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                      Estamos diseñando los próximos seminarios para ti. ¡Mantente al tanto!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <span className="bg-red-600 text-white px-6 py-3 rounded-xl font-black uppercase text-[11px] tracking-widest animate-pulse shadow-lg shadow-red-200">
                        Próximamente
                      </span>
                      <Link href="/eventos" className="group flex items-center gap-2 text-slate-900 font-black uppercase text-[11px] tracking-widest hover:text-red-600 transition-colors">
                        Ver eventos pasados <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </Container>
      </section>


      {/* ================= TESTIMONIOS ================= */}
      <section className="py-16 bg-slate-50 overflow-hidden">
        <Container>
          <Reveal>
            <div className="mb-10 text-center">
              <p className="text-sm text-red-600 uppercase font-semibold mb-2">Testimonios</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Lo que dicen nuestros alumnos</h2>
            </div>
            <TestimoniosCarrusel />
          </Reveal>
        </Container>
      </section>

      {/* ================= BENEFICIOS ================= */}
      <section className="py-24 bg-white">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm text-red-600 font-bold uppercase tracking-widest mb-3">Ventajas</p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">¿Por qué estudiar en CEFIN?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-10 rounded-[2.5rem] text-center border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-white text-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm"><FileText size={32} /></div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Enfoque 100% Práctico</h3>
                <p className="text-slate-600 leading-relaxed">Diseñadas para aplicarse de inmediato en tu ejercicio profesional diario.</p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] text-center border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-white text-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm"><TrendingUp size={32} /></div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Actualización Constante</h3>
                <p className="text-slate-600 leading-relaxed">Mantente al día con las últimas reformas fiscales y normativas vigentes.</p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] text-center border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-white text-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm"><Users size={32} /></div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Comunidad de Expertos</h3>
                <p className="text-slate-600 leading-relaxed">Únete a una red de miles de profesionales que comparten conocimiento.</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}