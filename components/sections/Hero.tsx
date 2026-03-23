import { Briefcase, Zap, FileText } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              AIを&ldquo;使える&rdquo;に変える。
              <br />
              業務が変わる。
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-prose">
              ツールは導入した。でも業務は変わっていない——そんな企業に、実装から定着まで伴走します。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="a" href="#contact" variant="primary" size="lg">
                無料AI活用診断を受ける
              </Button>
              <Button as="a" href="#services" variant="secondary" size="lg">
                サービスを見る
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted">
              <span className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                プロジェクト支援 200件超
              </span>
              <span className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                AI自動化パイプライン構築実績
              </span>
              <span className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                BizZine・ProductZine 連載
              </span>
            </div>
          </div>

          {/* Decorative element */}
          <div className="hidden md:flex items-center justify-center" aria-hidden="true">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-primary/30 to-accent/20 blur-xl" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary-light to-white border border-border" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
