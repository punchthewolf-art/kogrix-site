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
    features: [
      "Audit flash de vos processus (45 min)",
      "Cartographie des taches automatisables",
      "Estimation ROI chiffrée",
      "Plan d'action prioritaire",
    ],
    color: "kogrix-400",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Implémentation IA",
    badge: null,
    desc: "On déploie les solutions IA adaptées à votre métier : chatbots, automatisation, agents intelligents. Clé en main, résultats mesurables.",
    price: "3 500 - 5 000 € + retainer",
    features: [
      "Chatbot IA personnalisé multi-canal",
      "5-10 workflows automatisés (n8n)",
      "Intégration à vos outils existants",
      "Formation équipe incluse",
      "Support & maintenance mensuel",
    ],
    color: "accent-cyan",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Maintenance & support",
    badge: "INCLUS",
    desc: "Support, mises à jour et ajustements de vos automatisations sur la durée. Inclus avec l'Implémentation, sans engagement long terme.",
    price: "290 €/mois",
    features: [
      "Support email/téléphone 5j/7 sous 24h",
      "Mises à jour des modèles IA et connecteurs",
      "1 ajustement de workflow inclus par mois",
      "Audit trimestriel performance + ROI",
      "Sauvegarde quotidienne de vos configurations",
      "Documentation technique tenue à jour",
    ],
    color: "accent-lime",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Formation IA",
    badge: "OPTION",
    desc: "Vos équipes apprennent a utiliser l'IA au quotidien. Ateliers 100% pratiques, adaptés à votre secteur. Résultats dès le lendemain.",
    price: "Dès 1 500 €",
    features: [
      "Formation sur mesure (1 à 2 jours)",
      "Ateliers pratiques par métier",
      "Prompting avancé & outils IA",
      "Guide de bonnes pratiques inclus",
    ],
    color: "kogrix-300",
    highlight: false,
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
            3 services pour{" "}
            <span className="text-gradient">transformer votre PME</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Du diagnostic gratuit a l&apos;accompagnement stratégique, on vous guide à chaque étape de votre transition IA.
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
                        : service.badge === "POPULAIRE"
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

              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.desc}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-kogrix-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="flex items-center justify-between">
                <span className={`font-semibold ${service.highlight ? "text-kogrix-400 text-lg" : "text-kogrix-400"}`}>
                  {service.price}
                </span>
                <a href={service.highlight ? "#diagnostic" : "#contact"} className="text-sm text-gray-400 hover:text-kogrix-400 transition-colors group-hover:translate-x-1 inline-flex items-center gap-1">
                  {service.highlight ? "Tester maintenant" : "En savoir plus"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-kogrix-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
