import { cursos as cursosLocales } from "@/data/cursos";
import { eventos as eventosLocales } from "@/data/eventos";
import { blog as blogsLocales } from "@/data/blogs";
import { getAllCursos } from "@/lib/cursos";
import { getAllEventos } from "@/lib/eventos";
import { getAllBlogs } from "@/lib/blogs";

export type AdminEntry = {
  id: string;
  titulo: string;
  slug: string;
  descripcion: string;
  categoria: string;
  destacado: boolean;
  origen: "local" | "cms";
  href: string;
  ctaLabel: string;
  meta: string;
  editCmsUrl: string;
  adminEditHref?: string;
};

function truncate(text: string, max = 96) {
  if (!text) return "";
  return text.length > max ? `${text.slice(0, max).trim()}...` : text;
}

function asText(value: unknown) {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return String(value ?? "");
}

export function getAdminCursos(): AdminEntry[] {
  const cms = getAllCursos().map((curso) => ({
    id: `cms-${curso.slug}`,
    titulo: curso.titulo,
    slug: curso.slug,
    descripcion: truncate(curso.descripcion),
    categoria: curso.categoria,
    destacado: curso.destacado,
    origen: "cms" as const,
    href: `/cursos/${curso.slug}`,
    ctaLabel: curso.hotmart ? "Hotmart" : "Sin enlace",
    meta: asText(curso.precio),
    editCmsUrl: `/cms/index.html#/collections/cursos/entries/${curso.slug}`,
  }));

  const locales = cursosLocales.map((curso) => ({
    id: `local-${curso.slug}`,
    titulo: curso.titulo,
    slug: curso.slug,
    descripcion: truncate(curso.descripcion),
    categoria: curso.categoria,
    destacado: curso.destacado,
    origen: "local" as const,
    href: `/cursos/${curso.slug}`,
    ctaLabel: curso.hotmart ? "Hotmart" : "Sin enlace",
    meta: asText(curso.precio),
    editCmsUrl: `/cms/index.html#/collections/cursos/entries/${curso.slug}`,
  }));

  return [...locales, ...cms];
}

export function getAdminEventos(): AdminEntry[] {
  const cms = getAllEventos().map((evento) => ({
    id: `cms-${evento.slug}`,
    titulo: evento.titulo,
    slug: evento.slug,
    descripcion: truncate(evento.descripcion),
    categoria: "evento",
    destacado: evento.destacado,
    origen: "cms" as const,
    href: `/eventos/${evento.slug}`,
    ctaLabel: evento.hotmart ? "Hotmart" : "Sin enlace",
    meta: asText(evento.fecha),
    editCmsUrl: `/cms/index.html#/collections/eventos/entries/${evento.slug}`,
    adminEditHref: `/admin/eventos/${evento.slug}`,
  }));

  const locales = eventosLocales.map((evento) => ({
    id: `local-${evento.slug}`,
    titulo: evento.titulo,
    slug: evento.slug,
    descripcion: truncate(evento.descripcion),
    categoria: "evento",
    destacado: evento.destacado,
    origen: "local" as const,
    href: `/eventos/${evento.slug}`,
    ctaLabel: evento.hotmart ? "Hotmart" : "Sin enlace",
    meta: asText(evento.fecha),
    editCmsUrl: `/cms/index.html#/collections/eventos/entries/${evento.slug}`,
    adminEditHref: `/admin/eventos/${evento.slug}`,
  }));

  return [...locales, ...cms];
}

export function getAdminBlogs(): AdminEntry[] {
  const cms = getAllBlogs().map((post) => ({
    id: `cms-${post.slug}`,
    titulo: post.titulo,
    slug: post.slug,
    descripcion: truncate(post.descripcion),
    categoria: post.videoId ? "video" : "articulo",
    destacado: post.destacado,
    origen: "cms" as const,
    href: `/blog/${post.slug}`,
    ctaLabel: post.videoId ? "YouTube" : "Articulo",
    meta: asText(post.fecha),
    editCmsUrl: `/cms/index.html#/collections/blog/entries/${post.slug}`,
  }));

  const locales = blogsLocales.map((post) => ({
    id: `local-${post.slug}`,
    titulo: post.titulo,
    slug: post.slug,
    descripcion: truncate(post.descripcion),
    categoria: post.videoId ? "video" : "articulo",
    destacado: post.destacado,
    origen: "local" as const,
    href: `/blog/${post.slug}`,
    ctaLabel: post.videoId ? "YouTube" : "Articulo",
    meta: asText(post.fecha),
    editCmsUrl: `/cms/index.html#/collections/blog/entries/${post.slug}`,
  }));

  return [...locales, ...cms];
}
