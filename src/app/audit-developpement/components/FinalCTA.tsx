"use client";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="cta-final" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-kogrix-400/10 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Prêt à débloquer le développement{" "}
            <span className="text-gradient">de votre entreprise</span> ?
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            90 minutes, gratuit, sans engagement. À l&apos;issue, vous avez un plan d&apos;action clair et vous décidez seul de la suite.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@kogrix.com?subject=Réservation%20audit%20Développement%20%26%20Transition&body=Bonjour%20Benjamin%2C%0A%0AJe%20souhaite%20réserver%20un%20audit%20Développement%20%26%20Transition%20de%2090%20minutes.%0A%0AMon%20activité%20%3A%20%0AMa%20ville%20%3A%20%0AMes%20disponibilités%20%3A%20%0A%0AMerci%2C"
              className="inline-flex items-center justify-center px-10 py-5 bg-kogrix-400 text-dark-900 font-bold text-lg rounded-xl hover:bg-kogrix-300 transition-all glow-green glow-green-hover"
            >
              Réserver mon audit gratuit
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="tel:+33743544242"
              className="inline-flex items-center justify-center px-10 py-5 border border-kogrix-400/30 text-kogrix-400 font-semibold rounded-xl hover:bg-kogrix-400/10 transition-all"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              Discuter d&apos;abord par téléphone
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-kogrix-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@kogrix.com
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-kogrix-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07 43 54 42 42
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-kogrix-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Criel-sur-Mer (76)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
