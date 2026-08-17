import { getSmuIndexHtml } from "@/lib/content";

export const metadata = { title: "Deck Cross-Reference — ISO Reference Pack" };

export default function DeckIndexPage() {
  const html = getSmuIndexHtml();
  return (
    <article>
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
