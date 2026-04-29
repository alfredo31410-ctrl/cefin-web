import Link from "next/link";

const sections = [
  { href: "/admin", label: "Resumen" },
  { href: "/admin/cursos", label: "Cursos" },
  { href: "/admin/eventos", label: "Eventos" },
  { href: "/admin/blog", label: "Blog" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-5">
          <div className="flex items-center gap-8">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 shadow-[0_0_40px_rgba(220,38,38,0.35)]">
                <span className="text-lg font-black">C</span>
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight">
                  CEFIN <span className="text-red-500">CMS</span>
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Panel interno
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
              {sections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="text-sm font-semibold text-slate-400 transition hover:text-white"
                >
                  {section.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/cms"
              className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200 transition hover:bg-red-500/20"
            >
              Abrir CMS
            </Link>
            <Link
              href="/"
              className="rounded-2xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
            >
              Ver sitio
            </Link>
            <span className="rounded-2xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-500">
              Admin
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">{children}</div>
    </div>
  );
}
