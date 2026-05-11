import { NextResponse } from "next/server";
import { verifyCaptchaChallenge } from "@/lib/contact-captcha";
import { ContactMessage, isValidEmail, sendContactEmail } from "@/lib/contact-email";

export const runtime = "nodejs";

type ContactFormField = Exclude<keyof ContactMessage, "submittedAt">;

const REQUIRED_FIELDS: ContactFormField[] = [
  "name",
  "company",
  "email",
  "phone",
  "needType",
  "message",
];

const VALID_NEED_TYPES = new Set([
  "Repuestos de filtración",
  "Servicio técnico",
  "Filtración de diésel/petróleo",
  "Otro",
]);

const CAPTCHA_ANSWER_REGEX = /^\d+$/;
const PHONE_REGEX = /^[0-9+()\s-]{7,24}$/;

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getClientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = rateLimit.get(key);

  if (!current || current.resetAt <= now) {
    rateLimit.set(key, { count: 1, resetAt: now + 60_000 });
    return false;
  }

  current.count += 1;
  return current.count > 5;
}

function jsonResponse(message: string, status: number) {
  return NextResponse.json({ success: false, message }, { status });
}

function logDevelopmentDetail(detail?: string) {
  if (process.env.NODE_ENV === "development" && detail) {
    console.error(`[contact-api] ${detail}`);
  }
}

function hasLength(value: string, min: number, max: number) {
  return value.length >= min && value.length <= max;
}

export async function POST(request: Request) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return jsonResponse("La solicitud debe enviarse como formulario.", 400);
  }

  const honeypot = readString(formData, "website");
  const startedAt = Number(readString(formData, "startedAt"));
  const captchaToken = readString(formData, "captchaToken");
  const captchaAnswer = readString(formData, "captchaAnswer");

  if (isRateLimited(getClientKey(request))) {
    return jsonResponse("Demasiados intentos. Espera un minuto y vuelve a intentar.", 429);
  }

  if (honeypot) {
    return NextResponse.json({
      success: true,
      message: "Solicitud enviada correctamente.",
    });
  }

  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 2500) {
    return jsonResponse("Espera unos segundos antes de enviar el formulario.", 400);
  }

  const formMessage = REQUIRED_FIELDS.reduce((result, field) => {
    result[field] = readString(formData, field);
    return result;
  }, {} as Record<ContactFormField, string>);

  const message: ContactMessage = {
    ...formMessage,
    submittedAt: new Intl.DateTimeFormat("es-PE", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Lima",
    }).format(new Date()),
  };

  const hasMissingFields = REQUIRED_FIELDS.some((field) => !message[field]);

  if (hasMissingFields) {
    return jsonResponse("Completa todos los campos obligatorios.", 400);
  }

  if (!hasLength(message.name, 2, 80)) {
    return jsonResponse("Ingresa un nombre válido.", 400);
  }

  if (!hasLength(message.company, 2, 100)) {
    return jsonResponse("Ingresa una empresa válida.", 400);
  }

  if (!hasLength(message.email, 5, 120) || !isValidEmail(message.email)) {
    return jsonResponse("Ingresa un correo válido para poder responderte.", 400);
  }

  if (!PHONE_REGEX.test(message.phone)) {
    return jsonResponse(
      "Ingresa un teléfono válido. Usa solo números, +, espacios, guiones o paréntesis.",
      400,
    );
  }

  if (!VALID_NEED_TYPES.has(message.needType)) {
    return jsonResponse("Selecciona un tipo de necesidad válido.", 400);
  }

  if (!hasLength(message.message, 10, 1200)) {
    return jsonResponse("Ingresa un mensaje entre 10 y 1200 caracteres.", 400);
  }

  if (!CAPTCHA_ANSWER_REGEX.test(captchaAnswer)) {
    return jsonResponse("Ingresa solo números en la verificación anti-spam.", 400);
  }

  if (!verifyCaptchaChallenge(captchaToken, captchaAnswer)) {
    return jsonResponse("La verificación anti-spam no es correcta. Inténtalo nuevamente.", 400);
  }

  const emailResult = await sendContactEmail(message);

  if (!emailResult.ok) {
    logDevelopmentDetail(emailResult.logMessage);
    return jsonResponse(emailResult.message, emailResult.status);
  }

  if (emailResult.simulated) {
    logDevelopmentDetail("CONTACT_EMAIL_PROVIDER=disabled; solicitud validada sin envío real.");
  }

  return NextResponse.json({
    success: true,
    message: "Solicitud enviada correctamente.",
  });
}
