"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import { trackMetaEvent } from "@/lib/meta-pixel";
import type { CourseLandingData } from "@/lib/course-landings";

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
  href,
  children,
  onClick,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
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

function EnrollmentCard({
  data,
  onCheckout,
}: {
  data: CourseLandingData;
  onCheckout: () => void;
}) {
  return (
    <div className="rounded-[2rem] border border-red-100 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] md:p-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full bg-red-50 px-4 py-1 text-sm font-bold uppercase tracking-wide text-red-700">
            {data.openEnrollmentLabel}
          </p>

          <h3 className="mt-3 text-2xl font-black leading-tight text-slate-900 md:text-3xl">
            {data.enrollmentTitle}
          </h3>

          <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
            {data.enrollmentDescription}
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm md:text-base">
            {data.enrollmentBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-slate-50 px-4 py-2 font-semibold text-slate-700"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="min-w-[260px] rounded-[1.5rem] bg-slate-950 p-6 text-white">
          <p className="text-sm uppercase tracking-[0.18em] text-red-300">
            Inversion hoy
          </p>

          <p className="mt-2 text-4xl font-black md:text-5xl">{data.price}</p>

          <p className="text-sm text-slate-300">{data.priceCurrency}</p>

          <a
            href={data.paymentUrl}
            onClick={onCheckout}
            className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-center text-base font-black text-white transition duration-300 hover:bg-red-700 md:text-lg"
          >
            {data.heroCta}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CourseLandingTemplate({
  data,
}: {
  data: CourseLandingData;
}) {
  const [hasStarted, setHasStarted] = useState(false);
  const playerRef = useRef<{ destroy?: () => void } | null>(null);
  const videoTrackedRef = useRef(false);

  useEffect(() => {
    trackMetaEvent("ViewContent", {
      content_name: data.tracking.viewContentName,
      value: 75,
      currency: "MXN",
    });
  }, [data]);

  useEffect(() => {
    if (!hasStarted || !data.videoId) return;

    const setupPlayer = () => {
      if (!window.YT?.Player || playerRef.current) return;

      playerRef.current = new window.YT.Player("main-player", {
        videoId: data.videoId,
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
                content_name: data.tracking.startTrialName,
                content_category: "Video",
                value: 150,
                currency: "MXN",
              });
            }
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
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [data.tracking.startTrialName, data.videoId, hasStarted]);

  const handleCheckoutClick = () => {
    const numericValue = Number(data.price.replace(/[^0-9.]/g, ""));

    trackMetaEvent("InitiateCheckout", {
      content_name: data.tracking.checkoutName,
      value: Number.isFinite(numericValue) ? numericValue : 0,
      currency: data.priceCurrency,
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
                  {data.title}
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-700 md:text-2xl">
                  {data.subtitle}
                </p>
              </div>

              <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-[0_20px_80px_rgba(15,23,42,0.12)] md:p-3">
                <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-black">
                  {!hasStarted && data.videoId ? (
                    <button
                      type="button"
                      onClick={() => setHasStarted(true)}
                      aria-label="Reproducir video"
                      className="absolute inset-0 z-10 flex items-center justify-center"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-90"
                        style={{
                          backgroundImage: `url('${data.heroImage}')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/30" />

                      <div className="absolute bottom-5 left-5 right-5 text-left text-white md:bottom-8 md:left-8 md:right-8">
                        <p className="max-w-2xl text-sm font-semibold text-white/80 md:text-base">
                          {data.heroSupportText}
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
                  ) : data.videoId ? (
                    <div
                      id="main-player"
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    <>
                      <img
                        src={data.heroImage}
                        alt={data.heroImageAlt}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20" />
                      <div className="absolute bottom-5 left-5 right-5 text-left text-white md:bottom-8 md:left-8 md:right-8">
                        <p className="max-w-2xl text-sm font-semibold text-white/80 md:text-base">
                          {data.heroSupportText}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-10 text-center">
                <PrimaryButton
                  href={data.paymentUrl}
                  onClick={handleCheckoutClick}
                >
                  {data.heroCta}
                </PrimaryButton>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white pb-10 pt-12 md:pb-12 md:pt-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                {data.realityTitle}
              </h2>

              <div className="mt-8 rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.24)] md:p-10">
                <div className="space-y-4 text-lg leading-relaxed text-slate-200 md:text-xl">
                  {data.realityItems.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>

                <div className="mt-8 h-px w-full bg-white/10" />

                <p className="mt-8 text-2xl font-black leading-tight text-white md:text-3xl">
                  {data.realityResult}
                </p>

                <p className="mt-4 text-lg text-slate-300 md:text-xl">
                  {data.realityWarning}
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white pb-16 pt-4 md:pb-20 md:pt-6">
          <Container>
            <div className="mx-auto max-w-5xl">
              <EnrollmentCard data={data} onCheckout={handleCheckoutClick} />
            </div>
          </Container>
        </section>

        <section className="bg-slate-50 py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                {data.problemTitle}
              </h2>

              <p className="mt-6 text-xl font-bold leading-relaxed text-slate-700 md:text-2xl">
                {data.problemSubtitle}
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                {data.sectorTitle}
              </h2>

              <p className="mt-5 text-xl leading-relaxed text-slate-700 md:text-2xl">
                {data.sectorSubtitle}
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {data.opportunityItems.map((item) => (
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
                Transformacion
              </SectionEyebrow>

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <img
                  src={data.transformationImage}
                  alt={`Antes y despues - ${data.enrollmentTitle}`}
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
                  {data.audienceItems.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-slate-50 py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-5xl">
              <SectionEyebrow center>{data.learnEyebrow}</SectionEyebrow>

              <h2 className="mt-4 text-center text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                {data.learnTitle}
              </h2>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {data.learnItems.map((item) => (
                  <SurfaceCard key={item} className="p-6">
                    <p className="text-lg font-semibold leading-relaxed text-slate-800">
                      {item}
                    </p>
                  </SurfaceCard>
                ))}
              </div>

              <p className="mt-8 text-center text-xl font-black text-slate-700 md:text-2xl">
                {data.learnClosing}
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                {data.valueTitle}
              </h2>

              <p className="mt-5 text-xl leading-relaxed text-slate-700 md:text-2xl">
                {data.valueSubtitle}
              </p>

              <div className="mt-10 rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-[0_20px_60px_rgba(15,23,42,0.24)]">
                <p className="text-5xl font-black text-red-400 md:text-7xl">
                  {data.price} {data.priceCurrency}
                </p>

                <div className="mt-8 space-y-3 text-lg text-slate-200 md:text-xl">
                  {data.valueItems.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-red-600 py-20 text-white md:py-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                {data.urgencyTitle}
              </h2>

              <p className="mt-6 text-xl font-bold leading-relaxed text-red-50 md:text-2xl">
                {data.urgencySubtitle}
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <PrimaryButton href={data.paymentUrl} onClick={handleCheckoutClick}>
                {data.heroCta}
              </PrimaryButton>
            </div>
          </Container>
        </section>

        <section className="bg-slate-50 pb-24 pt-6 md:pb-28">
          <Container>
            <div className="mx-auto max-w-5xl">
              <SurfaceCard className="p-8 md:p-10">
                {data.footerNotes.map((note) => (
                  <p
                    key={note}
                    className="text-lg leading-relaxed text-slate-700 md:text-xl [&:not(:first-child)]:mt-5"
                  >
                    {note}
                  </p>
                ))}
              </SurfaceCard>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
