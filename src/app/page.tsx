import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ApprocheKogrix from "@/components/ApprocheKogrix";
import Services from "@/components/Services";
import WorkflowExplained from "@/components/WorkflowExplained";
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
        <ApprocheKogrix />
        <Services />
        <WorkflowExplained />
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
