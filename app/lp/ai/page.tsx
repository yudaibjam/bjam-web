import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI活用で業務を変える | 株式会社b-jam",
  description:
    "Copilot・ChatGPTを契約したけど業務は変わらない。b-jamは御社の環境でAI活用の仕組みを設計・構築し、定着まで伴走します。",
  robots: { index: false, follow: false },
};

export default function LpAiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Simple Header ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-white">
        <Container className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center">
            <Image src="/images/ロゴ.png" alt="b-jam" width={80} height={26} className="h-7 w-auto" />
          </Link>
          <Button as="a" href="#form" size="sm">
            無料で相談する
          </Button>
        </Container>
      </header>

      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-primary-light to-white py-16 md:py-24">
        <Container className="text-center">
          <h1 className="text-2xl font-bold leading-tight text-foreground md:text-4xl">
            AI活用で業務を変える。
            <br className="hidden sm:block" />
            導入しただけで終わっていませんか？
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted md:text-lg">
            Copilot、ChatGPT、Google AI...
            ツールはある。でも業務は変わっていない。その原因と解決策をお伝えします。
          </p>
          <div className="mt-8">
            <Button as="a" href="#form" size="lg" className="w-full sm:w-auto">
              無料で相談する（3分）
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-primary" />
              プロジェクト支援300件超
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-primary" />
              AI業務自動化の構築実績
            </span>
          </div>
        </Container>
      </section>

      {/* ── Problem ── */}
      <section className="py-16 md:py-20">
        <Container>
          <h2 className="text-center text-xl font-bold text-foreground md:text-2xl">
            こんな状況、心当たりありませんか？
          </h2>
          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {[
              "AIツールを契約したが、使っているのは一部の人だけ",
              "AI活用の成功事例を聞くが、自社にどう適用すればいいかわからない",
              "研修をやったが定着しなかった",
              "IT部門の制約で使えるツールが限られている",
              "AI導入のROIを経営層に説明できない",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Cause ── */}
      <section className="bg-muted-light py-16 md:py-20">
        <Container className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-foreground md:text-2xl">
            原因は&ldquo;ツール&rdquo;ではなく
            <br className="sm:hidden" />
            &ldquo;使い方の設計&rdquo;にあります。
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            ツールベンダーは操作を教える。SIerはシステムを入れる。でも&ldquo;御社の業務フローをどう変えるか&rdquo;を設計する人がいない。ここにギャップがあります。
          </p>
        </Container>
      </section>

      {/* ── Solution ── */}
      <section className="py-16 md:py-20">
        <Container>
          <h2 className="mx-auto max-w-2xl text-center text-xl font-bold text-foreground md:text-2xl">
            b-jamは、御社の環境で
            <br className="sm:hidden" />
            &ldquo;業務が変わる仕組み&rdquo;を作ります。
          </h2>
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "業務フロー分析 & AI適用マッピング",
              },
              {
                num: "02",
                title: "クイックウィン実装（2週間で最初の成果）",
              },
              {
                num: "03",
                title: "自走化支援（社員が自分で使える状態へ）",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <Badge variant="primary" className="text-base font-bold px-3 py-1">
                  {step.num}
                </Badge>
                <p className="mt-4 font-medium text-foreground">{step.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why b-jam ── */}
      <section className="bg-muted-light py-16 md:py-20">
        <Container>
          <h2 className="text-center text-xl font-bold text-foreground md:text-2xl">
            b-jamが選ばれる理由
          </h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {[
              "多数の業務をAI自動化してきた実績",
              "300+プロジェクトの課題パターン知識",
              "ツールを売らない環境非依存",
              "仕組みを作って納品する実装力",
            ].map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-lg bg-white p-5 shadow-sm"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium text-foreground">{point}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Results ── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto flex justify-center text-center">
            <div>
              <p className="text-5xl font-bold text-primary">300+</p>
              <p className="mt-2 text-base text-muted">プロジェクト支援実績</p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-6">
              <p className="text-sm font-medium text-primary">Case 1</p>
              <p className="mt-2 font-medium text-foreground">
                AIツール導入後の社内定着率を3倍に改善
              </p>
              <p className="mt-2 text-sm text-muted">
                全社展開が進まなかったAIツールの活用を、業務フロー分析と段階的導入設計で定着化。
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <p className="text-sm font-medium text-primary">Case 2</p>
              <p className="mt-2 font-medium text-foreground">
                AIを活用したアイデア創出支援で量と質を大幅に向上
              </p>
              <p className="mt-2 text-sm text-muted">
                AI活用によるアイデア創出プロセスを設計・ファシリテーションし、事業アイデアの量と質を向上。
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Founder ── */}
      <section className="bg-muted-light py-16 md:py-20">
        <Container className="mx-auto max-w-2xl text-center">
          <Image src="/images/代表.jpg" alt="今井雄大" width={80} height={80} className="mx-auto h-20 w-20 rounded-full object-cover" />
          <p className="mt-4 text-lg font-bold text-foreground">今井雄大</p>
          <p className="text-sm text-muted">株式会社b-jam 代表取締役</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            300件超のプロジェクト支援経験を持ち、自らの業務もAIで自動化。&ldquo;語るだけでなく、作れる&rdquo;コンサルタントとして企業のAI活用を支援。
          </p>
        </Container>
      </section>

      {/* ── CTA Form ── */}
      <section id="form" className="py-16 md:py-20">
        <Container className="mx-auto max-w-2xl">
          <h2 className="text-center text-xl font-bold text-foreground md:text-2xl">
            無料で相談する
          </h2>
          <p className="mt-3 text-center text-sm text-muted">
            以下のフォームにご記入ください。2営業日以内にご連絡いたします。
          </p>
          <div className="mt-8">
            <ContactForm source="lp-ai" variant="full" />
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-muted-light py-16 md:py-20">
        <Container className="mx-auto max-w-2xl">
          <h2 className="text-center text-xl font-bold text-foreground md:text-2xl">
            よくあるご質問
          </h2>
          <div className="mt-10 space-y-8">
            {[
              {
                q: "具体的にどんな支援をしてもらえますか？",
                a: "御社のAI環境のアセスメントから、業務フロー分析、施策設計・実装、社員への定着支援まで一貫して伴走します。",
              },
              {
                q: "費用はどれくらいですか？",
                a: "ヒアリング後にお見積りをお出しします。まずはお気軽にご相談ください。",
              },
              {
                q: "リモートで対応可能ですか？",
                a: "はい、基本的にオンラインでの対応が可能です。",
              },
            ].map((faq) => (
              <div key={faq.q}>
                <p className="font-medium text-foreground">Q. {faq.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  A. {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20">
        <Container className="text-center">
          <p className="text-xl font-bold text-foreground md:text-2xl">
            AIを&ldquo;使える&rdquo;に変える第一歩を。
          </p>
          <div className="mt-6">
            <Button as="a" href="#form" size="lg" className="w-full sm:w-auto">
              無料で相談する
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-8">
        <Container className="flex flex-col items-center gap-2 text-center text-xs text-muted sm:flex-row sm:justify-between">
          <p>&copy; 2026 株式会社b-jam</p>
          <Link href="/privacy" className="underline hover:text-primary">
            プライバシーポリシー
          </Link>
        </Container>
      </footer>

      {/* ── Sticky Mobile CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white p-3 md:hidden">
        <Button as="a" href="#form" size="lg" className="w-full">
          無料で相談する
        </Button>
      </div>
    </div>
  );
}
