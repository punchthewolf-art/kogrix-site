import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Benjamin Schindler — Kogrix · Carte de contact",
  description:
    "Fondateur Kogrix · Conseil IA pour pros et particuliers · Diagnostic 45 min gratuit · 07 43 54 42 42",
  robots: { index: false, follow: false },
};

export default function ContactCardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F1A] via-[#064E3B] to-[#0A1F1A] text-white flex flex-col">
      {/* Halo décoratif */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-emerald-400/5 blur-3xl pointer-events-none" />

      {/* Top mini-header */}
      <header className="relative z-10 max-w-md w-full mx-auto px-6 pt-8 pb-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Kogrix"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-sm font-bold tracking-widest text-emerald-200 group-hover:text-emerald-300">
            KOGRIX
          </span>
        </Link>
        <Link
          href="/"
          className="text-xs text-gray-400 hover:text-emerald-300 transition-colors"
        >
          kogrix.com →
        </Link>
      </header>

      {/* Carte principale */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-5 py-6">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8 shadow-2xl">
            {/* Avatar logo + nom */}
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 mb-4 rounded-full bg-white/5 ring-4 ring-emerald-400/30 p-2 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Kogrix"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h1 className="text-3xl font-bold tracking-tight">
                Benjamin Schindler
              </h1>
              <p className="text-emerald-300 text-sm font-semibold tracking-wider uppercase mt-1">
                Fondateur · Kogrix
              </p>
              <p className="text-gray-300 text-sm mt-3 max-w-xs leading-relaxed">
                Conseil IA pour pros et particuliers. Diagnostic 45 min
                gratuit. En visio partout en France.
              </p>
            </div>

            {/* Bouton principal — Ajouter aux contacts */}
            <a
              href="/contact-card/vcard.vcf"
              className="mt-7 flex items-center justify-center gap-3 w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0A1F1A] font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Ajouter à mes contacts
            </a>

            {/* Boutons secondaires */}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href="tel:+33743544242"
                className="flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl font-semibold text-sm transition-all"
              >
                <svg
                  className="w-4 h-4 text-emerald-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Appeler
              </a>
              <a
                href="mailto:contact@kogrix.com?subject=Bonjour Kogrix"
                className="flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl font-semibold text-sm transition-all"
              >
                <svg
                  className="w-4 h-4 text-emerald-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>
            </div>

            {/* Coordonnées texte */}
            <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider w-16">
                  Tél
                </span>
                <a
                  href="tel:+33743544242"
                  className="text-white font-mono tracking-wider hover:text-emerald-300"
                >
                  07 43 54 42 42
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider w-16">
                  Email
                </span>
                <a
                  href="mailto:contact@kogrix.com"
                  className="text-white hover:text-emerald-300"
                >
                  contact@kogrix.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider w-16">
                  Site
                </span>
                <Link href="/" className="text-white hover:text-emerald-300">
                  kogrix.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider w-16">
                  Zone
                </span>
                <span className="text-white">
                  France entière · visio
                </span>
              </div>
            </div>

            {/* CTA offres */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-400 uppercase tracking-wider text-center font-semibold mb-3">
                Envie d&apos;aller plus loin ?
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/particuliers"
                  className="flex flex-col items-center justify-center px-3 py-3 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/30 rounded-lg transition-all"
                >
                  <span className="text-[10px] text-emerald-300 uppercase tracking-wider">
                    Particuliers
                  </span>
                  <span className="font-bold text-sm mt-0.5">
                    Découverte 89 €
                  </span>
                </Link>
                <Link
                  href="/#contact"
                  className="flex flex-col items-center justify-center px-3 py-3 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/30 rounded-lg transition-all"
                >
                  <span className="text-[10px] text-emerald-300 uppercase tracking-wider">
                    Pros
                  </span>
                  <span className="font-bold text-sm mt-0.5">
                    Diag 45 min
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-6">
            En scannant ce QR code, vous accédez aux coordonnées
            professionnelles de Benjamin Schindler &middot; Kogrix
          </p>
        </div>
      </main>

      <footer className="relative z-10 text-center text-xs text-gray-500 py-4">
        SASU Pelegrinus &middot; SIREN 948 908 348 &middot; Édité par Kogrix
      </footer>
    </div>
  );
}
