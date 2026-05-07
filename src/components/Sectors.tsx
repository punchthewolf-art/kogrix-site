"use client";
import { motion } from "framer-motion";

const sectors = [
  {
    name: "Restaurants",
    icon: "🍽️",
    problems: ["Factures livraison non réconciliées", "Avis clients non traités", "Gaspillage alimentaire"],
    result: "1 134 €/mois d'économies",
    delay: 0,
  },
  {
    name: "Hôtels indépendants",
    icon: "🏨",
    problems: ["Réservations multi-canal à gérer", "Réponses aux questions clients", "Suivi des avis et e-réputation"],
    result: "10h/semaine récupérées",
    delay: 0.1,
  },
  {
    name: "Agences immobilières",
    icon: "🏠",
    problems: ["Leads non qualifiés", "Rédaction annonces répétitive", "Suivi clients manuel"],
    result: "10-15K €/an de CA en plus",
    delay: 0.2,
  },
  {
    name: "Artisans & TPE BTP",
    icon: "🛠️",
    problems: ["Devis qui prennent des heures", "Relances clients oubliées", "Planning chantiers à jongler"],
    result: "5h/semaine + 20% de devis signés",
    delay: 0.3,
  },
];

export default function Sectors() {
  return (
    <section id="secteurs" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Solutions par{" "}
            <span className="text-gradient">secteur</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Chaque métier a ses defis. On connait les votres.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sector.delay }}
              className="group bg-dark-800/50 border border-white/5 rounded-2xl p-6 hover:border-kogrix-400/30 transition-all"
            >
              <div className="text-4xl mb-4">{sector.icon}</div>
              <h3 className="text-lg font-bold text-white mb-4">{sector.name}</h3>

              <div className="space-y-2 mb-6">
                {sector.problems.map((p) => (
                  <div key={p} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-red-400 mt-0.5">&#x2715;</span>
                    {p}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-kogrix-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-kogrix-400 font-bold text-sm">{sector.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
