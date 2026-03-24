"use client";

/*
  IMPORTACIONES
  ------------------------------------
  useState → controlar estado del menú móvil
  useEffect → detectar scroll
  usePathname → saber en qué página estamos
*/

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  /*
    ESTADOS DEL COMPONENTE
    ------------------------------------
    scrolled → detecta si el usuario hizo scroll
    menuOpen → controla el menú móvil
  */

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  /*
    Detectamos si estamos en la home
    Esto permite que la navbar sea transparente
    solo en la página principal
  */

  const isHome = pathname === "/";

  /*
    EFECTO PARA DETECTAR SCROLL
    ------------------------------------
    Si el usuario baja más de 50px
    cambiamos el estilo de la navbar
  */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHome]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Evita scroll cuando el menú está abierto
    } else {
      document.body.style.overflow = "auto"; // Restaura el scroll cuando el menú está cerrado
    }

    return () => {
      document.body.style.overflow = "auto"; // Asegura que el scroll se restaure si el componente se desmonta
    };
  }, [menuOpen]);
  /*
    ESTILOS DINÁMICOS
    ------------------------------------
    Cambian dependiendo de:
    - si estamos en home
    - si el usuario hizo scroll
  */

  const navbarBg =
    !isHome || scrolled
      ? "bg-white/90 backdrop-blur-md shadow-md"
      : "bg-transparent";

  const textColor = !isHome || scrolled ? "text-slate-700" : "text-white";

  const activeColor = !isHome || scrolled ? "text-red-600" : "text-red-400";

  /*
    FUNCIÓN PARA DETECTAR
    QUÉ LINK ESTÁ ACTIVO
  */

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";

    return pathname.startsWith(path);
  };

  /*
    CLASES DINÁMICAS
    PARA LINKS DEL MENÚ
  */

  const linkClass = (path: string) =>
    isActive(path)
      ? `${activeColor} font-semibold`
      : `${textColor} hover:text-red-500 transition`;

  /*
    CIERRA EL MENÚ MÓVIL
    CUANDO SE DA CLICK EN UN LINK
  */

  const closeMenu = () => setMenuOpen(false);

  return (
    /*
      NAVBAR PRINCIPAL
      ------------------------------------
      fixed → siempre visible
      z-50 → por encima del contenido
    */

    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}
    >
      {/* CONTENEDOR PRINCIPAL */}

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}

        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`font-black text-2xl md:text-3xl tracking-[0.2em] transition-colors duration-300 ${textColor}`}
        >
          CEFIN
        </Link>

        {/* MENÚ DESKTOP */}

        <div className="hidden md:flex gap-8 items-center">
          <NavLink
            href="/"
            label="Inicio"
            linkClass={linkClass}
            isActive={isActive}
          />

          <NavLink
            href="/cursos"
            label="Cursos"
            linkClass={linkClass}
            isActive={isActive}
          />

          <NavLink
            href="/membresias"
            label="Membresías"
            linkClass={linkClass}
            isActive={isActive}
          />

          <NavLink
            href="/eventos"
            label="Eventos"
            linkClass={linkClass}
            isActive={isActive}
          />

          <NavLink
            href="/blog"
            label="Cursos Gratuitos"
            linkClass={linkClass}
            isActive={isActive}
          />

          <NavLink
            href="/instructores"
            label="Instructores"
            linkClass={linkClass}
            isActive={isActive}
          />

          <NavLink
            href="/nosotros"
            label="Nosotros"
            linkClass={linkClass}
            isActive={isActive}
          />

          <NavLink
            href="/contacto"
            label="Contacto"
            linkClass={linkClass}
            isActive={isActive}
          />
        </div>

        {/* BOTÓN CTA DESKTOP */}

        <Link
          href="/membresias"
          className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          Inscribirme
        </Link>

        {/* BOTÓN HAMBURGUESA (MÓVIL) */}

        <button
          className={`md:hidden text-3xl transition-all duration-300 ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block transition-transform duration-300 ${
              menuOpen ? "rotate-90 scale-110" : ""
            }`}
          >
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* MENÚ MÓVIL */}

      {
        <div
          className={`md:hidden bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden
        ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <div className="flex flex-col gap-6 px-6 py-8 text-lg">
            {/* LINKS MÓVIL */}

            <MobileLink href="/" label="Inicio" closeMenu={closeMenu} />

            <MobileLink href="/cursos" label="Cursos" closeMenu={closeMenu} />

            <MobileLink
              href="/membresias"
              label="Membresías"
              closeMenu={closeMenu}
            />

            <MobileLink href="/eventos" label="Eventos" closeMenu={closeMenu} />

            <MobileLink href="/blog" label="Blog" closeMenu={closeMenu} />

            <MobileLink
              href="/instructores"
              label="Instructores"
              closeMenu={closeMenu}
            />

            <MobileLink
              href="/nosotros"
              label="Nosotros"
              closeMenu={closeMenu}
            />

            <MobileLink
              href="/contacto"
              label="Contacto"
              closeMenu={closeMenu}
            />

            {/* CTA MÓVIL */}

            <Link
              href="/membresias"
              onClick={closeMenu}
              className="bg-red-600 text-white text-center py-3 rounded-md"
            >
              Inscribirme
            </Link>
          </div>
        </div>
      }
    </nav>
  );
}

/*
  COMPONENTE NAVLINK
  ------------------------------------
  Se usa para los links del menú desktop
  y permite mostrar el indicador activo
*/

function NavLink({ href, label, linkClass, isActive }: any) {
  return (
    <Link href={href} className="relative">
      <span className={linkClass(href)}>{label}</span>

      {/* INDICADOR DE LINK ACTIVO */}

      {isActive(href) && (
        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500 rounded-full" />
      )}
    </Link>
  );
}

/*
  COMPONENTE MOBILE LINK
  ------------------------------------
  Se usa dentro del menú móvil
  y además cierra el menú al hacer click
*/

function MobileLink({ href, label, closeMenu }: any) {
  return (
    <Link
      href={href}
      onClick={closeMenu}
      className="text-slate-700 hover:text-red-600"
    >
      {label}
    </Link>
  );
}
