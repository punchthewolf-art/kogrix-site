"use client";
import { motion } from "framer-motion";

const partnerCategories = [
  {
    title: "Énergie",
    desc: "Courtage électricité et gaz",
    partners: ["Opéra Énergie", "NEO Énergie", "Optima Énergie"],
  },
  {
    title: "Photovoltaïque",
    desc: "Panneaux solaires toiture",
    partners: ["Apex Énergies", "Générale du Solaire", "Urbasolar"],
  },
  {
    title: "Bornes IRVE",
    desc: "Recharge véhicules électriques",
    partners: ["ALMB · Louer Ma Borne", "ZeBorne"],
  },
  {
    title: "SaaS B2B",
    desc: "Outils de gestion",
    partners: ["Qonto", "Pennylane", "Aircall", "Pipedrive"],
  },
];

export default function Partners() {
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
          <p className="text-kogrix-400 text-sm font-bold uppercase tracking-wider mb-3">L&apos;écosystème Kogrix</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Nos{" "}
            <span className="text-gradient">partenaires</span>{" "}
            sélectionnés
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Nous travaillons uniquement avec des acteurs établis, vérifiés et alignés sur nos exigences de qualité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {partnerCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-800/50 border border-white/10 rounded-2xl p-6 hover:border-kogrix-400/40 transition-all"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-kogrix-400 mb-1">{cat.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{cat.desc}</p>
              <ul className="space-y-2">
                {cat.partners.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-200">
                    <span className="w-1.5 h-1.5 bg-kogrix-400 rounded-full" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer transparent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto bg-kogrix-400/5 border border-kogrix-400/20 rounded-xl p-5"
        >
          <p className="text-sm text-gray-400 leading-relaxed text-center">
            <span className="text-kogrix-400 font-semibold">Transparence totale</span> · Kogrix est partenaire de ces solutions et perçoit une commission lorsque vous les adoptez. Nous ne recommandons une solution que si elle correspond à un besoin identifié pendant l&apos;audit. La crédibilité de notre conseil prime sur toute autre considération.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
