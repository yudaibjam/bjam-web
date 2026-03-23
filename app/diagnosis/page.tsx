import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import DiagnosisFlow from "@/components/DiagnosisFlow";

export const metadata: Metadata = {
  title: "無料AI活用診断",
  description:
    "5つの質問に答えるだけで、御社のAI活用の現在地と次のステップがわかります。",
};

export default function DiagnosisPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <header className="sticky top-0 z-50 border-b border-border bg-white">
        <Container className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/ロゴ.png"
              alt="b-jam"
              width={80}
              height={26}
              className="h-7 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-muted hover:text-primary transition-colors"
          >
            トップに戻る
          </Link>
        </Container>
      </header>

      <main>
        <Container className="py-12 sm:py-20">
          <DiagnosisFlow />
        </Container>
      </main>

      <footer className="border-t border-border py-8">
        <Container className="text-center text-xs text-muted">
          <p>&copy; 2026 株式会社b-jam</p>
        </Container>
      </footer>
    </div>
  );
}
