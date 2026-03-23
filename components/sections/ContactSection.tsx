import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact-form" className="bg-white py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl mx-auto">
          <SectionHeading title="お問い合わせ" />
          <ContactForm source="hp" variant="full" />
        </div>
      </Container>
    </section>
  );
}
