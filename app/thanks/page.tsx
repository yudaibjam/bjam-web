import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせありがとうございます",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f1f5f9] px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white px-8 py-12 text-center shadow-sm">
        {/* Checkmark icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#dbeafe]">
          <svg
            className="h-8 w-8 text-[#2563eb]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="mb-3 text-2xl font-bold text-[#1a1a2e]">
          お問い合わせありがとうございます
        </h1>

        <p className="mb-8 leading-relaxed text-[#64748b]">
          内容を確認の上、2営業日以内にご連絡いたします。
          <br />
          しばらくお待ちください。
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-[#2563eb] px-6 py-3 font-semibold text-white transition hover:bg-[#1d4ed8]"
        >
          トップページに戻る
        </Link>
      </div>
    </main>
  );
}
