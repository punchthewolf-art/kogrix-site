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
    period: "à 5 000 € + retainer mensuel",
    desc: "Déploiement complet de solutions IA",
    features: [
      "Diagnostic approfondi inclus",
      "Chatbot IA multi-canal personnalisé",
      "5-10 workflows automatisés",
      "Intégration à vos outils (CRM, compta...)",
      "Formation équipe (1 jour)",
      "Support & maintenance mensuel",
      "Dashboard analytics & ROI",
    ],
    cta: "Demander un devis",
    ctaLink: "#contact",
    popular: true,
    accent: false,
  },
  {
    name: "Directeur IA externe",
    price: "2 000",
    period: "à 4 000 €/mois",
    desc: "Un directeur IA dédié à temps partiel",
    features: [
      "Tout Implémentation inclus",
      "Stratégie IA sur mesure",
      "Veille techno & optimisation continue",
      "Comité pilotage bimensuel",
      "Reporting ROI mensuel",
      "Accès prioritaire nouvelles solutions",
      "Hotline directe",
    ],
    cta: "En savoir plus",
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

        {/* Formation option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-dark-800/30 border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-kogrix-300/10 flex items-center justify-center text-kogrix-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-semibold">Formation IA</h4>
              <p className="text-gray-400 text-sm">Ajoutez une formation pratique a n&apos;importe quelle offre. 1-2 jours, adaptée à votre secteur.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-kogrix-300 font-semibold whitespace-nowrap">Dès 1 500 €</span>
            <a href="#contact" className="px-5 py-2 border border-kogrix-300/30 text-kogrix-300 text-sm font-semibold rounded-lg hover:bg-kogrix-300/10 transition-all whitespace-nowrap">
              Ajouter
            </a>
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
