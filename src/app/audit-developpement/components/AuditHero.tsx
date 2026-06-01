"use client";
import { motion } from "framer-motion";

export default function AuditHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,43,36,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(18,43,36,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-kogrix-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-cyan/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-kogrix-400/10 border border-kogrix-400/30 rounded-full text-kogrix-400 text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 bg-kogrix-400 rounded-full animate-pulse" />
            AUDIT 360° GRATUIT · 90 MINUTES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Un seul interlocuteur pour{" "}
            <span className="text-gradient">développer votre entreprise.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed"
          >
            Audit 360° gratuit qui couvre quatre dimensions de votre activité — IA et data, gestion et outils, énergie et transition, équipements. Solutions sélectionnées, opérées par nos partenaires de confiance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#cta-final"
              className="inline-flex items-center justify-center px-8 py-4 bg-kogrix-400 text-dark-900 font-bold text-lg rounded-xl hover:bg-kogrix-300 transition-all glow-green glow-green-hover"
            >
              Réserver mon audit gratuit
            </a>
            <a
              href="#dimensions"
              className="inline-flex items-center justify-center px-8 py-4 border border-kogrix-400/30 text-kogrix-400 font-semibold rounded-xl hover:bg-kogrix-400/10 transition-all group"
            >
              Voir les 4 dimensions
              <svg className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-kogrix-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Sans engagement
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-kogrix-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Compte-rendu PDF sous 48 h
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-kogrix-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Transparence totale sur la rémunération
            </div>
          </motion.div>
        </div>

        {/* Right side — 4 dimensions visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {[
              { icon: "🤖", title: "IA & Data", color: "from-kogrix-400/20 to-emerald-500/10" },
              { icon: "💼", title: "Gestion & Outils", color: "from-accent-cyan/20 to-cyan-500/10" },
              { icon: "⚡", title: "Énergie & Transition", color: "from-yellow-400/20 to-amber-500/10" },
              { icon: "🚀", title: "Équipements & Dev", color: "from-purple-400/20 to-violet-500/10" },
            ].map((dim, i) => (
              <motion.div
                key={dim.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`relative bg-gradient-to-br ${dim.color} backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-kogrix-400/40 transition-colors`}
              >
                <div className="text-4xl mb-3">{dim.icon}</div>
                <div className="text-white font-semibold text-sm">{dim.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
