"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "L'audit est-il vraiment gratuit ?",
    a: "Oui, sans engagement. Notre rémunération vient du conseil IA que vous nous confiez et des commissions partenaires lorsque vous choisissez l'une de nos recommandations. Si vous n'activez rien après l'audit, vous ne payez rien et vous gardez le compte-rendu PDF.",
  },
  {
    q: "Suis-je obligé(e) de prendre les solutions proposées ?",
    a: "Non. Vous recevez un plan d'action personnalisé, vous décidez seul ce que vous activez. Nous ne pratiquons pas de relance commerciale agressive : vous décidez du rythme.",
  },
  {
    q: "Sur quelles zones intervenez-vous ?",
    a: "France entière en visio. Normandie en présentiel (Côte d'Albâtre, Rouen, Le Havre, Caen, Évreux). Nous sommes basés à Criel-sur-Mer (76) et privilégions un ancrage régional fort.",
  },
  {
    q: "Comment être sûr de la qualité des partenaires ?",
    a: "Nous sélectionnons uniquement des acteurs établis avec références vérifiables. Sur les volets photovoltaïque et bornes IRVE, nous opérons en marque blanche : le contrat est signé avec Kogrix, nous coordonnons l'exécution et restons votre interlocuteur unique en cas de problème.",
  },
  {
    q: "Quels sont vos tarifs au-delà de l'audit gratuit ?",
    a: "Diagnostic IA et audit développement : gratuit. Conseil IA et automatisation : à partir de 290 € HT. Énergie, photovoltaïque, bornes : vous payez le partenaire au prix négocié — souvent meilleur que les tarifs publics — et nous touchons une commission qui ne vous coûte rien de plus.",
  },
  {
    q: "Qui est derrière Kogrix ?",
    a: "Kogrix est la marque commerciale de la SASU Pelegrinus (SIREN 948 908 348), dirigée par Benjamin Schindler. Une seule personne aux commandes, des partenaires sélectionnés pour exécuter.",
  },
  {
    q: "Que se passe-t-il après l'audit si je ne donne pas suite tout de suite ?",
    a: "Rien. Vous gardez le compte-rendu, vous activez quand vous le souhaitez. Nous pouvons reprendre contact dans 6 ou 12 mois si vous le demandez explicitement.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-kogrix-400 text-sm font-bold uppercase tracking-wider mb-3">Questions fréquentes</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            On clarifie{" "}
            <span className="text-gradient">tout de suite</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-dark-800/50 border border-white/10 rounded-xl overflow-hidden hover:border-kogrix-400/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">{faq.q}</h3>
                <svg
                  className={`w-5 h-5 text-kogrix-400 flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-6 pb-5"
                >
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
