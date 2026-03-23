import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { value: "300+", label: "プロジェクト支援実績" },
];

const cases = [
  {
    client: "データインフラ企業",
    description:
      "AIを活用したアイデア創出プロセスの設計・ファシリテーションで、事業アイデアの量と質を大幅に向上",
  },
  {
    client: "自社業務",
    description:
      "HubSpot連動の営業・マーケ業務自動化の仕組みを構築・運用",
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

        {/* Stats */}
        <div className="flex justify-center mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl sm:text-6xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-3 text-base text-muted">{stat.label}</p>
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
