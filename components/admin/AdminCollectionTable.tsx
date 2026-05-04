"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { AdminEntry } from "@/lib/admin-content";

type AdminCollectionTableProps = {
  title: string;
  subtitle: string;
  items: AdminEntry[];
  createLabel: string;
  collectionName: "cursos" | "eventos" | "blog";
  createHref?: string;
};

export default function AdminCollectionTable({
  title,
  subtitle,
  items,
  createLabel,
  collectionName,
  createHref,
}: AdminCollectionTableProps) {
  const [query, setQuery] = useState("");
  const cmsCollectionUrl = `/cms/index.html#/collections/${collectionName}`;
  const createUrl = createHref || cmsCollectionUrl;
  const createOpensInNewTab = createUrl.startsWith("/cms/");

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items;

    return items.filter((item) =>
      [item.titulo, item.slug, item.descripcion, item.categoria, item.origen]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [items, query]);

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-lg text-slate-400">{subtitle}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="flex min-w-[280px] items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
            <svg
              className="h-5 w-5 text-slate-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por titulo, slug o categoria"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
            />
          </label>

          <Link
            href={createUrl}
            target={createOpensInNewTab ? "_blank" : undefined}
            rel={createOpensInNewTab ? "noopener noreferrer" : undefined}
            className="rounded-2xl bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-500"
          >
            + {createLabel}
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
        <div className="grid grid-cols-[minmax(0,2.7fr)_1fr_0.9fr_0.9fr_0.8fr] gap-4 border-b border-white/10 px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span>Contenido</span>
          <span>Categoria</span>
          <span>Origen</span>
          <span>Estado</span>
          <span>Acciones</span>
        </div>

        <div className="divide-y divide-white/5">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="grid grid-cols-[minmax(0,2.7fr)_1fr_0.9fr_0.9fr_0.8fr] gap-4 px-6 py-5 text-sm"
            >
              <div className="min-w-0">
                <p className="truncate text-lg font-bold text-white">
                  {item.titulo}
                </p>
                <p className="mt-1 truncate text-slate-400">{item.descripcion}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                  /{item.slug} • {item.meta}
                </p>
              </div>

              <div className="flex items-center text-base text-slate-200">
                {item.categoria}
              </div>

              <div className="flex items-center">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
                  {item.origen}
                </span>
              </div>

              <div className="flex items-center">
                {item.destacado ? (
                  <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300">
                    Destacado
                  </span>
                ) : (
                  <span className="text-slate-500">Normal</span>
                )}
              </div>

              <div className="flex items-center gap-3">
                {item.adminEditHref ? (
                  <Link
                    href={item.adminEditHref}
                    className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
                  >
                    Editar
                  </Link>
                ) : null}
                <Link
                  href={item.href}
                  className="rounded-xl border border-white/10 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/5"
                >
                  Ver
                </Link>
                <Link
                  href={item.editCmsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-200 transition hover:bg-red-500/20"
                >
                  CMS
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
