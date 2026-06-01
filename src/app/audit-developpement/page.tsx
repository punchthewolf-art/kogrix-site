import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuditHero from "./components/AuditHero";
import WhyUnique from "./components/WhyUnique";
import FourDimensions from "./components/FourDimensions";
import HowItWorks from "./components/HowItWorks";
import Partners from "./components/Partners";
import Guarantees from "./components/Guarantees";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";

export const metadata: Metadata = {
  title: "Audit Développement & Transition gratuit pour PME — IA, gestion, énergie | Kogrix",
  description: "Un seul interlocuteur pour développer votre PME. Audit 360° gratuit de 90 minutes : IA, gestion, énergie, transition. Solutions sélectionnées, opérées par nos partenaires de confiance.",
  keywords: "audit PME gratuit, conseil IA, courtage énergie, photovoltaïque entreprise, bornes IRVE, transition numérique, transition énergétique, partenaire développement PME",
};

export default function AuditDeveloppementPage() {
  return (
    <>
      <Header />
      <main>
        <AuditHero />
        <WhyUnique />
        <FourDimensions />
        <HowItWorks />
        <Partners />
        <Guarantees />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
