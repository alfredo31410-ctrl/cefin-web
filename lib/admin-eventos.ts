import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { slugify } from "@/data/slugify";

export type EventoPayload = {
  titulo: string;
  fecha: string;
  lugar: string;
  costo: string;
  hotmart: string;
  imagen: string;
  descripcion: string;
  body: string;
  destacado: boolean;
};

export const initialEventoForm: EventoPayload = {
  titulo: "",
  fecha: "",
  lugar: "",
  costo: "",
  hotmart: "",
  imagen: "",
  descripcion: "",
  body: "",
  destacado: true,
};

export function getEventosDirectory() {
  return path.join(process.cwd(), "content", "eventos");
}

export function getEventoFilePath(slug: string) {
  return path.join(getEventosDirectory(), `${slug}.md`);
}

export function normalizeEventoSlug(value: string) {
  return slugify(value);
}

function escapeFrontmatter(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

export function formatEventoDateForStorage(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (trimmed.includes("T")) {
    return `${trimmed.replace("T", " ")}:00`;
  }

  return trimmed;
}

export function formatEventoDateForInput(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";

  const normalized = trimmed.replace(" ", "T");
  return normalized.length >= 16 ? normalized.slice(0, 16) : normalized;
}

export function buildEventoMarkdown(payload: EventoPayload, slug: string) {
  return `---
titulo: "${escapeFrontmatter(payload.titulo.trim())}"
slug: "${escapeFrontmatter(slug)}"
fecha: "${escapeFrontmatter(formatEventoDateForStorage(payload.fecha))}"
lugar: "${escapeFrontmatter(payload.lugar.trim())}"
costo: "${escapeFrontmatter(payload.costo.trim())}"
hotmart: "${escapeFrontmatter(payload.hotmart.trim())}"
imagen: "${escapeFrontmatter(payload.imagen.trim())}"
destacado: ${payload.destacado ? "true" : "false"}
descripcion: "${escapeFrontmatter(payload.descripcion.trim())}"
---
${payload.body.trim()}
`;
}

export function readEventoEditorData(slug: string): EventoPayload | null {
  const filePath = getEventoFilePath(slug);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    titulo: String(data.titulo ?? ""),
    fecha: formatEventoDateForInput(String(data.fecha ?? "")),
    lugar: String(data.lugar ?? ""),
    costo: String(data.costo ?? ""),
    hotmart: String(data.hotmart ?? ""),
    imagen: String(data.imagen ?? ""),
    descripcion: String(data.descripcion ?? ""),
    body: content.trim(),
    destacado: Boolean(data.destacado),
  };
}
