"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Vos outils existants restent les vôtres",
    desc: "Vos logiciels métier (CRM, comptable, mail, agenda…) ne changent pas. Nous nous connectons à eux par des passerelles sécurisées (API, webhooks).",
  },
  {
    num: "2",
    title: "Un workflow = une chaîne d'actions automatique",
    desc: "Exemple concret hôtel indépendant : un mail de réservation arrive → l'IA détecte la demande, vérifie la disponibilité → elle envoie une confirmation personnalisée → elle ajoute la réservation au planning → elle prévient la femme de chambre la veille de l'arrivée.",
  },
  {
    num: "3",
    title: "Les données sensibles ne sortent jamais en clair",
    desc: "Avant tout appel à une IA externe, les noms de clients, numéros de dossiers et données sensibles sont remplacés par des codes anonymes. L'IA traite l'information sans jamais voir les détails identifiants.",
  },
  {
    num: "4",
    title: "Vous gardez le contrôle, toujours",
    desc: "Tableau de bord en temps réel. Mise en pause d'un workflow en 1 clic. Export de vos données en JSON/CSV à tout moment. Code source des workflows téléchargeable.",
  },
];

export default function WorkflowExplained() {
  return (
    <section id="comment-ca-marche" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-wider text-kogrix-400 uppercase mb-3">
            Comment ça marche concrètement
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Pas de jargon, <span className="text-gradient">pas de magie noire</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Quand on parle de &laquo; workflow &raquo;, on parle simplement d&apos;une série
            d&apos;actions automatiques qui s&apos;enchaînent. Voici ce que ça signifie
            réellement chez vous.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-800/50 border border-white/5 rounded-2xl p-8 hover:border-kogrix-400/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-kogrix-400 text-dark-900 font-black text-xl flex items-center justify-center">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vault de continuité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-accent-cyan/10 to-kogrix-400/10 border border-accent-cyan/30 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-accent-cyan/20 flex items-center justify-center text-accent-cyan flex-shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <span className="inline-block text-xs font-bold tracking-wider text-accent-cyan uppercase mb-2">
                Garantie de continuité
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Si Kogrix s&apos;arrête, vos automatisations continuent
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Toutes vos automatisations reposent sur <strong className="text-white">n8n</strong>{" "}
                (plateforme open-source mondiale). En cas de cessation d&apos;activité de
                notre part, vous recevez automatiquement :
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Un <strong className="text-white">accès propriétaire</strong> à votre instance n8n (vous en devenez propriétaire)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  L&apos;<strong className="text-white">export complet</strong> de vos workflows et configurations (JSON exportable)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  La <strong className="text-white">documentation technique</strong> complète pour qu&apos;un autre prestataire ou votre équipe interne puisse reprendre la main
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  La <strong className="text-white">liste des prestataires alternatifs</strong> recommandés que nous formons régulièrement
                </li>
              </ul>
              <p className="text-gray-500 text-sm mt-4 italic">
                Cette clause est inscrite noir sur blanc dans le contrat. Vous n&apos;êtes
                jamais captif d&apos;un fournisseur.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
