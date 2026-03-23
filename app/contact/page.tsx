import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "AIの導入・活用でお悩みのことがあれば、お気軽にお問い合わせください。ご相談は無料です。",
};

export default function ContactPage() {
  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image src="/images/ロゴ.png" alt="b-jam" width={100} height={32} className="h-8 w-auto" priority />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-muted-light">
        <Container className="py-16 sm:py-24">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                お問い合わせ
              </h1>
              <p className="mt-4 text-muted">
                AIの導入・活用でお悩みのことがあれば、お気軽にご相談ください。
                <br className="hidden sm:block" />
                ご相談は無料です。営業電話はいたしません。
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-border p-6 sm:p-10">
              <ContactForm source="contact" variant="full" />
            </div>
          </div>
        </Container>
      </main>

      <footer className="bg-foreground text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-xs text-white/50">
            © 2026 株式会社b-jam All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
