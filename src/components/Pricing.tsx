"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Diagnostic",
    price: "Gratuit",
    period: "",
    desc: "Découvrez le potentiel IA de votre entreprise",
    features: [
      "Audit flash 45 minutes",
      "Cartographie des processus",
      "Estimation ROI chiffrée",
      "Plan d'action prioritaire",
      "Sans engagement",
    ],
    cta: "Réserver mon diagnostic",
    ctaLink: "#diagnostic",
    popular: false,
    accent: false,
  },
  {
    name: "Implémentation",
    price: "3 500",
    period: "à 5 000 € + maintenance 290 €/mois",
    desc: "Déploiement complet de solutions IA",
    features: [
      "Diagnostic approfondi inclus",
      "Chatbot IA multi-canal personnalisé",
      "5 workflows automatisés (workflows additionnels : 600 € / unité)",
      "Intégration à vos outils (CRM, compta...)",
      "Formation équipe (1 jour incluse)",
      "Maintenance mensuelle 290 € : support, mises à jour, 1 ajustement / mois",
      "Dashboard analytics & ROI",
      "Garantie satisfait ou remboursé sur le 1er livrable",
    ],
    cta: "Demander un devis",
    ctaLink: "#contact",
    popular: true,
    accent: false,
  },
  {
    name: "Formation IA",
    price: "1 500",
    period: "à 3 000 € — 1 à 2 jours sur site ou en visio",
    desc: "Vos équipes maîtrisent l'IA en 48h chrono",
    features: [
      "Formation sur mesure adaptée à votre métier",
      "Ateliers pratiques avec vos vrais cas d'usage",
      "Prompting avancé : Claude, GPT, Mistral",
      "Outils d'automatisation no-code (n8n)",
      "Guide de bonnes pratiques personnalisé inclus",
      "Support 30 jours après la formation",
      "Compatible OPCO sur demande",
    ],
    cta: "Demander un devis",
    ctaLink: "#contact",
    popular: false,
    accent: true,
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Des prix{" "}
            <span className="text-gradient">transparents</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Diagnostic gratuit, implémentation à prix fixe, accompagnement mensuel. ROI mesurable dès le premier mois.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-dark-800/50 rounded-2xl p-8 border ${
                plan.popular
                  ? "border-kogrix-400/50 glow-green"
                  : plan.accent
                  ? "border-accent-cyan/30"
                  : "border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-kogrix-400 text-dark-900 text-xs font-bold rounded-full uppercase tracking-wider">
                  Recommandé
                </div>
              )}

              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="text-gray-400 text-sm mt-1 mb-6">{plan.desc}</p>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.price === "Gratuit" ? "text-kogrix-400" : "text-white"}`}>
                  {plan.price === "Gratuit" ? plan.price : `${plan.price} €`}
                </span>
                {plan.period && (
                  <span className="text-gray-400 text-sm ml-2">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-kogrix-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-kogrix-400 text-dark-900 hover:bg-kogrix-300 glow-green-hover"
                    : plan.accent
                    ? "border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10"
                    : "border border-kogrix-400/30 text-kogrix-400 hover:bg-kogrix-400/10"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Garantie remboursement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-kogrix-400/10 to-accent-cyan/10 border border-kogrix-400/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="w-14 h-14 rounded-xl bg-kogrix-400/20 flex items-center justify-center text-kogrix-400 flex-shrink-0">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold text-lg mb-1">Satisfait ou remboursé sur le 1<sup>er</sup> livrable</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Si le 1<sup>er</sup> livrable de votre Implémentation ne correspond pas au cahier des charges signé, nous vous remboursons intégralement dans les 30 jours suivant la livraison. Pas de discussion, pas de pénalité. Notre engagement écrit dans le contrat.
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          Besoin d&apos;une solution sur mesure ? <a href="#contact" className="text-kogrix-400 hover:underline">Contactez-nous</a> pour un devis personnalisé.
        </motion.p>
      </div>
    </section>
  );
}
