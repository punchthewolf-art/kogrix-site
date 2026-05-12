// Serve a vCard 3.0 file that iPhones/Androids open natively
// in "Add to Contacts" prompt.
export const dynamic = "force-static";

export async function GET() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Schindler;Benjamin;;;",
    "FN:Benjamin Schindler",
    "ORG:Kogrix",
    "TITLE:Fondateur",
    "TEL;TYPE=CELL,VOICE:+33743544242",
    "EMAIL;TYPE=WORK:contact@kogrix.com",
    "URL:https://kogrix.com",
    "ADR;TYPE=WORK:;;;Criel-sur-Mer;;76910;France",
    "NOTE:Conseil IA pour pros et particuliers. Diagnostic 45 min gratuit.",
    "END:VCARD",
    "",
  ].join("\r\n");

  return new Response(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Benjamin-Schindler-Kogrix.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
