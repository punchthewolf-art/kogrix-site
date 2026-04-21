import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Diagnostic from "@/components/Diagnostic";
import Sectors from "@/components/Sectors";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Diagnostic />
        <Sectors />
        <Pricing />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
