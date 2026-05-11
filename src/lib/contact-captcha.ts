import { createHmac, randomInt, randomUUID, timingSafeEqual } from "crypto";

const CAPTCHA_TTL_MS = 10 * 60 * 1000;

type CaptchaPayload = {
  answerHash: string;
  expiresAt: number;
  nonce: string;
};

function getCaptchaSecret() {
  return process.env.CONTACT_CAPTCHA_SECRET || process.env.NEXTAUTH_SECRET || "dev-contact-captcha-secret";
}

function encodePayload(payload: CaptchaPayload) {
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}

function decodePayload(encoded: string): CaptchaPayload | null {
  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8"));

    if (
      typeof payload.answerHash !== "string" ||
      typeof payload.expiresAt !== "number" ||
      typeof payload.nonce !== "string"
    ) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

function sign(value: string) {
  return createHmac("sha256", getCaptchaSecret()).update(value).digest("base64url");
}

function hashAnswer(nonce: string, answer: number) {
  return sign(`${nonce}:${answer}`);
}

function escapeSvg(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function createCaptchaImage(expression: string) {
  const lines = Array.from({ length: 7 }, (_, index) => {
    const y = 12 + index * 15 + randomInt(-4, 5);
    const color = index % 2 === 0 ? "#0B3D4A" : "#2E8B57";

    return `<path d="M ${randomInt(-20, 20)} ${y} C ${randomInt(
      30,
      80,
    )} ${randomInt(0, 90)}, ${randomInt(90, 150)} ${randomInt(0, 90)}, ${randomInt(
      160,
      230,
    )} ${y + randomInt(-10, 11)}" stroke="${color}" stroke-opacity="0.18" stroke-width="${randomInt(
      1,
      3,
    )}" fill="none" />`;
  }).join("");

  const dots = Array.from({ length: 55 }, () => {
    const color = randomInt(0, 2) === 0 ? "#0B3D4A" : "#D99A2B";

    return `<circle cx="${randomInt(4, 216)}" cy="${randomInt(4, 86)}" r="${randomInt(
      1,
      3,
    )}" fill="${color}" fill-opacity="0.18" />`;
  }).join("");

  const characters = expression.split("").map((character, index) => {
    const x = 36 + index * 25 + randomInt(-4, 5);
    const y = 58 + randomInt(-8, 9);
    const rotation = randomInt(-12, 13);
    const fill = character === "+" ? "#2E8B57" : "#0B3D4A";

    return `<text x="${x}" y="${y}" transform="rotate(${rotation} ${x} ${y})" fill="${fill}" font-size="36" font-family="Arial, Helvetica, sans-serif" font-weight="700">${escapeSvg(
      character,
    )}</text>`;
  }).join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="90" viewBox="0 0 220 90" role="img" aria-label="Imagen de verificación anti-spam">
      <rect width="220" height="90" rx="10" fill="#F3F6F6" />
      <path d="M0 22 H220 M0 45 H220 M0 68 H220 M36 0 V90 M72 0 V90 M108 0 V90 M144 0 V90 M180 0 V90" stroke="#CBD4D8" stroke-opacity="0.35" stroke-width="1" />
      ${dots}
      ${lines}
      <g>${characters}</g>
    </svg>
  `.trim();

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export function createCaptchaChallenge() {
  const left = randomInt(10, 90);
  const right = randomInt(2, 10);
  const answer = left + right;
  const nonce = randomUUID();
  const payload = encodePayload({
    answerHash: hashAnswer(nonce, answer),
    expiresAt: Date.now() + CAPTCHA_TTL_MS,
    nonce,
  });
  const signature = sign(payload);

  return {
    image: createCaptchaImage(`${left}+${right}`),
    token: `${payload}.${signature}`,
  };
}

export function verifyCaptchaChallenge(token: string, answer: string) {
  const [payload, signature] = token.split(".");

  if (!payload || !signature) {
    return false;
  }

  const expectedSignature = sign(payload);
  const provided = Buffer.from(signature);
  const expected = Buffer.from(expectedSignature);

  if (provided.length !== expected.length || !timingSafeEqual(provided, expected)) {
    return false;
  }

  const decoded = decodePayload(payload);
  const numericAnswer = Number(answer);
  const expectedHash = decoded ? Buffer.from(decoded.answerHash) : null;
  const providedHash = decoded ? Buffer.from(hashAnswer(decoded.nonce, numericAnswer)) : null;

  return Boolean(
    decoded &&
      decoded.expiresAt >= Date.now() &&
      Number.isInteger(numericAnswer) &&
      expectedHash &&
      providedHash &&
      expectedHash.length === providedHash.length &&
      timingSafeEqual(expectedHash, providedHash),
  );
}
