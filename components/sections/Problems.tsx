import { Monitor, HelpCircle, RefreshCw, Shield } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const problems = [
  {
    icon: Monitor,
    text: "Copilot・ChatGPTを契約したが、ほとんどの社員が使っていない",
  },
  {
    icon: HelpCircle,
    text: "AI活用のアイデアはあるが、どこから手をつければいいかわからない",
  },
  {
    icon: RefreshCw,
    text: "AIの研修をやったが、翌日から元通りに戻った",
  },
  {
    icon: Shield,
    text: "IT部門の制約が厳しく、使えるツールが限られている",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="bg-muted-light py-16 sm:py-24">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
          こんな課題、ありませんか？
          <span className="block h-1 mt-2 rounded-full bg-primary mx-auto w-24" aria-hidden="true" />
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.text} hoverShadow>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed">{item.text}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <p className="mt-12 text-center text-lg font-semibold text-primary">
          b-jamは、&ldquo;あなたの会社の環境で&rdquo; 業務を変えます。
        </p>
      </Container>
    </section>
  );
}
