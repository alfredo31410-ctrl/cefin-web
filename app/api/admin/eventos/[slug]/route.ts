import fs from "fs";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import {
  buildEventoMarkdown,
  getEventoFilePath,
  normalizeEventoSlug,
  readEventoEditorData,
  type EventoPayload,
} from "@/lib/admin-eventos";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

function validatePayload(payload: EventoPayload) {
  if (!payload.titulo?.trim()) {
    return "El titulo es obligatorio.";
  }

  if (!payload.fecha?.trim()) {
    return "La fecha es obligatoria.";
  }

  return null;
}

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const evento = readEventoEditorData(slug);

  if (!evento) {
    return NextResponse.json(
      { message: "No se encontro el evento." },
      { status: 404 },
    );
  }

  return NextResponse.json(evento);
}

export async function PATCH(request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const payload = (await request.json()) as EventoPayload;
  const validationError = validatePayload(payload);

  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  const filePath = getEventoFilePath(slug);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      { message: "No se encontro el evento que intentas editar." },
      { status: 404 },
    );
  }

  const markdown = buildEventoMarkdown(payload, normalizeEventoSlug(slug));
  fs.writeFileSync(filePath, markdown, "utf8");

  revalidatePath("/eventos");
  revalidatePath(`/eventos/${slug}`);
  revalidatePath("/admin/eventos");
  revalidatePath(`/admin/eventos/${slug}`);

  return NextResponse.json({
    message: "Evento actualizado correctamente.",
    slug,
  });
}
