import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Concept from "@/components/sections/Concept";
import Problems from "@/components/sections/Problems";
import Services from "@/components/sections/Services";
import Reasons from "@/components/sections/Reasons";
import Results from "@/components/sections/Results";
import Profile from "@/components/sections/Profile";
import Flow from "@/components/sections/Flow";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Problems />
        <Services />
        <Reasons />
        <Results />
        <Profile />
        <Flow />
        <FAQ />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
