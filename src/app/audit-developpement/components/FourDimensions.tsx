"use client";
import { motion } from "framer-motion";

const dimensions = [
  {
    icon: "🤖",
    title: "IA & Data",
    subtitle: "Le cœur de notre métier",
    color: "from-kogrix-400/15 to-emerald-500/5",
    border: "border-kogrix-400/30",
    items: [
      "Tâches répétitives automatisables (factures, planning, devis)",
      "Chatbot client multi-canal (site, WhatsApp, email)",
      "Gestion des avis Google, Tripadvisor, Doctolib",
      "Génération de contenus marketing",
      "Analyse de données clients (segmentation, churn)",
    ],
  },
  {
    icon: "💼",
    title: "Gestion & Outils",
    subtitle: "Les bons SaaS pour votre activité",
    color: "from-accent-cyan/15 to-cyan-500/5",
    border: "border-accent-cyan/30",
    items: [
      "Compte pro adapté (Qonto, autres options)",
      "Compta automatisée (Pennylane, alternatives)",
      "Téléphonie cloud (Aircall, OVH Telecom)",
      "CRM commercial structuré (Pipedrive, HubSpot)",
      "Outils collaboratifs (Notion, Slack, Calendly)",
    ],
  },
  {
    icon: "⚡",
    title: "Énergie & Transition",
    subtitle: "Réduire vos factures, anticiper les obligations",
    color: "from-yellow-400/15 to-amber-500/5",
    border: "border-yellow-400/30",
    items: [
      "Courtage électricité et gaz (10-25 % d'économies)",
      "Photovoltaïque toiture en autoconsommation",
      "Bornes de recharge IRVE (aide jusqu'à 2 700 €/borne)",
      "Audit consommation et plan de réduction",
      "Conseil sur les obligations 2026-2028",
    ],
  },
  {
    icon: "🚀",
    title: "Équipements & Développement",
    subtitle: "Moderniser votre infrastructure",
    color: "from-purple-400/15 to-violet-500/5",
    border: "border-purple-400/30",
    items: [
      "Infrastructure tech (cloud, sécurité, sauvegardes)",
      "Outils sectoriels (POS resto, PMS hôtel, logiciel cabinet)",
      "Site web pro / refonte",
      "SEO local et Google My Business",
      "Présence digitale optimisée",
    ],
  },
];

export default function FourDimensions() {
  return (
    <section id="dimensions" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-kogrix-400 text-sm font-bold uppercase tracking-wider mb-3">L&apos;audit 360°</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Les{" "}
            <span className="text-gradient">4 dimensions</span>{" "}
            de l&apos;audit
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Pendant 90 minutes, nous explorons ensemble ces quatre axes — sans pression de vente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {dimensions.map((dim, i) => (
            <motion.div
              key={dim.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-br ${dim.color} backdrop-blur-sm border ${dim.border} rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{dim.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{dim.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{dim.subtitle}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {dim.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-kogrix-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
