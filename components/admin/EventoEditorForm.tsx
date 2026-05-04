"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { EventoPayload } from "@/lib/admin-eventos";

type UploadOption = {
  name: string;
  url: string;
};

type EventoEditorFormProps = {
  endpoint: string;
  method: "POST" | "PATCH";
  initialData: EventoPayload;
  submitLabel: string;
  successMessage: string;
  successRedirect?: string;
  slug?: string;
};

export default function EventoEditorForm({
  endpoint,
  method,
  initialData,
  submitLabel,
  successMessage,
  successRedirect = "/admin/eventos",
  slug,
}: EventoEditorFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<EventoPayload>(initialData);
  const [imageMode, setImageMode] = useState<"upload" | "library" | "url">(() => {
    if (!initialData.imagen) return "upload";
    return initialData.imagen.startsWith("/uploads/") ? "library" : "url";
  });
  const [uploads, setUploads] = useState<UploadOption[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  useEffect(() => {
    async function loadUploads() {
      const response = await fetch("/api/admin/uploads");
      const data = (await response.json()) as { uploads: UploadOption[] };
      setUploads(data.uploads);
    }

    loadUploads();
  }, []);

  const selectedUpload = useMemo(
    () => uploads.find((upload) => upload.url === form.imagen),
    [form.imagen, uploads],
  );

  function updateField(name: keyof EventoPayload, value: string | boolean) {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function refreshUploads() {
    const response = await fetch("/api/admin/uploads");
    const data = (await response.json()) as { uploads: UploadOption[] };
    setUploads(data.uploads);
  }

  async function handleImageUpload(file: File) {
    setIsUploadingImage(true);
    setUploadMessage("");

    const body = new FormData();
    body.append("file", file);

    const response = await fetch("/api/admin/uploads", {
      method: "POST",
      body,
    });

    const data = (await response.json()) as {
      message: string;
      url?: string;
    };

    if (!response.ok || !data.url) {
      setUploadMessage(data.message || "No se pudo subir la imagen.");
      setIsUploadingImage(false);
      return;
    }

    updateField("imagen", data.url);
    setUploadMessage("Imagen subida correctamente.");
    setImageMode("library");
    setIsUploadingImage(false);
    await refreshUploads();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setStatusMessage("");
    setStatusType("idle");

    const response = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = (await response.json()) as { message: string };

    if (!response.ok) {
      setStatusType("error");
      setStatusMessage(data.message || "No se pudo guardar el evento.");
      setIsSaving(false);
      return;
    }

    setStatusType("success");
    setStatusMessage(successMessage);
    setIsSaving(false);
    router.push(successRedirect);
    router.refresh();
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
      {slug ? (
        <div className="mb-6 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">
          <span className="font-semibold text-white">Slug actual:</span> {slug}
          <span className="ml-2 text-slate-500">
            La URL publica se conserva aunque cambies el titulo.
          </span>
        </div>
      ) : null}

      <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Titulo
          </label>
          <input
            type="text"
            value={form.titulo}
            onChange={(e) => updateField("titulo", e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            placeholder="Ej. Contador 360 Rumbo a 2027"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Fecha y hora
          </label>
          <input
            type="datetime-local"
            value={form.fecha}
            onChange={(e) => updateField("fecha", e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Lugar / modalidad
          </label>
          <input
            type="text"
            value={form.lugar}
            onChange={(e) => updateField("lugar", e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            placeholder="CDMX / Presencial"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Costo
          </label>
          <input
            type="text"
            value={form.costo}
            onChange={(e) => updateField("costo", e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            placeholder="$1,497 MXN"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Link Hotmart
          </label>
          <input
            type="text"
            value={form.hotmart}
            onChange={(e) => updateField("hotmart", e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            placeholder="https://pay.hotmart.com/..."
            required
          />
        </div>

        <div className="space-y-4 md:col-span-2">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setImageMode("upload")}
              className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                imageMode === "upload"
                  ? "bg-red-600 text-white"
                  : "border border-white/10 text-slate-300"
              }`}
            >
              Subir archivo
            </button>

            <button
              type="button"
              onClick={() => setImageMode("library")}
              className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                imageMode === "library"
                  ? "bg-red-600 text-white"
                  : "border border-white/10 text-slate-300"
              }`}
            >
              Imagen local
            </button>

            <button
              type="button"
              onClick={() => setImageMode("url")}
              className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                imageMode === "url"
                  ? "bg-red-600 text-white"
                  : "border border-white/10 text-slate-300"
              }`}
            >
              URL manual
            </button>
          </div>

          {imageMode === "upload" ? (
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Subir imagen desde tu PC
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleImageUpload(file);
                  }
                }}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none file:mr-4 file:rounded-xl file:border-0 file:bg-red-600 file:px-4 file:py-2 file:font-semibold file:text-white"
              />
              <p className="mt-2 text-sm text-slate-500">
                Se guardara en /public/uploads y se asignara automaticamente.
              </p>
            </div>
          ) : imageMode === "library" ? (
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Biblioteca local (/public/uploads)
              </label>
              <select
                value={form.imagen}
                onChange={(e) => updateField("imagen", e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
              >
                <option value="">Selecciona una imagen</option>
                {uploads.map((upload) => (
                  <option key={upload.url} value={upload.url}>
                    {upload.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                URL de imagen
              </label>
              <input
                type="text"
                value={form.imagen}
                onChange={(e) => updateField("imagen", e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                placeholder="https://... o /uploads/mi-evento.jpg"
              />
            </div>
          )}

          {(isUploadingImage || uploadMessage) && (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm ${
                uploadMessage.toLowerCase().includes("correctamente")
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                  : "border-white/10 bg-black/20 text-slate-300"
              }`}
            >
              {isUploadingImage ? "Subiendo imagen..." : uploadMessage}
            </div>
          )}

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="mb-3 text-sm font-semibold text-slate-300">
              Vista previa
            </p>
            {form.imagen ? (
              <div className="flex items-center gap-4">
                <img
                  src={form.imagen}
                  alt={selectedUpload?.name || form.titulo || "Vista previa"}
                  className="h-24 w-40 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    {selectedUpload?.name || form.imagen}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{form.imagen}</p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-500">
                Sube una imagen, elige una del proyecto o pega una URL.
              </p>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Resumen
          </label>
          <textarea
            rows={4}
            value={form.descripcion}
            onChange={(e) => updateField("descripcion", e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            placeholder="Descripcion corta del evento"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Detalles completos
          </label>
          <textarea
            rows={10}
            value={form.body}
            onChange={(e) => updateField("body", e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            placeholder="Programa, beneficios, descripcion larga..."
            required
          />
        </div>

        <div className="md:col-span-2 flex items-center gap-3">
          <input
            id="destacado"
            type="checkbox"
            checked={form.destacado}
            onChange={(e) => updateField("destacado", e.target.checked)}
            className="h-4 w-4"
          />
          <label htmlFor="destacado" className="text-sm text-slate-300">
            Destacar en home
          </label>
        </div>

        {statusMessage && (
          <div
            className={`md:col-span-2 rounded-2xl border px-4 py-3 text-sm ${
              statusType === "error"
                ? "border-red-500/30 bg-red-500/10 text-red-200"
                : "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <div className="md:col-span-2 flex gap-3">
          <button
            type="submit"
            disabled={isSaving || isUploadingImage}
            className="rounded-2xl bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-500 disabled:opacity-60"
          >
            {isSaving ? "Guardando..." : submitLabel}
          </button>

          <button
            type="button"
            onClick={() => router.push(successRedirect)}
            className="rounded-2xl border border-white/10 px-5 py-3 font-semibold text-slate-300"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
