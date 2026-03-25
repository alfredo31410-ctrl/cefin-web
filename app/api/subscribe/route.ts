import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    const AC_URL = 'https://cefincapacitacion.api-us1.com';
    const AC_KEY = '7f294b1c93ae720555a7b22386b4d2fb8a3f1ff934de80907dd7180e485a2265f66d34b5';

    console.log("--- Iniciando Registro para:", email, "---");

    // 1. Sincronizamos el contacto (Crea o actualiza)
    const res = await fetch(`${AC_URL}/api/3/contact/sync`, {
      method: 'POST',
      headers: {
        'Api-Token': AC_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contact: {
          email: email,
          firstName: name,
        },
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Error en Sync Contact:", errorData);
      return NextResponse.json({ error: 'Error al sincronizar contacto' }, { status: 500 });
    }

    const data = await res.json();
    const contactId = data.contact?.id;

    if (!contactId) {
      console.error("No se obtuvo ID del contacto");
      return NextResponse.json({ error: 'No se obtuvo ID' }, { status: 500 });
    }

    console.log("Contacto sincronizado con ID:", contactId);

    // 2. Aplicar la etiqueta usando el ID 268
    try {
      const tagRes = await fetch(`${AC_URL}/api/3/contactTags`, {
        method: 'POST',
        headers: {
          'Api-Token': AC_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactTag: {
            contact: contactId,
            tag: "268", // ID extraído de tu URL
          },
        }),
      });

      if (!tagRes.ok) {
        const tagError = await tagRes.text();
        console.error("Aviso: No se pudo poner la etiqueta:", tagError);
        // No retornamos error 500 aquí para que el usuario pueda avanzar
      } else {
        console.log("¡Etiqueta 268 aplicada con éxito!");
      }
    } catch (tagErr) {
      console.error("Error de red al etiquetar:", tagErr);
    }

    // Retornamos éxito porque el contacto principal ya está en AC
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error crítico en el servidor:', error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}