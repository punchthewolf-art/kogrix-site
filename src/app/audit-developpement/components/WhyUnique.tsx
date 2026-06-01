"use client";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🎯",
    title: "Un seul contact, 4 dimensions",
    desc: "Vous parlez à un seul humain pour l'IA, la gestion, l'énergie, les équipements. Plus de 5 prestataires à coordonner.",
  },
  {
    icon: "⏱",
    title: "Vous gagnez du temps",
    desc: "Un audit, un plan, une mise en œuvre coordonnée. Pas de devis multiples, pas de relances éparpillées.",
  },
  {
    icon: "💰",
    title: "Vous gagnez de l'argent",
    desc: "Tarifs négociés, économies énergétiques, outils optimisés. Notre rémunération est alignée avec votre intérêt.",
  },
];

export default function WhyUnique() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-kogrix-400 text-sm font-bold uppercase tracking-wider mb-3">Pourquoi Kogrix</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Pourquoi un{" "}
            <span className="text-gradient">partenaire unique</span>{" "}?
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Le développement d&apos;une PME mobilise IA, gestion, énergie et équipements. Avec Kogrix, vous traitez tout ça en une seule conversation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-dark-800/50 border border-white/10 rounded-2xl p-8 hover:border-kogrix-400/40 transition-all"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
