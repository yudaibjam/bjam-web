import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "無料相談・ヒアリング",
    description: "30分のオンライン相談で、御社の状況をお聞かせください。",
  },
  {
    number: "02",
    title: "AI環境アセスメント",
    description:
      "利用可能なツールと業務フローを分析し、AI適用ポイントを特定。",
  },
  {
    number: "03",
    title: "クイックウィン実装",
    description:
      "2週間以内に\u201cこれが変わった\u201dと実感できる成果を出します。",
  },
  {
    number: "04",
    title: "本格導入・自走化支援",
    description:
      "仕組みを構築し、社員が自分で使える状態にして卒業。",
  },
];

export default function Flow() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading title="ご利用の流れ" />

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center md:text-left">
              {/* Connector line (hidden on mobile, shown on md+) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border"
                  aria-hidden="true"
                />
              )}

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-lg font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
