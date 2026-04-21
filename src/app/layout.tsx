import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KOGRIX — Conseil & Automatisation IA pour PME",
  description: "L'IA qui fait tourner votre entreprise. Automatisez vos taches, liberez votre equipe. Audit, chatbots, automatisation, formation.",
  keywords: "conseil IA, automatisation PME, chatbot entreprise, intelligence artificielle, France",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
