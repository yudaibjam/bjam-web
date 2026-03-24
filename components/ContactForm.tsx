"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface ContactFormInputs {
  company: string;
  department?: string;
  name: string;
  email: string;
  phone?: string;
  type?: string;
  message?: string;
  website?: string; // honeypot
}

interface ContactFormProps {
  source: string;
  variant?: "full" | "simple";
  className?: string;
}

export default function ContactForm({
  source,
  variant = "full",
  className = "",
}: ContactFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source,
          ...utmParams,
        }),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error ?? "送信に失敗しました。");
      }

      router.push("/thanks");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "送信中にエラーが発生しました。時間をおいて再度お試しください。"
      );
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[#e2e8f0] bg-white px-4 py-2.5 text-[#1a1a2e] placeholder-[#64748b] focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#dbeafe] transition";
  const labelClass = "block text-sm font-medium text-[#1a1a2e] mb-1";
  const errorClass = "mt-1 text-sm text-red-600";
  const requiredBadge = (
    <span className="ml-1 text-xs font-normal text-red-500">必須</span>
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-5 ${className}`}
      noValidate
    >
      {/* 会社名 */}
      <div>
        <label className={labelClass}>
          会社名{requiredBadge}
        </label>
        <input
          type="text"
          placeholder="株式会社〇〇"
          className={inputClass}
          {...register("company", { required: "会社名を入力してください。" })}
        />
        {errors.company && (
          <p className={errorClass}>{errors.company.message}</p>
        )}
      </div>

      {/* 部署・役職 (full only) */}
      {variant === "full" && (
        <div>
          <label className={labelClass}>部署・役職</label>
          <input
            type="text"
            placeholder="営業部 マネージャー"
            className={inputClass}
            {...register("department")}
          />
        </div>
      )}

      {/* お名前 */}
      <div>
        <label className={labelClass}>
          お名前{requiredBadge}
        </label>
        <input
          type="text"
          placeholder="山田 太郎"
          className={inputClass}
          {...register("name", { required: "お名前を入力してください。" })}
        />
        {errors.name && (
          <p className={errorClass}>{errors.name.message}</p>
        )}
      </div>

      {/* メールアドレス */}
      <div>
        <label className={labelClass}>
          メールアドレス{requiredBadge}
        </label>
        <input
          type="email"
          placeholder="taro.yamada@example.com"
          className={inputClass}
          {...register("email", {
            required: "メールアドレスを入力してください。",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "正しいメールアドレスを入力してください。",
            },
          })}
        />
        {errors.email && (
          <p className={errorClass}>{errors.email.message}</p>
        )}
      </div>

      {/* 電話番号 */}
      <div>
        <label className={labelClass}>電話番号</label>
        <input
          type="tel"
          placeholder="03-0000-0000"
          className={inputClass}
          {...register("phone")}
        />
      </div>

      {/* お問い合わせ種別 (full only) */}
      {variant === "full" && (
        <div>
          <label className={labelClass}>お問い合わせ種別</label>
          <select
            className={inputClass}
            {...register("type")}
          >
            <option value="">選択してください</option>
            <option value="AI活用診断">AI活用診断</option>
            <option value="無料相談">無料相談</option>
            <option value="研修のご相談">研修のご相談</option>
            <option value="その他">その他</option>
          </select>
        </div>
      )}

      {/* ご相談内容 / 一番時間がかかっている業務 */}
      <div>
        <label className={labelClass}>
          {variant === "simple"
            ? "一番時間がかかっている業務は？"
            : "ご相談内容"}
        </label>
        <textarea
          rows={4}
          placeholder={
            variant === "simple"
              ? "例：毎週の報告書作成に3時間かかっている"
              : "ご相談内容をご自由にお書きください"
          }
          className={`${inputClass} resize-none`}
          {...register("message")}
        />
      </div>

      {/* Honeypot - hidden from humans, visible to bots */}
      <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {/* Error message */}
      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563eb] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            送信中…
          </>
        ) : (
          "無料で相談する"
        )}
      </button>

      <p className="text-center text-xs text-[#64748b]">
        送信することで
        <a href="/privacy" className="underline hover:text-[#2563eb]">
          プライバシーポリシー
        </a>
        に同意したことになります。
      </p>
    </form>
  );
}
