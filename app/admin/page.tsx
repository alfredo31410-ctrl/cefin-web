import Link from "next/link";
import {
  getAdminBlogs,
  getAdminCursos,
  getAdminEventos,
} from "@/lib/admin-content";

const modules = [
  {
    key: "cursos",
    href: "/admin/cursos",
    title: "Cursos",
    description: "Gestiona catalogo, destacados, precios y slugs de venta.",
  },
  {
    key: "eventos",
    href: "/admin/eventos",
    title: "Eventos",
    description: "Controla fechas, sedes, Hotmart y estatus comerciales.",
  },
  {
    key: "blog",
    href: "/admin/blog",
    title: "Blog",
    description: "Administra clases gratuitas, articulos y contenido evergreen.",
  },
];

export default function AdminDashboardPage() {
  const cursos = getAdminCursos();
  const eventos = getAdminEventos();
  const blogs = getAdminBlogs();

  const stats = {
    cursos,
    eventos,
    blog: blogs,
  };

  return (
    <section className="space-y-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
            Panel editorial
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-white">
            Operacion de contenido CEFIN
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
            Este primer corte del CMS lee el contenido real del proyecto y lo
            organiza para operarlo mejor. La siguiente fase seria edicion,
            publicacion y autenticacion.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {Object.entries(stats).map(([key, items]) => (
            <div
              key={key}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                {key}
              </p>
              <p className="mt-3 text-4xl font-black text-white">
                {items.length}
              </p>
              <p className="mt-2 text-sm text-slate-400">items detectados</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {modules.map((module) => {
          const count = stats[module.key as keyof typeof stats].length;

          return (
            <Link
              key={module.key}
              href={module.href}
              className="group rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-7 transition hover:border-red-500/30 hover:bg-white/[0.08]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-3xl font-black tracking-tight text-white">
                    {module.title}
                  </p>
                  <p className="mt-3 max-w-sm leading-relaxed text-slate-400">
                    {module.description}
                  </p>
                </div>

                <div className="rounded-2xl bg-red-600/15 px-4 py-3 text-right">
                  <p className="text-3xl font-black text-red-300">{count}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-red-200/70">
                    registros
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-300">
                  Abrir modulo
                </span>
                <span className="text-red-400 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
