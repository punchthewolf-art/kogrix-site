"use client";
import { motion } from "framer-motion";

const steps = [
  {
    n: "1",
    title: "Réservation",
    duration: "5 min",
    desc: "Vous choisissez un créneau de 90 minutes dans notre agenda en ligne.",
    icon: "📅",
  },
  {
    n: "2",
    title: "Audit 360°",
    duration: "90 min — gratuit",
    desc: "En visio ou en présentiel (Normandie). On parcourt les 4 dimensions de votre activité.",
    icon: "🎯",
  },
  {
    n: "3",
    title: "Plan personnalisé",
    duration: "Livré J+2",
    desc: "Vous recevez un compte-rendu PDF de 8 à 12 pages avec recommandations priorisées.",
    icon: "📄",
  },
  {
    n: "4",
    title: "Mise en œuvre",
    duration: "À votre rythme",
    desc: "Vous choisissez les solutions à activer ; nous coordonnons nos partenaires de confiance.",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-kogrix-400 text-sm font-bold uppercase tracking-wider mb-3">Comment ça marche</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            4 étapes,{" "}
            <span className="text-gradient">zéro pression.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            De la prise de contact à la mise en œuvre, un process clair et sans engagement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-kogrix-400/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-dark-800/50 border border-white/10 rounded-2xl p-6 hover:border-kogrix-400/40 transition-all"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 left-6 w-10 h-10 bg-kogrix-400 text-dark-900 rounded-full flex items-center justify-center font-black text-lg shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                {step.n}
              </div>

              <div className="text-3xl mt-4 mb-3">{step.icon}</div>
              <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
              <p className="text-xs text-kogrix-400 uppercase tracking-wider font-semibold mb-3">
                {step.duration}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
