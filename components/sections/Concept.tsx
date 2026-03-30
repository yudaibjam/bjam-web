import Image from "next/image";
import Container from "@/components/ui/Container";

const values = [
  { word: "belief", label: "信念", description: "クライアントの「やりたいこと」を信じて伴走する" },
  { word: "boost", label: "加速", description: "AIで業務のパフォーマンスを引き上げる" },
  { word: "bridge", label: "橋渡し", description: "ビジネスとテクノロジーの間を翻訳する" },
  { word: "buddy", label: "相棒", description: "ベンダーでも外注でもない、共に走るパートナー" },
  { word: "business", label: "事業", description: "すべてはビジネスの成果のために" },
];

export default function Concept() {
  return (
    <section className="relative overflow-hidden bg-muted-light py-16 sm:py-24">
      {/* Background logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="relative w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] opacity-[0.04]">
          <Image
            src="/images/ロゴ.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <Container className="relative z-10">
        {/* Tagline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center leading-tight">
          ビジネスをジャムろう
        </h2>

        {/* Sub text */}
        <p className="mt-6 text-lg text-muted text-center leading-relaxed max-w-2xl mx-auto">
          AIの進化が、ビジネスに新しいセッションの可能性をもたらした。
          <br className="hidden sm:inline" />
          今ある環境で最大限の効果を引き出すか。
          <br />
          新しいツールを加えて可能性を広げるか。
          <br className="hidden sm:inline" />
          答えは、御社のビジネスの中にある。
        </p>

        {/* b values */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {values.map((v) => (
            <div key={v.word} className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-primary">
                <span className="text-2xl sm:text-3xl">b</span>
                {v.word.slice(1)}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">{v.label}</p>
              <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <p className="mt-12 text-center text-lg sm:text-xl font-semibold text-foreground">
          <span className="text-primary">business</span>の成果のために、御社に最適な<span className="text-primary">jam</span>を。それが、<span className="font-bold text-primary">b-jam</span>。
        </p>
      </Container>
    </section>
  );
}
