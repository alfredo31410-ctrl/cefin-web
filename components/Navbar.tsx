"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }

  }, [isHome]);

  const navbarBg =
    !isHome || scrolled
      ? "bg-white/90 backdrop-blur-md shadow-md"
      : "bg-transparent";

  const textColor =
    !isHome || scrolled
      ? "text-slate-700"
      : "text-white";

  const activeColor =
    !isHome || scrolled
      ? "text-red-600"
      : "text-red-400";

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    isActive(path)
      ? `${activeColor} font-semibold`
      : `${textColor} hover:text-red-500 transition`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}

        <Link
          href="/"
          className={`font-black text-3xl tracking-[0.2em] transition-colors duration-300 ${textColor}`}
        >
          CEFIN
        </Link>

        {/* MENU */}

        <div className="hidden md:flex gap-8 items-center">

          <NavLink href="/" label="Inicio" linkClass={linkClass} isActive={isActive} />

          <NavLink href="/cursos" label="Cursos" linkClass={linkClass} isActive={isActive} />

          <NavLink href="/membresias" label="Membresías" linkClass={linkClass} isActive={isActive} />

          <NavLink href="/eventos" label="Eventos" linkClass={linkClass} isActive={isActive} />

          <NavLink href="/blog" label="Blog" linkClass={linkClass} isActive={isActive} />

          <NavLink href="/instructores" label="Instructores" linkClass={linkClass} isActive={isActive} />

          <NavLink href="/nosotros" label="Nosotros" linkClass={linkClass} isActive={isActive} />

          <NavLink href="/contacto" label="Contacto" linkClass={linkClass} isActive={isActive} />

        </div>

        {/* CTA */}

        <Link
          href="/membresias"
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          Inscribirme
        </Link>

      </div>

    </nav>
  );
}

/* COMPONENTE LINK */

function NavLink({ href, label, linkClass, isActive }: any) {

  return (
    <Link href={href} className="relative">

      <span className={linkClass(href)}>
        {label}
      </span>

      {isActive(href) && (
        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500 rounded-full" />
      )}

    </Link>
  );
}