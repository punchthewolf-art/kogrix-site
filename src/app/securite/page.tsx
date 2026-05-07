import Link from "next/link";

export const metadata = {
  title: "Sécurité & RGPD — KOGRIX",
  description:
    "Hébergement France, RGPD natif, sous-traitants déclarés, AI Act conforme. Tout ce que vous devez savoir avant de nous confier vos données.",
};

export default function SecuritePage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-kogrix-400 transition-colors">
            Accueil
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Sécurité &amp; RGPD</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-black mb-4">
          Sécurité & <span className="text-gradient">RGPD</span>
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          Tout ce que vous devez savoir avant de nous confier vos données. Pas de
          jargon, pas d&apos;esquive — les engagements concrets de Kogrix.
        </p>

        {/* Section 1 — Hébergement */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-kogrix-400">
            1. Hébergement souverain France
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong className="text-white">Datacenters :</strong> OVH Gravelines
              et Roubaix (France). Aucune donnée client ne transite par des
              infrastructures hors Union européenne.
            </li>
            <li>
              <strong className="text-white">Certifications OVH :</strong>{" "}
              ISO 27001, ISO 27017, ISO 27018, HDS (Hébergeur de Données de
              Santé), SecNumCloud sur certaines zones.
            </li>
            <li>
              <strong className="text-white">Pas d&apos;exposition Cloud Act :</strong>{" "}
              SASU Pelegrinus (France) est seule responsable du traitement. Punch
              Ventures LLC (US) n&apos;a aucun accès aux données utilisateurs EU.
            </li>
          </ul>
        </section>

        {/* Section 2 — Sous-traitants */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-kogrix-400">
            2. Liste des sous-traitants
          </h2>
          <p className="text-gray-300 mb-4">
            Conformément à l&apos;article 28 du RGPD, voici la liste exhaustive
            de nos sous-traitants. Un DPA (Data Processing Agreement) est signé
            avec chacun.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="py-3 pr-4 text-kogrix-400 font-semibold">Sous-traitant</th>
                  <th className="py-3 pr-4 text-kogrix-400 font-semibold">Finalité</th>
                  <th className="py-3 text-kogrix-400 font-semibold">Localisation</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4">OVHcloud</td>
                  <td className="py-3 pr-4">Hébergement infrastructure</td>
                  <td className="py-3">France (UE)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4">Anthropic (Claude)</td>
                  <td className="py-3 pr-4">API IA générative — mode &laquo; no training &raquo;</td>
                  <td className="py-3">USA — DPA EU compliant</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4">OpenAI (GPT)</td>
                  <td className="py-3 pr-4">API IA générative — mode &laquo; no training &raquo;</td>
                  <td className="py-3">USA — DPA EU compliant</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4">Mistral AI</td>
                  <td className="py-3 pr-4">API IA générative</td>
                  <td className="py-3">France (UE)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4">Stripe</td>
                  <td className="py-3 pr-4">Paiement</td>
                  <td className="py-3">Irlande (UE)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4">n8n.io (self-hosted)</td>
                  <td className="py-3 pr-4">Plateforme automatisation</td>
                  <td className="py-3">France (UE) — instance dédiée</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-4 italic">
            Toute évolution de cette liste est notifiée par email aux clients
            actifs avec préavis de 30 jours.
          </p>
        </section>

        {/* Section 3 — Données et entraînement */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-kogrix-400">
            3. Vos données ne nourrissent jamais aucun modèle
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong className="text-white">Mode &laquo; opt-out commercial &raquo;</strong> activé sur toutes les API IA
              que nous utilisons (Anthropic, OpenAI, Mistral). Aucune donnée
              transmise n&apos;entraîne de modèles tiers.
            </li>
            <li>
              <strong className="text-white">Anonymisation à la source :</strong>{" "}
              les données sensibles (noms, emails, numéros) sont remplacées par
              des tokens avant tout appel d&apos;API.
            </li>
            <li>
              <strong className="text-white">Pas de stockage long terme :</strong>{" "}
              les requêtes IA ne sont conservées que 30 jours pour le débogage,
              puis supprimées définitivement.
            </li>
            <li>
              <strong className="text-white">Droit à la portabilité :</strong>{" "}
              vous récupérez vos données en JSON ou CSV à tout moment, sans frais.
            </li>
          </ul>
        </section>

        {/* Section 4 — DPO */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-kogrix-400">
            4. Délégué à la Protection des Données
          </h2>
          <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
            <p className="text-gray-300 mb-2">
              <strong className="text-white">DPO interne :</strong> Benjamin
              Schindler
            </p>
            <p className="text-gray-300 mb-2">
              <strong className="text-white">Contact :</strong>{" "}
              <a
                href="mailto:dpo@kogrix.com"
                className="text-kogrix-400 hover:underline"
              >
                dpo@kogrix.com
              </a>
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Pour les clients en secteurs réglementés (santé, banque, juridique),
              un DPO externe certifié peut être désigné sur demande, avec contrat
              dédié.
            </p>
          </div>
        </section>

        {/* Section 5 — AI Act */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-kogrix-400">
            5. Conformité AI Act européen
          </h2>
          <p className="text-gray-300 mb-4">
            L&apos;AI Act (Règlement UE 2024/1689) classifie les systèmes
            d&apos;IA en 4 niveaux de risque. Voici comment se positionnent nos
            solutions :
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>
              <span className="inline-block px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded font-semibold mr-2">RISQUE MINIMAL</span>
              Chatbots informatifs, automatisations administratives, résumés de
              documents.
            </li>
            <li>
              <span className="inline-block px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded font-semibold mr-2">RISQUE LIMITÉ</span>
              Chatbots interagissant avec des clients finaux : transparence
              obligatoire (mention &laquo; vous parlez à une IA &raquo;).
            </li>
            <li>
              <span className="inline-block px-2 py-1 bg-red-400/20 text-red-400 text-xs rounded font-semibold mr-2">RISQUE ÉLEVÉ</span>
              Décisions automatisées en RH, crédit, justice, santé. <strong className="text-white">Nous ne déployons pas ce type de système</strong> sans audit indépendant préalable et accord explicite du client.
            </li>
            <li>
              <span className="inline-block px-2 py-1 bg-gray-400/20 text-gray-400 text-xs rounded font-semibold mr-2">INTERDIT</span>
              Manipulation cognitive, scoring social, surveillance biométrique.{" "}
              <strong className="text-white">Nous refusons toute mission de ce type</strong>, sans exception.
            </li>
          </ul>
        </section>

        {/* Section 6 — Garanties contractuelles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-kogrix-400">
            6. Garanties contractuelles
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong className="text-white">Garantie satisfait ou remboursé</strong>{" "}
              sur le premier livrable de l&apos;Implémentation, dans les 30 jours
              suivant la livraison.
            </li>
            <li>
              <strong className="text-white">Pas de captation :</strong> toutes
              les automatisations reposent sur n8n open-source. En cas de
              cessation de service de notre part, nous vous transférons vos
              workflows et la documentation. Vous êtes propriétaire de votre
              infrastructure.
            </li>
            <li>
              <strong className="text-white">Récupération des données :</strong>{" "}
              à tout moment, export JSON/CSV gratuit. Suppression définitive sous
              30 jours après résiliation du contrat.
            </li>
            <li>
              <strong className="text-white">Responsabilité civile professionnelle :</strong>{" "}
              Kogrix est couvert par une RC pro (assureur Hiscox France).
              Plafond de garantie communiqué sur demande.
            </li>
          </ul>
        </section>

        {/* Section 7 — Incident & Breach Notification */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-kogrix-400">
            7. Notification d&apos;incidents
          </h2>
          <p className="text-gray-300 mb-3">
            En cas de violation de données personnelles, nous nous engageons à :
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• Notifier la CNIL dans les <strong className="text-white">72 heures</strong> conformément à l&apos;article 33 RGPD.</li>
            <li>• Vous notifier <strong className="text-white">sans délai</strong> par email avec un rapport circonstancié.</li>
            <li>• Mettre en place les mesures correctives et vous tenir informé jusqu&apos;à résolution.</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-kogrix-400/10 to-accent-cyan/10 border border-kogrix-400/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Vous avez des questions sur notre conformité ?
          </h3>
          <p className="text-gray-300 mb-6">
            Nous fournissons sur demande : extrait Kbis, attestation RC pro,
            modèles de DPA, registre des traitements, étude d&apos;impact (DPIA).
          </p>
          <a
            href="mailto:dpo@kogrix.com?subject=Demande%20documentation%20s%C3%A9curit%C3%A9"
            className="inline-block px-6 py-3 rounded-xl bg-kogrix-400 text-dark-900 font-semibold hover:bg-kogrix-300 transition-all"
          >
            Demander la documentation complète
          </a>
        </div>
      </div>
    </div>
  );
}
