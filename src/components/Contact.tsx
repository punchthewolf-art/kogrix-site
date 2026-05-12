"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Prêt à{" "}
            <span className="text-gradient">passer à l&apos;IA</span> ?
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Visio découverte gratuite de 20 minutes. Sans engagement.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-300">
            <a href="tel:+33743544242" className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-800/60 border border-kogrix-400/30 rounded-lg hover:border-kogrix-400 hover:text-kogrix-400 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">07 43 54 42 42</span>
            </a>
            <a href="mailto:contact@kogrix.com" className="text-sm text-gray-400 hover:text-kogrix-400 transition-colors">
              contact@kogrix.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-800/50 border border-white/10 rounded-2xl p-8 sm:p-12"
        >
          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nom</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-dark-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-kogrix-400 focus:ring-1 focus:ring-kogrix-400 outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-dark-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-kogrix-400 focus:ring-1 focus:ring-kogrix-400 outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Secteur d&apos;activité</label>
                <select className="w-full px-4 py-3 bg-dark-900/50 border border-white/10 rounded-xl text-white focus:border-kogrix-400 focus:ring-1 focus:ring-kogrix-400 outline-none transition-all">
                  <option value="">Choisir votre secteur</option>
                  <option>Restaurant</option>
                  <option>Hôtel indépendant</option>
                  <option>Agence immobilière</option>
                  <option>Artisan / TPE BTP</option>
                  <option>Particulier</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Votre besoin</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-kogrix-400 focus:ring-1 focus:ring-kogrix-400 outline-none transition-all resize-none"
                  placeholder="Décrivez brièvement ce que vous aimeriez automatiser ou améliorer..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-kogrix-400 text-dark-900 font-bold text-lg rounded-xl hover:bg-kogrix-300 transition-all glow-green glow-green-hover"
              >
                Réserver ma visio gratuite
              </button>

              <p className="text-center text-gray-500 text-xs">
                Réponse sous 24 h. Aucun engagement. 100 % confidentiel.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kogrix-400/20 mb-6">
                <svg className="w-8 h-8 text-kogrix-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
              <p className="text-gray-400">On vous recontacte sous 24h pour planifier votre visio découverte.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
