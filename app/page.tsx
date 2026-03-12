"use client";

import { FileText, TrendingUp, Users } from "lucide-react";
import { membresias } from "@/data/membresias";
import { testimonios } from "@/data/testimonios";
import MembresiaCard from "@/components/MembresiaCard";
import TestimonioCard from "@/components/TestimonioCard";
import { eventos } from "@/data/eventos";
import EventoCard from "@/components/EventoCard";
import { blog } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import Grid from "@/components/Grid";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const eventosDestacados = eventos.filter((e) => e.destacado);

export default function Home() {
  return (
    <main>
      {/* ================= HERO ================= */}

<section className="relative min-h-[85vh] md:h-screen flex items-center justify-center text-white overflow-hidden">

  {/* HERO DESKTOP */}

  <img
    src="/Banner.jpeg"
    alt="CEFIN capacitación fiscal"
    className="hidden md:block absolute inset-0 w-full h-full object-cover"
  />

  {/* HERO MOBILE */}

  <img
    src="/Banner_movil.png"
    alt="CEFIN capacitación fiscal"
    className="block md:hidden absolute inset-0 w-full h-full object-cover object-top"
  />

  {/* OVERLAY OSCURO */}

  <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90" />

  {/* CONTENIDO */}

  <div className="relative z-10 text-center max-w-4xl px-6 pt-28 md:pt-32">

<motion.p
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.6 }}
  className="text-sm uppercase tracking-wider text-red-400 font-bold mb-4"
>      Capacitación fiscal profesional en México
</motion.p>

 <motion.h1
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.7, delay: 0.2 }}
  className="text-3xl md:text-6xl font-bold mb-6 leading-tight"
>
  Actualización fiscal inteligente
  <br />
  para contadores que quieren crecer
</motion.h1>

<motion.p
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.7, delay: 0.4 }}
  className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-slate-200"
>
  Domina reformas fiscales, CFDI 4.0 y cumplimiento SAT con capacitación práctica impartida por especialistas.
</motion.p>

    {/* BOTONES */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.7, delay: 0.6 }}
  className="flex flex-col sm:flex-row justify-center gap-4"
>
  <a href="/cursos">
    <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg font-semibold transition">
      Ver Cursos
    </button>
  </a>

  <a href="/membresias">
    <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition">
      Ver Membresías
    </button>
  </a>
</motion.div>

    <p className="mt-8 text-sm text-slate-300">
      +5,000 contadores capacitados en México
    </p>

</div>

</section>

      {/* ================= LIVE SEMANAL ================= */}

      <section className="bg-red-600 text-white py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="animate-pulse text-xl">🔴</span>

              <p className="font-semibold">
                Capacitación gratuita en vivo todos los martes a las 11:00 AM
              </p>
            </div>

            <a
              href="https://youtube.com/@TU-CANAL/live"
              target="_blank"
              className="bg-white text-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Ver transmisión
            </a>
          </div>
        </Container>
      </section>

      {/* ================= EVENTOS ================= */}

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="mb-12">
            <p className="text-sm text-red-600 font-semibold uppercase">
              Eventos
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Próximos seminarios y capacitaciones
            </h2>
          </div>

          <Grid>
            {eventosDestacados.map((evento) => (
              <EventoCard key={evento.id} evento={evento} />
            ))}
          </Grid>
        </Container>
      </section>

      {/* ================= MEMBRESIAS ================= */}

      <section className="py-24 bg-gray-50" id="membresias">
        <Container>
          <div className="mb-12">
            <p className="text-sm text-red-600 font-semibold uppercase">
              Membresías
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Capacítate con los mejores
            </h2>
          </div>

          <Grid>
            {membresias.map((membresia) => (
              <MembresiaCard key={membresia.id} membresia={membresia} />
            ))}
          </Grid>
        </Container>
      </section>

      {/* ================= CAPACITACIONES ================= */}

      <section className="py-24 bg-slate-50">
        <Container>
          <div className="mb-12">
            <p className="text-sm text-red-600 font-semibold uppercase">
              Capacitaciones gratuitas
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Aprende con nuestros lives
            </h2>
          </div>

          <Grid>
            {blog.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </Grid>
        </Container>
      </section>

      {/* ================= TESTIMONIOS ================= */}

      <section className="py-24 bg-white">
        <Container>
          <div className="mb-12 text-center">
            <p className="text-sm text-red-600 uppercase font-semibold mb-4">
              Testimonios
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Lo que dicen nuestros alumnos
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {testimonios.map((testimonio) => (
              <TestimonioCard key={testimonio.id} testimonio={testimonio} />
            ))}
          </div>
        </Container>
      </section>

      {/* ================= BENEFICIOS ================= */}

      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">¿Por qué estudiar en CEFIN?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <TrendingUp className="mx-auto mb-4 text-red-600" size={40} />
              <h3 className="text-xl font-semibold mb-4">
                Actualización Constante
              </h3>
              <p>Contenido alineado a reformas fiscales y cambios del SAT.</p>
            </div>

            <div>
              <FileText className="mx-auto mb-4 text-red-600" size={40} />
              <h3 className="text-xl font-semibold mb-4">
                Casos Prácticos Reales
              </h3>
              <p>Ejemplos aplicables a la vida profesional del contador.</p>
            </div>

            <div>
              <Users className="mx-auto mb-4 text-red-600" size={40} />
              <h3 className="text-xl font-semibold mb-4">
                Instructores Expertos
              </h3>
              <p>Profesionales con experiencia en el sector fiscal.</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
