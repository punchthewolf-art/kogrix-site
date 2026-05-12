"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Diagnostic IA",
    badge: "GRATUIT",
    desc: "On analyse vos processus en 45 minutes et on vous dit exactement où l'IA peut vous faire gagner du temps et de l'argent. Sans engagement.",
    price: "0 €",
    duration: "45 min · visio",
    features: [
      "Mini-questionnaire envoyé en amont",
      "Audit oral de vos irritants principaux",
      "Démo live adaptée à votre métier",
      "3 axes d'automatisation chiffrés (heures / euros)",
      "Compte-rendu PDF d'1 page sous 24 h",
    ],
    color: "kogrix-400",
    highlight: true,
    cta: "Réserver mon diagnostic",
    ctaTarget: "#diagnostic",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Pack Lancement IA",
    badge: "TPE",
    desc: "Pour les indépendants et TPE qui veulent tester l'IA avec un livrable concret. Mise en place rapide, sans gros engagement.",
    price: "990 € HT",
    duration: "Livraison 5 jours",
    features: [
      "1 chatbot simple OU 1 automatisation au choix",
      "Exemples : prise de réservations resto, FAQ artisan, devis auto",
      "Demi-journée formation incluse",
      "Documentation PDF 5 pages personnalisée",
      "30 jours de hotline WhatsApp incluse",
    ],
    color: "accent-lime",
    highlight: false,
    cta: "En savoir plus",
    ctaTarget: "#contact",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Pack Essentiel IA",
    badge: "LE PLUS CHOISI",
    desc: "Pour les PME 5 à 10 personnes. Le sweet spot tarif/valeur : chatbot complet + automatisation métier + prise en main rapide de l'équipe.",
    price: "1 990 € HT",
    duration: "Livraison 10 jours",
    features: [
      "Chatbot multi-canal (site + WhatsApp)",
      "1 automatisation workflow métier au choix",
      "Hôtel : sync résa Booking / Expedia / paniers abandonnés",
      "Resto : factures fournisseurs + commandes + avis",
      "Artisan : générateur devis IA + relances impayés",
      "Immo : scraping marché + rédaction annonces",
      "Prise en main équipe : 1/2 journée (formation rapide)",
      "60 jours de hotline WhatsApp incluse",
    ],
    color: "accent-cyan",
    highlight: true,
    cta: "Choisir Essentiel",
    ctaTarget: "#contact",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z M5 3v4M3 5h4M6 17v4m-2-2h4" />
      </svg>
    ),
    title: "Pack Performance IA",
    badge: "PME 10-30",
    desc: "Pour les PME structurées. Mise en place complète multi-canal, automatisations métier avancées, formation toutes équipes.",
    price: "3 500 € HT",
    duration: "Livraison 15 jours",
    features: [
      "Chatbot avancé multi-canal (site + WhatsApp + Messenger)",
      "2 à 3 automatisations workflows synchronisées",
      "Intégration à vos outils existants (CRM, agenda, compta)",
      "Journée formation complète + 1/2 jour par équipe",
      "Documentation utilisateur PDF 25 pages",
      "90 jours de hotline WhatsApp incluse",
    ],
    color: "kogrix-300",
    highlight: false,
    cta: "Demander un audit",
    ctaTarget: "#diagnostic",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Du diagnostic gratuit{" "}
            <span className="text-gradient">au pack qui vous correspond</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Quatre niveaux d&apos;accompagnement clairs, adaptés à la taille et au métier de votre entreprise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative bg-dark-800/50 border rounded-2xl p-8 hover:border-kogrix-400/30 transition-all duration-300 ${
                service.highlight
                  ? "border-kogrix-400/40 glow-green"
                  : "border-white/5"
              }`}
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      service.badge === "GRATUIT"
                        ? "bg-kogrix-400/20 text-kogrix-400"
                        : service.badge === "LE PLUS CHOISI"
                        ? "bg-accent-cyan/20 text-accent-cyan"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${service.color}/10 text-${service.color} mb-6`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-xs text-kogrix-400 mb-3 uppercase tracking-wide">{service.duration}</p>
              <p className="text-gray-400 mb-6">{service.desc}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-kogrix-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className={`font-bold ${service.highlight ? "text-kogrix-400 text-2xl" : "text-white text-xl"}`}>
                  {service.price}
                </span>
                <a
                  href={service.ctaTarget}
                  className="text-sm text-gray-400 hover:text-kogrix-400 transition-colors group-hover:translate-x-1 inline-flex items-center gap-1"
                >
                  {service.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-kogrix-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Options additionnelles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-dark-800/30 border border-kogrix-400/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-kogrix-400/20 text-kogrix-400">OPTION</span>
              <h4 className="text-white font-bold">Suivi Mensuel</h4>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Pour faire évoluer votre IA dans le temps. <b className="text-white">Abonnements IA (OpenAI / Claude) inclus.</b>
            </p>
            <ul className="text-sm text-gray-300 space-y-1 mb-4">
              <li>· Mise à jour mensuelle base de connaissance</li>
              <li>· Audit performance : heures économisées réelles</li>
              <li>· Hotline WhatsApp directe (réponse en moins de 2 h)</li>
              <li>· Veille des 3 nouveaux outils du mois</li>
              <li>· Abonnements IA pris en charge (~25 €/mois valeur)</li>
            </ul>
            <p className="text-kogrix-400 font-bold">
              140 € ou 290 € HT/mois<span className="text-gray-500 text-sm font-normal"> · selon volume</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">Sans engagement de durée · résiliable à tout moment</p>
          </div>

          <div className="bg-dark-800/30 border border-kogrix-400/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/10 text-gray-400">OPTION</span>
              <h4 className="text-white font-bold">Formation IA équipe</h4>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Vos équipes apprennent à utiliser l&apos;IA au quotidien. Sessions 100 % pratiques par métier. Résultats dès le lendemain.
            </p>
            <ul className="text-sm text-gray-300 space-y-1 mb-4">
              <li>· 1 jour formation sur site ou visio (jusqu&apos;à 10 personnes)</li>
              <li>· Prompts métier prêts à l&apos;emploi</li>
              <li>· RGPD et pièges à éviter</li>
              <li>· Support PDF 20 pages personnalisé</li>
            </ul>
            <p className="text-kogrix-400 font-bold">
              1 200 € HT/jour<span className="text-gray-500 text-sm font-normal"> · groupe jusqu&apos;à 10 pers.</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">Incluse dans le Pack Performance · disponible aussi à la carte</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
