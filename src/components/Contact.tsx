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
            Pret a{" "}
            <span className="text-gradient">passer a l&apos;IA</span> ?
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Visio découverte gratuite de 20 minutes. Sans engagement.
          </p>
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
                <label className="block text-sm font-medium text-gray-300 mb-2">Secteur d&apos;activite</label>
                <select className="w-full px-4 py-3 bg-dark-900/50 border border-white/10 rounded-xl text-white focus:border-kogrix-400 focus:ring-1 focus:ring-kogrix-400 outline-none transition-all">
                  <option value="">Choisir votre secteur</option>
                  <option>Restaurant / Hotellerie</option>
                  <option>Cabinet d&apos;avocats</option>
                  <option>Cabinet comptable</option>
                  <option>Agence immobiliere</option>
                  <option>Commerce / Retail</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Votre besoin</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-kogrix-400 focus:ring-1 focus:ring-kogrix-400 outline-none transition-all resize-none"
                  placeholder="Decrivez brievement ce que vous aimeriez automatiser ou ameliorer..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-kogrix-400 text-dark-900 font-bold text-lg rounded-xl hover:bg-kogrix-300 transition-all glow-green glow-green-hover"
              >
                Réserver ma visio gratuite
              </button>

              <p className="text-center text-gray-500 text-xs">
                Reponse sous 24h. Aucun engagement. 100% confidentiel.
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
              <h3 className="text-2xl font-bold text-white mb-2">Message envoye !</h3>
              <p className="text-gray-400">On vous recontacte sous 24h pour planifier votre visio découverte.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
