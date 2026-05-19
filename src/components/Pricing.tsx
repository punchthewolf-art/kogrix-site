"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Diagnostic",
    price: "Gratuit",
    period: "45 min",
    desc: "Le test sans risque",
    features: [
      "Audit oral en visio",
      "3 axes IA chiffrés",
      "Compte-rendu PDF sous 24 h",
    ],
    cta: "Réserver",
    ctaLink: "#diagnostic",
    style: "ghost",
  },
  {
    name: "Découverte Express",
    price: "290 €",
    period: "Test ticket d'entrée",
    desc: "1 livrable IA concret en 2 jours, sans risque",
    features: [
      "1 chatbot simple OU 1 auto basique",
      "Doc PDF 2 pages",
      "15 j hotline email",
    ],
    cta: "Tester",
    ctaLink: "#contact",
    style: "outline",
    badge: "NOUVEAU",
  },
  {
    name: "Lancement",
    price: "690 €",
    period: "TPE / indépendants",
    desc: "Mise en place rapide d'un chatbot OU automatisation",
    features: [
      "1 chatbot complet OU 1 workflow",
      "Demi-journée formation",
      "30 j hotline WhatsApp",
    ],
    cta: "Choisir",
    ctaLink: "#contact",
    style: "outline",
  },
  {
    name: "Essentiel",
    price: "1 490 €",
    period: "PME 5-10 · ou 12 × 139 €",
    desc: "Chatbot + automatisation + prise en main. Le sweet spot.",
    features: [
      "Chatbot multi-canal site + WhatsApp",
      "1 automatisation workflow métier",
      "1/2 journée prise en main équipe",
      "60 j hotline WhatsApp",
    ],
    cta: "Choisir",
    ctaLink: "#contact",
    style: "popular",
    badge: "LE PLUS CHOISI",
  },
  {
    name: "Performance",
    price: "2 490 €",
    period: "PME 10-30 · ou 12 × 229 €",
    desc: "Mise en place complète multi-canal, équipes formées.",
    features: [
      "Chatbot avancé multi-canal",
      "2-3 automatisations + intégrations CRM/agenda",
      "Journée formation + 1/2 jour par équipe",
      "90 j hotline WhatsApp",
    ],
    cta: "Choisir",
    ctaLink: "#contact",
    style: "premium",
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
            Tarifs{" "}
            <span className="text-gradient">transparents</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Du test à 290 € au déploiement complet à 2 490 €. Tarifs fixes, livrables clairs, paiement étalé possible, satisfait ou remboursé.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative bg-dark-800/50 rounded-2xl p-6 border ${
                plan.style === "popular"
                  ? "border-kogrix-400/50 glow-green"
                  : plan.style === "premium"
                  ? "border-accent-cyan/30"
                  : plan.style === "outline"
                  ? "border-kogrix-400/20"
                  : "border-white/5"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-kogrix-400 text-dark-900 text-[10px] font-bold rounded-full uppercase tracking-wider whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-lg font-bold text-white">{plan.name}</h3>
              <p className="text-xs text-kogrix-400 uppercase tracking-wide mt-1">{plan.period}</p>
              <p className="text-gray-400 text-sm mt-3 mb-5 min-h-[40px]">{plan.desc}</p>

              <div className="mb-5">
                <span className={`text-3xl font-black ${plan.price === "Gratuit" ? "text-kogrix-400" : "text-white"}`}>
                  {plan.price}
                </span>
                {plan.price !== "Gratuit" && (
                  <span className="text-gray-500 text-xs ml-1">HT</span>
                )}
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-300">
                    <svg className="w-3.5 h-3.5 text-kogrix-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                className={`block w-full text-center py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  plan.style === "popular"
                    ? "bg-kogrix-400 text-dark-900 hover:bg-kogrix-300"
                    : "border border-kogrix-400/30 text-kogrix-400 hover:bg-kogrix-400/10"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Options Suivi + Formation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          <div className="bg-kogrix-400/5 border border-kogrix-400/20 rounded-xl p-4 text-center">
            <p className="text-xs text-kogrix-400 uppercase tracking-wider font-bold mb-1">Option · Suivi Mensuel</p>
            <p className="text-white font-bold text-lg">99 € ou 199 € <span className="text-gray-400 text-xs font-normal">HT/mois</span></p>
            <p className="text-gray-400 text-xs mt-1">Abonnements IA inclus · Sans engagement</p>
          </div>
          <div className="bg-accent-cyan/5 border border-accent-cyan/20 rounded-xl p-4 text-center">
            <p className="text-xs text-accent-cyan uppercase tracking-wider font-bold mb-1">Option · Formation à la carte</p>
            <p className="text-white font-bold text-lg">890 € <span className="text-gray-400 text-xs font-normal">HT/jour</span></p>
            <p className="text-gray-400 text-xs mt-1">5 personnes max · Sur site ou visio</p>
          </div>
        </motion.div>

        {/* Garantie remboursement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 bg-gradient-to-r from-kogrix-400/10 to-accent-cyan/10 border border-kogrix-400/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 max-w-4xl mx-auto"
        >
          <div className="w-14 h-14 rounded-xl bg-kogrix-400/20 flex items-center justify-center text-kogrix-400 flex-shrink-0">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold text-lg mb-1">Satisfait ou remboursé sur le 1<sup>er</sup> livrable</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Si le 1<sup>er</sup> livrable ne correspond pas au cahier des charges signé, remboursement intégral dans les 30 jours. Engagement écrit dans le contrat.
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
