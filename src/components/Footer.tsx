import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-kogrix-400 font-black text-2xl">K</span>
              <span className="font-bold text-lg text-white">KOGRIX</span>
            </div>
            <p className="text-gray-500 text-sm">
              L&apos;IA qui fait tourner votre PME.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#services" className="hover:text-kogrix-400 transition-colors">Audit IA</a></li>
              <li><a href="#services" className="hover:text-kogrix-400 transition-colors">Chatbots IA</a></li>
              <li><a href="#services" className="hover:text-kogrix-400 transition-colors">Automatisation</a></li>
              <li><a href="#services" className="hover:text-kogrix-400 transition-colors">Formation</a></li>
            </ul>
          </div>

          {/* Secteurs */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Secteurs</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#secteurs" className="hover:text-kogrix-400 transition-colors">Restaurants</a></li>
              <li><a href="#secteurs" className="hover:text-kogrix-400 transition-colors">Hôtels indépendants</a></li>
              <li><a href="#secteurs" className="hover:text-kogrix-400 transition-colors">Agences immobilières</a></li>
              <li><a href="#secteurs" className="hover:text-kogrix-400 transition-colors">Artisans &amp; BTP</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="mailto:contact@kogrix.com" className="hover:text-kogrix-400 transition-colors">contact@kogrix.com</a></li>
              <li><a href="#contact" className="hover:text-kogrix-400 transition-colors">Réserver une visio</a></li>
              <li><a href="#tarifs" className="hover:text-kogrix-400 transition-colors">Tarifs</a></li>
              <li><a href="#diagnostic" className="hover:text-kogrix-400 transition-colors">Diagnostic gratuit</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-xs text-center md:text-left">
            <p>&copy; 2026 Kogrix. Tous droits réservés.</p>
            <p className="mt-1 text-gray-700">
              Édité par <strong className="text-gray-500">SASU Pelegrinus</strong> &mdash; SIREN 948 908 348 &mdash; France
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-600">
            <Link href="/particuliers" className="hover:text-kogrix-400 transition-colors italic">Espace Particuliers</Link>
            <Link href="/securite" className="hover:text-kogrix-400 transition-colors font-semibold">Sécurité &amp; RGPD</Link>
            <Link href="/mentions-legales" className="hover:text-gray-400 transition-colors">Mentions légales</Link>
            <Link href="/cgv" className="hover:text-gray-400 transition-colors">CGV</Link>
            <Link href="/confidentialite" className="hover:text-gray-400 transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
