import { GitBranch, Package, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: GitBranch,
    title: "AI業務変革コンサルティング",
    description:
      "御社の業務フローを分析し、AI活用施策を設計。2週間で最初の成果、3〜6ヶ月で自走できる状態へ。",
    badges: ["伴走型", "3〜6ヶ月", "環境非依存"],
  },
  {
    icon: Package,
    title: "AI自動化パッケージ",
    description:
      "営業・マーケ・レポート業務のAI自動化を、テンプレートで素早く導入。実績あるパイプラインを御社仕様にカスタマイズ。",
    badges: ["テンプレート型", "短期導入"],
  },
  {
    icon: Users,
    title: "AI活用研修・ワークショップ",
    description:
      "\u201c明日から使える\u201dがゴール。御社の実際の業務データを使った実践型プログラム。",
    badges: ["経営層向け", "現場向け", "半日〜2日"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="サービス"
          subtitle={`3つの柱で、AI活用を\u201c当たり前\u201dにします。`}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} hoverShadow>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.badges.map((badge) => (
                      <Badge key={badge} variant="primary">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
