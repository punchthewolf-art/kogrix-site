"use client";
import type { Metadata } from "next";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: "💬",
    title: "Chatbots multi-canal",
    desc: "Site web, WhatsApp, Messenger, Instagram — un seul assistant IA qui répond 24h/24 aux questions clients (horaires, disponibilités, parking, allergènes, FAQ).",
    cases: ["Réservation auto", "Pré-qualification leads", "Service après-vente"],
  },
  {
    icon: "⚙️",
    title: "Automatisations de tâches",
    desc: "Connexion entre vos outils existants pour éliminer les saisies manuelles : devis automatiques, OCR factures, rappels de RDV, envoi de documents.",
    cases: ["Make / n8n / Zapier", "OCR factures fournisseurs", "Rappels SMS J-1"],
  },
  {
    icon: "📊",
    title: "Analyse de données",
    desc: "Tableaux de bord pour piloter votre activité : segmentation client, prédiction churn, analyse des avis Google/Tripadvisor, performance commerciale.",
    cases: ["Dashboards Looker/Metabase", "Sentiment avis clients", "Cohortes RFM"],
  },
  {
    icon: "✍️",
    title: "Génération de contenu",
    desc: "Production éditoriale assistée IA : posts réseaux sociaux, newsletters, fiches produits, réponses aux avis, supports de formation interne.",
    cases: ["Posts LinkedIn auto", "Réponses avis personnalisées", "Newsletter mensuelle"],
  },
];

const secteurs = [
  {
    icon: "🍽",
    title: "Restaurants",
    color: "from-amber-400/15 to-orange-500/5",
    border: "border-amber-400/30",
    items: [
      "Réduction no-shows (rappel SMS J-1) → -60 % en moyenne",
      "Réponse automatique avis Google / Tripadvisor",
      "Chatbot WhatsApp : horaires, allergènes, parking",
      "OCR factures fournisseurs → ligne comptable",
    ],
  },
  {
    icon: "🏨",
    title: "Hôtels indépendants",
    color: "from-blue-400/15 to-cyan-500/5",
    border: "border-blue-400/30",
    items: [
      "Récupération paniers réservation abandonnés (8 % SiteMinder)",
      "Conciergerie IA (marées, restos, randos)",
      "Gestion automatique avis Booking",
      "Pré-séjour : check-in info, parking, animaux",
    ],
  },
  {
    icon: "🩺",
    title: "Médical libéral",
    color: "from-emerald-400/15 to-green-500/5",
    border: "border-emerald-400/30",
    items: [
      "Rappels RDV J-2 + J-1 → no-shows ÷ 3",
      "Accueil téléphonique IA (FAQ patients)",
      "Pré-questionnaire patient avant consultation",
      "RGPD : zéro donnée patient sur l'IA",
    ],
  },
  {
    icon: "🔨",
    title: "Artisans / BTP",
    color: "from-purple-400/15 to-violet-500/5",
    border: "border-purple-400/30",
    items: [
      "Devis automatique depuis demande client",
      "Suivi de chantier avec photos + IA",
      "Gestion administrative (URSSAF, TVA, attestations)",
      "Présence digitale : Google My Business optimisé",
    ],
  },
];

const tarifs = [
  { name: "Découverte Express", price: "290 €", desc: "1 livrable IA concret en 2 jours, sans risque" },
  { name: "Lancement", price: "690 €", desc: "1 chatbot complet OU 1 automatisation" },
  { name: "Essentiel", price: "1 490 €", desc: "Chatbot multi-canal + 1 automatisation" },
  { name: "Performance", price: "2 490 €", desc: "Chatbot avancé + 2-3 automatisations + intégrations" },
];

export default function ConseilIAPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,43,36,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(18,43,36,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-kogrix-400/10 rounded-full blur-[120px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-kogrix-400/10 border border-kogrix-400/30 rounded-full text-kogrix-400 text-sm font-semibold mb-6"
              >
                <span className="w-2 h-2 bg-kogrix-400 rounded-full animate-pulse" />
                BRANCHE CONSEIL · CŒUR DE MÉTIER
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Conseil IA & Data{" "}
                <span className="text-gradient">pour PME</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed"
              >
                Le cœur de métier Kogrix : nous concevons et déployons des solutions IA concrètes pour les TPE et PME indépendantes. Chatbots, automatisations, analyse, génération de contenu — du résultat mesurable, pas du jargon.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a href="/audit-developpement#cta-final" className="inline-flex items-center justify-center px-8 py-4 bg-kogrix-400 text-dark-900 font-bold text-lg rounded-xl hover:bg-kogrix-300 transition-all glow-green glow-green-hover">
                  Réserver mon audit gratuit
                </a>
                <a href="#tarifs" className="inline-flex items-center justify-center px-8 py-4 border border-kogrix-400/30 text-kogrix-400 font-semibold rounded-xl hover:bg-kogrix-400/10 transition-all">
                  Voir les tarifs
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
                {services.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="bg-gradient-to-br from-kogrix-400/15 to-emerald-500/5 border border-white/10 rounded-2xl p-5 hover:border-kogrix-400/40 transition-colors"
                  >
                    <div className="text-3xl mb-2">{s.icon}</div>
                    <div className="text-white font-semibold text-xs">{s.title}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES DÉTAILLÉS */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <p className="text-kogrix-400 text-sm font-bold uppercase tracking-wider mb-3">4 services cœur</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Ce que nous{" "}
                <span className="text-gradient">faisons concrètement</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-dark-800/50 border border-white/10 rounded-2xl p-8 hover:border-kogrix-400/40 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{s.icon}</div>
                    <h3 className="text-2xl font-bold text-white mt-2">{s.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.cases.map((c) => (
                      <span key={c} className="text-xs bg-kogrix-400/10 text-kogrix-400 px-3 py-1 rounded-full">{c}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CAS PAR SECTEUR */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <p className="text-kogrix-400 text-sm font-bold uppercase tracking-wider mb-3">Cas d&apos;usage par secteur</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Concret par{" "}
                <span className="text-gradient">métier</span>
              </h2>
              <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
                Chaque secteur a ses irritants. Nous avons les solutions IA adaptées.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {secteurs.map((sec, i) => (
                <motion.div
                  key={sec.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-gradient-to-br ${sec.color} backdrop-blur-sm border ${sec.border} rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{sec.icon}</div>
                    <h3 className="text-2xl font-bold text-white mt-2">{sec.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {sec.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-kogrix-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TARIFS */}
        <section id="tarifs" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <p className="text-kogrix-400 text-sm font-bold uppercase tracking-wider mb-3">Tarifs forfaits</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Du test à{" "}
                <span className="text-gradient">l&apos;essentiel</span>
              </h2>
              <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
                4 forfaits accessibles, tarifs fixes, sans surprise. Paiement étalé possible.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tarifs.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-dark-800/50 border border-kogrix-400/20 rounded-2xl p-6 hover:border-kogrix-400/50 transition-all"
                >
                  <h3 className="text-lg font-bold text-white">{t.name}</h3>
                  <div className="my-4">
                    <span className="text-3xl font-black text-white">{t.price}</span>
                    <span className="text-gray-500 text-xs ml-1">HT</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-400 mb-4">
                + Suivi mensuel à partir de 99 € HT/mois · Formation 890 € HT/jour
              </p>
              <a href="/audit-developpement#cta-final" className="inline-flex items-center justify-center px-8 py-4 bg-kogrix-400 text-dark-900 font-bold text-lg rounded-xl hover:bg-kogrix-300 transition-all glow-green glow-green-hover">
                Audit gratuit pour choisir le bon forfait
              </a>
            </div>
          </div>
        </section>

        {/* CTA FINAL → renvoi vers /integration */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-kogrix-400 text-sm font-bold uppercase tracking-wider mb-3">L&apos;écosystème Kogrix</p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Au-delà du conseil IA :{" "}
                <span className="text-gradient">nos partenaires sélectionnés</span>
              </h2>
              <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                En complément du conseil, nous vous mettons en relation avec nos partenaires énergie, photovoltaïque, bornes IRVE et SaaS B2B. Vous signez directement avec eux, au tarif négocié.
              </p>
              <a href="/integration" className="inline-flex items-center justify-center mt-8 px-8 py-4 border border-kogrix-400/30 text-kogrix-400 font-semibold rounded-xl hover:bg-kogrix-400/10 transition-all">
                Découvrir l&apos;intégration partenaires
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
