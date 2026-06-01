"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const routes = [
  {
    icon: "🎯",
    title: "Audit gratuit",
    subtitle: "Le point de départ",
    desc: "90 minutes en visio, 4 dimensions explorées, compte-rendu PDF sous 48 h. Sans engagement.",
    href: "/audit-developpement",
    cta: "Réserver mon audit",
    color: "from-kogrix-400/20 to-emerald-500/5",
    border: "border-kogrix-400/40",
  },
  {
    icon: "🤖",
    title: "Conseil IA",
    subtitle: "Notre cœur de métier",
    desc: "Chatbots, automatisations, analyse data, génération de contenu. Forfaits de 290 € à 2 490 €.",
    href: "/conseil-ia",
    cta: "Voir les forfaits",
    color: "from-accent-cyan/20 to-cyan-500/5",
    border: "border-accent-cyan/40",
  },
  {
    icon: "🤝",
    title: "Intégration partenaires",
    subtitle: "Au-delà du conseil",
    desc: "Énergie, photovoltaïque, bornes IRVE, SaaS B2B. Mise en relation directe, vous signez avec eux.",
    href: "/integration",
    cta: "Voir les partenaires",
    color: "from-amber-400/20 to-orange-500/5",
    border: "border-amber-400/40",
  },
];

export default function ApprocheKogrix() {
  return (
    <section id="approche" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-kogrix-400 text-sm font-bold uppercase tracking-wider mb-3">L&apos;approche Kogrix</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Un seul interlocuteur,{" "}
            <span className="text-gradient">trois portes d&apos;entrée</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Toutes mènent au même audit unifié. Vous choisissez le rythme et le périmètre.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {routes.map((route, i) => (
            <motion.div
              key={route.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className={`bg-gradient-to-br ${route.color} backdrop-blur-sm border ${route.border} rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all flex flex-col`}
            >
              <div className="text-5xl mb-4">{route.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-1">{route.title}</h3>
              <p className="text-xs text-kogrix-400 uppercase tracking-wider font-semibold mb-4">{route.subtitle}</p>
              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{route.desc}</p>
              <Link
                href={route.href}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-white/10 border border-kogrix-400/30 text-kogrix-400 font-semibold rounded-lg hover:bg-kogrix-400/10 hover:border-kogrix-400 transition-all group"
              >
                {route.cta}
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm italic">
            Kogrix est la marque commerciale de la SASU Pelegrinus (SIREN 948 908 348)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
