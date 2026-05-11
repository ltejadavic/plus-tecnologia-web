import { NextResponse } from "next/server";
import { createCaptchaChallenge } from "@/lib/contact-captcha";

export const runtime = "nodejs";

export function GET() {
  return NextResponse.json(createCaptchaChallenge());
}
