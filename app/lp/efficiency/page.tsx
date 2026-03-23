import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "一番時間がかかる仕事、巻き取ります | 株式会社b-jam",
  description:
    "報告書作成、顧客リスト整理、提案資料のドラフト…時間がかかる業務を仕組みで解決。まずは30分の無料相談から。",
  robots: { index: false, follow: false },
};

export default function LpEfficiencyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Simple Header ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-white">
        <Container className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center">
            <Image src="/images/ロゴ.png" alt="b-jam" width={80} height={26} className="h-7 w-auto" />
          </Link>
          <Button as="a" href="#form" size="sm">
            無料相談を予約
          </Button>
        </Container>
      </header>

      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-primary-light to-white py-16 md:py-24">
        <Container className="text-center">
          <h1 className="text-2xl font-bold leading-tight text-foreground md:text-4xl">
            一番時間がかかっている仕事、
            <br className="hidden sm:block" />
            私が巻き取ります。
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted md:text-lg">
            報告書の作成、顧客リストの整理、提案資料のドラフト...
            &ldquo;やらなきゃいけないけど時間がかかる仕事&rdquo;を仕組みで解決します。
          </p>
          <div className="mt-8">
            <Button as="a" href="#form" size="lg" className="w-full sm:w-auto">
              無料相談を予約する（30分）
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Problem ── */}
      <section className="py-16 md:py-20">
        <Container>
          <h2 className="text-center text-xl font-bold text-foreground md:text-2xl">
            こんな仕事に時間を取られていませんか？
          </h2>
          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {[
              "毎週のレポート作成に半日かかっている",
              "顧客リストの整理・スコアリングを手作業でやっている",
              "提案書のドラフトを毎回ゼロから書いている",
              "情報収集に時間をかけているが、精度に自信がない",
              "やるべき仕事はわかっているが、手を動かす時間がない",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Value Proposition ── */}
      <section className="bg-muted-light py-16 md:py-20">
        <Container className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-foreground md:text-2xl">
            業務の&ldquo;仕組み化&rdquo;で、
            <br className="sm:hidden" />
            あなたの時間を取り戻します。
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            &ldquo;コンサルタントが来て終わり&rdquo;ではありません。動く仕組みを作って、あなたにお渡しします。
          </p>
        </Container>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto grid max-w-3xl gap-10 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "まずはお話を聞かせてください",
                desc: "30分のヒアリングで業務の棚卸し",
              },
              {
                num: "02",
                title: "時間がかかっている業務を分析します",
                desc: "どの業務を仕組み化すればインパクトが大きいかマッピング",
              },
              {
                num: "03",
                title: "動く仕組みを作って、お渡しします",
                desc: "2週間で最初の仕組みが動き始める",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <Badge variant="primary" className="text-base font-bold px-3 py-1">
                  {step.num}
                </Badge>
                <p className="mt-4 font-medium text-foreground">{step.title}</p>
                <p className="mt-2 text-sm text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Before / After ── */}
      <section className="bg-muted-light py-16 md:py-20">
        <Container>
          <h2 className="text-center text-xl font-bold text-foreground md:text-2xl">
            導入事例：時間の変化
          </h2>
          <div className="mx-auto mt-10 max-w-2xl space-y-6">
            {[
              {
                task: "顧客リスト整理",
                before: "週5時間",
                after: "週30分",
              },
              {
                task: "報告書作成",
                before: "毎回3時間",
                after: "毎回30分",
              },
              {
                task: "企業調査",
                before: "1社2時間",
                after: "1社15分",
              },
            ].map((item) => (
              <div
                key={item.task}
                className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-sm"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {item.task}
                  </p>
                  <p className="mt-1 text-lg font-bold text-muted line-through decoration-red-400">
                    {item.before}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-primary" />
                <div className="flex-1 text-right">
                  <p className="text-lg font-bold text-primary">{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Founder ── */}
      <section className="py-16 md:py-20">
        <Container className="mx-auto max-w-2xl text-center">
          <Image src="/images/代表.jpg" alt="今井雄大" width={80} height={80} className="mx-auto h-20 w-20 rounded-full object-cover" />
          <p className="mt-4 text-lg font-bold text-foreground">今井雄大</p>
          <p className="text-sm text-muted">株式会社b-jam 代表取締役</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            300件超のプロジェクトで企業の業務課題を見てきました。&ldquo;仕組みで解決する&rdquo;を信条に、あなたの時間を取り戻すお手伝いをします。
          </p>
        </Container>
      </section>

      {/* ── CTA Form ── */}
      <section id="form" className="bg-muted-light py-16 md:py-20">
        <Container className="mx-auto max-w-2xl">
          <h2 className="text-center text-xl font-bold text-foreground md:text-2xl">
            まずは30分、お話しませんか？
          </h2>
          <p className="mt-3 text-center text-sm text-muted">
            以下のフォームにご記入ください。2営業日以内にご連絡いたします。
          </p>
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-border p-6 sm:p-10">
            <ContactForm source="lp-efficiency" variant="simple" />
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20">
        <Container className="mx-auto max-w-2xl">
          <h2 className="text-center text-xl font-bold text-foreground md:text-2xl">
            よくあるご質問
          </h2>
          <div className="mt-10 space-y-8">
            {[
              {
                q: "具体的にどんな仕組みを作ってもらえますか？",
                a: "顧客リストの自動整理、報告書の自動生成、企業調査の効率化など、御社の業務に合わせた仕組みを設計・構築します。",
              },
              {
                q: "ITに詳しくなくても大丈夫ですか？",
                a: "もちろんです。ITの知識は不要です。使い方は丁寧にお伝えします。",
              },
              {
                q: "費用はどれくらいですか？",
                a: "ヒアリング後にお見積りをお出しします。まずはお気軽にご相談ください。",
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
      <section className="bg-muted-light py-16 md:py-20">
        <Container className="text-center">
          <p className="text-xl font-bold text-foreground md:text-2xl">
            &ldquo;忙しい&rdquo;を仕組みで解決する。
            <br className="sm:hidden" />
            まずはご相談ください。
          </p>
          <div className="mt-6">
            <Button as="a" href="#form" size="lg" className="w-full sm:w-auto">
              無料相談を予約する
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
          無料相談を予約する
        </Button>
      </div>
    </div>
  );
}
