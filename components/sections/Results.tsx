import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { value: "200+", label: "プロジェクト支援実績" },
  { value: "3回", label: "0→1プロダクト立ち上げ" },
  { value: "23→781件", label: "AIによるアイデア拡張" },
  { value: "2メディア", label: "BizZine・ProductZine連載" },
];

const cases = [
  {
    client: "データインフラ企業",
    description:
      "AIで初期23件のアイデアを781件に拡張、7軸自動評点で意思決定を加速",
  },
  {
    client: "自社業務",
    description:
      "HubSpot連動の営業・マーケ4パイプライン自動化を構築・運用",
  },
  {
    client: "大手企業",
    description:
      "AI活用型新規事業開発プロセスの設計・ファシリテーション",
  },
];

export default function Results() {
  return (
    <section id="results" className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading title="実績" />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <Card key={item.client} hoverShadow>
              <p className="text-sm font-semibold text-primary mb-2">
                {item.client}
              </p>
              <p className="text-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
