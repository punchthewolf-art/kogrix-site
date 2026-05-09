import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kogrix Particuliers — L'IA expliquée simplement, près de chez vous",
  description:
    "Vous voulez utiliser ChatGPT, Claude ou l'IA dans votre quotidien sans jargon ? Kogrix vous accompagne pas à pas, à domicile ou en visio, en Normandie et partout en France.",
  keywords:
    "IA particulier, ChatGPT débutant, Claude formation, coaching IA Normandie, IA Dieppe, IA Le Tréport, IA Criel, formation IA seniors",
};

const personas = [
  {
    icon: "👔",
    title: "Le cadre dépassé (45-60 ans)",
    desc: "Vous voyez vos collègues utiliser l'IA et vous n'osez pas demander. On démystifie ensemble, à votre rythme, sans jugement.",
  },
  {
    icon: "📚",
    title: "Le retraité actif curieux",
    desc: "Mémoires, voyages, généalogie, association. L'IA peut vous aider à écrire, organiser, traduire — sans devenir un geek.",
  },
  {
    icon: "🎨",
    title: "Le freelance / créateur solo",
    desc: "Coach, photographe, formateur, auteur. Multipliez votre productivité sur la rédaction, les devis, les réseaux sociaux.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Le parent ou l'aidant",
    desc: "Équiper son ado pour ses études (sans triche), gérer la paperasse d'un proche âgé. L'IA bien utilisée change la donne.",
  },
];

const offers = [
  {
    name: "Découverte",
    price: "89 €",
    duration: "1 heure",
    tagline: "Premier pas, sans engagement",
    features: [
      "Appel visio ou à votre domicile",
      "Audit IA personnel",
      "Setup ChatGPT et Claude basique",
      "5 prompts adaptés à votre métier ou passion",
      "Récap PDF par email",
    ],
    highlight: false,
    cta: "Réserver une découverte",
  },
  {
    name: "Setup Pro",
    price: "290 €",
    duration: "2 h + suivi 7 jours",
    tagline: "Le plus choisi",
    features: [
      "Configuration complète Projects perso",
      "GPTs et Assistants sur mesure",
      "Prompts métier illimités",
      "Automatisations Zapier ou Make basiques",
      "Documentation PDF récapitulative",
      "7 jours de questions par WhatsApp",
    ],
    highlight: true,
    cta: "Choisir le Setup Pro",
  },
  {
    name: "Mentorat",
    price: "79 €",
    duration: "par mois",
    tagline: "Montée en compétence dans la durée",
    features: [
      "1 call de 45 min par mois",
      "Questions illimitées par WhatsApp",
      "Veille mensuelle des nouveaux outils",
      "Engagement 3 mois minimum",
      "Désabonnement libre ensuite",
    ],
    highlight: false,
    cta: "Démarrer le mentorat",
  },
];

const faqs = [
  {
    q: "Je suis vraiment nul en informatique. Est-ce vraiment pour moi ?",
    a: "Justement, c'est exactement pour vous. L'IA d'aujourd'hui se parle comme à un humain, pas comme un ordinateur. Si vous savez envoyer un SMS, vous savez utiliser ChatGPT — il manque juste quelqu'un qui vous l'explique calmement.",
  },
  {
    q: "Mes données vont-elles être utilisées par l'IA sans mon accord ?",
    a: "Bonne question. Pendant le setup, je règle les paramètres pour que vos conversations ne servent pas à entraîner les modèles. Je vous montre aussi quelles données ne jamais partager. C'est inclus dans toutes les offres.",
  },
  {
    q: "Pourquoi 290 € si mon petit-fils peut me montrer gratuitement ?",
    a: "Bien sûr, beaucoup essayent. Mais en général la séance est expéditive, technique, et 3 jours après on a tout oublié. Mon job c'est d'aller à votre rythme, de m'adapter à votre métier ou à vos passions, et de revenir si vous bloquez.",
  },
  {
    q: "Vous vous déplacez où ?",
    a: "À domicile dans toute la zone Criel-sur-Mer, Dieppe, Le Tréport, Eu, Mers-les-Bains, et un rayon d'environ 30 km. Partout ailleurs, on fait la séance en visio (Zoom, Google Meet ou WhatsApp).",
  },
  {
    q: "Et si je ne suis pas satisfait après la première séance ?",
    a: "Remboursement intégral, sans question. C'est la garantie de l'offre Découverte et du Setup Pro. Vous ne risquez rien.",
  },
  {
    q: "J'ai déjà ChatGPT gratuit, ça suffit non ?",
    a: "Pour découvrir, oui. Mais 80 % de la valeur de l'IA vient des outils avancés (Projects, GPTs personnalisés, automatisations) que la version gratuite ne permet pas. Le setup vous fait gagner 5 à 10 ans d'apprentissage en quelques heures.",
  },
];

export default function ParticuliersPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Mini header dédié — sobre, distinct du header pro */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/particuliers" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Kogrix"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div className="leading-tight">
              <div className="font-bold text-gray-900">KOGRIX</div>
              <div className="text-[11px] text-emerald-700 -mt-0.5 tracking-wide uppercase">
                Particuliers
              </div>
            </div>
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            <a href="#offres" className="text-gray-600 hover:text-emerald-700 hidden sm:inline">
              Offres
            </a>
            <a href="#faq" className="text-gray-600 hover:text-emerald-700 hidden sm:inline">
              FAQ
            </a>
            <Link
              href="/"
              className="text-xs text-gray-400 hover:text-gray-600"
              title="Retour à la version professionnelle"
            >
              Vous êtes pro ? →
            </Link>
            <a
              href="#offres"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold transition"
            >
              Démarrer
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <div className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-emerald-200">
          Pour les particuliers · Normandie &amp; visio partout en France
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          L&apos;IA expliquée simplement.
          <br />
          <span className="text-emerald-700">À votre rythme. Avec un humain en face.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          ChatGPT, Claude, Gemini... vous voyez tout le monde s&apos;y mettre et vous avez l&apos;impression
          d&apos;être à côté du train. On vous installe les bons outils, on vous explique sans jargon, et
          vous gagnez 1 à 5 heures par semaine dès la première séance.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#offres"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition shadow-lg shadow-emerald-200"
          >
            Voir les offres
          </a>
          <a
            href="#decouverte"
            className="px-8 py-4 border-2 border-gray-300 hover:border-emerald-600 hover:text-emerald-700 text-gray-700 font-semibold rounded-lg transition"
          >
            Réserver 60 min à 89 €
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Garantie satisfait ou remboursé · Pas d&apos;abonnement caché · Vous gardez la main
        </p>
      </section>

      {/* PERSONAS */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              C&apos;est probablement pour vous si...
            </h2>
            <p className="mt-3 text-gray-600">
              On n&apos;a pas besoin d&apos;être ingénieur. On a besoin de quelqu&apos;un qui prenne le temps.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {personas.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition"
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMESSES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            3 promesses concrètes
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="font-bold text-gray-900 mb-2">L&apos;IA sur mesure</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Je vous installe ChatGPT et Claude configurés pour <i>votre</i> métier ou <i>vos</i> passions.
              Pas une démo générique.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="font-bold text-gray-900 mb-2">30 secondes au lieu de 20 minutes</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Démonstration live à la première séance : un email pro, une lettre administrative, un résumé
              de document. Vous voyez la différence immédiatement.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Vous gardez la main</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Aucun jargon. Aucune dépendance. Vous repartez autonome, avec une fiche récap PDF à
              consulter quand vous voulez.
            </p>
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section id="offres" className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">3 offres simples</h2>
            <p className="mt-3 text-gray-600">Sans abonnement caché. Garantie satisfait ou remboursé.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offers.map((o) => (
              <div
                key={o.name}
                id={o.name === "Découverte" ? "decouverte" : undefined}
                className={`rounded-2xl p-7 border-2 transition ${
                  o.highlight
                    ? "border-emerald-600 bg-white shadow-xl shadow-emerald-100 relative"
                    : "border-gray-200 bg-white hover:border-emerald-300"
                }`}
              >
                {o.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    LE PLUS CHOISI
                  </div>
                )}
                <h3 className="font-bold text-2xl text-gray-900">{o.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{o.tagline}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">{o.price}</span>
                  <span className="text-gray-500 text-sm">{o.duration}</span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {o.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:contact@kogrix.com?subject=Inscription Kogrix Particuliers"
                  className={`mt-7 block text-center px-5 py-3 rounded-lg font-semibold transition ${
                    o.highlight
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "border-2 border-gray-300 hover:border-emerald-600 hover:text-emerald-700 text-gray-700"
                  }`}
                >
                  {o.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-gray-500">
            <strong className="text-emerald-700">Bonus parrainage :</strong> 50 € pour vous, 50 € de
            réduction pour chaque proche que vous nous recommandez.
          </p>
        </div>
      </section>

      {/* COMMENT ÇA SE PASSE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Comment ça se passe ?</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { n: "1", t: "Vous réservez", d: "Choix d'un créneau en ligne, paiement sécurisé Stripe." },
            { n: "2", t: "Pré-séance", d: "Petit questionnaire pour cibler vos besoins (5 min)." },
            { n: "3", t: "La séance", d: "À domicile ou en visio. On installe, on configure, on pratique." },
            { n: "4", t: "Le suivi", d: "Récap PDF + 7 jours de questions par WhatsApp inclus." },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="w-12 h-12 mx-auto bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mb-3">
                {s.n}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{s.t}</h3>
              <p className="text-sm text-gray-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="bg-white rounded-lg p-5 border border-gray-200 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-start gap-3">
                  <span>{f.q}</span>
                  <span className="text-emerald-600 transition-transform group-open:rotate-45 text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Prêt à arrêter de vous sentir largué ?
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            60 minutes, 89 euros, et vous repartez avec ChatGPT et Claude opérationnels sur votre
            métier ou vos passions.
          </p>
          <a
            href="mailto:contact@kogrix.com?subject=Réservation Découverte 89€"
            className="inline-block px-10 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition shadow-xl"
          >
            Réserver ma séance Découverte
          </a>
          <p className="mt-6 text-sm text-emerald-200">
            Réponse sous 24 h · Garantie satisfait ou remboursé
          </p>
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div>
            &copy; 2026 Kogrix · Édité par <span className="text-gray-300">SASU Pelegrinus</span>
            &nbsp;&middot;&nbsp; <span className="text-gray-300">Punch Ventures LLC</span>
          </div>
          <div className="flex gap-5 text-xs">
            <Link href="/" className="hover:text-emerald-400">
              Version Professionnels
            </Link>
            <Link href="/mentions-legales" className="hover:text-gray-200">
              Mentions légales
            </Link>
            <Link href="/cgv" className="hover:text-gray-200">
              CGV
            </Link>
            <Link href="/confidentialite" className="hover:text-gray-200">
              Confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
