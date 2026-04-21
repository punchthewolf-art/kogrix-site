"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    question: "Quel est votre secteur d'activite ?",
    options: ["Cabinet comptable", "Cabinet d'avocats", "Restaurant / Hotellerie", "Agence immobiliere", "Autre"],
  },
  {
    question: "Combien d'employes dans votre entreprise ?",
    options: ["1-5", "6-20", "21-50", "50+"],
  },
  {
    question: "Quelle tache vous prend le plus de temps ?",
    options: ["Emails & communication", "Facturation & admin", "Service client", "Reporting & analyse", "Prospection"],
  },
  {
    question: "Utilisez-vous deja des outils IA ?",
    options: ["Pas du tout", "ChatGPT de temps en temps", "Quelques outils", "Oui, plusieurs"],
  },
  {
    question: "Quel est votre objectif principal ?",
    options: ["Gagner du temps", "Reduire les couts", "Ameliorer le service client", "Augmenter le CA"],
  },
];

const results: Record<string, { score: number; reco: string; savings: string; service: string }> = {
  "Cabinet comptable": {
    score: 89,
    reco: "Extraction automatique des factures, rapprochement bancaire, rapports mensuels auto. Potentiel d'economie d'1 ETP complet.",
    savings: "168h/mois",
    service: "Implementation IA",
  },
  "Cabinet d'avocats": {
    score: 92,
    reco: "Tri automatique des emails par dossier, generation de brouillons, relances factures. Jusqu'a 15h/semaine recuperees.",
    savings: "15h/semaine",
    service: "Implementation IA",
  },
  "Restaurant / Hotellerie": {
    score: 87,
    reco: "Automatisation des factures livraison, analyse des avis clients, et chatbot reservation. ROI estime : 1 134 EUR/mois d'economies.",
    savings: "1 134 EUR/mois",
    service: "Implementation IA",
  },
  "Agence immobiliere": {
    score: 84,
    reco: "Scoring leads automatique, redaction annonces IA, alertes clients personnalisees. 10-15K EUR/an de CA supplementaire.",
    savings: "10-15K EUR/an",
    service: "Implementation IA",
  },
};

export default function Diagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const sector = answers[0] || "Cabinet comptable";
  const result = results[sector] || results["Cabinet comptable"];

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  return (
    <section id="diagnostic" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 bg-kogrix-400/10 border border-kogrix-400/20 rounded-full text-kogrix-400 text-sm font-semibold mb-4">
            100% gratuit, sans engagement
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Diagnostic IA{" "}
            <span className="text-gradient">en 30 secondes</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            5 questions pour decouvrir ce que l&apos;IA peut faire pour vous.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-800/80 border border-white/10 rounded-2xl p-8 sm:p-12"
        >
          {/* Progress bar */}
          {!done && (
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Question {step + 1}/{questions.length}</span>
                <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-kogrix-400 to-accent-cyan rounded-full"
                  animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  {questions[step].question}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {questions[step].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="text-left px-6 py-4 bg-dark-900/50 border border-white/10 rounded-xl text-gray-300 hover:border-kogrix-400/50 hover:bg-kogrix-400/5 hover:text-white transition-all"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-kogrix-400/20 mb-4">
                    <span className="text-3xl font-bold text-kogrix-400">{result.score}%</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Potentiel d&apos;optimisation IA
                  </h3>
                </div>

                <div className="bg-dark-900/50 rounded-xl p-6 mb-6">
                  <p className="text-gray-300 leading-relaxed">{result.reco}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-kogrix-400/10 border border-kogrix-400/20 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-kogrix-400">{result.savings}</div>
                    <div className="text-sm text-gray-400 mt-1">Economies estimees</div>
                  </div>
                  <div className="bg-accent-cyan/10 border border-accent-cyan/20 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-accent-cyan">{result.service}</div>
                    <div className="text-sm text-gray-400 mt-1">Service recommande</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-kogrix-400 text-dark-900 font-bold rounded-xl hover:bg-kogrix-300 transition-all glow-green"
                  >
                    Recevoir mon rapport complet gratuit
                  </a>
                  <button
                    onClick={reset}
                    className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-gray-400 rounded-xl hover:bg-white/5 transition-all"
                  >
                    Recommencer
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
