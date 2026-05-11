"use client";

import { FormEvent, useEffect, useState } from "react";
import type { ImageSlot } from "@/data/site";
import ResponsiveImage from "./ResponsiveImage";

const needOptions = [
  "Repuestos de filtración",
  "Servicio técnico",
  "Filtración de diésel/petróleo",
  "Otro",
];

type ContactSectionProps = {
  whatsappHref: string;
  email: string;
  image?: ImageSlot;
};

const LABEL_CLASS = "mb-2 block text-sm font-medium text-foreground";
const FIELD_CLASS =
  "w-full rounded-md border border-[#CBD4D8] px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";
const BUTTON_CLASS =
  "inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-[#082D37] hover:shadow-lg hover:shadow-primary/25 disabled:translate-y-0 disabled:cursor-not-allowed disabled:bg-[#6F858C] disabled:shadow-none sm:w-auto";

type CaptchaChallenge = {
  image: string;
  token: string;
};

type ContactApiResponse = {
  success: boolean;
  message: string;
};

export default function ContactSection({ whatsappHref, email, image }: ContactSectionProps) {
  const [captcha, setCaptcha] = useState<CaptchaChallenge | null>(null);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function refreshCaptcha() {
    const response = await fetch("/api/contact/captcha", { cache: "no-store" });
    const challenge = (await response.json()) as CaptchaChallenge;

    setCaptcha(challenge);
    setStartedAt(Date.now());
  }

  useEffect(() => {
    let isMounted = true;

    fetch("/api/contact/captcha", { cache: "no-store" })
      .then((response) => response.json())
      .then((challenge: CaptchaChallenge) => {
        if (!isMounted) {
          return;
        }

        setCaptcha(challenge);
        setStartedAt(Date.now());
      })
      .catch(() => {
        if (!isMounted) {
          return;
        }

        setStatus("error");
        setFeedback("No se pudo cargar la verificación anti-spam.");
      });

    return () => {
      isMounted = false;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("startedAt", String(startedAt));

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    const result = (await response.json()) as ContactApiResponse;

    if (!response.ok || !result.success) {
      setStatus("error");
      setFeedback(result.message || "No se pudo enviar la solicitud.");
      await refreshCaptcha();
      return;
    }

    form.reset();
    setStatus("success");
    setFeedback(result.message || "Solicitud enviada correctamente.");
    await refreshCaptcha();
  }

  return (
    <section id="contacto" className="bg-light">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Contacto
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary">
              Solicita una cotización
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#3A4950]">
              Completa el formulario con tu requerimiento técnico. También puedes escribirnos
              por WhatsApp o por correo.
            </p>
          </div>
          {image ? (
            <ResponsiveImage
              image={image}
              className="h-48 w-full rounded-lg border border-[#D8E0E2] object-cover shadow-lg shadow-primary/10 md:h-56"
              sizes="(min-width: 768px) 35vw, 100vw"
            />
          ) : null}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-lg border border-[#D8E0E2] bg-white p-6 shadow-xl shadow-primary/10 md:grid-cols-2"
            aria-describedby="contact-form-help"
          >
            <input type="hidden" name="_source" value="website-contact-form" />
            <input type="hidden" name="startedAt" value={startedAt} />
            <input type="hidden" name="captchaToken" value={captcha?.token || ""} />
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Sitio web</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div>
              <label htmlFor="name" className={LABEL_CLASS}>
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={80}
                autoComplete="name"
                className={FIELD_CLASS}
              />
            </div>
            <div>
              <label htmlFor="company" className={LABEL_CLASS}>
                Empresa
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                minLength={2}
                maxLength={100}
                autoComplete="organization"
                className={FIELD_CLASS}
              />
            </div>
            <div>
              <label htmlFor="email" className={LABEL_CLASS}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={120}
                autoComplete="email"
                className={FIELD_CLASS}
              />
            </div>
            <div>
              <label htmlFor="phone" className={LABEL_CLASS}>
                Teléfono
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                minLength={7}
                maxLength={24}
                pattern="^[0-9+()\\s-]+$"
                title="Ingresa solo números y signos válidos de teléfono como +, espacios, guiones o paréntesis."
                autoComplete="tel"
                className={FIELD_CLASS}
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="needType"
                className={LABEL_CLASS}
              >
                Tipo de necesidad
              </label>
              <select
                id="needType"
                name="needType"
                required
                className={`${FIELD_CLASS} bg-white`}
              >
                <option value="">Selecciona una opción</option>
                {needOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className={LABEL_CLASS}
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                minLength={10}
                maxLength={1200}
                className={`${FIELD_CLASS} resize-y`}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="captchaAnswer" className={LABEL_CLASS}>
                Verificación anti-spam: escribe el resultado de la suma
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {captcha ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={captcha.image}
                    alt="Imagen captcha con una suma matemática"
                    width={220}
                    height={90}
                    className="h-[72px] w-[176px] rounded-md border border-[#CBD4D8] bg-light object-cover shadow-inner"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="h-[72px] w-[176px] rounded-md border border-[#CBD4D8] bg-light"
                  />
                )}
                <input
                  id="captchaAnswer"
                  name="captchaAnswer"
                  type="text"
                  required
                  inputMode="numeric"
                  pattern="^[0-9]+$"
                  maxLength={3}
                  title="Ingresa solo números."
                  className={`${FIELD_CLASS} sm:max-w-40`}
                />
                <button
                  type="button"
                  onClick={() => refreshCaptcha()}
                  className="inline-flex items-center justify-center rounded-md border border-primary/30 px-4 py-2 text-sm font-semibold text-primary shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/5 hover:shadow-md"
                >
                  Cambiar pregunta
                </button>
              </div>
            </div>
            <div className="md:col-span-2">
              <p id="contact-form-help" className="mb-3 text-xs text-[#5C6B73]">
                Completa todos los campos para enviar una solicitud de cotización.
              </p>
              {feedback ? (
                <p
                  className={`mb-3 rounded-md border px-3 py-2 text-sm ${
                    status === "success"
                      ? "border-secondary/25 bg-secondary/10 text-secondary"
                      : "border-accent/30 bg-accent/10 text-[#7A4D06]"
                  }`}
                >
                  {feedback}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={status === "loading" || !captcha}
                className={BUTTON_CLASS}
              >
                {status === "loading" ? "Enviando..." : "Enviar solicitud de cotización"}
              </button>
            </div>
          </form>

          <aside className="rounded-lg border border-[#D8E0E2] bg-white p-6 shadow-xl shadow-primary/10">
            <h3 className="font-heading text-xl font-semibold text-primary">
              Canales de contacto
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#3A4950]">
              Si prefieres una atención rápida, usa WhatsApp. Si no, envíanos un correo
              con tu requerimiento.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-semibold text-white shadow-md shadow-accent/25 transition hover:-translate-y-0.5 hover:bg-[#C2851F] hover:shadow-lg"
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={`mailto:${email}?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Plus%20Tecnolog%C3%ADa`}
                className="inline-flex items-center justify-center rounded-md border border-primary/30 px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/5 hover:shadow-md"
              >
                Enviar por correo
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
