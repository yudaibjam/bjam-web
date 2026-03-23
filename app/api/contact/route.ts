import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/google-sheets";

// Simple in-memory rate limiting: email -> last submission timestamp
const recentSubmissions = new Map<string, number>();
const RATE_LIMIT_MS = 60 * 1000; // 60 seconds

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
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
    } = body;

    // Server-side validation of required fields
    if (!company || !name || !email) {
      return NextResponse.json(
        { error: "必須項目が入力されていません。" },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
      source: source ?? "",
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
