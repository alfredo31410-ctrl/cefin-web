import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import fs from "fs";
import {
  buildEventoMarkdown,
  getEventoFilePath,
  getEventosDirectory,
  normalizeEventoSlug,
  type EventoPayload,
} from "@/lib/admin-eventos";

export async function POST(request: Request) {
  const payload = (await request.json()) as EventoPayload;

  if (!payload.titulo?.trim()) {
    return NextResponse.json(
      { message: "El titulo es obligatorio." },
      { status: 400 },
    );
  }

  if (!payload.fecha?.trim()) {
    return NextResponse.json(
      { message: "La fecha es obligatoria." },
      { status: 400 },
    );
  }

  const slug = normalizeEventoSlug(payload.titulo);
  const eventosDirectory = getEventosDirectory();
  const filePath = getEventoFilePath(slug);

  if (!fs.existsSync(eventosDirectory)) {
    fs.mkdirSync(eventosDirectory, { recursive: true });
  }

  if (fs.existsSync(filePath)) {
    return NextResponse.json(
      { message: "Ya existe un evento con ese titulo/slug." },
      { status: 409 },
    );
  }

  const markdown = buildEventoMarkdown(payload, slug);

  fs.writeFileSync(filePath, markdown, "utf8");

  revalidatePath("/eventos");
  revalidatePath(`/eventos/${slug}`);
  revalidatePath("/admin/eventos");

  return NextResponse.json({
    message: "Evento creado correctamente.",
    slug,
    filePath,
  });
}
