"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  {
    icon: "⚡",
    title: "Énergie",
    desc: "Courtage électricité et gaz pour réduire votre facture annuelle de 10 à 25 %.",
    partners: ["Opéra Énergie", "NEO Énergie", "Optima Énergie"],
    color: "from-yellow-400/15 to-amber-500/5",
    border: "border-yellow-400/30",
    cible: "Hôtels-spa, restaurants groupes, entrepôts, ateliers industriels, imprimeries, boulangeries",
    benefit: "Pas d'avance · Pas de changement de fournisseur, juste meilleur tarif négocié",
  },
  {
    icon: "☀️",
    title: "Photovoltaïque toiture",
    desc: "Installation de panneaux solaires en autoconsommation + revente surplus. ROI typique 3-7 ans.",
    partners: ["Apex Énergies", "Générale du Solaire", "Urbasolar"],
    color: "from-orange-400/15 to-red-500/5",
    border: "border-orange-400/30",
    cible: "Toitures > 1 500 m² : entrepôts, hangars agricoles, centres équestres, clubs sport, concessions",
    benefit: "Tiers-investissement possible (zéro avance) · Anticipation obligations PPE 2026-2028",
  },
  {
    icon: "🔌",
    title: "Bornes de recharge IRVE",
    desc: "Installation de bornes pour véhicules électriques. Aide IRVE jusqu'à 2 700 €/borne.",
    partners: ["ALMB · Louer Ma Borne", "ZeBorne"],
    color: "from-blue-400/15 to-cyan-500/5",
    border: "border-blue-400/30",
    cible: "Établissements avec parking : hôtels, restaurants, châteaux, cabinets médicaux, notaires, concessions",
    benefit: "Argument commercial pour clientèle EV · Aide IRVE applicable · 7 à 22 kW selon usage",
  },
  {
    icon: "💼",
    title: "SaaS B2B",
    desc: "Sélection des meilleurs outils pour piloter votre entreprise au quotidien.",
    partners: ["Qonto (banque pro)", "Pennylane (compta)", "Aircall (téléphonie)", "Pipedrive (CRM)"],
    color: "from-purple-400/15 to-violet-500/5",
    border: "border-purple-400/30",
    cible: "Toute PME / TPE / indépendant",
    benefit: "Bonus de bienvenue côté client (ex : Qonto = 160 €) · Tarifs préférentiels · Intégrations natives",
  },
];

const steps = [
  { n: "1", title: "Audit gratuit 90 min", desc: "On identifie ensemble vos besoins réels parmi les 4 dimensions." },
  { n: "2", title: "Recommandation neutre", desc: "Nous vous présentons les 1-2 meilleurs partenaires pour votre cas, avec leurs forces et limites." },
  { n: "3", title: "Mise en relation directe", desc: "Vous parlez directement avec le partenaire. Pas d'intermédiation contractuelle." },
  { n: "4", title: "Vous signez avec le partenaire", desc: "Au tarif négocié via notre partenariat. Vous restez seul maître du contrat." },
];

export default function IntegrationPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,43,36,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(18,43,36,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-kogrix-400/10 rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 text-sm font-semibold mb-6"
              >
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                BRANCHE INTÉGRATION · ÉCOSYSTÈME PARTENAIRES
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Au-delà du conseil :{" "}
                <span className="text-gradient">les bonnes solutions</span>{" "}au bon moment.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed"
              >
                Énergie, photovoltaïque, bornes IRVE, SaaS B2B — Kogrix a sélectionné les meilleurs partenaires français pour vous. Nous vous mettons en relation, vous signez directement avec eux, au tarif négocié.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a href="/audit-developpement#cta-final" className="inline-flex items-center justify-center px-8 py-4 bg-kogrix-400 text-dark-900 font-bold text-lg rounded-xl hover:bg-kogrix-300 transition-all glow-green glow-green-hover">
                  Audit gratuit pour identifier vos besoins
                </a>
                <a href="#categories" className="inline-flex items-center justify-center px-8 py-4 border border-kogrix-400/30 text-kogrix-400 font-semibold rounded-xl hover:bg-kogrix-400/10 transition-all">
                  Voir les 4 catégories
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {categories.map((cat, i) => (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className={`bg-gradient-to-br ${cat.color} backdrop-blur-sm border ${cat.border} rounded-2xl p-5 hover:border-kogrix-400/40 transition-colors`}
                  >
                    <div className="text-3xl mb-2">{cat.icon}</div>
                    <div className="text-white font-semibold text-xs">{cat.title}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* MODÈLE TRANSPARENT — DISCLAIMER ÉTHIQUE */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-400/10 to-orange-500/5 border-l-4 border-amber-400 rounded-2xl p-8"
            >
              <p className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-3">
                ⚖️ Notre modèle : apport d&apos;affaires transparent
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                Vous signez avec le partenaire. Nous touchons une commission. Vous payez le même prix.
              </h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Kogrix ne signe pas de contrat marque blanche sur les volets énergie, photovoltaïque et bornes IRVE. <strong className="text-white">Vous signez directement avec le partenaire</strong> que nous vous présentons. C&apos;est plus sain : vous restez maître de votre contrat, et nous restons libres de vous orienter vers le bon acteur, même si la commission est moindre.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Notre rémunération vient des partenaires (commission d&apos;apport), <strong className="text-white">pas de vous</strong>. Le tarif que vous payez est celui négocié dans le cadre de notre partenariat — souvent meilleur que le tarif public.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CATÉGORIES DÉTAILLÉES */}
        <section id="categories" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <p className="text-kogrix-400 text-sm font-bold uppercase tracking-wider mb-3">L&apos;écosystème Kogrix</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                4 catégories de{" "}
                <span className="text-gradient">solutions partenaires</span>
              </h2>
              <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
                Sélectionnées pour leur sérieux, leur ancrage français, leur capacité à servir les PME.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-gradient-to-br ${cat.color} backdrop-blur-sm border ${cat.border} rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{cat.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{cat.desc}</p>
                    </div>
                  </div>

                  <div className="mt-5 mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-kogrix-400 mb-2">Partenaires</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.partners.map((p) => (
                        <span key={p} className="text-xs bg-white/10 text-white px-3 py-1.5 rounded-full">{p}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-500 mb-1"><strong className="text-gray-400">Cible idéale :</strong></p>
                    <p className="text-sm text-gray-300 mb-3">{cat.cible}</p>
                    <p className="text-xs text-kogrix-400"><strong>✓</strong> {cat.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMENT ÇA MARCHE */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <p className="text-kogrix-400 text-sm font-bold uppercase tracking-wider mb-3">Comment ça marche</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                4 étapes,{" "}
                <span className="text-gradient">aucune intermédiation cachée</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
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
                  <div className="absolute -top-4 left-6 w-10 h-10 bg-kogrix-400 text-dark-900 rounded-full flex items-center justify-center font-black text-lg shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                    {step.n}
                  </div>
                  <h3 className="text-lg font-bold text-white mt-4 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-kogrix-400/10 rounded-full blur-[150px]" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Un audit pour{" "}
                <span className="text-gradient">savoir si c&apos;est pertinent</span>{" "}pour vous
              </h2>
              <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Pas de pression. On regarde ensemble si vos consommations énergétiques, votre toiture, votre parking ou votre stack d&apos;outils justifient un partenariat. Vous décidez après.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/audit-developpement#cta-final" className="inline-flex items-center justify-center px-10 py-5 bg-kogrix-400 text-dark-900 font-bold text-lg rounded-xl hover:bg-kogrix-300 transition-all glow-green glow-green-hover">
                  Réserver mon audit gratuit
                </a>
                <a href="/conseil-ia" className="inline-flex items-center justify-center px-10 py-5 border border-kogrix-400/30 text-kogrix-400 font-semibold rounded-xl hover:bg-kogrix-400/10 transition-all">
                  Voir le conseil IA
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
