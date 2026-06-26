import { NextResponse } from "next/server";

const ACTIVE_CAMPAIGN_TAG_ID = "268";

function isValidEmail(value: unknown) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Correo electronico invalido" },
        { status: 400 },
      );
    }

    const activeCampaignUrl = process.env.AC_URL;
    const activeCampaignKey = process.env.AC_KEY;

    if (!activeCampaignUrl || !activeCampaignKey) {
      console.error("Faltan variables de entorno AC_URL o AC_KEY");
      return NextResponse.json(
        { error: "Servicio de registro no configurado" },
        { status: 500 },
      );
    }

    const contactResponse = await fetch(
      `${activeCampaignUrl}/api/3/contact/sync`,
      {
        method: "POST",
        headers: {
          "Api-Token": activeCampaignKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact: {
            email,
            firstName: typeof name === "string" ? name.trim() : "",
          },
        }),
      },
    );

    if (!contactResponse.ok) {
      const errorData = await contactResponse.text();
      console.error("Error al sincronizar contacto:", errorData);
      return NextResponse.json(
        { error: "Error al sincronizar contacto" },
        { status: 500 },
      );
    }

    const data = await contactResponse.json();
    const contactId = data.contact?.id;

    if (!contactId) {
      console.error("No se obtuvo ID del contacto");
      return NextResponse.json({ error: "No se obtuvo ID" }, { status: 500 });
    }

    try {
      const tagResponse = await fetch(
        `${activeCampaignUrl}/api/3/contactTags`,
        {
          method: "POST",
          headers: {
            "Api-Token": activeCampaignKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contactTag: {
              contact: contactId,
              tag: ACTIVE_CAMPAIGN_TAG_ID,
            },
          }),
        },
      );

      if (!tagResponse.ok) {
        const tagError = await tagResponse.text();
        console.error("Aviso: no se pudo aplicar la etiqueta:", tagError);
      }
    } catch (tagError) {
      console.error("Error de red al etiquetar:", tagError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error critico en el servidor:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
