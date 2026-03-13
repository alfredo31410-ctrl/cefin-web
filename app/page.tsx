import { FileText, TrendingUp, Users } from "lucide-react";
import { membresias } from "@/data/membresias";
import { testimonios } from "@/data/testimonios";
import MembresiaCard from "@/components/MembresiaCard";
import TestimonioCard from "@/components/TestimonioCard";
import EventoCard from "@/components/EventoCard";
import { blog } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import Grid from "@/components/Grid";
import Reveal from "@/components/Reveal";
import HeroContent from "@/components/HeroContent";
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
    <main className="overflow-x-hidden"> {/* Evita scroll horizontal por sombras amplias */}
      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] md:h-screen flex items-center justify-center text-white overflow-hidden">
        <img
          src="/Banner.jpeg"
          alt="CEFIN capacitación fiscal"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="/Banner_movil.png"
          alt="CEFIN capacitación fiscal"
          className="block md:hidden absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90" />
        <HeroContent />
      </section>

      {/* ================= LIVE SEMANAL ================= */}
      <section className="bg-slate-900 text-white py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="animate-pulse text-xl">🔴</span>
              <p className="font-semibold">
                Capacitación gratuita en vivo todos los martes a las 11:00 AM
              </p>
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

{/* ================= EVENTOS ================= */}
      {/* Bajamos de py-24 a py-16 */}
      <section className="py-16 bg-white overflow-visible">
        <Container>
          <div className="mb-8"> {/* Bajamos mb-12 a mb-8 */}
            <p className="text-sm text-red-600 font-semibold uppercase">Eventos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Próximos seminarios</h2>
          </div>
          <div className="pb-12"> {/* Espacio justo para la sombra */}
            <Reveal>
              <Grid>
                {todosLosEventos.map((evento) => (
                  <EventoCard key={evento.id} evento={evento} />
                ))}
              </Grid>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================= MEMBRESIAS ================= */}
      {/* Quitamos el py-24 superior para que no se sume al anterior */}
      <section className="pb-16 pt-8 bg-gray-50" id="membresias">
        <Container>
          <div className="mb-8">
            <p className="text-sm text-red-600 font-semibold uppercase">Membresías</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Capacítate con los mejores</h2>
          </div>
          <div className="pb-12">
            <Reveal delay={0.2}>
              <Grid>
                {membresias.map((membresia) => (
                  <MembresiaCard key={membresia.id} membresia={membresia} />
                ))}
              </Grid>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================= CAPACITACIONES GRATUITAS ================= */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="mb-8">
            <p className="text-sm text-red-600 font-semibold uppercase">Capacitaciones gratuitas</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Aprende con nuestros lives</h2>
          </div>
          <div className="pb-12">
            <Reveal>
              <Grid>
                {blog.slice(0, 3).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </Grid>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================= TESTIMONIOS ================= */}
      <section className="py-16 bg-white overflow-visible">
        <Container>
          <Reveal>
            <div className="mb-10 text-center">
              <p className="text-sm text-red-600 uppercase font-semibold mb-2">Testimonios</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Lo que dicen nuestros alumnos</h2>
            </div>
            {/* Sin pb-12 extra aquí porque los testimonios suelen tener sombras más pequeñas */}
            <div className="grid md:grid-cols-3 gap-8 justify-items-center">
              {testimonios.map((testimonio) => (
                <TestimonioCard key={testimonio.id} testimonio={testimonio} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================= BENEFICIOS ================= */}
      <section className="py-16 bg-slate-50">
        <Container>
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">¿Por qué estudiar en CEFIN?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              {/* Contenido de beneficios... */}
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}