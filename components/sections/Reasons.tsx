import { Wrench, Target, Globe, Hammer } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Wrench,
    title: "多数の業務をAIで自動化してきた実績がある",
    description:
      "口だけではありません。代表自身が営業・マーケティング・コンサルワーク・バックオフィスなど、多岐にわたる業務のAI自動化の仕組みを設計・構築してきました。",
  },
  {
    icon: Target,
    title: "300件超のプロジェクトで\u201cつまずきパターン\u201dを知っている",
    description:
      "なぜ社員がAIを使わないのか。その構造的原因を知った上で施策を設計します。",
  },
  {
    icon: Globe,
    title: "ツールを売らない。御社の環境で最適解を設計する",
    description:
      "Copilotだけ？Google Workspaceだけ？制約がある環境こそ腕の見せどころです。",
  },
  {
    icon: Hammer,
    title: "語るだけでなく、仕組みを作って納品する",
    description:
      "最短数日で業務自動化の仕組みや試作品を構築。\u201cコンサルが帰った後、何も残らない\u201dは起きません。",
  },
];

export default function Reasons() {
  return (
    <section id="reasons" className="bg-muted-light py-16 sm:py-24">
      <Container>
        <SectionHeading title="b-jamが選ばれる理由" />

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
