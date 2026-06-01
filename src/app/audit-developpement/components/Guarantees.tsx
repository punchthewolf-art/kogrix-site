"use client";
import { motion } from "framer-motion";

const guarantees = [
  {
    icon: "🛡",
    title: "Indépendance du conseil",
    desc: "Nous ne recommandons jamais une solution qui ne sert pas votre intérêt, même si elle nous rapporte plus.",
  },
  {
    icon: "🔍",
    title: "Transparence totale",
    desc: "Nous vous indiquons systématiquement quand nous sommes rémunérés par un partenaire et selon quelles modalités.",
  },
  {
    icon: "🤝",
    title: "Un interlocuteur unique",
    desc: "Vous parlez à un seul humain : Benjamin Schindler. Pas de standard, pas de tickets perdus, pas de relances dans le vide.",
  },
];

export default function Guarantees() {
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
          <p className="text-kogrix-400 text-sm font-bold uppercase tracking-wider mb-3">Nos engagements</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Trois{" "}
            <span className="text-gradient">garanties</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Une éthique simple, écrite noir sur blanc.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-gradient-to-br from-kogrix-400/10 to-dark-800/50 border border-kogrix-400/20 rounded-2xl p-8 hover:border-kogrix-400/40 transition-all"
            >
              <div className="text-5xl mb-4">{g.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{g.title}</h3>
              <p className="text-gray-400 leading-relaxed">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
