export type ContactMessage = {
  name: string;
  company: string;
  email: string;
  phone: string;
  needType: string;
  message: string;
  submittedAt: string;
};

type ContactEmailResult =
  | {
      ok: true;
      status: 200;
      simulated: boolean;
    }
  | {
      ok: false;
      status: number;
      message: string;
      logMessage?: string;
    };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string) {
  return EMAIL_REGEX.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildTextEmail(message: ContactMessage) {
  return [
    "Nueva solicitud de cotización - Plus Tecnología",
    "",
    `Nombre: ${message.name}`,
    `Empresa: ${message.company}`,
    `Correo: ${message.email}`,
    `Teléfono / WhatsApp: ${message.phone}`,
    `Tipo de necesidad: ${message.needType}`,
    `Fecha y hora de envío: ${message.submittedAt}`,
    "",
    "Mensaje:",
    message.message,
  ].join("\n");
}

function buildHtmlEmail(message: ContactMessage) {
  const rows = [
    ["Nombre", message.name],
    ["Empresa", message.company],
    ["Correo", message.email],
    ["Teléfono / WhatsApp", message.phone],
    ["Tipo de necesidad", message.needType],
    ["Fecha y hora de envío", message.submittedAt],
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#1f2933;line-height:1.5">
      <h1 style="color:#0b3d4a;font-size:22px;margin:0 0 16px">Nueva solicitud de cotización - Plus Tecnología</h1>
      <table style="border-collapse:collapse;width:100%;max-width:680px">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th align="left" style="border:1px solid #D8E0E2;background:#F3F6F6;padding:10px;width:190px">${escapeHtml(label)}</th>
                  <td style="border:1px solid #D8E0E2;padding:10px">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="color:#0b3d4a;font-size:16px;margin:20px 0 8px">Mensaje</h2>
      <div style="border:1px solid #D8E0E2;background:#fff;padding:14px;white-space:pre-wrap">${escapeHtml(
        message.message,
      )}</div>
    </div>
  `;
}

export async function sendContactEmail(message: ContactMessage): Promise<ContactEmailResult> {
  const provider = process.env.CONTACT_EMAIL_PROVIDER || "disabled";

  if (provider === "disabled") {
    return {
      ok: true,
      status: 200,
      simulated: true,
    };
  }

  if (provider !== "resend") {
    return {
      ok: false,
      status: 400,
      message: "La configuración de correo no es válida.",
      logMessage: `Unsupported CONTACT_EMAIL_PROVIDER: ${provider}`,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !from || !to) {
    const missing = [
      !apiKey ? "RESEND_API_KEY" : null,
      !from ? "CONTACT_EMAIL_FROM" : null,
      !to ? "CONTACT_EMAIL_TO" : null,
    ].filter(Boolean);

    return {
      ok: false,
      status: 500,
      message: "El envío de correo no está configurado correctamente.",
      logMessage: `Missing email environment variables: ${missing.join(", ")}`,
    };
  }

  let response: Response;

  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: message.email,
        subject: "Nueva solicitud de cotización - Plus Tecnología",
        text: buildTextEmail(message),
        html: buildHtmlEmail(message),
      }),
    });
  } catch (error) {
    return {
      ok: false,
      status: 502,
      message: "No se pudo conectar con el servicio de correo. Inténtalo nuevamente.",
      logMessage: error instanceof Error ? error.message : "Unknown Resend connection error",
    };
  }

  if (!response.ok) {
    const providerError = await response.text().catch(() => "");

    return {
      ok: false,
      status: response.status,
      message: "No se pudo enviar el correo. Inténtalo nuevamente o contáctanos por WhatsApp.",
      logMessage: `Resend rejected email with status ${response.status}: ${providerError}`,
    };
  }

  return { ok: true, status: 200, simulated: false };
}
