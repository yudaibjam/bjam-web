import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const experiences = [
  "BizMake SaaS 企画・立ち上げ（200+プロジェクト支援）",
  "株式会社bridge マネージングディレクター",
  "BizZine・ProductZine 連載",
  "AI自動化パイプライン設計・構築",
];

export default function Profile() {
  return (
    <section className="bg-muted-light py-16 sm:py-24">
      <Container>
        <SectionHeading title="代表プロフィール" />

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Photo placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-br from-primary/10 to-muted-light border border-border flex items-center justify-center">
              <span className="text-4xl font-bold text-primary/40">YI</span>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground">今井 雄大</h3>
            <p className="text-muted mt-1">株式会社b-jam 代表取締役</p>

            <p className="mt-6 text-foreground leading-relaxed max-w-prose">
              ハードウェア設計からキャリアをスタートし、スタートアップ営業、SaaS事業の立ち上げ、新規事業コンサルティングと、テクノロジーとビジネスの両岸を渡り歩いてきました。直近では自らの業務をAIで自動化し、その経験を企業支援に活かしています。&ldquo;語るだけでなく、自分で作れる&rdquo;コンサルタントとして、御社のAI活用を伴走します。
            </p>

            <ul className="mt-6 space-y-2">
              {experiences.map((exp) => (
                <li key={exp} className="flex items-start gap-2 text-muted">
                  <span className="mt-1.5 shrink-0 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  {exp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
