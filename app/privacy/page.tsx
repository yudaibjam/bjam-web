import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "株式会社b-jamのプライバシーポリシーです。個人情報の取得・利用・管理について定めています。",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1 text-sm text-[#64748b] hover:text-[#2563eb]"
        >
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          トップページに戻る
        </Link>

        <h1 className="mb-2 text-3xl font-bold text-[#1a1a2e]">
          プライバシーポリシー
        </h1>
        <p className="mb-10 text-sm text-[#64748b]">
          株式会社b-jam（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、以下のとおりプライバシーポリシーを定めます。
        </p>

        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-[#1a1a2e]">
              1. 個人情報の取得について
            </h2>
            <p className="leading-relaxed text-[#1a1a2e]">
              当社は、お問い合わせ・資料請求・各種サービスのお申し込みなどの際に、お名前・会社名・メールアドレス・電話番号などの個人情報をご提供いただく場合があります。個人情報は、適法かつ公正な手段により取得します。
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-[#1a1a2e]">
              2. 個人情報の利用目的
            </h2>
            <p className="mb-3 leading-relaxed text-[#1a1a2e]">
              当社は、取得した個人情報を以下の目的のために利用します。
            </p>
            <ul className="list-disc space-y-1.5 pl-6 text-[#1a1a2e]">
              <li>お問い合わせへの回答・対応</li>
              <li>サービスのご提供・ご案内</li>
              <li>セミナー・イベント等のご案内</li>
              <li>サービス改善・新サービス開発のための統計的分析</li>
              <li>その他、上記に附随・関連する業務の遂行</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-[#1a1a2e]">
              3. 個人情報の第三者提供
            </h2>
            <p className="leading-relaxed text-[#1a1a2e]">
              当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-[#1a1a2e]">
              <li>法令に基づく場合</li>
              <li>
                人の生命・身体または財産の保護のために必要であり、お客様の同意を得ることが困難な場合
              </li>
              <li>
                国や地方公共団体等が公的な業務を遂行するうえで協力する必要がある場合
              </li>
              <li>
                業務委託先に対して業務遂行に必要な範囲で個人情報を提供する場合（委託先は適切な管理を義務付けます）
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-[#1a1a2e]">
              4. 個人情報の管理
            </h2>
            <p className="leading-relaxed text-[#1a1a2e]">
              当社は、個人情報の正確性・最新性を保つよう努め、情報の漏洩・滅失・毀損を防止するため、適切なセキュリティ対策を実施します。個人情報の取り扱いを外部に委託する場合は、委託先を適切に選定し、安全管理について契約等で定めます。不要となった個人情報は、安全な方法で速やかに廃棄・削除します。
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-[#1a1a2e]">
              5. お問い合わせ窓口
            </h2>
            <p className="mb-4 leading-relaxed text-[#1a1a2e]">
              個人情報の開示・訂正・削除・利用停止のご請求、またはプライバシーポリシーに関するお問い合わせは、以下の窓口までご連絡ください。
            </p>
            <div className="rounded-lg border border-[#e2e8f0] bg-[#f1f5f9] px-6 py-5 text-[#1a1a2e]">
              <p className="font-semibold">株式会社b-jam</p>
              <p className="mt-1">代表取締役 今井雄大</p>
              <p className="mt-3">
                メール：
                <a
                  href="mailto:info@b-jam.co.jp"
                  className="text-[#2563eb] underline hover:text-[#1d4ed8]"
                >
                  info@b-jam.co.jp
                </a>
              </p>
            </div>
          </section>
        </div>

        <p className="mt-12 text-sm text-[#64748b]">
          制定日：2024年1月22日
          <br />
          最終改定日：2026年4月1日
        </p>
      </div>
    </main>
  );
}
