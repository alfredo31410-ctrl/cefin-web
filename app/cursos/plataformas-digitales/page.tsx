"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import { trackMetaEvent } from "@/lib/meta-pixel";

declare global {
  interface Window {
    YT?: {
      Player: new (
        elementId: string,
        config: Record<string, unknown>,
      ) => {
        destroy?: () => void;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const VIDEO_ID = "kHDw7r4ShJQ";
const PAYMENT_URL =
  "https://pay.hotmart.com/F105256630I?off=9hj3ikmv&checkoutMode=10";
const TRANSFORMATION_IMAGE = "/PLATAFORMAS-DIGITALES.png";

const CTA_SECONDS = 60;
const UNLOCK_SECONDS = 120;

const LANDING_DATA = {
  title:
    "Cómo convertirte en experto fiscal de Plataformas Digitales y dejar de cobrar como contador general.",
  subtitle:
    "Si atiendes Uber, Airbnb o Amazon… probablemente estás perdiendo dinero (y ni lo sabes)",
  price: "$1,527",
  priceCurrency: "MXN",
  realityTitle: "Esto es lo que está pasando hoy con muchos contadores:",
  realityItems: [
    "Atienden clientes de plataformas… pero sin entender las retenciones.",
    "Confunden el esquema de pagos definitivos con pagos provisionales.",
    "No saben cómo gestionar el IVA acreditable correctamente.",
    "Y terminan resolviendo discrepancias cuando el SAT ya envió la carta invitación.",
  ],
  opportunityItems: [
    "Dejas de competir por precio",
    "Empiezas a cobrar por tu criterio técnico",
    "Te conviertes en referencia para la Gig Economy",
  ],
  learnItems: [
    "Cómo funciona realmente el régimen de plataformas",
    "Gestión correcta de retenciones de ISR e IVA",
    "Diferencia entre esquemas de pago y su conveniencia",
    "Cómo evitar errores en la declaración que generan multas",
    "Estrategia fiscal para repartidores, anfitriones y vendedores",
  ],
};

function SectionEyebrow({
  children,
  center = false,
  dark = false,
}: {
  children: React.ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <p
      className={[
        "text-sm font-black uppercase tracking-[0.18em]",
        center ? "text-center" : "",
        dark ? "text-red-400" : "text-red-600",
      ].join(" ")}
    >
      {children}
    </p>
  );
}

function PrimaryButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={PAYMENT_URL}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center rounded-2xl bg-red-600 px-8 py-5",
        "text-center text-lg font-black text-white shadow-xl",
        "transition duration-300 hover:-translate-y-1 hover:bg-red-700",
        "md:text-2xl",
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function SurfaceCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[2rem] border border-slate-200 bg-white shadow-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function FichaInscripcion({ onCheckout }: { onCheckout: () => void }) {
  return (
    <div className="rounded-[2rem] border border-red-100 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] md:p-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full bg-red-50 px-4 py-1 text-sm font-bold uppercase tracking-wide text-red-700">
            Inscripción abierta
          </p>

          <h3 className="mt-3 text-2xl font-black leading-tight text-slate-900 md:text-3xl">
            Asesor Fiscal de Plataformas Digitales
          </h3>

          <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
            Especialízate en la economía digital, deja de improvisar y empieza a
            cobrar por tu dominio técnico.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm md:text-base">
            <span className="rounded-full bg-slate-50 px-4 py-2 font-semibold text-slate-700">
              ✔ Acceso inmediato
            </span>
            <span className="rounded-full bg-slate-50 px-4 py-2 font-semibold text-slate-700">
              ✔ Contenido práctico
            </span>
            <span className="rounded-full bg-slate-50 px-4 py-2 font-semibold text-slate-700">
              ✔ Enfoque 100% aplicable
            </span>
             <span className="rounded-full bg-slate-50 px-4 py-2 font-semibold text-slate-700">
              ✔ Accede a una sesión en vivo grupal de preguntas y respuestas en
              el factor CEFIN el lunes siguiente a tu inscripción a las 11 a.m.
            </span>
          </div>
        </div>

        <div className="min-w-[260px] rounded-[1.5rem] bg-slate-950 p-6 text-white">
          <p className="text-sm uppercase tracking-[0.18em] text-red-300">
            Inversión hoy
          </p>

          <p className="mt-2 text-4xl font-black md:text-5xl">
            {LANDING_DATA.price}
          </p>

          <p className="text-sm text-slate-300">{LANDING_DATA.priceCurrency}</p>

          <a
            href={PAYMENT_URL}
            onClick={onCheckout}
            className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-center text-base font-black text-white transition duration-300 hover:bg-red-700 md:text-lg"
          >
            Quiero especializarme en plataformas ahora
          </a>
        </div>
      </div>
    </div>
  );
}

function UnlockBridge({
  isLocked,
  showCTA,
  onCheckout,
}: {
  isLocked: boolean;
  showCTA: boolean;
  onCheckout: () => void;
}) {
  return (
    <div className="mt-8 md:mt-10">
      <div
        className={`mx-auto max-w-3xl rounded-[1.75rem] border px-6 py-5 text-center transition-all duration-500 md:px-8 md:py-6 ${
          isLocked
            ? "border-slate-200 bg-slate-50 text-slate-700"
            : "border-red-100 bg-red-50 text-slate-800"
        }`}
      >
        {isLocked ? (
          <>
            <p className="text-sm font-black uppercase tracking-[0.15em] text-red-600">
              Contenido bloqueado
            </p>
            <p className="mt-2 text-lg font-semibold leading-relaxed md:text-xl">
              Sigue viendo la clase para desbloquear el resto del contenido y
              acceder a la oferta completa.
            </p>
          </>
        ) : (
          <>
            <p className="text-sm font-black uppercase tracking-[0.15em] text-red-600">
              Contenido desbloqueado
            </p>
            <p className="mt-2 text-lg font-semibold leading-relaxed md:text-xl">
              Ya puedes ver toda la información y avanzar hacia tu
              especialización.
            </p>

            <div
              className={`mt-5 transition-all duration-500 ${
                showCTA
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <PrimaryButton
                onClick={onCheckout}
                className="px-6 py-4 text-base md:text-xl"
              >
                Quiero especializarme en plataformas ahora
              </PrimaryButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function LandingPlataformas() {
  const [isLocked, setIsLocked] = useState(true);
  const [showCTA, setShowCTA] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const playerRef = useRef<{ destroy?: () => void } | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const unlockedRef = useRef(false);
  const shownCTARef = useRef(false);
  const videoTrackedRef = useRef(false);

  useEffect(() => {
    trackMetaEvent("ViewContent", {
      content_name: "Landing Asesor Fiscal de Plataformas",
      value: 75,
      currency: "MXN",
    });
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const setupPlayer = () => {
      if (!window.YT?.Player || playerRef.current) return;

      playerRef.current = new window.YT.Player("main-player", {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();

            if (!videoTrackedRef.current) {
              videoTrackedRef.current = true;
              trackMetaEvent("StartTrial", {
                content_name: "VSL Plataformas iniciada",
                content_category: "Video",
                value: 150,
                currency: "MXN",
              });
            }

            if (intervalRef.current) clearInterval(intervalRef.current);

            intervalRef.current = setInterval(() => {
              const currentTime = event.target?.getCurrentTime?.() || 0;

              if (currentTime >= UNLOCK_SECONDS && !unlockedRef.current) {
                unlockedRef.current = true;
                setIsLocked(false);

                trackMetaEvent("CompleteRegistration", {
                  content_name: "Contenido desbloqueado plataformas",
                  value: 400,
                  currency: "MXN",
                });
              }

              if (currentTime >= CTA_SECONDS && !shownCTARef.current) {
                shownCTARef.current = true;
                setShowCTA(true);
              }
            }, 1000);
          },
        },
      });
    };

    const existingScript = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]',
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }

    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      setupPlayer();
    };

    if (window.YT?.Player) {
      setupPlayer();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [hasStarted]);

  const handleStartVideo = () => {
    setHasStarted(true);
  };

  const handleCheckoutClick = () => {
    trackMetaEvent("InitiateCheckout", {
      content_name: "Asesor Fiscal de Plataformas",
      value: 1527,
      currency: "MXN",
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-red-100">
      <div className="fixed left-0 top-0 z-[100] w-full">
        <Navbar />
      </div>

      <main className="relative overflow-x-hidden">
        <section className="relative bg-gradient-to-b from-slate-50 via-white to-white pb-8 pt-36 md:pb-12 md:pt-44">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <h1 className="text-4xl font-black leading-[1.02] text-slate-900 md:text-6xl">
                  {LANDING_DATA.title}
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-700 md:text-2xl">
                  {LANDING_DATA.subtitle}
                </p>
              </div>

              <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-[0_20px_80px_rgba(15,23,42,0.12)] md:p-3">
                <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-black">
                  {!hasStarted ? (
                    <button
                      type="button"
                      onClick={handleStartVideo}
                      aria-label="Reproducir video"
                      className="absolute inset-0 z-10 flex items-center justify-center"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-90"
                        style={{
                          backgroundImage: `url('https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/30" />

                      <div className="absolute bottom-5 left-5 right-5 text-left text-white md:bottom-8 md:left-8 md:right-8">
                        <p className="max-w-2xl text-sm font-semibold text-white/80 md:text-base">
                          Reproduce la clase para desbloquear el contenido y ver
                          la oferta completa.
                        </p>
                      </div>

                      <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-red-600 shadow-2xl transition duration-300 hover:scale-110 md:h-28 md:w-28">
                        <svg
                          className="h-12 w-12 translate-x-1 fill-current text-white md:h-14 md:w-14"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  ) : (
                    <div
                      id="main-player"
                      className="absolute inset-0 h-full w-full"
                    />
                  )}
                </div>
              </div>

              <div
                className={`mt-10 text-center transition-all duration-700 ${
                  showCTA
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
                }`}
              >
                <PrimaryButton onClick={handleCheckoutClick}>
                  Quiero especializarme en plataformas ahora
                </PrimaryButton>
              </div>

              <UnlockBridge
                isLocked={isLocked}
                showCTA={showCTA}
                onCheckout={handleCheckoutClick}
              />
            </div>
          </Container>
        </section>

        <div
          className={`transition-all duration-700 ${
            isLocked
              ? "pointer-events-none opacity-35 blur-[6px]"
              : "opacity-100 blur-0"
          }`}
        >
          <section className="bg-white pb-10 pt-12 md:pb-12 md:pt-16">
            <Container>
              <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                  {LANDING_DATA.realityTitle}
                </h2>

                <div className="mt-8 rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.24)] md:p-10">
                  <div className="space-y-4 text-lg leading-relaxed text-slate-200 md:text-xl">
                    {LANDING_DATA.realityItems.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>

                  <div className="mt-8 h-px w-full bg-white/10" />

                  <p className="mt-8 text-2xl font-black leading-tight text-white md:text-3xl">
                    👉 El resultado: Clientes con multas y tú con más trabajo.
                  </p>

                  <p className="mt-4 text-lg text-slate-300 md:text-xl">
                    Y lo más grave: Ni siquiera saben exactamente dónde está el
                    error.
                  </p>
                </div>
              </div>
            </Container>
          </section>

          <section className="bg-white pb-16 pt-4 md:pb-20 md:pt-6">
            <Container>
              <div className="mx-auto max-w-5xl">
                <FichaInscripcion onCheckout={handleCheckoutClick} />
              </div>
            </Container>
          </section>

          <section className="bg-slate-50 py-20 md:py-24">
            <Container>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                  El problema es que nadie te enseñó cómo aplicar correctamente
                  los impuestos en un sector específico como plataformas
                  digitales.
                </h2>

                <p className="mt-6 text-xl font-bold leading-relaxed text-slate-700 md:text-2xl">
                  Y ese detalle… cambia completamente el resultado.
                </p>
              </div>
            </Container>
          </section>

          <section className="bg-white py-20 md:py-24">
            <Container>
              <div className="mx-auto max-w-5xl text-center">
                <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                  El sector de plataformas digitales es uno de los que más está
                  creciendo…
                </h2>

                <p className="mt-5 text-xl leading-relaxed text-slate-700 md:text-2xl">
                  Pero solo para contadores que saben lo que hacen.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                  {LANDING_DATA.opportunityItems.map((item) => (
                    <SurfaceCard key={item} className="h-full p-8">
                      <h3 className="text-2xl font-black leading-tight text-slate-900">
                        {item}
                      </h3>
                    </SurfaceCard>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          <section className="bg-slate-950 py-20 text-white md:py-24">
            <Container>
              <div className="mx-auto max-w-5xl text-center">
                <SectionEyebrow dark center>
                  Transformación
                </SectionEyebrow>

                <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                  <img
                    src={TRANSFORMATION_IMAGE}
                    alt="Antes y después - Asesor fiscal de plataformas digitales"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </Container>
          </section>

          <section className="bg-white py-20 md:py-24">
            <Container>
              <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                  Este curso es para ti si:
                </h2>

                <div className="mt-8 rounded-[2rem] border border-red-100 bg-red-50 p-8 md:p-10">
                  <div className="space-y-4 text-lg font-semibold leading-relaxed text-slate-800 md:text-xl">
                    <p>
                      ✔ Ya tienes clientes de plataformas y quieres hacerlo bien
                    </p>
                    <p>✔ Quieres especializarte en un nicho rentable</p>
                    <p>
                      ✔ Buscas dejar de improvisar y trabajar con estructura
                    </p>
                    <p>
                      ✔ Quieres tener un enfoque claro y aplicable en tu práctica
                    </p>
                    <p>
                      ✔ Accede a una sesión en vivo grupal de preguntas y respuestas en el factor CEFIN el lunes siguiente a tu inscripción a las 11 a.m.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="bg-slate-50 py-20 md:py-24">
            <Container>
              <div className="mx-auto max-w-5xl">
                <SectionEyebrow center>Lo que vas a aprender</SectionEyebrow>

                <h2 className="mt-4 text-center text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                  Aplicación fiscal real para plataformas digitales
                </h2>

                <div className="mt-12 grid gap-5 md:grid-cols-2">
                  {LANDING_DATA.learnItems.map((item) => (
                    <SurfaceCard key={item} className="p-6">
                      <p className="text-lg font-semibold leading-relaxed text-slate-800">
                        {item}
                      </p>
                    </SurfaceCard>
                  ))}
                </div>

                <p className="mt-8 text-center text-xl font-black text-slate-700 md:text-2xl">
                  👉 Esto no es teoría. Es aplicación directa.
                </p>
              </div>
            </Container>
          </section>

          <section className="bg-white py-20 md:py-24">
            <Container>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                  Este tipo de conocimiento normalmente se cobra en consultorías
                  de miles de pesos…
                </h2>

                <p className="mt-5 text-xl leading-relaxed text-slate-700 md:text-2xl">
                  Pero hoy puedes acceder a todo el curso por:
                </p>

                <div className="mt-10 rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-[0_20px_60px_rgba(15,23,42,0.24)]">
                  <p className="text-5xl font-black text-red-400 md:text-7xl">
                    {LANDING_DATA.price} {LANDING_DATA.priceCurrency}
                  </p>

                  <div className="mt-8 space-y-3 text-lg text-slate-200 md:text-xl">
                    <p>✔ Acceso inmediato</p>
                    <p>✔ Contenido práctico</p>
                    <p>✔ Enfoque 100% aplicable</p>
                    <p>
                      ✔ Accede a una sesión en vivo grupal de preguntas y respuestas en el factor CEFIN el lunes siguiente a tu inscripción a las 11 a.m.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="bg-red-600 py-20 text-white md:py-24">
            <Container>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-black leading-tight md:text-5xl">
                  Este curso no estará disponible en estas condiciones de forma
                  permanente.
                </h2>

                <p className="mt-6 text-xl font-bold leading-relaxed text-red-50 md:text-2xl">
                  👉 Si estás viendo esto ahora… es el momento de entrar.
                </p>
              </div>
            </Container>
          </section>

          <section className="bg-white py-20 md:py-24">
            <Container>
              <div className="mx-auto max-w-4xl text-center">
                <PrimaryButton onClick={handleCheckoutClick}>
                  Quiero especializarme en plataformas ahora
                </PrimaryButton>
              </div>
            </Container>
          </section>

          <section className="bg-slate-50 pb-24 pt-6 md:pb-28">
            <Container>
              <div className="mx-auto max-w-5xl">
                <SurfaceCard className="p-8 md:p-10">
                  <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    Tienes acceso al contenido para verlo a tu ritmo por todo un
                    año y empezar a aplicarlo desde el primer momento.
                  </p>

                  <p className="mt-5 text-lg leading-relaxed text-slate-700 md:text-xl">
                    Además accedes a un Tutor de Inteligencia Artificial que
                    responde todas tus dudas a partir de los temas estudiados en
                    clase, en tiempo real.
                  </p>
                </SurfaceCard>
              </div>
            </Container>
          </section>
        </div>
      </main>
    </div>
  );
}
