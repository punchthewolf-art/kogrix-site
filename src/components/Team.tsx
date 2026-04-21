"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const expertise = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Diagnostic & Strategie",
    desc: "Audit de vos processus, identification des opportunites IA, estimation ROI. Methodologie proprietaire testee sur des dizaines de PME.",
    tools: ["Cartographie processus", "Scoring maturite IA", "Benchmark sectoriel", "Plan d'action chiffre"],
    color: "from-kogrix-400 to-emerald-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Automatisation & Workflows",
    desc: "Deploiement de workflows intelligents qui automatisent vos taches repetitives : emails, factures, relances, rapports.",
    tools: ["n8n (self-hosted)", "APIs IA (Claude, GPT, Mistral)", "70+ connecteurs", "Monitoring 24/7"],
    color: "from-accent-cyan to-blue-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: "Chatbots & Agents IA",
    desc: "Assistants IA personnalises, entraines sur vos donnees, deployes sur vos canaux (site web, WhatsApp, Telegram).",
    tools: ["Multi-canal", "Entrainement sur vos donnees", "Analytics integre", "Escalade humaine"],
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Conformite & Securite",
    desc: "Respect du RGPD, du secret professionnel et des normes sectorielles. Hebergement souverain, donnees chiffrees.",
    tools: ["RGPD natif", "Hebergement France", "Chiffrement AES-256", "AI Act conforme"],
    color: "from-purple-400 to-indigo-500",
  },
];

export default function Team() {
  return (
    <section id="equipe" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-kogrix-400 text-sm font-semibold tracking-widest uppercase">
            Notre Expertise
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Une equipe.{" "}
            <span className="text-gradient">Quatre expertises.</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Chez Kogrix, chaque projet mobilise un ecosysteme complet : strategie humaine, outils IA de pointe, et methodologies eprouvees.
          </p>
        </motion.div>

        {/* Founder card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-10"
        >
          <div className="relative rounded-2xl border border-kogrix-400/20 bg-dark-800/60 backdrop-blur-sm p-8 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-kogrix-400 to-accent-cyan flex items-center justify-center text-white text-3xl font-bold shadow-lg flex-shrink-0">
                B
              </div>
              <div className="text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-white font-bold text-xl">Benjamin Schindler</h3>
                  <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-kogrix-400/20 text-kogrix-400">
                    Fondateur
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Trilingue FR/EN/DE, expert en IA appliquee et automatisation. Benjamin pilote la strategie de Kogrix et supervise chaque projet pour garantir des resultats concrets et mesurables. Plus de 10 ans dans le conseil tech et la creation de solutions numeriques.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {["Strategie IA", "Architecture solutions", "Gestion de projet", "Trilingue FR/EN/DE"].map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-kogrix-400/10 text-kogrix-400 border border-kogrix-400/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expertise grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: i * 0.1 },
                },
              }}
              className="relative rounded-2xl border border-white/10 bg-dark-800/60 backdrop-blur-sm p-6 hover:border-kogrix-400/20 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-0.5 rounded-md bg-dark-700 text-gray-300 border border-white/5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "24/7", label: "Disponibilite des systemes" },
            { value: "70+", label: "Connecteurs & integrations" },
            { value: "RGPD", label: "Conformite native" },
            { value: "100%", label: "Hebergement souverain" },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-dark-800/30 border border-white/5 rounded-xl py-4 px-3">
              <div className="text-2xl font-bold text-kogrix-400">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
