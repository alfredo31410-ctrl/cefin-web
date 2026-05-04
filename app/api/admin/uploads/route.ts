import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

function sanitizeFilename(filename: string) {
  return filename
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-zA-Z0-9.-]/g, "_")
  .replace(/_+/g, "_");
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!(file instanceof File)) {
    return NextResponse.json(
      { message: "No se recibio ningun archivo" }, 
      { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadsDirectory = path.join(process.cwd(), "public", "uploads");

  if (!fs.existsSync(uploadsDirectory)) {
    fs.mkdirSync(uploadsDirectory, { recursive: true });
  }

  const safename = sanitizeFilename(file.name);
  const filename = `${Date.now()}_${safename}`;
  const filepath = path.join(uploadsDirectory, filename);

  fs.writeFileSync(filepath, buffer);

  return NextResponse.json({ 
    message: "Archivo subido exitosamente",
    url: `/uploads/${filename}`,
    name: filename, 
  });
}

export async function GET() {
  const uploadsDirectory = path.join(process.cwd(), "public", "uploads");

  if (!fs.existsSync(uploadsDirectory)) {
    return NextResponse.json({ uploads: [] });
  }

  const uploads = fs
    .readdirSync(uploadsDirectory)
    .filter((file) => fs.statSync(path.join(uploadsDirectory, file)).isFile())
    .map((file) => ({
      name: file,
      url: `/uploads/${file}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return NextResponse.json({ uploads });
}
