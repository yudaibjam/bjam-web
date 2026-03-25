import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/google-sheets";

// Simple in-memory rate limiting: email -> last submission timestamp
const recentSubmissions = new Map<string, number>();
const RATE_LIMIT_MS = 60 * 1000; // 60 seconds

// Field length limits
const MAX_LENGTHS: Record<string, number> = {
  company: 100,
  department: 100,
  name: 50,
  email: 254,
  phone: 30,
  type: 50,
  message: 2000,
  source: 50,
  utm_source: 100,
  utm_medium: 100,
  utm_campaign: 100,
};

// Strip HTML tags from a string
function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

// Truncate and sanitize a field value
function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return stripHtml(value).slice(0, maxLength).trim();
}

// Check if the request origin is allowed
function isOriginAllowed(request: NextRequest): boolean {
  const origin = request.headers.get("origin") || "";
  const referer = request.headers.get("referer") || "";
  const allowed = process.env.ALLOWED_ORIGIN || "https://b-jam.co.jp";
  const allowedOrigins = [allowed, "http://localhost:3000", "http://localhost:3001", "https://bjamweb.vercel.app"];

  if (origin && allowedOrigins.some((o) => origin.startsWith(o))) return true;
  if (referer && allowedOrigins.some((o) => referer.startsWith(o))) return true;
  // Allow requests with no origin (e.g., server-side, curl for testing)
  if (!origin && !referer) return true;

  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Origin validation
    if (!isOriginAllowed(request)) {
      return NextResponse.json(
        { error: "不正なリクエストです。" },
        { status: 403 }
      );
    }

    const body = await request.json();

    // Honeypot check: if "website" field has a value, it's a bot
    if (body.website) {
      // Silently return success to avoid tipping off the bot
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Sanitize all fields
    const source = sanitize(body.source, MAX_LENGTHS.source);
    const company = sanitize(body.company, MAX_LENGTHS.company);
    const department = sanitize(body.department, MAX_LENGTHS.department);
    const name = sanitize(body.name, MAX_LENGTHS.name);
    const email = sanitize(body.email, MAX_LENGTHS.email);
    const phone = sanitize(body.phone, MAX_LENGTHS.phone);
    const type = sanitize(body.type, MAX_LENGTHS.type);
    const message = sanitize(body.message, MAX_LENGTHS.message);
    const utm_source = sanitize(body.utm_source, MAX_LENGTHS.utm_source);
    const utm_medium = sanitize(body.utm_medium, MAX_LENGTHS.utm_medium);
    const utm_campaign = sanitize(body.utm_campaign, MAX_LENGTHS.utm_campaign);

    // Server-side validation of required fields
    if (!company || !name || !email) {
      return NextResponse.json(
        { error: "必須項目が入力されていません。" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "メールアドレスの形式が正しくありません。" },
        { status: 400 }
      );
    }

    // Rate limiting check
    const now = Date.now();
    const lastSubmission = recentSubmissions.get(email);
    if (lastSubmission && now - lastSubmission < RATE_LIMIT_MS) {
      return NextResponse.json(
        { error: "送信が完了しています。しばらく時間をおいてから再度お試しください。" },
        { status: 429 }
      );
    }

    // Record submission time
    recentSubmissions.set(email, now);

    // Clean up old entries to prevent memory leak
    for (const [key, time] of recentSubmissions.entries()) {
      if (now - time > RATE_LIMIT_MS * 10) {
        recentSubmissions.delete(key);
      }
    }

    // Append to Google Sheets
    await appendToSheet({
      source,
      company,
      department,
      name,
      email,
      phone,
      type,
      message,
      utm_source,
      utm_medium,
      utm_campaign,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { error: "送信中にエラーが発生しました。時間をおいて再度お試しください。" },
      { status: 500 }
    );
  }
}
