import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section id="contact" className="bg-primary py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            まずは30分の無料相談から
          </h2>
          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            AIの導入・活用でお悩みのことがあれば、お気軽にお問い合わせください。ご相談は無料です。営業電話はいたしません。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 px-8 py-4 text-lg bg-white text-primary hover:bg-white/90"
            >
              無料相談する
            </a>
            <a
              href="/diagnosis"
              className="inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 px-8 py-4 text-lg border-2 border-white text-white hover:bg-white/10"
            >
              AI活用診断を受ける
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
